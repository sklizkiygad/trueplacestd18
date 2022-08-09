function Subject() {
}

function Observer() {
}

function __(e, t) {
    if (!Lang[e] && ~e.indexOf("messages.")) {
        var r = e.replace("messages.", "");
        Lang[r] && (e = r)
    }
    if (Lang[e]) {
        if (t) {
            var i, a = Lang[e];
            for (var i in t) a = a.replace(i, t[i]);
            return a
        }
        return Lang[e]
    }
    return e
}

function trans(e) {
    return __(e)
}

function extend(e, t) {
    var r = new Function;
    r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t, t.superclass = e.prototype, t.superclass.__construct = e
}

function setAccordion() {
    var e, t = document.getElementsByClassName("accordion");
    for (e = 0; e < t.length; e++) t[e].onclick = function () {
        this.classList.toggle("active"), this.nextElementSibling.classList.toggle("show")
    }
}

function StdClass() {
}

function extend(e, t) {
    var r = function () {
    };
    r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t, t.superclass = e.prototype, t.superclass.__construct = e
}

function __php2js_clone_argument__(e) {
    if (e instanceof Array || e && e.constructor && "Object" == e.constructor.name) {
        if (e instanceof Array) {
            var t, r, i = [];
            for (t = 0; t < e.length; t++) r = e[t], r instanceof Array && (r = __php2js_clone_argument__(r)), i.push(e[t]);
            return i
        }
        var t, i = {};
        for (t in e) (e[t] instanceof Array || e[t] && e[t].constructor && "Object" == e[t].constructor.name) && (e[t] = __php2js_clone_argument__(e[t])), i[t] = e[t];
        return i
    }
    return e
}

function __php2js_push__(e) {
    var t, r = this, i = -1;
    for (t in r) t = parseInt(t, 10), isNaN(t) || i < t && (i = t);
    i++, this[i] = e
}

function count(e) {
    if (!e) return 0;
    if (e instanceof Array || isset(e.length)) return e.length;
    var t, r = 0;
    for (t in e) r++;
    return r
}

function sizeof(e) {
    if (!e) return 0;
    if (e instanceof Array || isset(e.length)) return e.length;
    var t, r = 0;
    for (t in e) r++;
    return r
}

function _dateParseN(e) {
    var t = e.getDay();
    return t = 0 == t ? 7 : t
}

function date(e, t) {
    var r, i = new Date;
    t && i.setTime(1e3 * t), r = {
        Y: i.getFullYear(),
        y: i.getYear(),
        m: i.getMonth() + 1,
        d: i.getDate(),
        H: i.getHours(),
        N: _dateParseN(i),
        i: i.getMinutes(),
        s: i.getSeconds()
    };
    var a;
    for (a in r) "N" != a && (r[a] = +r[a] < 10 ? "0" + r[a] : r[a]), e = str_replace(a, r[a], e);
    return e
}

function isset(e) {
    window.issetdbg;
    if ("undefined" === String(e)) return !("undefined" === String(e));
    for (var t = 1; t < arguments.length; t++) if (e = e[arguments[t]], !isset(e)) return !1;
    return !0
}

function explode(e, t) {
    return t.split(e)
}

function floatval(e) {
    return parseFloat(e)
}

function array_keys(e) {
    var t, r = [];
    if (e instanceof Array) {
        for (t = 0; t < e.length; t++) "undefined" != String(e[t]) && r.push(t);
        return r
    }
    if (e instanceof Object) for (t in e) r.push(t);
    return r
}

function array_chunk(e, t, r) {
    if (e instanceof Array) {
        if (r) {
            var i, a = {};
            for (i = 0; i < e.length; i++) a[i] = e[i];
            return object_chunk(e, t, r)
        }
        return _array_chunk(e, t)
    }
    return object_chunk(e, t, r)
}

function object_chunk(e, t, r) {
    var i, a, o, n = {length: 0}, s = [];
    a = o = 0;
    for (i in e) a >= t && (s.push(n), n = {length: 0}, a = 0), r ? n[i] = e[i] : n[o] = e[i], n.length++, a++, o++;
    return n.length && s.push(n), s
}

function _array_chunk(e, t) {
    var r, i, a = [], o = [];
    for (i = 0, r = 0; r < e.length; r++) i >= t && (o.push(a), a = [], i = 0), a.push(e[r]), i++;
    return a.length && o.push(a), o
}

function array_intersect(e, t) {
    var r, i = [];
    for (r = 0; r < e.length; r++) ~$.inArray(e[r], t) && i.push(e[r]);
    return i
}

function array_map(e, t) {
    for (var r = 0; r < t.length; r++) t[r] = e(t[r]);
    return t
}

function array_reverse(e) {
    if (e instanceof Array) return e.reverse()
}

function array_search(e, t) {
    var r = !1;
    return $(t).each(function (t, i) {
        r === !1 && i == e && (r = t)
    }), r
}

function array_fill_keys(e, t) {
    var r, i = {};
    for (r = 0; r < e.length; r++) i[e[r]] = t;
    return i
}

function intval(e) {
    var t = parseInt(e);
    return t = isNaN(t) ? 0 : t
}

function in_array(e, t, r) {
    var i, a, o;
    if ("array" == typeof t) {
        for (i = 0; i < t.length; i++) if (a = t[i], o = a == e, r && (o = a === e), o) return !0
    } else if ("object" == typeof t) for (i in t) if (a = t[i], o = a == e, r && (o = a === e), o) return !0;
    return !1
}

function join(e, t) {
    return t.join(e)
}

function time(e) {
    var t = /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}\s[0-9]{2}:[0-9]{2}:[0-9]{2}$/, r = String(e).split(" "), i = r[0], a = r[1],
        o = new Date, n = /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/;
    return t.test(e) || n.test(e) ? (r = i.split("-"), o.setDate(parseInt(r[2], 10)), o.setFullYear(r[0]), o.setMonth(parseInt(r[1], 10) - 1), a ? (r = a.split(":"), o.setHours(parseInt(r[0], 10)), o.setMinutes(parseInt(r[1], 10)), o.setSeconds(parseInt(r[2], 10), 0)) : (o.setHours(0), o.setMinutes(0), o.setSeconds(0, 0)), parseInt(o.getTime() / 1e3)) : parseInt((new Date).getTime() / 1e3)
}

function trim(e) {
    return $.trim(e)
}

function strval(e) {
    return String(e)
}

function strtolower(e) {
    return String(e).toLowerCase()
}

function str_replace(e, t, r, i) {
    r = String(r);
    for (var a = r.indexOf(e); a != -1;) r = r.replace(e, t), i && i instanceof Object && (i.v || (i.v = 0), i.v++), a = r.indexOf(e, a + 1);
    return r
}

function strlen(e) {
    return e.length
}

function strip_tags(e) {
    var t, r, i, a, o, n = "";
    for (t = 0; t < e.length; t++) {
        if (o = e.charAt(t), i) {
            if (o == a) {
                a = "", i = 0;
                continue
            }
        } else '"' != o && "'" != o || (i = 1, a = o);
        i || "<" != o || (r = 1), r || (n += o), i || ">" != o || (r = 0)
    }
    return n
}

function round(e, t) {
    if (!t) return Math.round(e);
    for (var r, i = 1, r = 0; r < t; r++) i *= 10;
    return Math.round(e * i) / i
}

function empty(e) {
    return !e || e instanceof Array && 0 == e.length
}

function array() {
    return []
}

function sizeof(e) {
    if (e && e.length) return e.length;
    if (e && e instanceof Object) {
        var t, r = 0;
        for (t in e) r++;
        return r
    }
    return null
}

function pathinfo(e) {
    var t, r = e.split("/"), i = r[r.length - 1], a = {};
    return r.pop(), a.dirname = r.join("/"), a.basename = i, r = i.split("."), t = r[r.length - 1], r.pop(), i = r.join("."), a.filename = i, a.extension = t, a
}

function array_values(e) {
    var t = [];
    if (e instanceof Array) for (var r = 0; r < e.length; r++) e[r] && t.push(e[r]); else if (e instanceof Object) for (var r in e) e[r] && t.push(e[r]);
    return t
}

function array_unique(e) {
    if (!(e instanceof Array)) return e;
    var t, r = {};
    for (t = 0; t < e.length; t++) r[e[t]] = 1;
    e = [];
    for (t in r) e.push(t);
    return e
}

function strtolower(e) {
    return e.toLowerCase()
}

function strtotime(e) {
    return time(e)
}

function mb_strtolower(e) {
    return e.toLowerCase()
}

function mb_strlen(e) {
    return e.length
}

function mb_substr(e, t, r) {
    return e.substring(t, t + r)
}

function mb_strpos(e, t) {
    var r = e.indexOf(t);
    return r != -1 && r
}

function sprintf() {
    for (var e, t, r, i, a, o = arguments[0], n = 1, s = "", c = "", l = 0; l < arguments.length; l++) {
        if ("NaN" == String(arguments[l])) throw new Error("sprintf got NaN!");
        c += arguments[l] + ","
    }
    if ("array" == typeof o) throw new Error("Sprintf got array");
    for (; ;) {
        if (e = o.indexOf("%"), !~e) break;
        for (s = "", t = e; t < o.length && (r = o.charAt(t), " " != r && "\t" != r && "\r" != r && "\n" != r && ")" != r && "(" != r && "]" != r && "[" != r && "'" != r && '"' != r); t++) s += r;
        var _, d = /%\.[0-9]+F/, p = /%[0-9]+d/;
        if ("%.d" != s && d.test(s)) {
            if (r = s.replace("%.", ""), _ = parseInt(r, 10), r = arguments[n], n++, !isNaN(parseFloat(r))) {
                for (r = String(round(r, _)), r.indexOf(".") == -1 && (r += "."), i = r.substring(r.indexOf(".")); i.length < _ + 1;) i += "0", r += "0";
                o = o.replace(s, r)
            }
        } else if ("%.d" != s && p.test(s)) {
            if (r = s.replace("%", ""), a = "0" == String(r).charAt(0) ? "0" : " ", _ = parseInt(r, 10), r = arguments[n], n++, i = "", !isNaN(_)) for (t = 3; t < _; t++) i += a;
            i += String(r), o = o.replace(s, i)
        } else if ("%.d" == s) r = arguments[n], n++, o = o.replace(s, parseInt(r, 10)); else if ("%d" == s) r = arguments[n], n++, o = o.replace(s, r); else {
            if ("%s" != s) throw o = o.replace(s, "nAn"), new Error("sprintf: unable process |" + o + "|");
            r = arguments[n], n++, o = o.replace(s, r)
        }
    }
    return o
}

function Request() {
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function WorktimeHelper(e) {
}

function expandLibrary() {
    window.FlipcatWebAppLibrary = window.FlipcatWebAppLibrary || {}, FlipcatWebAppLibrary._currencies = FlipcatWebAppLibrary._currencies || {}, window.FlipcatWebAppLibrary._currencies.RUR = '<i class="currency"></i>', window.FlipcatWebAppLibrary.lock = function (e, t) {
        var r, i, a, o = $(e), n = o.css("position");
        t && (o = t), o.data("position", n), r = '<div class="prelocker" style="position:absolute;z-index:1000;top:0px; left:0px;background:rgba(255, 255, 255, 0.5)">\t\t\t<img style="position:absolute;z-index:1001;opacity:0;" src="/img/loader.gif" >\t\t</div>', o.css("position", "relative"), i = $(r), i.find("img")[0].onload = function () {
            a = i.find("img"), a.css("left", (o.width() - a.width()) / 2).css("top", (screen.height - a.height()) / 2).css("opacity", 1)
        }, i.css("width", o.width() + "px"), i.css("height", o.height() + "px"), i.css("opacity", 1), o.append(i)
    }, window.FlipcatWebAppLibrary.getSuccessMessage = function (e) {
        return $('<div class="alert-wrapper"><div class="alert alert-success">' + e + "</div></div>")
    }, window.FlipcatWebAppLibrary.removeSuccessMessage = function (e) {
        e[0] ? e.find(".alert.alert-success").each(function (e, t) {
            $(t).parent().remove(), $(t).remove()
        }) : $(".alert.alert-success").remove()
    }
}

function Multiproduct(e, t, r) {
    this.id = e, this.parameters = [], this.selects = [], this.initalize(e, t, r)
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}

function closeAllSelect(e) {
    var t, r, i, a = [];
    for (t = document.getElementsByClassName("select-items"), r = document.getElementsByClassName("select-selected"), i = 0; i < r.length; i++) e == r[i] && a.push(i);
    for (i = 0; i < t.length; i++) a.indexOf(i) && t[i].classList.add("select-hide")
}

Subject.prototype.observers = [], Subject.prototype.attach = function (e) {
    this.observers.push(e)
}, Subject.prototype.detach = function (e) {
    for (var t = this.observers.length, r = []; t--;) this.observers[t] != e && r.push(this.observers[t]);
    this.observers = r
}, Subject.prototype.notify = function () {
    for (var e = this.observers.length; e--;) this.observers[e].update()
}, Observer.prototype.update = function () {
};
var LangLoader = {
    init: function (e) {
        e._get(LangLoader.onLoadLang, "/lang", LangLoader.onFailLoadLang)
    }, onFailLoadLang: function () {
    }, onLoadLang: function (e, t, r) {
        for (t in e) for (r in e[t].values) e[t].scope && (Lang[e[t].scope + "." + r] = e[t].values[r]);
        e.currenciesMap && (Flipcat.currenciesMap = e.currenciesMap)
    }
};
window.FlipcatWebAppLibrary = {
    _currencies: {
        RUR: '<i class="currency"></i>',
        USD: "$",
        BYN: "BYN",
        EUR: '<span class="fa fa-euro"></span>',
        UAH: '<span style="font-size:16px">&#8372;</span>',
        KZT: '<span style="font-size:16px">&#8376;</span>',
        THB: '<span style="font-size:16px">&#3647;</span>',
        KZT: '<span style="font-size:16px">&#8376;</span>'
    }, indexBy: function (e, t, r) {
        if (e && e.isIndexedObject) return e;
        t = t ? t : "id";
        var i, a = 0, o = {order: []};
        if (e instanceof Array) for (a = 0; a < e.length; a++) i = e[a], i && i[t] && (o[i[t]] = i, o.order.push(i[t])); else if (e instanceof Object) for (a in e) i = e[a], i && i[t] && (o[i[t]] = i, o.order.push(i[t]));
        return o.isIndexedObject = 1, o
    }, storage: function (e, t) {
        var r = window.localStorage;
        if (r) if (null === t && r.removeItem(e), t instanceof String || (t = JSON.stringify(t)), t) r.setItem(e, t); else if (t = r.getItem(e)) try {
            t = JSON.parse(t)
        } catch (i) {
        }
        return t
    }, REQUEST_URI: function (e) {
        var t = window.location.href;
        return t = t.replace(this.HTTP_HOST(t), ""), e && (t = t.split("?")[0].split("#")[0]), t
    }, HTTP_HOST: function (e, t) {
        return e || (e = window.location.href), e = e.split("/").slice(0, 3).join("/"), t && (~e.indexOf("http://") && (e = e.replace("http://", "")), ~e.indexOf("https://") && (e = e.replace("https://", ""))), e
    }, True: function (e) {
        return e = "undefined" === String(e) || e
    }, _GET: function (e, t, r) {
        t || (t = null);
        var i, a = window.location.href, o = [], n = {};
        for (a = r ? r : a; a.indexOf(e + "[]") != -1;) i = this._GET(e + "[]", t, a), n[i] || (o.push(decodeURIComponent(i)), n[i] = 1), a = a.replace(e + "[]=" + i, "");
        if (o.length) return o;
        var s = a.indexOf("?" + e + "=");
        if (s == -1 && (s = a.indexOf("&" + e + "=")), s == -1) return t;
        var c = a.indexOf("&", s + 1);
        return c == -1 ? a.substring(s + e.length + 2) : a.substring(s + e.length + 2, c)
    }, getViewport: function () {
        var e = window, t = document, r = e.innerWidth, i = e.innerHeight;
        return !r && t.documentElement && t.documentElement.clientWidth ? r = t.documentElement.clientWidth : r || (r = t.getElementsByTagName("body")[0].clientWidth), !i && t.documentElement && t.documentElement.clientHeight ? i = t.documentElement.clientHeight : i || (i = t.getElementsByTagName("body")[0].clientHeight), {
            w: r,
            h: i
        }
    }, isChrome: function () {
        return window.navigator.userAgent.toLowerCase().indexOf("chrome") != -1
    }, pagination: function (e, t, r, i, a, o) {
        i = i ? i : 10, a = a ? a : "<", o = o ? o : ">";
        var n, s, c, l, _, d, p, u = +e, h = 0, f = !1;
        if (n = s = Math.ceil(t / r), s <= 1) return [];
        for (c = u - 1, c = c < 1 ? 1 : c, l = u + i, l > s && (l = s, c = l - i, c = c < 1 ? 1 : c), d = [], c > 2 && (_ = {}, _.n = 1, d[h] = _, h++, f = !0, c++), c > 1 && (_ = {}, _.n = c - 1, _.text = a, d[h] = _, h++), p = c; p <= l; p++) _ = {}, _.n = p, p == u && (_.active = 1), d[h] = _, h++;
        return l + 1 < s && (_ = {}, _.n = l + 1, _.text = o, d[h] = _, h++), l != s && (_ = {}, _.n = s, d[h] = _, h++), d
    }, getCurrenciesArray: function () {
        if (Flipcat && Flipcat.currenciesMap) return Flipcat.currenciesMap;
        var e = this._currencies;
        return e.rur = e.RUR, e.TMM = trans("messages.tmm"), e.KGS = trans("messages.kgs"), e.SOM = trans("messages.sum"), e
    }, pluralize: function (e, t, r, i, a) {
        var o, n, s, c;
        return o = strval(e), strlen(o) > 1 && (o = intval(o[strlen(o) - 2] + o[strlen(o) - 1])), n = t + i, o > 20 ? (s = strval(e), c = intval(s[strlen(s) - 1]), 1 == c ? n = t + r : (0 == c || c > 4) && (n = t + a)) : o > 4 || "00" == o || "0" == o ? n = t + a : 1 == o && (n = t + r), n
    }, unlock: function (e) {
        $(e).data("position") && $(e).css("position", $(e).data("position")), $(e + " .prelocker").remove()
    }, render: function (e, t, r, i, a, o, n, s) {
        a = this.True(a), o = "undefined" != String(o) && o, n = "undefined" == String(n) ? ".tpl" : n;
        var c, l, _, d, p, u, h = o ? o : t, f = s ? s : e.find(h + n).first(), g = n.replace(".", ""),
            m = String(f.attr("class")).replace(g, ""), C = f.html();
        if (C) {
            a && e.find(h).each(function (e, t) {
                $(t).hasClass(g) || $(t).remove()
            }), u = 0;
            for (l in i) {
                for (_ = i[l], c = C, d = 0; d < r.length; d++) c = r[d].val instanceof Function ? c.replace(r[d].key, r[d].val(_, f, u)) : c.replace(r[d].key, _[r[d].val]);
                p = $("<" + t + ' class="' + m + '">' + c + "</" + t + ">"), p = this.processTemplateImg(p), e.append(p), u++
            }
        }
    }, __getOptionByValue: function (e, t) {
        var r, i = e.getElementsByTagName("option");
        for (r = 0; r < i.length; r++) if ($(i[r]).attr("value") == t) return i[r];
        return null
    }, __getOptionByText: function (e, t) {
        var r, i = e.getElementsByTagName("option");
        for (r = 0; r < i.length; r++) if ($(i[r]).text() == t) return i[r];
        return null
    }, setGetVar: function (e, t, r, i, a) {
        r = decodeURIComponent(r), i = "undefined" != String(i) && i, a = "undefined" == String(a) ? "" : a, a = decodeURIComponent(a), e = decodeURIComponent(e);
        var o, n = "&", s = e.split("?"), c = s[0], l = s[1], _ = "CMD_UNSET";
        return l || (n = "", l = ""), o = i ? t + "=" + (r != _ ? r : a) : t + "=", ~l.indexOf(o) ? r != _ ? i || (l = l.replace(new RegExp(t + "=[^&]*"), t + "=" + r)) : i ? (l = l.replace(t + "=" + a, ""), l = l.replace(/&&/g, "&"), l = l.replace(/&$/g, "").replace(/^&/g, "")) : (t = t.replace("[", "\\["), t = t.replace("]", "\\]"), l = l.replace(new RegExp(t + "=[^&]*", "g"), "").replace(/&&/g, "&").replace(/&$/, ""), l = l.replace(/&$/g, "").replace(/^&/g, "")) : r != _ && (l += n + t + "=" + r), e = l ? c + "?" + l : c
    }, getOptionByValue: function (e, t) {
        var r, i = e.getElementsByTagName("option");
        for (r = 0; r < i.length; r++) if (i[r].value == t) return i[r];
        return null
    }, getOptionByText: function (e, t) {
        t = $.trim(t), t = t.replace(/&gt;/g, ">"), t = t.replace(/&lt;/g, "<");
        var r, i, a = e.getElementsByTagName("option");
        for (r = 0; r < a.length; r++) if (i = $.trim(a[r].text), i = i.replace(/&gt;/g, ">"), i = i.replace(/&lt;/g, "<"), i == t) return a[r];
        return null
    }, getSelectedText: function (e) {
        if (!e || "SELECT" == !e.tagName) return "";
        var t = this.getOptionByValue(e, e.value);
        return t && t.text ? t.text : ""
    }, selectByValue: function (e, t) {
        for (var r = 0; r < e.options.length; r++) if (e.options[r].value == t) return e.options[r].selected = !0, e.selectedIndex = r, !0;
        return !1
    }, selectByText: function (e, t) {
        for (var r = 0; r < e.options.length; r++) if (e.options[r].text == t) return e.options[r].selected = !0, e.selectedIndex = r, !0;
        return !1
    }, checkAutoloadItems: function () {
        var e = document.body, t = ($(e), Flipcat.Orders), r = document.getElementsByTagName("main")[0].offsetHeight,
            i = 0;
        if (r || (r = document.body.clientHeight - FlipcatWebAppLibrary.getViewport().h), $("footer").height() || (i = 139), window.scrollY >= r - 700 - i) {
            if (Flipcat.ShopCatNavigator.isMobileSliderShow) return;
            t.autoloadProcess || (t.autoloadProcess = 1, setTimeout(function () {
                if (t.currentPage = t.currentPage ? t.currentPage + 1 : +FlipcatWebAppLibrary._GET("page", 1), !(t.previousAutoloadPage && t.previousAutoloadPage >= t.currentPage) && Flipcat.linkListener instanceof Function) try {
                    t.previousAutoloadPage = t.currentPage, Flipcat.linkListener()
                } catch (e) {
                }
            }, 100))
        }
    }, isCmpStrings: function (e, t) {
        return e = this._removeDisallowSymbols(e), t = this._removeDisallowSymbols(t), strtolower(e) == strtolower(t)
    }, _removeDisallowSymbols: function (e) {
        var t, r, i, a, o, n;
        for (t = mb_strtolower(e, "UTF-8"), r = "abcdefghijklmnopqrstuvwxyzабвгдеёжзийклмнопрстуфхцчшщъыьэюя0123456789", i = mb_strlen(e, "UTF-8"), a = "", o = 0; o < i; o++) n = mb_substr(t, o, 1, "UTF-8"), mb_strpos(r, n) !== !1 && (a += mb_substr(e, o, 1, "UTF-8"));
        return a
    }, transliteUrl: function (e) {
        var t, r, i, a, o;
        for (e = str_replace("ё", "e", e), e = str_replace("й", "i", e), e = str_replace("ю", "yu", e), e = str_replace("ь", "", e), e = str_replace("ч", "ch", e), e = str_replace("щ", "sh", e), e = str_replace("ц", "c", e), e = str_replace("у", "u", e), e = str_replace("к", "k", e), e = str_replace("е", "e", e), e = str_replace("н", "n", e), e = str_replace("г", "g", e), e = str_replace("ш", "sh", e), e = str_replace("з", "z", e), e = str_replace("х", "h", e), e = str_replace("ъ", "", e), e = str_replace("ф", "f", e), e = str_replace("ы", "i", e), e = str_replace("в", "v", e), e = str_replace("а", "a", e), e = str_replace("п", "p", e), e = str_replace("р", "r", e), e = str_replace("о", "o", e), e = str_replace("л", "l", e), e = str_replace("д", "d", e), e = str_replace("ж", "j", e), e = str_replace("э", "e", e), e = str_replace("я", "ya", e), e = str_replace("с", "s", e), e = str_replace("м", "m", e), e = str_replace("и", "i", e), e = str_replace("т", "t", e), e = str_replace("б", "b", e), e = str_replace("Ё", "E", e), e = str_replace("Й", "I", e), e = str_replace("Ю", "YU", e), e = str_replace("Ч", "CH", e), e = str_replace("Ь", "", e), e = str_replace("Щ", "SH", e), e = str_replace("Ц", "C", e), e = str_replace("У", "U", e), e = str_replace("К", "K", e), e = str_replace("Е", "E", e), e = str_replace("Н", "N", e), e = str_replace("Г", "G", e), e = str_replace("Ш", "SH", e), e = str_replace("З", "Z", e), e = str_replace("Х", "H", e), e = str_replace("Ъ", "", e), e = str_replace("Ф", "F", e), e = str_replace("Ы", "I", e), e = str_replace("В", "V", e), e = str_replace("А", "A", e), e = str_replace("П", "P", e), e = str_replace("Р", "R", e), e = str_replace("О", "O", e), e = str_replace("Л", "L", e), e = str_replace("Д", "D", e), e = str_replace("Ж", "J", e), e = str_replace("Э", "E", e), e = str_replace("Я", "YA", e), e = str_replace("С", "S", e), e = str_replace("М", "M", e), e = str_replace("И", "I", e), e = str_replace("Т", "T", e), e = str_replace("Б", "B", e), e = str_replace(" ", "_", e), e = str_replace('"', "", e), e = str_replace(".", "", e), e = str_replace(",", "", e), e = str_replace("'", "", e), e = str_replace(",", "", e), e = str_replace("\\", "", e), e = str_replace("?", "", e), e = str_replace("/", "_", e), e = str_replace("&", "and", e), t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_", e = strtolower(e), r = strlen(e), i = "", a = 0; a < r; a++) o = e.charAt(a), ~t.indexOf(o) && (i += o);
        return i
    }, processTemplateLinks: function (e, t) {
        return e.find("a").each(function (e, r) {
            r.hasAttribute("data-href") && r.hasAttribute("href") && "#" == r.getAttribute("href") && (r.setAttribute("href", r.getAttribute("data-href")), r.setAttribute("class", t))
        }), e
    }, formatDate: function (e, t, r, i) {
        var a, o, n, s, c, l;
        return t = "undefined" != String(t) && t, r = "undefined" != String(r) && r, i = "undefined" == String(i) || i, a = explode(" ", e), o = n = isset(a, "0") ? a[0] : null, s = isset(a, "1") ? a[1] : null, n = explode("-", n), r && (n[0] = mb_substr(trim(n[0]), 2, 2)), n = join(".", array_reverse(n)), s = explode(":", s), s.splice(2, 1), e = n, c = "Y-m-d H:i:s", l = explode(" ", date(c)), l = l[0], o == l && i && (e = trans("messages.today")), t || (e += "<span>", e += " " + trans("messages.time_at") + " " + join(":", s), e += "</span>"), e
    }, restreq: function (e, t, r, i, a) {
        switch ($("#preloader").show(), $("#preloader").width(screen.width), $("#preloader").height(screen.height), $("#preloader div").css("margin-top", Math.round((screen.height - 350) / 2) + "px"), i || (i = window.location.href), i = this.setGetVar(i, "csrfisold", "CMD_UNSET"), a || (a = function () {
            Flipcat.Messages.fail(__("messages.Default_fail"))
        }), e) {
            case"put":
            case"patch":
            case"delete":
        }
        $.ajax({method: e, data: t, url: i, dataType: "json", success: r, error: a})
    }, _get: function (e, t, r) {
        FlipcatWebAppLibrary.restreq("get", {}, e, t, r)
    }, formatNumber: function (e) {
        var t, r, i, a, o;
        if (e = intval(e), e < 9999) return strval(e);
        for (t = strval(e), r = [], i = 0; i < strlen(t); i++) r.push(t[i]);
        for (r = array_reverse(r), a = [], o = [], i = 0; i < count(r); i++) a.push(r[i]), o.push(1), count(o) > 2 && (a.push(" "), o = []);
        return r = array_reverse(a), join("", r)
    }, removeEmptyItems: function (e) {
        if (!(e instanceof Array)) return e;
        var t, r, i = [];
        for (t = 0; t < e.length; t++) r = e[t], r && i.push(r);
        return i
    }, fixSelectedSelect: function () {
        var e, t, r, i, a = $("select");
        for (e = 0; e < a.length; e++) if (t = a[e], t.options) for (r = 0; r < t.options.length; r++) if (i = t.options[r], i.hasAttribute("selected")) {
            i.value ? this.selectByValue(t, i.value) : this.selectByText(t, i.text);
            break
        }
    }, redirectFromRecoveryLinkPage: function () {
        "/recoverylink" == this.REQUEST_URI(1) && setTimeout(function () {
            window.location.href = "/"
        }, 5e3)
    }, capitalize: function (e) {
        if (!e) return e;
        var t = e.charAt(0), r = t.toUpperCase();
        return e.replace(t, r)
    }, setEllipsis: function (e) {
        var t, r, i, a, o, n = $(e), s = "max-height", c = "overflow";
        for (t = 0; t < n.length; t++) {
            if (r = $(n[t]), i || (i = parseInt(r.css(s))), i) for (o = r.text(), r.css(s, "none"), r.css(c, "auto"), a = r[0].offsetHeight; a > i && (o = o.replace(/\.\.\.$/m, ""), o = o.substring(0, o.length - 2) + "...", o.trim());) r.text(o), a = r[0].offsetHeight;
            r.css("opacity", 1), r.css(s, i + "px").css(c, "hidden")
        }
    }, processTemplateImg: function (e) {
        var t, r, i, a;
        for (i = e.find("input[data-tag=img]"), a = 0; a < i.length; a++) t = $(i[a]), r = '<img src="' + t.attr("src") + '" class="' + t.attr("class") + '">', r = $(r), t.attr("data-onerror") && r.attr("onerror", t.attr("data-onerror")), t.attr("data-onload") && r.attr("onload", t.attr("data-onload")), t.attr("data-alt") && r.attr("alt", t.attr("data-alt")), t.after(r);
        return e
    }, getToken: function () {
        var e, t, r = document.getElementsByTagName("meta");
        for (e = 0; e < r.length; e++) if ("app" == $(r[e]).attr("name")) {
            t = $(r[e]).attr("content");
            break
        }
        return t
    }, preInit: function () {
        this.initCardPaymentSystem()
    }, postInit: function () {
        if ($("#csrfIsOld")[0] && parseInt($("#csrfIsOld").val(), 10)) {
            var e = __("csrf_default_error");
            Flipcat.Messages.fail(e)
        }
    }, initCardPaymentSystem: function () {
        var e = Flipcat;
        e.oCardPaymentDOMLib = new CardPaymentDOMLibModern, e.PAYMENT_PROVIDER && "" != e.PAYMENT_PROVIDER.trim() || (e.PAYMENT_PROVIDER = "rfi"), "rfi" == e.PAYMENT_PROVIDER && window.Rfi18 && (e.oRfi18 = new Rfi18), "paybox" == e.PAYMENT_PROVIDER && window.Paybox && (e.oRfi18 = new Paybox)
    }
}, $_POST = {}, $_GET = {}, $_SERVER = {}, $_SESSION = {}, Request.prototype.input = function (e, t) {
    return FlipcatWebAppLibrary._GET(e, t)
}, Flipcat = Flipcat || {}, Flipcat.MapHelper = {
    citiesSign: ["село", "поселок", "посёлок", "город", "хутор", "деревня", "мегаполис", "станция", "станица", "поселение", "пос.", "поселок городского типа", "посёлок городского типа", "поселок ского типа", "посёлок ского типа", "пок ского типа"],
    streets: ["ул.", "пл.", "пер.", "проспект", "пр.", "улица", "п.", "переулок", "пр-д", "проезд", "ш.", "шоссе", "бульвар", "б-р", "наб.", "набережная", "тупик", "туп.", "парк", "сквер", "сад"],
    countries: ["Абхазия", "Австралия", "Австрия", "Азербайджан", "Албания", "Алжир", "Ангола", "Андорра", "Антигуа и Барбуда", "Аргентина", "Армения", "Афганистан", "Багамские Острова", "Бангладеш", "Барбадос", "Бахрейн", "Белиз", "Белоруссия", "Беларусь", "Бельгия", "Бенин", "Болгария", "Боливия", "Босния и Герцеговина", "Ботсвана", "Бразилия", "Бруней", "Буркина-Фасо", "Бурунди", "Бутан", "Вануату", "Ватикан", "Великобритания", "Венгрия", "Венесуэла", "Восточный Тимор", "Вьетнам", "Габон", "Гаити", "Гайана", "Гамбия", "Гана", "Гватемала", "Гвинея", "Гвинея-Бисау", "Германия", "Гондурас", "Государство Палестина", "Гренада", "Греция", "Грузия", "Дания", "Джибути", "Доминика", "Доминиканская Республика", "ДР Конго", "Египет", "Замбия", "Зимбабве", "Израиль", "Индия", "Индонезия", "Иордания", "Ирак", "Иран", "Ирландия", "Исландия", "Испания", "Италия", "Йемен", "Кабо-Верде", "Казахстан", "Камбоджа", "Камерун", "Канада", "Катар", "Кения", "Кипр", "Киргизия", "Кирибати", "Китай", "КНДР", "Колумбия", "Коморские Острова", "Коста-Рика", "Кот-дИвуар", "Куба", "Кувейт", "Лаос", "Латвия", "Лесото", "Либерия", "Ливан", "Ливия", "Литва", "Лихтенштейн", "Люксембург", "Маврикий", "Мавритания", "Мадагаскар", "Македония", "Малави", "Малайзия", "Мали", "Мальдивские Острова", "Мальта", "Марокко", "Маршалловы Острова", "Мексика", "Мозамбик", "Молдавия", "Монако", "Монголия", "Мьянма", "Намибия", "Науру", "Непал", "Нигер", "Нигерия", "Нидерланды", "Никарагуа", "Новая Зеландия", "Норвегия", "ОАЭ", "Оман", "Пакистан", "Палау", "Панама", "Папуа - Новая Гвинея", "Парагвай", "Перу", "Польша", "Португалия", "Россия", "Республика Конго", "Республика Корея", "Руанда", "Румыния", "Сальвадор", "Самоа", "Сан-Марино", "Сан-Томе и Принсипи", "Саудовская Аравия", "Свазиленд", "Сейшельские Острова", "Сенегал", "Сент-Винсент и Гренадины", "Сент-Китс и Невис", "Сент-Люсия", "Сербия", "Сингапур", "Сирия", "Словакия", "Словения", "Соломоновы Острова", "Сомали", "Судан", "Суринам", "США", "Сьерра-Леоне", "Таджикистан", "Таиланд", "Танзания", "Того", "Тонга", "Тринидад и Тобаго", "Тувалу", "Тунис", "Туркмения", "Турция", "Уганда", "Узбекистан", "Украина", "Уругвай", "Федеративные Штаты Микронезии", "Фиджи", "Филиппины", "Финляндия", "Франция", "Хорватия", "ЦАР", "Чад", "Черногория", "Чехия", "Чили", "Швейцария", "Швеция", "Шри-Ланка", "Эквадор", "Экваториальная Гвинея", "Эритрея", "Эстония", "Эфиопия", "ЮАР", "Южная Осетия", "Южный Судан", "Ямайка", "Япония"],
    isCityPresent: function (e) {
        var t, r, i = Flipcat.MapHelper.getDialogAdapter(), a = e;
        if (t = i.getCitiesFromSelect(), 0 == count(t)) return a = i.getCityNameFromForm(), 1 == FlipcatWebAppLibrary.isCmpStrings(e, a);
        for (r in t) if (1 == FlipcatWebAppLibrary.isCmpStrings(t[r], a)) return !0;
        return !1
    },
    getDialogAdapter: function () {
        return Flipcat.YandexMapDialogAdapter
    },
    getModalDialog: function () {
        return window.YandexAddressDialog
    }
}, window.Flipcat = window.Flipcat || {};
var CoreWebClientAuth = {
    HTML_REG_FORM_ID: "#regForm",
    HTML_REG_PASSWORD_INPUT_ID: "#password",
    HTML_REG_PASSWORD_C_INPUT_ID: "#passwordRepeat",
    HTML_REG_EMAIL_INPUT_ID: "#email",
    HTML_REG_AGREEMENT_INPUT_ID: "#agreementCb",
    HTML_REG_MODAL_ID: "#regModal",
    HTML_REGISTER_POPUP_LINK_ID: "#fromRegisterFormEntry",
    HTML_LOGIN_FORM_ID: "#loginForm",
    HTML_LOGIN_PASSWORD_INPUT_ID: "#lpassword",
    HTML_LOGIN_EMAIL_INPUT_ID: "#login",
    HTML_LOGIN_MODAL_ID: "#loginModal",
    HTML_CHANGE_PASS_BLOCK_ID: "#change_password_block",
    HTML_CHANGE_PASS_FORM_ID: "#change_password",
    HTML_CHANGE_PASS_CURR_PASS_INPUT_ID: "#current_password",
    HTML_CHANGE_PASS_NEW_PASS_INPUT_ID: "#new_password",
    HTML_CHANGE_PASS_NEW_PASS_REP_INPUT_ID: "#new_password_repeat",
    HTML_CHANGE_PASS_FAIL_ALERT_ID: ".alert-danger",
    HTML_CHANGE_PASS_SUCCESS_ALERT_ID: ".alert-success",
    HTML_RECOVERY_FORM_ID: "#recoveryForm",
    HTML_RECOVERY_EMAIL_INPUT_ID: "#recoveremail",
    HTML_RECOVERY_MODAL_ID: "#pwdRecModal",
    HTML_SHOW_POPUP_BTN_ID: "#navbarEnterLink",
    HTML_SIGNUP_BTN_ID: "#navbarRegLink",
    HTML_LOGOUT_BTN_ID: "#navbarLogoutLink",
    HTML_LOGOUT_MOBILE_BTN_ID: "#mLogout",
    HTML_HISTORY_BTN_ID: "#historyLink",
    HTML_PERSON_INFO_BLOCK_ID: "#navbarPerson",
    HTML_PROFILE_BTN_ID: "#profileLink",
    HTML_CURRENT_BALLS_VIEW_ID: "#points",
    init: function (e) {
        var t = this;
        t.lib = e, t.setListeners(), t.fbToken(), t.vkToken(), t.mruToken(), t.checkReviewLogin(), t.redirectFromComfirmPage(), t.checkAutoFill()
    },
    checkAutoFill: function () {
        $('[data-target="#loginModal"], [data-target="#regModal"]').click(function () {
            setTimeout(function () {
                $(".value-check").each(function () {

                    this.value && this.classList.add("value-exists")
                })
            }, 500)
        })
    },
    setListeners: function () {
        var e = this;
        $(e.HTML_REG_FORM_ID).bind("submit", e.onRegFormSubmit), $(e.HTML_LOGIN_FORM_ID).bind("submit", e.onLoginFormSubmit), $(e.HTML_RECOVERY_FORM_ID).bind("submit", e.onRecoveryFormSubmit), $(e.HTML_CHANGE_PASS_FORM_ID).bind("submit", e.onChangePassFormSubmit), $(e.HTML_LOGOUT_BTN_ID).click(e.onLogout), $(e.HTML_LOGOUT_MOBILE_BTN_ID).click(e.onLogout), $(e.HTML_REGISTER_POPUP_LINK_ID).click(function (t) {
            "none" == $(e.HTML_LOGIN_MODAL_ID).css("display") && $(e.HTML_LOGIN_MODAL_ID).modal("show")
        }), $(e.HTML_SHOW_POPUP_BTN_ID).click(function (e) {
            $.cookie("ar", window.location.href, {path: "/"})
        })
    },
    onRegFormSubmit: function (e) {
        e.preventDefault();
        var t, r = Flipcat.CoreWebClientAuth, i = {};
        return t = r.lib.validateRequired(r.HTML_REG_FORM_ID) && r.lib.validateEmail(r.HTML_REG_FORM_ID) && r.checkPasswords(),
        t && (i.password = $(r.HTML_REG_PASSWORD_INPUT_ID).val(), i.passwordRepeat = $(r.HTML_REG_PASSWORD_C_INPUT_ID).val(), i.email = $(r.HTML_REG_EMAIL_INPUT_ID).val(), i.agreementCb = $(r.HTML_REG_AGREEMENT_INPUT_ID).prop("checked"), r.lib._post(i, r.onRegSuccess, "/signup", r.onRegFail)), !1
    },
    onLoginFormSubmit: function (e) {
        e.preventDefault();
        var t, r = Flipcat.CoreWebClientAuth;

        // console.log($(r.HTML_LOGIN_PASSWORD_INPUT_ID).val());

        return t = r.lib.validateRequired(r.HTML_LOGIN_FORM_ID) && r.lib.validateEmail(r.HTML_LOGIN_FORM_ID),
        t && r._sendLoginData($(r.HTML_LOGIN_EMAIL_INPUT_ID).val(), $(r.HTML_LOGIN_PASSWORD_INPUT_ID).val(), r), !1

    },
    onRecoveryFormSubmit: function (e) {
        e.preventDefault();
        var t, r = Flipcat.CoreWebClientAuth, i = {};
        return t = r.lib.validateRequired(r.HTML_RECOVERY_FORM_ID) && r.lib.validateEmail(r.HTML_RECOVERY_FORM_ID), t && (i.email = $(r.HTML_RECOVERY_EMAIL_INPUT_ID).val(), r.lib._post(i, r.onRecoverySuccess, "/recovery", r.onRecoveryFail)), !1
    },
    onChangePassFormSubmit: function () {
        var e, t = Flipcat.CoreWebClientAuth, r = {};
        return $(t.HTML_CHANGE_PASS_BLOCK_ID).find(t.HTML_CHANGE_PASS_FAIL_ALERT_ID).addClass("hide"), $(t.HTML_CHANGE_PASS_BLOCK_ID).find(t.HTML_CHANGE_PASS_SUCCESS_ALERT_ID).addClass("hide"), e = t.lib.validateRequired(t.HTML_CHANGE_PASS_FORM_ID), e && (r.currentPassword = $(t.HTML_CHANGE_PASS_CURR_PASS_INPUT_ID).val(), r.newPassword = $(t.HTML_CHANGE_PASS_NEW_PASS_INPUT_ID).val(), r.passwordRepeat = $(t.HTML_CHANGE_PASS_NEW_PASS_REP_INPUT_ID).val(), t.lib._post(r, t.onChangePassSuccess, "/changePassword", t.onChangePassFail)), !1
    },
    checkPasswords: function () {
        var e = this, t = $(e.HTML_REG_PASSWORD_INPUT_ID).val() === $(e.HTML_REG_PASSWORD_C_INPUT_ID).val();
        return t || e.lib.setFormErrorByPlaceholder(e.HTML_REG_PASSWORD_C_INPUT_ID, __("messages.Passwords_is_different")), t
    },
    onRegSuccess: function (e) {
        var t, r = Flipcat.CoreWebClientAuth;
        if (e.error) if (e.error instanceof Object) for (t in e.error) $("#" + t)[0] && r.lib.setFormErrorByPlaceholder("#" + t, e.error[t]); else r.lib.messageFail(e.error); else $(r.HTML_REG_MODAL_ID).modal("hide"), Flipcat.AuthMarker.forceStoreMarker(), r._sendLoginData($(r.HTML_REG_EMAIL_INPUT_ID).val(), $(r.HTML_REG_PASSWORD_INPUT_ID).val(), r)
    },
    onRegFail: function (e) {
        e && e.responseJSON && e.responseJSON.error ? CoreWebClientAuth.onRegSuccess(e.responseJSON) : CoreWebClientAuth.lib.messageFail(__("messages.Unable_register_user_try_later"))
    },
    onLoginSuccess: function (e) {
        var t, r = CoreWebClientAuth, i = Flipcat.WebClientAuth;
        if (e.error) if (e.error instanceof Object) for (t in e.error) $("#" + t)[0] && r.lib.setFormErrorByPlaceholder("#" + t, e.error[t]); else r.lib.messageFail(e.error); else i.showUserNavbar(e), Flipcat.AuthMarker.forceStoreMarker(), Flipcat.Desktop.isMobile() && (window.location.href = window.location.href)
    },
    onLoginFail: function (e) {
        e && e.responseJSON && e.responseJSON.error ? CoreWebClientAuth.onLoginSuccess(e.responseJSON) : CoreWebClientAuth.lib.messageFail(__("messages.Unable_login_try_later"))
    },
    onChangePassSuccess: function (e) {
        var t, r = CoreWebClientAuth;
        if (e.error) if (e.error instanceof Object) {
            $(r.HTML_CHANGE_PASS_BLOCK_ID).find(r.HTML_CHANGE_PASS_FAIL_ALERT_ID).removeClass("hide");
            for (t in e.error) $(r.HTML_CHANGE_PASS_BLOCK_ID).find(r.HTML_CHANGE_PASS_FAIL_ALERT_ID).find("p").text(e.error[t]), $("#" + t)[0] && r.lib.setFormErrorByPlaceholder("#" + t, e.error[t])
        } else r.lib.messageFail(e.error); else $(r.HTML_CHANGE_PASS_BLOCK_ID).find(r.HTML_CHANGE_PASS_SUCCESS_ALERT_ID).removeClass("hide"), $(r.HTML_LOGIN_MODAL_ID).modal("hide"), Flipcat.AuthMarker.forceStoreMarker(), $(r.HTML_SHOW_POPUP_BTN_ID).addClass("hide"), $(r.HTML_LOGOUT_BTN_ID).addClass("show"), $(r.HTML_HISTORY_BTN_ID).addClass("show"), $(r.HTML_PERSON_INFO_BLOCK_ID).text(e.name)
    },
    onChangePassFail: function (e) {
        e && e.responseJSON && e.responseJSON.error ? CoreWebClientAuth.onChangePassSuccess(e.responseJSON) : CoreWebClientAuth.lib.messageFail(__("messages.Unable_change_password_user_try_later"))
    },
    onRecoverySuccess: function (e) {
        var t, r = CoreWebClientAuth;
        if (e.error) if (e.error instanceof Object) for (t in e.error) $("#" + t)[0] && r.lib.setFormErrorByPlaceholder("#" + t, e.error[t]); else r.lib.messageFail(e.error); else $(r.HTML_RECOVERY_MODAL_ID).modal("hide"), r.lib.messageSuccess(e.msg)
    },
    onRecoveryFail: function (e) {
        e && e.responseJSON && e.responseJSON.error ? CoreWebClientAuth.onRecoverySuccess(e.responseJSON) : CoreWebClientAuth.lib.messageFail(__("messages.Unable_login_try_later"))
    },
    onLogout: function () {
        return setTimeout(function () {
            window.location.href = "/logout"
        }, 1e3), !1
    },
    fbToken: function () {
        var e, t = this, r = FlipcatWebAppLibrary;
        "/fbl" == r.REQUEST_URI(1) && (e = window.location.hash.replace("#", "?"), e = r._GET("access_token", 0, e), e && t.lib._post({token: e}, t.onSendFbToken, "/fbl.json", t.onFailSendFbToken))
    },
    onSendFbToken: function (e) {
        var t = Flipcat.CoreWebClientAuth;
        if (e.error) t.lib.messageFail(e.error), "showFbLoginForm" == e.info && $(t.HTML_LOGIN_MODAL_ID).modal("show"); else {
            var r, i = !0;
            if (e.reviewsWarning && Flipcat.Reviews.lastTryReviewId && e.reviewsAuthType && (r = Flipcat.Reviews.createRewiewsWarningMessage(t.getSocnetName(e.reviewsAuthType), e.reviewsAuthType), r && (i = !1, t.lib.messageFail(r))), i) {
                Flipcat.AuthMarker.forceStoreMarker();
                var a = $.cookie("ar") ? $.cookie("ar") : "/";
                setTimeout(function () {
                    window.location.href = a
                }, 1e3)
            }
        }
    },
    getSocnetName: function (e) {
        switch (e) {
            case"fb":
                return "Facebook";
            case"vk":
                return "Vkontakte";
            case"mru":
                return "Mail.Ru"
        }
        return ""
    },
    onFailSendFbToken: function () {
        Flipcat.CoreWebClientAuth.lib.defaultFail()
    },
    vkToken: function () {
        var e = FlipcatWebAppLibrary;
        if ("/vkl.json" == e.REQUEST_URI(1) && vkLoginSuccess) {
            Flipcat.AuthMarker.forceStoreMarker();
            var t = $.cookie("ar") ? $.cookie("ar") : "/";
            setTimeout(function () {
                window.location.href = t
            }, 1e3)
        }
    },
    mruToken: function () {
        var e = FlipcatWebAppLibrary;
        if ("/mrl.json" == e.REQUEST_URI(1) && mruLoginSuccess) {
            Flipcat.AuthMarker.forceStoreMarker();
            var t = $.cookie("ar") ? $.cookie("ar") : "/";
            setTimeout(function () {
                window.location.href = t
            }, 1e3)
        }
    },
    _sendLoginData: function (e, t, r) {
        var i = {};
        i.password = t, i.email = e, r.lib._post(i, r.onLoginSuccess, "/signin", r.onLoginFail)
    },
    checkReviewLogin: function () {
        var e = FlipcatWebAppLibrary;
        window.Flipcat.showLoginFormReview && ($.cookie("ar", "/all_history", {path: "/"}), $("#loginModal").modal("show"), e.storage("reviewOrderId", e._GET("id")))
    },
    redirectFromComfirmPage: function () {
        0 === FlipcatWebAppLibrary.REQUEST_URI().indexOf("/restore/client/confirm/") && setTimeout(function () {
            location.href = "/"
        }, 5e3)
    }
};
window.Flipcat.CoreWebClientAuth = CoreWebClientAuth, window.Flipcat = window.Flipcat || {}, window.Flipcat.AuthMarker = {
    STORAGE_MARKER_KEY: "STORAGE_MARKER_KEY", expires: 730, COOKIE_NAME: "am", init: function (e, t) {
        this.lib = e, this.registredClasses = t;
        var r = this.am = this.COOKIE_NAME;
        if ($.cookie(r)) {
            if ($.cookie(r) && localStorage && localStorage.getItem) {
                var i = localStorage.getItem(this.STORAGE_MARKER_KEY);
                i || localStorage.setItem(this.STORAGE_MARKER_KEY, $.cookie(r))
            }
        } else if (localStorage && localStorage.getItem) {
            var i = localStorage.getItem(this.STORAGE_MARKER_KEY);
            i && ($.cookie(r, i, {
                expires: this.expires,
                path: "/"
            }), e._post({}, this.onSuccess, "/c/setmarker", this.onFail))
        }
    }, onSuccess: function (e) {
        var t = window.Flipcat.AuthMarker;
        if (e && e.registredData) {
            var r, i, a = t.registredClasses, o = e.registredData;
            for (r = 0; r < o.length; r++) i = o[r].className, o[r].data ? a[i] && a[i].onSuccess instanceof Function && a[i].onSuccess(o[r].data) : o[r].errorInfo && a[i] && a[i].onError instanceof Function && a[i].onError(o[r].errorInfo, o[r].sourceData)
        }
    }, getFromRegistredData: function (e, t) {
        var r;
        if (e && e.registredData && e.registredData instanceof Array) for (r = 0; r < e.registredData.length; r++) if (e.registredData[r].className == t) return e.registredData[r].data;
        return null
    }, storeMarker: function () {
        var e = Flipcat.AuthMarker;
        if (localStorage) {
            var t, r = e.STORAGE_MARKER_KEY, i = $.cookie(e.COOKIE_NAME);
            !localStorage.getItem(r) && i ? localStorage.setItem(r, $.cookie(e.COOKIE_NAME)) : localStorage.getItem(r) && (t = localStorage.getItem(r), $.cookie(e.COOKIE_NAME, t, {
                expires: e.expires,
                path: "/"
            }))
        }
    }, forceStoreMarker: function () {
        if (localStorage) {
            var e = this.STORAGE_MARKER_KEY, t = $.cookie(this.COOKIE_NAME);
            t && localStorage.setItem(e, $.cookie(this.COOKIE_NAME))
        }
    }, restoreMarker: function () {
        if (localStorage) {
            var e, t = this.STORAGE_MARKER_KEY, r = $.cookie(this.COOKIE_NAME);
            localStorage.getItem(t) && !r && (e = localStorage.getItem(t), $.cookie(this.COOKIE_NAME, e, {
                expires: this.expires,
                path: "/"
            }))
        }
    }, dropMarker: function () {
        if (localStorage) {
            var e = this.STORAGE_MARKER_KEY;
            localStorage.getItem(e) && (localStorage.removeItem(e), $.removeCookie(this.COOKIE_NAME))
        }
    }, getMarker: function () {
        var e = Flipcat.AuthMarker, t = $.cookie(e.COOKIE_NAME);
        return t = t ? t : localStorage.getItem(e.STORAGE_MARKER_KEY)
    }
}, window.Flipcat = window.Flipcat || {}, window.Flipcat.ShopCatNavigator = window.Flipcat.ShopCatNavigator || {}, Flipcat.ShopCatNavigator.setSortLink = function () {
    var e = Flipcat.ShopCatNavigator, t = FlipcatWebAppLibrary, r = e.getSortByNameLink(), i = e.getSortByPriceLink(),
        a = t.REQUEST_URI(), o = r.split("?")[1], n = i.split("?")[1], s = t._GET("id", "null");
    o && n && (a = a.split("?")[0] + "?" + o, a = t.setGetVar(a, "id", s), e.setSortByNameLink(a), a = a.split("?")[0] + "?" + n, a = t.setGetVar(a, "id", s), e.setSortByPriceLink(a))
}, Flipcat.ShopCatNavigator.setSortLinkInAjaxUrl = function (e) {
    var t, e, r, i = FlipcatWebAppLibrary;
    Flipcat.ShopCatNavigator;
    return t = e.split("?"), e = t[1] ? "?" + t[1] : "", r = i._GET("orderby", 0), r ? e = i.setGetVar(e, "orderby", r) : "", r = i._GET("limit", 0), r ? e = i.setGetVar(e, "limit", r) : "", r = i._GET("desc", 0), r ? e = i.setGetVar(e, "desc", r) : "", e
}, Flipcat.ShopCatNavigator.setSortParamsOnAutoload = function (e) {
    var t, r, i, a = FlipcatWebAppLibrary, o = Flipcat.ShopCatNavigator;
    return i = o.setSortLinkInAjaxUrl(e), r = a._GET("page", 0, e), r ? i = a.setGetVar(i, "page", r) : "", t = e.split("?"), t[0] + i
}, Flipcat.ShopCatNavigator.getUrl = function (e, t, r) {
    var i = this;
    return i.isAppendRequest || FlipcatWebAppLibrary.lock(i.HTML_PRODUCTS_CONTAINER_ID), i.requestSended = !0, i.lastRequest = t, i.categoriesProducts[t] ? void setTimeout(function () {
        e(i.categoriesProducts[t])
    }, 10) : void i._get(e, t, r)
}, Flipcat.ShopCatNavigator.renderSeoIntro = function (e) {
    var t = this.getSeoIntroHtmlEl();
    (t.block || t.place) && (e.trim() ? (t.place.removeClass("hide"), t.block.html(e)) : (t.place.addClass("hide"), t.block.html("")))
};
var _createClass = function () {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var i = t[r];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    return function (t, r, i) {
        return r && e(t.prototype, r), i && e(t, i), t
    }
}(), ShopsFilter = function () {
    function e(t, r, i) {
        _classCallCheck(this, e), this.request = t, this.items = r, this.sourceOrder = [], this.perPage = this.request.input("limit", i), this.filters = [], this._initFilterProps()
    }

    return _createClass(e, [{
        key: "filter", value: function () {
            this.sort();
            var e, t, r = this.request.input("cuisine", []), i = [], a = void 0, o = count(this.items), n = 0,
                s = void 0, c = void 0, l = this.request.input("f", []), _ = [];
            if (i = [], count(r) > 0) for (this._totalAfterFilter = 0, a = 0; a < o; a++) count(array_intersect(r, this.items[a].array_snippet)) > 0 && (i[n] = this.items[a], n++, this._totalAfterFilter++); else i = this.items, this._totalAfterFilter = count(i);
            if (count(l) > 0) {
                for (this._totalAfterFilter = 0, o = count(i), n = 0, e = in_array("ballsOnly", l), t = in_array("workNow", l), a = 0; a < o; a++) (e && 1 == i[a].loyalty_shop_items || !e) && (t && this._isWorkNow(i[a]) || !t) && (_[n] = i[a], n++, this._totalAfterFilter++);
                i = _
            }
            return c = this.request.input("page", 1), s = array_chunk(i, this.perPage), i = isset(s[c - 1]) ? s[c - 1] : []
        }
    }, {
        key: "sort", value: function () {
            var e, t, r, i, a, o, n = !1;
            switch (Flipcat.ShopList.sortCriteria) {
                case Flipcat.ShopList.SORT_BY_MIN_ORDER:
                    r = "minorder";
                    break;
                case Flipcat.ShopList.SORT_BY_PRICE_DELIVERY:
                    r = "deliverycost";
                    break;
                case Flipcat.ShopList.SORT_BY_DISTANCE:
                    r = "distance";
                    break;
                case Flipcat.ShopList.SORT_BY_TIME_DELIVERY:
                    r = "time";
                    break;
                case Flipcat.ShopList.SORT_BY_POPULAR:
                    r = "", n = !0
            }
            for (e = 0; e < this.items.length; e++) for (t = 0; t < this.items.length; t++) !n && r ? (a = this.prepareCost(this.getParamByKey(this.items[e], r)), a = isNaN(a) ? Number.MAX_VALUE : a, o = this.prepareCost(this.getParamByKey(this.items[t], r)), o = isNaN(o) ? Number.MAX_VALUE : o, a < o && (i = this.items[e], this.items[e] = this.items[t], this.items[t] = i)) : (a = this.items[e].sourceI, a = isNaN(a) ? 0 : a, o = this.items[t].sourceI, o = isNaN(o) ? 0 : o, a < o && (i = this.items[e], this.items[e] = this.items[t], this.items[t] = i))
        }
    }, {
        key: "getTotal", value: function () {
            return isset(this._totalAfterFilter) ? this._totalAfterFilter : count(this.items)
        }
    }, {
        key: "prepareCost", value: function (e) {
            e = String(e);
            var t, r, i = e.split(/\s+/), a = i.length;
            for (t = 0; t < a; t++) if (r = $.trim(i[t]), r && (r = parseFloat(r.replace(/,/g, ".").replace(/[^0-9.,]/, "")), !isNaN(r))) return r;
            return parseInt("NaN")
        }
    }, {
        key: "getParamByKey", value: function (e, t) {
            var r, i, a, o = e.params, n = o && o.length ? o.length : 0;
            for (r = 0; r < n; r++) if (o[r].title == t) return a = String(o[r].value).replace(/,/gi, "."), i = parseFloat(a), String(i) === a && (o[r].value = i), "kilometers" == o[r].unit ? 1e3 * o[r].value : o[r].value;
            return ""
        }
    }, {
        key: "_initFilterProps", value: function () {
            var e = count(this.items), t = {}, r = [], i = void 0, a = void 0, o = void 0, n = 0, s = void 0,
                c = void 0, l = void 0;
            for (i = 0; i < e; i++) if (this.items[i].sourceI || (this.items[i].sourceI = i + 1), isset(this.items[i].snippet)) {
                for (c = explode(",", this.items[i].snippet), o = count(c), a = 0; a < o; a++) l = trim(c[a]), s = this._hash(l), isset(t[s]) || (t[s] = 1, r[n] = l, n++);
                this.items[i].array_snippet = array_map(function (e) {
                    return trim(e)
                }, explode(",", this.items[i].snippet))
            } else this.items[i].array_snippet = [];
            this.filters = r
        }
    }, {
        key: "_hash", value: function (e) {
            var t = void 0, r = "";
            for (t = 0; t < e.length; t++) r += e.charCodeAt(t);
            return r
        }
    }, {}, {
        key: "_isWorkNow", value: function (e) {
            var t, r;
            return e = __php2js_clone_argument__(e), t = new WorktimeHelper, !isset(e, "work_times") || 0 == count(e.work_times) || (r = time(), t.isCompanyWorkNow(r, e.work_times, e.timezone))
        }
    }, {
        key: "getFilters", value: function () {
            return this.filters
        }
    }]), e
}();
window.Flipcat = window.Flipcat || {};
var Orders = {
    HTML_ORDERS_CONTAINER_ID: "#orders",
    HTML_MOBILE_ORDERS_CONTAINER_ID: "#mOrders",
    HTML_PRODUCT_ITEM_ID: "#orderShopItem",
    HTML_ORDERS_DATA_ID: "#ordersData",
    HTML_CURRENCIES_DATA_ID: "#currenciesData",
    HTML_PAGINATION_CONTAINER_ID: "#shopPaging",
    HTML_PERPAGE_INPUT_ID: "#ordersPerPage",
    HTML_PRODUCTS_CONTAINER_CSS: ".order-shop-item",
    HTML_ITEM_PRICE_A_CSS: " .item-price a",
    HTML_ITEM_CART_NO_EXISTS_CSS: ".cart-noexists",
    HTML_ITEM_CART_ADD_CSS: ".cart-add",
    HTML_ORDER_REPEAT_CSS: ".btn-order-repeat",
    HTML_ORDER_CONTAINER_CSS: ".order-shop-item-container",
    HTML_ORDER_CHANGES_MESSAGE_MODAL_ID: "#orderIsChangeModal",
    HTML_ORDER_CHANGES_MESSAGE_MODAL_BUTTONS_CSS: ".order-change",
    HTML_ORDER_SHOW_EXT_INFO_CSS: ".show-order-ext-info",
    HTML_ORDER_EXT_INFO_CONTENT_CSS: ".order-extend-info",
    HTML_ORDER_EXT_INFO_MODAL_ID: "#modalOrderInfo",
    HTML_ORDER_EXT_BLOCK_IN_MODAL: "#orderInfoContent",
    STORAGE_ORDERS_KEY: "SO_K",
    STORAGE_LAST_RELOAD: "SO_LRK",
    HTML_MESSAGE_CSS: ".orders-message",
    HTML_ORDER_LIST_HEADING_ID: "#historyDesktopHeading",
    autoloadProcess: 0,
    currentPage: 1,
    HTML_BTN_INFO_CSS: ".j-btn-more",
    HTML_BTN_INFO_MOB_CSS: ".j-btn-more-mob",
    aLoadOneItemMap: {},
    init: function (e) {
        var t = "company_new_hfu", r = FlipcatWebAppLibrary;
        r.storage(t) || (window.localStorage.removeItem(this.getHistoryKey()), r.storage(t, 1)), this.shopCurrency = {}, this.lib = e, this.setListeners(), Flipcat.oRfi18 && Flipcat.oRfi18.checkPaymentStatus()
    },
    setListeners: function () {
        var e, t = this, r = $(t.HTML_ORDERS_DATA_ID).val(), i = t.lib;
        try {
            r = JSON.parse(r), r && r.orders && (r = r.orders), this.currencies = JSON.parse($(t.HTML_CURRENCIES_DATA_ID).val()), this.data = r, r instanceof Array && (t.autoloadProcess = 1, Flipcat.linkListener = t.onNeedMoreItems, e = t.getLastOrderIdFromCache(), e ? i._get(t.onLoadNewOrders, "/all_history_news_json?i=" + e, t.onFailLoadNewOrders) : i._get(t.onLoadFirstOrders, "/all_history_json", t.onFailLoadFirstOrders))
        } catch (a) {
        }
        $(t.HTML_ITEM_CART_NO_EXISTS_CSS).click(function () {
            return !1
        })
    },
    onClickInfoButtonDesk: function (e) {
        var t = this, r = parseInt($(e.target).attr("data-sys-id"), 10);
        return t.MODE_LOAD_ITEM_DATA = "Desktop", t.REQUESTED_ONE_ITEM_ID = r, t.loadItemData(r)
    },
    onClickInfoButtonMobile: function (e) {
        var t, r = this, i = parseInt($(e.target).attr("data-id"), 10);
        return r.MODE_LOAD_ITEM_DATA = "Mobile", r.REQUESTED_ONE_ITEM_ID = i, t = r.loadItemData(i), t || Flipcat.OrdersTheme.showAccordionPreloader(i), t
    },
    loadItemData: function (e) {
        var t = this;
        return 1 == t.aLoadOneItemMap[e] || t.requestLoadItemDataSended ? (t.requestLoadItemDataSended = 0, !0) : (t.requestLoadItemDataSended = 1, FlipcatWebAppLibrary._get(function (e) {
            t.onLoadItemData(e)
        }, "/historyitem/" + e, function (e) {
            t.onFailLoadItemData(e)
        }), !1)
    },
    onLoadItemData: function (e) {
        var t = this;
        if (t.requestLoadItemDataSended = 0, t.onFailLoadItemData(e)) {
            try {
                e.order.fields = JSON.parse(e.order.fields)
            } catch (r) {
            }
            t.aLoadOneItemMap[e.order.sys_order_id] = 1, "Mobile" == t.MODE_LOAD_ITEM_DATA ? Flipcat.OrdersTheme.refreshOrderViewMobile(e.order) : Flipcat.OrdersTheme.refreshOrderViewDesktop(e.order), t.resetOrderInfoInCache(e.order)
        }
    },
    resetOrderInfoInCache: function (e) {
        var t, r = Flipcat.Orders, i = r.data;
        for (i = i.orders ? i.orders : [], t = 0; t < i.length; t++) i[t].sys_order_id == e.sys_order_id && (r.data.orders[t] = e, FlipcatWebAppLibrary.storage(r.getHistoryKey(), r.data))
    },
    onFailLoadItemData: function (e) {
        var t = Flipcat.Orders;
        return t.requestLoadItemDataSended = 0, FlipcatWebAppLibrary.unlock(t.HTML_ORDER_EXT_BLOCK_IN_MODAL), "Mobile" == t.MODE_LOAD_ITEM_DATA && Flipcat.OrdersTheme.hideAccordionPreloader(t.REQUESTED_ONE_ITEM_ID), !(e && e.error && e.message) && (!e.order, !0)
    },
    onLinkClick: function (e, t) {
        var r, i = Flipcat.Orders,
            a = e ? FlipcatWebAppLibrary._GET("page", 0, $(e.target).attr("href")) : i.currentPage - 1,
            o = array_chunk(i.data.orders, $(i.HTML_PERPAGE_INPUT_ID).val()),
            n = array_chunk(i.data.orders, $(i.HTML_PERPAGE_INPUT_ID).val())[a],
            s = [{key: "[DATE]", val: i.renderDate}, {
                key: new RegExp("\\[ID\\]", "gmi"),
                val: "id"
            }, {key: new RegExp("\\[ORDER_SYS_ID\\]", "gmi"), val: "sys_order_id"}, {
                key: "[ORDER_SHOP_ITEM]",
                val: i.renderItems
            }, {
                key: new RegExp("\\[ORDER_BUYER_DATA\\]", "gmi"),
                val: i.renderBuyer
            }, {
                key: new RegExp("\\[totalPrice\\]", "gmi"),
                val: i.totalPrice
            }, {
                key: new RegExp("\\[totalPriceBalls\\]", "gmi"),
                val: i.totalPriceBalls
            }, {key: new RegExp("\\[STATUS\\]", "gmi"), val: "status"}, {
                key: new RegExp("\\[review_rating\\]", "gmi"),
                val: i.showReviewButton
            }, {
                key: new RegExp("\\[COMPANY_NAME\\]", "gmi"),
                val: i.renderCompanyName
            }, {
                key: new RegExp("\\[IMAGE\\]", "gmi"),
                val: i.renderCompanyLogo
            }, {
                key: new RegExp("\\[HFU_URL\\]", "gmi"),
                val: i.renderCompanyUrl
            }, {key: new RegExp("\\[totalQuantity\\]", "gmi"), val: i.totalQuantity}], c = [];
        if (t = "undefined" === String(t) || t, n) for (r = 0; r < n.length; r++) c.push(n[r]); else if (!e) return i.data.orders.length < i.data.total_orders ? i.requsetSended || (i.requsetSended = !0, i.currentPageStored = i.currentPage, i.lib._get(i.onLoadOrders, "/historyjson?offset=" + i.data.orders.length, i.onFailLoadOrders)) : i.currentPage--, !1;
        return o = c, FlipcatWebAppLibrary.render($(i.HTML_ORDERS_CONTAINER_ID), "div", s, o, !1, "div.orders-history-item"), s[4] = {
            key: "[ORDER_BUYER_DATA]",
            val: i.renderBuyerMobile
        }, s[3] = {
            key: "[ORDER_SHOP_ITEM]",
            val: i.renderItemsMobile
        }, window.dbgtp = 1, FlipcatWebAppLibrary.render($(i.HTML_MOBILE_ORDERS_CONTAINER_ID), "div", s, o, !1, "div.mobile-hstory-item"), t && ($(i.HTML_ORDER_SHOW_EXT_INFO_CSS).click(i.onClickInfo), $(i.HTML_ORDER_REPEAT_CSS).click(i.onRepeatClick), $(Flipcat.Reviews.HTML_REVIEW_BTN_ADD_CSS).click(Flipcat.Reviews.onClickAddReviewButton)), i.setAccordion(), Flipcat.Pagination.setData(i.onLinkClick, i.data.orders.length, $(i.HTML_PERPAGE_INPUT_ID).val()), !1
    },
    renderItemsMobile: function (e, t) {
        var r, i, a, o, n, s = e.items, c = Flipcat.Orders, l = "";
        if (c.initShopCurrency(e), s.length) for (i = t.find(".js-order-items-tpl.tpl").first(), r = i.html(), a = 0; a < s.length; a++) o = r.replace("[TITLE]", s[a].title), o = o.replace("[QUANTITY]", s[a].quantity), o = o.replace("[ITEM_ID]", s[a].id), n = e.shop.currency, c.shopCurrency[e.shop.sid] && (n = c.shopCurrency[e.shop.sid].v), n = Flipcat.currenciesMap && Flipcat.currenciesMap[n] ? Flipcat.currenciesMap[n] : n, 1 == s[a].is_loyalty_product && (n = Flipcat.Cart.getStrBalls(round(s[a].quantity * s[a].price))), o = o.replace("[PRICE]", String(round(s[a].quantity * s[a].price, 2)).replace(".", ",") + " " + n), l += o;
        return l
    },
    renderItems: function (e, t) {
        var r, i, a, o, n, s, c, l, _, d = e.items, p = Flipcat.Orders, u = e.shop.currency;
        if (p.initShopCurrency(e), d.length) {
            for (n = t.find(p.HTML_PRODUCTS_CONTAINER_CSS + ".tpl").first(), r = n.parent(), a = n.attr("class").replace("tpl", ""), o = n[0].tagName.toLowerCase(), i = $(p.HTML_PRODUCT_ITEM_ID).html(), r.find(o).each(function (e, t) {
                t = $(t), t.hasClass("tpl") || t.remove()
            }), _ = $('<ul class="hide"></ul>'), s = 0; s < d.length; s++) {
                c = d[s], l = i.replace("[TITLE]", c.title), p.shopCurrency[e.shop.sid] && (u = p.shopCurrency[e.shop.sid].v), u = p.currencies[u] ? p.currencies[u] : u, 1 == c.is_loyalty_product && (u = Flipcat.Cart.getStrBalls(c.price, round(c.price * c.quantity))), l = l.replace("[PRICE]", String(round(c.price * c.quantity, 2)).replace(".", ",") + " " + u), l = l.replace("[QUANTITY]", c.quantity), l = l.replace(/\[ID\]/gm, c.id), c.photos && c.photos[0] && c.photos[0].thumbnail_url ? l = l.replace('data-src="src"', 'src="' + c.photos[0].thumbnail_url + '" data-onerror="Flipcat.Orders.onErrorLoadHistoryProductImage(this)"') : (l = l.replace('data-src="src"', 'src="/img/productListNoImage.png" data-onerror="Flipcat.Orders.onErrorLoadHistoryProductImage(this)"'), p.initReloadImages());
                var h = $("<" + o + ' class="' + a + '" data-id="' + c.id + '">' + l + "</" + o + ">");
                _.append(h)
            }
            return l = _.html(), _.remove(), l
        }
    },
    renderBuyerMobile: function (e, t) {
        var r, i, a = t.find(".js-mobile-order-shop-buyer.tpl").first().html(), o = $("<div></div>"), n = {};
        if (!(e.fields instanceof Object)) try {
            e.fields = JSON.parse(e.fields)
        } catch (s) {
        }
        for (r = 0; r < e.fields.length; r++) !n[e.fields[r].title] && $.trim(e.fields[r].description) && (i = a.replace("[TITLE]", e.fields[r].title), i = i.replace("[DESCRIPTION]", e.fields[r].description), o.append($(i)), n[e.fields[r].title] = 1);
        return i = o.html()
    },
    renderBuyer: function (e, t) {
        var r, i, a, o = t.find(".order-shop-buyer.tpl").first().html(), n = $("<div></div>"), s = {};
        for (r = 0; r < e.fields.length; r++) {
            if (!(e.fields instanceof Object)) try {
                e.fields = JSON.parse(e.fields)
            } catch (c) {
            }
            !s[e.fields[r].title] && $.trim(e.fields[r].description) && (i = o.replace("[TITLE]", e.fields[r].title), a = e.fields[r].description, (e.fields[r].type in {
                price: 1,
                shippingvars: 1
            } || e.fields[r].isshippingvars) && (a = e.fields[r].price), i = i.replace("[DESCRIPTION]", a), n.append($(i)), s[e.fields[r].title] = 1)
        }
        return i = n.html()
    },
    showReviewButton: function (e, t) {
        return e.review && e.review.review_rating && $.trim(e.review.review_rating) ? "hide" : ""
    },
    renderDate: function (e, t) {
        return FlipcatWebAppLibrary.formatDate(e.date)
    },
    renderCompanyName: function (e, t) {
        return e.shop.company_name
    },
    renderCompanyLogo: function (e, t) {
        o = window.Flipcat.Orders;
        var r = o.getDefaultCompanyImage(), i = o.parseSrc(e);
        return i == r && Flipcat.Orders.initReloadImages(), '<img onerror="Flipcat.Orders.onErrorLoadHistoryCompanyLogo" class="img-responsive project-image shop-image" width="100" alt="' + e.shop.company_name + '" src = "' + i + '">'
    },
    parseSrc: function (e) {
        var t = this.getDefaultCompanyImage();
        return e.shop.logotype_url ? e.shop.logotype_url : e.shop.logotype_thumbnail ? e.shop.logotype_thumbnail : t
    },
    getDefaultProductImage: function () {
        return "/img/modern/goods.png"
    },
    getDefaultCompanyImage: function () {
        return "/img/productListNoImage.png"
    },
    renderCompanyUrl: function (e, t) {
        var r = e.shop, i = r.agregate_scope_ids && r.agregate_scope_ids[0] ? r.agregate_scope_ids[0] : "0";
        return "/b/" + r.sid + "/" + i + "/" + r.id
    },
    totalQuantity: function (e, t) {
        var r, i = 0;
        for (r = 0; r < e.items.length; r++) i += e.items[r].quantity;
        return i
    },
    totalPrice: function (e, t) {
        var r, i, a = Flipcat.Orders, o = 0, n = e.shop.currency, s = a.currencies, c = e.shop.currency;
        for (a.initShopCurrency(e), a.shopCurrency[e.shop.sid] && (n = a.shopCurrency[e.shop.sid].v), r = 0; r < e.items.length; r++) !n && s[e.items[r].currency] && (n = s[e.items[r].currency]), c || (c = e.items[r].currency), 0 == e.items[r].is_loyalty_product && (o += e.items[r].price * e.items[r].quantity);
        if (e.fields && e.fields instanceof Array) for (r = 0; r < e.fields.length; r++) e.fields[r] && +e.fields[r].price && (o = +o + +e.fields[r].price);
        return i = FlipcatWebAppLibrary.getCurrenciesArray(), n = n && i && i[n] ? i[n] : n, o + " " + n
    },
    totalPriceBalls: function (e, t) {
        var r, i = 0;
        for (r = 0; r < e.items.length; r++) 1 == e.items[r].is_loyalty_product && (i += e.items[r].price * e.items[r].quantity);
        return i
    },
    getProductsInfo: function (e) {
        var t = Flipcat.Orders, r = [], i = {}, a = $(e.target),
            o = a.parents(t.HTML_ORDER_CONTAINER_CSS).first().find(t.HTML_PRODUCTS_CONTAINER_CSS);
        o.each(function (e, t) {
            t = $(t), e = t.data("id"), i[e] || (i[e] = 1, r.push(e))
        }), t.lib._post({ids: r, oi: a.data("id")}, t.onProductsInfo, "/history/info", t.onFailLoadProductsInfo)
    },
    onFailLoadProductsInfo: function () {
        Flipcat.Orders.lib.defaultFail()
    },
    onProductsInfo: function (e) {
        var t, r, i, a, o, n, s, c = Flipcat.Orders, l = e.id, _ = 0, d = [], p = e.showAlertLocationRequire;
        return e.cartIsOffMessage ? void Flipcat.Messages.fail(e.cartIsOffMessage) : (e.error && "emptyList" == e.info && (_ = 1), o = e.sid, e = FlipcatWebAppLibrary.indexBy(e.list), $("#modalOrderN" + l).first().find(c.HTML_PRODUCTS_CONTAINER_CSS).each(function (o, p) {
            if (p = $(p), !p.hasClass("tpl")) if (t = p.data("id"), e[t]) {
                if (1 == e[t].is_loyalty_product) return;
                1 != e[t].allow_order ? _ = 1 : (n = c.getOrderById(l), n && (s = c.getItemFromOrderById(n, t)), r = s && s.price ? s.price : 0, i = s && s.quantity ? s.quantity : 0, a = e[t].discount_price ? e[t].discount_price : e[t].price, a * i != r * i && (_ = 1), d.push({
                    id: t,
                    q: i
                }))
            } else _ = 1
        }), $("#showAlertLocationRequire").val(p), c.availableProducts = d, window.global_sid = o, void (_ ? $(c.HTML_ORDER_CHANGES_MESSAGE_MODAL_ID).modal("show") : c.addToCart()))
    },
    addToCart: function () {
        var e, t = Flipcat.Orders, r = t.availableProducts, i = $("#showAlertLocationRequire").val();
        for (e = 0; e < r.length && (t.lib.addToCart(r[e].id, r[e].q), "1" != i); e++) ;
        "0" == i && setTimeout(function () {
            window.location.href = $(t.lib.HTML_CART_LINK_ID).attr("href")
        }, 500)
    },
    onNeedMoreItems: function () {
        var e = Flipcat.Orders;
        e.data && setTimeout(function () {
            e.autoloadProcess = 0;
            try {
                e.onLinkClick()
            } catch (t) {
            }
        }, 500)
    },
    onRepeatClick: function (e) {
        Flipcat.Orders.getProductsInfo(e)
    },
    onClickInfo: function (e) {
        var t = Flipcat.Orders,
            r = $(e.target).parents(t.HTML_ORDER_CONTAINER_CSS).first().find(t.HTML_ORDER_EXT_INFO_CONTENT_CSS).first().html();
        return t.doLockModal = t.onClickInfoButtonDesk(e), $(t.HTML_ORDER_EXT_BLOCK_IN_MODAL).html(r), t.modalListenerOnShowSetted || ($(t.HTML_ORDER_EXT_INFO_MODAL_ID).on("shown.bs.modal", function () {
            !t.doLockModal && t.requestLoadItemDataSended && Flipcat.OrdersTheme.lockModal()
        }), t.modalListenerOnShowSetted = 1), $(t.HTML_ORDER_EXT_INFO_MODAL_ID).modal("show"), !1
    },
    onLoadOrders: function (e) {
        var t, r = Flipcat.Orders;
        if (e.orders && e.orders.length) for (t = 0; t < e.orders.length; t++) r.data.orders.push(e.orders[t]);
        r.currentPage = r.currentPageStored, r.onLinkClick(), setTimeout(function () {
            r.requsetSended = !1
        }, 2e3)
    },
    onFailLoadOrders: function () {
        Flipcat.Orders.requsetSended = !1
    },
    getLastOrderIdFromCache: function () {
        var e = Flipcat.Orders, t = FlipcatWebAppLibrary, r = t.storage(e.getHistoryKey());
        return r && isset(r, "orders", "length") && r.orders.length > 0 ? r.orders[0].sys_order_id : 0
    },
    onLoadFirstOrders: function (e) {
        var t = Flipcat.Orders, r = FlipcatWebAppLibrary;
        isset(e, "orders", "length") && e.orders.length > 0 ? (r.storage(t.getHistoryKey(), e), t.renderFirstPage(e)) : $(t.HTML_MESSAGE_CSS).text(__("messages.Your_order_history_is_empty"))
    },
    setOrdersListeners: function () {
        var e = Flipcat.Orders;
        $(e.HTML_ORDER_REPEAT_CSS).click(e.onRepeatClick), $(e.HTML_ORDER_SHOW_EXT_INFO_CSS).click(e.onClickInfo), $(e.HTML_ORDER_CHANGES_MESSAGE_MODAL_BUTTONS_CSS).click(e.addToCart), $(Flipcat.Reviews.HTML_REVIEW_BTN_ADD_CSS).click(Flipcat.Reviews.onClickAddReviewButton), e.autoloadProcess = 0
    },
    renderFirstPage: function (e) {
        var t = Flipcat.Orders, r = localStorage.getItem("reviewOrderId");
        try {
            $(t.HTML_ORDERS_DATA_ID).val(JSON.stringify(e))
        } catch (i) {
        }
        t.data = e, e.orders && e.orders.length ? ($(t.HTML_ORDER_LIST_HEADING_ID).removeClass("hide"), $(t.HTML_MESSAGE_CSS).addClass("hide"), t.onLinkClick(null, !1), t.setOrdersListeners()) : $(t.HTML_MESSAGE_CSS).text(__("messages.Your_order_history_is_empty")), "/all_history" == FlipcatWebAppLibrary.REQUEST_URI(1) && r && $("button[data-id=" + r + "]")[0] && (Flipcat.Reviews.onClickAddReviewButton({target: $("button[data-id=" + r + "]")[0]}), localStorage.removeItem("reviewOrderId"))
    },
    onLoadNewOrders: function (e) {
        var t, r, i = Flipcat.Orders, a = FlipcatWebAppLibrary;
        if (isset(e, "orders", "length")) {
            var t = a.storage(i.getHistoryKey());
            if (t && t.orders && e.orders) {
                for (r = 0; r < e.orders.length; r++) e.orders[r].items = array_values(e.orders[r].items);
                for (r = 0; r < t.orders.length; r++) e.orders.push(t.orders[r]);
                t.orders = e.orders, a.storage(i.getHistoryKey(), t), i.renderFirstPage(t)
            } else localStorage.clear(i.getHistoryKey()), i.setListeners()
        } else $(i.HTML_MESSAGE_CSS).text(__("messages.Your_order_history_is_empty"))
    },
    onFailLoadNewOrders: function (e, t, r, i) {
        $(o.HTML_MESSAGE_CSS).text(__("messages.Default_fail"))
    },
    onFailLoadFirstOrders: function (e, t, r, i) {
        $(o.HTML_MESSAGE_CSS).text(__("messages.Default_fail"))
    },
    getHistoryKey: function () {
        return Flipcat.Orders.STORAGE_ORDERS_KEY + "-" + Flipcat.AuthMarker.getMarker()
    },
    initShopCurrency: function (e) {
        var t, r, i, a = Flipcat.Orders;
        t = e, t.shop && t.shop.sid && (i = a.shopCurrency[t.shop.sid] ? a.shopCurrency[t.shop.sid] : 0, i || (i = {}, i.ts = strtotime(t.created_at), i.v = t.shop.currency, a.shopCurrency[t.shop.sid] = i), r = i.ts, t.created_at && strtotime(t.created_at) > r && (a.shopCurrency[t.shop.sid].v = t.shop.currency, a.shopCurrency[t.shop.sid].ts = strtotime(t.created_at)))
    },
    getOldQuantity: function (e, t) {
        var r, i, a = Flipcat.Orders, o = a.getOrderById(e);
        return o && (r = a.getItemFromOrderById(o, t)), r && r.quantity ? (i = +r.quantity, i = i ? i : 0) : -1
    },
    getOrderById: function (e) {
        var t, r = Flipcat.Orders, i = r.data;
        for (i = i.orders ? i.orders : [], t = 0; t < i.length; t++) if (i[t].sys_order_id == e) return i[t];
        return null
    },
    getItemFromOrderById: function (e, t) {
        var r, i = e, a = i.items;
        for (r = 0; r < a.length; r++) if (a[r].id == t) return a[r];
        return null
    },
    initReloadImages: function () {
        var e = Flipcat.Orders, t = FlipcatWebAppLibrary;
        time() - intval(t.storage(e.STORAGE_LAST_RELOAD)) > 3600 && (t.storage(e.STORAGE_LAST_RELOAD, time()), localStorage.removeItem(e.getHistoryKey()), location.reload(!0))
    },
    onErrorLoadHistoryCompanyLogo: function () {
        var e = Flipcat.Orders;
        e.reloadStorageIsRun || (e.reloadStorageIsRun = !0, e.initReloadImages())
    },
    onErrorLoadHistoryProductImage: function (e) {
        e.setAttribute("src", this.getDefaultProductImage())
    },
    setAccordion: function () {
        var e, t = document.getElementsByClassName("j-more-info-mobile"), r = Flipcat.Orders;
        for (e = 0; e < t.length; e++) t[e].onclick = function (e) {
            r.onClickInfoButtonMobile(e) && (this.classList.toggle("active"), this.nextElementSibling.classList.toggle("show"))
        }
    }
};
window.Flipcat.Orders = Orders, window.Flipcat = window.Flipcat || {}, window.Flipcat.Yamap = {
    HTML_YAMAP_CONTAINER_ID: "#yamap",
    HTML_YAMAP_POINTS_ID: "#ymdata",
    HTML_YAMAP_DZONE_DATA_ID: "#ymdatazone",
    polygons: [],
    init: function () {
    },
    onYamapsInit: function () {
        var e, t = Flipcat.Yamap, r = $(t.HTML_YAMAP_POINTS_ID).val(), a = $(t.HTML_YAMAP_DZONE_DATA_ID).val(), o = [];
        try {
            a = a ? a : "[]", r = r ? r : "[]", r = JSON.parse(r), a = JSON.parse(a);
            var e = t.getCenter(r, o, a), n = e.pop();
            for (t.map = new ymaps.Map(t.HTML_YAMAP_CONTAINER_ID.replace("#", ""), {
                center: e,
                zoom: n
            }), i = 0; i < o.length; i++) t.map.geoObjects.add(o[i]);
            for (i = 0; i < a.length; i++) t.drawPolygon(a[i].polygon)
        } catch (s) {
            r = null
        }
    },
    getCenter: function (e, t, r) {
        var i, a, o, n, s, c, l, _, d = [], p = [], u = [], h = 1, f = 0, g = this;
        for (i = 0; i < e.length; i++) d.push(e[i].lat), p.push(e[i].lng), t.push(g.prepareItem(e[i]));
        for (g.removePolygons(), i = 0; i < r.length; i++) g.grabPolygon(r[i].polygon, d, p), t.push(g.prepareDeliveryItem(r[i]));
        a = Math.min.apply(null, d), o = Math.max.apply(null, d), n = Math.min.apply(null, p), s = Math.max.apply(null, p), l = s - n, c = o - a, _ = c > l ? c : l;
        var m = 10;
        return _ > 1 && _ < 10 ? m = 6 : _ >= 10 && _ < 20 ? m = 4 : _ < 100 && _ > 60 ? (m = 5, h = -1) : _ < 60 && _ > 20 ? m = 3 : _ > 100 ? (m = 2, h = -1) : _ < 1 && _ > .1 ? (m = 10, f = .15) : _ < .1 && _ > .01 ? (m = 11, f = .01) : m = 10, u.push(a + Math.round((o - a) / 2)), u.push(n + f + h * Math.round((s - n) / 2)), u.push(m), u
    },
    prepareItem: function (e) {
        var t = new ymaps.Placemark([e.lat, e.lng], {hintContent: e.title, balloonContent: e.name});
        return t
    },
    grabPolygon: function (e, t, r) {
        var i, a, o, n = e;
        for (i = 0; i < n.length; i++) for (o = n[i], a = 0; a < o.length; a++) t.push(o[a][0]), r.push(o[a][1])
    },
    prepareDeliveryItem: function (e) {
        var t = "<br>", r = " ", i = new ymaps.Placemark([e.lat, e.lng], {
            hintContent: e.name,
            balloonContent: __("contacts-address-modal-form-delivery-cost") + r + intval(e.delivery_cost) + t + __("Delivery_time") + r + intval(e.delivery_time) + t + __("MinOrderSum") + r + intval(e.min_order_sum) + t
        });
        return i
    },
    removePolygons: function () {
        var e = this;
        for (i = 0; i < e.polygons; i++) e.map.geoObjects.remove(e.polygons[i])
    },
    drawPolygon: function (e) {
        var t = new ymaps.Polygon([e[0], e[1] ? e[1] : [], e[2] ? e[2] : []], {}, {
            interactivityModel: "default#transparent",
            strokeWidth: 4,
            opacity: .2
        });
        this.polygons.push(t), this.map.geoObjects.add(t)
    }
}, Flipcat = window.Flipcat || {}, Flipcat.CGeo = function () {
    var e, t, r,
        i = ["CGeoDecoder", "MainGeoForm", "MapModalDialog", "LeftMenuCitySwitcher", "FirstRunPopupCitySwitcher", "MobileGeoForm"];
    for (Flipcat.CGeo.superclass.__construct.call(this), this.verbose = !1, this.geodecoder = null, this.lockForSubmit = !1, this.maingeoform = null, this.modal = null, this.sCountry = this.sCity = this.street = this.sNumber = this.sAddressString = "", this._reinitEmptyCoordinatesProcess = !1, e = 0; e < i.length; e++) if (t = i[e], Flipcat[t] instanceof Function) {
        r = new Flipcat[t](this);
        try {
            r.provideInterface("IGeoDecoder") && !this.geodecoder && (Flipcat.Yamap && r.addReadyEventListener(Flipcat.Yamap, Flipcat.Yamap.onYamapsInit), this.geodecoder = r), r.provideInterface("IMapModalDialog") && !this.modal && (this.modal = r)
        } catch (a) {
            throw new Error("Class " + t + " require extends class Observer or CMainGeoForm!")
        }
        "MainGeoForm" != t || this.maingeoform || (this.maingeoform = r)
    }



 /*убрал вставку центральной улицы*/

    
    // if (this.street = this.initialStreet = this.maingeoform.getStreet(),
    //     this.sNumber = this.initialHome = this.maingeoform.getNumber(),
    //     this.sCity = this.maingeoform.getCity().trim(),
    // this.maingeoform.getLat() && this.maingeoform.getLon()) this.geodecoder.decodeCoordinates(this.maingeoform.getLat(), this.maingeoform.getLon(), [[this, this.onInitCoordinatesLoaded]]); else if (this.sCity) this.maingeoform.exists() && (this._reinitEmptyCoordinatesProcess = !0, this.geodecoder.decodeAddressString(this.sCity, [[this, this.onInitCoordinatesLoaded]]));
    // else {
    //     var o = this;
    //     setTimeout(function () {
    //         o.notify()
    //     }, 500)
    // }
    /*убрал вставку центральной улицы*/
    this.req = {}
}, extend(Subject, Flipcat.CGeo);
var P = Flipcat.CGeo.prototype;
P.getState = function () {
    return this
}, P.setState = function (e, t, r, i, a) {
    this.req.sAddressString = this.sAddressString = e, this.verbose, this.req.sCountry = this.sCountry = t, r.trim() && (this.req.sCity = this.sCity = r), i && (this.req.street = this.street = i), a && (this.sNumber = a), this.verbose, this.notify()
}, P.onCityInListChange = function (e, t) {
    this.lockForSubmit = !0;
    var r, i = {};
    this._validate(i, e, t, !0) && (r = this.geodecoder, this.req.sCity = e, this.geodecoder.procIsRun() ? (r.clearQueue(), r.clearAllAdditionalCallbacks(), r.decodeAddressString(this.addNamePrefix(e), [[this, this._send]])) : (i.isIdFound || (t = 0), "" == r.getStreet() && "" == r.getNumber() && r.getLat() && r.getLon() && e && this.sCity && trim(this.sCity) == trim(this.name) ? this._send() : r.decodeAddressString(this.addNamePrefix(e), [[this, this._send]])))
}, P.onGeodataSubmit = function () {


    /*сюда*/

    var e = {}, t = this.geodecoder;


    if (this._validate(e)) if (this.lockForSubmit = !0, t.procIsRun()) t.setCurrentAdditionalListeners([[this, this._send]]);
    else {
        if (t.getLat() && t.getLon() && t.street == this.maingeoform.getStreet() && t.sNumber == this.maingeoform.getNumber()) return void this._send();
        try {
            t.decodeAddressString(this._getAddressString(), [[this, this._send]])
        } catch (r) {
            this.verbose
        }
    }


}, P._validate = function (e, t, r, i) {
    t || (t = this.sCity),
    r || (r = this.maingeoform.getCityIdByName(t));
    var a = this.maingeoform.isAllowCity(t, r);
    return e.isIdFound = a.isIdFound, e.allow = a.allow, !!e.allow || (Flipcat.Messages.fail(__("This_city_nt_present_on_cite")), this.lockForSubmit = !1, !1)
}, P._getAddressString = function () {
    var a = [], i, o = this, s, id, srcCityName, sCity;
    (o.sCountry ? (a.push(o.sCountry) ) : 0);
    srcCityName = o.sCity;
    // console.log('CGeo::_getAddressString');
    // console.log('o.sCity = ' + o.sCity);

    if (o.sCity) {
        o.req.sCity = o.sCity;
        sCity = this.addNamePrefix(o.sCity);
        // console.log('sCity = ' + o.sCity);
    }
    (sCity ? (a.push(sCity) ) : 0);
    (o.street ? (a.push(o.street) ) : 0);
    (o.sNumber ? (a.push(o.sNumber) ) : 0);
    s = a.join(', ');
    o.sAddressString = String(o.sAddressString);
    console.log(s, o)
    if (s.length < o.sAddressString.length && (!sCity || o.sAddressString.indexOf(srcCityName) != -1) ) {
        s = o.sAddressString;
    }

    return s;
// /*
//     var e, t, r, i = [], a = this;
//     return a.sCountry ? i.push(a.sCountry) : 0,
//         t = a.sCity,
//     a.sCity && (a.req.sCity = a.sCity,
//         r = this.addNamePrefix(a.sCity)),
//         r ? i.push(r) : 0,
//         a.street ? i.push(a.street) : 0,
//         a.sNumber ? i.push(a.sNumber) : 0,
//         e = i.join(", "),
//         a.sAddressString = String(a.sAddressString),
//         e.length < a.sAddressString.length && (!r || a.sAddressString.indexOf(t) != -1) && (e = a.sAddressString),
//         e*/
//
//
//     var a = [], i, o = this, s, id, srcCityName, sCity;
//
//
//
//     (o.sCountry ? (a.push(o.sCountry) ) : 0);
//     srcCityName = o.sCity;
//     /*console.log('CGeo::_getAddressString');
//     console.log('o.sCity = ' + o.sCity);*/
//
//     console.log(o);
//
//     o.req.sCity = o.sCity;
//     sCity = this.addNamePrefix(o.sCity);
//
//     console.log('sCity = ' + o.sCity);
//
//     (sCity ? (a.push(sCity) ) : 0);
//     (o.street ? (a.push(o.street) ) : 0);
//     (o.sNumber ? (a.push(o.sNumber) ) : 0);
//     s = a.join(', ');
//     o.sAddressString = String(o.sAddressString);
//     console.log('s = ' + o.sAddressString);
//      s = o.sAddressString;
//     console.log(this);
//
//     return s;

}, P._send = function () {
    var e, t, r = this, i = r.geodecoder;
    this._createHiddenForm(),
        e = this.hiddenForm,
        t = e.iCity.value = i.getCity(),
        e.iCategoryId.value = r.maingeoform.getCityIdByName(t),
        e.iCountry.value = i.getCountry(),
        e.iHome.value = i.getNumber(),
        e.iLat.value = i.getLat(),
        e.iLon.value = i.getLon(),
        e.iStreet.value = i.getStreet(),
        e._token.value = FlipcatWebAppLibrary.getToken();
        e.submit();
}, P._createHiddenForm = function () {
    if (!this.hiddenForm) {
        var e = $(document.getElementsByTagName("body")[0]),
            t = '<input name="isPrelandingPage" value="1" type="hidden">', r = this;
        r.maingeoform.isPrelandingPage || (t = ""),
            r.hiddenForm = $('<form action="/switchlocation" method="POST">' + t + '\t<input name="iCity" type="hidden">\t<input name="iCategoryId" type="hidden">\t<input name="iCountry" type="hidden">\t<input name="iStreet" type="hidden">\t<input name="iHome" type="hidden">\t<input name="iLat" type="hidden">\t<input name="iLon" type="hidden">\t<input name="_token" type="hidden">\t<input type="submit" style="display:none;">\t'),
            e.append(this.hiddenForm),
            r.hiddenForm = this.hiddenForm[0]
    }
}, P.onInitCoordinatesLoaded = function () {

    if (this._reinitEmptyCoordinatesProcess) {
        var e = this, t = e.geodecoder._geodecoder;
        e.sCity && t.nLat && t.nLon && FlipcatWebAppLibrary._post({
            name: e.sCity,
            lat: t.nLat,
            lng: t.nLon
        },
            function () {
            e.onSuccessSetCityCoordinates()
        },
            "/setcitycoordinates", function () {
            e.onSuccessSetCityCoordinates()
        }
        )
    }
}, P.onSuccessSetCityCoordinates = function (e) {
    this.maingeoform.setLat(this.geodecoder._geodecoder.nLat),
    this.maingeoform.setLon(this.geodecoder._geodecoder.nLon);
    this._reinitEmptyCoordinatesProcess = !1
}, P.addNamePrefix = function (e) {
    var t, r = this, i = r.maingeoform.getCityIdByName(e);
    if (i && $("#regions")[0]) try {
        t = JSON.parse($("#regions").val()), t[i] && (e = t[i] + ", " + e)
    } catch (a) {
    }
    return e
}, Flipcat = window.Flipcat || {}, Flipcat.CGeoDecoderBase = function (e) {
    this.subject = e, this._decodeQueue = [], this.currentListeners = [], this._interfaces = {IGeoDecoder: 1}, this.geoServiceIsLoaded = !1, this.processIsRun = !1, this._mapQueue = [], this._ignoreCallbacks = !1, this.YANDEX = "yandex", this.GOOGLE = "google", this._activeServiceMapProvider = this.YANDEX, this._readyListeners = [], this.sCountry = this.sCity = this.street = this.sNumber = this.sAddressString = "", this.nLat = this.nLon = 0, this.subject.attach(this), this.testStr = "Это тестовая строка из CGeoDecoderBase", this.verbose = !1
}, extend(Observer, Flipcat.CGeoDecoderBase);
var P = Flipcat.CGeoDecoderBase.prototype;
P.decodeAddressString = function (e, t) {
    var r = this;
    if (r.procIsRun()) r._addInDecodeQueue("decodeAddressString", [e, t]); else {
        r.processIsRun = !0, r.currentListeners = t ? t : [];
        try {
            r._decodeAddressString(e, t)
        } catch (i) {
            r.processIsRun = !1
        }
    }
}, P.decodeCoordinates = function (e, t, r) {
    var i = this;
    if (r = r ? r : [], i.procIsRun()) i._addInDecodeQueue("decodeCoordinates", [e, t, r]); else {
        i.processIsRun = !0, i.currentListeners = r ? r : [];
        try {
            i._decodeCoordinates(e, t, r)
        } catch (a) {
            i.processIsRun = !1
        }
    }
}, P.onDecodeCoordinatesBase = function () {
    var e, t, r = this;
    if (e = Flipcat.geo ? Flipcat.geo : r && r.subject ? r.subject : null, !e) throw r.clearAll(), new Error("Unable get CGeo context");
    t = e.geodecoder, this.verbose, t.subject.setState(t.getAddressString(), t.getCountry(), t.getCity(), t.getStreet(), t.getNumber()), t.processIsRun = !1, t._runAdditioonalListeners(), t.procIsRun() || t._runNextQueueItem()
}, P.onFailDecodeCoordinatesBase = function (e) {
    Flipcat.Messages.success(__("address.Addres.not.found.try.again"));
    var t = Flipcat.geo, r = t.geodecoder;
    r.processIsRun = !1, r._runNextQueueItem()
}, P.clearQueue = function () {
    this._decodeQueue = []
}, P.clearAllAdditionalCallbacks = function () {
    var e, t, r, i, a, o = this._decodeQueue;
    for (this.currentListeners = [], this._ignoreCallbacks = !0, e = 0; e < o.length; e++) for (r = o[e].args, t = 0; t < r.length; t++) if (i = r[t], i instanceof Array && i[0] && (a = i[0], a instanceof Array && 2 == a.length && a[0] instanceof Object && a[1] instanceof Function)) {
        this._decodeQueue[e].args[t] = [];
        break
    }
    this._ignoreCallbacks = !1
}, P.setCurrentAdditionalListeners = function (e) {
    this.currentListeners = e ? e : []
}, P.onDecodeAddressStringBase = function () {
    var e, t, r = this;
    if (e = Flipcat.geo ? Flipcat.geo : r && r.subject ? r.subject : null, !e) throw r.clearAll(), t.processIsRun = !1, new Error("Unable get CGeo context");
    t = e.geodecoder, t.subject.setState(t.getAddressString(), t.getCountry(), t.getCity(), t.getStreet(), t.getNumber()), t.processIsRun = !1, t._runAdditioonalListeners(), t.procIsRun() || t._runNextQueueItem()

}, P.clearAll = function () {
    o.clearQueue(), o.clearAllAdditionalCallbacks(), o.currentListeners = [], o.processIsRun = !1
}, P.onFailDecodeAddressStringBase = function (e) {
    Flipcat.Messages.success(__("address.Addres.not.found.try.again")), Flipcat.Messages.success(__("address.Addres.not.found.try.again"));
    var t = Flipcat.geo, r = t.geodecoder;
    r.processIsRun = !1, r._runNextQueueItem()
}, P._runAdditioonalListeners = function () {
    var e, t = this;
    for (e = 0; e < t.currentListeners.length; e++) t._ignoreCallbacks || t.currentListeners[e] instanceof Array && (ctx = t.currentListeners[e][0], mth = t.currentListeners[e][1], ctx instanceof Object && mth instanceof Function && mth.apply(ctx))
}, P._runNextQueueItem = function () {
    var e, t = this;
    t._decodeQueue.length > 0 && (e = t._decodeQueue.shift(), t[e.name] instanceof Function && t[e.name].apply(t, e.args))
}, P._addInDecodeQueue = function (e, t) {
    var r = {};
    r.name = e, r.args = t, this._decodeQueue.push(r)
}, P.provideInterface = function (e) {
    return 1 === this._interfaces[e]
}, P.procIsRun = function () {
    return this.processIsRun || !this.geoServiceIsLoaded
}, P.createMap = function (e, t, r, i, a) {
    var o = this, n = [r, i, a];
    o.geoServiceIsLoaded ? (n = [o._createMap(r, i, a)], t.apply(e, n)) : o._addInMapDependsCallback("_createMap", o._activeServiceMapProvider, e, t, n)
}, P.addMarker = function (e, t, r, i, a, o, n) {
    var s = this, c = [r, i, a, o, n];
    s.geoServiceIsLoaded ? t.apply(e, [s._addMarker(r, i, a, o, n)]) : s._addInMapDependsCallback("_addMarker", s._activeServiceMapProvider, e, t, c)
}, P.getZoom = function (e, t, r) {
    var i = this, a = [r], o = !1;
    return i.geoServiceIsLoaded ? (o = i._getZoom(r), t.apply(e, [o])) : i._addInMapDependsCallback("_getZoom", i._activeServiceMapProvider, e, t, a), o
}, P._addInMapDependsCallback = function (e, t, r, i, a) {
    var o = {};
    o.ctx = r, o.mth = i, o.args = a, o.selfMethod = e, o.actualServiceMapProvider = t, this._mapQueue.push(o)
}, P.onMapServiceLoad = function () {
    var e, t, r, i, a = this;
    for (a._geodecoder || a.setMapServiceProvider(_activeServiceMapProvider), a.geoServiceIsLoaded = !0, a._runAdditioonalListeners(), e = 0; e < a._mapQueue.length; e++) if (t = a._mapQueue[e], a[t.selfMethod] && a[t.selfMethod] instanceof Function) {
        if (r = a._activeServiceMapProvider, i = a[t.selfMethod].apply(a, t.args), t.mth instanceof Function && t.ctx instanceof Object) {
            a.setMapServiceProvider(t.actualServiceMapProvider);
            try {
                t.mth.apply(t.ctx, [i])
            } catch (o) {
                a.setMapServiceProvider(r)
            }
        }
        a.setMapServiceProvider(r)
    }
    for (a._runNextQueueItem(), e = 0; e < a._readyListeners.length; e++) if (t = a._readyListeners[e], t.mth instanceof Function && t.ctx instanceof Object) try {
        t.mth.apply(t.ctx)
    } catch (o) {
    }
}, P.addReadyEventListener = function (e, t) {
    var r = {};
    r.ctx = e, r.mth = t, this._readyListeners.push(r)
}, P.moveMarker = function (e, t, r, i, a) {


    var o = this, n = [e, t, r, i, a];
    o.geoServiceIsLoaded ? o._moveMarker(e, t, r, i, a) : o._addInMapDependsCallback("_moveMarker", o._activeServiceMapProvider, 0, 0, n)
}, P.update = function () {
}, Flipcat = window.Flipcat || {}, Flipcat.CGeoDecoder = function (e) {
    Flipcat.CGeoDecoder.superclass.__construct.call(this, e),
        this._geodecoders = {},
        this._geodecoders[this.YANDEX] = new Flipcat.CYandexGeoDecoder(e),
        this._loadedDecoders = {},
        this.verbose = !1,
        this.setMapServiceProvider(this._activeServiceMapProvider)
}, extend(Flipcat.CGeoDecoderBase, Flipcat.CGeoDecoder);
var P = Flipcat.CGeoDecoder.prototype;
P._decodeAddressString = function (e, t) {
    this._geodecoder._decodeAddressString(e, t)
}, P._decodeCoordinates = function (e, t, r) {
    this._geodecoder._decodeCoordinates(e, t, r)
}, P._createMap = function (e, t, r) {
    return this._geodecoder._createMap(e, t, r)
}, P._moveMarker = function (e, t, r, i, a) {
    return this._geodecoder._moveMarker(e, t, r, i, a)
}, P._getZoom = function (e) {
    return this._geodecoder._getZoom(e)
}, P._addMarker = function (e, t, r, i, a) {
    return this._geodecoder._addMarker(e, t, r, i, a)
}, P.getCity = function () {
    return this._geodecoder.getCity()
}, P.getCountry = function () {
    return this._geodecoder.getCountry()
}, P.getNumber = function () {
    return this._geodecoder.getNumber()
}, P.getStreet = function () {
    return this._geodecoder.getStreet()
}, P.getLat = function () {
    return this._geodecoder.getLat()
}, P.getLon = function () {
    return this._geodecoder.getLon()
}, P.getAddressString = function () {
    return this._geodecoder.getAddressString()
}, P.getCoordinatesFromClickEventObject = function (e) {
    return this._geodecoder._getCoordinatesFromClickEventObject(e)
}, P.onConcreteMapServiceLoad = function (e) {
    var t = this;
    t._loadedDecoders[e] = 1, t.count(t._loadedDecoders) == t.count(t._geodecoders) && t.onMapServiceLoad()
}, P.setMapServiceProvider = function (e) {
    this._activeServiceMapProvider = e, this._geodecoder = this._geodecoders[e]
}, P.count = function (e) {
    if (!e) return 0;
    if (e instanceof Array || isset(e.length)) return e.length;
    var t, r = 0;
    for (t in e) r++;
    return r
}, Flipcat.CMainGeoForm = function (e) {
    this.subject = e, Flipcat.CMainGeoForm.superclass.__construct.call(this, e), this.subject.attach(this), this._interfaces = {IMainGeoForm: 1}, this._textFieldsIsLock = !1, this.Lib = FlipcatWebAppLibrary, this.initSubmitAction(), this.initTextChangeAction(), this.verbose = !0
}, extend(Observer, Flipcat.CMainGeoForm);
var P = Flipcat.CMainGeoForm.prototype;
P.update = function () {
    this._update()
}, P.exists = function () {
    return !!$("#iLon").val();
}, P._update = function () {

    var o = this, s = o.subject;
    if($('#map-modal').css("display")=='none') {
        if(s.sCity!=$('#dropdownMenu1 option:selected').text())
        {
            s.sCity=$('#dropdownMenu1 option:selected').text();
            s.sNumber='';
            s.street='';
        }
    }

    o.setCity(s.sCity);
    if (!o._textFieldsIsLock) {
        o.setStreet(s.street);
        o.setNumber(s.sNumber);
    }
    s.onInitCoordinatesLoaded();

},
// P.isAllowCity = function (e, t) {
//
//     var r, i = this, a = i.getCitiesList(), o = {};
//     console.log(i.verbose);
//     alert('gj');
//
//     for (i.verbose, r = 0; r < a.length; r++) if (a[r] && a[r][1] == e) return o.allow = !0, o.isIdFound = !1, parseInt(a[r][0]) === parseInt(t) && (o.isIdFound = !0), o;
//     return o.allow = o.isIdFound = !1, o
// }

P.isAllowCity = function(s, nCityId) {
    var o = this, a = o.getCitiesList(), i, r = {};
    if (o.verbose) {
        // console.log('isAllowCity get s = "' + s + '", id = ' + nCityId, a );
    }
    for (i = 0; i < a.length; i++) {
        if (a[i] && a[i][1] == s ) {
            r.allow = true;
            r.isIdFound = false;
            if (parseInt(a[i][0]) === parseInt(nCityId)) {
                r.isIdFound = true;
            }
            return r;
        }
    }
    r.allow = r.isIdFound = false;
    return r;
}




, P.provideInterface = function (e) {
    return 1 === this._interfaces[e]
}, P.setCity = function (e, t) {
    this._setCity(e, t)
}, P._setCity = function (e, t, r) {

    var i, a, o = this;
    i = r ? r : o.HTML_CITIES_LIST_ID, a = $(i)[0], a && o.Lib.selectByText(a, e)

}, P.getCity = function (e, t) {
    var r = this, i = $(r.HTML_CITIES_LIST_ID)[0];
    return i ? r.Lib.getSelectedText(i) : ""
}, P.getCitiesList = function (e) {
    return r._getCitiesList(e)
}, P._getCitiesList = function (e) {
    var t, r, i, a, o = this, n = [];
    if (t = e ? e : o.HTML_CITIES_LIST_ID, r = $(t)[0]) for (a = 0; a < r.options.length; a++) i = r.options[a], n.push([i.value, i.text]);
    return n
}, P.getCityIdByName = function (e, t) {
    return this._getCityIdByName(e, t)
}, P._getCityIdByName = function (e, t) {
    var r, i, a, o = this, n = o.Lib, s = 0;
    return r = t ? t : o.HTML_CITIES_LIST_ID, a = $(r)[0], a && (i = n.getOptionByText(a, e), i && i.value && (s = parseInt(i.value), s = s ? s : 0)), s
}, P.getLat = function () {
    return parseFloat($("#iLat").val())
}, P.getLon = function () {
    return parseFloat($("#iLon").val())
}, P.setLat = function (e) {
    $("#iLat").val(parseFloat(e))
}, P.setLon = function (e) {
    $("#iLon").val(parseFloat(e))
}, P.setStreet = function (e) {
    var t = $(this.HTML_STREET_INPUT_ID);
    t[0] && t.val(e)
}, P.setNumber = function (e) {
    var t = $(this.HTML_HOME_INPUT_ID);
    t[0] && t.val(e)
}, P.getStreet = function () {
    var e = $(this.HTML_STREET_INPUT_ID), t = "";
    return e[0] && (t = e.val()), t
}, P.getNumber = function () {
    var e = $(this.HTML_HOME_INPUT_ID), t = "";
    return e[0] && (t = e.val()), t
}, P.getCityId = function () {
    return this.getCityIdByName(this.getCity())
}, P.initSubmitAction = function () {
    var e = this;
    $(e.HTML_FORM_ID).bind("submit", function (t) {
        t.preventDefault(), e.subject.onGeodataSubmit()
    })
}, P.initTextChangeAction = function () {
    var e = this, t = $(e.HTML_STREET_INPUT_ID), r = $(e.HTML_HOME_INPUT_ID);
    t = t[0] ? t : 0, r = r[0] ? r : 0, t && r && (t.bind("keydown", function () {
        e._skipTextFieldsIsLock = e._textFieldsIsLock = !0, setTimeout(function () {
            e._onInputTextChange()
        }, 500)
    }), r.bind("keydown", function () {
        e._skipTextFieldsIsLock = e._textFieldsIsLock = !0, setTimeout(function () {
            e._onInputTextChange()
        }, 500)
    }))
}, P._onInputTextChange = function () {
    var e = this, t = e.subject;
    e.subject.maingeoform;
    t.setState("", t.sCountry, e.getCity(), e.getStreet(), e.getNumber()), e._skipTextFieldsIsLock = !1, setTimeout(function () {
        e._skipTextFieldsIsLock || (e._textFieldsIsLock = !1)
    }, 1e3)
}, Flipcat = window.Flipcat || {}, Flipcat.CMapModalDialog = function (e) {
    this.verbose = !1, this.subject = e, this.subject.attach(this), this._interfaces = {
        IMapModalDialog: 1,
        IObserver: 1
    }, this.Lib = FlipcatWebAppLibrary, this.map = {}, this.mapCreated = !1, this.needMoveMarkerOnCreate = !1, this.marker = {}, this.markerCreated = !1, this.defaultZoom = 9, this.currentZoom = this.defaultZoom, this.setListeners()
}, extend(Observer, Flipcat.CMapModalDialog);
var P = Flipcat.CMapModalDialog.prototype;
P.update = function () {
    var e = this;
    e.isGuiFound() && (e.setAddressString(e.subject._getAddressString(), e.needMoveMarkerOnCreate), e.needMoveMarkerOnCreate = !1)
    //e.isGuiFound() && (e.setAddressString(e.subject.sAddressString, e.needMoveMarkerOnCreate), e.needMoveMarkerOnCreate = !1)
}, P.provideInterface = function (e) {
    return 1 === this._interfaces[e]
}, P.onClickSearchOnMap = function (e) {

    if (this.verbose) {
        // console.log('Click from parent!');
    }
    var g = Flipcat.geo, o = g.modal, gdc = g.geodecoder, coords;
    // console.log(g);
    //get coords
    //coords = gdc.getCoordinatesFromClickEventObject(e);
    setTimeout(()=>{
        coords=this.marker.geometry._coordinates;
        o.currentZoom   = gdc.getZoom(o, o.onZoomData, o.map);
        gdc.moveMarker(o.map, o.marker, coords[0], coords[1], o.currentZoom);
        //get addr
        gdc.decodeCoordinates(coords[0], coords[1], [[o, o.onGetAddressString]]);//TODO onGetAddressString если не нужна удалить
        /*поменял функцию*/
    },500)



    var e=this;
    e.setAddressString(e.getAddressString(), !0)
}, P.setAddressString = function(s, setMarkerOnCart) {
    var o = this;
    if (!o.isGuiFound()) {
        return;
    }
    setMarkerOnCart = o.Lib.True(setMarkerOnCart);
    o.iAddress.val(s);
    if (setMarkerOnCart) {
        o.subject.geodecoder.decodeAddressString(s, [[o, o.onGetPointCoordinates]]);
    }
}, P.onGetPointCoordinates = function () {
    /*var e = this, t = e.subject.geodecoder, r = t.getLat(), i = t.getLon();
    e.currentZoom = t.getZoom({}, function () {
    }, e.map), t.moveMarker(e.map, e.marker, r, i, e.currentZoom)*/
    var o = this, gdc = o.subject.geodecoder, lat = gdc.getLat(), lon = gdc.getLon();
    //по получении переместить маркер
    o.currentZoom = gdc.getZoom({}, function(){}, o.map);
    gdc.moveMarker(o.map, o.marker, lat, lon, o.currentZoom);
    /*мое определение н.п.*/
    coords=[lat,lon];
    ymaps.geocode(coords).then(function (res) {
        var firstGeoObject = res.geoObjects.get(0);
        if( firstGeoObject.getLocalities().length>0){
            // console.log(firstGeoObject.getLocalities()[0]);
        };
    });


}, P.onMapCreate = function (e) {
    var t, r, i = this, a = 48.752883, o = 47.629748;
    i.map = e, i.mapCreated = !0, i.markerCreated ? i.setPosition() : (t = i.subject.geodecoder, r = i.subject.maingeoform, t && t.getLat() && t.getLon() ? (a = t.getLat(), o = t.getLon()) : r && r.getLat() && r.getLon() ? (a = r.getLat(), o = r.getLon()) : i.needMoveMarkerOnCreate = 1, i.currentMarkerNLat = a, i.currentMarkerNLon = o, i.subject.geodecoder.addMarker(i, i.onMarkerCreate, i.map, a, o, "", ""))
}, P.onMarkerCreate = function (e) {
    var t, r, i, a = this;
    a.marker = e, a.markerCreated = !0, t = a.subject.geodecoder, t && t.getLat() && t.getLon() ? (r = t.getLat(), i = t.getLon(), r != a.currentMarkerNLat && (a.needMoveMarkerOnCreate = !1, t.moveMarker(a.map, a.marker, r, i, a.currentZoom))) : a.needMoveMarkerOnCreate && a.setPosition()
}, P.onGetAddressString = function () {
    var e = this;
    e.subject.geodecoder;
    e.verbose

}, P.onBtnConfirmClick = function () {
    this.subject.onGeodataSubmit()
}, P.setListeners = function () {
    var e = this;
    $(e.getSelectOnMapBtnId()).bind("click", function (t) {
        t.preventDefault(), e.open()
    }), $(e.getOrderFormAdddressInputCss()).bind("click", function (t) {
        t.preventDefault(), e.open(!0)
    }), $(e.getSelectOnMapMobileBtnId()).bind("click", function (t) {
        t.preventDefault(), e.open()
    }), $(e.getCloseBtnSelector()).bind("click", e.close), $(e.HTML_SEARCH_ON_MAP_BTN_ID).bind("click", function (t) {
        t.preventDefault(), e.onClickSearchOnMap()
    }), $(e.HTML_BTN_CONFIRM_ID).bind("click", function (t) {
        t.preventDefault(), e.onBtnConfirmClick()
    })
}, P.onMapClick = function (e) {
    // console.log(e);
//туда
    /*this.verbose;
    var t, r = Flipcat.geo, i = r.modal, a = r.geodecoder;
    t = a.getCoordinatesFromClickEventObject(e),
        i.currentZoom = a.getZoom(i, i.onZoomData, i.map),
        a.moveMarker(i.map, i.marker, t[0], t[1], i.currentZoom),
        a.decodeCoordinates(t[0], t[1], [[i, i.onGetAddressString]])
    console.log(i.marker);*/
    /*поменял функцию*/

    if (this.verbose) {
        // console.log('Click from parent!');
    }
    var g = Flipcat.geo, o = g.modal, gdc = g.geodecoder, coords;
    // console.log(g);
    //get coords
    coords = gdc.getCoordinatesFromClickEventObject(e);
    o.currentZoom   = gdc.getZoom(o, o.onZoomData, o.map);
    gdc.moveMarker(o.map, o.marker, coords[0], coords[1], o.currentZoom);
    //get addr
    gdc.decodeCoordinates(coords[0], coords[1], [[o, o.onGetAddressString]]);//TODO onGetAddressString если не нужна удалить
    /*поменял функцию*/

}, P.onZoomData = function (e) {
    this.currentZoom = e
}, P.setPosition = function () {
    var e = this;
    s = e.getAddressString(); 
    s && e.setAddressString(s);
    console.log(s, e.getAddressString)
}, P.actualizeMap = function () {
    var e = this;
    e.mapCreated || e.subject.geodecoder.createMap(e, e.onMapCreate, e.HTML_MAP_CONTAINER_ID_RAW, 0, e.onMapClick), e.markerCreated && e.setPosition()

    // данное событие возникает при открытии модалки с картой
    // здесь добавим проверку на заполненность инпутов при инициализации
    // установим маркер на соответствующие координаты
    console.log('open map', e)
    e.setPosition()
}, Flipcat = window.Flipcat || {}, Flipcat.CYandexGeoDecoder = function (e) {
    var t = this;
    Flipcat.CYandexGeoDecoder.superclass.__construct.call(t, e), this.verbose = !1, t._listenMapReady()
}, extend(Flipcat.CGeoDecoderBase, Flipcat.CYandexGeoDecoder);





var P = Flipcat.CYandexGeoDecoder.prototype;
P._decodeAddressString = function (e, t) {

    var r, i = this;
    i.subject;
    try {
        i.verbose, r = ymaps.geocode(e), r.then(function (e) {
            i.onDecodeAddressString.apply(i, [e])
        }, function (e) {
            i.onFailDecodeAddressString.apply(i, [e])
        })
    } catch (a) {
        this.verbose
    }
}, P.onDecodeAddressString = function (e) {
    this._onDecodeResult(e)
}, P._onDecodeResult = function (e, t) {
    var r = this;
    r._parseResponse(e, t), t ? r.onDecodeCoordinatesBase() : r.onDecodeAddressStringBase()
}, P.onDecodeCoordinates = function (e) {
    this._onDecodeResult(e, 1)
}, P.onFailDecodeCoordinates = function (e) {
    this.onFailDecodeCoordinatesBase(err)
}, P.onFailDecodeAddressString = function (e) {
    this.onFailDecodeAddressStringBase(err)
}, P._createMap = function (e, t, r) {
    t = t ? t : {center: [55.752883, 37.629748], controls: ["zoomControl"], zoom: 9}, this.verbose;
    var i = new ymaps.Map(e, t);
    return r && i.events.add("click", r), i
}, P._moveMarker = function (e, t, r, i, a) {
    var o = [r, i];
    t.geometry.setCoordinates(o, a), e.setCenter(o, a)
}, P._getZoom = function (e) {
    return e.getZoom instanceof Function ? e.getZoom() : 9
}, P._addMarker = function (e, t, r, i, a) {
    var o = new ymaps.Placemark([t, r], {hintContent: i, balloonContent: a});
    return e.geoObjects.add(o), e.setCenter([t, r], e.getZoom()), o
}, P._decodeCoordinates = function (e, t, r) {
    var i = this, a = ymaps.geocode([e, t]);
    a.then(function (e) {
        i.onDecodeCoordinates.apply(i, [e])
    }, function (e) {
        i.onFailDecodeCoordinates.apply(i, [e])
    })
}, P.getCity = function () {
    return this.sCity
}, P.getCountry = function () {
    return this.sCountry
}, P.getNumber = function () {
    return this.sNumber
}, P.getStreet = function () {
    return this.street
}, P.getLat = function () {
    return this.nLat
}, P.getLon = function () {
    return this.nLon
}, P.getAddressString = function () {
    return this.sAddressString
}, P._parseResponse = function (e, t) {
    var r, i, a, o, n, s = this, c = [], l = [];
    for (e.geoObjects.each(function (e) {
        c.push(e.properties.get("name"))
    }), s._setAddressComponents(e.geoObjects, t), i = 0; i < c.length; i++) if (r = c[i], !~r.indexOf("округ")) {
        for (o = 0, a = 0; a < l.length; a++) if (~l[a].indexOf(r)) {
            o = 1;
            break
        }
        o || l.push(r)
    }
    n = e.geoObjects.get(0), n && (s.sAddressString = l.join(", "), n = n.geometry.getCoordinates(), s.nLat = n[0], s.nLon = n[1])
}, P._setAddressComponents = function (e, t) {
    var r, i, a, o, n, s, c, l = this, _ = 0, d = "", p = Flipcat.MapHelper, u = l.subject;
    l.street = l.sNumber = l.sCity = l.sCountry = d, e.each(function (e, a) {
        if (4 != _) {
            if (o || (o = e.getAddressLine(), o = o ? o.trim() : ""), !l.sCity && (r = e.getLocalities(), s = !r || !r.length, l.verbose, isset(r, 0))) {
                for (n = r[0].trim(), i = 0; i < p.citiesSign.length; i++) n = n.replace(p.citiesSign[i], "").trim();
                n && (~n.indexOf(u.req.sCity) || t) && (t ? l.sCity = n : l.sCity = u.req.sCity, _++)
            }
            c = l.sCity || s, !l.sNumber && c && (l.sNumber = e.getPremiseNumber(), l.sNumber = l.sNumber ? l.sNumber.trim() : "", _++), !l.street && c && (l.street = e.getThoroughfare(), l.street = l.street ? l.street.trim() : "", l.street && _++), !l.sCountry && c && (l.sCountry = e.getCountry(), l.sCountry = l.sCountry ? l.sCountry.trim() : "", l.sCountry && _++)
        }
    }), l.sCountry && !l.sCity && o && (a = Flipcat.geo ? Flipcat.geo.maingeoform.getCityIdByName(o) : u.maingeoform.getCityIdByName(o), a ? l.sCity = o : l.sCity = Flipcat.geo.maingeoform.getCity())
}, P._getCoordinatesFromClickEventObject = function (e) {
    return e.get("coords")
}, P._listenMapReady = function () {
    var e, t = this, r = t.subject.geodecoder;
    e = setInterval(function () {
        window.ymaps && ymaps.ready && r && (ymaps.ready(function () {
            r.onConcreteMapServiceLoad(r.YANDEX)
        }), clearInterval(e)), r || (r = t.subject.geodecoder)
    }, 1e3)
};

/* рабочая карта
ymaps.ready(init);

function init() {
    var myPlacemark,
        myMap = new ymaps.Map('map-canvas', {
            center: [55.753994, 37.622093],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        });

    // Слушаем клик на карте.
    myMap.events.add('click', function (e) {
        var coords = e.get('coords');

        // Если метка уже создана – просто передвигаем ее.
        if (myPlacemark) {
            myPlacemark.geometry.setCoordinates(coords);
        }
        // Если нет – создаем.
        else {
            myPlacemark = createPlacemark(coords);
            myMap.geoObjects.add(myPlacemark);
            // Слушаем событие окончания перетаскивания на метке.
            myPlacemark.events.add('dragend', function () {
                getAddress(myPlacemark.geometry.getCoordinates());
            });
        }
        getAddress(coords);
    });

    // Создание метки.
    function createPlacemark(coords) {
        return new ymaps.Placemark(coords, {
            iconCaption: 'поиск...'
        }, {
            preset: 'islands#violetDotIconWithCaption',
            draggable: true
        });
    }

    // Определяем адрес по координатам (обратное геокодирование).
    function getAddress(coords) {
        myPlacemark.properties.set('iconCaption', 'поиск...');
        ymaps.geocode(coords).then(function (res) {
            var firstGeoObject = res.geoObjects.get(0);

            myPlacemark.properties
                .set({
                    // Формируем строку с данными об объекте.
                    iconCaption: [
                        // Название населенного пункта или вышестоящее административно-территориальное образование.
                        firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
                        // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
                        firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
                    ].filter(Boolean).join(', '),
                    // В качестве контента балуна задаем строку с адресом объекта.
                    balloonContent: firstGeoObject.getAddressLine()
                });
        });
    }
}*/





var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
} : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
}, _createClass = function () {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var i = t[r];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    return function (t, r, i) {
        return r && e(t.prototype, r), i && e(t, i), t
    }
}(), CCardPayment = function () {
    function e() {
        _classCallCheck(this, e), this._isCardTokenExists = !1, this.HTML_CARD_DATA_MODAL_ID = "#cardIframeModal", this.HTML_CARD_DATA_IFRAME_ID = "#cardIframe", this.HTML_INPUT_APPROVED_DOMAIN_ID = "#iApprovedOrigin", this.HTML_CARD_IFRAME_WRAP_ID = "#cardIframeWr", this.STORAGE_TS_KEY = "rfi18ts", this._requestPaymentStatusIsSended = !1, this._successMessage = "", this._is3dsPayment = !1, window.addEventListener("message", this.onMessage, !1)
    }

    return _createClass(e, [{
        key: "onMessage", value: function (e) {
            if (Flipcat.CoreCart.isCartPage()) {
                var t = e.origin, r = Flipcat, i = r.oRfi18, a = r.Cart, o = i.getApprovedDomain();
                if (!o || t != o && t != FlipcatWebAppLibrary.HTTP_HOST()) return void !~t.indexOf("yandex.ru");
                if (e = e.data, "string" == typeof e) "success" == e && (i.closeModal(), Flipcat.Messages.success(__("rfi-payment-init-process")), i._isCardTokenExists = !0, Flipcat.CoreCart.sendOrder(), $(a.HTML_SEND_ORDER_BUTTON_ID).prop("disabled", !0)); else if ("object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) && "error" == e.status && ($(a.HTML_SEND_ORDER_BUTTON_ID).prop("disabled", !1), e.message)) {
                    var n = sprintf(__("rfi-unable-get-card-token"), e.message);
                    n += this.isFormContaintsMultiplePaymentVariants ? " " + __("rfi-you-can-choose-other-var") : " " + __("rfi-you-can-try-later"), Flipcat.Messages.fail(n)
                }
            }
        }
    }, {
        key: "isNeedCardToken", value: function () {
            return !(!this.isFormContaintsCardPaymentVariant() || !this.isCardPaymentVariantActive || this._isCardTokenExists || this.isNeedUsePrevCardData())
        }
    }, {
        key: "isCardPayment", value: function () {
            return !(!this.isFormContaintsCardPaymentVariant() || !this.isCardPaymentVariantActive || !this._isCardTokenExists && !this.isNeedUsePrevCardData())
        }
    }, {
        key: "requestCardToken", value: function () {
            var e = $(this.HTML_CARD_DATA_IFRAME_ID), t = e.attr("src"), r = Flipcat, i = void 0, a = 0, o = r.Cart,
                n = Flipcat.AuthMarker;
            return n.getMarker() ? (a = +t.split("#")[1], a = a ? a : 0, a++, t = t.split("#")[0], t = window.FlipcatWebAppLibrary.setGetVar(t, "a", o.getShopId().replace("cart-", ""), !1, ""), t = window.FlipcatWebAppLibrary.setGetVar(t, "owner", $("#owner").val(), !1, ""), t = window.FlipcatWebAppLibrary.setGetVar(t, "b", n.getMarker(), !1, ""), i = e.attr("id"), e.remove(), e = $("<iframe></iframe>"), e.attr("id", i), e.attr("src", t + "#" + a), $(this.HTML_CARD_IFRAME_WRAP_ID).append(e), void this.openModal()) : void FlipcatWebAppLibrary._post({}, this.onSuccessGetAuthMarker, "/c/setmarkerforce", this.onFailGetAuthMarker)
        }
    }, {
        key: "onSuccessGetAuthMarker", value: function () {
            Flipcat.AuthMarker.getMarker() ? (Flipcat.AuthMarker.forceStoreMarker(), Flipcat.oRfi18.requestCardToken()) : Flipcat.Messages.fail(__("Unable_get_stamp") + ". " + __("try-cookies-on"))
        }
    }, {
        key: "onFailGetAuthMarker", value: function () {
            Flipcat.Messages.fail(__("Unable_get_stamp") + ". " + __("try-cookies-on"))
        }
    }, {
        key: "closeModal", value: function () {
            $(this.HTML_CARD_DATA_MODAL_ID).modal("hide")
        }
    }, {
        key: "openModal", value: function () {
            $(this.HTML_CARD_DATA_MODAL_ID).modal("show")
        }
    }, {
        key: "getApprovedDomain", value: function () {
            var e = $(this.HTML_INPUT_APPROVED_DOMAIN_ID);
            return e[0] ? e.val().trim() : ""
        }
    }, {
        key: "runCheckPaymentStatusTimer", value: function () {
            Flipcat.CoreCart.sec5Listeners._checkPaymentStatusListenerId = this.onTimeCheckPaymentStatus
        }
    }, {
        key: "onTimeCheckPaymentStatus", value: function () {
            var e = Flipcat.oRfi18;
            e._requestPaymentStatusIsSended || (e._requestPaymentStatusIsSended = !0, FlipcatWebAppLibrary._get(e.onDataPaymentStatus, "/checkpaymentstatus", function () {
                e._requestPaymentStatusIsSended = !1
            }))
        }
    }, {
        key: "onDataPaymentStatus", value: function (e) {
            var t = Flipcat, r = t.oRfi18, i = void 0;
            r._requestPaymentStatusIsSended = !1, "success" == e.status && e.message && (i = Flipcat.CoreCart.clearShopCart(0, e.sid), i && (t.Messages.success(e.message), FlipcatWebAppLibrary.storage(r.STORAGE_TS_KEY, null), Flipcat.CoreCart.sec5Listeners._checkPaymentStatusListenerId = null))
        }
    }, {
        key: "patchSuccessMessage", value: function (e, t) {
            if (e && "success" == e.status) {
                var r = e;
                (!r.runCheckStatusTimer && "success" == r.transaction_status || "payed" == r.transaction_status) && (t += "<p>" + __("rfi-payment-success") + "</p>"), r.runCheckStatusTimer && (t += "<p>" + r.message + "</p>", FlipcatWebAppLibrary.storage(this.STORAGE_TS_KEY, time()))
            }
            return t
        }
    }, {
        key: "processPaymentInfo", value: function (e, t) {
            this._successMessage = this.patchSuccessMessage(e, t), e && e.is3ds ? this._is3dsPayment = !0 : this._is3dsPayment = !1
        }
    }, {
        key: "getSuccessMessage", value: function () {
            return this._successMessage
        }
    }, {
        key: "is3dsPayment", value: function () {
            return this._is3dsPayment
        }
    }, {
        key: "action3ds", value: function () {
            var e = this;
            if (this._is3dsPayment) {
                var t = (FlipcatWebAppLibrary, Flipcat);
                setTimeout(function () {
                    location.href = $(e.HTML_INPUT_APPROVED_DOMAIN_ID).val() + "/card/3ds/?b=" + t.AuthMarker.getMarker() + "&retryUrl=" + location.href + "&a=" + t.Cart.getShopId().replace("cart-", "") + "&owner=" + $("#owner").val()
                }, 100)
            }
        }
    }, {
        key: "checkPaymentStatus", value: function () {
            var e = FlipcatWebAppLibrary, t = parseInt(e.storage(this.STORAGE_TS_KEY), 10);
            t && time() - t < 300 && this.runCheckPaymentStatusTimer()
        }
    }, {
        key: "setRecurrentCheckboxMode", value: function () {
            var e = this;
            e.isFormContaintsCardPaymentVariant(), e.isCardPaymentVariantActive && +Flipcat.RFI_RECURRENT_ID ? (e.setReccurrentCheckboxVisible(!0), e.recurrentNextMode = !0) : (e.setReccurrentCheckboxVisible(), e.recurrentNextMode = !1)
        }
    }, {
        key: "initRecurrentControls", value: function () {
            +Flipcat.RFI_RECURRENT_ID ? this.setRecurrentCheckboxMode() : this.showRecurrentChb()
        }
    }, {
        key: "patchRequest", value: function (e) {
            var t = this;
            return t.isCardPayment() && (e.rfi18 = 1, e.isCardPayment = 1), t.isNeedRememberMyCardData() && (e.rememberMyCard = 1), t.isNeedUsePrevCardData() && (e.useOldCardData = 1), e
        }
    }, {
        key: "processErrorMessages", value: function (e, t) {
            if (e && e.message) {
                if ((e.recurrentNextError || this.isNeedUsePrevCardData()) && (e.loseCardToken = !0, Flipcat.RFI_RECURRENT_ID = 0, this.initRecurrentControls()), e.loseCardToken) return this.requestCardToken(), Flipcat.Messages.fail(__("rfi-enter-card-data-again")), "return";
                ("array" == typeof t || t instanceof Array) && t.push(e.message)
            }
            return t
        }
    }, {
        key: "onUnsubscribeRecurrentChb", value: function () {
            var e = this;
            1 != $(e.HTML_RECURRENT_OFF_CHB_ID).prop("checked") && (e._lastfri_recurrent_id = Flipcat.RFI_RECURRENT_ID, Flipcat.RFI_RECURRENT_ID = 0, e.initRecurrentControls(), FlipcatWebAppLibrary._post({sid: Flipcat.Cart.getShopId().replace("cart-", "")}, function (t) {
                e.onDataCancelRecurrent(t)
            }, "/rfi18cancelrecurrent", function () {
                e.onFailCancelRecurrent()
            }))
        }
    }, {
        key: "onDataCancelRecurrent", value: function (e) {
            var t = this;
            "success" == e.status && (Flipcat.RFI_RECURRENT_ID = 0, t.initRecurrentControls(), Flipcat.Messages.success(e.message)), "error" == e.status && (this.onFailCancelRecurrent(), e.message && Flipcat.Messages.fail(e.message))
        }
    }, {
        key: "onFailCancelRecurrent", value: function () {
            var e = this;
            Flipcat.RFI_RECURRENT_ID = e._lastfri_recurrent_id, e.initRecurrentControls()
        }
    }]), e
}(), CRfi18 = function (e) {
    function t() {
        return _classCallCheck(this, t), _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
    }

    return _inherits(t, e), _createClass(t, [{
        key: "isRedirectAlgorithm", value: function () {
            return !1
        }
    }]), t
}(CCardPayment), CPaybox = function (e) {
    function t() {
        _classCallCheck(this, t);
        var e = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return e._redirectUrl = "", e
    }

    return _inherits(t, e), _createClass(t, [{
        key: "isNeedCardToken", value: function () {
            return !1
        }
    }, {
        key: "patchRequest", value: function (e) {
            var t = this;
            return t.isCardPayment() && (e.rfi18 = 1, e.isCardPayment = 1), t.isNeedRememberMyCardData() && (e.rememberMyCard = 1), t.isNeedUsePrevCardData() && (e.useOldCardData = 1), e
        }
    }, {
        key: "isCardPayment", value: function () {
            return !(!this.isFormContaintsCardPaymentVariant() || !this.isCardPaymentVariantActive)
        }
    }, {
        key: "processPaymentInfo", value: function (e, t) {
            this._successMessage = this.patchSuccessMessage(e, t), e && "success" == e.status && e.url && (this._redirectUrl = e.url)
        }
    }, {
        key: "patchSuccessMessage", value: function (e, t) {
            if (e && "success" == e.status) {
                var r = e;
                r.url && (t = __("paybox-let-go-input-card-data"), FlipcatWebAppLibrary.storage(this.STORAGE_TS_KEY, time()))
            }
            return t
        }
    }, {
        key: "is3dsPayment", value: function () {
            return !1
        }
    }, {
        key: "processErrorMessages", value: function (e, t) {
            return e && e.message && ((e.recurrentNextError || this.isNeedUsePrevCardData()) && (Flipcat.RFI_RECURRENT_ID = 0, this.initRecurrentControls(), t.push(__("rfi-enter-card-data-again"))), ("array" == typeof t || t instanceof Array) && t.push(e.message)), t
        }
    }, {
        key: "isRedirectAlgorithm", value: function () {
            return !0
        }
    }, {
        key: "actionRedirect", value: function () {
            var e = this;
            return !!this._redirectUrl && (setTimeout(function () {
                location.href = e._redirectUrl
            }, 100), !0)
        }
    }]), t
}(CCardPayment);
window.Flipcat = window.Flipcat || {}, Flipcat.CoreCart = {
    minuteListeners: [], minutes10Listeners: [], sec5Listeners: {}, _prevNumValues: {}, setPhoneInputMask: function () {
        var e, t, r = Flipcat, i = r.Cart.getPhonesInputs(), a = "+7", o = $("#currency").val(), n = " (000) 000-00-00";
        switch (o) {
            case"BYR":
                a = "+375", n = " (00) 00-00-00";
                break;
            case"BYN":
                a = "+375", n = " (00) 000-00-00"
        }
        for (e = 0; e < i.length; e++) i[e], t = {
            onKeyPress: function (e, t, r) {
                e.indexOf(a + " (89") == -1 && e.indexOf(s + " (79") == -1 || $(r).val(a + " (9")
            }
        }, $(i[e]).focus(function () {
            0 == this.value.length && (this.value = a + " (", this.setSelectionRange && this.setSelectionRange(this.value.length, this.value.length))
        }).blur(function () {
            this.value == a + " (" && (this.value = "")
        }).mask(a + n, t);
        r.CoreCart.setNumberInputMask()

    }, setMinimalOrderMessage: function () {
        var e, t, r, i, a = Flipcat.Cart;
        $("#minOrderSum")[0] && (r = +$("#minOrderSum").val(), i = FlipcatWebAppLibrary.storage("price_" + a.getShopId()), t = +i, null !== i && r > 0 && r > t && (e = __("orderSumVeriSmall").replace("{MINORDER}", +$("#minOrderSum").val()), Flipcat.Messages.fail(e)))
    }, setShopIsNotWorkNowMessage: function () {
        var e, t, r = (Flipcat.Cart, "ShopIsNotWorkNowMessageTS"), i = FlipcatWebAppLibrary;
        time() - i.storage(r) <= 600 || $("#shopIsWorkNowMsg")[0] && $("#shopIsWorkNow")[0] && (t = +$("#shopIsWorkNow").val(), 0 == t && (e = $("#shopIsWorkNowMsg").val(), e.trim().length && "1" != e && Flipcat.Messages.fail(e), i.storage(r, time())))
    }, showError: function (e, t) {
        var r, i, a = e, o = [], n = Flipcat.Cart, s = $(n.HTML_SHOP_CURRENCY_INP_ID).val();
        if (!n.hideFailMessage) {
            if (t instanceof Array) for (r = 0; r < t.length; r++) "string" == typeof t[r] && o.push(t[r]); else if (t instanceof Object) for (r in t) "string" == typeof t[r] && o.push(t[r]);
            o.length && (a += "\n" + o.join("\n")), trim(s) && (i = n.Lib.getCurrenciesArray()[s] ? n.Lib.getCurrenciesArray()[s] : s, a = str_replace(s, i, a)), Flipcat.Messages.fail(a), a.length && a != $("#shopIsWorkNowMsg").val() && Flipcat.CoreCart.setShopIsNotWorkNowMessage()
        }
    }, showAlertRequireLocation: function () {
        return 1 == $("#showAlertLocationRequire").val() && (Flipcat.Messages.success(__("You_need_set_location")), !0)
    }, isCartPage: function () {

        var e = window.location.href;
        return !!(~e.indexOf("/cart") || ~e.indexOf("/cartlist") || ~e.indexOf("/orderform"))
    }, setInitialMessages: function () {
        var e = (Flipcat.Cart, Flipcat.CoreCart);
        e.isCartPage() && (e.setMinimalOrderMessage(), e.setShopIsNotWorkNowMessage())
    }, runUnworkMessageTimer: function () {
        var e = Flipcat.CoreCart;
        setInterval(e.onTick, 6e4), e.onTick()
    }, onTick: function () {
        var e = Flipcat.CoreCart, t = $("#shopId").val();
        t && (e.tickRequestSended || (e.tickRequestSended = 1, FlipcatWebAppLibrary._get(e.onTickData, "/getWorktime?sid=" + t, e.onTickReqFail)))
    }, onTickData: function (e) {
        $("#shopIsWorkNow").val(e.v), $("#shopIsWorkNowMsg").val(e.m);
        var t = Flipcat.CoreCart;
        t.tickRequestSended = 0, t.setShopIsNotWorkNowMessage()
    }, onTickReqFail: function () {
        Flipcat.CoreCart.tickRequestSended = 0
    }, onInitStart: function () {
        var e, t = FlipcatWebAppLibrary;
        1 == t._GET("needreload") && (window.locationChanged = 1, e = t.setGetVar(location.href, "needreload", "CMD_UNSET"), location.href = e), Flipcat.CoreCart.setOrderFormField()
    }, onInitEnd: function () {
        Flipcat.OrderFormStorage.onRestoreListeners.push(Flipcat.CoreCart.onRestoreOrderFormData);
        var e = Flipcat.CoreCart;
        e.runMinutesTimer(), e.minutes10Listeners.push(e.requestCartItems)
    }, onRestoreOrderFormData: function () {

        var e = Flipcat,
            t = e.Cart,
            r = (e.CoreCart,
                e.geo.maingeoform),
            i = r.getCity(),
            a = r.getStreet(),
            o = r.getNumber(),
            n = (t.iOrderFormCity,
                t.iOrderFormHome),
            s = t.iOrderFormStreet,
            c = t.iOrderFormAddress,
            l = [];
        a && s && s.val(a),
        o && n && n.val(o),
        c && i && o && !n && a && !s && (l.push(i),
            l.push(a),
            l.push(o),
            l = FlipcatWebAppLibrary.removeEmptyItems(l),
            c.val(l.join(", ")))



    }, setOrderFormField: function () {
        var e = Flipcat.Cart,
            t = $("#ofi7"),
            r = $("#ofi8"),
            i = $("#ofi9"),
            a = $("#ofi1");
        e.iOrderFormCity = t[0] ? t : null,
        e.iOrderFormStreet = r[0] ? r : null,
        e.iOrderFormHome = i[0] ? i : null,
        e.iOrderFormAddress = a[0] ? a : null;

    }, requestCartItems: function () {
        var e = Flipcat, t = e.CoreCart, r = e.Cart, i = "", a = void 0, o = void 0, n = r.Lib, s = i;
        a = t.getStoredCartObject(), o = t.getStoredCartBallsObject(), a = a ? a : {}, o = o ? o : {}, a = array_keys(a), o = array_keys(o), a.length && (i = a.join(",")), o.length && (s = o.join(",")), a = i.split(","), a = array_unique(a), o = s.split(","), o = array_unique(o), (a.length || o.length) && (i = a.join(","), s = o.join(","), n._get(t.onRequestCartItemSuccess, "/checkitemsjson?m=" + i + "&b=" + s, function () {
        }))

    }, onRequestCartItemSuccess: function (e) {
        if ("done" == e[2]) {
            var t = Flipcat, r = t.CoreCart, i = array_fill_keys(e[0], 1), a = array_fill_keys(e[1], 1),
                o = r.getStoredCartBallsObject(), n = r.getStoredCartObject(), s = void 0, c = {}, l = {}, _ = t.Cart;
            for (s in n) s in i && (c[s] = n[s]);
            for (s in o) s in a && (l[s] = o[s]);
            return r.saveCart(c), r.saveBallsCart(l), _.renderCountCart(), e[3] || r.setQuantityEachProductInCart(), JSON.stringify(n) != JSON.stringify(c) || JSON.stringify(o) != JSON.stringify(l)
        }
    }, getStoredCartObject: function () {
        var e = Flipcat.Cart, t = e.Lib.storage(e.getShopId());
        return t = t ? t : {}

    }, getStoredCartBallsObject: function () {
        var e = Flipcat.Cart, t = e.getShopId().replace("cart-", ""), r = e.Lib.storage(e.STORAGE_BALL_CART_PREFIX + t);
        return r = r ? r : {}
    }, saveCart: function (e) {
        var t = Flipcat.Cart;
        t.Lib.storage(t.getShopId(), e)
    }, saveBallsCart: function (e) {
        var t = Flipcat.Cart, r = t.STORAGE_BALL_CART_PREFIX + String(t.getShopId()).replace("cart-", "");
        t.Lib.storage(r, e)
    }, runMinutesTimer: function () {
        var e = Flipcat.CoreCart, t = void 0, r = void 0;
        e._minInterval = setInterval(function () {
            for (t in e.minuteListeners) r = e.minuteListeners[t], r instanceof Function && r()
        }, 6e4), e._sec5Interval = setInterval(function () {
            for (t in e.sec5Listeners) r = e.sec5Listeners[t], r instanceof Function && r()
        }, 5e3), e._min10Interval = setInterval(function () {
            for (t in e.minutes10Listeners) r = e.minutes10Listeners[t], r instanceof Function && r()
        }, 6e5)
    }, setQuantityEachProductInCart: function (e) {
        var t, r, i, a, o, n, s, c, l = Flipcat.Cart, _ = l.Lib, d = $(l.HTML_CART_ITEM_QUANTITY_CSS),
            p = $(l.HTML_CART_ITEM_PRICE_CSS), u = 0, h = "price_" + l.getShopId(), f = 0, g = Flipcat.CoreCart,
            m = _.REQUEST_URI(1), C = [], T = 0;
        if ($(l.HTML_CART_TOTAL_WRAPPER).addClass("hide"), $(l.HTML_CART_TOTAL_BALL_WRAPPER_ID).addClass("hide"), d[0] ? (a = l.getShopId(), t = _.storage(a), i = $(l.HTML_SHOP_CURRENCY_INP_ID).val(), l.Lib.getCurrenciesArray(), i = isset(l.Lib.getCurrenciesArray(), i) ? l.Lib.getCurrenciesArray()[i] : i, t instanceof Object && (d.each(function (e, r) {
            t[$(r).data("id")] && $(r).text(t[$(r).data("id")])
        }), p[0] && (p.each(function (e, i) {
            o = $(i).data("id"), C.push(o), t[o] ? (r = t[$(i).data("id")] * $(i).data("oneitemprice"), u += r, $(i).text(round(r, 2)), l.isBallsProduct(o) && (l.setCurrencyBallInCart($(i).parent().find("span")[1], i), u -= r, f += r, $(l.HTML_CART_TOTAL_ROW_ID).before($(i).parents("article").first()))) : $(i).parents("article").remove()
        }), $("select[data-fieldtype=priceDropDown]").each(function (e, t) {
            e = _.getOptionByText(t, t.value), e && parseFloat($(e).data("price")) && (u += $(e).data("price"), parseInt($(t).data("isshippingprice")) && (T += $(e).data("price")))
        }), s = parseFloat($("#freeShippingSum").val()), c = parseInt($("#freeShippingOn").val(), 10), c && u - T >= s && (u -= T, T = 0), +u > 0 && $(l.HTML_CART_TOTAL_WRAPPER).removeClass("hide"), +f > 0 && $(l.HTML_CART_TOTAL_BALL_WRAPPER_ID).removeClass("hide"), 0 == +u && +f > 0 ? $(l.HTML_CART_TOTAL_BALLS_LABEL_EXT).html(__("messages.Total")) : $(l.HTML_CART_TOTAL_BALLS_LABEL_EXT).html("&nbsp;"), _.storage(h, u), $(l.HTML_CART_TOTAL_SUM_ID).text(round(u, 2)), $(l.HTML_CART_TOTAL_CURRENCY_ID).html(i), $(l.HTML_CART_SHIPPINGPRICE_ID).text(round(T, 2)), $(l.HTML_CART_SHIPPINGPRICE_CURRENCY_ID).html(i), f ? ($(l.HTML_CART_TOTAL_BALL_WRAPPER_ID).removeClass("hide"), $(l.HTML_CART_TOTAL_BALL_SUM_ID).text(round(f, 2)), n = l.getStrBalls(f), $(l.HTML_CART_TOTAL_BALL_CURRENCY_ID).html(n)) : $(l.HTML_CART_TOTAL_BALL_WRAPPER_ID).addClass("hide")))) : m.indexOf("/cart") != -1 && m.indexOf("/cartlist") == -1 && (_.storage(l.getShopId(), {}), g.saveBallsCart({}), l.renderCountCart(), Flipcat.Messages.success(__("attention-has-changes-check-cart"))), C.length && m.indexOf("/cart") != -1 && m.indexOf("/cartlist") == -1) {
            var I = g.onRequestCartItemSuccess([C, C, "done", 1]);
            I && Flipcat.Messages.success(__("attention-has-changes-check-cart"))
        }
        "/orderform" !== _.REQUEST_URI(1) && $(Flipcat.ShopCatNavigator.HTML_PRODUCTS_CONTAINER_ID).removeClass("hide")
    }, sendOrder: function () {
        var e = Flipcat, t = e.Cart, r = t.Lib, i = r.validateRequired(t.HTML_ORDER_FORM_ID), a = {}, o = e.CoreCart;
        if (i && r.validateEmailAndPhone()) {
            if (o.disableOrderButton(), e.oRfi18.isNeedCardToken()) return o.enableOrderButton(), e.oRfi18.requestCardToken();
            t.grabFields(t.HTML_ORDER_FORM_ID, a), a.items = t.grabItems(), a = e.oRfi18.patchRequest(a), Flipcat.AuthMarker.restoreMarker(), $(window).scrollTop(0), r.storage("sh-" + t.STORAGE_ADD_CART_KEY + $("#shopId").val(), r.storage(t.STORAGE_ADD_CART_KEY + $("#shopId").val())), r._post(a, o.onSendOrder, "/cart/order?q=" + t.getShopId().replace("cart-", ""), function () {
                o.enableOrderButton(), r.defaultFail()
            })
        }
        return !1
    }, onSendOrder: function (e) {
        var t = Flipcat, r = t.Cart, i = r.Lib;
        if (t.CoreCart.enableOrderButton(), r.isNeedAuth(e)) return !1;
        if ($("#preloader").hide(), e.success) {
            Flipcat.Userscripts && Flipcat.Userscripts.run && Flipcat.Userscripts.run("onOrderSended", arguments), $(r.HTML_CART_LIST_ID).html(""), $(r.HTML_CART_SUCCESS_ID).toggleClass("hide");
            var a = $("div.navbar").first().height(), o = $("section.breadcrumbs").first().height(),
                n = $("#main-footer").height(), s = a + o + n, c = "";
            if ($(r.HTML_CART_SUCCESS_ID).css("height", i.getViewport().h - s + "px"), window.scrollTo(0, 0), c = e.success, t.oRfi18.processPaymentInfo(e.rfi18PaymentInfo, c), c = t.oRfi18.getSuccessMessage(), t.oRfi18.is3dsPayment()) return void t.oRfi18.action3ds();
            if (i.messageSuccess(c), t.oRfi18.isRedirectAlgorithm() && t.oRfi18.actionRedirect()) return;
            i.storage(r.STORAGE_ADD_CART_KEY + $("#shopId").val(), null), r.hideFailMessage = 1, $(r.HTML_ORDER_FORM_ID).parent().addClass("hide"), $(r.HTML_ORDER_FORM_ID).parent().parent().addClass("hide"), $(r.HTML_ORDER_FORM_TOGGLE_ID).hide(), i.storage(r.getShopId(), {}), Flipcat.AuthMarker.storeMarker(), $("footer").remove(), $(window).scrollTop(0), window.scrollTop = 0, setTimeout(function () {
                window.location.href = $(Flipcat.CoreWebClientAuth.HTML_HISTORY_BTN_ID).attr("href")
            }, 3e3)
        } else if (e.error) {
            if (e.messages = t.oRfi18.processErrorMessages(e.rfi18PaymentInfo, e.messages), "return" == e.messages) return;
            r.showError(e.error, e.messages)
        }
    }, onClickSendOrderButton: function () {
    }, disableOrderButton: function () {
        var e = Flipcat.Cart;
        $(e.HTML_SEND_ORDER_BUTTON_ID).prop("disabled", !0), $(e.HTML_SEND_ORDER_BUTTON_ID).text(__("SendingOrder"))
    }, enableOrderButton: function () {
        var e = Flipcat.Cart;
        $(e.HTML_SEND_ORDER_BUTTON_ID).prop("disabled", !1), $(e.HTML_SEND_ORDER_BUTTON_ID).text(__("SendOrder"))
    }, getNumInputs: function () {


        return $(Flipcat.Cart.HTML_ORDER_FORM_ID).find("input[data-type=nums]")
    }, setNumberInputMask: function () {
        var e = Flipcat.CoreCart, t = e.getNumInputs();
        t.bind("input", function (t) {
            e.onInputInNumberField(t)
        })

    }, onInputInNumberField: function (e) {

        e.preventDefault();
        var t = this, r = t.getNumInputs(), i = void 0, a = void 0, o = void 0, n = void 0;
        for (i = 0; i < r.length; i++) a = $(r[i]), o = a.val(), o = o.replace(/\D/g, ""), n = t._prevNumValues[a.attr("id")], n || (t._prevNumValues[a.attr("id")] = ""), t._prevNumValues[a.attr("id")] = o ? o : n, o = o ? o : n, a.val(o)
    }, clearShopCart: function (e, t) {
        var r, i = Flipcat.Cart;
        return e ? (e.preventDefault(), "IMG" == e.target.tagName && (e.target = e.target.parentNode), r = e.target.getAttribute("data-id"), $(e.target).parents(i.HTML_LIST_CART_ITEM_CSS).first().remove()) : r = t ? t : $("#shopId").val(), !!r && (localStorage.removeItem("cart-" + r), localStorage.removeItem("ball-" + r), i.renderCountInCartList(), !0)
    }
}, window.Flipcat = window.Flipcat || {}, window.Flipcat.OrderFormStorage = {
    HTML_FORM_ID: "#orderForm", onRestoreListeners: [], DEL: "!~0+----+0~!", init: function (e) {
        this.lib = e, this.setListeners(), this.restore()
    }, setListeners: function () {
        var e = this;
        $(this.HTML_FORM_ID + " input,textarea").bind("keydown", function (t) {
            setTimeout(function () {
                e.cacheTextValue($(t.target))
            }, 100)
        }), $(this.HTML_FORM_ID + " input[type=checkbox],input[type=radio],select").bind("change", function (t) {
            e.cacheChangedValue($(t.target))
        })
    }, cacheChangedValue: function (e) {
        var t = window.Flipcat.OrderFormStorage, r = t.data(), i = null;
        "INPUT" == e[0].tagName && "radio" == e[0].type && (i = t.getCheckedRadio(e[0].name)), "INPUT" == e[0].tagName && "checkbox" == e[0].type && (i = e.prop("checked")), "SELECT" == e[0].tagName && (i = e.val()), null !== i && r[t.key(e)] != i && (r[t.key(e)] = i, t.storeData(r))
    }, cacheTextValue: function (e) {


        var t = window.Flipcat.OrderFormStorage, r = t.data(), i = e.val();
        e[0].hasAttribute("data-placeholder") && e[0].getAttribute("data-placeholder") == e.val() && e.hasClass(Flipcat.Placeholders.HTML_PSEUDOPLACEHOLDER_CSS.replace(".", "")) && (i = ""), r && r[t.key(e)] != i && (r[t.key(e)] = i, t.storeData(r))
    }, data: function () {
        var e = this;
        if (!e.memdata) {
            e.memdata = localStorage.getItem(e.getGroupKey());
            try {
                e.memdata = JSON.parse(e.memdata)
            } catch (t) {
            }
        }
        return e.memdata && e.memdata instanceof Object || (e.memdata = {}), e.memdata
    }, getGroupKey: function () {
        var e = FlipcatWebAppLibrary.REQUEST_URI(1) + this.HTML_FORM_ID;
        $.cookie(Flipcat.AuthMarker.COOKIE_NAME);
        return e
    }, key: function (e) {
        var t = e[0].id ? e[0].id : "";
        return t += this.DEL + (e[0].name ? e[0].name : "")
    }, storeData: function (e) {
        /*менял тут вставку-бабавку*/
        /*var t = window.Flipcat.OrderFormStorage, r = t.data(), i = null;
        "INPUT" == e[0].tagName && "radio" == e[0].type && (i = t.getCheckedRadio(e[0].name)), "INPUT" == e[0].tagName && "checkbox" == e[0].type && (i = e.prop("checked")), "SELECT" == e[0].tagName && (i = e.val()), null !== i && r[t.key(e)] != i && (r[t.key(e)] = i, t.storeData(r))*/


        var t = this;
        t.memdata = e, localStorage.setItem(t.getGroupKey(), JSON.stringify(e))
        /*менял тут вставку-бабавку*/

    }, getCheckedRadio: function (e) {
        var t = this, r = !1;
        return $(t.HTML_FORM_ID + " input[name=" + e + "]").each(function (e, t) {
            "radio" == t.type && t.checked && (r = t.value)
        }), r
    }, restore: function () {


        var e, t, r, i, a = this, o = a.data(),
            n = {forgetMyCard: 1, rememberMyCard: 1, dropdownMenu1: 1, mleftSideCitySelect: 1, mleftSideCitySelect: 1},
            s = {BYR: 1, BYN: 1};
        for (e in o) if (i = a.getInputByKey(e)) {
            if (r = o[e], $("#currency")[0] && $("#currency").val().trim() in s && (r = r.replace(/^\+7/, "+375")), "INPUT" == i.tagName) if ("checkbox" == i.type && !i.id in n) $(i).prop("checked", r); else if ("radio" == i.type) if (i instanceof RadioNodeList) for (t = 0; t < i.length; t++) i[t].value != r ? i[t].checked = !1 : i[t].checked = !0; else i.checked = !1; else i.value = r, $(i).hasClass("value-check") && trim(r) && $(i).addClass("value-exists");
            "TEXTAREA" == i.tagName && (i.value = r), "SELECT" == i.tagName && !i.id in n && (FlipcatWebAppLibrary.selectByValue(i, r) || FlipcatWebAppLibrary.selectByText(i, r))
        }
        for (e = 0; e < a.onRestoreListeners.length; e++) a.onRestoreListeners[e] instanceof Function && a.onRestoreListeners[e]();

    }, getInputByKey: function (e) {
        /*вставка города в форму заказа*/
        // console.log(e);
        // console.log($("#dropdownMenu1 option:selected").text());
        this.memdata['ofi7!~0+----+0~!7']=$("#dropdownMenu1 option:selected").text();
       /*вставка города в форму заказа */
        var t, r = this,
            i = e.split(r.DEL),
            a = i[0],
            o = i[1];
        return a ? (t = $("#" + a)[0], t && "radio" == t.type && (t = document.getElementById(r.HTML_FORM_ID.replace("#", "")), t && t[t.name] && (t = t[t.name], t.type = "radio", t.tagName = "INPUT")), t) : o ? (t = document.getElementById(r.HTML_FORM_ID.replace("#", ""))[o], t.type = "radio", t.tagName = "INPUT", t) : void 0
    }
}, WorktimeHelper.prototype._intvalFields = function (e) {
    e && (e.dof_start = intval(e.dof_start), e.dof_end = intval(e.dof_end), e.hour_start = intval(e.hour_start), e.hour_end = intval(e.hour_end), e.min_start = intval(e.min_start), e.min_end = intval(e.min_end))
}, WorktimeHelper.prototype.objToStr = function (e) {
    return this._zN(e.hour_start) + ":" + this._zN(e.min_start) + " - " + this._zN(e.hour_end) + ":" + this._zN(e.min_end)
}, WorktimeHelper.prototype.allowCreateOrderByWorkTime = function (e) {
    var t, r, i, a;
    return e = __php2js_clone_argument__(e), !!this._isCompanyTakeOrdersInUnworkTime(e) || (t = this._getCompanyWorkTimesarray(e), !count(t) || (r = this._getCompanyTimezone(e), r || (r = "0"), i = time(), a = this._isCompanyWorkNow(i, t, r), a || (this._setTimeToAllowOrder(i, r), this._aWorkTimes = []), a))
}, WorktimeHelper.prototype._setTimeToAllowOrder = function (e, t) {
    var r, i, a, o, n, s, c, l, _, d, p, u, h, f;
    e = __php2js_clone_argument__(e), t = __php2js_clone_argument__(t), r = e + this._getOffset(t), i = this._aWorkTimes, a = date("N", r), r = date("H:i:s", r), o = explode(":", r), r = 3600 * intval(o[0]) + 60 * intval(o[1]) + intval(o[2]), n = 2e6, s = 2e6, c = !1;
    for (f in i) if (l = i[f], l.dof_start <= l.dof_end && (_ = 24 * (l.dof_start - 1) * 3600 + 3600 * l.hour_start + 60 * l.min_start, _ < s && (s = _), l.dof_start >= a || l.dof_end >= a)) for (d = l.dof_start; d <= l.dof_end; d++) d < a || (p = d - a, p = p < 0 ? 0 : p, u = 3600 * l.hour_start + 60 * l.min_start + 24 * p * 3600, u > r && u - r < n && (n = u - r, this.hoursDifference = Math.floor(n / 3600), this.minutesDifference = Math.floor(Math.floor(n - 3600 * this.hoursDifference) / 60), this.secondsDifference = n - 3600 * this.hoursDifference - 60 * this.minutesDifference, c = !0));
    c || (h = s + this._getSecondsFromNowToEndOfWeek(r, a), this.hoursDifference = Math.floor(h / 3600), this.minutesDifference = Math.floor(Math.floor(h - 3600 * this.hoursDifference) / 60), this.secondsDifference = h - 3600 * this.hoursDifference - 60 * this.minutesDifference)
}, WorktimeHelper.prototype._getSecondsFromNowToEndOfWeek = function (e, t) {
    var r, i;
    return e = __php2js_clone_argument__(e), t = __php2js_clone_argument__(t), r = 24 * (7 - t) * 3600, i = 86400 - e + r
}, WorktimeHelper.prototype._calculateAcceptTime = function (e, t, r, i) {
    this._intvalFields(t);
    var a, o, n, s, c, l, _;
    return i = "undefined" == String(i) ? 0 : i, i = __php2js_clone_argument__(i), e = __php2js_clone_argument__(e), t = __php2js_clone_argument__(t), r = __php2js_clone_argument__(r), a = !1, 0 == t.hour_end && 0 == t.hour_start && 0 == t.min_start && 0 == t.min_end && (a = !0), o = t.hour_end, t.hour_end = 0 == t.hour_end ? 24 : t.hour_end, a || 24 != t.hour_end || 0 != t.hour_start || 1 != t.dof_start || 7 != t.dof_end || (t.hour_end = 0), a || 24 != t.hour_end || 0 != t.hour_start || (t.hour_end = 0), t.hour_start > t.hour_end ? (t.hour_end = o, !0) : (n = date("Y-m-d H:i:s", r), n = n.replace(/[0-9]{2}\:[0-9]{2}\:[0-9]{2}$/, "00:00:00"), 24 == t.hour_end && "00:00:00" == date("H:i:s", r) && (n = date("Y-m-d H:i:s", r - 86400)), s = strtotime(n), c = s + 3600 * t.hour_start + 60 * t.min_start, l = s + 3600 * t.hour_end + 60 * t.min_end, _ = r >= c && r <= l, t.hour_end = o, _)
}, WorktimeHelper.prototype._getOffset = function (e) {
    var t;
    return e = __php2js_clone_argument__(e), t = 3600 * parseFloat(e)
}, WorktimeHelper.prototype._isCompanyWorkNow = function (e, t, r, i) {
    var a, o, n, s;
    if (i = "undefined" == String(i) ? 0 : i, i = __php2js_clone_argument__(i), e = __php2js_clone_argument__(e), t = __php2js_clone_argument__(t), r = __php2js_clone_argument__(r), 0 == count(t)) return !0;
    a = e + this._getOffset(r), t = this._normalizeCompanyWorkTimes(t), o = date("N", a);
    for (s in t) if (n = t[s], this._intvalFields(n), n.dof_start <= n.dof_end && n.dof_start <= o && n.dof_end >= o && this._calculateAcceptTime(r, n, a, i)) return !0;
    return !1
}, WorktimeHelper.prototype._isCompanyTakeOrdersInUnworkTime = function (e) {
    var t, r;
    return e = __php2js_clone_argument__(e), t = Arr.pluck(e.params, "value", "param"), r = Helper.getDefaultParam("take_orders_after_hours", Arr.get(t, "take_orders_after_hours", "1"))
}, WorktimeHelper.prototype._getCompanyWorkTimesArray = function (e) {
    return e = __php2js_clone_argument__(e), Model_User_Work_Time.find("all", {where: [["user_id", "=", e.id]]})
}, WorktimeHelper.prototype._normalizeCompanyWorkTimes = function (e) {
    var t, r, i;
    for (e = __php2js_clone_argument__(e), e = array_values(e), t = count(e), r = 0; r < t; r++) i = e[r], i.dof_start > i.dof_end && (e = this._appendNormalizeWorkTimesIntervals(e, i));
    return this._aWorkTimes = e, e
}, WorktimeHelper.prototype._appendNormalizeWorkTimesIntervals = function (e, t) {
    var r, i;
    return e = __php2js_clone_argument__(e), t = __php2js_clone_argument__(t), t.dof_start > t.dof_end && (r = new StdClass, r.hour_start = t.hour_start, r.hour_end = t.hour_end, r.min_start = t.min_start, r.min_end = t.min_end, r.dof_start = t.dof_start, r.dof_end = 7, e.push(r), i = new StdClass, i.hour_start = t.hour_start, i.hour_end = t.hour_end, i.min_start = t.min_start, i.min_end = t.min_end, i.dof_start = 1, i.dof_end = t.dof_end, e.push(i)), e
}, WorktimeHelper.prototype._getCompanyTimezone = function (e) {
    var t;
    return e = __php2js_clone_argument__(e), t = Model_User_Param.find("first", {where: [["user_id", "=", e.id], ["param", "=", "timezone"]]}), !!t && t.value
}, WorktimeHelper.prototype.getMessage = function () {
    var e, t, r;
    return e = Helper.pluralize(this.hoursDifference, "", "час", "часа", "часов"), t = Helper.pluralize(this.minutesDifference, "", "минуту", "минуты", "минут"), r = Helper.pluralize(this.secondsDifference, "", "секунду", "секунды", "секунд"), this.hoursDifference > 0 ? sprintf(__("message.order-error-work-time-full"), this.hoursDifference, e, this.minutesDifference, t, this.secondsDifference, r) : 0 == this.hoursDifference && this.minutesDifference > 0 ? sprintf(__("message.order-error-work-time-min-sec"), this.minutesDifference, t, this.secondsDifference, r) : 0 == this.hoursDifference && 0 == this.minutesDifference && this.secondsDifference > 0 ? sprintf(__("message.order-error-work-time-sec"), this.secondsDifference, r) : void 0
}, WorktimeHelper.prototype.setOrderCreatedAtTimezone = function (e) {
    var t, r;
    e = __php2js_clone_argument__(e), t = Model_User.find(e.user_id), t && (r = strtotime(e.created_at) + this._getOffset(this._getCompanyTimezone(t)), e.created_at = date("Y-m-d H:i:s", r), r = strtotime(e.updated_at) + this._getOffset(this._getCompanyTimezone(t)), e.updated_at = date("Y-m-d H:i:s", r))
}, WorktimeHelper.prototype.isCompanyWorkNow = function (e, t, r) {
    return e = __php2js_clone_argument__(e), t = __php2js_clone_argument__(t), r = __php2js_clone_argument__(r), this._isCompanyWorkNow(e, t, r)
}, WorktimeHelper.prototype.normalizeCompanyWorkTimes = function (e) {
    return e = __php2js_clone_argument__(e), this._normalizeCompanyWorkTimes(e)
}, WorktimeHelper.prototype.intervalIsIOverflow = function (e) {
    var t, r, i, a;
    e = __php2js_clone_argument__(e), t = new StdClass, t.isOverflow = !1, t.nCurrentDayIntervalIndex = -1;
    for (r in e) if (i = e[r], a = this._getEndStrIntervalPart(i), "00:00" == a) return t.nCurrentDayIntervalIndex = r, t.isOverflow = !0, t;
    return t
}, WorktimeHelper.prototype.isNextDayStartInHalfnight = function (e, t, r) {
    var i, a, o, n;
    if (r = "undefined" != String(r) && r, r = __php2js_clone_argument__(r), e = __php2js_clone_argument__(e), t = __php2js_clone_argument__(t), i = new StdClass, i.isContinuous = !1, i.nSubArrayN = -1, i.nextDayIndex = t + 1 > 7 ? 1 : t + 1, isset(e, i.nextDayIndex)) for (a in e[i.nextDayIndex]) if (o = e[i.nextDayIndex][a], n = explode("-", o), o = trim(n[0]), "00:00" == o) return i.isContinuous = !0, i.nSubArrayN = a, i;
    return i
}, WorktimeHelper.prototype.needSplitInterval = function (e) {
    var t, r, i;
    return e = __php2js_clone_argument__(e), e = this._getEndStrIntervalPart(e), t = this._parseHhMm(e), r = t.nH, i = t.nM, r > 5 || 5 == r && i > 0
}, WorktimeHelper.prototype.splitInterval = function (e) {
    var t;
    return e = __php2js_clone_argument__(e), t = this._getEndStrIntervalPart(e), "05:00 - " + t
}, WorktimeHelper.prototype.addTimeToInterval = function (e, t) {
    var r, i, a, o, n;
    return e = __php2js_clone_argument__(e), t = __php2js_clone_argument__(t), r = explode("-", e), i = this._getEndStrIntervalPart(t), a = this._parseHhMm(i), (a.nH > 5 || 5 == a.nH && a.nM > 0) && (i = "05:00"), o = trim(r[0]) + " - " + i, preg_match("#^[0-9]{2}:[0-9]{2} - [0-9]{2}:[0-9]{2}" + $ + "#", o, n) ? o : e
}, WorktimeHelper.prototype.customizeWorktimeIntervals = function (e) {
    var t, r, i, a, o, n, s, c, l, _, d, p, u, h, f, g;
    e = __php2js_clone_argument__(e), t = {1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7}, r = [];
    for (g in e) if (i = e[g], a = explode(" - ", i[0]), count(a) > 1) if (a[0] <= a[1]) for (o = a[0]; o <= a[1]; o++) isset(r, t, o) ? in_array(i[1], r[t[o]]) || r[t[o]].push(i[1]) : r[t[o]] = [i[1]]; else {
        for (o = a[0]; o <= 7; o++) isset(r, t, o) ? in_array(i[1], r[t[o]]) || r[t[o]].push(i[1]) : r[t[o]] = [i[1]];
        for (o = 1; o <= a[1]; o++) isset(r, t, o) ? in_array(i[1], r[t[o]]) || r[t[o]].push(i[1]) : r[t[o]] = [i[1]]
    }
    n = new WorktimeHelper;
    for (s in r) c = r[s], l = n.intervalIsIOverflow(c), _ = !1, l.isOverflow && (d = n.isNextDayStartInHalfnight(r, s), d.isContinuous && (p = r[d.nextDayIndex][d.nSubArrayN], n.needSplitInterval(r[d.nextDayIndex][d.nSubArrayN]) ? r[d.nextDayIndex][d.nSubArrayN] = n.splitInterval(r[d.nextDayIndex][d.nSubArrayN]) : unset(r[d.nextDayIndex][d.nSubArrayN]), is_array(r[s]) || (r[s] = []), isset(r, s, l.nCurrentDayIntervalIndex) || (r[s][l.nCurrentDayIntervalIndex] = "00:00 - 00:00"), r[s][l.nCurrentDayIntervalIndex] = n.addTimeToInterval(r[s][l.nCurrentDayIntervalIndex], p)));
    u = [], t = {1: "mon", 2: "tue", 3: "wed", 4: "thu", 5: "fri", 6: "sat", 7: "sun"};
    for (s in r) h = r[s], f = join(", ", h), f && (u[t[s]] = f);
    return r = u
}, WorktimeHelper.prototype._getEndStrIntervalPart = function (e) {
    var t;
    return e = __php2js_clone_argument__(e), e = trim(e), t = explode("-", e), e = isset(t, "1") ? trim(t[1]) : ""
}, WorktimeHelper.prototype._parseHhMm = function (e) {
    var t, r, i, a;
    return e = __php2js_clone_argument__(e), e = trim(e), t = explode(":", e), r = isset(t, "1") ? t[1] : 0, i = intval(trim(t[0])), r = intval(trim(r)), a = new StdClass, a.nH = i, a.nM = r, a.sH = i < 10 ? "0" + i : i, a.sM = r < 10 ? "0" + r : r, a
}, WorktimeHelper.prototype.prepareWorktimmeIntervals = function (e) {
    var t, r, i, a;
    e = __php2js_clone_argument__(e), t = [];
    for (a in e) r = e[a], r.hour_start = 24 == r.hour_start ? "0" : r.hour_start, r.hour_end = 24 == r.hour_end ? "0" : r.hour_end, i = [r.dof_start + " - " + r.dof_end], i.push(this.objToStr(r)), t.push(i);
    return t
}, WorktimeHelper.prototype._zN = function (e) {
    return e = __php2js_clone_argument__(e), e = e < 10 ? "0" + e : e
}, window.Flipcat.CWAC = {
    HISTORY_API: !(!window.history || !window.history.pushState), init: function () {
        var e = Flipcat, t = e.CWAC, r = e.WAC;
        t.f = e, t.w = r, t.isWebCategoriesTreePage() && FlipcatWebAppLibrary._get(t.onCategoriesTreeData, "/getcategoriestreejson", t.onFailLoadCTData)
    }, onCategoriesTreeData: function (e) {
        var t = Flipcat, r = t.CWAC, i = t.WAC;
        try {
            r.tree = e, i.getLinks().click(r.onClick), $(i.HTML_MOBILE_CATEGORY_BTN_ID).click(r.onMobileCategoryBtnClick), r.Lib = FlipcatWebAppLibrary, r.HISTORY_API && $(window).bind("popstate", r.onPopState), r.setDescriptionEllipsis(), i.onLoadPage()
        } catch (a) {
            r.tree = {}
        }
    }, onFailLoadCTData: function () {
    }, onClick: function (e) {
        e.preventDefault();
        var t, r, i, a = Flipcat, o = a.CWAC, n = a.WAC, s = a.ShopList, c = e.currentTarget, l = FlipcatWebAppLibrary;
        if (r = $(c).attr("href").replace(l.HTTP_HOST()), i = r = r.split("?")[0].replace(/^\//, ""), t = o.findByUrl(r)) {
            if (t.children && count(t.children) && n.renderScopes(o.sort(t.children), t.id, o.onClick), o.isSendReq) return;
            t.seo && t.title && (n.setSeoData(t.seo, t.title), o.currentSeo = t.seo),
                r = "none",
            1 == +t.allow_choose_shipping_type && jvars.showAddressInputs && $("#iStreet").val().trim() && $("#iHome").val().trim() && (r = "block"), 1 == +t.allow_choose_shipping_type && "none" == r && jvars.showAddressInputs && (o.needSetRequireLocationMsg = 1), s.setChooseShippingTypeFormContainerDisplay(r), l.lock("#goods-search"), a.WAC.setActiveCss(t.id), o.isSendReq = 1, o.lastUrl = i, l._get(o.onCompaniesData, "/companiesjson?id=" + $(c).data("id"), o.onFailLoadCompaniesData), a.Desktop.isMobile() && o.categoriesIsShowed && setTimeout(function () {
                o.onMobileCategoryBtnClick({
                    preventDefault: function () {
                    }
                })
            }, 1e3)
        }
    }, onCompaniesData: function (e) {
        if (Flipcat.CWAC.isSendReq = 0, e.shops.success && e.shops && e.shops.catalogs) {
            var t, r, i, a, o = Flipcat, n = o.ShopList, s = o.CWAC;
            if (e.shops.catalogs_pickup || e.shops.catalogs_delivery) {
                e.shops.catalogs_pickup ? (t = e.shops.catalogs_pickup, r = e.shops.catalogs, a = e.shops.total_count, i = e.shops.catalogs_pickup_total_count) : (t = e.shops.catalogs, r = e.shops.catalogs_delivery, i = e.shops.total_count, a = e.shops.catalogs_delivery_total_count), $(n.HTML_DELIVERY_OBJECTS_DATA_ID).val(JSON.stringify(r)), $(n.HTML_PICKUP_OBJECTS_DATA_ID).val(JSON.stringify(t)), $(n.HTML_DELIVERY_OBJECTS_COUNT_INP_ID).val(a), $(n.HTML_PICKUP_OBJECTS_COUNT_INP_ID).val(i);
                var c = n.getActiveShippingTypeCb();
                c ? "delivery" == c.id ? n.onSelectShippingTypeDelivery({target: c}) : n.onSelectShippingTypePickup({target: c}) : s.renderShops(n, e.shops)
            } else s.renderShops(n, e.shops);
            if (FlipcatWebAppLibrary.unlock("#goods-search"), s.setBreadCrumbs(), s.needSetRequireLocationMsg && (n.setMessage(0, __("locationWarning")), s.needSetRequireLocationMsg = 0), s.popStateProc ? s.popStateProc = 0 : history.pushState(null, null, "/" + s.lastUrl), s.currentSeo) {
                e.seoData.heading = s.currentSeo.heading ? s.currentSeo.heading : e.seoData.seoHeading, e.seoData.body = s.currentSeo.body ? s.currentSeo.body : e.seoData.seoBody;
                var l = e.seoData.seoIntro ? e.seoData.seoIntro : "";
                e.seoData.intro = s.currentSeo.intro ? s.currentSeo.intro : l, o.WAC.setSeoData(e.seoData), s.needSetSeoDataAfterLoad = !1
            }
        }
    }, renderShops: function (e, t) {
        $(e.HTML_DELIVERY_OBJECTS_DATA_ID).val(JSON.stringify(t.catalogs)), $(e.HTML_DELIVERY_OBJECTS_COUNT_INP_ID).val(t.total_count), e.filterByShippingType(e.HTML_DELIVERY_OBJECTS_DATA_ID, e.HTML_DELIVERY_OBJECTS_COUNT_INP_ID)
    }, onFailLoadCompaniesData: function () {
        Flipcat.CWAC.isSendReq = 0, Lib.unlock("#goods-search")
    }, isWebCategoriesTreePage: function () {
        return jvars && jvars.isAgregateUseWebCategories && jvars.isShopsPage
    }, findByUrl: function (e) {
        var t = Flipcat.CWAC;
        return t.bc = [], t.searchByIdRecursive(Flipcat.CWAC.tree, e)
    }, searchByIdRecursive: function (e, t, r) {
        var i, a;
        if (r = r ? r : 0, e instanceof Array) {
            for (a = 0; a < e.length; a++) if (i = this.searchByIdRecursiveIteration(e[a], t, r), i.success) return i.result
        } else if (e instanceof Object) for (a in e) if (i = this.searchByIdRecursiveIteration(e[a], t, r), i.success) return i.result;
        return null
    }, searchByIdRecursiveIteration: function (e, t, r) {
        var i = {}, a = {};
        return i.success = !0, a.link = "/" + e.hfu_url, a.title = e.title, this.bc[r] = a, e.hfu_url == t ? (i.result = e, this.bc.length > r && this.bc.splice(r + 1), i) : e.children && ($o = this.searchByIdRecursive(e.children, t, ++r), $o) ? (i.result = $o, i) : (i.success = !1, i)
    }, sort: function (e) {
        var t, r = [];
        for (t in e) +t && r.push(e[t]);
        return r.sort(Flipcat.CWAC.sortItreation), r
    }, sortItreation: function (e, t) {
        return +e.sort < +t.sort ? -1 : 1
    }, setBreadCrumbs: function () {
        this.bc.unshift({
            link: "/",
            title: jvars.agregateDisplayName
        }), Flipcat.BreadCrumbs.render(this.bc, function () {
            return !0
        })
    }, onPopState: function () {
        var e, t = Flipcat, r = t.CWAC;
        t.WAC;
        return e = r.Lib.REQUEST_URI(1).split("?")[0].replace(/^\//, ""), e = r.findByUrl(e), e && e.id ? (e = $("#acw" + e.id), r.popStateProc = 1, void r.onClick({
            target: e,
            currentTarget: e,
            preventDefault: function () {
            }
        })) : void window.location.reload()
    }, setDescriptionEllipsis: function () {
        var e = Flipcat, t = e.CWAC, r = e.WAC;
        (t.isWebCategoriesTreePage() || jvars && jvars.isSearchPage) && FlipcatWebAppLibrary.setEllipsis(r.HTML_PRODUCT_NAME_BLOCK_CSS)
    }, onMobileCategoryBtnClick: function (e) {
        e.preventDefault();
        var t = Flipcat.CWAC, r = t.w, i = t.f, a = $(i.ShopList.HTML_SEARCH_WIH_GOODS_TAB_CONTENT_ID),
            o = $(r.HTML_TREE_CONTAINER_ID);
        t.categoriesIsShowed ? ($(r.HTML_MOBILE_CATEGORY_BTN_ID).text(__("M_Btn_categories_text")), a[0].style = "display :block !important", o[0].style = "display :none !important", t.categoriesIsShowed = 0) : ($(r.HTML_MOBILE_CATEGORY_BTN_ID).text(__("M_Btn_categories_hide_text")), a[0].style = "display :none !important", o[0].style = "display :block !important", t.categoriesIsShowed = 1)
    }
}, window.Flipcat = window.Flipcat || {}, Flipcat.CShopList = {
    HISTORY_API: !(!window.history || !window.history.pushState),
    getEmptyResultMsg: function () {
        var e, t = this;
        return e = t.HISTORY_API ? '<a href="#" id="srchBackLink">' + __("messages._go_back_") + "</a>" : '<a href="/" >' + __("messages._go_main_") + "</a>", __("messages.Empty_ag_search_result_msg").replace("{back_link}", e)
    },
    onSrchBackLinkClick: function (e) {
        e.preventDefault();
        var t = Flipcat.CShopList;
        t.HISTORY_API ? history.go(-1) : window.location.href = "/"
    }
}, function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function (e) {
    function t(e) {
        return s.raw ? e : encodeURIComponent(e)
    }

    function r(e) {
        return s.raw ? e : decodeURIComponent(e)
    }

    function i(e) {
        return t(s.json ? JSON.stringify(e) : String(e))
    }

    function a(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(n, " ")), s.json ? JSON.parse(e) : e
        } catch (t) {
        }
    }

    function o(t, r) {
        var i = s.raw ? t : a(t);
        return e.isFunction(r) ? r(i) : i
    }

    var n = /\+/g, s = e.cookie = function (a, n, c) {
        if (void 0 !== n && !e.isFunction(n)) {
            if (c = e.extend({}, s.defaults, c), "number" == typeof c.expires) {
                var l = c.expires, _ = c.expires = new Date;
                _.setTime(+_ + 864e5 * l)
            }
            return document.cookie = [t(a), "=", i(n), c.expires ? "; expires=" + c.expires.toUTCString() : "", c.path ? "; path=" + c.path : "", c.domain ? "; domain=" + c.domain : "", c.secure ? "; secure" : ""].join("")
        }
        for (var d = a ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], u = 0, h = p.length; u < h; u++) {
            var f = p[u].split("="), g = r(f.shift()), m = f.join("=");
            if (a && a === g) {
                d = o(m, n);
                break
            }
            a || void 0 === (m = o(m)) || (d[g] = m)
        }
        return d
    };
    s.defaults = {}, e.removeCookie = function (t, r) {
        return void 0 !== e.cookie(t) && (e.cookie(t, "", e.extend({}, r, {expires: -1})), !e.cookie(t))
    }
}), window.Flipcat = window.Flipcat ? window.Flipcat : {};
var Messages = Flipcat.Messages = {
    HTML_INFO_MODAL_ID: "#infoModal",
    HTML_ERROR_MODAL_ID: "#errorModal",
    success: function (e) {
        e instanceof Object || ($(Messages.HTML_INFO_MODAL_ID + " .text-content").first().html(this.wrap(e)), $(Messages.HTML_INFO_MODAL_ID).modal("show"))
    },
    fail: function (e) {
        e instanceof Object || ($(Messages.HTML_ERROR_MODAL_ID + " .text-content").first().html(this.wrap(e)), $(Messages.HTML_ERROR_MODAL_ID).modal("show"))
    },
    wrap: function (e) {
        var t = String(e).split("\n");
        return t.length > 1 && (e = t.join("<br>")), e
    }
};






Flipcat.MainGeoForm = function (e) {
    this.subject = e,
        this._interfaces = {IMainGeoForm: 1},
        this.VIEW_MODE_READONLY = 1,
        this.VIEW_MODE_READONLY_USE_CITYLEVEL = 4,
        this.VIEW_MODE_SELECT_AND_ADDRESS = 2,
        this.VIEW_MODE_SELECT_WITHOUT_ADDRESS = 3,
        this.HTML_STREET_INPUT_ID = "#iStreet",
        this.HTML_HOME_INPUT_ID = "#iHome",
        this.HTML_FIND_BUTTON_ID = "#findLocation",
        this.HTML_FORM_ID = "#setLocationForm",
        this._initSelectWithoutAddressMode(),
        this._initSelectAndAddressMode(), Flipcat.MainGeoForm.superclass.__construct.call(this, e)
}, extend(Flipcat.CMainGeoForm, Flipcat.MainGeoForm);
var P = Flipcat.CMainGeoForm.prototype;
P.setCity = function (e, t) {
    var r = this, i = r._getFormViewMode();
    switch (i) {
        case r.VIEW_MODE_READONLY:
        case r.VIEW_MODE_READONLY_USE_CITYLEVEL:
            return void (parseInt(t) && $("#iCategoryId").val(t));
        case r.VIEW_MODE_SELECT_AND_ADDRESS:

            //return r._setCityForSelectAndAddressMode(e, t);
        /*вставка города*/
            return this.Lib.getSelectedText($("#dropdownMenu1")[0]);
        /*вставка города*/

        case r.VIEW_MODE_SELECT_WITHOUT_ADDRESS:
            return r._setCityForSelectWithoutAddressMode(e, t)
    }
}, P.getCity = function () {

    var e = this, t = e._getFormViewMode();
    switch (t) {
        case e.VIEW_MODE_READONLY:
        case e.VIEW_MODE_READONLY_USE_CITYLEVEL:
            return $("#iCity").val();
        case e.VIEW_MODE_SELECT_AND_ADDRESS:
            return e.Lib.getSelectedText($("#dropdownMenu1")[0]);
        case e.VIEW_MODE_SELECT_WITHOUT_ADDRESS:
            return $("#dropdownMenu1").text().trim()
    }


}, P.getCitiesList = function () {
    var e = this, t = e._getFormViewMode();
    switch (t) {
        case e.VIEW_MODE_READONLY:
            return e._getCitiesListForReadonlyMode();
        case e.VIEW_MODE_READONLY_USE_CITYLEVEL:
            return e._getCitiesListForReadonlyModeWithCitylevel();
        case e.VIEW_MODE_SELECT_AND_ADDRESS:
            return e._getCitiesListForSelectAndAddressMode();
        case e.VIEW_MODE_SELECT_WITHOUT_ADDRESS:
            return e._getCitiesListForSelectWithoutAddressMode()
    }
    return []
}, P.getCityIdByName = function (e) {

    var t = this, r = t._getFormViewMode();

    switch (r) {
        case t.VIEW_MODE_READONLY:
            return t._getCityIdByNameForReadonlyMode(e);
        case t.VIEW_MODE_READONLY_USE_CITYLEVEL:
            return t._getCityIdByName(e, "#dropdownMenu1");
        case t.VIEW_MODE_SELECT_AND_ADDRESS:
            return t._getCityIdByNameForSelectAndAddressMode(e);
        case t.VIEW_MODE_SELECT_WITHOUT_ADDRESS:
            return t._getCityIdByNameForSelectWithoutAddressMode(e)
    }
    return []
}, P._getFormViewMode = function () {
    var e = this;
    return $("#dropDownWrapper")[0] && $("#dropDownVariants")[0] && $("#dropdownMenu1")[0] ? e.VIEW_MODE_SELECT_WITHOUT_ADDRESS : $("#iCity")[0] && $("#iCity").prop("readonly") && "text" == $("#iCity")[0].type ? $("#dropdownMenu1")[0] ? e.VIEW_MODE_READONLY_USE_CITYLEVEL : e.VIEW_MODE_READONLY : $("#dropdownMenu1")[0] && "SELECT" == $("#dropdownMenu1")[0].tagName ? e.VIEW_MODE_SELECT_AND_ADDRESS : void 0
}, P._getCitiesListForReadonlyMode = function () {
    var e = $("#iCity").val(), t = parseInt($("#iCategoryId").val());
    return [[t, e]]
}, P._getCitiesListForSelectAndAddressMode = function () {
    return this._getCitiesList("#mleftSideCitySelect")
}, P._getCitiesListForSelectWithoutAddressMode = function () {
    return this._getCitiesListForSelectAndAddressMode()
}, P._getCityIdByNameForSelectAndAddressMode = function (e) {
    return this._getCityIdByName(e, "#mleftSideCitySelect")
}, P._getCityIdByNameForReadonlyMode = function (e) {

    var t = parseInt($("#iCategoryId").val());
    return t = t ? t : 0
}, P._getCityIdByNameForSelectWithoutAddressMode = function (e) {
    return this._getCityIdByNameForSelectAndAddressMode(e)
}, P._setCityForSelectAndAddressMode = function (e, t) {

    this._setCity(e, t, "#dropdownMenu1")
}, P._setCityForSelectWithoutAddressMode = function (e, t) {
    var r, t, i = $("#mleftSideCitySelect")[0], a = $("#dropDownVariants"), o = this,
        n = $("#dropdownMenu1").text().trim();
    for ($("#dropdownMenu1").text(e), a.html(""), t = 0; t < i.options.length; t++) r = i.options[t], r.text.trim() != n && a.append($('<li class="sort-block__dropdown-item" data-value="' + r.value.trim() + '">' + r.text.trim() + "</li>"));
    o._setSelectWithoutAddressModeItemsListeners()
}, P._setSelectWithoutAddressModeItemsListeners = function () {
    var e, t, r, i = this, a = $("#dropDownVariants li");
    if (a && a.length) for (e = 0; e < a.length; e++) $(a[e]).click(function (e) {
        e.preventDefault(), $("#dropDownVariants").css("display", "none"), t = $(e.target).text().trim(), r = parseInt($(e.target).data("value")), r = r ? r : 0, i._setCityForSelectWithoutAddressMode(t, r), i.subject.setState("", i.subject.sCountry, i.getCity(), "", ""), i.subject.onCityInListChange(t, r)
    })
}, P._initSelectWithoutAddressMode = function () {
    var e = this, t = e._getFormViewMode();
    t == e.VIEW_MODE_SELECT_WITHOUT_ADDRESS && (e._setSelectWithoutAddressModeItemsListeners(), e._setSelectWithoutAddressModeLabelListeners())
}, P._setSelectWithoutAddressModeLabelListeners = function () {
    $("#dropdownMenu1").click(function (e) {
        e.preventDefault(), e.stopPropagation(), "block" != $("#dropDownVariants").css("display") ? $("#dropDownVariants").css("display", "block") : $("#dropDownVariants").css("display", "none")
    })
}, P._initSelectAndAddressMode = function () {
    var e, t, r, i, a = this, o = a._getFormViewMode();
    o == a.VIEW_MODE_SELECT_AND_ADDRESS && (e = $("#dropdownMenu1"), e.bind("change", function (e) {
        r = e.target.value, t = a.Lib.getSelectedText(e.target), a.setStreet(""), a.setNumber(""), i = a.subject, i.setState("", i.sCountry, a.getCity(), "", ""), i.notify(), i.onCityInListChange(t, r)
    }))
}, P._getCitiesListForReadonlyModeWithCitylevel = function () {
    return this._getCitiesList("#dropdownMenu1")
}, Flipcat.LeftMenuCitySwitcher = function (e) {
    this.subject = e, this._interfaces = {IMainGeoForm: 1}, this.HTML_CITIES_LIST_ID = "#mleftSideCitySelect", this._initSelect(), Flipcat.LeftMenuCitySwitcher.superclass.__construct.call(this, e)
}, extend(Flipcat.CMainGeoForm, Flipcat.LeftMenuCitySwitcher);
var P = Flipcat.LeftMenuCitySwitcher.prototype;
P.initSubmitAction = function (e, t) {
}, P._initSelect = function () {
    var e, t, r = this;
    $(r.HTML_CITIES_LIST_ID).bind("change", function (i) {
        t = i.target.value, e = r.Lib.getSelectedText(i.target), r.subject.onCityInListChange(e, t)
    })
}, Flipcat.FirstRunPopupCitySwitcher = function (e) {
    this.verbose = !1, this.subject = e, this._interfaces = {IMainGeoForm: 1}, this.HTML_CITIES_LIST_ID = "#mCityId", this.HTML_POPUP_CITY_SELECT_MODAL_ID = "#cityModal", Flipcat.Desktop.isMobile() && $(this.HTML_POPUP_CITY_SELECT_MODAL_ID).modal("show"), this.HTML_FORM_ID = "#mSelectCityForm", this.HTML_FORM_BTN_ID = "#mConfirmCity", this.initForm(), this._initSelect(), Flipcat.FirstRunPopupCitySwitcher.superclass.__construct.call(this, e)
}, extend(Flipcat.CMainGeoForm, Flipcat.FirstRunPopupCitySwitcher);
var P = Flipcat.FirstRunPopupCitySwitcher.prototype;
P.initForm = function () {
    var e, t = this, r = $(t.HTML_CITIES_LIST_ID)[0];
    $(t.HTML_FORM_BTN_ID).click(function (i) {
        e = FlipcatWebAppLibrary.getSelectedText(r), e && (t.subject.sCity = e, isset(t.subject, "geodecoder", "_geodecoder", "sCity") && (t.subject.geodecoder._geodecoder.sCity = e)), $(t.HTML_FORM_ID).submit()
    })
}, P._initSelect = function () {
    var e, t, r = this;
    $(r.HTML_CITIES_LIST_ID).bind("change", function (i) {
        t = i.target.value, e = r.Lib.getSelectedText(i.target), r.subject.setState("", r.subject.sCountry, e, r.getStreet(), r.getNumber())
    })
}, Flipcat.MobileGeoForm = function (e) {
    this.subject = e,
        this._interfaces = {IMainGeoForm: 1},
        this.HTML_CITIES_LIST_ID = "#mLocationFormCitySelect",
        this.HTML_POPUP_CITY_SELECT_MODAL_ID = "#cityModal",
    Flipcat.Desktop.isMobile() && $(this.HTML_POPUP_CITY_SELECT_MODAL_ID).modal("show"),
        this.HTML_FORM_ID = "#geo",
        this.HTML_FORM_BTN_ID = "#mLocationFormCitySelect",
        this.HTML_STREET_INPUT_ID = "#mIStreet",
        this.HTML_HOME_INPUT_ID = "#mIHome",
        this.HTML_LEFT_SELECT_ID = "#mleftSideCitySelect",
        this._initSelect(),
        this.setupDropDowns(),
        Flipcat.MobileGeoForm.superclass.__construct.call(this, e)
}, extend(Flipcat.CMainGeoForm, Flipcat.MobileGeoForm);
var P = Flipcat.MobileGeoForm.prototype;
P._initSelect = function () {
    var e, t, r = this;
    $(r.HTML_CITIES_LIST_ID).bind("change", function (i) {
        t = i.target.value, e = r.Lib.getSelectedText(i.target), r.setStreet(""), r.setNumber(""), r.subject.setState("", r.subject.sCountry, e, r.getStreet(), r.getNumber())
    })
}, P.setupDropDowns = function () {
    var e = this, t = $(e.HTML_CITIES_LIST_ID)[0], r = $(e.HTML_LEFT_SELECT_ID)[0];
    t = t && t.options ? e._selectSelectedItem(t.options) : t, r = r && r.options ? e._selectSelectedItem(r.options) : r
}, P._selectSelectedItem = function (e) {
    for (var t = 0; t < e.length; t++) if (e[t].hasAttribute("selected")) {
        e[t].selected = !0;
        break
    }
}, P.getCity = function (e, t) {
    var r = this, i = $(r.HTML_CITIES_LIST_ID)[0];
    return i ? r.Lib.getSelectedText(i) : ""
}, P.update = function () {
    "block" != $("#geolocation-mobile-modal").css("display") && this._update()
}, Flipcat = window.Flipcat || {}, Flipcat.MapModalDialog = function (e) {
    this.HTML_SEARCH_ON_MAP_BTN_ID = "#searchOnMapBtn",
    this.HTML_BTN_CONFIRM_ID = "#addressFormConfirm",
        this.HTML_MAP_CONTAINER_ID_RAW = "map-canvas",
        this.HTML_MAP_CONTAINER_ID = "#" + this.HTML_MAP_CONTAINER_ID_RAW,
        this.iAddress = $("#addressTitle"),
        this.iAddress = this.iAddress[0] ? this.iAddress : null,
        this._isGuiFound = !!this.iAddress,
        Flipcat.MapModalDialog.superclass.__construct.call(this, e),
        this.verbose = !1
}, extend(Flipcat.CMapModalDialog, Flipcat.MapModalDialog);
var P = Flipcat.MapModalDialog.prototype;
P.open = function (e) {
    var t = this;
    t.patchB4Modal(e), t.actualizeMap()
}, P.close = function (e) {
    e.preventDefault();
    try {
        $("#map-modal").modal("hide")
    } catch (t) {
        $("#map-modal").removeClass("show").addClass("hide"), $(".modal-backdrop.fade.show").removeClass("show").addClass("hide"), $(document.getElementsByTagName("body")[0]).removeClass("modal-open")
    }
}, P.patchB4Modal = function (e) {
    if (e) try {
        $("#map-modal").modal("show")
    } catch (t) {
        $("#map-modal").addClass("show").removeClass("hide"), $(".modal-backdrop.fade.hide").addClass("show").removeClass("hide"), $(document.getElementsByTagName("body")[0]).addClass("modal-open")
    } else $("#map-modal").addClass("show").removeClass("hide"), $(".modal-backdrop.fade.hide").addClass("show").removeClass("hide"), $(document.getElementsByTagName("body")[0]).addClass("modal-open")
}, P.getAddressString = function () {
    var e = this;
    return e.isGuiFound() && (e.iAddress.val() || $("#dropdownMenu1 option:selected" ).text())
}, P.isGuiFound = function () {
    return this._isGuiFound
}, P.getSelectOnMapBtnId = function () {
    return "#selectOnMap"
}, P.getSelectOnMapMobileBtnId = function () {
    return "#mSelectOnMap"
}, P.getCloseBtnSelector = function () {
    return ".geolocation-form__modal-button_close"
}, P.getOrderFormAdddressInputCss = function () {
    return "#ofi1.jShowMapPopup"
}, window.Flipcat = window.Flipcat || {}, Flipcat.Smartbanner = {
    expires: 7,
    cookieName: "sme",
    HTML_SMARTBANNER_CLOSE_BTN_ID: "#smatrc",
    HTML_SMARTBANNER_ID: "#smbnr",
    HTML_SMALL_SMARTBANNER_ID: "#smallSmartBanner",
    HTML_BIG_SMARTBANNER_ID: "#smrtbig",
    HTML_BIG_SMARTBANNER_CLOSE_BTN_ID: "#bCont",
    HTML_HEADER_CHOCK_ID: "#headerChock",
    HTML_HEADER_CHOCK_CSS: ".header-chock",
    HTML_MAIN_HEADER_ID: "#mainHeader",
    HTML_MOBILE_LINK_INP_ID: "#mobileMenuAppLink",
    HTML_PRELAND_MAIN_HEADER_ID: "#prelandMainHeader",
    HTML_BIG_SMARTBANNER_CLOSE_BTN_WRAPPER_ID: "#bContWr",
    HTML_BIG_SMARTBANNER_CLOSE_BTN_LINK_ID: "#bContLink",
    init: function (e) {
        var t = this, r = window.FlipcatWebAppLibrary;
        if (1 == $(t.HTML_MOBILE_LINK_INP_ID).val()) {
            t.setListeners(), $.cookie(t.cookieName) && t.onClose({}, !1), $.cookie("bsm") ? 0 : $.cookie("bsm", 1, {
                expires: this.expires,
                path: "/"
            });
            var i = "bsmShowedTs", a = parseInt(r.storage(i), 10);
            a && (a = (new Date).getTime() - a, a = Math.round(a / 1e3), a = Math.round(a / 86400), a > 7 && localStorage.removeItem(i)), (r.storage("bsmShowed") || screen.width >= 940 && screen.height >= 600) && this.hideBigSmartbanner()
        }
    },
    setListeners: function () {
        var e = Flipcat.Smartbanner;
        $(e.HTML_SMARTBANNER_CLOSE_BTN_ID).click(e.onClose), $(e.HTML_BIG_SMARTBANNER_CLOSE_BTN_ID).click(e.hideBigSmartbanner), $(e.HTML_BIG_SMARTBANNER_CLOSE_BTN_LINK_ID).click(e.hideBigSmartbanner), $(e.HTML_BIG_SMARTBANNER_CLOSE_BTN_WRAPPER_ID).click(e.hideBigSmartbanner), $(e.HTML_SMARTBANNER_CLOSE_BTN_ID).bind("touchstart", e.onClose), $(window).bind("scroll", e.onScroll)
    },
    hideBigSmartbanner: function () {
        var e = Flipcat.Smartbanner;
        $(e.HTML_BIG_SMARTBANNER_ID).css("display", "none"), $(e.HTML_SMARTBANNER_ID).css("height", "auto"), $.cookie(e.cookieName) ? $(e.HTML_SMARTBANNER_ID).css("display", "none") : $(e.HTML_SMALL_SMARTBANNER_ID).css("display", "block")
    },
    onScroll: function (e) {
        $(window).scrollTop() > 50 && Flipcat.Smartbanner.hideBigSmartbanner()
    },
    onClose: function (e, t) {
        var r = Flipcat.Smartbanner;
        $(r.HTML_SMARTBANNER_ID).remove(), e.preventDefault ? e.preventDefault() : 1, t || $.cookie(r.cookieName, 1, {
            expires: r.expires,
            path: "/"
        }), $(r.HTML_HEADER_CHOCK_ID).height(0), $(r.HTML_HEADER_CHOCK_ID)[0] ? $(r.HTML_HEADER_CHOCK_ID)[0].style.marginBottom = null : 0, $(r.HTML_MAIN_HEADER_ID).css("top", "0px"), $(r.HTML_PRELAND_MAIN_HEADER_ID).css("margin-top", "auto"), $(r.HTML_SMARTBANNER_ID).addClass("hide"), $(".pr-steps").first().css("padding-top", "30px")
    }
}, window.Flipcat = window.Flipcat || {};
var WebClientAuth = {
    showUserNavbar: function (e) {
        var t = Flipcat.CoreWebClientAuth;
        $(t.HTML_LOGIN_MODAL_ID).modal("hide"), $(t.HTML_SHOW_POPUP_BTN_ID).parent().addClass("hide"), $(t.HTML_SIGNUP_BTN_ID).parent().addClass("hide"), $(t.HTML_LOGOUT_BTN_ID).parent().removeClass("hide"), $(t.HTML_HISTORY_BTN_ID).parent().removeClass("hide"), $(t.HTML_PROFILE_BTN_ID).parent().removeClass("hide"), +e.balls ? $(t.HTML_CURRENT_BALLS_VIEW_ID).text(e.balls) : $(t.HTML_CURRENT_BALLS_VIEW_ID).css("display", "none")
    }
};
window.Flipcat.WebClientAuth = WebClientAuth, window.Flipcat = window.Flipcat || {}, Flipcat.User = {
    HTML_INPUT_CHOOSE_SHIPPING_TYPE_DELIVERY_ID: "#delivery",
    HTML_INPUT_CHOOSE_SHIPPING_TYPE_PICKUP_ID: "#pickup",
    HTML_INPUT_MOBILE_CHOOSE_SHIPPING_TYPE_DELIVERY_ID: "#mDelivery",
    HTML_INPUT_MOBILE_CHOOSE_SHIPPING_TYPE_PICKUP_ID: "#mPickup",
    init: function (e) {
        var t = Flipcat.User;
        t.lib = e, t.setListeners()
    },
    setListeners: function () {
        var e = this;
        e.setChooseShippingTypeListeners(), e.setBstrp3Compatible()
    },
    setChooseShippingTypeListeners: function () {
        var e = this;
        $(e.HTML_INPUT_CHOOSE_SHIPPING_TYPE_DELIVERY_ID).bind("change", e.onChooseShippingType), $(e.HTML_INPUT_CHOOSE_SHIPPING_TYPE_PICKUP_ID).bind("change", e.onChooseShippingType), $(e.HTML_INPUT_MOBILE_CHOOSE_SHIPPING_TYPE_DELIVERY_ID).bind("change", e.onChooseShippingType), $(e.HTML_INPUT_MOBILE_CHOOSE_SHIPPING_TYPE_PICKUP_ID).bind("change", e.onChooseShippingType)
    },
    onChooseShippingType: function (e) {
        var t = Flipcat.User, r = e.target.id;
        r = r.replace("mD", "d").replace("mP", "p"), t.lib._post({type: r}, t.onSetShippingTypeResponse, "/profile/setshippingtype", t.onFailSetShippingTypeResponse)
    },
    onFailSetShippingTypeResponse: function () {
        Flipcat.User.lib.messageFail(__("Unierror"))
    },
    onSetShippingTypeResponse: function (e) {
        if (e.error) return void (e.message ? Flipcat.User.lib.messageFail(e.message) : Flipcat.User.lib.messageFail(__("Unierror")))
    },
    setBstrp3Compatible: function () {
        var e, t = "active";
        setTimeout(function () {
            $(".tab-pane").removeClass(t), $(".tab-pane").addClass("hide"), $($("#profileSection .tab-pane")[3]).removeClass("hide").addClass("active show")
        }, 100), $("#profileSection .nav-tabs a, #profileSection .nav-tabs li").click(function (r) {
            return e = this, $(e).hasClass("profile-user-signed") || "SPAN" == e.tagName ? (r.preventDefault(), !1) : ($("#profileSection .nav-tabs li").removeClass(t), setTimeout(function () {
                var r = e;
                "A" == r.tagName ? $(r).parent().addClass(t) : "LI" == r.tagName && $(r).addClass(t)
            }, 100), "A" == this.tagName ? $(r.target).parent().addClass(t) : "LI" == this.tagName && $(this).addClass(t), t += " show", $(".tab-pane").removeClass(t), $(".tab-pane").addClass("hide"), void $($(r.target).attr("href")).addClass(t).removeClass("hide"))
        })
    }
}, window.Flipcat = window.Flipcat || {};
var Favorites = {
    HTML_FAVORITES_ID: "#favorites",
    HTML_ADD_SHOP_TO_FAV_CSS: ".add-shop-to-fav",
    HTML_REMOVE_SHOP_TO_FAV_CSS: ".rem",
    HTML_MAIN_PAGE_FAV_SHOPS_CONTAINER_ID: "#favoritesShopMainplace",
    HTML_MAIN_PAGE_FAV_SHOP_ITEM_CSS: ".favorite_shop_item",
    HTML_FAVORITE_PAGE_SHOP_ITEM_CSS: ".flipcat-item",
    HTML_FAVORITE_PAGE_EMPTY_LIST_MSG_ID: "#favoritesIsEmpty",
    HTML_FAVORITE_SHOP_IN_TOP_BLOCK_CSS: ".add-to-favorite-top-shop",
    HTML_AGREGATE_CATEGORY_INP_ID: "#agregateCategoryId",
    HTML_ADD_SHOP_TO_FAV_INPUT_CSS: ".jshopaddfavbtn",
    HTML_ADD_SHOP_TO_FAV_LABEL_CSS: ".jshopaddfavlabel",
    init: function (e) {
        this.lib = e, this.setListeners(), this.fillMainPageFavShopsLine()
    },
    setListeners: function () {
        this.setAddShopLinks(), this.setRemoveShopLinks()
    },
    setRemoveShopLinks: function () {
        var e = this;
        $(this.HTML_REMOVE_SHOP_TO_FAV_CSS).bind("click", e.onRemoveShopFromFavClick)
    },
    setAddShopLinks: function () {
        var e = this;
        $(e.HTML_ADD_SHOP_TO_FAV_CSS).bind("click", e.onAddShopToFavClick)
    },
    onAddShopToFavClick: function () {
        var e = Flipcat.Favorites, t = e.lib._post;
        return Flipcat.AuthMarker.restoreMarker(), t({
            id: $(this).data("id"),
            agregateCategoryId: $(e.HTML_AGREGATE_CATEGORY_INP_ID).val()
        }, e.onAddShop, "/c/aa", e.onFailAddShop), !1
    },
    onRemoveShopFromFavClick: function () {
        var e = Flipcat.Favorites, t = e.lib._post;
        return Flipcat.AuthMarker.restoreMarker(), t({id: $(this).data("id")}, e.onRemShop, "/c/ab", e.onFailAddShop), !1
    },
    onRemShop: function (e) {
        if (localStorage) if (localStorage.getItem(Flipcat.AuthMarker.STORAGE_MARKER_KEY)) {
            var t = localStorage.getItem(Flipcat.AuthMarker.STORAGE_MARKER_KEY);
            $.cookie(Flipcat.AuthMarker.COOKIE_NAME, t, {expires: Flipcat.AuthMarker.expires, path: "/"})
        } else localStorage.setItem(Flipcat.AuthMarker.STORAGE_MARKER_KEY, $.cookie("am"));
        Flipcat.Favorites.onSuccess(e), Flipcat.Favorites.removeShopOnFavoritesPage(e)
    },
    onAddShop: function (e) {
        return e.needAuth ? (Flipcat.Favorites.lib.messageSuccess(__("messages.Authentication_required")), $(Flipcat.CoreWebClientAuth.HTML_LOGIN_MODAL_ID).modal("show"), void $.cookie("ar", window.location.href, {
            expires: this.expires,
            path: "/"
        })) : (Flipcat.AuthMarker.storeMarker(), void Flipcat.Favorites.onSuccess(e))
    },
    onFailAddShop: function (e) {
    },
    onSuccess: function (e) {
        var t, r = Flipcat.Favorites, i = r.HTML_FAVORITES_ID;
        return e.errorInfo ? r.onError(e.errorInfo) : void (e.registredClasses && !(e = Flipcat.AuthMarker.getFromRegistredData(e, "Favorites")) || (t = [{
            key: /data-href=""/gm,
            val: r.replaceLink
        }, {key: /data-src="src"/gm, val: r.replaceSrc}, {key: /\[TITLE\]/gm, val: "company_name"}, {
            key: /\[ID\]/gm,
            val: "sid"
        }], FlipcatWebAppLibrary.render($(i), "a", t, e, 1, "a.sidebar-favorites__item"), e.length ? (r.setRemoveShopLinks(), $(i).removeClass("hide")) : $(i).addClass("hide"), r.setShopHeaderFavoriteLink(e)))
    },
    replaceSrc: function (e) {
        var t = e.logotype_thumbnail;
        return t = t ? t : Flipcat.defaultImage, 'src="' + t + '"'
    },
    replaceLink: function (e) {
        return 'href="' + e.hfu_url + '"'
    },
    onError: function (e, t) {
        e.messages && Flipcat.Favorites.lib.messageFail(e.messages.join("\n"))
    },
    scrollY: function (e) {
        var t, r = $(this.HTML_FAVORITES_ID + " ul.fav-list"),
            i = parseInt($(this.HTML_FAVORITES_ID).parent().css("top"));
        r.css("max-height", "auto").css("overflow-y", "auto"), e && (t = $(window).height() > screen.height ? screen.height : $(window).height(), r.css("max-height", t - i - 10 + "px").css("overflow-y", "scroll"))
    },
    fillMainPageFavShopsLine: function () {
        for (var e = Flipcat.Favorites, t = $(e.HTML_MAIN_PAGE_FAV_SHOPS_CONTAINER_ID), r = t.find(".tpl").first().html(), i = 0; e._oneLineInFavoriteShops(t) && (t.append($(r)), i++, !(i > 7));) ;
        i && t.find(e.HTML_MAIN_PAGE_FAV_SHOP_ITEM_CSS).last().parent().remove()
    },
    _oneLineInFavoriteShops: function (e) {
        var t = this, r = 0, i = !0, a = 0;
        return e.find(t.HTML_MAIN_PAGE_FAV_SHOP_ITEM_CSS).each(function (e, t) {
            r || (r = $(t).parent()[0].offsetTop), $(t).parent()[0].offsetTop > r && (i = !1), a++
        }), !(a > 7) && i
    },
    removeShopOnFavoritesPage: function (e) {
        var t, r = this, i = FlipcatWebAppLibrary.REQUEST_URI(!0);
        "/favorites" == i && (t = FlipcatWebAppLibrary.indexBy(e), $(r.HTML_FAVORITE_PAGE_SHOP_ITEM_CSS).each(function (e, r) {
            e = r.id.replace("shop", ""), t[e] || $(r).remove()
        }), 0 == $(r.HTML_FAVORITE_PAGE_SHOP_ITEM_CSS).length && $(r.HTML_FAVORITE_PAGE_EMPTY_LIST_MSG_ID).removeClass("hide"))
    },
    setShopHeaderFavoriteLink: function (e) {
        var t, r, i = $(".jshopaddfavlabel").data("id"), a = 0, o = Flipcat.Favorites, n = o.HTML_ADD_SHOP_TO_FAV_CSS,
            s = n.replace(".", ""), c = o.HTML_REMOVE_SHOP_TO_FAV_CSS, l = c.replace(".", ""),
            _ = o.HTML_ADD_SHOP_TO_FAV_INPUT_CSS, d = o.HTML_ADD_SHOP_TO_FAV_LABEL_CSS, p = d.replace(".", "");
        for (t = 0; t < e.length; t++) if (e[t].sid == i) {
            a = 1;
            break
        }
        a ? (r = $(n), $(_).prop("checked", !0), r.removeClass(s).addClass(l), r.unbind("click", o.onAddShopToFavClick), r.bind("click", o.onRemoveShopFromFavClick), r.html($("#heartSvg").html())) : (r = $(c), $(_).prop("checked", !1), r.hasClass(p) && (r.removeClass(l).addClass(s), r.unbind("click", o.onRemoveShopFromFavClick), r.bind("click", o.onAddShopToFavClick), r.html($("#heartEmptySvg").html())))
    }
};
window.Flipcat.Favorites = Favorites, window.Flipcat = window.Flipcat || {};
var v = {
    AREA_WIDTH: 1e3,
    MOBILE_WIDTH: 767,
    SEACRH_TOP_POS: 270,
    SEACRH_TOP_POS_CHROME: 277,
    initProc: 0,
    projectTitleH: 86,
    HTML_PRODUCT_ITEM_TITLE_CSS: ".autosize-p-title",
    init: function () {
        var e = Flipcat.Desktop;
        e.size(), $(window).bind("resize", e.size)
    },
    size: function () {
        var e = Flipcat.Desktop, t = 218, r = $(".restaurant-logo__img img").first(), i = $(".restaurant-logo").first(),
            a = ($(".restaurant-logo__img").first(), r.height()), o = r.width(), n = a > o ? a : o,
            s = $(".restaurant-block"), c = $(".restaurant-block").innerHeight();
        screen.width < 1191 && (t = 170), s.innerHeight(i.innerHeight()), n = c, e.setMinPageSize()
    },
    setMinPageSize: function () {
        var e, t = $("main").first(), r = $("header").first(), i = $("footer").last(),
            a = FlipcatWebAppLibrary.getViewport().h;
        r.height() + i.height() + t.height() < a && (e = a - r.height() - i.height() - 130, t.css("min-height", e + "px"))
    },
    isMobile: function () {
        var e = $(".header__mobile-menu-burger").css("display");
        return "flex" == e || "block" == e
    }
};
window.Flipcat.Desktop = v, window.Flipcat = window.Flipcat || {}, window.Flipcat.ShopCatNavigator = window.Flipcat.ShopCatNavigator || {}, Flipcat.ShopCatNavigator.HTML_PRODUCTS_CONTAINER_ID = "#goods-catalog", Flipcat.ShopCatNavigator.HTML_INPUT_ALL_SHOP_CATEGORIES_PAGE_ID = "#shopAllCategories", Flipcat.ShopCatNavigator.HTML_NEWS_CONTAINER_ID = "#fcShopNews", Flipcat.ShopCatNavigator.HTML_MAIN_NEWS_CONTAINER_ID = "#fcShopNewsMain", Flipcat.ShopCatNavigator.HTML_INFO_CONTAINER_ID = "#fcShopInfo", Flipcat.ShopCatNavigator.HTML_REVIEW_CONTAINER_ID = "#fcShopReviews", Flipcat.ShopCatNavigator.HTML_SHOP_CATEGORIES_CSS = "#shopcategories", Flipcat.ShopCatNavigator.HTML_INPUT_CSS = ".search", Flipcat.ShopCatNavigator.HTML_ACTIVE_LINK_CSS = ".left-menu-active-link", Flipcat.ShopCatNavigator.HTML_CATALOG_BM_ID = "#shopCatalogLink", Flipcat.ShopCatNavigator.HTML_NEWS_BM_ID = "#shopNewsLink", Flipcat.ShopCatNavigator.HTML_INFO_BM_ID = "#shopInfoLink", Flipcat.ShopCatNavigator.HTML_REVIEW_BM_ID = "#shopReviewLink", Flipcat.ShopCatNavigator.HTML_ACTIVE_BM_CSS = ".active", Flipcat.ShopCatNavigator.HTML_BM_CSS = ".restaurant-block__tab-link", Flipcat.ShopCatNavigator.HTML_PRODUCT_SORT_CSS = ".product-sort-link", Flipcat.ShopCatNavigator.HTML_PRODUCT_SORT_UP_ARROW_CSS = "arrow_down_mirror", Flipcat.ShopCatNavigator.HTML_PRODUCT_SORT_BLOCK_ID = "#sortProductsBlock", Flipcat.ShopCatNavigator.HTML_PRODUCT_SHOP_CURRENCY_INPUT_ID = "#shopCurrency", Flipcat.ShopCatNavigator.HTML_MAGIC_LINE_ID = ".magic-line", Flipcat.ShopCatNavigator.HISTORY_API = !(!window.history || !window.history.pushState), Flipcat.ShopCatNavigator.categoriesProducts = {}, Flipcat.ShopCatNavigator.isAppendRequest = !1, Flipcat.ShopCatNavigator.isFavoriteProductPage = !1, Flipcat.ShopCatNavigator.HTML_PRODUCTS_BOTTOM_LOADER_ID = "#bottomLoader", Flipcat.ShopCatNavigator.HTML_MOBILE_CATEGORIES_ID = "#mShopcategories", Flipcat.ShopCatNavigator.HTML_SORT_INPUT_CSS = ".jsortproductslink", Flipcat.ShopCatNavigator.HTML_POPUP_PRODUCT_CONTAINER_ID = "#goods-catalog-popup", Flipcat.ShopCatNavigator.HTML_MAIN_TAB_CSS = ".tab-item", Flipcat.ShopCatNavigator.HTML_SLICK_ID = ".goods-popup-slider", Flipcat.ShopCatNavigator.HTML_SHOP_MOBILE_HOR_CATEGORIES_CSS = "#mShopCategoriesHorMenu", Flipcat.ShopCatNavigator.HTML_MOBILE_SLIDERUN_LINK_CSS = ".jmobsliderunlink", Flipcat.ShopCatNavigator.HTML_MOBILE_LIST_TOGGLE_BLOCK_ID = "#mobileList", Flipcat.ShopCatNavigator.HTML_MOBILE_SLIDER_TOGGLE_BLOCK_ID = "#mobileSlider", Flipcat.ShopCatNavigator.HTML_BACK_BTN_CSS = ".scopeUp", Flipcat.ShopCatNavigator.HTML_PRODUCT_MOBILE_SLIDER_BLOCK_CSS = "#mobileProductSliderContainer", Flipcat.ShopCatNavigator.HTML_MOBILE_SLIDER_CONTAINER_ID = "#mobileImageSliderContainer", Flipcat.ShopCatNavigator.HTML_PRODUCT_MOBILE_SLIDER_ITEM_TPL_ID = "#mobileProductItemForSliderTemplate", Flipcat.ShopCatNavigator.HTML_NEWS_SHOW_FULL_LINK_CSS = ".goods-news__more", Flipcat.ShopCatNavigator.HTML_NEWS_HIDE_FULL_LINK_CSS = ".goods-news__short", Flipcat.ShopCatNavigator.HTML_CATEGORY_HAS_CHILDS_CSS = ".goods-filter__item--more", Flipcat.ShopCatNavigator.init = function (e) {
    var t = Flipcat.CoreCart;
    this.lib = window.FlipcatWebAppLibrary, this._get = e._get, this.messageFail = e.messageFail, this.initCartLink = e.initCartLink, this.setOnShopItemPopupListener = e.setOnShopItemPopupListener, ($(this.HTML_SHOP_CATEGORIES_CSS)[0] || FlipcatWebAppLibrary._GET("text", "-1") != -1) && (this.block = $(this.HTML_SHOP_CATEGORIES_CSS), this.mCategoryBlock = $(this.HTML_SHOP_MOBILE_HOR_CATEGORIES_CSS), this.currency = $(this.HTML_PRODUCT_SHOP_CURRENCY_INPUT_ID).val(), this.setListeners()), $(this.HTML_BM_CSS).click(this.onClickBookmark), this.setNewsBookmarkActive(), $(this.HTML_SORT_INPUT_CSS).bind("change", this.onChangeSortCriteia), $(this.HTML_SORT_INPUT_CSS).bind("click", this.onChangeSortCriteia), this.initProductQuantityView(), t.setShopIsNotWorkNowMessage(), t.runUnworkMessageTimer()
}, Flipcat.ShopCatNavigator.setListeners = function () {
    var e = this;
    e.HISTORY_API && (e.block.find("a").click(function () {
        return e.onClick($(this)), !1
    }), e.mCategoryBlock[0] && e.mCategoryBlock.find("a").click(function () {
        return e.onClick($(this)), !1
    }), $(window).bind("popstate", function () {
        e.onHistoryPopState()
    })), Flipcat.linkListener = e.onNeedMoreItems, e.setMobileListLinkListener(), $(e.HTML_BACK_BTN_CSS).bind("click", e.onClickBackBtn), $(e.HTML_NEWS_SHOW_FULL_LINK_CSS).bind("click", e.showFullTextNews), $(e.HTML_NEWS_HIDE_FULL_LINK_CSS).bind("click", e.hideFullTextNews), $(e.HTML_CATEGORY_HAS_CHILDS_CSS).on("click", e.animateChilds)
}, Flipcat.ShopCatNavigator.onClickBookmark = function (e) {
    var t, r = e, i = Flipcat.ShopCatNavigator, a = i.HTML_ACTIVE_BM_CSS.replace(".", ""), o = r.target;
    switch (r.preventDefault && r.preventDefault(), "#" + $(e.target).attr("id")) {
        case i.HTML_REVIEW_BM_ID:
            if (!r.isOnLoadReviewsEvent) return Flipcat.Reviews.onPageClick(), !1
    }
    $(i.HTML_BM_CSS).removeClass(a), $(o).addClass(a), $(i.HTML_MAGIC_LINE_ID).css("left", $(o).position().left), t = $(o).attr("data-id"), $(i.HTML_MAIN_TAB_CSS).removeClass(a), $(i.HTML_MAIN_TAB_CSS + "#" + t).addClass(a), "goods-news" == t && i.setEllipsisInNews()
}, Flipcat.ShopCatNavigator.onHistoryPopState = function (e) {
    var t = window.Flipcat.ShopCatNavigator;
    if (t.isMobileSliderShow && t.onClickBackBtn(), !((new Date).getTime() - window.loadTime < 1500)) {
        var r = window.location.href, i = {
            attr: function () {
                return r
            }, isPopState: 1
        };
        t.onClick(i)
    }
}, Flipcat.ShopCatNavigator.onClick = function (e) {
    if (e.attr("href").indexOf("#reviews") != -1 || "favorite-products" == e.attr("id")) return !1;
    var t, r = this, i = e.attr("href"), a = $(r.HTML_CATALOG_BM_ID)[0];
    return !r.requestSended && (~e.attr("href").indexOf("getFavorite") ? r.isFavoriteProductPage = !0 : r.isFavoriteProductPage = !1, e.isPopState ? r.ignorePush = !0 : r.ignorePush = !1, void ("#" != i && (r.setLoadingMessage("#mProductList"), r.onNeedMoreItems.requestSend = !0, Flipcat.Orders.previousAutoloadPage = 0, Flipcat.Orders.currentPage = 1, $(r.HTML_INPUT_ALL_SHOP_CATEGORIES_PAGE_ID).val(0), a && r.onClickBookmark({
        target: a,
        preventDefault: function () {
        }
    }), r.isAppendRequest = !1, Flipcat.Orders.currentPage = 1, t = i.split("?"), i = r.setSortLinkInAjaxUrl(i), r.getUrl(r.onLoadData, t[0] + ".json" + i, r.onFailLoadData))))
}, Flipcat.ShopCatNavigator.onLoadData = function (e) {
    $(Flipcat.ShopCatNavigator.HTML_PRODUCTS_BOTTOM_LOADER_ID).addClass("hide"), Flipcat.Orders.autoloadProcess = 0, FlipcatWebAppLibrary.unlock("#goods-catalog"), e.products && e.products instanceof Array && 0 == e.products.length && Flipcat.Orders.currentPage--;
    var t, r, i = Flipcat.ShopCatNavigator;
    if (i.requestSended = !1, i.setLoadingMessage("#mProductList", 0), i.setLoadingMessage(i.HTML_PRODUCTS_CONTAINER_ID, 0, ".goods-block__item"), i.onNeedMoreItems.requestSend = !1, !e.products.length) return t = FlipcatWebAppLibrary._GET("page", 1), $(i.HTML_PRODUCTS_BOTTOM_LOADER_ID).addClass("hide"), i.renderProducts(e.products, e.currency), void (i.lastRequest && (i.ignorePush || (r = i.lastRequest.replace(".json", ""), t = FlipcatWebAppLibrary._GET("page", 1, r) - 1, t = +t > 0 ? +t : "CMD_UNSET", r = FlipcatWebAppLibrary.setGetVar(r, "page", t), Flipcat.Desktop.isMobile() || history.pushState(null, null, r)), i.categoriesProducts[i.lastRequest] = e));
    if (e.errorMessage || e.remoteErrorInfo) return i.onFailLoadData(e.errorMessage + (e.remoteErrorInfo ? e.remoteErrorInfo : "")), void $(i.HTML_PRODUCTS_BOTTOM_LOADER_ID).addClass("hide");
    if (i.lastRequest) {
        if (!i.ignorePush) {
            var a = String(i.lastRequest.split("?")[1]).indexOf("page") != -1;
            i.ignorePush = Flipcat.Desktop.isMobile() && a
        }
        i.ignorePush || history.pushState(null, null, i.lastRequest.replace(".json", "")), i.categoriesProducts[i.lastRequest] = e
    }
    i.shopNameTranslite = e.shopNameTranslite, i.categoryNameTranslite = e.categoryNameTranslite, i.renderProducts(e.products, e.currency), e.breadCrumbs && i.renderBreadCrumbs(e.breadCrumbs), $(i.HTML_PRODUCTS_BOTTOM_LOADER_ID).addClass("hide"), i.setSortLink(), e.seoIntro && i.renderSeoIntro(e.seoIntro)
}, Flipcat.ShopCatNavigator.getSeoIntroHtmlEl = function (e) {
    var t, r = $("#seoI"), i = {};
    return r[0] && (t = r.parent().parent(), i.block = r, i.place = t), i
}, Flipcat.ShopCatNavigator.renderBreadCrumbs = function (e) {
    BreadCrumbs.render(e, this.breadCrumbsClickListener)
}, Flipcat.ShopCatNavigator.breadCrumbsClickListener = function (e) {
    var t = "A" == e.target.tagName ? $(e.target) : $(e.target).parents("a").first(), r = t.attr("href");
    if (~String(r).indexOf("/b/")) return ShopCatNavigator.onClick($(t)), !1
}, Flipcat.ShopCatNavigator.imageUrl = function (e) {
    return e && e.photos && e.photos[0] && e.photos[0].small_url ? 'src="' + e.photos[0].small_url + '"' : e && e.photos && e.photos[0] && e.photos[0].url ? 'src="' + e.photos[0].url + '"' : e && e.photos && e.photos[0] && e.photos[0].thumbnail_url ? 'src="' + e.photos[0].thumbnail_url + '"' : e && e.photos && e.photos[0] && e.photos[0].preview_url ? 'src="' + e.photos[0].preview_url + '"' : e && e.photos && e.photos[0] && e.photos[0].thumbnail_url ? 'src="' + e.photos[0].thumbnail_url + '"' : 'src="' + Flipcat.defaultProductImage + '"'
}, Flipcat.ShopCatNavigator.imageTooltipUrl = function (e) {
    return e && e.photos && e.photos[0] && e.photos[0].preview_url ? 'src="' + e.photos[0].preview_url + '"' : e && e.photos && e.photos[0] && e.photos[0].url ? 'src="' + e.photos[0].url + '"' : e && e.photos && e.photos[0] && e.photos[0].thumbnail_url ? 'src="' + e.photos[0].thumbnail_url + '"' : e && e.photos && e.photos[0] && e.photos[0].small_url ? 'src="' + e.photos[0].small_url + '"' : e && e.photos && e.photos[0] && e.photos[0].thumbnail_url ? 'src="' + e.photos[0].thumbnail_url + '"' : 'src="' + Flipcat.defaultProductImage + '"'
}, Flipcat.ShopCatNavigator.setIsBalls = function (e) {
    return e.isBalls || 1 == e.is_loyalty_product ? "1" : "0"
}, Flipcat.ShopCatNavigator.setPrice = function (e) {
    var t, r, i = FlipcatWebAppLibrary.getCurrenciesArray();
    return t = e.price, i[Flipcat.ShopCatNavigator.currency] && (r = i[Flipcat.ShopCatNavigator.currency], 1 == e.is_loyalty_product && (r = FlipcatWebAppLibrary.pluralize(e.price, "", __("messages._one_ball"), __("messages._balls_less4"), __("messages._balls_more19"))), t += " " + r), t
}, Flipcat.ShopCatNavigator.setMinPrice = function (e) {
    var t, r, i = FlipcatWebAppLibrary.getCurrenciesArray();
    return t = e.price, Flipcat.ShopCatNavigator.isMultiproduct(e) && (t = e.minPrice), i[Flipcat.ShopCatNavigator.currency] && (r = i[Flipcat.ShopCatNavigator.currency], 1 == e.is_loyalty_product && (r = '<div class="goods-coin_icon"></div>'), t += " " + r), t
}, Flipcat.ShopCatNavigator.setDescription = function (e, t, r) {
    var i = e.description;
    return i ? (i = String(i).replace(/<br[^>]*>/gim, "BR_RAG_FLIPCAT"), i = strip_tags(i), i = i.replace(/BR_RAG_FLIPCAT/gim, "<br>")) : i = "", i
}, Flipcat.ShopCatNavigator.renderParams = function (e, t) {
    var r, i, a, o = t.find(".sc-item-popup-param-list").first(), n = o.html(), s = e.params, c = s.length, l = "";
    for (t.find(".sc-item-param-name,.sc-item-param-value").each(function (e, t) {
        t = $(t), t.hasClass("tpl") || t.remove()
    }), r = 0; r < c; r++) i = n.replace("[paramValue]", s[r].value), i = i.replace(/tpl/gm, ""), i = i.replace(/\[params\]/gm, ""), i = s[r].param ? i.replace("[paramName]", s[r].param + ":") : i.replace("[paramName]", ""), a = o[0].tagName.toLowerCase(), l += "<" + a + ' class="' + o.attr("class") + '">' + i + "</" + a + ">";
    return l
}, Flipcat.ShopCatNavigator.renderParamsForPopup = function (e, t) {
    var r, i, a = t.find(".sc-item-popup-param-list").first(), o = a.html(), n = e.params, s = n.length, c = "";
    for (t.find(".sc-item-param-name,.sc-item-param-value").each(function (e, t) {
        t = $(t), t.hasClass("tpl") || t.remove()
    }), r = 0; r < s; r++) i = o.replace("[paramValue]", n[r].value), i = i.replace(/tpl/gm, ""), i = i.replace(/\[params\]/gm, ""), i = n[r].param ? i.replace("[paramName]", n[r].param + ":") : i.replace("[paramName]", ""), c += i;
    return c
}, Flipcat.ShopCatNavigator.renderMultiproductControls = function (e, t) {
    if (1 != e.merge) return "";
    var r, i = ($("<div></div>"), $("#multiproductsControlsTpl").html());
    return i = i.replace("[id]", e.id), i = i.replace("[multiproduct-options-css]", "multiproduct-options"), i = i.replace("[json]", JSON.stringify(e)), r = Flipcat.ShopCatNavigator.renderMergeParams(e.merge_params), i = i.replace("[multiproductoptionscontent]", r)
}, Flipcat.ShopCatNavigator.renderMultiproductMobileControls = function (e, t) {
    if (1 != e.merge) return "";
    var r, i = ($("<div></div>"), $("#multiproductsControlsMobileTpl").html());
    return i = i.replace("[id]", e.id), i = i.replace("[multiproduct-options-css]", "multiproduct-options"), i = i.replace("[json]", JSON.stringify(e)), r = Flipcat.ShopCatNavigator.renderMergeParams(e.merge_params), i = i.replace("[multiproductoptionscontent]", r)
}, Flipcat.ShopCatNavigator.renderMergeParams = function (e) {
    var t, r = $("#multiproductsControlsMergeParamTpl").html(), i = "", a = e, o = "";
    for (t = 0; t < a.length; t++) i = r.replace("[param]", a[t].param), i = i.replace("[param_id]", a[t].param_id), i = i.replace("[options]", Flipcat.ShopCatNavigator.renderMultiproductParamOptions(a[t].values)), o += i;
    return o
}, Flipcat.ShopCatNavigator.renderMultiproductParamOptions = function (e) {
    var t, r, i = $("#multiproductsControlsMergeParamOptionTpl").html(), a = "";
    for (r = 0; r < e.length; r++) t = i.replace("[parameter_value_value_id]", e[r].value_id), t = t.replace("[parameter_value_value]", e[r].value), a += t;
    return a
}, Flipcat.ShopCatNavigator.renderProducts = function (e, t, r) {
    var i, a, o, n, s, c = this, l = [{key: /data\-src="src"/gi, val: c.imageUrl}, {
            key: /data\-preview\-src="src"/gi,
            val: c.imageTooltipUrl
        }, {key: /\[nTitle\]/gi, val: c.setTitleCss}, {key: /\[nTooltip\]/gi, val: c.setTooltipCss}, {
            key: /\[name\]/gi,
            val: "name"
        }, {key: /\[isBalls\]/gi, val: c.setIsBalls}, {key: /\[ALLOW\]/gi, val: "allow_order"}, {
            key: /\[id\]/gi,
            val: "id"
        }, {key: /\[price\]/gi, val: c.setPrice}, {key: /\[minPrice\]/gi, val: c.setMinPrice}, {
            key: /\[pricePure\]/gi,
            val: "price"
        }, {key: /\[description\]/gi, val: "description"}, {
            key: /\[params\]/gi,
            val: c.renderParams
        }, {key: /\[multiid\]/gi, val: "id"}, {key: /\[favorite\]/gi, val: c.setFavorite}, {
            key: /\[addInCartBtnCss\]/gi,
            val: c.setAddToCartButtonVisible
        }, {key: /\[chooseBtnCss\]/gi, val: c.setChooseButtonVisible}, {
            key: /\[from\]/gi,
            val: c.setFromLexema
        }, {key: /data\-href="1"/gi, val: c.setMobileLink}], _ = [],
        d = [{key: /data\-preview\-src="src"/gi, val: c.imageTooltipUrl}, {
            key: /\[photos\]/gi,
            val: c.imagesPopup
        }, {key: /\[name\]/gi, val: "name"}, {key: /\[isBalls\]/gi, val: c.setIsBalls}, {
            key: /\[ALLOW\]/gi,
            val: "allow_order"
        }, {key: /\[id\]/gi, val: "id"}, {key: /\tipl/gi, val: ""}, {
            key: /\[price\]/gi,
            val: c.setPrice
        }, {key: /\[minPrice\]/gi, val: c.setMinPrice}, {
            key: /\[pricePure\]/gi,
            val: "price"
        }, {key: /\[descriptionPopup\]/gi, val: c.setDescription}, {
            key: /\[descriptionPopupCss\]/gi,
            val: c.setDescriptionCss
        }, {key: /\[descriptionPopupStyle\]/gi, val: c.setDescriptionStyle}, {
            key: /\[params\]/gi,
            val: c.renderParams
        }, {key: /\[multiid\]/gi, val: "id"}, {
            key: /\[multiproductoptions\]/gi,
            val: c.renderMultiproductControls
        }, {key: /\[addInCartBtnCss\]/gi, val: c.setAddToCartButtonVisible}, {
            key: /\[chooseBtnCss\]/gi,
            val: c.setChooseButtonVisible
        }, {key: /\[from\]/gi, val: c.setFromLexema}, {key: /\[favoritePopup\]/gi, val: c.setFavoritePopup}],
        p = [{key: /data\-src="src"/gi, val: c.imageUrl}],
        u = [{key: /\[name\]/gi, val: "name"}, {key: /\[isBalls\]/gi, val: c.setIsBalls}, {
            key: /\[id\]/gi,
            val: "id"
        }, {key: /\tipl/gi, val: ""}, {key: /\[price\]/gi, val: c.setPrice}, {
            key: /\[minPrice\]/gi,
            val: c.setMinPrice
        }, {key: /\[pricePure\]/gi, val: "price"}, {
            key: /\[descriptionPopup\]/gi,
            val: c.setDescription
        }, {key: /\[params\]/gi, val: c.renderParams}, {
            key: /\[multiid\]/gi,
            val: "id"
        }, {key: /\[multiproductoptions\]/gi, val: c.renderMultiproductMobileControls}, {
            key: /\[favorite\]/gi,
            val: c.setFavoriteMobileSlider
        }], h = c.HTML_PRODUCTS_CONTAINER_ID, f = Flipcat.Cart, g = "div.goods-block__item";
    for (n = 0; n < e.length; n++) if (s = e[n].id) {
        if ($("a[data-multiproductid=" + s + "]")[0] || $("a[data-id=" + s + "]")[0]) continue;
        _.push(e[n])
    }
    if (!_.length) return c.isAppendRequest || (c.setLoadingMessage("#mProductList", __("messages.No_products")), c.setLoadingMessage(h, __("messages.No_products"), ".goods-block__item")), void (c.isAppendRequest = !1);
    e = _;
    $(".goods-popup__slider").each(function (e, t) {
        t = $(t).data("owlCarousel"), t && t.destroy()
    });
    return Flipcat.ShopCatNavigator.currency = t, c.isAppendRequest || e.length ? !c.isAppendRequest || e.length || o ? (c.isFavoriteProductPage && (c.isAppendRequest = !1), c.removeHiddenItem(l, h, "div", e, g), FlipcatWebAppLibrary.render($(h), "div", l, e, !c.isAppendRequest, g), FlipcatWebAppLibrary.render($("#mProductList"), "div", l, e, !c.isAppendRequest, "div.jmobilelistproductitem"), c.setHiddenItem(l, h, "div", e, g), c.unslickDesktopSlider(), FlipcatWebAppLibrary.render($(c.HTML_POPUP_PRODUCT_CONTAINER_ID), "div", d, e, !c.isAppendRequest, "div.jpropductpitem", ".tpl", $("#slideProductItemDesktopTemplate")), c.reinitMobileSliders(c.isAppendRequest), FlipcatWebAppLibrary.render($(c.HTML_MOBILE_SLIDER_CONTAINER_ID), "div", p, e, !c.isAppendRequest, "div.goods-img-slider__slide", ".tpl", $("#mobileSliderImageTemplate")), FlipcatWebAppLibrary.render($("#mobileProductSliderContainer"), "div", u, e, !c.isAppendRequest, "div.jmultiproductitem", ".tpl", $("#mobileProductItemForSliderTemplate")), initProductPopup(!0), c.setMobileListLinkListener(), c.initProductQuantityView(), $(f.HTML_CART_ITEM_QUANTITY_DEC_BUTTON_CSS).click(f.decQuantityProductInCart), c.isAppendRequest = !1, c.initCartLink(), c.setOnShopItemPopupListener(), c.setActiveLink(), Flipcat.MultiproductManager.init(), void Flipcat.MultiproductMobileManager.init()) : (a.text(__("messages.No_products")), void i.show()) : (c.setLoadingMessage("#mProductList", __("messages.No_products")), c.setLoadingMessage(h, __("messages.No_products"), ".goods-block__item"), c.removeHiddenItem(l, h, "div", e, g), FlipcatWebAppLibrary.render($(h), "div", l, e, !c.isAppendRequest, g), FlipcatWebAppLibrary.render($("#mProductList"), "div", l, e, !c.isAppendRequest, "div.jmobilelistproductitem"),
        c.setHiddenItem(l, h, "div", e, g), c.unslickDesktopSlider(), FlipcatWebAppLibrary.render($(c.HTML_POPUP_PRODUCT_CONTAINER_ID), "div", d, e, !c.isAppendRequest, "div.jpropductpitem", ".tpl", $("#slideProductItemDesktopTemplate")), c.reinitMobileSliders(c.isAppendRequest), FlipcatWebAppLibrary.render($(c.HTML_MOBILE_SLIDER_CONTAINER_ID), "div", p, e, !c.isAppendRequest, "div.goods-img-slider__slide", ".tpl", $("#mobileSliderImageTemplate")), FlipcatWebAppLibrary.render($("#mobileProductSliderContainer"), "div", u, e, !c.isAppendRequest, "div.jmultiproductitem", ".tpl", $("#mobileProductItemForSliderTemplate")), initProductPopup(!0), void c.setMobileListLinkListener())
}, Flipcat.ShopCatNavigator.setActiveLink = function () {
    var e, t = this, r = FlipcatWebAppLibrary.REQUEST_URI(1), i = t.HTML_ACTIVE_LINK_CSS.replace(".", "");
    $(t.HTML_ACTIVE_LINK_CSS).removeClass(i), e = $(t.HTML_SHOP_CATEGORIES_CSS).find("a"), e.each(function (e, t) {
        r == $(t).attr("href").split("?")[0] && $(t).addClass(i)
    })
}, Flipcat.ShopCatNavigator.onFailLoadData = function (e) {
    var t = Flipcat.ShopCatNavigator;
    $(t.HTML_PRODUCTS_BOTTOM_LOADER_ID).addClass("hide"), FlipcatWebAppLibrary.unlock(t.HTML_PRODUCTS_CONTAINER_ID), e ? t.messageFail(e) : t.messageFail(__("Unierror"))
}, Flipcat.ShopCatNavigator.setFavorite = function (e, t) {
    var r;
    return e.favorite ? (r = '<input type="checkbox" id="good-item' + e.id + '" checked>', r += '<label for="good-item' + e.id + '" data-id="' + e.id + '" data-href="/removeFavorite" class="favorite-remove">' + $("#heartSvg").html() + "</label>") : (r = '<input type="checkbox" id="good-item' + e.id + '" >', r += '<label for="good-item' + e.id + '" data-id="' + e.id + '" data-href="/addFavorite" class="favorite-add">' + $("#heartEmptySvg").html() + "</label>"), r
}, Flipcat.ShopCatNavigator.setFavoritePopup = function (e) {
    var t;
    return e.favorite ? (t = '<input type="checkbox" id="pgood-item' + e.id + '" checked>', t += '<label for="pgood-item' + e.id + '" data-id="' + e.id + '" data-href="/removeFavorite" class="favorite-remove">' + $("#heartSvg").html() + "</label>") : (t = '<input type="checkbox" id="pgood-item' + e.id + '" >', t += '<label for="pgood-item' + e.id + '" data-id="' + e.id + '" data-href="/addFavorite" class="favorite-add">' + $("#heartEmptySvg").html() + "</label>"), t
}, Flipcat.ShopCatNavigator.setFavoriteMobileSlider = function (e) {
    var t;
    return e.favorite ? (t = '<input type="checkbox" id="msgood-item' + e.id + '" checked>', t += '<label for="msgood-item' + e.id + '" data-id="' + e.id + '" data-href="/removeFavorite" class="favorite-remove">' + $("#heartSvg").html() + "</label>") : (t = '<input type="checkbox" id="msgood-item' + e.id + '" >', t += '<label for="msgood-item' + e.id + '" data-id="' + e.id + '" data-href="/addFavorite" class="favorite-add">' + $("#heartEmptySvg").html() + "</label>"), t
}, Flipcat.ShopCatNavigator.onNeedMoreItems = function () {
    var e, t, r = Flipcat.ShopCatNavigator, i = +FlipcatWebAppLibrary._GET("page", 0),
        a = FlipcatWebAppLibrary._GET("text");
    if (!r.isFavoriteProductPage && (t = Flipcat.Orders.currentPage, i && (Flipcat.Orders.currentPage = t = i + 1), e = FlipcatWebAppLibrary.REQUEST_URI(!0) + ".json?page=" + t + "&id=" + FlipcatWebAppLibrary._GET("id", 0), e = r.setSortParamsOnAutoload(e), a && (e += "&text=" + a), !r.onNeedMoreItems.requestSend && !r.requestSended)) {
        parseInt(r.onNeedMoreItems.limit, 10), parseInt(r.onNeedMoreItems.total, 10);
        r.onNeedMoreItems.requestSend = !0, r.isAppendRequest = !0, $(r.HTML_PRODUCTS_BOTTOM_LOADER_ID).removeClass("hide"), r.getUrl(r.onLoadData, e, r.onFailLoadData)
    }
}, Flipcat.ShopCatNavigator.setNewsBookmarkActive = function () {
    if ("#news" == window.location.hash) {
        var e = $(this.HTML_NEWS_BM_ID)[0];
        e && this.onClickBookmark.apply(e, [{target: e}])
    }
}, Flipcat.ShopCatNavigator.onChangeSortCriteia = function (e) {
    var t = $(e.target).data("href");
    t ? window.location.href = t : 0
}, Flipcat.ShopCatNavigator.setTitleCss = function (e, t, r) {
    return r = $(Flipcat.ShopCatNavigator.HTML_PRODUCTS_CONTAINER_ID).find("div.goods-block__item").length - 1, r = r < 0 ? 0 : r, "goods-block__item-title--twoline"
}, Flipcat.ShopCatNavigator.setTooltipCss = function (e, t, r) {
    return r = $(Flipcat.ShopCatNavigator.HTML_PRODUCTS_CONTAINER_ID).find("div.goods-block__item").length - 1, r = r < 0 ? 0 : r, r % 3 == 0 ? "goods-tooltip--first" : ""
}, Flipcat.ShopCatNavigator.setTooltipCssForHiddenItem = function (e, t, r) {
    return ""
}, Flipcat.ShopCatNavigator.setTitleCssForHiddenItem = function (e, t, r) {
    return ""
}, Flipcat.ShopCatNavigator.getIndexOfSlide = function (e) {
    var t, r = Flipcat.ShopCatNavigator, i = $(r.HTML_POPUP_PRODUCT_CONTAINER_ID), a = i.find(".goods-popup");
    for (t = 0; t < a.length; t++) if (a[t].id == e) return t;
    return 0
}, Flipcat.ShopCatNavigator.getIndexOfSlideForMobile = function (e) {
    var t, r = Flipcat.ShopCatNavigator, i = $(r.HTML_PRODUCT_MOBILE_SLIDER_BLOCK_CSS),
        a = i.find(".goods-info-slider__slide");
    for (t = 0; t < a.length; t++) if (a[t].id == e) return t - 1;
    return 0
}, Flipcat.ShopCatNavigator.imagesPopup = function (e, t, r) {
    var i, a, o, n = e.photos, s = '<div class="goods-popup__slider" style="max-height:443px;max-width:443px;">',
        c = '<div class="goods-popup__slide">', l = "</div>", _ = "";
    if (n.length) for (i = 0; i < n.length; i++) a = n[i], o = a.preview_url && trim(a.preview_url) ? '<img data-U="BU"  src="' + a.preview_url + '" alt="' + e.name + '">' : a.url && trim(a.url) ? '<img data-U="BU"  src="' + a.url + '" alt="' + e.name + '">' : a.thumbnail_url && trim(a.thumbnail_url) ? '<img data-U="BU"  src="' + a.thumbnail_url + '" alt="' + e.name + '">' : '<img data-U="BU"  src="' + Flipcat.defaultProductImage + '" alt="' + e.name + '">', _ += c + o + l; else o = '<img data-U="BU"  src="' + Flipcat.defaultProductImage + '">', _ += c + o + l;
    return s + _ + "</div>"
}, Flipcat.ShopCatNavigator.setQuantityProductsInListAndPopup = function (e, t) {
    var r, i, a = this, o = $("#mg" + e), n = $("#popup-good" + e), s = ".item-quantity";
    r = $("[data-id=popup-good" + e + "]").first().parent(), i = $("#mgs" + e), r.find(s).first().val(t), n.find(s).first().val(t), o.find(s).first().val(t), i.find(s).first().val(t), a.toggleIncDEcButtons(r, t), a.toggleIncDEcButtons(n, t), a.toggleIncDEcButtons(o, t), a.toggleIncDEcButtons(i, t)
}, Flipcat.ShopCatNavigator.toggleIncDEcButtons = function (e, t) {
    var r;
    +t ? (r = e.find(".goods-block__tocart-wrap").first().find("button").first(), r.hasClass("jchoose") || r.css("display", "none"), e.find(".goods-block__tocart-wrap").first().find("button.jcartaddinlist").first().css("display", "none"), e.find(".goods-block__amount").first().css("display", "flex")) : (r = e.find(".goods-block__tocart-wrap").first().find("button").first(), r.hasClass("jchoose") || r.css("display", "block"), e.find(".goods-block__tocart-wrap").first().find("button.jcartaddinlist").first().css("display", "block"), e.find(".goods-block__amount").first().css("display", "none"))
}, Flipcat.ShopCatNavigator.initProductQuantityView = function () {
    Flipcat.Cart.Lib = FlipcatWebAppLibrary;
    var e, t = FlipcatWebAppLibrary.storage(Flipcat.Cart.getShopId());
    for (e in t) this.setQuantityProductsInListAndPopup(e, t[e])
}, Flipcat.ShopCatNavigator.getMultiproductId = function (e) {
    var t;
    return $("[data-id=" + e + "]").each(function (e, r) {
        t || (r = $(r), +r.data("multiproductid") && (t = +r.data("multiproductid")))
    }), t ? t : e
}, Flipcat.ShopCatNavigator.setHiddenItem = function (e, t, r, i, a) {
    var o = Flipcat.ShopCatNavigator, n = $("div.goods-block__item");
    (n.length - 1) % 3 != 0 && (e = __php2js_clone_argument__(e), e[1] = {
        key: /\[nTitle\]/gi,
        val: o.setTitleCssForHiddenItem
    }, e[2] = {
        key: /\[nTooltip\]/gi,
        val: o.setTooltipCssForHiddenItem
    }, FlipcatWebAppLibrary.render($(t), r, e, [i[0]], 0, a), $(t).find(a).last().css("opacity", 0).css("cursor", "default"))
}, Flipcat.ShopCatNavigator.removeHiddenItem = function (e, t, r, i, a) {
    var o = $(t).find(a).last();
    0 == o.css("opacity") && o.remove()
}, Flipcat.ShopCatNavigator.setMobileLink = function (e) {
    var t = Flipcat.ShopCatNavigator;
    return 'href="/company/' + t.shopNameTranslite + "/" + t.categoryNameTranslite + "/" + e.id + "?id=" + FlipcatWebAppLibrary._GET("id") + '"'
}, Flipcat.ShopCatNavigator.setLoadingMessage = function (e, t, r) {
    var i = '<div class="msgm"><div class="alert alert-success">[message]</div></div>';
    r = r ? r : ".jmobilelistproductitem", $(e).find(".msgm").remove(), 0 !== t && ($(e).find("div" + r).each(function (e, t) {
        t = $(t), t.hasClass("tpl") || t.remove()
    }), t || (t = __("messages.Loading")), i = i.replace("[message]", t), $(e).append($(i)))
}, Flipcat.ShopCatNavigator.setMobileListLinkListener = function () {
    var e = Flipcat.ShopCatNavigator;
    $(e.HTML_MOBILE_SLIDERUN_LINK_CSS).bind("click", e.onClickMobileProductItem), $(e.HTML_PRODUCT_MOBILE_SLIDER_BLOCK_CSS).on("click", Flipcat.ShopFavorite.HTML_SHOP_ADD_TO_FAVORITE_CSS, function () {
        return Flipcat.ShopFavorite.addToFavorite($(this)), !1
    }), $(e.HTML_PRODUCT_MOBILE_SLIDER_BLOCK_CSS).on("click", Flipcat.ShopFavorite.HTML_SHOP_REMOVE_FROM_FAVORITE_CSS, function () {
        return Flipcat.ShopFavorite.removeFromFavorite($(this)), !1
    })
}, Flipcat.ShopCatNavigator.onClickMobileProductItem = function (e) {
    e.preventDefault();
    var t = Flipcat.ShopCatNavigator, r = "hide";
    t.oldScrollY = window.scrollY, window.scrollTo(0, 0), t.isMobileSliderShow = 1, $(t.HTML_MOBILE_LIST_TOGGLE_BLOCK_ID).addClass(r), $(t.HTML_MOBILE_SLIDER_TOGGLE_BLOCK_ID).removeClass(r).css("width", "100%");
    try {
        initMobileSlick(this.getAttribute("data-id"))
    } catch (i) {
    }
}, Flipcat.ShopCatNavigator.onClickBackBtn = function (e) {
    var t = Flipcat.ShopCatNavigator, r = "hide";
    return !t.isMobileSliderShow || (t.isMobileSliderShow = 0, e && (e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation()), $(t.HTML_MOBILE_LIST_TOGGLE_BLOCK_ID).removeClass(r), $(t.HTML_MOBILE_SLIDER_TOGGLE_BLOCK_ID).addClass(r), setTimeout(function () {
        window.scrollTo(0, t.oldScrollY)
    }, 100), !1)
}, Flipcat.ShopCatNavigator.reinitMobileSliders = function (e) {
    var t = "", r = "", i = Flipcat.ShopCatNavigator, a = i.HTML_MOBILE_SLIDER_CONTAINER_ID,
        o = i.HTML_PRODUCT_MOBILE_SLIDER_BLOCK_CSS;
    try {
        $(a).slick("getSlick").unslick(), t = $(a).html(), $(a).slick("getSlick").destroy()
    } catch (n) {
        t = $(a).html()
    }
    $(a).remove(), $("#mobileSlider").prepend($('<div class="goods-img-slider" id="mobileImageSliderContainer"></div>'));
    try {
        $(o).slick("getSlick").unslick(), r = $(o).html(), $(o).slick("getSlick").destroy()
    } catch (n) {
        r = $(o).html()
    }
    $(o).remove(), $('<div class="goods-info-slider" id="mobileProductSliderContainer"></div>').insertAfter($("#mobileSliderImageTemplate")), e && ($(a).html(t), $(o).html(r))
}, Flipcat.ShopCatNavigator.setDescriptionCss = function (e) {
    return e.params && e.params instanceof Array && count(e.params) || trim(Flipcat.ShopCatNavigator.setDescription(e)) ? "" : " hide "
}, Flipcat.ShopCatNavigator.setDescriptionStyle = function (e) {
    return isset(e, "merge_params") && e.merge_params instanceof Array ? count(e.merge_params) < 1 ? 'style="min-height:400px;"' : 'style="min-height:335px;"' : 'style="min-height:510px;"'
}, Flipcat.ShopCatNavigator.showFullTextNews = function (e) {
    e.preventDefault();
    var t = this, r = $(t).parent().parent(),
        i = (r.find("input[name=textB]").first().val(), r.find("input[name=text]").first().val()),
        a = r.find(".goods-news__descr").first();
    a.text(i), $(this).hide(0), $(this).next(".goods-news__short").show(0), a.css("max-height", "100%")
}, Flipcat.ShopCatNavigator.hideFullTextNews = function (e) {
    e.preventDefault();
    var t = this, r = $(t).parent().parent(), i = r.find("input[name=textB]").first().val(),
        a = (r.find("input[name=text]").first().val(), r.find(".goods-news__descr").first());
    a.text(i), $(this).hide(0), $(this).prev(".goods-news__more").show(0), window.innerWidth < 991 ? a.css("max-height", "43px") : a.css("max-height", "48px")
}, Flipcat.ShopCatNavigator.setEllipsisInNews = function () {
    var e, t, r, i, a, o, n, s = $(".goods-news__descr"), c = "(),-;&!.+[]/\\";
    for (e = 0; e < s.length; e++) if (t = $(s[e]), r = t.text(), i = t.height(), o = 1, n = t.css("max-height"), t.css("max-height", "unset"), t.attr("hIsSet") != screen.width + "," + screen.height) {
        for (; ;) {
            if (a = r.substring(0, r.length - o), o++, o >= r.length) break;
            if (t.text(a), t.height() <= i) {
                for (a = r.substring(0, r.length - o - 3); c.indexOf(a.charAt(a.length - 1)) != -1;) a = a.substring(0, a.length - 1);
                a += "...", t.text(a), t.parent().find("input[name=textB]").first().val(a);
                break
            }
        }
        t.css("max-height", n), t.attr("hIsSet", screen.width + "," + screen.height)
    }
}, Flipcat.ShopCatNavigator.getSortByNameLink = function () {
    return $("#11111")[0].getAttribute("data-href")
}, Flipcat.ShopCatNavigator.getSortByPriceLink = function () {
    return $("#22222")[0].getAttribute("data-href")
}, Flipcat.ShopCatNavigator.setSortByNameLink = function (e) {
    return $("#11111")[0].setAttribute("data-href", e)
},Flipcat.ShopCatNavigator.setSortByPriceLink = function (e) {
    return $("#22222")[0].setAttribute("data-href", e)
},Flipcat.ShopCatNavigator.setAddToCartButtonVisible = function (e) {
    return Flipcat.ShopCatNavigator.isMultiproduct(e) ? " hideimportant " : ""
},Flipcat.ShopCatNavigator.setChooseButtonVisible = function (e) {
    return Flipcat.ShopCatNavigator.isMultiproduct(e) ? " showfleximportant " : " hideimportant "
},Flipcat.ShopCatNavigator.setFromLexema = function (e) {
    return Flipcat.ShopCatNavigator.isMultiproduct(e) ? __("From") + " " : ""
},Flipcat.ShopCatNavigator.isMultiproduct = function (e) {
    return !!(e.merge && 1 == e.merge && e.merge_params && e.merge_params instanceof Array && count(e.merge_params) > 0)
},Flipcat.ShopCatNavigator.unslickDesktopSlider = function () {
    var e = Flipcat.ShopCatNavigator, t = "";
    if (!e.isAppendRequest) {
        try {
            $(e.HTML_POPUP_PRODUCT_CONTAINER_ID).slick("getSlick").unslick(), t = $(e.HTML_POPUP_PRODUCT_CONTAINER_ID).html(), $(e.HTML_POPUP_PRODUCT_CONTAINER_ID).slick("getSlick").destroy()
        } catch (r) {
            t = $(e.HTML_POPUP_PRODUCT_CONTAINER_ID).html()
        }
        t = $(e.HTML_POPUP_PRODUCT_CONTAINER_ID).remove(), $('<div class="goods-popup-slider" id="goods-catalog-popup"></div>').insertAfter($("#slideProductItemDesktopTemplate")), e.isAppendRequest && $(e.HTML_POPUP_PRODUCT_CONTAINER_ID).html(t)
    }
},Flipcat.ShopCatNavigator.animateChilds = function (e) {
    e.preventDefault(), Flipcat.ShopCatNavigator.animateChildsHlp(this)
},Flipcat.ShopCatNavigator.animateChildsHlp = function (e) {
    $(e).hasClass("active") ? ($(e).removeClass("active"), $(e).parent().find(".jdesktopmenuitem[data-parent=" + $(e).data("id") + "]").slideUp(400), $(e).parent().find(".jdesktopmenuitem[data-parent=" + $(e).data("id") + "]").removeClass("active"), $(e).parent().find(".jdesktopmenuitem[data-parent=" + $(e).data("id") + "]").slideUp(400)) : ($(e).addClass("active"), $(e).parent().find(".jdesktopmenuitem[data-parent=" + $(e).data("id") + "]").slideDown(200, function () {
        $(this).is(":visible") && $(this).css("display", "block")
    }))
},Flipcat.ShopCatNavigator.hidePopup = function () {
    try {
        var e = $(".goods-popup-slider-wrap");
        e.fadeOut(200).removeClass("active"), $("body").removeClass("no-scroll"), $(".goods-popup-slider").slick("unslick"), $(".goods-overlay").fadeOut(200)
    } catch (t) {
    }
},window.Flipcat = window.Flipcat || {};
var ShopList = {
    HTML_SHOP_LIST_ID: "#shops",
    HTML_SHOP_PAGINATION_ID: "#shopPaging",
    HISTORY_API: !(!window.history || !window.history.pushState),
    HTML_CUISINE_FORM_FILTERS_BLOCK_ID: "#cuisineFilters",
    HTML_FORM_STD_FILTERS_BLOCK_ID: "#leftFilters",
    HTML_STD_MOBILE_FORM_FILTERS_BLOCK_ID: "#mLeftFilters",
    HTML_CUISINE_MOBILE_FORM_FILTERS_BLOCK_ID: "#mCuisineFilters",
    HTML_CUISINE_FORM_SEND_BUTTON_ID: "#cuisineSendButton",
    HTML_SORT_VARIANTS_SHOW_ID: "#displaySortLink",
    HTML_SORT_VARIANTS_BLOCK_ID: "#shopSortPopup",
    HTML_DELIVERY_OBJECTS_DATA_ID: "#catalogDelivery",
    HTML_DELIVERY_OBJECTS_COUNT_INP_ID: "#catalogDeliveryCount",
    HTML_PICKUP_OBJECTS_DATA_ID: "#catalogPickup",
    HTML_PICKUP_OBJECTS_COUNT_INP_ID: "#catalogPickupCount",
    HTML_INPUT_DEFAULT_SORT_VALUE_ID: "#defaultSort",
    HTML_SHIPPING_TYPE_ACTIVE_CSS: ".choose-shipping-active",
    HTML_IS_SHOPS_PAGE_INP_ID: "#isShopsPage",
    HTML_IS_HFU_ENABLED_INP_ID: "#isHfuEnabled",
    HTML_SHOP_LIST_SIDEBAR_PADDING_CSS: ".shops-sidebar-padding",
    HTML_SIDEBAR_ID: "#vspacer",
    shopOptionsOrderTitles: ["messages.Min_order", "messages.Delivery", "messages.Delivery_time", "messages.Time_work", "messages.Distance"],
    shopOptionsOrderIcons: ["sprite-ico-stack", "sprite-ico-rocket-w", "sprite sprite-ico-timer-2", "sprite sprite-ico-timer-2", ""],
    allCuisinesId: "#cuisineSendButton",
    SORT_BY_POPULAR: "popular",
    SORT_BY_TIME_DELIVERY: "timeDelivery",
    SORT_BY_DISTANCE: "distance",
    SORT_BY_PRICE_DELIVERY: "priceDelivery",
    SORT_BY_MIN_ORDER: "minOrder",
    HTML_MOBILE_SORT_VARIANTS_LABEL_CSS: ".mSortItem",
    HTML_MOBILE_SORT_FORM_ID: "#mobileCuisinesFilter",
    HTML_CURRENT_CATEGORY_INP_ID: "#currentCategoryId",
    HTML_INFOMESSAGE_PLACE_CSS: ".message-place",
    HTML_INFOMESSAGE_CSS: ".alert-success",
    HTML_FILTER_POPUP_CLOSE_BTN_ID: "#mFilterPopupClose",
    HTML_SHOW_MOBILE_FILTERS_BTN_CSS: ".filters-button",
    HTML_SEARCH_WIH_GOODS_TAB_ID: "#agSearchShopWPLink",
    HTML_SEARCH_COMPANIES_TAB_ID: "#agSearchShopsTabLink",
    HTML_SEARCH_COMPANIES_TAB_CONTENT_ID: "#companies-search",
    HTML_SEARCH_WIH_GOODS_TAB_CONTENT_ID: "#goods-search",
    init: function (e) {
        this.lib = e, this.isShopPage() === !0 && this.setListeners(), this.isAgSearchPage() && Flipcat.Desktop.isMobile() && $("#goods-search,#companies-search").removeClass("goods-block--desktop").addClass("goods-block--mobile"), $(window).resize(function () {
            Flipcat.ShopList.isAgSearchPage() && Flipcat.Desktop.isMobile() ? $("#goods-search,#companies-search").removeClass("goods-block--desktop").addClass("goods-block--mobile") : $("#goods-search,#companies-search").removeClass("goods-block--mobile").addClass("goods-block--desktop")
        }), Flipcat.CWAC.setDescriptionEllipsis()
    },
    isShopPage: function () {
        var e, t = this;
        if (1 == $(t.HTML_IS_SHOPS_PAGE_INP_ID).val()) {
            e = $(this.HTML_SHOP_LIST_ID + " textarea").first().text();
            try {
                e = JSON.parse(e), this.data = e
            } catch (r) {
            }
            if (this.perPage = $("#perPage").val(), this.perPage) return !0
        }
    },
    setListeners: function () {
        var e = this;
        $(e.HTML_SHOP_PAGINATION_ID + " a").click(e.onPageClick), $(window).bind("popstate", function () {
            e.onHistoryPopState()
        }), e.initFormFilter(), e.initSortForm(), e.initChooseSeliveryTypeForm(), $(e.HTML_MOBILE_SORT_FORM_ID).bind("submit", function (e) {
            e.preventDefault()
        }), $(e.HTML_SHOW_MOBILE_FILTERS_BTN_CSS).bind("focus", function () {
            setTimeout(function () {
                $(e.HTML_SHOW_MOBILE_FILTERS_BTN_CSS)[0].blur()
            }, 1)
        }), $(e.HTML_SEARCH_WIH_GOODS_TAB_ID).click(e.onChangeSearchTab), $(e.HTML_SEARCH_COMPANIES_TAB_ID).click(e.onChangeSearchTab)
    },
    initFormFilter: function () {
        $(this.HTML_CUISINE_FORM_SEND_BUTTON_ID).addClass("hide"), $(this.HTML_CUISINE_FORM_FILTERS_BLOCK_ID + " input[type=checkbox]").change(this.onChangeCuisine), $(this.HTML_CUISINE_MOBILE_FORM_FILTERS_BLOCK_ID + " input[type=checkbox]").change(this.onChangeCuisine), $(this.HTML_FORM_STD_FILTERS_BLOCK_ID + " input[type=checkbox]").change(this.onChangeStdFilter), $(this.HTML_STD_MOBILE_FORM_FILTERS_BLOCK_ID + " input[type=checkbox]").change(this.onChangeStdFilter)
    },
    onChangeCuisine: function (e) {
        var t, r, i, a, o, n, s, c = window.Flipcat.ShopList, l = 0;
        t = $(c.HTML_CUISINE_FORM_FILTERS_BLOCK_ID + " input[type=checkbox]"), "#" + $(e.target).parent().attr("id") == c.HTML_CUISINE_MOBILE_FORM_FILTERS_BLOCK_ID && (t = $(c.HTML_CUISINE_MOBILE_FORM_FILTERS_BLOCK_ID + " input[type=checkbox]"), o = !0), r = FlipcatWebAppLibrary.REQUEST_URI(), t.each(function (e, t) {
            0 == e ? (c.allCuisinesId = t.id, a = t) : t.checked ? (n = t.id, o && (n = n.replace(/^m/, "")), l++, r = FlipcatWebAppLibrary.setGetVar(r, "cuisine[]", n, 1)) : r = FlipcatWebAppLibrary.setGetVar(r, "cuisine[]", "CMD_UNSET", 1, t.id)
        }), this.id == a.id && (t.prop("checked", !1), l = 0), l ? (window.FlipcatWebAppLibrary._GET("limit", 0) && (r += "&limit=" + window.FlipcatWebAppLibrary._GET("limit")), $(a).prop("checked", !1)) : (r = FlipcatWebAppLibrary.setGetVar(r, "cuisine[]", "CMD_UNSET"), window.FlipcatWebAppLibrary._GET("limit", 0) && (r += "?limit=" + window.FlipcatWebAppLibrary._GET("limit")), $(a).prop("checked", !0)), history.pushState(null, null, r), i = new ShopsFilter(new Request, c.getTargetItems(), window.FlipcatWebAppLibrary._GET("limit", c.perPage)), s = i.filter(), c.renderShops(s, null, i), c.setMessage(count(s))
    },
    onChangeStdFilter: function (e) {
        var t, r, i, a, o, n, s = window.Flipcat.ShopList, c = 0, l = FlipcatWebAppLibrary;
        t = $(s.HTML_FORM_STD_FILTERS_BLOCK_ID + " input[type=checkbox]"), "#" + $(e.target).parent().parent().attr("id") == s.HTML_STD_MOBILE_FORM_FILTERS_BLOCK_ID && (t = $(s.HTML_STD_MOBILE_FORM_FILTERS_BLOCK_ID + " input[type=checkbox]"), a = !0), r = l.REQUEST_URI();
        var _, d = $("input[type=hidden]"), p = [], u = d.length;
        for (_ = 0; _ < u; _++) "f[]" == d[_].name && p.push(d[_]);
        if (p.length) for (_ = 0; _ < p.length; _++) $(p[_]).remove();
        t.each(function (e, t) {
            o = t.id, a && (o = o.replace(/^m/, "")), t.checked ? (r = l.setGetVar(r, "f[]", o, 1), $($(".search-field__input")[0]).after('<input name="f[]" value="' + o + '" type="hidden">'), c++) : r = l.setGetVar(r, "f[]", "CMD_UNSET", 1, o)
        }), r = $(s.HTML_SEARCH_WIH_GOODS_TAB_ID).hasClass("active") ? l.setGetVar(r, "byGood", 1) : l.setGetVar(r, "byGood", "CMD_UNSET"), c ? window.FlipcatWebAppLibrary._GET("limit", 0) && (r += "&limit=" + window.FlipcatWebAppLibrary._GET("limit")) : window.FlipcatWebAppLibrary._GET("limit", 0) && (r += "?limit=" + window.FlipcatWebAppLibrary._GET("limit")), history.pushState(null, null, r), n = s.getTargetItems(), i = new ShopsFilter(new Request, n, window.FlipcatWebAppLibrary._GET("limit", s.perPage)), n = i.filter(), s.renderShops(n, null, i), s.setMessage(count(n))
    },
    onHistoryPopState: function () {
        if (!((new Date).getTime() - window.loadTime < 800)) {
            var e = window.Flipcat.ShopList;
            if (e.isShopPage() === !0) {
                var t, r, i, a = new Request;
                i = e.getPageNumber(window.location.href), e.HISTORY_API && e.data && (e.setActiveBookmarkonSrchPage(), e.setFilterInputsFromUrl(), t = new ShopsFilter(a, e.getTargetItems(), e.perPage), r = t.filter(), e.renderShops(r, null, t), e.setMessage(count(r)))
            }
        }
    },
    onPageClick: function () {
        var e, t, r = window.Flipcat.ShopList, i = this, a = new Request;
        if (r.HISTORY_API) return history.pushState(null, null, $(i).attr("href")), e = new ShopsFilter(a, r.getTargetItems(), r.perPage), t = e.filter(), r.renderShops(t, i, e), r.setMessage(count(t)), !1
    },
    renderShops: function (e, t, r) {
        var i, a, o, n, s, c, l, _, d, p, u, h = this, f = $(h.HTML_SHOP_LIST_ID), g = Flipcat.CWAC,
            m = g.isWebCategoriesTreePage() || h.isAgSearchPage() ? "div.company-acw-block.tpl" : "div.company-block.tpl",
            C = g.isWebCategoriesTreePage() || h.isAgSearchPage() ? "div.company-acw-block" : "div.company-block",
            T = f.find(m).first(), I = T.attr("class").replace("tpl", ""), S = T.html(),
            L = FlipcatWebAppLibrary.REQUEST_URI(1).split("/")[2], v = $(h.HTML_IS_HFU_ENABLED_INP_ID).val(), M = "";
        for ($("#goods-search")[0] && (f = $("#goods-search"), p = 1, u = 1, FlipcatWebAppLibrary._GET("byGood", 0) || !$("#companies-search")[0] || jvars.isAgregateUseWebCategories || (f = $("#companies-search"), u = 0, m = "div.company-block.tpl", C = "div.company-block"), T = f.find(m).first(), I = T.attr("class").replace("tpl", ""), S = T.html(), FlipcatWebAppLibrary.removeSuccessMessage(f)), i = e.length ? "addClass" : "removeClass", a = h.HTML_SHOP_LIST_SIDEBAR_PADDING_CSS.replace(".", ""), $(h.HTML_SIDEBAR_ID)[i](a), f.find(C).each(function (e, t) {
            e > 0 && $(t).remove()
        }), i = 0; i < e.length; i++) o = e[i], _ = "false" != v && 0 != v ? o.hfu_url ? o.hfu_url : "/company/" + o.hfu_company_name : "/b/" + o.sid + "/" + $(h.HTML_CURRENT_CATEGORY_INP_ID).val() + "/" + o.id, c = o.logotype_thumbnail ? o.logotype_thumbnail : Flipcat.defaultImage ? Flipcat.defaultImage : "/img/productListNoImage.png", s = o.review_rate > 0 ? 100 - o.review_rate : 0, d = M = 1 != o.loyalty_shop_items || jvars.isAgregateUseWebCategories ? "" : "balls-sign", d && (d = Flipcat.cuisineFilterEnabled ? $("#ballsSignContentCuisine").html() : $("#ballsSignContentProduct").html()), a = S.replace(/\[shopId\]/gi, o.sid).replace(/\[intShopId\]/gi, o.id).replace(/data\-src="src"/m, 'src="' + c + '"').replace("[companyName]", o.company_name).replace(/\[snippet\]/gi, o.snippet).replace(/\[review_rate\]/gi, o.review_rate > 0 ? o.review_rate : 100).replace(/\[bad_reviews\]/gi, s).replace(/\[LINK\]/gi, _).replace(/\[BALLS_SIGN\]/gi, M).replace(/\[BALL_SIGN_ICON\]/gi, d).replace(/\[currentCategory\]/gi, L), p && u && (a = a.replace(/\[companyWithProductsItem\]/gi, h.getCompanyProductsHtml(o))), l = $('<div class="' + I + '">' + a + "</div>"), l = h.setShopOption(l, o), c ? 0 : l.find(".shop-logo-wrapper img").remove(), l = FlipcatWebAppLibrary.processTemplateLinks(l, "company-block__link row"), l = FlipcatWebAppLibrary.processTemplateImg(l), f.append(l);
        if (Flipcat.Favorites.setAddShopLinks(), h.lib.setProgressBarValue(), !t) return g.setDescriptionEllipsis(), void h.renderPagination(r);
        a = $(t).attr("href"), n = h.getPageNumber(a);
        var E = $(h.HTML_SHOP_PAGINATION_ID + " span.linkActive").first().text();
        $(h.HTML_SHOP_PAGINATION_ID + " span.linkActive").each(function (e, t) {
            $(t).parent().hasClass("tpl") || (l = $(t).parent(), E = $(t).text())
        }), $(h.HTML_SHOP_PAGINATION_ID + " li.tpl").each(function (e, t) {
            $(t).hasClass("active") || (T = $(t))
        }), l.html(""), S = T.html().replace("[N]", E).replace("[LINK]", a.replace("page=" + n, "page=" + E)), o = $(S), o = FlipcatWebAppLibrary.processTemplateLinks(o), o.click(h.onPageClick), l.append(o), T = $(h.HTML_SHOP_PAGINATION_ID + " li.tpl.active").first(), S = T.html().replace("[N]", n), l = $(t).parent(), l.html(""), l.append($(S)), g.setDescriptionEllipsis()
    },
    setShopOption: function (e, t) {
        var r, i = ".jshopoptionstpl", a = e.find(i).first(), o = e.find(i)[1], n = ($(o).parent(), a.attr("class")),
            s = a.html(), c = "div", l = a.parent();
        return r = this.prepareShopFeatures(t), e.find(i).each(function (e, t) {
            $(t).remove()
        }), r && this._setShopOption(l, s, r, c, n), e
    },
    _setShopOption: function (e, t, r, i, a) {
        var o, n, s, c, l = Flipcat.ShopList.isCategoryNoHasParameters(r);
        for (o = 0; o < r.length && !(jvars && (jvars.isSearchPage || l) && o > 2); o++) c = r[o], c && c.title && !~c.value.indexOf("null") && (s = t.replace(/\[FeatureOption.value\]/gi, c.value), s = s.replace(/\[FeatureOption.icon\]/gi, c.icon), s = s.replace(/\[FeatureOption.title\]/gi, c.title), n = $("<" + i + ' class="' + a + '">' + s + "</" + i + ">"), e.append(n));
        e.append($('<div class="company-block__options company-block__options_spacer"></div>')), e.parent().parent().parent().find(".company-acw-block-options-footer").html(e.parent().parent().html()), $(".company-acw-block__footer").removeClass("non-full-items"), $(window).width() <= 768 ? ($(".company-acw-block__footer").each(function () {
            var e = $(this).find(".company-acw-block__options").length;
            e < 3 ? ($(this).addClass("non-full-items"), $(window).width() < 340 && $(this).removeClass("two-rows")) : $(this).each(function (e) {
                $(this).removeClass("non-full-items"), $(window).width() < 340 && $(this).closest(".company-acw-block__footer").addClass("two-rows")
            })
        }), $(".company-acw-block__product-name").dotdotdot({
            height: 40,
            truncate: "letter"
        })) : $(".company-acw-block__product-name").dotdotdot({height: 65, truncate: "letter"})
    },
    renderPagination: function (e) {
        var t, r, i, a, o, n = this, s = window.FlipcatWebAppLibrary, c = s._GET("page", 1),
            l = s.pagination(c, e.getTotal(), s._GET("limit", n.perPage));
        if ($(n.HTML_SHOP_PAGINATION_ID + " li").each(function (e, o) {
            $(o).hasClass("tpl") ? $(o).hasClass("active") ? (a = $(o).attr("class").replace("tpl", "").replace("active", ""), r = $(o).html()) : (i = $(o).attr("class").replace("tpl", "").replace("active", ""), t = $(o).html()) : $(o).remove()
        }), l.length > 1) {
            var _, d, p, u = window.location.href, h = "&";
            u.indexOf("?") == -1 && (h = "?"), u.indexOf("page=") == -1 && (u += h + "page=1"), $(l).each(function (e, s) {
                _ = decodeURIComponent(u.replace(/page=\d+/, "page=" + s.n)), s.active ? (d = r, p = a) : (d = t, p = i), d = d.replace("[LINK]", _).replace("[N]", s.n), o = $('<li class="' + p + '">' + d + "</li>"), o = FlipcatWebAppLibrary.processTemplateLinks(o), o.find("a").first().click(n.onPageClick), $(n.HTML_SHOP_PAGINATION_ID).append(o)
            })
        }
    },
    getPageNumber: function (e) {
        return e.replace(/.*\?.*&page=(\d+).*/, "$1")
    },
    prepareShopFeatures: function (e) {
        var t, r, i, a, o, n, s, c, l, _, d, p, u, n = !1;
        if (isset(e.params)) {
            t = ["minorder", "deliverycost", "time", "worktime"], 1 == e.display_distance && t.push("distance"), r = array_fill_keys(t, 1), i = {
                minorder: 1,
                deliverycost: 1,
                worktime: 1
            }, a = FlipcatWebAppLibrary.getCurrenciesArray(), o = 0, n = [];
            for (p in e.params) if (s = e.params[p], c = isset(s.title) ? s.title : null, isset(c) && isset(r[c])) {
                if (l = array_search(c, t), isset(s.value) && (d = s.value), _ = "", isset(i[c]) && isset(s.unit) && (s.unit = trim(s.unit), _ = " " + (isset(a[s.unit]) ? a[s.unit] : s.unit)), "time" == c && isset(d)) {
                    var h = d;
                    switch (d = intval(d), s.unit) {
                        case"hour":
                            _ = " " + FlipcatWebAppLibrary.pluralize(d, "", trans("messages.oneHour"), trans("messages.twoHours"), trans("messages.fiveHours"));
                            break;
                        case"мин":
                            _ = " " + FlipcatWebAppLibrary.pluralize(d, "", trans("oneMin"), trans("twoMins"), trans("fiveMins"));
                            break;
                        case"month":
                            _ = " " + FlipcatWebAppLibrary.pluralize(d, "", trans("messages.oneMonth"), trans("messages.twoMonths"), trans("messages.fiveMonths"));
                            break;
                        case"week":
                            _ = " " + FlipcatWebAppLibrary.pluralize(d, "", trans("messages.oneWeek"), trans("messages.twoWeeks"), trans("messages.fiveWeeks"));
                            break;
                        case"year":
                            _ = " " + FlipcatWebAppLibrary.pluralize(d, "", trans("messages.oneYear"), trans("messages.twoYears"), trans("messages.fiveYears"));
                            break;
                        default:
                            _ = " " + s.unit
                    }
                    d = str_replace(".", ",", parseFloat(h))
                }
                if ("distance" == c && isset(d)) {
                    switch (d = round(floatval(d), 1), s.unit) {
                        case"meters":
                            _ = " " + FlipcatWebAppLibrary.pluralize(intval(d), "", trans("messages.oneMeter"), trans("messages.twoMeters"), trans("messages.fiveMeters"));
                            break;
                        case"kilometers":
                            _ = " " + FlipcatWebAppLibrary.pluralize(intval(d), "", trans("messages.oneKilometer"), trans("messages.twoKilometers"), trans("messages.fiveKilometers"));
                            break;
                        default:
                            _ = " " + s.unit
                    }
                    d = str_replace(".", ",", d)
                }
                isset(d) && (n[l] = {
                    value: d + " " + _,
                    title: trans(this.shopOptionsOrderTitles[l]),
                    icon: this.shopOptionsOrderIcons[l]
                }, o++)
            }
            if (o || (n = !1), n) for (u = 0; u < 4; u++) isset(n[u]) || (n[u] = ["empty"])
        }
        return n
    },
    initSortForm: function () {
        var e = Flipcat.ShopList, t = $(e.HTML_INPUT_DEFAULT_SORT_VALUE_ID), r = e.SORT_BY_POPULAR;
        t[0] && (r = t.val()), e.sortCriteria = r, $(e.HTML_SORT_VARIANTS_SHOW_ID).click(e.toggleSortPopup), $(window).click(e.hideSortPopup), $(e.HTML_SORT_VARIANTS_BLOCK_ID + " a").click(e.setSortCriteria), $(e.HTML_MOBILE_SORT_VARIANTS_LABEL_CSS).click(e.setSortCriteria), $(e.HTML_MOBILE_SORT_VARIANTS_LABEL_CSS).click(e.checkMobileRadioButton)
    },
    toggleSortPopup: function () {
        var e = Flipcat.ShopList;
        return $(e.HTML_SORT_VARIANTS_BLOCK_ID).toggleClass("hide"), !1
    },
    hideSortPopup: function () {
        var e = Flipcat.ShopList;
        $(e.HTML_SORT_VARIANTS_BLOCK_ID).addClass("hide")
    },
    setSortCriteria: function (e) {
        var t, r, i, a = Flipcat.ShopList, o = $(e.target), n = o.data("by"), s = new Request;
        if ($(a.HTML_SORT_VARIANTS_BLOCK_ID).addClass("hide"), a.sortCriteria != n) {
            t = $(a.HTML_SORT_VARIANTS_BLOCK_ID + " a").first(), t.text(o.text()), t.attr("data-by", n), a.sortCriteria = n, r = $(a.HTML_SORT_VARIANTS_SHOW_ID), r.text(o.text()), $(a.HTML_SORT_VARIANTS_BLOCK_ID + " a").each(function (e, t) {
                e > 0 && (t = $(t), t.parent().removeClass("hide"), t.data("by") == n && t.parent().addClass("hide"))
            }), i = new ShopsFilter(s, a.getTargetItems(), a.perPage);
            var c = i.filter();
            a.renderShops(c, null, i)
        }
        return !1
    },
    checkMobileRadioButton: function (e) {
        return $("#" + e.target.getAttribute("for")).prop("checked", !0), !1
    },
    initChooseSeliveryTypeForm: function () {
        var e = Flipcat.User, t = Flipcat.ShopList;
        $(e.HTML_INPUT_CHOOSE_SHIPPING_TYPE_DELIVERY_ID).bind("change", t.onSelectShippingTypeDelivery), $(e.HTML_INPUT_CHOOSE_SHIPPING_TYPE_PICKUP_ID).bind("change", t.onSelectShippingTypePickup), $(e.HTML_INPUT_MOBILE_CHOOSE_SHIPPING_TYPE_DELIVERY_ID).bind("change", t.onSelectShippingTypeDelivery), $(e.HTML_INPUT_MOBILE_CHOOSE_SHIPPING_TYPE_PICKUP_ID).bind("change", t.onSelectShippingTypePickup)
    },
    onSelectShippingTypeDelivery: function (e) {
        if (e.target.checked) {
            var t = Flipcat.ShopList, r = t.HTML_SHIPPING_TYPE_ACTIVE_CSS.replace(".", "");
            t.filterByShippingType(t.HTML_DELIVERY_OBJECTS_DATA_ID, t.HTML_DELIVERY_OBJECTS_COUNT_INP_ID), $(t.HTML_SHIPPING_TYPE_ACTIVE_CSS).removeClass(r), $(e.target).parent().addClass(r)
        }
    },
    onSelectShippingTypePickup: function (e) {
        if (e.target.checked) {
            var t = Flipcat.ShopList, r = t.HTML_SHIPPING_TYPE_ACTIVE_CSS.replace(".", "");
            t.filterByShippingType(t.HTML_PICKUP_OBJECTS_DATA_ID, t.HTML_PICKUP_OBJECTS_COUNT_INP_ID), $(t.HTML_SHIPPING_TYPE_ACTIVE_CSS).removeClass(r), $(e.target).parent().addClass(r)
        }
    },
    filterByShippingType: function (e, t) {
        var r, i, a = new Request, o = Flipcat.ShopList, n = $(e).val();
        try {
            n = JSON.parse(n), o.data.catalogs = n, o.data.total_count = $(t).val()
        } catch (s) {
        }
        r = new ShopsFilter(a, o.getTargetItems(), o.perPage), i = r.filter(), o.renderShops(i, null, r), o.setMessage(count(i))
    },
    setMessage: function (e, t) {
        var r, i, a = Flipcat, o = a.ShopList, n = a.CShopList, s = __("messages.Empty_shop_list_for_location");
        return o.isAgSearchPage && 0 === e ? (o.isChoosedWithProduct() ? s = $(o.HTML_SEARCH_WIH_GOODS_TAB_CONTENT_ID) : (s = $(o.HTML_SEARCH_COMPANIES_TAB_CONTENT_ID), $(o.HTML_SEARCH_WIH_GOODS_TAB_CONTENT_ID)), void (s[0] && (FlipcatWebAppLibrary.removeSuccessMessage(s), i = n.getEmptyResultMsg(), window.jvars && jvars.categoriesTree && (i = __("messages.Empty_shop_list_for_filter")), t && (i = t), s.prepend(FlipcatWebAppLibrary.getSuccessMessage(i)), $("#srchBackLink").click(n.onSrchBackLinkClick)))) : ($("#selectOnMap")[0] || (s = __("messages.Empty_shop_list_for_filter"), t && (s = t)), $(o.HTML_INFOMESSAGE_CSS).each(function (e, t) {
            t = $(t), $.trim(t.text()) == s && (r = $(t).parent())
        }), r || (r = $('<div class="hide"><div class="alert ' + o.HTML_INFOMESSAGE_CSS.replace(".", "") + '">' + s + "</div></div>"), $(o.HTML_INFOMESSAGE_PLACE_CSS).first().after(r)), void (0 == e ? (r.removeClass("hide"), $("#sortSection").addClass("hide")) : (r.addClass("hide"), $("#sortSection").removeClass("hide"))))
    },
    onChangeSearchTab: function (e) {
        var t = Flipcat.ShopList;
        t.onChangeStdFilter(e)
    },
    getTargetItems: function () {
        var e, t, r = Flipcat.ShopList;
        FlipcatWebAppLibrary;
        return r.isAgSearchPage() && (e = 1), t = r.data.catalogs, e && r.isChoosedWithProduct() && (t = r.data.catalogsWithProducts), t
    },
    isChoosedWithProduct: function () {
        return $(Flipcat.ShopList.HTML_SEARCH_WIH_GOODS_TAB_ID).hasClass("active") ? 1 : 0
    },
    isAgSearchPage: function () {
        return "/srch" == FlipcatWebAppLibrary.REQUEST_URI(1)
    },
    getCompanyProductsHtml: function (e) {
        if (!e.items || !e.items.length) return "";
        var t, r, i, a = $("#companyWithProductItemTpl").html(), o = [], n = (Flipcat.ShopList, ""),
            s = Flipcat.currenciesMap;
        for (t = 0; t < e.items.length; t++) n = "", i = e.items[t], r = a.replace("[productName]", i.name), n = i.is_loyalty_product && 1 == i.is_loyalty_product ? s && s[i.currency.toLowerCase()] ? s[i.currency.toLowerCase()] : i.currency : s && s[e.default_currency.toLowerCase()] ? s[e.default_currency.toLowerCase()] : e.default_currency, r = r.replace("[productPrice]", (parseFloat(i.discount_price) ? Math.round(i.discount_price) : i.price) + " " + n), r = i.photos && i.photos[0] && i.photos[0].big_url ? r.replace('data-src=""', 'src="' + i.photos[0].big_url + '"') : r.replace('data-src=""', 'src="' + Flipcat.defaultProductImage + '"'), r = r.replace("data-href", 'href="/company/' + e.hfu_company_name + "/" + FlipcatWebAppLibrary.transliteUrl(i.parent_category) + "/?id=" + i.parent_category_id + '"'), o.push(r);
        return o.join("")
    },
    getActiveShippingTypeCb: function () {
        var e, t, r, i = (Flipcat.ShopList, $("#glsw"));
        if (i[0] && (e = i.css("display"), e = "block" == e), e) for (t = i.find("input"), r = 0; r < t.length; r++) if (t[r].checked) return t[r];
        return !1
    },
    setChooseShippingTypeFormContainerDisplay: function (e) {
        var t = $("#glsw");
        t[0] && t.css("display", e)
    },
    setActiveBookmarkonSrchPage: function () {
        var e, t = Flipcat.ShopList, r = FlipcatWebAppLibrary;
        window.jvars && jvars.isSearchPage && (e = r._GET("byGood", 0), e ? Flipcat.ShopCatNavigator.onClickBookmark({target: $(t.HTML_SEARCH_WIH_GOODS_TAB_ID)[0]}) : Flipcat.ShopCatNavigator.onClickBookmark({target: $(t.HTML_SEARCH_COMPANIES_TAB_ID)[0]}))
    },
    setFilterInputsFromUrl: function () {
        var e, t, r, i, a = Flipcat.ShopList, o = FlipcatWebAppLibrary, n = "checked";
        if (window.jvars && jvars.isSearchPage) for (e = o._GET("f", []), t = $(a.HTML_FORM_STD_FILTERS_BLOCK_ID + " input[type=checkbox]"), t.prop(n, !1), r = 0; r < e.length; r++) i = $("#" + e[r]), i[0] && i.prop(n, !0)
    },
    isCategoryNoHasParameters: function (e) {
        if (jvars.isAgregateUseWebCategories) {
            var t, r = e, i = 0;
            for (t = 0; t < r.length; t++) r[t] && "empty" != r[t][0] && i++;
            if (4 == i) return !0
        }
        return !1
    }
};
window.Flipcat.ShopList = ShopList, window.Flipcat = window.Flipcat || {};
var ShopCatFilter = {
    HTML_SHOP_CATEGORIES_ID: "#left-shop-categories", HTML_INPUT_CSS: ".search", init: function () {
        this.lib = window.FlipcatWebAppLibrary, $(this.HTML_SHOP_CATEGORIES_ID)[0] && (this.input = $(this.HTML_SHOP_CATEGORIES_ID + " input" + this.HTML_INPUT_CSS).first(), this.block = $(this.HTML_SHOP_CATEGORIES_ID), this.setListeners())
    }, onKeyDown: function () {
        var e, t = this, r = t.input.val().toLowerCase(), i = t.block.find(" ul li a");
        return t.block.find("ul").each(function (e, t) {
            $(t).addClass("hide")
        }), i.hide(), t.block.find("li").hide(), r.length ? void i.each(function (i, a) {
            e = $.trim($(a).text().replace(/\(\d+\)/, "")).toLowerCase(), ~e.indexOf(r) && t.displayBranch($(a))
        }) : (t.block.find("ul").first().removeClass("hide"), t.block.find("li").show(), void i.show())
    }, displayBranch: function (e) {
        for (var t = e.parent()[0]; t && "ASIDE" != t.tagName;) "LI" == t.tagName && ($(t).find("a").first().show(), $(t).show()), "UL" == t.tagName && $(t).removeClass("hide"), t = t.parentNode
    }, setListeners: function () {
        var e = this;
        e.input.bind("keydown", function () {
            setTimeout(function () {
                e.onKeyDown()
            }, 100)
        })
    }
};
window.Flipcat.ShopCategoryFilter = ShopCatFilter, window.Flipcat = window.Flipcat || {};
var ShopFavorite = {
    HTML_SHOP_CATEGORIES_CSS: ".left-shop-categories",
    HTML_SHOP_CATEGORIES_MOBILE_ID: "#shopcategories",
    HTML_ACTIVE_LINK_CSS: ".left-menu-active-link",
    HTML_PRODUCT_SORT_CSS: ".product-sort-link",
    HTML_PRODUCT_BLOCK_CSS: "#goods-catalog",
    HTML_PRODUCT_SORT_BLOCK_ID: "#sortProductsBlock",
    HTML_PRODUCT_SORT_UP_ARROW_CSS: "arrow_down_mirror",
    HTML_SHOP_INFO_BLOCK_ID: "#shopInfo",
    HISTORY_API: !(!window.history || !window.history.pushState),
    categoriesProducts: {},
    HTML_SHOP_FAVORITE_CSS: "#favorite-products",
    HTML_SHOP_PROFILE_FAVORITE_CSS: "#favorite_product",
    HTML_SHOP_COUNT_FAVORITE_CSS: "#favorite-count",
    HTML_SHOP_SECTION_FAVORITE_CSS: "#favorite-section",
    HTML_SHOP_ADD_TO_FAVORITE_CSS: ".favorite-add",
    HTML_SHOP_REMOVE_FROM_FAVORITE_CSS: ".favorite-remove",
    HTML_FAVORITE_PRODUCT_SIGN_FAVORITE: ".fa-star",
    HTML_FAVORITE_PRODUCT_SIGN_UNFAVORITE: ".fa-star-o",
    HTML_CURRENT_CATEGORY_BLOCK_CSS: ".current-category",
    HTML_PREV_CATEGORY_BUTTON_CSS: ".prev-category",
    HTML_NEXT_CATEGORY_BUTTON_CSS: ".next-category",
    HTML_BACK_BUTTON_CSS: ".scopeUp",
    HTML_NAV_FAV_CSS: ".navFavoriteButton",
    HTML_PRODUCT_POPUP_BLOCK_CSS: "#goods-catalog-popup",
    init: function (e) {
        this.lib = window.FlipcatWebAppLibrary, this._get = e._get, this.messageFail = e.messageFail, this.initCartLink = e.initCartLink, this.setOnShopItemPopupListener = e.setOnShopItemPopupListener, $(this.HTML_SHOP_FAVORITE_CSS) && (this.block = $(this.HTML_SHOP_FAVORITE_CSS), this.setListeners())
    },
    setListeners: function () {
        var e, t = this;
        t.HISTORY_API && (t.block.click(function () {
            return ShopFavorite.onClick($(this)), !1
        }), $(t.HTML_PRODUCT_BLOCK_CSS + "," + t.HTML_PRODUCT_POPUP_BLOCK_CSS + "," + Flipcat.ShopCatNavigator.HTML_PRODUCT_MOBILE_SLIDER_BLOCK_CSS).on("click", t.HTML_SHOP_ADD_TO_FAVORITE_CSS, function () {
            return ShopFavorite.addToFavorite($(this)), !1
        }), $(t.HTML_PRODUCT_BLOCK_CSS + "," + t.HTML_PRODUCT_POPUP_BLOCK_CSS + "," + Flipcat.ShopCatNavigator.HTML_PRODUCT_MOBILE_SLIDER_BLOCK_CSS).on("click", t.HTML_SHOP_REMOVE_FROM_FAVORITE_CSS, function () {
            return ShopFavorite.removeFromFavorite($(this)), !1
        }), $(t.HTML_NAV_FAV_CSS).click(function () {
            return ShopFavorite.onClick($(this)), !1
        }), e = $(Flipcat.ShopCatNavigator.HTML_SHOP_MOBILE_HOR_CATEGORIES_CSS + " a").first(), e[0] && ~e.attr("href").indexOf("/getFavorite") && e.click(function (e) {
            return ShopFavorite.onClick($(this)), !1
        }))
    },
    onClick: function (e) {
        var t = $.cookie(Flipcat.AuthMarker.COOKIE_NAME), r = this, i = e.attr("href");
        i == r.HTML_SHOP_PROFILE_FAVORITE_CSS && (i = "/getFavorite"), i = i + "/" + t, "#" != i && (Flipcat.ShopCatNavigator.isFavoriteProductPage = !0, r.getUrl(r.onLoadData, i + ".json", r.onFailLoadData))
    },
    addToFavorite: function (e) {
        var t = $.cookie(Flipcat.AuthMarker.COOKIE_NAME), r = e.data("id"), i = this,
            a = e.attr("data-href") + "/" + t + "/" + r;
        FlipcatWebAppLibrary.lock(i.HTML_SHOP_ADD_TO_FAVORITE_CSS, e), i._get(i.onAdded, a, i.onFailAdded)
    },
    removeFromFavorite: function (e) {
        var t = $.cookie(Flipcat.AuthMarker.COOKIE_NAME), r = e.data("id"), i = this,
            a = e.data("href") + "/" + t + "/" + r;
        FlipcatWebAppLibrary.lock(i.HTML_SHOP_REMOVE_FROM_FAVORITE_CSS, e), i._get(i.onRemove, a, i.onFailRemove)
    },
    onLoadData: function (e) {
        var t, r = Flipcat.ShopFavorite, i = 0, a = Flipcat.ShopCatNavigator;
        if (a.requestSended = 0, a.setLoadingMessage("#mProductList", 0), a.setLoadingMessage(Flipcat.ShopCatNavigator.HTML_PRODUCTS_CONTAINER_ID, 0, ".goods-block__item"), e.errorMessage || e.remoteErrorInfo) return void r.onFailLoadData(e.errorMessage + (e.remoteErrorInfo ? e.remoteErrorInfo : ""));
        a.shopNameTranslite = e.shopNameTranslite, a.categoryNameTranslite = e.categoryNameTranslite, FlipcatWebAppLibrary.unlock(".desktop-right-col");
        for (t in e.list) e.list[t].favorite = 1, i++;
        Flipcat.ShopCatNavigator.renderProducts(e.list, "rur"), e.breadCrumbs && Flipcat.ShopCatNavigator.renderBreadCrumbs(e.breadCrumbs), r.mobileAction()
    },
    onAdded: function (e) {
        var t = Flipcat.ShopFavorite, r = e.id, i = $(t.HTML_PRODUCT_BLOCK_CSS).find("[for=good-item" + r + "]");
        t._onAdded(t, r, i, "good-item"), i = $(t.HTML_PRODUCT_POPUP_BLOCK_CSS).find("[for=pgood-item" + r + "]"), t._onAdded(t, r, i, "pgood-item", 1), i = $(Flipcat.ShopCatNavigator.HTML_PRODUCT_MOBILE_SLIDER_BLOCK_CSS).find("[for=msgood-item" + r + "]"), t._onAdded(t, r, i, "msgood-item", 1)
    },
    _onAdded: function (e, t, r, i, a) {
        if (FlipcatWebAppLibrary.unlock(e.HTML_SHOP_ADD_TO_FAVORITE_CSS), r.attr("data-href", "/removeFavorite"), r.removeClass("favorite-add").addClass("favorite-remove"), $("#" + i + t).prop("checked", !0), r.html($("#heartSvg").html()), !a) var o = parseInt($(e.HTML_SHOP_COUNT_FAVORITE_CSS).text()) + 1;
        $(e.HTML_SHOP_COUNT_FAVORITE_CSS).html(o), o > 0 && $(e.HTML_SHOP_SECTION_FAVORITE_CSS).removeClass("hide")
    },
    onFailAdded: function (e) {
        o.messageFail(__("messages.Fail_add_to_fav"))
    },
    onRemove: function (e) {
        var t = Flipcat.ShopFavorite, r = e.id, i = $(t.HTML_PRODUCT_BLOCK_CSS).find("[for=good-item" + r + "]");
        t._onRemove(t, r, i, "good-item"), i = $(t.HTML_PRODUCT_POPUP_BLOCK_CSS).find("[for=pgood-item" + r + "]"), t._onRemove(t, r, i, "pgood-item", 1), i = $(Flipcat.ShopCatNavigator.HTML_PRODUCT_MOBILE_SLIDER_BLOCK_CSS).find("[for=msgood-item" + r + "]"), t._onRemove(t, r, i, "msgood-item", 1)
    },
    _onRemove: function (e, t, r, i, a) {
        if (FlipcatWebAppLibrary.unlock(e.HTML_SHOP_REMOVE_FROM_FAVORITE_CSS), r.attr("data-href", "/addFavorite"), $("#" + i + t).prop("checked", !1), r.html($("#heartEmptySvg").html()), r.removeClass("favorite-remove").addClass("favorite-add"), !a) {
            var o = parseInt($(e.HTML_SHOP_COUNT_FAVORITE_CSS).text()) - 1;
            $(e.HTML_SHOP_COUNT_FAVORITE_CSS).html(o), o <= 0 && $(e.HTML_SHOP_SECTION_FAVORITE_CSS).addClass("hide")
        }
    },
    onFailRemove: function (e) {
        Flipcat.ShopFavorite.messageFail(__("messages.Fail_remove_from_fav"))
    },
    setFavorite: function (e) {
        var t;
        return t = '<a href="/removeFavorite" class="project-favorite favorite-remove" data-id="' + e.id + '">', t += '<i class="fa fa-2x fa-star" aria-hidden="true"></i>', t += "</a>"
    },
    setActiveLink: function () {
        var e = this, t = e.HTML_ACTIVE_LINK_CSS.replace(".", "");
        $(e.HTML_ACTIVE_LINK_CSS).removeClass(t), $(e.HTML_SHOP_FAVORITE_CSS).addClass(t), $("#profileSection").find(".in").removeClass("in"), $("#profileSection").find(".active").removeClass("active"), $("#profileSection").find(e.HTML_SHOP_FAVORITE_CSS).removeClass(t), $("#profileSection").find("#favorite_product").addClass("in"), $("#profileSection").find("#favorite_product").addClass("active"), $("#profileSection").find("#favorite-products").closest("li").addClass("active")
    },
    onFailLoadData: function (e) {
        FlipcatWebAppLibrary.unlock(".desktop-right-col");
        var t = Flipcat.ShopFavorite;
        e ? t.messageFail(e) : t.messageFail(__("Unierror"))
    },
    getUrl: function (e, t, r) {
        FlipcatWebAppLibrary.lock(".desktop-right-col");
        var i = this;
        i.lastRequest = t, i._get(e, t, r)
    },
    mobileAction: function () {
        if (Flipcat.Desktop.isMobile()) {
            var e, t, r = this;
            $(r.HTML_PRODUCT_BLOCK_CSS).removeClass("hidden-xs"), $(r.HTML_SHOP_CATEGORIES_MOBILE_ID).addClass("hide"), $(r.HTML_SHOP_SECTION_FAVORITE_CSS).addClass("hide"), r.HISTORY_API && (e = window.location.href.replace(window.location.hash, ""), history.pushState(null, null, window.location.href)), $(r.HTML_SHOP_INFO_BLOCK_ID).addClass("hide"), t = $(r.HTML_SHOP_CATEGORIES_MOBILE_ID).find("a").first().attr("href"), $(r.HTML_PREV_CATEGORY_BUTTON_CSS).addClass("hide"), $(r.HTML_NEXT_CATEGORY_BUTTON_CSS).removeClass("hide").attr("href", t), $(r.HTML_CURRENT_CATEGORY_BLOCK_CSS).removeClass("hide"), $(r.HTML_CURRENT_CATEGORY_BLOCK_CSS).find("h5").first().text(__("messages.Favorites_shop_title")), $(r.HTML_SHOP_CATEGORIES_MOBILE_ID)[0] ? $(r.HTML_BACK_BUTTON_CSS).attr("href", window.location.href) : $(r.HTML_NEXT_CATEGORY_BUTTON_CSS).attr("href", window.location.href), window.scrollTo(0, 0)
        } else {
            r = Flipcat.ShopCatNavigator;
            var i = $(r.HTML_CATALOG_BM_ID)[0];
            i && r.onClickBookmark({target: i})
        }
    }
};
window.Flipcat.ShopFavorite = ShopFavorite, Flipcat.MultiproductManager = {
    HTML_CONTROLS_CSS: ".multiproduct-options",
    multiproducts: {},
    init: function () {
        var e, t = this, r = null;
        $(this.HTML_CONTROLS_CSS).each(function (i, a) {
            try {
                if (a = $(a), a.parent().hasClass("tpl")) return;
                r = JSON.parse(a.find("textarea").first().val()), e = a.find("select"), e.each(function (e, i) {
                    i.controller = t.getMultiproduct(a.data("multiproductid"), r, a)
                }), e.bind("change", function (e) {
                    e.target.controller.onChange(e)
                })
            } catch (o) {
            }
        })
    },
    getMultiproduct: function (e, t, r) {
        var i = this;
        return i.multiproducts[e] ? r && (i.multiproducts[e].selects = [], i.multiproducts[e].setView(r)) : i.multiproducts[e] = new Multiproduct(e, t, r), i.multiproducts[e]
    }
}, Flipcat.MultiproductMobileManager = {
    HTML_CONTROLS_CSS: ".mobile-multiproduct-options",
    multiproducts: {},
    init: function () {
        var e, t = this, r = null;
        $(this.HTML_CONTROLS_CSS).each(function (i, a) {
            try {
                if (a = $(a), a.parent().hasClass("tpl")) return;
                r = JSON.parse(a.find("textarea").first().val()), e = a.find("select"), e.each(function (e, i) {
                    i.controller = t.getMultiproduct(a.data("multiproductid"), r, a)
                }), e.bind("change", function (e) {
                    e.target.controller.onChange(e)
                })
            } catch (o) {
            }
        })
    },
    getMultiproduct: function (e, t, r) {
        var i = this;
        return i.multiproducts[e] ? r && (i.multiproducts[e].selects = [], i.multiproducts[e].setView(r)) : i.multiproducts[e] = new Multiproduct(e, t, r), i.multiproducts[e]
    }
}, Multiproduct.prototype = {
    initalize: function (e, t, r) {
        this.items = t.merge_items;
        var i, a, o = {}, n = [];
        for (i = 0; i < this.items.length; i++) {
            for (n = [], o = {}, a = 0; a < this.items[i].params.length; a++) o[this.items[i].params[a].value_id] ? n.push(a) : o[this.items[i].params[a].value_id] = 1;
            for (a = n.length - 1; a > -1; a--) this.items[i].params.splice(n[a], 1)
        }
        this.setMergeParams(this.items), this.setView(r)
    }, onChange: function (e) {
        var t, r, i = e.target, a = this, o = a.selects, n = $(i).val(), s = $(i).data("param_id"), c = null;
        for (t = 0; t < o.length; t++) if (o[t].parameterId == s) o[t].changed = 1, c = o[t].defaultValue, n > 0 && (o[t].defaultValue = n), a.setProductViewData(); else if (r = a.rebuildSelect(o[t].control, s, n, o[t].changed), !r) if (c = a.getPrevTargetValue(c, i)) {
            FlipcatWebAppLibrary.selectByValue(i, c);
            var l = a.getSelectObjectByTargetParameterId(s);
            l ? l.defaultValue = c : alert("Error 2")
        } else alert("Error 1");
        a.setProductViewData()
    }, setView: function (e) {
        var t, r = this, i = !!Flipcat.MultiproductManager.safeParamId && Flipcat.MultiproductManager.safeParamId,
            a = ".jmultiproductitem";
        r.view = e, e.find("select").each(function (e, a) {
            t = {}, t.control = a, t.changed = 0, t.defaultValue = a.value, t.parameterId = a.getAttribute("data-param_id"), e = r.getSelectIndex(r.selects, t.parameterId), e == -1 ? r.selects.push(t) : i && (r.selects[e].control = a, alert(t.defaultValue), FlipcatWebAppLibrary.selectByValue(a, t.defaultValue))
        }), e.find("select").each(function (e, t) {
            r.selectFirstItem(t)
        }), r.productIdDOMElement = e.parents(a).first().find("button.cart-add.jcart-add-popup-button").first(), r.productIdDOMElementPlus = e.parents(a).first().find("button.cart-add.jcart-add-popup-button")[1], r.productIdDOMElementPlus = r.productIdDOMElementPlus ? $(r.productIdDOMElementPlus) : 0, r.productIdDOMElementMinus = e.parents(a).first().find("button.dec").first(), r.setProductIdDOMElementInList(), r.productPopupSliderDOMContainer = e.parents(a).first().find(".goods-popup__slider").first(), r.setProductPhotoDOMElementInList(), r.productPhotoDOMElementInSlideMobile = $("#msim" + e.data("multiproductid")), r.productPriceDOMElement = e.parents(a).first().find(".jmultipriceview").first(), r.setProductPriceDOMElementInList(), r.setProductHintPhotoDOMElementInList(), r.productPopupFirstParameterValueElement = e.parents(a).first().find(".sc-item-param-value")[0], r.setProductFirstParameterValueElementHintInList(), r.productPopupSecondParameterValueElement = e.parents(a).first().find(".sc-item-param-value")[1], $(r.productPopupFirstParameterValueElement).hasClass("tpl") && (r.productPopupFirstParameterValueElement = e.parents(a).first().find(".sc-item-param-value")[1], r.productPopupSecondParameterValueElement = e.parents(a).first().find(".sc-item-param-value")[2]), r.setProductSecondParameterValueElementHintInList(), r.setProductIdDOMElementMinusInList(), r.setProductIdDOMElementPlusInList(), r.productPopupSecondParameterValueElement = r.productPopupSecondParameterValueElement ? $(r.productPopupSecondParameterValueElement) : null, r.productPopupFirstParameterValueElement = r.productPopupFirstParameterValueElement ? $(r.productPopupFirstParameterValueElement) : null, r.productFirstParameterValueElementHintInList = r.productFirstParameterValueElementHintInList ? $(r.productFirstParameterValueElementHintInList) : null, r.productSecondParameterValueElementHintInList = r.productSecondParameterValueElementHintInList ? $(r.productSecondParameterValueElementHintInList) : null, i && e.find("select").each(function (e, t) {
            0 == e && r.onChange({target: t})
        }), 1 == e.find("select").length && e.find("select").each(function (e, t) {
            t.options[0].text == __("Any") && $(t.options[0]).remove()
        }), r.view = e
    }, setMergeParams: function (e) {
        for (var t = 0; t < e.length; t++) this.parameters.push(e[t].param)
    }, rebuildSelect: function (e, t, r, i) {
        var a, o, n, s, c = e.value, l = this, _ = {}, d = e.getAttribute("data-param_id"), p = 1, u = !1,
            h = $(e).html(), f = "?", g = "?", m = "?", C = 0, T = "?", I = 0;
        for (0 == c && (c = l.getPrevTargetValue(null, e), C = 1), e.options.length = 0, e.options[0] = new Option(__("messages.Any"), 0), a = 0; a < l.items.length; a++) {
            if (n = l.getHashParams(l.items[a]), n[t] && n[t].value == r || 0 == r) {
                f = n[t].parameterTitle, m = n[t].text;
                for (o in n) o == d && (g = n[o].parameterTitle, _[n[o].value] || (_[n[o].value] = 1, s = new Option(n[o].text, n[o].value), e.options[p] = s, n[o].value == c && (l.selectItem(s), I = 1, u = !0), p++))
            }
            0 == I && l.selectFirstItem(e)
        }
        if (!u && i && c > 0) {
            if (T = l.getPrevTargetDisplayValue(e, d), !confirm(__("messages.Sorry_product_with_param_") + ' "' + g + ": " + T + ", " + f + ": " + m + '" ' + __("messages._no_exists") + ".\n" + __("messages.Do_search_products_with_other_parameter_") + ' "' + g + '" ' + __("messages._for_selected_your_") + ' "' + f + ": " + m + '"?')) return $(e).html(h), C && (c = "0"), FlipcatWebAppLibrary.selectByValue(e, c), !1;
            var S = l.getSelectObjectByTargetParameterId(d);
            S && e.options[1] && (S.defaultValue = e.options[1].value)
        }
        return !0
    }, getHashParams: function (e) {
        var t, r, i = e.params, a = {};
        for (t = 0; t < i.length; t++) r = i[t], a[r.param_id] = {
            text: r.value,
            value: r.value_id,
            parameterTitle: $.trim(r.param)
        };
        return a
    }, getPrevTargetValue: function (e, t) {
        if (null === e) {
            var r, i = this;
            for (r = 0; r < i.selects.length; r++) if (i.selects[r].control == t) return i.selects[r].defaultValue
        }
        return e
    }, selectExists: function (e, t) {
        for (var r = 0; r < e.length; r++) if (e[r].parameterId == t) return !0;
        return !1
    }, getSelectIndex: function (e, t) {
        for (var r = 0; r < e.length; r++) if (e[r].parameterId == t) return r;
        return -1
    }, selectFirstItem: function (e) {
        e.options[1] && this.selects.length > 1 && this.selectItem(e.options[1])
    }, getPrevTargetDisplayValue: function (e, t) {
        var r, i, a, o, n, s = this;
        for (r = 0; r < s.selects.length; r++) if (s.selects[r].control == e) {
            for (o = s.selects[r].defaultValue, i = 0; i < s.items.length; i++) for (a = 0; a < s.items[i].params.length; a++) if (n = s.items[i].params[a], n.param_id == t && n.value_id == o) return n.value;
            return ""
        }
        return ""
    }, getSelectObjectByTargetParameterId: function (e) {
        var t, r = this;
        for (t = 0; t < r.selects.length; t++) if (r.selects[t].parameterId == e) return r.selects[t];
        return null
    }, selectItem: function (e, t) {
        if (e.setAttribute("selected", !0), e.parentNode && "SELECT" == e.parentNode.tagName && e.parentNode.options) for (var r = 0; r < e.parentNode.options.length; r++) if (e.parentNode.options[r].value == e.value) {
            e.parentNode.selectedIndex = r;
            break
        }
    }, setProductViewData: function () {
        var e, t, r, i, a, o = this, n = (o.selects, "Не важно");
        a = o.getSelectedItem(), a && (e = a.price, t = Flipcat.ShopCatNavigator.currency ? Flipcat.ShopCatNavigator.currency : a.currency, r = a.photos, i = a.id, o.setDisplayValues(r, i, n, n, e, t), o.setDisplayParams(a))
    }, setDisplayParams: function (e) {
        if (e) {
            var t, r = this, i = r.view.parents(".goods-popup").first().find(".sc-item-param-name"), a = [], o = {};
            r.loadDisplayParamsDOMData(i, a), r.setDisplayParamsValues(a, e), a = [], r.getCurrentInitViewData(r.view, o), o.id && (i = o.container.find(".goods-tooltip").first().find(".sc-item-param-name"), r.loadDisplayParamsDOMData(i, a), r.setDisplayParamsValues(a, e)), i = r.view.parents(".goods-info-slider__slide").first().find(".sc-item-param-name"), a = [], i.length && (r.loadDisplayParamsDOMData(i, a), r.setDisplayParamsValues(a, e)), t = r.view.parents(".goods-popup").first().find(".goods-popup__descr").first(), t[0] && t.html(e.description), r.productHintDescription.html(e.description)
        }
    }, setDisplayParamsValues: function (e, t) {
        var r, i, a, o = this, n = o.selects;
        for (r = 0; r < n.length; r++) for (name = trim(o.getNameById(n[r].parameterId, t)).toLowerCase(), i = 0; i < e.length; i++) a = trim(e[i].text().toLowerCase().replace(":", "").replace("-", "")), a == name && (a = e[i].parent().find(".sc-item-param-value").first(), a[0] && a.text(o.getValueById(n[r].parameterId, n[r].control.value, t)))
    }, loadDisplayParamsDOMData: function (e, t) {
        var r;
        for (r = 0; r < e.length; r++) $(e[r]).hasClass("tpl") || t.push($(e[r]))
    }, getNameById: function (e, t) {
        return this.getParamFieldByParamId(e, t, "param")
    }, getValueById: function (e, t, r) {
        var i, a, o = r.params;
        for (i = 0; i < o.length; i++) if (a = o[i], a && a.param_id == e && a.value && a.value_id == t) return a.value
    }, getParamFieldByParamId: function (e, t, r) {
        var i, a, o = t.params;
        for (i = 0; i < o.length; i++) if (a = o[i], a && a.param_id == e && a[r]) return a[r]
    }, getSelectedItem: function () {
        var e, t, r, i = this, a = i.selects, o = [], n = {};
        for (e = 0; e < a.length; e++) 0 != a[e].control.value ? o.push({
            param_id: a[e].parameterId,
            value_id: a[e].control.value
        }) : n[a[e].parameterId] = 1;
        for (o = i.getItemHash(o, n), t = 0; t < i.items.length; t++) if (r = i.getItemHash(i.items[t].params, n), o === r) return i.items[t];
        return null
    }, getItemHash: function (e, t) {
        var r, i = "";
        for (e.sort(function (e, t) {
            if (+e.param_id > +t.param_id) return 1
        }), r = 0; r < e.length; r++) t[e[r].param_id] || (i += "." + e[r].param_id + "." + e[r].value_id);
        return i
    }, setDisplayValues: function (e, t, r, i, a, o) {
        var n, s, c, l, _ = this, d = Flipcat.Cart;
        if (e && e[0] && _.setPhotos(e[0], e), _.productIdDOMElement.attr("data-id", t), _.productIdDOMElementInList.attr("data-id", t), _.productIdDOMElementPlus && _.productIdDOMElementPlus[0] && _.productIdDOMElementPlus.attr("data-id", t), _.productIdDOMElementInListMobile && _.productIdDOMElementInListMobile[0] && _.productIdDOMElementInListMobile.attr("data-id", t), _.productIdDOMElementMinus && _.productIdDOMElementMinus[0] && _.productIdDOMElementMinus.attr("data-id", t), _.productIdDOMElementPlusInList && _.productIdDOMElementPlusInList[0] && _.productIdDOMElementPlusInList.attr("data-id", t), _.productIdDOMElementPlusInListMobile && _.productIdDOMElementPlusInListMobile[0] && _.productIdDOMElementPlusInListMobile.attr("data-id", t), _.productIdDOMElementMinusInList && _.productIdDOMElementMinusInList[0] && _.productIdDOMElementMinusInList.attr("data-id", t), _.productIdDOMElementMinusInListMobile && _.productIdDOMElementMinusInListMobile[0] && _.productIdDOMElementMinusInListMobile.attr("data-id", t), n = d.getShopId(), s = FlipcatWebAppLibrary.storage(n), s && (l = +s[t], l = l ? l : 0, c = Flipcat.ShopCatNavigator.getMultiproductId(t), Flipcat.ShopCatNavigator.setQuantityProductsInListAndPopup(c, l)), r && _.productPopupFirstParameterValueElement && (_.productPopupFirstParameterValueElement.text(r), _.productFirstParameterValueElementHintInList && _.productFirstParameterValueElementHintInList[0] && _.productFirstParameterValueElementHintInList.text(r)), i && _.productPopupSecondParameterValueElement && (_.productPopupSecondParameterValueElement.text(i), _.productSecondParameterValueElementHintInList && _.productSecondParameterValueElementHintInList[0] && _.productSecondParameterValueElementHintInList.text(i)), a) {
            var p = a + " " + (Flipcat.currenciesMap[o] ? Flipcat.currenciesMap[o] : o);
            _.productPriceDOMElement.html(p), _.setViewValue("productPriceDOMElementInList", p), _.setViewValue("productPriceDOMElementInListMobile", p)
        }
    }, setPhotos: function (e, t) {
        var r = e.preview_url, i = this;
        r = r ? r : e.small_url, r = r ? r : e.thumbnail_url, r && (i.productHintPhotoDOMElementInList.attr("src", r), i.productPhotoDOMElementInListMobile && i.productPhotoDOMElementInListMobile[0] && i.productPhotoDOMElementInListMobile.attr("src", r), i.productPhotoDOMElementInSlideMobile && i.productPhotoDOMElementInSlideMobile[0] && i.productPhotoDOMElementInSlideMobile.attr("src", r), i.productPhotoDOMElementInList.attr("src", r)), i.setSlider(t)
    }, setSlider: function (e) {
        var t, r, i, a = this, o = Flipcat.owlOptions, n = 0;
        if (a.productPopupSliderDOMContainer && a.productPopupSliderDOMContainer[0]) {
            var r = a.productPopupSliderDOMContainer.parent();
            a.productPopupSliderDOMContainer.remove(), r.prepend($('<div class="goods-popup__slider"></div')), a.productPopupSliderDOMContainer = r.find(".goods-popup__slider").first()
        }
        if (e.length) for (t = 0; t < e.length; t++) r = e[t], i = r.preview_url, i = i ? i : r.small_url, i = i ? i : r.thumbnail_url, i && a.productPopupSliderDOMContainer && a.productPopupSliderDOMContainer[0] && (a.productPopupSliderDOMContainer.append($('<div class="goods-popup__slide"><img src="' + i + '"></div>')), n++);
        0 == n && a.productPopupSliderDOMContainer && a.productPopupSliderDOMContainer[0] && a.productPopupSliderDOMContainer.append($('<div class="goods-popup__slide"><img src="' + Flipcat.defaultProductImage + '"></div>')), a.productPopupSliderDOMContainer && a.productPopupSliderDOMContainer[0] && a.productPopupSliderDOMContainer.owlCarousel(o)
    }, setProductIdDOMElementInList: function () {
        var e = this, t = e.view, r = {};
        e.getCurrentInitViewData(t, r), e.productIdDOMElementInList = r.container.find(".jcartaddinlist").first(), e.getCurrentInitViewDataMobile(t, r), e.productIdDOMElementInListMobile = r.container.find(".jcartaddinlist").first()
    }, setProductPhotoDOMElementInList: function () {
        var e = this, r = e.view, i = {};
        e.getCurrentInitViewData(r, i), t = i.container.find(".goods-block__item-img").first(), t && t[0] && (e.productPhotoDOMElementInList = t.find("img").first()), e.getCurrentInitViewDataMobile(r, i), t = i.container.find(".jmobsliderunlink").first(), t && t[0] && (e.productPhotoDOMElementInListMobile = t.find("img").first())
    }, setProductHintPhotoDOMElementInList: function () {
        var e, t = this, r = {};
        t.getCurrentInitViewData(t.view, r), e = r.container.find(".goods-tooltip").first(), e && e[0] && (t.productHintPhotoDOMElementInList = e.find("img").first(), t.productHintDescription = e.find(".desc-layout").first())
    }, setProductPriceDOMElementInList: function () {
        var e = this, t = {}, r = ".jmultipriceview";
        e.getCurrentInitViewData(e.view, t), e.productPriceDOMElementInList = t.container.find(r).first(), e.getCurrentInitViewDataMobile(e.view, t), e.productPriceDOMElementInListMobile = t.container.find(r).first()
    }, setProductFirstParameterValueElementHintInList: function () {
        var e, t = this, r = {};
        t.getCurrentInitViewData(t.view, r), e = t.productFirstParameterValueElementHintInList = r.container.find(".goods-tooltip__descr").find("span.sc-item-param-value")[0], $(e).hasClass("tpl") && (t.productFirstParameterValueElementHintInList = r.container.find(".goods-tooltip__descr").find("span.sc-item-param-value")[1])
    }, setProductSecondParameterValueElementHintInList: function () {
        var e, t = this, r = {};
        t.getCurrentInitViewData(t.view, r), e = r.container.find(".goods-tooltip__descr").find("span.sc-item-param-value")[0], $(e).hasClass("tpl") && (t.productSecondParameterValueElementHintInList = r.container.find(".goods-tooltip__descr").find("span.sc-item-param-value")[2])
    }, setProductIdDOMElementPlusInList: function () {
        var e = this, t = {};
        e.getCurrentInitViewData(e.view, t), e.productIdDOMElementPlusInList = t.container.find(".goods-block__amount--plus").first(), e.getCurrentInitViewDataMobile(e.view, t), e.productIdDOMElementPlusInListMobile = t.container.find(".goods-block__amount--plus").first()
    }, setProductIdDOMElementMinusInList: function () {
        var e = this, t = {};
        e.getCurrentInitViewData(e.view, t), e.productIdDOMElementMinusInList = t.container.find(".goods-block__amount--minus").first(), e.getCurrentInitViewDataMobile(e.view, t), e.productIdDOMElementMinusInListMobile = t.container.find(".jdecinproductlist").first()
    }, getCurrentInitViewData: function (e, t) {
        var r;
        e && (t.id = e.attr("data-multiproductid"), t.id && (r = $("a[data-id=popup-good" + t.id + "]").first(), r && (t.container = r.parent(), t.container[0] || (r = 0)))), r || (t = {
            id: 0,
            container: null
        })
    }, getCurrentInitViewDataMobile: function (e, t) {
        var r;
        e && (t.id = e.attr("data-multiproductid"), t.id && (r = $("#mg" + t.id), r && (t.container = r, t.container[0] || (r = 0)))), r || (t = {
            id: 0,
            container: null
        })
    }, setViewValue: function (e, t) {
        var r = this;
        r[e] && r[e][0] && r[e].html(t)
    }
}, window.Flipcat = window.Flipcat || {};
var BreadCrumbs = {
    HTML_FAVORITES_ID: "#favorites", init: function (e) {
        this.HTML_BREAD_CRUMBS_ID = e.HTML_BREAD_CRUMBS_ID, this.HTML_BREAD_CRUMBS_AREA_ID = e.HTML_BREAD_CRUMBS_AREA_ID, this.setListeners()
    }, render: function (e, t) {
        var r, i, a, o, n, s = e, c = $(this.HTML_BREAD_CRUMBS_ID), l = s.length, _ = c.find("li.tpl.link").html(),
            d = c.find("li.tpl.span").html(), p = "";
        if (s && l) {
            if (c.find("li").each(function (e, t) {
                t = $(t), t.hasClass("tpl") || t.remove()
            }), s.length < 2) return;
            for (r = 0; r < l; r++) r != l - 1 ? (i = _, o = "header__navbar-item link", a = 1, n = p) : (o = "span last header__navbar-item_unactive", i = d, n = ""), i = i.replace("[LINK]", s[r].link).replace("[TITLE]", s[r].title), i = '<li class="' + o + '">' + i + "</li>", i = $(i), i = FlipcatWebAppLibrary.processTemplateLinks(i, "color-fg"), a && i.click(t), c.append(i)
        } else Error("Debug: empty bread crumbs data!")
    }, setListeners: function () {
    }
};
window.Flipcat.BreadCrumbs = BreadCrumbs, window.Flipcat = window.Flipcat || {}, Flipcat.Reviews = {
    HTML_REVIEW_MODAL_ID: "#modalAddReview",
    HTML_REVIEWS_TOTAL_0_CSS: ".fc-no-news",
    HTML_REVIEW_ITEM_CSS: ".jreviewitemwrapper",
    HTML_REVIEW_INPUT_TYPE_GOOD_ID: "#reviewGood",
    HTML_REVIEW_INPUT_TYPE_BAD_ID: "#reviewBad",
    HTML_REVIEW_INPUT_TEXT_ID: "#reviewText",
    HTML_REVIEW_INPUT_SUBMIT_ID: "#reviewSubmitBtn",
    HTML_REVIEW_INPUT_ORDER_ID: "#reviewId",
    HTML_REVIEW_BTN_ADD_CSS: ".add-review",
    HTML_REVIEWS_CONTAINER_ID: "#fcShopReviewsList",
    HTML_REVIEWS_PAGING_CONTAINER_ID: "#reviewPaging",
    HTML_REVIEWS_CHOOSE_TYPE_LINKS_CONTAINER_ID: "#chooseReviewTypeLinks",
    HTML_REVIEWS_CHOOSED_TYPE_CSS: ".reviews-types-choose-active-link",
    HTML_REVIEWS_CHOOSE_TYPE_CSS: ".review-type-link",
    HTML_REVIEW_NEED_AUTH_CSS: ".show-auth-popup",
    HTML_USER_ID_INP_ID: "#intShopId",
    requestSended: 0,
    requestType: "",
    HTML_MAGIC_LINE_ID: ".magic-line2",
    init: function (e) {
        var t = this;
        t.lib = e, $(t.HTML_REVIEW_MODAL_ID)[0] && t.setAddFormListeners(), $(t.HTML_REVIEWS_CONTAINER_ID)[0] && t.setViewListeners()
    },
    setAddFormListeners: function () {
        var e = this;
        $(e.HTML_REVIEW_INPUT_TYPE_GOOD_ID).bind("change", e.onChooseGood), $(e.HTML_REVIEW_INPUT_TYPE_BAD_ID).bind("change", e.onChooseBad), $(e.HTML_REVIEW_INPUT_SUBMIT_ID).click(e.onSubmit), $(e.HTML_REVIEW_BTN_ADD_CSS).click(e.onClickAddReviewButton)
    },
    setViewListeners: function () {
        var e, t = this, r = t.parseRequest(), i = (r.page, r.type, r.userId, FlipcatWebAppLibrary);
        $(t.HTML_REVIEWS_PAGING_CONTAINER_ID)[0] && (e = window.location.hash.replace("#", "").split("/"), "reviews" == e[0] && Flipcat.ShopCatNavigator.onClickBookmark({
            target: $(Flipcat.ShopCatNavigator.HTML_REVIEW_BM_ID)[0],
            preventDefault: function () {
            }
        }), $(t.HTML_REVIEWS_CHOOSE_TYPE_LINKS_CONTAINER_ID + " a").click(t.onChangeReviewType), i.lock(t.HTML_REVIEWS_CONTAINER_ID), $(t.HTML_REVIEWS_PAGING_CONTAINER_ID)[0] && t.initPagination()), setInterval(t.checkAutoloadItems, 500)
    },
    initPagination: function () {
        return
    },
    onPageClick: function (e) {
        var t, r = Flipcat.Reviews;
        setTimeout(function () {
            r.requestSended || (t = r.parseRequest(), r.isAutoloadResponse && (t.page = r.currentPage ? r.currentPage : t.page), FlipcatWebAppLibrary.lock(r.HTML_REVIEWS_CONTAINER_ID), r.requestSended = 1, r.requestType = t.type, r.lib._get(r.onReviewsData, "/reviews.json?userId=" + t.userId + "&page=" + t.page + "&type=" + t.type, r.onFailReviewData))
        }, 100)
    },
    parseRequest: function () {
        var e, t, r, i, a, o = Flipcat.Reviews, n = window.location.hash, s = FlipcatWebAppLibrary,
            c = n.replace("#", "").split("/");
        return r = parseInt(c[1], 10), a = !!isNaN(r), r = isNaN(r) ? 1 : r, t = String(c[2]), "good" != t && "bad" != t && (t = ""), n = s.REQUEST_URI(!0), e = n.split("/"), i = $(o.HTML_USER_ID_INP_ID).val(), {
            userId: i,
            page: r,
            type: t,
            fail: a
        }
    },
    onReviewsData: function (e) {
        FlipcatWebAppLibrary.unlock(Flipcat.Reviews.HTML_REVIEWS_CONTAINER_ID);
        var t = Flipcat.Reviews, r = [{key: "[author]", val: "author"}, {key: "[date]", val: "date"}, {
                key: /\[type\]/gm,
                val: "type"
            }, {key: /\[typeText\]/gm, val: Flipcat.Reviews.renderTypeText}, {key: "[text]", val: "text"}],
            i = !!t.isAutoloadResponse, a = (Flipcat.ShopCatNavigator, t.HTML_REVIEWS_CONTAINER_ID);
        t.requestSended = 0, setTimeout(function () {
            t.autoloadProcess = 0
        }, 2e3), $(t.HTML_REVIEWS_TOTAL_0_CSS).remove(), e.success && e.total > 0 ? (t.total = e.total, FlipcatWebAppLibrary.render($(a), "div", r, e.list, !i, "div.jreviewitemwrapper"), t._activateReviewBookmark(), $(t.HTML_REVIEW_ITEM_CSS).length >= e.total ? t.currentPage && t.currentPage-- : 0 == e.list.length && t.currentPage--, t.isAutoloadResponse = !1) : (0 == e.total && (t.total = e.total, t.currentPage--), $(t.HTML_REVIEW_ITEM_CSS).each(function (e, t) {
            t = $(t), t.hasClass("tpl") || t.remove()
        }), $(t.HTML_REVIEWS_CONTAINER_ID).append('<div class="' + t.HTML_REVIEWS_TOTAL_0_CSS.replace(".", "") + '">' + __("messages.No_reviews") + "</div>"), t._activateReviewBookmark())
    },
    renderPagination: function (e, t) {
        var r, i, a, o, n, s, c = this, l = c.parseRequest(), _ = FlipcatWebAppLibrary.pagination(l.page, t, e),
            d = $(c.HTML_REVIEWS_PAGING_CONTAINER_ID + " li.tpl");
        for (s = window.location.href.replace(window.location.hash, "") + "#reviews", n = l.type, n && (n = "/" + n), d.each(function (e, t) {
            t = $(t), t.hasClass("active") ? r = t.html() : i = t.html()
        }), $(c.HTML_REVIEWS_PAGING_CONTAINER_ID + " li").each(function (e, t) {
            t = $(t), t.hasClass("tpl") || t.remove()
        }), a = 0; a < _.length; a++) _[a].active ? o = r.replace("[N]", _[a].n) : (o = i.replace("[N]", _[a].n), o = o.replace("[LINK]", s + "/" + _[a].n + n)), $(c.HTML_REVIEWS_PAGING_CONTAINER_ID).append($("<li>" + o + "</li>"));
        c.initPagination()
    },
    renderTypeText: function (e, t) {
        var r = t.find("div[data-goodText]").first().attr("data-" + e.type + "Text");
        return r = r ? r : ""
    },
    onFailReviewData: function () {
        var e = Flipcat.Reviews;
        e.requestSended = 0, e.autoloadProcess = 0, FlipcatWebAppLibrary.unlock(e.HTML_REVIEWS_CONTAINER_ID), e.lib.messageFail(__("messages.Unable_load_reviews"))
    },
    checkAutoloadItems: function () {
        if ($("#shopReviewLink").hasClass("active")) {
            var e = document.body, t = ($(e), Flipcat.Reviews),
                r = document.getElementsByTagName("main")[0].offsetHeight;
            r || (r = document.body.clientHeight - FlipcatWebAppLibrary.getViewport().h), window.scrollY >= r - 700 && (t.autoloadProcess || (t.autoloadProcess = 1, setTimeout(function () {
                var e = t.parseRequest();
                if (t.currentPage = t.currentPage ? t.currentPage + 1 : e.page, t.currentPage = 1 == t.currentPage ? t.currentPage + 1 : t.currentPage, !(t.previousAutoloadPage && t.previousAutoloadPage == t.currentPage || t.total && $(t.HTML_REVIEW_ITEM_CSS).length >= t.total)) try {
                    t.isAutoloadResponse = !0, t.onPageClick(), t.previousAutoloadPage = t.currentPage
                } catch (r) {
                    alert(r)
                }
            }, 100)))
        }
    },
    onChangeReviewType: function (e) {
        var t = Flipcat.Reviews;
        t.currentPage = 1, t.previousAutoloadPage = !1, isAutoloadResponse = !1, t.autoloadProcess = 0, t.onPageClick(e)
    },
    onSubmit: function () {
        var e, t, r = Flipcat.Reviews, i = "default", a = $.trim($(r.HTML_REVIEW_INPUT_TEXT_ID).val());
        return i = 1 == $(r.HTML_REVIEW_INPUT_TYPE_GOOD_ID).prop("checked") ? "good" : i, i = 1 == $(r.HTML_REVIEW_INPUT_TYPE_BAD_ID).prop("checked") ? "bad" : i, "default" == i && 0 == a.length ? void r.lib.messageFail(__("messages.Text_review_or_type_required")) : (t = FlipcatWebAppLibrary.REQUEST_URI(!0).split("/"), t = parseInt(t[t.length - 1], 10), e = {
            type: i,
            text: a,
            id: $(r.HTML_REVIEW_INPUT_ORDER_ID).val(),
            userId: t
        }, void r.lib._post(e, r.onSuccessAddReview, "/nrvw", r.onFailAddReview))
    },
    onClickAddReviewButton: function (e) {
        var t = Flipcat.Reviews, r = e.target;
        return "BUTTON" != r.tagName && "A" != r.tagName || ($(r).hasClass(t.HTML_REVIEW_NEED_AUTH_CSS.replace(".", "")) ? $.cookie(Flipcat.AuthMarker.COOKIE_NAME) ? t.lib._get(t.onSocNetIdData, "/snid?i=" + $(r).data("id"), t.onSocNetIdDataFail) : t.showNeedAuthMessage($(r).data("id")) : t.showReviewPopup($(r).data("id"))), !1
    },
    onSocNetIdData: function (e) {
        var t = Flipcat.Reviews;
        e.userIsKnown ? t.showReviewPopup(e.id) : t.showNeedAuthMessage(e.id)
    },
    showReviewPopup: function (e) {
        var t = Flipcat.Reviews;
        $(t.HTML_REVIEW_INPUT_ORDER_ID).val(e), $(t.HTML_REVIEW_INPUT_TYPE_GOOD_ID).prop("checked", !1), $(t.HTML_REVIEW_INPUT_TYPE_BAD_ID).prop("checked", !1), $(t.HTML_REVIEW_INPUT_TEXT_ID).val(""), $(t.HTML_REVIEW_MODAL_ID).modal("show")
    },
    onSocNetIdDataFail: function () {
    },
    showNeedAuthMessage: function (e) {
        var t = this;
        $.cookie("ar", window.location.href, {path: "/"}), t.lastTryReviewId = e, $(Flipcat.CoreWebClientAuth.HTML_LOGIN_MODAL_ID).modal("show"), t.lib.messageSuccess(__("messages.Auth_require"))
    },
    onFailAddReview: function () {
        Flipcat.Reviews.lib.messageFail(__("messages.Unable_add_review"))
    },
    onSuccessAddReview: function (e) {
        var t = Flipcat.Reviews;
        1 == e.success ? (t.lib.messageSuccess(e.message), $(t.HTML_REVIEW_MODAL_ID).modal("hide"), $(t.HTML_REVIEW_BTN_ADD_CSS + "[data-id=" + $(t.HTML_REVIEW_INPUT_ORDER_ID).val() + "]").remove()) : e.error && "require_auth" == e.info && ($(t.HTML_REVIEW_MODAL_ID).modal("hide"), $(Flipcat.CoreWebClientAuth.HTML_LOGIN_MODAL_ID).modal("show"), t.lib.messageSuccess(__("messages.Auth_require")))
    },
    onChooseGood: function () {
        var e = Flipcat.Reviews;
        1 == $(e.HTML_REVIEW_INPUT_TYPE_GOOD_ID).prop("checked") && $(e.HTML_REVIEW_INPUT_TYPE_BAD_ID).prop("checked", !1)
    },
    onChooseBad: function () {
        var e = Flipcat.Reviews;
        1 == $(e.HTML_REVIEW_INPUT_TYPE_BAD_ID).prop("checked") && $(e.HTML_REVIEW_INPUT_TYPE_GOOD_ID).prop("checked", !1)
    },
    createRewiewsWarningMessage: function (e, t) {
        return e ? __("messages.reviewWarningMessage", {
            "%p": "TODO",
            "%s": e,
            "%n": this.lastTryReviewId
        }) : "email" == t ? __("messages.reviewWarningEmailMessage", {"%p": "TODO", "%n": this.lastTryReviewId}) : ""
    },
    _activateReviewBookmark: function () {
        var e, t, r = Flipcat.Reviews, i = Flipcat.ShopCatNavigator, a = 148, o = 150;
        e = $(i.HTML_REVIEW_BM_ID)[0], i.onClickBookmark({
            isOnLoadReviewsEvent: 1,
            target: e,
            preventDefault: function () {
            }
        }), $(r.HTML_REVIEWS_CHOOSE_TYPE_LINKS_CONTAINER_ID + " a").each(function (e, i) {
            $(i).removeClass(r.HTML_REVIEWS_CHOOSED_TYPE_CSS.replace(".", "")), $(i).attr("href") == window.location.hash && (t = $(i))
        });
        var n = 182, s = 170, c = screen.width;
        c <= 320 ? (o = 84, a = 8) : c <= 1024 && (o = 150, a = 85), t ? t.hasClass("goods-reviews__tab--all") ? $(r.HTML_MAGIC_LINE_ID).css("left", a).css("width", o) : t.hasClass("goods-reviews__tab--good") ? $(r.HTML_MAGIC_LINE_ID).css("left", t.position().left).css("width", n) : $(r.HTML_MAGIC_LINE_ID).css("left", t.position().left).css("width", s) : $(r.HTML_MAGIC_LINE_ID).css("left", a).css("width", o)
    }
}, window.Flipcat = window.Flipcat || {}, window.Flipcat.Pagination = {
    HTML_CONTAINER_CSS: "ul.inline.pagination",
    pageVar: "page",
    HISTORY_API: !(!window.history || !window.history.pushState),
    init: function (e) {
        var t = this;
        t.container = $(t.HTML_CONTAINER_CSS).first(), t.container[0] && t.setListeners()
    },
    setListeners: function () {
        var e, t = this, r = t.container;
        r.find("li").each(function (r, i) {
            i = $(i), i.hasClass("tpl") || (t.listener && i.find("a").click(t.listener), e = i.find("a").click(t.onClick))
        }), t.HISTORY_API && $(window).bind("popstate", function () {
            t.onHistoryPopState()
        })
    },
    setData: function (e, t, r, i, a, o) {
        var n = this;
        n.listener = e, n.totalItems = t, n.perPage = r, n.itemInLine = i, n.prevLabel = a, n.nextLabel = o
    },
    onClick: function (e) {
        var t, r, i, a, o, n, s, c, l = "li", _ = Flipcat.Pagination, d = _.container.find(l + ".tpl.active"),
            p = d.html(), u = d.attr("class");
        if (_.totalItems) {
            for (i = $(e.target).attr("href"), o = FlipcatWebAppLibrary._GET("page", 1, i), _.HISTORY_API && history.pushState(null, null, i), i = "", d = _.container.find(l + ".tpl").each(function (e, i) {
                i = $(i), i.hasClass("active") || (t = i.html(), r = i.attr("class"))
            }), _.container.find(l).each(function (e, t) {
                t = $(t), t.hasClass("tpl") || (i || (i = t.find("a").first().attr("href")), t.remove())
            }), a = FlipcatWebAppLibrary.pagination(o, _.totalItems, _.perPage, _.itemInLine, _.prevLabel, _.nextLabel), u = u.replace("tpl", "").replace("active", ""), r = r.replace("tpl", ""), n = 0; n < a.length; n++) s = a[n].active ? p : t, c = a[n].active ? u : r, pageText = a[n].text ? a[n].text : a[n].n, s = s.replace("[N]", pageText), pageText = FlipcatWebAppLibrary.setGetVar(i, _.pageVar, a[n].n), s = s.replace("[LINK]", pageText), d = $("<" + l + ' class="' + c + '">' + s + "</" + l + ">"), _.container.append(d);
            return _.setListeners(), !1
        }
    },
    onHistoryPopState: function (e) {
        if (!((new Date).getTime() - window.loadTime < 800)) {
            var t = window.Flipcat.Pagination, r = window.location.href, i = {
                attr: function () {
                    return r
                }, isPopState: 1
            };
            t.onClick(i)
        }
    }
}, window.Flipcat = window.Flipcat || {}, window.Flipcat.SlideToggleAnimate = {
    HTML_SLIDE_TOGGLER_CSS: ".slide-toggler",
    HTML_SLIDE_BLUR_CSS: ".slide-blur",
    HTML_SLIDE_CONTENT_CSS: ".slide-content",
    HTML_SLIDE_BLOCK_CSS: ".slide-block",
    ATTRIBUTE_NAME: "data-slide-id",
    maxHeights: [],
    init: function () {
        var e, t, r, i = this, a = 0;
        $(i.HTML_SLIDE_CONTENT_CSS).each(function (o, n) {
            n = $(n), n.attr(i.ATTRIBUTE_NAME, a), e = n.height(), n.css("overflow", "auto").css("height", "auto"), t = n.text(), r = i.getCutText(t), trim(t) == trim(r) && $(i.HTML_SLIDE_TOGGLER_CSS).addClass("hide"), n.text(r), e = n.height(), n.text(t), i.maxHeights[a] = {
                srcText: t,
                cutText: r,
                height: e,
                toggle: !1,
                maxHeight: n.height()
            }, n.html(r), n.css("overflow", "hidden").css("height", e + "px"), a++
        }), this.setListeners()
    },
    setListeners: function () {
        var e = this;
        $(e.HTML_SLIDE_TOGGLER_CSS).click(e.onClick)
    },
    onClick: function (e) {
        e.preventDefault();
        var t = Flipcat.SlideToggleAnimate, r = $(e.target), i = r.parents(t.HTML_SLIDE_BLOCK_CSS).first(),
            a = i.find(t.HTML_SLIDE_CONTENT_CSS).first(), o = i.find(t.HTML_SLIDE_BLUR_CSS).first(),
            n = t.maxHeights[a.attr(t.ATTRIBUTE_NAME)];
        n && n.height && n.maxHeight && (n.toggle ? a.animate({height: n.height + "px", duration: "slow"}, function () {
            o.removeClass("hide"), a.html(t.maxHeights[a.attr(t.ATTRIBUTE_NAME)].cutText), t.maxHeights[a.attr(t.ATTRIBUTE_NAME)].toggle = !1
        }) : (a.html(t.maxHeights[a.attr(t.ATTRIBUTE_NAME)].srcText), a.animate({
            height: n.maxHeight + "px",
            duration: "slow"
        }, function () {
            o.addClass("hide"), t.maxHeights[a.attr(t.ATTRIBUTE_NAME)].toggle = !0
        })))
    },
    getCutText: function (e) {
        for (var t, r, i, a, o = e, n = 0, s = 0, c = "", l = [".", "!", "?", "\n", ";"], _ = 0; ;) {
            for (a = 0, i = [], t = 0; t < l.length; t++) r = l[t], s = o.indexOf(r, n), ~s && s > n && (i.push(s), a = 1);
            if (a && (s = Math.min.apply(Math, i), _++), s > n && (c += o.substring(n, s + 1), n = s + 1), !a || _ > 2) break
        }
        return c ? _ < 3 ? o : c : o
    }
}, window.Flipcat = window.Flipcat || {}, Flipcat.CHorizontalMenu = function () {
}, Flipcat.CHorizontalMenu.prototype.init = function (e, t, r, i) {
    this.cid = e, this.itemCss = t, this.activeCss = i, this.ws = {}, this.setActiveId(r, !0)
}, Flipcat.CHorizontalMenu.prototype.setActiveId = function (e, t) {
    var r, i, a, o, n, s = this, c = $(s.cid + " " + s.itemCss), l = 0, _ = s.activeCss, d = 0;
    for (r = 0; r < c.length; r++) i = $(c[r]), t ? (a = i[0].offsetWidth, s.ws[i.data("id")] = a, i[0].self = s, i.click(s.onClick)) : a = s.ws[i.data("id")], n || (i.hasClass(_) && (o = i.data("id")), o || (d += a), i.data("id") == e && (s.scrollToItem(i, l, c), n = 1), l += a);
    !n && o && (i = $(s.cid + " " + s.itemCss + "[data-id=" + o + "]").first(), s.scrollToItem(i, d, c))
}, Flipcat.CHorizontalMenu.prototype.onClick = function (e) {
    var t = this.self, r = $(this).data("id"), i = Flipcat.ShopCatNavigator, a = "hide";
    $(t.cid).scrollLeft(0), t.setActiveId(r), i.isMobileSliderShow && ($(i.HTML_MOBILE_LIST_TOGGLE_BLOCK_ID).removeClass(a), $(i.HTML_MOBILE_SLIDER_TOGGLE_BLOCK_ID).addClass(a))
}, Flipcat.CHorizontalMenu.prototype.scrollToItem = function (e, t, r) {
    var i, a = this, o = e, n = r, s = a.activeCss;
    o[0] && (n.removeClass(s), o.addClass(s), i = round(($(a.cid)[0].offsetWidth - a.ws[o.data("id")]) / 2), t -= i, t = t < 0 ? 0 : t, $(a.cid).scrollLeft(t))
}, window.Flipcat = window.Flipcat || {}, Flipcat.ShopHorizontalMenu = {
    init: function () {
        this.obj = new Flipcat.CHorizontalMenu, this.obj.init("#mShopCategoriesHorMenu", "a", 0, "active")
    }
}, window.Flipcat = window.Flipcat || {}, Flipcat.Cart = {
    HTML_CART_ITEM_QUANTITY_CSS: ".item-quantity",
    HTML_CART_ITEM_PRICE_CSS: ".cart-item-price",
    HTML_GOODS_COIN_ICON_CSS: ".goods-coin_icon",
    HTML_ORDER_FORM_ID: "#orderForm",
    HTML_SEND_ORDER_BUTTON_ID: "#sendOrderFormBtn",
    HTML_CART_LIST_ID: "#projects-container",
    HTML_CART_SUCCESS_ID: "#orderSuccess",
    HTML_ORDER_FORM_TOGGLE_ID: "#showOrderForm",
    HTML_SHOP_ID_INP_ID: "#shopId",
    STORAGE_PRICE_CART_PREFIX: "price_",
    STORAGE_PRICE_BALL_CART_PREFIX: "priceball-",
    STORAGE_BALL_CART_PREFIX: "ball-",
    HTML_ADD_TO_CART_LINK_CSS: ".cart-add",
    HTML_CART_HINT_ID: ".js-cart-popup",
    HTML_CART_HINT_DEL_ID: ".cart-popup--del",
    HTML_CART_TOTAL_SUM_ID: "#cartTotal",
    STORAGE_ADD_CART_KEY: "cart-",
    HTML_CART_ITEM_PRICE_CSS: ".cart-item-price",
    HTML_CART_QUANTITY_ID: "#itemsCountInCart",
    HTML_CART_ID: "#itemsInCart",
    HTML_MOBILE_CART_QUANTITY_ID: "#mItemsCountInCart",
    HTML_CART_TOTAL_ROW_ID: "#cartTotalRow",
    HTML_CART_LINK_ID: "#cartLink",
    HTML_MOBILE_CART_LINK_ID: "#mCartLink",
    HTML_REMOVE_FROM_CART_LINK_CSS: ".cart-remove",
    HTML_CART_ITEM_QUANTITY_INC_BUTTON_CSS: ".inc",
    HTML_CART_ITEM_QUANTITY_DEC_BUTTON_CSS: ".dec",
    HTML_CART_TOTAL_CURRENCY_ID: "#totalCurr",
    HTML_CART_TOTAL_BALLS_LABEL_EXT: "#cartBallsTotalLabelExt",
    HTML_ORDER_FORM_FIELD_BLOCK_CSS: ".dc-input-block",
    HTML_ORDER_FORM_FIELD_ERROR_CSS: ".field-error",
    HTML_ORDER_FORM_REQUIRED_FIELD_CSS: ".red",
    HTML_CART_CLEAR_BTN_CSS: ".clear-datetime",
    HTML_MOBILE_CREATE_ORDER_BTN_ID: "#mCreateOrder",
    HTML_ORDER_FORM_BTN_ID: "#sendOrderFormBtn",
    HTML_CARD_PAYMENT_TOTAL_SUM_ID: "",
    HTML_CART_TOTAL_WRAPPER: "#cartTotalWrapper",
    HTML_REQUEST_DRAFT_PROCESS_SIGN_ID: "#processDraftRequestStatus",
    HTML_RECURRENT_OFF_CHB_LABEL_ID: "#recurrentOffInputBlock",
    HTML_LIST_CART_ITEM_CSS: ".company-cart",
    HTML_LIST_CART_COMPANY_COUNT_ITEM_CSS: ".cartlist-count-in-cart",
    HTML_LIST_CART_COMPANY_SUM_ITEM_CSS: ".cartlist-sum-in-cart",
    HTML_SHOP_CURRENCY_INP_ID: "#currency",
    HTML_LIST_CART_WRONG_SHOPS_ID: "#wrongShops",
    HTML_LIST_CART_CLEAR_CSS: ".clear-shop-cart",
    HTML_LIST_CART_STATIC_LINK_CSS: ".linkstatic",
    HTML_MAX_BALLS_INP_ID: "#loyaltyMaxBallSumm",
    HTML_MIN_ORDER_SUM_FOR_BALLS_ORDER_INP_ID: "#loyaltyMinOrderSumm",
    HTML_CART_TOTAL_BALL_SUM_ID: "#cartBallsTotal",
    HTML_CART_TOTAL_BALL_CURRENCY_ID: "#totalBallsCurr",
    HTML_CART_TOTAL_BALL_WRAPPER_ID: "#cartBallsTotalWrapper",
    HTML_CART_SHIPPINGPRICE_ID: "#shippingPriceValue",
    HTML_CART_SHIPPINGPRICE_CURRENCY_ID: "#shippingPriceCurr",
    HTML_CART_SHIPPINGPRICE_BLOCK_ID: "#shippingPriceView",
    SYSTEM_EMAIL_FIELD_NAME: 4,
    needCheckOrderStatus: 0,
    statusOrderIsSended: 0,
    statusCancelRecurrentIsSended: 0,
    init: function (e) {
        var t = this, r = Flipcat.CoreCart;
        if (r.onInitStart(), t.Lib = FlipcatWebAppLibrary, e instanceof Object) for (var i in e) e[i] instanceof Function && "_get" != i && (t.Lib[i] = e[i]);
        t.setListeners(), r.setInitialMessages(), t.setCartlistItems(), t.setDatepickerPlaceholderListener(), Flipcat.Desktop.isMobile() || t.showBallsAlerts(), r.runUnworkMessageTimer(), r.onInitEnd()
    },
    grabItems: function () {
        var e = [], t = this;
        return $(t.HTML_CART_ITEM_QUANTITY_CSS).each(function (r, i) {
            count = +$(i).text(), count = count ? count : 1, price = $(i).parents(".cart_item.clear").find(t.HTML_CART_ITEM_PRICE_CSS).first().data("oneitemprice") * count, e.push({
                id: $(i).data("id"),
                count: count,
                price: price
            })
        }), e
    },
    setListeners: function () {
        var e = Flipcat.Cart, t = Flipcat.CoreCart;
        "cart" == e.Lib.REQUEST_URI(1).split("/")[1] && e.Lib.storage("lastCartUrl", window.location.href.toString()), $(e.HTML_ORDER_FORM_TOGGLE_ID).click(e.showOrderForm), $(e.HTML_SEND_ORDER_BUTTON_ID).click(t.sendOrder), $(e.HTML_CART_HINT_ID).click(e.hideCartHint), $(e.HTML_REMOVE_FROM_CART_LINK_CSS).click(e.removeFromCart), $(e.HTML_CART_ITEM_QUANTITY_INC_BUTTON_CSS).click(e.incQuantityProductInCart), $(e.HTML_CART_ITEM_QUANTITY_DEC_BUTTON_CSS).click(e.decQuantityProductInCart), $(e.HTML_ORDER_FORM_ID).find("select").bind("change", e.onChangeOrderFormParam), $(e.HTML_MOBILE_CREATE_ORDER_BTN_ID).click(e.onMobileCreateOrderClick), e.renderCountCart(), Flipcat.CoreCart.setQuantityEachProductInCart(), $(e.HTML_CART_CLEAR_BTN_CSS).click(e.onClickClearBtn), e.initCartLink(), e.interval = setInterval(e.onInterval, 500), Flipcat.CoreCart.setPhoneInputMask()
    },
    onClickClearBtn: function (e) {
        $(this).parent().find("input").val(""), $(this).parent().find("input").blur(), e.preventDefault()
    },
    grabFields: function (e, t) {
        var r = this, i = r.Lib;
        $(e).find("input,select,textarea").each(function (e, r) {
            var a = "checkbox" == r.type ? r.checked : r.value, o = r.name;
            if ("SELECT" == r.tagName && "priceDropDown" == r.getAttribute("data-fieldType")) {
                var n = i.getOptionByValue(r, a);
                a = n.getAttribute("data-fieldName")
            }
            ("radio" != r.type || r.checked) && (t[o] = a)
        })
    },
    showOrderForm: function () {
        var e = this, t = $(e.HTML_ORDER_FORM_ID).parent();
        t.toggleClass("hide"), t.parent().toggleClass("hide")
    },
    getShopId: function () {
        var e, t = this, r = t.Lib, i = r.REQUEST_URI(1).split("/");
        if ("all_history" == i[1] && "global_sid" in window) return e = window.global_sid, e = "cart-" + e, String(e);
        var e = $(t.HTML_SHOP_ID_INP_ID).val();
        return e = e ? e : 0, e && (e = "cart-" + e), String(e)
    },
    onAddToCart: function (e) {
        e.stopImmediatePropagation();
        var t, r, i, a, o = 0, n = [], s = Flipcat.Cart, c = s.Lib;
        if ($(this).parents(".fc-product-item").first().find("select").each(function (e, t) {
            t.value > 0 || (o = 1, r = $(t).parents(".multiproduct-option").first().find(".multiproduct-option-title").first().text(), r = __("messages.Require_select_parameter_") + " " + r, n.push(r))
        }), o) return c.messageFail(n.join("\n")), !1;
        t = this.getAttribute("data-id"), i = +this.getAttribute("data-isballs"), a = +this.getAttribute("data-allow");
        var l = s.addToCart(t, 0, i, a);
        return l
    },
    addToCart: function (e, t, r, i) {
        var a, o, n, s, c, l = Flipcat.Cart, _ = l.Lib, d = l.getShopId(), p = (_.REQUEST_URI(1), Flipcat.CoreCart);
        return !p.showAlertRequireLocation() && (d ? "undefined" == String(i) || +i ? (s = $(l.HTML_ADD_TO_CART_LINK_CSS + "[data-id='" + e + "']").data("price"), !(r && !l.checkAddBallsProduct(s)) && (o = _.storage(d), o instanceof Object || (o = {}), o[e] = parseInt(o[e]) ? parseInt(o[e]) : 0, o[e]++, t && (o[e] = t), _.storage(d, o), a = l.STORAGE_PRICE_CART_PREFIX + d, n = _.storage(a), r ? l.setBallsInfo(e, t, s) : (n = parseInt(n) ? parseInt(n) : 0, n += s, _.storage(a, n)), l.renderCountCart(o), t || ($(l.HTML_CART_HINT_ID).css({
            visibility: "visible",
            opacity: "1"
        }), setTimeout(l.hideCartHint, 1e3)), c = Flipcat.ShopCatNavigator.getMultiproductId(e), Flipcat.ShopCatNavigator.setQuantityProductsInListAndPopup(c, o[e]), Flipcat.Userscripts && Flipcat.Userscripts.run && Flipcat.Userscripts.run("onAddToCart", arguments), !1)) : (Flipcat.ShopCatNavigator.hidePopup(), Flipcat.Messages.fail(__("Sorry_product_disallow")), !1) : (Flipcat.Messages.fail(__("Unable_add_product_to_cart")), !1))
    },
    checkPrice: function () {
        var e = this, t = e.Lib, r = t.REQUEST_URI(1), i = parseInt($(e.HTML_CART_TOTAL_SUM_ID).text()),
            a = e.STORAGE_PRICE_CART_PREFIX + e.getShopId(), o = t.storage(a);
        "/cart" == r && o && o != i && (Flipcat.Messages.success(__("messages.Product_price_changed")), t.storage(a, i))
    },
    removeFromCart: function () {
        var e, t, r, i, a = Flipcat.Cart, o = a.Lib, n = $(this), s = $("#shopId").val(),
            c = a.STORAGE_ADD_CART_KEY + s, l = "price_" + c, _ = n.data("id"), d = {}, p = a.isBallsProduct(_),
            u = Flipcat.CoreCart;
        if (!s) return Flipcat.Messages.fail(__("Unable_remove_product_from_cart")), !1;
        if (e = o.storage(c), Flipcat.Userscripts && Flipcat.Userscripts.run && Flipcat.Userscripts.run("onRemFromCart", _), !(e instanceof Object)) return n.parents("article").first().remove(), !1;
        for (t in e) t != _ && (d[t] = e[t]);
        return o.storage(c, d), i = parseInt(n.parents("article").find(a.HTML_CART_ITEM_PRICE_CSS).text()), p ? a.removeBallsProduct(_, i) : (r = o.storage(l), r && o.storage(l, r - i)), a.renderCountCart(e), n.parents("article").first().remove(), u.setQuantityEachProductInCart(), !1
    },
    renderCountCart: function (e) {
        var t = Flipcat.Cart, r = t.Lib, i = {}, a = [], o = [];
        if (!t.forceClearCart() && ($(t.HTML_CART_QUANTITY_ID)[0] || $(t.HTML_MOBILE_CART_QUANTITY_ID)[0])) {
            var n, s = t.getShopId(), c = 0, l = [];
            if (t.getQuantityProductsInCarts(a, o, i), !s) {
                if (1 != i.v) return void t.renderCountInCartList();
                s = i.key
            }
            if (e = e ? e : r.storage(s), 1 != i.v) return void t.renderCountInCartList();
            if (!e) return void t.renderCountInCartList();
            if (!t.isPageWithoutCartIcon() && e instanceof Object) {
                for (n in e) l.push(n), c += e[n];
                if (!c) return void t.renderCountInCartList();
                t.displayCountInCart(l, s, c)
            }
        }
    },
    incQuantityProductInCart: function (e) {
        var t = Flipcat.Cart, r = (t.Lib, Flipcat.CoreCart);
        e.stopImmediatePropagation();
        var i = $(this).parent().find(t.HTML_CART_ITEM_QUANTITY_CSS).first(), a = +i.text();
        isNaN(a) && (a = 0), a++, t.setQuantityProductInCart(i.data("id"), a), r.setQuantityEachProductInCart(), t.renderCountCart()
    },
    forceClearCart: function () {
        if (!window.localStorage) return !1;
        var e, t, r, i, a = this, o = a.Lib, n = document.getElementsByTagName("script"), s = 0,
            c = +localStorage.getItem("ccv");
        for (e = 0; e < n.length; e++) if (i = +o._GET("ccv", 0, n[e].getAttribute("src")), i && i != c) {
            for (t = 0; t < localStorage.length; t++) r = localStorage.key(t), (~r.indexOf("cart") || ~r.indexOf("ball-")) && (localStorage.removeItem(r), s++);
            localStorage.setItem("ccv", i);
            break
        }
        return i && i != c && (localStorage.removeItem(Flipcat.Orders.getHistoryKey()), localStorage.removeItem(Flipcat.Loyalty.getHistoryKey())), !!s
    },
    decQuantityProductInCart: function (e) {
        e.stopImmediatePropagation();
        var t = Flipcat.Cart, r = (t.Lib, $(this).parent().find(t.HTML_CART_ITEM_QUANTITY_CSS).first()), i = +r.text(),
            a = Flipcat.CoreCart;
        return $(this).hasClass("jdecinproductlist") ? ($(t.HTML_CART_HINT_DEL_ID).css({
            visibility: "visible",
            opacity: "1"
        }), setTimeout(t.hideCartDeleteHint, 1e3), Flipcat.Cart.decQuantityProductInCartInList(this)) : (isNaN(i) && (i = 2), i--, i < 1 && (i = 1), t.setQuantityProductInCart(r.data("id"), i, 1), a.setQuantityEachProductInCart(), void t.renderCountCart())
    },
    decQuantityProductInCartInList: function (e) {
        var t, r, i = e.getAttribute("data-id"), a = Flipcat.Cart, o = a.Lib, n = a.getShopId(), s = o.storage(n);
        return t = +s[i], isNaN(t) || (t--, t < 0 && (t = 0), a.setQuantityProductInCart(i, t, 1), r = i, +$(e).attr("data-multiproductid") && (r = +$(e).attr("data-multiproductid")), Flipcat.ShopCatNavigator.setQuantityProductsInListAndPopup(r, t), a.renderCountCart()), !1
    },
    setQuantityProductInCart: function (e, t, r) {
        var i, a, o = Flipcat.Cart, n = o.Lib, s = o.getShopId(), c = "price_" + s, l = n.storage(s), _ = n.storage(c),
            d = o.isBallsProduct(e);
        l instanceof Object || (l = {}), i = parseInt($(o.HTML_CART_ITEM_PRICE_CSS + "[data-id='" + e + "']").data("oneitemprice")), (r || !d || o.checkAddBallsProduct(i)) && (a = t - l[e], l[e] = t, n.storage(s, l), d ? o.setBallsInfo(e, a, i, r) : _ && n.storage(c, _ + i * a))
    },
    onMobileCreateOrderClick: function () {
        var e = Flipcat.Cart, t = e.Lib, r = e.getShopId(), i = t.storage(r);
        return !(e.showBallsAlerts() > 0) && (0 != count(i) || (Flipcat.Messages.fail(__("messages.Cart_empty_message")), !1))
    },
    hideCartHint: function () {
        var e = Flipcat.Cart;
        $(e.HTML_CART_HINT_ID).css({visibility: "hidden", opacity: "0"})
    },
    onChangeOrderFormParam: function (e) {
        Flipcat.Cart.malert(navigator.userAgent);
        var t, r = Flipcat.Cart, i = r.Lib, a = e.target, o = a.value,
            n = (t = i.getOptionByValue(a, o), Flipcat.CoreCart);
        t || (t = i.getOptionByText(a, o)), t && (t = parseFloat($(t).data("price")), t = t ? t : 0), null !== t && n.setQuantityEachProductInCart(1)
    },
    initCartLink: function () {
        var e = Flipcat.Cart;
        $(e.HTML_ADD_TO_CART_LINK_CSS).click(e.onAddToCart)
    },
    onInterval: function () {
    },
    isNeedAuth: function (e) {
        var t = this, r = t.Lib;
        return !!e.needAuth && (r.messageSuccess(__("messages.Authentication_required_for_order")), $(Flipcat.CoreWebClientAuth.HTML_LOGIN_MODAL_ID).modal("show"), $.cookie("ar", window.location.href, {
            expires: window.Flipcat.AuthMarker.expires,
            path: "/"
        }), !0)
    },
    renderCountInCartList: function () {
        var e = (window.localStorage, Flipcat.Cart), t = [], r = {}, i = 0, a = [];
        i = e.getQuantityProductsInCarts(t, a, r), e.isPageWithoutCartIcon() || (i ? (e.displayCountInCart([], "", i), $(e.HTML_CART_LINK_ID).attr("href", "/cartlist?l=" + a.join(",")), $(e.HTML_MOBILE_CART_LINK_ID).attr("href", "/cartlist?l=" + a.join(","))) : setTimeout(e.showDelHintAndHideCartIcon, 1e3))
    },
    hideCartIcon: function (e) {
        var t = Flipcat.Cart, r = e;
        t.displayCountInCart([], "", r), $(t.HTML_CART_QUANTITY_ID).text(""), $(t.HTML_MOBILE_CART_QUANTITY_ID).text("").addClass("hide"), $(t.HTML_CART_ID).addClass("hide"), $(t.HTML_CART_LINK_ID).attr("href", "/cartlist"), $(t.HTML_MOBILE_CART_LINK_ID).attr("href", "/cartlist")
    },
    displayCountInCart: function (e, t, r) {
        var i, a = this, o = e, n = r;
        $(a.HTML_CART_QUANTITY_ID).text(n), $(a.HTML_MOBILE_CART_QUANTITY_ID).text(n).removeClass("hide").removeClass("hide-space"), $(a.HTML_MOBILE_CART_LINK_ID).removeClass("hide"), i = $(a.HTML_CART_QUANTITY_ID), n ? i.removeClass("hide") : i.addClass("hide"), $(a.HTML_CART_ID).removeClass("hide").removeClass("hide-space"), $(a.HTML_MOBILE_CART_LINK_ID).removeClass("hide").removeClass("hide-space"), $(a.HTML_CART_LINK_ID)[0] ? (i = "/cart", $(a.HTML_CART_LINK_ID).attr("href", i + "?i=" + o.join(",") + "&q=" + t.replace("cart-", ""))) : i = "/cart", $(a.HTML_MOBILE_CART_LINK_ID).attr("href", i + "?i=" + o.join(",") + "&q=" + t.replace("cart-", ""))
    },
    setCartlistItems: function () {
        var e, t, r, i = Flipcat.Cart, a = [], o = [], n = {}, s = (i.getQuantityProductsInCarts(a, o, n), []);
        for (e = 0; e < a.length; e++) t = $(i.HTML_LIST_CART_ITEM_CSS + "[data-shopId=" + a[e].i + "]").first(), t && t[0] && (a[e].sz > 0 && t.removeClass("hide"), t.find("a").each(function (t, o) {
            o = $(o), o.hasClass(i.HTML_LIST_CART_STATIC_LINK_CSS.replace(".", "")) || (r = i.joinProductIds(a[e].o), s.push(r), o.attr("href", "/cart?i=" + r + "&q=" + a[e].i))
        }), t.find(i.HTML_LIST_CART_COMPANY_COUNT_ITEM_CSS).each(function (t, r) {
            r = $(r), r.text(a[e].sz)
        }));
        $(i.HTML_LIST_CART_CLEAR_CSS).click(Flipcat.CoreCart.clearShopCart), s = s.join(","), s = s.split(","), s = array_unique(s), s = s.join(","), i.Lib._get(i.onCartsPriceData, "/cartlistprices?i=" + s)
    },
    joinProductIds: function (e) {
        var t, r = [];
        for (t in e) r.push(t);
        return r.join(",")
    },
    getQuantityProductsInCarts: function (e, t, r) {
        var i, a, o, n, s, c, l = window.localStorage, _ = Flipcat.Cart, d = 0, p = {};
        if (r.v = 0, $(_.HTML_LIST_CART_WRONG_SHOPS_ID)[0]) try {
            p = JSON.parse($(_.HTML_LIST_CART_WRONG_SHOPS_ID).val())
        } catch (u) {
        }
        for (i = 0; i < l.length; i++) if (n = l.key(i), 0 === n.indexOf("cart-") && (s = FlipcatWebAppLibrary.storage(n), c = sizeof(s))) if (n = n.replace("cart-", ""), n in p) localStorage.removeItem("cart-" + n); else {
            t.push(n), o = 0;
            for (a in s) o += s[a], d += s[a];
            e.push({i: n, o: s, sz: o}), r.v++, r.key = "cart-" + n
        }
        return d
    },
    isPageWithoutCartIcon: function () {
        var e = (window.localStorage, Flipcat.Cart, {"/orderform": 0, "/cartlist": 0, "/cart": 0});
        return FlipcatWebAppLibrary.REQUEST_URI(1) in e, !1
    },
    onCartsPriceData: function (e) {
        var t, r, i, a, o, n, s, c = Flipcat.Cart, l = [], _ = [], d = {};
        if (e.prices) for (c.getQuantityProductsInCarts(l, _, d), t = 0; t < l.length; t++) {
            n = i = 0, a = l[t].i;
            c.STORAGE_BALL_CART_PREFIX + a;
            s = c.Lib.storage(c.STORAGE_BALL_CART_PREFIX + a) || {}, o = "balls";
            for (r in l[t].o) r in s ? r in e.prices && (n += e.prices[r] * l[t].o[r]) : (o = 0, r in e.prices && (i += e.prices[r] * l[t].o[r]));
            o && (i = n, $(".company-cart[data-shopId=" + a + "]")[0] && $(".company-cart[data-shopId=" + a + "]").find(".cart-list-currency").text(c.getStrBalls(i))), $(".company-cart[data-shopId=" + a + "]")[0] && $(".company-cart[data-shopId=" + a + "]").find(".cartlist-sum-in-cart").text(FlipcatWebAppLibrary.formatNumber(i))
        }
    },
    setBallsInfo: function (e, t, r, i) {
        var a, o, n = Flipcat.Cart, s = n.getShopId().replace("cart-", ""), c = n.STORAGE_PRICE_BALL_CART_PREFIX + s,
            l = n.Lib, _ = l.storage(c);
        _ = parseInt(_) ? parseInt(_) : 0, _ += t || i ? t * r : r, l.storage(c, _), a = n.STORAGE_BALL_CART_PREFIX + s, o = l.storage(a), o instanceof Object || (o = {}), o[e] = parseInt(o[e]) ? parseInt(o[e]) : 0, o[e]++, t && (o[e] = t), l.storage(a, o)
    },
    checkAddBallsProduct: function (e) {
        var t, r, i = Flipcat.Cart, a = i.Lib, o = i.getBallsCartPrice(), n = " ";
        return o = parseInt(o) ? parseInt(o) : 0, Flipcat.uid ? (r = +$(i.HTML_MAX_BALLS_INP_ID).val(), r > 0 && o + e > r ? (t = i.getStrBalls(r), a.messageFail(__("messages.Max_balls_limit") + " " + $(i.HTML_MAX_BALLS_INP_ID).val() + n + t), !1) : (r = o + e - Flipcat.userBallsBalance, !(r > 0) || (t = i.getStrBalls(r), a.messageFail(__("messages._Not_Enought_balls") + n + r + n + t + n + __("messages.Not_Enought_balls_ending")), !1))) : (confirm(__("messages.For_append_products_for_balls_you_need_authorize")) && ($.cookie("ar", window.location.href, {
            expires: window.Flipcat.AuthMarker.expires,
            path: "/"
        }), $(Flipcat.CoreWebClientAuth.HTML_LOGIN_MODAL_ID).modal("show")), !1)
    },
    isBallsProduct: function (e) {
        var t = Flipcat.Cart, r = t.getShopId().replace("cart-", ""), i = t.STORAGE_BALL_CART_PREFIX + r,
            a = t.Lib.storage(i) || {};
        return !isNaN(parseInt(a[e]))
    },
    removeBallsProduct: function (e, t) {
        var r = Flipcat.Cart, i = r.getShopId().replace("cart-", ""), a = r.STORAGE_PRICE_BALL_CART_PREFIX + i,
            o = r.Lib, n = o.storage(a);
        n && o.storage(a, n - t)
    },
    setCurrencyBallInCart: function (e, t) {
        var r = Flipcat.Cart, i = +$.trim($(t).text());
        i = r.getStrBalls(i), $(e).addClass(r.HTML_GOODS_COIN_ICON_CSS.replace(".", "")), $(e).text("")
    },
    getBallsCartPrice: function () {
        var e, t = Flipcat.Cart, r = t.Lib, i = t.getShopId(), a = String(i).replace("cart-", ""),
            o = t.STORAGE_PRICE_BALL_CART_PREFIX + a, n = t.STORAGE_BALL_CART_PREFIX + a, s = r.storage(i) || {},
            c = r.storage(n), l = r.storage(o);
        if (!c) return r.storage(n, {}), r.storage(o, 0), l = 0;
        for (e in c) if (!(e in s)) {
            r.storage(n, {}), r.storage(o, 0), l = 0;
            break
        }
        return l
    },
    getStrBalls: function (e) {
        var t = Flipcat.Cart, r = "messages.";
        return t.Lib.pluralize(e, "", __(r + "_one_ball"), __(r + "_balls_less4"), __(r + "_balls_more19"))
    },
    showBallsAlerts: function () {
        var e, t = Flipcat.Cart, r = t.getBallsCartPrice(), i = +$(t.HTML_MIN_ORDER_SUM_FOR_BALLS_ORDER_INP_ID).val(),
            a = t.Lib, o = a.storage(t.STORAGE_PRICE_CART_PREFIX + t.getShopId()), n = " ", s = 0;
        if ("/cart" == a.REQUEST_URI(1) && !t.getDraftRequestProcess) return r && !isNaN(i) && i > 0 && o < i && (e = $(t.HTML_SHOP_CURRENCY_INP_ID).val(), e = a.getCurrenciesArray()[e] ? a.getCurrenciesArray()[e] : e, s++, a.messageFail(__("messages.For_create_balls_order_require_") + n + i + n + e + ".")), o = +$(t.HTML_MAX_BALLS_INP_ID).val(), o > 0 && r > o && (e = t.getStrBalls(o), s++, a.messageFail(__("messages.Max_balls_limit") + " " + $(t.HTML_MAX_BALLS_INP_ID).val() + n + e)), s
    },
    showError: function (e, t) {
        Flipcat.CoreCart.showError(e, t)
    },
    hideCartDeleteHint: function () {
        $(Flipcat.Cart.HTML_CART_HINT_DEL_ID).css({visibility: "hidden", opacity: "0"})
    },
    showDelHintAndHideCartIcon: function () {
        var e = Flipcat.Cart;
        e.hideCartDeleteHint(), e.hideCartIcon(0)
    },
    setDatepickerPlaceholderListener: function () {
        $("input.datepicker").focus(function (e) {
            var t = e.target;
            $(t).next().addClass("value-exists")
        }), $("input.datepicker").blur(function (e) {
            var t = e.target;
            trim(t.value) || $(t).next().removeClass("value-exists"), setTimeout(function () {
                trim(t.value) && $(t).next().addClass("value-exists")
            }, 100)
        }), setInterval(function () {
            var e = $("input.datepicker").val();
            $("input.datepicker").next().val(e)
        }, 100)
    },
    getPhonesInputs: function () {
        var e, t, r, i, a = [], o = "ofi3";
        for ($("#ofi3")[0] && a.push($("#" + o)[0]), e = $("span.dc-input-block__placeholder"), t = 0; t < e.length; t++) r = trim(e[t].innerHTML.toLowerCase()), "телефон" != r && "phone" != r || (i = $(e[t]).parent().find("input").first()[0], i && i.id != o && a.push(i));
        return a
    },
    malert: function (e) {
    }
};
var _createClass = function () {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var i = t[r];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    return function (t, r, i) {
        return r && e(t.prototype, r), i && e(t, i), t
    }
}(), Rfi18 = function (e) {
    function t() {
        _classCallCheck(this, t);
        var e = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        e.isCardPaymentVariantActive = !1, e.HTML_RECURRENT_CHB_LABEL_ID = "#recurrentInputBlock", e.HTML_RECURRENT_CHB_ID = "#rememberMyCard", e.HTML_RECURRENT_OFF_CHB_LABEL_ID = "#recurrentOffInputBlock", e.HTML_RECURRENT_OFF_CHB_ID = "#forgetMyCard", e.initRecurrentControls(), $(e.HTML_RECURRENT_OFF_CHB_ID).bind("change", function () {
            e.onUnsubscribeRecurrentChb()
        });
        var r = e.getPaymentTypeSelect();
        return r && r.bind("change", function () {
            e.initRecurrentControls()
        }), e
    }

    return _inherits(t, e), _createClass(t, [{
        key: "isFormContaintsCardPaymentVariant", value: function () {
            return Flipcat.oCardPaymentDOMLib.isFormContaintsCardPaymentVariant(this)
        }
    }, {
        key: "showRecurrentChb", value: function () {
            Flipcat.oCardPaymentDOMLib.showRecurrentChb(this)
        }
    }, {
        key: "setReccurrentCheckboxVisible", value: function (e) {
            Flipcat.oCardPaymentDOMLib.setReccurrentCheckboxVisible(e, this)
        }
    }, {
        key: "isNeedRememberMyCardData", value: function () {
            return Flipcat.oCardPaymentDOMLib.isNeedRememberMyCardData(this)
        }
    }, {
        key: "isNeedUsePrevCardData", value: function () {
            return Flipcat.oCardPaymentDOMLib.isNeedUsePrevCardData(this)
        }
    }, {
        key: "getPaymentTypeSelect", value: function () {
            return Flipcat.oCardPaymentDOMLib.getPaymentTypeSelect(this)
        }
    }]), t
}(CRfi18), Paybox = function (e) {
    function t() {
        _classCallCheck(this, t);
        var e = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        e.isCardPaymentVariantActive = !1, e.HTML_RECURRENT_CHB_LABEL_ID = "#recurrentInputBlock", e.HTML_RECURRENT_CHB_ID = "#rememberMyCard", e.HTML_RECURRENT_OFF_CHB_LABEL_ID = "#recurrentOffInputBlock", e.HTML_RECURRENT_OFF_CHB_ID = "#forgetMyCard", e.initRecurrentControls(), $(e.HTML_RECURRENT_OFF_CHB_ID).bind("change", function () {
            e.onUnsubscribeRecurrentChb()
        });
        var r = e.getPaymentTypeSelect();
        return r && r.bind("change", function () {
            e.initRecurrentControls()
        }), e
    }

    return _inherits(t, e), _createClass(t, [{
        key: "isFormContaintsCardPaymentVariant", value: function () {
            return Flipcat.oCardPaymentDOMLib.isFormContaintsCardPaymentVariant(this)
        }
    }, {
        key: "showRecurrentChb", value: function () {
            Flipcat.oCardPaymentDOMLib.showRecurrentChb(this)
        }
    }, {
        key: "setReccurrentCheckboxVisible", value: function (e) {
            Flipcat.oCardPaymentDOMLib.setReccurrentCheckboxVisible(e, this)
        }
    }, {
        key: "isNeedRememberMyCardData", value: function () {
            return Flipcat.oCardPaymentDOMLib.isNeedRememberMyCardData(this)
        }
    }, {
        key: "isNeedUsePrevCardData", value: function () {
            return Flipcat.oCardPaymentDOMLib.isNeedUsePrevCardData(this)
        }
    }, {
        key: "getPaymentTypeSelect", value: function () {
            return Flipcat.oCardPaymentDOMLib.getPaymentTypeSelect(this)
        }
    }]), t
}(CPaybox), CardPaymentDOMLibModern = function () {
    function e() {
        _classCallCheck(this, e)
    }

    return _createClass(e, [{
        key: "isFormContaintsCardPaymentVariant", value: function (e) {
            var t = Flipcat.Cart, r = $(t.HTML_ORDER_FORM_ID).find("[data-fieldname=card_payment]").first();
            if (r[0]) {
                if (e.isCardPaymentVariantActive = !1, "OPTION" == r[0].tagName) {
                    var i = r.parent();
                    i[0] && "SELECT" == i[0].tagName && (i.val() != r[0].value && $.trim(i.val()) != $.trim(r[0].text) || (e.isCardPaymentVariantActive = !0), e.isFormContaintsMultiplePaymentVariants = i[0].options.length > 1)
                }
                return !0
            }
            return !1
        }
    }, {
        key: "showRecurrentChb", value: function (e) {
            var t = e;
            $(t.HTML_RECURRENT_CHB_LABEL_ID).removeClass("hide"), $(t.HTML_RECURRENT_CHB_ID).prop("checked", !1), $(t.HTML_RECURRENT_CHB_ID).removeClass("hide"), $(t.HTML_RECURRENT_OFF_CHB_ID).prop("checked", !1), $(t.HTML_RECURRENT_OFF_CHB_LABEL_ID).addClass("hide"), t.isFormContaintsCardPaymentVariant(), t.isCardPaymentVariantActive || ($(t.HTML_RECURRENT_CHB_LABEL_ID).addClass("hide"), $(t.HTML_RECURRENT_OFF_CHB_LABEL_ID).addClass("hide"));
        }
    }, {
        key: "setReccurrentCheckboxVisible", value: function (e, t) {
            var r = t, i = $(r.HTML_RECURRENT_OFF_CHB_LABEL_ID), a = $(r.HTML_RECURRENT_OFF_CHB_ID);
            e ? (i.removeClass("hide"), a.prop("disabled") || a.prop("checked", !0), $(r.HTML_RECURRENT_CHB_LABEL_ID).addClass("hide")) : (i.addClass("hide"), a.prop("checked", !1))
        }
    }, {
        key: "isNeedRememberMyCardData", value: function (e) {
            return $(e.HTML_RECURRENT_CHB_ID).prop("checked") ? 1 : 0
        }
    }, {
        key: "isNeedUsePrevCardData", value: function (e) {
            return $(e.HTML_RECURRENT_OFF_CHB_ID).prop("checked") ? 1 : 0
        }
    }, {
        key: "getPaymentTypeSelect", value: function () {
            var e = Flipcat.Cart, t = $(e.HTML_ORDER_FORM_ID).find("[data-fieldname=card_payment]").first(), r = void 0;
            return t[0] && (r = t.parents("select").first()), r
        }
    }]), e
}();
window.Flipcat = window.Flipcat || {};
var Loyalty = {
    HTML_LOYALTY_CONTAINER_ID: "#loyaltyHistory",
    HTML_PERPAGE_INPUT_ID: "#loyaltyPerPage",
    HTML_LOCAL_SET_SIZE_INPUT_ID: "#loyaltyInitHistorySize",
    HTML_LOYALTY_ROW_CONTAINER_CSS: ".profile-loy-history",
    STORAGE_LOYALTY_KEY: "SLK",
    autoloadProcess: 0,
    currentPage: 1,
    lastLoadSize: null,
    init: function (e) {
        "/profile" === FlipcatWebAppLibrary.REQUEST_URI(1) && (this.lib = e, this.setListeners())
    },
    setListeners: function () {
        var e, t = this, r = "[]", i = t.lib;
        try {
            r = JSON.parse(r), this.data = r, r instanceof Array && (Flipcat.Orders.autoloadProcess = 1, Flipcat.linkListener = t.onNeedMoreItems, e = t.getLastOrderIdFromCache(), e ? i._get(t.onLoadNewLoyalty, "/loyalty_news_json?i=" + e, t.onFailLoadNewLoyalty) : i._get(t.onLoadFirstLoyalty, "/loyalty_init_json", t.onFailLoadFirstLoyalty))
        } catch (a) {
        }
    },
    onLinkClick: function (e) {
        var t, r = Flipcat.Loyalty,
            i = e ? FlipcatWebAppLibrary._GET("page", 0, $(e.target).attr("href")) : r.currentPage - 1,
            a = array_chunk(r.data.orders, $(r.HTML_PERPAGE_INPUT_ID).val()),
            o = array_chunk(r.data.orders, $(r.HTML_PERPAGE_INPUT_ID).val())[i],
            n = [{key: "[DATE]", val: r.renderDate}, {key: "[BALLS]", val: r.renderBalls}, {
                key: "[BALLS_COLOR]",
                val: r.renderBallsColor
            }, {key: "[COMMENT]", val: r.renderComment}], s = [];
        if (o) {
            for (t = 0; t < o.length; t++) s.push(o[t]);
            r.currentPage++
        } else if (!e) return r.data.orders.length < r.HTML_LOCAL_SET_SIZE_INPUT_ID || 0 === r.lastLoadSize ? (r.requsetSended || (r.requsetSended = !0, r.currentPageStored = r.currentPage, r.lib._get(r.onLoadLoyalty, "/loyalty_json?offset=" + r.data.orders.length, r.onFailLoadLoyalty)), 0 === r.lastLoadSize && Flipcat.Orders.currentPage--) : Flipcat.Orders.currentPage--, !1;
        return a = s, FlipcatWebAppLibrary.render($(r.HTML_LOYALTY_CONTAINER_ID), "div", n, a, !1, "div.profile-loy-history"), !1
    },
    renderItemsMobile: function (e, t) {
        var r, i, a, o, n, s = e.items, c = (Flipcat.Loyalty, "");
        if (s.length) for (i = t.find(".js-order-items-tpl.tpl").first(), r = i.html(), a = 0; a < s.length; a++) o = r.replace("[TITLE]", s[a].title), o = o.replace("[QUANTITY]", s[a].quantity), o = o.replace("[ITEM_ID]", s[a].id), n = e.shop.currency, n = Flipcat.currenciesMap && Flipcat.currenciesMap[n] ? Flipcat.currenciesMap[n] : n, 1 == s[a].is_loyalty_product && (n = Flipcat.Cart.getStrBalls(round(s[a].quantity * s[a].price))), o = o.replace("[PRICE]", String(round(s[a].quantity * s[a].price, 2)).replace(".", ",") + " " + n), c += o;
        return c
    },
    renderItems: function (e, t) {
        var r, i, a, o, n, s, c, l, _, d = e.items, p = Flipcat.Loyalty, u = e.shop.currency;
        if (d.length) {
            for (n = t.find(p.HTML_PRODUCTS_CONTAINER_CSS + ".tpl").first(), r = n.parent(), a = n.attr("class").replace("tpl", ""), o = n[0].tagName.toLowerCase(), i = $(p.HTML_PRODUCT_ITEM_ID).html(), r.find(o).each(function (e, t) {
                t = $(t), t.hasClass("tpl") || t.remove()
            }), _ = $('<ul class="hide"></ul>'), s = 0; s < d.length; s++) c = d[s], l = i.replace("[TITLE]", c.title), u = p.currencies[u] ? p.currencies[u] : u, 1 == c.is_loyalty_product && (u = Flipcat.Cart.getStrBalls(c.price, round(c.price * c.quantity))), l = l.replace("[PRICE]", String(round(c.price * c.quantity, 2)).replace(".", ",") + " " + u), l = l.replace("[QUANTITY]", c.quantity), l = l.replace(/\[ID\]/gm, c.id), l = c.photos && c.photos[0] && c.photos[0].thumbnail_url ? l.replace('data-src="src"', 'src="' + c.photos[0].thumbnail_url + '"') : l.replace('data-src="src"', 'src="/img/productListNoImage.png"'), _.append($("<" + o + ' class="' + a + '" data-id="' + c.id + '">' + l + "</" + o + ">"));
            return l = _.html(), _.remove(), l
        }
    },
    renderBuyerMobile: function (e, t) {
        var r, i, a = t.find(".js-mobile-order-shop-buyer.tpl").first().html(), o = $("<div></div>"), n = {};
        for (r = 0; r < e.fields.length; r++) !n[e.fields[r].title] && $.trim(e.fields[r].description) && (i = a.replace("[TITLE]", e.fields[r].title), i = i.replace("[DESCRIPTION]", e.fields[r].description), o.append($(i)), n[e.fields[r].title] = 1);
        return i = o.html()
    },
    renderBuyer: function (e, t) {
        var r, i, a = t.find(".order-shop-buyer.tpl").first().html(), o = $("<div></div>"), n = {};
        for (r = 0; r < e.fields.length; r++) !n[e.fields[r].title] && $.trim(e.fields[r].description) && (i = a.replace("[TITLE]", e.fields[r].title), i = i.replace("[DESCRIPTION]", e.fields[r].description), o.append($(i)), n[e.fields[r].title] = 1);
        return i = o.html()
    },
    showReviewButton: function (e, t) {
        return e.review && e.review.review_rating && $.trim(e.review.review_rating) ? "hide" : ""
    },
    renderDate: function (e, t) {
        var r = e.date.split(" "), i = array_reverse(r[0].split("-")).join("-"), a = trim(i + " " + r[1]);
        return FlipcatWebAppLibrary.formatDate(a, 1, 0, 0)
    },
    renderBalls: function (e, t) {
        return e.count > 0 ? "+" + e.count : e.count
    },
    renderBallsColor: function (e, t) {
        return e.count > 0 ? "loy-pos" : "loy-neg"
    },
    renderComment: function (e, t) {
        return e.type_op + (e.order_id > 0 ? " №" + e.order_id : "")
    },
    onNeedMoreItems: function () {
        var e = Flipcat.Loyalty;
        e.data && setTimeout(function () {
            Flipcat.Orders.autoloadProcess = 0;
            try {
                e.onLinkClick()
            } catch (t) {
            }
        }, 500)
    },
    onLoadLoyalty: function (e) {
        var t, r = Flipcat.Loyalty;
        if (r.lastLoadSize = e.orders.length, e.orders && e.orders.length) for (t = 0; t < e.orders.length; t++) r.data.orders.push(e.orders[t]);
        r.currentPage = r.currentPageStored, r.onLinkClick(), setTimeout(function () {
            r.requsetSended = !1
        }, 2e3)
    },
    onFailLoadLoyalty: function () {
        Flipcat.Loyalty.requsetSended = !1
    },
    getLastOrderIdFromCache: function () {
        var e = Flipcat.Loyalty, t = FlipcatWebAppLibrary, r = t.storage(e.getHistoryKey());
        return r && isset(r, "orders", "length") && r.orders.length > 0 ? r.orders[0].id : 0
    },
    onLoadFirstLoyalty: function (e) {
        var t = Flipcat.Loyalty, r = FlipcatWebAppLibrary;
        isset(e, "orders", "length") && e.orders.length > 0 && (r.storage(t.getHistoryKey(), e), t.renderFirstPage(e))
    },
    setLoyaltyListeners: function () {
        Flipcat.Orders.autoloadProcess = 0
    },
    renderFirstPage: function (e) {
        var t = Flipcat.Loyalty;
        t.data = e, e.orders && e.orders.length && (t.onLinkClick(), t.setLoyaltyListeners())
    },
    onLoadNewLoyalty: function (e) {
        var t, r, i = Flipcat.Loyalty, a = FlipcatWebAppLibrary;
        if (isset(e, "orders", "length")) {
            var t = a.storage(i.getHistoryKey());
            if (t && t.orders && e.orders) {
                for (r = 0; r < e.orders.length; r++) e.orders[r].items = array_values(e.orders[r].items);
                for (r = 0; r < t.orders.length; r++) e.orders.push(t.orders[r]);
                t.orders = e.orders, a.storage(i.getHistoryKey(), t), i.renderFirstPage(t)
            } else localStorage.clear(i.getHistoryKey()), i.setListeners()
        }
    },
    onFailLoadNewLoyalty: function (e, t, r, i) {
        Flipcat.Messages.fail(__("messages.Default_fail"))
    },
    onFailLoadFirstLoyalty: function (e, t, r, i) {
        Flipcat.Messages.fail(__("messages.Default_fail"))
    },
    getHistoryKey: function () {
        return Flipcat.Loyalty.STORAGE_LOYALTY_KEY + "-" + Flipcat.AuthMarker.getMarker()
    }
};
window.Flipcat.Loyalty = Loyalty, window.Flipcat.WAC = {
    HTML_TREE_CONTAINER_ID: "#agwcategories",
    HTML_ACTIVE_ITEM_CSS: ".left-menu-active-link",
    HTML_ITEM_TPL_ID: "#WACLeftTemplate",
    HTML_PRODUCT_NAME_BLOCK_CSS: ".jcompanyProductName",
    HTML_MOBILE_CATEGORY_BTN_ID: "#bAcwMob",
    HTML_OPTIONS_DESKTOP_PLACE_CSS: ".jDesktopOptionsPlace",
    HTML_OPTIONS_MOBILE_PLACE_CSS: ".jMobileOptionsPlace",
    HTML_OPTIONS_CSS: ".jOptionsWac",
    HTML_COMPANY_ITEM_CSS: ".company-acw-block",
    getLinks: function (e) {
        return $(Flipcat.WAC.HTML_TREE_CONTAINER_ID + " a")
    },
    renderScopes: function (e, t, r) {
        var i = Flipcat.WAC, a = $("#acw" + t);
        $(i.HTML_ITEM_TPL_ID).html();
        if (i.currentNode = a, a[0]) {
            if (!i.isChildAppend(t)) if (e instanceof Array) for (o = 0; o < e.length; o++) i.renderItem(e[o], r); else for (o in e) isNaN(+o) || i.renderItem(e[o], r);
            var o, n = $("#agwcategories a.active"), s = a.data("parent");
            if (!a.hasClass("active")) for (o = 0; o < n.length; o++) $(n[o]).data("parent") == s && (i.closeChilds(n, $(n[o]).data("id")), Flipcat.ShopCatNavigator.animateChildsHlp(n[o]));
            Flipcat.ShopCatNavigator.animateChildsHlp(a[0]), i.setActiveCss(t)
        }
    },
    renderItem: function (e, t) {
        var r, i, a = Flipcat.WAC, o = $(a.HTML_ITEM_TPL_ID).html(), n = "goods-filter__item goods-filter__item--more",
            s = "goods-filter__addition--third", c = s;
        e.children && count(e.children) && (c = n), i = o.replace("[parent]", e.parent_id), i = i.replace("[title]", FlipcatWebAppLibrary.capitalize(e.title)), i = i.replace("[did]", e.id), i = i.replace("[id]", e.id), i = i.replace("[css]", c), i = i.replace('data-href="#"', 'href="/' + e.hfu_url + '"'), r = $(i), a.currentNode.after(r), a.currentNode = r, r.click(t)
    },
    loadCompanies: function (e) {
    },
    isChildAppend: function (e) {
        var t, r = $(".jdesktopmenuitem[data-parent=" + e + "]");
        for (t = 0; t < r.length; t++) Flipcat.WAC.isChildAppend($(r[t]).data("id"));
        return r.remove(), !1
    },
    setActiveCss: function (e) {
        var t = Flipcat.WAC, r = t.HTML_ACTIVE_ITEM_CSS.replace(".", "");
        $(t.HTML_ACTIVE_ITEM_CSS).removeClass(r), $("#acw" + e).addClass(r)
    },
    onLoadPage: function () {
        var e, t, r, i = Flipcat, a = i.WAC;
        if (i.Desktop.isMobile()) for (e = $(a.HTML_OPTIONS_CSS), t = 0; t < e.length; t++) r = $(e[t]).parents(a.HTML_COMPANY_ITEM_CSS).first().find(a.HTML_OPTIONS_MOBILE_PLACE_CSS).first().append($(e[t]))
    },
    closeChilds: function (e, t) {
        var r, i = Flipcat;
        for (r = 0; r < e.length; r++) $(e[r]).attr("data-parent") == t && (i.WAC.closeChilds(e, $(e[r]).attr("data-id")), i.ShopCatNavigator.animateChildsHlp(e[r]))
    },
    setSeoData: function (e, t) {
        t && $("#shops h1").first().text(t.trim()), e && ($("#seoH").text(e.heading), $("#seoB").html(e.body), $("#seoI")[0] && $("#seoI").html(e.intro))
    }
}, function (e, t) {
    function r() {
        function t() {
        }

        if (window.console || (window.console = {log: t, warn: t, error: t}), window.jvars = !1, e("#jvars")[0]) try {
            window.jvars = JSON.parse(e("#jvars").val())
        } catch (r) {
        }
        window.loadTime = (new Date).getTime(), expandLibrary(), FlipcatWebAppLibrary.preInit(), FlipcatWebAppLibrary.fixSelectedSelect(), Flipcat.Desktop.init(), A();
        var i = {
            _post: E,
            messageFail: _,
            messageSuccess: l,
            _get: M,
            initCartLink: Flipcat.Cart.initCartLink,
            HTML_BREAD_CRUMBS_AREA_ID: V,
            HTML_BREAD_CRUMBS_ID: G,
            HTML_CART_LINK_ID: Flipcat.Cart.HTML_CART_LINK_ID,
            HTML_CART_QUANTITY_ID: Flipcat.Cart.HTML_CART_QUANTITY_ID,
            validateRequired: s,
            validateEmail: n,
            validateEmailAndPhone: o,
            defaultFail: y,
            setFormErrorByPlaceholder: c,
            setOnShopItemPopupListener: D,
            addToCart: Flipcat.Cart.addToCart,
            setProgressBarValue: P,
            checkPrice: Flipcat.Cart.checkPrice
        };
        LangLoader.init(i), Flipcat.Favorites.init(i), Flipcat.Orders.init(i), Flipcat.ShopCatNavigator.init(i), Flipcat.ShopFavorite.init(i), Flipcat.ShopList.init(i), Flipcat.BreadCrumbs.init(i), Flipcat.Yamap.init(i), Flipcat.CoreWebClientAuth.init(i), Flipcat.Pagination.init(i), Flipcat.MultiproductManager.init(), Flipcat.MultiproductMobileManager.init(), Flipcat.Reviews.init(i), Flipcat.Smartbanner.init(i), Flipcat.geo = new Flipcat.CGeo, Flipcat.User.init(i), Flipcat.SlideToggleAnimate.init(i), Flipcat.Cart.init(i), Flipcat.OrderFormStorage.init(i), Flipcat.Loyalty.init(i), Flipcat.ShopHorizontalMenu.init(), Flipcat.CWAC.init(), d(), b();
        var a = setInterval(function () {
            e(".news-block__footer a").length && (e(".news-block__footer a").bind("touchstart", function () {
                window.location.href = this.getAttribute("href")
            }), clearInterval(a))
        }, 100);
        FlipcatWebAppLibrary.redirectFromRecoveryLinkPage(), FlipcatWebAppLibrary.postInit()
    }

    function i() {
        var t = e(this), r = t.find("input"), i = {};
        return i.type = r.prop("name"), i.allow = r.prop("checked") ? 1 : 0, E(i, a, "/set_notifications"), !1
    }

    function a(t) {
        t.success && (e(HTML_SET_NOTIFICATIONS_BLOCK_ID).find(K + " p").text(t.message), e(HTML_SET_NOTIFICATIONS_BLOCK_ID).find(K).removeClass("hide"))
    }

    function o(t) {
        var r = n(t);
        t = t ? t : Flipcat.Cart.HTML_ORDER_FORM_ID;
        var i, a = /^\+?[0-9\s\(\)\-]{5,20}$/i, o = e(t).find("input[name=3]"), s = !0, c = 0;
        return o.each(function (t, r) {
            c || (i = e(r).val(), e.trim(i) && (a.test(i) || (msg = __("Incorrect_phone"), e(r).parent().parent().find(Flipcat.Cart.HTML_ORDER_FORM_FIELD_ERROR_CSS).first().text(msg), s = !1, c = 1)))
        }), r && s
    }

    function n(t) {
        t = t ? t : Flipcat.Cart.HTML_ORDER_FORM_ID;
        var r, i = /^[\w+\-.]+@[a-z\d\-.]+\.[a-z]+$/i, a = e(t).find("input[type=email],input[name=4]"), o = !0, n = 0;
        return a.each(function (t, a) {
            n || (r = e(a).val(), e.trim(r) && (i.test(r) || (msg = __("Incorrect_email"), e(a).parent().parent().find(Flipcat.Cart.HTML_ORDER_FORM_FIELD_ERROR_CSS).first().text(msg), o = !1, n = 1)))
        }), o
    }

    function s(t) {
        var r, i, a = !0;
        return t = t ? t : Flipcat.Cart.HTML_ORDER_FORM_ID, e(t).find(Flipcat.Cart.HTML_ORDER_FORM_FIELD_ERROR_CSS).text(""), e(t).find(Flipcat.Cart.HTML_ORDER_FORM_FIELD_BLOCK_CSS).each(function (t, o) {
            r = e(o).find(Flipcat.Cart.HTML_ORDER_FORM_REQUIRED_FIELD_CSS).first()[0], r && (i = e(o).find("input,select").first(), !i[0] || e.trim(i.val()) && ("checkbox" != i[0].type || i[0].checked) || (a = !1, c("#" + i.attr("id"))))
        }), a
    }

    function c(t, r) {
        var i, a = e(t).attr("placeholder");
        /*тут была обрезка пробелов в пароле*/
        //a=a.trim;
        /*тут была обрезка пробелов в пароле*/


        a || (i = e(t).parent().find(".dc-input-block__placeholder").first(),
        i[0] && i.text() && (a = i.text().trim())),
            r = r ? r : __("Field_") + (a ? '"' + a + '"' : "") + __("_required__for_fill"),
            e(t).parents(".dc-input-block__label").parent().find(Flipcat.Cart.HTML_ORDER_FORM_FIELD_ERROR_CSS).first().html(r),
            e(t).parents(".entry-modal__accept-agreement").first().find(Flipcat.Cart.HTML_ORDER_FORM_FIELD_ERROR_CSS).first().html(r),
            setTimeout(function () {
            e(t).parents(".dc-input-block__label").parent().find(Flipcat.Cart.HTML_ORDER_FORM_FIELD_ERROR_CSS).first().css("display", "inline-block"), e(t).parents(".entry-modal__accept-agreement").first().find(Flipcat.Cart.HTML_ORDER_FORM_FIELD_ERROR_CSS).first().html(r)
        }, 1e3)
    }

    function l(e) {
        Flipcat.Messages.success(e)
    }

    function _(e) {
        Flipcat.Messages.fail(e)
    }

    function d() {
        window.initLocation = location.href, e("a").click(function (t) {
            return e(t.currentTarget).attr("href") && !~e(t.currentTarget).attr("href").indexOf("#") && (window.locationChanged = 1), !0
        }), e(HTML_SET_NOTIFICATIONS_SWITCHER_ID).bind("change", i), e(HTML_SHOP_CATEGORY_PARENT_CSS).click(R), D(), e("#debugInfo").click(v), e(Y)[0] && t._get(h, "/getcategoriestreejson", function () {
        }), e(HTML_SWITCH_FIRST_AGREGATE_SCOPES_LEVEL_ID + " option").each(function (e, t) {
            t.hasAttribute("selected") ? t.selected = !0 : t.selected = !1
        }), setInterval(t.checkAutoloadItems, 100)
    }

    function p(r, i) {
        e("#preloader").hide();
        var a, o, n, s = [];
        for (var a in r) s.push(r[a]);
        for (a = 0; a < s.length; a++) for (o = 0; o < s.length; o++) s[a].sort && s[a].sort < s[o].sort && (n = s[a], s[a] = s[o], s[o] = n);
        r = t.indexBy(s), k = r, $ = JSON.stringify(r), T(), window.onBackButtonAgregateCategroyLevel instanceof Function && onBackButtonAgregateCategroyLevel()
    }

    function u() {
        if (x) {
            if (history && history.pushState) {
                var t, r = this, i = r.tagName;
                "ARTICLE" == i ? r = e(r).find("a").first() : "A" == i ? r = e(r) : i && (r = e(r).parents("a").first(), r = e(r));
                try {
                    t = r.data("id")
                } catch (a) {
                }
                if (t) {
                    if (!m(t)) return !0;
                    e(j).removeClass("hide"), B.push(t), T(), window.onChangeFirstAgregateCategroyLevel instanceof Function && onChangeFirstAgregateCategroyLevel(), e(HTML_CURRENT_CATEGORY_INP_ID).val(t), i && history.pushState(null, null, r.attr("href"))
                } else Error("Empty id!")
            }
            return !1
        }
    }

    function h(r) {
        if (1 != e("#isAllShops").val() && !Flipcat.noUseJsChangeLevel) {
            var i;
            t.REQUEST_URI(1);
            if (H()) {
                try {
                    $ = JSON.stringify(r), e(Y).text($), k = JSON.parse($)
                } catch (a) {
                }
                k && (k = t.indexBy(k), $ = JSON.stringify(k)), i = f(0, 1), e(W + " article a").click(u), e(window).bind("popstate", function () {
                    f(!0)
                }), e(j).click(function () {
                    var r = t.HTTP_HOST(), a = C();
                    return !!(i && a && a.data && a.data[i] && a.data[i].children && a.data[i].children instanceof Array && 0 == a.data[i].children.length) || (B.length > 0 && (B.splice(B.length - 1, 1), B.length > 0 && (r += "/a/" + B[B.length - 1]), x && history.pushState(null, null, r)), B.length ? (m(0), T(), window.onBackButtonAgregateCategroyLevel instanceof Function && onBackButtonAgregateCategroyLevel()) : (e(j).addClass("hide"), M(p, "/afk")), !1)
                })
            }
        }
    }

    function f(r, i) {
        var a = navigator.userAgent.toLowerCase();
        if (!(a.indexOf("safari") != -1 && a.indexOf("chrom") == -1 && (new Date).getTime() - window.loadTime < 800)) {
            var o, n = t.REQUEST_URI(1), s = {};
            if (o = L(n), isNaN(o) && (o = 0), i) return o;
            if (o) s.data = function (e) {
                if ("id" == e) return o
            }, g(o), u.apply(s); else if (r) {
                var c = window.location.href;
                c.indexOf("#") != c.length - 1 && (e(j).addClass("hide"), M(p, "/afk"), B = []), window.onBackButtonAgregateCategroyLevel instanceof Function && onBackButtonAgregateCategroyLevel()
            }
            return o
        }
    }

    function g(e, r, i) {
        var a, o, n = 0;
        if (r || (r = JSON.parse($)), r instanceof Array && (r = t.indexBy(r)), i || (B = []), e in r && (n = 1), o = JSON.stringify(B), !n) for (a in r) if (B = JSON.parse(o), r[a].children) {
            B.push(r[a].id);
            var s = g(e, r[a].children, r[a].id);
            if (s) {
                n = s;
                break
            }
        }
        return n
    }

    function m(e) {
        var r, i = !0;
        return r = C(), i = r.found, r = r.data, r || (r = k), e && r[e] && r[e].count && r[e].children && count(r[e].children) ? r = t.indexBy(r[e].children, "id", 1) : e && (i = !1), i ? (k = r, 1) : 0
    }

    function C() {
        var r, i, a, o, n, s = !0, c = [{title: e(HTML_MAIN_BC_TEXT_ID).text(), link: "/"}];
        try {
            i = JSON.parse($)
        } catch (l) {
        }
        for (i || Error("Debug: empty data!"), o = 0; o < B.length; o++) {
            if (a = B[o], !(i[a] && i[a].count && i[a].children && count(i[a].children))) {
                s = !1;
                break
            }
            n = i[a].hfu_url ? "/" + i[a].hfu_url : "/a/" + i[a].id, n = n.replace("//", "/"), c.push({
                link: n,
                title: i[a].title
            }), i = t.indexBy(i[a].children)
        }
        return r = +e(HTML_CURRENT_CATEGORY_INP_ID).val(), !isNaN(r) && r in i && (n = i[a].hfu_url ? "/" + i[a].hfu_url : "/a/" + i[a].id, n = n.replace("//", "/"), c.push({
            link: n,
            title: i[r].title
        })), i = {data: i, found: s, breadCrumbs: c}
    }

    function T() {
        var r, i, a, o, n, s = "article", c = k, l = e(W), _ = l.find(s).first().html(),
            d = l.find(s).first().attr("class").replace(" tpl ", " ");
        for (l.find(s).each(function (t, r) {
            t > 0 && e(r).remove()
        }), N(c), o = 0; o < c.order.length; o++) r = c.order[o], +r && (c[r].image || (c[r].image = "/img/productListNoImage.png"), i = _.replace(/\[ID\]/gm, r), n = c[r].hfu_url ? "/" + c[r].hfu_url : "/a/" + r, n = n.replace("//", "/"), i = i.replace(/data\-src="src"/m, 'src="' + c[r].image + '"').replace(/\[title\]/gm, c[r].title).replace(/data\-href="[^"]*"/m, 'href="' + n + '"').replace(/\[LINK\]/gi, n), a = e("<" + s + ' class="' + d + '" data-id="' + r + '">' + i + "</" + s + ">"), a = t.processTemplateLinks(a), a = t.processTemplateImg(a), l.find(".mainpage-projects").append(a), a.click(u));
        I()
    }

    function I() {
        var e = C(), t = e.breadCrumbs;
        BreadCrumbs.render(t, S)
    }

    function S() {
        var t = e(this);
        if (t.is("li") && (t = t.find("a").first()), x) return history.pushState(null, null, t.attr("href")), f(!0), !1
    }

    function L(t, r) {
        t = t.replace("/", "");
        var i, a, o, n = e(Y).text(), s = JSON.parse(n);
        if (r || (r = s), r instanceof Array) {
            for (i = 0; i < r.length; i++) {
                if (a = r[i], t == r[i].hfu_url.replace("/", "")) return r[i].id;
                if (r[i].children && (o = L(t, r[i].children))) return o
            }
            return 0
        }
        if (r instanceof Object) {
            for (i in r) {
                if (a = r[i], t == r[i].hfu_url.replace("/", "")) return r[i].id;
                if (r[i].children && (o = L(t, r[i].children))) return o
            }
            return 0
        }
    }

    function v() {
        return "block" == e("#debugInfoBlock").css("display") ? e("#debugInfoBlock").fadeOut() : e("#debugInfoBlock").removeClass("hide"), !1
    }

    function M(e, r, i) {
        t._get(e, r, i)
    }

    function E(e, r, i, a) {
        var o = t.getToken();
        o && (e._token = o, O("post", e, r, i, a))
    }

    function O(e, r, i, a, o) {
        t.restreq(e, r, i, a, o)
    }

    function y(e) {
        window.requestSended = 0, alert(__("messages.Default_fail"))
    }

    function A() {
        var e = {Favorites: window.Flipcat.Favorites}, t = {_post: E};
        Flipcat.AuthMarker.init(t, e)
    }

    function R() {
        var t = this;
        t = "LI" == t.tagName ? e(t).find("a").first()[0] : t;
        var r = e(t), i = r.data("id"), a = r.parent().find("ul").first(), o = ".shop-category-is-open";
        return a.hasClass("hide") && (U[i] = 0, a.removeClass("hide"), a.hide()), 0 === U[i] ? (U[i] = 1, a.fadeIn(), setTimeout(function () {
            r.addClass(o.replace(".", ""))
        }, 60)) : (U[i] = 0, a.fadeOut(), setTimeout(function () {
            r.removeClass(o.replace(".", ""))
        }, 60)), !1
    }

    function F(r) {
        var i, a, o, n, s, c = e(r.target);
        if (c.hasClass(HTML_POPUP_PRODUCT_CONTAINER_CSS) || (c = c.parents(HTML_POPUP_PRODUCT_CONTAINER_CSS).first()), n = c, i = c.find(HTML_POPUP_PRODUCT_CSS).first(), !i) return !0;
        a = r.screenX - r.offsetX + n.width(), o = r.screenY - r.offsetY + n.height(), i.css("opacity", 0), a + i.width() > t.getViewport().w ? i.addClass("position-left") : i.removeClass("position-left"), s = Math.max(document.documentElement.scrollHeight);
        var l = t.getViewport().h, _ = e(window).scrollTop();
        if (i.removeClass("position-top"), n[0]) {
            var d = 22, p = d, u = n.parent()[0].offsetTop + e("main").first()[0].offsetTop;
            i.css("top", "0px"), i.css("bottom", "auto");
            var h = e("#breadcrumbs-area").height() + e(".navbar").first().height();
            u < _ + h - p && (p = _ + h - p - u, i.css("top", p + "px")), u + i.height() > l + _ && (p = l + _ - u - i.height() - 30, i.css("top", p + "px"), i.addClass("position-top"), i.css("bottom", "0px"), i.css("bottom", i.height() - i.find("div").first().height() - 140 + "px"))
        }
        i.css("opacity", 1)
    }

    function D() {
        e(HTML_POPUP_PRODUCT_CONTAINER_CSS).bind("mouseover", F)
    }

    function P() {
        e(".progress-bar").each(function (t, r) {
            r = e(r);
            var i = 100 - r.data("value"), a = r.find("span").first();
            a.css("width", i + "%"), 100 == i ? (window.Flipcat.progressBarGreenColor || (window.Flipcat.progressBarGreenColor = r.css("background-color")), window.Flipcat.progressBarRedColor || (window.Flipcat.progressBarRedColor = r.find("span").first().css("background-color")), a.css("background-color", Flipcat.progressBarGreenColor)) : a.css("background-color", Flipcat.progressBarRedColor)
        })
    }

    function b() {
        var r = t.HTTP_HOST();
        (~r.indexOf(".рф") || ~r.indexOf(".xn--p1ai") || ~r.indexOf(".рус") || ~r.indexOf(".xn--p1acf")) && (e(HTML_VK_LOGIN_BUTTON_CSS).addClass("hide"), ~location.href.indexOf("https") || e(HTML_MRU_LOGIN_BUTTON_CSS).addClass("entry-modal_margin_30"))
    }

    function N(e) {
        var t, r, i = [];
        if (e instanceof Object) for (t in e) +t && !isNaN(e[t].sortI) && (i[e[t].sortI] = t);
        if (e instanceof Array) for (t = 0; t < e.length; t++) r = e[t].id, +t && !isNaN(e[t].sortI) && (i[e[t].sortI] = r);
        i.length && (e.order = i)
    }

    function H() {
        return (!jvars || !jvars.isAgregateUseWebCategories) && w()
    }

    function w() {
        return !!e(".mainpage-projects").first()[0]
    }

    var k, $, B = [], U = {}, x = !(!window.history || !window.history.pushState), W = "#projects-container",
        G = "#breadcrumbs", V = "#breadcrumbs-area", j = ".scopeUp", Y = "#scopesData", K = ".alert-success";
    HTML_SET_NOTIFICATIONS_BLOCK_ID = "#notifications", HTML_SET_NOTIFICATIONS_SWITCHER_ID = ".material-switch", HTML_POPUP_PRODUCT_CSS = ".course-popup", HTML_POPUP_PRODUCT_CONTAINER_CSS = ".course", HTML_SWITCH_FIRST_AGREGATE_SCOPES_LEVEL_ID = "#selectFirstLevelCategoryItem", HTML_VK_LOGIN_BUTTON_CSS = ".entry-modal__vk", HTML_MRU_LOGIN_BUTTON_CSS = ".entry-modal__mail", HTML_CURRENT_CATEGORY_INP_ID = "currentCategoryId", HTML_MAIN_BC_TEXT_ID = "#firstBreadCrumbTitle", HTML_SHOP_CATEGORY_PARENT_CSS = ".parent-shop-category", HTML_INPUT_ALL_SHOP_CATEGORIES_PAGE_ID = "#shopAllCategories", e(r)
}(jQuery, window.FlipcatWebAppLibrary), function (e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : e.jquery_dotdotdot_js = t(e.jQuery)
}(this, function (e) {
    return !function (e) {
        "use strict";

        function t() {
            s = e(window), a = {}, o = {}, n = {}, e.each([a, o, n], function (e, t) {
                t.add = function (e) {
                    e = e.split(" ");
                    for (var r = 0, i = e.length; r < i; r++) t[e[r]] = t.ddd(e[r])
                }
            }), a.ddd = function (e) {
                return "ddd-" + e
            }, a.add("truncated keep"), o.ddd = function (e) {
                return "ddd-" + e
            }, n.ddd = function (e) {
                return e + ".ddd"
            }, n.add("resize"), t = function () {
            }
        }

        var r = "dotdotdot", i = "3.2.2";
        if (!(e[r] && e[r].version > i)) {
            e[r] = function (e, t) {
                this.$dot = e, this.api = ["getInstance", "truncate", "restore", "destroy", "watch", "unwatch"], this.opts = t;
                var i = this.$dot.data(r);
                return i && i.destroy(), this.init(), this.truncate(), this.opts.watch && this.watch(), this
            }, e[r].version = i, e[r].uniqueId = 0, e[r].defaults = {
                ellipsis: "… ", callback: function (e) {
                }, truncate: "word", tolerance: 0, keep: null, watch: "window", height: null
            }, e[r].prototype = {
                init: function () {
                    this.watchTimeout = null, this.watchInterval = null, this.uniqueId = e[r].uniqueId++, this.originalStyle = this.$dot.attr("style") || "", this.originalContent = this._getOriginalContent(), "break-word" !== this.$dot.css("word-wrap") && this.$dot.css("word-wrap", "break-word"), "nowrap" === this.$dot.css("white-space") && this.$dot.css("white-space", "normal"), null === this.opts.height && (this.opts.height = this._getMaxHeight()), "string" == typeof this.opts.ellipsis && (this.opts.ellipsis = document.createTextNode(this.opts.ellipsis))
                }, getInstance: function () {
                    return this
                }, truncate: function () {
                    this.$inner = this.$dot.wrapInner("<div />").children().css({
                        display: "block",
                        height: "auto",
                        width: "auto",
                        border: "none",
                        padding: 0,
                        margin: 0
                    }), this.$inner.empty().append(this.originalContent.clone(!0)), this.maxHeight = this._getMaxHeight();
                    var e = !1;
                    return this._fits() || (e = !0, this._truncateToNode(this.$inner[0])), this.$dot[e ? "addClass" : "removeClass"](a.truncated), this.$inner.replaceWith(this.$inner.contents()), this.$inner = null, this.opts.callback.call(this.$dot[0], e), e
                }, restore: function () {
                    this.unwatch(), this.$dot.empty().append(this.originalContent).attr("style", this.originalStyle).removeClass(a.truncated)
                }, destroy: function () {
                    this.restore(), this.$dot.data(r, null)
                }, watch: function () {
                    var e = this;
                    this.unwatch();
                    var t = {};
                    "window" == this.opts.watch ? s.on(n.resize + e.uniqueId, function (r) {
                        e.watchTimeout && clearTimeout(e.watchTimeout), e.watchTimeout = setTimeout(function () {
                            t = e._watchSizes(t, s, "width", "height")
                        }, 100)
                    }) : this.watchInterval = setInterval(function () {
                        t = e._watchSizes(t, e.$dot, "innerWidth", "innerHeight")
                    }, 500)
                }, unwatch: function () {
                    s.off(n.resize + this.uniqueId), this.watchInterval && clearInterval(this.watchInterval), this.watchTimeout && clearTimeout(this.watchTimeout)
                }, _api: function () {
                    var t = this, r = {};
                    return e.each(this.api, function (e) {
                        var i = this;
                        r[i] = function () {
                            var e = t[i].apply(t, arguments);
                            return "undefined" == typeof e ? r : e
                        }
                    }), r
                }, _truncateToNode: function (t) {
                    var r = [], i = [];
                    if (e(t).contents().each(function () {
                        var t = e(this);
                        if (!t.hasClass(a.keep)) {
                            var o = document.createComment("");
                            t.replaceWith(o), i.push(this), r.push(o)
                        }
                    }), i.length) {
                        for (var o = 0; o < i.length; o++) {
                            e(r[o]).replaceWith(i[o]), e(i[o]).append(this.opts.ellipsis);
                            var n = this._fits();
                            if (e(this.opts.ellipsis, i[o]).remove(), !n) {
                                if ("node" == this.opts.truncate && o > 1) return void e(i[o - 2]).remove();
                                break
                            }
                        }
                        for (var s = o; s < r.length; s++) e(r[s]).remove();
                        var c = i[Math.max(0, Math.min(o, i.length - 1))];
                        if (1 == c.nodeType) {
                            var l = e("<" + c.nodeName + " />");
                            l.append(this.opts.ellipsis), e(c).replaceWith(l), this._fits() ? l.replaceWith(c) : (l.remove(), c = i[Math.max(0, o - 1)])
                        }
                        1 == c.nodeType ? this._truncateToNode(c) : this._truncateToWord(c)
                    }
                }, _truncateToWord: function (e) {
                    for (var t = e, r = this, i = this.__getTextContent(t), a = i.indexOf(" ") !== -1 ? " " : " ", o = i.split(a), n = "", s = o.length; s >= 0; s--) if (n = o.slice(0, s).join(a), r.__setTextContent(t, r._addEllipsis(n)), r._fits()) {
                        "letter" == r.opts.truncate && (r.__setTextContent(t, o.slice(0, s + 1).join(a)), r._truncateToLetter(t));
                        break
                    }
                }, _truncateToLetter: function (e) {
                    for (var t = this, r = this.__getTextContent(e), i = r.split(""), a = "", o = i.length; o >= 0 && (a = i.slice(0, o).join(""), !a.length || (t.__setTextContent(e, t._addEllipsis(a)), !t._fits())); o--) ;
                }, _fits: function () {
                    return this.$inner.innerHeight() <= this.maxHeight + this.opts.tolerance
                }, _addEllipsis: function (t) {
                    for (var r = [" ", " ", ",", ";", ".", "!", "?"]; e.inArray(t.slice(-1), r) > -1;) t = t.slice(0, -1);
                    return t += this.__getTextContent(this.opts.ellipsis)
                }, _getOriginalContent: function () {
                    var t = this;
                    return this.$dot.find("script, style").addClass(a.keep), this.opts.keep && this.$dot.find(this.opts.keep).addClass(a.keep), this.$dot.find("*").not("." + a.keep).add(this.$dot).contents().each(function () {
                        var r = this, i = e(this);
                        if (3 == r.nodeType) {
                            if ("" == e.trim(t.__getTextContent(r))) {
                                if (i.parent().is("table, thead, tbody, tfoot, tr, dl, ul, ol, video")) return void i.remove();
                                if (i.prev().is("div, p, table, td, td, dt, dd, li")) return void i.remove();
                                if (i.next().is("div, p, table, td, td, dt, dd, li")) return void i.remove();
                                if (!i.prev().length) return void i.remove();
                                if (!i.next().length) return void i.remove()
                            }
                        } else 8 == r.nodeType && i.remove()
                    }), this.$dot.contents()
                }, _getMaxHeight: function () {
                    if ("number" == typeof this.opts.height) return this.opts.height;
                    for (var e = ["maxHeight", "height"], t = 0, r = 0; r < e.length; r++) if (t = window.getComputedStyle(this.$dot[0])[e[r]], "px" == t.slice(-2)) {
                        t = parseFloat(t);
                        break
                    }
                    var e = [];
                    switch (this.$dot.css("boxSizing")) {
                        case"border-box":
                            e.push("borderTopWidth"), e.push("borderBottomWidth");
                        case"padding-box":
                            e.push("paddingTop"), e.push("paddingBottom")
                    }
                    for (var r = 0; r < e.length; r++) {
                        var i = window.getComputedStyle(this.$dot[0])[e[r]];
                        "px" == i.slice(-2) && (t -= parseFloat(i))
                    }
                    return Math.max(t, 0)
                }, _watchSizes: function (e, t, r, i) {
                    if (this.$dot.is(":visible")) {
                        var a = {width: t[r](), height: t[i]()};
                        return e.width == a.width && e.height == a.height || this.truncate(), a
                    }
                    return e
                }, __getTextContent: function (e) {
                    for (var t = ["nodeValue", "textContent", "innerText"], r = 0; r < t.length; r++) if ("string" == typeof e[t[r]]) return e[t[r]];
                    return ""
                }, __setTextContent: function (e, t) {
                    for (var r = ["nodeValue", "textContent", "innerText"], i = 0; i < r.length; i++) e[r[i]] = t
                }
            }, e.fn[r] = function (i) {
                return t(), i = e.extend(!0, {}, e[r].defaults, i), this.each(function () {
                    e(this).data(r, new e[r](e(this), i)._api())
                })
            };
            var a, o, n, s
        }
    }(e), !0
}), window.Flipcat = window.Flipcat || {}, window.Flipcat.OrdersTheme = {
    refreshOrderViewDesktop: function (e) {
        FlipcatWebAppLibrary.unlock(Flipcat.Orders.HTML_ORDER_EXT_BLOCK_IN_MODAL);
        var t, r, i, a, o, n, s, c, l, _ = $(".j-orders-history-item-" + e.sys_order_id).parent(), d = Flipcat.Orders,
            p = this;
        t = $(d.HTML_ORDER_EXT_BLOCK_IN_MODAL), _[0] && (jRow = _, l = d.totalPrice(e), r = jRow.find(".orders-history-shop-logo").find(".shop-image").first(), r.attr("src", d.parseSrc(e)), i = jRow.find(".orders-history-shop-title").first(), i.text(e.shop.company_name), a = jRow.find(".orders-history-order-number").first(), a.text(e.order_id), o = jRow.find(".orders-history-order-date").first(), o.html(FlipcatWebAppLibrary.formatDate(e.date)), n = jRow.find(".orders-history-order-price").first(), n.html(l), s = jRow.find(".order-history-spent_amnt").first(), s.html(d.totalPriceBalls(e) + '<div class="goods-coin_icon"></div>'), c = jRow.find(".orders-history-order-quantity").first(), c.html(d.totalQuantity(e) + " " + __("messages.items")), t = $(d.HTML_ORDER_EXT_BLOCK_IN_MODAL), p.setPopupData(t, e, l), $("#modalOrderN" + e.sys_order_id).html(t.html()))
    }, setPopupData: function (e, t, r) {
        var i, a, o, n, s, c, l, _, d, p = Flipcat.Orders;
        i = e.find(".order-shop-status").first().find("b").first(), a = e.find(".order-shop-number").first().find("b").first(), _ = e.find(".j-order-shop-price-value").first().find("b").first(), i.text(t.status), a.text(t.order_id), _.html(r), d = e.find(".no-marker.popup").first(), n = p.renderItems(t, d), n = d.html() + n, d.html(n), FlipcatWebAppLibrary.processTemplateImg(d), o = e.find(".order-item-info").first(), c = '<div class="order-shop-buyer tpl">' + o.find(".order-shop-buyer.tpl").first().html() + "</div>", l = o.find(".order-item-info-title").first()[0].outerHTML, s = p.renderBuyer(t, o), s = l + s + c, o.html(s)
    }, lockModal: function () {
        var e, t, r, i = Flipcat.Orders, a = $(i.HTML_ORDER_EXT_BLOCK_IN_MODAL), o = a.css("position");
        a.data("position", o), e = '<div class="prelocker" style="position:absolute;z-index:1000;top:0px; left:0px;background:rgba(255, 255, 255, 0.5)">\t\t\t<img style="position:absolute;z-index:1001;opacity:0;" src="/img/loader.gif" >\t\t</div>', a.css("position", "relative"), t = $(e), t.find("img")[0].onload = function () {
            r = t.find("img"), r.css("left", (a.width() - r.width()) / 2).css("top", (a.height() - r.height()) / 2).css("opacity", 1)
        }, t.css("width", a.width() + "px"), t.css("height", a.height() + "px"), t.css("opacity", 1), a.append(t)
    }, refreshOrderViewMobile: function (e) {
        var t, r, i, a, o, n, s, c, l, _, d, p, u, h, f, h, g,
            m = $(".j-more-info-mobile-id-" + e.sys_order_id).parent().parent(), C = Flipcat.Orders, T = this;
        T.hideAccordionPreloader(e.sys_order_id), m[0] && (jRow = m, c = C.totalPrice(e), t = jRow.find(".mobile-order-item-img-container").find(".shop-image").first(), t.attr("src", C.parseSrc(e)), r = jRow.find(".mobile-order-item-header__wrap h4").first(), r.text(e.shop.company_name), i = jRow.find(".mobile-order-number-data").first(), i.text("№ " + e.order_id), a = jRow.find(".mobile-order-date-data").first(), a.html(FlipcatWebAppLibrary.formatDate(e.date)), o = jRow.find(".mobile-order-summ-data").first(), o.html(c), n = jRow.find(".mobile-order-summ-balls-data").first(), n.html(C.totalPriceBalls(e) + '<div class="goods-coin_icon"></div> ' + __("Spent")), s = jRow.find(".mobile-order-quantity-data").first(), s.html(C.totalQuantity(e) + " " + __("messages.items")), l = T.getAccordionBySysOrderId(e.sys_order_id), _ = l.nextElementSibling, d = $(_), p = d.find(".js-order-items-tpl").first(), u = d.find(".js-mobile-order-shop-buyer").first(), f = d.find(".j-delivery-parameters").first(), h = C.renderItemsMobile(e, d), g = C.renderBuyerMobile(e, d), d.html(h), d.append(f), d.append(p), d.append(u), d.html(d.html() + g), l.classList.toggle("active"), _.classList.toggle("show"))
    }, getAccordionBySysOrderId: function (e) {
        return $(".j-more-info-mobile-id-" + e).first()[0]
    }, hideAccordionPreloader: function (e) {
        $(this.getAccordionBySysOrderId(e)).find("img").first().addClass("hide")
    }, showAccordionPreloader: function (e) {
        $(this.getAccordionBySysOrderId(e)).find("img").first().removeClass("hide")
    }
};
var x, i, j, selElmnt, a, b, c, wrap, trg, arrow;
for (x = document.getElementsByClassName("custom-select"), i = 0; i < x.length; i++) {
    for (selElmnt = x[i].getElementsByTagName("select")[0], wrap = document.createElement("DIV"), wrap.setAttribute("class", "select-selected_wrap"), a = document.createElement("DIV"), a.setAttribute("class", "select-selected"), a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML, trg = document.createElement("DIV"), trg.setAttribute("class", "select-trigger"), arrow = document.createElement("DIV"), arrow.setAttribute("class", "select-trigger__arrow"), trg.appendChild(arrow), wrap.appendChild(a), wrap.appendChild(trg), x[i].appendChild(wrap), b = document.createElement("DIV"), b.setAttribute("class", "select-items select-hide"), j = 0; j < selElmnt.length; j++) c = document.createElement("DIV"), c.innerHTML = selElmnt.options[j].innerHTML, c.addEventListener("click", function (e) {
        var t, r, i, a, o;
        for (a = this.parentNode.parentNode.getElementsByTagName("select")[0], o = this.parentNode.previousSibling.childNodes[0], r = 0; r < a.length; r++) if (a.options[r].innerHTML == this.innerHTML) {
            for (a.selectedIndex = r, o.innerHTML = this.innerHTML, t = this.parentNode.getElementsByClassName("same-as-selected"), i = 0; i < t.length; i++) t[i].removeAttribute("class");
            this.setAttribute("class", "same-as-selected");
            break
        }
        o.click(), $(function () {
            $(a).trigger("change")
        })
    }), b.appendChild(c);
    x[i].appendChild(b), a.addEventListener("click", function (e) {
        e.stopPropagation(), closeAllSelect(this), this.parentNode.nextSibling.classList.toggle("select-hide")
    })
}

document.addEventListener("click", closeAllSelect);
for (var trigger_items = document.getElementsByClassName("select-trigger"), k = 0; k < trigger_items.length; k++) trigger_items[k].addEventListener("click", function (e) {
    e.stopPropagation(), this.parentNode.nextSibling.classList.toggle("select-hide")
}, !1);
$(document).ready(function () {
    if($('#ofi10')){
       $('#ofi10').attr('value','1');
    }
    if($('#ofi7')){
        $('#ofi7').attr('value',$('#dropdownMenu1 option:selected').text());
    }

    var e = ".datepicker";
    $(e).hasClass("value-exists") || $(e).addClass("value-exists")
}), $(".datepicker").on("change", function () {
    $(this).hasClass("value-exists") || $(this).addClass("value-exists")
}), $(document).ready(function () {
    $(".company-acw-block__product--image img").each(function () {
        $(this).height() === $(this).width() && $(this).addClass("company-acw-block-img-border_radius")
    }), $(window).width() <= 1199 && $(".company-acw-block__footer").each(function () {
        var e = $(this).find(".company-acw-block__options").length;
        e < 3 && $(this).addClass("non-full-items")
    }), $(window).width() <= 768 && $(".company-acw-block__product-name").dotdotdot({
        height: 40,
        truncate: "letter"
    }), $(window).width() <= 768 && ($(".company-acw-block__option-value").each(function () {
        $(this).text().length > 15 && $(this).closest(".company-acw-block__footer").addClass("too-long-param")
    }), setTimeout(function () {
        $(".select-items").each(function () {
            $(this).css("position", "absolute")
        })
    }, 10))
}), $("#mleftSideCitySelect").change(function (e) {
    setTimeout(function () {
        $("#setLocationForm").submit()
    }, 100)
});
