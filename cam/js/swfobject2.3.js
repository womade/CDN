var swfobject = function() {
    function k() {
        if (b || !document.getElementsByTagName("body")[0])
            return;
        try {
            var e, t = W("span");
            t.style.display = "none",
            e = a.getElementsByTagName("body")[0].appendChild(t),
            e.parentNode.removeChild(e),
            e = null,
            t = null
        } catch (n) {
            return
        }
        b = !0;
        var r = c.length;
        for (var i = 0; i < r; i++)
            c[i]()
    }
    function L(e) {
        b ? e() : c[c.length] = e
    }
    function A(t) {
        if (typeof u.addEventListener !== e)
            u.addEventListener("load", t, !1);
        else if (typeof a.addEventListener !== e)
            a.addEventListener("load", t, !1);
        else if (typeof u.attachEvent !== e)
            V(u, "onload", t);
        else if (typeof u.onload == "function") {
            var n = u.onload;
            u.onload = function() {
                n(),
                t()
            }
        } else
            u.onload = t
    }
    function O() {
        var n = a.getElementsByTagName("body")[0]
          , r = W(t);
        r.setAttribute("style", "visibility: hidden;"),
        r.setAttribute("type", i);
        var s = n.appendChild(r);
        if (s) {
            var o = 0;
            (function u() {
                if (typeof s.GetVariable !== e)
                    try {
                        var t = s.GetVariable("$version");
                        t && (t = t.split(" ")[1].split(","),
                        N.pv = [X(t[0]), X(t[1]), X(t[2])])
                    } catch (i) {
                        N.pv = [8, 0, 0]
                    }
                else if (o < 10) {
                    o++,
                    setTimeout(u, 10);
                    return
                }
                n.removeChild(r),
                s = null,
                M()
            }
            )()
        } else
            M()
    }
    function M() {
        var t = h.length;
        if (t > 0)
            for (var n = 0; n < t; n++) {
                var r = h[n].id
                  , i = h[n].callbackFn
                  , s = {
                    success: !1,
                    id: r
                };
                if (N.pv[0] > 0) {
                    var o = z(r);
                    if (o)
                        if ($(h[n].swfVersion) && !(N.wk && N.wk < 312))
                            K(r, !0),
                            i && (s.success = !0,
                            s.ref = _(r),
                            s.id = r,
                            i(s));
                        else if (h[n].expressInstall && D()) {
                            var u = {};
                            u.data = h[n].expressInstall,
                            u.width = o.getAttribute("width") || "0",
                            u.height = o.getAttribute("height") || "0",
                            o.getAttribute("class") && (u.styleclass = o.getAttribute("class")),
                            o.getAttribute("align") && (u.align = o.getAttribute("align"));
                            var a = {}
                              , f = o.getElementsByTagName("param")
                              , l = f.length;
                            for (var c = 0; c < l; c++)
                                f[c].getAttribute("name").toLowerCase() !== "movie" && (a[f[c].getAttribute("name")] = f[c].getAttribute("value"));
                            P(u, a, r, i)
                        } else
                            H(o),
                            i && i(s)
                } else {
                    K(r, !0);
                    if (i) {
                        var p = _(r);
                        p && typeof p.SetVariable !== e && (s.success = !0,
                        s.ref = p,
                        s.id = p.id),
                        i(s)
                    }
                }
            }
    }
    function _(n) {
        var r = null
          , i = z(n);
        return i && i.nodeName.toUpperCase() === "OBJECT" && (typeof i.SetVariable !== e ? r = i : r = i.getElementsByTagName(t)[0] || i),
        r
    }
    function D() {
        return !w && $("6.0.65") && (N.win || N.mac) && !(N.wk && N.wk < 312)
    }
    function P(t, n, r, i) {
        var o = z(r);
        r = U(r),
        w = !0,
        g = i || null,
        y = {
            success: !1,
            id: r
        };
        if (o) {
            o.nodeName.toUpperCase() === "OBJECT" ? (v = B(o),
            m = null) : (v = o,
            m = r),
            t.id = s;
            if (typeof t.width === e || !/%$/.test(t.width) && X(t.width) < 310)
                t.width = "310";
            if (typeof t.height === e || !/%$/.test(t.height) && X(t.height) < 137)
                t.height = "137";
            var f = N.ie ? "ActiveX" : "PlugIn"
              , l = "MMredirectURL=" + encodeURIComponent(u.location.toString().replace(/&/g, "%26")) + "&MMplayerType=" + f + "&MMdoctitle=" + encodeURIComponent(a.title.slice(0, 47) + " - Flash Player Installation");
            typeof n.flashvars !== e ? n.flashvars += "&" + l : n.flashvars = l;
            if (N.ie && o.readyState != 4) {
                var c = W("div");
                r += "SWFObjectNew",
                c.setAttribute("id", r),
                o.parentNode.insertBefore(c, o),
                o.style.display = "none",
                q(o)
            }
            F(t, n, r)
        }
    }
    function H(e) {
        if (N.ie && e.readyState != 4) {
            e.style.display = "none";
            var t = W("div");
            e.parentNode.insertBefore(t, e),
            t.parentNode.replaceChild(B(e), t),
            q(e)
        } else
            e.parentNode.replaceChild(B(e), e)
    }
    function B(e) {
        var n = W("div");
        if (N.win && N.ie)
            n.innerHTML = e.innerHTML;
        else {
            var r = e.getElementsByTagName(t)[0];
            if (r) {
                var i = r.childNodes;
                if (i) {
                    var s = i.length;
                    for (var o = 0; o < s; o++)
                        (i[o].nodeType != 1 || i[o].nodeName !== "PARAM") && i[o].nodeType != 8 && n.appendChild(i[o].cloneNode(!0))
                }
            }
        }
        return n
    }
    function j(e, t) {
        var n = W("div");
        return n.innerHTML = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='" + e + "'>" + t + "</object>",
        n.firstChild
    }
    function F(n, r, s) {
        var o, u = z(s);
        s = U(s);
        if (N.wk && N.wk < 312)
            return o;
        if (u) {
            var a = N.ie ? W("div") : W(t), f, l, c;
            typeof n.id === e && (n.id = s);
            for (c in r)
                r.hasOwnProperty(c) && c.toLowerCase() !== "movie" && I(a, c, r[c]);
            N.ie && (a = j(n.data, a.innerHTML));
            for (f in n)
                n.hasOwnProperty(f) && (l = f.toLowerCase(),
                l === "styleclass" ? a.setAttribute("class", n[f]) : l !== "classid" && l !== "data" && a.setAttribute(f, n[f]));
            N.ie ? p[p.length] = n.id : (a.setAttribute("type", i),
            a.setAttribute("data", n.data)),
            u.parentNode.replaceChild(a, u),
            o = a
        }
        return o
    }
    function I(e, t, n) {
        var r = W("param");
        r.setAttribute("name", t),
        r.setAttribute("value", n),
        e.appendChild(r)
    }
    function q(e) {
        var t = z(e);
        t && t.nodeName.toUpperCase() === "OBJECT" && (N.ie ? (t.style.display = "none",
        function n() {
            if (t.readyState == 4) {
                for (var e in t)
                    typeof t[e] == "function" && (t[e] = null);
                t.parentNode.removeChild(t)
            } else
                setTimeout(n, 10)
        }()) : t.parentNode.removeChild(t))
    }
    function R(e) {
        return e && e.nodeType && e.nodeType === 1
    }
    function U(e) {
        return R(e) ? e.id : e
    }
    function z(e) {
        if (R(e))
            return e;
        var t = null;
        try {
            t = a.getElementById(e)
        } catch (n) {}
        return t
    }
    function W(e) {
        return a.createElement(e)
    }
    function X(e) {
        return parseInt(e, 10)
    }
    function V(e, t, n) {
        e.attachEvent(t, n),
        d[d.length] = [e, t, n]
    }
    function $(e) {
        e += "";
        var t = N.pv
          , n = e.split(".");
        return n[0] = X(n[0]),
        n[1] = X(n[1]) || 0,
        n[2] = X(n[2]) || 0,
        t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? !0 : !1
    }
    function J(t, n, r, i) {
        var s = a.getElementsByTagName("head")[0];
        if (!s)
            return;
        var o = typeof r == "string" ? r : "screen";
        i && (E = null,
        S = null);
        if (!E || S != o) {
            var u = W("style");
            u.setAttribute("type", "text/css"),
            u.setAttribute("media", o),
            E = s.appendChild(u),
            N.ie && typeof a.styleSheets !== e && a.styleSheets.length > 0 && (E = a.styleSheets[a.styleSheets.length - 1]),
            S = o
        }
        E && (typeof E.addRule !== e ? E.addRule(t, n) : typeof a.createTextNode !== e && E.appendChild(a.createTextNode(t + " {" + n + "}")))
    }
    function K(e, t) {
        if (!x)
            return;
        var n = t ? "visible" : "hidden"
          , r = z(e);
        b && r ? r.style.visibility = n : typeof e == "string" && J("#" + e, "visibility:" + n)
    }
    function Q(t) {
        var n = /[\\\"<>\.;]/
          , r = n.exec(t) !== null;
        return r && typeof encodeURIComponent !== e ? encodeURIComponent(t) : t
    }
    var e = "undefined", t = "object", n = "Shockwave Flash", r = "ShockwaveFlash.ShockwaveFlash", i = "application/x-shockwave-flash", s = "SWFObjectExprInst", o = "onreadystatechange", u = window, a = document, f = navigator, l = !1, c = [], h = [], p = [], d = [], v, m, g, y, b = !1, w = !1, E, S, x = !0, T = !1, N = function() {
        var s = typeof a.getElementById !== e && typeof a.getElementsByTagName !== e && typeof a.createElement !== e
          , o = f.userAgent.toLowerCase()
          , c = f.platform.toLowerCase()
          , h = c ? /win/.test(c) : /win/.test(o)
          , p = c ? /mac/.test(c) : /mac/.test(o)
          , d = /webkit/.test(o) ? parseFloat(o.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1
          , v = f.appName === "Microsoft Internet Explorer"
          , m = [0, 0, 0]
          , g = null;
        if (typeof f.plugins !== e && typeof f.plugins[n] === t)
            g = f.plugins[n].description,
            g && typeof f.mimeTypes !== e && f.mimeTypes[i] && f.mimeTypes[i].enabledPlugin && (l = !0,
            v = !1,
            g = g.replace(/^.*\s+(\S+\s+\S+$)/, "$1"),
            m[0] = X(g.replace(/^(.*)\..*$/, "$1")),
            m[1] = X(g.replace(/^.*\.(.*)\s.*$/, "$1")),
            m[2] = /[a-zA-Z]/.test(g) ? X(g.replace(/^.*[a-zA-Z]+(.*)$/, "$1")) : 0);
        else if (typeof u.ActiveXObject !== e)
            try {
                var y = new ActiveXObject(r);
                y && (g = y.GetVariable("$version"),
                g && (v = !0,
                g = g.split(" ")[1].split(","),
                m = [X(g[0]), X(g[1]), X(g[2])]))
            } catch (b) {}
        else
            try {
                var y = new u.ActiveXObject(r);
                y && (g = y.GetVariable("$version"),
                g && (g = g.split(" ")[1].split(","),
                m = [X(g[0]), X(g[1]), X(g[2])]))
            } catch (b) {}
        return {
            w3: s,
            pv: m,
            wk: d,
            ie: v,
            win: h,
            mac: p
        }
    }(), C = function() {
        if (!N.w3)
            return;
        (typeof a.readyState !== e && (a.readyState === "complete" || a.readyState === "interactive") || typeof a.readyState === e && (a.getElementsByTagName("body")[0] || a.body)) && k(),
        b || (typeof a.addEventListener !== e && a.addEventListener("DOMContentLoaded", k, !1),
        N.ie && (a.attachEvent(o, function t() {
            a.readyState === "complete" && (a.detachEvent(o, t),
            k())
        }),
        u == top && function n() {
            if (b)
                return;
            try {
                a.documentElement.doScroll("left")
            } catch (e) {
                setTimeout(n, 0);
                return
            }
            k()
        }()),
        N.wk && function r() {
            if (b)
                return;
            if (!/loaded|complete/.test(a.readyState)) {
                setTimeout(r, 0);
                return
            }
            k()
        }())
    }();
    c[0] = function() {
        l ? O() : M()
    }
    ;
    var G = function() {
        N.ie && window.attachEvent("onunload", function() {
            var e = d.length;
            for (var t = 0; t < e; t++)
                d[t][0].detachEvent(d[t][1], d[t][2]);
            var n = p.length;
            for (var r = 0; r < n; r++)
                q(p[r]);
            for (var i in N)
                N[i] = null;
            N = null;
            for (var s in swfobject)
                swfobject[s] = null;
            swfobject = null
        })
    }();
    return {
        registerObject: function(e, t, n, r) {
            if (N.w3 && e && t) {
                var i = {};
                i.id = e,
                i.swfVersion = t,
                i.expressInstall = n,
                i.callbackFn = r,
                h[h.length] = i,
                K(e, !1)
            } else
                r && r({
                    success: !1,
                    id: e
                })
        },
        getObjectById: function(e) {
            if (N.w3)
                return _(e)
        },
        embedSWF: function(n, r, i, s, o, u, a, f, l, c) {
            var h = U(r)
              , p = {
                success: !1,
                id: h
            };
            N.w3 && !(N.wk && N.wk < 312) && n && r && i && s && o ? (K(h, !1),
            L(function() {
                i += "",
                s += "";
                var d = {};
                if (l && typeof l === t)
                    for (var v in l)
                        d[v] = l[v];
                d.data = n,
                d.width = i,
                d.height = s;
                var m = {};
                if (f && typeof f === t)
                    for (var g in f)
                        m[g] = f[g];
                if (a && typeof a === t)
                    for (var y in a)
                        if (a.hasOwnProperty(y)) {
                            var b = T ? encodeURIComponent(y) : y
                              , w = T ? encodeURIComponent(a[y]) : a[y];
                            typeof m.flashvars !== e ? m.flashvars += "&" + b + "=" + w : m.flashvars = b + "=" + w
                        }
                if ($(o)) {
                    var E = F(d, m, r);
                    d.id == h && K(h, !0),
                    p.success = !0,
                    p.ref = E,
                    p.id = E.id
                } else {
                    if (u && D()) {
                        d.data = u,
                        P(d, m, r, c);
                        return
                    }
                    K(h, !0)
                }
                c && c(p)
            })) : c && c(p)
        },
        switchOffAutoHideShow: function() {
            x = !1
        },
        enableUriEncoding: function(t) {
            T = typeof t === e ? !0 : t
        },
        ua: N,
        getFlashPlayerVersion: function() {
            return {
                major: N.pv[0],
                minor: N.pv[1],
                release: N.pv[2]
            }
        },
        hasFlashPlayerVersion: $,
        createSWF: function(e, t, n) {
            return N.w3 ? F(e, t, n) : undefined
        },
        showExpressInstall: function(e, t, n, r) {
            N.w3 && D() && P(e, t, n, r)
        },
        removeSWF: function(e) {
            N.w3 && q(e)
        },
        createCSS: function(e, t, n, r) {
            N.w3 && J(e, t, n, r)
        },
        addDomLoadEvent: L,
        addLoadEvent: A,
        getQueryParamValue: function(e) {
            var t = a.location.search || a.location.hash;
            if (t) {
                /\?/.test(t) && (t = t.split("?")[1]);
                if (!e)
                    return Q(t);
                var n = t.split("&");
                for (var r = 0; r < n.length; r++)
                    if (n[r].substring(0, n[r].indexOf("=")) == e)
                        return Q(n[r].substring(n[r].indexOf("=") + 1))
            }
            return ""
        },
        expressInstallCallback: function() {
            if (w) {
                var e = z(s);
                e && v && (e.parentNode.replaceChild(v, e),
                m && (K(m, !0),
                N.ie && (v.style.display = "block")),
                g && g(y)),
                w = !1
            }
        },
        version: "2.3"
    }
}();
