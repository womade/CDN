!function() {
    if ("undefined" == typeof window.QIHOO_MONITOR) {
        var t = "v1.3.2 (2014.04.30)"
          , e = ["ssss.fun", "i.ssss.fun", "blog.ssss.fun"]
          , r = function(n, o) {
            var i;
            !function() {
                i = !0;
                try {
                    var t = location.protocol.toLowerCase();
                    "http:" != t && "https:" != t || (i = !1)
                } catch (e) {}
            }();
            var a = document
              , c = navigator
              , u = n.screen
              , s = i ? "" : document.domain.toLowerCase()
              , f = c.userAgent.toLowerCase()
              , d = {
                trim: function(t) {
                    return t.replace(/^[\s\xa0\u3000]+|[\u3000\xa0\s]+$/g, "")
                }
            }
              , g = {
                on: function(t, e, r) {
                    t.addEventListener ? t && t.addEventListener(e, r, !1) : t && t.attachEvent("on" + e, r)
                },
                parentNode: function(t, e, r) {
                    for (r = r || 5,
                    e = e.toUpperCase(); t && r-- > 0; ) {
                        if (t.tagName === e)
                            return t;
                        t = t.parentNode
                    }
                    return null
                }
            }
              , l = {
                fix: function(t) {
                    if (!("target"in t)) {
                        var e = t.srcElement || t.target;
                        e && 3 == e.nodeType && (e = e.parentNode),
                        t.target = e
                    }
                    return t
                }
            }
              , h = function() {
                function t(t) {
                    return null != t && null != t.constructor ? Object.prototype.toString.call(t).slice(8, -1) : ""
                }
                return {
                    isArray: function(e) {
                        return "Array" == t(e)
                    },
                    isObject: function(t) {
                        return null !== t && "object" == typeof t
                    },
                    mix: function(t, e, r) {
                        for (var n in e)
                            !r && (t[n] || n in t) || (t[n] = e[n]);
                        return t
                    },
                    encodeURIJson: function(t) {
                        var e = [];
                        for (var r in t)
                            null != t[r] && e.push(encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
                        return e.join("&")
                    }
                }
            }()
              , m = {
                get: function(t) {
                    try {
                        var e, r = new RegExp("(^| )" + t + "=([^;]*)(;|$)");
                        return (e = a.cookie.match(r)) ? unescape(e[2]) : ""
                    } catch (n) {
                        return ""
                    }
                },
                set: function(t, e, r) {
                    r = r || {};
                    var n = r.expires;
                    "number" == typeof n && (n = new Date,
                    n.setTime(n.getTime() + r.expires));
                    try {
                        a.cookie = t + "=" + escape(e) + (n ? ";expires=" + n.toGMTString() : "") + (r.path ? ";path=" + r.path : "") + (r.domain ? "; domain=" + r.domain : "")
                    } catch (o) {}
                }
            }
              , p = {
                getProject: function() {
                    return ""
                },
                getReferrer: function() {
                    return a.referrer
                },
                getBrowser: function() {
                    var t = {
                        "360se-ua": "360se",
                        TT: "tencenttraveler",
                        Maxthon: "maxthon",
                        GreenBrowser: "greenbrowser",
                        Sogou: "se 1.x / se 2.x",
                        TheWorld: "theworld"
                    };
                    for (var e in t)
                        if (f.indexOf(t[e]) > -1)
                            return e;
                    var r = !1;
                    try {
                        +external.twGetVersion(external.twGetSecurityID(n)).replace(/\./g, "") > 1013 && (r = !0)
                    } catch (o) {}
                    if (r)
                        return "360se-noua";
                    var i = f.match(/(msie|chrome|safari|firefox|opera|trident)/);
                    return i = i ? i[0] : "",
                    "msie" == i ? i = f.match(/msie[^;]+/) + "" : "trident" == i && f.replace(/trident\/[0-9].*rv[ :]([0-9.]+)/gi, function(t, e) {
                        i = "msie " + e
                    }),
                    i
                },
                getLocation: function() {
                    var t = "";
                    try {
                        t = location.href
                    } catch (e) {
                        t = a.createElement("a"),
                        t.href = "",
                        t = t.href
                    }
                    return t = t.replace(/[?#].*$/, ""),
                    t = /\.(s?htm|php)/.test(t) ? t : t.replace(/\/$/, "") + "/"
                },
                getGuid: function() {
                    function t(t) {
                        var e = 0
                          , r = 0
                          , n = t.length - 1;
                        for (n; n >= 0; n--) {
                            var o = parseInt(t.charCodeAt(n), 10);
                            e = (e << 6 & 268435455) + o + (o << 14),
                            0 != (r = 266338304 & e) && (e ^= r >> 21)
                        }
                        return e
                    }
                    function r() {
                        for (var e = [c.appName, c.version, c.language || c.browserLanguage, c.platform, c.userAgent, u.width, "x", u.height, u.colorDepth, a.referrer].join(""), r = e.length, o = n.history.length; o; )
                            e += o-- ^ r++;
                        return 2147483647 * (Math.round(2147483647 * Math.random()) ^ t(e))
                    }
                    var o = "__guid"
                      , f = m.get(o);
                    if (!f) {
                        f = [t(i ? "" : a.domain), r(), +new Date + Math.random() + Math.random()].join(".");
                        var d = {
                            expires: 2592e7,
                            path: "/"
                        };
                        if (e.length)
                            for (var g = 0; g < e.length; g++) {
                                var l = e[g]
                                  , h = "." + l;
                                if (s.indexOf(h) > 0 && s.lastIndexOf(h) == s.length - h.length || s == l) {
                                    d.domain = h;
                                    break
                                }
                            }
                        m.set(o, f, d)
                    }
                    return function() {
                        return f
                    }
                }(),
                getCount: function() {
                    var t = "monitor_count"
                      , e = m.get(t);
                    return e = (parseInt(e) || 0) + 1,
                    m.set(t, e, {
                        expires: 864e5,
                        path: "/"
                    }),
                    function() {
                        return e
                    }
                }(),
                getFlashVer: function() {
                    var t = -1;
                    if (c.plugins && c.mimeTypes.length) {
                        var e = c.plugins["Shockwave Flash"];
                        e && e.description && (t = e.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0")
                    } else if (n.ActiveXObject && !n.opera)
                        try {
                            var r = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                            if (r) {
                                var o = r.GetVariable("$version");
                                t = o.replace(/WIN/g, "").replace(/,/g, ".")
                            }
                        } catch (i) {}
                    return t = parseInt(t, 10)
                },
                getContainerId: function(t) {
                    var e, r, n = 100;
                    for (w.areaIds && (e = new RegExp("^(" + w.areaIds.join("|") + ")$","ig")); t; ) {
                        if (t.attributes && ("bk"in t.attributes || "data-bk"in t.attributes)) {
                            if (r = t.getAttribute("bk") || t.getAttribute("data-bk"))
                                return r = "bk:" + r,
                                r.substr(0, n);
                            if (t.id)
                                return r = t.getAttribute("data-desc") || t.id,
                                r.substr(0, n)
                        } else if (e && t.id && e.test(t.id))
                            return r = t.getAttribute("data-desc") || t.id,
                            r.substr(0, n);
                        t = t.parentNode
                    }
                    return ""
                },
                getText: function(t) {
                    var e = "";
                    return e = "input" == t.tagName.toLowerCase() ? t.getAttribute("text") || t.getAttribute("data-text") || t.value || t.title || "" : t.getAttribute("text") || t.getAttribute("data-text") || t.innerText || t.textContent || t.title || "",
                    d.trim(e).substr(0, 100)
                },
                getHref: function(t) {
                    try {
                        return t.getAttribute("data-href") || t.href || ""
                    } catch (e) {
                        return ""
                    }
                }
            }
              , v = {
                getBase: function() {
                    return {
                        p: p.getProject(),
                        u: p.getLocation(),
                        id: p.getGuid(),
                        guid: p.getGuid()
                    }
                },
                getTrack: function() {
                    return {
                        b: p.getBrowser(),
                        c: p.getCount(),
                        r: p.getReferrer(),
                        fl: p.getFlashVer()
                    }
                },
                getClick: function(t) {
                    t = l.fix(t || event);
                    var e = t.target
                      , r = e.tagName
                      , n = p.getContainerId(e);
                    if (!e.type || "submit" != e.type && "button" != e.type) {
                        if ("AREA" == r)
                            return {
                                f: p.getHref(e),
                                c: "area:" + e.parentNode.name,
                                cId: n
                            };
                        var o, i;
                        return "IMG" == r && (o = e),
                        e = g.parentNode(e, "A"),
                        !!e && (i = p.getText(e),
                        {
                            f: p.getHref(e),
                            c: i ? i : o ? o.src.match(/[^\/]+$/) : "",
                            cId: n
                        })
                    }
                    var a = g.parentNode(e, "FORM")
                      , c = {};
                    if (a) {
                        var u = a.id || ""
                          , s = e.id;
                        if (c = {
                            f: a.action,
                            c: "form:" + (a.name || u),
                            cId: n
                        },
                        !("search-form" != u && "searchForm" != u || "searchBtn" != s && "search-btn" != s)) {
                            var f = b("kw") || b("search-kw") || b("kw1");
                            c.w = f ? f.value : ""
                        }
                    } else
                        c = {
                            f: p.getHref(e),
                            c: p.getText(e),
                            cId: n
                        };
                    return c
                },
                getKeydown: function(t) {
                    if (t = l.fix(t || event),
                    13 != t.keyCode)
                        return !1;
                    var e = t.target
                      , r = e.tagName
                      , n = p.getContainerId(e);
                    if ("INPUT" == r) {
                        var o = g.parentNode(e, "FORM");
                        if (o) {
                            var i = o.id || ""
                              , a = e.id
                              , c = {
                                f: o.action,
                                c: "form:" + (o.name || i),
                                cId: n
                            };
                            return "kw" != a && "search-kw" != a && "kw1" != a || (c.w = e.value),
                            c
                        }
                    }
                    return !1
                }
            }
              , w = {
                trackUrl: null,
                clickUrl: null,
                areaIds: null
            }
              , b = function(t) {
                return document.getElementById(t)
            };
            return {
                version: t,
                util: p,
                data: v,
                config: w,
                sendLog: function() {
                    return n.__qihoo_monitor_imgs = {},
                    function(t) {
                        var e = "log_" + +new Date
                          , r = n.__qihoo_monitor_imgs[e] = new Image;
                        r.onload = r.onerror = function() {
                            n.__qihoo_monitor_imgs && n.__qihoo_monitor_imgs[e] && (n.__qihoo_monitor_imgs[e] = null,
                            delete n.__qihoo_monitor_imgs[e])
                        }
                        ,
                        r.src = t
                    }
                }(),
                buildLog: function() {
                    var t = "";
                    return function(e, r) {
                        if (e !== !1) {
                            e = e || {};
                            var n = v.getBase();
                            e = h.mix(n, e, !0);
                            var o = r + h.encodeURIJson(e);
                            if (o != t) {
                                t = o,
                                setTimeout(function() {
                                    t = ""
                                }, 500);
                                var i = h.encodeURIJson(e);
                                i += "&t=" + +new Date,
                                r = r.indexOf("?") > -1 ? r + "&" + i : r + "?" + i,
                                this.sendLog(r)
                            }
                        }
                    }
                }(),
                log: function(t, e) {
                    e = e || "click";
                    var r = w[e + "Url"];
                    r || alert("Error : the " + e + "url does not exist!"),
                    this.buildLog(t, r)
                },
                setConf: function(t, e) {
                    var r = {};
                    return h.isObject(t) ? r = t : r[t] = e,
                    this.config = h.mix(this.config, r, !0),
                    this
                },
                setUrl: function(t) {
                    return t && (this.util.getLocation = function() {
                        return t
                    }
                    ),
                    this
                },
                setProject: function(t) {
                    return t && (this.util.getProject = function() {
                        return t
                    }
                    ),
                    this
                },
                setId: function() {
                    for (var t, e = [], r = 0; t = arguments[r++]; )
                        h.isArray(t) ? e = e.concat(t) : e.push(t);
                    return this.setConf("areaIds", e),
                    this
                },
                getTrack: function() {
                    var t = this.data.getTrack();
                    return this.log(t, "track"),
                    this
                },
                getClickAndKeydown: function() {
                    var t = this;
                    return g.on(a, "mousedown", function(e) {
                        var r = t.data.getClick(e);
                        t.log(r, "click")
                    }),
                    g.on(a, "keydown", function(e) {
                        var r = t.data.getKeydown(e);
                        t.log(r, "click")
                    }),
                    r.getClickAndKeydown = function() {
                        return t
                    }
                    ,
                    this
                }
            }
        }(window);
        r.setConf({
            trackUrl: "https://api.ssss.fun/cam/monitor.php?action=track",
            clickUrl: "https://api.ssss.fun/cam/monitor.php?action=click",
            wpoUrl: "https://api.ssss.fun/cam/monitor.php?action=wpo"
        }),
        window.QIHOO_MONITOR = r,
        "undefined" == typeof window.monitor && (window.monitor = r)
    }
}();
