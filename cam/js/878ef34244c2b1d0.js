!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).QhwwPlayer = t()
}(this, function() {
    "use strict";
    var i = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    };
    function n(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    var o = function(e, t, r) {
        return t && n(e.prototype, t),
        r && n(e, r),
        e
    };
    function e(e, t) {
        return e(t = {
            exports: {}
        }, t.exports),
        t.exports
    }
    var r = e(function(t) {
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function n(e) {
            return t.exports = n = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function(e) {
                return r(e)
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : r(e)
            }
            ,
            n(e)
        }
        t.exports = n
    });
    var s = function(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    };
    var u = function(e, t) {
        return !t || "object" !== r(t) && "function" != typeof t ? s(e) : t
    }
      , c = e(function(t) {
        function r(e) {
            return t.exports = r = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            r(e)
        }
        t.exports = r
    })
      , l = e(function(r) {
        function n(e, t) {
            return r.exports = n = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            n(e, t)
        }
        r.exports = n
    });
    var h = function(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        t && l(e, t)
    };
    var f = function(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    };
    var d = {
        DOWNLOADER: "Downloader",
        DECODER: "Decoder",
        RENDERER: "Renderer",
        UI: "UI"
    }
      , P = function() {
        for (var r = {}, e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return t.forEach(function(e, t) {
            r[e] = t
        }),
        r
    }("EMPTY", "AWAIT_INSTALL", "IDLE", "WORKING", "FAILED", "DONE", "PAUSE", "STOP", "KILLED", "ERROR")
      , m = ["none", "cover", "contain"];
    var a = function(e) {
        return !!~Function.toString.call(e).indexOf("[native code]")
    }
      , p = e(function(n) {
        function a(e, t, r) {
            return n.exports = a = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }() ? Reflect.construct : function(e, t, r) {
                var n = [null];
                n.push.apply(n, t);
                var a = new (Function.bind.apply(e, n));
                return r && l(a, r.prototype),
                a
            }
            ,
            a.apply(null, arguments)
        }
        n.exports = a
    })
      , t = e(function(t) {
        function n(e) {
            var r = "function" == typeof Map ? new Map : void 0;
            return t.exports = n = function(e) {
                if (null === e || !a(e))
                    return e;
                if ("function" != typeof e)
                    throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== r) {
                    if (r.has(e))
                        return r.get(e);
                    r.set(e, t)
                }
                function t() {
                    return p(e, arguments, c(this).constructor)
                }
                return t.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                l(t, e)
            }
            ,
            n(e)
        }
        t.exports = n
    });
    var v = function(e) {
        if (Array.isArray(e)) {
            for (var t = 0, r = Array(e.length); t < e.length; t++)
                r[t] = e[t];
            return r
        }
    };
    var y = function(e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
            return Array.from(e)
    };
    var g = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
    };
    var w = function(e) {
        return v(e) || y(e) || g()
    };
    var _ = function(e) {
        if (Array.isArray(e))
            return e
    };
    var b = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    };
    var k = function(e) {
        return _(e) || y(e) || b()
    };
    window.Symbol || (window.Symbol = function(e) {
        return e + "_" + j()
    }
    ),
    Promise.prototype.finally || (Promise.prototype.finally = function(t) {
        function r(e) {
            return Promise.resolve(t(e)).then(function() {
                return e
            })
        }
        return this.then(function(e) {
            return r(e)
        }, function(e) {
            return r(Promise.reject(e))
        })
    }
    );
    var x = "undefined" != typeof window && "Window" === D(window)
      , q = document.createElement("a");
    function he(e) {
        return q.href = e,
        q.href
    }
    function D(e) {
        return Object.prototype.toString.call(e).slice(8, -1)
    }
    var E = {};
    "Array String Function Object Number Boolean Undefined".split(" ").forEach(function(t) {
        E["is" + t] = function(e) {
            return D(e) === t
        }
    });
    var S = E.isArray
      , L = E.isString
      , C = E.isFunction
      , T = E.isObject
      , fe = E.isNumber
      , R = E.isBoolean
      , M = E.isUndefined;
    function F(t) {
        var r = Object.create(null);
        return t && Object.keys(t).forEach(function(e) {
            r[e] = t[e]
        }),
        r
    }
    function O(e) {
        return {
            writable: !0,
            enumerable: !1,
            configurable: !0,
            value: e
        }
    }
    function A(e, t, r) {
        if (L(t))
            Object.defineProperty(e, t, O(r));
        else {
            var n = {};
            Object.keys(t).forEach(function(e) {
                n[e] = O(t[e])
            }),
            Object.defineProperties(e, n)
        }
    }
    function N(e, t, r) {
        return {
            configurable: !1,
            enumerable: !0,
            get: t,
            set: r || function() {
                throw new TypeError('"' + e + '" is read-only!')
            }
        }
    }
    function z() {
        var e = new Date;
        return e.getFullYear() + "-" + (1 + e.getMonth()) + "-" + e.getDate() + " " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds() + "." + e.getMilliseconds()
    }
    function W(t, r, e) {
        var n = k(e)
          , a = n[0]
          , o = n.slice(1);
        if (T(a))
            return Object.keys(a).forEach(function(e) {
                return t.call.apply(t, [r, e, a[e]].concat(w(o)))
            }),
            !0;
        var i = a.split(/\s+/);
        return 1 < i.length && (i.forEach(function(e) {
            return t.call.apply(t, [r, e].concat(w(o)))
        }),
        !0)
    }
    function I(a, o) {
        return function(e) {
            function n(e, t) {
                var r;
                return i(this, n),
                (r = u(this, c(n).call(this, e))).name = a,
                r.code = o,
                r.isError = !0,
                r.target = t,
                r
            }
            return h(n, e),
            n
        }(t(Error))
    }
    var j = Date.now ? Date.now : function() {
        return (new Date).getTime()
    }
    ;
    function U(e) {
        return e < 10 ? "0" + e : e
    }
    function V(e) {
        var t = Math.floor((e = e / 1e3 || 0) / 3600);
        return (t < 1 ? "" : t + ":") + U(Math.floor((e = Math.floor(e % 3600)) / 60)) + ":" + U(e = Math.floor(e % 60))
    }
    function Q(e) {
        return ("" + e).replace(/^[^{]+{/, "").replace(/}$/, "")
    }
    var B = function(e, t) {
        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = c(e)); )
            ;
        return e
    }
      , H = e(function(n) {
        function a(e, t, r) {
            return n.exports = a = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
                var n = B(e, t);
                if (n) {
                    var a = Object.getOwnPropertyDescriptor(n, t);
                    return a.get ? a.get.call(r) : a.value
                }
            }
            ,
            a(e, t, r || e)
        }
        n.exports = a
    });
    var Y = function(e, t) {
        var r = []
          , n = !0
          , a = !1
          , o = void 0;
        try {
            for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value),
            !t || r.length !== t); n = !0)
                ;
        } catch (e) {
            a = !0,
            o = e
        } finally {
            try {
                n || null == s.return || s.return()
            } finally {
                if (a)
                    throw o
            }
        }
        return r
    };
    var K = function(e, t) {
        return _(e) || Y(e, t) || b()
    }
      , G = Symbol("listeners")
      , X = Symbol("context")
      , $ = function() {
        function r() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null
              , t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            if (i(this, r),
            e && !T(e))
                throw Error("EventEmitter context are not Object!");
            this[G] = F(),
            e && (this[X] = e),
            e && t && this.mixEventMethods(e)
        }
        return o(r, [{
            key: "getListenerContainer",
            value: function(e, t) {
                var r = 1 < arguments.length && void 0 !== t && t
                  , n = this[G]
                  , a = n[e] || (n[e] = []);
                if (r) {
                    var o = n["*"];
                    o && 0 < o.length && (a = [].concat(w(o), w(a)));
                    var i = n[e + "@before"];
                    i && (a = [].concat(w(i), w(a)));
                    var s = n[e + "@after"];
                    s && (a = [].concat(w(a), w(s)));
                    var u = n["*@before"];
                    u && (a = [].concat(w(u), w(a)));
                    var l = n["*@after"];
                    l && (a = [].concat(w(a), w(l)))
                }
                return a
            }
        }, {
            key: "mixEventMethods",
            value: function(t) {
                var r = this;
                ["on", "once", "off", "emit", "emitAsync"].forEach(function(e) {
                    t[e] = function() {
                        return r[e].apply(r, arguments),
                        t
                    }
                })
            }
        }, {
            key: "on",
            value: function(n, a, e) {
                var t, r = 2 < arguments.length && void 0 !== e && e, o = this;
                return W(o.on, o, arguments) || (r && (t = function() {
                    o.off(n, a, !0);
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                        t[r] = arguments[r];
                    return a.apply(this, t)
                }
                ),
                o.getListenerContainer(n).push([a, t, r])),
                o
            }
        }, {
            key: "once",
            value: function(e, t) {
                return this.on(e, t, !0)
            }
        }, {
            key: "off",
            value: function(e, r, t) {
                var n = 2 < arguments.length && void 0 !== t && t
                  , a = this;
                if (void 0 === e)
                    return this[G] = F(),
                    a;
                if (W(a.off, a, arguments))
                    return a;
                var o = a.getListenerContainer(e);
                if (r || n) {
                    var i = -1
                      , s = n ? function(e) {
                        var t = K(e, 3);
                        return t[2] && (!r || t[0] === r)
                    }
                    : function(e) {
                        return K(e, 1)[0] === r
                    }
                    ;
                    o.find(function(e, t) {
                        if (s(e))
                            return i = t,
                            !0
                    }),
                    -1 !== i && o.splice(i, 1)
                } else
                    o.length = 0;
                return a
            }
        }, {
            key: "emit",
            value: function(e, t, r) {
                var n = this[X] || this
                  , a = Object.assign(F(), {
                    type: e,
                    data: t
                })
                  , o = {
                    context: n
                };
                return r && (o.target = r),
                A(a, o),
                this.getListenerContainer(e, !0).some(function(e) {
                    var t = K(e, 2);
                    return !1 === (t[1] || t[0]).call(n, a)
                }),
                this
            }
        }, {
            key: "asyncEmit",
            value: function(t, r, n) {
                var c = this;
                return new Promise(function(a, o) {
                    var i = c[X] || c
                      , s = Object.assign(F(), {
                        type: t,
                        data: r
                    })
                      , e = {
                        context: i
                    };
                    n && (e.target = n),
                    A(s, e);
                    var u = c.getListenerContainer(t, !0)
                      , l = 0;
                    !function t(e) {
                        var r = u[l];
                        if (!r)
                            return a(e);
                        var n = r[1] || r[0];
                        (function(e) {
                            try {
                                var t = e();
                                return t && t.constructor && t.constructor === Promise ? t : Promise.resolve(t)
                            } catch (e) {
                                return Promise.reject(e)
                            }
                        }
                        )(function() {
                            return n.call(i, s)
                        }).then(function(e) {
                            if (!1 === e)
                                return o("preventDefault");
                            l++,
                            t(e)
                        }, o)
                    }("empty")
                }
                )
            }
        }, {
            key: "clearEventListeners",
            value: function() {
                this[G] = F()
            }
        }]),
        r
    }();
    function J(e, t) {
        try {
            var r = t.before;
            delete t.before,
            r && (e = (C(r) ? Q(r) : r) + "\n\n" + e);
            var n = t.after;
            delete t.after,
            n && (e += "\n\n" + (C(n) ? Q(n) : n));
            var a = t.globalArgs;
            if (delete t.globalArgs,
            T(a)) {
                var o = "";
                Object.keys(a).forEach(function(e) {
                    o += "self[" + JSON.stringify(e) + "] = " + JSON.stringify(a[e]) + "; \n"
                }),
                e = o + e
            }
            return function(e, t) {
                try {
                    var n = window.URL
                      , r = n.createObjectURL(e)
                      , a = new Worker(r,t);
                    a._blobUrl = r;
                    var o = a.terminate;
                    return a.terminate = function() {
                        n.revokeObjectURL(this._blobUrl);
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                            t[r] = arguments[r];
                        o.apply(this, t)
                    }
                    ,
                    Promise.resolve(a)
                } catch (e) {
                    return Promise.reject(e)
                }
            }(new Blob([e],{
                type: "application/javascript"
            }), t)
        } catch (e) {
            return Promise.reject(e)
        }
    }
    var Z = function() {
        function n() {
            i(this, n),
            f(this, "ready", !1);
            this.killed = 0,
            this._idx = 0,
            this.queue = {},
            this.cmdCache = []
        }
        return o(n, [{
            key: "_runCmdCache",
            value: function(o) {
                var i = this
                  , s = i.cmdCache;
                if (0 !== s.length) {
                    !function e() {
                        if (0 !== s.length) {
                            var t = s.shift()
                              , r = K(t, 3)
                              , n = r[1]
                              , a = r[2];
                            void 0 === o ? i.emit.apply(i, w(r[0])).then(n, a).finally(e) : a(o)
                        }
                    }()
                }
            }
        }, {
            key: "init",
            value: function(e, t) {
                var r = 1 < arguments.length && void 0 !== t ? t : {}
                  , s = this
                  , o = r.methods || {};
                delete r.methods;
                var u = r.onPassiveMsg || function(e, t, r) {
                    var n = e || {}
                      , a = n.type;
                    a && o[a] ? o[a](n.data) : console.warn("onPassiveMsg 未处理的worker发回信息:", r)
                }
                ;
                return delete r.onPassiveMsg,
                new Promise(function(i, t) {
                    r.before = n.before,
                    r.after = n.after,
                    (C(e) ? function(e, t) {
                        if (!C(e))
                            throw Error("createWorkerByFun 的第一个参数不是一个 function 。");
                        return J(Q(e), t)
                    }(e, r) : J(e, r)).then(function(a) {
                        var o = s.queue;
                        a.onmessage = function() {
                            if (!s.killed) {
                                var e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).data || {}
                                  , t = e.res
                                  , r = e.ok
                                  , n = e._id;
                                return "ready by PromiseWorker.after" === t ? (s.ready = !0,
                                s._runCmdCache(),
                                i(a)) : n && o[n] ? (o[n][1 == +r ? "resolve" : "reject"](t),
                                void delete o[n]) : void (u ? u(t, r, e) : console.warn("[PromiseWorker] Unprocessed messages: ", e))
                            }
                        }
                        ,
                        s.worker = a
                    }).catch(function(e) {
                        s._runCmdCache(e),
                        t(e)
                    })
                }
                )
            }
        }, {
            key: "emit",
            value: function(r, n) {
                for (var e = arguments.length, a = Array(2 < e ? e - 2 : 0), t = 2; t < e; t++)
                    a[t - 2] = arguments[t];
                var o = this;
                return o.ready ? this.postMsg.apply(this, [{
                    type: r,
                    data: n
                }].concat(a)) : new Promise(function(e, t) {
                    o.cmdCache.push([[r, n].concat(a), e, t])
                }
                )
            }
        }, {
            key: "postMsg",
            value: function(a) {
                for (var e = arguments.length, o = Array(1 < e ? e - 1 : 0), t = 1; t < e; t++)
                    o[t - 1] = arguments[t];
                var i = this
                  , s = i.queue;
                return new Promise(function(e, t) {
                    var r = i.worker;
                    i._idx++;
                    var n = i._idx.toString(36);
                    try {
                        r.postMessage({
                            _id: n,
                            req: a
                        }, o),
                        s[n] = {
                            req: a,
                            resolve: e,
                            reject: t,
                            _t: +new Date
                        }
                    } catch (e) {
                        t(e)
                    }
                }
                )
            }
        }, {
            key: "remove",
            value: function(n) {
                var a = this.queue;
                return Object.keys(a).forEach(function(e) {
                    var t = a[e]
                      , r = t.reject;
                    n(t.req, t._t) && (r("Abort by remove."),
                    delete a[e])
                }),
                this
            }
        }, {
            key: "terminate",
            value: function() {
                var e = this;
                e.worker && (e._idx = 0,
                e.queue = {},
                e.killed = 1,
                e.worker.terminate())
            }
        }]),
        n
    }();
    f(Z, "before", function() {
        self.onMsgPromise = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
              , t = 2 < arguments.length ? arguments[2] : void 0
              , r = e.type
              , n = self.methods;
            n && n[r] ? n[r](e.data, 1 < arguments.length ? arguments[1] : void 0, t) : t("[worker_fetch] 未知的webWork消息类型: " + JSON.stringify(e))
        }
        ,
        self.emit = function(e, t) {
            for (var r, n = arguments.length, a = Array(2 < n ? n - 2 : 0), o = 2; o < n; o++)
                a[o - 2] = arguments[o];
            return (r = self).postMsg.apply(r, [{
                type: e,
                data: t
            }, 1, void 0].concat(a))
        }
        ,
        self.postMsg = function(t) {
            for (var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1, r = 2 < arguments.length ? arguments[2] : void 0, n = arguments.length, a = Array(3 < n ? n - 3 : 0), o = 3; o < n; o++)
                a[o - 3] = arguments[o];
            try {
                self.postMessage({
                    res: t,
                    ok: e,
                    _id: r
                }, a)
            } catch (e) {
                console.warn(e, t, a)
            }
        }
        ,
        self.onmessage = function() {
            var e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).data || {}
              , o = e._id;
            self.onMsgPromise(e.req, function(e) {
                for (var t, r = arguments.length, n = Array(1 < r ? r - 1 : 0), a = 1; a < r; a++)
                    n[a - 1] = arguments[a];
                return (t = self).postMsg.apply(t, [e, 1, o].concat(n))
            }, function(e) {
                for (var t, r = arguments.length, n = Array(1 < r ? r - 1 : 0), a = 1; a < r; a++)
                    n[a - 1] = arguments[a];
                return (t = self).postMsg.apply(t, [e, 0, o].concat(n))
            })
        }
        ,
        self.mergeBuffer = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : []
              , t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
            if (1 === e.length)
                return e[0];
            t = t || e.reduce(function(e, t) {
                return e + t.byteLength
            }, 0);
            var r = new Uint8Array(t)
              , n = 0;
            return e.forEach(function(e) {
                r.set(new Uint8Array(e), n),
                n += e.byteLength
            }),
            r.buffer
        }
    }),
    f(Z, "after", function() {
        self.postMsg("ready by PromiseWorker.after")
    });
    var ee = Symbol("data_listeners")
      , te = Symbol("mod_manager")
      , re = Symbol("status")
      , ne = Symbol("error")
      , ae = function() {
        function r() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            i(this, r);
            var t = this;
            A(t, e),
            t[te] = null,
            t[re] = P.EMPTY,
            t[ne] = I((t.constructor.modName || "Mod") + "Error", -108)
        }
        return o(r, [{
            key: "setPlayerProps",
            value: function(e, t) {
                var r = this[te];
                r && r.setPlayerProps(e, t)
            }
        }, {
            key: "getPlayerProps",
            value: function(e) {
                var t = this[te];
                return t ? t.getPlayerProps(e) : e ? void 0 : {}
            }
        }, {
            key: "_install",
            value: function(e) {
                return this[te] ? Promise.reject("The " + this.constructor.modName + " has been installed to another Player instance!") : (this[te] = e,
                this.status = P.AWAIT_INSTALL,
                Promise.resolve("ModBase install ok."))
            }
        }, {
            key: "createPromiseWorker",
            value: function(e, t) {
                var r = this
                  , n = r.constructor.modName;
                return r._worker ? Promise.resolve("[" + n + "] Repeatedly create workers.") : (r._worker = new Z).init(e, t).then(function() {
                    return r.status = P.IDLE,
                    "[" + n + "] Create PromiseWorker successful."
                }, function(e) {
                    throw r.status = P.ERROR,
                    new r[ne]("[" + n + "] Create PromiseWorker failed! ErrInfo:" + (e && e.stack || e),r)
                })
            }
        }, {
            key: "destroyWorker",
            value: function() {
                var e = this._worker;
                e && (e.terminate(),
                this._worker = null)
            }
        }, {
            key: "callWorker",
            value: function(e, t) {
                var r = this.constructor.modName;
                if (this.status === P.ERROR)
                    return Promise.reject(r + " is ERROR!");
                var n = this._worker;
                if (!n)
                    return Promise.reject(r + " doesn't implement webWorker!");
                for (var a = arguments.length, o = Array(2 < a ? a - 2 : 0), i = 2; i < a; i++)
                    o[i - 2] = arguments[i];
                return n.emit.apply(n, [e, t].concat(o))
            }
        }, {
            key: "mod",
            value: function(e) {
                var t = this[te];
                return t && t.mod(e)
            }
        }, {
            key: "emit",
            value: function(e, t) {
                var r = this[te];
                r && r.emit(e + "." + this.constructor.modName, t, this)
            }
        }, {
            key: "emitError",
            value: function(e) {
                var t = this[te];
                t && t.emitError(e, this)
            }
        }, {
            key: "listener",
            value: function(r, n) {
                var a = this
                  , e = a[te];
                if (e && r) {
                    var o = a[ee] || (a[ee] = {})
                      , i = a.constructor.modName;
                    Object.keys(r).forEach(function(e) {
                        var t = e;
                        if (n && (t += "." + n),
                        o[t])
                            throw new a[ne]("listener 中重复设置了对'" + t + "'的监听，只应该调用一次！这个问题应该由'" + i + "'模组开发者解决。");
                        o[t] = r[e]
                    }),
                    e.on(o)
                }
            }
        }, {
            key: "unlistener",
            value: function() {
                var e = this[te]
                  , t = this[ee];
                e && t && (e.off(t),
                delete this[ee])
            }
        }, {
            key: "uninstall",
            value: function() {
                var e = this;
                return e.unlistener(),
                e.destroyWorker(),
                delete e[te],
                e.status = e.KILLED,
                Promise.resolve("ModBase uninstall ok.")
            }
        }, {
            key: "status",
            set: function(e) {
                this[re] = e
            },
            get: function() {
                return this[re]
            }
        }]),
        r
    }();
    f(ae, "modName", "BaseMod");
    var oe = {}
      , ie = x ? document.createElement("div") : {}
      , se = "innerText";
    "textContent"in ie && (se = "textContent");
    var ue = Array.prototype;
    var le = !1;
    try {
        var ce = Object.defineProperty({}, "passive", {
            get: function() {
                le = !0
            }
        });
        x && window.addEventListener("test", null, ce)
    } catch (e) {
        console.error(e)
    }
    function de(e, t) {
        return (e.currentStyle || document.defaultView.getComputedStyle(e, null))[t] || e.style[t]
    }
    function me(e, t, r) {
        if (T(t))
            for (var n in t)
                me(e, n, t[n]);
        else
            e.style[t] = r
    }
    function pe(e, t, r) {
        var n = 1 < arguments.length && void 0 !== t ? t : document
          , a = 2 < arguments.length ? r : void 0
          , o = n.querySelectorAll(e);
        return a ? Array.from(o) : o
    }
    var ve = function() {
        function n(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document;
            i(this, n);
            var r;
            A(this, "selector", e),
            r = e && e.constructor === NodeList ? Array.from(e) : S(e) ? e : L(e) ? e.indexOf("<") ? pe(e, t, !0) : (ie.innerHTML = e,
            pe("*", ie, !0)) : [e],
            Object.assign(this, r),
            this.length = r.length
        }
        return o(n, [{
            key: "each",
            value: function() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                    t[r] = arguments[r];
                return ue.forEach.apply(this, t),
                this
            }
        }, {
            key: "push",
            value: function() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                    t[r] = arguments[r];
                return ue.push.apply(this, t),
                this
            }
        }, {
            key: "splice",
            value: function() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                    t[r] = arguments[r];
                return ye(ue.splice.apply(this, t))
            }
        }, {
            key: "find",
            value: function(t) {
                var r = [];
                this.each(function(e) {
                    r = r.concat(pe(t, e, !0))
                });
                var e = ye(r);
                return e.parent = this,
                e.selector = t,
                e
            }
        }, {
            key: "append",
            value: function(e) {
                var t = ye(e)
                  , r = this[0];
                return t.each(function(e) {
                    return r.appendChild(e)
                }),
                this
            }
        }, {
            key: "appendTo",
            value: function(e) {
                return ye(e).append(this),
                this
            }
        }, {
            key: "text",
            value: function(t) {
                return 0 === arguments.length ? this[0][se] : this.each(function(e) {
                    e[se] = t
                })
            }
        }, {
            key: "val",
            value: function(t) {
                return 0 === arguments.length ? this[0].value : this.each(function(e) {
                    e.value = t
                })
            }
        }, {
            key: "html",
            value: function(t) {
                return 0 === arguments.length ? this[0].innerHTML : this.each(function(e) {
                    e.innerHTML = t
                })
            }
        }, {
            key: "attr",
            value: function(t, r) {
                return 1 === arguments.length ? function(e, t) {
                    return e.getAttribute(t)
                }(this[0], t) : this.each(function(e) {
                    return function(e, t, r) {
                        void 0 === r ? e.removeAttribute(t) : e.setAttribute(t, r)
                    }(e, t, r)
                })
            }
        }, {
            key: "data",
            value: function(t, r) {
                return 0 === arguments.length ? this[0].dataset || {} : 1 === arguments.length ? (this[0].dataset || {})[t] : this.each(function(e) {
                    (e.dataset || (e.dataset = {}))[t] = r
                })
            }
        }, {
            key: "css",
            value: function(t, r) {
                return 1 !== arguments.length || T(t) ? this.each(function(e) {
                    return me(e, t, r)
                }) : de(this[0], t)
            }
        }, {
            key: "hide",
            value: function() {
                return this.each(function(e) {
                    return me(e, "display", "none")
                })
            }
        }, {
            key: "show",
            value: function() {
                var a = "display";
                return this.each(function(e) {
                    var t = e.tagName;
                    if (!oe[t]) {
                        var r = de(e, a);
                        if ("" === r || "none" === r) {
                            var n = ye("<" + t + "></" + t + ">").appendTo(document.body);
                            r = n.css(a),
                            n.remove()
                        }
                        oe[t] = r
                    }
                    me(e, a, oe[e.tagName])
                })
            }
        }, {
            key: "addClass",
            value: function(t) {
                return this.each(function(e) {
                    return function(t, e) {
                        if (e = e && e.trim()) {
                            var r = e.split(/\s+/);
                            if (t.classList)
                                r.forEach(function(e) {
                                    return t.classList.add(e)
                                });
                            else {
                                var n = " ".concat(t.className || "", " ");
                                r.forEach(function(e) {
                                    ~n.indexOf(" ".concat(e, " ")) || (n += " " + e)
                                }),
                                t.className = n.trim()
                            }
                        }
                    }(e, t)
                })
            }
        }, {
            key: "removeClass",
            value: function(t) {
                return this.each(function(e) {
                    return function(t, e) {
                        if (e = e && e.trim()) {
                            var r = e.split(/\s+/);
                            if (t.classList)
                                r.forEach(function(e) {
                                    return t.classList.remove(e)
                                });
                            else {
                                var n = " ".concat(t.className, " ");
                                r.forEach(function(e) {
                                    for (var t = " " + e + " "; ~n.indexOf(t); )
                                        n = n.replace(t, " ")
                                }),
                                t.className = n.trim()
                            }
                        }
                    }(e, t)
                })
            }
        }, {
            key: "hasClass",
            value: function(e) {
                return function(e, t) {
                    return RegExp("(?:^|\\s)" + t + "(?=\\s|$)").test(e.className)
                }(this[0], e)
            }
        }, {
            key: "on",
            value: function(e, r, t, n) {
                var a = 2 < arguments.length && void 0 !== t && t
                  , o = 3 < arguments.length && void 0 !== n && n;
                return this.each(function(t) {
                    e.split(" ").forEach(function(e) {
                        return function(e, t, r, n) {
                            var a = 3 < arguments.length && void 0 !== n && n;
                            void 0 !== a && !R(a) && le && (a = {
                                passive: !0
                            }),
                            e.addEventListener(t, r, a)
                        }(t, e, r, a, o)
                    })
                })
            }
        }, {
            key: "off",
            value: function(e, r, t, n) {
                var a = 2 < arguments.length && void 0 !== t && t
                  , o = 3 < arguments.length && void 0 !== n && n;
                return this.each(function(t) {
                    e.split(" ").forEach(function(e) {
                        return function(e, t, r, n) {
                            var a = 3 < arguments.length && void 0 !== n && n;
                            void 0 !== a && !R(a) && le && (a = {
                                passive: !0
                            }),
                            e.removeEventListener(t, r, a)
                        }(t, e, r, a, o)
                    })
                })
            }
        }, {
            key: "remove",
            value: function() {
                return this.each(function(e) {
                    return function(e) {
                        e.parentNode.removeChild(e)
                    }(e)
                })
            }
        }, {
            key: "fullscreen",
            value: function() {
                var e, t = this[0];
                return t && (e = t.requestFullscreen ? t.requestFullscreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.msRequestFullscreen ? t.msRequestFullscreen() : Promise.reject("当前浏览器不支持全屏操作！")),
                e
            }
        }, {
            key: "unfullscreen",
            value: function() {
                if (!this.isFullscreen())
                    return Promise.resolve("notFullscreen");
                var e = document;
                return e.exitFullscreen ? e.exitFullscreen() : e.webkitExitFullscreen ? e.webkitExitFullscreen() : e.webkitCancelFullScreen ? e.webkitCancelFullScreen() : e.mozCancelFullScreen ? e.mozCancelFullScreen() : e.msExitFullscreen ? e.msExitFullscreen() : Promise.reject("当前浏览器不支持全屏操作！")
            }
        }, {
            key: "isFullscreen",
            value: function() {
                var e = document;
                return this[0] === (e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement)
            }
        }]),
        n
    }();
    function ye(e, t) {
        return e.constructor === ve ? e : new ve(e,t)
    }
    window._$ = ye;
    !function(e, t) {
        void 0 === t && (t = {});
        var r = t.insertAt;
        if (e && "undefined" != typeof document) {
            var n = document.head || document.getElementsByTagName("head")[0]
              , a = document.createElement("style");
            a.type = "text/css",
            "top" === r && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a),
            a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e))
        }
    }('.qhww-player-container{background-color:#ececec;position:relative;width:720px;height:400px;overflow:hidden;font-family:Helvetica,Arial,sans-serif}.qhww-player-container.qhww-status-fullscreened{background-color:#000;width:100%;height:100%}.qhww-player-container .qhww-canvas-wrap{display:flex;width:100%;height:100%;align-items:center;justify-content:center;background-size:cover}.qhww-player-container .qhww-canvas-wrap canvas{display:block;margin:0 auto;background-color:transparent}.qhww-player-container .qhww-controlbar{position:absolute;bottom:0;left:0;right:0;line-height:45px;background:rgba(0,0,0,.13333);background:-webkit-gradient(linear,0 0,0 100%,from(transparent),to(rgba(0,0,0,.4)));-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.3}.qhww-player-container .qhww-controlbar .qhww-left-wrap{display:inline-block}@media screen and (max-width:570px){.qhww-player-container .qhww-controlbar .qhww-left-wrap{transform:scale(.8) translate(-25px)}}@media screen and (max-width:460px){.qhww-player-container .qhww-controlbar .qhww-left-wrap{transform:scale(.6) translate(-30px)}}@media screen and (max-width:370px){.qhww-player-container .qhww-controlbar .qhww-left-wrap{transform:scale(.5) translate(-45px)}}.qhww-player-container .qhww-controlbar .qhww-right-wrap{position:absolute;bottom:0;right:20px;white-space:nowrap}@media screen and (max-width:570px){.qhww-player-container .qhww-controlbar .qhww-right-wrap{transform:scale(.8) translate(55px)}}@media screen and (max-width:460px){.qhww-player-container .qhww-controlbar .qhww-right-wrap{transform:scale(.6) translate(130px)}}@media screen and (max-width:370px){.qhww-player-container .qhww-controlbar .qhww-right-wrap{transform:scale(.5) translate(190px)}}.qhww-player-container .qhww-controlbar input[type=range]{-webkit-appearance:none;vertical-align:middle;width:90px;margin-right:20px;outline:0;border-radius:2px;background-color:transparent}.qhww-player-container .qhww-controlbar input[type=range]::-moz-focus-outer{border:0}.qhww-player-container .qhww-controlbar input[type=range]::-webkit-slider-runnable-track{-webkit-appearance:none;height:4px;border-radius:2px;background-color:#fff;border:0;cursor:pointer}.qhww-player-container .qhww-controlbar input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;transform:translateY(-40%);border-radius:50%;background-color:#fff;width:17px;height:17px;border:0;box-shadow:0 0 2px #000}.qhww-player-container .qhww-controlbar input[type=range]:hover::-webkit-slider-thumb{background-color:#fff1f1}.qhww-player-container .qhww-controlbar input[type=range]::-moz-range-track{height:4px;background-color:#fff;border:0;border-radius:2px;cursor:pointer}.qhww-player-container .qhww-controlbar input[type=range]::-moz-range-thumb{position:absolute;width:17px;height:17px;background-color:#fff;border-radius:50%;border:0;box-shadow:0 0 2px #000}.qhww-player-container .qhww-controlbar input[type=range]:hover::-moz-range-thumb{background-color:#fff1f1}.qhww-player-container .qhww-controlbar input[type=range]::-ms-track{height:4px;border-radius:0;background-color:#fff;border:0;cursor:pointer}.qhww-player-container .qhww-controlbar input[type=range]::-ms-thumb{margin-top:14px}.qhww-player-container .qhww-controlbar input[type=range]:hover::-ms-thumb{background-color:#fff1f1}.qhww-player-container .qhww-controlbar input.qhww-ipt-progress[type=range]{position:absolute;transform:translateY(-62%);left:0;width:100%;margin:0;border-radius:0;background:transparent}.qhww-player-container .qhww-controlbar input.qhww-ipt-progress[type=range]::-webkit-slider-thumb{background-color:#fff;width:16px;height:10px;transform:translateY(-3px);border-radius:3px;box-shadow:0 0 3px rgba(0,0,0,.31373);border:1px solid #fff}.qhww-player-container .qhww-controlbar input.qhww-ipt-progress[type=range]::-webkit-slider-thumb:hover{background-color:#fff1f1}.qhww-player-container .qhww-controlbar input.qhww-ipt-progress[type=range]::-webkit-slider-runnable-track{background-color:rgba(255,198,198,.6);border-radius:0;box-shadow:0 0 2px hsla(0,0%,100%,.14)}.qhww-player-container .qhww-controlbar input.qhww-ipt-progress[type=range]:hover::-webkit-slider-runnable-track{background-color:#dcadad}.qhww-player-container .qhww-controlbar input.qhww-ipt-progress[type=range]::-moz-range-track{height:4px;background-color:rgba(255,198,198,.6);border-radius:0;box-shadow:0 0 2px hsla(0,0%,100%,.14)}.qhww-player-container .qhww-controlbar input.qhww-ipt-progress[type=range]::-moz-range-thumb{background-color:#fff;width:16px;height:10px;border-radius:3px;box-shadow:0 0 3px rgba(0,0,0,.31373);border:1px solid #fff}.qhww-player-container .qhww-controlbar input.qhww-ipt-progress[type=range]:hover::-moz-range-track{background-color:#dcadad}.qhww-player-container .qhww-controlbar input.qhww-ipt-progress[type=range]::-ms-track{height:4px;background-color:rgba(255,198,198,.6);border-radius:0;box-shadow:0 0 2px hsla(0,0%,100%,.14)}.qhww-player-container .qhww-controlbar input.qhww-ipt-progress[type=range]::-ms-thumb{margin-top:5px}.qhww-player-container .qhww-controlbar input.qhww-ipt-progress[type=range]:hover::-ms-track{background-color:#dcadad}.qhww-player-container .qhww-controlbar .qhww-btn-play{margin-left:20px;cursor:pointer;overflow:hidden;display:inline-block;vertical-align:middle;width:0;height:0;border-left:12.5px solid transparent;border-color:transparent transparent transparent #fff;border-style:solid;border-width:12.5px 0 12.5px 25px}.qhww-player-container .qhww-controlbar .qhww-btn-play:hover{border-left-color:#fff1f1}.qhww-status-play.qhww-player-container .qhww-controlbar .qhww-btn-play{display:none}.qhww-player-container .qhww-controlbar .qhww-btn-pause{margin-left:20px;cursor:pointer;overflow:hidden;display:inline-block;vertical-align:middle;width:7px;height:25px;border:15px solid #fff;border-width:0 9px}.qhww-player-container .qhww-controlbar .qhww-btn-pause:hover{border-color:#fff1f1}.qhww-status-pause.qhww-player-container .qhww-controlbar .qhww-btn-pause,.qhww-status-stop.qhww-player-container .qhww-controlbar .qhww-btn-pause{display:none}.qhww-player-container .qhww-controlbar .qhww-btn-stop{margin-left:20px;cursor:pointer;overflow:hidden;display:inline-block;vertical-align:middle;width:25px;height:25px;background-color:#fff}.qhww-player-container .qhww-controlbar .qhww-btn-stop:hover{background-color:#fff1f1}.qhww-status-stop.qhww-player-container .qhww-controlbar .qhww-btn-stop{display:none}.qhww-player-container .qhww-controlbar .qhww-time-wrap{font-size:14px;color:#fff;text-shadow:0 0 2px #000;padding:0 0 0 10px}.qhww-player-container .qhww-controlbar .qhww-time-wrap .qhww-time-duration:before{content:"/";padding:0 3px}.qhww-player-container .qhww-controlbar .qhww-rate-box{color:#fff;opacity:.7;margin-right:20px}.qhww-player-container .qhww-controlbar .qhww-rate-box span{vertical-align:middle}.qhww-player-container .qhww-controlbar .qhww-rate-box input[type=range]{margin-right:0}.qhww-player-container .qhww-controlbar .qhww-rate-box .qhww-rate-val{font-size:14px}.qhww-player-container .qhww-controlbar .qhww-rate-box .qhww-rate-val:after{content:"x";margin-left:3px}.qhww-player-container .qhww-controlbar .qhww-btn-mute{cursor:pointer;overflow:hidden;display:inline-block;vertical-align:middle;width:25px;height:25px}.qhww-player-container .qhww-controlbar .qhww-btn-mute svg{vertical-align:top;fill:#fff;width:25px;height:25px}.qhww-player-container .qhww-controlbar .qhww-btn-mute svg path:first-child{display:none}.qhww-status-muted.qhww-player-container .qhww-controlbar .qhww-btn-mute svg path:first-child{display:inline}.qhww-status-muted.qhww-player-container .qhww-controlbar .qhww-btn-mute svg path:last-child{display:none}.qhww-player-container .qhww-controlbar .qhww-btn-mute:hover svg{fill:#fff1f1}.qhww-player-container .qhww-controlbar .qhww-btn-fullscreen{cursor:pointer;overflow:hidden;display:inline-block;vertical-align:middle;width:25px;height:25px}.qhww-player-container .qhww-controlbar .qhww-btn-fullscreen svg{vertical-align:top;fill:#fff;width:25px;height:25px}.qhww-player-container .qhww-controlbar .qhww-btn-fullscreen svg path:last-child{display:none}.qhww-status-fullscreened.qhww-player-container .qhww-controlbar .qhww-btn-fullscreen svg path:last-child{display:inline}.qhww-status-fullscreened.qhww-player-container .qhww-controlbar .qhww-btn-fullscreen svg path:first-child{display:none}.qhww-player-container .qhww-controlbar .qhww-btn-fullscreen:hover svg{fill:#fff1f1}.qhww-player-container:hover .qhww-controlbar{opacity:1;background:rgba(0,0,0,.4)}.qhww-player-container:hover .qhww-controlbar .qhww-ipt-progress[type=range]::-webkit-slider-runnable-track{background-color:rgba(239,179,179,.65)}.qhww-player-container:hover .qhww-controlbar .qhww-ipt-progress[type=range]::-moz-range-track{background-color:rgba(239,179,179,.65)}.qhww-player-container.qhww-status-loading:before{content:"loading...";position:absolute;top:50%;left:50%;width:1em;height:1em;transform:translate(-.5em,-1em);opacity:.6;text-indent:-1.5em;color:#fff;font-size:16px;font-weight:200;font-family:arial;text-shadow:1px 1px 0 #000;border-radius:50%;-webkit-animation:qhww_loading_kf 1.3s linear infinite;animation:qhww_loading_kf 1.3s linear infinite}@-webkit-keyframes qhww_loading_kf{0%,to{box-shadow:0 -3em 0 .2em,2em -2em 0 0,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 0}12.5%{box-shadow:0 -3em 0 0,2em -2em 0 .2em,3em 0 0 0,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}25%{box-shadow:0 -3em 0 -.5em,2em -2em 0 0,3em 0 0 .2em,2em 2em 0 0,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}37.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 0,2em 2em 0 .2em,0 3em 0 0,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}50%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 0,0 3em 0 .2em,-2em 2em 0 0,-3em 0 0 -1em,-2em -2em 0 -1em}62.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 0,-2em 2em 0 .2em,-3em 0 0 0,-2em -2em 0 -1em}75%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0 0 .2em,-2em -2em 0 0}87.5%{box-shadow:0 -3em 0 0,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0 0 0,-2em -2em 0 .2em}}@keyframes qhww_loading_kf{0%,to{box-shadow:0 -3em 0 .2em,2em -2em 0 0,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 0}12.5%{box-shadow:0 -3em 0 0,2em -2em 0 .2em,3em 0 0 0,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}25%{box-shadow:0 -3em 0 -.5em,2em -2em 0 0,3em 0 0 .2em,2em 2em 0 0,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}37.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 0,2em 2em 0 .2em,0 3em 0 0,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}50%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 0,0 3em 0 .2em,-2em 2em 0 0,-3em 0 0 -1em,-2em -2em 0 -1em}62.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 0,-2em 2em 0 .2em,-3em 0 0 0,-2em -2em 0 -1em}75%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0 0 .2em,-2em -2em 0 0}87.5%{box-shadow:0 -3em 0 0,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0 0 0,-2em -2em 0 .2em}}.qhww-player-container .qhww-log-panel{position:absolute;top:50%;left:50%;transform:translate(-50%,-100%);z-index:3;opacity:.8;display:none}.qhww-player-container .qhww-log-panel .qhww-log-close{position:absolute;right:-10px;top:-10px;background:#f3f3f3;box-shadow:0 0 2px #000;text-shadow:.5px 0 0 #fff;font-size:16px;width:16px;height:16px;line-height:15px;text-align:center;text-decoration:none;color:#ce6f6f;border-radius:50%;font-weight:300}.qhww-player-container .qhww-log-panel .qhww-log-close:hover{background:#fff9c2;color:#f55130;box-shadow:0 0 2px red;text-shadow:0 0 0}.qhww-player-container .qhww-log-panel .qhww-log-body{color:#f44336;text-shadow:0 0 3px #fff;font-size:14px;padding:5px 8px;background:#e4dba2;border-radius:5px;box-shadow:0 1px 3px rgba(0,0,0,.3)}');
    var ge = d.UI
      , we = d.DECODER
      , _e = d.DOWNLOADER
      , be = d.RENDERER
      , ke = Symbol("def_cls")
      , Pe = Symbol("def_html")
      , xe = function() {
        function t() {
            var e;
            return i(this, t),
            e = u(this, c(t).call(this, {
                container: null,
                canvas: null
            })),
            f(s(e), "_dom_evts", []),
            e
        }
        return h(t, ae),
        o(t, [{
            key: "install",
            value: function(e) {
                var t = this
                  , r = t.getPlayerProps("container")
                  , n = ye(r);
                if (0 === n.length)
                    return t.status = P.ERROR,
                    Promise.reject("[UI.install] Missing the necessary 'options.container' parameters!");
                0 === n.find(".qhww-canvas-wrap").length && 0 === n.find(".qhww-controlbar").length && (n[ke] = n.attr("class"),
                n[Pe] = n.html(),
                n.addClass("qhww-player-container qhww-status-stop").html('  \x3c!-- \n  基础UI模板：\n  容器将被自动追加 classNames: qhww-player-container qhww-status-stop qhww-status-fullscreened ..\n  --\x3e\n  <div class="qhww-log-panel">\n    <a class="qhww-log-close" href="#close">×</a>\n    <div class="qhww-log-body">empty</div>\n  </div>\n  <div class="qhww-canvas-wrap"><canvas></canvas></div>\n  <div class="qhww-controlbar">\n    <input class="qhww-ipt-progress" type="range" value="0" step="1" max="0" min="0">\n    <span class="qhww-left-wrap">\n      <span class="qhww-btn-play"></span>\n      <span class="qhww-btn-pause"></span>\n      <span class="qhww-btn-stop"></span>\n      <span class="qhww-time-wrap">\n        <span class="qhww-time-current">00:00</span><span class="qhww-time-duration">00:00</span>\n      </span>\n    </span>\n    <span class="qhww-right-wrap">\n      <span class="qhww-rate-box">\n        <span class="qhww-rate-tit">倍速</span>\n        <input class="qhww-btn-rate" type="range" value="1" step="0.01" max="2" min="0.25">\n        <span class="qhww-rate-val">1</span>\n      </span>\n      <span class="qhww-btn-mute">\n        <svg viewBox="3 4 18 16">\n          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />\n          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />\n        </svg>\n      </span>\n      <input class="qhww-btn-volume" type="range" step="0.01" max="1">\n      <span class="qhww-btn-fullscreen">\n        <svg viewBox="5 5 14 14">\n          <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />\n          <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />\n        </svg>\n      </span>\n    </span>\n  </div>')),
                t.container = n,
                t.setPlayerProps("container", n);
                var a = n.find("canvas")[0];
                if (!a) {
                    a = document.createElement("canvas");
                    var o = n.find(".qhww-canvas-wrap");
                    0 === o.length && (o = r),
                    o.append(a)
                }
                return a ? (t.canvas = a,
                t.setPlayerProps("canvas", a),
                t.initDomEvt(e),
                t.listener(),
                t.status = P.IDLE,
                Promise.resolve("[" + ge + "] installed.")) : (t.status = P.ERROR,
                Promise.reject("[UI.install] Parameter 'options.canvas' is not of type 'HTMLCanvasElement'.!"))
            }
        }, {
            key: "showLog",
            value: function(e) {
                var t = this
                  , r = t._logPanel
                  , n = t._logEl
                  , a = t.container;
                n || (r = t._logPanel = a.find(".qhww-log-panel"),
                n = t._logEl = r.find(".qhww-log-body"),
                t.bindDomEvt(r.find(".qhww-log-close"), "click", function(e) {
                    r.hide(),
                    e && e.preventDefault && e.preventDefault()
                })),
                n.text(e),
                r.show(),
                a.removeClass("qhww-status-loading")
            }
        }, {
            key: "switchStatus",
            value: function(e) {
                var t = "qhww-status-"
                  , r = t + "play " + t + "pause " + t + "stop "
                  , n = t + e + " ";
                "play" === e ? (n += t + "loading",
                this._logPanel && this._logPanel.hide()) : r += t + "loading",
                this.container.removeClass(r).addClass(n)
            }
        }, {
            key: "switchFullStatus",
            value: function(e) {
                this.container[e ? "addClass" : "removeClass"]("qhww-status-fullscreened")
            }
        }, {
            key: "showCurrTime",
            value: function(e, r, t) {
                var n = this
                  , a = n._iptProgress
                  , o = n._timeCurrent;
                if (!a) {
                    var i = n.container;
                    a = n._iptProgress = i.find(".qhww-ipt-progress"),
                    o = n._timeCurrent = i.find(".qhww-time-current");
                    var s = i.find(".qhww-time-wrap")
                      , u = t ? "none" : "inline-block";
                    a.css("display", u),
                    s.css("display", u),
                    n.bindDomEvt(a, "change", function(e) {
                        var t = +e.target.value;
                        n.getPlayerProps("logLevel") && console.log(t, "UI.emit.seeking", +new Date),
                        r.seek(t).catch(function(e) {
                            throw clearTimeout(n._pro_lock_timer),
                            n._progress_not_writable = !1,
                            n.showCurrTime(n._his_ts || 0),
                            e
                        })
                    }),
                    n.bindDomEvt(a, "mousedown touchstart", function() {
                        clearTimeout(n._pro_lock_timer),
                        n._progress_not_writable = !0
                    }),
                    n.bindDomEvt(a, "mouseup touchend", function() {
                        clearTimeout(n._pro_lock_timer),
                        n._pro_lock_timer = setTimeout(function() {
                            n._progress_not_writable = !1
                        }, 300)
                    })
                }
                n._progress_not_writable || a.val(n._his_ts = e),
                o.text(V(e))
            }
        }, {
            key: "showRate",
            value: function(e, r, t) {
                var n = this
                  , a = n._rateBtn
                  , o = n._rateTxt
                  , i = n._rateTit;
                if (!a) {
                    var s = n.container;
                    a = n._rateBtn = s.find(".qhww-btn-rate"),
                    o = n._rateTxt = s.find(".qhww-rate-val"),
                    i = n._rateTit = s.find(".qhww-rate-tit"),
                    a.attr("max", t || 2);
                    var u = e;
                    n.bindDomEvt(a, "change", function(e) {
                        var t = +e.target.value;
                        u !== t && r.setPlaybackRate(t),
                        u = t
                    }),
                    n.bindDomEvt(i, "click", function() {
                        1 !== u && r.setPlaybackRate(1),
                        u = 1
                    })
                }
                o.text(e),
                a.val(e),
                i.text(1 === e ? "倍速" : "恢复").css("cursor", 1 === e ? "default" : "pointer")
            }
        }, {
            key: "showDuration",
            value: function(e) {
                var t = this
                  , r = t._iptProgress
                  , n = t._timeDuration;
                r = r || (t._iptProgress = t.container.find(".qhww-ipt-progress")),
                n = n || (t._timeDuration = t.container.find(".qhww-time-duration")),
                r.attr("max", e),
                n.text(V(e))
            }
        }, {
            key: "showVolume",
            value: function(e, t, r) {
                var n = this
                  , a = n._volumeIpt
                  , o = n.container;
                if (!a) {
                    (a = n._volumeIpt = o.find(".qhww-btn-volume")).attr("max", r || 1);
                    var i = e
                      , s = function(e) {
                        return t.setVolume(parseFloat(e) || 0)
                    };
                    n.bindDomEvt(o.find(".qhww-btn-mute"), "click", function() {
                        var e = 0 === n.getPlayerProps("volume");
                        e || (i = n.getPlayerProps("volume")),
                        s(e ? i : 0)
                    }),
                    n.bindDomEvt(a, "change", function(e) {
                        return s(+e.target.value)
                    })
                }
                o[0 === e ? "addClass" : "removeClass"]("qhww-status-muted"),
                a.val(e)
            }
        }, {
            key: "switchControls",
            value: function(e) {
                var t = this._controlbarEl;
                (t = t || (this._controlbarEl = this.container.find(".qhww-controlbar")))[e ? "show" : "hide"]()
            }
        }, {
            key: "setPoster",
            value: function(e) {
                var t = this._wrapEl;
                (t = t || (this._wrapEl = this.container.find(".qhww-canvas-wrap"))).css("background-image", e ? "url(" + e + ")" : "none")
            }
        }, {
            key: "listener",
            value: function() {
                var e, r = this;
                H(c(t.prototype), "listener", this).call(this, (f(e = {}, "timeupdate." + be, function(e) {
                    var t = e.data;
                    r.showCurrTime((void 0 === t ? {} : t).currentTime || 0)
                }),
                f(e, "waiting." + be, function() {
                    r.container.addClass("qhww-status-loading")
                }),
                f(e, "playing." + be, function(e) {
                    r.container.removeClass("qhww-status-loading")
                }),
                f(e, "play", function() {
                    r.switchStatus("play")
                }),
                f(e, "pause", function() {
                    r.switchStatus("pause")
                }),
                f(e, "stop", function() {
                    r.switchStatus("stop"),
                    r._iptProgress && r._iptProgress.attr("max", 0)
                }),
                f(e, "fullscreenchange", function(e) {
                    r.switchFullStatus(e.data)
                }),
                f(e, "rateChange", function(e) {
                    r.showRate(e.data)
                }),
                f(e, "volumeChange", function(e) {
                    r.showVolume(e.data)
                }),
                f(e, "error", function(e) {
                    r.showLog(e.data)
                }),
                f(e, "info." + we, function(e) {
                    var t = e.data;
                    -1 === (void 0 === t ? {} : t).videoPixFmt && r.showLog("当前媒体资源没有解析到可展示的画面。")
                }),
                f(e, "durationChange." + we, function(e) {
                    var t = e.data;
                    r.showDuration(void 0 === t ? 0 : t)
                }),
                f(e, "durationChange." + _e, function(e) {
                    var t = e.data;
                    r.showDuration(void 0 === t ? 0 : t)
                }),
                f(e, "controlsChange", function(e) {
                    r.switchControls(e.data)
                }),
                f(e, "posterChange", function(e) {
                    r.setPoster(e.data)
                }),
                e))
            }
        }, {
            key: "initDomEvt",
            value: function(t) {
                var r = this;
                if (!r._dom_inited) {
                    r._dom_inited = !0;
                    var e = r.getPlayerProps()
                      , n = e.volume
                      , a = e.maxVolume
                      , o = e.playbackRate
                      , i = e.maxPlaybackRate
                      , s = e.isLive
                      , u = e.poster
                      , l = function() {
                        return t.play()
                    }
                      , c = function() {
                        return t.pause()
                    }
                      , h = r.container
                      , f = h.find(".qhww-canvas-wrap")
                      , d = null;
                    r.bindDomEvt(f, "click", function() {
                        var e = r.getPlayerProps("paused");
                        clearTimeout(d),
                        d = setTimeout(e ? l : c, 300)
                    });
                    var m = function() {
                        h[h.isFullscreen() ? "unfullscreen" : "fullscreen"]()
                    };
                    r.bindDomEvt(f, "dblclick", function() {
                        clearTimeout(d),
                        m()
                    }),
                    r.bindDomEvt(document, "webkitfullscreenchange mozfullscreenchange fullscreenchange", function(e) {
                        h && e.target === h[0] && t.emit("fullscreenchange", h.isFullscreen(), r)
                    }),
                    r.bindDomEvt(h.find(".qhww-btn-play"), "click", l),
                    r.bindDomEvt(h.find(".qhww-btn-pause"), "click", c),
                    r.bindDomEvt(h.find(".qhww-btn-stop"), "click", function() {
                        return t.stop()
                    }),
                    r.bindDomEvt(h.find(".qhww-btn-fullscreen"), "click", m),
                    u && r.setPoster(u),
                    r.showCurrTime(0, t, s),
                    r.showVolume(n, t, a),
                    r.showRate(o, t, i)
                }
            }
        }, {
            key: "bindDomEvt",
            value: function(e, t, r) {
                this._dom_evts.push([e, t, r]),
                ye(e).on(t, r)
            }
        }, {
            key: "unbindDomEvts",
            value: function() {
                var e = this.container;
                this._dom_evts.forEach(function(e) {
                    var t = K(e, 3)
                      , r = t[1]
                      , n = t[2];
                    ye(t[0]).off(r, n)
                }),
                e.html(e[Pe]).attr("class", e[ke] || ""),
                this._dom_evts = []
            }
        }, {
            key: "uninstall",
            value: function() {
                return this._gl = null,
                this.unbindDomEvts(),
                H(c(t.prototype), "uninstall", this).call(this)
            }
        }]),
        t
    }();
    function qe() {
        function p(e) {
            return (e && e.stack || e) + ""
        }
        function h(u, e, t, r) {
            function l(e, t) {
                m = !0;
                try {
                    a && a.abort(),
                    f && f.cancel && f.cancel().catch(function() {}),
                    d && d.cancel && d.cancel().catch(function() {}),
                    e && e()
                } catch (e) {
                    t && t(p(e))
                }
            }
            var c = 1 < arguments.length && void 0 !== e ? e : "text"
              , h = 2 < arguments.length ? t : void 0
              , n = 3 < arguments.length && void 0 !== r ? r : {}
              , a = self.AbortController ? new self.AbortController : null
              , f = null
              , d = null
              , m = !1
              , o = {
                method: "GET",
                headers: n,
                mode: "cors",
                redirect: "follow"
            };
            return a && (o.signal = a.signal),
            {
                typeFetch: new Promise(function(i, s) {
                    try {
                        fetch(u, o).then(function(e) {
                            if (void 0 === e)
                                return s("abort");
                            var t = e || {}
                              , r = t.status
                              , n = t.ok
                              , a = f = e.body;
                            if (200 !== r && 206 !== r || !n)
                                return s("Resource [" + u + "] request failed: Status = " + r + ", ok = " + n + ".");
                            if ("text" === c)
                                e.text().then(function(e) {
                                    if (m)
                                        return s("abort");
                                    i(e)
                                }, function(e) {
                                    s("Fetch.Response.text Error: " + p(e))
                                });
                            else if ("stream" === c) {
                                var o = d = a.getReader();
                                !function t() {
                                    o.read().then(function(e) {
                                        return m ? s("abort") : e.done ? i("done") : (h && h(e.value.buffer),
                                        void t())
                                    }, function() {
                                        return s("abort")
                                    })
                                }()
                            } else
                                "header" === c && (l(),
                                i(e.headers))
                        }, function(e) {
                            s(e && "AbortError" === e.name ? "abort" : p(e) + ". \n请检查要播放的目标媒体源是否能正常可用。" + (~u.indexOf(self.location.origin) ? "" : "\n\n另外，也许是浏览器同源策略限制的原因，可参考：https://zyun.360.cn/developer/doc?did=kyqqmtzysb"))
                        })
                    } catch (e) {
                        s("Create Fetch [" + u + "] Error: " + p(e))
                    }
                }
                ),
                abort: l
            }
        }
        self.methods = {
            _queueLenChange: function() {
                var e = this._queue
                  , t = e.length;
                self.emit("queueChange", {
                    queueSize: 0 === t ? 0 : e[t - 1].rangeEnd - e[0].rangeSta,
                    queueLength: t
                })
            },
            _queue: [],
            shiftStreamData: function(e, t) {
                function r() {
                    if (0 === f.length)
                        return -1 !== a.fileOffset && a.loadStreamData && a.loadStreamData(),
                        !0
                }
                var h = (0 < arguments.length && void 0 !== e ? e : {}).chunkSize
                  , n = 1 < arguments.length ? t : void 0
                  , a = this
                  , f = a._queue;
                if (r())
                    return n(null);
                h = h || a.chunkSize;
                var d, m = [], p = 0, v = null, y = 0, g = !1;
                if (function e() {
                    var t = f.shift()
                      , r = t.buffer
                      , n = t.rangeSta
                      , a = t.batchNum
                      , o = r
                      , i = t.size
                      , s = t.rangeEnd;
                    if (h < i) {
                        o = r.slice(0, h),
                        s = n + (i = h);
                        var u = r.slice(h)
                          , l = u.byteLength;
                        f.unshift({
                            buffer: u,
                            size: l,
                            rangeSta: s,
                            rangeEnd: s + l,
                            batchNum: a
                        })
                    }
                    m.push(o),
                    null === v && (v = n),
                    y = s,
                    p += i,
                    d = a;
                    var c = f[0];
                    c && c.buffer.byteLength + p < h && (c.batchNum === a ? e() : g = !0)
                }(),
                0 === p)
                    return n(null);
                var o = self.mergeBuffer(m, p)
                  , i = {
                    buffer: o,
                    size: p,
                    rangeSta: v,
                    rangeEnd: y
                };
                if (d && (i.batchNum = d),
                a.flvCheckedBatchNum !== d && !function(e, t) {
                    var r = 1 < arguments.length && void 0 !== t ? t : "all"
                      , n = new Uint8Array(e);
                    if (n.length < 13)
                        return !1;
                    if (70 !== n[0] || 76 !== n[1] || 86 !== n[2])
                        return !0;
                    for (var a = 13, o = 0, i = 0; a + 11 < n.length; ) {
                        var s = n[a]
                          , u = ((n[a + 1] << 8) + n[a + 2] << 8) + n[a + 3];
                        if (n.length < a + 11 + u)
                            break;
                        8 === s ? 1 === n[a + 12] && o++ : 9 === s && 1 === n[a + 12] && i++,
                        a += 11 + u + 4
                    }
                    var l = 0 < o;
                    if ("pcm" === r)
                        return l;
                    var c = 0 < i;
                    return "yuv" === r ? c : l && c
                }(o, a.renderType))
                    return g || f.unshift(i),
                    n(null);
                n(i, o),
                a.flvCheckedBatchNum = d,
                a._queueLenChange(),
                r()
            },
            setFileOffset: function(e, t) {
                var r = 0 < arguments.length && void 0 !== e ? e : 0
                  , n = 1 < arguments.length ? t : void 0;
                this.fileOffset = Math.min(this.maxRangeEnd, r),
                n && n(r)
            },
            clearQueue: function(e, t) {
                var r = this
                  , n = !1;
                e && "hlsSeek" === e.act && (n = !0,
                r._seekTs(e.ts)),
                r._loading && r.abort(),
                n || r.setFileOffset(-1),
                r._queue.length = 0,
                r._queueLenChange(),
                r.logLevel && console.log(e, "Downloader.worker.clearQueue", +new Date),
                t && t(0)
            },
            _seekTs: function(r) {
                var n = !0
                  , e = this._tsQueue;
                e && e.forEach(function(e) {
                    var t = e.tsEnd;
                    delete e.loading,
                    r < t ? (e.isLoaded = !1,
                    r < t && (n = !1)) : e.isLoaded = !0
                }),
                n && self.emit("error", "Seek 位置[" + r + "]错误，没有匹配的 TS 数据。")
            },
            _appendToQueue: function(e, t) {
                var r = this
                  , n = e.byteLength
                  , a = r.fileOffset;
                r.setFileOffset(r.fileOffset + n);
                var o = r._queue
                  , i = {
                    size: n,
                    rangeSta: a,
                    rangeEnd: r.fileOffset
                };
                t && (i.batchNum = t);
                var s = Object.assign({
                    buffer: e
                }, i);
                o.push(s),
                r._queueLenChange(),
                self.emit("data", i)
            },
            _loadVodMeta: function(r, n) {
                var a = this
                  , e = h(a.url, "header")
                  , t = e.abort;
                e.typeFetch.then(function(e) {
                    var t = a.fileSize = +e.get("Content-Length");
                    if (!t || isNaN(t))
                        return n("获取点播文件大小失败。\n\n也许是浏览器安全策略限制的原因，详细可参考：https://zyun.360.cn/developer/doc?did=kyqqmtzysb#errcl");
                    a.maxRangeEnd = t - 1,
                    r("ok")
                }, n),
                a.bindAbort(t)
            },
            _loadVodChunk: function(t, r) {
                var n = this
                  , a = n.url
                  , o = n.fileOffset
                  , e = Math.min(n.maxRangeEnd, o + n.decoderMemorySize);
                if (o === e && e === n.maxRangeEnd)
                    return n._resetStatus2Idle(),
                    1 < n.logLevel && console.log("Downloader.WorkerFetch.vod.done 1"),
                    self.emit("done"),
                    t("done");
                var i = 0
                  , s = h(a, "stream", function(e) {
                    i++,
                    0 === o && 1 === i && self.emit("info", {
                        src: a,
                        moovLength: function(e) {
                            var t = new Uint8Array(e.slice(0, 128))
                              , r = /(\d+,\d+,\d+,\d+),109,111,111,118/.exec(t.join(","));
                            return r && r[1] ? parseInt(r[1].split(",").map(function(e) {
                                var t = (+e).toString(16);
                                return (t.length < 2 ? "0" : "") + t
                            }).join(""), 16) : 0
                        }(e),
                        fileSize: n.fileSize
                    }),
                    n._appendToQueue(e)
                }, {
                    range: "bytes=" + o + "-" + e
                })
                  , u = s.abort;
                s.typeFetch.then(function() {
                    return 1 < n.logLevel && console.log("Downloader.WorkerFetch.vod.done 2"),
                    n.fileOffset === n.maxRangeEnd && (n._resetStatus2Idle(),
                    self.emit("done")),
                    t("done")
                }, function(e) {
                    "abort" === e ? (n.logLevel && console.log("Downloader.WorkerFetch.vod.abort."),
                    n._nextReqRestart(),
                    t("abort")) : (n._resetStatus2Idle(),
                    r(e.replace("可用", "可用并支持Range请求")))
                }),
                n.bindAbort(u)
            },
            _batchNum: 0,
            _loadLiveStream: function(t, r) {
                var n = this
                  , e = n.url
                  , a = ++n._batchNum;
                n._sys_auto_paused = !1;
                var o = h(e, "stream", function(e) {
                    if (n._batchNum !== a)
                        return i(),
                        t("abort");
                    n._appendToQueue(e, a),
                    n.maxLoaderCacheSize < n.fileOffset - n._queue[0].rangeSta && (i(),
                    n._nextReqRestart(!0),
                    t("abort"))
                })
                  , i = o.abort;
                o.typeFetch.then(function() {
                    1 < n.logLevel && console.log("Downloader.WorkerFetch.live.done"),
                    n._resetStatus2Idle(),
                    t("done")
                }, function(e) {
                    "abort" === e ? (n.logLevel && console.log("Downloader.WorkerFetch.live.abort"),
                    n._nextReqRestart(!0),
                    t("abort")) : (n.logLevel && console.warn("Downloader.WorkerFetch.live.Error:", e),
                    n._resetStatus2Idle(),
                    r(e))
                }),
                n.bindAbort(i)
            },
            _loadHls: function(n, a) {
                var o = this;
                if (o._queue[0] && o.maxLoaderCacheSize < o.fileOffset - o._queue[0].rangeSta)
                    return o._nextReqRestart(!0),
                    n("sys abort");
                o._tsQueue || (o._tsQueue = []);
                var i = o._tsQueue
                  , e = i.length;
                if (0 === e)
                    o._loadM3u8(function() {
                        var e = i[i.length - 1]
                          , t = e && !e.isEnd
                          , r = t ? -1 : i.reduce(function(e, t) {
                            var r = 1e3 * t.duration + e;
                            return t.tsEnd = r
                        }, 0);
                        self.emit("info", {
                            isHls: !0,
                            src: o.url,
                            fileSize: -1,
                            isLive: t,
                            duration: r,
                            tsQueue: i
                        }),
                        o._loadTs(n, a)
                    }, a);
                else {
                    var t = i[e - 1];
                    t.isLoaded ? t.isEnd ? (n("done"),
                    self.emit("done")) : o._loadM3u8(n, a) : o._loadTs(n, a)
                }
            },
            _loadM3u8: function(n, a) {
                var o = this;
                if (o._m3u8Loading)
                    return n("waiting m3u8");
                var i = o.url
                  , e = h(i, "text")
                  , t = e.typeFetch
                  , s = e.abort;
                o._m3u8Loading = !0,
                t.then(function(e) {
                    delete o._m3u8Loading;
                    var t = function(e, t) {
                        var r = 0 < arguments.length && void 0 !== e ? e : ""
                          , o = (1 < arguments.length && void 0 !== t ? t : "").replace(/\n+/g, "\n").split("\n")
                          , i = []
                          , s = /#EXTINF:\s*(\d*(?:\.\d+)?)/
                          , u = function(e) {
                            var t = /^(https?\:)\/\/([^/]*)(.*)$/.exec(e);
                            return t ? {
                                url: t[0],
                                urlProtocol: t[1],
                                urlHost: t[2],
                                urlPath: (t[3] || "").replace(/([^/]*)$/, "")
                            } : {}
                        }(r);
                        return o.forEach(function(e, t) {
                            if ("#EXT-X-DISCONTINUITY" === e)
                                ;
                            else {
                                var r = s.exec(e);
                                if (r) {
                                    var n = function(e, t) {
                                        var r = e || {}
                                          , n = r.urlProtocol
                                          , a = r.urlHost
                                          , o = r.urlPath;
                                        if ("//" == t.substring(0, 2))
                                            return n + t;
                                        var i = n + "//" + a;
                                        return "/" == t.substring(0, 1) ? i + t : i + o + t
                                    }(u, o[t + 1])
                                      , a = "#EXT-X-ENDLIST" === o[t + 2];
                                    i.push({
                                        batchIdx: 1,
                                        duration: parseFloat(r[1]),
                                        tsUrl: n,
                                        isEnd: a
                                    })
                                }
                            }
                        }),
                        i
                    }(i, e);
                    if (0 === t.length)
                        return a("当前媒体资源的 m3u8 内容解析失败。");
                    var r = o._tsQueue;
                    t.forEach(function(e) {
                        var t = e.tsUrl;
                        r.find(function(e) {
                            return e.tsUrl === t
                        }) || r.push(e)
                    }),
                    n("ok")
                }, function(e) {
                    delete o._m3u8Loading,
                    a(e)
                }),
                o.bindAbort(function(e, t, r) {
                    "stop" === r ? s(e, t) : e && e()
                })
            },
            _loadTs: function(t, r) {
                var n = this;
                if (n._tsLoading)
                    return t("waiting ts");
                var a = this._tsQueue || []
                  , e = a.find(function(e) {
                    return !e.isLoaded
                });
                if (e) {
                    var o = e.batchIdx
                      , i = e.tsUrl
                      , s = e.isEnd;
                    n._batchNum = o,
                    n._sys_auto_paused = !1;
                    var u = h(i, "stream", function(e) {
                        if (n._batchNum !== o)
                            return c(),
                            t("abort");
                        n._appendToQueue(e, o)
                    })
                      , l = u.typeFetch
                      , c = u.abort;
                    n._tsLoading = e.isLoaded = !0,
                    l.then(function() {
                        if (delete n._tsLoading,
                        1 < n.logLevel && console.log("Downloader.WorkerFetch.ts.done"),
                        n._resetStatus2Idle(),
                        s)
                            t("ts done");
                        else {
                            t("ta waiting");
                            var e = a[a.length - 1];
                            e && e.isLoaded && !e.isEnd && n._loadM3u8(function() {}, r)
                        }
                    }, function(e) {
                        delete n._tsLoading,
                        "abort" === e ? (n.logLevel && console.log("Downloader.WorkerFetch.ts.abort"),
                        n._nextReqRestart(!0),
                        t("abort")) : (n.logLevel && console.warn("Downloader.WorkerFetch.ts.Error:", e),
                        n._resetStatus2Idle(),
                        r(e))
                    }),
                    n.bindAbort(function(e, t, r) {
                        "stop" === r ? c(e, t) : e && e()
                    })
                } else
                    t("waiting")
            },
            _clearTsQueue: function() {
                delete this._m3u8Loading,
                delete this._tsLoading,
                delete this._tsQueue
            },
            _nextReqRestart: function(e) {
                this._sys_auto_paused = 0 < arguments.length && void 0 !== e && e,
                this._load_stream_lock = !1
            },
            _resetStatus2Idle: function() {
                this._loading = !1,
                this._nextReqRestart()
            },
            pause: function(e, t, r) {
                this._nextReqRestart(),
                this.abort(t, r)
            },
            abort: function(e, t, r) {
                this._abort ? this._abort(e, t, r) : e && e()
            },
            bindAbort: function(e) {
                this.abort(),
                this._abort = e
            },
            stop: function(e, t, r) {
                var n = this;
                n.fileSize = 0,
                n._resetStatus2Idle(),
                n.abort(t, r, "stop"),
                n.setFileOffset(0),
                n.clearQueue(),
                n._clearTsQueue()
            },
            _loading: !1,
            fileOffset: 0,
            start: function(e, t, r) {
                var n = 0 < arguments.length && void 0 !== e ? e : {}
                  , a = n.url
                  , o = n.isLive
                  , i = void 0 === o || o
                  , s = n.isHLS
                  , u = void 0 !== s && s
                  , l = n.chunkSize
                  , c = n.maxLoaderCacheSize
                  , h = n.decoderMemorySize
                  , f = n.logLevel
                  , d = n.renderType
                  , m = 1 < arguments.length ? t : void 0
                  , p = 2 < arguments.length ? r : void 0
                  , v = this;
                if (v._loading)
                    return m("loading!");
                v._loading = !0,
                v.isHLS = u,
                v.url = a,
                v.fileSize = 0,
                v.maxRangeEnd = u || i ? 1 / 0 : 0,
                u || (v.fileOffset = 0),
                v.chunkSize = l || 524288,
                v.maxLoaderCacheSize = c || 2097152,
                v.decoderMemorySize = h || v.maxLoaderCacheSize,
                v.logLevel = +f || 0,
                v.renderType = d,
                v.flvCheckedBatchNum = -1,
                u ? v._initLoad(v._loadHls) : i ? (v._initLoad(v._loadLiveStream),
                self.emit("info", {
                    src: a,
                    fileSize: -1
                })) : v._loadVodMeta(function() {
                    return v._initLoad(v._loadVodChunk)
                }, p),
                m("start")
            },
            _initLoad: function(e) {
                var r = this;
                r.loadStreamData = function() {
                    if (r._load_stream_lock)
                        r.logLevel && console.log("Repeat call loadStreamData!");
                    else if (r._sys_auto_paused && r._queue.length)
                        r.logLevel && console.log("Wait for the previous batch of data in the queue to run out!");
                    else {
                        r._sys_auto_paused = !1,
                        r._load_stream_lock = !0;
                        var t = function() {
                            r._load_stream_lock = !1
                        };
                        e.call(r, t, function(e) {
                            t(),
                            self.emit("error", e)
                        })
                    }
                }
                ,
                r.loadStreamData()
            }
        }
    }
    f(xe, "modName", ge);
    var De = d.DOWNLOADER
      , Ee = d.DECODER
      , Se = function() {
        function t() {
            return i(this, t),
            u(this, c(t).call(this))
        }
        return h(t, ae),
        o(t, [{
            key: "install",
            value: function() {
                var i = this;
                return i.listener(),
                i.createPromiseWorker(qe, {
                    methods: {
                        info: function(e) {
                            var t = e.moovLength
                              , r = e.isHls
                              , n = e.isLive
                              , a = e.duration
                              , o = {
                                fileSize: e.fileSize,
                                moovLength: t
                            };
                            t && (i.getPlayerProps("decoderMemorySize") < t && (o.decoderMemorySize = t),
                            i.getPlayerProps("minDecoderBufferSize") < t && (o.minDecoderBufferSize = t)),
                            r && (Object.assign(o, {
                                isHls: r,
                                isLive: n,
                                duration: a
                            }),
                            Promise.resolve().then(function() {
                                return i.emit("durationChange", a)
                            })),
                            i.setPlayerProps(o),
                            i.emit("info", e)
                        },
                        queueChange: function(e) {
                            i.emit("streamQueueChange", e)
                        },
                        data: function(e) {
                            i.emit("data", e)
                        },
                        done: function(e) {
                            i.status = P.DONE,
                            i.emit("done", e)
                        },
                        error: function(e) {
                            i.emitError(e)
                        }
                    }
                }).then(function() {
                    return i.status === P.IDLE && !1 === i.getPlayerProps("paused") && i.start(),
                    "[" + De + "] installed."
                })
            }
        }, {
            key: "listener",
            value: function() {
                var a = this;
                H(c(t.prototype), "listener", this).call(this, f({
                    play: function() {
                        return a.start()
                    },
                    pause: function() {
                        return a.pause()
                    },
                    stop: function() {
                        return a.stop()
                    },
                    seeking: function(e) {
                        var t = e.data
                          , r = a.getPlayerProps()
                          , n = r.isHls;
                        return r.logLevel && console.log(t, "Downlaoder.listener.seeking", +new Date),
                        a.status === P.DONE && (a.status = P.WORKING),
                        a.callWorker("clearQueue", {
                            act: n ? "hlsSeek" : "seek",
                            ts: t
                        })
                    }
                }, "seeked." + Ee + "@before", function(e) {
                    var t = e.data;
                    if (a.getPlayerProps("logLevel") && console.log("Downlaoder.onSeeked", t),
                    0 <= t)
                        return a.callWorker("setFileOffset", t)
                }))
            }
        }, {
            key: "start",
            value: function() {
                var t = this;
                if (t.status === P.WORKING)
                    return Promise.resolve("working!");
                t.status = P.WORKING;
                var e = t.getPlayerProps()
                  , r = e.currentSrc
                  , n = e.isLive
                  , a = e.logLevel
                  , o = e.renderType;
                return t.callWorker("start", {
                    url: r,
                    chunkSize: e.chunkSize,
                    isLive: n,
                    isHLS: e.isHLS,
                    maxLoaderCacheSize: e.maxLoaderCacheSize,
                    decoderMemorySize: e.decoderMemorySize,
                    logLevel: void 0 === a ? 0 : a,
                    renderType: void 0 === o ? "all" : o
                }).then(function(e) {
                    return t.emit("started", {
                        src: r,
                        isLive: n
                    }),
                    e
                }, function(e) {
                    throw t.status = P.FAILED,
                    e
                })
            }
        }, {
            key: "pause",
            value: function() {
                var t = this;
                return t.callWorker("pause").then(function(e) {
                    return t.status = P.PAUSE,
                    e
                }, function(e) {
                    throw t.status = P.FAILED,
                    e
                })
            }
        }, {
            key: "stop",
            value: function() {
                var t = this;
                return t.callWorker("stop").then(function(e) {
                    return t.status = P.STOP,
                    t.emit("stoped"),
                    e
                }, function(e) {
                    throw t.status = P.FAILED,
                    e
                })
            }
        }, {
            key: "shiftStreamData",
            value: function(e) {
                var t = this;
                return t.callWorker("shiftStreamData", e).then(function(e) {
                    return null === e && t.status === P.DONE ? "done" : e
                })
            }
        }, {
            key: "uninstall",
            value: function() {
                var e = this;
                return this.stop().then(function() {
                    return H(c(t.prototype), "uninstall", e).call(e)
                })
            }
        }]),
        t
    }();
    function Le() {
        function v(e, t) {
            try {
                var r = self.Module.HEAPU8.subarray(e, e + t);
                return new Uint8Array(r).buffer
            } catch (e) {
                return console.error("[Decoder.worker.transBuffer Error]", e),
                null
            }
        }
        self.methods = {
            _opts: {
                key: null,
                keyType: 0,
                keyList: null,
                minBufferSize: 524288,
                maxDecoderVCacheLength: 300,
                maxDecoderACacheLength: 500
            },
            _wasm_ready: !1,
            _initWasm: function(e) {
                var t = this;
                if (e || self.emit("error", "初始化WASM失败，缺少必要的参数ffmpeg!"),
                self.Module = {
                    onAbort: function(e) {
                        self.emit("error", (e && e.stack || e) + "")
                    },
                    onRuntimeInitialized: function() {
                        t._initYuvCallback(this),
                        t._initPcmCallback(this),
                        t._initSeekCallback(this),
                        t._wasm_ready = !0,
                        t._auto_configure_args && t.configure.apply(t, t._auto_configure_args)
                    }
                },
                !self.importScripts)
                    return self.emit("error", "Does not support WorkerGlobalScope.importScripts!");
                try {
                    self.importScripts(e)
                } catch (e) {
                    console.warn("WASM importScripts Error! ", e),
                    self.emit("error", "WASM importScripts Error! Info: " + (e && e.stack || e))
                }
            },
            _configured: !1,
            configure: function(e, t, r) {
                var n = 0 < arguments.length && void 0 !== e ? e : {}
                  , a = 1 < arguments.length ? t : void 0
                  , o = 2 < arguments.length ? r : void 0
                  , i = this;
                if (!1 !== i._wasm_ready) {
                    i._auto_configure_args = null;
                    var s = n.chunkSize
                      , u = n.memorySize
                      , l = n.fileSize
                      , c = n.isVod
                      , h = n.logLevel
                      , f = n.sei
                      , d = n.resample;
                    Object.assign(i._opts, {
                        key: n.key,
                        keyForKey: n.keyForKey,
                        keyType: n.keyType,
                        keyList: n.keyList,
                        minBufferSize: n.minBufferSize,
                        maxDecoderVCacheLength: n.maxDecoderVCacheLength,
                        maxDecoderACacheLength: n.maxDecoderACacheLength,
                        renderType: n.renderType
                    }),
                    i.isLive = 0 === c,
                    i.logLevel = +h || 0,
                    i._vts_last = i._vts_diff = i._ats_last = i._ats_diff = 0;
                    var m = self.Module
                      , p = m._initDecoder(u, l, c, h, f, d);
                    0 === p ? (i._configured = !0,
                    i._cacheBuffer = m._malloc(s),
                    a(p)) : (i._configured = !1,
                    o(p))
                } else
                    i._auto_configure_args = arguments
            },
            unconfigure: function(e, t) {
                var r = this;
                r._auto_configure_args = null;
                var n = self.Module;
                n && r._configured && (n._uninitDecoder(),
                null !== r._cacheBuffer && (n._free(r._cacheBuffer),
                r._cacheBuffer = null),
                r._configured = !1),
                t && t(0)
            },
            _opened: 0,
            _hasVideo: !1,
            _hasAudio: !1,
            _openDecoder: function() {
                var e = this;
                if (!1 === e._configured)
                    return "wait";
                var t = 0
                  , r = e._opts
                  , n = r.key
                  , a = r.keyForKey
                  , o = r.keyType
                  , i = r.renderType
                  , s = r.keyList;
                if (!e._finish && e._input_data_size < r.minBufferSize)
                    e._getStreamData();
                else {
                    if (e._opening)
                        return "wait";
                    e._opening = 1;
                    var u = self.Module
                      , l = u._malloc(28)
                      , c = n ? u.allocateUTF8(n) : null
                      , h = a ? u.allocateUTF8(a) : null
                      , f = s ? u.allocateUTF8(Array.isArray(s) ? JSON.stringify(s) : s) : null;
                    if (0 === (t = u._openDecoder(l, 7, e.videoCbk, e.audioCbk, e.seekCbk, c, o, h, f))) {
                        var d = l >> 2
                          , m = u.HEAP32.subarray(d, 7 + d)
                          , p = m[5]
                          , v = m[6]
                          , y = "pcm" === i ? -1 : m[1];
                        e._hasVideo = -1 !== y;
                        var g = "yuv" === i || 0 === v || 0 === p ? -1 : m[4];
                        e._hasAudio = -1 !== g,
                        self.emit("info", {
                            ret: t,
                            duration: m[0],
                            videoPixFmt: y,
                            videoWidth: m[2],
                            videoHeight: m[3],
                            audioSampleFmt: g,
                            audioChannels: p,
                            audioSampleRate: v
                        }),
                        e._mode = 0,
                        e._opened = 1
                    } else
                        e._opened = 0;
                    u._free(l),
                    e._opening = 0,
                    e._seek_time = null
                }
                return t
            },
            _clearStreamStatus: function() {
                var e = this;
                e.yuvQueue.length = 0,
                self.emit("yuvQueueChange", {
                    dur: 0,
                    len: 0
                }),
                e.pcmQueue.length = 0,
                self.emit("pcmQueueChange", {
                    dur: 0,
                    len: 0
                }),
                e._data_cache.length = 0,
                e.setStreamFinish(0),
                e._tempFpsArr.length = 0
            },
            _closeDecoder: function() {
                return this._clearStreamStatus(),
                this._wasmCloseDecoder(),
                this.unconfigure(),
                0
            },
            _wasmCloseDecoder: function() {
                var e = this;
                e._finish = 0,
                e._input_data_size = 0,
                e._data_cache.length = 0,
                1 === e._opened && self.Module && self.Module._closeDecoder(),
                e._opened = 0
            },
            _finish: 0,
            setStreamFinish: function(e, t) {
                var r = 0 < arguments.length && void 0 !== e ? e : 1
                  , n = 1 < arguments.length ? t : void 0;
                1 === this._opened && (this.logLevel && console.log("Decoder.worker.setStreamFinish", r),
                self.Module && self.Module._setStreamFinish && self.Module._setStreamFinish(r)),
                this._finish = r,
                n && n(0)
            },
            seek: function(e, t, r) {
                var n = this
                  , a = e.time
                  , o = e.isHls;
                if (n.logLevel && console.log(a, "Decoder.worker.seek start", +new Date),
                0 === n._opened)
                    return r("Media resources are not ready!");
                var i = self.Module
                  , s = i && i._seek(a, +o);
                0 === s ? (n._clearStreamStatus(),
                n._seek_time = a,
                t(s),
                o && self.emit("seek_cbk", -1),
                n.playing && n._decodeNextFrame()) : r(s),
                n.logLevel && console.log(a, "Decoder.worker.seek end", +new Date)
            },
            _getStreamData: function() {
                this._lacks_stream_data = !0,
                this._wasm_ready && self.emit("getStreamData")
            },
            runRetryTimer: function() {
                var e = this;
                clearTimeout(e._retry_timer),
                e._retry_timer = setTimeout(function() {
                    return e._decodeNextFrame()
                }, 1e4)
            },
            _decodeNextFrame: function() {
                var t = this;
                t._pauseDecodeNextFrame(),
                t.runRetryTimer();
                var e = -101
                  , r = t._opts
                  , n = r.maxDecoderVCacheLength
                  , a = void 0 === n ? 300 : n
                  , o = r.maxDecoderACacheLength
                  , i = void 0 === o ? 500 : o
                  , s = r.reject;
                try {
                    if (0 === t._opened) {
                        if ("wait" !== (e = t._openDecoder()) && 0 !== e)
                            return t.pause(),
                            s("openDecoder Failed! ret:" + e)
                    } else {
                        var u = t.yuvQueue.length
                          , l = t.pcmQueue.length;
                        if (t._auto_paused ? u < Math.min(10, a) && l < Math.min(10, i) : u < a && l < i)
                            if (t._auto_paused = !1,
                            self._show_qhww_dd && console.time("_decodeOnePacket"),
                            e = self.Module._decodeOnePacket(),
                            self._show_qhww_dd && console.timeEnd("_decodeOnePacket"),
                            9 === e)
                                t._getStreamData();
                            else {
                                if (7 === e)
                                    return t.logLevel && console.log(7, "Decoder.worker.decodeOnePacket; decoder done."),
                                    void self.emit("done");
                                if (3 === e)
                                    t.logLevel && console.log(3, "Decoder.worker.decodeOnePacket; decoder error.");
                                else if (0 !== e)
                                    return t.logLevel && console.log("%c _decodeOnePacket.ret:" + e + ", date:" + +new Date, "color:#ff00ff"),
                                    s("Decoder.worker.decodeOnePacket Error. ret:" + e)
                            }
                        else
                            t._auto_paused = !0
                    }
                } catch (e) {
                    return t.stop(),
                    s("Decoder._decodeNextFrame Error: " + e)
                }
                var c = 3;
                (t._lacks_stream_data || t._auto_paused) && (c = 1e3),
                t._decodeTimer = setTimeout(function() {
                    return t._decodeNextFrame()
                }, c)
            },
            _pauseDecodeNextFrame: function() {
                this._lacks_stream_data = !1,
                clearTimeout(this._decodeTimer),
                this._decodeTimer = null
            },
            _input_data_size: 0,
            start: function(e, t, r) {
                var n = this;
                n.pause(),
                n.playing = !0;
                var a = n._opts
                  , o = "rejected";
                a.reject = function(e) {
                    return r(e),
                    o
                }
                ,
                a.reject = function(e) {
                    return self.emit("error", e)
                }
                ,
                n._decodeNextFrame() !== o && (a.reject = function(e) {
                    return self.emit("error", e)
                }
                ,
                t(0)),
                n.runRetryTimer()
            },
            pause: function(e, t) {
                this.playing = !1,
                this._pauseDecodeNextFrame(),
                clearTimeout(this._rewrite_timer),
                clearTimeout(this._retry_timer),
                t && t(0)
            },
            stop: function(e, t) {
                this._input_data_size = 0,
                this._seek_time = null,
                this.pause(),
                this._closeDecoder(),
                t && t(0)
            },
            _dm_set_by_sys: !0,
            _mode: 0,
            setDecodeMode: function(e, t, r) {
                var n = this;
                if (n._mode === e && t && t(0),
                (t || r) && (n._dm_set_by_sys = !1),
                0 === n._opened)
                    return r && r(-1);
                var a = self.Module._setDecodeMode(e);
                if (0 === a)
                    return n._mode = e,
                    n.logLevel && console.warn("setDecodeMode:", e),
                    t && t(a);
                r && r(a)
            },
            _keyList: 0,
            setKeyList: function(e, t, r) {
                if (this._keyList === e && t && t(0),
                0 === this._opened)
                    return r && r(-1);
                var n = self.Module
                  , a = e ? n.allocateUTF8(Array.isArray(e) ? JSON.stringify(e) : e) : null
                  , o = n._setKeyList(a);
                if (0 === o)
                    return this._keyList = e,
                    this.logLevel && console.warn("setKeyList:", e),
                    t && t(o);
                r && r(o)
            },
            _prev_range_end: 0,
            _data_cache: [],
            _batchNum: null,
            input: function(e, t, r) {
                var n = self.Module;
                if (!n || !n._sendData)
                    return console.warn("解码器WASM载入异常。");
                var a = !1
                  , o = this;
                if (e) {
                    var i = e.batchNum;
                    i && o._batchNum !== i && (o._batchNum && (o.logLevel && console.log("%c数据批次从 " + o._batchNum + " 变为 " + i + "，重启解码器", "color:#96470f"),
                    o._wasmCloseDecoder()),
                    o._batchNum = i),
                    0 !== o._data_cache.length && (o._data_cache.push(e),
                    e = null)
                }
                if (e || (a = !0,
                e = o._data_cache.shift()),
                !e)
                    return console.warn("没有可写的数据了");
                var s = e.rangeEnd
                  , u = e.dd
                  , l = new Uint8Array(e.buffer)
                  , c = l.byteLength;
                n.HEAPU8.set(l, o._cacheBuffer);
                var h = n._sendData(o._cacheBuffer, c);
                if (0 < h && (o._input_data_size += h),
                self._show_qhww_dd = u,
                self._show_qhww_dd && console.log("%c[PM][" + +new Date + "] [Decoder.sendData] buffer len: " + c + " writeLen:" + h + " rangeEnd: " + o._input_data_size, "color:#ceaef9"),
                h === c)
                    t(h),
                    a && o.logLevel && console.warn((new Date).getTime() + " 重写数据成功了！"),
                    o._prev_range_end = s;
                else {
                    if (h < 0)
                        r(h);
                    else {
                        var f = l.slice(h).buffer;
                        o._data_cache.unshift({
                            buffer: f,
                            rangeEnd: s,
                            dd: u
                        }),
                        clearTimeout(o._rewrite_timer),
                        o._rewrite_timer = setTimeout(function() {
                            return o.input(null, t, r)
                        }, 100)
                    }
                    o.logLevel && console.warn("%c " + (new Date).getTime() + " 数据写入失败  序号:" + s + " 剩余:" + (c - Math.max(h, 0)) + " 全长:" + c + " rewriteQueue: " + o._data_cache.length, "color:#999")
                }
                0 < h && o._lacks_stream_data && o._decodeNextFrame()
            },
            shiftFrameData: function(e, t) {
                var r = 0 < arguments.length && void 0 !== e ? e : {}
                  , n = r.count
                  , a = void 0 === n ? 1 : n
                  , o = r.type
                  , i = void 0 === o ? "pcm" : o
                  , s = 1 < arguments.length ? t : void 0
                  , u = this
                  , l = u[i + "Queue"]
                  , c = l.length;
                if (0 === c)
                    return "pcm" === i && (u.yuvQueue.length < u._opts.maxDecoderVCacheLength || (u.yuvQueue.length = u.yuvQueue.length >> 1)),
                    s.call(u, l);
                var h = l.splice(0, a)
                  , f = [h];
                h.map(function(e) {
                    var t = e.sei;
                    f.push(e.buffer),
                    t && "string" != typeof t && f.push(t)
                }),
                s.apply(u, f);
                var d = 0;
                if (0 !== (c = l.length)) {
                    var m = l[c - 1];
                    d = m.timestamp - l[0].timestamp + ("pcm" === i ? m.duration : 20)
                }
                self.emit(i + "QueueChange", {
                    dur: d,
                    len: c
                })
            },
            yuvQueue: [],
            _vts_last: 0,
            _vts_diff: 0,
            _tempFpsArr: [],
            _initYuvCallback: function(e) {
                var p = this;
                p.videoCbk = e.addFunction(function(e, t, r, n, a, o, i, s) {
                    if (p._hasVideo) {
                        var u = v(e, t)
                          , l = p.yuvQueue;
                        p.isLive && (r < p._vts_last && (p._vts_diff += p._vts_last - r + 20),
                        p._vts_last = r,
                        r += p._vts_diff);
                        var c = p._tempFpsArr;
                        for (c.push(r); 1e3 <= r - c[0]; )
                            c.shift();
                        var h = {
                            timestamp: r,
                            size: t,
                            fps: c.length,
                            seiSize: i = i || 0,
                            width: n,
                            height: a,
                            seiNum: s
                        }
                          , f = 0 < i ? "string" == typeof o ? o : v(o, i) : null
                          , d = Object.assign({
                            buffer: u,
                            sei: f
                        }, h);
                        if (l.push(d),
                        self.emit("yuvQueueChange", {
                            dur: r - l[0].timestamp + 20,
                            len: l.length
                        }),
                        self.emit("vdata", h),
                        p._dm_set_by_sys) {
                            var m = c.length;
                            25 < m ? 0 === p._mode ? p.setDecodeMode(1) : 1 === p._mode && p.setDecodeMode(2) : m < 10 && (1 === p._mode ? p.setDecodeMode(0) : 2 === p._mode && p.setDecodeMode(1))
                        }
                    }
                })
            },
            pcmQueue: [],
            _ats_last: 0,
            _ats_diff: 0,
            _initPcmCallback: function(e) {
                var u = this;
                u.audioCbk = e.addFunction(function(e, t, r, n) {
                    if (u._hasAudio) {
                        var a = v(e, t)
                          , o = u.pcmQueue;
                        u.isLive && (r < u._ats_last && (u._ats_diff += u._ats_last - r + 20),
                        u._ats_last = r,
                        r += u._ats_diff);
                        var i = {
                            timestamp: r,
                            size: t,
                            duration: n
                        }
                          , s = Object.assign({
                            buffer: a
                        }, i);
                        o.push(s),
                        self.emit("pcmQueueChange", {
                            dur: r - o[0].timestamp + n,
                            len: o.length
                        }),
                        self.emit("adata", i)
                    }
                })
            },
            _initSeekCallback: function(e) {
                var t = this;
                t.seekCbk = e.addFunction(function(e) {
                    t.isLive || Promise.resolve().then(function() {
                        t.logLevel && console.log("Decoder.worker.SeekCallback", e),
                        self.emit("seek_cbk", e)
                    })
                })
            }
        },
        self.methods._initWasm(self.ffmpeg)
    }
    f(Se, "modName", De);
    var Ce = d.DECODER
      , Te = d.DOWNLOADER
      , Re = Symbol("mode")
      , Me = function() {
        function t() {
            var e;
            return i(this, t),
            e = u(this, c(t).call(this)),
            f(s(e), "_nnn", 0),
            e[Re] = 0,
            e
        }
        return h(t, ae),
        o(t, [{
            key: "install",
            value: function() {
                var r = this;
                r.listener();
                var e = he(r.getPlayerProps("ffmpeg"));
                return r.createPromiseWorker(Le, {
                    globalArgs: {
                        ffmpeg: e
                    },
                    methods: {
                        info: function(e) {
                            var t = e.duration;
                            r.setPlayerProps({
                                videoPixFmt: e.videoPixFmt,
                                videoWidth: e.videoWidth,
                                videoHeight: e.videoHeight,
                                audioSampleFmt: e.audioSampleFmt,
                                audioChannels: e.audioChannels,
                                audioSampleRate: e.audioSampleRate,
                                duration: t
                            }),
                            r.emit("info", e),
                            r.setDuration(t, !0)
                        },
                        yuvQueueChange: function(e) {
                            var t = e.len;
                            r.emit("yuvQueueDurChange", e.dur),
                            r.emit("yuvQueueChange", t)
                        },
                        vdata: function(e) {
                            var t = e.timestamp;
                            r.getPlayerProps("duration") < t && r.setDuration(t),
                            r.emit("vdata", e)
                        },
                        pcmQueueChange: function(e) {
                            var t = e.len;
                            r.emit("pcmQueueDurChange", e.dur),
                            r.emit("pcmQueueChange", t)
                        },
                        adata: function(e) {
                            var t = e.timestamp + e.duration;
                            r.getPlayerProps("duration") < t && r.setDuration(t),
                            r.emit("adata", e)
                        },
                        getStreamData: function() {
                            r._syncStreamData()
                        },
                        seek_cbk: function(e) {
                            r.seeking = !1,
                            r.emit("seeked", e)
                        },
                        error: function(e) {
                            r.emitError(e)
                        },
                        done: function() {
                            r._done()
                        }
                    }
                }).then(function() {
                    return r.status === P.IDLE && !1 === r.getPlayerProps("paused") && r.start(),
                    "[" + Ce + "] installed."
                })
            }
        }, {
            key: "listener",
            value: function() {
                var e, r = this;
                H(c(t.prototype), "listener", this).call(this, (f(e = {}, "info." + Te, function() {
                    r.configure().catch(function(e) {
                        return r.emitError(e)
                    })
                }),
                f(e, "play", function() {
                    return r.start()
                }),
                f(e, "pause", function() {
                    return r.pause()
                }),
                f(e, "stop", function() {
                    return r.stop()
                }),
                f(e, "decodeModeChange", function(e) {
                    return r.setDecodeMode(e.data)
                }),
                f(e, "keyListChange", function(e) {
                    return r.setKeyList(e.data)
                }),
                f(e, "seeking@before", function(e) {
                    var t = e.data;
                    return r.getPlayerProps("logLevel") && console.log(t, "Decoder.listener.seeking", +new Date),
                    r.status === P.DONE && (r.status = P.WORKING),
                    r.seeking = !0,
                    r.seek(t)
                }),
                e))
            }
        }, {
            key: "setDuration",
            value: function(e) {
                var t = this
                  , r = t.getPlayerProps();
                r.isHls && !r.isLive && -1 !== r.duration || (t.setPlayerProps("duration", e || 0),
                Promise.resolve().then(function() {
                    return t.emit("durationChange", e)
                }))
            }
        }, {
            key: "configure",
            value: function() {
                var t = this
                  , e = t.getPlayerProps()
                  , r = e.isLive
                  , n = e.fileSize
                  , a = e.chunkSize
                  , o = void 0 === a ? 524288 : a
                  , i = e.decoderMemorySize
                  , s = e.key
                  , u = e.keyType
                  , l = void 0 === u ? 0 : u
                  , c = e.keyForKey
                  , h = e.keyList
                  , f = e.logLevel
                  , d = void 0 === f ? 0 : f
                  , m = e.sei
                  , p = void 0 === m ? 0 : m
                  , v = e.minDecoderBufferSize
                  , y = e.maxDecoderVCacheLength
                  , g = e.maxDecoderACacheLength
                  , w = e.renderType
                  , _ = e.resample
                  , b = void 0 === _ ? 0 : _;
                if (!r && !n)
                    return Promise.reject("Decoder.configure 缺少点播模式下必要的参数 fileSize!");
                var k = {
                    isVod: r ? 0 : 1,
                    key: s || null,
                    keyForKey: c || null,
                    keyType: l,
                    keyList: h,
                    chunkSize: o,
                    fileSize: n,
                    memorySize: i,
                    logLevel: d,
                    sei: p,
                    minBufferSize: v,
                    maxDecoderVCacheLength: y,
                    maxDecoderACacheLength: g,
                    renderType: w,
                    resample: b
                };
                return 0 !== d && console.log("%c[PM][" + z() + "][" + Ce + "] configureDecoder", "color:#2ca71a", k),
                t.callWorker("configure", k).catch(function(e) {
                    throw t.status = P.ERROR,
                    e
                })
            }
        }, {
            key: "setDecodeMode",
            value: function(e) {
                var t = this;
                if (e === t[Re])
                    return Promise.resolve(0);
                var r = t[Re];
                return t[Re] = e,
                t.callWorker("setDecodeMode", e).catch(function(e) {
                    throw t[Re] = r,
                    e
                })
            }
        }, {
            key: "setKeyList",
            value: function(e) {
                var t = this;
                if (e === t[Re])
                    return Promise.resolve(0);
                var r = t[Re];
                return t[Re] = e,
                t.callWorker("setKeyList", e).catch(function(e) {
                    throw t[Re] = r,
                    e
                })
            }
        }, {
            key: "shiftFrameData",
            value: function(e) {
                var t = this;
                return t.callWorker("shiftFrameData", e).then(function(e) {
                    return 0 === e.length && t.status === P.DONE ? "done" : e
                })
            }
        }, {
            key: "seek",
            value: function(e) {
                return this.callWorker("seek", {
                    isHls: this.getPlayerProps("isHls"),
                    time: e
                })
            }
        }, {
            key: "start",
            value: function() {
                var t = this;
                return t.status === P.WORKING ? Promise.resolve("runing!") : (t.status = P.WORKING,
                0 !== t.getPlayerProps("logLevel") && console.log("%c[PM][" + z() + "][" + Ce + "] start", "color:#2ca71a"),
                t.callWorker("start").then(function(e) {
                    return t.emit("started"),
                    e
                }, function(e) {
                    throw t.status = P.FAILED,
                    e
                }))
            }
        }, {
            key: "pause",
            value: function() {
                var t = this;
                return t.callWorker("pause").then(function(e) {
                    return t.status = P.PAUSE,
                    t.emit("paused"),
                    e
                })
            }
        }, {
            key: "stop",
            value: function() {
                var t = this;
                return t.callWorker("stop").then(function(e) {
                    return t.status = P.STOP,
                    t.emit("stoped"),
                    e
                })
            }
        }, {
            key: "uninstall",
            value: function() {
                var e = this;
                return this.stop().then(function() {
                    return H(c(t.prototype), "uninstall", e).call(e)
                })
            }
        }, {
            key: "_done",
            value: function() {
                this.status = P.DONE,
                this.emit("done")
            }
        }, {
            key: "_syncStreamData",
            value: function() {
                var t = this;
                if (t.status !== t.KILLED) {
                    var e = t.mod(Te);
                    if (!e)
                        return console.warn(Te + " Not ready.");
                    var r = t.getPlayerProps()
                      , n = r.chunkSize
                      , a = r.logLevel
                      , o = r.isLive;
                    t._nnn++;
                    var i = t._nnn;
                    1 < a && console.warn("Decoder._syncStreamData.start", i),
                    e.shiftStreamData({
                        chunkSize: n
                    }).then(function(e) {
                        1 < a && console.warn("Decoder._syncStreamData.back", i, e),
                        t.seeking || ("done" === e ? o ? t._done() : (t.callWorker("setStreamFinish"),
                        t.emit("streamFinish")) : e && (e.dd = window._show_qhww_dd,
                        t.callWorker("input", e, e.buffer).catch(function(e) {
                            return 0 !== a && console.warn("Send Data to Decoder Error:", e),
                            e
                        })))
                    })
                }
            }
        }]),
        t
    }();
    f(Me, "modName", Ce);
    var Fe = e(function(e) {
        var t = function(o) {
            var u, e = Object.prototype, l = e.hasOwnProperty, t = "function" == typeof Symbol ? Symbol : {}, a = t.iterator || "@@iterator", r = t.asyncIterator || "@@asyncIterator", n = t.toStringTag || "@@toStringTag";
            function i(e, t, r, n) {
                var a = Object.create((t && t.prototype instanceof s ? t : s).prototype)
                  , o = new E(n || []);
                return a._invoke = function(o, i, s) {
                    var u = h;
                    return function(e, t) {
                        if (u === d)
                            throw Error("Generator is already running");
                        if (u === m) {
                            if ("throw" === e)
                                throw t;
                            return L()
                        }
                        for (s.method = e,
                        s.arg = t; ; ) {
                            var r = s.delegate;
                            if (r) {
                                var n = x(r, s);
                                if (n) {
                                    if (n === p)
                                        continue;
                                    return n
                                }
                            }
                            if ("next" === s.method)
                                s.sent = s._sent = s.arg;
                            else if ("throw" === s.method) {
                                if (u === h)
                                    throw u = m,
                                    s.arg;
                                s.dispatchException(s.arg)
                            } else
                                "return" === s.method && s.abrupt("return", s.arg);
                            u = d;
                            var a = c(o, i, s);
                            if ("normal" === a.type) {
                                if (u = s.done ? m : f,
                                a.arg === p)
                                    continue;
                                return {
                                    value: a.arg,
                                    done: s.done
                                }
                            }
                            "throw" === a.type && (u = m,
                            s.method = "throw",
                            s.arg = a.arg)
                        }
                    }
                }(e, r, o),
                a
            }
            function c(e, t, r) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, r)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            o.wrap = i;
            var h = "suspendedStart"
              , f = "suspendedYield"
              , d = "executing"
              , m = "completed"
              , p = {};
            function s() {}
            function v() {}
            function y() {}
            var g = {};
            g[a] = function() {
                return this
            }
            ;
            var w = Object.getPrototypeOf
              , _ = w && w(w(S([])));
            _ && _ !== e && l.call(_, a) && (g = _);
            var b = y.prototype = s.prototype = Object.create(g);
            function k(e) {
                ["next", "throw", "return"].forEach(function(t) {
                    e[t] = function(e) {
                        return this._invoke(t, e)
                    }
                })
            }
            function P(u) {
                var t;
                this._invoke = function(r, n) {
                    function e() {
                        return new Promise(function(e, t) {
                            !function t(e, r, n, a) {
                                var o = c(u[e], u, r);
                                if ("throw" !== o.type) {
                                    var i = o.arg
                                      , s = i.value;
                                    return s && "object" == typeof s && l.call(s, "__await") ? Promise.resolve(s.__await).then(function(e) {
                                        t("next", e, n, a)
                                    }, function(e) {
                                        t("throw", e, n, a)
                                    }) : Promise.resolve(s).then(function(e) {
                                        i.value = e,
                                        n(i)
                                    }, function(e) {
                                        return t("throw", e, n, a)
                                    })
                                }
                                a(o.arg)
                            }(r, n, e, t)
                        }
                        )
                    }
                    return t = t ? t.then(e, e) : e()
                }
            }
            function x(e, t) {
                var r = e.iterator[t.method];
                if (r === u) {
                    if (t.delegate = null,
                    "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return",
                        t.arg = u,
                        x(e, t),
                        "throw" === t.method))
                            return p;
                        t.method = "throw",
                        t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return p
                }
                var n = c(r, e.iterator, t.arg);
                if ("throw" === n.type)
                    return t.method = "throw",
                    t.arg = n.arg,
                    t.delegate = null,
                    p;
                var a = n.arg;
                return a ? a.done ? (t[e.resultName] = a.value,
                t.next = e.nextLoc,
                "return" !== t.method && (t.method = "next",
                t.arg = u),
                t.delegate = null,
                p) : a : (t.method = "throw",
                t.arg = new TypeError("iterator result is not an object"),
                t.delegate = null,
                p)
            }
            function q(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function D(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function E(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(q, this),
                this.reset(!0)
            }
            function S(t) {
                if (t) {
                    var e = t[a];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var r = -1
                          , n = function e() {
                            for (; ++r < t.length; )
                                if (l.call(t, r))
                                    return e.value = t[r],
                                    e.done = !1,
                                    e;
                            return e.value = u,
                            e.done = !0,
                            e
                        };
                        return n.next = n
                    }
                }
                return {
                    next: L
                }
            }
            function L() {
                return {
                    value: u,
                    done: !0
                }
            }
            return v.prototype = b.constructor = y,
            y.constructor = v,
            y[n] = v.displayName = "GeneratorFunction",
            o.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            o.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y,
                n in e || (e[n] = "GeneratorFunction")),
                e.prototype = Object.create(b),
                e
            }
            ,
            o.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            k(P.prototype),
            P.prototype[r] = function() {
                return this
            }
            ,
            o.AsyncIterator = P,
            o.async = function(e, t, r, n) {
                var a = new P(i(e, t, r, n));
                return o.isGeneratorFunction(t) ? a : a.next().then(function(e) {
                    return e.done ? e.value : a.next()
                })
            }
            ,
            k(b),
            b[n] = "Generator",
            b[a] = function() {
                return this
            }
            ,
            b.toString = function() {
                return "[object Generator]"
            }
            ,
            o.keys = function(r) {
                var n = [];
                for (var e in r)
                    n.push(e);
                return n.reverse(),
                function e() {
                    for (; n.length; ) {
                        var t = n.pop();
                        if (t in r)
                            return e.value = t,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            o.values = S,
            E.prototype = {
                constructor: E,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = u,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = u,
                    this.tryEntries.forEach(D),
                    !e)
                        for (var t in this)
                            "t" == t[0] && l.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = u)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(r) {
                    if (this.done)
                        throw r;
                    var n = this;
                    function e(e, t) {
                        return o.type = "throw",
                        o.arg = r,
                        n.next = e,
                        t && (n.method = "next",
                        n.arg = u),
                        !!t
                    }
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var a = this.tryEntries[t]
                          , o = a.completion;
                        if ("root" === a.tryLoc)
                            return e("end");
                        if (a.tryLoc <= this.prev) {
                            var i = l.call(a, "catchLoc")
                              , s = l.call(a, "finallyLoc");
                            if (i && s) {
                                if (this.prev < a.catchLoc)
                                    return e(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc)
                                    return e(a.finallyLoc)
                            } else if (i) {
                                if (this.prev < a.catchLoc)
                                    return e(a.catchLoc, !0)
                            } else {
                                if (!s)
                                    throw Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc)
                                    return e(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                        var n = this.tryEntries[r];
                        if (n.tryLoc <= this.prev && l.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var a = n;
                            break
                        }
                    }
                    !a || "break" !== e && "continue" !== e || t < a.tryLoc || a.finallyLoc < t || (a = null);
                    var o = a ? a.completion : {};
                    return o.type = e,
                    o.arg = t,
                    a ? (this.method = "next",
                    this.next = a.finallyLoc,
                    p) : this.complete(o)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    p
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e)
                            return this.complete(r.completion, r.afterLoc),
                            D(r),
                            p
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var a = n.arg;
                                D(r)
                            }
                            return a
                        }
                    }
                    throw Error("illegal catch attempt")
                },
                delegateYield: function(e, t, r) {
                    return this.delegate = {
                        iterator: S(e),
                        resultName: t,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = u),
                    p
                }
            },
            o
        }(e.exports);
        try {
            regeneratorRuntime = t
        } catch (e) {
            Function("r", "regeneratorRuntime = r")(t)
        }
    });
    function Oe(e, t, r, n, a, o, i) {
        try {
            var s = e[o](i)
              , u = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(u) : Promise.resolve(u).then(n, a)
    }
    var Ae = function(s) {
        return function() {
            var e = this
              , i = arguments;
            return new Promise(function(t, r) {
                var n = s.apply(e, i);
                function a(e) {
                    Oe(n, t, r, a, o, "next", e)
                }
                function o(e) {
                    Oe(n, t, r, a, o, "throw", e)
                }
                a(void 0)
            }
            )
        }
    }
      , Ne = function() {
        function n(e) {
            var t = e.onUpdate
              , r = e.frameDelay;
            i(this, n),
            this._initData(r, t)
        }
        return o(n, [{
            key: "_initData",
            value: function(e, t) {
                var r = this;
                return r.timer_id = null,
                r._prev_ts = 0,
                r.frameDelay = e || 10,
                r.frameDelay10x = 10 * r.frameDelay,
                r.onUpdate = t,
                r
            }
        }, {
            key: "start",
            value: function() {
                var e = this;
                clearTimeout(e.timer_id);
                var t = j()
                  , r = e._prev_ts
                  , n = 0;
                return 0 !== r && r < t && (n = Math.min(e.frameDelay10x, t - r)),
                e.onUpdate && e.onUpdate.call(e, n, t),
                e._prev_ts = t,
                e.timer_id = setTimeout(function() {
                    return e.start()
                }, e.frameDelay),
                e
            }
        }, {
            key: "stop",
            value: function() {
                return this.start(),
                clearTimeout(this.timer_id),
                this._prev_ts = 0,
                this
            }
        }, {
            key: "destroy",
            value: function() {
                this.stop(),
                delete this.onUpdate
            }
        }]),
        n
    }()
      , ze = I("NotSupportedError", -110)
      , We = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0])
      , Ie = new Float32Array([1, 0, 0, 0, 1, 1, 0, 1])
      , je = function() {
        function t(e) {
            i(this, t),
            this.gl = e,
            this.texture = e.createTexture(),
            e.bindTexture(e.TEXTURE_2D, this.texture),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)
        }
        return o(t, [{
            key: "bind",
            value: function(e, t, r) {
                var n = this.gl;
                n.activeTexture([n.TEXTURE0, n.TEXTURE1, n.TEXTURE2][t]),
                n.bindTexture(n.TEXTURE_2D, this.texture),
                n.uniform1i(n.getUniformLocation(r, e), t)
            }
        }, {
            key: "fill",
            value: function(e, t, r) {
                var n = this.gl;
                n.bindTexture(n.TEXTURE_2D, this.texture),
                n.texImage2D(n.TEXTURE_2D, 0, n.LUMINANCE, e, t, 0, n.LUMINANCE, n.UNSIGNED_BYTE, r)
            }
        }, {
            key: "destroy",
            value: function() {
                this.gl.deleteTexture(this.texture),
                this.gl = null
            }
        }]),
        t
    }()
      , Ue = function() {
        function t(e) {
            i(this, t),
            this._initData(e)._init(e)
        }
        return o(t, [{
            key: "_initData",
            value: function(e) {
                var t = this;
                return t.canvas = e,
                t.gl = t.y = t.u = t.v = t.viewMode = null,
                t.videoWidth = 0,
                t.videoHeight = 0,
                t.halfWidth = 0,
                t.halfHeight = 0,
                t.uOffset = 0,
                t.vOffset = 0,
                t
            }
        }, {
            key: "_init",
            value: function(e) {
                var t, r = this;
                try {
                    t = r.gl = e.getContext("webgl") || e.getContext("experimental-webgl")
                } catch (e) {
                    throw new ze("YuvRenderer.constructor get WebGL context failed! " + (e && e.stack || e))
                }
                t.pixelStorei(t.UNPACK_ALIGNMENT, 1);
                var n = t.createProgram()
                  , a = t.createShader(t.VERTEX_SHADER);
                t.shaderSource(a, "\n  attribute highp vec4 aVertexPosition;\n  attribute vec2 aTextureCoord;\n  varying highp vec2 vTextureCoord;\n  void main(void) {\n    gl_Position = aVertexPosition;\n    vTextureCoord = aTextureCoord;\n  }\n"),
                t.compileShader(a);
                var o = t.createShader(t.FRAGMENT_SHADER);
                if (t.shaderSource(o, "\n  precision highp float;\n  varying lowp vec2 vTextureCoord;\n  uniform sampler2D YTexture;\n  uniform sampler2D UTexture;\n  uniform sampler2D VTexture;\n  const mat4 YUV2RGB = mat4(\n    1.1643828125, 0, 1.59602734375, -.87078515625,\n    1.1643828125, -.39176171875, -.81296875, .52959375,\n    1.1643828125, 2.017234375, 0, -1.081390625,\n    0, 0, 0, 1\n  );\n  void main(void) {\n    gl_FragColor = vec4( texture2D(YTexture, vTextureCoord).x, texture2D(UTexture, vTextureCoord).x, texture2D(VTexture, vTextureCoord).x, 1) * YUV2RGB;\n  }\n"),
                t.compileShader(o),
                t.attachShader(n, a),
                t.attachShader(n, o),
                t.linkProgram(n),
                t.useProgram(n),
                !t.getProgramParameter(n, t.LINK_STATUS))
                    throw new ze("YuvRenderer.constructor Shader link failed!");
                var i = t.getAttribLocation(n, "aVertexPosition");
                t.enableVertexAttribArray(i);
                var s = t.getAttribLocation(n, "aTextureCoord");
                t.enableVertexAttribArray(s);
                var u = t.createBuffer();
                t.bindBuffer(t.ARRAY_BUFFER, u),
                t.bufferData(t.ARRAY_BUFFER, We, t.STATIC_DRAW),
                t.vertexAttribPointer(i, 3, t.FLOAT, !1, 0, 0);
                var l = t.createBuffer();
                return t.bindBuffer(t.ARRAY_BUFFER, l),
                t.bufferData(t.ARRAY_BUFFER, Ie, t.STATIC_DRAW),
                t.vertexAttribPointer(s, 2, t.FLOAT, !1, 0, 0),
                r.y = new je(t),
                r.u = new je(t),
                r.v = new je(t),
                r.y.bind("YTexture", 0, n),
                r.u.bind("UTexture", 1, n),
                r.v.bind("VTexture", 2, n),
                r
            }
        }, {
            key: "configure",
            value: function(e, t, r, n) {
                var a = 3 < arguments.length && void 0 !== n ? n : "cover";
                return this.setViewport(0 < arguments.length && void 0 !== e ? e : 0, 1 < arguments.length && void 0 !== t ? t : 0).setViewMode(a)
            }
        }, {
            key: "isRenderDone",
            value: function() {
                return !0
            }
        }, {
            key: "setViewport",
            value: function(e, t) {
                var r = this
                  , n = r.gl;
                if (!n)
                    throw new ze("YuvRenderer.setViewport get WebGL context failed! ");
                var a = r.canvas;
                return r.videoWidth = e,
                r.videoHeight = t,
                r.halfWidth = e >> 1,
                r.halfHeight = t >> 1,
                r.uOffset = e * t,
                r.vOffset = 1.25 * r.uOffset,
                n.viewport(0, 0, a.width = e, a.height = t),
                r
            }
        }, {
            key: "setViewMode",
            value: function(e) {
                var t = 0 < arguments.length && void 0 !== e ? e : "cover"
                  , r = this;
                if (r.viewMode === t)
                    return r;
                var n = r.videoHeight < r.videoWidth
                  , a = "auto"
                  , o = "auto";
                return "cover" === t ? n ? a = "100%" : o = "100%" : "contain" === t && (n ? o = "100%" : a = "100%"),
                me(r.canvas, {
                    width: a,
                    height: o
                }),
                r.viewMode = t,
                r
            }
        }, {
            key: "render",
            value: function(e, t, r) {
                var n = this
                  , a = n.gl;
                if (!a)
                    throw new ze("YuvRenderer.render get WebGL context failed! ");
                n.videoWidth === t && n.videoHeight === r || n.setViewport(t, r);
                var o = n.halfWidth
                  , i = n.halfHeight
                  , s = n.uOffset
                  , u = n.vOffset;
                a.clearColor(0, 0, 0, 0),
                a.clear(a.COLOR_BUFFER_BIT),
                e = new Uint8Array(e),
                n.y.fill(n.videoWidth, n.videoHeight, e.subarray(0, s)),
                n.u.fill(o, i, e.subarray(s, u)),
                n.v.fill(o, i, e.subarray(u, e.length)),
                a.drawArrays(a.TRIANGLE_STRIP, 0, 4)
            }
        }, {
            key: "destroy",
            value: function() {
                var e = this
                  , t = e.gl;
                t && t.clear(t.DEPTH_BUFFER_BIT | t.COLOR_BUFFER_BIT),
                e.y && e.y.destroy(),
                e.u && e.u.destroy(),
                e.v && e.v.destroy(),
                e._initData()
            }
        }]),
        t
    }();
    function Ve(t, e) {
        var r = Object.keys(t);
        return Object.getOwnPropertySymbols && r.push.apply(r, Object.getOwnPropertySymbols(t)),
        e && (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })),
        r
    }
    function Qe(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Ve(r, !0).forEach(function(e) {
                f(t, e, r[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ve(r).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return t
    }
    var Be = function() {
        function t() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            i(this, t),
            A(this, Qe({
                hooks: F(e),
                map: new Map,
                _idx: 0
            }, e.props))
        }
        return o(t, [{
            key: "isEmpty",
            value: function() {
                return 0 === this.map.size
            }
        }, {
            key: "has",
            value: function(e) {
                return this.map.has(e)
            }
        }, {
            key: "get",
            value: function(e, t) {
                var r = 1 < arguments.length && void 0 !== t && t
                  , n = this.map.get(e);
                return this.hooks.get ? this.hooks.get.call(this, n) : r ? n : n && n.data
            }
        }, {
            key: "firstIdx",
            value: function() {
                if (!this.isEmpty())
                    return Array.from(this.map.keys())[0]
            }
        }, {
            key: "lastIdx",
            value: function() {
                if (!this.isEmpty()) {
                    var e = Array.from(this.map.keys());
                    return e[e.length - 1]
                }
            }
        }, {
            key: "first",
            value: function(e) {
                var t = 0 < arguments.length && void 0 !== e && e;
                if (!this.isEmpty())
                    return this.get(this.firstIdx(), t)
            }
        }, {
            key: "last",
            value: function(e) {
                var t = 0 < arguments.length && void 0 !== e && e;
                if (!this.isEmpty())
                    return this.get(this.lastIdx(), t)
            }
        }, {
            key: "shift",
            value: function(e) {
                var t = 0 < arguments.length && void 0 !== e && e
                  , r = this.first(!0);
                if (r)
                    return this.del(r.idx),
                    t ? r : r.data
            }
        }, {
            key: "add",
            value: function(e) {
                var t = this
                  , r = t._idx + 1
                  , n = {
                    idx: r,
                    data: e
                };
                return !(t.hooks.add && !t.hooks.add.call(t, n)) && (t._idx = r,
                t.map.set(r, n),
                !0)
            }
        }, {
            key: "del",
            value: function(e) {
                var t = this;
                if (t.hooks.del) {
                    var r = t.get(e, !0);
                    if (!t.hooks.del.call(t, r))
                        return !1
                }
                return t.map.delete(e)
            }
        }, {
            key: "iterate",
            value: function(e) {
                var a = 0 < arguments.length && void 0 !== e ? e : function() {}
                  , o = this
                  , i = o.map.entries();
                return function e() {
                    var t = i.next()
                      , r = t.value
                      , n = t.done;
                    a.call(o, Qe({}, r ? r[1] : null, {
                        done: n
                    }), n ? function() {}
                    : e)
                }(),
                o
            }
        }, {
            key: "clear",
            value: function() {
                return this.map.clear(),
                this._idx = 0,
                this
            }
        }, {
            key: "size",
            get: function() {
                return this.map.size
            }
        }]),
        t
    }()
      , He = I("NotSupportedError", -110)
      , Ye = [{
        Cls: Int8Array,
        max: 128
    }, {
        Cls: Int16Array,
        max: 32768
    }, {
        Cls: Int32Array,
        max: 2147483648
    }, {
        Cls: Float32Array,
        max: 1
    }]
      , Ke = function() {
        function a(e, t, r, n) {
            i(this, a),
            this._initData()._init(e, t),
            this.pcmQueue = new Be,
            this.onWaiting = r,
            this.onPlaying = n
        }
        return o(a, [{
            key: "_initData",
            value: function() {
                var e = this;
                return e.audioCtx = null,
                e.gainNode = null,
                e.lastAudioNode = null,
                e.insterOffset = 0,
                e.prevCurrTime = 0,
                e.endTime = 0,
                e.ArrCls = null,
                e.arrMax = null,
                e.channels = null,
                e.sampleRate = null,
                e._waiting_timer = null,
                e.isWaiting = !1,
                e.has_playing = !1,
                e.onWaiting = null,
                e.onPlaying = null,
                e.rate = 1,
                e
            }
        }, {
            key: "_init",
            value: function(e, t) {
                var r = 0 < arguments.length && void 0 !== e ? e : 1
                  , n = 1 < arguments.length && void 0 !== t ? t : 4500
                  , a = this;
                try {
                    var o = a.audioCtx = new (window.AudioContext || window.webkitAudioContext)
                      , i = a.gainNode = o.createGain();
                    if (!isNaN(r))
                        try {
                            i.gain.value = r
                        } catch (e) {
                            console.warn("设置音量默认值失败，重置为1。", e),
                            i.gain.value = 1
                        }
                    a.lastAudioNode = i;
                    var s = a.lowpassFilter = o.createBiquadFilter();
                    s.type = "lowpass",
                    s.frequency.value = n,
                    (a.lastAudioNode = s).connect(i),
                    i.connect(o.destination)
                } catch (e) {
                    throw new He("PcmRenderer.constructor get AudioContext failed! " + (e && e.stack || e))
                }
            }
        }, {
            key: "configure",
            value: function(e, t, r) {
                var n = 0 < arguments.length && void 0 !== e ? e : 8e3
                  , a = 1 < arguments.length && void 0 !== t ? t : 1
                  , o = 2 < arguments.length && void 0 !== r ? r : 0
                  , i = this;
                i.insterOffset = 0,
                i.endTime = 0;
                var s = Ye[o || 0];
                if (!s)
                    return -2;
                i.ArrCls = s.Cls,
                i.arrMax = s.max,
                i.channels = a || 1,
                i.sampleRate = n || 8e3,
                !window.AudioContext && i.sampleRate < 22050 && (i.sampleRate = 22050)
            }
        }, {
            key: "refreshTSMap",
            value: function(r, e) {
                var n = this.pcmQueue;
                n.iterate(function(e, t) {
                    e.done || e.data.endTS < r && (n.del(e.idx),
                    t())
                }),
                0 === n.size && this._waiting(e)
            }
        }, {
            key: "pause",
            value: function() {
                return this.has_playing = !1,
                this._streamFinish = !1,
                this.isWaiting = !1,
                this._pause()
            }
        }, {
            key: "_pause",
            value: function() {
                var t = this;
                clearTimeout(t._waiting_timer);
                return (t.audioCtx && "running" === t.audioCtx.state ? t.audioCtx.suspend() : Promise.resolve("ok")).finally(function(e) {
                    return t.isWaiting && t.onWaiting && t.onWaiting(),
                    e
                })
            }
        }, {
            key: "play",
            value: function(e) {
                var t = this;
                t.has_playing = !0,
                t._play().finally(function() {
                    return t._waiting(e)
                })
            }
        }, {
            key: "_play",
            value: function() {
                var t = this;
                return (t.audioCtx && "suspended" === t.audioCtx.state ? t.audioCtx.resume() : Promise.resolve("ok")).finally(function(e) {
                    return t.isWaiting && t.onPlaying && t.onPlaying(),
                    t.isWaiting = !1,
                    e
                })
            }
        }, {
            key: "_waiting",
            value: function(e) {
                var t = this;
                if (t.has_playing) {
                    clearTimeout(t._waiting_timer);
                    var r = function() {
                        t._waiting_timer = setTimeout(function() {
                            return t._waiting(e)
                        }, 100)
                    };
                    t.isWaiting ? t._streamFinish || t.getCacheDuration() > e ? t._play() : r() : (t.isWaiting = !0,
                    t._pause().finally(r))
                }
            }
        }, {
            key: "setStreamFinish",
            value: function(e) {
                this._streamFinish = e
            }
        }, {
            key: "stop",
            value: function() {
                var e = this;
                e.pause(),
                Promise.resolve().then(function() {
                    return e.seek(0)
                })
            }
        }, {
            key: "seek",
            value: function(e, t) {
                var r = this;
                r.pcmQueue.iterate(function(e, t) {
                    e.done || (e.data.bufferSource.stop(),
                    t())
                }).clear(),
                r.insterOffset = 0,
                r.prevCurrTime = e,
                r._streamFinish = !1,
                r._waiting(t)
            }
        }, {
            key: "setVolume",
            value: function(e) {
                var t = this.gainNode;
                t && t.gain && (t.gain.value = e)
            }
        }, {
            key: "setLowpassFrequencyVal",
            value: function(e) {
                var t = this.lowpassFilter;
                t && t.frequency && (t.frequency.value = e)
            }
        }, {
            key: "getTimestamp",
            value: function(e) {
                var t = this
                  , r = t.currentTime;
                t.refreshTSMap(r, e);
                var n = t.pcmQueue.first();
                if (!n)
                    return t.prevCurrTime;
                var a = (r - n.staTS) * n.rate + n.dataTS;
                return t.prevCurrTime = a
            }
        }, {
            key: "getCacheCount",
            value: function() {
                return this.pcmQueue.size
            }
        }, {
            key: "isRenderDone",
            value: function() {
                return 0 === this.getCacheCount()
            }
        }, {
            key: "getCacheDuration",
            value: function() {
                var e = this.pcmQueue;
                if (0 === e.size)
                    return 0;
                var t = e.first().staTS;
                return e.last().endTS - t
            }
        }, {
            key: "render",
            value: function(e, t, r) {
                var n = e.buffer
                  , a = e.timestamp
                  , o = 1 < arguments.length && void 0 !== t ? t : 1
                  , i = 2 < arguments.length ? r : void 0
                  , s = this;
                s.rate = o;
                var u = s.audioCtx
                  , l = new s.ArrCls(n)
                  , c = l.length;
                c || console.error("音频数据异常！");
                var h = l;
                1 !== s.arrMax && (h = new Float32Array(c),
                l.forEach(function(e, t) {
                    h[t] = e / s.arrMax
                }));
                for (var f = u.createBufferSource(), d = s.channels, m = c / d, p = u.createBuffer(d, m, s.sampleRate), v = 0; v < d; v++)
                    for (var y = p.getChannelData(v), g = v, w = 0; w < m; w++)
                        y[w] = h[g],
                        g += d;
                f.playbackRate.value = o,
                f.buffer = p,
                f.connect(s.lastAudioNode);
                var _ = s.currentTime;
                s.insterOffset < _ && (s.insterOffset = _),
                f.start(s.insterOffset / 1e3);
                var b = 1e3 * p.duration
                  , k = b / o
                  , P = s.insterOffset;
                s.refreshTSMap(_, i),
                s.pcmQueue.add({
                    bufferSource: f,
                    dataTS: a,
                    dur: b,
                    staTS: P,
                    rate: o,
                    rateDur: k,
                    endTS: P + k
                }),
                s.endTime += k,
                s.insterOffset += k
            }
        }, {
            key: "destroy",
            value: function() {
                this.stop(),
                this.audioCtx && this.audioCtx.close(),
                this._initData()
            }
        }, {
            key: "currentTime",
            get: function() {
                return this.audioCtx ? 1e3 * this.audioCtx.currentTime : 0
            }
        }]),
        a
    }()
      , Ge = Symbol("timer")
      , Xe = Symbol("pcm_renderer")
      , $e = Symbol("pcm_cache")
      , Je = Symbol("yuv_renderer")
      , Ze = Symbol("yuv_cache")
      , et = Symbol("yuv_ts")
      , tt = d.RENDERER
      , rt = d.DECODER
      , nt = function() {
        function t() {
            var e;
            return i(this, t),
            e = u(this, c(t).call(this, {
                hasPCM: !1,
                hasYUV: !1,
                yuvRenderFPS: 0,
                seeking: !1
            })),
            f(s(e), "_decoderyYuvQueueDur", 0),
            f(s(e), "_decoderPcmQueueDur", 0),
            f(s(e), "_lock_yuv", !1),
            f(s(e), "_lock_pcm", !1),
            f(s(e), "_yuv_playing", null),
            e[Ge] = null,
            e[et] = 0,
            e
        }
        var e;
        return h(t, ae),
        o(t, [{
            key: "install",
            value: function() {
                var l = this;
                l.status = P.IDLE;
                var e = l.getPlayerProps()
                  , t = e.canvas
                  , r = e.volume
                  , n = e.lowpassFrequencyVal;
                l._initWatingCbk(),
                l[Xe] = new Ke(r,n,l.emitWaiting,l.emitPlaying),
                l[$e] = [],
                l[Je] = new Ue(t);
                var c = 0
                  , h = !(l[Ze] = []);
                return l[Ge] = new Ne({
                    frameDelay: 10,
                    onUpdate: function(e) {
                        var t = l.getPlayerProps()
                          , r = t.delayTimeLimit
                          , n = t.rtwPlaybackRate
                          , a = t.logLevel;
                        if (r && 1 === t.playbackRate) {
                            var o = l.hasPCM ? l.getPcmCacheDuration() + l._decoderPcmQueueDur : l.getYuvCacheDuration() + l._decoderyYuvQueueDur;
                            if (1.414 * r < o) {
                                h = h || !0;
                                var i = o - r
                                  , s = 1 + Math.max(n - 1, .212) * Math.min(1, i / r / 2);
                                l.setPlayerProps("_chasePlaybackRate", s),
                                (a || window._qhww_writ_chase_log) && console.log("[PM][" + z() + "][Renderer]缓存帧时长多出 " + i + "ms，启用追帧，追帧倍速：", s)
                            } else
                                h && o < r / 2 && (h = !1,
                                l.setPlayerProps("_chasePlaybackRate", 0),
                                (a || window._qhww_writ_chase_log) && console.log("[PM][" + z() + "][Renderer]缓存帧时长恢复到理想值，退出追帧。"))
                        }
                        l.hasPCM && l.renderPCM(),
                        l.hasYUV && l.renderYUV(e);
                        var u = j();
                        l.status !== P.DONE && 0 !== c && u - c <= 200 || (l.emit("timeupdate", {
                            currentTime: l.getCurrentTime(),
                            yuvCacheLength: l[Ze].length,
                            yuvRenderFPS: l.yuvRenderFPS || 0,
                            pcmCacheLength: l[$e].length,
                            pcmRenderLength: l[Xe].getCacheCount(),
                            pcmRenderCacheDuration: l.getPcmCacheDuration(),
                            yuvRenderCacheDuration: l.getYuvCacheDuration(),
                            pcmDecoderCacheDuration: l._decoderPcmQueueDur,
                            yuvDecoderCacheDuration: l._decoderyYuvQueueDur
                        }),
                        c = u)
                    }
                }),
                l.listener(),
                Promise.resolve("[" + tt + "] installed.")
            }
        }, {
            key: "_initWatingCbk",
            value: function() {
                function t() {
                    e.__ew_timer && (clearTimeout(e.__ew_timer),
                    e.__ew_timer = null)
                }
                var r = this
                  , e = this;
                e.emitWaiting = function() {
                    var e = r;
                    e.__ew_timer || e.__waiting__ || (e.__ew_timer = setTimeout(function() {
                        t(),
                        e.status === P.WORKING && (e.__waiting__ = !0,
                        e.emit("waiting"))
                    }, e.getPlayerProps("waitingProbation") || 100))
                }
                ,
                e.emitPlaying = function() {
                    t(),
                    e.__waiting__ && (e.__waiting__ = !1,
                    Promise.resolve().then(function() {
                        return e.emit("playing")
                    }))
                }
            }
        }, {
            key: "listener",
            value: function() {
                var e, l = this;
                H(c(t.prototype), "listener", this).call(this, (f(e = {
                    play: function() {
                        l.play()
                    },
                    pause: function() {
                        l.pause()
                    },
                    stop: function() {
                        l.stop()
                    },
                    viewModeChange: function(e) {
                        l.setViewMode(e.data)
                    },
                    volumeChange: function(e) {
                        l.hasPCM && l[Xe].setVolume(e.data)
                    },
                    lowpassFrequencyValChange: function(e) {
                        l.hasPCM && l[Xe].setLowpassFrequencyVal(e.data)
                    },
                    seeking: function(e) {
                        var t = e.data;
                        return l.getPlayerProps("logLevel") && console.log(t, "Renderer.listener.seeking", +new Date),
                        l.status === P.DONE && (l.status = P.WORKING),
                        l.seeking = !0,
                        l.seek_time = t,
                        l.seek(t)
                    }
                }, "seeked." + rt, function() {
                    l.seeking = !1
                }),
                f(e, "info." + rt, function(e) {
                    var t = e.data
                      , r = void 0 === t ? {} : t
                      , n = r.audioSampleRate
                      , a = r.audioChannels
                      , o = r.audioSampleFmt
                      , i = r.videoWidth
                      , s = r.videoHeight
                      , u = r.videoPixFmt;
                    l.hasYUV = -1 !== u,
                    l.hasYUV && l[Je].configure(i, s, u),
                    l.hasPCM = -1 !== o,
                    l[Xe].onWaiting = l.hasPCM ? (l[Xe].configure(n, a, o),
                    l.emitWaiting) : null
                }),
                f(e, "streamFinish." + rt, function() {
                    l.hasPCM && l[Xe].setStreamFinish(!0)
                }),
                f(e, "yuvQueueDurChange." + rt, function(e) {
                    l._decoderyYuvQueueDur = e.data
                }),
                f(e, "pcmQueueDurChange." + rt, function(e) {
                    l._decoderPcmQueueDur = e.data
                }),
                e))
            }
        }, {
            key: "getPcmCacheDuration",
            value: function() {
                var e = this[$e]
                  , t = e.length
                  , r = e[t - 1];
                return (0 !== t ? r.timestamp - e[0].timestamp + r.duration : 0) + this[Xe].getCacheDuration()
            }
        }, {
            key: "getYuvCacheDuration",
            value: function() {
                var e = this[Ze]
                  , t = e.length;
                return 0 !== t ? e[t - 1].timestamp - e[0].timestamp + 20 : 0
            }
        }, {
            key: "moveFrameData",
            value: (e = Ae(Fe.mark(function e() {
                var t, r, n, a, o, i, s, u, l, c, h, f = arguments;
                return Fe.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (r = 1 < f.length && void 0 !== f[1] ? f[1] : Je,
                            n = 2 < f.length && void 0 !== f[2] ? f[2] : Ze,
                            (a = this)["_lock_" + (t = 0 < f.length && void 0 !== f[0] ? f[0] : "yuv")])
                                return e.abrupt("return");
                            e.next = 6;
                            break;
                        case 6:
                            if (o = a[n],
                            i = a.getPlayerProps(),
                            s = i._chasePlaybackRate,
                            1 === (u = i.playbackRate || 1) && (u = s || u),
                            o.length >= (l = 10 * u)) {
                                e.next = 21;
                                break
                            }
                            if (a["_lock_" + t] = !0,
                            c = a.mod(rt)) {
                                e.next = 16;
                                break
                            }
                            throw new TypeError(rt + " is undefined!");
                        case 16:
                            return e.next = 18,
                            c.shiftFrameData({
                                type: t,
                                count: l
                            });
                        case 18:
                            h = e.sent,
                            a["_lock_" + t] = !1,
                            "done" === h ? a[r].isRenderDone() && 0 === o.length && a.status !== P.DONE && a.status !== P.STOP && (a.status = P.DONE,
                            a.emit("done")) : 0 < h.length && !a.seeking && o.push.apply(o, w(h));
                        case 21:
                        case "end":
                            return e.stop()
                        }
                }, e, this)
            })),
            function() {
                return e.apply(this, arguments)
            }
            )
        }, {
            key: "renderPCM",
            value: function() {
                this.moveFrameData("pcm", Xe, $e);
                var e = this[$e];
                if (0 !== e.length) {
                    var t = this[Xe]
                      , r = this.getPlayerProps()
                      , n = r.pcmRenderDuration
                      , a = r.playbackRate
                      , o = r._chasePlaybackRate
                      , i = r.waitingPcmDur;
                    if (t.getCacheDuration() <= (n || 1e3)) {
                        var s = a || 1;
                        1 === s && (s = o || s),
                        t.render(e.shift(), s, i)
                    }
                }
            }
        }, {
            key: "renderYUV",
            value: function(e) {
                var t = this;
                t.moveFrameData("yuv");
                var r = t[Ze]
                  , n = r.length
                  , a = t.getPlayerProps()
                  , o = a.playbackRate
                  , i = a._chasePlaybackRate
                  , s = a.yuvRenderDelay
                  , u = a.waitingYuvNum;
                if (!t.hasPCM)
                    if (t._yuv_playing) {
                        if (0 === n)
                            return t._yuv_playing = !1,
                            void t.emitWaiting()
                    } else {
                        if (n < u)
                            return;
                        t._yuv_playing = !0,
                        t.emitPlaying()
                    }
                if (0 !== n) {
                    var l = o || 1;
                    1 === l && (l = i || l),
                    t[et] += e * l;
                    for (var c = t.getCurrentTime() + s, h = null, f = 0; f <= 0; ) {
                        var d = r[0];
                        if (void 0 === d)
                            break;
                        if (0 < (f = d.timestamp - c))
                            break;
                        h = r.shift()
                    }
                    if (h) {
                        var m = h.timestamp
                          , p = h.sei
                          , v = h.seiSize;
                        t[Je].render(h.buffer, h.width, h.height);
                        var y = j() % 1e3;
                        y < (t._fpt || 0) && (t.yuvRenderFPS = t._fp || 0,
                        t._fp = 0),
                        t._fp++,
                        t._fpt = y,
                        p && t.emit("seiUpdate", {
                            timestamp: m,
                            sei: p,
                            seiSize: v
                        })
                    }
                }
            }
        }, {
            key: "setViewMode",
            value: function(e) {
                this[Je].setViewMode(0 < arguments.length && void 0 !== e ? e : "cover")
            }
        }, {
            key: "getCurrentTime",
            value: function() {
                var e = this
                  , t = e.getPlayerProps()
                  , r = t.duration;
                return t.isLive || e.status !== P.DONE ? e.hasPCM ? e[Xe].getTimestamp(t.waitingPcmDur) : e[et] : r
            }
        }, {
            key: "getYuvCurrTime",
            value: function() {
                return this[et]
            }
        }, {
            key: "getYuvCurrTime",
            value: function() {
                return this[et]
            }
        }, {
            key: "play",
            value: function() {
                var e = this;
                e.status = P.WORKING,
                e[Ge].start(),
                e[Xe].play(e.getPlayerProps("waitingPcmDur")),
                e.emit("play")
            }
        }, {
            key: "pause",
            value: function() {
                var e = this;
                e[Ge].stop(),
                e[Xe].pause(),
                e._yuv_playing = null,
                e.status = P.PAUSE,
                e.emit("paused")
            }
        }, {
            key: "stop",
            value: function() {
                var e = this;
                Promise.resolve().then(function() {
                    return e.seek(0)
                }),
                e[Ge].stop(),
                e[Xe].stop(),
                e.seeking = !1,
                e.seek_time = null,
                e.hasYUV = !1,
                e.hasPCM = !1,
                e._yuv_playing = null,
                e.status = P.STOP,
                e._decoderyYuvQueueDur = 0,
                e._decoderPcmQueueDur = 0,
                e.emit("stoped")
            }
        }, {
            key: "seek",
            value: function(e) {
                var t = this;
                t[Xe].seek(e, t.getPlayerProps("waitingPcmDur")),
                t[$e].length = 0,
                t[Ze].length = 0,
                t[et] = e || 0
            }
        }, {
            key: "uninstall",
            value: function() {
                return this.stop(),
                this[Je].destroy(),
                this[Xe].destroy(),
                H(c(t.prototype), "uninstall", this).call(this)
            }
        }]),
        t
    }();
    f(nt, "modName", tt);
    var at = Object.values(d)
      , ot = Symbol("mods")
      , it = Symbol("props")
      , st = I("InstallModError", -1)
      , ut = d.RENDERER
      , lt = function() {
        function a() {
            var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            i(this, a),
            e = u(this, c(a).call(this));
            var r = s(e);
            r[ot] = F(),
            r[it] = F(),
            r._initPlayerProps(t);
            var n = r.getPlayerProps("mods");
            return n && 0 < n.length && r.installMod(n).then(function(e) {
                return r.setPlayerProps("ready", !0),
                r.emit("ready", e),
                r.getPlayerProps("autoplay") && r.play(),
                e
            }, function(e) {
                throw r.emitError(e),
                e
            }),
            r._transEvent(),
            e
        }
        return h(a, $),
        o(a, [{
            key: "_transEvent",
            value: function() {
                var s = this
                  , u = {}
                  , l = {};
                s.on("*", function(e) {
                    var t = e.target
                      , r = e.type
                      , n = e.data;
                    if (/error\./.test(r) && s.emitError(n),
                    0 !== s.getPlayerProps("logLevel")) {
                        var a = t && t.constructor.modName || "?Mod?"
                          , o = function(e) {
                            return console.log("%c[PM][" + z() + "][" + a + "]" + r + (e ? ", num/5s: " + e : ""), "color:blue", n)
                        };
                        if (/(data|timeupdate|streamQueueChange|yuvQueueChange|yuvQueueDurChange|pcmQueueChange|pcmQueueDurChange|durationChange|seiUpdate)\./.test(r)) {
                            var i = new Date;
                            l[r] = (l[r] || 0) + 1,
                            u[r] && i - u[r] <= 5e3 || (o(l[r]),
                            l[r] = 0,
                            u[r] = i)
                        } else
                            o()
                    }
                })
            }
        }, {
            key: "emitError",
            value: function(e, t) {
                this.setPlayerProps("error", e),
                this.emit("error", e, t || this),
                this.stop()
            }
        }, {
            key: "play",
            value: function() {
                var t = this;
                return t.getPlayerProps("paused") ? (t.setPlayerProps({
                    ended: !1,
                    paused: !1,
                    stoped: !1
                }),
                t.asyncEmit("play").catch(function(e) {
                    t.emitError(e)
                })) : Promise.resolve("playing!")
            }
        }, {
            key: "pause",
            value: function() {
                return this.getPlayerProps("paused") ? Promise.resolve("paused!") : (this.setPlayerProps("paused", !0),
                this.asyncEmit("pause"))
            }
        }, {
            key: "stop",
            value: function() {
                return this.setPlayerProps({
                    paused: !0,
                    stoped: !0
                }),
                this.asyncEmit("stop")
            }
        }, {
            key: "setVolume",
            value: function(t) {
                var r = this;
                return t = Math.min(t || 0, r.getPlayerProps("maxVolume")),
                r.asyncEmit("volumeChange", t).then(function(e) {
                    return r.setPlayerProps("volume", t),
                    e
                })
            }
        }, {
            key: "setLowpassFrequencyVal",
            value: function(t) {
                var r = this;
                return r.asyncEmit("lowpassFrequencyValChange", t).then(function(e) {
                    return r.setPlayerProps("lowpassFrequencyVal", t),
                    e
                })
            }
        }, {
            key: "setPlaybackRate",
            value: function(t) {
                var r = this;
                return r.asyncEmit("rateChange", t).then(function(e) {
                    return r.setPlayerProps("playbackRate", t),
                    e
                })
            }
        }, {
            key: "setDecodeMode",
            value: function(t) {
                var r = this;
                return r.asyncEmit("decodeModeChange", t = Math.max(0, Math.min(3, t || 0))).then(function(e) {
                    return r.setPlayerProps("decodeMode", t),
                    e
                })
            }
        }, {
            key: "setKeyList",
            value: function(t) {
                var r = this;
                return r.asyncEmit("keyListChange", t).then(function(e) {
                    return r.setPlayerProps("keyList", t),
                    e
                })
            }
        }, {
            key: "setViewMode",
            value: function(t) {
                var r = this;
                return r.asyncEmit("viewModeChange", t = t || "none").then(function(e) {
                    return r.setPlayerProps("viewMode", t),
                    e
                })
            }
        }, {
            key: "setSrc",
            value: function(e) {
                e !== this.getPlayerProps("src") && this.setPlayerProps({
                    src: e,
                    currentSrc: he(e)
                })
            }
        }, {
            key: "setPoster",
            value: function(t) {
                var r = this;
                if (t !== r.getPlayerProps("poster"))
                    return r.asyncEmit("posterChange", t).then(function(e) {
                        return r.setPlayerProps({
                            poster: t
                        }),
                        e
                    })
            }
        }, {
            key: "seek",
            value: function(t) {
                var r = this;
                return r.getPlayerProps("stoped") ? Promise.reject("stoped!") : r.getPlayerProps("isLive") ? Promise.reject("Live streaming does not support seek!") : r.getPlayerProps("seeking") ? Promise.reject("Is seeking!") : (r.setPlayerProps("seeking", !0),
                t = t || 0,
                r.getPlayerProps("logLevel") && console.log(t, "ModManager.seek.start"),
                r.asyncEmit("seeking", t).then(function(e) {
                    return r.getPlayerProps("logLevel") && console.log(t, "ModManager.seek.ended"),
                    e
                }).finally(function() {
                    r.setPlayerProps("seeking", !1)
                }))
            }
        }, {
            key: "getCurrentTime",
            value: function() {
                var e = this.mod(ut);
                return e ? e.getCurrentTime() : 0
            }
        }, {
            key: "isFullscreen",
            value: function() {
                var e = this.getPlayerProps("container");
                return e && e.isFullscreen()
            }
        }, {
            key: "setFullscreen",
            value: function(e) {
                var t = this.getPlayerProps("container");
                return t && t[e ? "fullscreen" : "unfullscreen"]()
            }
        }, {
            key: "setControls",
            value: function(t) {
                var r = this;
                return r.asyncEmit("controlsChange", t = !!t).then(function(e) {
                    return r.setPlayerProps("controls", t),
                    e
                })
            }
        }, {
            key: "emit",
            value: function() {
                for (var e, t = arguments.length, r = Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return r[2] = r[2] || this,
                (e = H(c(a.prototype), "emit", this)).call.apply(e, [this].concat(r))
            }
        }, {
            key: "asyncEmit",
            value: function() {
                for (var e, t = arguments.length, r = Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return r[2] = r[2] || this,
                (e = H(c(a.prototype), "asyncEmit", this)).call.apply(e, [this].concat(r))
            }
        }, {
            key: "_initPlayerProps",
            value: function(e) {
                var t = 0 < arguments.length && void 0 !== e ? e : {}
                  , r = t.autoplay
                  , n = void 0 !== r && r
                  , a = t.src
                  , o = void 0 === a ? "" : a
                  , i = t.key
                  , s = void 0 === i ? null : i
                  , u = t.keyForKey
                  , l = void 0 === u ? null : u
                  , c = t.keyType
                  , h = void 0 === c ? 0 : c
                  , f = t.keyList
                  , d = void 0 === f ? null : f
                  , m = t.container
                  , p = void 0 === m ? document.body : m
                  , v = t.isLive
                  , y = void 0 === v || v
                  , g = t.isHLS
                  , w = void 0 !== g && g
                  , _ = t.playbackRate
                  , b = t.maxPlaybackRate
                  , k = t.volume
                  , P = t.maxVolume
                  , x = t.chunkSize
                  , q = void 0 === x ? 524288 : x
                  , D = t.maxLoaderCacheSize
                  , E = void 0 === D ? 3145728 : D
                  , S = t.maxDecoderVCacheLength
                  , L = void 0 === S ? 300 : S
                  , C = t.maxDecoderACacheLength
                  , T = void 0 === C ? 500 : C
                  , R = t.minDecoderBufferSize
                  , M = void 0 === R ? 524288 : R
                  , F = t.decoderMemorySize
                  , O = void 0 === F ? 5242880 : F
                  , A = t.yuvRenderDelay
                  , N = void 0 === A ? -.02 : A
                  , z = t.ffmpeg
                  , W = void 0 === z ? "js/libffmpeg.js" : z
                  , I = t.logLevel
                  , j = void 0 === I ? 1 : I
                  , U = t.sei
                  , V = void 0 === U ? 0 : U
                  , Q = t.mods
                  , B = t.controls
                  , H = void 0 === B || B
                  , Y = t.renderType
                  , K = void 0 === Y ? "all" : Y
                  , G = t.pcmRenderDuration
                  , X = void 0 === G ? 1e3 : G
                  , $ = t.waitingProbation
                  , J = void 0 === $ ? 100 : $
                  , Z = t.waitingYuvNum
                  , ee = void 0 === Z ? 10 : Z
                  , te = t.waitingPcmDur
                  , re = void 0 === te ? 500 : te
                  , ne = t.resample
                  , ae = void 0 === ne ? 0 : ne
                  , oe = t.delayTimeLimit
                  , ie = void 0 === oe ? 0 : oe
                  , se = t.rtwPlaybackRate
                  , ue = void 0 === se ? 2.231313 : se
                  , le = t.lowpassFrequencyVal
                  , ce = void 0 === le ? 4500 : le;
                if (!W)
                    throw new TypeError("Player Props.ffmpeg is undefined!");
                !w && /\.m3u8([?#].*)?$/.test(o) && (w = !0),
                this.setPlayerProps({
                    ffmpeg: W,
                    autoplay: n,
                    src: o,
                    currentSrc: he(o || ""),
                    container: p,
                    isLive: y,
                    isHLS: w,
                    key: s,
                    keyForKey: l,
                    keyType: h,
                    keyList: d,
                    controls: H,
                    playbackRate: fe(_) ? _ : 1,
                    maxPlaybackRate: fe(b) ? b : 2,
                    volume: fe(k) ? k : .5,
                    maxVolume: fe(P) ? P : 5,
                    chunkSize: fe(q) ? q : 524288,
                    maxLoaderCacheSize: fe(E) ? E : 3145728,
                    maxDecoderVCacheLength: fe(L) ? L : 300,
                    maxDecoderACacheLength: fe(T) ? T : 500,
                    minDecoderBufferSize: fe(M) ? M : 524288,
                    decoderMemorySize: fe(O) ? O : 5242880,
                    yuvRenderDelay: fe(N) ? N : -20,
                    logLevel: fe(j) ? j : 0,
                    sei: fe(V) ? V : 0,
                    mods: Q || [xe, nt, Se, Me],
                    renderType: K,
                    fileSize: 0,
                    moovLength: 0,
                    ready: !1,
                    error: null,
                    paused: !0,
                    stoped: !0,
                    ended: !1,
                    seeking: !1,
                    duration: 0,
                    videoWidth: 0,
                    videoHeight: 0,
                    videoPixFmt: null,
                    audioSampleFmt: null,
                    audioChannels: 0,
                    audioSampleRate: null,
                    decodeMode: 0,
                    viewMode: "cover",
                    pcmRenderDuration: fe(X) ? X : 1e3,
                    waitingProbation: J,
                    waitingYuvNum: ee,
                    waitingPcmDur: re,
                    resample: ae,
                    delayTimeLimit: ie,
                    rtwPlaybackRate: ue,
                    lowpassFrequencyVal: ce
                })
            }
        }, {
            key: "setPlayerProps",
            value: function(e, t) {
                if (!W(this.setPlayerProps, this, arguments)) {
                    var r = this[it];
                    if (r[e] = t,
                    ("pcmRenderDuration" === e || "waitingPcmDur" === e) && r.pcmRenderDuration < r.waitingPcmDur)
                        throw new TypeError("播放器参数 pcmRenderDuration 的值[" + r.pcmRenderDuration + "]不可以小于参数 waitingPcmDur 的值[" + r.waitingPcmDur + "]，这将导致播放逻辑阻断。")
                }
                return this
            }
        }, {
            key: "getPlayerProps",
            value: function(e) {
                var t = this;
                if (S(e)) {
                    var r = {};
                    return e.forEach(function(e) {
                        r[e] = t.getPlayerProps(e)
                    }),
                    r
                }
                var n = t[it];
                return void 0 === e ? n : n[e]
            }
        }, {
            key: "mod",
            value: function(e) {
                return this[ot][e]
            }
        }, {
            key: "installMod",
            value: function(e) {
                var n = this;
                if (S(e)) {
                    var a = w(e);
                    return function t(r) {
                        if (0 === a.length)
                            return Promise.resolve(r);
                        var e = a.shift();
                        return n.installMod(e).then(function(e) {
                            return t([].concat(w(r), [e]))
                        })
                    }([])
                }
                var t = e && (e.modName || e.constructor.modName);
                if (!t || !at.includes(t))
                    return Promise.reject(new st("The mod '" + t + "' does not conform to the specification, install failed!"));
                if (n.mod(t))
                    return Promise.reject(new st("Mod '" + t + "' has been installed. If you want to install a new one, uninstall() it first!"));
                var r = e.modName ? new e : e;
                return r._install(n).then(function() {
                    return r.install(n).then(function(e) {
                        return (n[ot][t] = r).emit("installed"),
                        e
                    }).catch(function(e) {
                        throw new st("InstallMod '" + t + "'. " + (e && e.stack || e))
                    })
                })
            }
        }, {
            key: "uninstallMod",
            value: function(e) {
                var t = this;
                if (!e)
                    return Promise.all(at.map(function(e) {
                        return t.uninstallMod(e)
                    }));
                var r = L(e) ? e : e.modName || e.constructor.modName
                  , n = t.mod(r);
                return n ? n.uninstall().then(function(e) {
                    return delete t[ot][r],
                    e
                }) : Promise.resolve("The Mod is not installed.")
            }
        }, {
            key: "destroy",
            value: function() {
                var t = this;
                return t.uninstallMod().then(function(e) {
                    return t.clearEventListeners(),
                    e
                })
            }
        }]),
        a
    }();
    f(lt, "modName", "ModManager");
    function ct(e) {
        return M(window[e])
    }
    var ht = Symbol("mod_manager")
      , ft = d.DOWNLOADER
      , dt = d.DECODER
      , mt = d.RENDERER
      , pt = function() {
        function a() {
            var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            i(this, a),
            e = u(this, c(a).call(this));
            var r = s(e);
            A(r, {
                status: P.EMPTY,
                __mmk: ht,
                MOD_NAMES: d,
                MOD_STATUS: P,
                VIEW_MODE: m
            });
            var n = r[ht] = new lt(t);
            return r._openProps(n),
            r._openMethods(n),
            r._openEvents(n),
            e
        }
        return h(a, $),
        o(a, [{
            key: "_openProps",
            value: function(t) {
                !function(e, t, r, n) {
                    if (L(t))
                        Object.defineProperty(e, t, N(t, r, n));
                    else {
                        var a = {};
                        Object.keys(t).forEach(function(e) {
                            n = null,
                            S(r = t[e]) && (n = r[1],
                            r = r[0]),
                            a[e] = N(e, r, n)
                        }),
                        Object.defineProperties(e, a)
                    }
                }(this, {
                    isLive: function() {
                        return t.getPlayerProps("isLive")
                    },
                    isHLS: function() {
                        return t.getPlayerProps("isHLS")
                    },
                    ready: function() {
                        return t.getPlayerProps("ready")
                    },
                    currentSrc: function() {
                        return t.getPlayerProps("currentSrc")
                    },
                    duration: function() {
                        return t.getPlayerProps("duration") / 1e3
                    },
                    currentTime: function() {
                        return t.getCurrentTime() / 1e3
                    },
                    paused: function() {
                        return t.getPlayerProps("paused")
                    },
                    ended: function() {
                        return t.getPlayerProps("ended")
                    },
                    seeking: function() {
                        return t.getPlayerProps("seeking")
                    },
                    error: function() {
                        return t.getPlayerProps("error")
                    },
                    videoWidth: function() {
                        return t.getPlayerProps("videoWidth")
                    },
                    videoHeight: function() {
                        return t.getPlayerProps("videoHeight")
                    },
                    autoplay: [function() {
                        return !!t.getPlayerProps("autoplay")
                    }
                    , function(e) {
                        return t.setPlayerProps("autoplay", e)
                    }
                    ],
                    poster: [function() {
                        return t.getPlayerProps("poster")
                    }
                    , function(e) {
                        return t.setPoster(e)
                    }
                    ],
                    controls: [function() {
                        return t.getPlayerProps("controls")
                    }
                    , function(e) {
                        return t.setControls(e)
                    }
                    ],
                    src: [function() {
                        return t.getPlayerProps("src")
                    }
                    , function(e) {
                        return t.setSrc(e)
                    }
                    ],
                    key: [function() {
                        return t.getPlayerProps("key")
                    }
                    , function(e) {
                        return t.setPlayerProps("key", e)
                    }
                    ],
                    keyForKey: [function() {
                        return t.getPlayerProps("keyForKey")
                    }
                    , function(e) {
                        return t.setPlayerProps("keyForKey", e)
                    }
                    ],
                    keyType: [function() {
                        return t.getPlayerProps("keyType")
                    }
                    , function(e) {
                        return t.setPlayerProps("keyType", e)
                    }
                    ],
                    keyList: [function() {
                        return t.getPlayerProps("keyList")
                    }
                    , function(e) {
                        return t.setKeyList(e)
                    }
                    ],
                    volume: [function() {
                        return t.getPlayerProps("volume")
                    }
                    , function(e) {
                        return t.setVolume(e)
                    }
                    ],
                    playbackRate: [function() {
                        return t.getPlayerProps("playbackRate")
                    }
                    , function(e) {
                        return t.setPlaybackRate(e)
                    }
                    ],
                    fullscreen: [function() {
                        return t.isFullscreen()
                    }
                    , function(e) {
                        return t.setFullscreen(e)
                    }
                    ],
                    decodeMode: [function() {
                        return t.getPlayerProps("decodeMode")
                    }
                    , function(e) {
                        return t.setDecodeMode(e)
                    }
                    ],
                    viewMode: [function() {
                        return t.getPlayerProps("viewMode")
                    }
                    , function(e) {
                        return t.setViewMode(e)
                    }
                    ],
                    waitingProbation: [function() {
                        return t.getPlayerProps("waitingProbation")
                    }
                    , function(e) {
                        return t.setPlayerProps("waitingProbation", e)
                    }
                    ],
                    waitingYuvNum: [function() {
                        return t.getPlayerProps("waitingYuvNum")
                    }
                    , function(e) {
                        return t.setPlayerProps("waitingYuvNum", e)
                    }
                    ],
                    waitingPcmDur: [function() {
                        return t.getPlayerProps("waitingPcmDur")
                    }
                    , function(e) {
                        return t.setPlayerProps("waitingPcmDur", e)
                    }
                    ],
                    delayTimeLimit: [function() {
                        return t.getPlayerProps("delayTimeLimit")
                    }
                    , function(e) {
                        return t.setPlayerProps("delayTimeLimit", e)
                    }
                    ],
                    rtwPlaybackRate: [function() {
                        return t.getPlayerProps("rtwPlaybackRate")
                    }
                    , function(e) {
                        return t.setPlayerProps("rtwPlaybackRate", e)
                    }
                    ],
                    lowpassFrequencyVal: [function() {
                        return t.getPlayerProps("lowpassFrequencyVal")
                    }
                    , function(e) {
                        return t.setLowpassFrequencyVal(e)
                    }
                    ]
                }),
                delete this._openProps
            }
        }, {
            key: "_openMethods",
            value: function(t) {
                var r = this;
                ["play", "pause", "stop", "seek", "installMod", "uninstallMod"].forEach(function(e) {
                    r[e] = function() {
                        return t[e].apply(t, arguments)
                    }
                }),
                delete r._openMethods
            }
        }, {
            key: "_openEvents",
            value: function(t) {
                var e, r = this;
                t.on((f(e = {
                    ready: function(e) {
                        r.emit("ready", e.data)
                    },
                    error: function(e) {
                        r.emit("error", e.data)
                    }
                }, "started." + ft, function(e) {
                    r.emit("loadstart", e.data)
                }),
                f(e, "data." + ft, function(e) {
                    r.emit("progress", e.data)
                }),
                f(e, "info." + dt, function() {
                    var e = t.getPlayerProps();
                    r.emit("loadedmetadata", {
                        src: e.src,
                        fileSize: e.fileSize,
                        moovLength: e.moovLength,
                        duration: e.duration,
                        audioSampleFmt: e.audioSampleFmt,
                        audioChannels: e.audioChannels,
                        audioSampleRate: e.audioSampleRate,
                        videoPixFmt: e.videoPixFmt,
                        videoHeight: e.videoHeight,
                        videoWidth: e.videoWidth
                    })
                }),
                f(e, "play", function() {
                    r.emit("play")
                }),
                f(e, "pause", function() {
                    r.emit("pause")
                }),
                f(e, "stop", function() {
                    r.emit("stop")
                }),
                f(e, "done." + mt, function() {
                    r.stop().then(function(e) {
                        t.setPlayerProps("ended", !0),
                        r.emit("ended")
                    })
                }),
                f(e, "playing." + mt, function() {
                    r.emit("playing")
                }),
                f(e, "waiting." + mt, function() {
                    r.emit("waiting")
                }),
                f(e, "seiUpdate." + mt, function(e) {
                    r.emit("seiUpdate", e.data)
                }),
                f(e, "seeking", function(e) {
                    r.emit("seeking", e.data)
                }),
                f(e, "seeked." + dt, function(e) {
                    r.emit("seeked", e.data)
                }),
                f(e, "timeupdate." + mt, function(e) {
                    r.emit("timeupdate", e.data)
                }),
                f(e, "durationChange." + dt, function(e) {
                    r.emit("durationchange", e.data)
                }),
                f(e, "rateChange", function(e) {
                    r.emit("ratechange", e.data)
                }),
                f(e, "volumeChange", function(e) {
                    r.emit("volumechange", e.data)
                }),
                f(e, "streamQueueChange." + ft, function(e) {
                    r.emit("streamQueueChange", e.data)
                }),
                f(e, "pcmQueueChange." + dt, function(e) {
                    r.emit("pcmQueueChange", e.data)
                }),
                f(e, "yuvQueueChange." + dt, function(e) {
                    r.emit("yuvQueueChange", e.data)
                }),
                f(e, "pcmQueueDurChange." + dt, function(e) {
                    r.emit("pcmQueueDurChange", e.data)
                }),
                f(e, "yuvQueueDurChange." + dt, function(e) {
                    r.emit("yuvQueueDurChange", e.data)
                }),
                f(e, "adata." + dt, function(e) {
                    r.emit("pcmFrameData", e.data)
                }),
                f(e, "vdata." + dt, function(e) {
                    r.emit("yuvFrameData", e.data)
                }),
                e)),
                delete r._openEvents
            }
        }, {
            key: "destroy",
            value: function() {
                var t = this;
                return t[ht].destroy().then(function(e) {
                    return t.status = P.KILLED,
                    t.emit("destroy"),
                    e
                })
            }
        }]),
        a
    }();
    return f(pt, "modName", "PlayerCore"),
    f(pt, "isSupport", !(ct("WebAssembly") || ct("Worker") || ct("fetch") || ct("Blob") || ct("URL") || ct("ArrayBuffer") || ct("Symbol") || ct("AudioContext") && ct("webkitAudioContext"))),
    pt
});
;