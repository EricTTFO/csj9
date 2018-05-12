function loadTINGYUN() {
    window.setTimeout(function () {
        window.TINGYUN(function (t) {
            t.server = {
                id: "AMIxdHxtY2w",
                ignore_err: !0,
                beacon: "beacon.tingyun.com",
                beacon_err: "beacon-err.tingyun.com",
                key: window.__MPSCONFIG__.API_CONFIG.networkCheckKey,
                trace_threshold: 4e3,
                fp_threshold: 2e3,
                fs_threshold: 4e3,
                dr_threshold: 4e3,
                custom_urls: [],
                sr: 1
            }
        }, window, +new Date)
    }, 10)
}

var TINGYUN = function (t, e, n) {
    function r(t, e) {
        var n, r = 0;
        if (t) if (function (t) {
            var e = !!t && "length" in t && t.length, n = typeof t;
            return "function" !== n && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }(t)) for (n = t.length; r < n && !1 !== e.call(t[r], t[r], r); r++) ; else for (r in t) if (!1 === e.call(t[r], t[r], r)) break;
        return t
    }

    function i(t) {
        return function (e) {
            return "Array" === t && Array.isArray ? Array.isArray(e) : Object.prototype.toString.call(e) === "[object " + t + "]"
        }
    }

    function o(t) {
        switch (typeof t) {
            case"object":
                if (!t) return null;
                if (t instanceof Array) return r(t, function (e, n) {
                    t[n] = o(e)
                }), "[" + t.join(",") + "]";
                if (t instanceof Date) return t.getTime().toString();
                var e = "";
                return r(t, function (t, n) {
                    nt(t) || (e += o(n) + ":" + o(t) + ",")
                }), e && (e = e.substr(0, e.length - 1)), "{" + e + "}";
            case"string":
                return ot + t.replace(at, "\\$1").replace(st, "\\n") + ot;
            case"number":
                return isNaN(t) ? null : t;
            case"boolean":
                return t;
            case"function":
                return o(t.toString());
            case"undefined":
            default:
                return '"undefined"'
        }
    }

    function a(t, e) {
        return Function.prototype.apply.apply(t, e)
    }

    function s(t, e) {
        return function () {
            t.apply(e, arguments)
        }
    }

    function u(t) {
        return lt ? lt(t) : t
    }

    function c(t) {
        return arguments.length < 2 || !t ? t : (r(dt.call(arguments, 1), function (e) {
            r(e, function (e, n) {
                t[n] = e
            })
        }), t)
    }

    function f(t, e) {
        return t ? e ? t.replace(/\{(\w+.?\w+)\}/g, function (t, n) {
            return e[n] || ""
        }).replace(/\{(\d+)\}/g, function (t, n) {
            return e[n] || ""
        }) : t : ""
    }

    function l(t) {
        return setTimeout(t, 0)
    }

    function d() {
    }

    function h() {
        return +new Date
    }

    function p(t) {
        return function () {
            if (null !== t) {
                var e = t;
                t = null, e.apply(this, arguments)
            }
        }
    }

    function v(t) {
        return t ? tt(t) ? t.length : e.ArrayBuffer && t instanceof ArrayBuffer ? t.byteLength : e.Blob && t instanceof Blob ? t.size : t.length ? t.length : 0 : 0
    }

    function g(t, e, n, i) {
        var o = null;
        return t && e && (o = function (t) {
            return pt !== vt && /^https/i.test(t && t.protocol || pt) ? "https:" : vt
        }(i) + "//" + t + e, n && (o += "?", r(n, function (t, e) {
            var n = [u(e), "=", u(t), "&"];
            o += n.join("")
        }), o += "__r=" + h())), o
    }

    function m() {
        this.events = {}
    }

    function y(t) {
        return !(t in St) || St[t]
    }

    function b(t) {
        var e = yt.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
        return e ? e[3] : null
    }

    function _(t, e, n) {
        var r = t + "=" + e;
        if (n) {
            var i = new Date;
            i.setTime(i.getTime() + 1e3 * n), r += ";expires=" + i.toGMTString()
        }
        yt.cookie = r
    }

    function S(t, e, n) {
        var r = yt.createElement(t);
        try {
            for (var i in e) r[i] = e[i]
        } catch (a) {
            var o = "<" + t;
            for (var i in e) o += " " + i + '="' + e[i] + '"';
            o += ">", n || (o += "</" + t + ">"), r = yt.createElement(o)
        }
        return r
    }

    function x(t, e, n, r) {
        nt(n) && (r = n);
        var i = S("div", {style: zt}), o = S("iframe", {name: "ty_form", width: 0, height: 0, style: zt}),
            a = S("form", {
                style: zt,
                action: t,
                enctype: "application/x-www-form-urlencoded",
                method: "post",
                target: "ty_form"
            }), s = S("input", {name: "data", type: "hidden"}, !0);
        s.value = Z(e), a.appendChild(s), i.appendChild(o), i.appendChild(a), yt.body.appendChild(i), a.submit(), o.onreadystatechange = function () {
            o.readyState !== Bt && 4 !== o.readyState || (r(null, o.innerHTML), yt.body.removeChild(i))
        }
    }

    function w(t, e, n) {
        if (t && n && nt(n)) {
            var r = t[e];
            if (!r || !r._wrapped) {
                var i = n(r);
                return i && (i._wrapped = !0), t[e] = i, i
            }
        }
    }

    function E(t) {
        Yt && t()
    }

    function T() {
        Wt.on(At, p(function () {
            t();
            var e = h();
            E(function () {
                Ut.load = e
            }), Vt.loadEventEnd = e
        })), r([At, Mt, Ht, Lt], function (t) {
            ct(e, t, function (e) {
                E(function () {
                    (Ut.e[t] || (Ut.e[t] = [])).push(h())
                }), Wt.emit(t, e)
            })
        });
        var t = p(function () {
            var t = h();
            E(function () {
                Ut.end = t
            }), Vt.domContentLoadedEventStart = t, yt.querySelectorAll && (Kt.resources = Kt.resources || [], r(yt.querySelectorAll("head>link,head>script"), function (t) {
                var e;
                "LINK" == t.tagName ? e = t.href : "SCRIPT" != t.tagName || t.defer || t.async || (e = t.src), e && Kt.resources.push(e)
            }))
        });
        ct(yt, "DOMContentLoaded", t), ct(yt, Dt, function (e) {
            yt.readyState === Bt && t()
        });
        var n = p(function () {
            Vt.touch = h()
        });
        r(["scroll", "click", "keypress"], function (t) {
            !function (t, e, n, r) {
                var i = function () {
                    return ft(t, e, i), n.apply(this, arguments)
                };
                ct(t, e, i, r)
            }(yt, t, n)
        });
        var i = e.requestAnimationFrame;
        !i || i.toString().indexOf("[native code]") < 0 || w(e, "requestAnimationFrame", function (t) {
            return function () {
                if (!Vt.firstPaint) {
                    var n = h();
                    E(function () {
                        Ut.an.count++, Ut.an.t = n
                    }), Vt.firstPaint = n, e.requestAnimationFrame = t
                }
                return t.apply(this, arguments)
            }
        })
    }

    function I(t) {
        C(t, Jt)
    }

    function k(t) {
        C(t, $t)
    }

    function C(t, e) {
        var n = "ok";
        if (!t) return n = e.length ? e.join("\n") : n;
        e.push(t)
    }

    function N() {
        this.xhrs = {}, this.errs = [], m.call(this)
    }

    function O(t, e) {
        this.flags = 0, nt(t.create) && (this.create = t.create, this.flags |= ie), nt(t.before) && (this.before = t.before, this.flags |= oe), nt(t.after) && (this.after = t.after, this.flags |= ae), nt(t.error) && (this.error = t.error, this.flags |= se), this.data = e
    }

    function R(t) {
        return !ce || ce.flags <= 0 ? t : function (t) {
            var e = ce.data;
            if (0 != (ce.flags & ie)) {
                var n = ce.create(ce.data);
                void 0 !== n && (e = n)
            }
            return function n() {
                0 != (ce.flags & oe) && ce.before(this, e);
                var r = n;
                r._ && (r._ = 1);
                try {
                    var i = t.apply(this, arguments)
                } catch (t) {
                    throw 0 != (ce.flags & se) && ce.error(e, t), t
                }
                return 0 != (ce.flags & ae) && ce.after(this, e), i
            }
        }(t)
    }

    function q() {
        this.id = null, this.active = null, this._set = []
    }

    function A() {
        !function () {
            function t(t) {
                return function (e) {
                    var n = dt.call(arguments, 0);
                    nt(e) && (n[0] = R(e));
                    try {
                        return t.apply(this, n)
                    } catch (t) {
                    }
                    return a(t, [this, n])
                }
            }

            w(e, "setTimeout", t), w(e, "setInterval", t)
        }();
        var t = new q;
        return t.id = function (t, e) {
            if (!ce) {
                if (!rt(t) || !t) throw new TypeError("callbacks arguments must be an object");
                return ce = new O(t, e)
            }
        }({
            create: function () {
                return t.active
            }, before: function (e, n) {
                n && t.enter(n)
            }, after: function (e, n) {
                n && t.exit(n)
            }, error: function (e, n) {
                if (e) {
                    try {
                        n.moduleId = e.moduleId
                    } catch (t) {
                    }
                    t.exit(e)
                }
            }
        }), t
    }

    function M(t) {
        re && console.warn(t || "Event key required!")
    }

    function H(t) {
        t = t || {}, this.key = t.key;
        var e = t.timeout || 6e5;
        this.i = e ? setTimeout(s(this.fail, this), e) : null, this.status = 1, this.remain = 0, this.xhrs = [], this.s = h(), this.e = null, this.called = this.sent = !1
    }

    function L(t) {
        try {
            return function (t) {
                return t && tt(t) ? V(t) : t
            }(t)
        } catch (t) {
            I(t && t.message)
        }
        return null
    }

    function D() {
        return Vt.loadEventEnd || Vt._end
    }

    function B(t) {
        function i(e) {
            return t[e] > 0 ? t[e] - a : 0
        }

        var o = {}, a = n;
        if (t) {
            E(function () {
                var e = Ut.t = {};
                r(t, function (t, n) {
                    nt(t) || (e[n] = t)
                })
            }), a = t.navigationStart, o = {
                f: i(_e),
                qs: i(Se),
                rs: i(xe),
                re: i(we),
                os: i(Ee),
                oe: i(Te),
                oi: i(Ie),
                oc: i(ke),
                ls: i(Ce),
                le: i(Ne),
                tus: i(Oe),
                tue: i(Re)
            };
            var s = i(qe), u = i(Ae), c = i(Me), f = i(He), l = i(Le), d = i(De);
            if (d - l > 0 && (o.cs = l, o.ce = d), u - s > 0 && (o.ds = s, o.de = u), (f - c > 0 || f > 0) && (o.es = c, o.ee = f), 0 == o.le) {
                var h = D();
                o.ue = h - a
            }
            Vt._le = o.ue || o.le;
            var p, v;
            if (t.msFirstPaint) p = t.msFirstPaint, E(function () {
                Ut.fp = "m_" + p
            }); else if ((v = e.chrome) && v.loadTimes) {
                var g = v.loadTimes();
                g && g.firstPaintTime && (p = 1e3 * g.firstPaintTime), E(function () {
                    Ut.fp = "c_" + g.firstPaintTime
                })
            } else Vt.firstPaint && (p = Vt.firstPaint, E(function () {
                Ut.fp = p
            }));
            p && (o.fp = Math.round(p - a), Vt.fp = o.fp), t[Be] && (o.sl = i(Be))
        } else o = {t: a, os: (Vt[Ee] || Vt._end) - a, ls: D() - a};
        return o.je = Vt.errs && Vt.errs.length || 0, Vt.ct && (o.ct = Vt.ct - a), Vt.touch && (o.fi = Vt.touch - a), o
    }

    function F(t, e) {
        var i = {tr: !1, tt: u(yt.title), charset: yt.characterSet};
        Xt.resources && c(i, Xt.resources), E(function () {
            i.debug = Ut
        }), Yt = !1;
        var o = Vt.errs;
        r(o, function (t, r) {
            var i = t.toObject();
            i.o = i.o - e && e.navigationStart || n, o[r] = i
        }), i.err = o;
        var a = "getEntriesByType";
        return t[a] ? (i.tr = !0, i.res = [], r(t[a]("resource"), function (t) {
            function e(e) {
                var n = t[e];
                return n > 0 ? n : 0
            }

            var n = t.initiatorType, o = t.name, a = {
                o: e("startTime"),
                rt: n,
                n: o,
                f: e(_e),
                ds: e(qe),
                de: e(Ae),
                cs: e(Le),
                ce: e(De),
                sl: e(Be),
                qs: e(Se),
                rs: e(xe),
                re: e(we),
                ts: t.transferSize || 0,
                es: t.encodedBodySize || 0
            };
            if ("xmlhttprequest" === n) {
                var s = function (t) {
                    var e;
                    return r(Vt.xhrs, function (n, r) {
                        if (r && r.indexOf(t) > -1) return e = n, !1
                    }), e
                }(o);
                s && (a.aid = s.id, a.atd = s.trId, a.an = s.action, a.aq = s.time && s.time.qu, a.as = s.time && s.time.duration)
            }
            i.res.push(a)
        })) : k(f(ee, [a])), i
    }

    function P(t) {
        var e = 0, n = t.timing;
        return n ? t.getEntriesByName && (e = n.domLoading, r(Kt.resources, function (r) {
            var i = t.getEntriesByName(r);
            if (1 == i.length) {
                var o = i[0].responseEnd + n.navigationStart;
                o > e && (e = o)
            }
        }), e -= n.navigationStart) : k("fp=0"), E(function () {
            Ut._fp = e
        }), Math.round(e)
    }

    function j(t, n, i, o) {
        var a = i || 0, s = Xt.firstScreenResources;
        if (s && s.length && t.getEntriesByName) return r(s, function (e) {
            var n = t.getEntriesByName(e);
            if (n.length) {
                var r = n[0].responseEnd;
                r > a && (a = r)
            }
        }), o.fs_s = 1, Math.round(a);
        if (!yt.createElement("img").getBoundingClientRect) return E(function () {
            Ut.fs = a
        }), a;
        if (t.getEntriesByName) {
            var u = e.innerHeight, c = e.innerWidth, f = [];
            r(yt.querySelectorAll("img"), function (t) {
                t.src && function (t, n, r) {
                    if (t) {
                        var i = e.pageYOffset;
                        if (t.top + (0 === i ? 0 : i || yt.scrollTop || 0) - (yt.clientTop || 0) >= n) return !1;
                        var o = t.left;
                        return o >= 0 && o < r
                    }
                    return !1
                }(function (t) {
                    return nt(t.getBoundingClientRect) ? t.getBoundingClientRect() : void 0
                }(t), u, c) && !function (t) {
                    return Ct.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : function (t) {
                        for (; t && 1 === t.nodeType;) {
                            if ("none" === function (t) {
                                return t.style && t.style.display
                            }(t) || "hidden" === t.type) return !0;
                            t = t.parentNode
                        }
                        return !1
                    }(t)
                }(t) && f.push(t.src)
            });
            var l = (n.loadEventEnd || Vt.loadEventEnd) - n.navigationStart;
            r(f, function (e) {
                var n = t.getEntriesByName(e);
                if (n.length) {
                    var r = n[0], i = r.responseEnd;
                    r.fetchStart <= l && i > a && (a = i)
                }
            })
        }
        return Math.round(a)
    }

    function z(t) {
        return function e(n, r) {
            var i = e;
            if (i._ && (i._ = 1), !this[jt]) {
                var o = this[Ft] = {};
                o.method = n, o.url = r, o.id = Ye++;
                var s = le.get("event");
                s && (o.key = s.key, s.remain++)
            }
            try {
                return t.apply(this, arguments)
            } catch (t) {
            }
            return a(t, [this, arguments])
        }
    }

    function G(t) {
        return function e(n) {
            var i = e;
            if (i._ && (i._ = 1), !this[jt]) {
                var o = this[Ft];
                o && (o.start = h(), o.reqSize = v(n)), function (t) {
                    function e(e) {
                        return R(function n() {
                            var r = n;
                            r._ && (r._ = 1), Y(t);
                            var i;
                            if (nt(e)) {
                                var o = t[Ft];
                                if (o && 4 == t.readyState) var a = h();
                                i = e.apply(this, arguments), o && 4 == t.readyState && (o.cbTime = h() - a, t[Ft] = null)
                            }
                            return i
                        })
                    }

                    function n(e) {
                        t[Ft] && (t[Ft].errorCode = e)
                    }

                    if (t[Xe]) w(t, Xe, e); else try {
                        ct(t, Dt, R(function e() {
                            var n = e;
                            n._ && (n._ = 1), Y(t)
                        })), r(Ue, function (e, r) {
                            ct(t, r, function () {
                                n(e)
                            })
                        })
                    } catch (i) {
                        return void l(function () {
                            r(Ue, function (e, r) {
                                var i = "on" + r;
                                t[i] ? w(t, i, function (t) {
                                    if (n(e), nt(t)) return t.apply(this, arguments)
                                }) : t[i] = function () {
                                    n(e)
                                }
                            }), w(t, Xe, e)
                        })
                    }
                    l(function () {
                        w(t, Xe, e)
                    })
                }(this), this.setRequestHeader && St.id && o && Ke(o.url) && (o.r = h() % 1e9, this.setRequestHeader("X-Tingyun-Id", St.id + ";r=" + o.r))
            }
            try {
                return t.apply(this, arguments)
            } catch (t) {
            }
            return a(t, [this, arguments])
        }
    }

    function Y(t) {
        var e = t[Ft];
        if (e && (e.end = h(), e.readyState = t.readyState, 4 == t.readyState)) {
            e.status = t.status, e.resSize = function (t) {
                var e = 0;
                if ("" == t.responseType || "text" == t.responseType) e = v(t.responseText); else if (t.response) e = v(t.response); else try {
                    e = v(t.responseText)
                } catch (t) {
                }
                return e
            }(t);
            var n = le.get("event");
            l(function () {
                var i = !1;
                if (r(Ge, function (t) {
                    if (t.id === e.id) return i = !0, !1
                }), !i) {
                    var o = function (t, e) {
                        if (t) {
                            var n = t.status, r = {
                                id: t.id,
                                req: t.method + " " + t.url,
                                start: t.start,
                                du: n > 0 ? t.end - t.start : 0,
                                cb: t.cbTime || 0,
                                status: n,
                                err: t.errorCode ? t.errorCode : 0,
                                rec: t.resSize,
                                send: t.reqSize
                            };
                            if (t.r) {
                                var i = function (t, e) {
                                    var n = L(function (t, e) {
                                        if (t && t.getResponseHeader) return t.getResponseHeader(e)
                                    }(t, "X-Tingyun-Tx-Data"));
                                    return n && n.r && U(n.r) === U(e.r) ? n : null
                                }(e, t);
                                i && (r.s_id = i.id, r.s_name = i.action, i.time && (r.s_du = i.time.duration, r.s_qu = i.time.qu), r.t_id = i.trId)
                            }
                            return r
                        }
                    }(e, t);
                    n && n.key == e.key && (n.xhrs.push(o), 0 == --n.remain && n._end()), Vt.xhrs && (ze(e), Vt.xhrs[e.url] = o), Ge.push(o)
                }
            })
        }
    }

    function U(t) {
        return t + ""
    }

    function X(t) {
        this.limit = t, this.reset()
    }

    function K(t, e, n, r, i, o, a) {
        this.id = t, this.time = h(), this.msg = e, this.lineno = r, this.colno = i, this.filename = n, this.count = 1, this.stack = o && o.stack || "", this.module = a, this.fix();
        var s = Qe[t];
        this.ep = s ? 0 : 1, Qe[t] = !0
    }

    function W(t) {
        var e = function (t) {
            var e = [];
            return r($e.c, function (t) {
                e.push(t.toObject())
            }), e
        }();
        if (!e || !e.length) return null;
        var i = {fu: Je || Je++, os: parseInt((h() - (Kt.pfStart || n)) / 1e3)};
        Xt.ulabel && (i.ulabel = Xt.ulabel), Vt.emit("send", "/err1", i, {datas: e}, s($e.reset, $e))
    }

    function J(t, e, n, i, o) {
        if (e || !xt) {
            var a = !1;
            if (r(_t.domains, function (t) {
                if (a = t.test(e)) return !1
            }), !a) {
                var s = o && o.moduleId, u = function (t, e, n, r) {
                    return String(t) + String(e) + String(n) + String(r)
                }(t, n, i, s), c = $e.get(u);
                c ? c.increase() : (c = new K(u, t, e, n, i, o, s), $e.add(u, c), Vt.errs && Vt.errs.push(c))
            }
        }
    }

    function $() {
        var t = e.onerror;
        e.onerror = function (e, n, r, i, o) {
            if (J(e, n, r, i, o), nt(t)) return t.apply(this, arguments)
        }, e.onerror._ty = !0
    }

    function Q() {
        var t = e.onerror;
        t && t._ty || $()
    }

    var V, Z, tt = i("String"), et = i("Array"), nt = i("Function"), rt = i("Object"), it = i("Undefined"), ot = '"',
        at = /([\"\\])/g, st = /\n/g, ut = e.JSON;
    ut && ut.parse && ut.stringify ? (V = function (t) {
        return JSON.parse(t)
    }, Z = function (t) {
        return JSON.stringify(t)
    }) : (V = function (t) {
        return new Function("return " + t)()
    }, Z = o);
    var ct, ft;
    e.addEventListener ? (ct = function (t, e, n, r) {
        return t.addEventListener(e, n, r)
    }, ft = function (t, e, n) {
        return t.removeEventListener(e, n)
    }) : (ct = function (t, e, n) {
        return t.attachEvent("on" + e, n)
    }, ft = function (t, e, n) {
        return t.detachEvent("on" + e, n)
    });
    var lt = e.encodeURIComponent, dt = [].slice, ht = new Function("return!+[1,]"), pt = e.location.protocol,
        vt = "http:", gt = function () {
            function t(t) {
                return t < 0 ? NaN : t <= 30 ? 0 | Math.random() * (1 << t) : t <= 53 ? (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << t - 30)) * (1 << 30) : NaN
            }

            function e(t, e) {
                for (var n = t.toString(16), r = e - n.length, i = "0"; r > 0; r >>>= 1, i += i) 1 & r && (n = i + n);
                return n
            }

            return function () {
                return e(t(32), 8) + "-" + e(t(16), 4) + "-" + e(16384 | t(12), 4) + "-" + e(32768 | t(14), 4) + "-" + e(t(48), 12)
            }
        }();
    m.prototype = {
        on: function (t, e) {
            var n = this;
            return tt(t) ? (n.events[t] || (n.events[t] = [])).push(e) : et(t) && r(t, function (t) {
                n.on(t, e)
            }), n
        }, off: function (t, e) {
            var n = arguments.length;
            if (0 === n) return this.events = {}, this;
            var r = this.events[t];
            if (!r) return this;
            if (1 === n) return this.events[t] = null, this;
            for (var i = r.length; i--;) if (r[i] === e) {
                r.splice(i, 1);
                break
            }
            return this
        }, emit: function (t) {
            var e = [].slice.call(arguments, 1), n = this.events[t];
            return n && r(n, function (t) {
                return t.apply(this, e)
            }), this
        }, unshift: function (t, e) {
            return (this.events[t] || (this.events[t] = [])).unshift(e), this
        }
    };
    var mt = e.Error, yt = e.document, bt = e.XMLHttpRequest, _t = {};
    t(_t);
    var St = _t.server || {};
    St = c({fp_threshold: 2e3, fs_threshold: 4e3, dr_threshold: 4e3}, St);
    var xt = y("ignore_err"), wt = y("debug"), Et = e.location, Tt = e.navigator, It = e.HTMLElement, kt = function () {
        try {
            var t = gt();
            return e.localStorage.setItem(t, t), e.localStorage.removeItem(t), !0
        } catch (t) {
            return !1
        }
    }(), Ct = {};
    Ct.localStorage = kt, function () {
        yt.documentElement;
        var t, n, r = yt.createElement("div"), i = yt.createElement("div");
        i.style && (i.style.cssText = "float:left;opacity:.5", Ct.opacity = "0.5" === i.style.opacity, Ct.cssFloat = !!i.style.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", Ct.clearCloneStyle = "content-box" === i.style.backgroundClip, (r = yt.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", i.innerHTML = "", r.appendChild(i), Ct.boxSizing = "" === i.style.boxSizing || "" === i.style.MozBoxSizing || "" === i.style.WebkitBoxSizing, Ct.reliableHiddenOffsets = function () {
            return null == t && function () {
                var o, a, s = yt.documentElement;
                s.appendChild(r), i.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", t = !1, !0, e.getComputedStyle && (a = e.getComputedStyle(i), t = "1%" !== (a || {}).top, "2px" === (a || {}).marginLeft, "4px" === (a || {width: "4px"}).width, i.style.marginRight = "50%", "4px" === (a || {marginRight: "4px"}).marginRight, (o = i.appendChild(yt.createElement("div"))).style.cssText = i.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", i.style.width = "1px", !parseFloat((e.getComputedStyle(o) || {}).marginRight), i.removeChild(o)), i.style.display = "none", (n = 0 === i.getClientRects().length) && (i.style.display = "", i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (o = i.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (n = 0 === o[0].offsetHeight) && (o[0].style.display = "", o[1].style.display = "none", n = 0 === o[0].offsetHeight)), s.removeChild(r)
            }(), n
        })
    }();
    var Nt, Ot;
    Ct.localStorage ? (Nt = function (t) {
        return e.localStorage.getItem(t)
    }, Ot = function (t, n) {
        return e.localStorage.setItem(t, n), n
    }) : (Nt = b, Ot = _);
    var Rt, qt = "error", At = "load", Mt = "unload", Ht = "beforeunload", Lt = "pagehide", Dt = "readystatechange",
        Bt = "complete", Ft = "_ty_rum", Pt = "TINGYUN", jt = "__ign", zt = "display:none", Gt = function (t, e) {
            e = e || d;
            var n = new Image;
            ct(n, Dt, function () {
                "loaded" != n.readyState && 4 != n.readyState || e(null)
            }, !1), ct(n, At, function () {
                e(null)
            }, !1), ct(n, qt, function () {
                e(qt)
            }, !1), n.src = t
        };
    e.XDomainRequest ? Rt = function (t, e, n, r) {
        nt(n) && (r = n);
        var i = new XDomainRequest;
        i.open("POST", t), i.onload = function () {
            r(null, i.responseText)
        }, i.onerror = function (t) {
            r(t)
        }, i.send(Z(e))
    } : ht() ? Rt = x : Tt.sendBeacon ? Gt = Rt = function (t, e, n, r) {
        nt(n) && (r = n, n = null), Tt.sendBeacon(t, Z(e)) && r && r()
    } : Rt = function (t, e, n, r) {
        nt(n) && (r = n, n = null);
        var i = p(r), o = new bt;
        o[jt] = !0, o.overrideMimeType && o.overrideMimeType("text/html"), o.onreadystatechange = function () {
            4 == o.readyState && 200 == o.status && i(null, o.responseText)
        }, o.onerror = i, e = Z(e);
        try {
            o.open("POST", t, !0)
        } catch (n) {
            return x(t, e, i)
        }
        for (var a in n) o.setRequestHeader(a, n[a]);
        o.send(e)
    };
    var Yt = wt, Ut = {start: n, e: {}, an: {count: 0}, visible: []}, Xt = {}, Kt = {};
    !function () {
        if (wt) {
            var t, e, n = "visibilitychange";
            it(yt.hidden) ? it(yt.msHidden) ? it(yt.webkitHidden) || (t = "webkitHidden", e = "webkit" + n) : (t = "msHidden", e = "ms" + n) : (t = "hidden", e = n), it(yt.addEventListener) || it(yt[t]) || ct(yt, e, function (t) {
                return function () {
                    Yt && t.apply(this, arguments)
                }
            }(function () {
                Ut.visible.push([yt[t], h()])
            }))
        }
    }();
    var Wt = new m, Jt = [], $t = [], Qt = N.prototype;
    Qt.start = function () {
        if (!St.key) return I("missing config, agent disabled!"), !1;
        var t = e[Ft] || e[Pt];
        return t && t.server ? (I("already loaded!"), !1) : (T(), this)
    }, c(Qt, m.prototype);
    var Vt = new N;
    Vt.on("send", function (t, e, n, r) {
        var i = g(St.beacon, t, c({}, Zt, e || {}));
        switch (r = r || d, t) {
            case"/pf":
                n ? Rt(i, n, function () {
                    Vt.xhrs = Vt.errs = null, r()
                }) : Gt(i, r);
                break;
            default:
                Rt(i, n, r)
        }
    });
    var Zt = {
        pvid: gt(),
        ref: yt.URL,
        referrer: yt.referrer,
        key: St.key,
        v: "1.7.5",
        av: "1.7.5",
        did: Nt("TY_DISTINCT_ID") || Ot("TY_DISTINCT_ID", gt(), 86400),
        sid: function () {
            var t = b("TY_SESSION_ID");
            return t || (t = gt(), _("TY_SESSION_ID", t)), t
        }()
    }, te = It ? function (t) {
        return t instanceof It
    } : function (t) {
        t && "object" == typeof t && 1 === t.nodeType && tt(t.nodeName)
    }, ee = "{0} not support", ne = {}, re = void 0 !== e.console, ie = 1, oe = 2, ae = 4, se = 8, ue = O.prototype;
    ue.create = ue.before = ue.after = ue.error = null;
    var ce;
    q.prototype = {
        createContext: function () {
            return Object.create ? Object.create(this.active) : A(this.active)
        }, get: function (t) {
            if (this.active) return this.active[t]
        }, set: function (t, e) {
            if (this.active) return this.active[t] = e
        }, enter: function (t) {
            if (!t) throw new mt("context required!");
            this._set.push(this.active), this.active = t
        }, exit: function (t) {
            if (!t) throw new mt("context required!");
            if (t !== this.active) {
                var e = this._set.lastIndexOf(t);
                if (e < 0) throw new mt("context not currently entered!");
                this._set.splice(e, 1)
            } else this.active = this._set.pop()
        }, bind: function (t, e) {
            e || (e = this.active ? this.active : this.createContext());
            var n = this;
            return function () {
                n.enter(e);
                try {
                    return t.apply(this, arguments)
                } catch (t) {
                    try {
                        t.moduleId = e.moduleId
                    } catch (t) {
                    }
                    throw t
                } finally {
                    n.exit(e)
                }
            }
        }
    };
    var fe = !1, le = (fe || (le = A(), fe = !0), le), de = M.prototype;
    de.fail = de.end = d;
    var he = H.prototype;
    he.end = he.finish = he.fail = null, he.send = function (t) {
        var e = this;
        e.sent = !0;
        var n = t.event && t.event.xhrs || [];
        r(n, function (t) {
            t.start = t.start - e.s
        });
        var i = {key: e.key, duration: e.e - e.s, status: e.status, xhrs: n};
        Vt.emit("send", "/spe", null, i, d)
    };
    var pe = {}, ve = {}, ge = e.screen;
    ge && (ve.sh = ge.height, ve.sw = ge.width);
    var me = {host: "cshst", url: "csurl"}, ye = {
        version: "1.7.5", config: function (t, e) {
            var n;
            if (rt(t)) n = t; else {
                if (!tt(t) || void 0 === e) throw new mt("illegal argument");
                (n = {})[t] = e
            }
            return r(n, function (t, e) {
                e in me ? Xt[me[e]] = t : Xt[e] = t
            }), this
        }, DIAGNOSE_HREF: 2, diagnose: function (t) {
            function e(t, e, r) {
                var i = r || "log", o = n[t] || (n[t] = {});
                o[i] = o[i] || "", o[i] += e
            }

            var n = {}, i = I();
            if (e("Status", i, "ok" !== i), e("Debug", k()), r(ne, function (t, n) {
                e("Timeline", n + ": " + t.toString())
            }), !t && re) console.log("[TingYun Agent Diagnosis]\n"), r(n, function (t, e) {
                r(console[e], function (t, e) {
                    console[e](t)
                })
            }); else {
                if (2 !== t) return Z(n);
                Et.href = Et.href + "#" + Z(n)
            }
        }, createEvent: function (t) {
            var e = (t = t || {}).key;
            if (!e) return new M;
            if (pe[e]) return new M("event " + e + " is executing");
            pe[e] = !0;
            var n = le.createContext();
            le.enter(n);
            var r = new H(t);
            return le.set("event", r), r._end = function () {
                !this.sent && 0 === this.remain && this.called && this.finish().send(n)
            }, r.end = function (t) {
                this.called ? re && console.warn("Event " + this.key + "has ended or failed!") : (this.called = !0, le.exit(n), this.status = arguments.length ? t : 1, this._end())
            }, r.finish = function (t) {
                return this.e = h(), this.i && clearTimeout(this.i), delete pe[this.key], this
            }, r.fail = function () {
                this.end(0)
            }, r
        }, logFirstScreen: function (t) {
            if (t) {
                var e = Xt.firstScreenResources = Xt.firstScreenResources || [];
                et(t) || (t = [t]), r(t, function (t) {
                    if (tt(t)) e.push(t); else if (te(t)) {
                        var n = t.src || t.href;
                        n && e.push(n)
                    }
                })
            }
        }, addExcludedDomain: function (t) {
            et(t) || (t = [t]), r(t, function (t) {
                if (t) {
                    if (!(t instanceof RegExp)) throw new mt("parameter's type requires RegExp");
                    (_t.domains || (_t.domains = [])).push(t)
                }
            })
        }
    };
    e[Ft] = e[Pt] = ye;
    var be = 0, _e = "fetchStart", Se = "requestStart", xe = "responseStart", we = "responseEnd",
        Ee = "domContentLoadedEventStart", Te = "domContentLoadedEventEnd", Ie = "domInteractive", ke = "domComplete",
        Ce = "loadEventStart", Ne = "loadEventEnd", Oe = "unloadEventStart", Re = "unloadEventEnd",
        qe = "domainLookupStart", Ae = "domainLookupEnd", Me = "redirectStart", He = "redirectEnd", Le = "connectStart",
        De = "connectEnd", Be = "secureConnectionStart", Fe = function (t) {
            if (!t.agent) {
                var n = e._ty_rum;
                if (n && n.agent) t.agent = n.agent; else {
                    var r = b("TINGYUN_DATA");
                    if (r) {
                        try {
                            t.agent = L(decodeURIComponent(r))
                        } catch (t) {
                            I(t && t.message)
                        }
                        _("TINGYUN_DATA", "", -1e3)
                    }
                }
            }
            return t.agent
        }(_t);
    Fe && Fe.ulabel && (Xt.ulabel = Fe.ulabel);
    var Pe = 2e3, je = function (t) {
        var e = [];
        return r(St.custom_urls, function (t) {
            try {
                e.push(new RegExp(t))
            } catch (t) {
                I(t && t.message)
            }
        }), e
    }(), ze = je.length ? function (t) {
        var e = t.url;
        !Vt.ct && e && r(je, function (n) {
            if (e.match(n)) return Vt.ct = t.end + t.cbTime, !1
        })
    } : d, Ge = [], Ye = 0, Ue = {error: 990, abort: 905, timeout: 903}, Xe = "on" + Dt, Ke = function () {
        function t(t) {
            var r = t;
            return e && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
            }
        }

        var e = /(msie|trident)/i.test(Tt.userAgent), n = yt.createElement("a"), r = t(Et.href);
        return function (e) {
            var n = t(e);
            return n.protocol === r.protocol && n.host === r.host
        }
    }(), We = 1e4, Je = 0;
    X.prototype = {
        add: function (t, e) {
            this.len > this.limit || this.get(t) || (this.c[t] = e, this.len++)
        }, get: function (t) {
            return this.c[t]
        }, reset: function () {
            this.c = {}, this.len = 0
        }
    };
    var $e = new X(100), Qe = {};
    return K.prototype = {
        increase: function () {
            this.count++
        }, fix: function () {
            var t = this.stack;
            if (t && tt(t)) {
                var e = [];
                r(t = t.split(/\n/), function (t, n) {
                    -1 == t.indexOf("__ty_aysncWrap__") && e.push(t)
                }), this.stack = e.join("\n")
            }
        }, toObject: function () {
            return {
                o: this.time,
                e: this.msg,
                l: this.lineno,
                c: this.colno,
                r: this.filename,
                ec: this.count,
                s: this.stack,
                m: this.module,
                ep: this.ep
            }
        }
    }, function () {
        var t = Array.prototype;
        t.indexOf || (t.indexOf = function (t, e) {
            var n = this.length >>> 0;
            if ((e |= 0) < 0) e = Math.max(n - e, 0); else if (e >= n) return -1;
            if (void 0 === t) {
                do {
                    if (e in this && void 0 === this[e]) return e
                } while (++e !== n)
            } else do {
                if (this[e] === t) return e
            } while (++e !== n);
            return -1
        })
    }(), Vt.start() && (function () {
        var t = p(function () {
            var t = e.performance, i = !!t;
            i || k(f(ee, ["pf"]));
            var o = function (t) {
                var e = {};
                return t && (e.id = t.id, e.a = t.a, e.q = t.q, e.tid = t.tid, e.n = t.n), e
            }(Fe), a = t && t.timing, s = c(B(a), o, Xt), u = c({}, ve);
            Vt.fp ? (u.fp = Vt.fp, i && Vt.fp > Vt._le && (k("fp>le"), u.fp = P(t), u.__fp = 2)) : i ? (u.fp = P(t), u.__fp = 1) : u.fp = u.__fp = 0, u.dr = function (t) {
                var e = n, r = 0;
                return t && (e = t.navigationStart || e, r = t[Ee] || t.domInteractive || t.domLoading || r), (r = Vt[Ee] || r || Vt._end) - e
            }(a), i ? u.fs = j(t, a, u.fp, u) : u.__fs = 0;
            var l, d = "";
            if (i) {
                var p = Math.max(s.ls, 0);
                p || (p = D() - a.navigationStart || n), u.trace = p;
                var v = function (t) {
                    if (t) {
                        var e = t.fetchStart;
                        if (e) return e - t.navigationStart
                    }
                }(a);
                r(["fp", "fs", "dr", "trace"], function (t) {
                    d += function (t) {
                        return t ? "1" : "0"
                    }((v ? u[t] - v : u[t]) >= St[t + "_threshold"])
                }), delete u.trace, d.indexOf("1") > -1 && (l = F(t, a))
            }
            u.trflag = d || "0000", Kt.pfStart = h(), delete s.firstScreenResources, delete s.resources, Vt.emit("send", "/pf", c(s, u), l, function () {
                k("pf sent!"), Vt.xhrs = Vt.errs = null
            })
        });
        Wt.on(At, function () {
            l(t)
        }).on([Mt, Ht, Lt], t)
    }(), function () {
        var t = bt && bt.prototype;
        t ? (w(t, "open", z), w(t, "send", G)) : bt && (e.XMLHttpRequest = function () {
            var t = new bt;
            return w(t, "open", z), w(t, "send", G), t
        }), setInterval(function () {
            if (Ge && Ge.length) {
                var t = [];
                r(Ge, function (e) {
                    t.push(e)
                });
                var n = null;
                Xt.ulabel && (n = {ulabel: Xt.ulabel}), Vt.emit("send", "/xhr1", n, {xhr: t}, function () {
                    Ge = function (t, e) {
                        for (var n = -1, r = 0, i = null == t ? 0 : t.length, o = []; ++n < i;) {
                            var a = t[n];
                            e(a, n, t) && (o[r++] = a)
                        }
                        return o
                    }(Ge, function (e) {
                        return t.indexOf(e) < 0
                    })
                }), ht() && !e.XDomainRequest && (Ge = [])
            }
        }, Pe)
    }(), function () {
        var t = ht();
        t ? $() : ct(e, qt, function (t) {
            var n, r, i, o, a;
            (t instanceof e.Event || e.ErrorEvent && t instanceof e.ErrorEvent) && (n = t.message || t.error && (t.error.message || t.error.constructor.name) || "", r = t.lineno || 0, i = t.colno || 0, (o = t.filename || t.error && t.error.filename || t.target && t.target.baseURI || "") == yt.URL && (o = "#"), a = t.error), J(n, o, r, i, a)
        }), Wt.on([At, Mt, Ht, Lt], function (t) {
            W()
        }).on(At, function () {
            t && l(Q)
        }), setInterval(W, We)
    }()), Vt._end = h(), E(function () {
        Ut._end = Vt._end
    }), function () {
        if (Object.defineProperty) {
            var t = e[Ft];
            Object.defineProperty(e, Ft, {
                get: function () {
                    return be++ > 0 && e.console && console.warn("window.%s is deprecated, use window.%s instead.", Ft, Pt), t
                }
            })
        }
    }(), ye
};
window.onload = loadTINGYUN();