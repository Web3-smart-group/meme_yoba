(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [132],
  {
    1458: function (e, t, n) {
      "use strict";
      n.d(t, {
        Fs: function () {
          return et;
        },
        cx: function () {
          return $;
        },
        hi: function () {
          return J;
        },
        F4: function () {
          return ee;
        },
      });
      var r,
        a,
        i = (function () {
          function e(e) {
            var t = this;
            (this._insertTag = function (e) {
              var n;
              (n =
                0 === t.tags.length
                  ? t.insertionPoint
                    ? t.insertionPoint.nextSibling
                    : t.prepend
                    ? t.container.firstChild
                    : t.before
                  : t.tags[t.tags.length - 1].nextSibling),
                t.container.insertBefore(e, n),
                t.tags.push(e);
            }),
              (this.isSpeedy = void 0 === e.speedy || e.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = e.nonce),
              (this.key = e.key),
              (this.container = e.container),
              (this.prepend = e.prepend),
              (this.insertionPoint = e.insertionPoint),
              (this.before = null);
          }
          var t = e.prototype;
          return (
            (t.hydrate = function (e) {
              e.forEach(this._insertTag);
            }),
            (t.insert = function (e) {
              if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
                var t;
                this._insertTag(
                  ((t = document.createElement("style")).setAttribute(
                    "data-emotion",
                    this.key
                  ),
                  void 0 !== this.nonce && t.setAttribute("nonce", this.nonce),
                  t.appendChild(document.createTextNode("")),
                  t.setAttribute("data-s", ""),
                  t)
                );
              }
              var n = this.tags[this.tags.length - 1];
              if (this.isSpeedy) {
                var r = (function (e) {
                  if (e.sheet) return e.sheet;
                  for (var t = 0; t < document.styleSheets.length; t++)
                    if (document.styleSheets[t].ownerNode === e)
                      return document.styleSheets[t];
                })(n);
                try {
                  r.insertRule(e, r.cssRules.length);
                } catch (e) {}
              } else n.appendChild(document.createTextNode(e));
              this.ctr++;
            }),
            (t.flush = function () {
              this.tags.forEach(function (e) {
                return e.parentNode && e.parentNode.removeChild(e);
              }),
                (this.tags = []),
                (this.ctr = 0);
            }),
            e
          );
        })(),
        s = Math.abs,
        o = String.fromCharCode,
        l = Object.assign;
      function c(e, t, n) {
        return e.replace(t, n);
      }
      function u(e, t) {
        return e.indexOf(t);
      }
      function d(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function h(e, t, n) {
        return e.slice(t, n);
      }
      function p(e) {
        return e.length;
      }
      function f(e, t) {
        return t.push(e), e;
      }
      var m = 1,
        E = 1,
        T = 0,
        g = 0,
        _ = 0,
        A = "";
      function v(e, t, n, r, a, i, s) {
        return {
          value: e,
          root: t,
          parent: n,
          type: r,
          props: a,
          children: i,
          line: m,
          column: E,
          length: s,
          return: "",
        };
      }
      function b(e, t) {
        return l(
          v("", null, null, "", null, null, 0),
          e,
          { length: -e.length },
          t
        );
      }
      function y() {
        return (_ = g < T ? d(A, g++) : 0), E++, 10 === _ && ((E = 1), m++), _;
      }
      function N() {
        return d(A, g);
      }
      function C(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function I(e) {
        return (m = E = 1), (T = p((A = e))), (g = 0), [];
      }
      function S(e) {
        var t, n;
        return ((t = g - 1),
        (n = (function e(t) {
          for (; y(); )
            switch (_) {
              case t:
                return g;
              case 34:
              case 39:
                34 !== t && 39 !== t && e(_);
                break;
              case 40:
                41 === t && e(t);
                break;
              case 92:
                y();
            }
          return g;
        })(91 === e ? e + 2 : 40 === e ? e + 1 : e)),
        h(A, t, n)).trim();
      }
      var R = "-ms-",
        O = "-moz-",
        k = "-webkit-",
        x = "comm",
        L = "rule",
        D = "decl",
        M = "@keyframes";
      function w(e, t) {
        for (var n = "", r = e.length, a = 0; a < r; a++)
          n += t(e[a], a, e, t) || "";
        return n;
      }
      function P(e, t, n, r) {
        switch (e.type) {
          case "@layer":
            if (e.children.length) break;
          case "@import":
          case D:
            return (e.return = e.return || e.value);
          case x:
            return "";
          case M:
            return (e.return = e.value + "{" + w(e.children, r) + "}");
          case L:
            e.value = e.props.join(",");
        }
        return p((n = w(e.children, r)))
          ? (e.return = e.value + "{" + n + "}")
          : "";
      }
      function B(e, t, n, r, a, i, o, l, u, d, p) {
        for (
          var f = a - 1,
            m = 0 === a ? i : [""],
            E = m.length,
            T = 0,
            g = 0,
            _ = 0;
          T < r;
          ++T
        )
          for (
            var A = 0, b = h(e, f + 1, (f = s((g = o[T])))), y = e;
            A < E;
            ++A
          )
            (y = (g > 0 ? m[A] + " " + b : c(b, /&\f/g, m[A])).trim()) &&
              (u[_++] = y);
        return v(e, t, n, 0 === a ? L : l, u, d, p);
      }
      function H(e, t, n, r) {
        return v(e, t, n, D, h(e, 0, r), h(e, r + 1, -1), r);
      }
      var U = function (e, t, n) {
          for (
            var r = 0, a = 0;
            (r = a), (a = N()), 38 === r && 12 === a && (t[n] = 1), !C(a);

          )
            y();
          return h(A, e, g);
        },
        F = function (e, t) {
          var n = -1,
            r = 44;
          do
            switch (C(r)) {
              case 0:
                38 === r && 12 === N() && (t[n] = 1), (e[n] += U(g - 1, t, n));
                break;
              case 2:
                e[n] += S(r);
                break;
              case 4:
                if (44 === r) {
                  (e[++n] = 58 === N() ? "&\f" : ""), (t[n] = e[n].length);
                  break;
                }
              default:
                e[n] += o(r);
            }
          while ((r = y()));
          return e;
        },
        G = function (e, t) {
          var n;
          return (n = F(I(e), t)), (A = ""), n;
        },
        j = new WeakMap(),
        Y = function (e) {
          if ("rule" === e.type && e.parent && !(e.length < 1)) {
            for (
              var t = e.value,
                n = e.parent,
                r = e.column === n.column && e.line === n.line;
              "rule" !== n.type;

            )
              if (!(n = n.parent)) return;
            if (
              (1 !== e.props.length || 58 === t.charCodeAt(0) || j.get(n)) &&
              !r
            ) {
              j.set(e, !0);
              for (
                var a = [], i = G(t, a), s = n.props, o = 0, l = 0;
                o < i.length;
                o++
              )
                for (var c = 0; c < s.length; c++, l++)
                  e.props[l] = a[o]
                    ? i[o].replace(/&\f/g, s[c])
                    : s[c] + " " + i[o];
            }
          }
        },
        V = function (e) {
          if ("decl" === e.type) {
            var t = e.value;
            108 === t.charCodeAt(0) &&
              98 === t.charCodeAt(2) &&
              ((e.return = ""), (e.value = ""));
          }
        },
        Z = [
          function (e, t, n, r) {
            if (e.length > -1 && !e.return)
              switch (e.type) {
                case D:
                  e.return = (function e(t, n) {
                    switch (
                      45 ^ d(t, 0)
                        ? (((((((n << 2) ^ d(t, 0)) << 2) ^ d(t, 1)) << 2) ^
                            d(t, 2)) <<
                            2) ^
                          d(t, 3)
                        : 0
                    ) {
                      case 5103:
                        return k + "print-" + t + t;
                      case 5737:
                      case 4201:
                      case 3177:
                      case 3433:
                      case 1641:
                      case 4457:
                      case 2921:
                      case 5572:
                      case 6356:
                      case 5844:
                      case 3191:
                      case 6645:
                      case 3005:
                      case 6391:
                      case 5879:
                      case 5623:
                      case 6135:
                      case 4599:
                      case 4855:
                      case 4215:
                      case 6389:
                      case 5109:
                      case 5365:
                      case 5621:
                      case 3829:
                        return k + t + t;
                      case 5349:
                      case 4246:
                      case 4810:
                      case 6968:
                      case 2756:
                        return k + t + O + t + R + t + t;
                      case 6828:
                      case 4268:
                        return k + t + R + t + t;
                      case 6165:
                        return k + t + R + "flex-" + t + t;
                      case 5187:
                        return (
                          k +
                          t +
                          c(
                            t,
                            /(\w+).+(:[^]+)/,
                            k + "box-$1$2" + R + "flex-$1$2"
                          ) +
                          t
                        );
                      case 5443:
                        return (
                          k + t + R + "flex-item-" + c(t, /flex-|-self/, "") + t
                        );
                      case 4675:
                        return (
                          k +
                          t +
                          R +
                          "flex-line-pack" +
                          c(t, /align-content|flex-|-self/, "") +
                          t
                        );
                      case 5548:
                        return k + t + R + c(t, "shrink", "negative") + t;
                      case 5292:
                        return k + t + R + c(t, "basis", "preferred-size") + t;
                      case 6060:
                        return (
                          k +
                          "box-" +
                          c(t, "-grow", "") +
                          k +
                          t +
                          R +
                          c(t, "grow", "positive") +
                          t
                        );
                      case 4554:
                        return (
                          k + c(t, /([^-])(transform)/g, "$1" + k + "$2") + t
                        );
                      case 6187:
                        return (
                          c(
                            c(
                              c(t, /(zoom-|grab)/, k + "$1"),
                              /(image-set)/,
                              k + "$1"
                            ),
                            t,
                            ""
                          ) + t
                        );
                      case 5495:
                      case 3959:
                        return c(t, /(image-set\([^]*)/, k + "$1$`$1");
                      case 4968:
                        return (
                          c(
                            c(
                              t,
                              /(.+:)(flex-)?(.*)/,
                              k + "box-pack:$3" + R + "flex-pack:$3"
                            ),
                            /s.+-b[^;]+/,
                            "justify"
                          ) +
                          k +
                          t +
                          t
                        );
                      case 4095:
                      case 3583:
                      case 4068:
                      case 2532:
                        return c(t, /(.+)-inline(.+)/, k + "$1$2") + t;
                      case 8116:
                      case 7059:
                      case 5753:
                      case 5535:
                      case 5445:
                      case 5701:
                      case 4933:
                      case 4677:
                      case 5533:
                      case 5789:
                      case 5021:
                      case 4765:
                        if (p(t) - 1 - n > 6)
                          switch (d(t, n + 1)) {
                            case 109:
                              if (45 !== d(t, n + 4)) break;
                            case 102:
                              return (
                                c(
                                  t,
                                  /(.+:)(.+)-([^]+)/,
                                  "$1" +
                                    k +
                                    "$2-$3$1" +
                                    O +
                                    (108 == d(t, n + 3) ? "$3" : "$2-$3")
                                ) + t
                              );
                            case 115:
                              return ~u(t, "stretch")
                                ? e(c(t, "stretch", "fill-available"), n) + t
                                : t;
                          }
                        break;
                      case 4949:
                        if (115 !== d(t, n + 1)) break;
                      case 6444:
                        switch (d(t, p(t) - 3 - (~u(t, "!important") && 10))) {
                          case 107:
                            return c(t, ":", ":" + k) + t;
                          case 101:
                            return (
                              c(
                                t,
                                /(.+:)([^;!]+)(;|!.+)?/,
                                "$1" +
                                  k +
                                  (45 === d(t, 14) ? "inline-" : "") +
                                  "box$3$1" +
                                  k +
                                  "$2$3$1" +
                                  R +
                                  "$2box$3"
                              ) + t
                            );
                        }
                        break;
                      case 5936:
                        switch (d(t, n + 11)) {
                          case 114:
                            return (
                              k + t + R + c(t, /[svh]\w+-[tblr]{2}/, "tb") + t
                            );
                          case 108:
                            return (
                              k +
                              t +
                              R +
                              c(t, /[svh]\w+-[tblr]{2}/, "tb-rl") +
                              t
                            );
                          case 45:
                            return (
                              k + t + R + c(t, /[svh]\w+-[tblr]{2}/, "lr") + t
                            );
                        }
                        return k + t + R + t + t;
                    }
                    return t;
                  })(e.value, e.length);
                  break;
                case M:
                  return w([b(e, { value: c(e.value, "@", "@" + k) })], r);
                case L:
                  if (e.length)
                    return e.props
                      .map(function (t) {
                        var n;
                        switch (
                          ((n = t),
                          (n = /(::plac\w+|:read-\w+)/.exec(n)) ? n[0] : n)
                        ) {
                          case ":read-only":
                          case ":read-write":
                            return w(
                              [
                                b(e, {
                                  props: [c(t, /:(read-\w+)/, ":" + O + "$1")],
                                }),
                              ],
                              r
                            );
                          case "::placeholder":
                            return w(
                              [
                                b(e, {
                                  props: [
                                    c(t, /:(plac\w+)/, ":" + k + "input-$1"),
                                  ],
                                }),
                                b(e, {
                                  props: [c(t, /:(plac\w+)/, ":" + O + "$1")],
                                }),
                                b(e, {
                                  props: [c(t, /:(plac\w+)/, R + "input-$1")],
                                }),
                              ],
                              r
                            );
                        }
                        return "";
                      })
                      .join("");
              }
          },
        ],
        W = n(7169),
        q = n(8116);
      function z(e, t) {
        if (void 0 === e.inserted[t.name]) return e.insert("", t, e.sheet, !0);
      }
      function K(e, t, n) {
        var r = [],
          a = (0, q.fp)(e, r, n);
        return r.length < 2 ? n : a + t(r);
      }
      var Q = function e(t) {
          for (var n = "", r = 0; r < t.length; r++) {
            var a = t[r];
            if (null != a) {
              var i = void 0;
              switch (typeof a) {
                case "boolean":
                  break;
                case "object":
                  if (Array.isArray(a)) i = e(a);
                  else
                    for (var s in ((i = ""), a))
                      a[s] && s && (i && (i += " "), (i += s));
                  break;
                default:
                  i = a;
              }
              i && (n && (n += " "), (n += i));
            }
          }
          return n;
        },
        X =
          (((r = (function (e) {
            var t,
              n,
              r,
              a,
              s,
              l = e.key;
            if ("css" === l) {
              var T = document.querySelectorAll(
                "style[data-emotion]:not([data-s])"
              );
              Array.prototype.forEach.call(T, function (e) {
                -1 !== e.getAttribute("data-emotion").indexOf(" ") &&
                  (document.head.appendChild(e), e.setAttribute("data-s", ""));
              });
            }
            var b = e.stylisPlugins || Z,
              R = {},
              O = [];
            (a = e.container || document.head),
              Array.prototype.forEach.call(
                document.querySelectorAll('style[data-emotion^="' + l + ' "]'),
                function (e) {
                  for (
                    var t = e.getAttribute("data-emotion").split(" "), n = 1;
                    n < t.length;
                    n++
                  )
                    R[t[n]] = !0;
                  O.push(e);
                }
              );
            var k =
                ((n = (t = [Y, V].concat(b, [
                  P,
                  ((r = function (e) {
                    s.insert(e);
                  }),
                  function (e) {
                    !e.root && (e = e.return) && r(e);
                  }),
                ])).length),
                function (e, r, a, i) {
                  for (var s = "", o = 0; o < n; o++)
                    s += t[o](e, r, a, i) || "";
                  return s;
                }),
              L = function (e) {
                var t, n;
                return w(
                  ((n = (function e(t, n, r, a, i, s, l, T, b) {
                    for (
                      var I,
                        R = 0,
                        O = 0,
                        k = l,
                        L = 0,
                        D = 0,
                        M = 0,
                        w = 1,
                        P = 1,
                        U = 1,
                        F = 0,
                        G = "",
                        j = i,
                        Y = s,
                        V = a,
                        Z = G;
                      P;

                    )
                      switch (((M = F), (F = y()))) {
                        case 40:
                          if (108 != M && 58 == d(Z, k - 1)) {
                            -1 != u((Z += c(S(F), "&", "&\f")), "&\f") &&
                              (U = -1);
                            break;
                          }
                        case 34:
                        case 39:
                        case 91:
                          Z += S(F);
                          break;
                        case 9:
                        case 10:
                        case 13:
                        case 32:
                          Z += (function (e) {
                            for (; (_ = N()); )
                              if (_ < 33) y();
                              else break;
                            return C(e) > 2 || C(_) > 3 ? "" : " ";
                          })(M);
                          break;
                        case 92:
                          Z += (function (e, t) {
                            for (
                              var n;
                              --t &&
                              y() &&
                              !(_ < 48) &&
                              !(_ > 102) &&
                              (!(_ > 57) || !(_ < 65)) &&
                              (!(_ > 70) || !(_ < 97));

                            );
                            return (
                              (n = g + (t < 6 && 32 == N() && 32 == y())),
                              h(A, e, n)
                            );
                          })(g - 1, 7);
                          continue;
                        case 47:
                          switch (N()) {
                            case 42:
                            case 47:
                              f(
                                v(
                                  (I = (function (e, t) {
                                    for (; y(); )
                                      if (e + _ === 57) break;
                                      else if (e + _ === 84 && 47 === N())
                                        break;
                                    return (
                                      "/*" +
                                      h(A, t, g - 1) +
                                      "*" +
                                      o(47 === e ? e : y())
                                    );
                                  })(y(), g)),
                                  n,
                                  r,
                                  x,
                                  o(_),
                                  h(I, 2, -2),
                                  0
                                ),
                                b
                              );
                              break;
                            default:
                              Z += "/";
                          }
                          break;
                        case 123 * w:
                          T[R++] = p(Z) * U;
                        case 125 * w:
                        case 59:
                        case 0:
                          switch (F) {
                            case 0:
                            case 125:
                              P = 0;
                            case 59 + O:
                              -1 == U && (Z = c(Z, /\f/g, "")),
                                D > 0 &&
                                  p(Z) - k &&
                                  f(
                                    D > 32
                                      ? H(Z + ";", a, r, k - 1)
                                      : H(c(Z, " ", "") + ";", a, r, k - 2),
                                    b
                                  );
                              break;
                            case 59:
                              Z += ";";
                            default:
                              if (
                                (f(
                                  (V = B(
                                    Z,
                                    n,
                                    r,
                                    R,
                                    O,
                                    i,
                                    T,
                                    G,
                                    (j = []),
                                    (Y = []),
                                    k
                                  )),
                                  s
                                ),
                                123 === F)
                              ) {
                                if (0 === O) e(Z, n, V, V, j, s, k, T, Y);
                                else
                                  switch (
                                    99 === L && 110 === d(Z, 3) ? 100 : L
                                  ) {
                                    case 100:
                                    case 108:
                                    case 109:
                                    case 115:
                                      e(
                                        t,
                                        V,
                                        V,
                                        a &&
                                          f(
                                            B(
                                              t,
                                              V,
                                              V,
                                              0,
                                              0,
                                              i,
                                              T,
                                              G,
                                              i,
                                              (j = []),
                                              k
                                            ),
                                            Y
                                          ),
                                        i,
                                        Y,
                                        k,
                                        T,
                                        a ? j : Y
                                      );
                                      break;
                                    default:
                                      e(Z, V, V, V, [""], Y, 0, T, Y);
                                  }
                              }
                          }
                          (R = O = D = 0), (w = U = 1), (G = Z = ""), (k = l);
                          break;
                        case 58:
                          (k = 1 + p(Z)), (D = M);
                        default:
                          if (w < 1) {
                            if (123 == F) --w;
                            else if (
                              125 == F &&
                              0 == w++ &&
                              125 ==
                                ((_ = g > 0 ? d(A, --g) : 0),
                                E--,
                                10 === _ && ((E = 1), m--),
                                _)
                            )
                              continue;
                          }
                          switch (((Z += o(F)), F * w)) {
                            case 38:
                              U = O > 0 ? 1 : ((Z += "\f"), -1);
                              break;
                            case 44:
                              (T[R++] = (p(Z) - 1) * U), (U = 1);
                              break;
                            case 64:
                              45 === N() && (Z += S(y())),
                                (L = N()),
                                (O = k =
                                  p(
                                    (G = Z +=
                                      (function (e) {
                                        for (; !C(N()); ) y();
                                        return h(A, e, g);
                                      })(g))
                                  )),
                                F++;
                              break;
                            case 45:
                              45 === M && 2 == p(Z) && (w = 0);
                          }
                      }
                    return s;
                  })("", null, null, null, [""], (t = I((t = e))), 0, [0], t)),
                  (A = ""),
                  n),
                  k
                );
              },
              D = {
                key: l,
                sheet: new i({
                  key: l,
                  container: a,
                  nonce: e.nonce,
                  speedy: e.speedy,
                  prepend: e.prepend,
                  insertionPoint: e.insertionPoint,
                }),
                nonce: e.nonce,
                inserted: R,
                registered: {},
                insert: function (e, t, n, r) {
                  (s = n),
                    L(e ? e + "{" + t.styles + "}" : t.styles),
                    r && (D.inserted[t.name] = !0);
                },
              };
            return D.sheet.hydrate(O), D;
          })({ key: "css" })).sheet.speedy = function (e) {
            this.isSpeedy = e;
          }),
          (r.compat = !0),
          {
            css: (a = function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              var a = (0, W.O)(t, r.registered, void 0);
              return (0, q.My)(r, a, !1), r.key + "-" + a.name;
            }),
            cx: function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              return K(r.registered, a, Q(t));
            },
            injectGlobal: function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              var a = (0, W.O)(t, r.registered);
              z(r, a);
            },
            keyframes: function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              var a = (0, W.O)(t, r.registered),
                i = "animation-" + a.name;
              return (
                z(r, {
                  name: a.name,
                  styles: "@keyframes " + i + "{" + a.styles + "}",
                }),
                i
              );
            },
            hydrate: function (e) {
              e.forEach(function (e) {
                r.inserted[e] = !0;
              });
            },
            flush: function () {
              (r.registered = {}), (r.inserted = {}), r.sheet.flush();
            },
            sheet: r.sheet,
            cache: r,
            getRegisteredStyles: q.fp.bind(null, r.registered),
            merge: K.bind(null, r.registered, a),
          }),
        $ = (X.flush, X.hydrate, X.cx),
        J = (X.merge, X.getRegisteredStyles, X.injectGlobal),
        ee = X.keyframes,
        et = (X.css, X.sheet, X.cache);
    },
    7169: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return f;
        },
      });
      var r,
        a,
        i = {
          animationIterationCount: 1,
          aspectRatio: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        s = /[A-Z]|^ms/g,
        o = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        l = function (e) {
          return 45 === e.charCodeAt(1);
        },
        c = function (e) {
          return null != e && "boolean" != typeof e;
        },
        u =
          ((r = Object.create(null)),
          function (e) {
            return (
              void 0 === r[e] &&
                (r[e] = l(e) ? e : e.replace(s, "-$&").toLowerCase()),
              r[e]
            );
          }),
        d = function (e, t) {
          switch (e) {
            case "animation":
            case "animationName":
              if ("string" == typeof t)
                return t.replace(o, function (e, t, n) {
                  return (a = { name: t, styles: n, next: a }), t;
                });
          }
          return 1 === i[e] || l(e) || "number" != typeof t || 0 === t
            ? t
            : t + "px";
        };
      function h(e, t, n) {
        if (null == n) return "";
        if (void 0 !== n.__emotion_styles) return n;
        switch (typeof n) {
          case "boolean":
            return "";
          case "object":
            if (1 === n.anim)
              return (a = { name: n.name, styles: n.styles, next: a }), n.name;
            if (void 0 !== n.styles) {
              var r = n.next;
              if (void 0 !== r)
                for (; void 0 !== r; )
                  (a = { name: r.name, styles: r.styles, next: a }),
                    (r = r.next);
              return n.styles + ";";
            }
            return (function (e, t, n) {
              var r = "";
              if (Array.isArray(n))
                for (var a = 0; a < n.length; a++) r += h(e, t, n[a]) + ";";
              else
                for (var i in n) {
                  var s = n[i];
                  if ("object" != typeof s)
                    null != t && void 0 !== t[s]
                      ? (r += i + "{" + t[s] + "}")
                      : c(s) && (r += u(i) + ":" + d(i, s) + ";");
                  else if (
                    Array.isArray(s) &&
                    "string" == typeof s[0] &&
                    (null == t || void 0 === t[s[0]])
                  )
                    for (var o = 0; o < s.length; o++)
                      c(s[o]) && (r += u(i) + ":" + d(i, s[o]) + ";");
                  else {
                    var l = h(e, t, s);
                    switch (i) {
                      case "animation":
                      case "animationName":
                        r += u(i) + ":" + l + ";";
                        break;
                      default:
                        r += i + "{" + l + "}";
                    }
                  }
                }
              return r;
            })(e, t, n);
          case "function":
            if (void 0 !== e) {
              var i = a,
                s = n(e);
              return (a = i), h(e, t, s);
            }
        }
        if (null == t) return n;
        var o = t[n];
        return void 0 !== o ? o : n;
      }
      var p = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
        f = function (e, t, n) {
          if (
            1 === e.length &&
            "object" == typeof e[0] &&
            null !== e[0] &&
            void 0 !== e[0].styles
          )
            return e[0];
          var r,
            i = !0,
            s = "";
          a = void 0;
          var o = e[0];
          null == o || void 0 === o.raw
            ? ((i = !1), (s += h(n, t, o)))
            : (s += o[0]);
          for (var l = 1; l < e.length; l++)
            (s += h(n, t, e[l])), i && (s += o[l]);
          p.lastIndex = 0;
          for (var c = ""; null !== (r = p.exec(s)); ) c += "-" + r[1];
          return {
            name:
              (function (e) {
                for (var t, n = 0, r = 0, a = e.length; a >= 4; ++r, a -= 4)
                  (t =
                    (65535 &
                      (t =
                        (255 & e.charCodeAt(r)) |
                        ((255 & e.charCodeAt(++r)) << 8) |
                        ((255 & e.charCodeAt(++r)) << 16) |
                        ((255 & e.charCodeAt(++r)) << 24))) *
                      1540483477 +
                    (((t >>> 16) * 59797) << 16)),
                    (t ^= t >>> 24),
                    (n =
                      ((65535 & t) * 1540483477 +
                        (((t >>> 16) * 59797) << 16)) ^
                      ((65535 & n) * 1540483477 +
                        (((n >>> 16) * 59797) << 16)));
                switch (a) {
                  case 3:
                    n ^= (255 & e.charCodeAt(r + 2)) << 16;
                  case 2:
                    n ^= (255 & e.charCodeAt(r + 1)) << 8;
                  case 1:
                    (n ^= 255 & e.charCodeAt(r)),
                      (n =
                        (65535 & n) * 1540483477 +
                        (((n >>> 16) * 59797) << 16));
                }
                return (
                  (n ^= n >>> 13),
                  (
                    ((n =
                      (65535 & n) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
                      (n >>> 15)) >>>
                    0
                  ).toString(36)
                );
              })(s) + c,
            styles: s,
            next: a,
          };
        };
    },
    8116: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        var r = "";
        return (
          n.split(" ").forEach(function (n) {
            void 0 !== e[n] ? t.push(e[n] + ";") : (r += n + " ");
          }),
          r
        );
      }
      n.d(t, {
        My: function () {
          return i;
        },
        fp: function () {
          return r;
        },
        hC: function () {
          return a;
        },
      });
      var a = function (e, t, n) {
          var r = e.key + "-" + t.name;
          !1 === n &&
            void 0 === e.registered[r] &&
            (e.registered[r] = t.styles);
        },
        i = function (e, t, n) {
          a(e, t, n);
          var r = e.key + "-" + t.name;
          if (void 0 === e.inserted[t.name]) {
            var i = t;
            do e.insert(t === i ? "." + r : "", i, e.sheet, !0), (i = i.next);
            while (void 0 !== i);
          }
        };
    },
    9915: function (e, t, n) {
      var r = n(7667),
        a = {};
      for (var i in r) r.hasOwnProperty(i) && (a[r[i]] = i);
      var s = (e.exports = {
        rgb: { channels: 3, labels: "rgb" },
        hsl: { channels: 3, labels: "hsl" },
        hsv: { channels: 3, labels: "hsv" },
        hwb: { channels: 3, labels: "hwb" },
        cmyk: { channels: 4, labels: "cmyk" },
        xyz: { channels: 3, labels: "xyz" },
        lab: { channels: 3, labels: "lab" },
        lch: { channels: 3, labels: "lch" },
        hex: { channels: 1, labels: ["hex"] },
        keyword: { channels: 1, labels: ["keyword"] },
        ansi16: { channels: 1, labels: ["ansi16"] },
        ansi256: { channels: 1, labels: ["ansi256"] },
        hcg: { channels: 3, labels: ["h", "c", "g"] },
        apple: { channels: 3, labels: ["r16", "g16", "b16"] },
        gray: { channels: 1, labels: ["gray"] },
      });
      for (var o in s)
        if (s.hasOwnProperty(o)) {
          if (!("channels" in s[o]))
            throw Error("missing channels property: " + o);
          if (!("labels" in s[o]))
            throw Error("missing channel labels property: " + o);
          if (s[o].labels.length !== s[o].channels)
            throw Error("channel and label counts mismatch: " + o);
          var l = s[o].channels,
            c = s[o].labels;
          delete s[o].channels,
            delete s[o].labels,
            Object.defineProperty(s[o], "channels", { value: l }),
            Object.defineProperty(s[o], "labels", { value: c });
        }
      (s.rgb.hsl = function (e) {
        var t,
          n,
          r = e[0] / 255,
          a = e[1] / 255,
          i = e[2] / 255,
          s = Math.min(r, a, i),
          o = Math.max(r, a, i),
          l = o - s;
        return (
          o === s
            ? (t = 0)
            : r === o
            ? (t = (a - i) / l)
            : a === o
            ? (t = 2 + (i - r) / l)
            : i === o && (t = 4 + (r - a) / l),
          (t = Math.min(60 * t, 360)) < 0 && (t += 360),
          (n = (s + o) / 2),
          [
            t,
            100 * (o === s ? 0 : n <= 0.5 ? l / (o + s) : l / (2 - o - s)),
            100 * n,
          ]
        );
      }),
        (s.rgb.hsv = function (e) {
          var t,
            n,
            r,
            a,
            i,
            s = e[0] / 255,
            o = e[1] / 255,
            l = e[2] / 255,
            c = Math.max(s, o, l),
            u = c - Math.min(s, o, l),
            d = function (e) {
              return (c - e) / 6 / u + 0.5;
            };
          return (
            0 === u
              ? (a = i = 0)
              : ((i = u / c),
                (t = d(s)),
                (n = d(o)),
                (r = d(l)),
                s === c
                  ? (a = r - n)
                  : o === c
                  ? (a = 1 / 3 + t - r)
                  : l === c && (a = 2 / 3 + n - t),
                a < 0 ? (a += 1) : a > 1 && (a -= 1)),
            [360 * a, 100 * i, 100 * c]
          );
        }),
        (s.rgb.hwb = function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return [
            s.rgb.hsl(e)[0],
            100 * ((1 / 255) * Math.min(t, Math.min(n, r))),
            100 * (r = 1 - (1 / 255) * Math.max(t, Math.max(n, r))),
          ];
        }),
        (s.rgb.cmyk = function (e) {
          var t,
            n = e[0] / 255,
            r = e[1] / 255,
            a = e[2] / 255;
          return (
            (t = Math.min(1 - n, 1 - r, 1 - a)),
            [
              100 * ((1 - n - t) / (1 - t) || 0),
              100 * ((1 - r - t) / (1 - t) || 0),
              100 * ((1 - a - t) / (1 - t) || 0),
              100 * t,
            ]
          );
        }),
        (s.rgb.keyword = function (e) {
          var t,
            n = a[e];
          if (n) return n;
          var i = 1 / 0;
          for (var s in r)
            if (r.hasOwnProperty(s)) {
              var o = r[s],
                l =
                  Math.pow(e[0] - o[0], 2) +
                  Math.pow(e[1] - o[1], 2) +
                  Math.pow(e[2] - o[2], 2);
              l < i && ((i = l), (t = s));
            }
          return t;
        }),
        (s.keyword.rgb = function (e) {
          return r[e];
        }),
        (s.rgb.xyz = function (e) {
          var t = e[0] / 255,
            n = e[1] / 255,
            r = e[2] / 255;
          return [
            100 *
              (0.4124 *
                (t =
                  t > 0.04045
                    ? Math.pow((t + 0.055) / 1.055, 2.4)
                    : t / 12.92) +
                0.3576 *
                  (n =
                    n > 0.04045
                      ? Math.pow((n + 0.055) / 1.055, 2.4)
                      : n / 12.92) +
                0.1805 *
                  (r =
                    r > 0.04045
                      ? Math.pow((r + 0.055) / 1.055, 2.4)
                      : r / 12.92)),
            100 * (0.2126 * t + 0.7152 * n + 0.0722 * r),
            100 * (0.0193 * t + 0.1192 * n + 0.9505 * r),
          ];
        }),
        (s.rgb.lab = function (e) {
          var t = s.rgb.xyz(e),
            n = t[0],
            r = t[1],
            a = t[2];
          return (
            (n /= 95.047),
            (r /= 100),
            (a /= 108.883),
            (n = n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116),
            [
              116 *
                (r = r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116) -
                16,
              500 * (n - r),
              200 *
                (r -
                  (a =
                    a > 0.008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116)),
            ]
          );
        }),
        (s.hsl.rgb = function (e) {
          var t,
            n,
            r,
            a,
            i,
            s = e[0] / 360,
            o = e[1] / 100,
            l = e[2] / 100;
          if (0 === o) return [(i = 255 * l), i, i];
          (n = l < 0.5 ? l * (1 + o) : l + o - l * o),
            (t = 2 * l - n),
            (a = [0, 0, 0]);
          for (var c = 0; c < 3; c++)
            (r = s + -((1 / 3) * (c - 1))) < 0 && r++,
              r > 1 && r--,
              (i =
                6 * r < 1
                  ? t + (n - t) * 6 * r
                  : 2 * r < 1
                  ? n
                  : 3 * r < 2
                  ? t + (n - t) * (2 / 3 - r) * 6
                  : t),
              (a[c] = 255 * i);
          return a;
        }),
        (s.hsl.hsv = function (e) {
          var t,
            n = e[0],
            r = e[1] / 100,
            a = e[2] / 100,
            i = r,
            s = Math.max(a, 0.01);
          return (
            (a *= 2),
            (r *= a <= 1 ? a : 2 - a),
            (i *= s <= 1 ? s : 2 - s),
            (t = (a + r) / 2),
            [
              n,
              100 * (0 === a ? (2 * i) / (s + i) : (2 * r) / (a + r)),
              100 * t,
            ]
          );
        }),
        (s.hsv.rgb = function (e) {
          var t = e[0] / 60,
            n = e[1] / 100,
            r = e[2] / 100,
            a = t - Math.floor(t),
            i = 255 * r * (1 - n),
            s = 255 * r * (1 - n * a),
            o = 255 * r * (1 - n * (1 - a));
          switch (((r *= 255), Math.floor(t) % 6)) {
            case 0:
              return [r, o, i];
            case 1:
              return [s, r, i];
            case 2:
              return [i, r, o];
            case 3:
              return [i, s, r];
            case 4:
              return [o, i, r];
            case 5:
              return [r, i, s];
          }
        }),
        (s.hsv.hsl = function (e) {
          var t,
            n,
            r,
            a = e[0],
            i = e[1] / 100,
            s = e[2] / 100,
            o = Math.max(s, 0.01);
          return (
            (r = (2 - i) * s),
            (t = (2 - i) * o),
            [a, 100 * ((i * o) / (t <= 1 ? t : 2 - t) || 0), 100 * (r /= 2)]
          );
        }),
        (s.hwb.rgb = function (e) {
          var t,
            n,
            r,
            a,
            i,
            s,
            o,
            l = e[0] / 360,
            c = e[1] / 100,
            u = e[2] / 100,
            d = c + u;
          switch (
            (d > 1 && ((c /= d), (u /= d)),
            (t = Math.floor(6 * l)),
            (n = 1 - u),
            (r = 6 * l - t),
            (1 & t) != 0 && (r = 1 - r),
            (a = c + r * (n - c)),
            t)
          ) {
            default:
            case 6:
            case 0:
              (i = n), (s = a), (o = c);
              break;
            case 1:
              (i = a), (s = n), (o = c);
              break;
            case 2:
              (i = c), (s = n), (o = a);
              break;
            case 3:
              (i = c), (s = a), (o = n);
              break;
            case 4:
              (i = a), (s = c), (o = n);
              break;
            case 5:
              (i = n), (s = c), (o = a);
          }
          return [255 * i, 255 * s, 255 * o];
        }),
        (s.cmyk.rgb = function (e) {
          var t = e[0] / 100,
            n = e[1] / 100,
            r = e[2] / 100,
            a = e[3] / 100;
          return [
            255 * (1 - Math.min(1, t * (1 - a) + a)),
            255 * (1 - Math.min(1, n * (1 - a) + a)),
            255 * (1 - Math.min(1, r * (1 - a) + a)),
          ];
        }),
        (s.xyz.rgb = function (e) {
          var t,
            n,
            r,
            a = e[0] / 100,
            i = e[1] / 100,
            s = e[2] / 100;
          return (
            (t = 3.2406 * a + -1.5372 * i + -0.4986 * s),
            (n = -0.9689 * a + 1.8758 * i + 0.0415 * s),
            (r = 0.0557 * a + -0.204 * i + 1.057 * s),
            (t =
              t > 0.0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - 0.055 : 12.92 * t),
            (n =
              n > 0.0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055 : 12.92 * n),
            (r =
              r > 0.0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : 12.92 * r),
            [
              255 * (t = Math.min(Math.max(0, t), 1)),
              255 * (n = Math.min(Math.max(0, n), 1)),
              255 * (r = Math.min(Math.max(0, r), 1)),
            ]
          );
        }),
        (s.xyz.lab = function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            (t /= 95.047),
            (n /= 100),
            (r /= 108.883),
            (t = t > 0.008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116),
            [
              116 *
                (n = n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) -
                16,
              500 * (t - n),
              200 *
                (n -
                  (r =
                    r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116)),
            ]
          );
        }),
        (s.lab.xyz = function (e) {
          var t,
            n,
            r,
            a = e[0],
            i = e[1],
            s = e[2];
          (t = i / 500 + (n = (a + 16) / 116)), (r = n - s / 200);
          var o = Math.pow(n, 3),
            l = Math.pow(t, 3),
            c = Math.pow(r, 3);
          return (
            (n = (o > 0.008856 ? o : (n - 16 / 116) / 7.787) * 100),
            [
              (t = (l > 0.008856 ? l : (t - 16 / 116) / 7.787) * 95.047),
              n,
              (r = (c > 0.008856 ? c : (r - 16 / 116) / 7.787) * 108.883),
            ]
          );
        }),
        (s.lab.lch = function (e) {
          var t,
            n = e[0],
            r = e[1],
            a = e[2];
          return (
            (t = (360 * Math.atan2(a, r)) / 2 / Math.PI) < 0 && (t += 360),
            [n, Math.sqrt(r * r + a * a), t]
          );
        }),
        (s.lch.lab = function (e) {
          var t,
            n = e[0],
            r = e[1];
          return [
            n,
            r * Math.cos((t = (e[2] / 360) * 2 * Math.PI)),
            r * Math.sin(t),
          ];
        }),
        (s.rgb.ansi16 = function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = 1 in arguments ? arguments[1] : s.rgb.hsv(e)[2];
          if (0 === (a = Math.round(a / 50))) return 30;
          var i =
            30 +
            ((Math.round(r / 255) << 2) |
              (Math.round(n / 255) << 1) |
              Math.round(t / 255));
          return 2 === a && (i += 60), i;
        }),
        (s.hsv.ansi16 = function (e) {
          return s.rgb.ansi16(s.hsv.rgb(e), e[2]);
        }),
        (s.rgb.ansi256 = function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t === n && n === r
            ? t < 8
              ? 16
              : t > 248
              ? 231
              : Math.round(((t - 8) / 247) * 24) + 232
            : 16 +
                36 * Math.round((t / 255) * 5) +
                6 * Math.round((n / 255) * 5) +
                Math.round((r / 255) * 5);
        }),
        (s.ansi16.rgb = function (e) {
          var t = e % 10;
          if (0 === t || 7 === t)
            return e > 50 && (t += 3.5), [(t = (t / 10.5) * 255), t, t];
          var n = (~~(e > 50) + 1) * 0.5;
          return [
            (1 & t) * n * 255,
            ((t >> 1) & 1) * n * 255,
            ((t >> 2) & 1) * n * 255,
          ];
        }),
        (s.ansi256.rgb = function (e) {
          if (e >= 232) {
            var t,
              n = (e - 232) * 10 + 8;
            return [n, n, n];
          }
          return [
            (Math.floor((e -= 16) / 36) / 5) * 255,
            (Math.floor((t = e % 36) / 6) / 5) * 255,
            ((t % 6) / 5) * 255,
          ];
        }),
        (s.rgb.hex = function (e) {
          var t = (
            ((255 & Math.round(e[0])) << 16) +
            ((255 & Math.round(e[1])) << 8) +
            (255 & Math.round(e[2]))
          )
            .toString(16)
            .toUpperCase();
          return "000000".substring(t.length) + t;
        }),
        (s.hex.rgb = function (e) {
          var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
          if (!t) return [0, 0, 0];
          var n = t[0];
          3 === t[0].length &&
            (n = n
              .split("")
              .map(function (e) {
                return e + e;
              })
              .join(""));
          var r = parseInt(n, 16);
          return [(r >> 16) & 255, (r >> 8) & 255, 255 & r];
        }),
        (s.rgb.hcg = function (e) {
          var t = e[0] / 255,
            n = e[1] / 255,
            r = e[2] / 255,
            a = Math.max(Math.max(t, n), r),
            i = Math.min(Math.min(t, n), r),
            s = a - i;
          return [
            360 *
              (((s <= 0
                ? 0
                : a === t
                ? ((n - r) / s) % 6
                : a === n
                ? 2 + (r - t) / s
                : 4 + (t - n) / s + 4) /
                6) %
                1),
            100 * s,
            100 * (s < 1 ? i / (1 - s) : 0),
          ];
        }),
        (s.hsl.hcg = function (e) {
          var t = e[1] / 100,
            n = e[2] / 100,
            r = 1,
            a = 0;
          return (
            (r = n < 0.5 ? 2 * t * n : 2 * t * (1 - n)) < 1 &&
              (a = (n - 0.5 * r) / (1 - r)),
            [e[0], 100 * r, 100 * a]
          );
        }),
        (s.hsv.hcg = function (e) {
          var t = e[1] / 100,
            n = e[2] / 100,
            r = t * n,
            a = 0;
          return r < 1 && (a = (n - r) / (1 - r)), [e[0], 100 * r, 100 * a];
        }),
        (s.hcg.rgb = function (e) {
          var t = e[0] / 360,
            n = e[1] / 100,
            r = e[2] / 100;
          if (0 === n) return [255 * r, 255 * r, 255 * r];
          var a = [0, 0, 0],
            i = (t % 1) * 6,
            s = i % 1,
            o = 1 - s,
            l = 0;
          switch (Math.floor(i)) {
            case 0:
              (a[0] = 1), (a[1] = s), (a[2] = 0);
              break;
            case 1:
              (a[0] = o), (a[1] = 1), (a[2] = 0);
              break;
            case 2:
              (a[0] = 0), (a[1] = 1), (a[2] = s);
              break;
            case 3:
              (a[0] = 0), (a[1] = o), (a[2] = 1);
              break;
            case 4:
              (a[0] = s), (a[1] = 0), (a[2] = 1);
              break;
            default:
              (a[0] = 1), (a[1] = 0), (a[2] = o);
          }
          return (
            (l = (1 - n) * r),
            [(n * a[0] + l) * 255, (n * a[1] + l) * 255, (n * a[2] + l) * 255]
          );
        }),
        (s.hcg.hsv = function (e) {
          var t = e[1] / 100,
            n = t + (e[2] / 100) * (1 - t),
            r = 0;
          return n > 0 && (r = t / n), [e[0], 100 * r, 100 * n];
        }),
        (s.hcg.hsl = function (e) {
          var t = e[1] / 100,
            n = (e[2] / 100) * (1 - t) + 0.5 * t,
            r = 0;
          return (
            n > 0 && n < 0.5
              ? (r = t / (2 * n))
              : n >= 0.5 && n < 1 && (r = t / (2 * (1 - n))),
            [e[0], 100 * r, 100 * n]
          );
        }),
        (s.hcg.hwb = function (e) {
          var t = e[1] / 100,
            n = t + (e[2] / 100) * (1 - t);
          return [e[0], (n - t) * 100, (1 - n) * 100];
        }),
        (s.hwb.hcg = function (e) {
          var t = e[1] / 100,
            n = 1 - e[2] / 100,
            r = n - t,
            a = 0;
          return r < 1 && (a = (n - r) / (1 - r)), [e[0], 100 * r, 100 * a];
        }),
        (s.apple.rgb = function (e) {
          return [
            (e[0] / 65535) * 255,
            (e[1] / 65535) * 255,
            (e[2] / 65535) * 255,
          ];
        }),
        (s.rgb.apple = function (e) {
          return [
            (e[0] / 255) * 65535,
            (e[1] / 255) * 65535,
            (e[2] / 255) * 65535,
          ];
        }),
        (s.gray.rgb = function (e) {
          return [(e[0] / 100) * 255, (e[0] / 100) * 255, (e[0] / 100) * 255];
        }),
        (s.gray.hsl = s.gray.hsv =
          function (e) {
            return [0, 0, e[0]];
          }),
        (s.gray.hwb = function (e) {
          return [0, 100, e[0]];
        }),
        (s.gray.cmyk = function (e) {
          return [0, 0, 0, e[0]];
        }),
        (s.gray.lab = function (e) {
          return [e[0], 0, 0];
        }),
        (s.gray.hex = function (e) {
          var t = 255 & Math.round((e[0] / 100) * 255),
            n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
          return "000000".substring(n.length) + n;
        }),
        (s.rgb.gray = function (e) {
          return [((e[0] + e[1] + e[2]) / 3 / 255) * 100];
        });
    },
    6454: function (e, t, n) {
      var r = n(9915),
        a = n(6209),
        i = {};
      Object.keys(r).forEach(function (e) {
        (i[e] = {}),
          Object.defineProperty(i[e], "channels", { value: r[e].channels }),
          Object.defineProperty(i[e], "labels", { value: r[e].labels });
        var t = a(e);
        Object.keys(t).forEach(function (n) {
          var r,
            a,
            s = t[n];
          (i[e][n] =
            ((r = function (e) {
              if (null == e) return e;
              arguments.length > 1 &&
                (e = Array.prototype.slice.call(arguments));
              var t = s(e);
              if ("object" == typeof t)
                for (var n = t.length, r = 0; r < n; r++)
                  t[r] = Math.round(t[r]);
              return t;
            }),
            "conversion" in s && (r.conversion = s.conversion),
            r)),
            (i[e][n].raw =
              ((a = function (e) {
                return null == e
                  ? e
                  : (arguments.length > 1 &&
                      (e = Array.prototype.slice.call(arguments)),
                    s(e));
              }),
              "conversion" in s && (a.conversion = s.conversion),
              a));
        });
      }),
        (e.exports = i);
    },
    6209: function (e, t, n) {
      var r = n(9915);
      e.exports = function (e) {
        for (
          var t = (function (e) {
              var t = (function () {
                  for (
                    var e = {}, t = Object.keys(r), n = t.length, a = 0;
                    a < n;
                    a++
                  )
                    e[t[a]] = { distance: -1, parent: null };
                  return e;
                })(),
                n = [e];
              for (t[e].distance = 0; n.length; )
                for (
                  var a = n.pop(), i = Object.keys(r[a]), s = i.length, o = 0;
                  o < s;
                  o++
                ) {
                  var l = i[o],
                    c = t[l];
                  -1 === c.distance &&
                    ((c.distance = t[a].distance + 1),
                    (c.parent = a),
                    n.unshift(l));
                }
              return t;
            })(e),
            n = {},
            a = Object.keys(t),
            i = a.length,
            s = 0;
          s < i;
          s++
        ) {
          var o = a[s];
          null !== t[o].parent &&
            (n[o] = (function (e, t) {
              for (
                var n = [t[e].parent, e],
                  a = r[t[e].parent][e],
                  i = t[e].parent;
                t[i].parent;

              )
                n.unshift(t[i].parent),
                  (a = (function (e, t) {
                    return function (n) {
                      return t(e(n));
                    };
                  })(r[t[i].parent][i], a)),
                  (i = t[i].parent);
              return (a.conversion = n), a;
            })(o, t));
        }
        return n;
      };
    },
    7667: function (e) {
      "use strict";
      e.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50],
      };
    },
    1821: function (e) {
      "use strict";
      e.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50],
      };
    },
    7945: function (e, t, n) {
      var r = n(1821),
        a = n(9187),
        i = Object.hasOwnProperty,
        s = Object.create(null);
      for (var o in r) i.call(r, o) && (s[r[o]] = o);
      var l = (e.exports = { to: {}, get: {} });
      function c(e, t, n) {
        return Math.min(Math.max(t, e), n);
      }
      function u(e) {
        var t = Math.round(e).toString(16).toUpperCase();
        return t.length < 2 ? "0" + t : t;
      }
      (l.get = function (e) {
        var t, n;
        switch (e.substring(0, 3).toLowerCase()) {
          case "hsl":
            (t = l.get.hsl(e)), (n = "hsl");
            break;
          case "hwb":
            (t = l.get.hwb(e)), (n = "hwb");
            break;
          default:
            (t = l.get.rgb(e)), (n = "rgb");
        }
        return t ? { model: n, value: t } : null;
      }),
        (l.get.rgb = function (e) {
          if (!e) return null;
          var t,
            n,
            a,
            s = [0, 0, 0, 1];
          if ((t = e.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i))) {
            for (n = 0, a = t[2], t = t[1]; n < 3; n++) {
              var o = 2 * n;
              s[n] = parseInt(t.slice(o, o + 2), 16);
            }
            a && (s[3] = parseInt(a, 16) / 255);
          } else if ((t = e.match(/^#([a-f0-9]{3,4})$/i))) {
            for (n = 0, a = (t = t[1])[3]; n < 3; n++)
              s[n] = parseInt(t[n] + t[n], 16);
            a && (s[3] = parseInt(a + a, 16) / 255);
          } else if (
            (t = e.match(
              /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/
            ))
          ) {
            for (n = 0; n < 3; n++) s[n] = parseInt(t[n + 1], 0);
            t[4] &&
              (t[5]
                ? (s[3] = 0.01 * parseFloat(t[4]))
                : (s[3] = parseFloat(t[4])));
          } else if (
            (t = e.match(
              /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/
            ))
          ) {
            for (n = 0; n < 3; n++)
              s[n] = Math.round(2.55 * parseFloat(t[n + 1]));
            t[4] &&
              (t[5]
                ? (s[3] = 0.01 * parseFloat(t[4]))
                : (s[3] = parseFloat(t[4])));
          } else if (!(t = e.match(/^(\w+)$/))) return null;
          else
            return "transparent" === t[1]
              ? [0, 0, 0, 0]
              : i.call(r, t[1])
              ? (((s = r[t[1]])[3] = 1), s)
              : null;
          for (n = 0; n < 3; n++) s[n] = c(s[n], 0, 255);
          return (s[3] = c(s[3], 0, 1)), s;
        }),
        (l.get.hsl = function (e) {
          if (!e) return null;
          var t = e.match(
            /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/
          );
          if (t) {
            var n = parseFloat(t[4]);
            return [
              ((parseFloat(t[1]) % 360) + 360) % 360,
              c(parseFloat(t[2]), 0, 100),
              c(parseFloat(t[3]), 0, 100),
              c(isNaN(n) ? 1 : n, 0, 1),
            ];
          }
          return null;
        }),
        (l.get.hwb = function (e) {
          if (!e) return null;
          var t = e.match(
            /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/
          );
          if (t) {
            var n = parseFloat(t[4]);
            return [
              ((parseFloat(t[1]) % 360) + 360) % 360,
              c(parseFloat(t[2]), 0, 100),
              c(parseFloat(t[3]), 0, 100),
              c(isNaN(n) ? 1 : n, 0, 1),
            ];
          }
          return null;
        }),
        (l.to.hex = function () {
          var e = a(arguments);
          return (
            "#" +
            u(e[0]) +
            u(e[1]) +
            u(e[2]) +
            (e[3] < 1 ? u(Math.round(255 * e[3])) : "")
          );
        }),
        (l.to.rgb = function () {
          var e = a(arguments);
          return e.length < 4 || 1 === e[3]
            ? "rgb(" +
                Math.round(e[0]) +
                ", " +
                Math.round(e[1]) +
                ", " +
                Math.round(e[2]) +
                ")"
            : "rgba(" +
                Math.round(e[0]) +
                ", " +
                Math.round(e[1]) +
                ", " +
                Math.round(e[2]) +
                ", " +
                e[3] +
                ")";
        }),
        (l.to.rgb.percent = function () {
          var e = a(arguments),
            t = Math.round((e[0] / 255) * 100),
            n = Math.round((e[1] / 255) * 100),
            r = Math.round((e[2] / 255) * 100);
          return e.length < 4 || 1 === e[3]
            ? "rgb(" + t + "%, " + n + "%, " + r + "%)"
            : "rgba(" + t + "%, " + n + "%, " + r + "%, " + e[3] + ")";
        }),
        (l.to.hsl = function () {
          var e = a(arguments);
          return e.length < 4 || 1 === e[3]
            ? "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)"
            : "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + e[3] + ")";
        }),
        (l.to.hwb = function () {
          var e = a(arguments),
            t = "";
          return (
            e.length >= 4 && 1 !== e[3] && (t = ", " + e[3]),
            "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + t + ")"
          );
        }),
        (l.to.keyword = function (e) {
          return s[e.slice(0, 3)];
        });
    },
    3733: function (e, t, n) {
      "use strict";
      var r = n(7945),
        a = n(6454),
        i = [].slice,
        s = ["keyword", "gray", "hex"],
        o = {};
      Object.keys(a).forEach(function (e) {
        o[i.call(a[e].labels).sort().join("")] = e;
      });
      var l = {};
      function c(e, t) {
        if (!(this instanceof c)) return new c(e, t);
        if ((t && t in s && (t = null), t && !(t in a)))
          throw Error("Unknown model: " + t);
        if (null == e)
          (this.model = "rgb"), (this.color = [0, 0, 0]), (this.valpha = 1);
        else if (e instanceof c)
          (this.model = e.model),
            (this.color = e.color.slice()),
            (this.valpha = e.valpha);
        else if ("string" == typeof e) {
          var n,
            u,
            d = r.get(e);
          if (null === d)
            throw Error("Unable to parse color from string: " + e);
          (this.model = d.model),
            (u = a[this.model].channels),
            (this.color = d.value.slice(0, u)),
            (this.valpha = "number" == typeof d.value[u] ? d.value[u] : 1);
        } else if (e.length) {
          (this.model = t || "rgb"), (u = a[this.model].channels);
          var p = i.call(e, 0, u);
          (this.color = h(p, u)),
            (this.valpha = "number" == typeof e[u] ? e[u] : 1);
        } else if ("number" == typeof e)
          (e &= 16777215),
            (this.model = "rgb"),
            (this.color = [(e >> 16) & 255, (e >> 8) & 255, 255 & e]),
            (this.valpha = 1);
        else {
          this.valpha = 1;
          var f = Object.keys(e);
          "alpha" in e &&
            (f.splice(f.indexOf("alpha"), 1),
            (this.valpha = "number" == typeof e.alpha ? e.alpha : 0));
          var m = f.sort().join("");
          if (!(m in o))
            throw Error(
              "Unable to parse color from object: " + JSON.stringify(e)
            );
          this.model = o[m];
          var E = a[this.model].labels,
            T = [];
          for (n = 0; n < E.length; n++) T.push(e[E[n]]);
          this.color = h(T);
        }
        if (l[this.model])
          for (n = 0, u = a[this.model].channels; n < u; n++) {
            var g = l[this.model][n];
            g && (this.color[n] = g(this.color[n]));
          }
        (this.valpha = Math.max(0, Math.min(1, this.valpha))),
          Object.freeze && Object.freeze(this);
      }
      function u(e, t, n) {
        return (
          (e = Array.isArray(e) ? e : [e]).forEach(function (e) {
            (l[e] || (l[e] = []))[t] = n;
          }),
          (e = e[0]),
          function (r) {
            var a;
            return arguments.length
              ? (n && (r = n(r)), ((a = this[e]()).color[t] = r), a)
              : ((a = this[e]().color[t]), n && (a = n(a)), a);
          }
        );
      }
      function d(e) {
        return function (t) {
          return Math.max(0, Math.min(e, t));
        };
      }
      function h(e, t) {
        for (var n = 0; n < t; n++) "number" != typeof e[n] && (e[n] = 0);
        return e;
      }
      (c.prototype = {
        toString: function () {
          return this.string();
        },
        toJSON: function () {
          return this[this.model]();
        },
        string: function (e) {
          var t = this.model in r.to ? this : this.rgb(),
            n =
              1 === (t = t.round("number" == typeof e ? e : 1)).valpha
                ? t.color
                : t.color.concat(this.valpha);
          return r.to[t.model](n);
        },
        percentString: function (e) {
          var t = this.rgb().round("number" == typeof e ? e : 1),
            n = 1 === t.valpha ? t.color : t.color.concat(this.valpha);
          return r.to.rgb.percent(n);
        },
        array: function () {
          return 1 === this.valpha
            ? this.color.slice()
            : this.color.concat(this.valpha);
        },
        object: function () {
          for (
            var e = {},
              t = a[this.model].channels,
              n = a[this.model].labels,
              r = 0;
            r < t;
            r++
          )
            e[n[r]] = this.color[r];
          return 1 !== this.valpha && (e.alpha = this.valpha), e;
        },
        unitArray: function () {
          var e = this.rgb().color;
          return (
            (e[0] /= 255),
            (e[1] /= 255),
            (e[2] /= 255),
            1 !== this.valpha && e.push(this.valpha),
            e
          );
        },
        unitObject: function () {
          var e = this.rgb().object();
          return (
            (e.r /= 255),
            (e.g /= 255),
            (e.b /= 255),
            1 !== this.valpha && (e.alpha = this.valpha),
            e
          );
        },
        round: function (e) {
          var t;
          return (
            (e = Math.max(e || 0, 0)),
            new c(
              this.color
                .map(
                  ((t = e),
                  function (e) {
                    return Number(e.toFixed(t));
                  })
                )
                .concat(this.valpha),
              this.model
            )
          );
        },
        alpha: function (e) {
          return arguments.length
            ? new c(this.color.concat(Math.max(0, Math.min(1, e))), this.model)
            : this.valpha;
        },
        red: u("rgb", 0, d(255)),
        green: u("rgb", 1, d(255)),
        blue: u("rgb", 2, d(255)),
        hue: u(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, function (e) {
          return ((e % 360) + 360) % 360;
        }),
        saturationl: u("hsl", 1, d(100)),
        lightness: u("hsl", 2, d(100)),
        saturationv: u("hsv", 1, d(100)),
        value: u("hsv", 2, d(100)),
        chroma: u("hcg", 1, d(100)),
        gray: u("hcg", 2, d(100)),
        white: u("hwb", 1, d(100)),
        wblack: u("hwb", 2, d(100)),
        cyan: u("cmyk", 0, d(100)),
        magenta: u("cmyk", 1, d(100)),
        yellow: u("cmyk", 2, d(100)),
        black: u("cmyk", 3, d(100)),
        x: u("xyz", 0, d(100)),
        y: u("xyz", 1, d(100)),
        z: u("xyz", 2, d(100)),
        l: u("lab", 0, d(100)),
        a: u("lab", 1),
        b: u("lab", 2),
        keyword: function (e) {
          return arguments.length
            ? new c(e)
            : a[this.model].keyword(this.color);
        },
        hex: function (e) {
          return arguments.length
            ? new c(e)
            : r.to.hex(this.rgb().round().color);
        },
        rgbNumber: function () {
          var e = this.rgb().color;
          return ((255 & e[0]) << 16) | ((255 & e[1]) << 8) | (255 & e[2]);
        },
        luminosity: function () {
          for (var e = this.rgb().color, t = [], n = 0; n < e.length; n++) {
            var r = e[n] / 255;
            t[n] =
              r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
          }
          return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2];
        },
        contrast: function (e) {
          var t = this.luminosity(),
            n = e.luminosity();
          return t > n ? (t + 0.05) / (n + 0.05) : (n + 0.05) / (t + 0.05);
        },
        level: function (e) {
          var t = this.contrast(e);
          return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : "";
        },
        isDark: function () {
          var e = this.rgb().color;
          return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128;
        },
        isLight: function () {
          return !this.isDark();
        },
        negate: function () {
          for (var e = this.rgb(), t = 0; t < 3; t++)
            e.color[t] = 255 - e.color[t];
          return e;
        },
        lighten: function (e) {
          var t = this.hsl();
          return (t.color[2] += t.color[2] * e), t;
        },
        darken: function (e) {
          var t = this.hsl();
          return (t.color[2] -= t.color[2] * e), t;
        },
        saturate: function (e) {
          var t = this.hsl();
          return (t.color[1] += t.color[1] * e), t;
        },
        desaturate: function (e) {
          var t = this.hsl();
          return (t.color[1] -= t.color[1] * e), t;
        },
        whiten: function (e) {
          var t = this.hwb();
          return (t.color[1] += t.color[1] * e), t;
        },
        blacken: function (e) {
          var t = this.hwb();
          return (t.color[2] += t.color[2] * e), t;
        },
        grayscale: function () {
          var e = this.rgb().color,
            t = 0.3 * e[0] + 0.59 * e[1] + 0.11 * e[2];
          return c.rgb(t, t, t);
        },
        fade: function (e) {
          return this.alpha(this.valpha - this.valpha * e);
        },
        opaquer: function (e) {
          return this.alpha(this.valpha + this.valpha * e);
        },
        rotate: function (e) {
          var t = this.hsl(),
            n = t.color[0];
          return (
            (n = (n = (n + e) % 360) < 0 ? 360 + n : n), (t.color[0] = n), t
          );
        },
        mix: function (e, t) {
          if (!e || !e.rgb)
            throw Error(
              'Argument to "mix" was not a Color instance, but rather an instance of ' +
                typeof e
            );
          var n = e.rgb(),
            r = this.rgb(),
            a = void 0 === t ? 0.5 : t,
            i = 2 * a - 1,
            s = n.alpha() - r.alpha(),
            o = ((i * s == -1 ? i : (i + s) / (1 + i * s)) + 1) / 2,
            l = 1 - o;
          return c.rgb(
            o * n.red() + l * r.red(),
            o * n.green() + l * r.green(),
            o * n.blue() + l * r.blue(),
            n.alpha() * a + r.alpha() * (1 - a)
          );
        },
      }),
        Object.keys(a).forEach(function (e) {
          if (-1 === s.indexOf(e)) {
            var t = a[e].channels;
            (c.prototype[e] = function () {
              if (this.model === e) return new c(this);
              if (arguments.length) return new c(arguments, e);
              var n,
                r = "number" == typeof arguments[t] ? t : this.valpha;
              return new c(
                (Array.isArray((n = a[this.model][e].raw(this.color)))
                  ? n
                  : [n]
                ).concat(r),
                e
              );
            }),
              (c[e] = function (n) {
                return (
                  "number" == typeof n && (n = h(i.call(arguments), t)),
                  new c(n, e)
                );
              });
          }
        }),
        (e.exports = c);
    },
    4515: function (e, t, n) {
      var r = n(6794);
      function a(e) {
        return Math.floor(Math.random() * e);
      }
      function i(e) {
        var t = r[e];
        return t[a(t.length)];
      }
      e.exports = function (e) {
        for (var e = e || 3, t = "", n = !1, r = 0; r < e; r++) {
          var s,
            o = 75 > a(100) ? 1 : 0,
            l = i("adverbs"),
            c = i("verbs"),
            u = i("adjectives"),
            d = i("nouns");
          n || (l = (s = l).charAt(0).toUpperCase() + s.slice(1)),
            (t += l + " " + c + " " + u + " " + d),
            1 == o && r !== e - 1
              ? ((t += ", " + i("transitionals") + " "), (n = !0))
              : ((t += ". "), (n = !1));
        }
        return t;
      };
    },
    6794: function (e) {
      var t = [];
      (t.adverbs = [
        "appropriately",
        "assertively",
        "authoritatively",
        "collaboratively",
        "compellingly",
        "competently",
        "completely",
        "continually",
        "conveniently",
        "credibly",
        "distinctively",
        "dramatically",
        "dynamically",
        "efficiently",
        "energistically",
        "enthusiastically",
        "fungibly",
        "globally",
        "holisticly",
        "interactively",
        "intrinsically",
        "monotonectally",
        "objectively",
        "phosfluorescently",
        "proactively",
        "professionally",
        "progressively",
        "quickly",
        "rapidiously",
        "seamlessly",
        "synergistically",
        "uniquely",
      ]),
        (t.verbs = [
          "actualize",
          "administrate",
          "aggregate",
          "architect",
          "benchmark",
          "brand",
          "build",
          "cloudify",
          "communicate",
          "conceptualize",
          "coordinate",
          "create",
          "cultivate",
          "customize",
          "deliver",
          "deploy",
          "develop",
          "dinintermediate disseminate",
          "drive",
          "embrace",
          "e-enable",
          "empower",
          "enable",
          "engage",
          "engineer",
          "enhance",
          "envisioneer",
          "evisculate",
          "evolve",
          "expedite",
          "exploit",
          "extend",
          "fabricate",
          "facilitate",
          "fashion",
          "formulate",
          "foster",
          "generate",
          "grow",
          "harness",
          "impact",
          "implement",
          "incentivize",
          "incubate",
          "initiate",
          "innovate",
          "integrate",
          "iterate",
          "leverage existing",
          "leverage other's",
          "maintain",
          "matrix",
          "maximize",
          "mesh",
          "monetize",
          "morph",
          "myocardinate",
          "negotiate",
          "network",
          "optimize",
          "orchestrate",
          "parallel task",
          "plagiarize",
          "pontificate",
          "predominate",
          "procrastinate",
          "productivate",
          "productize",
          "promote",
          "provide access to",
          "pursue",
          "recaptiualize",
          "reconceptualize",
          "redefine",
          "re-engineer",
          "reintermediate",
          "reinvent",
          "repurpose",
          "restore",
          "revolutionize",
          "right-shore",
          "scale",
          "seize",
          "simplify",
          "strategize",
          "streamline",
          "supply",
          "syndicate",
          "synergize",
          "synthesize",
          "target",
          "transform",
          "transition",
          "underwhelm",
          "unleash",
          "utilize",
          "visualize",
          "whiteboard",
        ]),
        (t.adjectives = [
          "24/7",
          "24/365",
          "accurate",
          "adaptive",
          "agile",
          "alternative",
          "an expanded array of",
          "B2B",
          "B2C",
          "backend",
          "backward-compatible",
          "best-of-breed",
          "bleeding-edge",
          "bricks-and-clicks",
          "business",
          "clicks-and-mortar",
          "client-based",
          "client-centered",
          "client-centric",
          "client-focused",
          "cloud-based",
          "cloud-centric",
          "cloudified",
          "collaborative",
          "compelling",
          "competitive",
          "cooperative",
          "corporate",
          "cost effective",
          "covalent",
          "cross functional",
          "cross-media",
          "cross-platform",
          "cross-unit",
          "customer directed",
          "customized",
          "cutting-edge",
          "distinctive",
          "distributed",
          "diverse",
          "dynamic",
          "e-business",
          "economically sound",
          "effective",
          "efficient",
          "elastic",
          "emerging",
          "empowered",
          "enabled",
          "end-to-end",
          "enterprise",
          "enterprise-wide",
          "equity invested",
          "error-free",
          "ethical",
          "excellent",
          "exceptional",
          "extensible",
          "extensive",
          "flexible",
          "focused",
          "frictionless",
          "front-end",
          "fully researched",
          "fully tested",
          "functional",
          "functionalized",
          "fungible",
          "future-proof",
          "global",
          "go forward",
          "goal-oriented",
          "granular",
          "high standards in",
          "high-payoff",
          "hyperscale",
          "high-quality",
          "highly efficient",
          "holistic",
          "impactful",
          "inexpensive",
          "innovative",
          "installed base",
          "integrated",
          "interactive",
          "interdependent",
          "intermandated",
          "interoperable",
          "intuitive",
          "just in time",
          "leading-edge",
          "leveraged",
          "long-term high-impact",
          "low-risk high-yield",
          "magnetic",
          "maintainable",
          "market positioning",
          "market-driven",
          "mission-critical",
          "multidisciplinary",
          "multifunctional",
          "multimedia based",
          "next-generation",
          "on-demand",
          "one-to-one",
          "open-source",
          "optimal",
          "orthogonal",
          "out-of-the-box",
          "pandemic",
          "parallel",
          "performance based",
          "plug-and-play",
          "premier",
          "premium",
          "principle-centered",
          "proactive",
          "process-centric",
          "professional",
          "progressive",
          "prospective",
          "quality",
          "real-time",
          "reliable",
          "resource-sucking",
          "resource-maximizing",
          "resource-leveling",
          "revolutionary",
          "robust",
          "scalable",
          "seamless",
          "stand-alone",
          "standardized",
          "standards compliant",
          "state of the art",
          "sticky",
          "strategic",
          "superior",
          "sustainable",
          "synergistic",
          "tactical",
          "team building",
          "team driven",
          "technically sound",
          "timely",
          "top-line",
          "transparent",
          "turnkey",
          "ubiquitous",
          "unique",
          "user-centric",
          "user friendly",
          "value-added",
          "vertical",
          "viral",
          "virtual",
          "visionary",
          "web-enabled",
          "wireless",
          "world-class",
          "worldwide",
        ]),
        (t.nouns = [
          "action items",
          "alignments",
          "applications",
          "architectures",
          "bandwidth",
          "benefits",
          "best practices",
          "catalysts for change",
          "channels",
          "clouds",
          "collaboration and idea-sharing",
          "communities",
          "content",
          "convergence",
          "core competencies",
          "customer service",
          "data",
          "deliverables",
          "e-business",
          "e-commerce",
          "e-markets",
          "e-tailers",
          "e-services",
          "experiences",
          "expertise",
          "functionalities",
          "fungibility",
          "growth strategies",
          "human capital",
          "ideas",
          "imperatives",
          "infomediaries",
          "information",
          "infrastructures",
          "initiatives",
          "innovation",
          "intellectual capital",
          "interfaces",
          'internal or "organic" sources',
          "leadership",
          "leadership skills",
          "manufactured products",
          "markets",
          "materials",
          "meta-services",
          "methodologies",
          "methods of empowerment",
          "metrics",
          "mindshare",
          "models",
          "networks",
          "niches",
          "niche markets",
          "nosql",
          "opportunities",
          '"outside the box" thinking',
          "outsourcing",
          "paradigms",
          "partnerships",
          "platforms",
          "portals",
          "potentialities",
          "rocess improvements",
          "processes",
          "products",
          "quality vectors",
          "relationships",
          "resources",
          "results",
          "ROI",
          "scenarios",
          "schemas",
          "scrums",
          "services",
          "solutions",
          "sources",
          "sprints",
          "strategic theme areas",
          "storage",
          "supply chains",
          "synergy",
          "systems",
          "technologies",
          "technology",
          "testing procedures",
          "total linkage",
          "users",
          "value",
          "vortals",
          "web-readiness",
          "web services",
          "wins",
          "virtualization",
        ]),
        (t.transitionals = ["and", "then", "to"]),
        (e.exports = t);
    },
    9705: function (e, t, n) {
      "use strict";
      n.d(t, {
        dO: function () {
          return s;
        },
        iz: function () {
          return u;
        },
        oc: function () {
          return c;
        },
      });
      var r = function (e) {
          var t = e.top,
            n = e.right,
            r = e.bottom,
            a = e.left;
          return {
            top: t,
            right: n,
            bottom: r,
            left: a,
            width: n - a,
            height: r - t,
            x: a,
            y: t,
            center: { x: (n + a) / 2, y: (r + t) / 2 },
          };
        },
        a = function (e, t) {
          return {
            top: e.top + t.top,
            left: e.left + t.left,
            bottom: e.bottom - t.bottom,
            right: e.right - t.right,
          };
        },
        i = { top: 0, right: 0, bottom: 0, left: 0 },
        s = function (e) {
          var t = e.borderBox,
            n = e.margin,
            s = void 0 === n ? i : n,
            o = e.border,
            l = void 0 === o ? i : o,
            c = e.padding,
            u = void 0 === c ? i : c,
            d = r({
              top: t.top - s.top,
              left: t.left - s.left,
              bottom: t.bottom + s.bottom,
              right: t.right + s.right,
            }),
            h = r(a(t, l)),
            p = r(a(h, u));
          return {
            marginBox: d,
            borderBox: r(t),
            paddingBox: h,
            contentBox: p,
            margin: s,
            border: l,
            padding: u,
          };
        },
        o = function (e) {
          var t = e.slice(0, -2);
          if ("px" !== e.slice(-2)) return 0;
          var n = Number(t);
          return (
            isNaN(n) &&
              (function (e, t) {
                if (!e) throw Error("Invariant failed");
              })(!1),
            n
          );
        },
        l = function (e, t) {
          var n = e.borderBox,
            r = e.border,
            a = e.margin,
            i = e.padding;
          return s({
            borderBox: {
              top: n.top + t.y,
              left: n.left + t.x,
              bottom: n.bottom + t.y,
              right: n.right + t.x,
            },
            border: r,
            margin: a,
            padding: i,
          });
        },
        c = function (e, t) {
          return (
            void 0 === t &&
              (t = { x: window.pageXOffset, y: window.pageYOffset }),
            l(e, t)
          );
        },
        u = function (e) {
          var t;
          return s({
            borderBox: e.getBoundingClientRect(),
            margin: {
              top: o((t = window.getComputedStyle(e)).marginTop),
              right: o(t.marginRight),
              bottom: o(t.marginBottom),
              left: o(t.marginLeft),
            },
            padding: {
              top: o(t.paddingTop),
              right: o(t.paddingRight),
              bottom: o(t.paddingBottom),
              left: o(t.paddingLeft),
            },
            border: {
              top: o(t.borderTopWidth),
              right: o(t.borderRightWidth),
              bottom: o(t.borderBottomWidth),
              left: o(t.borderLeftWidth),
            },
          });
        };
    },
    6919: function (e, t) {
      "use strict";
      var n, r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Doctype =
          t.CDATA =
          t.Tag =
          t.Style =
          t.Script =
          t.Comment =
          t.Directive =
          t.Text =
          t.Root =
          t.isTag =
          t.ElementType =
            void 0),
        ((r = n = t.ElementType || (t.ElementType = {})).Root = "root"),
        (r.Text = "text"),
        (r.Directive = "directive"),
        (r.Comment = "comment"),
        (r.Script = "script"),
        (r.Style = "style"),
        (r.Tag = "tag"),
        (r.CDATA = "cdata"),
        (r.Doctype = "doctype"),
        (t.isTag = function (e) {
          return e.type === n.Tag || e.type === n.Script || e.type === n.Style;
        }),
        (t.Root = n.Root),
        (t.Text = n.Text),
        (t.Directive = n.Directive),
        (t.Comment = n.Comment),
        (t.Script = n.Script),
        (t.Style = n.Style),
        (t.Tag = n.Tag),
        (t.CDATA = n.CDATA),
        (t.Doctype = n.Doctype);
    },
    1756: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n);
                var a = Object.getOwnPropertyDescriptor(t, n);
                (!a ||
                  ("get" in a
                    ? !t.__esModule
                    : a.writable || a.configurable)) &&
                  (a = {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }),
                  Object.defineProperty(e, r, a);
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        a =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var n in e)
              "default" === n ||
                Object.prototype.hasOwnProperty.call(t, n) ||
                r(t, e, n);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DomHandler = void 0);
      var i = n(6919),
        s = n(1711);
      a(n(1711), t);
      var o = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 },
        l = (function () {
          function e(e, t, n) {
            (this.dom = []),
              (this.root = new s.Document(this.dom)),
              (this.done = !1),
              (this.tagStack = [this.root]),
              (this.lastNode = null),
              (this.parser = null),
              "function" == typeof t && ((n = t), (t = o)),
              "object" == typeof e && ((t = e), (e = void 0)),
              (this.callback = null != e ? e : null),
              (this.options = null != t ? t : o),
              (this.elementCB = null != n ? n : null);
          }
          return (
            (e.prototype.onparserinit = function (e) {
              this.parser = e;
            }),
            (e.prototype.onreset = function () {
              (this.dom = []),
                (this.root = new s.Document(this.dom)),
                (this.done = !1),
                (this.tagStack = [this.root]),
                (this.lastNode = null),
                (this.parser = null);
            }),
            (e.prototype.onend = function () {
              this.done ||
                ((this.done = !0),
                (this.parser = null),
                this.handleCallback(null));
            }),
            (e.prototype.onerror = function (e) {
              this.handleCallback(e);
            }),
            (e.prototype.onclosetag = function () {
              this.lastNode = null;
              var e = this.tagStack.pop();
              this.options.withEndIndices &&
                (e.endIndex = this.parser.endIndex),
                this.elementCB && this.elementCB(e);
            }),
            (e.prototype.onopentag = function (e, t) {
              var n = this.options.xmlMode ? i.ElementType.Tag : void 0,
                r = new s.Element(e, t, void 0, n);
              this.addNode(r), this.tagStack.push(r);
            }),
            (e.prototype.ontext = function (e) {
              var t = this.lastNode;
              if (t && t.type === i.ElementType.Text)
                (t.data += e),
                  this.options.withEndIndices &&
                    (t.endIndex = this.parser.endIndex);
              else {
                var n = new s.Text(e);
                this.addNode(n), (this.lastNode = n);
              }
            }),
            (e.prototype.oncomment = function (e) {
              if (
                this.lastNode &&
                this.lastNode.type === i.ElementType.Comment
              ) {
                this.lastNode.data += e;
                return;
              }
              var t = new s.Comment(e);
              this.addNode(t), (this.lastNode = t);
            }),
            (e.prototype.oncommentend = function () {
              this.lastNode = null;
            }),
            (e.prototype.oncdatastart = function () {
              var e = new s.Text(""),
                t = new s.CDATA([e]);
              this.addNode(t), (e.parent = t), (this.lastNode = e);
            }),
            (e.prototype.oncdataend = function () {
              this.lastNode = null;
            }),
            (e.prototype.onprocessinginstruction = function (e, t) {
              var n = new s.ProcessingInstruction(e, t);
              this.addNode(n);
            }),
            (e.prototype.handleCallback = function (e) {
              if ("function" == typeof this.callback)
                this.callback(e, this.dom);
              else if (e) throw e;
            }),
            (e.prototype.addNode = function (e) {
              var t = this.tagStack[this.tagStack.length - 1],
                n = t.children[t.children.length - 1];
              this.options.withStartIndices &&
                (e.startIndex = this.parser.startIndex),
                this.options.withEndIndices &&
                  (e.endIndex = this.parser.endIndex),
                t.children.push(e),
                n && ((e.prev = n), (n.next = e)),
                (e.parent = t),
                (this.lastNode = null);
            }),
            e
          );
        })();
      (t.DomHandler = l), (t.default = l);
    },
    1711: function (e, t, n) {
      "use strict";
      var r,
        a =
          (this && this.__extends) ||
          ((r = function (e, t) {
            return (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = e;
            }
            r(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          }),
        i =
          (this && this.__assign) ||
          function () {
            return (i =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var a in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }).apply(this, arguments);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.cloneNode =
          t.hasChildren =
          t.isDocument =
          t.isDirective =
          t.isComment =
          t.isText =
          t.isCDATA =
          t.isTag =
          t.Element =
          t.Document =
          t.CDATA =
          t.NodeWithChildren =
          t.ProcessingInstruction =
          t.Comment =
          t.Text =
          t.DataNode =
          t.Node =
            void 0);
      var s = n(6919),
        o = (function () {
          function e() {
            (this.parent = null),
              (this.prev = null),
              (this.next = null),
              (this.startIndex = null),
              (this.endIndex = null);
          }
          return (
            Object.defineProperty(e.prototype, "parentNode", {
              get: function () {
                return this.parent;
              },
              set: function (e) {
                this.parent = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "previousSibling", {
              get: function () {
                return this.prev;
              },
              set: function (e) {
                this.prev = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "nextSibling", {
              get: function () {
                return this.next;
              },
              set: function (e) {
                this.next = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.cloneNode = function (e) {
              return void 0 === e && (e = !1), b(this, e);
            }),
            e
          );
        })();
      t.Node = o;
      var l = (function (e) {
        function t(t) {
          var n = e.call(this) || this;
          return (n.data = t), n;
        }
        return (
          a(t, e),
          Object.defineProperty(t.prototype, "nodeValue", {
            get: function () {
              return this.data;
            },
            set: function (e) {
              this.data = e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })(o);
      t.DataNode = l;
      var c = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.type = s.ElementType.Text), t;
        }
        return (
          a(t, e),
          Object.defineProperty(t.prototype, "nodeType", {
            get: function () {
              return 3;
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })(l);
      t.Text = c;
      var u = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.type = s.ElementType.Comment), t;
        }
        return (
          a(t, e),
          Object.defineProperty(t.prototype, "nodeType", {
            get: function () {
              return 8;
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })(l);
      t.Comment = u;
      var d = (function (e) {
        function t(t, n) {
          var r = e.call(this, n) || this;
          return (r.name = t), (r.type = s.ElementType.Directive), r;
        }
        return (
          a(t, e),
          Object.defineProperty(t.prototype, "nodeType", {
            get: function () {
              return 1;
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })(l);
      t.ProcessingInstruction = d;
      var h = (function (e) {
        function t(t) {
          var n = e.call(this) || this;
          return (n.children = t), n;
        }
        return (
          a(t, e),
          Object.defineProperty(t.prototype, "firstChild", {
            get: function () {
              var e;
              return null !== (e = this.children[0]) && void 0 !== e ? e : null;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "lastChild", {
            get: function () {
              return this.children.length > 0
                ? this.children[this.children.length - 1]
                : null;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "childNodes", {
            get: function () {
              return this.children;
            },
            set: function (e) {
              this.children = e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })(o);
      t.NodeWithChildren = h;
      var p = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.type = s.ElementType.CDATA), t;
        }
        return (
          a(t, e),
          Object.defineProperty(t.prototype, "nodeType", {
            get: function () {
              return 4;
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })(h);
      t.CDATA = p;
      var f = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.type = s.ElementType.Root), t;
        }
        return (
          a(t, e),
          Object.defineProperty(t.prototype, "nodeType", {
            get: function () {
              return 9;
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })(h);
      t.Document = f;
      var m = (function (e) {
        function t(t, n, r, a) {
          void 0 === r && (r = []),
            void 0 === a &&
              (a =
                "script" === t
                  ? s.ElementType.Script
                  : "style" === t
                  ? s.ElementType.Style
                  : s.ElementType.Tag);
          var i = e.call(this, r) || this;
          return (i.name = t), (i.attribs = n), (i.type = a), i;
        }
        return (
          a(t, e),
          Object.defineProperty(t.prototype, "nodeType", {
            get: function () {
              return 1;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "tagName", {
            get: function () {
              return this.name;
            },
            set: function (e) {
              this.name = e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "attributes", {
            get: function () {
              var e = this;
              return Object.keys(this.attribs).map(function (t) {
                var n, r;
                return {
                  name: t,
                  value: e.attribs[t],
                  namespace:
                    null === (n = e["x-attribsNamespace"]) || void 0 === n
                      ? void 0
                      : n[t],
                  prefix:
                    null === (r = e["x-attribsPrefix"]) || void 0 === r
                      ? void 0
                      : r[t],
                };
              });
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })(h);
      function E(e) {
        return (0, s.isTag)(e);
      }
      function T(e) {
        return e.type === s.ElementType.CDATA;
      }
      function g(e) {
        return e.type === s.ElementType.Text;
      }
      function _(e) {
        return e.type === s.ElementType.Comment;
      }
      function A(e) {
        return e.type === s.ElementType.Directive;
      }
      function v(e) {
        return e.type === s.ElementType.Root;
      }
      function b(e, t) {
        if ((void 0 === t && (t = !1), g(e))) n = new c(e.data);
        else if (_(e)) n = new u(e.data);
        else if (E(e)) {
          var n,
            r = t ? y(e.children) : [],
            a = new m(e.name, i({}, e.attribs), r);
          r.forEach(function (e) {
            return (e.parent = a);
          }),
            null != e.namespace && (a.namespace = e.namespace),
            e["x-attribsNamespace"] &&
              (a["x-attribsNamespace"] = i({}, e["x-attribsNamespace"])),
            e["x-attribsPrefix"] &&
              (a["x-attribsPrefix"] = i({}, e["x-attribsPrefix"])),
            (n = a);
        } else if (T(e)) {
          var r = t ? y(e.children) : [],
            s = new p(r);
          r.forEach(function (e) {
            return (e.parent = s);
          }),
            (n = s);
        } else if (v(e)) {
          var r = t ? y(e.children) : [],
            o = new f(r);
          r.forEach(function (e) {
            return (e.parent = o);
          }),
            e["x-mode"] && (o["x-mode"] = e["x-mode"]),
            (n = o);
        } else if (A(e)) {
          var l = new d(e.name, e.data);
          null != e["x-name"] &&
            ((l["x-name"] = e["x-name"]),
            (l["x-publicId"] = e["x-publicId"]),
            (l["x-systemId"] = e["x-systemId"])),
            (n = l);
        } else throw Error("Not implemented yet: ".concat(e.type));
        return (
          (n.startIndex = e.startIndex),
          (n.endIndex = e.endIndex),
          null != e.sourceCodeLocation &&
            (n.sourceCodeLocation = e.sourceCodeLocation),
          n
        );
      }
      function y(e) {
        for (
          var t = e.map(function (e) {
              return b(e, !0);
            }),
            n = 1;
          n < t.length;
          n++
        )
          (t[n].prev = t[n - 1]), (t[n - 1].next = t[n]);
        return t;
      }
      (t.Element = m),
        (t.isTag = E),
        (t.isCDATA = T),
        (t.isText = g),
        (t.isComment = _),
        (t.isDirective = A),
        (t.isDocument = v),
        (t.hasChildren = function (e) {
          return Object.prototype.hasOwnProperty.call(e, "children");
        }),
        (t.cloneNode = b);
    },
    720: function (e) {
      "use strict";
      /*!
       * escape-html
       * Copyright(c) 2012-2013 TJ Holowaychuk
       * Copyright(c) 2015 Andreas Lubbe
       * Copyright(c) 2015 Tiancheng "Timothy" Gu
       * MIT Licensed
       */ var t = /["'&<>]/;
      e.exports = function (e) {
        var n,
          r = "" + e,
          a = t.exec(r);
        if (!a) return r;
        var i = "",
          s = 0,
          o = 0;
        for (s = a.index; s < r.length; s++) {
          switch (r.charCodeAt(s)) {
            case 34:
              n = "&quot;";
              break;
            case 38:
              n = "&amp;";
              break;
            case 39:
              n = "&#39;";
              break;
            case 60:
              n = "&lt;";
              break;
            case 62:
              n = "&gt;";
              break;
            default:
              continue;
          }
          o !== s && (i += r.substring(o, s)), (o = s + 1), (i += n);
        }
        return o !== s ? i + r.substring(o, s) : i;
      };
    },
    8386: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CASE_SENSITIVE_TAG_NAMES_MAP = t.CASE_SENSITIVE_TAG_NAMES = void 0),
        (t.CASE_SENSITIVE_TAG_NAMES = [
          "animateMotion",
          "animateTransform",
          "clipPath",
          "feBlend",
          "feColorMatrix",
          "feComponentTransfer",
          "feComposite",
          "feConvolveMatrix",
          "feDiffuseLighting",
          "feDisplacementMap",
          "feDropShadow",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussianBlur",
          "feImage",
          "feMerge",
          "feMergeNode",
          "feMorphology",
          "feOffset",
          "fePointLight",
          "feSpecularLighting",
          "feSpotLight",
          "feTile",
          "feTurbulence",
          "foreignObject",
          "linearGradient",
          "radialGradient",
          "textPath",
        ]),
        (t.CASE_SENSITIVE_TAG_NAMES_MAP = t.CASE_SENSITIVE_TAG_NAMES.reduce(
          function (e, t) {
            return (e[t.toLowerCase()] = t), e;
          },
          {}
        ));
    },
    4801: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        r = "html",
        a = "head",
        i = "body",
        s = /<([a-zA-Z]+[0-9]?)/,
        o = /<head[^]*>/i,
        l = /<body[^]*>/i,
        c = function (e, t) {
          throw Error(
            "This browser does not support `document.implementation.createHTMLDocument`"
          );
        },
        u = function (e, t) {
          throw Error(
            "This browser does not support `DOMParser.prototype.parseFromString`"
          );
        },
        d = "object" == typeof window && window.DOMParser;
      if ("function" == typeof d) {
        var h = new d();
        c = u = function (e, t) {
          return (
            t && (e = "<".concat(t, ">").concat(e, "</").concat(t, ">")),
            h.parseFromString(e, "text/html")
          );
        };
      }
      if ("object" == typeof document && document.implementation) {
        var p = document.implementation.createHTMLDocument();
        c = function (e, t) {
          if (t) {
            var n = p.documentElement.querySelector(t);
            return n && (n.innerHTML = e), p;
          }
          return (p.documentElement.innerHTML = e), p;
        };
      }
      var f = "object" == typeof document && document.createElement("template");
      f &&
        f.content &&
        (n = function (e) {
          return (f.innerHTML = e), f.content.childNodes;
        }),
        (t.default = function (e) {
          var t,
            d,
            h = e.match(s),
            p = h && h[1] ? h[1].toLowerCase() : "";
          switch (p) {
            case r:
              var f = u(e);
              if (!o.test(e)) {
                var m = f.querySelector(a);
                null === (t = null == m ? void 0 : m.parentNode) ||
                  void 0 === t ||
                  t.removeChild(m);
              }
              if (!l.test(e)) {
                var m = f.querySelector(i);
                null === (d = null == m ? void 0 : m.parentNode) ||
                  void 0 === d ||
                  d.removeChild(m);
              }
              return f.querySelectorAll(r);
            case a:
            case i:
              var E = c(e).querySelectorAll(p);
              if (l.test(e) && o.test(e)) return E[0].parentNode.childNodes;
              return E;
            default:
              if (n) return n(e);
              var m = c(e, i).querySelector(i);
              return m.childNodes;
          }
        });
    },
    7097: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = r(n(4801)),
        i = n(2317),
        s = /<(![a-zA-Z\s]+)>/;
      t.default = function (e) {
        if ("string" != typeof e)
          throw TypeError("First argument must be a string");
        if (!e) return [];
        var t = e.match(s),
          n = t ? t[1] : void 0;
        return (0, i.formatDOM)((0, a.default)(e), null, n);
      };
    },
    2317: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.formatDOM = t.formatAttributes = void 0);
      var r = n(1756),
        a = n(8386);
      function i(e) {
        for (var t = {}, n = 0, r = e.length; n < r; n++) {
          var a = e[n];
          t[a.name] = a.value;
        }
        return t;
      }
      (t.formatAttributes = i),
        (t.formatDOM = function e(t, n, s) {
          void 0 === n && (n = null);
          for (var o, l = [], c = 0, u = t.length; c < u; c++) {
            var d = t[c];
            switch (d.nodeType) {
              case 1:
                var h = (function (e) {
                  var t;
                  return (
                    (t = e = e.toLowerCase()),
                    a.CASE_SENSITIVE_TAG_NAMES_MAP[t] || e
                  );
                })(d.nodeName);
                (o = new r.Element(h, i(d.attributes))).children = e(
                  "template" === h ? d.content.childNodes : d.childNodes,
                  o
                );
                break;
              case 3:
                o = new r.Text(d.nodeValue);
                break;
              case 8:
                o = new r.Comment(d.nodeValue);
                break;
              default:
                continue;
            }
            var p = l[c - 1] || null;
            p && (p.next = o),
              (o.parent = n),
              (o.prev = p),
              (o.next = null),
              l.push(o);
          }
          return (
            s &&
              (((o = new r.ProcessingInstruction(
                s.substring(0, s.indexOf(" ")).toLowerCase(),
                s
              )).next = l[0] || null),
              (o.parent = n),
              l.unshift(o),
              l[1] && (l[1].prev = l[0])),
            l
          );
        });
    },
    1672: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(8854),
        a = n(9521),
        i = ["checked", "value"],
        s = ["input", "select", "textarea"],
        o = { reset: !0, submit: !0 };
      function l(e) {
        return r.possibleStandardNames[e];
      }
      t.default = function (e, t) {
        void 0 === e && (e = {});
        var n = {},
          c = Boolean(e.type && o[e.type]);
        for (var u in e) {
          var d = e[u];
          if ((0, r.isCustomAttribute)(u)) {
            n[u] = d;
            continue;
          }
          var h = u.toLowerCase(),
            p = l(h);
          if (p) {
            var f = (0, r.getPropertyInfo)(p);
            switch (
              (i.includes(p) && s.includes(t) && !c && (p = l("default" + h)),
              (n[p] = d),
              f && f.type)
            ) {
              case r.BOOLEAN:
                n[p] = !0;
                break;
              case r.OVERLOADED_BOOLEAN:
                "" === d && (n[p] = !0);
            }
            continue;
          }
          a.PRESERVE_CUSTOM_ATTRIBUTES && (n[u] = d);
        }
        return (0, a.setStyleProp)(e.style, n), n;
      };
    },
    7336: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = n(2983),
        i = r(n(1672)),
        s = n(9521),
        o = {
          cloneElement: a.cloneElement,
          createElement: a.createElement,
          isValidElement: a.isValidElement,
        };
      t.default = function e(t, n) {
        for (
          var r = [],
            a = "function" == typeof (null == n ? void 0 : n.replace),
            l = (null == n ? void 0 : n.transform) || s.returnFirstArg,
            c = (null == n ? void 0 : n.library) || o,
            u = c.cloneElement,
            d = c.createElement,
            h = c.isValidElement,
            p = t.length,
            f = 0;
          f < p;
          f++
        ) {
          var m = t[f];
          if (a) {
            var E = n.replace(m);
            if (h(E)) {
              p > 1 && (E = u(E, { key: E.key || f })), r.push(l(E, m, f));
              continue;
            }
          }
          if ("text" === m.type) {
            var T = !m.data.trim().length;
            if (
              (T && m.parent && !(0, s.canTextBeChildOfNode)(m.parent)) ||
              ((null == n ? void 0 : n.trim) && T)
            )
              continue;
            r.push(l(m.data, m, f));
            continue;
          }
          var g = {};
          s.PRESERVE_CUSTOM_ATTRIBUTES &&
          "tag" === m.type &&
          (0, s.isCustomComponent)(m.name, m.attribs)
            ? ((0, s.setStyleProp)(m.attribs.style, m.attribs), (g = m.attribs))
            : m.attribs && (g = (0, i.default)(m.attribs, m.name));
          var _ = void 0;
          switch (m.type) {
            case "script":
            case "style":
              m.children[0] &&
                (g.dangerouslySetInnerHTML = { __html: m.children[0].data });
              break;
            case "tag":
              "textarea" === m.name && m.children[0]
                ? (g.defaultValue = m.children[0].data)
                : m.children && m.children.length && (_ = e(m.children, n));
              break;
            default:
              continue;
          }
          p > 1 && (g.key = f), r.push(l(d(m.name, g, _), m, f));
        }
        return 1 === r.length ? r[0] : r;
      };
    },
    4460: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.htmlToDOM =
          t.domToReact =
          t.attributesToProps =
          t.Text =
          t.ProcessingInstruction =
          t.Element =
          t.Comment =
            void 0);
      var a = r(n(7097));
      t.htmlToDOM = a.default;
      var i = r(n(1672));
      t.attributesToProps = i.default;
      var s = r(n(7336));
      t.domToReact = s.default;
      var o = n(1756);
      Object.defineProperty(t, "Comment", {
        enumerable: !0,
        get: function () {
          return o.Comment;
        },
      }),
        Object.defineProperty(t, "Element", {
          enumerable: !0,
          get: function () {
            return o.Element;
          },
        }),
        Object.defineProperty(t, "ProcessingInstruction", {
          enumerable: !0,
          get: function () {
            return o.ProcessingInstruction;
          },
        }),
        Object.defineProperty(t, "Text", {
          enumerable: !0,
          get: function () {
            return o.Text;
          },
        });
      var l = { lowerCaseAttributeNames: !1 };
      t.default = function (e, t) {
        if ("string" != typeof e)
          throw TypeError("First argument must be a string");
        return e
          ? (0, s.default)(
              (0, a.default)(e, (null == t ? void 0 : t.htmlparser2) || l),
              t
            )
          : [];
      };
    },
    9521: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.returnFirstArg =
          t.canTextBeChildOfNode =
          t.ELEMENTS_WITH_NO_TEXT_CHILDREN =
          t.PRESERVE_CUSTOM_ATTRIBUTES =
          t.setStyleProp =
          t.isCustomComponent =
            void 0);
      var a = n(2983),
        i = r(n(88)),
        s = new Set([
          "annotation-xml",
          "color-profile",
          "font-face",
          "font-face-src",
          "font-face-uri",
          "font-face-format",
          "font-face-name",
          "missing-glyph",
        ]);
      t.isCustomComponent = function (e, t) {
        return e.includes("-")
          ? !s.has(e)
          : Boolean(t && "string" == typeof t.is);
      };
      var o = { reactCompat: !0 };
      (t.setStyleProp = function (e, t) {
        if ("string" == typeof e) {
          if (!e.trim()) {
            t.style = {};
            return;
          }
          try {
            t.style = (0, i.default)(e, o);
          } catch (e) {
            t.style = {};
          }
        }
      }),
        (t.PRESERVE_CUSTOM_ATTRIBUTES = Number(a.version.split(".")[0]) >= 16),
        (t.ELEMENTS_WITH_NO_TEXT_CHILDREN = new Set([
          "tr",
          "tbody",
          "thead",
          "tfoot",
          "colgroup",
          "table",
          "head",
          "html",
          "frameset",
        ])),
        (t.canTextBeChildOfNode = function (e) {
          return !t.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(e.name);
        }),
        (t.returnFirstArg = function (e) {
          return e;
        });
    },
    9139: function (e) {
      var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
        n = /\n/g,
        r = /^\s*/,
        a = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
        i = /^:\s*/,
        s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
        o = /^[;\s]*/,
        l = /^\s+|\s+$/g;
      function c(e) {
        return e ? e.replace(l, "") : "";
      }
      e.exports = function (e, l) {
        if ("string" != typeof e)
          throw TypeError("First argument must be a string");
        if (!e) return [];
        l = l || {};
        var u = 1,
          d = 1;
        function h(e) {
          var t = e.match(n);
          t && (u += t.length);
          var r = e.lastIndexOf("\n");
          d = ~r ? e.length - r : d + e.length;
        }
        function p() {
          var e = { line: u, column: d };
          return function (t) {
            return (t.position = new f(e)), T(r), t;
          };
        }
        function f(e) {
          (this.start = e),
            (this.end = { line: u, column: d }),
            (this.source = l.source);
        }
        f.prototype.content = e;
        var m = [];
        function E(t) {
          var n = Error(l.source + ":" + u + ":" + d + ": " + t);
          if (
            ((n.reason = t),
            (n.filename = l.source),
            (n.line = u),
            (n.column = d),
            (n.source = e),
            l.silent)
          )
            m.push(n);
          else throw n;
        }
        function T(t) {
          var n = t.exec(e);
          if (n) {
            var r = n[0];
            return h(r), (e = e.slice(r.length)), n;
          }
        }
        function g(e) {
          var t;
          for (e = e || []; (t = _()); ) !1 !== t && e.push(t);
          return e;
        }
        function _() {
          var t = p();
          if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
            for (
              var n = 2;
              "" != e.charAt(n) &&
              ("*" != e.charAt(n) || "/" != e.charAt(n + 1));

            )
              ++n;
            if (((n += 2), "" === e.charAt(n - 1)))
              return E("End of comment missing");
            var r = e.slice(2, n - 2);
            return (
              (d += 2),
              h(r),
              (e = e.slice(n)),
              (d += 2),
              t({ type: "comment", comment: r })
            );
          }
        }
        return (
          T(r),
          (function () {
            var e,
              n = [];
            for (
              g(n);
              (e = (function () {
                var e = p(),
                  n = T(a);
                if (n) {
                  if ((_(), !T(i))) return E("property missing ':'");
                  var r = T(s),
                    l = e({
                      type: "declaration",
                      property: c(n[0].replace(t, "")),
                      value: r ? c(r[0].replace(t, "")) : "",
                    });
                  return T(o), l;
                }
              })());

            )
              !1 !== e && (n.push(e), g(n));
            return n;
          })()
        );
      };
    },
    2086: function (e) {
      e.exports = function (e) {
        return (
          !!e &&
          "string" != typeof e &&
          (e instanceof Array ||
            Array.isArray(e) ||
            (e.length >= 0 &&
              (e.splice instanceof Function ||
                (Object.getOwnPropertyDescriptor(e, e.length - 1) &&
                  "String" !== e.constructor.name))))
        );
      };
    },
    2481: function (e, t) {
      "use strict";
      for (
        var n =
            "undefined" != typeof window &&
            /Mac|iPod|iPhone|iPad/.test(window.navigator.platform),
          r = {
            alt: "altKey",
            control: "ctrlKey",
            meta: "metaKey",
            shift: "shiftKey",
          },
          a = {
            add: "+",
            break: "pause",
            cmd: "meta",
            command: "meta",
            ctl: "control",
            ctrl: "control",
            del: "delete",
            down: "arrowdown",
            esc: "escape",
            ins: "insert",
            left: "arrowleft",
            mod: n ? "meta" : "control",
            opt: "alt",
            option: "alt",
            return: "enter",
            right: "arrowright",
            space: " ",
            spacebar: " ",
            up: "arrowup",
            win: "meta",
            windows: "meta",
          },
          i = {
            backspace: 8,
            tab: 9,
            enter: 13,
            shift: 16,
            control: 17,
            alt: 18,
            pause: 19,
            capslock: 20,
            escape: 27,
            " ": 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36,
            arrowleft: 37,
            arrowup: 38,
            arrowright: 39,
            arrowdown: 40,
            insert: 45,
            delete: 46,
            meta: 91,
            numlock: 144,
            scrolllock: 145,
            ";": 186,
            "=": 187,
            ",": 188,
            "-": 189,
            ".": 190,
            "/": 191,
            "`": 192,
            "[": 219,
            "\\": 220,
            "]": 221,
            "'": 222,
          },
          s = 1;
        s < 20;
        s++
      )
        i["f" + s] = 111 + s;
      function o(e, t, n) {
        !t || "byKey" in t || ((n = t), (t = null)),
          Array.isArray(e) || (e = [e]);
        var a = e.map(function (e) {
            return (function (e, t) {
              var n = t && t.byKey,
                a = {},
                s = (e = e.replace("++", "+add")).split("+"),
                o = s.length;
              for (var c in r) a[r[c]] = !1;
              var u = !0,
                d = !1,
                h = void 0;
              try {
                for (
                  var p, f = s[Symbol.iterator]();
                  !(u = (p = f.next()).done);
                  u = !0
                ) {
                  var m,
                    E = p.value,
                    T = E.endsWith("?") && E.length > 1;
                  T && (E = E.slice(0, -1));
                  var g = l(E),
                    _ = r[g];
                  (1 !== o && _) ||
                    (n
                      ? (a.key = g)
                      : (a.which =
                          ((m = E),
                          i[(m = l(m))] || m.toUpperCase().charCodeAt(0)))),
                    _ && (a[_] = !T || null);
                }
              } catch (e) {
                (d = !0), (h = e);
              } finally {
                try {
                  !u && f.return && f.return();
                } finally {
                  if (d) throw h;
                }
              }
              return a;
            })(e, t);
          }),
          s = function (e) {
            return a.some(function (t) {
              return (function (e, t) {
                for (var n in e) {
                  var r = e[n],
                    a = void 0;
                  if (
                    null != r &&
                    (null !=
                      (a =
                        "key" === n && null != t.key
                          ? t.key.toLowerCase()
                          : "which" === n
                          ? 91 === r && 93 === t.which
                            ? 91
                            : t.which
                          : t[n]) ||
                      !1 !== r) &&
                    a !== r
                  )
                    return !1;
                }
                return !0;
              })(t, e);
            });
          };
        return null == n ? s : s(n);
      }
      function l(e) {
        return (e = a[(e = e.toLowerCase())] || e);
      }
      (t.ZP = o),
        (t.TB = function (e, t) {
          return o(e, { byKey: !0 }, t);
        });
    },
    1880: function (e, t, n) {
      "use strict";
      n.d(t, {
        QN: function () {
          return T;
        },
        RK: function () {
          return A;
        },
        h: function () {
          return _;
        },
      });
      var r = n(597),
        a = n(7458),
        i = n(2983),
        s = n(1441),
        o = n(9598);
      let l = {
        Swatch: "Swatch",
        File: "File",
        Typography: "Typography",
        PagePathnameSlice: "PagePathnameSlice",
        GlobalElement: "GlobalElement",
        LocalizedGlobalElement: "LocalizedGlobalElement",
        Table: "Table",
        Snippet: "Snippet",
        Page: "Page",
        Site: "Site",
      };
      var c = n(628),
        u = n(5900);
      function d() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                Swatch: [],
                File: [],
                Typography: [],
                PagePathnameSlice: [],
                GlobalElement: [],
                Table: [],
                Snippet: [],
                Page: [],
                Site: [],
                LocalizedGlobalElement: [],
              };
        return new Map(
          Object.entries(e).map((e) => {
            let [t, n] = e;
            return [
              t,
              new Map(
                n.map((e) => {
                  let { id: t, value: n } = e;
                  return [t, n];
                })
              ),
            ];
          })
        );
      }
      function h(e, t, n) {
        var r;
        let a = null === (r = e.get(t)) || void 0 === r ? void 0 : r.get(n);
        return (null == a ? void 0 : a.__typename) === t ? a : null;
      }
      let p = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : d(),
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case u.MF.API_RESOURCE_FULFILLED: {
            let { resourceType: n, resourceId: r, resource: a } = t.payload;
            return new Map(e).set(n, new Map(e.get(n)).set(r, a));
          }
          case u.MF.CHANGE_API_RESOURCE: {
            let n = h(e, t.payload.resource.__typename, t.payload.resource.id);
            if ((0, c.Z)(n, t.payload.resource)) return e;
            return new Map(e).set(
              t.payload.resource.__typename,
              new Map(e.get(t.payload.resource.__typename)).set(
                t.payload.resource.id,
                t.payload.resource
              )
            );
          }
          case u.MF.EVICT_API_RESOURCE: {
            let [n, r] = t.payload.id.split(":");
            if (!(n in l)) return e;
            let a = new Map(e.get(n)),
              i = a.delete(r);
            return i ? new Map(e).set(n, a) : e;
          }
          default:
            return e;
        }
      };
      async function f(e) {
        var t;
        let n = await fetch(e, {
          headers: { "Content-Type": "application/json" },
        });
        if (404 === n.status) return null;
        if (!n.ok) throw Error(n.statusText);
        if (
          (null === (t = n.headers.get("content-type")) || void 0 === t
            ? void 0
            : t.includes("application/json")) !== !0
        )
          throw Error(
            'Expected JSON response from "'
              .concat(e, '" but got "')
              .concat(n.headers.get("content-type"), '"')
          );
        return n.json();
      }
      function m(e, t, n) {
        return async (r, a) => {
          var i, s;
          let o;
          let c = a();
          if (
            null !==
              (s =
                null === (i = c.get(e)) || void 0 === i ? void 0 : i.has(t)) &&
            void 0 !== s &&
            s
          )
            return h(c, e, t);
          switch (e) {
            case l.Swatch:
              o = await f("/api/makeswift/swatches/".concat(t));
              break;
            case l.File:
              o = await f("/api/makeswift/files/".concat(t));
              break;
            case l.Typography:
              o = await f("/api/makeswift/typographies/".concat(t));
              break;
            case l.GlobalElement:
              o = await f("/api/makeswift/global-elements/".concat(t));
              break;
            case l.LocalizedGlobalElement:
              if (null == n)
                throw Error(
                  "Locale is required to fetch LocalizedGlobalElement"
                );
              o = await f(
                "/api/makeswift/localized-global-elements/"
                  .concat(t, "/")
                  .concat(n)
              );
              break;
            case l.PagePathnameSlice: {
              let e = new URL(
                "/api/makeswift/page-pathname-slices/".concat(t),
                "http://n"
              );
              null != n && e.searchParams.set("locale", n.toString()),
                (o = await f(e.pathname + e.search));
              break;
            }
            case l.Table:
              o = await f("/api/makeswift/tables/".concat(t));
              break;
            default:
              o = null;
          }
          return r((0, u.ng)(e, t, o)), o;
        };
      }
      class E {
        async request(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = await fetch(this.endpoint, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ query: e, variables: t }),
            });
          if (!n.ok && 400 !== n.status)
            throw Error("".concat(n.status, " ").concat(n.statusText));
          let r = await n.json();
          if (null != r.errors)
            throw (
              (console.error(r),
              Error("GraphQL response contains errors, check the console."))
            );
          return r.data;
        }
        constructor(e) {
          (0, r.Z)(this, "endpoint", void 0), (this.endpoint = e);
        }
      }
      "\n  query IntrospectedResources($fileIds: [ID!]!, $tableIds: [ID!]!) {\n    files(ids: $fileIds) {\n      ...File\n    }\n\n    tables(ids: $tableIds) {\n      ...Table\n    }\n  }\n\n  "
        .concat(
          "\n  fragment File on File {\n    __typename\n    id\n    name\n    publicUrl: publicUrlV2\n    extension\n    dimensions {\n      width\n      height\n    }\n  }\n",
          "\n  "
        )
        .concat(
          "\n  fragment Table on Table {\n    __typename\n    id\n    name\n    columns {\n      __typename\n      id\n      name\n\n      ... on MultipleSelectTableColumn {\n        options {\n          id\n          name\n        }\n      }\n\n      ... on SingleSelectTableColumn {\n        options {\n          id\n          name\n        }\n      }\n    }\n  }\n",
          "\n"
        );
      class T {
        readSwatch(e) {
          return h(this.makeswiftApiClient.getState(), l.Swatch, e);
        }
        async fetchSwatch(e) {
          return await this.makeswiftApiClient.dispatch(m(l.Swatch, e));
        }
        readFile(e) {
          return h(this.makeswiftApiClient.getState(), l.File, e);
        }
        async fetchFile(e) {
          return await this.makeswiftApiClient.dispatch(m(l.File, e));
        }
        readTypography(e) {
          return h(this.makeswiftApiClient.getState(), l.Typography, e);
        }
        async fetchTypography(e) {
          return await this.makeswiftApiClient.dispatch(m(l.Typography, e));
        }
        readGlobalElement(e) {
          return h(this.makeswiftApiClient.getState(), l.GlobalElement, e);
        }
        async fetchGlobalElement(e) {
          return await this.makeswiftApiClient.dispatch(m(l.GlobalElement, e));
        }
        readLocalizedGlobalElement(e) {
          let t = this.getLocalizedResourceId(e);
          return null == t
            ? null
            : h(
                this.makeswiftApiClient.getState(),
                l.LocalizedGlobalElement,
                t
              );
        }
        async fetchLocalizedGlobalElement(e) {
          var t;
          let n = this.locale;
          if (null == n) return null;
          let r = null === this.getLocalizedResourceId(e);
          if (r) return null;
          let a = this.readLocalizedGlobalElement(e);
          if (a) return a;
          let i = await this.makeswiftApiClient.dispatch(
            m(l.LocalizedGlobalElement, e, n)
          );
          return (
            this.setLocalizedResourceId({
              resourceId: e,
              localizedResourceId:
                null !== (t = null == i ? void 0 : i.id) && void 0 !== t
                  ? t
                  : null,
            }),
            i
          );
        }
        readPagePathnameSlice(e) {
          return h(this.makeswiftApiClient.getState(), l.PagePathnameSlice, e);
        }
        async fetchPagePathnameSlice(e) {
          return await this.makeswiftApiClient.dispatch(
            m(l.PagePathnameSlice, e, this.locale)
          );
        }
        readTable(e) {
          return h(this.makeswiftApiClient.getState(), l.Table, e);
        }
        async fetchTable(e) {
          return await this.makeswiftApiClient.dispatch(m(l.Table, e));
        }
        async createTableRecord(e, t) {
          await this.graphqlClient.request(
            "\n  mutation CreateTableRecord($input: CreateTableRecordInput!) {\n    createTableRecord(input: $input) {\n      tableRecord {\n        id\n      }\n    }\n  }\n",
            { input: { data: { tableId: e, columns: t } } }
          );
        }
        readSite(e) {
          return h(this.makeswiftApiClient.getState(), l.Site, e);
        }
        readPage(e) {
          return h(this.makeswiftApiClient.getState(), l.Page, e);
        }
        readSnippet(e) {
          return h(this.makeswiftApiClient.getState(), l.Snippet, e);
        }
        getLocalizedResourceId(e) {
          var t;
          return null === (t = this.localizedResourcesMap) || void 0 === t
            ? void 0
            : t.get(e);
        }
        setLocalizedResourceId(e) {
          let { resourceId: t, localizedResourceId: n } = e;
          this.localizedResourcesMap.set(t, n);
        }
        constructor({
          uri: e,
          cacheData: t,
          localizedResourcesMap: n = {},
          locale: a,
        }) {
          (0, r.Z)(this, "graphqlClient", void 0),
            (0, r.Z)(this, "makeswiftApiClient", void 0),
            (0, r.Z)(this, "subscribe", void 0),
            (0, r.Z)(this, "localizedResourcesMap", void 0),
            (0, r.Z)(this, "locale", void 0),
            (this.graphqlClient = new E(e)),
            (this.makeswiftApiClient = (function (e) {
              let { serializedState: t } = e;
              return (0, s.MT)(p, d(t), (0, s.md)(o.Z));
            })({ serializedState: t })),
            (this.subscribe = this.makeswiftApiClient.subscribe),
            (this.localizedResourcesMap = new Map(Object.entries(n))),
            (this.locale = a);
        }
      }
      let g = (0, i.createContext)(
        new T({ uri: "https://api.makeswift.com/graphql" })
      );
      function _() {
        return (0, i.useContext)(g);
      }
      function A(e) {
        let { client: t, children: n } = e;
        return (0, a.jsx)(g.Provider, { value: t, children: n });
      }
    },
    8408: function (e, t, n) {
      "use strict";
      n.d(t, {
        IH: function () {
          return r;
        },
        Ot: function () {
          return o;
        },
        _h: function () {
          return a;
        },
        qt: function () {
          return i;
        },
        yb: function () {
          return l;
        },
        yj: function () {
          return s;
        },
      });
      let r = "none",
        a = 0,
        i = 0.75,
        s = "none",
        o = 0,
        l = 0;
    },
    9770: function (e, t, n) {
      "use strict";
      n.d(t, {
        Gc: function () {
          return c;
        },
        N3: function () {
          return a;
        },
        gC: function () {
          return o;
        },
        jw: function () {
          return i;
        },
        u8: function () {
          return s;
        },
        zt: function () {
          return u;
        },
      });
      var r = n(2983);
      let a = { LEFT: "left", CENTER: "center", RIGHT: "right" },
        i = Object.freeze({
          SQUARE: "square",
          ROUNDED: "rounded",
          PILL: "pill",
        }),
        s = Object.freeze({ SMALL: "small", MEDIUM: "medium", LARGE: "large" }),
        o = Object.freeze({ LIGHT: "light", DARK: "dark" }),
        l = (0, r.createContext)({});
      function c() {
        return (0, r.useContext)(l);
      }
      let { Provider: u } = l;
    },
    429: function (e, t, n) {
      "use strict";
      n.d(t, {
        P: function () {
          return o;
        },
      });
      var r = n(1748),
        a = n(6809),
        i = n(9840);
      function s(e, t) {
        let { color: n, ...r } = t;
        return {
          ...r,
          color: n && {
            alpha: n.alpha,
            swatch: e.filter(i.C).find((e) => e && e.id === n.swatchId),
          },
        };
      }
      function o(e) {
        let t = (0, r.U$)(e),
          n = (0, a.Jl)(t);
        return null == e
          ? null
          : e.map((e) => {
              let {
                value: {
                  borderTop: t,
                  borderBottom: r,
                  borderLeft: a,
                  borderRight: i,
                },
                ...o
              } = e;
              return {
                ...o,
                value: {
                  borderTop: t && s(n, t),
                  borderBottom: r && s(n, r),
                  borderLeft: a && s(n, a),
                  borderRight: i && s(n, i),
                },
              };
            });
      }
    },
    3811: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return s;
        },
      });
      var r = n(9840),
        a = n(1748),
        i = n(6809);
      function s(e) {
        let t = (0, a.zt)(e),
          n = (0, i.Jl)(t);
        return null == e
          ? null
          : e
              .map((e) => {
                let { value: t, ...r } = e,
                  { swatchId: a, alpha: i } = t,
                  s = n.find((e) => e && e.id === a);
                return null == s
                  ? null
                  : { ...r, value: { swatch: s, alpha: i } };
              })
              .filter(r.C);
      }
    },
    179: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return o;
        },
      });
      var r = n(7458),
        a = n(2983),
        i = n(4483);
      function s(e) {
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 20,
          height: 20,
          ...e,
          children: (0, r.jsx)("path", {
            fillRule: "evenodd",
            d: "M2.899 18H17.1a1.75 1.75 0 0 0 1.549-2.565L11.549 1.942c-.656-1.246-2.442-1.246-3.098 0L1.35 15.435A1.75 1.75 0 0 0 2.899 18M9 6a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm2.25 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0",
            clipRule: "evenodd",
          }),
        });
      }
      let o = (0, a.forwardRef)(function (e, t) {
        let { text: n } = e;
        return (0,
        r.jsxs)("div", { ref: t, className: (0, i.X)({ width: "100%", height: 54, backgroundColor: "#fcedf2", borderRadius: 6, padding: 16, display: "flex", alignItems: "center", gap: 8, color: "#c73e6d", fill: "currentColor", fontFamily: "Heebo, sans-serif", fontSize: 16 }), children: [(0, r.jsx)(s, {}), (0, r.jsx)("span", { children: n })] });
      });
    },
    6829: function (e, t, n) {
      "use strict";
      function r(e) {
        return e && e.swatch
          ? "hsla("
              .concat(e.swatch.hue, ",")
              .concat(e.swatch.saturation, "%,")
              .concat(e.swatch.lightness, "%,")
              .concat(e.alpha, ")")
          : "";
      }
      n.d(t, {
        U: function () {
          return r;
        },
      });
    },
    3107: function (e, t, n) {
      "use strict";
      n.d(t, {
        s: function () {
          return r;
        },
      });
      let r = (e, t) => {
        let n = e.reduce((e, t) => e.concat(t), []);
        if (t < 0 || t > n.length) throw RangeError();
        let r = t,
          a = 0;
        for (; a < e.length - 1 && r >= e[a].length; )
          (r -= e[a].length), (a += 1);
        return [a, r];
      };
    },
    9840: function (e, t, n) {
      "use strict";
      function r(e) {
        return null != e;
      }
      n.d(t, {
        C: function () {
          return r;
        },
      });
    },
    8245: function (e, t, n) {
      "use strict";
      n.d(t, {
        ob: function () {
          return T;
        },
        Kc: function () {
          return E;
        },
        $o: function () {
          return _;
        },
        kH: function () {
          return m;
        },
        iB: function () {
          return f;
        },
        $H: function () {
          return v;
        },
        CS: function () {
          return h;
        },
        QG: function () {
          return b;
        },
        NB: function () {
          return p;
        },
      });
      var r = n(8358),
        a = n(3107),
        i = n(5849),
        s = n(8603),
        o = n(6655),
        l = n(6829);
      function c(e) {
        if ("string" == typeof e) return e;
        if ("number" == typeof e) return "".concat(e, "px");
        let { width: t, color: n, style: r } = e;
        return ""
          .concat(null != t ? t : 0, "px ")
          .concat(r, " ")
          .concat(null != n ? (0, l.U)(n) : "black");
      }
      var u = n(9557);
      function d(e, t, n, a) {
        return (0, r.v_)(e, t, n, a).reduce((t, n) => {
          let { deviceId: a, value: i } = n,
            s = (0, r.iu)(e, a),
            o = (0, r.PR)(s);
          return { ...t, [o]: { ...t[o], ...i } };
        }, {});
      }
      function h(e, t, n) {
        return d((0, u.k)(), e, t, n);
      }
      function p() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (function (e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "100%";
          return {
            maxWidth: "100%",
            ...d(e, [t], (e) => {
              let [t = n] = e;
              return {
                width:
                  "object" == typeof t ? "".concat(t.value).concat(t.unit) : t,
              };
            }),
          };
        })((0, u.k)(), ...t);
      }
      function f() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (function (e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return d(e, [t], (e) => {
            let [t = {}] = e;
            return (0, i.v)(
              t,
              Object.assign(
                {
                  paddingTop: 0,
                  paddingRight: 0,
                  paddingBottom: 0,
                  paddingLeft: 0,
                },
                n
              )
            );
          });
        })((0, u.k)(), ...t);
      }
      function m() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (function (e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return d(e, [t], (e) => {
            let [t = {}] = e;
            return (0, s.K)(
              t,
              Object.assign(
                {
                  marginTop: 0,
                  marginRight: "auto",
                  marginBottom: 0,
                  marginLeft: "auto",
                },
                n
              )
            );
          });
        })((0, u.k)(), ...t);
      }
      function E() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (function (e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return d(e, [t], (e) => {
            let [t = {}] = e;
            return (function (e) {
              var t, n, r, a;
              let i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                s =
                  null !== (t = e.borderTopLeftRadius) && void 0 !== t
                    ? t
                    : i.borderTopLeftRadius,
                l =
                  null !== (n = e.borderTopRightRadius) && void 0 !== n
                    ? n
                    : i.borderTopRightRadius,
                c =
                  null !== (r = e.borderBottomRightRadius) && void 0 !== r
                    ? r
                    : i.borderBottomRightRadius,
                u =
                  null !== (a = e.borderBottomLeftRadius) && void 0 !== a
                    ? a
                    : i.borderBottomLeftRadius,
                d = {};
              return (
                null != s && (d.borderTopLeftRadius = (0, o.A)(s)),
                null != l && (d.borderTopRightRadius = (0, o.A)(l)),
                null != c && (d.borderBottomRightRadius = (0, o.A)(c)),
                null != u && (d.borderBottomLeftRadius = (0, o.A)(u)),
                d
              );
            })(
              t,
              Object.assign(
                {
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  borderBottomLeftRadius: 0,
                },
                n
              )
            );
          });
        })((0, u.k)(), ...t);
      }
      function T(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return h([e], (e) => {
          let [n = {}] = e;
          return (function (e) {
            var t, n, r, a;
            let i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              s = null !== (t = e.borderTop) && void 0 !== t ? t : i.borderTop,
              o =
                null !== (n = e.borderRight) && void 0 !== n
                  ? n
                  : i.borderRight,
              l =
                null !== (r = e.borderBottom) && void 0 !== r
                  ? r
                  : i.borderBottom,
              u =
                null !== (a = e.borderLeft) && void 0 !== a ? a : i.borderLeft,
              d = {};
            return (
              null != s && (d.borderTop = c(s)),
              null != o && (d.borderRight = c(o)),
              null != l && (d.borderBottom = c(l)),
              null != u && (d.borderLeft = c(u)),
              d
            );
          })(
            n,
            Object.assign(
              {
                borderTop: "0px solid black",
                borderRight: "0px solid black",
                borderBottom: "0px solid black",
                borderLeft: "0px solid black",
              },
              t
            )
          );
        });
      }
      let g = (e) => (t) => Math.floor(10 ** e * t) / 10 ** e;
      function _() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (function (e, t) {
          return {
            display: "flex",
            ...d(e, [t.grid, t.columnGap, t.rowGap], (e) => {
              let [
                  { spans: n, count: r } = { spans: [[12]], count: 12 },
                  i = { value: 0, unit: "px" },
                  s = { value: 0, unit: "px" },
                ] = e,
                [o, l] = (0, a.s)(n, t.index),
                c = 0 === l,
                u = l === n[o].length - 1,
                d = n[o][l],
                h = g(5)(d / r),
                p = ""
                  .concat(h, " * (100% + ")
                  .concat(i.value)
                  .concat(i.unit, ")"),
                f = ""
                  .concat(Number(c) + Number(u), " * ")
                  .concat(i.value)
                  .concat(i.unit, " / 2"),
                m = "calc("
                  .concat(p, " - ")
                  .concat(f, " - ")
                  .concat("0.01px", ")"),
                E = o === n.length - 1;
              return 0 === d
                ? { display: "none" }
                : {
                    flexBasis: m,
                    minWidth: m,
                    maxWidth: m,
                    paddingLeft: c ? 0 : "".concat(i.value / 2).concat(i.unit),
                    paddingRight: u ? 0 : "".concat(i.value / 2).concat(i.unit),
                    paddingTop:
                      0 === o ? 0 : "".concat(s.value / 2).concat(s.unit),
                    paddingBottom: E
                      ? 0
                      : "".concat(s.value / 2).concat(s.unit),
                  };
            }),
          };
        })((0, u.k)(), ...t);
      }
      let A = (e) =>
        e
          .map((e) => {
            let {
              payload: {
                inset: t,
                offsetX: n,
                offsetY: r,
                blurRadius: a,
                spreadRadius: i,
                color: s,
              },
            } = e;
            return ""
              .concat(t ? "inset " : "")
              .concat(n.toFixed(1), "px ")
              .concat(r.toFixed(1), "px ")
              .concat(a, "px ")
              .concat(i, "px ")
              .concat(null != s ? (0, l.U)(s) : "rgba(0,0,0,0.2)");
          })
          .filter(Boolean)
          .join();
      function v() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (function (e, t) {
          return d(e, [t], (e) => {
            let [t = []] = e;
            return { boxShadow: A(t) };
          });
        })((0, u.k)(), ...t);
      }
      function b() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (function (e, t) {
          return d(e, [t], (e) => {
            let [
                t = {
                  fontFamily: null,
                  letterSpacing: null,
                  fontSize: null,
                  fontWeight: null,
                  textTransform: [],
                  fontStyle: [],
                },
              ] = e,
              {
                fontSize: n,
                fontWeight: r,
                fontStyle: a = [],
                textTransform: i = [],
                letterSpacing: s,
                fontFamily: o,
              } = t;
            return {
              ...(null == o ? {} : { fontFamily: '"'.concat(o, '"') }),
              ...(null == r ? {} : { fontWeight: r }),
              ...(null == s ? {} : { letterSpacing: s }),
              ...(null == n
                ? {}
                : { fontSize: "".concat(n.value).concat(n.unit) }),
              ...(i.includes("uppercase")
                ? { textTransform: "uppercase" }
                : {}),
              ...(a.includes("italic") ? { fontStyle: "italic" } : {}),
            };
          });
        })((0, u.k)(), ...t);
      }
    },
    3184: function (e, t, n) {
      "use strict";
      n.d(t, {
        Qy: function () {
          return a;
        },
        jc: function () {
          return i;
        },
        pS: function () {
          return s;
        },
      });
      var r = n(4131);
      let a = r.i,
        i = "checkbox::v1",
        s = "makeswift::controls::checkbox";
    },
    6407: function (e, t, n) {
      "use strict";
      n.d(t, {
        df: function () {
          return o;
        },
        gd: function () {
          return s;
        },
      });
      var r = n(8051),
        a = n(4131);
      let i = a.i,
        s = "makeswift::controls::color";
      function o(e, t) {
        var n, a;
        return null == e
          ? e
          : (0, r.EQ)(e)
              .with({ [i]: "color::v1" }, (e) => ({
                ...e,
                swatchId:
                  null !==
                    (n = t.replacementContext.swatchIds.get(e.swatchId)) &&
                  void 0 !== n
                    ? n
                    : e.swatchId,
              }))
              .otherwise((e) => ({
                ...e,
                swatchId:
                  null !==
                    (a = t.replacementContext.swatchIds.get(e.swatchId)) &&
                  void 0 !== a
                    ? a
                    : e.swatchId,
              }));
      }
    },
    8427: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return r;
        },
      });
      let r = "makeswift::controls::combobox";
    },
    4131: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return r;
        },
      });
      let r = "@@makeswift/type";
    },
    5639: function (e, t, n) {
      "use strict";
      n.d(t, {
        JG: function () {
          return nu;
        },
        JC: function () {
          return nd;
        },
        UF: function () {
          return nh;
        },
      });
      var r,
        a,
        i,
        s,
        o,
        l,
        c,
        u,
        d,
        h,
        p,
        f,
        m,
        E,
        T,
        g,
        _,
        A,
        v,
        b,
        y,
        N,
        C,
        I,
        S,
        R,
        O,
        k,
        x,
        L,
        D,
        M,
        w = n(6407),
        P = n(988),
        B = n(5279),
        H = n(9227),
        U = n(2234),
        F = n(9904),
        G = n(9866),
        j = n(8251),
        Y = n(6318),
        V = n(9791),
        Z = n(7878),
        W = n(3318),
        q = n(5595),
        z = n(4334),
        K = n(1025),
        Q = n(2342),
        X = n(1494),
        $ = n(720),
        J = n.n($),
        ee = n(3057),
        et = n(3196);
      function en(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var er = new WeakMap(),
        ea = new WeakMap();
      class ei {}
      class es extends ei {
        constructor() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          super();
          var { offset: t, path: n } = e;
          (this.offset = t), (this.path = n);
        }
      }
      class eo extends ei {
        constructor() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          super();
          var { offset: t, path: n } = e;
          (this.offset = t), (this.path = n);
        }
      }
      var el = (e, t) => {
          var n = e.text.length;
          er.set(e, [n, t]);
        },
        ec = (e) => er.get(e),
        eu = (e, t) => {
          var n = e.text.length;
          ea.set(e, [n, t]);
        },
        ed = (e) => ea.get(e);
      function eh(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ep(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eh(Object(n), !0).forEach(function (t) {
                en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : eh(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var ef = new WeakSet(),
        em = (e) => {
          var t = [],
            n = (e) => {
              if (null != e) {
                var r = t[t.length - 1];
                if ("string" == typeof e) {
                  var a = { text: e };
                  ef.add(a), (e = a);
                }
                if (K.xv.isText(e)) {
                  var i = e;
                  K.xv.isText(r) &&
                  ef.has(r) &&
                  ef.has(i) &&
                  K.xv.equals(r, i, { loose: !0 })
                    ? (r.text += i.text)
                    : t.push(i);
                } else if (K.W_.isElement(e)) t.push(e);
                else if (e instanceof ei) {
                  var s = t[t.length - 1];
                  K.xv.isText(s) || (n(""), (s = t[t.length - 1])),
                    e instanceof es ? el(s, e) : e instanceof eo && eu(s, e);
                } else
                  throw Error(
                    "Unexpected hyperscript child object: ".concat(e)
                  );
              }
            };
          for (var r of e.flat(1 / 0)) n(r);
          return t;
        };
      function eE(e, t, n) {
        return ep(ep({}, t), {}, { children: em(n) });
      }
      function eT(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function eg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eT(Object(n), !0).forEach(function (t) {
                en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : eT(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var e_ = {
          anchor: function (e, t, n) {
            return new es(t);
          },
          cursor: function (e, t, n) {
            return [new es(t), new eo(t)];
          },
          editor:
            ((r = K.Jh),
            (e, t, n) => {
              var a,
                i = [];
              for (var s of n) K.e6.isRange(s) ? (a = s) : i.push(s);
              var o = em(i),
                l = {},
                c = r();
              for (var [u, d] of (Object.assign(c, t),
              (c.children = o),
              K.NB.texts(c))) {
                var h = ec(u),
                  p = ed(u);
                if (null != h) {
                  var [f] = h;
                  l.anchor = { path: d, offset: f };
                }
                if (null != p) {
                  var [m] = p;
                  l.focus = { path: d, offset: m };
                }
              }
              if (l.anchor && !l.focus)
                throw Error(
                  "Slate hyperscript ranges must have both `<anchor />` and `<focus />` defined if one is defined, but you only defined `<anchor />`. For collapsed selections, use `<cursor />` instead."
                );
              if (!l.anchor && l.focus)
                throw Error(
                  "Slate hyperscript ranges must have both `<anchor />` and `<focus />` defined if one is defined, but you only defined `<focus />`. For collapsed selections, use `<cursor />` instead."
                );
              return (
                null != a
                  ? (c.selection = a)
                  : K.e6.isRange(l) && (c.selection = l),
                c
              );
            }),
          element: eE,
          focus: function (e, t, n) {
            return new eo(t);
          },
          fragment: function (e, t, n) {
            return em(n);
          },
          selection: function (e, t, n) {
            var r = n.find((e) => e instanceof es),
              a = n.find((e) => e instanceof eo);
            if (!r || null == r.offset || null == r.path)
              throw Error(
                "The <selection> hyperscript tag must have an <anchor> tag as a child with `path` and `offset` attributes defined."
              );
            if (!a || null == a.offset || null == a.path)
              throw Error(
                "The <selection> hyperscript tag must have a <focus> tag as a child with `path` and `offset` attributes defined."
              );
            return ep(
              {
                anchor: { offset: r.offset, path: r.path },
                focus: { offset: a.offset, path: a.path },
              },
              t
            );
          },
          text: function (e, t, n) {
            var r = em(n);
            if (r.length > 1)
              throw Error(
                "The <text> hyperscript tag must only contain a single node's worth of children."
              );
            var [a] = r;
            if ((null == a && (a = { text: "" }), !K.xv.isText(a)))
              throw Error(
                "\n    The <text> hyperscript tag can only contain text content as children."
              );
            return ef.delete(a), Object.assign(a, t), a;
          },
        },
        eA = (e) =>
          function (t, n) {
            for (
              var r = arguments.length, a = Array(r > 2 ? r - 2 : 0), i = 2;
              i < r;
              i++
            )
              a[i - 2] = arguments[i];
            var s = e[t];
            if (!s)
              throw Error(
                "No hyperscript creator found for tag: <".concat(t, ">")
              );
            return (
              null == n && (n = {}),
              (0, et.P)(n) || ((a = [n].concat(a)), (n = {})),
              (a = a.filter((e) => Boolean(e)).flat()),
              s(t, n, a)
            );
          },
        ev = (e) => {
          var t = {};
          for (var n in e)
            !(function (n) {
              var r = e[n];
              if ("object" != typeof r)
                throw Error(
                  "Properties specified for a hyperscript shorthand should be an object, but for the custom element <"
                    .concat(n, ">  tag you passed: ")
                    .concat(r)
                );
              t[n] = (e, t, n) => eE("element", eg(eg({}, r), t), n);
            })(n);
          return t;
        },
        eb = (function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            { elements: t = {} } = e,
            n = ev(t);
          return eA(eg(eg(eg({}, e_), n), e.creators));
        })();
      let ey = new Set([
        65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678,
        327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823,
        655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502,
        917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111,
      ]);
      ((a = _ = _ || (_ = {}))[(a.EOF = -1)] = "EOF"),
        (a[(a.NULL = 0)] = "NULL"),
        (a[(a.TABULATION = 9)] = "TABULATION"),
        (a[(a.CARRIAGE_RETURN = 13)] = "CARRIAGE_RETURN"),
        (a[(a.LINE_FEED = 10)] = "LINE_FEED"),
        (a[(a.FORM_FEED = 12)] = "FORM_FEED"),
        (a[(a.SPACE = 32)] = "SPACE"),
        (a[(a.EXCLAMATION_MARK = 33)] = "EXCLAMATION_MARK"),
        (a[(a.QUOTATION_MARK = 34)] = "QUOTATION_MARK"),
        (a[(a.NUMBER_SIGN = 35)] = "NUMBER_SIGN"),
        (a[(a.AMPERSAND = 38)] = "AMPERSAND"),
        (a[(a.APOSTROPHE = 39)] = "APOSTROPHE"),
        (a[(a.HYPHEN_MINUS = 45)] = "HYPHEN_MINUS"),
        (a[(a.SOLIDUS = 47)] = "SOLIDUS"),
        (a[(a.DIGIT_0 = 48)] = "DIGIT_0"),
        (a[(a.DIGIT_9 = 57)] = "DIGIT_9"),
        (a[(a.SEMICOLON = 59)] = "SEMICOLON"),
        (a[(a.LESS_THAN_SIGN = 60)] = "LESS_THAN_SIGN"),
        (a[(a.EQUALS_SIGN = 61)] = "EQUALS_SIGN"),
        (a[(a.GREATER_THAN_SIGN = 62)] = "GREATER_THAN_SIGN"),
        (a[(a.QUESTION_MARK = 63)] = "QUESTION_MARK"),
        (a[(a.LATIN_CAPITAL_A = 65)] = "LATIN_CAPITAL_A"),
        (a[(a.LATIN_CAPITAL_F = 70)] = "LATIN_CAPITAL_F"),
        (a[(a.LATIN_CAPITAL_X = 88)] = "LATIN_CAPITAL_X"),
        (a[(a.LATIN_CAPITAL_Z = 90)] = "LATIN_CAPITAL_Z"),
        (a[(a.RIGHT_SQUARE_BRACKET = 93)] = "RIGHT_SQUARE_BRACKET"),
        (a[(a.GRAVE_ACCENT = 96)] = "GRAVE_ACCENT"),
        (a[(a.LATIN_SMALL_A = 97)] = "LATIN_SMALL_A"),
        (a[(a.LATIN_SMALL_F = 102)] = "LATIN_SMALL_F"),
        (a[(a.LATIN_SMALL_X = 120)] = "LATIN_SMALL_X"),
        (a[(a.LATIN_SMALL_Z = 122)] = "LATIN_SMALL_Z"),
        (a[(a.REPLACEMENT_CHARACTER = 65533)] = "REPLACEMENT_CHARACTER");
      let eN = {
        DASH_DASH: "--",
        CDATA_START: "[CDATA[",
        DOCTYPE: "doctype",
        SCRIPT: "script",
        PUBLIC: "public",
        SYSTEM: "system",
      };
      function eC(e) {
        return e >= 55296 && e <= 57343;
      }
      function eI(e) {
        return (
          (32 !== e &&
            10 !== e &&
            13 !== e &&
            9 !== e &&
            12 !== e &&
            e >= 1 &&
            e <= 31) ||
          (e >= 127 && e <= 159)
        );
      }
      function eS(e) {
        return (e >= 64976 && e <= 65007) || ey.has(e);
      }
      ((i = A = A || (A = {})).controlCharacterInInputStream =
        "control-character-in-input-stream"),
        (i.noncharacterInInputStream = "noncharacter-in-input-stream"),
        (i.surrogateInInputStream = "surrogate-in-input-stream"),
        (i.nonVoidHtmlElementStartTagWithTrailingSolidus =
          "non-void-html-element-start-tag-with-trailing-solidus"),
        (i.endTagWithAttributes = "end-tag-with-attributes"),
        (i.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus"),
        (i.unexpectedSolidusInTag = "unexpected-solidus-in-tag"),
        (i.unexpectedNullCharacter = "unexpected-null-character"),
        (i.unexpectedQuestionMarkInsteadOfTagName =
          "unexpected-question-mark-instead-of-tag-name"),
        (i.invalidFirstCharacterOfTagName =
          "invalid-first-character-of-tag-name"),
        (i.unexpectedEqualsSignBeforeAttributeName =
          "unexpected-equals-sign-before-attribute-name"),
        (i.missingEndTagName = "missing-end-tag-name"),
        (i.unexpectedCharacterInAttributeName =
          "unexpected-character-in-attribute-name"),
        (i.unknownNamedCharacterReference =
          "unknown-named-character-reference"),
        (i.missingSemicolonAfterCharacterReference =
          "missing-semicolon-after-character-reference"),
        (i.unexpectedCharacterAfterDoctypeSystemIdentifier =
          "unexpected-character-after-doctype-system-identifier"),
        (i.unexpectedCharacterInUnquotedAttributeValue =
          "unexpected-character-in-unquoted-attribute-value"),
        (i.eofBeforeTagName = "eof-before-tag-name"),
        (i.eofInTag = "eof-in-tag"),
        (i.missingAttributeValue = "missing-attribute-value"),
        (i.missingWhitespaceBetweenAttributes =
          "missing-whitespace-between-attributes"),
        (i.missingWhitespaceAfterDoctypePublicKeyword =
          "missing-whitespace-after-doctype-public-keyword"),
        (i.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers =
          "missing-whitespace-between-doctype-public-and-system-identifiers"),
        (i.missingWhitespaceAfterDoctypeSystemKeyword =
          "missing-whitespace-after-doctype-system-keyword"),
        (i.missingQuoteBeforeDoctypePublicIdentifier =
          "missing-quote-before-doctype-public-identifier"),
        (i.missingQuoteBeforeDoctypeSystemIdentifier =
          "missing-quote-before-doctype-system-identifier"),
        (i.missingDoctypePublicIdentifier =
          "missing-doctype-public-identifier"),
        (i.missingDoctypeSystemIdentifier =
          "missing-doctype-system-identifier"),
        (i.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier"),
        (i.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier"),
        (i.cdataInHtmlContent = "cdata-in-html-content"),
        (i.incorrectlyOpenedComment = "incorrectly-opened-comment"),
        (i.eofInScriptHtmlCommentLikeText =
          "eof-in-script-html-comment-like-text"),
        (i.eofInDoctype = "eof-in-doctype"),
        (i.nestedComment = "nested-comment"),
        (i.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment"),
        (i.eofInComment = "eof-in-comment"),
        (i.incorrectlyClosedComment = "incorrectly-closed-comment"),
        (i.eofInCdata = "eof-in-cdata"),
        (i.absenceOfDigitsInNumericCharacterReference =
          "absence-of-digits-in-numeric-character-reference"),
        (i.nullCharacterReference = "null-character-reference"),
        (i.surrogateCharacterReference = "surrogate-character-reference"),
        (i.characterReferenceOutsideUnicodeRange =
          "character-reference-outside-unicode-range"),
        (i.controlCharacterReference = "control-character-reference"),
        (i.noncharacterCharacterReference = "noncharacter-character-reference"),
        (i.missingWhitespaceBeforeDoctypeName =
          "missing-whitespace-before-doctype-name"),
        (i.missingDoctypeName = "missing-doctype-name"),
        (i.invalidCharacterSequenceAfterDoctypeName =
          "invalid-character-sequence-after-doctype-name"),
        (i.duplicateAttribute = "duplicate-attribute"),
        (i.nonConformingDoctype = "non-conforming-doctype"),
        (i.missingDoctype = "missing-doctype"),
        (i.misplacedDoctype = "misplaced-doctype"),
        (i.endTagWithoutMatchingOpenElement =
          "end-tag-without-matching-open-element"),
        (i.closingOfElementWithOpenChildElements =
          "closing-of-element-with-open-child-elements"),
        (i.disallowedContentInNoscriptInHead =
          "disallowed-content-in-noscript-in-head"),
        (i.openElementsLeftAfterEof = "open-elements-left-after-eof"),
        (i.abandonedHeadElementChild = "abandoned-head-element-child"),
        (i.misplacedStartTagForHeadElement =
          "misplaced-start-tag-for-head-element"),
        (i.nestedNoscriptInHead = "nested-noscript-in-head"),
        (i.eofInElementThatCanContainOnlyText =
          "eof-in-element-that-can-contain-only-text");
      class eR {
        constructor(e) {
          (this.handler = e),
            (this.html = ""),
            (this.pos = -1),
            (this.lastGapPos = -2),
            (this.gapStack = []),
            (this.skipNextNewLine = !1),
            (this.lastChunkWritten = !1),
            (this.endOfChunkHit = !1),
            (this.bufferWaterline = 65536),
            (this.isEol = !1),
            (this.lineStartPos = 0),
            (this.droppedBufferSize = 0),
            (this.line = 1),
            (this.lastErrOffset = -1);
        }
        get col() {
          return (
            this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos)
          );
        }
        get offset() {
          return this.droppedBufferSize + this.pos;
        }
        getError(e) {
          let { line: t, col: n, offset: r } = this;
          return {
            code: e,
            startLine: t,
            endLine: t,
            startCol: n,
            endCol: n,
            startOffset: r,
            endOffset: r,
          };
        }
        _err(e) {
          this.handler.onParseError &&
            this.lastErrOffset !== this.offset &&
            ((this.lastErrOffset = this.offset),
            this.handler.onParseError(this.getError(e)));
        }
        _addGap() {
          this.gapStack.push(this.lastGapPos), (this.lastGapPos = this.pos);
        }
        _processSurrogate(e) {
          if (this.pos !== this.html.length - 1) {
            let t = this.html.charCodeAt(this.pos + 1);
            if (t >= 56320 && t <= 57343)
              return this.pos++, this._addGap(), (e - 55296) * 1024 + 9216 + t;
          } else if (!this.lastChunkWritten)
            return (this.endOfChunkHit = !0), _.EOF;
          return this._err(A.surrogateInInputStream), e;
        }
        willDropParsedChunk() {
          return this.pos > this.bufferWaterline;
        }
        dropParsedChunk() {
          this.willDropParsedChunk() &&
            ((this.html = this.html.substring(this.pos)),
            (this.lineStartPos -= this.pos),
            (this.droppedBufferSize += this.pos),
            (this.pos = 0),
            (this.lastGapPos = -2),
            (this.gapStack.length = 0));
        }
        write(e, t) {
          this.html.length > 0 ? (this.html += e) : (this.html = e),
            (this.endOfChunkHit = !1),
            (this.lastChunkWritten = t);
        }
        insertHtmlAtCurrentPos(e) {
          (this.html =
            this.html.substring(0, this.pos + 1) +
            e +
            this.html.substring(this.pos + 1)),
            (this.endOfChunkHit = !1);
        }
        startsWith(e, t) {
          if (this.pos + e.length > this.html.length)
            return (this.endOfChunkHit = !this.lastChunkWritten), !1;
          if (t) return this.html.startsWith(e, this.pos);
          for (let t = 0; t < e.length; t++) {
            let n = 32 | this.html.charCodeAt(this.pos + t);
            if (n !== e.charCodeAt(t)) return !1;
          }
          return !0;
        }
        peek(e) {
          let t = this.pos + e;
          if (t >= this.html.length)
            return (this.endOfChunkHit = !this.lastChunkWritten), _.EOF;
          let n = this.html.charCodeAt(t);
          return n === _.CARRIAGE_RETURN ? _.LINE_FEED : n;
        }
        advance() {
          if (
            (this.pos++,
            this.isEol &&
              ((this.isEol = !1), this.line++, (this.lineStartPos = this.pos)),
            this.pos >= this.html.length)
          )
            return (this.endOfChunkHit = !this.lastChunkWritten), _.EOF;
          let e = this.html.charCodeAt(this.pos);
          if (e === _.CARRIAGE_RETURN)
            return (this.isEol = !0), (this.skipNextNewLine = !0), _.LINE_FEED;
          if (e === _.LINE_FEED && ((this.isEol = !0), this.skipNextNewLine))
            return (
              this.line--,
              (this.skipNextNewLine = !1),
              this._addGap(),
              this.advance()
            );
          (this.skipNextNewLine = !1), eC(e) && (e = this._processSurrogate(e));
          let t =
            null === this.handler.onParseError ||
            (e > 31 && e < 127) ||
            e === _.LINE_FEED ||
            e === _.CARRIAGE_RETURN ||
            (e > 159 && e < 64976);
          return t || this._checkForProblematicCharacters(e), e;
        }
        _checkForProblematicCharacters(e) {
          eI(e)
            ? this._err(A.controlCharacterInInputStream)
            : eS(e) && this._err(A.noncharacterInInputStream);
        }
        retreat(e) {
          for (this.pos -= e; this.pos < this.lastGapPos; )
            (this.lastGapPos = this.gapStack.pop()), this.pos--;
          this.isEol = !1;
        }
      }
      function eO(e, t) {
        for (let n = e.attrs.length - 1; n >= 0; n--)
          if (e.attrs[n].name === t) return e.attrs[n].value;
        return null;
      }
      ((s = v = v || (v = {}))[(s.CHARACTER = 0)] = "CHARACTER"),
        (s[(s.NULL_CHARACTER = 1)] = "NULL_CHARACTER"),
        (s[(s.WHITESPACE_CHARACTER = 2)] = "WHITESPACE_CHARACTER"),
        (s[(s.START_TAG = 3)] = "START_TAG"),
        (s[(s.END_TAG = 4)] = "END_TAG"),
        (s[(s.COMMENT = 5)] = "COMMENT"),
        (s[(s.DOCTYPE = 6)] = "DOCTYPE"),
        (s[(s.EOF = 7)] = "EOF"),
        (s[(s.HIBERNATION = 8)] = "HIBERNATION");
      var ek = new Uint16Array(
          'ᵁ<\xd5ıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\x00\x00\x00\x00\x00\x00ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms\x7f\x84\x8b\x90\x95\x98\xa6\xb3\xb9\xc8\xcflig耻\xc6䃆P耻&䀦cute耻\xc1䃁reve;䄂Āiyx}rc耻\xc2䃂;䐐r;쀀\ud835\udd04rave耻\xc0䃀pha;䎑acr;䄀d;橓Āgp\x9d\xa1on;䄄f;쀀\ud835\udd38plyFunction;恡ing耻\xc5䃅Ācs\xbe\xc3r;쀀\ud835\udc9cign;扔ilde耻\xc3䃃ml耻\xc4䃄Ѐaceforsu\xe5\xfb\xfeėĜĢħĪĀcr\xea\xf2kslash;或Ŷ\xf6\xf8;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀\ud835\udd05pf;쀀\ud835\udd39eve;䋘c\xf2ēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻\xa9䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻\xc7䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷\xf2ſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀\ud835\udc9epĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀\ud835\udd07Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\x00\x00\x00͔͂\x00Ѕf;쀀\ud835\udd3bƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegra\xecȹoɴ͹\x00\x00ͻ\xbb͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔e\xe5ˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\x00\x00ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\x00ц\x00ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\x00ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀\ud835\udc9frok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻\xd0䃐cute耻\xc9䃉ƀaiyӒӗӜron;䄚rc耻\xca䃊;䐭ot;䄖r;쀀\ud835\udd08rave耻\xc8䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\x00\x00ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀\ud835\udd3csilon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻\xcb䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀\ud835\udd09lledɓ֗\x00\x00֣mallSquare;旼erySmallSquare;斪Ͱֺ\x00ֿ\x00\x00ׄf;쀀\ud835\udd3dAll;戀riertrf;愱c\xf2׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀\ud835\udd0a;拙pf;쀀\ud835\udd3eeater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀\ud835\udca2;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\x00ڲf;愍izontalLine;攀Āctۃۅ\xf2کrok;䄦mpńېۘownHum\xf0įqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻\xcd䃍Āiyܓܘrc耻\xce䃎;䐘ot;䄰r;愑rave耻\xcc䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lie\xf3ϝǴ݉\x00ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀\ud835\udd40a;䎙cr;愐ilde;䄨ǫޚ\x00ޞcy;䐆l耻\xcf䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀\ud835\udd0dpf;쀀\ud835\udd41ǣ߇\x00ߌr;쀀\ud835\udca5rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀\ud835\udd0epf;쀀\ud835\udd42cr;쀀\ud835\udca6րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\x00ࣃbleBracket;柦nǔࣈ\x00࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ight\xe1Μs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀\ud835\udd0fĀ;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊight\xe1οight\xe1ϊf;쀀\ud835\udd43erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂ\xf2ࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀\ud835\udd10nusPlus;戓pf;쀀\ud835\udd44c\xf2੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘\xeb૙eryThi\xee૙tedĀGL૸ଆreaterGreate\xf2ٳessLes\xf3ੈLine;䀊r;쀀\ud835\udd11ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀\ud835\udca9ilde耻\xd1䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻\xd3䃓Āiy෎ීrc耻\xd4䃔;䐞blac;䅐r;쀀\ud835\udd12rave耻\xd2䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀\ud835\udd46enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀\ud835\udcaaash耻\xd8䃘iŬื฼de耻\xd5䃕es;樷ml耻\xd6䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀\ud835\udd13i;䎦;䎠usMinus;䂱Āipຢອncareplan\xe5ڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀\ud835\udcab;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀\ud835\udd14pf;愚cr;쀀\ud835\udcac؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻\xae䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r\xbbཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\x00စbleBracket;柧nǔည\x00နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀\ud835\udd16ortȀDLRUᄪᄴᄾᅉownArrow\xbbОeftArrow\xbb࢚ightArrow\xbb࿝pArrow;憑gma;䎣allCircle;战pf;쀀\ud835\udd4aɲᅭ\x00\x00ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀\ud835\udcaear;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Th\xe1ྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et\xbbሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻\xde䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀\ud835\udd17Āeiቻ኉ǲኀ\x00ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀\ud835\udd4bipleDot;惛Āctዖዛr;쀀\ud835\udcafrok;䅦ૡዷጎጚጦ\x00ጬጱ\x00\x00\x00\x00\x00ጸጽ፷ᎅ\x00᏿ᐄᐊᐐĀcrዻጁute耻\xda䃚rĀ;oጇገ憟cir;楉rǣጓ\x00጖y;䐎ve;䅬Āiyጞጣrc耻\xdb䃛;䐣blac;䅰r;쀀\ud835\udd18rave耻\xd9䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀\ud835\udd4cЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥own\xe1ϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀\ud835\udcb0ilde;䅨ml耻\xdc䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀\ud835\udd19pf;쀀\ud835\udd4dcr;쀀\ud835\udcb1dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀\ud835\udd1apf;쀀\ud835\udd4ecr;쀀\ud835\udcb2Ȁfiosᓋᓐᓒᓘr;쀀\ud835\udd1b;䎞pf;쀀\ud835\udd4fcr;쀀\ud835\udcb3ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻\xdd䃝Āiyᔉᔍrc;䅶;䐫r;쀀\ud835\udd1cpf;쀀\ud835\udd50cr;쀀\ud835\udcb4ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\x00ᕛoWidt\xe8૙a;䎖r;愨pf;愤cr;쀀\ud835\udcb5௡ᖃᖊᖐ\x00ᖰᖶᖿ\x00\x00\x00\x00ᗆᗛᗫᙟ᙭\x00ᚕ᚛ᚲᚹ\x00ᚾcute耻\xe1䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻\xe2䃢te肻\xb4̆;䐰lig耻\xe6䃦Ā;r\xb2ᖺ;쀀\ud835\udd1erave耻\xe0䃠ĀepᗊᗖĀfpᗏᗔsym;愵\xe8ᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\x00\x00ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e\xbbᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢\xbb\xb9arr;捼Āgpᙣᙧon;䄅f;쀀\ud835\udd52΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒ\xf1ᚃing耻\xe5䃥ƀctyᚡᚦᚨr;쀀\ud835\udcb6;䀪mpĀ;e዁ᚯ\xf1ʈilde耻\xe3䃣ml耻\xe4䃤Āciᛂᛈonin\xf4ɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e\xbbᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰s\xe9ᜌno\xf5ēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀\ud835\udd1fg΀costuvwឍឝឳេ៕៛៞ƀaiuបពរ\xf0ݠrc;旯p\xbb፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\x00\x00ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄e\xe5ᑄ\xe5ᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\x00ᠳƲᠯ\x00ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀\ud835\udd53Ā;tᏋᡣom\xbbᏌtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻\xa6䂦Ȁceioᥑᥖᥚᥠr;쀀\ud835\udcb7mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t\xbb᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\x00᧨ᨑᨕᨲ\x00ᨷᩐ\x00\x00᪴\x00\x00᫁\x00\x00ᬡᬮ᭍᭒\x00᯽\x00ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁\xeeړȀaeiu᧰᧻ᨁᨅǰ᧵\x00᧸s;橍on;䄍dil耻\xe7䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻\xb8ƭptyv;榲t脀\xa2;eᨭᨮ䂢r\xe4Ʋr;쀀\ud835\udd20ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark\xbbᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\x00\x00᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟\xbbཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it\xbb᪼ˬ᫇᫔᫺\x00ᬊonĀ;eᫍᫎ䀺Ā;q\xc7\xc6ɭ᫙\x00\x00᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁\xeeᅠeĀmx᫱᫶ent\xbb᫩e\xf3ɍǧ᫾\x00ᬇĀ;dኻᬂot;橭n\xf4Ɇƀfryᬐᬔᬗ;쀀\ud835\udd54o\xe4ɔ脀\xa9;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀\ud835\udcb8Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\x00\x00᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\x00\x00ᯒre\xe3᭳u\xe3᭵ee;拎edge;拏en耻\xa4䂤earrowĀlrᯮ᯳eft\xbbᮀight\xbbᮽe\xe4ᯝĀciᰁᰇonin\xf4Ƿnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍r\xf2΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸\xf2ᄳhĀ;vᱚᱛ怐\xbbऊūᱡᱧarow;椏a\xe3̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻\xb0䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀\ud835\udd21arĀlrᲳᲵ\xbbࣜ\xbbသʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀\xf7;o᳧ᳰntimes;拇n\xf8᳷cy;䑒cɯᴆ\x00\x00ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀\ud835\udd55ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedg\xe5\xfanƀadhᄮᵝᵧownarrow\xf3ᲃarpoonĀlrᵲᵶef\xf4Ჴigh\xf4ᲶŢᵿᶅkaro\xf7གɯᶊ\x00\x00ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀\ud835\udcb9;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃r\xf2Щa\xf2ྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴo\xf4ᲉĀcsḎḔute耻\xe9䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻\xea䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀\ud835\udd22ƀ;rsṐṑṗ檚ave耻\xe8䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et\xbbẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀\ud835\udd56ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on\xbbớ;䏵ȀcsuvỪỳἋἣĀioữḱrc\xbbḮɩỹ\x00\x00ỻ\xedՈantĀglἂἆtr\xbbṝess\xbbṺƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯o\xf4͒ĀahὉὋ;䎷耻\xf0䃰Āmrὓὗl耻\xeb䃫o;悬ƀcipὡὤὧl;䀡s\xf4ծĀeoὬὴctatio\xeeՙnential\xe5չৡᾒ\x00ᾞ\x00ᾡᾧ\x00\x00ῆῌ\x00ΐ\x00ῦῪ \x00 ⁚llingdotse\xf1Ṅy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\x00\x00᾽g;耀ﬀig;耀ﬄ;쀀\ud835\udd23lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\x00ῳf;쀀\ud835\udd57ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\x00⁐β•‥‧‪‬\x00‮耻\xbd䂽;慓耻\xbc䂼;慕;慙;慛Ƴ‴\x00‶;慔;慖ʴ‾⁁\x00\x00⁃耻\xbe䂾;慗;慜5;慘ƶ⁌\x00⁎;慚;慝8;慞l;恄wn;挢cr;쀀\ud835\udcbbࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lan\xf4٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀\ud835\udd24Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox\xbbℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀\ud835\udd58Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\x00↎pro\xf8₞r;楸qĀlqؿ↖les\xf3₈i\xed٫Āen↣↭rtneqq;쀀≩︀\xc5↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽r\xf2ΠȀilmr⇐⇔⇗⇛rs\xf0ᒄf\xbb․il\xf4کĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it\xbb∊lip;怦con;抹r;쀀\ud835\udd25sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀\ud835\udd59bar;怕ƀclt≯≴≸r;쀀\ud835\udcbdas\xe8⇴rok;䄧Ābp⊂⊇ull;恃hen\xbbᱛૡ⊣\x00⊪\x00⊸⋅⋎\x00⋕⋳\x00\x00⋸⌢⍧⍢⍿\x00⎆⎪⎴cute耻\xed䃭ƀ;iyݱ⊰⊵rc耻\xee䃮;䐸Ācx⊼⊿y;䐵cl耻\xa1䂡ĀfrΟ⋉;쀀\ud835\udd26rave耻\xec䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓in\xe5ގar\xf4ܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝do\xf4⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙er\xf3ᕣ\xe3⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀\ud835\udd5aa;䎹uest耻\xbf䂿Āci⎊⎏r;쀀\ud835\udcbenʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\x00⎼cy;䑖l耻\xef䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀\ud835\udd27ath;䈷pf;쀀\ud835\udd5bǣ⏬\x00⏱r;쀀\ud835\udcbfrcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀\ud835\udd28reen;䄸cy;䑅cy;䑜pf;쀀\ud835\udd5ccr;쀀\ud835\udcc0஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼r\xf2৆\xf2Εail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\x00⒪\x00⒱\x00\x00\x00\x00\x00⒵Ⓔ\x00ⓆⓈⓍ\x00⓹ute;䄺mptyv;榴ra\xeeࡌbda;䎻gƀ;dlࢎⓁⓃ;榑\xe5ࢎ;檅uo耻\xab䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝\xeb≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼\xecࢰ\xe2┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□a\xe9⓶arpoonĀdu▯▴own\xbbњp\xbb०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoon\xf3྘quigarro\xf7⇰hreetimes;拋ƀ;qs▋ও◺lan\xf4বʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋ppro\xf8Ⓠot;拖qĀgq♃♅\xf4উgt\xf2⒌\xf4ছi\xedলƀilr♕࣡♚sht;楼;쀀\ud835\udd29Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖r\xf2◁orne\xf2ᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che\xbb⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox\xbb⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽r\xebࣁgƀlmr⛿✍✔eftĀar০✇ight\xe1৲apsto;柼ight\xe1৽parrowĀlr✥✩ef\xf4⓭ight;憬ƀafl✶✹✽r;榅;쀀\ud835\udd5dus;樭imes;樴š❋❏st;戗\xe1ፎƀ;ef❗❘᠀旊nge\xbb❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇r\xf2ࢨorne\xf2ᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀\ud835\udcc1mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹re\xe5◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀\xc5⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻\xaf䂯Āet⡗⡙;時Ā;e⡞⡟朠se\xbb⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻ow\xeeҌef\xf4ए\xf0Ꮡker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle\xbbᘦr;쀀\ud835\udd2ao;愧ƀcdn⢯⢴⣉ro耻\xb5䂵Ȁ;acdᑤ⢽⣀⣄s\xf4ᚧir;櫰ot肻\xb7Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛\xf2−\xf0ઁĀdp⣩⣮els;抧f;쀀\ud835\udd5eĀct⣸⣽r;쀀\ud835\udcc2pos\xbbᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la\xbb˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉ro\xf8඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\x00⧣p肻\xa0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\x00⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸ui\xf6ୣĀei⩊⩎ar;椨\xed஘istĀ;s஠டr;쀀\ud835\udd2bȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lan\xf4௢i\xed௪Ā;rஶ⪁\xbbஷƀAap⪊⪍⪑r\xf2⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹r\xf2⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro\xf7⫁ightarro\xf7⪐ƀ;qs఻⪺⫪lan\xf4ౕĀ;sౕ⫴\xbbశi\xedౝĀ;rవ⫾iĀ;eచథi\xe4ඐĀpt⬌⬑f;쀀\ud835\udd5f膀\xac;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lle\xec୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳u\xe5ಥĀ;cಘ⭸Ā;eಒ⭽\xf1ಘȀAait⮈⮋⮝⮧r\xf2⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow\xbb⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉u\xe5൅;쀀\ud835\udcc3ortɭ⬅\x00\x00⯖ar\xe1⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭\xe5೸\xe5ഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗ\xf1സȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇ\xecௗlde耻\xf1䃱\xe7ృiangleĀlrⱒⱜeftĀ;eచⱚ\xf1దightĀ;eೋⱥ\xf1೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00ⴭ\x00ⴸⵈⵠⵥ⵲ⶄᬇ\x00\x00ⶍⶫ\x00ⷈⷎ\x00ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻\xf3䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻\xf4䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀\ud835\udd2cͯ⵹\x00\x00⵼\x00ⶂn;䋛ave耻\xf2䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨr\xf2᪀Āir⶝ⶠr;榾oss;榻n\xe5๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀\ud835\udd60ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨r\xf2᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f\xbbⷿ耻\xaa䂪耻\xba䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧\xf2⸁ash耻\xf8䃸l;折iŬⸯ⸴de耻\xf5䃵esĀ;aǛ⸺s;樶ml耻\xf6䃶bar;挽ૡ⹞\x00⹽\x00⺀⺝\x00⺢⺹\x00\x00⻋ຜ\x00⼓\x00\x00⼫⾼\x00⿈rȀ;astЃ⹧⹲຅脀\xb6;l⹭⹮䂶le\xecЃɩ⹸\x00\x00⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀\ud835\udd2dƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕ma\xf4੶ne;明ƀ;tv⺿⻀⻈䏀chfork\xbb´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎\xf6⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻\xb1ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀\ud835\udd61nd耻\xa3䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷u\xe5໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾ppro\xf8⽃urlye\xf1໙\xf1໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨i\xedໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺\xf0⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴\xef໻rel;抰Āci⿀⿅r;쀀\ud835\udcc5;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀\ud835\udd2epf;쀀\ud835\udd62rime;恗cr;쀀\ud835\udcc6ƀaeo⿸〉〓tĀei⿾々rnion\xf3ڰnt;樖stĀ;e【】䀿\xf1Ἑ\xf4༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがr\xf2Ⴓ\xf2ϝail;検ar\xf2ᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕i\xe3ᅮmptyv;榳gȀ;del࿑らるろ;榒;榥\xe5࿑uo耻\xbb䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞\xeb≝\xf0✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶al\xf3༞ƀabrョリヮr\xf2៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗\xec࿲\xe2ヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜn\xe5Ⴛar\xf4ྩt;断ƀilrㅩဣㅮsht;楽;쀀\ud835\udd2fĀaoㅷㆆrĀduㅽㅿ\xbbѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭa\xe9トarpoonĀduㆻㆿow\xeeㅾp\xbb႒eftĀah㇊㇐rrow\xf3࿪arpoon\xf3Ցightarrows;應quigarro\xf7ニhreetimes;拌g;䋚ingdotse\xf1ἲƀahm㈍㈐㈓r\xf2࿪a\xf2Ց;怏oustĀ;a㈞㈟掱che\xbb㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾r\xebဃƀafl㉇㉊㉎r;榆;쀀\ud835\udd63us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒ar\xf2㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀\ud835\udcc7Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠re\xe5ㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\x00㍺㎤\x00\x00㏬㏰\x00㐨㑈㑚㒭㒱㓊㓱\x00㘖\x00\x00㘳cute;䅛qu\xef➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\x00㋼;檸on;䅡u\xe5ᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓i\xedሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒\xeb∨Ā;oਸ਼਴t耻\xa7䂧i;䀻war;椩mĀin㍩\xf0nu\xf3\xf1t;朶rĀ;o㍶⁕쀀\ud835\udd30Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\x00\x00㎜i\xe4ᑤara\xec⹯耻\xad䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲ar\xf2ᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetm\xe9㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀\ud835\udd64aĀdr㑍ЂesĀ;u㑔㑕晠it\xbb㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍\xf1ᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝\xf1ᆮƀ;afᅻ㒦ְrť㒫ֱ\xbbᅼar\xf2ᅈȀcemt㒹㒾㓂㓅r;쀀\ud835\udcc8tm\xee\xf1i\xec㐕ar\xe6ᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psilo\xeeỠh\xe9⺯s\xbb⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦ppro\xf8㋺urlye\xf1ᇾ\xf1ᇳƀaes㖂㖈㌛ppro\xf8㌚q\xf1㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻\xb9䂹耻\xb2䂲耻\xb3䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨\xeb∮Ā;oਫ਩war;椪lig耻\xdf䃟௡㙑㙝㙠ዎ㙳㙹\x00㙾㛂\x00\x00\x00\x00\x00㛛㜃\x00㜉㝬\x00\x00\x00㞇ɲ㙖\x00\x00㙛get;挖;䏄r\xeb๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀\ud835\udd31Ȁeiko㚆㚝㚵㚼ǲ㚋\x00㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮ppro\xf8዁im\xbbኬs\xf0ኞĀas㚺㚮\xf0዁rn耻\xfe䃾Ǭ̟㛆⋧es膀\xd7;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀\xe1⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀\ud835\udd65rk;櫚\xe1㍢rime;怴ƀaip㜏㜒㝤d\xe5ቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own\xbbᶻeftĀ;e⠀㜾\xf1म;扜ightĀ;e㊪㝋\xf1ၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀\ud835\udcc9;䑆cy;䑛rok;䅧Āio㞋㞎x\xf4᝷headĀlr㞗㞠eftarro\xf7ࡏightarrow\xbbཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶r\xf2ϭar;楣Ācr㟜㟢ute耻\xfa䃺\xf2ᅐrǣ㟪\x00㟭y;䑞ve;䅭Āiy㟵㟺rc耻\xfb䃻;䑃ƀabh㠃㠆㠋r\xf2Ꭽlac;䅱a\xf2ᏃĀir㠓㠘sht;楾;쀀\ud835\udd32rave耻\xf9䃹š㠧㠱rĀlr㠬㠮\xbbॗ\xbbႃlk;斀Āct㠹㡍ɯ㠿\x00\x00㡊rnĀ;e㡅㡆挜r\xbb㡆op;挏ri;旸Āal㡖㡚cr;䅫肻\xa8͉Āgp㡢㡦on;䅳f;쀀\ud835\udd66̀adhlsuᅋ㡸㡽፲㢑㢠own\xe1ᎳarpoonĀlr㢈㢌ef\xf4㠭igh\xf4㠯iƀ;hl㢙㢚㢜䏅\xbbᏺon\xbb㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\x00\x00㣁rnĀ;e㢼㢽挝r\xbb㢽op;挎ng;䅯ri;旹cr;쀀\ud835\udccaƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨\xbb᠓Āam㣯㣲r\xf2㢨l耻\xfc䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠r\xf2ϷarĀ;v㤦㤧櫨;櫩as\xe8ϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖app\xe1␕othin\xe7ẖƀhir㓫⻈㥙op\xf4⾵Ā;hᎷ㥢\xefㆍĀiu㥩㥭gm\xe1㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟et\xe1㚜iangleĀlr㦪㦯eft\xbbथight\xbbၑy;䐲ash\xbbံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨa\xf2ᑩr;쀀\ud835\udd33tr\xe9㦮suĀbp㧯㧱\xbbജ\xbb൙pf;쀀\ud835\udd67ro\xf0໻tr\xe9㦴Ācu㨆㨋r;쀀\ud835\udccbĀbp㨐㨘nĀEe㦀㨖\xbb㥾nĀEe㦒㨞\xbb㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀\ud835\udd34pf;쀀\ud835\udd68Ā;eᑹ㩦at\xe8ᑹcr;쀀\ud835\udcccૣណ㪇\x00㪋\x00㪐㪛\x00\x00㪝㪨㪫㪯\x00\x00㫃㫎\x00㫘ៜ៟tr\xe9៑r;쀀\ud835\udd35ĀAa㪔㪗r\xf2σr\xf2৶;䎾ĀAa㪡㪤r\xf2θr\xf2৫a\xf0✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀\ud835\udd69im\xe5ឲĀAa㫇㫊r\xf2ώr\xf2ਁĀcq㫒ីr;쀀\ud835\udccdĀpt៖㫜r\xe9។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻\xfd䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻\xa5䂥r;쀀\ud835\udd36cy;䑗pf;쀀\ud835\udd6acr;쀀\ud835\udcceĀcm㬦㬩y;䑎l耻\xff䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡tr\xe6ᕟa;䎶r;쀀\ud835\udd37cy;䐶grarr;懝pf;쀀\ud835\udd6bcr;쀀\ud835\udccfĀjn㮅㮇;怍j;怌'
            .split("")
            .map((e) => e.charCodeAt(0))
        ),
        ex = new Uint16Array(
          "Ȁaglq	\x15\x18\x1bɭ\x0f\x00\x00\x12p;䀦os;䀧t;䀾t;䀼uot;䀢"
            .split("")
            .map((e) => e.charCodeAt(0))
        );
      let eL = new Map([
          [0, 65533],
          [128, 8364],
          [130, 8218],
          [131, 402],
          [132, 8222],
          [133, 8230],
          [134, 8224],
          [135, 8225],
          [136, 710],
          [137, 8240],
          [138, 352],
          [139, 8249],
          [140, 338],
          [142, 381],
          [145, 8216],
          [146, 8217],
          [147, 8220],
          [148, 8221],
          [149, 8226],
          [150, 8211],
          [151, 8212],
          [152, 732],
          [153, 8482],
          [154, 353],
          [155, 8250],
          [156, 339],
          [158, 382],
          [159, 376],
        ]),
        eD =
          null !== (b = String.fromCodePoint) && void 0 !== b
            ? b
            : function (e) {
                let t = "";
                return (
                  e > 65535 &&
                    ((e -= 65536),
                    (t += String.fromCharCode(((e >>> 10) & 1023) | 55296)),
                    (e = 56320 | (1023 & e))),
                  (t += String.fromCharCode(e))
                );
              };
      function eM(e) {
        return e >= y.ZERO && e <= y.NINE;
      }
      ((o = y || (y = {}))[(o.NUM = 35)] = "NUM"),
        (o[(o.SEMI = 59)] = "SEMI"),
        (o[(o.EQUALS = 61)] = "EQUALS"),
        (o[(o.ZERO = 48)] = "ZERO"),
        (o[(o.NINE = 57)] = "NINE"),
        (o[(o.LOWER_A = 97)] = "LOWER_A"),
        (o[(o.LOWER_F = 102)] = "LOWER_F"),
        (o[(o.LOWER_X = 120)] = "LOWER_X"),
        (o[(o.LOWER_Z = 122)] = "LOWER_Z"),
        (o[(o.UPPER_A = 65)] = "UPPER_A"),
        (o[(o.UPPER_F = 70)] = "UPPER_F"),
        (o[(o.UPPER_Z = 90)] = "UPPER_Z"),
        ((l = N || (N = {}))[(l.VALUE_LENGTH = 49152)] = "VALUE_LENGTH"),
        (l[(l.BRANCH_LENGTH = 16256)] = "BRANCH_LENGTH"),
        (l[(l.JUMP_TABLE = 127)] = "JUMP_TABLE"),
        ((c = C || (C = {}))[(c.EntityStart = 0)] = "EntityStart"),
        (c[(c.NumericStart = 1)] = "NumericStart"),
        (c[(c.NumericDecimal = 2)] = "NumericDecimal"),
        (c[(c.NumericHex = 3)] = "NumericHex"),
        (c[(c.NamedEntity = 4)] = "NamedEntity"),
        ((u = I || (I = {}))[(u.Legacy = 0)] = "Legacy"),
        (u[(u.Strict = 1)] = "Strict"),
        (u[(u.Attribute = 2)] = "Attribute");
      class ew {
        constructor(e, t, n) {
          (this.decodeTree = e),
            (this.emitCodePoint = t),
            (this.errors = n),
            (this.state = C.EntityStart),
            (this.consumed = 1),
            (this.result = 0),
            (this.treeIndex = 0),
            (this.excess = 1),
            (this.decodeMode = I.Strict);
        }
        startEntity(e) {
          (this.decodeMode = e),
            (this.state = C.EntityStart),
            (this.result = 0),
            (this.treeIndex = 0),
            (this.excess = 1),
            (this.consumed = 1);
        }
        write(e, t) {
          switch (this.state) {
            case C.EntityStart:
              if (e.charCodeAt(t) === y.NUM)
                return (
                  (this.state = C.NumericStart),
                  (this.consumed += 1),
                  this.stateNumericStart(e, t + 1)
                );
              return (this.state = C.NamedEntity), this.stateNamedEntity(e, t);
            case C.NumericStart:
              return this.stateNumericStart(e, t);
            case C.NumericDecimal:
              return this.stateNumericDecimal(e, t);
            case C.NumericHex:
              return this.stateNumericHex(e, t);
            case C.NamedEntity:
              return this.stateNamedEntity(e, t);
          }
        }
        stateNumericStart(e, t) {
          return t >= e.length
            ? -1
            : (32 | e.charCodeAt(t)) === y.LOWER_X
            ? ((this.state = C.NumericHex),
              (this.consumed += 1),
              this.stateNumericHex(e, t + 1))
            : ((this.state = C.NumericDecimal), this.stateNumericDecimal(e, t));
        }
        addToNumericResult(e, t, n, r) {
          if (t !== n) {
            let a = n - t;
            (this.result =
              this.result * Math.pow(r, a) + parseInt(e.substr(t, a), r)),
              (this.consumed += a);
          }
        }
        stateNumericHex(e, t) {
          let n = t;
          for (; t < e.length; ) {
            var r;
            let a = e.charCodeAt(t);
            if (
              !eM(a) &&
              (!((r = a) >= y.UPPER_A) || !(r <= y.UPPER_F)) &&
              (!(r >= y.LOWER_A) || !(r <= y.LOWER_F))
            )
              return (
                this.addToNumericResult(e, n, t, 16),
                this.emitNumericEntity(a, 3)
              );
            t += 1;
          }
          return this.addToNumericResult(e, n, t, 16), -1;
        }
        stateNumericDecimal(e, t) {
          let n = t;
          for (; t < e.length; ) {
            let r = e.charCodeAt(t);
            if (!eM(r))
              return (
                this.addToNumericResult(e, n, t, 10),
                this.emitNumericEntity(r, 2)
              );
            t += 1;
          }
          return this.addToNumericResult(e, n, t, 10), -1;
        }
        emitNumericEntity(e, t) {
          var n, r, a;
          if (this.consumed <= t)
            return (
              null === (n = this.errors) ||
                void 0 === n ||
                n.absenceOfDigitsInNumericCharacterReference(this.consumed),
              0
            );
          if (e === y.SEMI) this.consumed += 1;
          else if (this.decodeMode === I.Strict) return 0;
          return (
            this.emitCodePoint(
              ((r = this.result) >= 55296 && r <= 57343) || r > 1114111
                ? 65533
                : null !== (a = eL.get(r)) && void 0 !== a
                ? a
                : r,
              this.consumed
            ),
            this.errors &&
              (e !== y.SEMI &&
                this.errors.missingSemicolonAfterCharacterReference(),
              this.errors.validateNumericCharacterReference(this.result)),
            this.consumed
          );
        }
        stateNamedEntity(e, t) {
          let { decodeTree: n } = this,
            r = n[this.treeIndex],
            a = (r & N.VALUE_LENGTH) >> 14;
          for (; t < e.length; t++, this.excess++) {
            let i = e.charCodeAt(t);
            if (
              ((this.treeIndex = eB(n, r, this.treeIndex + Math.max(1, a), i)),
              this.treeIndex < 0)
            )
              return 0 === this.result ||
                (this.decodeMode === I.Attribute &&
                  (0 === a ||
                    (function (e) {
                      var t;
                      return (
                        e === y.EQUALS ||
                        ((t = e) >= y.UPPER_A && t <= y.UPPER_Z) ||
                        (t >= y.LOWER_A && t <= y.LOWER_Z) ||
                        eM(t)
                      );
                    })(i)))
                ? 0
                : this.emitNotTerminatedNamedEntity();
            if (0 != (a = ((r = n[this.treeIndex]) & N.VALUE_LENGTH) >> 14)) {
              if (i === y.SEMI)
                return this.emitNamedEntityData(
                  this.treeIndex,
                  a,
                  this.consumed + this.excess
                );
              this.decodeMode !== I.Strict &&
                ((this.result = this.treeIndex),
                (this.consumed += this.excess),
                (this.excess = 0));
            }
          }
          return -1;
        }
        emitNotTerminatedNamedEntity() {
          var e;
          let { result: t, decodeTree: n } = this,
            r = (n[t] & N.VALUE_LENGTH) >> 14;
          return (
            this.emitNamedEntityData(t, r, this.consumed),
            null === (e = this.errors) ||
              void 0 === e ||
              e.missingSemicolonAfterCharacterReference(),
            this.consumed
          );
        }
        emitNamedEntityData(e, t, n) {
          let { decodeTree: r } = this;
          return (
            this.emitCodePoint(1 === t ? r[e] & ~N.VALUE_LENGTH : r[e + 1], n),
            3 === t && this.emitCodePoint(r[e + 2], n),
            n
          );
        }
        end() {
          var e;
          switch (this.state) {
            case C.NamedEntity:
              return 0 !== this.result &&
                (this.decodeMode !== I.Attribute ||
                  this.result === this.treeIndex)
                ? this.emitNotTerminatedNamedEntity()
                : 0;
            case C.NumericDecimal:
              return this.emitNumericEntity(0, 2);
            case C.NumericHex:
              return this.emitNumericEntity(0, 3);
            case C.NumericStart:
              return (
                null === (e = this.errors) ||
                  void 0 === e ||
                  e.absenceOfDigitsInNumericCharacterReference(this.consumed),
                0
              );
            case C.EntityStart:
              return 0;
          }
        }
      }
      function eP(e) {
        let t = "",
          n = new ew(e, (e) => (t += eD(e)));
        return function (e, r) {
          let a = 0,
            i = 0;
          for (; (i = e.indexOf("&", i)) >= 0; ) {
            (t += e.slice(a, i)), n.startEntity(r);
            let s = n.write(e, i + 1);
            if (s < 0) {
              a = i + n.end();
              break;
            }
            (a = i + s), (i = 0 === s ? a + 1 : a);
          }
          let s = t + e.slice(a);
          return (t = ""), s;
        };
      }
      function eB(e, t, n, r) {
        let a = (t & N.BRANCH_LENGTH) >> 7,
          i = t & N.JUMP_TABLE;
        if (0 === a) return 0 !== i && r === i ? n : -1;
        if (i) {
          let t = r - i;
          return t < 0 || t >= a ? -1 : e[n + t] - 1;
        }
        let s = n,
          o = s + a - 1;
        for (; s <= o; ) {
          let t = (s + o) >>> 1,
            n = e[t];
          if (n < r) s = t + 1;
          else {
            if (!(n > r)) return e[t + a];
            o = t - 1;
          }
        }
        return -1;
      }
      eP(ek),
        eP(ex),
        ((d = S = S || (S = {})).HTML = "http://www.w3.org/1999/xhtml"),
        (d.MATHML = "http://www.w3.org/1998/Math/MathML"),
        (d.SVG = "http://www.w3.org/2000/svg"),
        (d.XLINK = "http://www.w3.org/1999/xlink"),
        (d.XML = "http://www.w3.org/XML/1998/namespace"),
        (d.XMLNS = "http://www.w3.org/2000/xmlns/"),
        ((h = R = R || (R = {})).TYPE = "type"),
        (h.ACTION = "action"),
        (h.ENCODING = "encoding"),
        (h.PROMPT = "prompt"),
        (h.NAME = "name"),
        (h.COLOR = "color"),
        (h.FACE = "face"),
        (h.SIZE = "size"),
        ((p = O = O || (O = {})).NO_QUIRKS = "no-quirks"),
        (p.QUIRKS = "quirks"),
        (p.LIMITED_QUIRKS = "limited-quirks"),
        ((f = k = k || (k = {})).A = "a"),
        (f.ADDRESS = "address"),
        (f.ANNOTATION_XML = "annotation-xml"),
        (f.APPLET = "applet"),
        (f.AREA = "area"),
        (f.ARTICLE = "article"),
        (f.ASIDE = "aside"),
        (f.B = "b"),
        (f.BASE = "base"),
        (f.BASEFONT = "basefont"),
        (f.BGSOUND = "bgsound"),
        (f.BIG = "big"),
        (f.BLOCKQUOTE = "blockquote"),
        (f.BODY = "body"),
        (f.BR = "br"),
        (f.BUTTON = "button"),
        (f.CAPTION = "caption"),
        (f.CENTER = "center"),
        (f.CODE = "code"),
        (f.COL = "col"),
        (f.COLGROUP = "colgroup"),
        (f.DD = "dd"),
        (f.DESC = "desc"),
        (f.DETAILS = "details"),
        (f.DIALOG = "dialog"),
        (f.DIR = "dir"),
        (f.DIV = "div"),
        (f.DL = "dl"),
        (f.DT = "dt"),
        (f.EM = "em"),
        (f.EMBED = "embed"),
        (f.FIELDSET = "fieldset"),
        (f.FIGCAPTION = "figcaption"),
        (f.FIGURE = "figure"),
        (f.FONT = "font"),
        (f.FOOTER = "footer"),
        (f.FOREIGN_OBJECT = "foreignObject"),
        (f.FORM = "form"),
        (f.FRAME = "frame"),
        (f.FRAMESET = "frameset"),
        (f.H1 = "h1"),
        (f.H2 = "h2"),
        (f.H3 = "h3"),
        (f.H4 = "h4"),
        (f.H5 = "h5"),
        (f.H6 = "h6"),
        (f.HEAD = "head"),
        (f.HEADER = "header"),
        (f.HGROUP = "hgroup"),
        (f.HR = "hr"),
        (f.HTML = "html"),
        (f.I = "i"),
        (f.IMG = "img"),
        (f.IMAGE = "image"),
        (f.INPUT = "input"),
        (f.IFRAME = "iframe"),
        (f.KEYGEN = "keygen"),
        (f.LABEL = "label"),
        (f.LI = "li"),
        (f.LINK = "link"),
        (f.LISTING = "listing"),
        (f.MAIN = "main"),
        (f.MALIGNMARK = "malignmark"),
        (f.MARQUEE = "marquee"),
        (f.MATH = "math"),
        (f.MENU = "menu"),
        (f.META = "meta"),
        (f.MGLYPH = "mglyph"),
        (f.MI = "mi"),
        (f.MO = "mo"),
        (f.MN = "mn"),
        (f.MS = "ms"),
        (f.MTEXT = "mtext"),
        (f.NAV = "nav"),
        (f.NOBR = "nobr"),
        (f.NOFRAMES = "noframes"),
        (f.NOEMBED = "noembed"),
        (f.NOSCRIPT = "noscript"),
        (f.OBJECT = "object"),
        (f.OL = "ol"),
        (f.OPTGROUP = "optgroup"),
        (f.OPTION = "option"),
        (f.P = "p"),
        (f.PARAM = "param"),
        (f.PLAINTEXT = "plaintext"),
        (f.PRE = "pre"),
        (f.RB = "rb"),
        (f.RP = "rp"),
        (f.RT = "rt"),
        (f.RTC = "rtc"),
        (f.RUBY = "ruby"),
        (f.S = "s"),
        (f.SCRIPT = "script"),
        (f.SECTION = "section"),
        (f.SELECT = "select"),
        (f.SOURCE = "source"),
        (f.SMALL = "small"),
        (f.SPAN = "span"),
        (f.STRIKE = "strike"),
        (f.STRONG = "strong"),
        (f.STYLE = "style"),
        (f.SUB = "sub"),
        (f.SUMMARY = "summary"),
        (f.SUP = "sup"),
        (f.TABLE = "table"),
        (f.TBODY = "tbody"),
        (f.TEMPLATE = "template"),
        (f.TEXTAREA = "textarea"),
        (f.TFOOT = "tfoot"),
        (f.TD = "td"),
        (f.TH = "th"),
        (f.THEAD = "thead"),
        (f.TITLE = "title"),
        (f.TR = "tr"),
        (f.TRACK = "track"),
        (f.TT = "tt"),
        (f.U = "u"),
        (f.UL = "ul"),
        (f.SVG = "svg"),
        (f.VAR = "var"),
        (f.WBR = "wbr"),
        (f.XMP = "xmp"),
        ((m = x = x || (x = {}))[(m.UNKNOWN = 0)] = "UNKNOWN"),
        (m[(m.A = 1)] = "A"),
        (m[(m.ADDRESS = 2)] = "ADDRESS"),
        (m[(m.ANNOTATION_XML = 3)] = "ANNOTATION_XML"),
        (m[(m.APPLET = 4)] = "APPLET"),
        (m[(m.AREA = 5)] = "AREA"),
        (m[(m.ARTICLE = 6)] = "ARTICLE"),
        (m[(m.ASIDE = 7)] = "ASIDE"),
        (m[(m.B = 8)] = "B"),
        (m[(m.BASE = 9)] = "BASE"),
        (m[(m.BASEFONT = 10)] = "BASEFONT"),
        (m[(m.BGSOUND = 11)] = "BGSOUND"),
        (m[(m.BIG = 12)] = "BIG"),
        (m[(m.BLOCKQUOTE = 13)] = "BLOCKQUOTE"),
        (m[(m.BODY = 14)] = "BODY"),
        (m[(m.BR = 15)] = "BR"),
        (m[(m.BUTTON = 16)] = "BUTTON"),
        (m[(m.CAPTION = 17)] = "CAPTION"),
        (m[(m.CENTER = 18)] = "CENTER"),
        (m[(m.CODE = 19)] = "CODE"),
        (m[(m.COL = 20)] = "COL"),
        (m[(m.COLGROUP = 21)] = "COLGROUP"),
        (m[(m.DD = 22)] = "DD"),
        (m[(m.DESC = 23)] = "DESC"),
        (m[(m.DETAILS = 24)] = "DETAILS"),
        (m[(m.DIALOG = 25)] = "DIALOG"),
        (m[(m.DIR = 26)] = "DIR"),
        (m[(m.DIV = 27)] = "DIV"),
        (m[(m.DL = 28)] = "DL"),
        (m[(m.DT = 29)] = "DT"),
        (m[(m.EM = 30)] = "EM"),
        (m[(m.EMBED = 31)] = "EMBED"),
        (m[(m.FIELDSET = 32)] = "FIELDSET"),
        (m[(m.FIGCAPTION = 33)] = "FIGCAPTION"),
        (m[(m.FIGURE = 34)] = "FIGURE"),
        (m[(m.FONT = 35)] = "FONT"),
        (m[(m.FOOTER = 36)] = "FOOTER"),
        (m[(m.FOREIGN_OBJECT = 37)] = "FOREIGN_OBJECT"),
        (m[(m.FORM = 38)] = "FORM"),
        (m[(m.FRAME = 39)] = "FRAME"),
        (m[(m.FRAMESET = 40)] = "FRAMESET"),
        (m[(m.H1 = 41)] = "H1"),
        (m[(m.H2 = 42)] = "H2"),
        (m[(m.H3 = 43)] = "H3"),
        (m[(m.H4 = 44)] = "H4"),
        (m[(m.H5 = 45)] = "H5"),
        (m[(m.H6 = 46)] = "H6"),
        (m[(m.HEAD = 47)] = "HEAD"),
        (m[(m.HEADER = 48)] = "HEADER"),
        (m[(m.HGROUP = 49)] = "HGROUP"),
        (m[(m.HR = 50)] = "HR"),
        (m[(m.HTML = 51)] = "HTML"),
        (m[(m.I = 52)] = "I"),
        (m[(m.IMG = 53)] = "IMG"),
        (m[(m.IMAGE = 54)] = "IMAGE"),
        (m[(m.INPUT = 55)] = "INPUT"),
        (m[(m.IFRAME = 56)] = "IFRAME"),
        (m[(m.KEYGEN = 57)] = "KEYGEN"),
        (m[(m.LABEL = 58)] = "LABEL"),
        (m[(m.LI = 59)] = "LI"),
        (m[(m.LINK = 60)] = "LINK"),
        (m[(m.LISTING = 61)] = "LISTING"),
        (m[(m.MAIN = 62)] = "MAIN"),
        (m[(m.MALIGNMARK = 63)] = "MALIGNMARK"),
        (m[(m.MARQUEE = 64)] = "MARQUEE"),
        (m[(m.MATH = 65)] = "MATH"),
        (m[(m.MENU = 66)] = "MENU"),
        (m[(m.META = 67)] = "META"),
        (m[(m.MGLYPH = 68)] = "MGLYPH"),
        (m[(m.MI = 69)] = "MI"),
        (m[(m.MO = 70)] = "MO"),
        (m[(m.MN = 71)] = "MN"),
        (m[(m.MS = 72)] = "MS"),
        (m[(m.MTEXT = 73)] = "MTEXT"),
        (m[(m.NAV = 74)] = "NAV"),
        (m[(m.NOBR = 75)] = "NOBR"),
        (m[(m.NOFRAMES = 76)] = "NOFRAMES"),
        (m[(m.NOEMBED = 77)] = "NOEMBED"),
        (m[(m.NOSCRIPT = 78)] = "NOSCRIPT"),
        (m[(m.OBJECT = 79)] = "OBJECT"),
        (m[(m.OL = 80)] = "OL"),
        (m[(m.OPTGROUP = 81)] = "OPTGROUP"),
        (m[(m.OPTION = 82)] = "OPTION"),
        (m[(m.P = 83)] = "P"),
        (m[(m.PARAM = 84)] = "PARAM"),
        (m[(m.PLAINTEXT = 85)] = "PLAINTEXT"),
        (m[(m.PRE = 86)] = "PRE"),
        (m[(m.RB = 87)] = "RB"),
        (m[(m.RP = 88)] = "RP"),
        (m[(m.RT = 89)] = "RT"),
        (m[(m.RTC = 90)] = "RTC"),
        (m[(m.RUBY = 91)] = "RUBY"),
        (m[(m.S = 92)] = "S"),
        (m[(m.SCRIPT = 93)] = "SCRIPT"),
        (m[(m.SECTION = 94)] = "SECTION"),
        (m[(m.SELECT = 95)] = "SELECT"),
        (m[(m.SOURCE = 96)] = "SOURCE"),
        (m[(m.SMALL = 97)] = "SMALL"),
        (m[(m.SPAN = 98)] = "SPAN"),
        (m[(m.STRIKE = 99)] = "STRIKE"),
        (m[(m.STRONG = 100)] = "STRONG"),
        (m[(m.STYLE = 101)] = "STYLE"),
        (m[(m.SUB = 102)] = "SUB"),
        (m[(m.SUMMARY = 103)] = "SUMMARY"),
        (m[(m.SUP = 104)] = "SUP"),
        (m[(m.TABLE = 105)] = "TABLE"),
        (m[(m.TBODY = 106)] = "TBODY"),
        (m[(m.TEMPLATE = 107)] = "TEMPLATE"),
        (m[(m.TEXTAREA = 108)] = "TEXTAREA"),
        (m[(m.TFOOT = 109)] = "TFOOT"),
        (m[(m.TD = 110)] = "TD"),
        (m[(m.TH = 111)] = "TH"),
        (m[(m.THEAD = 112)] = "THEAD"),
        (m[(m.TITLE = 113)] = "TITLE"),
        (m[(m.TR = 114)] = "TR"),
        (m[(m.TRACK = 115)] = "TRACK"),
        (m[(m.TT = 116)] = "TT"),
        (m[(m.U = 117)] = "U"),
        (m[(m.UL = 118)] = "UL"),
        (m[(m.SVG = 119)] = "SVG"),
        (m[(m.VAR = 120)] = "VAR"),
        (m[(m.WBR = 121)] = "WBR"),
        (m[(m.XMP = 122)] = "XMP");
      let eH = new Map([
        [k.A, x.A],
        [k.ADDRESS, x.ADDRESS],
        [k.ANNOTATION_XML, x.ANNOTATION_XML],
        [k.APPLET, x.APPLET],
        [k.AREA, x.AREA],
        [k.ARTICLE, x.ARTICLE],
        [k.ASIDE, x.ASIDE],
        [k.B, x.B],
        [k.BASE, x.BASE],
        [k.BASEFONT, x.BASEFONT],
        [k.BGSOUND, x.BGSOUND],
        [k.BIG, x.BIG],
        [k.BLOCKQUOTE, x.BLOCKQUOTE],
        [k.BODY, x.BODY],
        [k.BR, x.BR],
        [k.BUTTON, x.BUTTON],
        [k.CAPTION, x.CAPTION],
        [k.CENTER, x.CENTER],
        [k.CODE, x.CODE],
        [k.COL, x.COL],
        [k.COLGROUP, x.COLGROUP],
        [k.DD, x.DD],
        [k.DESC, x.DESC],
        [k.DETAILS, x.DETAILS],
        [k.DIALOG, x.DIALOG],
        [k.DIR, x.DIR],
        [k.DIV, x.DIV],
        [k.DL, x.DL],
        [k.DT, x.DT],
        [k.EM, x.EM],
        [k.EMBED, x.EMBED],
        [k.FIELDSET, x.FIELDSET],
        [k.FIGCAPTION, x.FIGCAPTION],
        [k.FIGURE, x.FIGURE],
        [k.FONT, x.FONT],
        [k.FOOTER, x.FOOTER],
        [k.FOREIGN_OBJECT, x.FOREIGN_OBJECT],
        [k.FORM, x.FORM],
        [k.FRAME, x.FRAME],
        [k.FRAMESET, x.FRAMESET],
        [k.H1, x.H1],
        [k.H2, x.H2],
        [k.H3, x.H3],
        [k.H4, x.H4],
        [k.H5, x.H5],
        [k.H6, x.H6],
        [k.HEAD, x.HEAD],
        [k.HEADER, x.HEADER],
        [k.HGROUP, x.HGROUP],
        [k.HR, x.HR],
        [k.HTML, x.HTML],
        [k.I, x.I],
        [k.IMG, x.IMG],
        [k.IMAGE, x.IMAGE],
        [k.INPUT, x.INPUT],
        [k.IFRAME, x.IFRAME],
        [k.KEYGEN, x.KEYGEN],
        [k.LABEL, x.LABEL],
        [k.LI, x.LI],
        [k.LINK, x.LINK],
        [k.LISTING, x.LISTING],
        [k.MAIN, x.MAIN],
        [k.MALIGNMARK, x.MALIGNMARK],
        [k.MARQUEE, x.MARQUEE],
        [k.MATH, x.MATH],
        [k.MENU, x.MENU],
        [k.META, x.META],
        [k.MGLYPH, x.MGLYPH],
        [k.MI, x.MI],
        [k.MO, x.MO],
        [k.MN, x.MN],
        [k.MS, x.MS],
        [k.MTEXT, x.MTEXT],
        [k.NAV, x.NAV],
        [k.NOBR, x.NOBR],
        [k.NOFRAMES, x.NOFRAMES],
        [k.NOEMBED, x.NOEMBED],
        [k.NOSCRIPT, x.NOSCRIPT],
        [k.OBJECT, x.OBJECT],
        [k.OL, x.OL],
        [k.OPTGROUP, x.OPTGROUP],
        [k.OPTION, x.OPTION],
        [k.P, x.P],
        [k.PARAM, x.PARAM],
        [k.PLAINTEXT, x.PLAINTEXT],
        [k.PRE, x.PRE],
        [k.RB, x.RB],
        [k.RP, x.RP],
        [k.RT, x.RT],
        [k.RTC, x.RTC],
        [k.RUBY, x.RUBY],
        [k.S, x.S],
        [k.SCRIPT, x.SCRIPT],
        [k.SECTION, x.SECTION],
        [k.SELECT, x.SELECT],
        [k.SOURCE, x.SOURCE],
        [k.SMALL, x.SMALL],
        [k.SPAN, x.SPAN],
        [k.STRIKE, x.STRIKE],
        [k.STRONG, x.STRONG],
        [k.STYLE, x.STYLE],
        [k.SUB, x.SUB],
        [k.SUMMARY, x.SUMMARY],
        [k.SUP, x.SUP],
        [k.TABLE, x.TABLE],
        [k.TBODY, x.TBODY],
        [k.TEMPLATE, x.TEMPLATE],
        [k.TEXTAREA, x.TEXTAREA],
        [k.TFOOT, x.TFOOT],
        [k.TD, x.TD],
        [k.TH, x.TH],
        [k.THEAD, x.THEAD],
        [k.TITLE, x.TITLE],
        [k.TR, x.TR],
        [k.TRACK, x.TRACK],
        [k.TT, x.TT],
        [k.U, x.U],
        [k.UL, x.UL],
        [k.SVG, x.SVG],
        [k.VAR, x.VAR],
        [k.WBR, x.WBR],
        [k.XMP, x.XMP],
      ]);
      function eU(e) {
        var t;
        return null !== (t = eH.get(e)) && void 0 !== t ? t : x.UNKNOWN;
      }
      let eF = x,
        eG = {
          [S.HTML]: new Set([
            eF.ADDRESS,
            eF.APPLET,
            eF.AREA,
            eF.ARTICLE,
            eF.ASIDE,
            eF.BASE,
            eF.BASEFONT,
            eF.BGSOUND,
            eF.BLOCKQUOTE,
            eF.BODY,
            eF.BR,
            eF.BUTTON,
            eF.CAPTION,
            eF.CENTER,
            eF.COL,
            eF.COLGROUP,
            eF.DD,
            eF.DETAILS,
            eF.DIR,
            eF.DIV,
            eF.DL,
            eF.DT,
            eF.EMBED,
            eF.FIELDSET,
            eF.FIGCAPTION,
            eF.FIGURE,
            eF.FOOTER,
            eF.FORM,
            eF.FRAME,
            eF.FRAMESET,
            eF.H1,
            eF.H2,
            eF.H3,
            eF.H4,
            eF.H5,
            eF.H6,
            eF.HEAD,
            eF.HEADER,
            eF.HGROUP,
            eF.HR,
            eF.HTML,
            eF.IFRAME,
            eF.IMG,
            eF.INPUT,
            eF.LI,
            eF.LINK,
            eF.LISTING,
            eF.MAIN,
            eF.MARQUEE,
            eF.MENU,
            eF.META,
            eF.NAV,
            eF.NOEMBED,
            eF.NOFRAMES,
            eF.NOSCRIPT,
            eF.OBJECT,
            eF.OL,
            eF.P,
            eF.PARAM,
            eF.PLAINTEXT,
            eF.PRE,
            eF.SCRIPT,
            eF.SECTION,
            eF.SELECT,
            eF.SOURCE,
            eF.STYLE,
            eF.SUMMARY,
            eF.TABLE,
            eF.TBODY,
            eF.TD,
            eF.TEMPLATE,
            eF.TEXTAREA,
            eF.TFOOT,
            eF.TH,
            eF.THEAD,
            eF.TITLE,
            eF.TR,
            eF.TRACK,
            eF.UL,
            eF.WBR,
            eF.XMP,
          ]),
          [S.MATHML]: new Set([
            eF.MI,
            eF.MO,
            eF.MN,
            eF.MS,
            eF.MTEXT,
            eF.ANNOTATION_XML,
          ]),
          [S.SVG]: new Set([eF.TITLE, eF.FOREIGN_OBJECT, eF.DESC]),
          [S.XLINK]: new Set(),
          [S.XML]: new Set(),
          [S.XMLNS]: new Set(),
        };
      function ej(e) {
        return (
          e === eF.H1 ||
          e === eF.H2 ||
          e === eF.H3 ||
          e === eF.H4 ||
          e === eF.H5 ||
          e === eF.H6
        );
      }
      k.STYLE, k.SCRIPT, k.XMP, k.IFRAME, k.NOEMBED, k.NOFRAMES, k.PLAINTEXT;
      let eY = new Map([
        [128, 8364],
        [130, 8218],
        [131, 402],
        [132, 8222],
        [133, 8230],
        [134, 8224],
        [135, 8225],
        [136, 710],
        [137, 8240],
        [138, 352],
        [139, 8249],
        [140, 338],
        [142, 381],
        [145, 8216],
        [146, 8217],
        [147, 8220],
        [148, 8221],
        [149, 8226],
        [150, 8211],
        [151, 8212],
        [152, 732],
        [153, 8482],
        [154, 353],
        [155, 8250],
        [156, 339],
        [158, 382],
        [159, 376],
      ]);
      ((E = L || (L = {}))[(E.DATA = 0)] = "DATA"),
        (E[(E.RCDATA = 1)] = "RCDATA"),
        (E[(E.RAWTEXT = 2)] = "RAWTEXT"),
        (E[(E.SCRIPT_DATA = 3)] = "SCRIPT_DATA"),
        (E[(E.PLAINTEXT = 4)] = "PLAINTEXT"),
        (E[(E.TAG_OPEN = 5)] = "TAG_OPEN"),
        (E[(E.END_TAG_OPEN = 6)] = "END_TAG_OPEN"),
        (E[(E.TAG_NAME = 7)] = "TAG_NAME"),
        (E[(E.RCDATA_LESS_THAN_SIGN = 8)] = "RCDATA_LESS_THAN_SIGN"),
        (E[(E.RCDATA_END_TAG_OPEN = 9)] = "RCDATA_END_TAG_OPEN"),
        (E[(E.RCDATA_END_TAG_NAME = 10)] = "RCDATA_END_TAG_NAME"),
        (E[(E.RAWTEXT_LESS_THAN_SIGN = 11)] = "RAWTEXT_LESS_THAN_SIGN"),
        (E[(E.RAWTEXT_END_TAG_OPEN = 12)] = "RAWTEXT_END_TAG_OPEN"),
        (E[(E.RAWTEXT_END_TAG_NAME = 13)] = "RAWTEXT_END_TAG_NAME"),
        (E[(E.SCRIPT_DATA_LESS_THAN_SIGN = 14)] = "SCRIPT_DATA_LESS_THAN_SIGN"),
        (E[(E.SCRIPT_DATA_END_TAG_OPEN = 15)] = "SCRIPT_DATA_END_TAG_OPEN"),
        (E[(E.SCRIPT_DATA_END_TAG_NAME = 16)] = "SCRIPT_DATA_END_TAG_NAME"),
        (E[(E.SCRIPT_DATA_ESCAPE_START = 17)] = "SCRIPT_DATA_ESCAPE_START"),
        (E[(E.SCRIPT_DATA_ESCAPE_START_DASH = 18)] =
          "SCRIPT_DATA_ESCAPE_START_DASH"),
        (E[(E.SCRIPT_DATA_ESCAPED = 19)] = "SCRIPT_DATA_ESCAPED"),
        (E[(E.SCRIPT_DATA_ESCAPED_DASH = 20)] = "SCRIPT_DATA_ESCAPED_DASH"),
        (E[(E.SCRIPT_DATA_ESCAPED_DASH_DASH = 21)] =
          "SCRIPT_DATA_ESCAPED_DASH_DASH"),
        (E[(E.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22)] =
          "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN"),
        (E[(E.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23)] =
          "SCRIPT_DATA_ESCAPED_END_TAG_OPEN"),
        (E[(E.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24)] =
          "SCRIPT_DATA_ESCAPED_END_TAG_NAME"),
        (E[(E.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25)] =
          "SCRIPT_DATA_DOUBLE_ESCAPE_START"),
        (E[(E.SCRIPT_DATA_DOUBLE_ESCAPED = 26)] = "SCRIPT_DATA_DOUBLE_ESCAPED"),
        (E[(E.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27)] =
          "SCRIPT_DATA_DOUBLE_ESCAPED_DASH"),
        (E[(E.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28)] =
          "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH"),
        (E[(E.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29)] =
          "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN"),
        (E[(E.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30)] =
          "SCRIPT_DATA_DOUBLE_ESCAPE_END"),
        (E[(E.BEFORE_ATTRIBUTE_NAME = 31)] = "BEFORE_ATTRIBUTE_NAME"),
        (E[(E.ATTRIBUTE_NAME = 32)] = "ATTRIBUTE_NAME"),
        (E[(E.AFTER_ATTRIBUTE_NAME = 33)] = "AFTER_ATTRIBUTE_NAME"),
        (E[(E.BEFORE_ATTRIBUTE_VALUE = 34)] = "BEFORE_ATTRIBUTE_VALUE"),
        (E[(E.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35)] =
          "ATTRIBUTE_VALUE_DOUBLE_QUOTED"),
        (E[(E.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36)] =
          "ATTRIBUTE_VALUE_SINGLE_QUOTED"),
        (E[(E.ATTRIBUTE_VALUE_UNQUOTED = 37)] = "ATTRIBUTE_VALUE_UNQUOTED"),
        (E[(E.AFTER_ATTRIBUTE_VALUE_QUOTED = 38)] =
          "AFTER_ATTRIBUTE_VALUE_QUOTED"),
        (E[(E.SELF_CLOSING_START_TAG = 39)] = "SELF_CLOSING_START_TAG"),
        (E[(E.BOGUS_COMMENT = 40)] = "BOGUS_COMMENT"),
        (E[(E.MARKUP_DECLARATION_OPEN = 41)] = "MARKUP_DECLARATION_OPEN"),
        (E[(E.COMMENT_START = 42)] = "COMMENT_START"),
        (E[(E.COMMENT_START_DASH = 43)] = "COMMENT_START_DASH"),
        (E[(E.COMMENT = 44)] = "COMMENT"),
        (E[(E.COMMENT_LESS_THAN_SIGN = 45)] = "COMMENT_LESS_THAN_SIGN"),
        (E[(E.COMMENT_LESS_THAN_SIGN_BANG = 46)] =
          "COMMENT_LESS_THAN_SIGN_BANG"),
        (E[(E.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47)] =
          "COMMENT_LESS_THAN_SIGN_BANG_DASH"),
        (E[(E.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48)] =
          "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH"),
        (E[(E.COMMENT_END_DASH = 49)] = "COMMENT_END_DASH"),
        (E[(E.COMMENT_END = 50)] = "COMMENT_END"),
        (E[(E.COMMENT_END_BANG = 51)] = "COMMENT_END_BANG"),
        (E[(E.DOCTYPE = 52)] = "DOCTYPE"),
        (E[(E.BEFORE_DOCTYPE_NAME = 53)] = "BEFORE_DOCTYPE_NAME"),
        (E[(E.DOCTYPE_NAME = 54)] = "DOCTYPE_NAME"),
        (E[(E.AFTER_DOCTYPE_NAME = 55)] = "AFTER_DOCTYPE_NAME"),
        (E[(E.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56)] =
          "AFTER_DOCTYPE_PUBLIC_KEYWORD"),
        (E[(E.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57)] =
          "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER"),
        (E[(E.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58)] =
          "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED"),
        (E[(E.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59)] =
          "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED"),
        (E[(E.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60)] =
          "AFTER_DOCTYPE_PUBLIC_IDENTIFIER"),
        (E[(E.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61)] =
          "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS"),
        (E[(E.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62)] =
          "AFTER_DOCTYPE_SYSTEM_KEYWORD"),
        (E[(E.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63)] =
          "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER"),
        (E[(E.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64)] =
          "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED"),
        (E[(E.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65)] =
          "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED"),
        (E[(E.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66)] =
          "AFTER_DOCTYPE_SYSTEM_IDENTIFIER"),
        (E[(E.BOGUS_DOCTYPE = 67)] = "BOGUS_DOCTYPE"),
        (E[(E.CDATA_SECTION = 68)] = "CDATA_SECTION"),
        (E[(E.CDATA_SECTION_BRACKET = 69)] = "CDATA_SECTION_BRACKET"),
        (E[(E.CDATA_SECTION_END = 70)] = "CDATA_SECTION_END"),
        (E[(E.CHARACTER_REFERENCE = 71)] = "CHARACTER_REFERENCE"),
        (E[(E.NAMED_CHARACTER_REFERENCE = 72)] = "NAMED_CHARACTER_REFERENCE"),
        (E[(E.AMBIGUOUS_AMPERSAND = 73)] = "AMBIGUOUS_AMPERSAND"),
        (E[(E.NUMERIC_CHARACTER_REFERENCE = 74)] =
          "NUMERIC_CHARACTER_REFERENCE"),
        (E[(E.HEXADEMICAL_CHARACTER_REFERENCE_START = 75)] =
          "HEXADEMICAL_CHARACTER_REFERENCE_START"),
        (E[(E.HEXADEMICAL_CHARACTER_REFERENCE = 76)] =
          "HEXADEMICAL_CHARACTER_REFERENCE"),
        (E[(E.DECIMAL_CHARACTER_REFERENCE = 77)] =
          "DECIMAL_CHARACTER_REFERENCE"),
        (E[(E.NUMERIC_CHARACTER_REFERENCE_END = 78)] =
          "NUMERIC_CHARACTER_REFERENCE_END");
      let eV = {
        DATA: L.DATA,
        RCDATA: L.RCDATA,
        RAWTEXT: L.RAWTEXT,
        SCRIPT_DATA: L.SCRIPT_DATA,
        PLAINTEXT: L.PLAINTEXT,
        CDATA_SECTION: L.CDATA_SECTION,
      };
      function eZ(e) {
        return e >= _.DIGIT_0 && e <= _.DIGIT_9;
      }
      function eW(e) {
        return e >= _.LATIN_CAPITAL_A && e <= _.LATIN_CAPITAL_Z;
      }
      function eq(e) {
        return (e >= _.LATIN_SMALL_A && e <= _.LATIN_SMALL_Z) || eW(e);
      }
      function ez(e) {
        return eq(e) || eZ(e);
      }
      function eK(e) {
        return e >= _.LATIN_CAPITAL_A && e <= _.LATIN_CAPITAL_F;
      }
      function eQ(e) {
        return e >= _.LATIN_SMALL_A && e <= _.LATIN_SMALL_F;
      }
      function eX(e) {
        return (
          e === _.SPACE ||
          e === _.LINE_FEED ||
          e === _.TABULATION ||
          e === _.FORM_FEED
        );
      }
      function e$(e) {
        return eX(e) || e === _.SOLIDUS || e === _.GREATER_THAN_SIGN;
      }
      class eJ {
        constructor(e, t) {
          (this.options = e),
            (this.handler = t),
            (this.paused = !1),
            (this.inLoop = !1),
            (this.inForeignNode = !1),
            (this.lastStartTagName = ""),
            (this.active = !1),
            (this.state = L.DATA),
            (this.returnState = L.DATA),
            (this.charRefCode = -1),
            (this.consumedAfterSnapshot = -1),
            (this.currentCharacterToken = null),
            (this.currentToken = null),
            (this.currentAttr = { name: "", value: "" }),
            (this.preprocessor = new eR(t)),
            (this.currentLocation = this.getCurrentLocation(-1));
        }
        _err(e) {
          var t, n;
          null === (n = (t = this.handler).onParseError) ||
            void 0 === n ||
            n.call(t, this.preprocessor.getError(e));
        }
        getCurrentLocation(e) {
          return this.options.sourceCodeLocationInfo
            ? {
                startLine: this.preprocessor.line,
                startCol: this.preprocessor.col - e,
                startOffset: this.preprocessor.offset - e,
                endLine: -1,
                endCol: -1,
                endOffset: -1,
              }
            : null;
        }
        _runParsingLoop() {
          if (!this.inLoop) {
            for (this.inLoop = !0; this.active && !this.paused; ) {
              this.consumedAfterSnapshot = 0;
              let e = this._consume();
              this._ensureHibernation() || this._callState(e);
            }
            this.inLoop = !1;
          }
        }
        pause() {
          this.paused = !0;
        }
        resume(e) {
          if (!this.paused) throw Error("Parser was already resumed");
          (this.paused = !1),
            this.inLoop ||
              (this._runParsingLoop(), this.paused || null == e || e());
        }
        write(e, t, n) {
          (this.active = !0),
            this.preprocessor.write(e, t),
            this._runParsingLoop(),
            this.paused || null == n || n();
        }
        insertHtmlAtCurrentPos(e) {
          (this.active = !0),
            this.preprocessor.insertHtmlAtCurrentPos(e),
            this._runParsingLoop();
        }
        _ensureHibernation() {
          return (
            !!this.preprocessor.endOfChunkHit &&
            (this._unconsume(this.consumedAfterSnapshot),
            (this.active = !1),
            !0)
          );
        }
        _consume() {
          return this.consumedAfterSnapshot++, this.preprocessor.advance();
        }
        _unconsume(e) {
          (this.consumedAfterSnapshot -= e), this.preprocessor.retreat(e);
        }
        _reconsumeInState(e, t) {
          (this.state = e), this._callState(t);
        }
        _advanceBy(e) {
          this.consumedAfterSnapshot += e;
          for (let t = 0; t < e; t++) this.preprocessor.advance();
        }
        _consumeSequenceIfMatch(e, t) {
          return (
            !!this.preprocessor.startsWith(e, t) &&
            (this._advanceBy(e.length - 1), !0)
          );
        }
        _createStartTagToken() {
          this.currentToken = {
            type: v.START_TAG,
            tagName: "",
            tagID: x.UNKNOWN,
            selfClosing: !1,
            ackSelfClosing: !1,
            attrs: [],
            location: this.getCurrentLocation(1),
          };
        }
        _createEndTagToken() {
          this.currentToken = {
            type: v.END_TAG,
            tagName: "",
            tagID: x.UNKNOWN,
            selfClosing: !1,
            ackSelfClosing: !1,
            attrs: [],
            location: this.getCurrentLocation(2),
          };
        }
        _createCommentToken(e) {
          this.currentToken = {
            type: v.COMMENT,
            data: "",
            location: this.getCurrentLocation(e),
          };
        }
        _createDoctypeToken(e) {
          this.currentToken = {
            type: v.DOCTYPE,
            name: e,
            forceQuirks: !1,
            publicId: null,
            systemId: null,
            location: this.currentLocation,
          };
        }
        _createCharacterToken(e, t) {
          this.currentCharacterToken = {
            type: e,
            chars: t,
            location: this.currentLocation,
          };
        }
        _createAttr(e) {
          (this.currentAttr = { name: e, value: "" }),
            (this.currentLocation = this.getCurrentLocation(0));
        }
        _leaveAttrName() {
          var e, t;
          let n = this.currentToken;
          if (null === eO(n, this.currentAttr.name)) {
            if (
              (n.attrs.push(this.currentAttr),
              n.location && this.currentLocation)
            ) {
              let r =
                null !== (e = (t = n.location).attrs) && void 0 !== e
                  ? e
                  : (t.attrs = Object.create(null));
              (r[this.currentAttr.name] = this.currentLocation),
                this._leaveAttrValue();
            }
          } else this._err(A.duplicateAttribute);
        }
        _leaveAttrValue() {
          this.currentLocation &&
            ((this.currentLocation.endLine = this.preprocessor.line),
            (this.currentLocation.endCol = this.preprocessor.col),
            (this.currentLocation.endOffset = this.preprocessor.offset));
        }
        prepareToken(e) {
          this._emitCurrentCharacterToken(e.location),
            (this.currentToken = null),
            e.location &&
              ((e.location.endLine = this.preprocessor.line),
              (e.location.endCol = this.preprocessor.col + 1),
              (e.location.endOffset = this.preprocessor.offset + 1)),
            (this.currentLocation = this.getCurrentLocation(-1));
        }
        emitCurrentTagToken() {
          let e = this.currentToken;
          this.prepareToken(e),
            (e.tagID = eU(e.tagName)),
            e.type === v.START_TAG
              ? ((this.lastStartTagName = e.tagName),
                this.handler.onStartTag(e))
              : (e.attrs.length > 0 && this._err(A.endTagWithAttributes),
                e.selfClosing && this._err(A.endTagWithTrailingSolidus),
                this.handler.onEndTag(e)),
            this.preprocessor.dropParsedChunk();
        }
        emitCurrentComment(e) {
          this.prepareToken(e),
            this.handler.onComment(e),
            this.preprocessor.dropParsedChunk();
        }
        emitCurrentDoctype(e) {
          this.prepareToken(e),
            this.handler.onDoctype(e),
            this.preprocessor.dropParsedChunk();
        }
        _emitCurrentCharacterToken(e) {
          if (this.currentCharacterToken) {
            switch (
              (e &&
                this.currentCharacterToken.location &&
                ((this.currentCharacterToken.location.endLine = e.startLine),
                (this.currentCharacterToken.location.endCol = e.startCol),
                (this.currentCharacterToken.location.endOffset =
                  e.startOffset)),
              this.currentCharacterToken.type)
            ) {
              case v.CHARACTER:
                this.handler.onCharacter(this.currentCharacterToken);
                break;
              case v.NULL_CHARACTER:
                this.handler.onNullCharacter(this.currentCharacterToken);
                break;
              case v.WHITESPACE_CHARACTER:
                this.handler.onWhitespaceCharacter(this.currentCharacterToken);
            }
            this.currentCharacterToken = null;
          }
        }
        _emitEOFToken() {
          let e = this.getCurrentLocation(0);
          e &&
            ((e.endLine = e.startLine),
            (e.endCol = e.startCol),
            (e.endOffset = e.startOffset)),
            this._emitCurrentCharacterToken(e),
            this.handler.onEof({ type: v.EOF, location: e }),
            (this.active = !1);
        }
        _appendCharToCurrentCharacterToken(e, t) {
          if (this.currentCharacterToken) {
            if (this.currentCharacterToken.type !== e)
              (this.currentLocation = this.getCurrentLocation(0)),
                this._emitCurrentCharacterToken(this.currentLocation),
                this.preprocessor.dropParsedChunk();
            else {
              this.currentCharacterToken.chars += t;
              return;
            }
          }
          this._createCharacterToken(e, t);
        }
        _emitCodePoint(e) {
          let t = eX(e)
            ? v.WHITESPACE_CHARACTER
            : e === _.NULL
            ? v.NULL_CHARACTER
            : v.CHARACTER;
          this._appendCharToCurrentCharacterToken(t, String.fromCodePoint(e));
        }
        _emitChars(e) {
          this._appendCharToCurrentCharacterToken(v.CHARACTER, e);
        }
        _matchNamedCharacterReference(e) {
          let t = null,
            n = 0,
            r = !1;
          for (
            let i = 0, s = ek[0];
            i >= 0 && !((i = eB(ek, s, i + 1, e)) < 0);
            e = this._consume()
          ) {
            (n += 1), (s = ek[i]);
            let o = s & N.VALUE_LENGTH;
            if (o) {
              var a;
              let s = (o >> 14) - 1;
              if (
                (e !== _.SEMICOLON &&
                this._isCharacterReferenceInAttribute() &&
                ((a = this.preprocessor.peek(1)) === _.EQUALS_SIGN || ez(a))
                  ? ((t = [_.AMPERSAND]), (i += s))
                  : ((t =
                      0 === s
                        ? [ek[i] & ~N.VALUE_LENGTH]
                        : 1 === s
                        ? [ek[++i]]
                        : [ek[++i], ek[++i]]),
                    (n = 0),
                    (r = e !== _.SEMICOLON)),
                0 === s)
              ) {
                this._consume();
                break;
              }
            }
          }
          return (
            this._unconsume(n),
            r &&
              !this.preprocessor.endOfChunkHit &&
              this._err(A.missingSemicolonAfterCharacterReference),
            this._unconsume(1),
            t
          );
        }
        _isCharacterReferenceInAttribute() {
          return (
            this.returnState === L.ATTRIBUTE_VALUE_DOUBLE_QUOTED ||
            this.returnState === L.ATTRIBUTE_VALUE_SINGLE_QUOTED ||
            this.returnState === L.ATTRIBUTE_VALUE_UNQUOTED
          );
        }
        _flushCodePointConsumedAsCharacterReference(e) {
          this._isCharacterReferenceInAttribute()
            ? (this.currentAttr.value += String.fromCodePoint(e))
            : this._emitCodePoint(e);
        }
        _callState(e) {
          switch (this.state) {
            case L.DATA:
              this._stateData(e);
              break;
            case L.RCDATA:
              this._stateRcdata(e);
              break;
            case L.RAWTEXT:
              this._stateRawtext(e);
              break;
            case L.SCRIPT_DATA:
              this._stateScriptData(e);
              break;
            case L.PLAINTEXT:
              this._statePlaintext(e);
              break;
            case L.TAG_OPEN:
              this._stateTagOpen(e);
              break;
            case L.END_TAG_OPEN:
              this._stateEndTagOpen(e);
              break;
            case L.TAG_NAME:
              this._stateTagName(e);
              break;
            case L.RCDATA_LESS_THAN_SIGN:
              this._stateRcdataLessThanSign(e);
              break;
            case L.RCDATA_END_TAG_OPEN:
              this._stateRcdataEndTagOpen(e);
              break;
            case L.RCDATA_END_TAG_NAME:
              this._stateRcdataEndTagName(e);
              break;
            case L.RAWTEXT_LESS_THAN_SIGN:
              this._stateRawtextLessThanSign(e);
              break;
            case L.RAWTEXT_END_TAG_OPEN:
              this._stateRawtextEndTagOpen(e);
              break;
            case L.RAWTEXT_END_TAG_NAME:
              this._stateRawtextEndTagName(e);
              break;
            case L.SCRIPT_DATA_LESS_THAN_SIGN:
              this._stateScriptDataLessThanSign(e);
              break;
            case L.SCRIPT_DATA_END_TAG_OPEN:
              this._stateScriptDataEndTagOpen(e);
              break;
            case L.SCRIPT_DATA_END_TAG_NAME:
              this._stateScriptDataEndTagName(e);
              break;
            case L.SCRIPT_DATA_ESCAPE_START:
              this._stateScriptDataEscapeStart(e);
              break;
            case L.SCRIPT_DATA_ESCAPE_START_DASH:
              this._stateScriptDataEscapeStartDash(e);
              break;
            case L.SCRIPT_DATA_ESCAPED:
              this._stateScriptDataEscaped(e);
              break;
            case L.SCRIPT_DATA_ESCAPED_DASH:
              this._stateScriptDataEscapedDash(e);
              break;
            case L.SCRIPT_DATA_ESCAPED_DASH_DASH:
              this._stateScriptDataEscapedDashDash(e);
              break;
            case L.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:
              this._stateScriptDataEscapedLessThanSign(e);
              break;
            case L.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:
              this._stateScriptDataEscapedEndTagOpen(e);
              break;
            case L.SCRIPT_DATA_ESCAPED_END_TAG_NAME:
              this._stateScriptDataEscapedEndTagName(e);
              break;
            case L.SCRIPT_DATA_DOUBLE_ESCAPE_START:
              this._stateScriptDataDoubleEscapeStart(e);
              break;
            case L.SCRIPT_DATA_DOUBLE_ESCAPED:
              this._stateScriptDataDoubleEscaped(e);
              break;
            case L.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:
              this._stateScriptDataDoubleEscapedDash(e);
              break;
            case L.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:
              this._stateScriptDataDoubleEscapedDashDash(e);
              break;
            case L.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:
              this._stateScriptDataDoubleEscapedLessThanSign(e);
              break;
            case L.SCRIPT_DATA_DOUBLE_ESCAPE_END:
              this._stateScriptDataDoubleEscapeEnd(e);
              break;
            case L.BEFORE_ATTRIBUTE_NAME:
              this._stateBeforeAttributeName(e);
              break;
            case L.ATTRIBUTE_NAME:
              this._stateAttributeName(e);
              break;
            case L.AFTER_ATTRIBUTE_NAME:
              this._stateAfterAttributeName(e);
              break;
            case L.BEFORE_ATTRIBUTE_VALUE:
              this._stateBeforeAttributeValue(e);
              break;
            case L.ATTRIBUTE_VALUE_DOUBLE_QUOTED:
              this._stateAttributeValueDoubleQuoted(e);
              break;
            case L.ATTRIBUTE_VALUE_SINGLE_QUOTED:
              this._stateAttributeValueSingleQuoted(e);
              break;
            case L.ATTRIBUTE_VALUE_UNQUOTED:
              this._stateAttributeValueUnquoted(e);
              break;
            case L.AFTER_ATTRIBUTE_VALUE_QUOTED:
              this._stateAfterAttributeValueQuoted(e);
              break;
            case L.SELF_CLOSING_START_TAG:
              this._stateSelfClosingStartTag(e);
              break;
            case L.BOGUS_COMMENT:
              this._stateBogusComment(e);
              break;
            case L.MARKUP_DECLARATION_OPEN:
              this._stateMarkupDeclarationOpen(e);
              break;
            case L.COMMENT_START:
              this._stateCommentStart(e);
              break;
            case L.COMMENT_START_DASH:
              this._stateCommentStartDash(e);
              break;
            case L.COMMENT:
              this._stateComment(e);
              break;
            case L.COMMENT_LESS_THAN_SIGN:
              this._stateCommentLessThanSign(e);
              break;
            case L.COMMENT_LESS_THAN_SIGN_BANG:
              this._stateCommentLessThanSignBang(e);
              break;
            case L.COMMENT_LESS_THAN_SIGN_BANG_DASH:
              this._stateCommentLessThanSignBangDash(e);
              break;
            case L.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:
              this._stateCommentLessThanSignBangDashDash(e);
              break;
            case L.COMMENT_END_DASH:
              this._stateCommentEndDash(e);
              break;
            case L.COMMENT_END:
              this._stateCommentEnd(e);
              break;
            case L.COMMENT_END_BANG:
              this._stateCommentEndBang(e);
              break;
            case L.DOCTYPE:
              this._stateDoctype(e);
              break;
            case L.BEFORE_DOCTYPE_NAME:
              this._stateBeforeDoctypeName(e);
              break;
            case L.DOCTYPE_NAME:
              this._stateDoctypeName(e);
              break;
            case L.AFTER_DOCTYPE_NAME:
              this._stateAfterDoctypeName(e);
              break;
            case L.AFTER_DOCTYPE_PUBLIC_KEYWORD:
              this._stateAfterDoctypePublicKeyword(e);
              break;
            case L.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:
              this._stateBeforeDoctypePublicIdentifier(e);
              break;
            case L.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:
              this._stateDoctypePublicIdentifierDoubleQuoted(e);
              break;
            case L.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:
              this._stateDoctypePublicIdentifierSingleQuoted(e);
              break;
            case L.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:
              this._stateAfterDoctypePublicIdentifier(e);
              break;
            case L.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:
              this._stateBetweenDoctypePublicAndSystemIdentifiers(e);
              break;
            case L.AFTER_DOCTYPE_SYSTEM_KEYWORD:
              this._stateAfterDoctypeSystemKeyword(e);
              break;
            case L.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:
              this._stateBeforeDoctypeSystemIdentifier(e);
              break;
            case L.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:
              this._stateDoctypeSystemIdentifierDoubleQuoted(e);
              break;
            case L.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:
              this._stateDoctypeSystemIdentifierSingleQuoted(e);
              break;
            case L.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:
              this._stateAfterDoctypeSystemIdentifier(e);
              break;
            case L.BOGUS_DOCTYPE:
              this._stateBogusDoctype(e);
              break;
            case L.CDATA_SECTION:
              this._stateCdataSection(e);
              break;
            case L.CDATA_SECTION_BRACKET:
              this._stateCdataSectionBracket(e);
              break;
            case L.CDATA_SECTION_END:
              this._stateCdataSectionEnd(e);
              break;
            case L.CHARACTER_REFERENCE:
              this._stateCharacterReference(e);
              break;
            case L.NAMED_CHARACTER_REFERENCE:
              this._stateNamedCharacterReference(e);
              break;
            case L.AMBIGUOUS_AMPERSAND:
              this._stateAmbiguousAmpersand(e);
              break;
            case L.NUMERIC_CHARACTER_REFERENCE:
              this._stateNumericCharacterReference(e);
              break;
            case L.HEXADEMICAL_CHARACTER_REFERENCE_START:
              this._stateHexademicalCharacterReferenceStart(e);
              break;
            case L.HEXADEMICAL_CHARACTER_REFERENCE:
              this._stateHexademicalCharacterReference(e);
              break;
            case L.DECIMAL_CHARACTER_REFERENCE:
              this._stateDecimalCharacterReference(e);
              break;
            case L.NUMERIC_CHARACTER_REFERENCE_END:
              this._stateNumericCharacterReferenceEnd(e);
              break;
            default:
              throw Error("Unknown state");
          }
        }
        _stateData(e) {
          switch (e) {
            case _.LESS_THAN_SIGN:
              this.state = L.TAG_OPEN;
              break;
            case _.AMPERSAND:
              (this.returnState = L.DATA), (this.state = L.CHARACTER_REFERENCE);
              break;
            case _.NULL:
              this._err(A.unexpectedNullCharacter), this._emitCodePoint(e);
              break;
            case _.EOF:
              this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateRcdata(e) {
          switch (e) {
            case _.AMPERSAND:
              (this.returnState = L.RCDATA),
                (this.state = L.CHARACTER_REFERENCE);
              break;
            case _.LESS_THAN_SIGN:
              this.state = L.RCDATA_LESS_THAN_SIGN;
              break;
            case _.NULL:
              this._err(A.unexpectedNullCharacter), this._emitChars("�");
              break;
            case _.EOF:
              this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateRawtext(e) {
          switch (e) {
            case _.LESS_THAN_SIGN:
              this.state = L.RAWTEXT_LESS_THAN_SIGN;
              break;
            case _.NULL:
              this._err(A.unexpectedNullCharacter), this._emitChars("�");
              break;
            case _.EOF:
              this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateScriptData(e) {
          switch (e) {
            case _.LESS_THAN_SIGN:
              this.state = L.SCRIPT_DATA_LESS_THAN_SIGN;
              break;
            case _.NULL:
              this._err(A.unexpectedNullCharacter), this._emitChars("�");
              break;
            case _.EOF:
              this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _statePlaintext(e) {
          switch (e) {
            case _.NULL:
              this._err(A.unexpectedNullCharacter), this._emitChars("�");
              break;
            case _.EOF:
              this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateTagOpen(e) {
          if (eq(e))
            this._createStartTagToken(),
              (this.state = L.TAG_NAME),
              this._stateTagName(e);
          else
            switch (e) {
              case _.EXCLAMATION_MARK:
                this.state = L.MARKUP_DECLARATION_OPEN;
                break;
              case _.SOLIDUS:
                this.state = L.END_TAG_OPEN;
                break;
              case _.QUESTION_MARK:
                this._err(A.unexpectedQuestionMarkInsteadOfTagName),
                  this._createCommentToken(1),
                  (this.state = L.BOGUS_COMMENT),
                  this._stateBogusComment(e);
                break;
              case _.EOF:
                this._err(A.eofBeforeTagName),
                  this._emitChars("<"),
                  this._emitEOFToken();
                break;
              default:
                this._err(A.invalidFirstCharacterOfTagName),
                  this._emitChars("<"),
                  (this.state = L.DATA),
                  this._stateData(e);
            }
        }
        _stateEndTagOpen(e) {
          if (eq(e))
            this._createEndTagToken(),
              (this.state = L.TAG_NAME),
              this._stateTagName(e);
          else
            switch (e) {
              case _.GREATER_THAN_SIGN:
                this._err(A.missingEndTagName), (this.state = L.DATA);
                break;
              case _.EOF:
                this._err(A.eofBeforeTagName),
                  this._emitChars("</"),
                  this._emitEOFToken();
                break;
              default:
                this._err(A.invalidFirstCharacterOfTagName),
                  this._createCommentToken(2),
                  (this.state = L.BOGUS_COMMENT),
                  this._stateBogusComment(e);
            }
        }
        _stateTagName(e) {
          let t = this.currentToken;
          switch (e) {
            case _.SPACE:
            case _.LINE_FEED:
            case _.TABULATION:
            case _.FORM_FEED:
              this.state = L.BEFORE_ATTRIBUTE_NAME;
              break;
            case _.SOLIDUS:
              this.state = L.SELF_CLOSING_START_TAG;
              break;
            case _.GREATER_THAN_SIGN:
              (this.state = L.DATA), this.emitCurrentTagToken();
              break;
            case _.NULL:
              this._err(A.unexpectedNullCharacter), (t.tagName += "�");
              break;
            case _.EOF:
              this._err(A.eofInTag), this._emitEOFToken();
              break;
            default:
              t.tagName += String.fromCodePoint(eW(e) ? e + 32 : e);
          }
        }
        _stateRcdataLessThanSign(e) {
          e === _.SOLIDUS
            ? (this.state = L.RCDATA_END_TAG_OPEN)
            : (this._emitChars("<"),
              (this.state = L.RCDATA),
              this._stateRcdata(e));
        }
        _stateRcdataEndTagOpen(e) {
          eq(e)
            ? ((this.state = L.RCDATA_END_TAG_NAME),
              this._stateRcdataEndTagName(e))
            : (this._emitChars("</"),
              (this.state = L.RCDATA),
              this._stateRcdata(e));
        }
        handleSpecialEndTag(e) {
          if (!this.preprocessor.startsWith(this.lastStartTagName, !1))
            return !this._ensureHibernation();
          this._createEndTagToken();
          let t = this.currentToken;
          t.tagName = this.lastStartTagName;
          let n = this.preprocessor.peek(this.lastStartTagName.length);
          switch (n) {
            case _.SPACE:
            case _.LINE_FEED:
            case _.TABULATION:
            case _.FORM_FEED:
              return (
                this._advanceBy(this.lastStartTagName.length),
                (this.state = L.BEFORE_ATTRIBUTE_NAME),
                !1
              );
            case _.SOLIDUS:
              return (
                this._advanceBy(this.lastStartTagName.length),
                (this.state = L.SELF_CLOSING_START_TAG),
                !1
              );
            case _.GREATER_THAN_SIGN:
              return (
                this._advanceBy(this.lastStartTagName.length),
                this.emitCurrentTagToken(),
                (this.state = L.DATA),
                !1
              );
            default:
              return !this._ensureHibernation();
          }
        }
        _stateRcdataEndTagName(e) {
          this.handleSpecialEndTag(e) &&
            (this._emitChars("</"),
            (this.state = L.RCDATA),
            this._stateRcdata(e));
        }
        _stateRawtextLessThanSign(e) {
          e === _.SOLIDUS
            ? (this.state = L.RAWTEXT_END_TAG_OPEN)
            : (this._emitChars("<"),
              (this.state = L.RAWTEXT),
              this._stateRawtext(e));
        }
        _stateRawtextEndTagOpen(e) {
          eq(e)
            ? ((this.state = L.RAWTEXT_END_TAG_NAME),
              this._stateRawtextEndTagName(e))
            : (this._emitChars("</"),
              (this.state = L.RAWTEXT),
              this._stateRawtext(e));
        }
        _stateRawtextEndTagName(e) {
          this.handleSpecialEndTag(e) &&
            (this._emitChars("</"),
            (this.state = L.RAWTEXT),
            this._stateRawtext(e));
        }
        _stateScriptDataLessThanSign(e) {
          switch (e) {
            case _.SOLIDUS:
              this.state = L.SCRIPT_DATA_END_TAG_OPEN;
              break;
            case _.EXCLAMATION_MARK:
              (this.state = L.SCRIPT_DATA_ESCAPE_START), this._emitChars("<!");
              break;
            default:
              this._emitChars("<"),
                (this.state = L.SCRIPT_DATA),
                this._stateScriptData(e);
          }
        }
        _stateScriptDataEndTagOpen(e) {
          eq(e)
            ? ((this.state = L.SCRIPT_DATA_END_TAG_NAME),
              this._stateScriptDataEndTagName(e))
            : (this._emitChars("</"),
              (this.state = L.SCRIPT_DATA),
              this._stateScriptData(e));
        }
        _stateScriptDataEndTagName(e) {
          this.handleSpecialEndTag(e) &&
            (this._emitChars("</"),
            (this.state = L.SCRIPT_DATA),
            this._stateScriptData(e));
        }
        _stateScriptDataEscapeStart(e) {
          e === _.HYPHEN_MINUS
            ? ((this.state = L.SCRIPT_DATA_ESCAPE_START_DASH),
              this._emitChars("-"))
            : ((this.state = L.SCRIPT_DATA), this._stateScriptData(e));
        }
        _stateScriptDataEscapeStartDash(e) {
          e === _.HYPHEN_MINUS
            ? ((this.state = L.SCRIPT_DATA_ESCAPED_DASH_DASH),
              this._emitChars("-"))
            : ((this.state = L.SCRIPT_DATA), this._stateScriptData(e));
        }
        _stateScriptDataEscaped(e) {
          switch (e) {
            case _.HYPHEN_MINUS:
              (this.state = L.SCRIPT_DATA_ESCAPED_DASH), this._emitChars("-");
              break;
            case _.LESS_THAN_SIGN:
              this.state = L.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
              break;
            case _.NULL:
              this._err(A.unexpectedNullCharacter), this._emitChars("�");
              break;
            case _.EOF:
              this._err(A.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateScriptDataEscapedDash(e) {
          switch (e) {
            case _.HYPHEN_MINUS:
              (this.state = L.SCRIPT_DATA_ESCAPED_DASH_DASH),
                this._emitChars("-");
              break;
            case _.LESS_THAN_SIGN:
              this.state = L.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
              break;
            case _.NULL:
              this._err(A.unexpectedNullCharacter),
                (this.state = L.SCRIPT_DATA_ESCAPED),
                this._emitChars("�");
              break;
            case _.EOF:
              this._err(A.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              (this.state = L.SCRIPT_DATA_ESCAPED), this._emitCodePoint(e);
          }
        }
        _stateScriptDataEscapedDashDash(e) {
          switch (e) {
            case _.HYPHEN_MINUS:
              this._emitChars("-");
              break;
            case _.LESS_THAN_SIGN:
              this.state = L.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
              break;
            case _.GREATER_THAN_SIGN:
              (this.state = L.SCRIPT_DATA), this._emitChars(">");
              break;
            case _.NULL:
              this._err(A.unexpectedNullCharacter),
                (this.state = L.SCRIPT_DATA_ESCAPED),
                this._emitChars("�");
              break;
            case _.EOF:
              this._err(A.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              (this.state = L.SCRIPT_DATA_ESCAPED), this._emitCodePoint(e);
          }
        }
        _stateScriptDataEscapedLessThanSign(e) {
          e === _.SOLIDUS
            ? (this.state = L.SCRIPT_DATA_ESCAPED_END_TAG_OPEN)
            : eq(e)
            ? (this._emitChars("<"),
              (this.state = L.SCRIPT_DATA_DOUBLE_ESCAPE_START),
              this._stateScriptDataDoubleEscapeStart(e))
            : (this._emitChars("<"),
              (this.state = L.SCRIPT_DATA_ESCAPED),
              this._stateScriptDataEscaped(e));
        }
        _stateScriptDataEscapedEndTagOpen(e) {
          eq(e)
            ? ((this.state = L.SCRIPT_DATA_ESCAPED_END_TAG_NAME),
              this._stateScriptDataEscapedEndTagName(e))
            : (this._emitChars("</"),
              (this.state = L.SCRIPT_DATA_ESCAPED),
              this._stateScriptDataEscaped(e));
        }
        _stateScriptDataEscapedEndTagName(e) {
          this.handleSpecialEndTag(e) &&
            (this._emitChars("</"),
            (this.state = L.SCRIPT_DATA_ESCAPED),
            this._stateScriptDataEscaped(e));
        }
        _stateScriptDataDoubleEscapeStart(e) {
          if (
            this.preprocessor.startsWith(eN.SCRIPT, !1) &&
            e$(this.preprocessor.peek(eN.SCRIPT.length))
          ) {
            this._emitCodePoint(e);
            for (let e = 0; e < eN.SCRIPT.length; e++)
              this._emitCodePoint(this._consume());
            this.state = L.SCRIPT_DATA_DOUBLE_ESCAPED;
          } else
            this._ensureHibernation() ||
              ((this.state = L.SCRIPT_DATA_ESCAPED),
              this._stateScriptDataEscaped(e));
        }
        _stateScriptDataDoubleEscaped(e) {
          switch (e) {
            case _.HYPHEN_MINUS:
              (this.state = L.SCRIPT_DATA_DOUBLE_ESCAPED_DASH),
                this._emitChars("-");
              break;
            case _.LESS_THAN_SIGN:
              (this.state = L.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
                this._emitChars("<");
              break;
            case _.NULL:
              this._err(A.unexpectedNullCharacter), this._emitChars("�");
              break;
            case _.EOF:
              this._err(A.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateScriptDataDoubleEscapedDash(e) {
          switch (e) {
            case _.HYPHEN_MINUS:
              (this.state = L.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH),
                this._emitChars("-");
              break;
            case _.LESS_THAN_SIGN:
              (this.state = L.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
                this._emitChars("<");
              break;
            case _.NULL:
              this._err(A.unexpectedNullCharacter),
                (this.state = L.SCRIPT_DATA_DOUBLE_ESCAPED),
                this._emitChars("�");
              break;
            case _.EOF:
              this._err(A.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              (this.state = L.SCRIPT_DATA_DOUBLE_ESCAPED),
                this._emitCodePoint(e);
          }
        }
        _stateScriptDataDoubleEscapedDashDash(e) {
          switch (e) {
            case _.HYPHEN_MINUS:
              this._emitChars("-");
              break;
            case _.LESS_THAN_SIGN:
              (this.state = L.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
                this._emitChars("<");
              break;
            case _.GREATER_THAN_SIGN:
              (this.state = L.SCRIPT_DATA), this._emitChars(">");
              break;
            case _.NULL:
              this._err(A.unexpectedNullCharacter),
                (this.state = L.SCRIPT_DATA_DOUBLE_ESCAPED),
                this._emitChars("�");
              break;
            case _.EOF:
              this._err(A.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              (this.state = L.SCRIPT_DATA_DOUBLE_ESCAPED),
                this._emitCodePoint(e);
          }
        }
        _stateScriptDataDoubleEscapedLessThanSign(e) {
          e === _.SOLIDUS
            ? ((this.state = L.SCRIPT_DATA_DOUBLE_ESCAPE_END),
              this._emitChars("/"))
            : ((this.state = L.SCRIPT_DATA_DOUBLE_ESCAPED),
              this._stateScriptDataDoubleEscaped(e));
        }
        _stateScriptDataDoubleEscapeEnd(e) {
          if (
            this.preprocessor.startsWith(eN.SCRIPT, !1) &&
            e$(this.preprocessor.peek(eN.SCRIPT.length))
          ) {
            this._emitCodePoint(e);
            for (let e = 0; e < eN.SCRIPT.length; e++)
              this._emitCodePoint(this._consume());
            this.state = L.SCRIPT_DATA_ESCAPED;
          } else
            this._ensureHibernation() ||
              ((this.state = L.SCRIPT_DATA_DOUBLE_ESCAPED),
              this._stateScriptDataDoubleEscaped(e));
        }
        _stateBeforeAttributeName(e) {
          switch (e) {
            case _.SPACE:
            case _.LINE_FEED:
            case _.TABULATION:
            case _.FORM_FEED:
              break;
            case _.SOLIDUS:
            case _.GREATER_THAN_SIGN:
            case _.EOF:
              (this.state = L.AFTER_ATTRIBUTE_NAME),
                this._stateAfterAttributeName(e);
              break;
            case _.EQUALS_SIGN:
              this._err(A.unexpectedEqualsSignBeforeAttributeName),
                this._createAttr("="),
                (this.state = L.ATTRIBUTE_NAME);
              break;
            default:
              this._createAttr(""),
                (this.state = L.ATTRIBUTE_NAME),
                this._stateAttributeName(e);
          }
        }
        _stateAttributeName(e) {
          switch (e) {
            case _.SPACE:
            case _.LINE_FEED:
            case _.TABULATION:
            case _.FORM_FEED:
            case _.SOLIDUS:
            case _.GREATER_THAN_SIGN:
            case _.EOF:
              this._leaveAttrName(),
                (this.state = L.AFTER_ATTRIBUTE_NAME),
                this._stateAfterAttributeName(e);
              break;
            case _.EQUALS_SIGN:
              this._leaveAttrName(), (this.state = L.BEFORE_ATTRIBUTE_VALUE);
              break;
            case _.QUOTATION_MARK:
            case _.APOSTROPHE:
            case _.LESS_THAN_SIGN:
              this._err(A.unexpectedCharacterInAttributeName),
                (this.currentAttr.name += String.fromCodePoint(e));
              break;
            case _.NULL:
              this._err(A.unexpectedNullCharacter),
                (this.currentAttr.name += "�");
              break;
            default:
              this.currentAttr.name += String.fromCodePoint(eW(e) ? e + 32 : e);
          }
        }
        _stateAfterAttributeName(e) {
          switch (e) {
            case _.SPACE:
            case _.LINE_FEED:
            case _.TABULATION:
            case _.FORM_FEED:
              break;
            case _.SOLIDUS:
              this.state = L.SELF_CLOSING_START_TAG;
              break;
            case _.EQUALS_SIGN:
              this.state = L.BEFORE_ATTRIBUTE_VALUE;
              break;
            case _.GREATER_THAN_SIGN:
              (this.state = L.DATA), this.emitCurrentTagToken();
              break;
            case _.EOF:
              this._err(A.eofInTag), this._emitEOFToken();
              break;
            default:
              this._createAttr(""),
                (this.state = L.ATTRIBUTE_NAME),
                this._stateAttributeName(e);
          }
        }
        _stateBeforeAttributeValue(e) {
          switch (e) {
            case _.SPACE:
            case _.LINE_FEED:
            case _.TABULATION:
            case _.FORM_FEED:
              break;
            case _.QUOTATION_MARK:
              this.state = L.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
              break;
            case _.APOSTROPHE:
              this.state = L.ATTRIBUTE_VALUE_SINGLE_QUOTED;
              break;
            case _.GREATER_THAN_SIGN:
              this._err(A.missingAttributeValue),
                (this.state = L.DATA),
                this.emitCurrentTagToken();
              break;
            default:
              (this.state = L.ATTRIBUTE_VALUE_UNQUOTED),
                this._stateAttributeValueUnquoted(e);
          }
        }
        _stateAttributeValueDoubleQuoted(e) {
          switch (e) {
            case _.QUOTATION_MARK:
              this.state = L.AFTER_ATTRIBUTE_VALUE_QUOTED;
              break;
            case _.AMPERSAND:
              (this.returnState = L.ATTRIBUTE_VALUE_DOUBLE_QUOTED),
                (this.state = L.CHARACTER_REFERENCE);
              break;
            case _.NULL:
              this._err(A.unexpectedNullCharacter),
                (this.currentAttr.value += "�");
              break;
            case _.EOF:
              this._err(A.eofInTag), this._emitEOFToken();
              break;
            default:
              this.currentAttr.value += String.fromCodePoint(e);
          }
        }
        _stateAttributeValueSingleQuoted(e) {
          switch (e) {
            case _.APOSTROPHE:
              this.state = L.AFTER_ATTRIBUTE_VALUE_QUOTED;
              break;
            case _.AMPERSAND:
              (this.returnState = L.ATTRIBUTE_VALUE_SINGLE_QUOTED),
                (this.state = L.CHARACTER_REFERENCE);
              break;
            case _.NULL:
              this._err(A.unexpectedNullCharacter),
                (this.currentAttr.value += "�");
              break;
            case _.EOF:
              this._err(A.eofInTag), this._emitEOFToken();
              break;
            default:
              this.currentAttr.value += String.fromCodePoint(e);
          }
        }
        _stateAttributeValueUnquoted(e) {
          switch (e) {
            case _.SPACE:
            case _.LINE_FEED:
            case _.TABULATION:
            case _.FORM_FEED:
              this._leaveAttrValue(), (this.state = L.BEFORE_ATTRIBUTE_NAME);
              break;
            case _.AMPERSAND:
              (this.returnState = L.ATTRIBUTE_VALUE_UNQUOTED),
                (this.state = L.CHARACTER_REFERENCE);
              break;
            case _.GREATER_THAN_SIGN:
              this._leaveAttrValue(),
                (this.state = L.DATA),
                this.emitCurrentTagToken();
              break;
            case _.NULL:
              this._err(A.unexpectedNullCharacter),
                (this.currentAttr.value += "�");
              break;
            case _.QUOTATION_MARK:
            case _.APOSTROPHE:
            case _.LESS_THAN_SIGN:
            case _.EQUALS_SIGN:
            case _.GRAVE_ACCENT:
              this._err(A.unexpectedCharacterInUnquotedAttributeValue),
                (this.currentAttr.value += String.fromCodePoint(e));
              break;
            case _.EOF:
              this._err(A.eofInTag), this._emitEOFToken();
              break;
            default:
              this.currentAttr.value += String.fromCodePoint(e);
          }
        }
        _stateAfterAttributeValueQuoted(e) {
          switch (e) {
            case _.SPACE:
            case _.LINE_FEED:
            case _.TABULATION:
            case _.FORM_FEED:
              this._leaveAttrValue(), (this.state = L.BEFORE_ATTRIBUTE_NAME);
              break;
            case _.SOLIDUS:
              this._leaveAttrValue(), (this.state = L.SELF_CLOSING_START_TAG);
              break;
            case _.GREATER_THAN_SIGN:
              this._leaveAttrValue(),
                (this.state = L.DATA),
                this.emitCurrentTagToken();
              break;
            case _.EOF:
              this._err(A.eofInTag), this._emitEOFToken();
              break;
            default:
              this._err(A.missingWhitespaceBetweenAttributes),
                (this.state = L.BEFORE_ATTRIBUTE_NAME),
                this._stateBeforeAttributeName(e);
          }
        }
        _stateSelfClosingStartTag(e) {
          switch (e) {
            case _.GREATER_THAN_SIGN: {
              let e = this.currentToken;
              (e.selfClosing = !0),
                (this.state = L.DATA),
                this.emitCurrentTagToken();
              break;
            }
            case _.EOF:
              this._err(A.eofInTag), this._emitEOFToken();
              break;
            default:
              this._err(A.unexpectedSolidusInTag),
                (this.state = L.BEFORE_ATTRIBUTE_NAME),
                this._stateBeforeAttributeName(e);
          }
        }
        _stateBogusComment(e) {
          let t = this.currentToken;
          switch (e) {
            case _.GREATER_THAN_SIGN:
              (this.state = L.DATA), this.emitCurrentComment(t);
              break;
            case _.EOF:
              this.emitCurrentComment(t), this._emitEOFToken();
              break;
            case _.NULL:
              this._err(A.unexpectedNullCharacter), (t.data += "�");
              break;
            default:
              t.data += String.fromCodePoint(e);
          }
        }
        _stateMarkupDeclarationOpen(e) {
          this._consumeSequenceIfMatch(eN.DASH_DASH, !0)
            ? (this._createCommentToken(eN.DASH_DASH.length + 1),
              (this.state = L.COMMENT_START))
            : this._consumeSequenceIfMatch(eN.DOCTYPE, !1)
            ? ((this.currentLocation = this.getCurrentLocation(
                eN.DOCTYPE.length + 1
              )),
              (this.state = L.DOCTYPE))
            : this._consumeSequenceIfMatch(eN.CDATA_START, !0)
            ? this.inForeignNode
              ? (this.state = L.CDATA_SECTION)
              : (this._err(A.cdataInHtmlContent),
                this._createCommentToken(eN.CDATA_START.length + 1),
                (this.currentToken.data = "[CDATA["),
                (this.state = L.BOGUS_COMMENT))
            : this._ensureHibernation() ||
              (this._err(A.incorrectlyOpenedComment),
              this._createCommentToken(2),
              (this.state = L.BOGUS_COMMENT),
              this._stateBogusComment(e));
        }
        _stateCommentStart(e) {
          switch (e) {
            case _.HYPHEN_MINUS:
              this.state = L.COMMENT_START_DASH;
              break;
            case _.GREATER_THAN_SIGN: {
              this._err(A.abruptClosingOfEmptyComment), (this.state = L.DATA);
              let e = this.currentToken;
              this.emitCurrentComment(e);
              break;
            }
            default:
              (this.state = L.COMMENT), this._stateComment(e);
          }
        }
        _stateCommentStartDash(e) {
          let t = this.currentToken;
          switch (e) {
            case _.HYPHEN_MINUS:
              this.state = L.COMMENT_END;
              break;
            case _.GREATER_THAN_SIGN:
              this._err(A.abruptClosingOfEmptyComment),
                (this.state = L.DATA),
                this.emitCurrentComment(t);
              break;
            case _.EOF:
              this._err(A.eofInComment),
                this.emitCurrentComment(t),
                this._emitEOFToken();
              break;
            default:
              (t.data += "-"), (this.state = L.COMMENT), this._stateComment(e);
          }
        }
        _stateComment(e) {
          let t = this.currentToken;
          switch (e) {
            case _.HYPHEN_MINUS:
              this.state = L.COMMENT_END_DASH;
              break;
            case _.LESS_THAN_SIGN:
              (t.data += "<"), (this.state = L.COMMENT_LESS_THAN_SIGN);
              break;
            case _.NULL:
              this._err(A.unexpectedNullCharacter), (t.data += "�");
              break;
            case _.EOF:
              this._err(A.eofInComment),
                this.emitCurrentComment(t),
                this._emitEOFToken();
              break;
            default:
              t.data += String.fromCodePoint(e);
          }
        }
        _stateCommentLessThanSign(e) {
          let t = this.currentToken;
          switch (e) {
            case _.EXCLAMATION_MARK:
              (t.data += "!"), (this.state = L.COMMENT_LESS_THAN_SIGN_BANG);
              break;
            case _.LESS_THAN_SIGN:
              t.data += "<";
              break;
            default:
              (this.state = L.COMMENT), this._stateComment(e);
          }
        }
        _stateCommentLessThanSignBang(e) {
          e === _.HYPHEN_MINUS
            ? (this.state = L.COMMENT_LESS_THAN_SIGN_BANG_DASH)
            : ((this.state = L.COMMENT), this._stateComment(e));
        }
        _stateCommentLessThanSignBangDash(e) {
          e === _.HYPHEN_MINUS
            ? (this.state = L.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH)
            : ((this.state = L.COMMENT_END_DASH), this._stateCommentEndDash(e));
        }
        _stateCommentLessThanSignBangDashDash(e) {
          e !== _.GREATER_THAN_SIGN &&
            e !== _.EOF &&
            this._err(A.nestedComment),
            (this.state = L.COMMENT_END),
            this._stateCommentEnd(e);
        }
        _stateCommentEndDash(e) {
          let t = this.currentToken;
          switch (e) {
            case _.HYPHEN_MINUS:
              this.state = L.COMMENT_END;
              break;
            case _.EOF:
              this._err(A.eofInComment),
                this.emitCurrentComment(t),
                this._emitEOFToken();
              break;
            default:
              (t.data += "-"), (this.state = L.COMMENT), this._stateComment(e);
          }
        }
        _stateCommentEnd(e) {
          let t = this.currentToken;
          switch (e) {
            case _.GREATER_THAN_SIGN:
              (this.state = L.DATA), this.emitCurrentComment(t);
              break;
            case _.EXCLAMATION_MARK:
              this.state = L.COMMENT_END_BANG;
              break;
            case _.HYPHEN_MINUS:
              t.data += "-";
              break;
            case _.EOF:
              this._err(A.eofInComment),
                this.emitCurrentComment(t),
                this._emitEOFToken();
              break;
            default:
              (t.data += "--"), (this.state = L.COMMENT), this._stateComment(e);
          }
        }
        _stateCommentEndBang(e) {
          let t = this.currentToken;
          switch (e) {
            case _.HYPHEN_MINUS:
              (t.data += "--!"), (this.state = L.COMMENT_END_DASH);
              break;
            case _.GREATER_THAN_SIGN:
              this._err(A.incorrectlyClosedComment),
                (this.state = L.DATA),
                this.emitCurrentComment(t);
              break;
            case _.EOF:
              this._err(A.eofInComment),
                this.emitCurrentComment(t),
                this._emitEOFToken();
              break;
            default:
              (t.data += "--!"),
                (this.state = L.COMMENT),
                this._stateComment(e);
          }
        }
        _stateDoctype(e) {
          switch (e) {
            case _.SPACE:
            case _.LINE_FEED:
            case _.TABULATION:
            case _.FORM_FEED:
              this.state = L.BEFORE_DOCTYPE_NAME;
              break;
            case _.GREATER_THAN_SIGN:
              (this.state = L.BEFORE_DOCTYPE_NAME),
                this._stateBeforeDoctypeName(e);
              break;
            case _.EOF: {
              this._err(A.eofInDoctype), this._createDoctypeToken(null);
              let e = this.currentToken;
              (e.forceQuirks = !0),
                this.emitCurrentDoctype(e),
                this._emitEOFToken();
              break;
            }
            default:
              this._err(A.missingWhitespaceBeforeDoctypeName),
                (this.state = L.BEFORE_DOCTYPE_NAME),
                this._stateBeforeDoctypeName(e);
          }
        }
        _stateBeforeDoctypeName(e) {
          if (eW(e))
            this._createDoctypeToken(String.fromCharCode(e + 32)),
              (this.state = L.DOCTYPE_NAME);
          else
            switch (e) {
              case _.SPACE:
              case _.LINE_FEED:
              case _.TABULATION:
              case _.FORM_FEED:
                break;
              case _.NULL:
                this._err(A.unexpectedNullCharacter),
                  this._createDoctypeToken("�"),
                  (this.state = L.DOCTYPE_NAME);
                break;
              case _.GREATER_THAN_SIGN: {
                this._err(A.missingDoctypeName), this._createDoctypeToken(null);
                let e = this.currentToken;
                (e.forceQuirks = !0),
                  this.emitCurrentDoctype(e),
                  (this.state = L.DATA);
                break;
              }
              case _.EOF: {
                this._err(A.eofInDoctype), this._createDoctypeToken(null);
                let e = this.currentToken;
                (e.forceQuirks = !0),
                  this.emitCurrentDoctype(e),
                  this._emitEOFToken();
                break;
              }
              default:
                this._createDoctypeToken(String.fromCodePoint(e)),
                  (this.state = L.DOCTYPE_NAME);
            }
        }
        _stateDoctypeName(e) {
          let t = this.currentToken;
          switch (e) {
            case _.SPACE:
            case _.LINE_FEED:
            case _.TABULATION:
            case _.FORM_FEED:
              this.state = L.AFTER_DOCTYPE_NAME;
              break;
            case _.GREATER_THAN_SIGN:
              (this.state = L.DATA), this.emitCurrentDoctype(t);
              break;
            case _.NULL:
              this._err(A.unexpectedNullCharacter), (t.name += "�");
              break;
            case _.EOF:
              this._err(A.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              t.name += String.fromCodePoint(eW(e) ? e + 32 : e);
          }
        }
        _stateAfterDoctypeName(e) {
          let t = this.currentToken;
          switch (e) {
            case _.SPACE:
            case _.LINE_FEED:
            case _.TABULATION:
            case _.FORM_FEED:
              break;
            case _.GREATER_THAN_SIGN:
              (this.state = L.DATA), this.emitCurrentDoctype(t);
              break;
            case _.EOF:
              this._err(A.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._consumeSequenceIfMatch(eN.PUBLIC, !1)
                ? (this.state = L.AFTER_DOCTYPE_PUBLIC_KEYWORD)
                : this._consumeSequenceIfMatch(eN.SYSTEM, !1)
                ? (this.state = L.AFTER_DOCTYPE_SYSTEM_KEYWORD)
                : this._ensureHibernation() ||
                  (this._err(A.invalidCharacterSequenceAfterDoctypeName),
                  (t.forceQuirks = !0),
                  (this.state = L.BOGUS_DOCTYPE),
                  this._stateBogusDoctype(e));
          }
        }
        _stateAfterDoctypePublicKeyword(e) {
          let t = this.currentToken;
          switch (e) {
            case _.SPACE:
            case _.LINE_FEED:
            case _.TABULATION:
            case _.FORM_FEED:
              this.state = L.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
              break;
            case _.QUOTATION_MARK:
              this._err(A.missingWhitespaceAfterDoctypePublicKeyword),
                (t.publicId = ""),
                (this.state = L.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case _.APOSTROPHE:
              this._err(A.missingWhitespaceAfterDoctypePublicKeyword),
                (t.publicId = ""),
                (this.state = L.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED);
              break;
            case _.GREATER_THAN_SIGN:
              this._err(A.missingDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                (this.state = L.DATA),
                this.emitCurrentDoctype(t);
              break;
            case _.EOF:
              this._err(A.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(A.missingQuoteBeforeDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                (this.state = L.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateBeforeDoctypePublicIdentifier(e) {
          let t = this.currentToken;
          switch (e) {
            case _.SPACE:
            case _.LINE_FEED:
            case _.TABULATION:
            case _.FORM_FEED:
              break;
            case _.QUOTATION_MARK:
              (t.publicId = ""),
                (this.state = L.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case _.APOSTROPHE:
              (t.publicId = ""),
                (this.state = L.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED);
              break;
            case _.GREATER_THAN_SIGN:
              this._err(A.missingDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                (this.state = L.DATA),
                this.emitCurrentDoctype(t);
              break;
            case _.EOF:
              this._err(A.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(A.missingQuoteBeforeDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                (this.state = L.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateDoctypePublicIdentifierDoubleQuoted(e) {
          let t = this.currentToken;
          switch (e) {
            case _.QUOTATION_MARK:
              this.state = L.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
              break;
            case _.NULL:
              this._err(A.unexpectedNullCharacter), (t.publicId += "�");
              break;
            case _.GREATER_THAN_SIGN:
              this._err(A.abruptDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                (this.state = L.DATA);
              break;
            case _.EOF:
              this._err(A.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              t.publicId += String.fromCodePoint(e);
          }
        }
        _stateDoctypePublicIdentifierSingleQuoted(e) {
          let t = this.currentToken;
          switch (e) {
            case _.APOSTROPHE:
              this.state = L.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
              break;
            case _.NULL:
              this._err(A.unexpectedNullCharacter), (t.publicId += "�");
              break;
            case _.GREATER_THAN_SIGN:
              this._err(A.abruptDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                (this.state = L.DATA);
              break;
            case _.EOF:
              this._err(A.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              t.publicId += String.fromCodePoint(e);
          }
        }
        _stateAfterDoctypePublicIdentifier(e) {
          let t = this.currentToken;
          switch (e) {
            case _.SPACE:
            case _.LINE_FEED:
            case _.TABULATION:
            case _.FORM_FEED:
              this.state = L.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
              break;
            case _.GREATER_THAN_SIGN:
              (this.state = L.DATA), this.emitCurrentDoctype(t);
              break;
            case _.QUOTATION_MARK:
              this._err(
                A.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers
              ),
                (t.systemId = ""),
                (this.state = L.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case _.APOSTROPHE:
              this._err(
                A.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers
              ),
                (t.systemId = ""),
                (this.state = L.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
              break;
            case _.EOF:
              this._err(A.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(A.missingQuoteBeforeDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = L.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateBetweenDoctypePublicAndSystemIdentifiers(e) {
          let t = this.currentToken;
          switch (e) {
            case _.SPACE:
            case _.LINE_FEED:
            case _.TABULATION:
            case _.FORM_FEED:
              break;
            case _.GREATER_THAN_SIGN:
              this.emitCurrentDoctype(t), (this.state = L.DATA);
              break;
            case _.QUOTATION_MARK:
              (t.systemId = ""),
                (this.state = L.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case _.APOSTROPHE:
              (t.systemId = ""),
                (this.state = L.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
              break;
            case _.EOF:
              this._err(A.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(A.missingQuoteBeforeDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = L.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateAfterDoctypeSystemKeyword(e) {
          let t = this.currentToken;
          switch (e) {
            case _.SPACE:
            case _.LINE_FEED:
            case _.TABULATION:
            case _.FORM_FEED:
              this.state = L.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
              break;
            case _.QUOTATION_MARK:
              this._err(A.missingWhitespaceAfterDoctypeSystemKeyword),
                (t.systemId = ""),
                (this.state = L.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case _.APOSTROPHE:
              this._err(A.missingWhitespaceAfterDoctypeSystemKeyword),
                (t.systemId = ""),
                (this.state = L.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
              break;
            case _.GREATER_THAN_SIGN:
              this._err(A.missingDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = L.DATA),
                this.emitCurrentDoctype(t);
              break;
            case _.EOF:
              this._err(A.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(A.missingQuoteBeforeDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = L.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateBeforeDoctypeSystemIdentifier(e) {
          let t = this.currentToken;
          switch (e) {
            case _.SPACE:
            case _.LINE_FEED:
            case _.TABULATION:
            case _.FORM_FEED:
              break;
            case _.QUOTATION_MARK:
              (t.systemId = ""),
                (this.state = L.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case _.APOSTROPHE:
              (t.systemId = ""),
                (this.state = L.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
              break;
            case _.GREATER_THAN_SIGN:
              this._err(A.missingDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = L.DATA),
                this.emitCurrentDoctype(t);
              break;
            case _.EOF:
              this._err(A.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(A.missingQuoteBeforeDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = L.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateDoctypeSystemIdentifierDoubleQuoted(e) {
          let t = this.currentToken;
          switch (e) {
            case _.QUOTATION_MARK:
              this.state = L.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
              break;
            case _.NULL:
              this._err(A.unexpectedNullCharacter), (t.systemId += "�");
              break;
            case _.GREATER_THAN_SIGN:
              this._err(A.abruptDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                (this.state = L.DATA);
              break;
            case _.EOF:
              this._err(A.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              t.systemId += String.fromCodePoint(e);
          }
        }
        _stateDoctypeSystemIdentifierSingleQuoted(e) {
          let t = this.currentToken;
          switch (e) {
            case _.APOSTROPHE:
              this.state = L.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
              break;
            case _.NULL:
              this._err(A.unexpectedNullCharacter), (t.systemId += "�");
              break;
            case _.GREATER_THAN_SIGN:
              this._err(A.abruptDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                (this.state = L.DATA);
              break;
            case _.EOF:
              this._err(A.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              t.systemId += String.fromCodePoint(e);
          }
        }
        _stateAfterDoctypeSystemIdentifier(e) {
          let t = this.currentToken;
          switch (e) {
            case _.SPACE:
            case _.LINE_FEED:
            case _.TABULATION:
            case _.FORM_FEED:
              break;
            case _.GREATER_THAN_SIGN:
              this.emitCurrentDoctype(t), (this.state = L.DATA);
              break;
            case _.EOF:
              this._err(A.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(A.unexpectedCharacterAfterDoctypeSystemIdentifier),
                (this.state = L.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateBogusDoctype(e) {
          let t = this.currentToken;
          switch (e) {
            case _.GREATER_THAN_SIGN:
              this.emitCurrentDoctype(t), (this.state = L.DATA);
              break;
            case _.NULL:
              this._err(A.unexpectedNullCharacter);
              break;
            case _.EOF:
              this.emitCurrentDoctype(t), this._emitEOFToken();
          }
        }
        _stateCdataSection(e) {
          switch (e) {
            case _.RIGHT_SQUARE_BRACKET:
              this.state = L.CDATA_SECTION_BRACKET;
              break;
            case _.EOF:
              this._err(A.eofInCdata), this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateCdataSectionBracket(e) {
          e === _.RIGHT_SQUARE_BRACKET
            ? (this.state = L.CDATA_SECTION_END)
            : (this._emitChars("]"),
              (this.state = L.CDATA_SECTION),
              this._stateCdataSection(e));
        }
        _stateCdataSectionEnd(e) {
          switch (e) {
            case _.GREATER_THAN_SIGN:
              this.state = L.DATA;
              break;
            case _.RIGHT_SQUARE_BRACKET:
              this._emitChars("]");
              break;
            default:
              this._emitChars("]]"),
                (this.state = L.CDATA_SECTION),
                this._stateCdataSection(e);
          }
        }
        _stateCharacterReference(e) {
          e === _.NUMBER_SIGN
            ? (this.state = L.NUMERIC_CHARACTER_REFERENCE)
            : ez(e)
            ? ((this.state = L.NAMED_CHARACTER_REFERENCE),
              this._stateNamedCharacterReference(e))
            : (this._flushCodePointConsumedAsCharacterReference(_.AMPERSAND),
              this._reconsumeInState(this.returnState, e));
        }
        _stateNamedCharacterReference(e) {
          let t = this._matchNamedCharacterReference(e);
          if (this._ensureHibernation());
          else if (t) {
            for (let e = 0; e < t.length; e++)
              this._flushCodePointConsumedAsCharacterReference(t[e]);
            this.state = this.returnState;
          } else
            this._flushCodePointConsumedAsCharacterReference(_.AMPERSAND),
              (this.state = L.AMBIGUOUS_AMPERSAND);
        }
        _stateAmbiguousAmpersand(e) {
          ez(e)
            ? this._flushCodePointConsumedAsCharacterReference(e)
            : (e === _.SEMICOLON && this._err(A.unknownNamedCharacterReference),
              this._reconsumeInState(this.returnState, e));
        }
        _stateNumericCharacterReference(e) {
          (this.charRefCode = 0),
            e === _.LATIN_SMALL_X || e === _.LATIN_CAPITAL_X
              ? (this.state = L.HEXADEMICAL_CHARACTER_REFERENCE_START)
              : eZ(e)
              ? ((this.state = L.DECIMAL_CHARACTER_REFERENCE),
                this._stateDecimalCharacterReference(e))
              : (this._err(A.absenceOfDigitsInNumericCharacterReference),
                this._flushCodePointConsumedAsCharacterReference(_.AMPERSAND),
                this._flushCodePointConsumedAsCharacterReference(_.NUMBER_SIGN),
                this._reconsumeInState(this.returnState, e));
        }
        _stateHexademicalCharacterReferenceStart(e) {
          eZ(e) || eK(e) || eQ(e)
            ? ((this.state = L.HEXADEMICAL_CHARACTER_REFERENCE),
              this._stateHexademicalCharacterReference(e))
            : (this._err(A.absenceOfDigitsInNumericCharacterReference),
              this._flushCodePointConsumedAsCharacterReference(_.AMPERSAND),
              this._flushCodePointConsumedAsCharacterReference(_.NUMBER_SIGN),
              this._unconsume(2),
              (this.state = this.returnState));
        }
        _stateHexademicalCharacterReference(e) {
          eK(e)
            ? (this.charRefCode = 16 * this.charRefCode + e - 55)
            : eQ(e)
            ? (this.charRefCode = 16 * this.charRefCode + e - 87)
            : eZ(e)
            ? (this.charRefCode = 16 * this.charRefCode + e - 48)
            : e === _.SEMICOLON
            ? (this.state = L.NUMERIC_CHARACTER_REFERENCE_END)
            : (this._err(A.missingSemicolonAfterCharacterReference),
              (this.state = L.NUMERIC_CHARACTER_REFERENCE_END),
              this._stateNumericCharacterReferenceEnd(e));
        }
        _stateDecimalCharacterReference(e) {
          eZ(e)
            ? (this.charRefCode = 10 * this.charRefCode + e - 48)
            : e === _.SEMICOLON
            ? (this.state = L.NUMERIC_CHARACTER_REFERENCE_END)
            : (this._err(A.missingSemicolonAfterCharacterReference),
              (this.state = L.NUMERIC_CHARACTER_REFERENCE_END),
              this._stateNumericCharacterReferenceEnd(e));
        }
        _stateNumericCharacterReferenceEnd(e) {
          if (this.charRefCode === _.NULL)
            this._err(A.nullCharacterReference),
              (this.charRefCode = _.REPLACEMENT_CHARACTER);
          else if (this.charRefCode > 1114111)
            this._err(A.characterReferenceOutsideUnicodeRange),
              (this.charRefCode = _.REPLACEMENT_CHARACTER);
          else if (eC(this.charRefCode))
            this._err(A.surrogateCharacterReference),
              (this.charRefCode = _.REPLACEMENT_CHARACTER);
          else if (eS(this.charRefCode))
            this._err(A.noncharacterCharacterReference);
          else if (
            eI(this.charRefCode) ||
            this.charRefCode === _.CARRIAGE_RETURN
          ) {
            this._err(A.controlCharacterReference);
            let e = eY.get(this.charRefCode);
            void 0 !== e && (this.charRefCode = e);
          }
          this._flushCodePointConsumedAsCharacterReference(this.charRefCode),
            this._reconsumeInState(this.returnState, e);
        }
      }
      let e0 = new Set([
          x.DD,
          x.DT,
          x.LI,
          x.OPTGROUP,
          x.OPTION,
          x.P,
          x.RB,
          x.RP,
          x.RT,
          x.RTC,
        ]),
        e1 = new Set([
          ...e0,
          x.CAPTION,
          x.COLGROUP,
          x.TBODY,
          x.TD,
          x.TFOOT,
          x.TH,
          x.THEAD,
          x.TR,
        ]),
        e2 = new Map([
          [x.APPLET, S.HTML],
          [x.CAPTION, S.HTML],
          [x.HTML, S.HTML],
          [x.MARQUEE, S.HTML],
          [x.OBJECT, S.HTML],
          [x.TABLE, S.HTML],
          [x.TD, S.HTML],
          [x.TEMPLATE, S.HTML],
          [x.TH, S.HTML],
          [x.ANNOTATION_XML, S.MATHML],
          [x.MI, S.MATHML],
          [x.MN, S.MATHML],
          [x.MO, S.MATHML],
          [x.MS, S.MATHML],
          [x.MTEXT, S.MATHML],
          [x.DESC, S.SVG],
          [x.FOREIGN_OBJECT, S.SVG],
          [x.TITLE, S.SVG],
        ]),
        e5 = [x.H1, x.H2, x.H3, x.H4, x.H5, x.H6],
        e3 = [x.TR, x.TEMPLATE, x.HTML],
        e4 = [x.TBODY, x.TFOOT, x.THEAD, x.TEMPLATE, x.HTML],
        e8 = [x.TABLE, x.TEMPLATE, x.HTML],
        e6 = [x.TD, x.TH];
      class e9 {
        get currentTmplContentOrNode() {
          return this._isInTemplate()
            ? this.treeAdapter.getTemplateContent(this.current)
            : this.current;
        }
        constructor(e, t, n) {
          (this.treeAdapter = t),
            (this.handler = n),
            (this.items = []),
            (this.tagIDs = []),
            (this.stackTop = -1),
            (this.tmplCount = 0),
            (this.currentTagId = x.UNKNOWN),
            (this.current = e);
        }
        _indexOf(e) {
          return this.items.lastIndexOf(e, this.stackTop);
        }
        _isInTemplate() {
          return (
            this.currentTagId === x.TEMPLATE &&
            this.treeAdapter.getNamespaceURI(this.current) === S.HTML
          );
        }
        _updateCurrentElement() {
          (this.current = this.items[this.stackTop]),
            (this.currentTagId = this.tagIDs[this.stackTop]);
        }
        push(e, t) {
          this.stackTop++,
            (this.items[this.stackTop] = e),
            (this.current = e),
            (this.tagIDs[this.stackTop] = t),
            (this.currentTagId = t),
            this._isInTemplate() && this.tmplCount++,
            this.handler.onItemPush(e, t, !0);
        }
        pop() {
          let e = this.current;
          this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--,
            this.stackTop--,
            this._updateCurrentElement(),
            this.handler.onItemPop(e, !0);
        }
        replace(e, t) {
          let n = this._indexOf(e);
          (this.items[n] = t), n === this.stackTop && (this.current = t);
        }
        insertAfter(e, t, n) {
          let r = this._indexOf(e) + 1;
          this.items.splice(r, 0, t),
            this.tagIDs.splice(r, 0, n),
            this.stackTop++,
            r === this.stackTop && this._updateCurrentElement(),
            this.handler.onItemPush(
              this.current,
              this.currentTagId,
              r === this.stackTop
            );
        }
        popUntilTagNamePopped(e) {
          let t = this.stackTop + 1;
          do t = this.tagIDs.lastIndexOf(e, t - 1);
          while (
            t > 0 &&
            this.treeAdapter.getNamespaceURI(this.items[t]) !== S.HTML
          );
          this.shortenToLength(t < 0 ? 0 : t);
        }
        shortenToLength(e) {
          for (; this.stackTop >= e; ) {
            let t = this.current;
            this.tmplCount > 0 && this._isInTemplate() && (this.tmplCount -= 1),
              this.stackTop--,
              this._updateCurrentElement(),
              this.handler.onItemPop(t, this.stackTop < e);
          }
        }
        popUntilElementPopped(e) {
          let t = this._indexOf(e);
          this.shortenToLength(t < 0 ? 0 : t);
        }
        popUntilPopped(e, t) {
          let n = this._indexOfTagNames(e, t);
          this.shortenToLength(n < 0 ? 0 : n);
        }
        popUntilNumberedHeaderPopped() {
          this.popUntilPopped(e5, S.HTML);
        }
        popUntilTableCellPopped() {
          this.popUntilPopped(e6, S.HTML);
        }
        popAllUpToHtmlElement() {
          (this.tmplCount = 0), this.shortenToLength(1);
        }
        _indexOfTagNames(e, t) {
          for (let n = this.stackTop; n >= 0; n--)
            if (
              e.includes(this.tagIDs[n]) &&
              this.treeAdapter.getNamespaceURI(this.items[n]) === t
            )
              return n;
          return -1;
        }
        clearBackTo(e, t) {
          let n = this._indexOfTagNames(e, t);
          this.shortenToLength(n + 1);
        }
        clearBackToTableContext() {
          this.clearBackTo(e8, S.HTML);
        }
        clearBackToTableBodyContext() {
          this.clearBackTo(e4, S.HTML);
        }
        clearBackToTableRowContext() {
          this.clearBackTo(e3, S.HTML);
        }
        remove(e) {
          let t = this._indexOf(e);
          t >= 0 &&
            (t === this.stackTop
              ? this.pop()
              : (this.items.splice(t, 1),
                this.tagIDs.splice(t, 1),
                this.stackTop--,
                this._updateCurrentElement(),
                this.handler.onItemPop(e, !1)));
        }
        tryPeekProperlyNestedBodyElement() {
          return this.stackTop >= 1 && this.tagIDs[1] === x.BODY
            ? this.items[1]
            : null;
        }
        contains(e) {
          return this._indexOf(e) > -1;
        }
        getCommonAncestor(e) {
          let t = this._indexOf(e) - 1;
          return t >= 0 ? this.items[t] : null;
        }
        isRootHtmlElementCurrent() {
          return 0 === this.stackTop && this.tagIDs[0] === x.HTML;
        }
        hasInScope(e) {
          for (let t = this.stackTop; t >= 0; t--) {
            let n = this.tagIDs[t],
              r = this.treeAdapter.getNamespaceURI(this.items[t]);
            if (n === e && r === S.HTML) break;
            if (e2.get(n) === r) return !1;
          }
          return !0;
        }
        hasNumberedHeaderInScope() {
          for (let e = this.stackTop; e >= 0; e--) {
            let t = this.tagIDs[e],
              n = this.treeAdapter.getNamespaceURI(this.items[e]);
            if (ej(t) && n === S.HTML) break;
            if (e2.get(t) === n) return !1;
          }
          return !0;
        }
        hasInListItemScope(e) {
          for (let t = this.stackTop; t >= 0; t--) {
            let n = this.tagIDs[t],
              r = this.treeAdapter.getNamespaceURI(this.items[t]);
            if (n === e && r === S.HTML) break;
            if (((n === x.UL || n === x.OL) && r === S.HTML) || e2.get(n) === r)
              return !1;
          }
          return !0;
        }
        hasInButtonScope(e) {
          for (let t = this.stackTop; t >= 0; t--) {
            let n = this.tagIDs[t],
              r = this.treeAdapter.getNamespaceURI(this.items[t]);
            if (n === e && r === S.HTML) break;
            if ((n === x.BUTTON && r === S.HTML) || e2.get(n) === r) return !1;
          }
          return !0;
        }
        hasInTableScope(e) {
          for (let t = this.stackTop; t >= 0; t--) {
            let n = this.tagIDs[t],
              r = this.treeAdapter.getNamespaceURI(this.items[t]);
            if (r === S.HTML) {
              if (n === e) break;
              if (n === x.TABLE || n === x.TEMPLATE || n === x.HTML) return !1;
            }
          }
          return !0;
        }
        hasTableBodyContextInTableScope() {
          for (let e = this.stackTop; e >= 0; e--) {
            let t = this.tagIDs[e],
              n = this.treeAdapter.getNamespaceURI(this.items[e]);
            if (n === S.HTML) {
              if (t === x.TBODY || t === x.THEAD || t === x.TFOOT) break;
              if (t === x.TABLE || t === x.HTML) return !1;
            }
          }
          return !0;
        }
        hasInSelectScope(e) {
          for (let t = this.stackTop; t >= 0; t--) {
            let n = this.tagIDs[t],
              r = this.treeAdapter.getNamespaceURI(this.items[t]);
            if (r === S.HTML) {
              if (n === e) break;
              if (n !== x.OPTION && n !== x.OPTGROUP) return !1;
            }
          }
          return !0;
        }
        generateImpliedEndTags() {
          for (; e0.has(this.currentTagId); ) this.pop();
        }
        generateImpliedEndTagsThoroughly() {
          for (; e1.has(this.currentTagId); ) this.pop();
        }
        generateImpliedEndTagsWithExclusion(e) {
          for (; this.currentTagId !== e && e1.has(this.currentTagId); )
            this.pop();
        }
      }
      ((T = D = D || (D = {}))[(T.Marker = 0)] = "Marker"),
        (T[(T.Element = 1)] = "Element");
      let e7 = { type: D.Marker };
      class te {
        constructor(e) {
          (this.treeAdapter = e), (this.entries = []), (this.bookmark = null);
        }
        _getNoahArkConditionCandidates(e, t) {
          let n = [],
            r = t.length,
            a = this.treeAdapter.getTagName(e),
            i = this.treeAdapter.getNamespaceURI(e);
          for (let e = 0; e < this.entries.length; e++) {
            let t = this.entries[e];
            if (t.type === D.Marker) break;
            let { element: s } = t;
            if (
              this.treeAdapter.getTagName(s) === a &&
              this.treeAdapter.getNamespaceURI(s) === i
            ) {
              let t = this.treeAdapter.getAttrList(s);
              t.length === r && n.push({ idx: e, attrs: t });
            }
          }
          return n;
        }
        _ensureNoahArkCondition(e) {
          if (this.entries.length < 3) return;
          let t = this.treeAdapter.getAttrList(e),
            n = this._getNoahArkConditionCandidates(e, t);
          if (n.length < 3) return;
          let r = new Map(t.map((e) => [e.name, e.value])),
            a = 0;
          for (let e = 0; e < n.length; e++) {
            let t = n[e];
            t.attrs.every((e) => r.get(e.name) === e.value) &&
              (a += 1) >= 3 &&
              this.entries.splice(t.idx, 1);
          }
        }
        insertMarker() {
          this.entries.unshift(e7);
        }
        pushElement(e, t) {
          this._ensureNoahArkCondition(e),
            this.entries.unshift({ type: D.Element, element: e, token: t });
        }
        insertElementAfterBookmark(e, t) {
          let n = this.entries.indexOf(this.bookmark);
          this.entries.splice(n, 0, { type: D.Element, element: e, token: t });
        }
        removeEntry(e) {
          let t = this.entries.indexOf(e);
          t >= 0 && this.entries.splice(t, 1);
        }
        clearToLastMarker() {
          let e = this.entries.indexOf(e7);
          e >= 0 ? this.entries.splice(0, e + 1) : (this.entries.length = 0);
        }
        getElementEntryInScopeWithTagName(e) {
          let t = this.entries.find(
            (t) =>
              t.type === D.Marker ||
              this.treeAdapter.getTagName(t.element) === e
          );
          return t && t.type === D.Element ? t : null;
        }
        getElementEntry(e) {
          return this.entries.find(
            (t) => t.type === D.Element && t.element === e
          );
        }
      }
      function tt(e) {
        return { nodeName: "#text", value: e, parentNode: null };
      }
      let tn = {
          createDocument: () => ({
            nodeName: "#document",
            mode: O.NO_QUIRKS,
            childNodes: [],
          }),
          createDocumentFragment: () => ({
            nodeName: "#document-fragment",
            childNodes: [],
          }),
          createElement: (e, t, n) => ({
            nodeName: e,
            tagName: e,
            attrs: n,
            namespaceURI: t,
            childNodes: [],
            parentNode: null,
          }),
          createCommentNode: (e) => ({
            nodeName: "#comment",
            data: e,
            parentNode: null,
          }),
          appendChild(e, t) {
            e.childNodes.push(t), (t.parentNode = e);
          },
          insertBefore(e, t, n) {
            let r = e.childNodes.indexOf(n);
            e.childNodes.splice(r, 0, t), (t.parentNode = e);
          },
          setTemplateContent(e, t) {
            e.content = t;
          },
          getTemplateContent: (e) => e.content,
          setDocumentType(e, t, n, r) {
            let a = e.childNodes.find((e) => "#documentType" === e.nodeName);
            a
              ? ((a.name = t), (a.publicId = n), (a.systemId = r))
              : tn.appendChild(e, {
                  nodeName: "#documentType",
                  name: t,
                  publicId: n,
                  systemId: r,
                  parentNode: null,
                });
          },
          setDocumentMode(e, t) {
            e.mode = t;
          },
          getDocumentMode: (e) => e.mode,
          detachNode(e) {
            if (e.parentNode) {
              let t = e.parentNode.childNodes.indexOf(e);
              e.parentNode.childNodes.splice(t, 1), (e.parentNode = null);
            }
          },
          insertText(e, t) {
            if (e.childNodes.length > 0) {
              let n = e.childNodes[e.childNodes.length - 1];
              if (tn.isTextNode(n)) {
                n.value += t;
                return;
              }
            }
            tn.appendChild(e, tt(t));
          },
          insertTextBefore(e, t, n) {
            let r = e.childNodes[e.childNodes.indexOf(n) - 1];
            r && tn.isTextNode(r)
              ? (r.value += t)
              : tn.insertBefore(e, tt(t), n);
          },
          adoptAttributes(e, t) {
            let n = new Set(e.attrs.map((e) => e.name));
            for (let r = 0; r < t.length; r++)
              n.has(t[r].name) || e.attrs.push(t[r]);
          },
          getFirstChild: (e) => e.childNodes[0],
          getChildNodes: (e) => e.childNodes,
          getParentNode: (e) => e.parentNode,
          getAttrList: (e) => e.attrs,
          getTagName: (e) => e.tagName,
          getNamespaceURI: (e) => e.namespaceURI,
          getTextNodeContent: (e) => e.value,
          getCommentNodeContent: (e) => e.data,
          getDocumentTypeNodeName: (e) => e.name,
          getDocumentTypeNodePublicId: (e) => e.publicId,
          getDocumentTypeNodeSystemId: (e) => e.systemId,
          isTextNode: (e) => "#text" === e.nodeName,
          isCommentNode: (e) => "#comment" === e.nodeName,
          isDocumentTypeNode: (e) => "#documentType" === e.nodeName,
          isElementNode: (e) =>
            Object.prototype.hasOwnProperty.call(e, "tagName"),
          setNodeSourceCodeLocation(e, t) {
            e.sourceCodeLocation = t;
          },
          getNodeSourceCodeLocation: (e) => e.sourceCodeLocation,
          updateNodeSourceCodeLocation(e, t) {
            e.sourceCodeLocation = { ...e.sourceCodeLocation, ...t };
          },
        },
        tr = "html",
        ta = [
          "+//silmaril//dtd html pro v0r11 19970101//",
          "-//as//dtd html 3.0 aswedit + extensions//",
          "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
          "-//ietf//dtd html 2.0 level 1//",
          "-//ietf//dtd html 2.0 level 2//",
          "-//ietf//dtd html 2.0 strict level 1//",
          "-//ietf//dtd html 2.0 strict level 2//",
          "-//ietf//dtd html 2.0 strict//",
          "-//ietf//dtd html 2.0//",
          "-//ietf//dtd html 2.1e//",
          "-//ietf//dtd html 3.0//",
          "-//ietf//dtd html 3.2 final//",
          "-//ietf//dtd html 3.2//",
          "-//ietf//dtd html 3//",
          "-//ietf//dtd html level 0//",
          "-//ietf//dtd html level 1//",
          "-//ietf//dtd html level 2//",
          "-//ietf//dtd html level 3//",
          "-//ietf//dtd html strict level 0//",
          "-//ietf//dtd html strict level 1//",
          "-//ietf//dtd html strict level 2//",
          "-//ietf//dtd html strict level 3//",
          "-//ietf//dtd html strict//",
          "-//ietf//dtd html//",
          "-//metrius//dtd metrius presentational//",
          "-//microsoft//dtd internet explorer 2.0 html strict//",
          "-//microsoft//dtd internet explorer 2.0 html//",
          "-//microsoft//dtd internet explorer 2.0 tables//",
          "-//microsoft//dtd internet explorer 3.0 html strict//",
          "-//microsoft//dtd internet explorer 3.0 html//",
          "-//microsoft//dtd internet explorer 3.0 tables//",
          "-//netscape comm. corp.//dtd html//",
          "-//netscape comm. corp.//dtd strict html//",
          "-//o'reilly and associates//dtd html 2.0//",
          "-//o'reilly and associates//dtd html extended 1.0//",
          "-//o'reilly and associates//dtd html extended relaxed 1.0//",
          "-//sq//dtd html 2.0 hotmetal + extensions//",
          "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
          "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
          "-//spyglass//dtd html 2.0 extended//",
          "-//sun microsystems corp.//dtd hotjava html//",
          "-//sun microsystems corp.//dtd hotjava strict html//",
          "-//w3c//dtd html 3 1995-03-24//",
          "-//w3c//dtd html 3.2 draft//",
          "-//w3c//dtd html 3.2 final//",
          "-//w3c//dtd html 3.2//",
          "-//w3c//dtd html 3.2s draft//",
          "-//w3c//dtd html 4.0 frameset//",
          "-//w3c//dtd html 4.0 transitional//",
          "-//w3c//dtd html experimental 19960712//",
          "-//w3c//dtd html experimental 970421//",
          "-//w3c//dtd w3 html//",
          "-//w3o//dtd w3 html 3.0//",
          "-//webtechs//dtd mozilla html 2.0//",
          "-//webtechs//dtd mozilla html//",
        ],
        ti = [
          ...ta,
          "-//w3c//dtd html 4.01 frameset//",
          "-//w3c//dtd html 4.01 transitional//",
        ],
        ts = new Set([
          "-//w3o//dtd w3 html strict 3.0//en//",
          "-/w3c/dtd html 4.0 transitional/en",
          "html",
        ]),
        to = [
          "-//w3c//dtd xhtml 1.0 frameset//",
          "-//w3c//dtd xhtml 1.0 transitional//",
        ],
        tl = [
          ...to,
          "-//w3c//dtd html 4.01 frameset//",
          "-//w3c//dtd html 4.01 transitional//",
        ];
      function tc(e, t) {
        return t.some((t) => e.startsWith(t));
      }
      let tu = {
          TEXT_HTML: "text/html",
          APPLICATION_XML: "application/xhtml+xml",
        },
        td = new Map(
          [
            "attributeName",
            "attributeType",
            "baseFrequency",
            "baseProfile",
            "calcMode",
            "clipPathUnits",
            "diffuseConstant",
            "edgeMode",
            "filterUnits",
            "glyphRef",
            "gradientTransform",
            "gradientUnits",
            "kernelMatrix",
            "kernelUnitLength",
            "keyPoints",
            "keySplines",
            "keyTimes",
            "lengthAdjust",
            "limitingConeAngle",
            "markerHeight",
            "markerUnits",
            "markerWidth",
            "maskContentUnits",
            "maskUnits",
            "numOctaves",
            "pathLength",
            "patternContentUnits",
            "patternTransform",
            "patternUnits",
            "pointsAtX",
            "pointsAtY",
            "pointsAtZ",
            "preserveAlpha",
            "preserveAspectRatio",
            "primitiveUnits",
            "refX",
            "refY",
            "repeatCount",
            "repeatDur",
            "requiredExtensions",
            "requiredFeatures",
            "specularConstant",
            "specularExponent",
            "spreadMethod",
            "startOffset",
            "stdDeviation",
            "stitchTiles",
            "surfaceScale",
            "systemLanguage",
            "tableValues",
            "targetX",
            "targetY",
            "textLength",
            "viewBox",
            "viewTarget",
            "xChannelSelector",
            "yChannelSelector",
            "zoomAndPan",
          ].map((e) => [e.toLowerCase(), e])
        ),
        th = new Map([
          [
            "xlink:actuate",
            { prefix: "xlink", name: "actuate", namespace: S.XLINK },
          ],
          [
            "xlink:arcrole",
            { prefix: "xlink", name: "arcrole", namespace: S.XLINK },
          ],
          ["xlink:href", { prefix: "xlink", name: "href", namespace: S.XLINK }],
          ["xlink:role", { prefix: "xlink", name: "role", namespace: S.XLINK }],
          ["xlink:show", { prefix: "xlink", name: "show", namespace: S.XLINK }],
          [
            "xlink:title",
            { prefix: "xlink", name: "title", namespace: S.XLINK },
          ],
          ["xlink:type", { prefix: "xlink", name: "type", namespace: S.XLINK }],
          ["xml:base", { prefix: "xml", name: "base", namespace: S.XML }],
          ["xml:lang", { prefix: "xml", name: "lang", namespace: S.XML }],
          ["xml:space", { prefix: "xml", name: "space", namespace: S.XML }],
          ["xmlns", { prefix: "", name: "xmlns", namespace: S.XMLNS }],
          [
            "xmlns:xlink",
            { prefix: "xmlns", name: "xlink", namespace: S.XMLNS },
          ],
        ]),
        tp = new Map(
          [
            "altGlyph",
            "altGlyphDef",
            "altGlyphItem",
            "animateColor",
            "animateMotion",
            "animateTransform",
            "clipPath",
            "feBlend",
            "feColorMatrix",
            "feComponentTransfer",
            "feComposite",
            "feConvolveMatrix",
            "feDiffuseLighting",
            "feDisplacementMap",
            "feDistantLight",
            "feFlood",
            "feFuncA",
            "feFuncB",
            "feFuncG",
            "feFuncR",
            "feGaussianBlur",
            "feImage",
            "feMerge",
            "feMergeNode",
            "feMorphology",
            "feOffset",
            "fePointLight",
            "feSpecularLighting",
            "feSpotLight",
            "feTile",
            "feTurbulence",
            "foreignObject",
            "glyphRef",
            "linearGradient",
            "radialGradient",
            "textPath",
          ].map((e) => [e.toLowerCase(), e])
        ),
        tf = new Set([
          x.B,
          x.BIG,
          x.BLOCKQUOTE,
          x.BODY,
          x.BR,
          x.CENTER,
          x.CODE,
          x.DD,
          x.DIV,
          x.DL,
          x.DT,
          x.EM,
          x.EMBED,
          x.H1,
          x.H2,
          x.H3,
          x.H4,
          x.H5,
          x.H6,
          x.HEAD,
          x.HR,
          x.I,
          x.IMG,
          x.LI,
          x.LISTING,
          x.MENU,
          x.META,
          x.NOBR,
          x.OL,
          x.P,
          x.PRE,
          x.RUBY,
          x.S,
          x.SMALL,
          x.SPAN,
          x.STRONG,
          x.STRIKE,
          x.SUB,
          x.SUP,
          x.TABLE,
          x.TT,
          x.U,
          x.UL,
          x.VAR,
        ]);
      function tm(e) {
        for (let t = 0; t < e.attrs.length; t++)
          if ("definitionurl" === e.attrs[t].name) {
            e.attrs[t].name = "definitionURL";
            break;
          }
      }
      function tE(e) {
        for (let t = 0; t < e.attrs.length; t++) {
          let n = td.get(e.attrs[t].name);
          null != n && (e.attrs[t].name = n);
        }
      }
      function tT(e) {
        for (let t = 0; t < e.attrs.length; t++) {
          let n = th.get(e.attrs[t].name);
          n &&
            ((e.attrs[t].prefix = n.prefix),
            (e.attrs[t].name = n.name),
            (e.attrs[t].namespace = n.namespace));
        }
      }
      ((g = M || (M = {}))[(g.INITIAL = 0)] = "INITIAL"),
        (g[(g.BEFORE_HTML = 1)] = "BEFORE_HTML"),
        (g[(g.BEFORE_HEAD = 2)] = "BEFORE_HEAD"),
        (g[(g.IN_HEAD = 3)] = "IN_HEAD"),
        (g[(g.IN_HEAD_NO_SCRIPT = 4)] = "IN_HEAD_NO_SCRIPT"),
        (g[(g.AFTER_HEAD = 5)] = "AFTER_HEAD"),
        (g[(g.IN_BODY = 6)] = "IN_BODY"),
        (g[(g.TEXT = 7)] = "TEXT"),
        (g[(g.IN_TABLE = 8)] = "IN_TABLE"),
        (g[(g.IN_TABLE_TEXT = 9)] = "IN_TABLE_TEXT"),
        (g[(g.IN_CAPTION = 10)] = "IN_CAPTION"),
        (g[(g.IN_COLUMN_GROUP = 11)] = "IN_COLUMN_GROUP"),
        (g[(g.IN_TABLE_BODY = 12)] = "IN_TABLE_BODY"),
        (g[(g.IN_ROW = 13)] = "IN_ROW"),
        (g[(g.IN_CELL = 14)] = "IN_CELL"),
        (g[(g.IN_SELECT = 15)] = "IN_SELECT"),
        (g[(g.IN_SELECT_IN_TABLE = 16)] = "IN_SELECT_IN_TABLE"),
        (g[(g.IN_TEMPLATE = 17)] = "IN_TEMPLATE"),
        (g[(g.AFTER_BODY = 18)] = "AFTER_BODY"),
        (g[(g.IN_FRAMESET = 19)] = "IN_FRAMESET"),
        (g[(g.AFTER_FRAMESET = 20)] = "AFTER_FRAMESET"),
        (g[(g.AFTER_AFTER_BODY = 21)] = "AFTER_AFTER_BODY"),
        (g[(g.AFTER_AFTER_FRAMESET = 22)] = "AFTER_AFTER_FRAMESET");
      let tg = {
          startLine: -1,
          startCol: -1,
          startOffset: -1,
          endLine: -1,
          endCol: -1,
          endOffset: -1,
        },
        t_ = new Set([x.TABLE, x.TBODY, x.TFOOT, x.THEAD, x.TR]),
        tA = {
          scriptingEnabled: !0,
          sourceCodeLocationInfo: !1,
          treeAdapter: tn,
          onParseError: null,
        };
      class tv {
        constructor(e, t, n = null, r = null) {
          (this.fragmentContext = n),
            (this.scriptHandler = r),
            (this.currentToken = null),
            (this.stopped = !1),
            (this.insertionMode = M.INITIAL),
            (this.originalInsertionMode = M.INITIAL),
            (this.headElement = null),
            (this.formElement = null),
            (this.currentNotInHTML = !1),
            (this.tmplInsertionModeStack = []),
            (this.pendingCharacterTokens = []),
            (this.hasNonWhitespacePendingCharacterToken = !1),
            (this.framesetOk = !0),
            (this.skipNextNewLine = !1),
            (this.fosterParentingEnabled = !1),
            (this.options = { ...tA, ...e }),
            (this.treeAdapter = this.options.treeAdapter),
            (this.onParseError = this.options.onParseError),
            this.onParseError && (this.options.sourceCodeLocationInfo = !0),
            (this.document = null != t ? t : this.treeAdapter.createDocument()),
            (this.tokenizer = new eJ(this.options, this)),
            (this.activeFormattingElements = new te(this.treeAdapter)),
            (this.fragmentContextID = n
              ? eU(this.treeAdapter.getTagName(n))
              : x.UNKNOWN),
            this._setContextModes(
              null != n ? n : this.document,
              this.fragmentContextID
            ),
            (this.openElements = new e9(this.document, this.treeAdapter, this));
        }
        static parse(e, t) {
          let n = new this(t);
          return n.tokenizer.write(e, !0), n.document;
        }
        static getFragmentParser(e, t) {
          let n = { ...tA, ...t };
          null != e ||
            (e = n.treeAdapter.createElement(k.TEMPLATE, S.HTML, []));
          let r = n.treeAdapter.createElement("documentmock", S.HTML, []),
            a = new this(n, r, e);
          return (
            a.fragmentContextID === x.TEMPLATE &&
              a.tmplInsertionModeStack.unshift(M.IN_TEMPLATE),
            a._initTokenizerForFragmentParsing(),
            a._insertFakeRootElement(),
            a._resetInsertionMode(),
            a._findFormInFragmentContext(),
            a
          );
        }
        getFragment() {
          let e = this.treeAdapter.getFirstChild(this.document),
            t = this.treeAdapter.createDocumentFragment();
          return this._adoptNodes(e, t), t;
        }
        _err(e, t, n) {
          var r;
          if (!this.onParseError) return;
          let a = null !== (r = e.location) && void 0 !== r ? r : tg,
            i = {
              code: t,
              startLine: a.startLine,
              startCol: a.startCol,
              startOffset: a.startOffset,
              endLine: n ? a.startLine : a.endLine,
              endCol: n ? a.startCol : a.endCol,
              endOffset: n ? a.startOffset : a.endOffset,
            };
          this.onParseError(i);
        }
        onItemPush(e, t, n) {
          var r, a;
          null === (a = (r = this.treeAdapter).onItemPush) ||
            void 0 === a ||
            a.call(r, e),
            n && this.openElements.stackTop > 0 && this._setContextModes(e, t);
        }
        onItemPop(e, t) {
          var n, r;
          if (
            (this.options.sourceCodeLocationInfo &&
              this._setEndLocation(e, this.currentToken),
            null === (r = (n = this.treeAdapter).onItemPop) ||
              void 0 === r ||
              r.call(n, e, this.openElements.current),
            t)
          ) {
            let e, t;
            0 === this.openElements.stackTop && this.fragmentContext
              ? ((e = this.fragmentContext), (t = this.fragmentContextID))
              : ({ current: e, currentTagId: t } = this.openElements),
              this._setContextModes(e, t);
          }
        }
        _setContextModes(e, t) {
          let n =
            e === this.document ||
            this.treeAdapter.getNamespaceURI(e) === S.HTML;
          (this.currentNotInHTML = !n),
            (this.tokenizer.inForeignNode =
              !n && !this._isIntegrationPoint(t, e));
        }
        _switchToTextParsing(e, t) {
          this._insertElement(e, S.HTML),
            (this.tokenizer.state = t),
            (this.originalInsertionMode = this.insertionMode),
            (this.insertionMode = M.TEXT);
        }
        switchToPlaintextParsing() {
          (this.insertionMode = M.TEXT),
            (this.originalInsertionMode = M.IN_BODY),
            (this.tokenizer.state = eV.PLAINTEXT);
        }
        _getAdjustedCurrentElement() {
          return 0 === this.openElements.stackTop && this.fragmentContext
            ? this.fragmentContext
            : this.openElements.current;
        }
        _findFormInFragmentContext() {
          let e = this.fragmentContext;
          for (; e; ) {
            if (this.treeAdapter.getTagName(e) === k.FORM) {
              this.formElement = e;
              break;
            }
            e = this.treeAdapter.getParentNode(e);
          }
        }
        _initTokenizerForFragmentParsing() {
          if (
            this.fragmentContext &&
            this.treeAdapter.getNamespaceURI(this.fragmentContext) === S.HTML
          )
            switch (this.fragmentContextID) {
              case x.TITLE:
              case x.TEXTAREA:
                this.tokenizer.state = eV.RCDATA;
                break;
              case x.STYLE:
              case x.XMP:
              case x.IFRAME:
              case x.NOEMBED:
              case x.NOFRAMES:
              case x.NOSCRIPT:
                this.tokenizer.state = eV.RAWTEXT;
                break;
              case x.SCRIPT:
                this.tokenizer.state = eV.SCRIPT_DATA;
                break;
              case x.PLAINTEXT:
                this.tokenizer.state = eV.PLAINTEXT;
            }
        }
        _setDocumentType(e) {
          let t = e.name || "",
            n = e.publicId || "",
            r = e.systemId || "";
          if (
            (this.treeAdapter.setDocumentType(this.document, t, n, r),
            e.location)
          ) {
            let t = this.treeAdapter.getChildNodes(this.document),
              n = t.find((e) => this.treeAdapter.isDocumentTypeNode(e));
            n && this.treeAdapter.setNodeSourceCodeLocation(n, e.location);
          }
        }
        _attachElementToTree(e, t) {
          if (this.options.sourceCodeLocationInfo) {
            let n = t && { ...t, startTag: t };
            this.treeAdapter.setNodeSourceCodeLocation(e, n);
          }
          if (this._shouldFosterParentOnInsertion())
            this._fosterParentElement(e);
          else {
            let t = this.openElements.currentTmplContentOrNode;
            this.treeAdapter.appendChild(t, e);
          }
        }
        _appendElement(e, t) {
          let n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
          this._attachElementToTree(n, e.location);
        }
        _insertElement(e, t) {
          let n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
          this._attachElementToTree(n, e.location),
            this.openElements.push(n, e.tagID);
        }
        _insertFakeElement(e, t) {
          let n = this.treeAdapter.createElement(e, S.HTML, []);
          this._attachElementToTree(n, null), this.openElements.push(n, t);
        }
        _insertTemplate(e) {
          let t = this.treeAdapter.createElement(e.tagName, S.HTML, e.attrs),
            n = this.treeAdapter.createDocumentFragment();
          this.treeAdapter.setTemplateContent(t, n),
            this._attachElementToTree(t, e.location),
            this.openElements.push(t, e.tagID),
            this.options.sourceCodeLocationInfo &&
              this.treeAdapter.setNodeSourceCodeLocation(n, null);
        }
        _insertFakeRootElement() {
          let e = this.treeAdapter.createElement(k.HTML, S.HTML, []);
          this.options.sourceCodeLocationInfo &&
            this.treeAdapter.setNodeSourceCodeLocation(e, null),
            this.treeAdapter.appendChild(this.openElements.current, e),
            this.openElements.push(e, x.HTML);
        }
        _appendCommentNode(e, t) {
          let n = this.treeAdapter.createCommentNode(e.data);
          this.treeAdapter.appendChild(t, n),
            this.options.sourceCodeLocationInfo &&
              this.treeAdapter.setNodeSourceCodeLocation(n, e.location);
        }
        _insertCharacters(e) {
          let t, n;
          if (
            (this._shouldFosterParentOnInsertion()
              ? (({ parent: t, beforeElement: n } =
                  this._findFosterParentingLocation()),
                n
                  ? this.treeAdapter.insertTextBefore(t, e.chars, n)
                  : this.treeAdapter.insertText(t, e.chars))
              : ((t = this.openElements.currentTmplContentOrNode),
                this.treeAdapter.insertText(t, e.chars)),
            !e.location)
          )
            return;
          let r = this.treeAdapter.getChildNodes(t),
            a = n ? r.lastIndexOf(n) : r.length,
            i = r[a - 1],
            s = this.treeAdapter.getNodeSourceCodeLocation(i);
          if (s) {
            let { endLine: t, endCol: n, endOffset: r } = e.location;
            this.treeAdapter.updateNodeSourceCodeLocation(i, {
              endLine: t,
              endCol: n,
              endOffset: r,
            });
          } else
            this.options.sourceCodeLocationInfo &&
              this.treeAdapter.setNodeSourceCodeLocation(i, e.location);
        }
        _adoptNodes(e, t) {
          for (
            let n = this.treeAdapter.getFirstChild(e);
            n;
            n = this.treeAdapter.getFirstChild(e)
          )
            this.treeAdapter.detachNode(n), this.treeAdapter.appendChild(t, n);
        }
        _setEndLocation(e, t) {
          if (this.treeAdapter.getNodeSourceCodeLocation(e) && t.location) {
            let n = t.location,
              r = this.treeAdapter.getTagName(e),
              a =
                t.type === v.END_TAG && r === t.tagName
                  ? {
                      endTag: { ...n },
                      endLine: n.endLine,
                      endCol: n.endCol,
                      endOffset: n.endOffset,
                    }
                  : {
                      endLine: n.startLine,
                      endCol: n.startCol,
                      endOffset: n.startOffset,
                    };
            this.treeAdapter.updateNodeSourceCodeLocation(e, a);
          }
        }
        shouldProcessStartTagTokenInForeignContent(e) {
          let t, n;
          return (
            !!this.currentNotInHTML &&
            (0 === this.openElements.stackTop && this.fragmentContext
              ? ((t = this.fragmentContext), (n = this.fragmentContextID))
              : ({ current: t, currentTagId: n } = this.openElements),
            (e.tagID !== x.SVG ||
              this.treeAdapter.getTagName(t) !== k.ANNOTATION_XML ||
              this.treeAdapter.getNamespaceURI(t) !== S.MATHML) &&
              (this.tokenizer.inForeignNode ||
                ((e.tagID === x.MGLYPH || e.tagID === x.MALIGNMARK) &&
                  !this._isIntegrationPoint(n, t, S.HTML))))
          );
        }
        _processToken(e) {
          switch (e.type) {
            case v.CHARACTER:
              this.onCharacter(e);
              break;
            case v.NULL_CHARACTER:
              this.onNullCharacter(e);
              break;
            case v.COMMENT:
              this.onComment(e);
              break;
            case v.DOCTYPE:
              this.onDoctype(e);
              break;
            case v.START_TAG:
              this._processStartTag(e);
              break;
            case v.END_TAG:
              this.onEndTag(e);
              break;
            case v.EOF:
              this.onEof(e);
              break;
            case v.WHITESPACE_CHARACTER:
              this.onWhitespaceCharacter(e);
          }
        }
        _isIntegrationPoint(e, t, n) {
          let r = this.treeAdapter.getNamespaceURI(t),
            a = this.treeAdapter.getAttrList(t);
          return (
            ((!n || n === S.HTML) &&
              (function (e, t, n) {
                if (t === S.MATHML && e === x.ANNOTATION_XML) {
                  for (let e = 0; e < n.length; e++)
                    if (n[e].name === R.ENCODING) {
                      let t = n[e].value.toLowerCase();
                      return t === tu.TEXT_HTML || t === tu.APPLICATION_XML;
                    }
                }
                return (
                  t === S.SVG &&
                  (e === x.FOREIGN_OBJECT || e === x.DESC || e === x.TITLE)
                );
              })(e, r, a)) ||
            ((!n || n === S.MATHML) &&
              r === S.MATHML &&
              (e === x.MI ||
                e === x.MO ||
                e === x.MN ||
                e === x.MS ||
                e === x.MTEXT))
          );
        }
        _reconstructActiveFormattingElements() {
          let e = this.activeFormattingElements.entries.length;
          if (e) {
            let t = this.activeFormattingElements.entries.findIndex(
                (e) =>
                  e.type === D.Marker || this.openElements.contains(e.element)
              ),
              n = t < 0 ? e - 1 : t - 1;
            for (let e = n; e >= 0; e--) {
              let t = this.activeFormattingElements.entries[e];
              this._insertElement(
                t.token,
                this.treeAdapter.getNamespaceURI(t.element)
              ),
                (t.element = this.openElements.current);
            }
          }
        }
        _closeTableCell() {
          this.openElements.generateImpliedEndTags(),
            this.openElements.popUntilTableCellPopped(),
            this.activeFormattingElements.clearToLastMarker(),
            (this.insertionMode = M.IN_ROW);
        }
        _closePElement() {
          this.openElements.generateImpliedEndTagsWithExclusion(x.P),
            this.openElements.popUntilTagNamePopped(x.P);
        }
        _resetInsertionMode() {
          for (let e = this.openElements.stackTop; e >= 0; e--)
            switch (
              0 === e && this.fragmentContext
                ? this.fragmentContextID
                : this.openElements.tagIDs[e]
            ) {
              case x.TR:
                this.insertionMode = M.IN_ROW;
                return;
              case x.TBODY:
              case x.THEAD:
              case x.TFOOT:
                this.insertionMode = M.IN_TABLE_BODY;
                return;
              case x.CAPTION:
                this.insertionMode = M.IN_CAPTION;
                return;
              case x.COLGROUP:
                this.insertionMode = M.IN_COLUMN_GROUP;
                return;
              case x.TABLE:
                this.insertionMode = M.IN_TABLE;
                return;
              case x.BODY:
                this.insertionMode = M.IN_BODY;
                return;
              case x.FRAMESET:
                this.insertionMode = M.IN_FRAMESET;
                return;
              case x.SELECT:
                this._resetInsertionModeForSelect(e);
                return;
              case x.TEMPLATE:
                this.insertionMode = this.tmplInsertionModeStack[0];
                return;
              case x.HTML:
                this.insertionMode = this.headElement
                  ? M.AFTER_HEAD
                  : M.BEFORE_HEAD;
                return;
              case x.TD:
              case x.TH:
                if (e > 0) {
                  this.insertionMode = M.IN_CELL;
                  return;
                }
                break;
              case x.HEAD:
                if (e > 0) {
                  this.insertionMode = M.IN_HEAD;
                  return;
                }
            }
          this.insertionMode = M.IN_BODY;
        }
        _resetInsertionModeForSelect(e) {
          if (e > 0)
            for (let t = e - 1; t > 0; t--) {
              let e = this.openElements.tagIDs[t];
              if (e === x.TEMPLATE) break;
              if (e === x.TABLE) {
                this.insertionMode = M.IN_SELECT_IN_TABLE;
                return;
              }
            }
          this.insertionMode = M.IN_SELECT;
        }
        _isElementCausesFosterParenting(e) {
          return t_.has(e);
        }
        _shouldFosterParentOnInsertion() {
          return (
            this.fosterParentingEnabled &&
            this._isElementCausesFosterParenting(this.openElements.currentTagId)
          );
        }
        _findFosterParentingLocation() {
          for (let e = this.openElements.stackTop; e >= 0; e--) {
            let t = this.openElements.items[e];
            switch (this.openElements.tagIDs[e]) {
              case x.TEMPLATE:
                if (this.treeAdapter.getNamespaceURI(t) === S.HTML)
                  return {
                    parent: this.treeAdapter.getTemplateContent(t),
                    beforeElement: null,
                  };
                break;
              case x.TABLE: {
                let n = this.treeAdapter.getParentNode(t);
                if (n) return { parent: n, beforeElement: t };
                return {
                  parent: this.openElements.items[e - 1],
                  beforeElement: null,
                };
              }
            }
          }
          return { parent: this.openElements.items[0], beforeElement: null };
        }
        _fosterParentElement(e) {
          let t = this._findFosterParentingLocation();
          t.beforeElement
            ? this.treeAdapter.insertBefore(t.parent, e, t.beforeElement)
            : this.treeAdapter.appendChild(t.parent, e);
        }
        _isSpecialElement(e, t) {
          let n = this.treeAdapter.getNamespaceURI(e);
          return eG[n].has(t);
        }
        onCharacter(e) {
          if (((this.skipNextNewLine = !1), this.tokenizer.inForeignNode)) {
            var t;
            (t = this), t._insertCharacters(e), (t.framesetOk = !1);
            return;
          }
          switch (this.insertionMode) {
            case M.INITIAL:
              tC(this, e);
              break;
            case M.BEFORE_HTML:
              tI(this, e);
              break;
            case M.BEFORE_HEAD:
              tS(this, e);
              break;
            case M.IN_HEAD:
              tk(this, e);
              break;
            case M.IN_HEAD_NO_SCRIPT:
              tx(this, e);
              break;
            case M.AFTER_HEAD:
              tL(this, e);
              break;
            case M.IN_BODY:
            case M.IN_CAPTION:
            case M.IN_CELL:
            case M.IN_TEMPLATE:
              tw(this, e);
              break;
            case M.TEXT:
            case M.IN_SELECT:
            case M.IN_SELECT_IN_TABLE:
              this._insertCharacters(e);
              break;
            case M.IN_TABLE:
            case M.IN_TABLE_BODY:
            case M.IN_ROW:
              tV(this, e);
              break;
            case M.IN_TABLE_TEXT:
              tK(this, e);
              break;
            case M.IN_COLUMN_GROUP:
              tJ(this, e);
              break;
            case M.AFTER_BODY:
              t9(this, e);
              break;
            case M.AFTER_AFTER_BODY:
              t7(this, e);
          }
        }
        onNullCharacter(e) {
          if (((this.skipNextNewLine = !1), this.tokenizer.inForeignNode)) {
            (e.chars = "�"), this._insertCharacters(e);
            return;
          }
          switch (this.insertionMode) {
            case M.INITIAL:
              tC(this, e);
              break;
            case M.BEFORE_HTML:
              tI(this, e);
              break;
            case M.BEFORE_HEAD:
              tS(this, e);
              break;
            case M.IN_HEAD:
              tk(this, e);
              break;
            case M.IN_HEAD_NO_SCRIPT:
              tx(this, e);
              break;
            case M.AFTER_HEAD:
              tL(this, e);
              break;
            case M.TEXT:
              this._insertCharacters(e);
              break;
            case M.IN_TABLE:
            case M.IN_TABLE_BODY:
            case M.IN_ROW:
              tV(this, e);
              break;
            case M.IN_COLUMN_GROUP:
              tJ(this, e);
              break;
            case M.AFTER_BODY:
              t9(this, e);
              break;
            case M.AFTER_AFTER_BODY:
              t7(this, e);
          }
        }
        onComment(e) {
          if (((this.skipNextNewLine = !1), this.currentNotInHTML)) {
            ty(this, e);
            return;
          }
          switch (this.insertionMode) {
            case M.INITIAL:
            case M.BEFORE_HTML:
            case M.BEFORE_HEAD:
            case M.IN_HEAD:
            case M.IN_HEAD_NO_SCRIPT:
            case M.AFTER_HEAD:
            case M.IN_BODY:
            case M.IN_TABLE:
            case M.IN_CAPTION:
            case M.IN_COLUMN_GROUP:
            case M.IN_TABLE_BODY:
            case M.IN_ROW:
            case M.IN_CELL:
            case M.IN_SELECT:
            case M.IN_SELECT_IN_TABLE:
            case M.IN_TEMPLATE:
            case M.IN_FRAMESET:
            case M.AFTER_FRAMESET:
              ty(this, e);
              break;
            case M.IN_TABLE_TEXT:
              tQ(this, e);
              break;
            case M.AFTER_BODY:
              !(function (e, t) {
                e._appendCommentNode(t, e.openElements.items[0]);
              })(this, e);
              break;
            case M.AFTER_AFTER_BODY:
            case M.AFTER_AFTER_FRAMESET:
              !(function (e, t) {
                e._appendCommentNode(t, e.document);
              })(this, e);
          }
        }
        onDoctype(e) {
          switch (((this.skipNextNewLine = !1), this.insertionMode)) {
            case M.INITIAL:
              !(function (e, t) {
                e._setDocumentType(t);
                let n = t.forceQuirks
                  ? O.QUIRKS
                  : (function (e) {
                      if (e.name !== tr) return O.QUIRKS;
                      let { systemId: t } = e;
                      if (
                        t &&
                        "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd" ===
                          t.toLowerCase()
                      )
                        return O.QUIRKS;
                      let { publicId: n } = e;
                      if (null !== n) {
                        if (((n = n.toLowerCase()), ts.has(n))) return O.QUIRKS;
                        let e = null === t ? ti : ta;
                        if (tc(n, e)) return O.QUIRKS;
                        if (tc(n, (e = null === t ? to : tl)))
                          return O.LIMITED_QUIRKS;
                      }
                      return O.NO_QUIRKS;
                    })(t);
                (t.name === tr &&
                  null === t.publicId &&
                  (null === t.systemId ||
                    "about:legacy-compat" === t.systemId)) ||
                  e._err(t, A.nonConformingDoctype),
                  e.treeAdapter.setDocumentMode(e.document, n),
                  (e.insertionMode = M.BEFORE_HTML);
              })(this, e);
              break;
            case M.BEFORE_HEAD:
            case M.IN_HEAD:
            case M.IN_HEAD_NO_SCRIPT:
            case M.AFTER_HEAD:
              this._err(e, A.misplacedDoctype);
              break;
            case M.IN_TABLE_TEXT:
              tQ(this, e);
          }
        }
        onStartTag(e) {
          (this.skipNextNewLine = !1),
            (this.currentToken = e),
            this._processStartTag(e),
            e.selfClosing &&
              !e.ackSelfClosing &&
              this._err(e, A.nonVoidHtmlElementStartTagWithTrailingSolidus);
        }
        _processStartTag(e) {
          this.shouldProcessStartTagTokenInForeignContent(e)
            ? (function (e, t) {
                if (
                  (function (e) {
                    let t = e.tagID,
                      n =
                        t === x.FONT &&
                        e.attrs.some(
                          ({ name: e }) =>
                            e === R.COLOR || e === R.SIZE || e === R.FACE
                        );
                    return n || tf.has(t);
                  })(t)
                )
                  ne(e), e._startTagOutsideForeignContent(t);
                else {
                  let n = e._getAdjustedCurrentElement(),
                    r = e.treeAdapter.getNamespaceURI(n);
                  r === S.MATHML
                    ? tm(t)
                    : r === S.SVG &&
                      ((function (e) {
                        let t = tp.get(e.tagName);
                        null != t &&
                          ((e.tagName = t), (e.tagID = eU(e.tagName)));
                      })(t),
                      tE(t)),
                    tT(t),
                    t.selfClosing
                      ? e._appendElement(t, r)
                      : e._insertElement(t, r),
                    (t.ackSelfClosing = !0);
                }
              })(this, e)
            : this._startTagOutsideForeignContent(e);
        }
        _startTagOutsideForeignContent(e) {
          var t;
          switch (this.insertionMode) {
            case M.INITIAL:
              tC(this, e);
              break;
            case M.BEFORE_HTML:
              (t = this),
                e.tagID === x.HTML
                  ? (t._insertElement(e, S.HTML),
                    (t.insertionMode = M.BEFORE_HEAD))
                  : tI(t, e);
              break;
            case M.BEFORE_HEAD:
              !(function (e, t) {
                switch (t.tagID) {
                  case x.HTML:
                    tF(e, t);
                    break;
                  case x.HEAD:
                    e._insertElement(t, S.HTML),
                      (e.headElement = e.openElements.current),
                      (e.insertionMode = M.IN_HEAD);
                    break;
                  default:
                    tS(e, t);
                }
              })(this, e);
              break;
            case M.IN_HEAD:
              tR(this, e);
              break;
            case M.IN_HEAD_NO_SCRIPT:
              !(function (e, t) {
                switch (t.tagID) {
                  case x.HTML:
                    tF(e, t);
                    break;
                  case x.BASEFONT:
                  case x.BGSOUND:
                  case x.HEAD:
                  case x.LINK:
                  case x.META:
                  case x.NOFRAMES:
                  case x.STYLE:
                    tR(e, t);
                    break;
                  case x.NOSCRIPT:
                    e._err(t, A.nestedNoscriptInHead);
                    break;
                  default:
                    tx(e, t);
                }
              })(this, e);
              break;
            case M.AFTER_HEAD:
              !(function (e, t) {
                switch (t.tagID) {
                  case x.HTML:
                    tF(e, t);
                    break;
                  case x.BODY:
                    e._insertElement(t, S.HTML),
                      (e.framesetOk = !1),
                      (e.insertionMode = M.IN_BODY);
                    break;
                  case x.FRAMESET:
                    e._insertElement(t, S.HTML),
                      (e.insertionMode = M.IN_FRAMESET);
                    break;
                  case x.BASE:
                  case x.BASEFONT:
                  case x.BGSOUND:
                  case x.LINK:
                  case x.META:
                  case x.NOFRAMES:
                  case x.SCRIPT:
                  case x.STYLE:
                  case x.TEMPLATE:
                  case x.TITLE:
                    e._err(t, A.abandonedHeadElementChild),
                      e.openElements.push(e.headElement, x.HEAD),
                      tR(e, t),
                      e.openElements.remove(e.headElement);
                    break;
                  case x.HEAD:
                    e._err(t, A.misplacedStartTagForHeadElement);
                    break;
                  default:
                    tL(e, t);
                }
              })(this, e);
              break;
            case M.IN_BODY:
              tF(this, e);
              break;
            case M.IN_TABLE:
              tZ(this, e);
              break;
            case M.IN_TABLE_TEXT:
              tQ(this, e);
              break;
            case M.IN_CAPTION:
              !(function (e, t) {
                let n = t.tagID;
                tX.has(n)
                  ? e.openElements.hasInTableScope(x.CAPTION) &&
                    (e.openElements.generateImpliedEndTags(),
                    e.openElements.popUntilTagNamePopped(x.CAPTION),
                    e.activeFormattingElements.clearToLastMarker(),
                    (e.insertionMode = M.IN_TABLE),
                    tZ(e, t))
                  : tF(e, t);
              })(this, e);
              break;
            case M.IN_COLUMN_GROUP:
              t$(this, e);
              break;
            case M.IN_TABLE_BODY:
              t0(this, e);
              break;
            case M.IN_ROW:
              t2(this, e);
              break;
            case M.IN_CELL:
              !(function (e, t) {
                let n = t.tagID;
                tX.has(n)
                  ? (e.openElements.hasInTableScope(x.TD) ||
                      e.openElements.hasInTableScope(x.TH)) &&
                    (e._closeTableCell(), t2(e, t))
                  : tF(e, t);
              })(this, e);
              break;
            case M.IN_SELECT:
              t3(this, e);
              break;
            case M.IN_SELECT_IN_TABLE:
              !(function (e, t) {
                let n = t.tagID;
                n === x.CAPTION ||
                n === x.TABLE ||
                n === x.TBODY ||
                n === x.TFOOT ||
                n === x.THEAD ||
                n === x.TR ||
                n === x.TD ||
                n === x.TH
                  ? (e.openElements.popUntilTagNamePopped(x.SELECT),
                    e._resetInsertionMode(),
                    e._processStartTag(t))
                  : t3(e, t);
              })(this, e);
              break;
            case M.IN_TEMPLATE:
              !(function (e, t) {
                switch (t.tagID) {
                  case x.BASE:
                  case x.BASEFONT:
                  case x.BGSOUND:
                  case x.LINK:
                  case x.META:
                  case x.NOFRAMES:
                  case x.SCRIPT:
                  case x.STYLE:
                  case x.TEMPLATE:
                  case x.TITLE:
                    tR(e, t);
                    break;
                  case x.CAPTION:
                  case x.COLGROUP:
                  case x.TBODY:
                  case x.TFOOT:
                  case x.THEAD:
                    (e.tmplInsertionModeStack[0] = M.IN_TABLE),
                      (e.insertionMode = M.IN_TABLE),
                      tZ(e, t);
                    break;
                  case x.COL:
                    (e.tmplInsertionModeStack[0] = M.IN_COLUMN_GROUP),
                      (e.insertionMode = M.IN_COLUMN_GROUP),
                      t$(e, t);
                    break;
                  case x.TR:
                    (e.tmplInsertionModeStack[0] = M.IN_TABLE_BODY),
                      (e.insertionMode = M.IN_TABLE_BODY),
                      t0(e, t);
                    break;
                  case x.TD:
                  case x.TH:
                    (e.tmplInsertionModeStack[0] = M.IN_ROW),
                      (e.insertionMode = M.IN_ROW),
                      t2(e, t);
                    break;
                  default:
                    (e.tmplInsertionModeStack[0] = M.IN_BODY),
                      (e.insertionMode = M.IN_BODY),
                      tF(e, t);
                }
              })(this, e);
              break;
            case M.AFTER_BODY:
              e.tagID === x.HTML ? tF(this, e) : t9(this, e);
              break;
            case M.IN_FRAMESET:
              !(function (e, t) {
                switch (t.tagID) {
                  case x.HTML:
                    tF(e, t);
                    break;
                  case x.FRAMESET:
                    e._insertElement(t, S.HTML);
                    break;
                  case x.FRAME:
                    e._appendElement(t, S.HTML), (t.ackSelfClosing = !0);
                    break;
                  case x.NOFRAMES:
                    tR(e, t);
                }
              })(this, e);
              break;
            case M.AFTER_FRAMESET:
              !(function (e, t) {
                switch (t.tagID) {
                  case x.HTML:
                    tF(e, t);
                    break;
                  case x.NOFRAMES:
                    tR(e, t);
                }
              })(this, e);
              break;
            case M.AFTER_AFTER_BODY:
              e.tagID === x.HTML ? tF(this, e) : t7(this, e);
              break;
            case M.AFTER_AFTER_FRAMESET:
              !(function (e, t) {
                switch (t.tagID) {
                  case x.HTML:
                    tF(e, t);
                    break;
                  case x.NOFRAMES:
                    tR(e, t);
                }
              })(this, e);
          }
        }
        onEndTag(e) {
          (this.skipNextNewLine = !1),
            (this.currentToken = e),
            this.currentNotInHTML
              ? (function (e, t) {
                  if (t.tagID === x.P || t.tagID === x.BR) {
                    ne(e), e._endTagOutsideForeignContent(t);
                    return;
                  }
                  for (let n = e.openElements.stackTop; n > 0; n--) {
                    let r = e.openElements.items[n];
                    if (e.treeAdapter.getNamespaceURI(r) === S.HTML) {
                      e._endTagOutsideForeignContent(t);
                      break;
                    }
                    let a = e.treeAdapter.getTagName(r);
                    if (a.toLowerCase() === t.tagName) {
                      (t.tagName = a), e.openElements.shortenToLength(n);
                      break;
                    }
                  }
                })(this, e)
              : this._endTagOutsideForeignContent(e);
        }
        _endTagOutsideForeignContent(e) {
          var t, n, r, a;
          switch (this.insertionMode) {
            case M.INITIAL:
              tC(this, e);
              break;
            case M.BEFORE_HTML:
              !(function (e, t) {
                let n = t.tagID;
                (n === x.HTML || n === x.HEAD || n === x.BODY || n === x.BR) &&
                  tI(e, t);
              })(this, e);
              break;
            case M.BEFORE_HEAD:
              !(function (e, t) {
                let n = t.tagID;
                n === x.HEAD || n === x.BODY || n === x.HTML || n === x.BR
                  ? tS(e, t)
                  : e._err(t, A.endTagWithoutMatchingOpenElement);
              })(this, e);
              break;
            case M.IN_HEAD:
              !(function (e, t) {
                switch (t.tagID) {
                  case x.HEAD:
                    e.openElements.pop(), (e.insertionMode = M.AFTER_HEAD);
                    break;
                  case x.BODY:
                  case x.BR:
                  case x.HTML:
                    tk(e, t);
                    break;
                  case x.TEMPLATE:
                    tO(e, t);
                    break;
                  default:
                    e._err(t, A.endTagWithoutMatchingOpenElement);
                }
              })(this, e);
              break;
            case M.IN_HEAD_NO_SCRIPT:
              !(function (e, t) {
                switch (t.tagID) {
                  case x.NOSCRIPT:
                    e.openElements.pop(), (e.insertionMode = M.IN_HEAD);
                    break;
                  case x.BR:
                    tx(e, t);
                    break;
                  default:
                    e._err(t, A.endTagWithoutMatchingOpenElement);
                }
              })(this, e);
              break;
            case M.AFTER_HEAD:
              !(function (e, t) {
                switch (t.tagID) {
                  case x.BODY:
                  case x.HTML:
                  case x.BR:
                    tL(e, t);
                    break;
                  case x.TEMPLATE:
                    tO(e, t);
                    break;
                  default:
                    e._err(t, A.endTagWithoutMatchingOpenElement);
                }
              })(this, e);
              break;
            case M.IN_BODY:
              tj(this, e);
              break;
            case M.TEXT:
              (t = this),
                e.tagID === x.SCRIPT &&
                  (null === (n = t.scriptHandler) ||
                    void 0 === n ||
                    n.call(t, t.openElements.current)),
                t.openElements.pop(),
                (t.insertionMode = t.originalInsertionMode);
              break;
            case M.IN_TABLE:
              tW(this, e);
              break;
            case M.IN_TABLE_TEXT:
              tQ(this, e);
              break;
            case M.IN_CAPTION:
              !(function (e, t) {
                let n = t.tagID;
                switch (n) {
                  case x.CAPTION:
                  case x.TABLE:
                    e.openElements.hasInTableScope(x.CAPTION) &&
                      (e.openElements.generateImpliedEndTags(),
                      e.openElements.popUntilTagNamePopped(x.CAPTION),
                      e.activeFormattingElements.clearToLastMarker(),
                      (e.insertionMode = M.IN_TABLE),
                      n === x.TABLE && tW(e, t));
                    break;
                  case x.BODY:
                  case x.COL:
                  case x.COLGROUP:
                  case x.HTML:
                  case x.TBODY:
                  case x.TD:
                  case x.TFOOT:
                  case x.TH:
                  case x.THEAD:
                  case x.TR:
                    break;
                  default:
                    tj(e, t);
                }
              })(this, e);
              break;
            case M.IN_COLUMN_GROUP:
              !(function (e, t) {
                switch (t.tagID) {
                  case x.COLGROUP:
                    e.openElements.currentTagId === x.COLGROUP &&
                      (e.openElements.pop(), (e.insertionMode = M.IN_TABLE));
                    break;
                  case x.TEMPLATE:
                    tO(e, t);
                    break;
                  case x.COL:
                    break;
                  default:
                    tJ(e, t);
                }
              })(this, e);
              break;
            case M.IN_TABLE_BODY:
              t1(this, e);
              break;
            case M.IN_ROW:
              t5(this, e);
              break;
            case M.IN_CELL:
              !(function (e, t) {
                let n = t.tagID;
                switch (n) {
                  case x.TD:
                  case x.TH:
                    e.openElements.hasInTableScope(n) &&
                      (e.openElements.generateImpliedEndTags(),
                      e.openElements.popUntilTagNamePopped(n),
                      e.activeFormattingElements.clearToLastMarker(),
                      (e.insertionMode = M.IN_ROW));
                    break;
                  case x.TABLE:
                  case x.TBODY:
                  case x.TFOOT:
                  case x.THEAD:
                  case x.TR:
                    e.openElements.hasInTableScope(n) &&
                      (e._closeTableCell(), t5(e, t));
                    break;
                  case x.BODY:
                  case x.CAPTION:
                  case x.COL:
                  case x.COLGROUP:
                  case x.HTML:
                    break;
                  default:
                    tj(e, t);
                }
              })(this, e);
              break;
            case M.IN_SELECT:
              t4(this, e);
              break;
            case M.IN_SELECT_IN_TABLE:
              !(function (e, t) {
                let n = t.tagID;
                n === x.CAPTION ||
                n === x.TABLE ||
                n === x.TBODY ||
                n === x.TFOOT ||
                n === x.THEAD ||
                n === x.TR ||
                n === x.TD ||
                n === x.TH
                  ? e.openElements.hasInTableScope(n) &&
                    (e.openElements.popUntilTagNamePopped(x.SELECT),
                    e._resetInsertionMode(),
                    e.onEndTag(t))
                  : t4(e, t);
              })(this, e);
              break;
            case M.IN_TEMPLATE:
              e.tagID === x.TEMPLATE && tO(this, e);
              break;
            case M.AFTER_BODY:
              t6(this, e);
              break;
            case M.IN_FRAMESET:
              (r = this),
                e.tagID !== x.FRAMESET ||
                  r.openElements.isRootHtmlElementCurrent() ||
                  (r.openElements.pop(),
                  r.fragmentContext ||
                    r.openElements.currentTagId === x.FRAMESET ||
                    (r.insertionMode = M.AFTER_FRAMESET));
              break;
            case M.AFTER_FRAMESET:
              (a = this),
                e.tagID === x.HTML &&
                  (a.insertionMode = M.AFTER_AFTER_FRAMESET);
              break;
            case M.AFTER_AFTER_BODY:
              t7(this, e);
          }
        }
        onEof(e) {
          switch (this.insertionMode) {
            case M.INITIAL:
              tC(this, e);
              break;
            case M.BEFORE_HTML:
              tI(this, e);
              break;
            case M.BEFORE_HEAD:
              tS(this, e);
              break;
            case M.IN_HEAD:
              tk(this, e);
              break;
            case M.IN_HEAD_NO_SCRIPT:
              tx(this, e);
              break;
            case M.AFTER_HEAD:
              tL(this, e);
              break;
            case M.IN_BODY:
            case M.IN_TABLE:
            case M.IN_CAPTION:
            case M.IN_COLUMN_GROUP:
            case M.IN_TABLE_BODY:
            case M.IN_ROW:
            case M.IN_CELL:
            case M.IN_SELECT:
            case M.IN_SELECT_IN_TABLE:
              tY(this, e);
              break;
            case M.TEXT:
              var t;
              (t = this),
                t._err(e, A.eofInElementThatCanContainOnlyText),
                t.openElements.pop(),
                (t.insertionMode = t.originalInsertionMode),
                t.onEof(e);
              break;
            case M.IN_TABLE_TEXT:
              tQ(this, e);
              break;
            case M.IN_TEMPLATE:
              t8(this, e);
              break;
            case M.AFTER_BODY:
            case M.IN_FRAMESET:
            case M.AFTER_FRAMESET:
            case M.AFTER_AFTER_BODY:
            case M.AFTER_AFTER_FRAMESET:
              tN(this, e);
          }
        }
        onWhitespaceCharacter(e) {
          if (
            this.skipNextNewLine &&
            ((this.skipNextNewLine = !1), e.chars.charCodeAt(0) === _.LINE_FEED)
          ) {
            if (1 === e.chars.length) return;
            e.chars = e.chars.substr(1);
          }
          if (this.tokenizer.inForeignNode) {
            this._insertCharacters(e);
            return;
          }
          switch (this.insertionMode) {
            case M.IN_HEAD:
            case M.IN_HEAD_NO_SCRIPT:
            case M.AFTER_HEAD:
            case M.TEXT:
            case M.IN_COLUMN_GROUP:
            case M.IN_SELECT:
            case M.IN_SELECT_IN_TABLE:
            case M.IN_FRAMESET:
            case M.AFTER_FRAMESET:
              this._insertCharacters(e);
              break;
            case M.IN_BODY:
            case M.IN_CAPTION:
            case M.IN_CELL:
            case M.IN_TEMPLATE:
            case M.AFTER_BODY:
            case M.AFTER_AFTER_BODY:
            case M.AFTER_AFTER_FRAMESET:
              tM(this, e);
              break;
            case M.IN_TABLE:
            case M.IN_TABLE_BODY:
            case M.IN_ROW:
              tV(this, e);
              break;
            case M.IN_TABLE_TEXT:
              tz(this, e);
          }
        }
      }
      function tb(e, t) {
        for (let n = 0; n < 8; n++) {
          let n = (function (e, t) {
            let n =
              e.activeFormattingElements.getElementEntryInScopeWithTagName(
                t.tagName
              );
            return (
              n
                ? e.openElements.contains(n.element)
                  ? e.openElements.hasInScope(t.tagID) || (n = null)
                  : (e.activeFormattingElements.removeEntry(n), (n = null))
                : tG(e, t),
              n
            );
          })(e, t);
          if (!n) break;
          let r = (function (e, t) {
            let n = null,
              r = e.openElements.stackTop;
            for (; r >= 0; r--) {
              let a = e.openElements.items[r];
              if (a === t.element) break;
              e._isSpecialElement(a, e.openElements.tagIDs[r]) && (n = a);
            }
            return (
              n ||
                (e.openElements.shortenToLength(r < 0 ? 0 : r),
                e.activeFormattingElements.removeEntry(t)),
              n
            );
          })(e, n);
          if (!r) break;
          e.activeFormattingElements.bookmark = n;
          let a = (function (e, t, n) {
              let r = t,
                a = e.openElements.getCommonAncestor(t);
              for (let i = 0, s = a; s !== n; i++, s = a) {
                a = e.openElements.getCommonAncestor(s);
                let n = e.activeFormattingElements.getElementEntry(s),
                  o = n && i >= 3,
                  l = !n || o;
                l
                  ? (o && e.activeFormattingElements.removeEntry(n),
                    e.openElements.remove(s))
                  : ((s = (function (e, t) {
                      let n = e.treeAdapter.getNamespaceURI(t.element),
                        r = e.treeAdapter.createElement(
                          t.token.tagName,
                          n,
                          t.token.attrs
                        );
                      return (
                        e.openElements.replace(t.element, r), (t.element = r), r
                      );
                    })(e, n)),
                    r === t && (e.activeFormattingElements.bookmark = n),
                    e.treeAdapter.detachNode(r),
                    e.treeAdapter.appendChild(s, r),
                    (r = s));
              }
              return r;
            })(e, r, n.element),
            i = e.openElements.getCommonAncestor(n.element);
          e.treeAdapter.detachNode(a),
            i &&
              (function (e, t, n) {
                let r = e.treeAdapter.getTagName(t),
                  a = eU(r);
                if (e._isElementCausesFosterParenting(a))
                  e._fosterParentElement(n);
                else {
                  let r = e.treeAdapter.getNamespaceURI(t);
                  a === x.TEMPLATE &&
                    r === S.HTML &&
                    (t = e.treeAdapter.getTemplateContent(t)),
                    e.treeAdapter.appendChild(t, n);
                }
              })(e, i, a),
            (function (e, t, n) {
              let r = e.treeAdapter.getNamespaceURI(n.element),
                { token: a } = n,
                i = e.treeAdapter.createElement(a.tagName, r, a.attrs);
              e._adoptNodes(t, i),
                e.treeAdapter.appendChild(t, i),
                e.activeFormattingElements.insertElementAfterBookmark(i, a),
                e.activeFormattingElements.removeEntry(n),
                e.openElements.remove(n.element),
                e.openElements.insertAfter(t, i, a.tagID);
            })(e, r, n);
        }
      }
      function ty(e, t) {
        e._appendCommentNode(t, e.openElements.currentTmplContentOrNode);
      }
      function tN(e, t) {
        if (((e.stopped = !0), t.location)) {
          let n = e.fragmentContext ? 0 : 2;
          for (let r = e.openElements.stackTop; r >= n; r--)
            e._setEndLocation(e.openElements.items[r], t);
          if (!e.fragmentContext && e.openElements.stackTop >= 0) {
            let n = e.openElements.items[0],
              r = e.treeAdapter.getNodeSourceCodeLocation(n);
            if (
              r &&
              !r.endTag &&
              (e._setEndLocation(n, t), e.openElements.stackTop >= 1)
            ) {
              let n = e.openElements.items[1],
                r = e.treeAdapter.getNodeSourceCodeLocation(n);
              r && !r.endTag && e._setEndLocation(n, t);
            }
          }
        }
      }
      function tC(e, t) {
        e._err(t, A.missingDoctype, !0),
          e.treeAdapter.setDocumentMode(e.document, O.QUIRKS),
          (e.insertionMode = M.BEFORE_HTML),
          e._processToken(t);
      }
      function tI(e, t) {
        e._insertFakeRootElement(),
          (e.insertionMode = M.BEFORE_HEAD),
          e._processToken(t);
      }
      function tS(e, t) {
        e._insertFakeElement(k.HEAD, x.HEAD),
          (e.headElement = e.openElements.current),
          (e.insertionMode = M.IN_HEAD),
          e._processToken(t);
      }
      function tR(e, t) {
        switch (t.tagID) {
          case x.HTML:
            tF(e, t);
            break;
          case x.BASE:
          case x.BASEFONT:
          case x.BGSOUND:
          case x.LINK:
          case x.META:
            e._appendElement(t, S.HTML), (t.ackSelfClosing = !0);
            break;
          case x.TITLE:
            e._switchToTextParsing(t, eV.RCDATA);
            break;
          case x.NOSCRIPT:
            e.options.scriptingEnabled
              ? e._switchToTextParsing(t, eV.RAWTEXT)
              : (e._insertElement(t, S.HTML),
                (e.insertionMode = M.IN_HEAD_NO_SCRIPT));
            break;
          case x.NOFRAMES:
          case x.STYLE:
            e._switchToTextParsing(t, eV.RAWTEXT);
            break;
          case x.SCRIPT:
            e._switchToTextParsing(t, eV.SCRIPT_DATA);
            break;
          case x.TEMPLATE:
            e._insertTemplate(t),
              e.activeFormattingElements.insertMarker(),
              (e.framesetOk = !1),
              (e.insertionMode = M.IN_TEMPLATE),
              e.tmplInsertionModeStack.unshift(M.IN_TEMPLATE);
            break;
          case x.HEAD:
            e._err(t, A.misplacedStartTagForHeadElement);
            break;
          default:
            tk(e, t);
        }
      }
      function tO(e, t) {
        e.openElements.tmplCount > 0
          ? (e.openElements.generateImpliedEndTagsThoroughly(),
            e.openElements.currentTagId !== x.TEMPLATE &&
              e._err(t, A.closingOfElementWithOpenChildElements),
            e.openElements.popUntilTagNamePopped(x.TEMPLATE),
            e.activeFormattingElements.clearToLastMarker(),
            e.tmplInsertionModeStack.shift(),
            e._resetInsertionMode())
          : e._err(t, A.endTagWithoutMatchingOpenElement);
      }
      function tk(e, t) {
        e.openElements.pop(),
          (e.insertionMode = M.AFTER_HEAD),
          e._processToken(t);
      }
      function tx(e, t) {
        let n =
          t.type === v.EOF
            ? A.openElementsLeftAfterEof
            : A.disallowedContentInNoscriptInHead;
        e._err(t, n),
          e.openElements.pop(),
          (e.insertionMode = M.IN_HEAD),
          e._processToken(t);
      }
      function tL(e, t) {
        e._insertFakeElement(k.BODY, x.BODY),
          (e.insertionMode = M.IN_BODY),
          tD(e, t);
      }
      function tD(e, t) {
        switch (t.type) {
          case v.CHARACTER:
            tw(e, t);
            break;
          case v.WHITESPACE_CHARACTER:
            tM(e, t);
            break;
          case v.COMMENT:
            ty(e, t);
            break;
          case v.START_TAG:
            tF(e, t);
            break;
          case v.END_TAG:
            tj(e, t);
            break;
          case v.EOF:
            tY(e, t);
        }
      }
      function tM(e, t) {
        e._reconstructActiveFormattingElements(), e._insertCharacters(t);
      }
      function tw(e, t) {
        e._reconstructActiveFormattingElements(),
          e._insertCharacters(t),
          (e.framesetOk = !1);
      }
      function tP(e, t) {
        e._reconstructActiveFormattingElements(),
          e._appendElement(t, S.HTML),
          (e.framesetOk = !1),
          (t.ackSelfClosing = !0);
      }
      function tB(e) {
        let t = eO(e, R.TYPE);
        return null != t && "hidden" === t.toLowerCase();
      }
      function tH(e, t) {
        e._switchToTextParsing(t, eV.RAWTEXT);
      }
      function tU(e, t) {
        e._reconstructActiveFormattingElements(), e._insertElement(t, S.HTML);
      }
      function tF(e, t) {
        var n, r, a, i, s, o, l, c, u, d, h, p, f, m, E, T;
        switch (t.tagID) {
          case x.I:
          case x.S:
          case x.B:
          case x.U:
          case x.EM:
          case x.TT:
          case x.BIG:
          case x.CODE:
          case x.FONT:
          case x.SMALL:
          case x.STRIKE:
          case x.STRONG:
            e._reconstructActiveFormattingElements(),
              e._insertElement(t, S.HTML),
              e.activeFormattingElements.pushElement(e.openElements.current, t);
            break;
          case x.A:
            !(function (e, t) {
              let n =
                e.activeFormattingElements.getElementEntryInScopeWithTagName(
                  k.A
                );
              n &&
                (tb(e, t),
                e.openElements.remove(n.element),
                e.activeFormattingElements.removeEntry(n)),
                e._reconstructActiveFormattingElements(),
                e._insertElement(t, S.HTML),
                e.activeFormattingElements.pushElement(
                  e.openElements.current,
                  t
                );
            })(e, t);
            break;
          case x.H1:
          case x.H2:
          case x.H3:
          case x.H4:
          case x.H5:
          case x.H6:
            e.openElements.hasInButtonScope(x.P) && e._closePElement(),
              ej(e.openElements.currentTagId) && e.openElements.pop(),
              e._insertElement(t, S.HTML);
            break;
          case x.P:
          case x.DL:
          case x.OL:
          case x.UL:
          case x.DIV:
          case x.DIR:
          case x.NAV:
          case x.MAIN:
          case x.MENU:
          case x.ASIDE:
          case x.CENTER:
          case x.FIGURE:
          case x.FOOTER:
          case x.HEADER:
          case x.HGROUP:
          case x.DIALOG:
          case x.DETAILS:
          case x.ADDRESS:
          case x.ARTICLE:
          case x.SECTION:
          case x.SUMMARY:
          case x.FIELDSET:
          case x.BLOCKQUOTE:
          case x.FIGCAPTION:
            e.openElements.hasInButtonScope(x.P) && e._closePElement(),
              e._insertElement(t, S.HTML);
            break;
          case x.LI:
          case x.DD:
          case x.DT:
            !(function (e, t) {
              e.framesetOk = !1;
              let n = t.tagID;
              for (let t = e.openElements.stackTop; t >= 0; t--) {
                let r = e.openElements.tagIDs[t];
                if (
                  (n === x.LI && r === x.LI) ||
                  ((n === x.DD || n === x.DT) && (r === x.DD || r === x.DT))
                ) {
                  e.openElements.generateImpliedEndTagsWithExclusion(r),
                    e.openElements.popUntilTagNamePopped(r);
                  break;
                }
                if (
                  r !== x.ADDRESS &&
                  r !== x.DIV &&
                  r !== x.P &&
                  e._isSpecialElement(e.openElements.items[t], r)
                )
                  break;
              }
              e.openElements.hasInButtonScope(x.P) && e._closePElement(),
                e._insertElement(t, S.HTML);
            })(e, t);
            break;
          case x.BR:
          case x.IMG:
          case x.WBR:
          case x.AREA:
          case x.EMBED:
          case x.KEYGEN:
            tP(e, t);
            break;
          case x.HR:
            (n = e),
              (r = t),
              n.openElements.hasInButtonScope(x.P) && n._closePElement(),
              n._appendElement(r, S.HTML),
              (n.framesetOk = !1),
              (r.ackSelfClosing = !0);
            break;
          case x.RB:
          case x.RTC:
            e.openElements.hasInScope(x.RUBY) &&
              e.openElements.generateImpliedEndTags(),
              e._insertElement(t, S.HTML);
            break;
          case x.RT:
          case x.RP:
            e.openElements.hasInScope(x.RUBY) &&
              e.openElements.generateImpliedEndTagsWithExclusion(x.RTC),
              e._insertElement(t, S.HTML);
            break;
          case x.PRE:
          case x.LISTING:
            (a = e).openElements.hasInButtonScope(x.P) && a._closePElement(),
              a._insertElement(t, S.HTML),
              (a.skipNextNewLine = !0),
              (a.framesetOk = !1);
            break;
          case x.XMP:
            (i = e).openElements.hasInButtonScope(x.P) && i._closePElement(),
              i._reconstructActiveFormattingElements(),
              (i.framesetOk = !1),
              i._switchToTextParsing(t, eV.RAWTEXT);
            break;
          case x.SVG:
            (s = t),
              e._reconstructActiveFormattingElements(),
              tE(s),
              tT(s),
              s.selfClosing
                ? e._appendElement(s, S.SVG)
                : e._insertElement(s, S.SVG),
              (s.ackSelfClosing = !0);
            break;
          case x.HTML:
            0 === e.openElements.tmplCount &&
              e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs);
            break;
          case x.BASE:
          case x.LINK:
          case x.META:
          case x.STYLE:
          case x.TITLE:
          case x.SCRIPT:
          case x.BGSOUND:
          case x.BASEFONT:
          case x.TEMPLATE:
            tR(e, t);
            break;
          case x.BODY:
            !(function (e, t) {
              let n = e.openElements.tryPeekProperlyNestedBodyElement();
              n &&
                0 === e.openElements.tmplCount &&
                ((e.framesetOk = !1),
                e.treeAdapter.adoptAttributes(n, t.attrs));
            })(e, t);
            break;
          case x.FORM:
            !(function (e, t) {
              let n = e.openElements.tmplCount > 0;
              (e.formElement && !n) ||
                (e.openElements.hasInButtonScope(x.P) && e._closePElement(),
                e._insertElement(t, S.HTML),
                n || (e.formElement = e.openElements.current));
            })(e, t);
            break;
          case x.NOBR:
            e._reconstructActiveFormattingElements(),
              e.openElements.hasInScope(x.NOBR) &&
                (tb(e, t), e._reconstructActiveFormattingElements()),
              e._insertElement(t, S.HTML),
              e.activeFormattingElements.pushElement(e.openElements.current, t);
            break;
          case x.MATH:
            (o = t),
              e._reconstructActiveFormattingElements(),
              tm(o),
              tT(o),
              o.selfClosing
                ? e._appendElement(o, S.MATHML)
                : e._insertElement(o, S.MATHML),
              (o.ackSelfClosing = !0);
            break;
          case x.TABLE:
            (l = e).treeAdapter.getDocumentMode(l.document) !== O.QUIRKS &&
              l.openElements.hasInButtonScope(x.P) &&
              l._closePElement(),
              l._insertElement(t, S.HTML),
              (l.framesetOk = !1),
              (l.insertionMode = M.IN_TABLE);
            break;
          case x.INPUT:
            (c = e),
              (u = t),
              c._reconstructActiveFormattingElements(),
              c._appendElement(u, S.HTML),
              tB(u) || (c.framesetOk = !1),
              (u.ackSelfClosing = !0);
            break;
          case x.PARAM:
          case x.TRACK:
          case x.SOURCE:
            (d = t), e._appendElement(d, S.HTML), (d.ackSelfClosing = !0);
            break;
          case x.IMAGE:
            ((h = t).tagName = k.IMG), (h.tagID = x.IMG), tP(e, h);
            break;
          case x.BUTTON:
            (p = e).openElements.hasInScope(x.BUTTON) &&
              (p.openElements.generateImpliedEndTags(),
              p.openElements.popUntilTagNamePopped(x.BUTTON)),
              p._reconstructActiveFormattingElements(),
              p._insertElement(t, S.HTML),
              (p.framesetOk = !1);
            break;
          case x.APPLET:
          case x.OBJECT:
          case x.MARQUEE:
            (f = e)._reconstructActiveFormattingElements(),
              f._insertElement(t, S.HTML),
              f.activeFormattingElements.insertMarker(),
              (f.framesetOk = !1);
            break;
          case x.IFRAME:
            (e.framesetOk = !1), e._switchToTextParsing(t, eV.RAWTEXT);
            break;
          case x.SELECT:
            (m = e)._reconstructActiveFormattingElements(),
              m._insertElement(t, S.HTML),
              (m.framesetOk = !1),
              (m.insertionMode =
                m.insertionMode === M.IN_TABLE ||
                m.insertionMode === M.IN_CAPTION ||
                m.insertionMode === M.IN_TABLE_BODY ||
                m.insertionMode === M.IN_ROW ||
                m.insertionMode === M.IN_CELL
                  ? M.IN_SELECT_IN_TABLE
                  : M.IN_SELECT);
            break;
          case x.OPTION:
          case x.OPTGROUP:
            e.openElements.currentTagId === x.OPTION && e.openElements.pop(),
              e._reconstructActiveFormattingElements(),
              e._insertElement(t, S.HTML);
            break;
          case x.NOEMBED:
            tH(e, t);
            break;
          case x.FRAMESET:
            !(function (e, t) {
              let n = e.openElements.tryPeekProperlyNestedBodyElement();
              e.framesetOk &&
                n &&
                (e.treeAdapter.detachNode(n),
                e.openElements.popAllUpToHtmlElement(),
                e._insertElement(t, S.HTML),
                (e.insertionMode = M.IN_FRAMESET));
            })(e, t);
            break;
          case x.TEXTAREA:
            (E = e)._insertElement(t, S.HTML),
              (E.skipNextNewLine = !0),
              (E.tokenizer.state = eV.RCDATA),
              (E.originalInsertionMode = E.insertionMode),
              (E.framesetOk = !1),
              (E.insertionMode = M.TEXT);
            break;
          case x.NOSCRIPT:
            e.options.scriptingEnabled ? tH(e, t) : tU(e, t);
            break;
          case x.PLAINTEXT:
            (T = e).openElements.hasInButtonScope(x.P) && T._closePElement(),
              T._insertElement(t, S.HTML),
              (T.tokenizer.state = eV.PLAINTEXT);
            break;
          case x.COL:
          case x.TH:
          case x.TD:
          case x.TR:
          case x.HEAD:
          case x.FRAME:
          case x.TBODY:
          case x.TFOOT:
          case x.THEAD:
          case x.CAPTION:
          case x.COLGROUP:
            break;
          default:
            tU(e, t);
        }
      }
      function tG(e, t) {
        let n = t.tagName,
          r = t.tagID;
        for (let t = e.openElements.stackTop; t > 0; t--) {
          let a = e.openElements.items[t],
            i = e.openElements.tagIDs[t];
          if (
            r === i &&
            (r !== x.UNKNOWN || e.treeAdapter.getTagName(a) === n)
          ) {
            e.openElements.generateImpliedEndTagsWithExclusion(r),
              e.openElements.stackTop >= t && e.openElements.shortenToLength(t);
            break;
          }
          if (e._isSpecialElement(a, i)) break;
        }
      }
      function tj(e, t) {
        var n, r;
        switch (t.tagID) {
          case x.A:
          case x.B:
          case x.I:
          case x.S:
          case x.U:
          case x.EM:
          case x.TT:
          case x.BIG:
          case x.CODE:
          case x.FONT:
          case x.NOBR:
          case x.SMALL:
          case x.STRIKE:
          case x.STRONG:
            tb(e, t);
            break;
          case x.P:
            e.openElements.hasInButtonScope(x.P) ||
              e._insertFakeElement(k.P, x.P),
              e._closePElement();
            break;
          case x.DL:
          case x.UL:
          case x.OL:
          case x.DIR:
          case x.DIV:
          case x.NAV:
          case x.PRE:
          case x.MAIN:
          case x.MENU:
          case x.ASIDE:
          case x.BUTTON:
          case x.CENTER:
          case x.FIGURE:
          case x.FOOTER:
          case x.HEADER:
          case x.HGROUP:
          case x.DIALOG:
          case x.ADDRESS:
          case x.ARTICLE:
          case x.DETAILS:
          case x.SECTION:
          case x.SUMMARY:
          case x.LISTING:
          case x.FIELDSET:
          case x.BLOCKQUOTE:
          case x.FIGCAPTION:
            !(function (e, t) {
              let n = t.tagID;
              e.openElements.hasInScope(n) &&
                (e.openElements.generateImpliedEndTags(),
                e.openElements.popUntilTagNamePopped(n));
            })(e, t);
            break;
          case x.LI:
            e.openElements.hasInListItemScope(x.LI) &&
              (e.openElements.generateImpliedEndTagsWithExclusion(x.LI),
              e.openElements.popUntilTagNamePopped(x.LI));
            break;
          case x.DD:
          case x.DT:
            !(function (e, t) {
              let n = t.tagID;
              e.openElements.hasInScope(n) &&
                (e.openElements.generateImpliedEndTagsWithExclusion(n),
                e.openElements.popUntilTagNamePopped(n));
            })(e, t);
            break;
          case x.H1:
          case x.H2:
          case x.H3:
          case x.H4:
          case x.H5:
          case x.H6:
            e.openElements.hasNumberedHeaderInScope() &&
              (e.openElements.generateImpliedEndTags(),
              e.openElements.popUntilNumberedHeaderPopped());
            break;
          case x.BR:
            (n = e)._reconstructActiveFormattingElements(),
              n._insertFakeElement(k.BR, x.BR),
              n.openElements.pop(),
              (n.framesetOk = !1);
            break;
          case x.BODY:
            !(function (e, t) {
              if (
                e.openElements.hasInScope(x.BODY) &&
                ((e.insertionMode = M.AFTER_BODY),
                e.options.sourceCodeLocationInfo)
              ) {
                let n = e.openElements.tryPeekProperlyNestedBodyElement();
                n && e._setEndLocation(n, t);
              }
            })(e, t);
            break;
          case x.HTML:
            (r = e).openElements.hasInScope(x.BODY) &&
              ((r.insertionMode = M.AFTER_BODY), t6(r, t));
            break;
          case x.FORM:
            !(function (e) {
              let t = e.openElements.tmplCount > 0,
                { formElement: n } = e;
              t || (e.formElement = null),
                (n || t) &&
                  e.openElements.hasInScope(x.FORM) &&
                  (e.openElements.generateImpliedEndTags(),
                  t
                    ? e.openElements.popUntilTagNamePopped(x.FORM)
                    : n && e.openElements.remove(n));
            })(e);
            break;
          case x.APPLET:
          case x.OBJECT:
          case x.MARQUEE:
            !(function (e, t) {
              let n = t.tagID;
              e.openElements.hasInScope(n) &&
                (e.openElements.generateImpliedEndTags(),
                e.openElements.popUntilTagNamePopped(n),
                e.activeFormattingElements.clearToLastMarker());
            })(e, t);
            break;
          case x.TEMPLATE:
            tO(e, t);
            break;
          default:
            tG(e, t);
        }
      }
      function tY(e, t) {
        e.tmplInsertionModeStack.length > 0 ? t8(e, t) : tN(e, t);
      }
      function tV(e, t) {
        if (t_.has(e.openElements.currentTagId))
          switch (
            ((e.pendingCharacterTokens.length = 0),
            (e.hasNonWhitespacePendingCharacterToken = !1),
            (e.originalInsertionMode = e.insertionMode),
            (e.insertionMode = M.IN_TABLE_TEXT),
            t.type)
          ) {
            case v.CHARACTER:
              tK(e, t);
              break;
            case v.WHITESPACE_CHARACTER:
              tz(e, t);
          }
        else tq(e, t);
      }
      function tZ(e, t) {
        var n, r, a, i, s, o, l;
        switch (t.tagID) {
          case x.TD:
          case x.TH:
          case x.TR:
            (n = e).openElements.clearBackToTableContext(),
              n._insertFakeElement(k.TBODY, x.TBODY),
              (n.insertionMode = M.IN_TABLE_BODY),
              t0(n, t);
            break;
          case x.STYLE:
          case x.SCRIPT:
          case x.TEMPLATE:
            tR(e, t);
            break;
          case x.COL:
            (r = e).openElements.clearBackToTableContext(),
              r._insertFakeElement(k.COLGROUP, x.COLGROUP),
              (r.insertionMode = M.IN_COLUMN_GROUP),
              t$(r, t);
            break;
          case x.FORM:
            (a = e).formElement ||
              0 !== a.openElements.tmplCount ||
              (a._insertElement(t, S.HTML),
              (a.formElement = a.openElements.current),
              a.openElements.pop());
            break;
          case x.TABLE:
            e.openElements.hasInTableScope(x.TABLE) &&
              (e.openElements.popUntilTagNamePopped(x.TABLE),
              e._resetInsertionMode(),
              e._processStartTag(t));
            break;
          case x.TBODY:
          case x.TFOOT:
          case x.THEAD:
            (i = e).openElements.clearBackToTableContext(),
              i._insertElement(t, S.HTML),
              (i.insertionMode = M.IN_TABLE_BODY);
            break;
          case x.INPUT:
            tB((s = t)) ? e._appendElement(s, S.HTML) : tq(e, s),
              (s.ackSelfClosing = !0);
            break;
          case x.CAPTION:
            (o = e).openElements.clearBackToTableContext(),
              o.activeFormattingElements.insertMarker(),
              o._insertElement(t, S.HTML),
              (o.insertionMode = M.IN_CAPTION);
            break;
          case x.COLGROUP:
            (l = e).openElements.clearBackToTableContext(),
              l._insertElement(t, S.HTML),
              (l.insertionMode = M.IN_COLUMN_GROUP);
            break;
          default:
            tq(e, t);
        }
      }
      function tW(e, t) {
        switch (t.tagID) {
          case x.TABLE:
            e.openElements.hasInTableScope(x.TABLE) &&
              (e.openElements.popUntilTagNamePopped(x.TABLE),
              e._resetInsertionMode());
            break;
          case x.TEMPLATE:
            tO(e, t);
            break;
          case x.BODY:
          case x.CAPTION:
          case x.COL:
          case x.COLGROUP:
          case x.HTML:
          case x.TBODY:
          case x.TD:
          case x.TFOOT:
          case x.TH:
          case x.THEAD:
          case x.TR:
            break;
          default:
            tq(e, t);
        }
      }
      function tq(e, t) {
        let n = e.fosterParentingEnabled;
        (e.fosterParentingEnabled = !0),
          tD(e, t),
          (e.fosterParentingEnabled = n);
      }
      function tz(e, t) {
        e.pendingCharacterTokens.push(t);
      }
      function tK(e, t) {
        e.pendingCharacterTokens.push(t),
          (e.hasNonWhitespacePendingCharacterToken = !0);
      }
      function tQ(e, t) {
        let n = 0;
        if (e.hasNonWhitespacePendingCharacterToken)
          for (; n < e.pendingCharacterTokens.length; n++)
            tq(e, e.pendingCharacterTokens[n]);
        else
          for (; n < e.pendingCharacterTokens.length; n++)
            e._insertCharacters(e.pendingCharacterTokens[n]);
        (e.insertionMode = e.originalInsertionMode), e._processToken(t);
      }
      let tX = new Set([
        x.CAPTION,
        x.COL,
        x.COLGROUP,
        x.TBODY,
        x.TD,
        x.TFOOT,
        x.TH,
        x.THEAD,
        x.TR,
      ]);
      function t$(e, t) {
        switch (t.tagID) {
          case x.HTML:
            tF(e, t);
            break;
          case x.COL:
            e._appendElement(t, S.HTML), (t.ackSelfClosing = !0);
            break;
          case x.TEMPLATE:
            tR(e, t);
            break;
          default:
            tJ(e, t);
        }
      }
      function tJ(e, t) {
        e.openElements.currentTagId === x.COLGROUP &&
          (e.openElements.pop(),
          (e.insertionMode = M.IN_TABLE),
          e._processToken(t));
      }
      function t0(e, t) {
        switch (t.tagID) {
          case x.TR:
            e.openElements.clearBackToTableBodyContext(),
              e._insertElement(t, S.HTML),
              (e.insertionMode = M.IN_ROW);
            break;
          case x.TH:
          case x.TD:
            e.openElements.clearBackToTableBodyContext(),
              e._insertFakeElement(k.TR, x.TR),
              (e.insertionMode = M.IN_ROW),
              t2(e, t);
            break;
          case x.CAPTION:
          case x.COL:
          case x.COLGROUP:
          case x.TBODY:
          case x.TFOOT:
          case x.THEAD:
            e.openElements.hasTableBodyContextInTableScope() &&
              (e.openElements.clearBackToTableBodyContext(),
              e.openElements.pop(),
              (e.insertionMode = M.IN_TABLE),
              tZ(e, t));
            break;
          default:
            tZ(e, t);
        }
      }
      function t1(e, t) {
        let n = t.tagID;
        switch (t.tagID) {
          case x.TBODY:
          case x.TFOOT:
          case x.THEAD:
            e.openElements.hasInTableScope(n) &&
              (e.openElements.clearBackToTableBodyContext(),
              e.openElements.pop(),
              (e.insertionMode = M.IN_TABLE));
            break;
          case x.TABLE:
            e.openElements.hasTableBodyContextInTableScope() &&
              (e.openElements.clearBackToTableBodyContext(),
              e.openElements.pop(),
              (e.insertionMode = M.IN_TABLE),
              tW(e, t));
            break;
          case x.BODY:
          case x.CAPTION:
          case x.COL:
          case x.COLGROUP:
          case x.HTML:
          case x.TD:
          case x.TH:
          case x.TR:
            break;
          default:
            tW(e, t);
        }
      }
      function t2(e, t) {
        switch (t.tagID) {
          case x.TH:
          case x.TD:
            e.openElements.clearBackToTableRowContext(),
              e._insertElement(t, S.HTML),
              (e.insertionMode = M.IN_CELL),
              e.activeFormattingElements.insertMarker();
            break;
          case x.CAPTION:
          case x.COL:
          case x.COLGROUP:
          case x.TBODY:
          case x.TFOOT:
          case x.THEAD:
          case x.TR:
            e.openElements.hasInTableScope(x.TR) &&
              (e.openElements.clearBackToTableRowContext(),
              e.openElements.pop(),
              (e.insertionMode = M.IN_TABLE_BODY),
              t0(e, t));
            break;
          default:
            tZ(e, t);
        }
      }
      function t5(e, t) {
        switch (t.tagID) {
          case x.TR:
            e.openElements.hasInTableScope(x.TR) &&
              (e.openElements.clearBackToTableRowContext(),
              e.openElements.pop(),
              (e.insertionMode = M.IN_TABLE_BODY));
            break;
          case x.TABLE:
            e.openElements.hasInTableScope(x.TR) &&
              (e.openElements.clearBackToTableRowContext(),
              e.openElements.pop(),
              (e.insertionMode = M.IN_TABLE_BODY),
              t1(e, t));
            break;
          case x.TBODY:
          case x.TFOOT:
          case x.THEAD:
            (e.openElements.hasInTableScope(t.tagID) ||
              e.openElements.hasInTableScope(x.TR)) &&
              (e.openElements.clearBackToTableRowContext(),
              e.openElements.pop(),
              (e.insertionMode = M.IN_TABLE_BODY),
              t1(e, t));
            break;
          case x.BODY:
          case x.CAPTION:
          case x.COL:
          case x.COLGROUP:
          case x.HTML:
          case x.TD:
          case x.TH:
            break;
          default:
            tW(e, t);
        }
      }
      function t3(e, t) {
        switch (t.tagID) {
          case x.HTML:
            tF(e, t);
            break;
          case x.OPTION:
            e.openElements.currentTagId === x.OPTION && e.openElements.pop(),
              e._insertElement(t, S.HTML);
            break;
          case x.OPTGROUP:
            e.openElements.currentTagId === x.OPTION && e.openElements.pop(),
              e.openElements.currentTagId === x.OPTGROUP &&
                e.openElements.pop(),
              e._insertElement(t, S.HTML);
            break;
          case x.INPUT:
          case x.KEYGEN:
          case x.TEXTAREA:
          case x.SELECT:
            e.openElements.hasInSelectScope(x.SELECT) &&
              (e.openElements.popUntilTagNamePopped(x.SELECT),
              e._resetInsertionMode(),
              t.tagID !== x.SELECT && e._processStartTag(t));
            break;
          case x.SCRIPT:
          case x.TEMPLATE:
            tR(e, t);
        }
      }
      function t4(e, t) {
        switch (t.tagID) {
          case x.OPTGROUP:
            e.openElements.stackTop > 0 &&
              e.openElements.currentTagId === x.OPTION &&
              e.openElements.tagIDs[e.openElements.stackTop - 1] ===
                x.OPTGROUP &&
              e.openElements.pop(),
              e.openElements.currentTagId === x.OPTGROUP &&
                e.openElements.pop();
            break;
          case x.OPTION:
            e.openElements.currentTagId === x.OPTION && e.openElements.pop();
            break;
          case x.SELECT:
            e.openElements.hasInSelectScope(x.SELECT) &&
              (e.openElements.popUntilTagNamePopped(x.SELECT),
              e._resetInsertionMode());
            break;
          case x.TEMPLATE:
            tO(e, t);
        }
      }
      function t8(e, t) {
        e.openElements.tmplCount > 0
          ? (e.openElements.popUntilTagNamePopped(x.TEMPLATE),
            e.activeFormattingElements.clearToLastMarker(),
            e.tmplInsertionModeStack.shift(),
            e._resetInsertionMode(),
            e.onEof(t))
          : tN(e, t);
      }
      function t6(e, t) {
        var n;
        if (t.tagID === x.HTML) {
          if (
            (e.fragmentContext || (e.insertionMode = M.AFTER_AFTER_BODY),
            e.options.sourceCodeLocationInfo &&
              e.openElements.tagIDs[0] === x.HTML)
          ) {
            e._setEndLocation(e.openElements.items[0], t);
            let r = e.openElements.items[1];
            !r ||
              (null === (n = e.treeAdapter.getNodeSourceCodeLocation(r)) ||
              void 0 === n
                ? void 0
                : n.endTag) ||
              e._setEndLocation(r, t);
          }
        } else t9(e, t);
      }
      function t9(e, t) {
        (e.insertionMode = M.IN_BODY), tD(e, t);
      }
      function t7(e, t) {
        (e.insertionMode = M.IN_BODY), tD(e, t);
      }
      function ne(e) {
        for (
          ;
          e.treeAdapter.getNamespaceURI(e.openElements.current) !== S.HTML &&
          !e._isIntegrationPoint(
            e.openElements.currentTagId,
            e.openElements.current
          );

        )
          e.openElements.pop();
      }
      let nt = new Map([
        [34, "&quot;"],
        [38, "&amp;"],
        [39, "&apos;"],
        [60, "&lt;"],
        [62, "&gt;"],
      ]);
      function nn(e, t) {
        return function (n) {
          let r;
          let a = 0,
            i = "";
          for (; (r = e.exec(n)); )
            a !== r.index && (i += n.substring(a, r.index)),
              (i += t.get(r[0].charCodeAt(0))),
              (a = r.index + 1);
          return i + n.substring(a);
        };
      }
      null != String.prototype.codePointAt ||
        ((e, t) =>
          (64512 & e.charCodeAt(t)) == 55296
            ? (e.charCodeAt(t) - 55296) * 1024 +
              e.charCodeAt(t + 1) -
              56320 +
              65536
            : e.charCodeAt(t)),
        nn(/[&<>'"]/g, nt),
        nn(
          /["&\u00A0]/g,
          new Map([
            [34, "&quot;"],
            [38, "&amp;"],
            [160, "&nbsp;"],
          ])
        ),
        nn(
          /[&<>\u00A0]/g,
          new Map([
            [38, "&amp;"],
            [60, "&lt;"],
            [62, "&gt;"],
            [160, "&nbsp;"],
          ])
        ),
        k.AREA,
        k.BASE,
        k.BASEFONT,
        k.BGSOUND,
        k.BR,
        k.COL,
        k.EMBED,
        k.FRAME,
        k.HR,
        k.IMG,
        k.INPUT,
        k.KEYGEN,
        k.LINK,
        k.META,
        k.PARAM,
        k.SOURCE,
        k.TRACK,
        k.WBR;
      var nr = n(2991),
        na = n(9440),
        ni = n(148),
        ns = n(7898),
        no = n(2074);
      function nl(e) {
        return e.join(":");
      }
      function nc(e) {
        return e.split(":").map((e) => parseInt(e));
      }
      function nu(e, t, n) {
        switch (e.type) {
          case V.Yk.Backgrounds:
          case V.Yk.Grid:
          case V.Yk.NavigationLinks:
          case V.Yk.Link:
          case V.Yk.Shadows:
          case V.Yk.Image:
          case V.Yk.Images:
          case V.Yk.ResponsiveColor:
          case V.Yk.TableFormFields:
          case V.Yk.Table:
          case V.Yk.Border:
          case V.Yk.RichText:
          case V.Yk.ElementID:
            return (0, Z.J)(e, t, n);
          case W.Le:
            return (function (e, t) {
              if (null == e) return e;
              return {
                ...e,
                document: e.document
                  ? (function e(r) {
                      var a, i, s;
                      switch (r.object) {
                        case "document":
                        case "block":
                        case "inline":
                          return "link" === r.type
                            ? {
                                ...r,
                                nodes:
                                  null === (a = r.nodes) || void 0 === a
                                    ? void 0
                                    : a.map(e),
                                data: r.data
                                  ? (function (e) {
                                      var n, r;
                                      switch (e.type) {
                                        case "OPEN_PAGE": {
                                          let r = e.payload.pageId;
                                          if (null == r) return e;
                                          return {
                                            ...e,
                                            payload: {
                                              ...e.payload,
                                              pageId:
                                                null !==
                                                  (n =
                                                    t.replacementContext.pageIds.get(
                                                      r
                                                    )) && void 0 !== n
                                                  ? n
                                                  : e.payload.pageId,
                                            },
                                          };
                                        }
                                        case "SCROLL_TO_ELEMENT": {
                                          let n = e.payload.elementIdConfig;
                                          if (null == n) return e;
                                          return {
                                            ...e,
                                            payload: {
                                              ...e.payload,
                                              elementIdConfig: {
                                                ...n,
                                                elementKey:
                                                  null !==
                                                    (r =
                                                      t.replacementContext.elementKeys.get(
                                                        n.elementKey
                                                      )) && void 0 !== r
                                                    ? r
                                                    : n.elementKey,
                                              },
                                            },
                                          };
                                        }
                                        default:
                                          return e;
                                      }
                                    })(r.data)
                                  : r.data,
                              }
                            : {
                                ...r,
                                nodes:
                                  null === (i = r.nodes) || void 0 === i
                                    ? void 0
                                    : i.map(e),
                              };
                        case "text":
                          return {
                            ...r,
                            marks:
                              null === (s = r.marks) || void 0 === s
                                ? void 0
                                : s.map(n),
                          };
                        default:
                          return r;
                      }
                    })(e.document)
                  : e.document,
              };
              function n(e) {
                if ("typography" === e.type) {
                  var n, r, a, i, s;
                  let o =
                    null === (n = e.data) || void 0 === n ? void 0 : n.value.id;
                  return {
                    ...e,
                    data: {
                      ...e.data,
                      value: {
                        ...(null === (r = e.data) || void 0 === r
                          ? void 0
                          : r.value),
                        id:
                          null !==
                            (i = t.replacementContext.typographyIds.get(o)) &&
                          void 0 !== i
                            ? i
                            : o,
                        style:
                          null === (a = e.data) || void 0 === a
                            ? void 0
                            : a.value.style.map((e) => {
                                var n, r;
                                return {
                                  ...e,
                                  value: {
                                    ...e.value,
                                    color:
                                      null == e.value.color
                                        ? e.value.color
                                        : {
                                            ...e.value.color,
                                            swatchId:
                                              null !==
                                                (s =
                                                  t.replacementContext.swatchIds.get(
                                                    null ===
                                                      (n = e.value.color) ||
                                                      void 0 === n
                                                      ? void 0
                                                      : n.swatchId
                                                  )) && void 0 !== s
                                                ? s
                                                : null ===
                                                    (r = e.value.color) ||
                                                  void 0 === r
                                                ? void 0
                                                : r.swatchId,
                                          },
                                  },
                                };
                              }),
                      },
                    },
                  };
                }
                return e;
              }
            })(t, n);
          case X.CL:
            var r, a;
            return null == (r = (0, X.i7)(t) ? (0, z.D)((0, q.wS)(t)) : t)
              ? r
              : (0, z.D)(
                  null === (a = r.descendants) || void 0 === a
                    ? void 0
                    : a.flatMap((e) =>
                        (function e(t) {
                          var r, a, i, s, o, l, c;
                          return K.W_.isElement(t) && Q.q.isInline(t)
                            ? (function (t) {
                                var r, a;
                                if ("link" !== t.type)
                                  return { ...t, children: t.children.map(e) };
                                if (null == t.link) return t;
                                switch (t.link.type) {
                                  case "OPEN_PAGE": {
                                    let a = t.link.payload.pageId;
                                    if (null == a) return t;
                                    return {
                                      ...t,
                                      link: {
                                        ...t.link,
                                        payload: {
                                          ...t.link.payload,
                                          pageId:
                                            null !==
                                              (r =
                                                n.replacementContext.pageIds.get(
                                                  a
                                                )) && void 0 !== r
                                              ? r
                                              : t.link.payload.pageId,
                                        },
                                      },
                                      children: t.children.map(e),
                                    };
                                  }
                                  case "SCROLL_TO_ELEMENT": {
                                    let r = t.link.payload.elementIdConfig;
                                    if (null == r) return t;
                                    return {
                                      ...t,
                                      link: {
                                        ...t.link,
                                        payload: {
                                          ...t.link.payload,
                                          elementIdConfig: {
                                            ...r,
                                            elementKey:
                                              null !==
                                                (a =
                                                  n.replacementContext.elementKeys.get(
                                                    r.elementKey
                                                  )) && void 0 !== a
                                                ? a
                                                : r.elementKey,
                                          },
                                        },
                                      },
                                      children: t.children.map(e),
                                    };
                                  }
                                  default:
                                    return t;
                                }
                              })(t)
                            : K.xv.isText(t)
                            ? {
                                ...t,
                                ...(null == t.typography
                                  ? {}
                                  : {
                                      typography: {
                                        id:
                                          null !==
                                            (o =
                                              n.replacementContext.typographyIds.get(
                                                null !==
                                                  (s =
                                                    null ===
                                                      (r = t.typography) ||
                                                    void 0 === r
                                                      ? void 0
                                                      : r.id) && void 0 !== s
                                                  ? s
                                                  : ""
                                              )) && void 0 !== o
                                            ? o
                                            : null === (a = t.typography) ||
                                              void 0 === a
                                            ? void 0
                                            : a.id,
                                        style:
                                          null === (i = t.typography) ||
                                          void 0 === i
                                            ? void 0
                                            : i.style.map((e) => {
                                                var t, r;
                                                return {
                                                  ...e,
                                                  value: {
                                                    ...e.value,
                                                    ...(null == e.value.color
                                                      ? {}
                                                      : {
                                                          color: {
                                                            ...e.value.color,
                                                            swatchId:
                                                              null !==
                                                                (c =
                                                                  n.replacementContext.swatchIds.get(
                                                                    null !==
                                                                      (l =
                                                                        null ===
                                                                          (t =
                                                                            e
                                                                              .value
                                                                              .color) ||
                                                                        void 0 ===
                                                                          t
                                                                          ? void 0
                                                                          : t.swatchId) &&
                                                                      void 0 !==
                                                                        l
                                                                      ? l
                                                                      : ""
                                                                  )) &&
                                                              void 0 !== c
                                                                ? c
                                                                : null ===
                                                                    (r =
                                                                      e.value
                                                                        .color) ||
                                                                  void 0 === r
                                                                ? void 0
                                                                : r.swatchId,
                                                          },
                                                        }),
                                                  },
                                                };
                                              }),
                                      },
                                    }),
                              }
                            : { ...t, children: t.children.map(e) };
                        })(e)
                      )
                );
          case w.gd:
            return (0, w.df)(t, n);
          case P.qe:
            return (0, P.pT)(t, n);
          case B.a$:
            return (0, B.ej)(t, n);
          case U.a4:
            return (0, U.Gx)(e, t, n);
          case H.uW:
            return (0, H.Ky)(e, t, n);
          case j.c8:
            return (0, j.C6)(t, n);
          case Y.QI:
            return (0, Y.lm)(t, n);
          default:
            return t;
        }
      }
      function nd(e, t) {
        switch (e.type) {
          case V.Yk.TextInput:
          case V.Yk.TextArea:
          case G.Al:
          case F.MD:
            return t;
          case X.CL:
            if ((0, X.i7)(t)) return null;
            return (function (e, t) {
              var n, r;
              let a =
                  (null == e
                    ? void 0
                    : null === (n = e.config) || void 0 === n
                    ? void 0
                    : n.mode) === X._w.Inline
                    ? [(0, nr.R)()]
                    : [(0, na.AT)(), (0, ni.Mx)(), (0, ns.k)(), (0, no.C)()],
                i = a.reduceRight((e, t) => {
                  var n;
                  return null !==
                    (r =
                      null == t
                        ? void 0
                        : null === (n = t.withPlugin) || void 0 === n
                        ? void 0
                        : n.call(t, e)) && void 0 !== r
                    ? r
                    : e;
                }, (0, K.Jh)());
              return (
                (i.children = t.descendants),
                (i.typographyNormalizationDirection = "up"),
                K.ML.normalize(i, { force: !0 }),
                i.children.reduce(
                  (e, t, n) => ({
                    ...e,
                    ...(function e(t, n) {
                      if (K.xv.isText(t)) return {};
                      switch (t.type) {
                        case ee.kH.UnorderedList:
                        case ee.kH.OrderedList:
                        case ee.kH.ListItem:
                          return t.children.reduce(
                            (t, r, a) => ({ ...t, ...e(r, [...n, a]) }),
                            {}
                          );
                        default:
                          let r = (function e(t) {
                            let n =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : [];
                            if (K.xv.isText(t)) {
                              let e = J()(t.text);
                              return "" === e
                                ? null
                                : void 0 === t.typography
                                ? e
                                : '<span key="'
                                    .concat(nl(n), '">')
                                    .concat(e, "</span>");
                            }
                            let r = t.children
                              .map((t, r) => e(t, [...n, r]))
                              .join("");
                            if ("" === r) return null;
                            switch (t.type) {
                              case ee.T5.Link:
                                return '<a key="'
                                  .concat(nl(n), '">')
                                  .concat(r, "</a>");
                              case ee.T5.SuperScript:
                                return '<sup key="'
                                  .concat(nl(n), '">')
                                  .concat(r, "</sup>");
                              case ee.T5.SubScript:
                                return '<sub key="'
                                  .concat(nl(n), '">')
                                  .concat(r, "</sub>");
                              case ee.T5.Code:
                                return '<code key="'
                                  .concat(nl(n), '">')
                                  .concat(r, "</code>");
                              default:
                                return r;
                            }
                          })(t);
                          if (null == r) return {};
                          return { [nl(n)]: r };
                      }
                    })(t, [n]),
                  }),
                  {}
                )
              );
            })(e, t);
          case H.uW:
            if (null == t) return null;
            return (0, H.X1)(e, t);
          case U.a4:
            if (null == t) return null;
            return (0, U.VQ)(e, t);
          default:
            return null;
        }
      }
      function nh(e, t, n, r) {
        if (null == t) return t;
        switch (e.type) {
          case V.Yk.TextInput:
          case V.Yk.TextArea:
          case G.Al:
          case F.MD:
            if (null == n) return t;
            return n;
          case V.Yk.Grid:
            return (0, V.Jk)(t, r);
          case Y.QI:
            return (0, Y.B$)(t, r);
          case X.CL:
            if (null == n) return t;
            return (function (e, t, n) {
              var r, a, i;
              let s =
                  (null == e
                    ? void 0
                    : null === (r = e.config) || void 0 === r
                    ? void 0
                    : r.mode) === X._w.Inline
                    ? [(0, nr.R)()]
                    : [(0, na.AT)(), (0, ni.Mx)(), (0, ns.k)(), (0, no.C)()],
                o = s.reduceRight((e, t) => {
                  var n;
                  return null !==
                    (a =
                      null == t
                        ? void 0
                        : null === (n = t.withPlugin) || void 0 === n
                        ? void 0
                        : n.call(t, e)) && void 0 !== a
                    ? a
                    : e;
                }, (0, K.Jh)()),
                l = s.reduceRight((e, t) => {
                  var n;
                  return null !==
                    (i =
                      null == t
                        ? void 0
                        : null === (n = t.withPlugin) || void 0 === n
                        ? void 0
                        : n.call(t, e)) && void 0 !== i
                    ? i
                    : e;
                }, (0, K.Jh)());
              return (
                (o.children = t.descendants),
                (o.typographyNormalizationDirection = "up"),
                K.ML.normalize(o, { force: !0 }),
                Object.entries(n)
                  .reverse()
                  .forEach((e) => {
                    var t;
                    let [n, r] = e,
                      a = nc(n);
                    if (0 === a.length) return;
                    let i = (function (e, t, n) {
                        "string" == typeof e && ((n = t), (t = e), (e = null));
                        let r = tv.getFragmentParser(e, n);
                        return r.tokenizer.write(t, !0), r.getFragment();
                      })(r),
                      s = (function e(t, n) {
                        if ("#document-fragment" === t.nodeName) {
                          let n = Array.from(t.childNodes)
                            .map((t) => e(t))
                            .flat();
                          return (
                            0 === n.length && n.push(eb("text", {}, "")), n
                          );
                        }
                        if ("#text" === t.nodeName && "value" in t)
                          return [
                            eb(
                              "text",
                              { translationKey: null != n ? n : void 0 },
                              t.value
                            ),
                          ];
                        if ("namespaceURI" in t) {
                          var r, a;
                          let n =
                              null !==
                                (a =
                                  null ===
                                    (r = t.attrs.find(
                                      (e) => "key" === e.name
                                    )) || void 0 === r
                                    ? void 0
                                    : r.value) && void 0 !== a
                                ? a
                                : void 0,
                            i = Array.from(t.childNodes)
                              .map((t) => e(t, n))
                              .flat();
                          switch (
                            (0 === i.length && i.push(eb("text", {}, "")),
                            t.nodeName)
                          ) {
                            case "code":
                              return [
                                eb(
                                  "element",
                                  { type: ee.T5.Code, translationKey: n },
                                  i
                                ),
                              ];
                            case "sub":
                              return [
                                eb(
                                  "element",
                                  { type: ee.T5.SubScript, translationKey: n },
                                  i
                                ),
                              ];
                            case "sup":
                              return [
                                eb(
                                  "element",
                                  {
                                    type: ee.T5.SuperScript,
                                    translationKey: n,
                                  },
                                  i
                                ),
                              ];
                            case "a":
                              return [
                                eb(
                                  "element",
                                  { type: ee.T5.Link, translationKey: n },
                                  i
                                ),
                              ];
                            default:
                              return i;
                          }
                        }
                        return [];
                      })(i);
                    for (let [e, t] of ((l.children = [
                      { type: ee.kH.Default, children: s },
                    ]),
                    (l.typographyNormalizationDirection = "neutral"),
                    K.ML.normalize(l, { force: !0 }),
                    K.NB.descendants(l))) {
                      if (
                        (!K.xv.isText(e) && !Q.q.isInline(e)) ||
                        null == e.translationKey ||
                        "" === e.translationKey
                      )
                        continue;
                      let n = nc(e.translationKey),
                        r = [...a, ...n],
                        [i] = K.ML.node(o, r);
                      if (K.xv.isText(i) && K.xv.isText(e)) {
                        let { translationKey: e, text: n, ...r } = i;
                        K.YR.setNodes(l, r, { at: t }),
                          K.YR.unsetNodes(l, "translationKey", { at: t });
                      } else if (Q.q.isInline(i) && Q.q.isInline(e)) {
                        let { translationKey: e, children: n, ...r } = i;
                        K.YR.setNodes(l, r, { at: t }),
                          K.YR.unsetNodes(l, "translationKey", { at: t });
                      }
                    }
                    let c =
                      null === (t = l.children.at(0)) || void 0 === t
                        ? void 0
                        : t.children;
                    K.ML.withoutNormalizing(o, () => {
                      Array.from(K.NB.children(o, a))
                        .reverse()
                        .forEach((e) => {
                          let [t, n] = e;
                          K.YR.removeNodes(o, { at: n });
                        }),
                        K.YR.insertNodes(o, c, { at: [...a, 0] });
                    });
                  }),
                (o.typographyNormalizationDirection = "down"),
                K.ML.normalize(o, { force: !0 }),
                { ...t, descendants: o.children }
              );
            })(e, t, n);
          case H.uW:
            if (null == n) return t;
            return (0, H.aG)(e, t, n, r);
          case U.a4:
            if (null == n) return t;
            return (0, U.Dv)(e, t, n, r);
          default:
            return t;
        }
      }
    },
    9355: function (e, t, n) {
      "use strict";
      n.d(t, {
        DG: function () {
          return i;
        },
        MY: function () {
          return r;
        },
        dm: function () {
          return a;
        },
      });
      let r = {
          TextAlignCenter: "TextAlignCenter",
          TextAlignJustify: "TextAlignJustify",
          TextAlignLeft: "TextAlignLeft",
          TextAlignRight: "TextAlignRight",
          Superscript: "Superscript16",
          Subscript: "Subscript16",
          Code: "Code16",
        },
        a = "makeswift::controls::icon-radio-group";
      function i(e) {
        return { type: a, config: e };
      }
    },
    988: function (e, t, n) {
      "use strict";
      n.d(t, {
        fQ: function () {
          return i;
        },
        pT: function () {
          return s;
        },
        qe: function () {
          return a;
        },
      });
      var r = n(8051);
      let a = "makeswift::controls::image",
        i = {
          URL: "makeswift::controls::image::format::url",
          WithDimensions: "makeswift::controls::image::format::with-dimensions",
        };
      function s(e, t) {
        var n, a;
        return null == e
          ? e
          : (0, r.EQ)(e)
              .with(r.P.string, (e) =>
                null !== (n = t.replacementContext.fileIds.get(e)) &&
                void 0 !== n
                  ? n
                  : e
              )
              .with({ type: "makeswift-file" }, (e) => {
                let { id: n } = e;
                return null !== (a = t.replacementContext.fileIds.get(n)) &&
                  void 0 !== a
                  ? a
                  : n;
              })
              .otherwise((e) => e);
      }
    },
    5279: function (e, t, n) {
      "use strict";
      n.d(t, {
        a$: function () {
          return r;
        },
        ej: function () {
          return i;
        },
        rU: function () {
          return a;
        },
      });
      let r = "makeswift::controls::link";
      function a() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: r, config: e };
      }
      function i(e, t) {
        if (null == e) return e;
        if ("OPEN_PAGE" === e.type) {
          let r = e.payload.pageId;
          if (null != r) {
            var n;
            return {
              ...e,
              payload: {
                ...e.payload,
                pageId:
                  null !== (n = t.replacementContext.pageIds.get(r)) &&
                  void 0 !== n
                    ? n
                    : r,
              },
            };
          }
        }
        return e;
      }
    },
    9227: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ky: function () {
          return d;
        },
        R0: function () {
          return u;
        },
        X1: function () {
          return p;
        },
        aG: function () {
          return f;
        },
        uW: function () {
          return l;
        },
        yu: function () {
          return h;
        },
      });
      var r = n(597),
        a = n(6037),
        i = n(2645),
        s = n(5639),
        o = n(1748);
      let l = "makeswift::controls::list",
        c = {
          LIST_CONTROL_ITEM_CONTROL_MESSAGE:
            "makeswift::controls::list::message::item-control-message",
        };
      class u extends i.V {
        constructor(e, t) {
          super(e),
            (0, r.Z)(this, "controls", void 0),
            (0, r.Z)(this, "descriptor", void 0),
            (0, r.Z)(this, "send", void 0),
            (0, r.Z)(this, "setItemsControl", (e) => {
              let t = new Map();
              return null == e
                ? void 0
                : ((e.length === this.controls.size &&
                    e.every((e) => {
                      let { id: t } = e;
                      return this.controls.has(t);
                    })) ||
                    (e.forEach((e) => {
                      let n = (0, a.nU)(this.descriptor.config.type, (t) =>
                        this.send({
                          type: c.LIST_CONTROL_ITEM_CONTROL_MESSAGE,
                          payload: { message: t, itemId: e.id },
                        })
                      );
                      t.set(e.id, n);
                    }),
                    (this.controls = t)),
                  this.controls);
            }),
            (0, r.Z)(this, "recv", (e) => {
              if (e.type === c.LIST_CONTROL_ITEM_CONTROL_MESSAGE) {
                let t = this.controls.get(e.payload.itemId);
                if (null == t) return;
                let n = t.recv;
                n(e.payload.message);
              }
            }),
            (this.descriptor = t),
            (this.send = e),
            (this.controls = new Map());
        }
      }
      function d(e, t, n) {
        return null == t
          ? t
          : t &&
              t.map((t) => ({
                ...t,
                value: (0, s.JG)(e.config.type, t.value, n),
              }));
      }
      function h(e, t) {
        var n;
        return (
          (n = o.A5),
          null == t ? [] : t.flatMap((t) => n(e.config.type, t.value))
        );
      }
      function p(e, t) {
        return Object.fromEntries(
          t.map((t) => [t.id, (0, s.JC)(e.config.type, t.value)])
        );
      }
      function f(e, t, n, r) {
        return t.map((t) => ({
          ...t,
          value: (0, s.UF)(e.config.type, t.value, n[t.id], r),
        }));
      }
    },
    8903: function (e, t, n) {
      "use strict";
      n.d(t, {
        UJ: function () {
          return s;
        },
        gZ: function () {
          return i;
        },
        kV: function () {
          return a;
        },
      });
      var r = n(4131);
      let a = r.i,
        i = "number::v1",
        s = "makeswift::controls::number";
    },
    4334: function (e, t, n) {
      "use strict";
      n.d(t, {
        $: function () {
          return s;
        },
        D: function () {
          return o;
        },
      });
      var r = n(1494),
        a = n(810),
        i = n(3057);
      function s(e) {
        return 0 === e.descendants.length
          ? [{ type: i.kH.Default, children: [{ text: "" }] }]
          : e.descendants;
      }
      function o(e, t) {
        return {
          type: r.CL,
          version: 2,
          descendants: e,
          key: null != t ? t : (0, a.Z)(),
        };
      }
    },
    7617: function (e, t, n) {
      "use strict";
      function r(e) {
        let {
          control: t,
          withPlugin: n,
          onKeyDown: r,
          renderElement: a,
          renderLeaf: i,
        } = e;
        return {
          control: t,
          withPlugin: n,
          onKeyDown: r,
          renderElement: a,
          renderLeaf: i,
        };
      }
      n.d(t, {
        Y: function () {
          return r;
        },
      });
    },
    1494: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ho: function () {
          return v;
        },
        Kc: function () {
          return y;
        },
        CL: function () {
          return _;
        },
        _w: function () {
          return A;
        },
        i7: function () {
          return N;
        },
      });
      var r = n(597),
        a = n(4515),
        i = n.n(a),
        s = n(2645),
        o = n(4334),
        l = n(7617),
        c = n(5279),
        u = n(2342),
        d = n(4408),
        h = n(5038),
        p = n(2304),
        f = n(2074),
        m = n(7898),
        E = n(9440),
        T = n(148),
        g = n(2991);
      let _ = "makeswift::controls::rich-text-v2",
        A = {
          Inline: "makeswift::controls::rich-text-v2::mode::inline",
          Block: "makeswift::controls::rich-text-v2::mode::block",
        };
      function v() {
        var e;
        let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return {
          type: _,
          config: {
            mode: t.mode,
            defaultValue:
              null !== (e = t.defaultValue) && void 0 !== e
                ? e
                : (null == t ? void 0 : t.mode) === A.Inline
                ? "Edit this text"
                : i()(3),
            plugins:
              (null == t ? void 0 : t.mode) === A.Inline
                ? [(0, g.R)()]
                : [
                    (0, E.AT)(),
                    (0, T.Mx)(),
                    (0, m.k)(),
                    (0, f.C)(),
                    (0, l.Y)({
                      control: {
                        definition: (0, c.rU)({ label: "On Click" }),
                        onChange: h.z,
                        getValue: p.N,
                        getElementValue: (e) =>
                          u.q.isInline(e) && (0, d.j)(e) ? e.link : void 0,
                      },
                    }),
                  ],
          },
        };
      }
      v.Mode = A;
      let b = {
        RESET_VALUE:
          "makeswift::controls::rich-text-v2::control-message::reset-value",
        FOCUS: "makeswift::controls::rich-text-v2::control-message::focus",
        RUN_PLUGIN_CONTROL_ACTION:
          "makeswift::controls::rich-text-v2::control-message::run-plugin-control-action",
        SET_DEFAULT_VALUE:
          "makeswift::controls::rich-text-v2::control-message::set-default-value",
        SET_PLUGIN_CONTROL_VALUE:
          "makeswift::controls::rich-text-v2::control-message::set-plugin-control-value",
        ON_CHANGE:
          "makeswift::controls::rich-text-v2::control-message::on-change",
        SELECT: "makeswift::controls::rich-text-v2::control-message::select",
        SWITCH_TO_BUILD_MODE:
          "makeswift::controls::rich-text-v2::control-message::switch-to-build-mode",
        CHANGE_BOX_MODEL:
          "makeswift::controls::rich-text-v2::control-message::change-box-model",
        REDO: "makeswift::controls::rich-text-v2::control-message::redo",
        UNDO: "makeswift::controls::rich-text-v2::control-message::undo",
      };
      class y extends s.V {
        setEditor(e) {
          var t, n, r;
          (this.editor = e),
            this.send({
              type: b.SET_PLUGIN_CONTROL_VALUE,
              value:
                null !==
                  (r =
                    null === (t = this.descriptor.config) || void 0 === t
                      ? void 0
                      : null === (n = t.plugins) || void 0 === n
                      ? void 0
                      : n.map((t) => {
                          var n;
                          return null == t
                            ? void 0
                            : null === (n = t.control) || void 0 === n
                            ? void 0
                            : n.getValue(e);
                        })) && void 0 !== r
                  ? r
                  : [],
            });
          let a = e.onChange;
          this.editor.onChange = (e) => {
            a(e),
              this.updatePluginValues(),
              null != this.editor &&
                (null == e ? void 0 : e.operation) != null &&
                this.onLocalUserChange();
          };
        }
        setDefaultValue(e) {
          (this.defaultValue = e),
            this.send({ type: b.SET_DEFAULT_VALUE, value: e });
        }
        onLocalUserChange() {
          null != this.editor &&
            this.send({
              type: b.ON_CHANGE,
              value: (0, o.D)(this.editor.children, this.editor.currentKey),
            });
        }
        updatePluginValues() {
          var e, t, n;
          let r = this.editor;
          null != r &&
            this.send({
              type: b.SET_PLUGIN_CONTROL_VALUE,
              value:
                null !==
                  (n =
                    null === (e = this.descriptor.config) || void 0 === e
                      ? void 0
                      : null === (t = e.plugins) || void 0 === t
                      ? void 0
                      : t.map((e) => {
                          var t;
                          return null == e
                            ? void 0
                            : null === (t = e.control) || void 0 === t
                            ? void 0
                            : t.getValue(r);
                        })) && void 0 !== n
                  ? n
                  : [],
            });
        }
        select() {
          this.send({ type: b.SELECT });
        }
        switchToBuildMode() {
          this.send({ type: b.SWITCH_TO_BUILD_MODE });
        }
        undo() {
          this.send({ type: b.UNDO });
        }
        redo() {
          this.send({ type: b.REDO });
        }
        changeBoxModel(e) {
          this.send({ type: b.CHANGE_BOX_MODEL, payload: { boxModel: e } });
        }
        constructor(e, t) {
          super(e),
            (0, r.Z)(this, "editor", null),
            (0, r.Z)(this, "defaultValue", null),
            (0, r.Z)(this, "descriptor", void 0),
            (0, r.Z)(this, "recv", (e) => {
              if (this.editor)
                switch (e.type) {
                  case b.FOCUS:
                    this.editor.focusAndSelectAll();
                    break;
                  case b.RESET_VALUE:
                    this.defaultValue &&
                      (this.editor.resetValue(this.defaultValue),
                      setTimeout(() => {
                        this.onLocalUserChange();
                      }));
                    break;
                  case b.RUN_PLUGIN_CONTROL_ACTION:
                    var t, n, r;
                    null ===
                      (t =
                        null === (n = this.descriptor.config.plugins) ||
                        void 0 === n
                          ? void 0
                          : n.at(e.pluginIndex)) ||
                      void 0 === t ||
                      null === (r = t.control) ||
                      void 0 === r ||
                      r.onChange(this.editor, e.value);
                }
            }),
            (this.descriptor = t),
            (this.send = e);
        }
      }
      function N(e) {
        return (
          void 0 !== e &&
          "object" == typeof e &&
          !Array.isArray(e) &&
          "document" in e
        );
      }
    },
    5595: function (e, t, n) {
      "use strict";
      n.d(t, {
        J2: function () {
          return d;
        },
        wS: function () {
          return l;
        },
        Mr: function () {
          return o;
        },
      });
      let r = {
        Value: "value",
        Text: "text",
        Inline: "inline",
        Block: "block",
        Document: "document",
        Leaf: "leaf",
        Selection: "selection",
        Mark: "mark",
        Range: "range",
        Decoration: "decoration",
        Annotation: "annotation",
        Point: "point",
        Operation: "operation",
      };
      var a = n(3057);
      function i(e) {
        return "object" == typeof e && "text" in e;
      }
      function s(e) {
        switch (e.object) {
          case r.Inline:
          case r.Text:
            return (function e(t) {
              switch (t.object) {
                case r.Inline:
                  return (function (t) {
                    var n, r, i, s;
                    switch (t.type) {
                      case a.T5.Link:
                        return [
                          {
                            children:
                              null !==
                                (r =
                                  null === (n = t.nodes) || void 0 === n
                                    ? void 0
                                    : n.flatMap(e)) && void 0 !== r
                                ? r
                                : [],
                            [t.type]: t.data,
                            type: t.type,
                          },
                        ];
                      case a.T5.Code:
                      case a.T5.SubScript:
                      case a.T5.SuperScript:
                        return [
                          {
                            children:
                              null !==
                                (s =
                                  null === (i = t.nodes) || void 0 === i
                                    ? void 0
                                    : i.flatMap(e)) && void 0 !== s
                                ? s
                                : [],
                            type: t.type,
                          },
                        ];
                      default:
                        return [];
                    }
                  })(t);
                case r.Text:
                  return (function (e) {
                    var t, n, r, a;
                    let i =
                      null === (t = e.marks) || void 0 === t
                        ? void 0
                        : t.find((e) => "typography" === e.type);
                    return [
                      {
                        text: null !== (r = e.text) && void 0 !== r ? r : "",
                        typography:
                          null !==
                            (a =
                              null == i
                                ? void 0
                                : null === (n = i.data) || void 0 === n
                                ? void 0
                                : n.value) && void 0 !== a
                            ? a
                            : void 0,
                      },
                    ];
                  })(t);
                default:
                  return [];
              }
            })(e);
          case r.Block:
            return [
              {
                type: e.type,
                textAlign:
                  (null == e ? void 0 : e.data) && "textAlign" in e.data
                    ? null == e
                      ? void 0
                      : e.data.textAlign
                    : void 0,
                children:
                  null == e.nodes || (e.nodes && 0 === e.nodes.length)
                    ? [{ text: "" }]
                    : e.nodes.flatMap(s),
              },
            ];
          default:
            return [];
        }
      }
      function o(e) {
        var t, n, r, a;
        return (null === (t = e.selection) || void 0 === t
          ? void 0
          : null === (n = t.anchor) || void 0 === n
          ? void 0
          : n.offset) != null &&
          null != e.selection.anchor.path &&
          (null === (r = e.selection) || void 0 === r
            ? void 0
            : null === (a = r.focus) || void 0 === a
            ? void 0
            : a.offset) != null &&
          null != e.selection.focus.path
          ? {
              anchor: {
                offset: e.selection.anchor.offset,
                path: e.selection.anchor.path,
              },
              focus: {
                offset: e.selection.focus.offset,
                path: e.selection.focus.path,
              },
            }
          : null;
      }
      function l(e) {
        var t, n, r;
        return null !==
          (r =
            null === (t = e.document) || void 0 === t
              ? void 0
              : null === (n = t.nodes) || void 0 === n
              ? void 0
              : n.flatMap(s)) && void 0 !== r
          ? r
          : [{ type: a.kH.Default, children: [{ text: "" }] }];
      }
      function c(e) {
        if (i(e))
          return [
            {
              text: e.text,
              object: "text",
              marks: e.typography
                ? [
                    {
                      data: { value: e.typography },
                      type: "typography",
                      object: "mark",
                    },
                  ]
                : [],
            },
          ];
        switch (e.type) {
          case a.T5.Link:
            var t;
            return [
              {
                object: r.Inline,
                nodes: e.children.flatMap(c),
                type: e.type,
                data: null !== (t = e.link) && void 0 !== t ? t : void 0,
              },
            ];
          case a.T5.Code:
          case a.T5.SubScript:
          case a.T5.SuperScript:
            return [
              {
                object: "inline",
                nodes: e.children.flatMap(c),
                type: e.type,
                data: {},
              },
            ];
        }
      }
      function u(e) {
        if (i(e)) return c(e);
        switch (e.type) {
          case a.T5.Link:
          case a.T5.Code:
          case a.T5.SubScript:
          case a.T5.SuperScript:
            return c(e);
          case a.kH.Heading1:
          case a.kH.Heading2:
          case a.kH.Heading3:
          case a.kH.Heading4:
          case a.kH.Heading5:
          case a.kH.Heading6:
          case a.kH.Default:
          case a.kH.BlockQuote:
          case a.kH.Paragraph:
          case a.kH.OrderedList:
          case a.kH.UnorderedList:
          case a.kH.ListItem:
          case a.kH.ListItemChild:
            var t, n;
            return [
              {
                type: e.type,
                data: e.textAlign ? { textAlign: e.textAlign } : {},
                object: "block",
                nodes:
                  null !==
                    (n =
                      null === (t = e.children) || void 0 === t
                        ? void 0
                        : t.flatMap(u)) && void 0 !== n
                    ? n
                    : [],
              },
            ];
          default:
            return [];
        }
      }
      function d(e, t) {
        return {
          document: { data: void 0, nodes: e.flatMap(u), object: "document" },
          object: "value",
          selection: (function (e) {
            if (null != e)
              return {
                isFocused: !1,
                marks: void 0,
                object: "selection",
                anchor: {
                  offset: e.anchor.offset,
                  path: e.anchor.path,
                  object: "point",
                },
                focus: {
                  offset: e.focus.offset,
                  path: e.focus.path,
                  object: "point",
                },
              };
          })(t),
          annotations: void 0,
          data: void 0,
        };
      }
    },
    3318: function (e, t, n) {
      "use strict";
      n.d(t, {
        Le: function () {
          return o;
        },
        NZ: function () {
          return c;
        },
      });
      var r = n(597),
        a = n(791),
        i = n(2645),
        s = n(5595);
      let o = "makeswift::controls::rich-text",
        l = {
          CHANGE_BUILDER_EDIT_MODE: "CHANGE_BUILDER_EDIT_MODE",
          INITIALIZE_EDITOR: "INITIALIZE_EDITOR",
          CHANGE_EDITOR_VALUE: "CHANGE_EDITOR_VALUE",
          FOCUS: "FOCUS",
          BLUR: "BLUR",
          UNDO: "UNDO",
          REDO: "REDO",
          CHANGE_BOX_MODEL: "CHANGE_BOX_MODEL",
        };
      class c extends i.V {
        setSlateEditor(e) {
          (this.editor = e),
            this.send({
              type: l.INITIALIZE_EDITOR,
              value: (0, s.J2)(e.children, e.selection),
            });
          let t = e.onChange;
          this.editor.onChange = (n) => {
            t(n),
              (null == n ? void 0 : n.operation) != null &&
                this.send({
                  type: l.CHANGE_EDITOR_VALUE,
                  value: (0, s.J2)(e.children, e.selection),
                });
          };
        }
        focus() {
          this.send({ type: l.FOCUS });
        }
        blur() {
          this.send({ type: l.BLUR });
        }
        undo() {
          this.send({ type: l.UNDO });
        }
        redo() {
          this.send({ type: l.REDO });
        }
        changeBoxModel(e) {
          this.send({ type: l.CHANGE_BOX_MODEL, payload: { boxModel: e } });
        }
        constructor(...e) {
          super(...e),
            (0, r.Z)(this, "editor", null),
            (0, r.Z)(this, "recv", (e) => {
              if (this.editor)
                switch (e.type) {
                  case l.CHANGE_BUILDER_EDIT_MODE:
                    switch (e.editMode) {
                      case a.U.BUILD:
                      case a.U.INTERACT:
                        this.editor.deselectAndBlur();
                    }
                    break;
                  case l.FOCUS:
                    this.editor.focusAndSelectAll();
                }
            });
        }
      }
    },
    2534: function (e, t, n) {
      "use strict";
      n.d(t, {
        P: function () {
          return a;
        },
        x: function () {
          return r;
        },
      });
      let r = "makeswift::controls::select";
      function a(e) {
        return { type: r, config: e };
      }
    },
    2234: function (e, t, n) {
      "use strict";
      n.d(t, {
        Dv: function () {
          return f;
        },
        F$: function () {
          return u;
        },
        GO: function () {
          return h;
        },
        Gx: function () {
          return d;
        },
        VQ: function () {
          return p;
        },
        a4: function () {
          return l;
        },
      });
      var r = n(597),
        a = n(6037),
        i = n(2645),
        s = n(5639),
        o = n(1748);
      let l = "makeswift::controls::shape",
        c = {
          SHAPE_CONTROL_CHILD_CONTROL_MESSAGE:
            "makeswift::controls::shape::message::child-control-message",
        };
      class u extends i.V {
        constructor(e, t) {
          super(e),
            (0, r.Z)(this, "controls", void 0),
            (0, r.Z)(this, "descriptor", void 0),
            (0, r.Z)(this, "send", void 0),
            (0, r.Z)(this, "setControls", () => {
              let e = new Map(),
                t = this.descriptor.config.type;
              return (
                Object.keys(t).forEach((n) => {
                  let r = (0, a.nU)(t[n], (e) =>
                    this.send({
                      type: c.SHAPE_CONTROL_CHILD_CONTROL_MESSAGE,
                      payload: { message: e, key: n },
                    })
                  );
                  e.set(n, r);
                }),
                (this.controls = e),
                this.controls
              );
            }),
            (0, r.Z)(this, "recv", (e) => {
              if (e.type === c.SHAPE_CONTROL_CHILD_CONTROL_MESSAGE) {
                let t = this.controls.get(e.payload.key);
                if (null == t) return;
                let n = t.recv;
                n(e.payload.message);
              }
            }),
            (this.descriptor = t),
            (this.send = e),
            (this.controls = new Map()),
            this.setControls();
        }
      }
      function d(e, t, n) {
        if (null == t) return t;
        let r = {};
        for (let [a, i] of Object.entries(e.config.type)) {
          let e = t[a];
          r[a] = (0, s.JG)(i, e, n);
        }
        return r;
      }
      function h(e, t) {
        var n;
        return (
          (n = o.A5),
          null == t
            ? []
            : Object.entries(e.config.type).flatMap((e) => {
                let [r, a] = e;
                return n(a, t[r]);
              })
        );
      }
      function p(e, t) {
        return Object.fromEntries(
          Object.entries(e.config.type).map((e) => {
            let [n, r] = e;
            return [n, (0, s.JC)(r, t[n])];
          })
        );
      }
      function f(e, t, n, r) {
        return Object.fromEntries(
          Object.entries(e.config.type).map((e) => {
            let [a, i] = e;
            return [a, (0, s.UF)(i, t[a], n[a], r)];
          })
        );
      }
    },
    6318: function (e, t, n) {
      "use strict";
      n.d(t, {
        $n: function () {
          return o;
        },
        B$: function () {
          return c;
        },
        QI: function () {
          return i;
        },
        lm: function () {
          return l;
        },
      });
      var r = n(597),
        a = n(2645);
      let i = "makeswift::controls::slot",
        s = {
          CONTAINER_BOX_MODEL_CHANGE:
            "makeswift::controls::slot::message::container-box-model-change",
          ITEM_BOX_MODEL_CHANGE:
            "makeswift::controls::slot::message::item-box-model-change",
        };
      class o extends a.V {
        changeContainerBoxModel(e) {
          this.send({
            type: s.CONTAINER_BOX_MODEL_CHANGE,
            payload: { boxModel: e },
          });
        }
        changeItemBoxModel(e, t) {
          this.send({
            type: s.ITEM_BOX_MODEL_CHANGE,
            payload: { index: e, boxModel: t },
          });
        }
        constructor(...e) {
          super(...e), (0, r.Z)(this, "recv", () => {});
        }
      }
      function l(e, t) {
        return null == e
          ? e
          : { ...e, elements: e.elements.map((e) => t.copyElement(e)) };
      }
      function c(e, t) {
        return {
          ...e,
          elements: e.elements.map((e) => t.mergeTranslatedData(e)),
        };
      }
    },
    4658: function (e, t, n) {
      "use strict";
      n.d(t, {
        VE: function () {
          return s;
        },
        XS: function () {
          return o;
        },
        an: function () {
          return c;
        },
      });
      var r = n(597),
        a = n(2645),
        i = n(6037);
      let s = "makeswift::controls::style-v2";
      function o(e) {
        return { type: s, config: e };
      }
      let l = {
        CHANGE_BOX_MODEL:
          "makeswift::controls::style::message::change-box-model",
        STYLE_V2_CONTROL_CHILD_CONTROL_MESSAGE:
          "makeswift::controls::style-v2::message::child-control-message",
      };
      class c extends a.V {
        changeBoxModel(e) {
          this.send({ type: l.CHANGE_BOX_MODEL, payload: { boxModel: e } });
        }
        recv(e) {
          if (e.type === l.STYLE_V2_CONTROL_CHILD_CONTROL_MESSAGE) {
            let t = this.control;
            if (null == t) return;
            let n = t.recv;
            n(e.payload.message);
          }
        }
        constructor(e, t) {
          super(e),
            (0, r.Z)(this, "control", void 0),
            (this.control = (0, i.nU)(t.config.type, (e) => {
              this.send({
                type: l.STYLE_V2_CONTROL_CHILD_CONTROL_MESSAGE,
                payload: { message: e },
              });
            }));
        }
      }
    },
    8251: function (e, t, n) {
      "use strict";
      n.d(t, {
        C6: function () {
          return h;
        },
        c8: function () {
          return i;
        },
        gY: function () {
          return d;
        },
        ym: function () {
          return s;
        },
      });
      var r = n(6407),
        a = n(2645);
      let i = "makeswift::controls::style",
        s = {
          Width: "makeswift::controls::style::property::width",
          Margin: "makeswift::controls::style::property::margin",
          Padding: "makeswift::controls::style::property::padding",
          Border: "makeswift::controls::style::property::border",
          BorderRadius: "makeswift::controls::style::property::border-radius",
          TextStyle: "makeswift::controls::style::property::text-style",
        },
        o = [s.Width, s.Margin],
        l = [
          s.Width,
          s.Margin,
          s.Padding,
          s.Border,
          s.BorderRadius,
          s.TextStyle,
        ];
      function c(e) {
        var t;
        return {
          type: i,
          config: {
            properties:
              null !== (t = null == e ? void 0 : e.properties) && void 0 !== t
                ? t
                : o,
          },
        };
      }
      (c.Default = o),
        (c.All = l),
        (c.Width = s.Width),
        (c.Margin = s.Margin),
        (c.Padding = s.Padding),
        (c.Border = s.Border),
        (c.BorderRadius = s.BorderRadius),
        (c.TextStyle = s.TextStyle);
      let u = {
        CHANGE_BOX_MODEL:
          "makeswift::controls::style::message::change-box-model",
      };
      class d extends a.V {
        changeBoxModel(e) {
          this.send({ type: u.CHANGE_BOX_MODEL, payload: { boxModel: e } });
        }
        recv() {}
        constructor(e) {
          super(e);
        }
      }
      function h(e, t) {
        return null == e
          ? e
          : {
              ...e,
              border: (function (e) {
                if (null != e)
                  return e.map((e) => ({
                    ...e,
                    value: (function (e) {
                      function n(e) {
                        return null == e
                          ? null
                          : null == e.color
                          ? e
                          : { ...e, color: (0, r.df)(e.color, t) };
                      }
                      return {
                        borderTop: n(e.borderTop),
                        borderBottom: n(e.borderBottom),
                        borderRight: n(e.borderRight),
                        borderLeft: n(e.borderLeft),
                      };
                    })(e.value),
                  }));
              })(e.border),
            };
      }
    },
    9904: function (e, t, n) {
      "use strict";
      n.d(t, {
        MD: function () {
          return s;
        },
        OB: function () {
          return a;
        },
        zV: function () {
          return i;
        },
      });
      var r = n(4131);
      let a = r.i,
        i = "text-area::v1",
        s = "makeswift::controls::text-area";
    },
    9866: function (e, t, n) {
      "use strict";
      n.d(t, {
        Al: function () {
          return s;
        },
        B3: function () {
          return a;
        },
        hC: function () {
          return i;
        },
      });
      var r = n(4131);
      let a = r.i,
        i = "text-input::v1",
        s = "makeswift::controls::text-input";
    },
    3483: function (e, t, n) {
      "use strict";
      n.d(t, {
        HM: function () {
          return r;
        },
        Rf: function () {
          return a;
        },
      });
      let r = "makeswift::controls::typography";
      function a() {
        return { type: r };
      }
    },
    6655: function (e, t, n) {
      "use strict";
      function r(e) {
        return "object" == typeof e
          ? "".concat(e.value).concat(e.unit)
          : "number" == typeof e
          ? "".concat(e, "px")
          : e;
      }
      n.d(t, {
        A: function () {
          return r;
        },
      });
    },
    9711: function (e, t, n) {
      "use strict";
      function r(e) {
        return "object" == typeof e
          ? "".concat(e.value).concat(e.unit)
          : "number" == typeof e
          ? "".concat(e, "px")
          : e;
      }
      n.d(t, {
        z: function () {
          return r;
        },
      });
    },
    8603: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return a;
        },
      });
      var r = n(9711);
      function a(e) {
        var t, n, a, i;
        let s =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          o = null !== (t = e.marginTop) && void 0 !== t ? t : s.marginTop,
          l = null !== (n = e.marginRight) && void 0 !== n ? n : s.marginRight,
          c =
            null !== (a = e.marginBottom) && void 0 !== a ? a : s.marginBottom,
          u = null !== (i = e.marginLeft) && void 0 !== i ? i : s.marginLeft,
          d = {};
        return (
          null != o && (d.marginTop = (0, r.z)(o)),
          null != l && (d.marginRight = (0, r.z)(l)),
          null != c && (d.marginBottom = (0, r.z)(c)),
          null != u && (d.marginLeft = (0, r.z)(u)),
          d
        );
      }
    },
    5849: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return a;
        },
      });
      var r = n(9711);
      function a(e) {
        var t, n, a, i;
        let s =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          o = null !== (t = e.paddingTop) && void 0 !== t ? t : s.paddingTop,
          l =
            null !== (n = e.paddingRight) && void 0 !== n ? n : s.paddingRight,
          c =
            null !== (a = e.paddingBottom) && void 0 !== a
              ? a
              : s.paddingBottom,
          u = null !== (i = e.paddingLeft) && void 0 !== i ? i : s.paddingLeft,
          d = {};
        return (
          null != o && (d.paddingTop = (0, r.z)(o)),
          null != l && (d.paddingRight = (0, r.z)(l)),
          null != c && (d.paddingBottom = (0, r.z)(c)),
          null != u && (d.paddingLeft = (0, r.z)(u)),
          d
        );
      }
    },
    1644: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return s;
        },
      });
      var r = n(7458),
        a = n(2983);
      let i = "__forwarded_next_dynamic_ref__";
      function s(e) {
        let t = e((e) =>
          e.then((e) => ({
            __esModule: !0,
            default: (t) =>
              (0, a.createElement)(
                e && e.__esModule ? e.default : e,
                (function (e) {
                  let { [i]: t, ...n } = e;
                  return { ...n, ref: t };
                })(t)
              ),
          }))
        );
        return (0, a.forwardRef)((e, n) =>
          (0, r.jsx)(t, { ...{ ...e, [i]: n } })
        );
      }
    },
    7656: function (e, t, n) {
      "use strict";
      n.d(t, {
        T3: function () {
          return x;
        },
      });
      var r = n(7458),
        a = n(2983),
        i = n(7455),
        s = n.n(i);
      let o = s()(() => n.e(225).then(n.bind(n, 4225)), {
          loadableGenerated: { webpack: () => [4225] },
        }),
        l = s()(() => n.e(329).then(n.bind(n, 5329)), {
          loadableGenerated: { webpack: () => [5329] },
        });
      function c(e) {
        let { preview: t, ...n } = e;
        return t ? (0, r.jsx)(o, { ...n }) : (0, r.jsx)(l, { ...n });
      }
      var u = n(3576),
        d = n(4460),
        h = d.default || d,
        p = n(2227),
        f = n.n(p);
      function m(e) {
        let { code: t, cleanup: n } = e;
        return (
          (0, a.useEffect)(() => {
            let e = document.createElement("div");
            e.innerHTML = t;
            let r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT),
              a = [];
            for (; r.nextNode(); )
              r.currentNode instanceof HTMLScriptElement &&
                a.push(r.currentNode);
            a.forEach((e) => {
              var t;
              let n = document.createElement("script");
              (n.textContent = e.textContent),
                Array.from(e.attributes).forEach((e) => {
                  let { name: t, value: r } = e;
                  n.setAttribute(t, r);
                }),
                null === (t = e.parentNode) ||
                  void 0 === t ||
                  t.replaceChild(n, e);
            });
            let i = Array.from(e.childNodes);
            return (
              document.body.append(...i),
              () => {
                if (
                  (i.forEach((e) => {
                    var t;
                    null === (t = e.parentNode) ||
                      void 0 === t ||
                      t.removeChild(e);
                  }),
                  null == n)
                )
                  return;
                let e = Function(n);
                try {
                  e();
                } catch (e) {}
              }
            );
          }, [t, n]),
          null
        );
      }
      var E = n(7246),
        T = n(179),
        g = n(23);
      let _ = (0, a.memo)(
        (0, a.forwardRef)(function (e, t) {
          let { documentReference: n } = e,
            a = (0, E.k)(n.key);
          return null == a
            ? (0, r.jsx)(T.D, { ref: t, text: "Document not found" })
            : (0, r.jsx)(g.B, { ref: t, document: a });
        })
      );
      var A = n(3649),
        v = n(1880),
        b = n(1728),
        y = n(628);
      let N = { Body: "BODY", Head: "HEAD" },
        C = {
          mimetype: "image/png",
          publicUrl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAABcRAAAXEQHKJvM/AAABjElEQVRYhc2XzU3EMBCFB8TddAAXn6EE6GCpgNABZ1/IXnymBOgAOmA7YM8+ABVsXEHQQFaKQryeN3Yk3ilKJtEnv/nLUd/3pFG0riGi88yrnQn+UfJ5FUi0riWiB2H4nQn+KRd0DFP8agXEfkqCYJBoHdtxIQxfm+DfFgEhoith3NYE30o/qgGR2BJB+xY7kdYEL8oNFUi0jiFMJuxVWrJqEMFxsyUNCsE6AeNztvBp7aJ143vXksoRnwhYtmNdSoIQa6RlO9YXEWW7KgoCleOgxgTf1QZBT+RZ2lXFING6UxCCq+ceeUE8fYdknY599v9sJvzGBP+yCEgC7GPmETc0OJ+0awAlkhe2pAbIXAeFZ8xe2g2Nk3c3ub0xwWt6zY9qbmiqGVMbZK21ZC/YmhlbeBMTzZNDQqcvDb1kM1x32iqZSt1HaqukfKvq34BAOTLsrH+ETNmUkKHHA+428RgeclPVWozeSyAI2EdWB34jtqXNTAySOY3i/KgFIlqOa4GkFmBegorzg4joG07he/M7zl6jAAAAAElFTkSuQmCC",
        },
        I = /^[a-zA-Z][a-zA-Z:_.\-\d]*$/,
        S = [
          "title",
          "base",
          "link",
          "style",
          "meta",
          "script",
          "noscript",
          "template",
        ];
      function R(e) {
        return a.Children.map(h(e.code), (t) => {
          if ("string" == typeof t) return t;
          if (!I.test(t.type)) return null;
          let n = t.key ? "".concat(e.id, ":").concat(t.key) : e.id;
          return (0, a.createElement)(t.type, { ...t.props, key: n });
        });
      }
      let O = (e) => {
        let {
          code: t,
          builderEnabled: n,
          liveEnabled: r,
          location: a,
          cleanup: i,
        } = e;
        return {
          code: t,
          builderEnabled: n,
          liveEnabled: r,
          location: a,
          cleanup: i,
        };
      };
      function k(e) {
        var t, n, i, s, o, l, c, d;
        let { document: h } = e,
          p = (0, b.m)(),
          [E, T] = (0, a.useState)(h.snippets),
          g = (function (e) {
            let t = (0, v.h)(),
              n = () => (null == e ? null : t.readPage(e)),
              r = (0, u.useSyncExternalStore)(t.subscribe, n, n);
            return r;
          })(p ? h.id : null);
        (0, a.useEffect)(() => {
          if (null == g) return;
          let e = E.map(O),
            t = g.snippets.map(O);
          (0, y.Z)(t, e) || T(g.snippets);
        }, [g]);
        let I = (function (e) {
            let t = (0, v.h)(),
              n = () => (null == e ? null : t.readSite(e)),
              r = (0, u.useSyncExternalStore)(t.subscribe, n, n);
            return r;
          })(p ? h.site.id : null),
          k = h.localizedPages.find((e) => {
            let { parentId: t } = e;
            return null == t;
          }),
          x = null !== (t = h.meta.favicon) && void 0 !== t ? t : C,
          L =
            null !== (n = null == k ? void 0 : k.meta.title) && void 0 !== n
              ? n
              : h.meta.title,
          D =
            null !== (i = null == k ? void 0 : k.meta.description) &&
            void 0 !== i
              ? i
              : h.meta.description,
          M =
            null !== (s = null == k ? void 0 : k.meta.keywords) && void 0 !== s
              ? s
              : h.meta.keywords,
          w =
            null !== (o = null == k ? void 0 : k.meta.socialImage) &&
            void 0 !== o
              ? o
              : h.meta.socialImage,
          P =
            null !== (l = null == k ? void 0 : k.seo.canonicalUrl) &&
            void 0 !== l
              ? l
              : h.seo.canonicalUrl,
          B =
            null !== (c = null == k ? void 0 : k.seo.isIndexingBlocked) &&
            void 0 !== c
              ? c
              : h.seo.isIndexingBlocked,
          H = (0, a.useMemo)(
            () =>
              null == I
                ? h.fonts
                    .map((e) => {
                      let { family: t, variants: n } = e;
                      return ""
                        .concat(t.replace(/ /g, "+"), ":")
                        .concat(n.join());
                    })
                    .join("|")
                : I.googleFonts.edges
                    .filter((e) => null != e)
                    .map((e) => {
                      let {
                          activeVariants: t,
                          node: { family: n, variants: r },
                        } = e,
                        a = r
                          .filter((e) =>
                            t.some((t) => t.specifier === e.specifier)
                          )
                          .map((e) => e.specifier)
                          .join();
                      return "".concat(n.replace(/ /g, "+"), ":").concat(a);
                    })
                    .join("|"),
            [I, h]
          ),
          U = (0, a.useMemo)(
            () => E.filter((e) => (p ? e.builderEnabled : e.liveEnabled)),
            [E, p]
          ),
          F = (0, a.useMemo)(() => U.filter((e) => e.location === N.Head), [U]),
          G = (0, a.useRef)(null);
        (0, a.useEffect)(() => {
          var e;
          let t = (null !== (e = G.current) && void 0 !== e ? e : [])
            .filter((e) => null != e.cleanup)
            .filter((e) => !F.some((t) => e.id === t.id));
          t.forEach((e) => {
            if (null == e.cleanup) return;
            let t = Function(e.cleanup);
            try {
              t();
            } catch (e) {}
          }),
            (G.current = F);
        }, [F]);
        let j =
          null !== (d = null == k ? void 0 : k.elementTreeId) && void 0 !== d
            ? d
            : h.id;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(f(), {
              children: [
                (0, r.jsx)("style", {
                  children:
                    "\n            html {\n              font-family: sans-serif;\n            }\n            div#__next {\n              overflow: hidden;\n            }\n          ",
                }),
                (0, r.jsx)("link", {
                  rel: "icon",
                  type: x.mimetype,
                  href: x.publicUrl,
                }),
                P && (0, r.jsx)("link", { rel: "canonical", href: P }),
                B && (0, r.jsx)("meta", { name: "robots", content: "noindex" }),
                L &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("title", { children: L }),
                      (0, r.jsx)("meta", { property: "og:title", content: L }),
                      (0, r.jsx)("meta", { name: "twitter:title", content: L }),
                      (0, r.jsx)("meta", { itemProp: "name", content: L }),
                    ],
                  }),
                D &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("meta", { name: "description", content: D }),
                      (0, r.jsx)("meta", {
                        property: "og:description",
                        content: D,
                      }),
                      (0, r.jsx)("meta", {
                        name: "twitter:description",
                        content: D,
                      }),
                      (0, r.jsx)("meta", {
                        itemProp: "description",
                        content: D,
                      }),
                    ],
                  }),
                M && (0, r.jsx)("meta", { name: "keywords", content: M }),
                w &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("meta", {
                        property: "og:image",
                        content: w.publicUrl,
                      }),
                      (0, r.jsx)("meta", {
                        property: "og:image:type",
                        content: w.mimetype,
                      }),
                      (0, r.jsx)("meta", {
                        name: "twitter:image",
                        content: w.publicUrl,
                      }),
                      (0, r.jsx)("meta", {
                        name: "twitter:card",
                        content: "summary_large_image",
                      }),
                      (0, r.jsx)("meta", {
                        itemProp: "image",
                        content: w.publicUrl,
                      }),
                    ],
                  }),
                "" !== H &&
                  (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("link", {
                      rel: "stylesheet",
                      href: "https://fonts.googleapis.com/css?family=".concat(
                        H,
                        "&display=swap"
                      ),
                    }),
                  }),
                F.map(R).map((e) =>
                  a.Children.map(e, (e) =>
                    "string" == typeof e || S.includes(e.type) ? e : null
                  )
                ),
              ],
            }),
            (0, r.jsx)(_, { documentReference: (0, A.AO)(j) }),
            U.filter((e) => e.location === N.Body).map((e) =>
              (0, r.jsx)(m, { code: e.code, cleanup: e.cleanup }, e.id)
            ),
          ],
        });
      }
      let x = (0, a.memo)((e) => {
        let { snapshot: t, runtime: n } = e,
          i = (0, a.useMemo)(
            () =>
              new v.QN({
                uri: new URL("graphql", t.apiOrigin).href,
                cacheData: t.cacheData,
                localizedResourcesMap: t.localizedResourcesMap,
                locale: t.locale ? new Intl.Locale(t.locale) : void 0,
              }),
            [t]
          ),
          s = new Map([[t.document.id, t.document.data]]);
        return (
          t.document.localizedPages.forEach((e) => {
            s.set(e.elementTreeId, e.data);
          }),
          (0, r.jsx)(c, {
            client: i,
            rootElements: s,
            preview: t.preview,
            runtime: n,
            children: (0, r.jsx)(
              k,
              { document: t.document },
              t.document.data.key
            ),
          })
        );
      });
    },
    2645: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return a;
        },
      });
      var r = n(597);
      class a {
        constructor(e) {
          (0, r.Z)(this, "send", void 0), (this.send = e);
        }
      }
    },
    7878: function (e, t, n) {
      "use strict";
      n.d(t, {
        J: function () {
          return i;
        },
        b: function () {
          return s;
        },
      });
      var r = n(8051);
      function a(e, t) {
        var n, r;
        if (null == e) return e;
        switch (e.type) {
          case "OPEN_PAGE": {
            let r = e.payload.pageId;
            if (null == r) return e;
            return {
              ...e,
              payload: {
                ...e.payload,
                pageId:
                  null !== (n = t.replacementContext.pageIds.get(r)) &&
                  void 0 !== n
                    ? n
                    : r,
              },
            };
          }
          case "SCROLL_TO_ELEMENT": {
            let n = e.payload.elementIdConfig;
            if (null == n) return e;
            return {
              ...e,
              payload: {
                ...e.payload,
                elementIdConfig: {
                  ...n,
                  elementKey:
                    null !==
                      (r = t.replacementContext.elementKeys.get(
                        n.elementKey
                      )) && void 0 !== r
                      ? r
                      : n.elementKey,
                },
              },
            };
          }
          default:
            return e;
        }
      }
      function i(e, t, n) {
        var i, s, o;
        switch (e.type) {
          case "Backgrounds":
            return null == t
              ? t
              : t.map((t) => ({
                  ...t,
                  value: t.value.map((t) =>
                    (0, r.EQ)([e, t])
                      .with([r.P.any, { type: "color" }], (e) => {
                        var t;
                        let [, r] = e;
                        return {
                          ...r,
                          payload:
                            null === r.payload
                              ? null
                              : {
                                  ...r.payload,
                                  swatchId:
                                    null !==
                                      (t = n.replacementContext.swatchIds.get(
                                        r.payload.swatchId
                                      )) && void 0 !== t
                                      ? t
                                      : r.payload.swatchId,
                                },
                        };
                      })
                      .with([r.P.any, { type: "gradient" }], (e) => {
                        var t;
                        let [, r] = e;
                        return {
                          ...r,
                          payload: {
                            ...r.payload,
                            stops: r.payload.stops.map((e) => ({
                              ...e,
                              color:
                                null == e.color
                                  ? null
                                  : {
                                      ...e.color,
                                      swatchId:
                                        null !==
                                          (t =
                                            n.replacementContext.swatchIds.get(
                                              e.color.swatchId
                                            )) && void 0 !== t
                                          ? t
                                          : e.color.swatchId,
                                    },
                            })),
                          },
                        };
                      })
                      .with(
                        [
                          { version: 1 },
                          {
                            type: "image-v1",
                            version: 1,
                            payload: { image: { type: "makeswift-file" } },
                          },
                        ],
                        (e) => {
                          var t;
                          let [, r] = e;
                          return {
                            ...r,
                            payload: {
                              ...r.payload,
                              image: {
                                ...r.payload.image,
                                id:
                                  null !==
                                    (t = n.replacementContext.fileIds.get(
                                      r.payload.image.id
                                    )) && void 0 !== t
                                    ? t
                                    : r.payload.image.id,
                              },
                            },
                          };
                        }
                      )
                      .with(
                        [
                          r.P.any,
                          { type: "image", payload: { imageId: r.P.string } },
                        ],
                        (e) => {
                          var t;
                          let [, r] = e;
                          return {
                            ...r,
                            payload: {
                              ...r.payload,
                              imageId:
                                null !==
                                  (t = n.replacementContext.fileIds.get(
                                    r.payload.imageId
                                  )) && void 0 !== t
                                  ? t
                                  : r.payload.imageId,
                            },
                          };
                        }
                      )
                      .otherwise(() => t)
                  ),
                }));
          case "Grid":
            return (function (e, t) {
              if (null != e)
                return {
                  ...e,
                  elements: e.elements.map((e) => t.copyElement(e)),
                };
            })(t, n);
          case "NavigationLinks":
            return null == t
              ? t
              : t.map(function (e) {
                  switch (e.type) {
                    case "button":
                    case "dropdown": {
                      var t;
                      let { color: r, link: i } = e.payload;
                      return {
                        ...e,
                        payload: {
                          ...e.payload,
                          link: null != i ? a(i, n) : void 0,
                          color:
                            null != r
                              ? r.map((e) => ({
                                  ...e,
                                  value: {
                                    ...e.value,
                                    swatchId:
                                      null !==
                                        (t = n.replacementContext.swatchIds.get(
                                          e.value.swatchId
                                        )) && void 0 !== t
                                        ? t
                                        : e.value.swatchId,
                                  },
                                }))
                              : void 0,
                        },
                      };
                    }
                    default:
                      return e;
                  }
                });
          case "Link":
            return a(t, n);
          case "Shadows":
            return (function (e, t) {
              if (null == e) return e;
              return e.map((e) => ({ ...e, value: e.value.map(n) }));
              function n(e) {
                var n;
                let { color: r } = e.payload;
                return null == r
                  ? e
                  : {
                      ...e,
                      payload: {
                        ...e.payload,
                        color: {
                          ...r,
                          swatchId:
                            null !==
                              (n = t.replacementContext.swatchIds.get(
                                r.swatchId
                              )) && void 0 !== n
                              ? n
                              : r.swatchId,
                        },
                      },
                    };
              }
            })(t, n);
          case "Image":
            return (0, r.EQ)([e, t])
              .with([r.P.any, r.P.string], (e) => {
                let [, t] = e;
                return null !== (i = n.replacementContext.fileIds.get(t)) &&
                  void 0 !== i
                  ? i
                  : t;
              })
              .with(
                [{ version: 1 }, { type: "makeswift-file", version: 1 }],
                (e) => {
                  let [, t] = e;
                  return null !==
                    (s = n.replacementContext.fileIds.get(t.id)) && void 0 !== s
                    ? s
                    : t.id;
                }
              )
              .otherwise((e) => {
                let [, t] = e;
                return t;
              });
          case "Images":
            return null == t
              ? t
              : t.map(function (t) {
                  var a, i;
                  let { file: s } = t.props;
                  return null == s
                    ? t
                    : {
                        ...t,
                        props: {
                          ...t.props,
                          file: (0, r.EQ)([e, s])
                            .with([r.P.any, r.P.string], (e) => {
                              let [, t] = e;
                              return null !==
                                (a = n.replacementContext.fileIds.get(t)) &&
                                void 0 !== a
                                ? a
                                : t;
                            })
                            .with(
                              [
                                { version: 1 },
                                { type: "makeswift-file", version: 1 },
                              ],
                              (e) => {
                                let [, t] = e;
                                return null !==
                                  (i = n.replacementContext.fileIds.get(
                                    t.id
                                  )) && void 0 !== i
                                  ? i
                                  : t.id;
                              }
                            )
                            .otherwise((e) => {
                              let [, t] = e;
                              return t;
                            }),
                        },
                      };
                });
          case "ResponsiveColor":
            return null == t
              ? t
              : t.map((e) => {
                  var t, r;
                  return {
                    ...e,
                    value: {
                      ...(t = e.value),
                      swatchId:
                        null !==
                          (r = n.replacementContext.swatchIds.get(
                            t.swatchId
                          )) && void 0 !== r
                          ? r
                          : t.swatchId,
                    },
                  };
                });
          case "TableFormFields":
            return null == t
              ? t
              : {
                  ...t,
                  fields: t.fields.map(function (e) {
                    var t;
                    return {
                      ...e,
                      tableColumnId:
                        null !==
                          (t = n.replacementContext.tableColumnIds.get(
                            e.tableColumnId
                          )) && void 0 !== t
                          ? t
                          : e.tableColumnId,
                    };
                  }),
                };
          case "Table":
            return null == t
              ? t
              : null !== (o = n.replacementContext.tableIds.get(t)) &&
                void 0 !== o
              ? o
              : t;
          case "Border":
            return (function (e, t) {
              if (null == e) return e;
              return e.map((e) => ({
                ...e,
                value: (function (e) {
                  let {
                    borderTop: t,
                    borderRight: r,
                    borderBottom: a,
                    borderLeft: i,
                  } = e;
                  return {
                    borderTop: t && n(t),
                    borderRight: r && n(r),
                    borderBottom: a && n(a),
                    borderLeft: i && n(i),
                  };
                })(e.value),
              }));
              function n(e) {
                var n;
                let { color: r } = e;
                return null == r
                  ? e
                  : {
                      ...e,
                      color: {
                        ...r,
                        swatchId:
                          null !==
                            (n = t.replacementContext.swatchIds.get(
                              r.swatchId
                            )) && void 0 !== n
                            ? n
                            : r.swatchId,
                      },
                    };
              }
            })(t, n);
          case "RichText":
            return (function (e, t) {
              if (null == e) return e;
              return {
                ...e,
                document: e.document
                  ? (function e(r) {
                      var a, i, s;
                      switch (r.object) {
                        case "document":
                        case "block":
                        case "inline":
                          return "link" === r.type
                            ? {
                                ...r,
                                nodes:
                                  null === (a = r.nodes) || void 0 === a
                                    ? void 0
                                    : a.map(e),
                                data: r.data
                                  ? (function (e) {
                                      var n, r;
                                      switch (e.type) {
                                        case "OPEN_PAGE": {
                                          let r = e.payload.pageId;
                                          if (null == r) return e;
                                          return {
                                            ...e,
                                            payload: {
                                              ...e.payload,
                                              pageId:
                                                null !==
                                                  (n =
                                                    t.replacementContext.pageIds.get(
                                                      r
                                                    )) && void 0 !== n
                                                  ? n
                                                  : e.payload.pageId,
                                            },
                                          };
                                        }
                                        case "SCROLL_TO_ELEMENT": {
                                          let n = e.payload.elementIdConfig;
                                          if (null == n) return e;
                                          return {
                                            ...e,
                                            payload: {
                                              ...e.payload,
                                              elementIdConfig: {
                                                ...n,
                                                elementKey:
                                                  null !==
                                                    (r =
                                                      t.replacementContext.elementKeys.get(
                                                        n.elementKey
                                                      )) && void 0 !== r
                                                    ? r
                                                    : n.elementKey,
                                              },
                                            },
                                          };
                                        }
                                        default:
                                          return e;
                                      }
                                    })(r.data)
                                  : r.data,
                              }
                            : {
                                ...r,
                                nodes:
                                  null === (i = r.nodes) || void 0 === i
                                    ? void 0
                                    : i.map(e),
                              };
                        case "text":
                          return {
                            ...r,
                            marks:
                              null === (s = r.marks) || void 0 === s
                                ? void 0
                                : s.map(n),
                          };
                        default:
                          return r;
                      }
                    })(e.document)
                  : e.document,
              };
              function n(e) {
                if ("typography" === e.type) {
                  var n, r, a, i, s;
                  let o =
                    null === (n = e.data) || void 0 === n ? void 0 : n.value.id;
                  return {
                    ...e,
                    data: {
                      ...e.data,
                      value: {
                        ...(null === (r = e.data) || void 0 === r
                          ? void 0
                          : r.value),
                        id:
                          null !==
                            (i = t.replacementContext.typographyIds.get(o)) &&
                          void 0 !== i
                            ? i
                            : o,
                        style:
                          null === (a = e.data) || void 0 === a
                            ? void 0
                            : a.value.style.map((e) => {
                                var n, r;
                                return {
                                  ...e,
                                  value: {
                                    ...e.value,
                                    color:
                                      null == e.value.color
                                        ? e.value.color
                                        : {
                                            ...e.value.color,
                                            swatchId:
                                              null !==
                                                (s =
                                                  t.replacementContext.swatchIds.get(
                                                    null ===
                                                      (n = e.value.color) ||
                                                      void 0 === n
                                                      ? void 0
                                                      : n.swatchId
                                                  )) && void 0 !== s
                                                ? s
                                                : null ===
                                                    (r = e.value.color) ||
                                                  void 0 === r
                                                ? void 0
                                                : r.swatchId,
                                          },
                                  },
                                };
                              }),
                      },
                    },
                  };
                }
                return e;
              }
            })(t, n);
          case "ElementID":
            return null == t
              ? t
              : n.replacementContext.elementHtmlIds.has(t)
              ? void 0
              : (n.replacementContext.elementHtmlIds.add(t), t);
          default:
            return t;
        }
      }
      function s(e, t) {
        return t.replacementContext.globalElementIds.get(e) || e;
      }
    },
    9791: function (e, t, n) {
      "use strict";
      n.d(t, {
        BY: function () {
          return v;
        },
        Bn: function () {
          return y;
        },
        Ee: function () {
          return _;
        },
        Ej: function () {
          return h;
        },
        Hp: function () {
          return O;
        },
        Jk: function () {
          return g;
        },
        Js: function () {
          return m;
        },
        Kx: function () {
          return G;
        },
        Lu: function () {
          return W;
        },
        Mr: function () {
          return I;
        },
        NQ: function () {
          return Z;
        },
        OC: function () {
          return l;
        },
        R0: function () {
          return o;
        },
        RE: function () {
          return b;
        },
        S6: function () {
          return M;
        },
        Sj: function () {
          return s;
        },
        UE: function () {
          return p;
        },
        WG: function () {
          return H;
        },
        XZ: function () {
          return d;
        },
        Yk: function () {
          return i;
        },
        Zh: function () {
          return R;
        },
        Zt: function () {
          return N;
        },
        Zx: function () {
          return f;
        },
        _K: function () {
          return L;
        },
        cM: function () {
          return u;
        },
        cc: function () {
          return c;
        },
        dk: function () {
          return k;
        },
        f6: function () {
          return B;
        },
        fo: function () {
          return P;
        },
        gU: function () {
          return F;
        },
        iA: function () {
          return U;
        },
        k3: function () {
          return x;
        },
        mE: function () {
          return E;
        },
        nN: function () {
          return D;
        },
        nk: function () {
          return V;
        },
        oi: function () {
          return j;
        },
        pn: function () {
          return Y;
        },
        rU: function () {
          return A;
        },
        rj: function () {
          return T;
        },
        ss: function () {
          return S;
        },
        vc: function () {
          return C;
        },
        yZ: function () {
          return w;
        },
      });
      var r = n(8251),
        a = n(1748);
      let i = {
        Backgrounds: "Backgrounds",
        Border: "Border",
        BorderRadius: "BorderRadius",
        Checkbox: "Checkbox",
        Date: "Date",
        ElementID: "ElementID",
        Font: "Font",
        GapX: "GapX",
        GapY: "GapY",
        Grid: "Grid",
        Image: "Image",
        Images: "Images",
        Link: "Link",
        List: "List",
        Margin: "Margin",
        NavigationLinks: "NavigationLinks",
        Number: "Number",
        Padding: "Padding",
        ResponsiveColor: "ResponsiveColor",
        ResponsiveIconRadioGroup: "ResponsiveIconRadioGroup",
        ResponsiveLength: "ResponsiveLength",
        ResponsiveNumber: "ResponsiveNumber",
        ResponsiveOpacity: "ResponsiveOpacity",
        ResponsiveSelect: "ResponsiveSelect",
        RichText: "RichText",
        Shadows: "Shadows",
        Shape: "Shape",
        SocialLinks: "SocialLinks",
        Table: "Table",
        TableFormFields: "TableFormFields",
        Typeahead: "Typeahead",
        TextArea: "TextArea",
        TextInput: "TextInput",
        TextStyle: "TextStyle",
        Video: "Video",
        Width: "Width",
        Style: r.c8,
      };
      function s() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.Backgrounds, version: 1, options: e };
      }
      let o = {
        ClassName: "makeswift::prop-controllers::border::format::class-name",
        ResponsiveValue:
          "makeswift::prop-controllers:border::format::responsive-value",
      };
      function l() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.Border, options: e };
      }
      l.Format = o;
      let c = {
        ClassName:
          "makeswift::prop-controllers::border-radius::format::class-name",
        ResponsiveValue:
          "makeswift::prop-controllers::border-radius::format::responsive-value",
      };
      function u() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.BorderRadius, options: e };
      }
      function d(e) {
        return { type: i.Checkbox, options: e };
      }
      function h() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.Date, options: e };
      }
      function p() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.ElementID, options: e };
      }
      function f() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.Font, options: e };
      }
      function m() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.GapX, options: e };
      }
      function E() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.GapY, options: e };
      }
      function T() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.Grid, options: e };
      }
      function g(e, t) {
        return {
          ...e,
          elements: e.elements.map((e) => t.mergeTranslatedData(e)),
        };
      }
      function _() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.Image, version: 1, options: e };
      }
      function A() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.Images, version: 1, options: e };
      }
      function v() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.Link, options: e };
      }
      function b(e, t) {
        var n;
        return (
          (n = a.A5),
          null == t
            ? []
            : t.flatMap((t) => (t.value ? n(e.options.type, t.value) : []))
        );
      }
      u.Format = c;
      let y = {
        ClassName: "makeswift::prop-controllers::margin::format::class-name",
        ResponsiveValue:
          "makeswift::prop-controllers::margin::format::responsive-value",
      };
      function N() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.Margin, options: e };
      }
      function C() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.NavigationLinks, options: e };
      }
      function I() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.Number, options: e };
      }
      N.Format = y;
      let S = {
        ClassName: "makeswift::prop-controllers::padding::format::class-name",
        ResponsiveValue:
          "makeswift::prop-controllers::padding::format::responsive-value",
      };
      function R() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.Padding, options: e };
      }
      function O() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.ResponsiveColor, options: e };
      }
      function k(e) {
        return { type: i.ResponsiveIconRadioGroup, options: e };
      }
      function x() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.ResponsiveLength, options: e };
      }
      function L() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.ResponsiveNumber, options: e };
      }
      function D() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.ResponsiveOpacity, options: e };
      }
      function M(e) {
        return { type: i.ResponsiveSelect, options: e };
      }
      R.Format = S;
      let w = {
        ClassName: "makeswift::prop-controllers::shadows::format::class-name",
        ResponsiveValue:
          "makeswift::prop-controllers::shadows::format::responsive-value",
      };
      function P() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.Shadows, options: e };
      }
      function B(e, t) {
        var n;
        return (
          (n = a.A5),
          null == t
            ? []
            : Object.entries(e.options.type).flatMap((e) => {
                let [r, a] = e;
                return n(a, t[r]);
              })
        );
      }
      function H() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.SocialLinks, options: e, version: 1 };
      }
      function U() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.Table, options: e };
      }
      function F() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.TableFormFields, options: e };
      }
      function G() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.TextArea, options: e };
      }
      function j() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.TextInput, options: e };
      }
      function Y() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.TextStyle, options: e };
      }
      function V() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.Video, options: e };
      }
      P.Format = w;
      let Z = {
        ClassName: "makeswift::prop-controllers::width::format::class-name",
        ResponsiveValue:
          "makeswift::prop-controllers::width::format::responsive-value",
      };
      function W() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { type: i.Width, options: e };
      }
      W.Format = Z;
    },
    6037: function (e, t, n) {
      "use strict";
      n.d(t, {
        nU: function () {
          return A;
        },
      });
      var r = n(597),
        a = n(9791),
        i = n(791),
        s = n(5595),
        o = n(6318),
        l = n(3318),
        c = n(1494),
        u = n(9227),
        d = n(2234),
        h = n(8251),
        p = n(4658),
        f = n(2645);
      let m = {
        CHANGE_BUILDER_EDIT_MODE: "CHANGE_BUILDER_EDIT_MODE",
        INITIALIZE_EDITOR: "INITIALIZE_EDITOR",
        CHANGE_EDITOR_VALUE: "CHANGE_EDITOR_VALUE",
        FOCUS: "FOCUS",
        BLUR: "BLUR",
        UNDO: "UNDO",
        REDO: "REDO",
        CHANGE_BOX_MODEL: "CHANGE_BOX_MODEL",
      };
      class E extends f.V {
        constructor(...e) {
          super(...e), (0, r.Z)(this, "recv", (e) => {});
        }
      }
      class T extends f.V {
        setSlateEditor(e) {
          (this.editor = e),
            this.send({
              type: m.INITIALIZE_EDITOR,
              value: (0, s.J2)(e.children, e.selection),
            });
          let t = e.onChange;
          this.editor.onChange = (n) => {
            t(n),
              (null == n ? void 0 : n.operation) != null &&
                this.send({
                  type: m.CHANGE_EDITOR_VALUE,
                  value: (0, s.J2)(e.children, e.selection),
                });
          };
        }
        focus() {
          this.send({ type: m.FOCUS });
        }
        blur() {
          this.send({ type: m.BLUR });
        }
        undo() {
          this.send({ type: m.UNDO });
        }
        redo() {
          this.send({ type: m.REDO });
        }
        changeBoxModel(e) {
          this.send({ type: m.CHANGE_BOX_MODEL, payload: { boxModel: e } });
        }
        constructor(...e) {
          super(...e),
            (0, r.Z)(this, "editor", null),
            (0, r.Z)(this, "recv", (e) => {
              if (this.editor)
                switch (e.type) {
                  case m.CHANGE_BUILDER_EDIT_MODE:
                    switch (e.editMode) {
                      case i.U.BUILD:
                      case i.U.INTERACT:
                        this.editor.deselectAndBlur();
                    }
                    break;
                  case m.FOCUS:
                    this.editor.focusAndSelectAll();
                }
            });
        }
      }
      let g = {
        TABLE_FORM_LAYOUT_CHANGE: "TABLE_FORM_LAYOUT_CHANGE",
        TABLE_FORM_FIELD_LAYOUT_CHANGE: "TABLE_FORM_FIELD_LAYOUT_CHANGE",
      };
      class _ extends f.V {
        tableFormLayoutChange(e) {
          this.send({ type: g.TABLE_FORM_LAYOUT_CHANGE, payload: e });
        }
        tableFormFieldLayoutChange(e) {
          this.send({ type: g.TABLE_FORM_FIELD_LAYOUT_CHANGE, payload: e });
        }
        constructor(...e) {
          super(...e), (0, r.Z)(this, "recv", () => {});
        }
      }
      function A(e, t) {
        switch (e.type) {
          case a.Yk.RichText:
            return new T(t);
          case a.Yk.TableFormFields:
            return new _(t);
          case o.QI:
            return new o.$n(t);
          case l.Le:
            return new l.NZ(t);
          case c.CL:
            return new c.Kc(t, e);
          case u.uW:
            return new u.R0(t, e);
          case d.a4:
            return new d.F$(t, e);
          case h.c8:
            return new h.gY(t);
          case p.VE:
            return new p.an(t, e);
          default:
            return new E(t);
        }
      }
    },
    1748: function (e, t, n) {
      "use strict";
      n.d(t, {
        A5: function () {
          return function e(t, n) {
            if (null == n) return [];
            switch (t.type) {
              case r.Yk.Grid:
              case a.QI:
                return n.elements;
              case i.uW:
                return n.flatMap((n) => {
                  let { value: r } = n;
                  return e(t.config.type, r);
                });
              case s.a4:
                return (0, s.GO)(t, n);
              case i.uW:
                return (0, i.yu)(t, n);
              case r.Yk.Shape:
                return (0, r.f6)(t, n);
              case r.Yk.List:
                return (0, r.RE)(t, n);
              default:
                return [];
            }
          };
        },
        B5: function () {
          return d;
        },
        HV: function () {
          return c;
        },
        U$: function () {
          return u;
        },
        nR: function () {
          return l;
        },
        qB: function () {
          return p;
        },
        zt: function () {
          return h;
        },
      });
      var r = n(9791),
        a = n(6318),
        i = n(9227),
        s = n(2234),
        o = n(8051);
      function l(e, t) {
        return null == t ? null : e.type === r.Yk.ElementID ? t : null;
      }
      function c(e) {
        var t;
        return null !==
          (t =
            null == e
              ? void 0
              : e
                  .flatMap((e) => e.value)
                  .flatMap((e) => {
                    switch (e.type) {
                      case "color":
                        var t;
                        return (null === (t = e.payload) || void 0 === t
                          ? void 0
                          : t.swatchId) == null
                          ? []
                          : [e.payload.swatchId];
                      case "gradient":
                        return e.payload.stops.flatMap((e) =>
                          null == e.color ? [] : e.color.swatchId
                        );
                      default:
                        return [];
                    }
                  })) && void 0 !== t
          ? t
          : [];
      }
      function u(e) {
        var t;
        return null !==
          (t =
            null == e
              ? void 0
              : e
                  .flatMap((e) => e.value)
                  .flatMap((e) => {
                    var t, n, r, a, i, s, o, l;
                    return [
                      null === (t = e.borderTop) || void 0 === t
                        ? void 0
                        : null === (n = t.color) || void 0 === n
                        ? void 0
                        : n.swatchId,
                      null === (r = e.borderRight) || void 0 === r
                        ? void 0
                        : null === (a = r.color) || void 0 === a
                        ? void 0
                        : a.swatchId,
                      null === (i = e.borderBottom) || void 0 === i
                        ? void 0
                        : null === (s = i.color) || void 0 === s
                        ? void 0
                        : s.swatchId,
                      null === (o = e.borderLeft) || void 0 === o
                        ? void 0
                        : null === (l = o.color) || void 0 === l
                        ? void 0
                        : l.swatchId,
                    ].filter((e) => null != e);
                  })) && void 0 !== t
          ? t
          : [];
      }
      function d(e) {
        var t;
        return null !==
          (t =
            null == e
              ? void 0
              : e
                  .flatMap((e) => e.value)
                  .map((e) => {
                    var t;
                    return null === (t = e.payload.color) || void 0 === t
                      ? void 0
                      : t.swatchId;
                  })
                  .filter((e) => null != e)) && void 0 !== t
          ? t
          : [];
      }
      function h(e) {
        var t;
        return null !==
          (t =
            null == e
              ? void 0
              : e.map((e) => e.value).map((e) => e.swatchId)) && void 0 !== t
          ? t
          : [];
      }
      function p(e) {
        var t;
        return null !==
          (t =
            null == e
              ? void 0
              : e
                  .flatMap((e) => e.value)
                  .flatMap((e) =>
                    (0, o.EQ)(e)
                      .with(
                        {
                          type: "image-v1",
                          payload: { image: { type: "makeswift-file" } },
                        },
                        (e) => [e.payload.image.id]
                      )
                      .with(
                        { type: "image", payload: { imageId: o.P.string } },
                        (e) => [e.payload.imageId]
                      )
                      .otherwise(() => [])
                  )) && void 0 !== t
          ? t
          : [];
      }
    },
    23: function (e, t, n) {
      "use strict";
      n.d(t, {
        B: function () {
          return o;
        },
      });
      var r = n(7458),
        a = n(2983),
        i = n(2501),
        s = n(95);
      let o = (0, a.memo)(
        (0, a.forwardRef)(function (e, t) {
          let { document: n } = e;
          return (0,
          r.jsx)(i.R.Provider, { value: n.key, children: (0, r.jsx)(s.W, { ref: t, element: n.rootElement }) });
        })
      );
    },
    95: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return ep;
        },
      });
      var r = n(7458),
        a = n(2983),
        i = n(3649),
        s = n(597),
        o = n(6325),
        l = n(3821);
      class c {
        callback(e) {
          let t = this.getCurrent();
          null === t && this.setPropControllers(null),
            (this.getCurrent = e),
            null !== this.lastPropControllers &&
              this.setPropControllers(this.lastPropControllers);
        }
        getBoxModel() {
          let e = this.getCurrent();
          return (0, o.JP)(e) ? (0, o.L8)(e) : null;
        }
        setPropControllers(e) {
          let t = this.getCurrent();
          (0, l.NL)(t) && t.setPropControllers(e),
            (this.lastPropControllers = e);
        }
        getDomNode() {
          let e = this.getCurrent();
          return "object" == typeof e &&
            null !== e &&
            "getDomNode" in e &&
            "function" == typeof e.getDomNode
            ? e.getDomNode()
            : e instanceof Element
            ? e
            : null;
        }
        constructor() {
          (0, s.Z)(this, "getCurrent", () => null),
            (0, s.Z)(this, "lastPropControllers", null);
        }
      }
      var u = n(9577),
        d = n(2501);
      let h = (0, a.createContext)(!1);
      var p = n(5900),
        f = n(6809),
        m = n(7246);
      let E = (0, a.createContext)([]);
      var T = n(179),
        g = n(8574),
        _ = n(2652);
      let A = console.error,
        v = !1;
      var b = n(9791),
        y = n(9840),
        N = n(1748);
      let C = {
        inset: !1,
        offsetX: 0,
        offsetY: 2,
        blurRadius: 4,
        spreadRadius: 0,
        color: null,
      };
      var I = n(429),
        S = n(3811),
        R = n(8245),
        O = n(3184),
        k = n(8903),
        x = n(9866),
        L = n(9904),
        D = n(2534),
        M = n(6407),
        w = n(988),
        P = n(8427),
        B = n(2234),
        H = n(9227),
        U = n(5279),
        F = n(4658),
        G = n(3483),
        j = n(8251),
        Y = n(3318),
        V = n(1494),
        Z = n(6318),
        W = n(7416),
        q = n(333),
        z = n(4020),
        K = n(7860),
        Q = n(4483),
        X = n(7126),
        $ = n(3290),
        J = n(9355);
      function ee(e, t) {
        return (0, Q.X)((0, R.NB)(e, t.options.defaultValue));
      }
      function et(e) {
        return (0, Q.X)((0, R.iB)(e));
      }
      function en(e) {
        return (0, Q.X)((0, R.kH)(e));
      }
      function er(e) {
        return (0, Q.X)((0, R.Kc)(e));
      }
      function ea(e) {
        let t = (function (e) {
          let t = (0, N.B5)(e),
            n = (0, f.Jl)(t);
          return null == e
            ? null
            : e.map((e) => {
                let { value: t, ...r } = e;
                return {
                  ...r,
                  value: t.map((e) => {
                    let {
                      payload: {
                        color: t,
                        inset: r,
                        offsetX: a,
                        offsetY: i,
                        blurRadius: s,
                        spreadRadius: o,
                      },
                      ...l
                    } = e;
                    return {
                      ...l,
                      payload: {
                        color:
                          null != t
                            ? {
                                swatch: n
                                  .filter(y.C)
                                  .find((e) => e && e.id === t.swatchId),
                                alpha: t.alpha,
                              }
                            : null,
                        inset: null != r ? r : C.inset,
                        offsetX: null != a ? a : C.offsetX,
                        offsetY: null != i ? i : C.offsetY,
                        blurRadius: null != s ? s : C.blurRadius,
                        spreadRadius: null != o ? o : C.spreadRadius,
                      },
                    };
                  }),
                };
              });
        })(e);
        return (0, Q.X)((0, R.$H)(null != t ? t : void 0));
      }
      function ei(e) {
        let t = (0, I.P)(e);
        return (0, Q.X)((0, R.ob)(null != t ? t : void 0));
      }
      function es(e) {
        var t;
        let { element: n, children: i } = e,
          s = (0, u.o)(),
          o = (0, a.useRef)(
            null !== (t = g.De(s.getState(), n.type)) && void 0 !== t ? t : {}
          ),
          l = n.props,
          c = (0, d.i)(),
          h = (0, _.v)((e) => (null == c ? null : g.TP(e, c, n.key)));
        return Object.entries(o.current).reduceRight((e, t) => {
          let [n, a] = t;
          return (t) => {
            var i, s, o, c;
            switch (a.type) {
              case O.pS:
              case k.UJ:
              case x.Al:
              case L.MD:
              case D.x:
              case M.gd:
              case J.dm:
              case w.qe:
              case P.i:
              case B.a4:
              case H.uW:
              case U.a$:
              case F.VE:
              case G.HM:
                return (0, r.jsx)(q.$, {
                  definition: a,
                  data: l[n],
                  control: null == h ? void 0 : h[n],
                  children: (r) => e({ ...t, [n]: r }),
                });
              case j.c8: {
                let s =
                  null !== (i = null == h ? void 0 : h[n]) && void 0 !== i
                    ? i
                    : null;
                return (0, r.jsx)(
                  z.Q,
                  {
                    hook: W.Q,
                    parameters: [l[n], a, s],
                    children: (r) => e({ ...t, [n]: r }),
                  },
                  a.type
                );
              }
              case Y.Le: {
                let i =
                  null !== (s = null == h ? void 0 : h[n]) && void 0 !== s
                    ? s
                    : null;
                return (0, r.jsx)(
                  z.Q,
                  {
                    hook: X.X,
                    parameters: [l[n], i],
                    children: (r) => e({ ...t, [n]: r }),
                  },
                  a.type
                );
              }
              case V.CL: {
                let i =
                  null !== (o = null == h ? void 0 : h[n]) && void 0 !== o
                    ? o
                    : null;
                return (0, r.jsx)(
                  z.Q,
                  {
                    hook: $.E,
                    parameters: [l[n], a, i],
                    children: (r) => e({ ...t, [n]: r }),
                  },
                  a.type
                );
              }
              case Z.QI: {
                let i =
                  null !== (c = null == h ? void 0 : h[n]) && void 0 !== c
                    ? c
                    : null;
                return (0, r.jsx)(
                  z.Q,
                  {
                    hook: K.x,
                    parameters: [l[n], i],
                    children: (r) => e({ ...t, [n]: r }),
                  },
                  a.type
                );
              }
              case b.Yk.Width:
                if (a.options.format === b.NQ.ClassName)
                  return (0, r.jsx)(
                    z.Q,
                    {
                      hook: ee,
                      parameters: [l[n], a],
                      children: (r) => e({ ...t, [n]: r }),
                    },
                    a.type
                  );
                return e({ ...t, [n]: l[n] });
              case b.Yk.Padding:
                if (a.options.format === b.ss.ClassName)
                  return (0, r.jsx)(
                    z.Q,
                    {
                      hook: et,
                      parameters: [l[n]],
                      children: (r) => e({ ...t, [n]: r }),
                    },
                    a.type
                  );
                return e({ ...t, [n]: l[n] });
              case b.Yk.Margin:
                if (a.options.format === b.Bn.ClassName)
                  return (0, r.jsx)(
                    z.Q,
                    {
                      hook: en,
                      parameters: [l[n]],
                      children: (r) => e({ ...t, [n]: r }),
                    },
                    a.type
                  );
                return e({ ...t, [n]: l[n] });
              case b.Yk.BorderRadius:
                if (a.options.format === b.cc.ClassName)
                  return (0, r.jsx)(
                    z.Q,
                    {
                      hook: er,
                      parameters: [l[n]],
                      children: (r) => e({ ...t, [n]: r }),
                    },
                    a.type
                  );
                return e({ ...t, [n]: l[n] });
              case b.Yk.Shadows:
                if (a.options.format === b.yZ.ClassName)
                  return (0, r.jsx)(
                    z.Q,
                    {
                      hook: ea,
                      parameters: [l[n]],
                      children: (r) => e({ ...t, [n]: r }),
                    },
                    a.type
                  );
                return e({ ...t, [n]: l[n] });
              case b.Yk.Border:
                if (a.options.format === b.R0.ClassName)
                  return (0, r.jsx)(
                    z.Q,
                    {
                      hook: ei,
                      parameters: [l[n]],
                      children: (r) => e({ ...t, [n]: r }),
                    },
                    a.type
                  );
                return e({ ...t, [n]: l[n] });
              case b.Yk.ResponsiveColor:
                return (0, r.jsx)(
                  z.Q,
                  {
                    hook: S.S,
                    parameters: [l[n]],
                    children: (r) => e({ ...t, [n]: r }),
                  },
                  a.type
                );
              default:
                return e({ ...t, [n]: l[n] });
            }
          };
        }, i)({});
      }
      let eo = (0, a.memo)(
        (0, a.forwardRef)(function e(t, n) {
          var i, s;
          let { elementData: o } = t,
            l = ((i = o.type), (0, _.v)((e) => (0, g.ZN)(e, i)));
          return ((s = "`ForwardRef(".concat(e.name, ")`")),
          !1 === v &&
            ((console.error = function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              if (
                !(
                  "string" == typeof t[0] &&
                  t[0].includes("Function components cannot be given refs.") &&
                  t[0].includes("Check the render method of `".concat(s, "`."))
                )
              )
                return A(...t);
            }),
            (v = !0)),
          null == l)
            ? (0, r.jsx)(T.D, { ref: n, text: "Component not found" })
            : (0, r.jsx)(a.Suspense, {
                children: (0, r.jsx)(es, {
                  element: o,
                  children: (e) =>
                    (0, a.createElement)(l, { ...e, key: o.key, ref: n }),
                }),
              });
        })
      );
      var el = n(23);
      let ec = (0, a.memo)(
        (0, a.forwardRef)(function (e, t) {
          var n;
          let { elementReference: i } = e,
            s = (0, f.j7)(i.value),
            o = (0, f.tB)(i.value),
            l =
              null !== (n = null == o ? void 0 : o.data) && void 0 !== n
                ? n
                : null == s
                ? void 0
                : s.data,
            c = (0, m.k)(i.key),
            u = i.key,
            d = (0, a.useContext)(E),
            p = (0, a.useMemo)(() => [...d, u], [d, u]);
          return null == l
            ? (0, r.jsx)(T.D, {
                ref: t,
                text: "This global component doesn't exist",
              })
            : d.includes(u)
            ? (0, r.jsx)(T.D, {
                ref: t,
                text: "This global component contains itself!",
              })
            : (0, r.jsx)(E.Provider, {
                value: p,
                children:
                  null != c
                    ? (0, r.jsx)(el.B, { document: c, ref: t })
                    : (0, r.jsx)(h.Provider, {
                        value: !0,
                        children: (0, r.jsx)(eo, { elementData: l, ref: t }),
                      }),
              });
        })
      );
      var eu = n(3730);
      class ed extends a.Component {
        render() {
          return (0, r.jsx)(r.Fragment, { children: this.props.children });
        }
        constructor(e) {
          super(e),
            (this.props.innerRef.current = () =>
              (function (e) {
                let t = console.error;
                console.error = function () {
                  for (
                    var e = arguments.length, n = Array(e), r = 0;
                    r < e;
                    r++
                  )
                    n[r] = arguments[r];
                  if (
                    !(
                      "string" == typeof n[0] &&
                      n[0].includes("%s is deprecated in StrictMode.")
                    )
                  )
                    return t.apply(console, n);
                };
                let n = (0, eu.findDOMNode)(e);
                return (console.error = t), n;
              })(this));
        }
      }
      let eh = (0, a.forwardRef)(function (e, t) {
          var n;
          let i = (0, a.useRef)(null);
          return (
            (0, a.useImperativeHandle)(
              t,
              () => () => {
                var e;
                return null !==
                  (n =
                    null === (e = i.current) || void 0 === e
                      ? void 0
                      : e.call(i)) && void 0 !== n
                  ? n
                  : null;
              },
              []
            ),
            (0, r.jsx)(ed, { ...e, innerRef: i })
          );
        }),
        ep = (0, a.memo)(
          (0, a.forwardRef)(function (e, t) {
            let { element: n } = e,
              s = n.key,
              o = (function () {
                let e = (0, a.useContext)(u.x);
                return e.dispatch;
              })(),
              l = (0, d.i)(),
              f = (0, a.useRef)(!0),
              m = (0, a.useRef)(new c()),
              E = (0, a.useCallback)((e) => {
                if (!0 === f.current) {
                  var t;
                  m.current.callback(() =>
                    null !== (t = null == e ? void 0 : e()) && void 0 !== t
                      ? t
                      : null
                  );
                }
              }, []),
              T = (0, a.useCallback)((e) => {
                (f.current = !1), m.current.callback(() => e);
              }, []),
              g = (0, a.useContext)(h);
            return (
              (0, a.useImperativeHandle)(t, () => m.current, []),
              (0, a.useEffect)(() => {
                if (null != l && !g) return o((0, p.Hi)(l, s, m.current));
              }, [o, l, s, g]),
              (0, a.useEffect)(() => {
                if (null != l && !g) return o((0, p.Vu)(l, s));
              }, [o, l, s, g]),
              (0, r.jsx)(eh, {
                ref: E,
                children: (0, i.Sc)(n)
                  ? (0, r.jsx)(ec, { ref: T, elementReference: n }, s)
                  : (0, r.jsx)(eo, { ref: T, elementData: n }, s),
              })
            );
          })
        );
    },
    4020: function (e, t, n) {
      "use strict";
      function r(e) {
        let { hook: t, parameters: n, children: r } = e;
        return r(t(...n));
      }
      n.d(t, {
        Q: function () {
          return r;
        },
      });
    },
    333: function (e, t, n) {
      "use strict";
      n.d(t, {
        $: function () {
          return $;
        },
      });
      var r = n(7458),
        a = n(3184),
        i = n(8903),
        s = n(9866),
        o = n(9904),
        l = n(2534),
        c = n(6407),
        u = n(988),
        d = n(5279),
        h = n(8427),
        p = n(2234),
        f = n(9227),
        m = n(4658),
        E = n(6318),
        T = n(3318),
        g = n(1494),
        _ = n(8251),
        A = n(3483),
        v = n(9355),
        b = n(4020),
        y = n(8051);
      function N(e, t) {
        var n;
        let r =
          null !==
            (n = (0, y.EQ)(e)
              .with({ [a.Qy]: a.jc }, (e) => e.value)
              .otherwise((e) => e)) && void 0 !== n
            ? n
            : t.config.defaultValue;
        return r;
      }
      var C = n(3733),
        I = n.n(C),
        S = n(6809);
      function R(e, t) {
        var n, r;
        let a =
            null !== (n = null == e ? void 0 : e.swatchId) && void 0 !== n
              ? n
              : null,
          i = (0, S.uB)(a),
          s =
            null !== (r = null == e ? void 0 : e.alpha) && void 0 !== r ? r : 1;
        if (null == i) {
          let e;
          let { defaultValue: n } = t.config;
          if (void 0 === n) return;
          try {
            e = I()(t.config.defaultValue);
          } catch (t) {
            e = I()();
          }
          return e.rgb().string();
        }
        return I()({ h: i.hue, s: i.saturation, l: i.lightness })
          .alpha(s)
          .rgb()
          .string();
      }
      function O(e) {
        return null == e ? void 0 : e.value;
      }
      function k(e, t) {
        return null != e ? e : t.config.defaultValue;
      }
      function x(e, t) {
        var n;
        let r = null !== (n = t.config.format) && void 0 !== n ? n : u.fQ.URL,
          a = (0, y.EQ)(e)
            .with(y.P.string, (e) => e)
            .with({ type: "makeswift-file" }, (e) => {
              let { id: t } = e;
              return t;
            })
            .otherwise(() => null),
          i = (0, S.TR)(a);
        return (0, y.EQ)([i, e, r])
          .with([{ __typename: "File" }, y.P.any, u.fQ.URL], (e) => {
            let [t] = e;
            return t.publicUrl;
          })
          .with(
            [
              { __typename: "File", dimensions: y.P.not(y.P.nullish) },
              y.P.any,
              u.fQ.WithDimensions,
            ],
            (e) => {
              let [t] = e;
              return { url: t.publicUrl, dimensions: t.dimensions };
            }
          )
          .with([y.P.any, { type: "external-file" }, u.fQ.URL], (e) => {
            let [, t] = e;
            return t.url;
          })
          .with(
            [
              y.P.any,
              { type: "external-file", width: y.P.number, height: y.P.number },
              u.fQ.WithDimensions,
            ],
            (e) => {
              let [, t] = e;
              return {
                url: t.url,
                dimensions: { width: t.width, height: t.height },
              };
            }
          )
          .otherwise(() => void 0);
      }
      var L = n(2983),
        D = n(2746),
        M = n(7136);
      function w(e, t) {
        var n;
        let r, a;
        let i = e && "OPEN_PAGE" === e.type ? e.payload.pageId : null,
          s = (0, S._h)(null != i ? i : null),
          o =
            (null == e ? void 0 : e.type) === "SCROLL_TO_ELEMENT"
              ? null === (n = e.payload.elementIdConfig) || void 0 === n
                ? void 0
                : n.elementKey
              : null,
          l = (0, M.s)(o),
          c = "#";
        if (e)
          switch (e.type) {
            case "OPEN_PAGE":
              s && (c = "/".concat(s.pathname)),
                (r = e.payload.openInNewTab ? "_blank" : "_self");
              break;
            case "OPEN_URL":
              (c = e.payload.url),
                (r = e.payload.openInNewTab ? "_blank" : "_self");
              break;
            case "SEND_EMAIL": {
              let { to: t, subject: n = "", body: r = "" } = e.payload;
              null != t &&
                (c = "mailto:"
                  .concat(t, "?subject=")
                  .concat(n, "&body=")
                  .concat(r));
              break;
            }
            case "CALL_PHONE":
              c = "tel:".concat(e.payload.phoneNumber);
              break;
            case "SCROLL_TO_ELEMENT":
              (c = "#".concat(null != l ? l : "")), (a = e.payload.block);
              break;
            default:
              throw RangeError('Invalid link type "'.concat(e.type, '."'));
          }
        let u = (0, L.useCallback)(
            (t) => {
              if (!t.defaultPrevented && e && "SCROLL_TO_ELEMENT" === e.type) {
                let e;
                try {
                  e = new URL("http://www.example.com/".concat(c)).hash;
                } catch (e) {
                  console.error("Link received invalid href: ".concat(c), e);
                }
                if (null != c && c === e) {
                  t.preventDefault();
                  let n = t.view;
                  (0, D.Z)(n.document.querySelector(e), {
                    behavior: "smooth",
                    block: a,
                  }),
                    n.location.hash !== e && n.history.pushState({}, "", e);
                }
              }
            },
            [e, c, a]
          ),
          d = (0, L.useMemo)(
            () => ({ href: c, target: r, onClick: u }),
            [c, r, u]
          );
        return d;
      }
      function P(e) {
        let { definition: t, data: n, children: a, control: i } = e,
          [s, o] = (0, L.useState)(new Map());
        return (
          (0, L.useEffect)(() => {
            null != i && null != n && o(i.setItemsControl(n));
          }, [n, i]),
          (null != n ? n : []).reduce(
            (e, n) => (a) =>
              (0, r.jsx)($, {
                definition: t.config.type,
                data: n.value,
                control: null == s ? void 0 : s.get(n.id),
                children: (t) => e([t, ...a]),
              }),
            a
          )([])
        );
      }
      function B(e, t) {
        var n;
        let r =
          null !==
            (n = (0, y.EQ)(e)
              .with({ [i.kV]: i.gZ }, (e) => e.value)
              .otherwise((e) => e)) && void 0 !== n
            ? n
            : t.config.defaultValue;
        return r;
      }
      var H = n(7126),
        U = n(3290);
      function F(e, t) {
        return null != e ? e : null == t ? void 0 : t.config.defaultValue;
      }
      function G(e) {
        let { definition: t, data: n, children: a, control: i } = e;
        return Object.entries(t.config.type).reduceRight((e, t) => {
          let [a, s] = t;
          return (t) =>
            (0, r.jsx)($, {
              definition: s,
              data: null == n ? void 0 : n[a],
              control: null == i ? void 0 : i.controls.get(a),
              children: (n) => e({ ...t, [a]: n }),
            });
        }, a)({});
      }
      var j = n(7860),
        Y = n(7416),
        V = n(4483),
        Z = n(8358),
        W = n(9557);
      function q(e, t) {
        let n = (function (e, t) {
          var n;
          let r = (0, W.k)();
          return {
            ...t.config.getStyle(
              null === (n = (0, Z.v6)(r, e, (0, Z.N4)(r).id, Z.Y4)) ||
                void 0 === n
                ? void 0
                : n.value
            ),
            ...r.reduce((n, a) => {
              var i;
              return {
                ...n,
                [(0, Z.PR)(a)]: t.config.getStyle(
                  null === (i = (0, Z.v6)(r, e, a.id, Z.Y4)) || void 0 === i
                    ? void 0
                    : i.value
                ),
              };
            }, {}),
          };
        })(e, t);
        return (0, V.X)(n);
      }
      function z(e) {
        let { definition: t, data: n, children: a, control: i } = e;
        return (null != n ? n : []).reduceRight(
          (e, n) => (a) =>
            (0, r.jsx)($, {
              definition: t.config.type,
              data: n.value,
              control: null == i ? void 0 : i.control,
              children: (t) => e([{ ...n, value: t }, ...a]),
            }),
          (e) =>
            (0, r.jsx)(
              b.Q,
              { hook: q, parameters: [e, t], children: (e) => a(e) },
              t.type
            )
        )([]);
      }
      function K(e, t) {
        var n;
        let r =
          null !==
            (n = (0, y.EQ)(e)
              .with({ [o.OB]: o.zV }, (e) => e.value)
              .otherwise((e) => e)) && void 0 !== n
            ? n
            : t.config.defaultValue;
        return r;
      }
      function Q(e, t) {
        var n;
        let r =
          null !==
            (n = (0, y.EQ)(e)
              .with({ [s.B3]: s.hC }, (e) => e.value)
              .otherwise((e) => e)) && void 0 !== n
            ? n
            : t.config.defaultValue;
        return r;
      }
      var X = n(4073);
      function $(e) {
        let { data: t, definition: n, children: y, control: C } = e;
        switch (n.type) {
          case a.pS:
            return (0, r.jsx)(
              b.Q,
              { hook: N, parameters: [t, n], children: (e) => y(e) },
              n.type
            );
          case i.UJ:
            return (0, r.jsx)(
              b.Q,
              { hook: B, parameters: [t, n], children: (e) => y(e) },
              n.type
            );
          case s.Al:
            return (0, r.jsx)(
              b.Q,
              { hook: Q, parameters: [t, n], children: (e) => y(e) },
              n.type
            );
          case o.MD:
            return (0, r.jsx)(
              b.Q,
              { hook: K, parameters: [t, n], children: (e) => y(e) },
              n.type
            );
          case l.x:
            return (0, r.jsx)(
              b.Q,
              { hook: F, parameters: [t, n], children: (e) => y(e) },
              n.type
            );
          case c.gd:
            return (0, r.jsx)(
              b.Q,
              { hook: R, parameters: [t, n], children: (e) => y(e) },
              n.type
            );
          case v.dm:
            return (0, r.jsx)(
              b.Q,
              { hook: k, parameters: [t, n], children: (e) => y(e) },
              n.type
            );
          case u.qe:
            return (0, r.jsx)(
              b.Q,
              { hook: x, parameters: [t, n], children: (e) => y(e) },
              n.type
            );
          case d.a$:
            return (0, r.jsx)(
              b.Q,
              { hook: w, parameters: [t, n], children: (e) => y(e) },
              n.type
            );
          case h.i:
            return (0, r.jsx)(
              b.Q,
              { hook: O, parameters: [t], children: (e) => y(e) },
              n.type
            );
          case p.a4:
            return (0, r.jsx)(G, {
              definition: n,
              data: t,
              control: C,
              children: (e) => y(e),
            });
          case f.uW:
            return (0, r.jsx)(P, {
              definition: n,
              data: t,
              control: C,
              children: (e) => y(e),
            });
          case m.VE:
            return (0, r.jsx)(
              z,
              { data: t, definition: n, control: C, children: (e) => y(e) },
              n.type
            );
          case E.QI:
            return (0, r.jsx)(
              b.Q,
              { hook: j.x, parameters: [t, C], children: (e) => y(e) },
              n.type
            );
          case T.Le:
            return (0, r.jsx)(
              b.Q,
              { hook: H.X, parameters: [t, C], children: (e) => y(e) },
              n.type
            );
          case g.CL:
            return (0, r.jsx)(
              b.Q,
              { hook: U.E, parameters: [t, n, C], children: (e) => y(e) },
              n.type
            );
          case _.c8:
            return (0, r.jsx)(
              b.Q,
              { hook: Y.Q, parameters: [t, n, C], children: (e) => y(e) },
              n.type
            );
          case A.HM:
            return (0, r.jsx)(
              b.Q,
              { hook: X.I4, parameters: [t], children: (e) => y(e) },
              n.type
            );
          default:
            return y(t);
        }
      }
    },
    3290: function (e, t, n) {
      "use strict";
      n.d(t, {
        E: function () {
          return h;
        },
      });
      var r = n(7458),
        a = n(1494),
        i = n(2301),
        s = n(1644),
        o = n(7455),
        l = n.n(o);
      let c = (0, s.R)((e) =>
          l()(
            () =>
              e(
                Promise.all([n.e(50), n.e(894), n.e(626), n.e(37)]).then(
                  n.bind(n, 37)
                )
              ),
            { loadableGenerated: { webpack: () => [37] } }
          )
        ),
        u = (0, s.R)((e) =>
          l()(() => e(Promise.all([n.e(894), n.e(945)]).then(n.bind(n, 945))), {
            loadableGenerated: { webpack: () => [945] },
          })
        ),
        d = (0, s.R)((e) =>
          l()(() => e(Promise.all([n.e(894), n.e(30)]).then(n.bind(n, 2030))), {
            loadableGenerated: { webpack: () => [2030] },
          })
        );
      function h(e, t, n) {
        let s = (0, i.U)();
        return (0, a.i7)(e)
          ? (0, r.jsx)(d, { text: e })
          : s
          ? (0, r.jsx)(c, { text: e, definition: t, control: n })
          : (0, r.jsx)(u, { text: e, definition: t });
      }
    },
    7126: function (e, t, n) {
      "use strict";
      n.d(t, {
        X: function () {
          return h;
        },
      });
      var r = n(7458),
        a = n(7455),
        i = n.n(a),
        s = n(2983),
        o = n(1644),
        l = n(3821),
        c = n(2301);
      let u = (0, o.R)((e) =>
          i()(
            () =>
              e(
                Promise.all([n.e(50), n.e(894), n.e(626), n.e(592)]).then(
                  n.bind(n, 5592)
                )
              ),
            { loadableGenerated: { webpack: () => [5592] } }
          )
        ),
        d = (0, o.R)((e) =>
          i()(() => e(Promise.all([n.e(894), n.e(30)]).then(n.bind(n, 2030))), {
            loadableGenerated: { webpack: () => [2030] },
          })
        );
      function h(e, t) {
        let n = (0, s.useCallback)(
            (e) => {
              var n;
              (0, l.NL)(e) &&
                (null == e ||
                  null === (n = e.setPropControllers) ||
                  void 0 === n ||
                  n.call(e, null == t ? null : { text: t }));
            },
            [t]
          ),
          a = (0, c.U)();
        return a
          ? (0, r.jsx)(u, { text: e, ref: n })
          : (0, r.jsx)(d, { text: e, ref: n });
      }
    },
    7860: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return d;
        },
      });
      var r = n(7458),
        a = n(2983),
        i = n(95),
        s = n(3107),
        o = n(8245),
        l = n(4483),
        c = n(1458),
        u = n(2444);
      function d(e, t) {
        return null == e || 0 === e.elements.length
          ? (0, r.jsx)(h.Placeholder, { control: t })
          : (0, r.jsx)(h, {
              control: t,
              children: e.elements.map((n, a) =>
                (0, r.jsx)(
                  h.Item,
                  {
                    control: t,
                    grid: e.columns,
                    index: a,
                    children: (0, r.jsx)(i.W, { element: n }),
                  },
                  n.key
                )
              ),
            });
      }
      function h(e) {
        let { as: t, control: n, children: i, className: s, ...o } = e,
          [d, h] = (0, a.useState)(null),
          p = (0, l.X)({ display: "flex", flexWrap: "wrap", width: "100%" });
        return (
          (0, a.useEffect)(() => {
            if (null != d && null != n)
              return (0, u.x)({
                element: d,
                onBoxModelChange: (e) => n.changeContainerBoxModel(e),
              });
          }, [d, n]),
          (0, r.jsx)(null != t ? t : "div", {
            ...o,
            ref: h,
            className: (0, c.cx)(p, s),
            children: i,
          })
        );
      }
      (h.Placeholder = function (e) {
        let { control: t } = e,
          [n, i] = (0, a.useState)(null);
        return (
          (0, a.useEffect)(() => {
            if (null != n && null != t)
              return (0, u.x)({
                element: n,
                onBoxModelChange: (e) => t.changeContainerBoxModel(e),
              });
          }, [n, t]),
          (0, r.jsx)("div", {
            ref: i,
            className: (0, l.X)({
              width: "100%",
              background: "rgba(161, 168, 194, 0.18)",
              height: "80px",
            }),
            children: (0, r.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "100%",
              height: "100%",
              className: (0, l.X)({ overflow: "visible", padding: 8 }),
              children: (0, r.jsx)("rect", {
                x: 0,
                y: 0,
                width: "100%",
                height: "100%",
                strokeWidth: 2,
                strokeDasharray: "4 2",
                fill: "none",
                stroke: "rgba(161, 168, 194, 0.40)",
                rx: "4",
                ry: "4",
              }),
            }),
          })
        );
      }),
        (h.Item = function (e) {
          let {
              as: t,
              control: n,
              grid: i,
              index: d,
              children: h,
              className: p,
              ...f
            } = e,
            [m, E] = (0, a.useState)(null),
            T = (0, l.X)({
              display: "flex",
              ...(0, o.CS)([i], (e) => {
                let [{ count: t = 12, spans: n = [[12]] } = {}] = e,
                  [r, a] = (0, s.s)(n, d),
                  i = n[r][a],
                  o = "calc(100% * ".concat((i / t).toFixed(5), ")");
                return 0 === i
                  ? { display: "none" }
                  : { flexBasis: o, minWidth: o };
              }),
            });
          return (
            (0, a.useEffect)(() => {
              if (null != m && null != n)
                return (0, u.x)({
                  element: m,
                  onBoxModelChange: (e) => n.changeItemBoxModel(d, e),
                });
            }, [m, n, d]),
            (0, r.jsx)(null != t ? t : "div", {
              ...f,
              ref: E,
              className: (0, c.cx)(T, p),
              children: h,
            })
          );
        });
    },
    7416: function (e, t, n) {
      "use strict";
      n.d(t, {
        Q: function () {
          return E;
        },
      });
      var r = n(2983),
        a = n(429),
        i = n(6829),
        s = n(8245),
        o = n(8251),
        l = n(4483),
        c = n(6655),
        u = n(8603),
        d = n(5849),
        h = n(6325),
        p = n(628);
      let f = {
          marginTop: 0,
          marginRight: "auto",
          marginBottom: 0,
          marginLeft: "auto",
        },
        m = {
          paddingTop: 0,
          paddingRight: 0,
          paddingBottom: 0,
          paddingLeft: 0,
        };
      function E(e, t, n) {
        let E = (function (e, t) {
            var n, r, l, h, p, E, T, g, _, A, v;
            let { properties: b } = t.config;
            return {
              ...(b.includes(o.ym.Width) && { maxWidth: "100%" }),
              ...(0, s.CS)(
                [
                  null == e ? void 0 : e.width,
                  null == e ? void 0 : e.margin,
                  null == e ? void 0 : e.padding,
                  (0, a.P)(null == e ? void 0 : e.border),
                  null == e ? void 0 : e.borderRadius,
                  null == e ? void 0 : e.textStyle,
                ],
                (e) => {
                  var t;
                  let [a, i, s, C, I, S] = e;
                  return {
                    ...(b.includes(o.ym.Width) && {
                      width:
                        null !== (n = null == a ? null : (0, c.A)(a)) &&
                        void 0 !== n
                          ? n
                          : "100%",
                    }),
                    ...(b.includes(o.ym.Margin) &&
                      (0, u.K)(null != i ? i : f, f)),
                    ...(b.includes(o.ym.Padding) &&
                      (0, d.v)(null != s ? s : m, m)),
                    ...(b.includes(o.ym.Border) && {
                      borderTop:
                        null !== (r = y(null == C ? void 0 : C.borderTop)) &&
                        void 0 !== r
                          ? r
                          : "0 solid black",
                      borderRight:
                        null !== (l = y(null == C ? void 0 : C.borderRight)) &&
                        void 0 !== l
                          ? l
                          : "0 solid black",
                      borderBottom:
                        null !== (h = y(null == C ? void 0 : C.borderBottom)) &&
                        void 0 !== h
                          ? h
                          : "0 solid black",
                      borderLeft:
                        null !== (p = y(null == C ? void 0 : C.borderLeft)) &&
                        void 0 !== p
                          ? p
                          : "0 solid black",
                    }),
                    ...(b.includes(o.ym.BorderRadius) && {
                      borderTopLeftRadius:
                        null !==
                          (E = N(null == I ? void 0 : I.borderTopLeftRadius)) &&
                        void 0 !== E
                          ? E
                          : 0,
                      borderTopRightRadius:
                        null !==
                          (T = N(
                            null == I ? void 0 : I.borderTopRightRadius
                          )) && void 0 !== T
                          ? T
                          : 0,
                      borderBottomRightRadius:
                        null !==
                          (g = N(
                            null == I ? void 0 : I.borderBottomRightRadius
                          )) && void 0 !== g
                          ? g
                          : 0,
                      borderBottomLeftRadius:
                        null !==
                          (_ = N(
                            null == I ? void 0 : I.borderBottomLeftRadius
                          )) && void 0 !== _
                          ? _
                          : 0,
                    }),
                    ...(b.includes(o.ym.TextStyle) && {
                      ...((null == S ? void 0 : S.fontFamily) && {
                        fontFamily: '"'.concat(S.fontFamily, '"'),
                      }),
                      ...((null == S ? void 0 : S.letterSpacing) && {
                        letterSpacing: S.letterSpacing,
                      }),
                      ...((null == S ? void 0 : S.fontSize) && {
                        fontSize:
                          ((t = S.fontSize), "".concat(t.value).concat(t.unit)),
                      }),
                      ...((null == S ? void 0 : S.fontWeight) && {
                        fontWeight: S.fontWeight,
                      }),
                      textTransform:
                        null !== (A = null == S ? void 0 : S.textTransform) &&
                        void 0 !== A
                          ? A
                          : [],
                      fontStyle:
                        null !== (v = null == S ? void 0 : S.fontStyle) &&
                        void 0 !== v
                          ? v
                          : [],
                    }),
                  };
                }
              ),
            };
            function y(e) {
              if (null == e) return null;
              let { width: t, color: n, style: r } = e;
              return ""
                .concat(null != t ? t : 0, "px ")
                .concat(r, " ")
                .concat(null != n ? (0, i.U)(n) : "black");
            }
            function N(e) {
              return null == e ? null : (0, c.A)(e);
            }
          })(e, t),
          T = (0, r.useId)().replaceAll(":", ""),
          g = (0, l.X)(E),
          _ = "".concat(g, " ").concat(T);
        return (
          (0, r.useEffect)(() => {
            let e = null,
              t = () => {
                if (null == n) return;
                let a = document.querySelector(".".concat(T)),
                  i = null == a ? null : (0, h.iz)(a);
                (0, p.Z)(e, i) || ((e = i), n.changeBoxModel(e)),
                  (r = requestAnimationFrame(t));
              },
              r = requestAnimationFrame(t);
            return () => {
              cancelAnimationFrame(r), null == n || n.changeBoxModel(null);
            };
          }, [T, n]),
          _
        );
      }
    },
    4073: function (e, t, n) {
      "use strict";
      n.d(t, {
        ZP: function () {
          return p;
        },
        _P: function () {
          return f;
        },
        I4: function () {
          return m;
        },
      });
      var r = n(6809),
        a = n(6829),
        i = n(8245),
        s = n(8358);
      function o(e) {
        return null != e;
      }
      var l = n(4483),
        c = n(9557);
      function u(e) {
        var t;
        return null !==
          (t =
            null == e
              ? void 0
              : e
                  .map((e) => e.value)
                  .flatMap((e) => {
                    var t;
                    return null === (t = e.color) || void 0 === t
                      ? void 0
                      : t.swatchId;
                  })
                  .filter(o)) && void 0 !== t
          ? t
          : [];
      }
      let d = (e) => (t) => {
          var n, r;
          let { value: a, deviceId: i } = t;
          if (null == a.color) {
            let { color: e, ...t } = a;
            return { deviceId: i, value: t };
          }
          return {
            deviceId: i,
            value: {
              ...a,
              color: {
                swatch: e.find((e) => {
                  var t;
                  return (
                    e &&
                    e.id ===
                      (null === (t = a.color) || void 0 === t
                        ? void 0
                        : t.swatchId)
                  );
                }),
                alpha:
                  null !==
                    (r =
                      null === (n = a.color) || void 0 === n
                        ? void 0
                        : n.alpha) && void 0 !== r
                    ? r
                    : void 0,
              },
            },
          };
        },
        h = (e) => {
          let { deviceId: t } = e;
          return t;
        };
      function p(e) {
        var t, n, a;
        let i = (function (e) {
            var t, n, r, a, i, s, o, l, c, u, d;
            if (null != e)
              return {
                id: e.id,
                style: e.style.map((e) => {
                  let { deviceId: h, value: p } = e;
                  return {
                    deviceId: h,
                    value: {
                      fontFamily:
                        null !== (t = p.fontFamily) && void 0 !== t
                          ? t
                          : void 0,
                      lineHeight:
                        null !== (n = p.lineHeight) && void 0 !== n
                          ? n
                          : void 0,
                      letterSpacing:
                        null !== (r = p.letterSpacing) && void 0 !== r
                          ? r
                          : void 0,
                      fontWeight:
                        null !== (a = p.fontWeight) && void 0 !== a
                          ? a
                          : void 0,
                      textAlign:
                        null !== (i = p.textAlign) && void 0 !== i ? i : void 0,
                      uppercase:
                        null !== (s = p.uppercase) && void 0 !== s ? s : void 0,
                      underline:
                        null !== (o = p.underline) && void 0 !== o ? o : void 0,
                      strikethrough:
                        null !== (l = p.strikethrough) && void 0 !== l
                          ? l
                          : void 0,
                      italic:
                        null !== (c = p.italic) && void 0 !== c ? c : void 0,
                      fontSize:
                        null !== (u = p.fontSize) && void 0 !== u ? u : void 0,
                      color:
                        null !== (d = p.color) && void 0 !== d ? d : void 0,
                    },
                  };
                }),
              };
          })(
            (0, r.tj)(
              null !== (t = null == e ? void 0 : e.id) && void 0 !== t
                ? t
                : null
            )
          ),
          l =
            null !== (n = null == i ? void 0 : i.style) && void 0 !== n
              ? n
              : [],
          p =
            null !== (a = null == e ? void 0 : e.style) && void 0 !== a
              ? a
              : [],
          f = (0, c.k)(),
          m = [
            ...u(null == e ? void 0 : e.style),
            ...u(null == i ? void 0 : i.style),
          ],
          E = (0, r.Jl)(m).filter(o),
          T = l.map(d(E)),
          g = p.map(d(E)),
          _ = [...new Set(T.map(h).concat(g.map(h)))];
        return _.map((e) => {
          var t, n;
          let r =
              null === (t = (0, s.v6)(f, T, e)) || void 0 === t
                ? void 0
                : t.value,
            a =
              null === (n = (0, s.v6)(f, g, e, (e) => e)) || void 0 === n
                ? void 0
                : n.value;
          return r && a
            ? { deviceId: e, value: { ...r, ...a } }
            : a
            ? { deviceId: e, value: a }
            : r
            ? { deviceId: e, value: r }
            : null;
        }).filter(o);
      }
      function f(e) {
        return (0, l.X)(
          (0, i.CS)(
            [e],
            (e) => {
              let [t] = e;
              if (void 0 === t) return {};
              let n = {};
              return (
                null != t.color && (n.color = (0, a.U)(t.color)),
                null != t.fontFamily && (n.fontFamily = t.fontFamily),
                null != t.fontSize &&
                  null != t.fontSize.value &&
                  null != t.fontSize.unit &&
                  (n.fontSize = ""
                    .concat(t.fontSize.value)
                    .concat(t.fontSize.unit)),
                null != t.fontWeight && (n.fontWeight = t.fontWeight),
                null != t.lineHeight && (n.lineHeight = t.lineHeight),
                null != t.letterSpacing &&
                  (n.letterSpacing = "".concat(t.letterSpacing / 10, "em")),
                null != t.uppercase &&
                  (n.textTransform =
                    !0 === t.uppercase ? "uppercase" : "initial"),
                (null != t.underline || null != t.strikethrough) &&
                  (n.textDecoration = [
                    Boolean(t.underline) && "underline",
                    Boolean(t.strikethrough) && "line-through",
                  ]
                    .filter(Boolean)
                    .join(" ")),
                null != t.italic &&
                  (n.fontStyle = !0 === t.italic ? "italic" : "initial"),
                n
              );
            },
            s.aV
          )
        );
      }
      function m(e) {
        let t = p(e);
        return f(t);
      }
    },
    6809: function (e, t, n) {
      "use strict";
      n.d(t, {
        Jl: function () {
          return o;
        },
        TR: function () {
          return l;
        },
        Yg: function () {
          return c;
        },
        _h: function () {
          return p;
        },
        j7: function () {
          return d;
        },
        tB: function () {
          return h;
        },
        tj: function () {
          return u;
        },
        uB: function () {
          return s;
        },
        x6: function () {
          return f;
        },
      });
      var r = n(2983),
        a = n(3576),
        i = n(1880);
      function s(e) {
        let t = (0, i.h)(),
          n = () => (null == e ? null : t.readSwatch(e)),
          s = (0, a.useSyncExternalStore)(t.subscribe, n, n);
        return (
          (0, r.useEffect)(() => {
            null != e && t.fetchSwatch(e).catch(console.error);
          }, [t, e]),
          s
        );
      }
      function o(e) {
        let t = (0, i.h)(),
          n = (0, r.useRef)();
        function s() {
          let r = e.map((e) => t.readSwatch(e));
          return null != n.current &&
            n.current.length === r.length &&
            n.current.every((e, t) => r[t] === e)
            ? n.current
            : (n.current = r);
        }
        let o = (0, a.useSyncExternalStore)(t.subscribe, s, s);
        return (
          (0, r.useEffect)(() => {
            Promise.all(e.map((e) => t.fetchSwatch(e))).catch(console.error);
          }, [t, e]),
          o
        );
      }
      function l(e) {
        let t = (0, i.h)(),
          n = () => (null == e ? null : t.readFile(e)),
          s = (0, a.useSyncExternalStore)(t.subscribe, n, n);
        return (
          (0, r.useEffect)(() => {
            null != e && t.fetchFile(e);
          }, [t, e]),
          s
        );
      }
      function c(e) {
        let t = (0, i.h)(),
          n = (0, r.useRef)();
        function s() {
          let r = e.map((e) => t.readFile(e));
          return null != n.current &&
            n.current.length === r.length &&
            n.current.every((e, t) => r[t] === e)
            ? n.current
            : (n.current = r);
        }
        let o = (0, a.useSyncExternalStore)(t.subscribe, s, s);
        return (
          (0, r.useEffect)(() => {
            Promise.all(e.map((e) => t.fetchFile(e))).catch(console.error);
          }, [t, e]),
          o
        );
      }
      function u(e) {
        let t = (0, i.h)(),
          n = () => (null == e ? null : t.readTypography(e)),
          s = (0, a.useSyncExternalStore)(t.subscribe, n, n);
        return (
          (0, r.useEffect)(() => {
            null != e && t.fetchTypography(e).catch(console.error);
          }, [t, e]),
          s
        );
      }
      function d(e) {
        let t = (0, i.h)(),
          n = () => (null == e ? null : t.readGlobalElement(e)),
          s = (0, a.useSyncExternalStore)(t.subscribe, n, n);
        return (
          (0, r.useEffect)(() => {
            null != e && t.fetchGlobalElement(e).catch(console.error);
          }, [t, e]),
          s
        );
      }
      function h(e) {
        let t = (0, i.h)(),
          n = () => (null == e ? null : t.readLocalizedGlobalElement(e)),
          s = (0, a.useSyncExternalStore)(t.subscribe, n, n);
        return (
          (0, r.useEffect)(() => {
            null != e && t.fetchLocalizedGlobalElement(e).catch(console.error);
          }, [t, e]),
          s
        );
      }
      function p(e) {
        let t = (0, i.h)(),
          n = () => (null == e ? null : t.readPagePathnameSlice(e)),
          s = (0, a.useSyncExternalStore)(t.subscribe, n, n);
        return (
          (0, r.useEffect)(() => {
            null != e && t.fetchPagePathnameSlice(e).catch(console.error);
          }, [t, e]),
          s
        );
      }
      function f(e) {
        let t = (0, i.h)(),
          n = () => (null == e ? null : t.readTable(e)),
          s = (0, a.useSyncExternalStore)(t.subscribe, n, n);
        return (
          (0, r.useEffect)(() => {
            null != e && t.fetchTable(e).catch(console.error);
          }, [t, e]),
          s
        );
      }
    },
    9557: function (e, t, n) {
      "use strict";
      n.d(t, {
        k: function () {
          return i;
        },
      });
      var r = n(8574),
        a = n(2652);
      function i() {
        return (0, a.v)((e) => (0, r.le)(e));
      }
    },
    2501: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return a;
        },
        i: function () {
          return i;
        },
      });
      var r = n(2983);
      let a = (0, r.createContext)(null);
      function i() {
        return (0, r.useContext)(a);
      }
    },
    7246: function (e, t, n) {
      "use strict";
      n.d(t, {
        k: function () {
          return i;
        },
      });
      var r = n(8574),
        a = n(2652);
      function i(e) {
        return (0, a.v)((t) => (0, r.Me)(t, e));
      }
    },
    7136: function (e, t, n) {
      "use strict";
      n.d(t, {
        s: function () {
          return s;
        },
      });
      var r = n(8574),
        a = n(2501),
        i = n(2652);
      function s(e) {
        let t = (0, a.i)();
        return (0, i.v)((n) =>
          null == t || null == e ? null : (0, r.nR)(n, t, e)
        );
      }
    },
    1728: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return i;
        },
      });
      var r = n(8574),
        a = n(2652);
      function i() {
        return (0, a.v)((e) => (0, r.sj)(e));
      }
    },
    2301: function (e, t, n) {
      "use strict";
      n.d(t, {
        U: function () {
          return i;
        },
      });
      var r = n(8574),
        a = n(2652);
      function i() {
        return (0, a.v)((e) => (0, r.Yh)(e));
      }
    },
    2652: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return i;
        },
      });
      var r = n(2014),
        a = n(9577);
      function i(e) {
        let t = (0, a.o)();
        return (0, r.useSyncExternalStoreWithSelector)(
          t.subscribe,
          t.getState,
          t.getState,
          e
        );
      }
    },
    9577: function (e, t, n) {
      "use strict";
      n.d(t, {
        o: function () {
          return s;
        },
        x: function () {
          return i;
        },
      });
      var r = n(2983),
        a = n(7114);
      let i = (0, r.createContext)(a.P.store);
      function s() {
        return (0, r.useContext)(i);
      }
    },
    2444: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return i;
        },
      });
      var r = n(6325),
        a = n(628);
      function i(e) {
        let { element: t, onBoxModelChange: n } = e,
          i = null,
          s = () => {
            let e = (0, r.iz)(t);
            (0, a.Z)(i, e) || n((i = e)), (o = requestAnimationFrame(s));
          },
          o = requestAnimationFrame(s);
        return () => {
          cancelAnimationFrame(o), n(null);
        };
      }
    },
    7114: function (e, t, n) {
      "use strict";
      n.d(t, {
        P: function () {
          return g;
        },
      });
      var r = n(597),
        a = n(7455),
        i = n.n(a),
        s = n(1644),
        o = n(9791),
        l = n(8358);
      let c = {
        Box: "./components/Box/index.js",
        Button: "./components/Button/index.js",
        Carousel: "./components/Carousel/index.js",
        Countdown: "./components/Countdown/index.js",
        Divider: "./components/Divider/index.js",
        Embed: "./components/Embed/index.js",
        Form: "./components/Form/index.js",
        Image: "./components/Image/index.js",
        Navigation: "./components/Navigation/index.js",
        Root: "./components/Root/index.js",
        SocialLinks: "./components/SocialLinks/index.js",
        Text: "./components/Text/index.js",
        Video: "./components/Video/index.js",
      };
      var u = n(8408),
        d = n(810),
        h = n(513),
        p = n(9770),
        f = n(1494);
      function m(e) {
        let t = (function (e) {
            function t(t, n, r) {
              var a, i;
              let s = t[r];
              return (
                (null !==
                  (i =
                    null === (a = (0, l.v6)(e.getBreakpoints(), s, n)) ||
                    void 0 === a
                      ? void 0
                      : a.value) && void 0 !== i
                  ? i
                  : "none") === "none"
              );
            }
            let r = (e, n) => t(e, n, "boxAnimateType"),
              a = (e, n) => t(e, n, "itemAnimateType");
            return e.registerComponent(
              (0, s.R)((e) =>
                i()(
                  () =>
                    e(
                      Promise.all([
                        n.e(892),
                        n.e(485),
                        n.e(100),
                        n.e(534),
                      ]).then(n.bind(n, 9534))
                    ),
                  { loadableGenerated: { webpack: () => [9534] } }
                )
              ),
              {
                type: c.Box,
                label: "Box",
                props: {
                  id: o.UE(),
                  backgrounds: o.Sj(),
                  width: o.Lu({
                    format: o.Lu.Format.ClassName,
                    defaultValue: { value: 100, unit: "%" },
                  }),
                  height: o.dk({
                    label: "Height",
                    options: [
                      { value: "auto", label: "Auto", icon: "HeightAuto16" },
                      {
                        value: "stretch",
                        label: "Stretch",
                        icon: "HeightMatch16",
                      },
                    ],
                    defaultValue: "auto",
                  }),
                  verticalAlign: o.dk({
                    label: "Align items",
                    options: [
                      {
                        value: "flex-start",
                        label: "Top",
                        icon: "VerticalAlignStart16",
                      },
                      {
                        value: "center",
                        label: "Middle",
                        icon: "VerticalAlignMiddle16",
                      },
                      {
                        value: "flex-end",
                        label: "Bottom",
                        icon: "VerticalAlignEnd16",
                      },
                      {
                        value: "space-between",
                        label: "Space between",
                        icon: "VerticalAlignSpaceBetween16",
                      },
                    ],
                    defaultValue: "flex-start",
                  }),
                  margin: o.Zt({ format: o.Zt.Format.ClassName }),
                  padding: o.Zh({
                    format: o.Zh.Format.ClassName,
                    preset: [
                      {
                        deviceId: (0, l.N4)(e.getBreakpoints()).id,
                        value: {
                          paddingTop: { value: 10, unit: "px" },
                          paddingRight: { value: 10, unit: "px" },
                          paddingBottom: { value: 10, unit: "px" },
                          paddingLeft: { value: 10, unit: "px" },
                        },
                      },
                    ],
                  }),
                  border: o.OC({ format: o.OC.Format.ClassName }),
                  borderRadius: o.cM({ format: o.cM.Format.ClassName }),
                  boxShadow: o.fo({ format: o.fo.Format.ClassName }),
                  rowGap: o.mE((e) => ({ hidden: null == e.children })),
                  columnGap: o.Js((e) => ({ hidden: null == e.children })),
                  boxAnimateType: o.S6({
                    label: "Animate box in",
                    labelOrientation: "vertical",
                    options: [
                      { value: "none", label: "None" },
                      { value: "fadeIn", label: "Fade in" },
                      { value: "fadeRight", label: "Fade right" },
                      { value: "fadeDown", label: "Fade down" },
                      { value: "fadeLeft", label: "Fade left" },
                      { value: "fadeUp", label: "Fade up" },
                      { value: "blurIn", label: "Blur in" },
                      { value: "scaleUp", label: "Scale up" },
                      { value: "scaleDown", label: "Scale down" },
                    ],
                    defaultValue: "none",
                  }),
                  boxAnimateDuration: o._K((e, t) => ({
                    label: "Box duration",
                    defaultValue: u.qt,
                    min: 0.1,
                    step: 0.05,
                    suffix: "s",
                    hidden: r(e, t),
                  })),
                  boxAnimateDelay: o._K((e, t) => ({
                    label: "Box delay",
                    defaultValue: u._h,
                    min: 0,
                    step: 0.05,
                    suffix: "s",
                    hidden: r(e, t),
                  })),
                  itemAnimateType: o.S6({
                    label: "Animate items in",
                    labelOrientation: "vertical",
                    options: [
                      { value: "none", label: "None" },
                      { value: "fadeIn", label: "Fade in" },
                      { value: "fadeRight", label: "Fade right" },
                      { value: "fadeDown", label: "Fade down" },
                      { value: "fadeLeft", label: "Fade left" },
                      { value: "fadeUp", label: "Fade up" },
                      { value: "blurIn", label: "Blur in" },
                      { value: "scaleUp", label: "Scale up" },
                      { value: "scaleDown", label: "Scale down" },
                    ],
                    defaultValue: "none",
                  }),
                  itemAnimateDuration: o._K((e, t) => ({
                    label: "Items duration",
                    defaultValue: u.qt,
                    min: 0.1,
                    step: 0.05,
                    suffix: "s",
                    hidden: a(e, t),
                  })),
                  itemAnimateDelay: o._K((e, t) => ({
                    label: "Items delay",
                    defaultValue: u.Ot,
                    min: 0,
                    step: 0.05,
                    suffix: "s",
                    hidden: a(e, t),
                  })),
                  itemStaggerDuration: o._K((e, t) => ({
                    label: "Stagger",
                    min: 0,
                    step: 0.05,
                    suffix: "s",
                    defaultValue: u.yb,
                    hidden: a(e, t),
                  })),
                  hidePlaceholder: o.XZ((e) => ({
                    label: "Hide placeholder",
                    hidden: null != e.children,
                  })),
                  children: o.rj(),
                },
              }
            );
          })(e),
          r = e.registerComponent(
            (0, s.R)((e) =>
              i()(
                () =>
                  e(Promise.all([n.e(894), n.e(675)]).then(n.bind(n, 8675))),
                { loadableGenerated: { webpack: () => [8675] } }
              )
            ),
            {
              type: c.Button,
              label: "Button",
              props: {
                id: o.UE(),
                children: o.oi({ placeholder: "Button text" }),
                link: o.BY({
                  defaultValue: {
                    type: "OPEN_PAGE",
                    payload: { pageId: null, openInNewTab: !1 },
                  },
                }),
                variant: o.S6({
                  label: "Style",
                  labelOrientation: "horizontal",
                  options: [
                    { value: "flat", label: "Flat" },
                    { value: "outline", label: "Outline" },
                    { value: "shadow", label: "Floating" },
                    { value: "clear", label: "Clear" },
                    { value: "blocky", label: "Blocky" },
                    { value: "bubbly", label: "Bubbly" },
                    { value: "skewed", label: "Skewed" },
                  ],
                  defaultValue: "flat",
                }),
                shape: o.dk({
                  label: "Shape",
                  options: [
                    { label: "Pill", value: "pill", icon: "ButtonPill16" },
                    {
                      label: "Rounded",
                      value: "rounded",
                      icon: "ButtonRounded16",
                    },
                    {
                      label: "Square",
                      value: "square",
                      icon: "ButtonSquare16",
                    },
                  ],
                  defaultValue: "rounded",
                }),
                size: o.dk({
                  label: "Size",
                  options: [
                    { label: "Small", value: "small", icon: "SizeSmall16" },
                    { label: "Medium", value: "medium", icon: "SizeMedium16" },
                    { label: "Large", value: "large", icon: "SizeLarge16" },
                  ],
                  defaultValue: "medium",
                }),
                color: o.Hp((t, n) => {
                  var r;
                  let a = t.variant,
                    i =
                      (null === (r = (0, l.v6)(e.getBreakpoints(), a, n)) ||
                      void 0 === r
                        ? void 0
                        : r.value) === "clear";
                  return { placeholder: "black", hidden: i };
                }),
                textColor: o.Hp({ label: "Text color", placeholder: "white" }),
                textStyle: o.pn(),
                width: o.Lu(),
                margin: o.Zt({ format: o.Zt.Format.ClassName }),
              },
            }
          ),
          a = e.registerComponent(
            (0, s.R)((e) =>
              i()(
                () =>
                  e(
                    Promise.all([n.e(894), n.e(892), n.e(815)]).then(
                      n.bind(n, 9815)
                    )
                  ),
                { loadableGenerated: { webpack: () => [9815] } }
              )
            ),
            {
              type: c.Carousel,
              label: "Carousel",
              icon: h.Yw.Carousel,
              props: {
                id: o.UE(),
                images: o.rU({
                  preset: [
                    { key: (0, d.Z)(), props: {} },
                    { key: (0, d.Z)(), props: {} },
                    { key: (0, d.Z)(), props: {} },
                  ],
                }),
                width: o.Lu({
                  format: o.Lu.Format.ClassName,
                  defaultValue: { value: 400, unit: "px" },
                }),
                margin: o.Zt({ format: o.Zt.Format.ClassName }),
                pageSize: o._K((e) => {
                  var t;
                  let n = e.images,
                    r =
                      null !== (t = null == n ? void 0 : n.length) &&
                      void 0 !== t
                        ? t
                        : 0;
                  return {
                    label: "Images shown",
                    defaultValue: 1,
                    min: 1,
                    max: r,
                    step: 1,
                  };
                }),
                step: o._K((t, n) => {
                  var r, a;
                  let i = t.pageSize,
                    s =
                      null !==
                        (a =
                          null === (r = (0, l.v6)(e.getBreakpoints(), i, n)) ||
                          void 0 === r
                            ? void 0
                            : r.value) && void 0 !== a
                        ? a
                        : 1;
                  return {
                    label: "Step",
                    defaultValue: 1,
                    min: 1,
                    max: s,
                    step: 1,
                  };
                }),
                slideAlignment: o.dk({
                  label: "Alignment",
                  options: [
                    {
                      label: "Top",
                      value: "flex-start",
                      icon: "VerticalAlignStart16",
                    },
                    {
                      label: "Middle",
                      value: "center",
                      icon: "VerticalAlignMiddle16",
                    },
                    {
                      label: "Bottom",
                      value: "flex-end",
                      icon: "VerticalAlignEnd16",
                    },
                  ],
                  defaultValue: "center",
                }),
                gap: o.Js({
                  label: "Gap",
                  step: 5,
                  defaultValue: { value: 0, unit: "px" },
                }),
                autoplay: o.XZ({ label: "Autoplay" }),
                delay: o.Mr((e) => ({
                  label: "Delay",
                  preset: 5,
                  min: 1,
                  step: 0.1,
                  suffix: "seconds",
                  hidden: !e.autoplay,
                })),
                showArrows: o.XZ({ preset: !0, label: "Show arrows" }),
                arrowPosition: o.dk((e) => ({
                  label: "Arrow position",
                  options: [
                    { label: "Inside", value: "inside", icon: "ArrowInside16" },
                    { label: "Center", value: "center", icon: "ArrowCenter16" },
                    {
                      label: "Outside",
                      value: "outside",
                      icon: "ArrowOutside16",
                    },
                  ],
                  defaultValue: "inside",
                  hidden: !1 === e.showArrows,
                })),
                arrowColor: o.Hp((e) => ({
                  label: "Arrow color",
                  placeholder: "black",
                  hidden: !1 === e.showArrows,
                })),
                arrowBackground: o.Hp((e) => ({
                  label: "Arrow background",
                  placeholder: "white",
                  hidden: !1 === e.showArrows,
                })),
                showDots: o.XZ({ preset: !0, label: "Show dots" }),
                dotColor: o.Hp((e) => ({
                  label: "Dot color",
                  placeholder: "black",
                  hidden: !1 === e.showDots,
                })),
                slideBorder: o.OC({ format: o.OC.Format.ClassName }),
                slideBorderRadius: o.cM({ format: o.cM.Format.ClassName }),
              },
            }
          ),
          m = e.registerComponent(
            (0, s.R)((e) =>
              i()(() => e(n.e(136).then(n.bind(n, 8234))), {
                loadableGenerated: { webpack: () => [8234] },
              })
            ),
            {
              type: c.Countdown,
              label: "Countdown",
              icon: h.Yw.Countdown,
              props: {
                id: o.UE(),
                date: o.Ej(() => ({
                  preset: new Date(Date.now() + 1728e5).toISOString(),
                })),
                variant: o.dk({
                  label: "Style",
                  options: [
                    {
                      label: "Filled",
                      value: "filled",
                      icon: "CountdownSolid16",
                    },
                    {
                      label: "Filled split",
                      value: "filled-split",
                      icon: "CountdownSolidSplit16",
                    },
                    {
                      label: "Outline",
                      value: "outline",
                      icon: "CountdownOutline16",
                    },
                    {
                      label: "Outline split",
                      value: "outline-split",
                      icon: "CountdownOutlineSplit16",
                    },
                    {
                      label: "Clear",
                      value: "clear",
                      icon: "CountdownNaked16",
                    },
                  ],
                  defaultValue: "filled",
                }),
                shape: o.dk({
                  label: "Shape",
                  options: [
                    { label: "Pill", value: "pill", icon: "ButtonPill16" },
                    {
                      label: "Rounded",
                      value: "rounded",
                      icon: "ButtonRounded16",
                    },
                    {
                      label: "Square",
                      value: "square",
                      icon: "ButtonSquare16",
                    },
                  ],
                  defaultValue: "rounded",
                }),
                size: o.dk({
                  label: "Size",
                  options: [
                    { label: "Small", value: "small", icon: "SizeSmall16" },
                    { label: "Medium", value: "medium", icon: "SizeMedium16" },
                    { label: "Large", value: "large", icon: "SizeLarge16" },
                  ],
                  defaultValue: "medium",
                }),
                gap: o.Js({
                  preset: [
                    {
                      deviceId: (0, l.N4)(e.getBreakpoints()).id,
                      value: { value: 10, unit: "px" },
                    },
                  ],
                  label: "Gap",
                  step: 1,
                  min: 0,
                  max: 100,
                  defaultValue: { value: 0, unit: "px" },
                }),
                numberFont: o.Zx({ label: "Number font" }),
                numberColor: o.Hp({
                  label: "Number color",
                  placeholder: "white",
                }),
                blockColor: o.Hp({
                  label: "Block color",
                  placeholder: "black",
                }),
                labelFont: o.Zx({ label: "Label font" }),
                labelColor: o.Hp({
                  label: "Label color",
                  placeholder: "black",
                }),
                width: o.Lu({
                  format: o.Lu.Format.ClassName,
                  defaultValue: { value: 560, unit: "px" },
                }),
                margin: o.Zt({ format: o.Zt.Format.ClassName }),
                daysLabel: o.oi({ label: "Days label", placeholder: "Days" }),
                hoursLabel: o.oi({
                  label: "Hours label",
                  placeholder: "Hours",
                }),
                minutesLabel: o.oi({
                  label: "Minutes label",
                  placeholder: "Minutes",
                }),
                secondsLabel: o.oi({
                  label: "Seconds label",
                  placeholder: "Seconds",
                }),
              },
            }
          ),
          E = e.registerComponent(
            (0, s.R)((e) =>
              i()(() => e(n.e(418).then(n.bind(n, 9418))), {
                loadableGenerated: { webpack: () => [9418] },
              })
            ),
            {
              type: c.Divider,
              label: "Divider",
              icon: h.Yw.Divider,
              props: {
                id: o.UE(),
                variant: o.S6({
                  label: "Style",
                  labelOrientation: "horizontal",
                  options: [
                    { value: "solid", label: "Solid" },
                    { value: "dashed", label: "Dashed" },
                    { value: "dotted", label: "Dotted" },
                    { value: "blended", label: "Blended" },
                  ],
                  defaultValue: "solid",
                }),
                thickness: o.k3({
                  label: "Height",
                  defaultValue: { value: 1, unit: "px" },
                  options: [{ value: "px", label: "Pixels", icon: "Px16" }],
                }),
                color: o.Hp({ placeholder: "black" }),
                width: o.Lu({
                  format: o.Lu.Format.ClassName,
                  defaultValue: { value: 100, unit: "%" },
                }),
                margin: o.Zt({ format: o.Zt.Format.ClassName }),
              },
            }
          ),
          T = e.registerComponent(
            (0, s.R)((e) =>
              i()(() => e(n.e(55).then(n.bind(n, 9055))), {
                loadableGenerated: { webpack: () => [9055] },
              })
            ),
            {
              type: c.Embed,
              label: "Embed",
              icon: h.Yw.Code,
              props: {
                id: o.UE(),
                html: o.Kx({ label: "Code", rows: 20 }),
                width: o.Lu({ format: o.Lu.Format.ClassName }),
                margin: o.Zt({ format: o.Zt.Format.ClassName }),
              },
            }
          ),
          g = e.registerComponent(
            (0, s.R)((e) =>
              i()(
                () =>
                  e(Promise.all([n.e(894), n.e(468)]).then(n.bind(n, 2468))),
                { loadableGenerated: { webpack: () => [2468] } }
              )
            ),
            {
              type: c.Form,
              label: "Form",
              icon: h.Yw.Form,
              props: {
                id: o.UE(),
                tableId: o.iA(),
                fields: o.gU(),
                submitLink: o.BY((e) => ({
                  label: "Redirect to",
                  options: [
                    { value: "OPEN_PAGE", label: "Open page" },
                    { value: "OPEN_URL", label: "Open URL" },
                  ],
                  hidden: null == e.tableId,
                })),
                gap: o.mE((t) => ({
                  preset: [
                    {
                      deviceId: (0, l.N4)(e.getBreakpoints()).id,
                      value: { value: 10, unit: "px" },
                    },
                  ],
                  label: "Gap",
                  defaultValue: { value: 0, unit: "px" },
                  hidden: null == t.tableId,
                })),
                shape: o.dk((e) => ({
                  label: "Shape",
                  options: [
                    { label: "Pill", value: p.jw.PILL, icon: "ButtonPill16" },
                    {
                      label: "Rounded",
                      value: p.jw.ROUNDED,
                      icon: "ButtonRounded16",
                    },
                    {
                      label: "Square",
                      value: p.jw.SQUARE,
                      icon: "ButtonSquare16",
                    },
                  ],
                  defaultValue: p.jw.ROUNDED,
                  hidden: null == e.tableId,
                })),
                size: o.dk((e) => ({
                  label: "Size",
                  options: [
                    { label: "Small", value: p.u8.SMALL, icon: "SizeSmall16" },
                    {
                      label: "Medium",
                      value: p.u8.MEDIUM,
                      icon: "SizeMedium16",
                    },
                    { label: "Large", value: p.u8.LARGE, icon: "SizeLarge16" },
                  ],
                  defaultValue: p.u8.MEDIUM,
                  hidden: (null == e ? void 0 : e.tableId) == null,
                })),
                contrast: o.dk((e) => ({
                  label: "Color",
                  options: [
                    { label: "Light mode", value: p.gC.LIGHT, icon: "Sun16" },
                    { label: "Dark mode", value: p.gC.DARK, icon: "Moon16" },
                  ],
                  defaultValue: p.gC.LIGHT,
                  hidden: null == e.tableId,
                })),
                labelTextStyle: o.pn({ label: "Label text style" }),
                labelTextColor: o.Hp((t, n) => {
                  let r = null == t.tableId,
                    a = t.contrast,
                    i = (0, l.v6)(e.getBreakpoints(), a, n);
                  return {
                    hidden: r,
                    label: "Label text color",
                    placeholder:
                      (null == i ? void 0 : i.value) === p.gC.DARK
                        ? "rgba(255,255,255,0.95)"
                        : "rgba(0,0,0,0.8)",
                  };
                }),
                submitTextStyle: o.pn({ label: "Button text style" }),
                brandColor: o.Hp((e) => ({
                  label: "Button color",
                  placeholder: "black",
                  hidden: null == e.tableId,
                })),
                submitTextColor: o.Hp((e) => ({
                  label: "Button text color",
                  placeholder: "white",
                  hidden: null == e.tableId,
                })),
                submitLabel: o.oi((e) => ({
                  label: "Button label",
                  placeholder: "Submit",
                  hidden: null == e.tableId,
                })),
                submitVariant: o.S6((e) => ({
                  label: "Button style",
                  options: [
                    { value: "flat", label: "Flat" },
                    { value: "outline", label: "Outline" },
                    { value: "shadow", label: "Floating" },
                    { value: "clear", label: "Clear" },
                    { value: "blocky", label: "Blocky" },
                    { value: "bubbly", label: "Bubbly" },
                    { value: "skewed", label: "Skewed" },
                  ],
                  defaultValue: "flat",
                  hidden: null == e.tableId,
                })),
                submitWidth: o.k3((e) => ({
                  label: "Button width",
                  hidden: null == e.tableId,
                })),
                submitAlignment: o.dk((e) => ({
                  label: "Button alignment",
                  options: [
                    { label: "Left", value: p.N3.LEFT, icon: "AlignLeft16" },
                    {
                      label: "Center",
                      value: p.N3.CENTER,
                      icon: "AlignCenter16",
                    },
                    { label: "Right", value: p.N3.RIGHT, icon: "AlignRight16" },
                  ],
                  defaultValue: p.N3.CENTER,
                  hidden: null == e.tableId,
                })),
                width: o.Lu({
                  preset: [
                    {
                      deviceId: (0, l.N4)(e.getBreakpoints()).id,
                      value: { value: 550, unit: "px" },
                    },
                  ],
                  defaultValue: { value: 100, unit: "%" },
                  format: o.Lu.Format.ClassName,
                }),
                margin: o.Zt({ format: o.Zt.Format.ClassName }),
              },
            }
          ),
          _ = e.registerComponent(
            (0, s.R)((e) =>
              i()(
                () =>
                  e(
                    Promise.all([n.e(894), n.e(892), n.e(696)]).then(
                      n.bind(n, 7696)
                    )
                  ),
                { loadableGenerated: { webpack: () => [7696] } }
              )
            ),
            {
              type: c.Image,
              label: "Image",
              props: {
                id: o.UE(),
                file: o.Ee(),
                altText: o.oi({ label: "Alt text" }),
                link: o.BY({ label: "On click" }),
                width: o.Lu(),
                margin: o.Zt({ format: o.Zt.Format.ClassName }),
                padding: o.Zh({ format: o.Zh.Format.ClassName }),
                border: o.OC({ format: o.OC.Format.ClassName }),
                borderRadius: o.cM({ format: o.cM.Format.ClassName }),
                boxShadow: o.fo({ format: o.fo.Format.ClassName }),
                opacity: o.nN(),
                priority: o.XZ({ label: "Priority" }),
              },
            }
          ),
          A = e.registerComponent(
            (0, s.R)((e) =>
              i()(
                () =>
                  e(
                    Promise.all([n.e(894), n.e(892), n.e(260)]).then(
                      n.bind(n, 8260)
                    )
                  ),
                { loadableGenerated: { webpack: () => [8260] } }
              )
            ),
            {
              type: c.Navigation,
              label: "Navigation",
              icon: h.Yw.Navigation,
              props: {
                id: o.UE(),
                links: o.vc(),
                linkTextStyle: o.pn((e) => {
                  let t = e.links;
                  return {
                    label: "Link text style",
                    hidden: null == t || 0 === t.length,
                  };
                }),
                showLogo: o.XZ({ preset: !0, label: "Show logo" }),
                logoFile: o.Ee((e) => ({
                  label: "Logo",
                  hidden: !1 === e.showLogo,
                })),
                logoWidth: o.k3((t) => ({
                  preset: [
                    {
                      deviceId: (0, l.N4)(e.getBreakpoints()).id,
                      value: { value: 100, unit: "px" },
                    },
                  ],
                  label: "Logo width",
                  min: 0,
                  max: 1e3,
                  options: [{ value: "px", label: "Pixels", icon: "Px16" }],
                  hidden: !1 === t.showLogo,
                })),
                logoAltText: o.oi((e) => ({
                  label: "Logo alt text",
                  hidden: !1 === e.showLogo,
                })),
                logoLink: o.BY((e) => ({
                  label: "Logo on click",
                  hidden: !1 === e.showLogo,
                })),
                alignment: o.dk({
                  label: "Alignment",
                  options: [
                    { label: "Left", value: "flex-start", icon: "AlignLeft16" },
                    { label: "Center", value: "center", icon: "AlignCenter16" },
                    { label: "End", value: "flex-end", icon: "AlignRight16" },
                  ],
                  defaultValue: "flex-end",
                }),
                gutter: o.Js({
                  preset: [
                    {
                      deviceId: (0, l.N4)(e.getBreakpoints()).id,
                      value: { value: 10, unit: "px" },
                    },
                  ],
                  label: "Link gap",
                  min: 0,
                  max: 100,
                  step: 1,
                  defaultValue: { value: 0, unit: "px" },
                }),
                mobileMenuAnimation: o.S6({
                  label: "Mobile menu",
                  options: [
                    { value: "coverRight", label: "Cover from right" },
                    { value: "coverLeft", label: "Cover from left" },
                  ],
                }),
                mobileMenuOpenIconColor: o.Hp((t, n) => {
                  let r = t.mobileMenuAnimation,
                    a = !(0, l.v6)(e.getBreakpoints(), r, n);
                  return {
                    label: "Open icon color",
                    placeholder: "rgba(161, 168, 194, 0.5)",
                    hidden: a,
                  };
                }),
                mobileMenuCloseIconColor: o.Hp((t, n) => {
                  let r = t.mobileMenuAnimation,
                    a = !(0, l.v6)(e.getBreakpoints(), r, n);
                  return {
                    label: "Close icon color",
                    placeholder: "rgba(161, 168, 194, 0.5)",
                    hidden: a,
                  };
                }),
                mobileMenuBackgroundColor: o.Hp((t, n) => {
                  let r = t.mobileMenuAnimation,
                    a = !(0, l.v6)(e.getBreakpoints(), r, n);
                  return {
                    label: "Menu BG color",
                    placeholder: "black",
                    hidden: a,
                  };
                }),
                width: o.Lu({
                  format: o.Lu.Format.ClassName,
                  defaultValue: { value: 100, unit: "%" },
                }),
                margin: o.Zt({ format: o.Zt.Format.ClassName }),
              },
            }
          ),
          v = e.registerComponent(
            (0, s.R)((e) =>
              i()(
                () =>
                  e(
                    Promise.all([n.e(892), n.e(485), n.e(100), n.e(664)]).then(
                      n.bind(n, 8664)
                    )
                  ),
                { loadableGenerated: { webpack: () => [8664] } }
              )
            ),
            {
              type: c.Root,
              label: "Page",
              hidden: !0,
              props: {
                children: o.rj(),
                backgrounds: o.Sj(),
                rowGap: o.mE(),
                columnGap: o.Js(),
              },
            }
          ),
          b = e.registerComponent(
            (0, s.R)((e) =>
              i()(
                () =>
                  e(Promise.all([n.e(894), n.e(202)]).then(n.bind(n, 6202))),
                { loadableGenerated: { webpack: () => [6202] } }
              )
            ),
            {
              type: c.SocialLinks,
              label: "Social Links",
              icon: h.Yw.SocialLinks,
              props: {
                id: o.UE(),
                links: o.WG({
                  preset: {
                    links: [
                      {
                        id: "facebook",
                        payload: {
                          type: "facebook",
                          url: "https://www.facebook.com",
                        },
                      },
                      {
                        id: "instagram",
                        payload: {
                          type: "instagram",
                          url: "https://www.instagram.com",
                        },
                      },
                      {
                        id: "twitter",
                        payload: {
                          type: "twitter",
                          url: "https://www.twitter.com",
                        },
                      },
                    ],
                    openInNewTab: !1,
                  },
                }),
                shape: o.dk((e) => {
                  let t = e.links;
                  return {
                    label: "Shape",
                    options: [
                      { label: "Naked", value: "naked", icon: "Star16" },
                      {
                        label: "Circle",
                        value: "circle",
                        icon: "StarCircle16",
                      },
                      {
                        label: "Rounded",
                        value: "rounded",
                        icon: "StarRoundedSquare16",
                      },
                      {
                        label: "Square",
                        value: "square",
                        icon: "StarSquare16",
                      },
                    ],
                    defaultValue: "naked",
                    hidden: null == t || 0 === t.links.length,
                  };
                }),
                size: o.dk((e) => {
                  let t = e.links;
                  return {
                    label: "Size",
                    options: [
                      { label: "Small", value: "small", icon: "SizeSmall16" },
                      {
                        label: "Medium",
                        value: "medium",
                        icon: "SizeMedium16",
                      },
                      { label: "Large", value: "large", icon: "SizeLarge16" },
                    ],
                    defaultValue: "medium",
                    hidden: null == t || 0 === t.links.length,
                  };
                }),
                hoverStyle: o.S6((e) => {
                  let t = e.links,
                    n = null == t || 0 === t.links.length;
                  return {
                    label: "On hover",
                    options: [
                      { value: "none", label: "None" },
                      { value: "grow", label: "Grow" },
                      { value: "shrink", label: "Shrink" },
                      { value: "fade", label: "Fade" },
                    ],
                    defaultValue: "none",
                    labelOrientation: "horizontal",
                    hidden: n,
                  };
                }),
                fill: o.Hp((e) => {
                  let t = e.links,
                    n = null == t || 0 === t.links.length;
                  return { label: "Icon color", hidden: n };
                }),
                backgroundColor: o.Hp((e) => {
                  let t = e.links,
                    n = null == t || 0 === t.links.length;
                  return { label: "Shape color", hidden: n };
                }),
                alignment: o.dk({
                  label: "Alignment",
                  options: [
                    {
                      label: "flex-start",
                      value: "flex-start",
                      icon: "AlignLeft16",
                    },
                    { label: "center", value: "center", icon: "AlignCenter16" },
                    {
                      label: "flex-end",
                      value: "flex-end",
                      icon: "AlignRight16",
                    },
                  ],
                  defaultValue: "center",
                }),
                gutter: o.Js({
                  preset: [
                    {
                      deviceId: (0, l.N4)(e.getBreakpoints()).id,
                      value: { value: 10, unit: "px" },
                    },
                  ],
                  label: "Link gap",
                  min: 0,
                  max: 100,
                  step: 1,
                  defaultValue: { value: 0, unit: "px" },
                }),
                width: o.Lu({
                  format: o.Lu.Format.ClassName,
                  defaultValue: { value: 100, unit: "%" },
                }),
                margin: o.Zt({
                  format: o.Zt.Format.ClassName,
                  preset: [
                    {
                      deviceId: (0, l.N4)(e.getBreakpoints()).id,
                      value: {
                        marginTop: { value: 10, unit: "px" },
                        marginRight: "auto",
                        marginBottom: { value: 10, unit: "px" },
                        marginLeft: "auto",
                      },
                    },
                  ],
                }),
              },
            }
          ),
          y = e.registerComponent(
            (0, s.R)((e) =>
              i()(() => e(n.e(916).then(n.bind(n, 7916))), {
                loadableGenerated: { webpack: () => [7916] },
              })
            ),
            {
              type: c.Text,
              label: "Text",
              props: {
                id: o.UE(),
                text: (0, f.Ho)(),
                width: o.Lu({
                  format: o.Lu.Format.ClassName,
                  preset: [
                    {
                      deviceId: (0, l.N4)(e.getBreakpoints()).id,
                      value: { value: 700, unit: "px" },
                    },
                  ],
                  defaultValue: { value: 100, unit: "%" },
                }),
                margin: o.Zt({
                  format: o.Zt.Format.ClassName,
                  preset: [
                    {
                      deviceId: (0, l.N4)(e.getBreakpoints()).id,
                      value: {
                        marginTop: null,
                        marginRight: "auto",
                        marginBottom: { value: 20, unit: "px" },
                        marginLeft: "auto",
                      },
                    },
                  ],
                }),
              },
            }
          ),
          N = e.registerComponent(
            (0, s.R)((e) =>
              i()(
                () =>
                  e(Promise.all([n.e(485), n.e(906)]).then(n.bind(n, 4906))),
                { loadableGenerated: { webpack: () => [4906] } }
              )
            ),
            {
              type: c.Video,
              label: "Video",
              icon: h.Yw.Video,
              props: {
                id: o.UE(),
                video: o.nk({ preset: { controls: !0 } }),
                width: o.Lu({
                  format: o.Lu.Format.ClassName,
                  defaultValue: { value: 560, unit: "px" },
                }),
                margin: o.Zt({ format: o.Zt.Format.ClassName }),
                borderRadius: o.cM({ format: o.cM.Format.ClassName }),
              },
            }
          );
        return () => {
          t(), r(), a(), m(), E(), T(), g(), _(), A(), v(), b(), y(), N();
        };
      }
      var E = n(5900),
        T = n(8574);
      class g {
        static registerComponent(e, t) {
          let {
              type: n,
              label: r,
              icon: a = h.Yw.Code,
              hidden: i = !1,
              props: s,
            } = t,
            o = this.store.dispatch(
              (0, E.X1)(n, { label: r, icon: a, hidden: i }, null != s ? s : {})
            ),
            l = this.store.dispatch((0, E._R)(n, e));
          return () => {
            o(), l();
          };
        }
        static copyElementTree(e, t) {
          return (0, T.vS)(this.store.getState(), e, t);
        }
        static getBreakpoints() {
          return (0, T.le)(this.store.getState());
        }
        static getTranslatableData(e) {
          return (0, T.fF)(this.store.getState(), e);
        }
        static mergeTranslatedData(e, t) {
          return (0, T.eW)(this.store.getState(), e, t);
        }
        registerComponent(e, t) {
          let {
              type: n,
              label: r,
              icon: a = h.Yw.Cube,
              hidden: i = !1,
              props: s,
            } = t,
            o = this.store.dispatch(
              (0, E.X1)(n, { label: r, icon: a, hidden: i }, null != s ? s : {})
            ),
            l = this.store.dispatch((0, E._R)(n, e));
          return () => {
            o(), l();
          };
        }
        copyElementTree(e, t) {
          return (0, T.vS)(this.store.getState(), e, t);
        }
        getBreakpoints() {
          return (0, T.le)(this.store.getState());
        }
        getTranslatableData(e) {
          return (0, T.fF)(this.store.getState(), e);
        }
        mergeTranslatedData(e, t) {
          return (0, T.eW)(this.store.getState(), e, t);
        }
        constructor({ breakpoints: e } = {}) {
          (0, r.Z)(this, "store", void 0),
            (this.store = (0, T.xC)({
              breakpoints: e ? (0, l.n1)(e) : void 0,
            })),
            m(this);
        }
      }
      (0, r.Z)(g, "store", (0, T.xC)()), m(g);
    },
    4483: function (e, t, n) {
      "use strict";
      n.d(t, {
        X: function () {
          return c;
        },
      });
      var r,
        a = n(2983),
        i = n(1458),
        s = n(7169),
        o = n(8116);
      let l =
        null !== (r = a.useInsertionEffect) && void 0 !== r
          ? r
          : a.useLayoutEffect;
      function c(e) {
        let t = (0, s.O)([e], i.Fs.registered);
        return (
          (0, o.hC)(i.Fs, t, !1),
          l(() => {
            (0, o.My)(i.Fs, t, !1);
          }),
          "".concat(i.Fs.key, "-").concat(t.name)
        );
      }
    },
    9440: function (e, t, n) {
      "use strict";
      n.d(t, {
        AT: function () {
          return I;
        },
        f5: function () {
          return y;
        },
        K6: function () {
          return N;
        },
      });
      var r = n(7458),
        a = n(1025),
        i = n(3797),
        s = n(2342),
        o = (n(8358), n(3752)),
        l = n(4499),
        c = n(2534),
        u = n(3057);
      let d = {
        getFirstAncestorList(e, t) {
          try {
            let n = a.ML.above(e, { at: t, match: (e) => s.q.isList(e) });
            return null != n ? n : null;
          } catch (e) {
            return null;
          }
        },
        getFirstAncestorListItem(e, t) {
          try {
            let n = a.ML.above(e, { at: t, match: (e) => s.q.isListItem(e) });
            return null != n ? n : null;
          } catch (e) {
            return null;
          }
        },
      };
      var h = n(6003);
      function p(e, t) {
        var n;
        let r =
          null !== (n = null == t ? void 0 : t.at) && void 0 !== n
            ? n
            : e.selection;
        if (!r) return;
        let i = Array.from(
            a.ML.nodes(e, {
              at: r,
              match: (e) => a.W_.isElement(e) && s.q.isListItem(e),
            })
          ),
          o = (0, h.Q)(i),
          l = o.map((t) => {
            let [n, r] = t;
            return a.ML.pathRef(e, r);
          });
        l.forEach((t) => {
          t.current &&
            (function (e, t) {
              let n = d.getFirstAncestorList(e, t),
                r = d.getFirstAncestorListItem(e, t);
              n &&
                !r &&
                a.ML.withoutNormalizing(e, () => {
                  let r = [...t, 0],
                    i = [...t, 1];
                  a.NB.has(e, i) &&
                    (a.YR.setNodes(e, { type: n[0].type }, { at: i }),
                    a.YR.liftNodes(e, { at: i }),
                    a.YR.liftNodes(e, { at: a.y$.next(t) })),
                    a.NB.has(e, r) &&
                      (a.YR.setNodes(e, { type: u.kH.Paragraph }, { at: r }),
                      a.YR.liftNodes(e, { at: r }),
                      a.YR.liftNodes(e, { at: t }));
                });
            })(e, t.current),
            t.unref();
        });
      }
      function f(e) {
        var t;
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { type: u.kH.UnorderedList },
          r = null !== (t = n.at) && void 0 !== t ? t : e.selection;
        if (!r) return;
        let i = Array.from(
            a.ML.nodes(e, {
              at: r,
              match: (e) =>
                a.W_.isElement(e) && s.q.isConvertibleToListTextNode(e),
            })
          ),
          o = i.map((t) => {
            let [n, r] = t;
            return a.ML.pathRef(e, r);
          });
        o.forEach((t) => {
          let r = t.current;
          r &&
            a.ML.withoutNormalizing(e, () => {
              a.YR.setNodes(e, { type: u.kH.ListItemChild }, { at: r }),
                a.YR.wrapNodes(e, s.q.createListItem(), {
                  match: (e) => s.q.isListItemChild(e),
                  at: r,
                }),
                a.YR.wrapNodes(e, s.q.createList(n.type), { at: r });
            }),
            t.unref();
        });
      }
      let m = {
        getStartPath: (e) =>
          a.e6.isRange(e) ? a.e6.start(e).path : a.E9.isPoint(e) ? e.path : e,
      };
      function E(e) {
        var t, n;
        if (!e.selection) return [];
        let r = m.getStartPath(e.selection),
          i = a.ML.nodes(e, {
            at: e.selection,
            match: (e) => s.q.isListItem(e),
          }),
          o =
            null !==
              (n =
                null === (t = d.getFirstAncestorListItem(e, r)) || void 0 === t
                  ? void 0
                  : t[1]) && void 0 !== n
              ? n
              : [];
        return Array.from(i).filter((e) =>
          a.y$.isDescendant(r, e[1])
            ? a.y$.equals(e[1], o)
            : !a.y$.isAfter(r, e[1])
        );
      }
      function T(e, t) {
        let n = a.NB.parent(e, t);
        if (!t || !a.y$.hasPrevious(t) || !s.q.isList(n)) return;
        let r = a.y$.previous(t),
          i = [...r, 1],
          o = a.NB.has(e, i);
        a.ML.withoutNormalizing(e, () => {
          o || a.YR.insertNodes(e, s.q.createList(n.type), { at: i });
          let r = a.NB.get(e, i);
          if (s.q.isList(r)) {
            let n = o ? r.children.length : 0;
            a.YR.moveNodes(e, { at: t, to: [...i, n] });
          }
        });
      }
      var g = n(2481),
        _ = n(4483),
        A = n(1458),
        v = n(7617);
      o.l, l.f;
      let b = {
        unwrapList: p,
        wrapList: f,
        indent: function (e) {
          if (!e.selection) return;
          let t = E(e),
            n = (0, h.Q)(t),
            r = n.map((t) => {
              let [n, r] = t;
              return a.ML.pathRef(e, r);
            });
          r.forEach((t) => {
            t.current && T(e, t.current), t.unref();
          });
        },
        dedent: function (e) {
          if (!e.selection) return;
          let t = E(e),
            n = (0, h.Q)(t),
            r = n.map((t) => {
              let [n, r] = t;
              return a.ML.pathRef(e, r);
            });
          r.forEach((t) => {
            t.current &&
              (function (e, t) {
                let n = d.getFirstAncestorList(e, t),
                  r = d.getFirstAncestorListItem(e, t);
                if (!n || !r) return;
                let [i, s] = n,
                  [o, l] = r,
                  c = t[t.length - 1],
                  u = i.children.slice(0, c),
                  h = i.children.slice(c + 1);
                a.ML.withoutNormalizing(e, () => {
                  h.forEach(() => {
                    let t = [...s, c + 1];
                    T(e, t);
                  }),
                    a.YR.moveNodes(e, { at: t, to: a.y$.next(l) }),
                    0 === u.length && a.YR.removeNodes(e, { at: s });
                });
              })(e, t.current),
              t.unref();
          });
        },
        toggleList: function (e) {
          var t;
          let n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { type: u.kH.UnorderedList },
            r = null !== (t = n.at) && void 0 !== t ? t : e.selection;
          if (null == r) return;
          let i = m.getStartPath(r),
            o = a.y$.ancestors(i).at(1);
          if (!o || !a.NB.has(e, o)) return;
          let l = a.NB.get(e, o);
          if (!s.q.isList(l)) return f(e, { type: n.type, at: r });
          l.type === n.type
            ? p(e, { at: r })
            : a.YR.setNodes(e, { type: n.type }, { at: o });
        },
      };
      function y(e, t) {
        if (
          t.selection &&
          0 !==
            Array.from(a.ML.nodes(t, { match: (e) => s.q.isListItem(e) }))
              .length
        ) {
          if (
            ((0, g.ZP)("shift+tab", e) && (e.preventDefault(), b.dedent(t)),
            (0, g.ZP)("tab", e) && (e.preventDefault(), b.indent(t)),
            (0, g.ZP)("backspace", e))
          ) {
            if (!t.selection || a.e6.isExpanded(t.selection)) return;
            let n = d.getFirstAncestorListItem(t, t.selection.anchor.path);
            if (0 === t.selection.anchor.offset && n) {
              e.preventDefault();
              let r = d.getFirstAncestorListItem(t, n[1]),
                a = d.getFirstAncestorList(t, n[1]);
              r ? b.dedent(t) : a && b.unwrapList(t);
              return;
            }
          }
          if ((0, g.ZP)("enter", e)) {
            if ((e.preventDefault(), !t.selection)) return;
            if (a.e6.isExpanded(t.selection)) {
              a.YR.delete(t);
              return;
            }
            let n = d.getFirstAncestorListItem(t, t.selection.anchor.path);
            if (
              0 === t.selection.anchor.offset &&
              n &&
              "" === a.ML.string(t, n[1])
            ) {
              let e = d.getFirstAncestorListItem(t, n[1]);
              e ? b.dedent(t) : b.unwrapList(t);
              return;
            }
            a.YR.splitNodes(t, {
              at: t.selection,
              always: !0,
              match: (e) => s.q.isListItem(e),
            });
          }
          (0, g.ZP)("shift+enter", e) &&
            (e.preventDefault(), t.insertText("\n"));
        }
      }
      function N(e) {
        let { normalizeNode: t } = e;
        return (
          (e.isInline = (e) => s.q.isInline(e)),
          (e.normalizeNode = (n) => {
            var r;
            let [i, o] = n;
            if (
              s.q.isBlock(i) &&
              (null == i
                ? void 0
                : null === (r = i.textAlign) || void 0 === r
                ? void 0
                : r.length) == 0
            ) {
              a.YR.unsetNodes(e, "textAlign", { at: o });
              return;
            }
            if (1 === o.length && s.q.isRootBlock(i) && !s.q.isList(i)) {
              let t = Array.from(a.NB.children(e, o));
              if (
                -1 !==
                t.findIndex((e) => {
                  let [t] = e;
                  return s.q.isRootBlock(t);
                })
              ) {
                a.YR.unwrapNodes(e, { at: o });
                return;
              }
            }
            if (s.q.isListItem(i)) {
              let t = [...o, 0];
              if (a.NB.has(e, t)) {
                let n = a.NB.get(e, t);
                if (s.q.isRootBlock(n)) {
                  a.YR.setNodes(e, { type: u.kH.ListItemChild }, { at: t });
                  return;
                }
              } else {
                a.YR.insertNodes(e, s.q.createListItem(), { at: t });
                return;
              }
            }
            if (!a.xv.isText(i)) {
              let t = Array.from(a.NB.children(e, o))
                .map((t, n, r) => {
                  let i = r.at(n + 1);
                  return i &&
                    s.q.isList(i[0]) &&
                    s.q.isList(t[0]) &&
                    i[0].type === t[0].type
                    ? [a.ML.pathRef(e, t[1]), a.ML.pathRef(e, i[1])]
                    : null;
                })
                .filter((e) => Boolean(e));
              if (0 !== t.length) {
                t.reverse().forEach((t) => {
                  let [n, r] = t,
                    i = n.current,
                    s = r.current;
                  if (null == i || null == s) return;
                  let o = Array.from(a.NB.children(e, i)),
                    l = Array.from(a.NB.children(e, s));
                  a.ML.withoutNormalizing(e, () => {
                    l.reverse().forEach((t) => {
                      let [n, r] = t;
                      a.YR.moveNodes(e, { at: r, to: [...i, o.length] });
                    }),
                      a.YR.removeNodes(e, { at: s });
                  }),
                    n.unref(),
                    r.unref();
                });
                return;
              }
            }
            t(n);
          }),
          e
        );
      }
      let C = (0, c.P)({
        label: "Block",
        labelOrientation: "horizontal",
        options: [
          { value: u.kH.Paragraph, label: "Paragraph" },
          { value: u.kH.Heading1, label: "Heading 1" },
          { value: u.kH.Heading2, label: "Heading 2" },
          { value: u.kH.Heading3, label: "Heading 3" },
          { value: u.kH.Heading4, label: "Heading 4" },
          { value: u.kH.Heading5, label: "Heading 5" },
          { value: u.kH.Heading6, label: "Heading 6" },
          { value: u.kH.UnorderedList, label: "Bulleted list" },
          { value: u.kH.OrderedList, label: "Numbered list" },
          { value: u.kH.BlockQuote, label: "Quote" },
        ],
        defaultValue: u.kH.Paragraph,
      });
      function I() {
        return (0, v.Y)({
          withPlugin: N,
          onKeyDown: y,
          control: {
            definition: C,
            onChange: (e, t) => {
              let n = (0, i.Lw)(e);
              t === u.kH.UnorderedList || t === u.kH.OrderedList
                ? b.toggleList(e, { type: t, at: (0, i.Mf)(e) })
                : n === t
                ? a.YR.setNodes(e, { type: u.kH.Default }, { at: (0, i.Mf)(e) })
                : (b.unwrapList(e, { at: (0, i.Mf)(e) }),
                  a.YR.setNodes(
                    e,
                    { type: null != t ? t : u.kH.Default },
                    { at: (0, i.Mf)(e) }
                  ));
            },
            getValue: (e) => {
              let t = (0, i.Lw)(e);
              if (t !== u.OT.Default) return t;
            },
          },
          renderElement: (e) => (t) =>
            (0, r.jsx)(S, { ...t, renderElement: e }),
        });
      }
      function S(e) {
        let { renderElement: t, ...n } = e,
          a = [(0, _.X)({ margin: 0 }), n.element.className],
          i = (0, _.X)({
            padding: "0.5em 10px",
            fontSize: "1.25em",
            fontWeight: "300",
            borderLeft: "5px solid rgba(0, 0, 0, 0.1)",
          }),
          s = (0, _.X)({
            listStylePosition: "inside",
            paddingInlineStart: "20px",
            listStyleType: "disc",
            ul: { listStyleType: "circle" },
            "ul ul": { listStyleType: "square" },
          }),
          o = (0, _.X)({
            listStylePosition: "inside",
            paddingInlineStart: "20px",
            listStyleType: "decimal",
          });
        switch (n.element.type) {
          case u.kH.Default:
          case u.kH.Paragraph:
            return (0, r.jsx)("p", {
              ...n.attributes,
              className: (0, A.cx)(...a),
              children: t(n),
            });
          case u.kH.Heading1:
            return (0, r.jsx)("h1", {
              ...n.attributes,
              className: (0, A.cx)(...a),
              children: t(n),
            });
          case u.kH.Heading2:
            return (0, r.jsx)("h2", {
              ...n.attributes,
              className: (0, A.cx)(...a),
              children: t(n),
            });
          case u.kH.Heading3:
            return (0, r.jsx)("h3", {
              ...n.attributes,
              className: (0, A.cx)(...a),
              children: t(n),
            });
          case u.kH.Heading4:
            return (0, r.jsx)("h4", {
              ...n.attributes,
              className: (0, A.cx)(...a),
              children: t(n),
            });
          case u.kH.Heading5:
            return (0, r.jsx)("h5", {
              ...n.attributes,
              className: (0, A.cx)(...a),
              children: t(n),
            });
          case u.kH.Heading6:
            return (0, r.jsx)("h6", {
              ...n.attributes,
              className: (0, A.cx)(...a),
              children: t(n),
            });
          case u.kH.BlockQuote:
            return (0, r.jsx)("blockquote", {
              ...n.attributes,
              className: (0, A.cx)(...a, i),
              children: t(n),
            });
          case u.kH.OrderedList:
            return (0, r.jsx)("ol", {
              ...n.attributes,
              className: (0, A.cx)(...a, o),
              children: t(n),
            });
          case u.kH.UnorderedList:
            return (0, r.jsx)("ul", {
              ...n.attributes,
              className: (0, A.cx)(...a, s),
              children: t(n),
            });
          case u.kH.ListItem:
            return (0, r.jsx)("li", {
              ...n.attributes,
              className: (0, A.cx)(...a),
              children: t(n),
            });
          case u.kH.ListItemChild:
            return (0, r.jsx)("span", {
              ...n.attributes,
              className: (0, A.cx)(...a),
              children: t(n),
            });
          default:
            return (0, r.jsx)(r.Fragment, { children: t(n) });
        }
      }
    },
    4499: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return s;
        },
      });
      var r = n(1025),
        a = n(2342),
        i = n(3797);
      function s(e, t) {
        r.YR.unwrapNodes(e, {
          match: (e) => a.q.isInline(e) && e.type === t,
          at: (0, i.Mf)(e),
        });
      }
    },
    6003: function (e, t, n) {
      "use strict";
      n.d(t, {
        Q: function () {
          return a;
        },
      });
      var r = n(1025);
      function a(e) {
        return e.filter((t) => {
          let [, n] = t;
          return !r.y$.ancestors(n).some((t) =>
            e.some((e) => {
              let [, n] = e;
              return r.y$.equals(n, t);
            })
          );
        });
      }
    },
    3752: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return i;
        },
      });
      var r = n(1025),
        a = n(3797);
      function i(e, t) {
        r.YR.wrapNodes(e, t, { at: (0, a.Mf)(e), split: !0 });
      }
    },
    2991: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return h;
        },
      });
      var r = n(7458),
        a = n(1025),
        i = n(2481),
        s = n(7617),
        o = n(2342),
        l = n(3057);
      let c = [0],
        u = [1];
      function d(e) {
        let { normalizeNode: t } = e;
        return (
          (e.normalizeNode = (n) => {
            let [r, i] = n;
            if (a.y$.equals(u, i)) {
              a.YR.mergeNodes(e, { at: u });
              return;
            }
            if (a.y$.isAncestor(c, i) && o.q.isBlock(r)) {
              a.YR.unwrapNodes(e, { at: i });
              return;
            }
            if (a.y$.equals(c, i)) {
              a.YR.setNodes(e, { type: l.kH.Default }, { at: i });
              return;
            }
            t(n);
          }),
          e
        );
      }
      function h() {
        return (0, s.Y)({
          onKeyDown: (e) => {
            (0, i.ZP)("enter", e) && e.preventDefault();
          },
          withPlugin: d,
          renderElement: (e) => (t) =>
            (0, r.jsx)(f, { ...t, renderElement: e }),
        });
      }
      let p = "".concat(18, "ch");
      function f(e) {
        let { renderElement: t, ...n } = e;
        if (1 === n.element.children.length) {
          let e = n.element.children[0];
          if (a.xv.isText(e) && "" === e.text)
            return (0, r.jsx)("span", {
              style: { display: "inline-block", minWidth: p },
              ...n.attributes,
              children: t(n),
            });
        }
        return (0, r.jsx)("span", {
          style: { minWidth: p },
          ...n.attributes,
          children: t(n),
        });
      }
    },
    2074: function (e, t, n) {
      "use strict";
      n.d(t, {
        C: function () {
          return A;
        },
      });
      var r = n(7458),
        a = n(9355),
        i = n(2342),
        s = n(3057);
      let o = [
        { icon: a.MY.Superscript, label: "Superscript", value: "superscript" },
        { icon: a.MY.Subscript, label: "Subscript", value: "subscript" },
        { icon: a.MY.Code, label: "Code", value: "code" },
      ];
      function l(e) {
        return -1 !== o.findIndex((t) => t.value === e);
      }
      function c(e) {
        let t = e[0];
        return i.q.isInline(t) && -1 !== o.findIndex((e) => e.value === t.type);
      }
      var u = n(1025),
        d = n(3797),
        h = n(6003);
      function p(e) {
        return Array.from(
          u.ML.nodes(e, {
            at: (0, d.Mf)(e),
            match: (e) => (i.q.isInline(e) && l(e.type)) || u.xv.isText(e),
          })
        );
      }
      let f = (e) => {
        var t;
        let n = (0, h.Q)(p(e)),
          r = n.every((e) => c(e) || u.xv.isText(e[0]));
        if (!r) return;
        let a = n.filter(c).map((e) => {
            let [t] = e;
            return t;
          }),
          i = a.reduce(
            (e, t) =>
              (null == e ? void 0 : e.type) === (null == t ? void 0 : t.type)
                ? t
                : null,
            null !== (t = a.at(0)) && void 0 !== t ? t : void 0
          );
        return null == i ? i : i.type;
      };
      var m = n(4499),
        E = n(3752);
      let T = (e, t) => {
        if (null == t)
          return void o.forEach((t) => {
            let { value: n } = t;
            return (0, m.f)(e, n);
          });
        if (!l(t)) return;
        let n = (0, h.Q)(p(e)),
          r = n.at(0);
        1 === n.length && null != r && c(r) && r[0].type === t
          ? (0, m.f)(e, t)
          : (u.YR.unwrapNodes(e, {
              match: (e) => i.q.isInline(e),
              at: (0, d.Mf)(e),
            }),
            (0, E.l)(e, { type: t, children: [] }));
      };
      var g = n(7617);
      let _ = (e) => {
        let { isInline: t } = e;
        return (e.isInline = (e) => i.q.isInline(e) && t(e)), e;
      };
      function A() {
        return (0, g.Y)({
          control: {
            definition: (0, a.DG)({ label: "Inline", options: o }),
            onChange: T,
            getValue: f,
            getElementValue: (e) => (i.q.isInline(e) ? e.type : void 0),
          },
          withPlugin: _,
          renderElement: (e) => (t) =>
            (0, r.jsx)(v, { ...t, renderElement: e }),
        });
      }
      function v(e) {
        let { renderElement: t, ...n } = e;
        switch (n.element.type) {
          case s.T5.Code:
            return (0, r.jsx)("code", { ...n.attributes, children: t(n) });
          case s.T5.SuperScript:
            return (0, r.jsx)("sup", { ...n.attributes, children: t(n) });
          case s.T5.SubScript:
            return (0, r.jsx)("sub", { ...n.attributes, children: t(n) });
          default:
            return (0, r.jsx)(r.Fragment, { children: t(n) });
        }
      }
    },
    2304: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return c;
        },
        N: function () {
          return u;
        },
      });
      var r = n(1025),
        a = n(2342),
        i = n(3797),
        s = n(6003),
        o = n(4408),
        l = n(628);
      function c(e) {
        return Array.from(
          r.ML.nodes(e, {
            at: (0, i.Mf)(e),
            match: (e) => (a.q.isInline(e) && (0, o.j)(e)) || r.xv.isText(e),
          })
        );
      }
      let u = (e) => {
        var t;
        let n = (0, s.Q)(c(e)),
          a = n.every((e) => {
            let [t] = e;
            return (0, o.j)(t) || r.xv.isText(t);
          });
        if (!a) return;
        let i = n
            .map((e) => {
              let [t] = e;
              return t;
            })
            .filter(o.j),
          u = i.reduce(
            (e, t) =>
              (0, l.Z)(null == e ? void 0 : e.link, null == t ? void 0 : t.link)
                ? t
                : null,
            null !== (t = i.at(0)) && void 0 !== t ? t : void 0
          );
        return null == u ? u : u.link;
      };
    },
    5038: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return u;
        },
      });
      var r = n(1025),
        a = n(4499),
        i = n(3752),
        s = n(3057),
        o = n(6003),
        l = n(4408),
        c = n(2304);
      let u = (e, t) => {
        if (null == t) return (0, a.f)(e, s.T5.Link);
        let n = (0, o.Q)((0, c.I)(e)),
          u = n.at(0);
        1 === n.length && null != u && (0, l.e)(u)
          ? r.YR.setNodes(e, { link: t }, { at: u[1] })
          : ((0, a.f)(e, s.T5.Link),
            (0, i.l)(e, { type: s.T5.Link, link: t, children: [] }));
      };
    },
    4408: function (e, t, n) {
      "use strict";
      n.d(t, {
        e: function () {
          return s;
        },
        j: function () {
          return i;
        },
      });
      var r = n(2342),
        a = n(3057);
      function i(e) {
        return r.q.isInline(e) && e.type === a.T5.Link;
      }
      function s(e) {
        return r.q.isInline(e[0]) && e[0].type === a.T5.Link;
      }
    },
    7898: function (e, t, n) {
      "use strict";
      n.d(t, {
        k: function () {
          return h;
        },
      });
      var r = n(4658),
        a = n(9355),
        i = n(2342),
        s = n(1025),
        o = n(3797),
        l = n(8627),
        c = n(7617);
      let u = "textAlign",
        d = (e) => {
          let { normalizeNode: t } = e;
          return (
            (e.normalizeNode = (n) => {
              var r;
              ((r = { match: i.q.isRootBlock }),
              (t) => {
                let [n, a] = t;
                if (!r.match(n, a)) return !1;
                let i = null == n ? void 0 : n[u];
                return Array.isArray(i) && 0 === i.length
                  ? (s.YR.unsetNodes(e, u, { at: a }), !0)
                  : (null == n ? void 0 : n.slice) != null &&
                      (s.YR.unsetNodes(e, "slice", { at: a }), !0);
              })(n) || t(n);
            }),
            e
          );
        };
      function h() {
        return (0, c.Y)({
          control: {
            definition: (0, r.XS)({
              type: (0, a.DG)({
                label: "Alignment",
                options: [
                  {
                    icon: a.MY.TextAlignLeft,
                    label: "Left Align",
                    value: "left",
                  },
                  {
                    icon: a.MY.TextAlignCenter,
                    label: "Center Align",
                    value: "center",
                  },
                  {
                    icon: a.MY.TextAlignRight,
                    label: "Right Align",
                    value: "right",
                  },
                  {
                    icon: a.MY.TextAlignJustify,
                    label: "Justify",
                    value: "justify",
                  },
                ],
                defaultValue: "left",
              }),
              getStyle: (e) => ({ textAlign: e }),
            }),
            onChange: (e, t) => {
              var n;
              return (
                (n = { match: i.q.isRootBlock, split: !1 }),
                void s.ML.withoutNormalizing(e, () => {
                  let r = (0, o.Mf)(e);
                  if (!r) return;
                  let a = s.ML.rangeRef(e, r);
                  if (
                    (a.current &&
                      s.YR.setNodes(
                        e,
                        { slice: !0 },
                        { at: a.current, match: n.match, split: n.split }
                      ),
                    a.current)
                  ) {
                    let r = Array.from(
                      s.ML.nodes(e, {
                        at: a.current,
                        match: (e, t) => n.match(e, t) && !0 === e.slice,
                      })
                    );
                    for (let [, n] of r)
                      s.YR.setNodes(e, { [u]: t }, { at: n });
                  }
                  a.unref();
                })
              );
            },
            getValue: (e) =>
              (function (e) {
                let t = Array.from(
                  s.ML.nodes(e, { at: (0, o.Mf)(e), match: i.q.isRootBlock })
                ).map((e) => {
                  let [t] = e;
                  return t.textAlign;
                });
                return 0 === t.length
                  ? void 0
                  : t.reduce((e, t) =>
                      (function () {
                        let e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : [],
                          t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : [],
                          n = e.reduce(
                            (e, t) => ({ ...e, [t.deviceId]: t.value }),
                            {}
                          ),
                          r = t.reduce(
                            (e, t) => ({ ...e, [t.deviceId]: t.value }),
                            {}
                          ),
                          a = new Set([
                            ...e.map((e) => e.deviceId),
                            ...t.map((e) => e.deviceId),
                          ]);
                        return Array.from(a).map((e) => {
                          let t = n[e],
                            a = r[e];
                          return void 0 === t && void 0 === a
                            ? { deviceId: e, value: void 0 }
                            : (0, l.Z)(t, a)
                            ? { deviceId: e, value: t }
                            : { deviceId: e, value: null };
                        });
                      })(e, t)
                    );
              })(e),
            getElementValue: (e) => (i.q.isRootBlock(e) ? e.textAlign : void 0),
          },
          withPlugin: d,
          renderElement: (e, t) => (n) =>
            e({ ...n, element: { ...n.element, className: t } }),
        });
      }
    },
    148: function (e, t, n) {
      "use strict";
      n.d(t, {
        e$: function () {
          return d;
        },
        Mx: function () {
          return p;
        },
        N9: function () {
          return h;
        },
      });
      var r = n(1025);
      n(8358);
      var a = n(3483),
        i = n(3797),
        s = n(7617),
        o = n(324),
        l = n(628),
        c = n(1381);
      function u(e, t) {
        var n, r;
        let a = [
          ...new Set(
            null == e
              ? void 0
              : e.style
                  .map((e) => e.deviceId)
                  .concat(
                    null !==
                      (n =
                        null == t ? void 0 : t.style.map((e) => e.deviceId)) &&
                      void 0 !== n
                      ? n
                      : []
                  )
          ),
        ];
        return {
          id:
            null !== (r = null == e ? void 0 : e.id) && void 0 !== r
              ? r
              : null == t
              ? void 0
              : t.id,
          style: a.map((n) => {
            var r, a;
            let i = null == e ? void 0 : e.style.find((e) => e.deviceId === n),
              s = null == t ? void 0 : t.style.find((e) => e.deviceId === n);
            return {
              deviceId: n,
              value: (0, c.Z)(
                null !== (r = null == s ? void 0 : s.value) && void 0 !== r
                  ? r
                  : {},
                null !== (a = null == i ? void 0 : i.value) && void 0 !== a
                  ? a
                  : {}
              ),
            };
          }),
        };
      }
      let d = "typography";
      function h(e) {
        let { normalizeNode: t } = e;
        return (
          (e.normalizeNode = (n) => {
            var a, i;
            let [s, c] = n;
            if (
              "typography" in s &&
              (null == s
                ? void 0
                : null === (a = s.typography) || void 0 === a
                ? void 0
                : a.id) == null &&
              (null == s
                ? void 0
                : null === (i = s.typography) || void 0 === i
                ? void 0
                : i.style.length) === 0
            ) {
              r.YR.unsetNodes(e, d, { at: c });
              return;
            }
            if ("slice" in s && (null == s ? void 0 : s.slice) != null) {
              r.YR.unsetNodes(e, "slice", { at: c });
              return;
            }
            !(
              (function (e, t) {
                let [n, a] = t;
                if (r.xv.isText(n)) return !1;
                let i = !1;
                for (let t = n.children.length; t > 0; t--) {
                  let n = r.NB.get(e, a);
                  if (r.xv.isText(n)) continue;
                  let s = n.children[t],
                    o = n.children[t - 1];
                  r.xv.isText(s) &&
                    null != o &&
                    r.xv.isText(o) &&
                    (function (e, t) {
                      let { text: n, ...r } = e,
                        { text: a, ...i } = t;
                      return (0, l.Z)(r, i);
                    })(s, o) &&
                    (r.YR.mergeNodes(e, { at: a.concat(t), voids: !0 }),
                    (i = !0));
                }
                return i;
              })(e, n) ||
              ("up" === e.typographyNormalizationDirection &&
                (function (e, t) {
                  let [n, a] = t;
                  if (r.W_.isElement(n) && n.children.length) {
                    let t = n.children
                        .filter((e) => !r.xv.isText(e) || "" !== e.text)
                        .map((e) => e.typography),
                      i = t.filter((e) => Boolean(e));
                    if (t.length === i.length) {
                      let t = (function () {
                        for (
                          var e, t, n = arguments.length, r = Array(n), a = 0;
                          a < n;
                          a++
                        )
                          r[a] = arguments[a];
                        return {
                          id: r.every((e) => {
                            var t;
                            return (
                              (null == e ? void 0 : e.id) ===
                              (null === (t = r.at(0)) || void 0 === t
                                ? void 0
                                : t.id)
                            );
                          })
                            ? null === (e = r.at(0)) || void 0 === e
                              ? void 0
                              : e.id
                            : void 0,
                          style: [
                            ...new Set(
                              r.flatMap((e) =>
                                null !==
                                  (t =
                                    null == e
                                      ? void 0
                                      : e.style.map((e) => e.deviceId)) &&
                                void 0 !== t
                                  ? t
                                  : []
                              )
                            ),
                          ].flatMap((e) => {
                            let t = r
                              .map((t) => {
                                var n;
                                return null ===
                                  (n = t.style.find((t) => t.deviceId === e)) ||
                                  void 0 === n
                                  ? void 0
                                  : n.value;
                              })
                              .filter((e) => Boolean(e));
                            if (r.length !== t.length) return [];
                            let n = t.reduce(
                              (e, t) =>
                                (function (e, t) {
                                  let n = (0, o.Z)(t),
                                    r = { ...e },
                                    a = {};
                                  return (
                                    n.forEach((e) => {
                                      (0, l.Z)(r[e], t[e]) && (a[e] = r[e]);
                                    }),
                                    a
                                  );
                                })(e, t),
                              t.at(0)
                            );
                            return null == n || 0 === Object.keys(n).length
                              ? []
                              : [{ deviceId: e, value: n }];
                          }),
                        };
                      })(...i);
                      if (t.style.length > 0 || null != t.id) {
                        let i = u(t, n.typography);
                        return (
                          r.ML.withoutNormalizing(e, () => {
                            r.YR.setNodes(e, { typography: i }, { at: a });
                            for (let i = 0; i < n.children.length; i++) {
                              var s, c;
                              let u = (function (e, t) {
                                let n = { style: [] };
                                if (
                                  ((null == e ? void 0 : e.id) !== t.id &&
                                    (n.id = null == e ? void 0 : e.id),
                                  e && e.style.length > 0)
                                ) {
                                  let r = [];
                                  for (let n of e.style) {
                                    let e = t.style.find(
                                      (e) => e.deviceId === n.deviceId
                                    );
                                    if (null == e) r.push(n);
                                    else {
                                      let t = (function (e, t) {
                                        let n = Array.from(
                                            new Set([
                                              ...(0, o.Z)(t),
                                              ...(0, o.Z)(e),
                                            ])
                                          ),
                                          r = { ...e },
                                          a = { ...t },
                                          i = {};
                                        return (
                                          n.forEach((e) => {
                                            (0, l.Z)(r[e], a[e]) ||
                                              (i[e] = r[e]);
                                          }),
                                          i
                                        );
                                      })(n.value, e.value);
                                      Object.keys(t).length > 0 &&
                                        r.push({
                                          deviceId: n.deviceId,
                                          value: t,
                                        });
                                    }
                                  }
                                  n.style = r;
                                }
                                return n;
                              })(
                                null !==
                                  (c =
                                    null === (s = n.children.at(i)) ||
                                    void 0 === s
                                      ? void 0
                                      : s.typography) && void 0 !== c
                                  ? c
                                  : { style: [] },
                                t
                              );
                              r.YR.setNodes(
                                e,
                                { typography: u },
                                { at: [...a, i] }
                              );
                            }
                          }),
                          !0
                        );
                      }
                    }
                  }
                  return !1;
                })(e, n))
            ) &&
              ((("down" === e.typographyNormalizationDirection ||
                null == e.typographyNormalizationDirection) &&
                (function (e, t) {
                  let [n, a] = t;
                  return (
                    !!r.W_.isElement(n) &&
                    null != n.typography &&
                    !!n.children.length &&
                    (r.ML.withoutNormalizing(e, () => {
                      r.YR.unsetNodes(e, d, { at: a });
                      for (let i = 0; i < n.children.length; i++) {
                        var t;
                        let s = u(
                          n.typography,
                          null === (t = n.children.at(i)) || void 0 === t
                            ? void 0
                            : t.typography
                        );
                        r.YR.setNodes(e, { typography: s }, { at: [...a, i] });
                      }
                    }),
                    !0)
                  );
                })(e, n)) ||
                t(n));
          }),
          e
        );
      }
      function p() {
        return (0, s.Y)({
          withPlugin: h,
          control: {
            definition: (0, a.Rf)(),
            onChange: (e, t) => {
              r.ML.withoutNormalizing(e, () => {
                let n = (0, i.Mf)(e);
                if (!n) return;
                let a = r.ML.rangeRef(e, n);
                if (
                  (a.current &&
                    r.YR.setNodes(
                      e,
                      { slice: !0 },
                      { at: a.current, match: r.xv.isText, split: !0 }
                    ),
                  a.current)
                ) {
                  let n = Array.from(
                    r.ML.nodes(e, {
                      at: a.current,
                      match: (e) => r.xv.isText(e) && !0 === e.slice,
                    })
                  );
                  if (n.length !== (null == t ? void 0 : t.length))
                    return console.error(
                      "TypographyControl.onChange received the wrong number of arguments.\nCalled with "
                        .concat(
                          null == t ? void 0 : t.length,
                          " values mapping to "
                        )
                        .concat(n.length, " nodes.")
                    );
                  for (let [a, [, i]] of n.entries())
                    r.YR.setNodes(
                      e,
                      { typography: null == t ? void 0 : t.at(a) },
                      { at: i, match: r.xv.isText }
                    );
                }
                a.unref();
              });
            },
            getValue: (e) =>
              (function (e) {
                let t = Array.from(
                  r.ML.nodes(e, { at: (0, i.Mf)(e), match: r.xv.isText })
                ).map((e) => {
                  let [t] = e;
                  return t.typography;
                });
                return t;
              })(e),
            getLeafValue: (e) => (r.xv.isText(e) ? e.typography : void 0),
          },
          renderLeaf: (e, t) => (n) =>
            e({
              ...n,
              leaf: {
                ...n.leaf,
                className: "".concat(n.leaf.className, " ").concat(t),
              },
            }),
        });
      }
    },
    3797: function (e, t, n) {
      "use strict";
      n.d(t, {
        Lw: function () {
          return l;
        },
        Xn: function () {
          return o;
        },
        Mf: function () {
          return s;
        },
      });
      var r = n(1025),
        a = n(2342),
        i = function (e, t) {
          let [n, a] = r.e6.edges(t);
          if (0 !== n.offset || 0 !== a.offset || r.e6.isCollapsed(t)) return t;
          let i = r.ML.above(e, {
              at: a,
              match: (t) => r.W_.isElement(t) && r.ML.isBlock(e, t),
            }),
            s = i ? i[1] : [],
            o = r.ML.start(e, n),
            l = { anchor: o, focus: a },
            c = !0;
          for (let [t, n] of r.ML.nodes(e, {
            at: l,
            match: r.xv.isText,
            reverse: !0,
          })) {
            if (c) {
              c = !1;
              continue;
            }
            if ("" !== t.text || r.y$.isBefore(n, s)) {
              a = { path: n, offset: t.text.length };
              break;
            }
          }
          return { anchor: n, focus: a };
        };
      function s(e) {
        return e.selection
          ? i(e, e.selection)
          : { anchor: r.ML.start(e, []), focus: r.ML.end(e, []) };
      }
      function o(e) {
        return Array.from(
          r.ML.nodes(e, { at: s(e), match: (e) => a.q.isRootBlock(e) })
        ).filter((e) => a.q.isRootBlock(e[0]));
      }
      function l(e) {
        var t;
        let n = o(e).map((e) => {
          let [t] = e;
          return t.type;
        });
        return n.reduce(
          (e, t) => (e === t ? t : null),
          null !== (t = n.at(0)) && void 0 !== t ? t : null
        );
      }
    },
    3057: function (e, t, n) {
      "use strict";
      n.d(t, {
        OT: function () {
          return r;
        },
        T5: function () {
          return i;
        },
        kH: function () {
          return a;
        },
      });
      let r = {
          Default: "default",
          Paragraph: "paragraph",
          Heading1: "heading-one",
          Heading2: "heading-two",
          Heading3: "heading-three",
          Heading4: "heading-four",
          Heading5: "heading-five",
          Heading6: "heading-six",
          BlockQuote: "blockquote",
          UnorderedList: "unordered-list",
          OrderedList: "ordered-list",
        },
        a = { ...r, ListItem: "list-item", ListItemChild: "list-item-child" },
        i = {
          Code: "code",
          SuperScript: "superscript",
          SubScript: "subscript",
          Link: "link",
        };
    },
    2342: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return i;
        },
      });
      var r = n(1025),
        a = n(3057);
      let i = {
        isRootBlock: (e) =>
          r.W_.isElement(e) &&
          (r.W_.isElementType(e, a.kH.Paragraph) ||
            r.W_.isElementType(e, a.kH.Heading1) ||
            r.W_.isElementType(e, a.kH.Heading2) ||
            r.W_.isElementType(e, a.kH.Heading3) ||
            r.W_.isElementType(e, a.kH.Heading3) ||
            r.W_.isElementType(e, a.kH.Heading4) ||
            r.W_.isElementType(e, a.kH.Heading5) ||
            r.W_.isElementType(e, a.kH.Heading6) ||
            r.W_.isElementType(e, a.kH.BlockQuote) ||
            r.W_.isElementType(e, a.kH.UnorderedList) ||
            r.W_.isElementType(e, a.kH.OrderedList) ||
            r.W_.isElementType(e, a.kH.Default)),
        isBlock(e) {
          return (
            r.W_.isElement(e) &&
            (this.isRootBlock(e) ||
              r.W_.isElementType(e, a.kH.ListItem) ||
              r.W_.isElementType(e, a.kH.ListItemChild))
          );
        },
        isInline: (e) =>
          r.W_.isElement(e) &&
          (r.W_.isElementType(e, a.T5.Code) ||
            r.W_.isElementType(e, a.T5.Link) ||
            r.W_.isElementType(e, a.T5.SubScript) ||
            r.W_.isElementType(e, a.T5.SuperScript)),
        isConvertibleToListTextNode(e) {
          return (
            !this.isList(e) && !this.isListItem(e) && !this.isListItemChild(e)
          );
        },
        isList: (e) =>
          r.W_.isElementType(e, a.kH.OrderedList) ||
          r.W_.isElementType(e, a.kH.UnorderedList),
        isListItem: (e) => r.W_.isElementType(e, a.kH.ListItem),
        isListItemChild: (e) => r.W_.isElementType(e, a.kH.ListItemChild),
        createText: () => ({ text: "" }),
        createParagraph() {
          return { children: [this.createText()], type: a.kH.Paragraph };
        },
        createList() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : a.kH.UnorderedList;
          return { children: [this.createText()], type: e };
        },
        createListItem() {
          return {
            children: [this.createListItemChild()],
            type: a.kH.ListItem,
          };
        },
        createListItemChild() {
          return { children: [this.createText()], type: a.kH.ListItemChild };
        },
      };
    },
    5900: function (e, t, n) {
      "use strict";
      n.d(t, {
        MF: function () {
          return ta;
        },
        ng: function () {
          return ty;
        },
        VI: function () {
          return tm;
        },
        m1: function () {
          return tf;
        },
        he: function () {
          return tC;
        },
        C9: function () {
          return tN;
        },
        Lv: function () {
          return tI;
        },
        Qi: function () {
          return tb;
        },
        rY: function () {
          return tv;
        },
        pB: function () {
          return t_;
        },
        Vu: function () {
          return tu;
        },
        rr: function () {
          return to;
        },
        X1: function () {
          return ts;
        },
        Hi: function () {
          return td;
        },
        xz: function () {
          return ti;
        },
        Y4: function () {
          return th;
        },
        fL: function () {
          return tT;
        },
        se: function () {
          return tE;
        },
        _R: function () {
          return tc;
        },
        Jp: function () {
          return tS;
        },
        _7: function () {
          return tA;
        },
        i_: function () {
          return tR;
        },
        vB: function () {
          return tl;
        },
        FS: function () {
          return tp;
        },
        dq: function () {
          return tg;
        },
      }),
        ((e5 = e8 || (e8 = {})).assertEqual = (e) => e),
        (e5.assertIs = function (e) {}),
        (e5.assertNever = function (e) {
          throw Error();
        }),
        (e5.arrayToEnum = (e) => {
          let t = {};
          for (let n of e) t[n] = n;
          return t;
        }),
        (e5.getValidEnumValues = (e) => {
          let t = e5.objectKeys(e).filter((t) => "number" != typeof e[e[t]]),
            n = {};
          for (let r of t) n[r] = e[r];
          return e5.objectValues(n);
        }),
        (e5.objectValues = (e) =>
          e5.objectKeys(e).map(function (t) {
            return e[t];
          })),
        (e5.objectKeys =
          "function" == typeof Object.keys
            ? (e) => Object.keys(e)
            : (e) => {
                let t = [];
                for (let n in e)
                  Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                return t;
              }),
        (e5.find = (e, t) => {
          for (let n of e) if (t(n)) return n;
        }),
        (e5.isInteger =
          "function" == typeof Number.isInteger
            ? (e) => Number.isInteger(e)
            : (e) =>
                "number" == typeof e && isFinite(e) && Math.floor(e) === e),
        (e5.joinValues = function (e, t = " | ") {
          return e.map((e) => ("string" == typeof e ? `'${e}'` : e)).join(t);
        }),
        (e5.jsonStringifyReplacer = (e, t) =>
          "bigint" == typeof t ? t.toString() : t),
        ((e6 || (e6 = {})).mergeShapes = (e, t) => ({ ...e, ...t }));
      let r = e8.arrayToEnum([
          "string",
          "nan",
          "number",
          "integer",
          "float",
          "boolean",
          "date",
          "bigint",
          "symbol",
          "function",
          "undefined",
          "null",
          "array",
          "object",
          "unknown",
          "promise",
          "void",
          "never",
          "map",
          "set",
        ]),
        a = (e) => {
          switch (typeof e) {
            case "undefined":
              return r.undefined;
            case "string":
              return r.string;
            case "number":
              return isNaN(e) ? r.nan : r.number;
            case "boolean":
              return r.boolean;
            case "function":
              return r.function;
            case "bigint":
              return r.bigint;
            case "symbol":
              return r.symbol;
            case "object":
              if (Array.isArray(e)) return r.array;
              if (null === e) return r.null;
              if (
                e.then &&
                "function" == typeof e.then &&
                e.catch &&
                "function" == typeof e.catch
              )
                return r.promise;
              if ("undefined" != typeof Map && e instanceof Map) return r.map;
              if ("undefined" != typeof Set && e instanceof Set) return r.set;
              if ("undefined" != typeof Date && e instanceof Date)
                return r.date;
              return r.object;
            default:
              return r.unknown;
          }
        },
        i = e8.arrayToEnum([
          "invalid_type",
          "invalid_literal",
          "custom",
          "invalid_union",
          "invalid_union_discriminator",
          "invalid_enum_value",
          "unrecognized_keys",
          "invalid_arguments",
          "invalid_return_type",
          "invalid_date",
          "invalid_string",
          "too_small",
          "too_big",
          "invalid_intersection_types",
          "not_multiple_of",
          "not_finite",
        ]),
        s = (e) => {
          let t = JSON.stringify(e, null, 2);
          return t.replace(/"([^"]+)":/g, "$1:");
        };
      class o extends Error {
        constructor(e) {
          super(),
            (this.issues = []),
            (this.addIssue = (e) => {
              this.issues = [...this.issues, e];
            }),
            (this.addIssues = (e = []) => {
              this.issues = [...this.issues, ...e];
            });
          let t = new.target.prototype;
          Object.setPrototypeOf
            ? Object.setPrototypeOf(this, t)
            : (this.__proto__ = t),
            (this.name = "ZodError"),
            (this.issues = e);
        }
        get errors() {
          return this.issues;
        }
        format(e) {
          let t =
              e ||
              function (e) {
                return e.message;
              },
            n = { _errors: [] },
            r = (e) => {
              for (let a of e.issues)
                if ("invalid_union" === a.code) a.unionErrors.map(r);
                else if ("invalid_return_type" === a.code) r(a.returnTypeError);
                else if ("invalid_arguments" === a.code) r(a.argumentsError);
                else if (0 === a.path.length) n._errors.push(t(a));
                else {
                  let e = n,
                    r = 0;
                  for (; r < a.path.length; ) {
                    let n = a.path[r],
                      i = r === a.path.length - 1;
                    i
                      ? ((e[n] = e[n] || { _errors: [] }),
                        e[n]._errors.push(t(a)))
                      : (e[n] = e[n] || { _errors: [] }),
                      (e = e[n]),
                      r++;
                  }
                }
            };
          return r(this), n;
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, e8.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
          return 0 === this.issues.length;
        }
        flatten(e = (e) => e.message) {
          let t = {},
            n = [];
          for (let r of this.issues)
            r.path.length > 0
              ? ((t[r.path[0]] = t[r.path[0]] || []), t[r.path[0]].push(e(r)))
              : n.push(e(r));
          return { formErrors: n, fieldErrors: t };
        }
        get formErrors() {
          return this.flatten();
        }
      }
      o.create = (e) => {
        let t = new o(e);
        return t;
      };
      let l = (e, t) => {
          let n;
          switch (e.code) {
            case i.invalid_type:
              n =
                e.received === r.undefined
                  ? "Required"
                  : `Expected ${e.expected}, received ${e.received}`;
              break;
            case i.invalid_literal:
              n = `Invalid literal value, expected ${JSON.stringify(
                e.expected,
                e8.jsonStringifyReplacer
              )}`;
              break;
            case i.unrecognized_keys:
              n = `Unrecognized key(s) in object: ${e8.joinValues(
                e.keys,
                ", "
              )}`;
              break;
            case i.invalid_union:
              n = "Invalid input";
              break;
            case i.invalid_union_discriminator:
              n = `Invalid discriminator value. Expected ${e8.joinValues(
                e.options
              )}`;
              break;
            case i.invalid_enum_value:
              n = `Invalid enum value. Expected ${e8.joinValues(
                e.options
              )}, received '${e.received}'`;
              break;
            case i.invalid_arguments:
              n = "Invalid function arguments";
              break;
            case i.invalid_return_type:
              n = "Invalid function return type";
              break;
            case i.invalid_date:
              n = "Invalid date";
              break;
            case i.invalid_string:
              "object" == typeof e.validation
                ? "includes" in e.validation
                  ? ((n = `Invalid input: must include "${e.validation.includes}"`),
                    "number" == typeof e.validation.position &&
                      (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
                  : "startsWith" in e.validation
                  ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
                  : "endsWith" in e.validation
                  ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
                  : e8.assertNever(e.validation)
                : (n =
                    "regex" !== e.validation
                      ? `Invalid ${e.validation}`
                      : "Invalid");
              break;
            case i.too_small:
              n =
                "array" === e.type
                  ? `Array must contain ${
                      e.exact
                        ? "exactly"
                        : e.inclusive
                        ? "at least"
                        : "more than"
                    } ${e.minimum} element(s)`
                  : "string" === e.type
                  ? `String must contain ${
                      e.exact ? "exactly" : e.inclusive ? "at least" : "over"
                    } ${e.minimum} character(s)`
                  : "number" === e.type
                  ? `Number must be ${
                      e.exact
                        ? "exactly equal to "
                        : e.inclusive
                        ? "greater than or equal to "
                        : "greater than "
                    }${e.minimum}`
                  : "date" === e.type
                  ? `Date must be ${
                      e.exact
                        ? "exactly equal to "
                        : e.inclusive
                        ? "greater than or equal to "
                        : "greater than "
                    }${new Date(Number(e.minimum))}`
                  : "Invalid input";
              break;
            case i.too_big:
              n =
                "array" === e.type
                  ? `Array must contain ${
                      e.exact
                        ? "exactly"
                        : e.inclusive
                        ? "at most"
                        : "less than"
                    } ${e.maximum} element(s)`
                  : "string" === e.type
                  ? `String must contain ${
                      e.exact ? "exactly" : e.inclusive ? "at most" : "under"
                    } ${e.maximum} character(s)`
                  : "number" === e.type
                  ? `Number must be ${
                      e.exact
                        ? "exactly"
                        : e.inclusive
                        ? "less than or equal to"
                        : "less than"
                    } ${e.maximum}`
                  : "bigint" === e.type
                  ? `BigInt must be ${
                      e.exact
                        ? "exactly"
                        : e.inclusive
                        ? "less than or equal to"
                        : "less than"
                    } ${e.maximum}`
                  : "date" === e.type
                  ? `Date must be ${
                      e.exact
                        ? "exactly"
                        : e.inclusive
                        ? "smaller than or equal to"
                        : "smaller than"
                    } ${new Date(Number(e.maximum))}`
                  : "Invalid input";
              break;
            case i.custom:
              n = "Invalid input";
              break;
            case i.invalid_intersection_types:
              n = "Intersection results could not be merged";
              break;
            case i.not_multiple_of:
              n = `Number must be a multiple of ${e.multipleOf}`;
              break;
            case i.not_finite:
              n = "Number must be finite";
              break;
            default:
              (n = t.defaultError), e8.assertNever(e);
          }
          return { message: n };
        },
        c = l,
        u = (e) => {
          let { data: t, path: n, errorMaps: r, issueData: a } = e,
            i = [...n, ...(a.path || [])],
            s = { ...a, path: i },
            o = "",
            l = r
              .filter((e) => !!e)
              .slice()
              .reverse();
          for (let e of l) o = e(s, { data: t, defaultError: o }).message;
          return { ...a, path: i, message: a.message || o };
        };
      function d(e, t) {
        let n = u({
          issueData: t,
          data: e.data,
          path: e.path,
          errorMaps: [
            e.common.contextualErrorMap,
            e.schemaErrorMap,
            c,
            l,
          ].filter((e) => !!e),
        });
        e.common.issues.push(n);
      }
      class h {
        constructor() {
          this.value = "valid";
        }
        dirty() {
          "valid" === this.value && (this.value = "dirty");
        }
        abort() {
          "aborted" !== this.value && (this.value = "aborted");
        }
        static mergeArray(e, t) {
          let n = [];
          for (let r of t) {
            if ("aborted" === r.status) return p;
            "dirty" === r.status && e.dirty(), n.push(r.value);
          }
          return { status: e.value, value: n };
        }
        static async mergeObjectAsync(e, t) {
          let n = [];
          for (let e of t) n.push({ key: await e.key, value: await e.value });
          return h.mergeObjectSync(e, n);
        }
        static mergeObjectSync(e, t) {
          let n = {};
          for (let r of t) {
            let { key: t, value: a } = r;
            if ("aborted" === t.status || "aborted" === a.status) return p;
            "dirty" === t.status && e.dirty(),
              "dirty" === a.status && e.dirty(),
              (void 0 !== a.value || r.alwaysSet) && (n[t.value] = a.value);
          }
          return { status: e.value, value: n };
        }
      }
      let p = Object.freeze({ status: "aborted" }),
        f = (e) => ({ status: "dirty", value: e }),
        m = (e) => ({ status: "valid", value: e }),
        E = (e) => "aborted" === e.status,
        T = (e) => "dirty" === e.status,
        g = (e) => "valid" === e.status,
        _ = (e) => "undefined" != typeof Promise && e instanceof Promise;
      ((e3 = e9 || (e9 = {})).errToObj = (e) =>
        "string" == typeof e ? { message: e } : e || {}),
        (e3.toString = (e) =>
          "string" == typeof e ? e : null == e ? void 0 : e.message);
      class A {
        constructor(e, t, n, r) {
          (this._cachedPath = []),
            (this.parent = e),
            (this.data = t),
            (this._path = n),
            (this._key = r);
        }
        get path() {
          return (
            this._cachedPath.length ||
              (this._key instanceof Array
                ? this._cachedPath.push(...this._path, ...this._key)
                : this._cachedPath.push(...this._path, this._key)),
            this._cachedPath
          );
        }
      }
      let v = (e, t) => {
        if (g(t)) return { success: !0, data: t.value };
        if (!e.common.issues.length)
          throw Error("Validation failed but no issues detected.");
        return {
          success: !1,
          get error() {
            if (this._error) return this._error;
            let t = new o(e.common.issues);
            return (this._error = t), this._error;
          },
        };
      };
      function b(e) {
        if (!e) return {};
        let {
          errorMap: t,
          invalid_type_error: n,
          required_error: r,
          description: a,
        } = e;
        if (t && (n || r))
          throw Error(
            'Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.'
          );
        if (t) return { errorMap: t, description: a };
        let i = (e, t) =>
          "invalid_type" !== e.code
            ? { message: t.defaultError }
            : void 0 === t.data
            ? { message: null != r ? r : t.defaultError }
            : { message: null != n ? n : t.defaultError };
        return { errorMap: i, description: a };
      }
      class y {
        constructor(e) {
          (this.spa = this.safeParseAsync),
            (this._def = e),
            (this.parse = this.parse.bind(this)),
            (this.safeParse = this.safeParse.bind(this)),
            (this.parseAsync = this.parseAsync.bind(this)),
            (this.safeParseAsync = this.safeParseAsync.bind(this)),
            (this.spa = this.spa.bind(this)),
            (this.refine = this.refine.bind(this)),
            (this.refinement = this.refinement.bind(this)),
            (this.superRefine = this.superRefine.bind(this)),
            (this.optional = this.optional.bind(this)),
            (this.nullable = this.nullable.bind(this)),
            (this.nullish = this.nullish.bind(this)),
            (this.array = this.array.bind(this)),
            (this.promise = this.promise.bind(this)),
            (this.or = this.or.bind(this)),
            (this.and = this.and.bind(this)),
            (this.transform = this.transform.bind(this)),
            (this.brand = this.brand.bind(this)),
            (this.default = this.default.bind(this)),
            (this.catch = this.catch.bind(this)),
            (this.describe = this.describe.bind(this)),
            (this.pipe = this.pipe.bind(this)),
            (this.isNullable = this.isNullable.bind(this)),
            (this.isOptional = this.isOptional.bind(this));
        }
        get description() {
          return this._def.description;
        }
        _getType(e) {
          return a(e.data);
        }
        _getOrReturnCtx(e, t) {
          return (
            t || {
              common: e.parent.common,
              data: e.data,
              parsedType: a(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            }
          );
        }
        _processInputParams(e) {
          return {
            status: new h(),
            ctx: {
              common: e.parent.common,
              data: e.data,
              parsedType: a(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            },
          };
        }
        _parseSync(e) {
          let t = this._parse(e);
          if (_(t)) throw Error("Synchronous parse encountered promise.");
          return t;
        }
        _parseAsync(e) {
          let t = this._parse(e);
          return Promise.resolve(t);
        }
        parse(e, t) {
          let n = this.safeParse(e, t);
          if (n.success) return n.data;
          throw n.error;
        }
        safeParse(e, t) {
          var n;
          let r = {
              common: {
                issues: [],
                async:
                  null !== (n = null == t ? void 0 : t.async) &&
                  void 0 !== n &&
                  n,
                contextualErrorMap: null == t ? void 0 : t.errorMap,
              },
              path: (null == t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: a(e),
            },
            i = this._parseSync({ data: e, path: r.path, parent: r });
          return v(r, i);
        }
        async parseAsync(e, t) {
          let n = await this.safeParseAsync(e, t);
          if (n.success) return n.data;
          throw n.error;
        }
        async safeParseAsync(e, t) {
          let n = {
              common: {
                issues: [],
                contextualErrorMap: null == t ? void 0 : t.errorMap,
                async: !0,
              },
              path: (null == t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: a(e),
            },
            r = this._parse({ data: e, path: n.path, parent: n }),
            i = await (_(r) ? r : Promise.resolve(r));
          return v(n, i);
        }
        refine(e, t) {
          let n = (e) =>
            "string" == typeof t || void 0 === t
              ? { message: t }
              : "function" == typeof t
              ? t(e)
              : t;
          return this._refinement((t, r) => {
            let a = e(t),
              s = () => r.addIssue({ code: i.custom, ...n(t) });
            return "undefined" != typeof Promise && a instanceof Promise
              ? a.then((e) => !!e || (s(), !1))
              : !!a || (s(), !1);
          });
        }
        refinement(e, t) {
          return this._refinement(
            (n, r) =>
              !!e(n) || (r.addIssue("function" == typeof t ? t(n, r) : t), !1)
          );
        }
        _refinement(e) {
          return new el({
            schema: this,
            typeName: e7.ZodEffects,
            effect: { type: "refinement", refinement: e },
          });
        }
        superRefine(e) {
          return this._refinement(e);
        }
        optional() {
          return ec.create(this, this._def);
        }
        nullable() {
          return eu.create(this, this._def);
        }
        nullish() {
          return this.nullable().optional();
        }
        array() {
          return Z.create(this, this._def);
        }
        promise() {
          return eo.create(this, this._def);
        }
        or(e) {
          return q.create([this, e], this._def);
        }
        and(e) {
          return Q.create(this, e, this._def);
        }
        transform(e) {
          return new el({
            ...b(this._def),
            schema: this,
            typeName: e7.ZodEffects,
            effect: { type: "transform", transform: e },
          });
        }
        default(e) {
          return new ed({
            ...b(this._def),
            innerType: this,
            defaultValue: "function" == typeof e ? e : () => e,
            typeName: e7.ZodDefault,
          });
        }
        brand() {
          return new em({
            typeName: e7.ZodBranded,
            type: this,
            ...b(this._def),
          });
        }
        catch(e) {
          return new eh({
            ...b(this._def),
            innerType: this,
            catchValue: "function" == typeof e ? e : () => e,
            typeName: e7.ZodCatch,
          });
        }
        describe(e) {
          let t = this.constructor;
          return new t({ ...this._def, description: e });
        }
        pipe(e) {
          return eE.create(this, e);
        }
        isOptional() {
          return this.safeParse(void 0).success;
        }
        isNullable() {
          return this.safeParse(null).success;
        }
      }
      let N = /^c[^\s-]{8,}$/i,
        C = /^[a-z][a-z0-9]*$/,
        I = /[0-9A-HJKMNP-TV-Z]{26}/,
        S =
          /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,
        R =
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,
        O = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,
        k =
          /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
        x =
          /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
        L = (e) =>
          e.precision
            ? e.offset
              ? RegExp(
                  `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`
                )
              : RegExp(
                  `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`
                )
            : 0 === e.precision
            ? e.offset
              ? RegExp(
                  "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"
                )
              : RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$")
            : e.offset
            ? RegExp(
                "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"
              )
            : RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
      class D extends y {
        constructor() {
          super(...arguments),
            (this._regex = (e, t, n) =>
              this.refinement((t) => e.test(t), {
                validation: t,
                code: i.invalid_string,
                ...e9.errToObj(n),
              })),
            (this.nonempty = (e) => this.min(1, e9.errToObj(e))),
            (this.trim = () =>
              new D({
                ...this._def,
                checks: [...this._def.checks, { kind: "trim" }],
              })),
            (this.toLowerCase = () =>
              new D({
                ...this._def,
                checks: [...this._def.checks, { kind: "toLowerCase" }],
              })),
            (this.toUpperCase = () =>
              new D({
                ...this._def,
                checks: [...this._def.checks, { kind: "toUpperCase" }],
              }));
        }
        _parse(e) {
          let t;
          this._def.coerce && (e.data = String(e.data));
          let n = this._getType(e);
          if (n !== r.string) {
            let t = this._getOrReturnCtx(e);
            return (
              d(t, {
                code: i.invalid_type,
                expected: r.string,
                received: t.parsedType,
              }),
              p
            );
          }
          let a = new h();
          for (let n of this._def.checks)
            if ("min" === n.kind)
              e.data.length < n.value &&
                (d((t = this._getOrReturnCtx(e, t)), {
                  code: i.too_small,
                  minimum: n.value,
                  type: "string",
                  inclusive: !0,
                  exact: !1,
                  message: n.message,
                }),
                a.dirty());
            else if ("max" === n.kind)
              e.data.length > n.value &&
                (d((t = this._getOrReturnCtx(e, t)), {
                  code: i.too_big,
                  maximum: n.value,
                  type: "string",
                  inclusive: !0,
                  exact: !1,
                  message: n.message,
                }),
                a.dirty());
            else if ("length" === n.kind) {
              let r = e.data.length > n.value,
                s = e.data.length < n.value;
              (r || s) &&
                ((t = this._getOrReturnCtx(e, t)),
                r
                  ? d(t, {
                      code: i.too_big,
                      maximum: n.value,
                      type: "string",
                      inclusive: !0,
                      exact: !0,
                      message: n.message,
                    })
                  : s &&
                    d(t, {
                      code: i.too_small,
                      minimum: n.value,
                      type: "string",
                      inclusive: !0,
                      exact: !0,
                      message: n.message,
                    }),
                a.dirty());
            } else if ("email" === n.kind)
              R.test(e.data) ||
                (d((t = this._getOrReturnCtx(e, t)), {
                  validation: "email",
                  code: i.invalid_string,
                  message: n.message,
                }),
                a.dirty());
            else if ("emoji" === n.kind)
              O.test(e.data) ||
                (d((t = this._getOrReturnCtx(e, t)), {
                  validation: "emoji",
                  code: i.invalid_string,
                  message: n.message,
                }),
                a.dirty());
            else if ("uuid" === n.kind)
              S.test(e.data) ||
                (d((t = this._getOrReturnCtx(e, t)), {
                  validation: "uuid",
                  code: i.invalid_string,
                  message: n.message,
                }),
                a.dirty());
            else if ("cuid" === n.kind)
              N.test(e.data) ||
                (d((t = this._getOrReturnCtx(e, t)), {
                  validation: "cuid",
                  code: i.invalid_string,
                  message: n.message,
                }),
                a.dirty());
            else if ("cuid2" === n.kind)
              C.test(e.data) ||
                (d((t = this._getOrReturnCtx(e, t)), {
                  validation: "cuid2",
                  code: i.invalid_string,
                  message: n.message,
                }),
                a.dirty());
            else if ("ulid" === n.kind)
              I.test(e.data) ||
                (d((t = this._getOrReturnCtx(e, t)), {
                  validation: "ulid",
                  code: i.invalid_string,
                  message: n.message,
                }),
                a.dirty());
            else if ("url" === n.kind)
              try {
                new URL(e.data);
              } catch (r) {
                d((t = this._getOrReturnCtx(e, t)), {
                  validation: "url",
                  code: i.invalid_string,
                  message: n.message,
                }),
                  a.dirty();
              }
            else if ("regex" === n.kind) {
              n.regex.lastIndex = 0;
              let r = n.regex.test(e.data);
              r ||
                (d((t = this._getOrReturnCtx(e, t)), {
                  validation: "regex",
                  code: i.invalid_string,
                  message: n.message,
                }),
                a.dirty());
            } else if ("trim" === n.kind) e.data = e.data.trim();
            else if ("includes" === n.kind)
              e.data.includes(n.value, n.position) ||
                (d((t = this._getOrReturnCtx(e, t)), {
                  code: i.invalid_string,
                  validation: { includes: n.value, position: n.position },
                  message: n.message,
                }),
                a.dirty());
            else if ("toLowerCase" === n.kind) e.data = e.data.toLowerCase();
            else if ("toUpperCase" === n.kind) e.data = e.data.toUpperCase();
            else if ("startsWith" === n.kind)
              e.data.startsWith(n.value) ||
                (d((t = this._getOrReturnCtx(e, t)), {
                  code: i.invalid_string,
                  validation: { startsWith: n.value },
                  message: n.message,
                }),
                a.dirty());
            else if ("endsWith" === n.kind)
              e.data.endsWith(n.value) ||
                (d((t = this._getOrReturnCtx(e, t)), {
                  code: i.invalid_string,
                  validation: { endsWith: n.value },
                  message: n.message,
                }),
                a.dirty());
            else if ("datetime" === n.kind) {
              let r = L(n);
              r.test(e.data) ||
                (d((t = this._getOrReturnCtx(e, t)), {
                  code: i.invalid_string,
                  validation: "datetime",
                  message: n.message,
                }),
                a.dirty());
            } else if ("ip" === n.kind) {
              var s, o;
              (s = e.data),
                (("v4" === (o = n.version) || !o) && k.test(s)) ||
                  (("v6" === o || !o) && x.test(s)) ||
                  (d((t = this._getOrReturnCtx(e, t)), {
                    validation: "ip",
                    code: i.invalid_string,
                    message: n.message,
                  }),
                  a.dirty());
            } else e8.assertNever(n);
          return { status: a.value, value: e.data };
        }
        _addCheck(e) {
          return new D({ ...this._def, checks: [...this._def.checks, e] });
        }
        email(e) {
          return this._addCheck({ kind: "email", ...e9.errToObj(e) });
        }
        url(e) {
          return this._addCheck({ kind: "url", ...e9.errToObj(e) });
        }
        emoji(e) {
          return this._addCheck({ kind: "emoji", ...e9.errToObj(e) });
        }
        uuid(e) {
          return this._addCheck({ kind: "uuid", ...e9.errToObj(e) });
        }
        cuid(e) {
          return this._addCheck({ kind: "cuid", ...e9.errToObj(e) });
        }
        cuid2(e) {
          return this._addCheck({ kind: "cuid2", ...e9.errToObj(e) });
        }
        ulid(e) {
          return this._addCheck({ kind: "ulid", ...e9.errToObj(e) });
        }
        ip(e) {
          return this._addCheck({ kind: "ip", ...e9.errToObj(e) });
        }
        datetime(e) {
          var t;
          return "string" == typeof e
            ? this._addCheck({
                kind: "datetime",
                precision: null,
                offset: !1,
                message: e,
              })
            : this._addCheck({
                kind: "datetime",
                precision:
                  void 0 === (null == e ? void 0 : e.precision)
                    ? null
                    : null == e
                    ? void 0
                    : e.precision,
                offset:
                  null !== (t = null == e ? void 0 : e.offset) &&
                  void 0 !== t &&
                  t,
                ...e9.errToObj(null == e ? void 0 : e.message),
              });
        }
        regex(e, t) {
          return this._addCheck({ kind: "regex", regex: e, ...e9.errToObj(t) });
        }
        includes(e, t) {
          return this._addCheck({
            kind: "includes",
            value: e,
            position: null == t ? void 0 : t.position,
            ...e9.errToObj(null == t ? void 0 : t.message),
          });
        }
        startsWith(e, t) {
          return this._addCheck({
            kind: "startsWith",
            value: e,
            ...e9.errToObj(t),
          });
        }
        endsWith(e, t) {
          return this._addCheck({
            kind: "endsWith",
            value: e,
            ...e9.errToObj(t),
          });
        }
        min(e, t) {
          return this._addCheck({ kind: "min", value: e, ...e9.errToObj(t) });
        }
        max(e, t) {
          return this._addCheck({ kind: "max", value: e, ...e9.errToObj(t) });
        }
        length(e, t) {
          return this._addCheck({
            kind: "length",
            value: e,
            ...e9.errToObj(t),
          });
        }
        get isDatetime() {
          return !!this._def.checks.find((e) => "datetime" === e.kind);
        }
        get isEmail() {
          return !!this._def.checks.find((e) => "email" === e.kind);
        }
        get isURL() {
          return !!this._def.checks.find((e) => "url" === e.kind);
        }
        get isEmoji() {
          return !!this._def.checks.find((e) => "emoji" === e.kind);
        }
        get isUUID() {
          return !!this._def.checks.find((e) => "uuid" === e.kind);
        }
        get isCUID() {
          return !!this._def.checks.find((e) => "cuid" === e.kind);
        }
        get isCUID2() {
          return !!this._def.checks.find((e) => "cuid2" === e.kind);
        }
        get isULID() {
          return !!this._def.checks.find((e) => "ulid" === e.kind);
        }
        get isIP() {
          return !!this._def.checks.find((e) => "ip" === e.kind);
        }
        get minLength() {
          let e = null;
          for (let t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxLength() {
          let e = null;
          for (let t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
      }
      D.create = (e) => {
        var t;
        return new D({
          checks: [],
          typeName: e7.ZodString,
          coerce:
            null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
          ...b(e),
        });
      };
      class M extends y {
        constructor() {
          super(...arguments),
            (this.min = this.gte),
            (this.max = this.lte),
            (this.step = this.multipleOf);
        }
        _parse(e) {
          let t;
          this._def.coerce && (e.data = Number(e.data));
          let n = this._getType(e);
          if (n !== r.number) {
            let t = this._getOrReturnCtx(e);
            return (
              d(t, {
                code: i.invalid_type,
                expected: r.number,
                received: t.parsedType,
              }),
              p
            );
          }
          let a = new h();
          for (let n of this._def.checks)
            if ("int" === n.kind)
              e8.isInteger(e.data) ||
                (d((t = this._getOrReturnCtx(e, t)), {
                  code: i.invalid_type,
                  expected: "integer",
                  received: "float",
                  message: n.message,
                }),
                a.dirty());
            else if ("min" === n.kind) {
              let r = n.inclusive ? e.data < n.value : e.data <= n.value;
              r &&
                (d((t = this._getOrReturnCtx(e, t)), {
                  code: i.too_small,
                  minimum: n.value,
                  type: "number",
                  inclusive: n.inclusive,
                  exact: !1,
                  message: n.message,
                }),
                a.dirty());
            } else if ("max" === n.kind) {
              let r = n.inclusive ? e.data > n.value : e.data >= n.value;
              r &&
                (d((t = this._getOrReturnCtx(e, t)), {
                  code: i.too_big,
                  maximum: n.value,
                  type: "number",
                  inclusive: n.inclusive,
                  exact: !1,
                  message: n.message,
                }),
                a.dirty());
            } else
              "multipleOf" === n.kind
                ? 0 !==
                    (function (e, t) {
                      let n = (e.toString().split(".")[1] || "").length,
                        r = (t.toString().split(".")[1] || "").length,
                        a = n > r ? n : r,
                        i = parseInt(e.toFixed(a).replace(".", "")),
                        s = parseInt(t.toFixed(a).replace(".", ""));
                      return (i % s) / Math.pow(10, a);
                    })(e.data, n.value) &&
                  (d((t = this._getOrReturnCtx(e, t)), {
                    code: i.not_multiple_of,
                    multipleOf: n.value,
                    message: n.message,
                  }),
                  a.dirty())
                : "finite" === n.kind
                ? Number.isFinite(e.data) ||
                  (d((t = this._getOrReturnCtx(e, t)), {
                    code: i.not_finite,
                    message: n.message,
                  }),
                  a.dirty())
                : e8.assertNever(n);
          return { status: a.value, value: e.data };
        }
        gte(e, t) {
          return this.setLimit("min", e, !0, e9.toString(t));
        }
        gt(e, t) {
          return this.setLimit("min", e, !1, e9.toString(t));
        }
        lte(e, t) {
          return this.setLimit("max", e, !0, e9.toString(t));
        }
        lt(e, t) {
          return this.setLimit("max", e, !1, e9.toString(t));
        }
        setLimit(e, t, n, r) {
          return new M({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: n, message: e9.toString(r) },
            ],
          });
        }
        _addCheck(e) {
          return new M({ ...this._def, checks: [...this._def.checks, e] });
        }
        int(e) {
          return this._addCheck({ kind: "int", message: e9.toString(e) });
        }
        positive(e) {
          return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: e9.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: e9.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: e9.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: e9.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: e9.toString(t),
          });
        }
        finite(e) {
          return this._addCheck({ kind: "finite", message: e9.toString(e) });
        }
        safe(e) {
          return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: e9.toString(e),
          })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: e9.toString(e),
          });
        }
        get minValue() {
          let e = null;
          for (let t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (let t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
        get isInt() {
          return !!this._def.checks.find(
            (e) =>
              "int" === e.kind ||
              ("multipleOf" === e.kind && e8.isInteger(e.value))
          );
        }
        get isFinite() {
          let e = null,
            t = null;
          for (let n of this._def.checks) {
            if (
              "finite" === n.kind ||
              "int" === n.kind ||
              "multipleOf" === n.kind
            )
              return !0;
            "min" === n.kind
              ? (null === t || n.value > t) && (t = n.value)
              : "max" === n.kind &&
                (null === e || n.value < e) &&
                (e = n.value);
          }
          return Number.isFinite(t) && Number.isFinite(e);
        }
      }
      M.create = (e) =>
        new M({
          checks: [],
          typeName: e7.ZodNumber,
          coerce: (null == e ? void 0 : e.coerce) || !1,
          ...b(e),
        });
      class w extends y {
        constructor() {
          super(...arguments), (this.min = this.gte), (this.max = this.lte);
        }
        _parse(e) {
          let t;
          this._def.coerce && (e.data = BigInt(e.data));
          let n = this._getType(e);
          if (n !== r.bigint) {
            let t = this._getOrReturnCtx(e);
            return (
              d(t, {
                code: i.invalid_type,
                expected: r.bigint,
                received: t.parsedType,
              }),
              p
            );
          }
          let a = new h();
          for (let n of this._def.checks)
            if ("min" === n.kind) {
              let r = n.inclusive ? e.data < n.value : e.data <= n.value;
              r &&
                (d((t = this._getOrReturnCtx(e, t)), {
                  code: i.too_small,
                  type: "bigint",
                  minimum: n.value,
                  inclusive: n.inclusive,
                  message: n.message,
                }),
                a.dirty());
            } else if ("max" === n.kind) {
              let r = n.inclusive ? e.data > n.value : e.data >= n.value;
              r &&
                (d((t = this._getOrReturnCtx(e, t)), {
                  code: i.too_big,
                  type: "bigint",
                  maximum: n.value,
                  inclusive: n.inclusive,
                  message: n.message,
                }),
                a.dirty());
            } else
              "multipleOf" === n.kind
                ? e.data % n.value !== BigInt(0) &&
                  (d((t = this._getOrReturnCtx(e, t)), {
                    code: i.not_multiple_of,
                    multipleOf: n.value,
                    message: n.message,
                  }),
                  a.dirty())
                : e8.assertNever(n);
          return { status: a.value, value: e.data };
        }
        gte(e, t) {
          return this.setLimit("min", e, !0, e9.toString(t));
        }
        gt(e, t) {
          return this.setLimit("min", e, !1, e9.toString(t));
        }
        lte(e, t) {
          return this.setLimit("max", e, !0, e9.toString(t));
        }
        lt(e, t) {
          return this.setLimit("max", e, !1, e9.toString(t));
        }
        setLimit(e, t, n, r) {
          return new w({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: n, message: e9.toString(r) },
            ],
          });
        }
        _addCheck(e) {
          return new w({ ...this._def, checks: [...this._def.checks, e] });
        }
        positive(e) {
          return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: e9.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: e9.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: e9.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: e9.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: e9.toString(t),
          });
        }
        get minValue() {
          let e = null;
          for (let t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (let t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
      }
      w.create = (e) => {
        var t;
        return new w({
          checks: [],
          typeName: e7.ZodBigInt,
          coerce:
            null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
          ...b(e),
        });
      };
      class P extends y {
        _parse(e) {
          this._def.coerce && (e.data = Boolean(e.data));
          let t = this._getType(e);
          if (t !== r.boolean) {
            let t = this._getOrReturnCtx(e);
            return (
              d(t, {
                code: i.invalid_type,
                expected: r.boolean,
                received: t.parsedType,
              }),
              p
            );
          }
          return m(e.data);
        }
      }
      P.create = (e) =>
        new P({
          typeName: e7.ZodBoolean,
          coerce: (null == e ? void 0 : e.coerce) || !1,
          ...b(e),
        });
      class B extends y {
        _parse(e) {
          let t;
          this._def.coerce && (e.data = new Date(e.data));
          let n = this._getType(e);
          if (n !== r.date) {
            let t = this._getOrReturnCtx(e);
            return (
              d(t, {
                code: i.invalid_type,
                expected: r.date,
                received: t.parsedType,
              }),
              p
            );
          }
          if (isNaN(e.data.getTime())) {
            let t = this._getOrReturnCtx(e);
            return d(t, { code: i.invalid_date }), p;
          }
          let a = new h();
          for (let n of this._def.checks)
            "min" === n.kind
              ? e.data.getTime() < n.value &&
                (d((t = this._getOrReturnCtx(e, t)), {
                  code: i.too_small,
                  message: n.message,
                  inclusive: !0,
                  exact: !1,
                  minimum: n.value,
                  type: "date",
                }),
                a.dirty())
              : "max" === n.kind
              ? e.data.getTime() > n.value &&
                (d((t = this._getOrReturnCtx(e, t)), {
                  code: i.too_big,
                  message: n.message,
                  inclusive: !0,
                  exact: !1,
                  maximum: n.value,
                  type: "date",
                }),
                a.dirty())
              : e8.assertNever(n);
          return { status: a.value, value: new Date(e.data.getTime()) };
        }
        _addCheck(e) {
          return new B({ ...this._def, checks: [...this._def.checks, e] });
        }
        min(e, t) {
          return this._addCheck({
            kind: "min",
            value: e.getTime(),
            message: e9.toString(t),
          });
        }
        max(e, t) {
          return this._addCheck({
            kind: "max",
            value: e.getTime(),
            message: e9.toString(t),
          });
        }
        get minDate() {
          let e = null;
          for (let t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
        get maxDate() {
          let e = null;
          for (let t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
      }
      B.create = (e) =>
        new B({
          checks: [],
          coerce: (null == e ? void 0 : e.coerce) || !1,
          typeName: e7.ZodDate,
          ...b(e),
        });
      class H extends y {
        _parse(e) {
          let t = this._getType(e);
          if (t !== r.symbol) {
            let t = this._getOrReturnCtx(e);
            return (
              d(t, {
                code: i.invalid_type,
                expected: r.symbol,
                received: t.parsedType,
              }),
              p
            );
          }
          return m(e.data);
        }
      }
      H.create = (e) => new H({ typeName: e7.ZodSymbol, ...b(e) });
      class U extends y {
        _parse(e) {
          let t = this._getType(e);
          if (t !== r.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              d(t, {
                code: i.invalid_type,
                expected: r.undefined,
                received: t.parsedType,
              }),
              p
            );
          }
          return m(e.data);
        }
      }
      U.create = (e) => new U({ typeName: e7.ZodUndefined, ...b(e) });
      class F extends y {
        _parse(e) {
          let t = this._getType(e);
          if (t !== r.null) {
            let t = this._getOrReturnCtx(e);
            return (
              d(t, {
                code: i.invalid_type,
                expected: r.null,
                received: t.parsedType,
              }),
              p
            );
          }
          return m(e.data);
        }
      }
      F.create = (e) => new F({ typeName: e7.ZodNull, ...b(e) });
      class G extends y {
        constructor() {
          super(...arguments), (this._any = !0);
        }
        _parse(e) {
          return m(e.data);
        }
      }
      G.create = (e) => new G({ typeName: e7.ZodAny, ...b(e) });
      class j extends y {
        constructor() {
          super(...arguments), (this._unknown = !0);
        }
        _parse(e) {
          return m(e.data);
        }
      }
      j.create = (e) => new j({ typeName: e7.ZodUnknown, ...b(e) });
      class Y extends y {
        _parse(e) {
          let t = this._getOrReturnCtx(e);
          return (
            d(t, {
              code: i.invalid_type,
              expected: r.never,
              received: t.parsedType,
            }),
            p
          );
        }
      }
      Y.create = (e) => new Y({ typeName: e7.ZodNever, ...b(e) });
      class V extends y {
        _parse(e) {
          let t = this._getType(e);
          if (t !== r.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              d(t, {
                code: i.invalid_type,
                expected: r.void,
                received: t.parsedType,
              }),
              p
            );
          }
          return m(e.data);
        }
      }
      V.create = (e) => new V({ typeName: e7.ZodVoid, ...b(e) });
      class Z extends y {
        _parse(e) {
          let { ctx: t, status: n } = this._processInputParams(e),
            a = this._def;
          if (t.parsedType !== r.array)
            return (
              d(t, {
                code: i.invalid_type,
                expected: r.array,
                received: t.parsedType,
              }),
              p
            );
          if (null !== a.exactLength) {
            let e = t.data.length > a.exactLength.value,
              r = t.data.length < a.exactLength.value;
            (e || r) &&
              (d(t, {
                code: e ? i.too_big : i.too_small,
                minimum: r ? a.exactLength.value : void 0,
                maximum: e ? a.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: a.exactLength.message,
              }),
              n.dirty());
          }
          if (
            (null !== a.minLength &&
              t.data.length < a.minLength.value &&
              (d(t, {
                code: i.too_small,
                minimum: a.minLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: a.minLength.message,
              }),
              n.dirty()),
            null !== a.maxLength &&
              t.data.length > a.maxLength.value &&
              (d(t, {
                code: i.too_big,
                maximum: a.maxLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: a.maxLength.message,
              }),
              n.dirty()),
            t.common.async)
          )
            return Promise.all(
              [...t.data].map((e, n) =>
                a.type._parseAsync(new A(t, e, t.path, n))
              )
            ).then((e) => h.mergeArray(n, e));
          let s = [...t.data].map((e, n) =>
            a.type._parseSync(new A(t, e, t.path, n))
          );
          return h.mergeArray(n, s);
        }
        get element() {
          return this._def.type;
        }
        min(e, t) {
          return new Z({
            ...this._def,
            minLength: { value: e, message: e9.toString(t) },
          });
        }
        max(e, t) {
          return new Z({
            ...this._def,
            maxLength: { value: e, message: e9.toString(t) },
          });
        }
        length(e, t) {
          return new Z({
            ...this._def,
            exactLength: { value: e, message: e9.toString(t) },
          });
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      Z.create = (e, t) =>
        new Z({
          type: e,
          minLength: null,
          maxLength: null,
          exactLength: null,
          typeName: e7.ZodArray,
          ...b(t),
        });
      class W extends y {
        constructor() {
          super(...arguments),
            (this._cached = null),
            (this.nonstrict = this.passthrough),
            (this.augment = this.extend);
        }
        _getCached() {
          if (null !== this._cached) return this._cached;
          let e = this._def.shape(),
            t = e8.objectKeys(e);
          return (this._cached = { shape: e, keys: t });
        }
        _parse(e) {
          let t = this._getType(e);
          if (t !== r.object) {
            let t = this._getOrReturnCtx(e);
            return (
              d(t, {
                code: i.invalid_type,
                expected: r.object,
                received: t.parsedType,
              }),
              p
            );
          }
          let { status: n, ctx: a } = this._processInputParams(e),
            { shape: s, keys: o } = this._getCached(),
            l = [];
          if (
            !(
              this._def.catchall instanceof Y &&
              "strip" === this._def.unknownKeys
            )
          )
            for (let e in a.data) o.includes(e) || l.push(e);
          let c = [];
          for (let e of o) {
            let t = s[e],
              n = a.data[e];
            c.push({
              key: { status: "valid", value: e },
              value: t._parse(new A(a, n, a.path, e)),
              alwaysSet: e in a.data,
            });
          }
          if (this._def.catchall instanceof Y) {
            let e = this._def.unknownKeys;
            if ("passthrough" === e)
              for (let e of l)
                c.push({
                  key: { status: "valid", value: e },
                  value: { status: "valid", value: a.data[e] },
                });
            else if ("strict" === e)
              l.length > 0 &&
                (d(a, { code: i.unrecognized_keys, keys: l }), n.dirty());
            else if ("strip" === e);
            else
              throw Error(
                "Internal ZodObject error: invalid unknownKeys value."
              );
          } else {
            let e = this._def.catchall;
            for (let t of l) {
              let n = a.data[t];
              c.push({
                key: { status: "valid", value: t },
                value: e._parse(new A(a, n, a.path, t)),
                alwaysSet: t in a.data,
              });
            }
          }
          return a.common.async
            ? Promise.resolve()
                .then(async () => {
                  let e = [];
                  for (let t of c) {
                    let n = await t.key;
                    e.push({
                      key: n,
                      value: await t.value,
                      alwaysSet: t.alwaysSet,
                    });
                  }
                  return e;
                })
                .then((e) => h.mergeObjectSync(n, e))
            : h.mergeObjectSync(n, c);
        }
        get shape() {
          return this._def.shape();
        }
        strict(e) {
          return (
            e9.errToObj,
            new W({
              ...this._def,
              unknownKeys: "strict",
              ...(void 0 !== e
                ? {
                    errorMap: (t, n) => {
                      var r, a, i, s;
                      let o =
                        null !==
                          (i =
                            null === (a = (r = this._def).errorMap) ||
                            void 0 === a
                              ? void 0
                              : a.call(r, t, n).message) && void 0 !== i
                          ? i
                          : n.defaultError;
                      return "unrecognized_keys" === t.code
                        ? {
                            message:
                              null !== (s = e9.errToObj(e).message) &&
                              void 0 !== s
                                ? s
                                : o,
                          }
                        : { message: o };
                    },
                  }
                : {}),
            })
          );
        }
        strip() {
          return new W({ ...this._def, unknownKeys: "strip" });
        }
        passthrough() {
          return new W({ ...this._def, unknownKeys: "passthrough" });
        }
        extend(e) {
          return new W({
            ...this._def,
            shape: () => ({ ...this._def.shape(), ...e }),
          });
        }
        merge(e) {
          let t = new W({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
            typeName: e7.ZodObject,
          });
          return t;
        }
        setKey(e, t) {
          return this.augment({ [e]: t });
        }
        catchall(e) {
          return new W({ ...this._def, catchall: e });
        }
        pick(e) {
          let t = {};
          return (
            e8.objectKeys(e).forEach((n) => {
              e[n] && this.shape[n] && (t[n] = this.shape[n]);
            }),
            new W({ ...this._def, shape: () => t })
          );
        }
        omit(e) {
          let t = {};
          return (
            e8.objectKeys(this.shape).forEach((n) => {
              e[n] || (t[n] = this.shape[n]);
            }),
            new W({ ...this._def, shape: () => t })
          );
        }
        deepPartial() {
          return (function e(t) {
            if (t instanceof W) {
              let n = {};
              for (let r in t.shape) {
                let a = t.shape[r];
                n[r] = ec.create(e(a));
              }
              return new W({ ...t._def, shape: () => n });
            }
            return t instanceof Z
              ? new Z({ ...t._def, type: e(t.element) })
              : t instanceof ec
              ? ec.create(e(t.unwrap()))
              : t instanceof eu
              ? eu.create(e(t.unwrap()))
              : t instanceof X
              ? X.create(t.items.map((t) => e(t)))
              : t;
          })(this);
        }
        partial(e) {
          let t = {};
          return (
            e8.objectKeys(this.shape).forEach((n) => {
              let r = this.shape[n];
              e && !e[n] ? (t[n] = r) : (t[n] = r.optional());
            }),
            new W({ ...this._def, shape: () => t })
          );
        }
        required(e) {
          let t = {};
          return (
            e8.objectKeys(this.shape).forEach((n) => {
              if (e && !e[n]) t[n] = this.shape[n];
              else {
                let e = this.shape[n],
                  r = e;
                for (; r instanceof ec; ) r = r._def.innerType;
                t[n] = r;
              }
            }),
            new W({ ...this._def, shape: () => t })
          );
        }
        keyof() {
          return ea(e8.objectKeys(this.shape));
        }
      }
      (W.create = (e, t) =>
        new W({
          shape: () => e,
          unknownKeys: "strip",
          catchall: Y.create(),
          typeName: e7.ZodObject,
          ...b(t),
        })),
        (W.strictCreate = (e, t) =>
          new W({
            shape: () => e,
            unknownKeys: "strict",
            catchall: Y.create(),
            typeName: e7.ZodObject,
            ...b(t),
          })),
        (W.lazycreate = (e, t) =>
          new W({
            shape: e,
            unknownKeys: "strip",
            catchall: Y.create(),
            typeName: e7.ZodObject,
            ...b(t),
          }));
      class q extends y {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            n = this._def.options;
          if (t.common.async)
            return Promise.all(
              n.map(async (e) => {
                let n = {
                  ...t,
                  common: { ...t.common, issues: [] },
                  parent: null,
                };
                return {
                  result: await e._parseAsync({
                    data: t.data,
                    path: t.path,
                    parent: n,
                  }),
                  ctx: n,
                };
              })
            ).then(function (e) {
              for (let t of e) if ("valid" === t.result.status) return t.result;
              for (let n of e)
                if ("dirty" === n.result.status)
                  return t.common.issues.push(...n.ctx.common.issues), n.result;
              let n = e.map((e) => new o(e.ctx.common.issues));
              return d(t, { code: i.invalid_union, unionErrors: n }), p;
            });
          {
            let e;
            let r = [];
            for (let a of n) {
              let n = {
                  ...t,
                  common: { ...t.common, issues: [] },
                  parent: null,
                },
                i = a._parseSync({ data: t.data, path: t.path, parent: n });
              if ("valid" === i.status) return i;
              "dirty" !== i.status || e || (e = { result: i, ctx: n }),
                n.common.issues.length && r.push(n.common.issues);
            }
            if (e)
              return t.common.issues.push(...e.ctx.common.issues), e.result;
            let a = r.map((e) => new o(e));
            return d(t, { code: i.invalid_union, unionErrors: a }), p;
          }
        }
        get options() {
          return this._def.options;
        }
      }
      q.create = (e, t) =>
        new q({ options: e, typeName: e7.ZodUnion, ...b(t) });
      let z = (e) => {
        if (e instanceof en) return z(e.schema);
        if (e instanceof el) return z(e.innerType());
        if (e instanceof er) return [e.value];
        if (e instanceof ei) return e.options;
        if (e instanceof es) return Object.keys(e.enum);
        if (e instanceof ed) return z(e._def.innerType);
        if (e instanceof U) return [void 0];
        else if (e instanceof F) return [null];
        else return null;
      };
      class K extends y {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== r.object)
            return (
              d(t, {
                code: i.invalid_type,
                expected: r.object,
                received: t.parsedType,
              }),
              p
            );
          let n = this.discriminator,
            a = t.data[n],
            s = this.optionsMap.get(a);
          return s
            ? t.common.async
              ? s._parseAsync({ data: t.data, path: t.path, parent: t })
              : s._parseSync({ data: t.data, path: t.path, parent: t })
            : (d(t, {
                code: i.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [n],
              }),
              p);
        }
        get discriminator() {
          return this._def.discriminator;
        }
        get options() {
          return this._def.options;
        }
        get optionsMap() {
          return this._def.optionsMap;
        }
        static create(e, t, n) {
          let r = new Map();
          for (let n of t) {
            let t = z(n.shape[e]);
            if (!t)
              throw Error(
                `A discriminator value for key \`${e}\` could not be extracted from all schema options`
              );
            for (let a of t) {
              if (r.has(a))
                throw Error(
                  `Discriminator property ${String(
                    e
                  )} has duplicate value ${String(a)}`
                );
              r.set(a, n);
            }
          }
          return new K({
            typeName: e7.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: r,
            ...b(n),
          });
        }
      }
      class Q extends y {
        _parse(e) {
          let { status: t, ctx: n } = this._processInputParams(e),
            s = (e, s) => {
              if (E(e) || E(s)) return p;
              let o = (function e(t, n) {
                let i = a(t),
                  s = a(n);
                if (t === n) return { valid: !0, data: t };
                if (i === r.object && s === r.object) {
                  let r = e8.objectKeys(n),
                    a = e8.objectKeys(t).filter((e) => -1 !== r.indexOf(e)),
                    i = { ...t, ...n };
                  for (let r of a) {
                    let a = e(t[r], n[r]);
                    if (!a.valid) return { valid: !1 };
                    i[r] = a.data;
                  }
                  return { valid: !0, data: i };
                }
                if (i === r.array && s === r.array) {
                  if (t.length !== n.length) return { valid: !1 };
                  let r = [];
                  for (let a = 0; a < t.length; a++) {
                    let i = t[a],
                      s = n[a],
                      o = e(i, s);
                    if (!o.valid) return { valid: !1 };
                    r.push(o.data);
                  }
                  return { valid: !0, data: r };
                }
                return i === r.date && s === r.date && +t == +n
                  ? { valid: !0, data: t }
                  : { valid: !1 };
              })(e.value, s.value);
              return o.valid
                ? ((T(e) || T(s)) && t.dirty(),
                  { status: t.value, value: o.data })
                : (d(n, { code: i.invalid_intersection_types }), p);
            };
          return n.common.async
            ? Promise.all([
                this._def.left._parseAsync({
                  data: n.data,
                  path: n.path,
                  parent: n,
                }),
                this._def.right._parseAsync({
                  data: n.data,
                  path: n.path,
                  parent: n,
                }),
              ]).then(([e, t]) => s(e, t))
            : s(
                this._def.left._parseSync({
                  data: n.data,
                  path: n.path,
                  parent: n,
                }),
                this._def.right._parseSync({
                  data: n.data,
                  path: n.path,
                  parent: n,
                })
              );
        }
      }
      Q.create = (e, t, n) =>
        new Q({ left: e, right: t, typeName: e7.ZodIntersection, ...b(n) });
      class X extends y {
        _parse(e) {
          let { status: t, ctx: n } = this._processInputParams(e);
          if (n.parsedType !== r.array)
            return (
              d(n, {
                code: i.invalid_type,
                expected: r.array,
                received: n.parsedType,
              }),
              p
            );
          if (n.data.length < this._def.items.length)
            return (
              d(n, {
                code: i.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array",
              }),
              p
            );
          let a = this._def.rest;
          !a &&
            n.data.length > this._def.items.length &&
            (d(n, {
              code: i.too_big,
              maximum: this._def.items.length,
              inclusive: !0,
              exact: !1,
              type: "array",
            }),
            t.dirty());
          let s = [...n.data]
            .map((e, t) => {
              let r = this._def.items[t] || this._def.rest;
              return r ? r._parse(new A(n, e, n.path, t)) : null;
            })
            .filter((e) => !!e);
          return n.common.async
            ? Promise.all(s).then((e) => h.mergeArray(t, e))
            : h.mergeArray(t, s);
        }
        get items() {
          return this._def.items;
        }
        rest(e) {
          return new X({ ...this._def, rest: e });
        }
      }
      X.create = (e, t) => {
        if (!Array.isArray(e))
          throw Error("You must pass an array of schemas to z.tuple([ ... ])");
        return new X({ items: e, typeName: e7.ZodTuple, rest: null, ...b(t) });
      };
      class $ extends y {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: n } = this._processInputParams(e);
          if (n.parsedType !== r.object)
            return (
              d(n, {
                code: i.invalid_type,
                expected: r.object,
                received: n.parsedType,
              }),
              p
            );
          let a = [],
            s = this._def.keyType,
            o = this._def.valueType;
          for (let e in n.data)
            a.push({
              key: s._parse(new A(n, e, n.path, e)),
              value: o._parse(new A(n, n.data[e], n.path, e)),
            });
          return n.common.async
            ? h.mergeObjectAsync(t, a)
            : h.mergeObjectSync(t, a);
        }
        get element() {
          return this._def.valueType;
        }
        static create(e, t, n) {
          return new $(
            t instanceof y
              ? { keyType: e, valueType: t, typeName: e7.ZodRecord, ...b(n) }
              : {
                  keyType: D.create(),
                  valueType: e,
                  typeName: e7.ZodRecord,
                  ...b(t),
                }
          );
        }
      }
      class J extends y {
        _parse(e) {
          let { status: t, ctx: n } = this._processInputParams(e);
          if (n.parsedType !== r.map)
            return (
              d(n, {
                code: i.invalid_type,
                expected: r.map,
                received: n.parsedType,
              }),
              p
            );
          let a = this._def.keyType,
            s = this._def.valueType,
            o = [...n.data.entries()].map(([e, t], r) => ({
              key: a._parse(new A(n, e, n.path, [r, "key"])),
              value: s._parse(new A(n, t, n.path, [r, "value"])),
            }));
          if (n.common.async) {
            let e = new Map();
            return Promise.resolve().then(async () => {
              for (let n of o) {
                let r = await n.key,
                  a = await n.value;
                if ("aborted" === r.status || "aborted" === a.status) return p;
                ("dirty" === r.status || "dirty" === a.status) && t.dirty(),
                  e.set(r.value, a.value);
              }
              return { status: t.value, value: e };
            });
          }
          {
            let e = new Map();
            for (let n of o) {
              let r = n.key,
                a = n.value;
              if ("aborted" === r.status || "aborted" === a.status) return p;
              ("dirty" === r.status || "dirty" === a.status) && t.dirty(),
                e.set(r.value, a.value);
            }
            return { status: t.value, value: e };
          }
        }
      }
      J.create = (e, t, n) =>
        new J({ valueType: t, keyType: e, typeName: e7.ZodMap, ...b(n) });
      class ee extends y {
        _parse(e) {
          let { status: t, ctx: n } = this._processInputParams(e);
          if (n.parsedType !== r.set)
            return (
              d(n, {
                code: i.invalid_type,
                expected: r.set,
                received: n.parsedType,
              }),
              p
            );
          let a = this._def;
          null !== a.minSize &&
            n.data.size < a.minSize.value &&
            (d(n, {
              code: i.too_small,
              minimum: a.minSize.value,
              type: "set",
              inclusive: !0,
              exact: !1,
              message: a.minSize.message,
            }),
            t.dirty()),
            null !== a.maxSize &&
              n.data.size > a.maxSize.value &&
              (d(n, {
                code: i.too_big,
                maximum: a.maxSize.value,
                type: "set",
                inclusive: !0,
                exact: !1,
                message: a.maxSize.message,
              }),
              t.dirty());
          let s = this._def.valueType;
          function o(e) {
            let n = new Set();
            for (let r of e) {
              if ("aborted" === r.status) return p;
              "dirty" === r.status && t.dirty(), n.add(r.value);
            }
            return { status: t.value, value: n };
          }
          let l = [...n.data.values()].map((e, t) =>
            s._parse(new A(n, e, n.path, t))
          );
          return n.common.async ? Promise.all(l).then((e) => o(e)) : o(l);
        }
        min(e, t) {
          return new ee({
            ...this._def,
            minSize: { value: e, message: e9.toString(t) },
          });
        }
        max(e, t) {
          return new ee({
            ...this._def,
            maxSize: { value: e, message: e9.toString(t) },
          });
        }
        size(e, t) {
          return this.min(e, t).max(e, t);
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      ee.create = (e, t) =>
        new ee({
          valueType: e,
          minSize: null,
          maxSize: null,
          typeName: e7.ZodSet,
          ...b(t),
        });
      class et extends y {
        constructor() {
          super(...arguments), (this.validate = this.implement);
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== r.function)
            return (
              d(t, {
                code: i.invalid_type,
                expected: r.function,
                received: t.parsedType,
              }),
              p
            );
          function n(e, n) {
            return u({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                c,
                l,
              ].filter((e) => !!e),
              issueData: { code: i.invalid_arguments, argumentsError: n },
            });
          }
          function a(e, n) {
            return u({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                c,
                l,
              ].filter((e) => !!e),
              issueData: { code: i.invalid_return_type, returnTypeError: n },
            });
          }
          let s = { errorMap: t.common.contextualErrorMap },
            h = t.data;
          return this._def.returns instanceof eo
            ? m(async (...e) => {
                let t = new o([]),
                  r = await this._def.args.parseAsync(e, s).catch((r) => {
                    throw (t.addIssue(n(e, r)), t);
                  }),
                  i = await h(...r),
                  l = await this._def.returns._def.type
                    .parseAsync(i, s)
                    .catch((e) => {
                      throw (t.addIssue(a(i, e)), t);
                    });
                return l;
              })
            : m((...e) => {
                let t = this._def.args.safeParse(e, s);
                if (!t.success) throw new o([n(e, t.error)]);
                let r = h(...t.data),
                  i = this._def.returns.safeParse(r, s);
                if (!i.success) throw new o([a(r, i.error)]);
                return i.data;
              });
        }
        parameters() {
          return this._def.args;
        }
        returnType() {
          return this._def.returns;
        }
        args(...e) {
          return new et({ ...this._def, args: X.create(e).rest(j.create()) });
        }
        returns(e) {
          return new et({ ...this._def, returns: e });
        }
        implement(e) {
          let t = this.parse(e);
          return t;
        }
        strictImplement(e) {
          let t = this.parse(e);
          return t;
        }
        static create(e, t, n) {
          return new et({
            args: e || X.create([]).rest(j.create()),
            returns: t || j.create(),
            typeName: e7.ZodFunction,
            ...b(n),
          });
        }
      }
      class en extends y {
        get schema() {
          return this._def.getter();
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            n = this._def.getter();
          return n._parse({ data: t.data, path: t.path, parent: t });
        }
      }
      en.create = (e, t) =>
        new en({ getter: e, typeName: e7.ZodLazy, ...b(t) });
      class er extends y {
        _parse(e) {
          if (e.data !== this._def.value) {
            let t = this._getOrReturnCtx(e);
            return (
              d(t, {
                received: t.data,
                code: i.invalid_literal,
                expected: this._def.value,
              }),
              p
            );
          }
          return { status: "valid", value: e.data };
        }
        get value() {
          return this._def.value;
        }
      }
      function ea(e, t) {
        return new ei({ values: e, typeName: e7.ZodEnum, ...b(t) });
      }
      er.create = (e, t) =>
        new er({ value: e, typeName: e7.ZodLiteral, ...b(t) });
      class ei extends y {
        _parse(e) {
          if ("string" != typeof e.data) {
            let t = this._getOrReturnCtx(e),
              n = this._def.values;
            return (
              d(t, {
                expected: e8.joinValues(n),
                received: t.parsedType,
                code: i.invalid_type,
              }),
              p
            );
          }
          if (-1 === this._def.values.indexOf(e.data)) {
            let t = this._getOrReturnCtx(e),
              n = this._def.values;
            return (
              d(t, {
                received: t.data,
                code: i.invalid_enum_value,
                options: n,
              }),
              p
            );
          }
          return m(e.data);
        }
        get options() {
          return this._def.values;
        }
        get enum() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        get Values() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        get Enum() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        extract(e) {
          return ei.create(e);
        }
        exclude(e) {
          return ei.create(this.options.filter((t) => !e.includes(t)));
        }
      }
      ei.create = ea;
      class es extends y {
        _parse(e) {
          let t = e8.getValidEnumValues(this._def.values),
            n = this._getOrReturnCtx(e);
          if (n.parsedType !== r.string && n.parsedType !== r.number) {
            let e = e8.objectValues(t);
            return (
              d(n, {
                expected: e8.joinValues(e),
                received: n.parsedType,
                code: i.invalid_type,
              }),
              p
            );
          }
          if (-1 === t.indexOf(e.data)) {
            let e = e8.objectValues(t);
            return (
              d(n, {
                received: n.data,
                code: i.invalid_enum_value,
                options: e,
              }),
              p
            );
          }
          return m(e.data);
        }
        get enum() {
          return this._def.values;
        }
      }
      es.create = (e, t) =>
        new es({ values: e, typeName: e7.ZodNativeEnum, ...b(t) });
      class eo extends y {
        unwrap() {
          return this._def.type;
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== r.promise && !1 === t.common.async)
            return (
              d(t, {
                code: i.invalid_type,
                expected: r.promise,
                received: t.parsedType,
              }),
              p
            );
          let n = t.parsedType === r.promise ? t.data : Promise.resolve(t.data);
          return m(
            n.then((e) =>
              this._def.type.parseAsync(e, {
                path: t.path,
                errorMap: t.common.contextualErrorMap,
              })
            )
          );
        }
      }
      eo.create = (e, t) =>
        new eo({ type: e, typeName: e7.ZodPromise, ...b(t) });
      class el extends y {
        innerType() {
          return this._def.schema;
        }
        sourceType() {
          return this._def.schema._def.typeName === e7.ZodEffects
            ? this._def.schema.sourceType()
            : this._def.schema;
        }
        _parse(e) {
          let { status: t, ctx: n } = this._processInputParams(e),
            r = this._def.effect || null;
          if ("preprocess" === r.type) {
            let e = r.transform(n.data);
            return n.common.async
              ? Promise.resolve(e).then((e) =>
                  this._def.schema._parseAsync({
                    data: e,
                    path: n.path,
                    parent: n,
                  })
                )
              : this._def.schema._parseSync({
                  data: e,
                  path: n.path,
                  parent: n,
                });
          }
          let a = {
            addIssue: (e) => {
              d(n, e), e.fatal ? t.abort() : t.dirty();
            },
            get path() {
              return n.path;
            },
          };
          if (((a.addIssue = a.addIssue.bind(a)), "refinement" === r.type)) {
            let e = (e) => {
              let t = r.refinement(e, a);
              if (n.common.async) return Promise.resolve(t);
              if (t instanceof Promise)
                throw Error(
                  "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
                );
              return e;
            };
            if (!1 !== n.common.async)
              return this._def.schema
                ._parseAsync({ data: n.data, path: n.path, parent: n })
                .then((n) =>
                  "aborted" === n.status
                    ? p
                    : ("dirty" === n.status && t.dirty(),
                      e(n.value).then(() => ({
                        status: t.value,
                        value: n.value,
                      })))
                );
            {
              let r = this._def.schema._parseSync({
                data: n.data,
                path: n.path,
                parent: n,
              });
              return "aborted" === r.status
                ? p
                : ("dirty" === r.status && t.dirty(),
                  e(r.value),
                  { status: t.value, value: r.value });
            }
          }
          if ("transform" === r.type) {
            if (!1 !== n.common.async)
              return this._def.schema
                ._parseAsync({ data: n.data, path: n.path, parent: n })
                .then((e) =>
                  g(e)
                    ? Promise.resolve(r.transform(e.value, a)).then((e) => ({
                        status: t.value,
                        value: e,
                      }))
                    : e
                );
            {
              let e = this._def.schema._parseSync({
                data: n.data,
                path: n.path,
                parent: n,
              });
              if (!g(e)) return e;
              let i = r.transform(e.value, a);
              if (i instanceof Promise)
                throw Error(
                  "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
                );
              return { status: t.value, value: i };
            }
          }
          e8.assertNever(r);
        }
      }
      (el.create = (e, t, n) =>
        new el({ schema: e, typeName: e7.ZodEffects, effect: t, ...b(n) })),
        (el.createWithPreprocess = (e, t, n) =>
          new el({
            schema: t,
            effect: { type: "preprocess", transform: e },
            typeName: e7.ZodEffects,
            ...b(n),
          }));
      class ec extends y {
        _parse(e) {
          let t = this._getType(e);
          return t === r.undefined ? m(void 0) : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      ec.create = (e, t) =>
        new ec({ innerType: e, typeName: e7.ZodOptional, ...b(t) });
      class eu extends y {
        _parse(e) {
          let t = this._getType(e);
          return t === r.null ? m(null) : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      eu.create = (e, t) =>
        new eu({ innerType: e, typeName: e7.ZodNullable, ...b(t) });
      class ed extends y {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            n = t.data;
          return (
            t.parsedType === r.undefined && (n = this._def.defaultValue()),
            this._def.innerType._parse({ data: n, path: t.path, parent: t })
          );
        }
        removeDefault() {
          return this._def.innerType;
        }
      }
      ed.create = (e, t) =>
        new ed({
          innerType: e,
          typeName: e7.ZodDefault,
          defaultValue:
            "function" == typeof t.default ? t.default : () => t.default,
          ...b(t),
        });
      class eh extends y {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            n = { ...t, common: { ...t.common, issues: [] } },
            r = this._def.innerType._parse({
              data: n.data,
              path: n.path,
              parent: { ...n },
            });
          return _(r)
            ? r.then((e) => ({
                status: "valid",
                value:
                  "valid" === e.status
                    ? e.value
                    : this._def.catchValue({
                        get error() {
                          return new o(n.common.issues);
                        },
                        input: n.data,
                      }),
              }))
            : {
                status: "valid",
                value:
                  "valid" === r.status
                    ? r.value
                    : this._def.catchValue({
                        get error() {
                          return new o(n.common.issues);
                        },
                        input: n.data,
                      }),
              };
        }
        removeCatch() {
          return this._def.innerType;
        }
      }
      eh.create = (e, t) =>
        new eh({
          innerType: e,
          typeName: e7.ZodCatch,
          catchValue: "function" == typeof t.catch ? t.catch : () => t.catch,
          ...b(t),
        });
      class ep extends y {
        _parse(e) {
          let t = this._getType(e);
          if (t !== r.nan) {
            let t = this._getOrReturnCtx(e);
            return (
              d(t, {
                code: i.invalid_type,
                expected: r.nan,
                received: t.parsedType,
              }),
              p
            );
          }
          return { status: "valid", value: e.data };
        }
      }
      ep.create = (e) => new ep({ typeName: e7.ZodNaN, ...b(e) });
      let ef = Symbol("zod_brand");
      class em extends y {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            n = t.data;
          return this._def.type._parse({ data: n, path: t.path, parent: t });
        }
        unwrap() {
          return this._def.type;
        }
      }
      class eE extends y {
        _parse(e) {
          let { status: t, ctx: n } = this._processInputParams(e);
          if (n.common.async) {
            let e = async () => {
              let e = await this._def.in._parseAsync({
                data: n.data,
                path: n.path,
                parent: n,
              });
              return "aborted" === e.status
                ? p
                : "dirty" === e.status
                ? (t.dirty(), f(e.value))
                : this._def.out._parseAsync({
                    data: e.value,
                    path: n.path,
                    parent: n,
                  });
            };
            return e();
          }
          {
            let e = this._def.in._parseSync({
              data: n.data,
              path: n.path,
              parent: n,
            });
            return "aborted" === e.status
              ? p
              : "dirty" === e.status
              ? (t.dirty(), { status: "dirty", value: e.value })
              : this._def.out._parseSync({
                  data: e.value,
                  path: n.path,
                  parent: n,
                });
          }
        }
        static create(e, t) {
          return new eE({ in: e, out: t, typeName: e7.ZodPipeline });
        }
      }
      let eT = (e, t = {}, n) =>
          e
            ? G.create().superRefine((r, a) => {
                var i, s;
                if (!e(r)) {
                  let e =
                      "function" == typeof t
                        ? t(r)
                        : "string" == typeof t
                        ? { message: t }
                        : t,
                    o =
                      null ===
                        (s = null !== (i = e.fatal) && void 0 !== i ? i : n) ||
                      void 0 === s ||
                      s;
                  a.addIssue({
                    code: "custom",
                    ...("string" == typeof e ? { message: e } : e),
                    fatal: o,
                  });
                }
              })
            : G.create(),
        eg = { object: W.lazycreate };
      ((e4 = e7 || (e7 = {})).ZodString = "ZodString"),
        (e4.ZodNumber = "ZodNumber"),
        (e4.ZodNaN = "ZodNaN"),
        (e4.ZodBigInt = "ZodBigInt"),
        (e4.ZodBoolean = "ZodBoolean"),
        (e4.ZodDate = "ZodDate"),
        (e4.ZodSymbol = "ZodSymbol"),
        (e4.ZodUndefined = "ZodUndefined"),
        (e4.ZodNull = "ZodNull"),
        (e4.ZodAny = "ZodAny"),
        (e4.ZodUnknown = "ZodUnknown"),
        (e4.ZodNever = "ZodNever"),
        (e4.ZodVoid = "ZodVoid"),
        (e4.ZodArray = "ZodArray"),
        (e4.ZodObject = "ZodObject"),
        (e4.ZodUnion = "ZodUnion"),
        (e4.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
        (e4.ZodIntersection = "ZodIntersection"),
        (e4.ZodTuple = "ZodTuple"),
        (e4.ZodRecord = "ZodRecord"),
        (e4.ZodMap = "ZodMap"),
        (e4.ZodSet = "ZodSet"),
        (e4.ZodFunction = "ZodFunction"),
        (e4.ZodLazy = "ZodLazy"),
        (e4.ZodLiteral = "ZodLiteral"),
        (e4.ZodEnum = "ZodEnum"),
        (e4.ZodEffects = "ZodEffects"),
        (e4.ZodNativeEnum = "ZodNativeEnum"),
        (e4.ZodOptional = "ZodOptional"),
        (e4.ZodNullable = "ZodNullable"),
        (e4.ZodDefault = "ZodDefault"),
        (e4.ZodCatch = "ZodCatch"),
        (e4.ZodPromise = "ZodPromise"),
        (e4.ZodBranded = "ZodBranded"),
        (e4.ZodPipeline = "ZodPipeline");
      let e_ = (e, t = { message: `Input not instance of ${e.name}` }) =>
          eT((t) => t instanceof e, t),
        eA = D.create,
        ev = M.create,
        eb = ep.create,
        ey = w.create,
        eN = P.create,
        eC = B.create,
        eI = H.create,
        eS = U.create,
        eR = F.create,
        eO = G.create,
        ek = j.create,
        ex = Y.create,
        eL = V.create,
        eD = Z.create,
        eM = W.create,
        ew = W.strictCreate,
        eP = q.create,
        eB = K.create,
        eH = Q.create,
        eU = X.create,
        eF = $.create,
        eG = J.create,
        ej = ee.create,
        eY = et.create,
        eV = en.create,
        eZ = er.create,
        eW = ei.create,
        eq = es.create,
        ez = eo.create,
        eK = el.create,
        eQ = ec.create,
        eX = eu.create,
        e$ = el.createWithPreprocess,
        eJ = eE.create,
        e0 = () => eA().optional(),
        e1 = () => ev().optional(),
        e2 = () => eN().optional();
      var e5,
        e3,
        e4,
        e8,
        e6,
        e9,
        e7,
        te = Object.freeze({
          __proto__: null,
          defaultErrorMap: l,
          setErrorMap: function (e) {
            c = e;
          },
          getErrorMap: function () {
            return c;
          },
          makeIssue: u,
          EMPTY_PATH: [],
          addIssueToContext: d,
          ParseStatus: h,
          INVALID: p,
          DIRTY: f,
          OK: m,
          isAborted: E,
          isDirty: T,
          isValid: g,
          isAsync: _,
          get util() {
            return e8;
          },
          get objectUtil() {
            return e6;
          },
          ZodParsedType: r,
          getParsedType: a,
          ZodType: y,
          ZodString: D,
          ZodNumber: M,
          ZodBigInt: w,
          ZodBoolean: P,
          ZodDate: B,
          ZodSymbol: H,
          ZodUndefined: U,
          ZodNull: F,
          ZodAny: G,
          ZodUnknown: j,
          ZodNever: Y,
          ZodVoid: V,
          ZodArray: Z,
          ZodObject: W,
          ZodUnion: q,
          ZodDiscriminatedUnion: K,
          ZodIntersection: Q,
          ZodTuple: X,
          ZodRecord: $,
          ZodMap: J,
          ZodSet: ee,
          ZodFunction: et,
          ZodLazy: en,
          ZodLiteral: er,
          ZodEnum: ei,
          ZodNativeEnum: es,
          ZodPromise: eo,
          ZodEffects: el,
          ZodTransformer: el,
          ZodOptional: ec,
          ZodNullable: eu,
          ZodDefault: ed,
          ZodCatch: eh,
          ZodNaN: ep,
          BRAND: ef,
          ZodBranded: em,
          ZodPipeline: eE,
          custom: eT,
          Schema: y,
          ZodSchema: y,
          late: eg,
          get ZodFirstPartyTypeKind() {
            return e7;
          },
          coerce: {
            string: (e) => D.create({ ...e, coerce: !0 }),
            number: (e) => M.create({ ...e, coerce: !0 }),
            boolean: (e) => P.create({ ...e, coerce: !0 }),
            bigint: (e) => w.create({ ...e, coerce: !0 }),
            date: (e) => B.create({ ...e, coerce: !0 }),
          },
          any: eO,
          array: eD,
          bigint: ey,
          boolean: eN,
          date: eC,
          discriminatedUnion: eB,
          effect: eK,
          enum: eW,
          function: eY,
          instanceof: e_,
          intersection: eH,
          lazy: eV,
          literal: eZ,
          map: eG,
          nan: eb,
          nativeEnum: eq,
          never: ex,
          null: eR,
          nullable: eX,
          number: ev,
          object: eM,
          oboolean: e2,
          onumber: e1,
          optional: eQ,
          ostring: e0,
          pipeline: eJ,
          preprocess: e$,
          promise: ez,
          record: eF,
          set: ej,
          strictObject: ew,
          string: eA,
          symbol: eI,
          transformer: eK,
          tuple: eU,
          undefined: eS,
          union: eP,
          unknown: ek,
          void: eL,
          NEVER: p,
          ZodIssueCode: i,
          quotelessJson: s,
          ZodError: o,
        });
      let tt = te.string().transform((e, t) => {
          let { language: n, region: r } = new Intl.Locale(e),
            a = tn.safeParse(n);
          if (a.success && null == r && e === a.data) return a.data;
          let i = tr.safeParse(r);
          return a.success &&
            i.success &&
            e === "".concat(a.data, "-").concat(i.data)
            ? "".concat(a.data, "-").concat(i.data)
            : (t.addIssue({
                code: te.ZodIssueCode.custom,
                message: "Locale is not supported: '".concat(
                  e,
                  "'. Make sure the locale is in the format of 'language', e.g. 'en', or 'language-country', e.g. 'en-US'."
                ),
              }),
              te.NEVER);
        }),
        tn = te.enum([
          "aa",
          "ab",
          "ae",
          "af",
          "ak",
          "am",
          "an",
          "ar",
          "as",
          "av",
          "ay",
          "az",
          "ba",
          "be",
          "bg",
          "bh",
          "bi",
          "bm",
          "bn",
          "bo",
          "br",
          "bs",
          "ca",
          "ce",
          "ch",
          "co",
          "cr",
          "cs",
          "cu",
          "cv",
          "cy",
          "da",
          "de",
          "dv",
          "dz",
          "ee",
          "el",
          "en",
          "eo",
          "es",
          "et",
          "eu",
          "fa",
          "ff",
          "fi",
          "fj",
          "fo",
          "fr",
          "fy",
          "ga",
          "gd",
          "gl",
          "gn",
          "gu",
          "gv",
          "ha",
          "he",
          "hi",
          "ho",
          "hr",
          "ht",
          "hu",
          "hy",
          "hz",
          "ia",
          "id",
          "ie",
          "ig",
          "ii",
          "ik",
          "io",
          "is",
          "it",
          "iu",
          "ja",
          "jv",
          "ka",
          "kg",
          "ki",
          "kj",
          "kk",
          "kl",
          "km",
          "kn",
          "ko",
          "kr",
          "ks",
          "ku",
          "kv",
          "kw",
          "ky",
          "la",
          "lb",
          "lg",
          "li",
          "ln",
          "lo",
          "lt",
          "lu",
          "lv",
          "mg",
          "mh",
          "mi",
          "mk",
          "ml",
          "mn",
          "mr",
          "ms",
          "mt",
          "my",
          "na",
          "nb",
          "nd",
          "ne",
          "ng",
          "nl",
          "nn",
          "no",
          "nr",
          "nv",
          "ny",
          "oc",
          "oj",
          "om",
          "or",
          "os",
          "pa",
          "pi",
          "pl",
          "ps",
          "pt",
          "qu",
          "rm",
          "rn",
          "ro",
          "ru",
          "rw",
          "sa",
          "sc",
          "sd",
          "se",
          "sg",
          "si",
          "sk",
          "sl",
          "sm",
          "sn",
          "so",
          "sq",
          "sr",
          "ss",
          "st",
          "su",
          "sv",
          "sw",
          "ta",
          "te",
          "tg",
          "th",
          "ti",
          "tk",
          "tl",
          "tn",
          "to",
          "tr",
          "ts",
          "tt",
          "tw",
          "ty",
          "ug",
          "uk",
          "ur",
          "uz",
          "ve",
          "vi",
          "vo",
          "wa",
          "wo",
          "xh",
          "yi",
          "yo",
          "za",
          "zh",
          "zu",
        ]),
        tr = te.enum([
          "AF",
          "AX",
          "AL",
          "DZ",
          "AS",
          "AD",
          "AO",
          "AI",
          "AQ",
          "AG",
          "AR",
          "AM",
          "AW",
          "AU",
          "AT",
          "AZ",
          "BS",
          "BH",
          "BD",
          "BB",
          "BY",
          "BE",
          "BZ",
          "BJ",
          "BM",
          "BT",
          "BO",
          "BQ",
          "BA",
          "BW",
          "BV",
          "BR",
          "IO",
          "BN",
          "BG",
          "BF",
          "BI",
          "KH",
          "CM",
          "CA",
          "CV",
          "KY",
          "CF",
          "TD",
          "CL",
          "CN",
          "CX",
          "CC",
          "CO",
          "KM",
          "CG",
          "CD",
          "CK",
          "CR",
          "CI",
          "HR",
          "CU",
          "CW",
          "CY",
          "CZ",
          "DK",
          "DJ",
          "DM",
          "DO",
          "EC",
          "EG",
          "SV",
          "GQ",
          "ER",
          "EE",
          "ET",
          "FK",
          "FO",
          "FJ",
          "FI",
          "FR",
          "GF",
          "PF",
          "TF",
          "GA",
          "GM",
          "GE",
          "DE",
          "GH",
          "GI",
          "GR",
          "GL",
          "GD",
          "GP",
          "GU",
          "GT",
          "GG",
          "GN",
          "GW",
          "GY",
          "HT",
          "HM",
          "VA",
          "HN",
          "HK",
          "HU",
          "IS",
          "IN",
          "ID",
          "IR",
          "IQ",
          "IE",
          "IM",
          "IL",
          "IT",
          "JM",
          "JP",
          "JE",
          "JO",
          "KZ",
          "KE",
          "KI",
          "KP",
          "KR",
          "KW",
          "KG",
          "LA",
          "LV",
          "LB",
          "LS",
          "LR",
          "LY",
          "LI",
          "LT",
          "LU",
          "MO",
          "MK",
          "MG",
          "MW",
          "MY",
          "MV",
          "ML",
          "MT",
          "MH",
          "MQ",
          "MR",
          "MU",
          "YT",
          "MX",
          "FM",
          "MD",
          "MC",
          "MN",
          "ME",
          "MS",
          "MA",
          "MZ",
          "MM",
          "NA",
          "NR",
          "NP",
          "NL",
          "NC",
          "NZ",
          "NI",
          "NE",
          "NG",
          "NU",
          "NF",
          "MP",
          "NO",
          "OM",
          "PK",
          "PW",
          "PS",
          "PA",
          "PG",
          "PY",
          "PE",
          "PH",
          "PN",
          "PL",
          "PT",
          "PR",
          "QA",
          "RE",
          "RO",
          "RU",
          "RW",
          "BL",
          "SH",
          "KN",
          "LC",
          "MF",
          "PM",
          "VC",
          "WS",
          "SM",
          "ST",
          "SA",
          "SN",
          "RS",
          "SC",
          "SL",
          "SG",
          "SX",
          "SK",
          "SI",
          "SB",
          "SO",
          "ZA",
          "GS",
          "SS",
          "ES",
          "LK",
          "SD",
          "SR",
          "SJ",
          "SZ",
          "SE",
          "CH",
          "SY",
          "TW",
          "TJ",
          "TZ",
          "TH",
          "TL",
          "TG",
          "TK",
          "TO",
          "TT",
          "TN",
          "TR",
          "TM",
          "TC",
          "TV",
          "UG",
          "UA",
          "AE",
          "GB",
          "US",
          "UM",
          "UY",
          "UZ",
          "VU",
          "VE",
          "VN",
          "VG",
          "VI",
          "WF",
          "EH",
          "YE",
          "ZM",
          "ZW",
        ]),
        ta = {
          INIT: "INIT",
          CLEAN_UP: "CLEAN_UP",
          REGISTER_DOCUMENT: "REGISTER_DOCUMENT",
          UNREGISTER_DOCUMENT: "UNREGISTER_DOCUMENT",
          CHANGE_DOCUMENT: "CHANGE_DOCUMENT",
          REGISTER_COMPONENT: "REGISTER_COMPONENT",
          UNREGISTER_COMPONENT: "UNREGISTER_COMPONENT",
          REGISTER_BUILDER_COMPONENT: "REGISTER_BUILDER_COMPONENT",
          UNREGISTER_BUILDER_COMPONENT: "UNREGISTER_BUILDER_COMPONENT",
          REGISTER_REACT_COMPONENT: "REGISTER_REACT_COMPONENT",
          UNREGISTER_REACT_COMPONENT: "UNREGISTER_REACT_COMPONENT",
          MOUNT_COMPONENT: "MOUNT_COMPONENT",
          UNMOUNT_COMPONENT: "UNMOUNT_COMPONENT",
          REGISTER_COMPONENT_HANDLE: "REGISTER_COMPONENT_HANDLE",
          UNREGISTER_COMPONENT_HANDLE: "UNREGISTER_COMPONENT_HANDLE",
          REGISTER_MEASURABLE: "REGISTER_MEASURABLE",
          UNREGISTER_MEASURABLE: "UNREGISTER_MEASURABLE",
          CHANGE_ELEMENT_BOX_MODELS: "CHANGE_ELEMENT_BOX_MODELS",
          CHANGE_DOCUMENT_ELEMENT_SIZE: "CHANGE_DOCUMENT_ELEMENT_SIZE",
          CHANGE_DOCUMENT_ELEMENT_SCROLL_TOP:
            "CHANGE_DOCUMENT_ELEMENT_SCROLL_TOP",
          SCROLL_DOCUMENT_ELEMENT: "SCROLL_DOCUMENT_ELEMENT",
          REGISTER_PROP_CONTROLLERS_HANDLE: "REGISTER_PROP_CONTROLLERS_HANDLE",
          UNREGISTER_PROP_CONTROLLERS_HANDLE:
            "UNREGISTER_PROP_CONTROLLERS_HANDLE",
          REGISTER_PROP_CONTROLLERS: "REGISTER_PROP_CONTROLLERS",
          UNREGISTER_PROP_CONTROLLERS: "UNREGISTER_PROP_CONTROLLERS",
          MESSAGE_HOST_PROP_CONTROLLER: "MESSAGE_HOST_PROP_CONTROLLER",
          MESSAGE_BUILDER_PROP_CONTROLLER: "MESSAGE_BUILDER_PROP_CONTROLLER",
          CHANGE_API_RESOURCE: "CHANGE_API_RESOURCE",
          EVICT_API_RESOURCE: "EVICT_API_RESOURCE",
          SET_IS_IN_BUILDER: "SET_IS_IN_BUILDER",
          HANDLE_WHEEL: "HANDLE_WHEEL",
          HANDLE_POINTER_MOVE: "HANDLE_POINTER_MOVE",
          API_RESOURCE_FULFILLED: "API_RESOURCE_FULFILLED",
          SET_BUILDER_EDIT_MODE: "SET_BUILDER_EDIT_MODE",
          MAKESWIFT_CONNECTION_INIT: "MAKESWIFT_CONNECTION_INIT",
          MAKESWIFT_CONNECTION_CHECK: "MAKESWIFT_CONNECTION_CHECK",
          CHANGE_PATHNAME: "CHANGE_PATHNAME",
          CHANGE_PATHNAME_START: "CHANGE_PATHNAME_START",
          CHANGE_PATHNAME_COMPLETE: "CHANGE_PATHNAME_COMPLETE",
          BUILDER_POINTER_MOVE: "BUILDER_POINTER_MOVE",
          ELEMENT_FROM_POINT_CHANGE: "ELEMENT_FROM_POINT_CHANGE",
          SET_BREAKPOINTS: "SET_BREAKPOINTS",
          SET_LOCALE: "SET_LOCALE",
          SET_LOCALIZED_RESOURCE_ID: "SET_LOCALIZED_RESOURCE_ID",
        };
      function ti(e) {
        return (t) => (
          t({
            type: ta.REGISTER_DOCUMENT,
            payload: { documentKey: e.key, document: e },
          }),
          () => {
            var n;
            t(
              ((n = e.key),
              { type: ta.UNREGISTER_DOCUMENT, payload: { documentKey: n } })
            );
          }
        );
      }
      function ts(e, t, n) {
        return (r) => (
          r({
            type: ta.REGISTER_COMPONENT,
            payload: { type: e, meta: t, propControllerDescriptors: n },
          }),
          () => {
            r({ type: ta.UNREGISTER_COMPONENT, payload: { type: e } });
          }
        );
      }
      function to(e, t, n) {
        return {
          type: ta.REGISTER_BUILDER_COMPONENT,
          payload: { type: e, meta: t, serializedControls: n },
        };
      }
      function tl(e) {
        return { type: ta.UNREGISTER_BUILDER_COMPONENT, payload: { type: e } };
      }
      function tc(e, t) {
        return (n) => (
          n({
            type: ta.REGISTER_REACT_COMPONENT,
            payload: { type: e, component: t },
          }),
          () => {
            n({ type: ta.UNREGISTER_REACT_COMPONENT, payload: { type: e } });
          }
        );
      }
      function tu(e, t) {
        return (n) => (
          n({
            type: ta.MOUNT_COMPONENT,
            payload: { documentKey: e, elementKey: t },
          }),
          () => {
            n({
              type: ta.UNMOUNT_COMPONENT,
              payload: { documentKey: e, elementKey: t },
            });
          }
        );
      }
      function td(e, t, n) {
        return (r) => (
          r({
            type: ta.REGISTER_COMPONENT_HANDLE,
            payload: { documentKey: e, elementKey: t, componentHandle: n },
          }),
          () => {
            r({
              type: ta.UNREGISTER_COMPONENT_HANDLE,
              payload: { documentKey: e, elementKey: t },
            });
          }
        );
      }
      function th(e, t, n) {
        return {
          type: ta.REGISTER_MEASURABLE,
          payload: { documentKey: e, elementKey: t, measurable: n },
        };
      }
      function tp(e, t) {
        return {
          type: ta.UNREGISTER_MEASURABLE,
          payload: { documentKey: e, elementKey: t },
        };
      }
      function tf(e) {
        return {
          type: ta.CHANGE_ELEMENT_BOX_MODELS,
          payload: { changedElementBoxModels: e },
        };
      }
      function tm(e) {
        return { type: ta.CHANGE_DOCUMENT_ELEMENT_SIZE, payload: { size: e } };
      }
      function tE(e, t, n) {
        return {
          type: ta.REGISTER_PROP_CONTROLLERS_HANDLE,
          payload: { documentKey: e, elementKey: t, handle: n },
        };
      }
      function tT(e, t, n) {
        return {
          type: ta.REGISTER_PROP_CONTROLLERS,
          payload: { documentKey: e, elementKey: t, propControllers: n },
        };
      }
      function tg(e, t) {
        return {
          type: ta.UNREGISTER_PROP_CONTROLLERS,
          payload: { documentKey: e, elementKey: t },
        };
      }
      function t_(e, t, n, r) {
        return {
          type: ta.MESSAGE_BUILDER_PROP_CONTROLLER,
          payload: { documentKey: e, elementKey: t, propName: n, message: r },
        };
      }
      function tA(e) {
        return { type: ta.SET_IS_IN_BUILDER, payload: e };
      }
      function tv(e) {
        return { type: ta.HANDLE_WHEEL, payload: e };
      }
      function tb(e) {
        return { type: ta.HANDLE_POINTER_MOVE, payload: e };
      }
      function ty(e, t, n) {
        return {
          type: ta.API_RESOURCE_FULFILLED,
          payload: { resourceType: e, resourceId: t, resource: n },
        };
      }
      function tN() {
        return { type: ta.CHANGE_PATHNAME_START };
      }
      function tC() {
        return { type: ta.CHANGE_PATHNAME_COMPLETE };
      }
      function tI(e) {
        return { type: ta.ELEMENT_FROM_POINT_CHANGE, payload: { keys: e } };
      }
      function tS(e) {
        return { type: ta.SET_BREAKPOINTS, payload: { breakpoints: e } };
      }
      function tR(e, t) {
        return {
          type: ta.SET_LOCALE,
          payload: { locale: tt.parse(e.toString()), pathname: t },
        };
      }
    },
    6325: function (e, t, n) {
      "use strict";
      n.d(t, {
        EU: function () {
          return u;
        },
        I6: function () {
          return p;
        },
        JP: function () {
          return l;
        },
        L8: function () {
          return c;
        },
        Qc: function () {
          return i;
        },
        dO: function () {
          return s;
        },
        iz: function () {
          return o;
        },
        nB: function () {
          return h;
        },
        v4: function () {
          return d;
        },
      });
      var r = n(9705),
        a = n(5900);
      function i(e) {
        let t = Number(e.replace(/px$/, ""));
        return Number.isFinite(t) ? t : 0;
      }
      function s(e) {
        return (0, r.oc)((0, r.dO)(e));
      }
      function o(e) {
        return (0, r.oc)((0, r.iz)(e));
      }
      function l(e) {
        return (
          e instanceof Element ||
          ("object" == typeof e &&
            null !== e &&
            "getBoxModel" in e &&
            "function" == typeof e.getBoxModel)
        );
      }
      function c(e) {
        return e instanceof Element ? o(e) : e.getBoxModel();
      }
      function u(e) {
        return e.measurables;
      }
      function d(e) {
        return e.boxModels;
      }
      function h(e, t, n) {
        var r, a;
        return null !==
          (a =
            null === (r = d(e).get(t)) || void 0 === r ? void 0 : r.get(n)) &&
          void 0 !== a
          ? a
          : null;
      }
      function p() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : { measurables: new Map(), boxModels: new Map() },
          r = arguments.length > 1 ? arguments[1] : void 0;
        switch (r.type) {
          case a.MF.REGISTER_MEASURABLE: {
            let { documentKey: t, elementKey: a, measurable: i } = r.payload;
            return {
              ...n,
              measurables: new Map(n.measurables).set(
                t,
                new Map(
                  null !== (e = n.measurables.get(t)) && void 0 !== e ? e : []
                ).set(a, i)
              ),
            };
          }
          case a.MF.UNREGISTER_MEASURABLE: {
            let { documentKey: e, elementKey: a } = r.payload,
              i = new Map(
                null !== (t = n.measurables.get(e)) && void 0 !== t ? t : []
              ),
              s = i.delete(a);
            return s
              ? { ...n, measurables: new Map(n.measurables).set(e, i) }
              : n;
          }
          case a.MF.CHANGE_ELEMENT_BOX_MODELS: {
            let { changedElementBoxModels: e } = r.payload;
            if (0 === e.size) return n;
            let t = new Map(n.boxModels);
            return (
              e.forEach((e, n) => {
                var r;
                let a = new Map(
                  null !== (r = t.get(n)) && void 0 !== r ? r : []
                );
                e.forEach((e, t) => {
                  null == e ? a.delete(t) : a.set(t, e);
                }),
                  a.size > 0 ? t.set(n, a) : t.delete(n);
              }),
              { ...n, boxModels: t }
            );
          }
          default:
            return n;
        }
      }
    },
    8358: function (e, t, n) {
      "use strict";
      n.d(t, {
        $C: function () {
          return s;
        },
        I6: function () {
          return c;
        },
        N4: function () {
          return h;
        },
        PR: function () {
          return g;
        },
        Y4: function () {
          return E;
        },
        aV: function () {
          return m;
        },
        aY: function () {
          return l;
        },
        iu: function () {
          return d;
        },
        n1: function () {
          return u;
        },
        v6: function () {
          return p;
        },
        v_: function () {
          return T;
        },
      });
      var r = n(1381),
        a = n(5900),
        i = n(8422);
      let s = { Desktop: "desktop", Tablet: "tablet", Mobile: "mobile" },
        o = [
          { id: s.Desktop, label: "Desktop", minWidth: 769 },
          {
            id: s.Tablet,
            label: "Tablet",
            minWidth: 576,
            maxWidth: 768,
            viewportWidth: 760,
          },
          { id: s.Mobile, label: "Mobile", maxWidth: 575, viewportWidth: 390 },
        ];
      function l() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
        return e;
      }
      function c() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : l(),
          t = arguments.length > 1 ? arguments[1] : void 0;
        if (t.type === a.MF.SET_BREAKPOINTS) {
          let e = t.payload.breakpoints;
          if (0 === e.length) throw Error("Breakpoints cannot be empty.");
          return e;
        }
        return e;
      }
      function u(e) {
        !(function (e) {
          if (s.Desktop in e)
            throw Error(
              'Cannot change the base breakpoint. "'.concat(
                s.Desktop,
                '" is reserved as the base breakpoint.'
              )
            );
          if (0 === Object.keys(e).length)
            throw Error(
              "Breakpoints cannot be empty. You must provide at least one breakpoint."
            );
          let t = Object.entries(e)
            .map((e) => {
              let [t, n] = e;
              return { ...n, id: t };
            })
            .sort((e, t) => t.width - e.width);
          t.forEach((e, t, n) => {
            let { id: r, width: a, viewport: i } = e;
            if (i && i > a)
              throw Error(
                'Error on breakpoint "'
                  .concat(
                    r,
                    '". Viewport cannot be greater than its width.\n        "'
                  )
                  .concat(r, '" has a viewport of ')
                  .concat(i, "px and a width of ")
                  .concat(a, "px.")
              );
            let s = n[t + 1];
            if (i && s && i < s.width)
              throw Error(
                'Error on breakpoint "'
                  .concat(
                    r,
                    '". Viewport cannot be smaller than the next breakpoint\'s width. \n        "'
                  )
                  .concat(r, '" has a viewport of ')
                  .concat(i, 'px and the next breakpoint "')
                  .concat(s.id, '" has a width of ')
                  .concat(s.width, "px.")
              );
            if (s && a === s.width)
              throw Error(
                'Breakpoints cannot have the same width. "'
                  .concat(r, '" and "')
                  .concat(s.id, '" have the same width')
              );
          });
        })(e);
        let t = Object.entries(e)
            .map((e) => {
              let [t, n] = e;
              return { ...n, id: t };
            })
            .sort((e, t) => t.width - e.width),
          n = t.reduce(
            (e, t, n, r) => {
              let { width: a, viewport: i, id: s, label: o } = t,
                l = r[n + 1],
                c = {
                  id: s,
                  ...(o && { label: o }),
                  ...(l && { minWidth: l.width + 1 }),
                  maxWidth: a,
                  viewportWidth: null != i ? i : a,
                };
              return [...e, c];
            },
            [{ id: s.Desktop, label: "Desktop", minWidth: t[0].width + 1 }]
          );
        return n;
      }
      let d = (e, t) => {
          let n = e.find((e) => {
            let { id: n } = e;
            return n === t;
          });
          if (null == n)
            throw Error('Unrecognized breakpoint ID: "'.concat(t, '".'));
          return n;
        },
        h = (e) => {
          var t, n;
          let r = e.sort(
            (e, r) =>
              (null !== (t = null == r ? void 0 : r.minWidth) && void 0 !== t
                ? t
                : 0) -
              (null !== (n = null == e ? void 0 : e.minWidth) && void 0 !== n
                ? n
                : 0)
          )[0];
          if (null == r) throw Error("Cannot get base breakpoint.");
          return r;
        };
      function p(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = arguments.length > 2 ? arguments[2] : void 0,
          r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : f,
          a = t.find((e) => {
            let { deviceId: t } = e;
            return t === n;
          }),
          i = e
            .slice(0, e.findIndex((e) => e.id === n) + 1)
            .reverse()
            .map((e) => t.find((t) => t.deviceId === e.id))
            .filter((e) => Boolean(e));
        return null != a || i.length > 0 ? r(a, i) : void 0;
      }
      function f(e, t) {
        return e || t[0];
      }
      function m(e, t) {
        return [e, ...t]
          .filter((e) => Boolean(e))
          .reduce((e, t) => ({
            deviceId: e.deviceId || t.deviceId,
            value: (0, r.Z)(e.value, t.value),
          }));
      }
      function E(e, t) {
        return [e, ...t]
          .filter((e) => Boolean(e))
          .reduce((e, t) => {
            var n, a;
            return {
              deviceId: e.deviceId || t.deviceId,
              value:
                ((n = e.value),
                (a = t.value),
                "object" != typeof n ||
                null === n ||
                Array.isArray(n) ||
                "object" != typeof a ||
                null === a ||
                Array.isArray(a)
                  ? (0, i.Z)(n, a)
                  : (0, r.Z)(n, a)),
            };
          });
      }
      function T(e, t, n, r) {
        return e
          .map((e) => {
            let { id: t } = e;
            return t;
          })
          .map((a) => {
            let i = n(
              t.map((t) => {
                let n = t && p(e, t, a, r);
                return null == n ? void 0 : n.value;
              })
            );
            return null == i ? null : { deviceId: a, value: i };
          })
          .filter((e) => Boolean(e));
      }
      let g = (e) => {
        let t = ["@media only screen"];
        return (
          null != e.minWidth &&
            t.push("(min-width: ".concat(e.minWidth, "px)")),
          null != e.maxWidth &&
            t.push("(max-width: ".concat(e.maxWidth, "px)")),
          t.join(" and ")
        );
      };
    },
    791: function (e, t, n) {
      "use strict";
      n.d(t, {
        I6: function () {
          return i;
        },
        U: function () {
          return a;
        },
      });
      var r = n(5900);
      let a = { BUILD: "build", CONTENT: "content", INTERACT: "interact" };
      function i() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          t = arguments.length > 1 ? arguments[1] : void 0;
        return t.type === r.MF.SET_BUILDER_EDIT_MODE ? t.payload.editMode : e;
      }
    },
    513: function (e, t, n) {
      "use strict";
      n.d(t, {
        I6: function () {
          return s;
        },
        Yw: function () {
          return a;
        },
        y: function () {
          return i;
        },
      });
      var r = n(5900);
      let a = {
        Billing: "billing",
        Bolt: "bolt",
        Button: "button",
        Carousel: "carousel",
        Chats: "chats",
        Code: "code",
        Countdown: "countdown",
        Cube: "cube",
        Database: "database",
        Divider: "divider",
        Form: "form",
        Gallery: "gallery",
        Help: "help",
        Image: "image",
        Layout: "layout",
        Lock: "lock",
        Navigation: "navigation",
        SocialLinks: "social-links",
        Star: "star",
        Text: "text",
        Users: "users",
        Video: "video",
      };
      function i(e) {
        return e;
      }
      function s() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : (function () {
                  let { componentsMeta: e = new Map() } =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return e;
                })(),
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case r.MF.REGISTER_COMPONENT:
            return new Map(e).set(t.payload.type, t.payload.meta);
          case r.MF.UNREGISTER_COMPONENT: {
            let n = new Map(e),
              r = n.delete(t.payload.type);
            return r ? n : e;
          }
          default:
            return e;
        }
      }
    },
    3502: function (e, t, n) {
      "use strict";
      n.d(t, {
        I6: function () {
          return a;
        },
      });
      var r = n(5900);
      function a() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = arguments.length > 1 ? arguments[1] : void 0;
        return t.type === r.MF.SET_IS_IN_BUILDER ? t.payload : e;
      }
    },
    1493: function (e, t, n) {
      "use strict";
      function r() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return e;
      }
      function a(e) {
        return e;
      }
      function i() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : r(),
          t = arguments.length > 1 ? arguments[1] : void 0;
        return t.type, e;
      }
      n.d(t, {
        I6: function () {
          return i;
        },
        Yh: function () {
          return a;
        },
        aY: function () {
          return r;
        },
      });
    },
    3821: function (e, t, n) {
      "use strict";
      n.d(t, {
        I6: function () {
          return l;
        },
        NL: function () {
          return a;
        },
        TP: function () {
          return s;
        },
        kM: function () {
          return o;
        },
        y$: function () {
          return i;
        },
      });
      var r = n(5900);
      function a(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          "setPropControllers" in e &&
          "function" == typeof e.setPropControllers
        );
      }
      function i(e, t, n) {
        var r, a;
        return null !==
          (a =
            null === (r = e.handles.get(t)) || void 0 === r
              ? void 0
              : r.get(n)) && void 0 !== a
          ? a
          : null;
      }
      function s(e, t, n) {
        var r, a;
        return null !==
          (a =
            null === (r = e.instances.get(t)) || void 0 === r
              ? void 0
              : r.get(n)) && void 0 !== a
          ? a
          : null;
      }
      function o(e, t, n, r) {
        var a, i;
        return null !==
          (i = null === (a = s(e, t, n)) || void 0 === a ? void 0 : a[r]) &&
          void 0 !== i
          ? i
          : null;
      }
      function l() {
        var e, t, n, a;
        let i =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : { handles: new Map(), instances: new Map() },
          s = arguments.length > 1 ? arguments[1] : void 0;
        switch (s.type) {
          case r.MF.REGISTER_PROP_CONTROLLERS_HANDLE: {
            let { documentKey: t, elementKey: n, handle: r } = s.payload;
            return {
              ...i,
              handles: new Map(i.handles).set(
                t,
                new Map(
                  null !== (e = i.handles.get(t)) && void 0 !== e ? e : []
                ).set(n, r)
              ),
            };
          }
          case r.MF.UNREGISTER_PROP_CONTROLLERS_HANDLE: {
            let { documentKey: e, elementKey: n } = s.payload,
              r = new Map(
                null !== (t = i.handles.get(e)) && void 0 !== t ? t : []
              ),
              a = r.delete(n);
            return a ? { ...i, handles: new Map(i.handles).set(e, r) } : i;
          }
          case r.MF.REGISTER_PROP_CONTROLLERS: {
            let {
              documentKey: e,
              elementKey: t,
              propControllers: r,
            } = s.payload;
            return {
              ...i,
              instances: new Map(i.instances).set(
                e,
                new Map(
                  null !== (n = i.instances.get(e)) && void 0 !== n ? n : []
                ).set(t, r)
              ),
            };
          }
          case r.MF.UNREGISTER_PROP_CONTROLLERS: {
            let { documentKey: e, elementKey: t } = s.payload,
              n = new Map(
                null !== (a = i.instances.get(e)) && void 0 !== a ? a : []
              ),
              r = n.delete(t);
            return r ? { ...i, instances: new Map(i.instances).set(e, n) } : i;
          }
          default:
            return i;
        }
      }
    },
    7042: function (e, t, n) {
      "use strict";
      n.d(t, {
        De: function () {
          return i;
        },
        I6: function () {
          return s;
        },
        og: function () {
          return a;
        },
      });
      var r = n(5900);
      function a(e) {
        return e;
      }
      function i(e, t) {
        var n;
        return null !== (n = e.get(t)) && void 0 !== n ? n : null;
      }
      function s() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : (function () {
                  let { propControllerDescriptors: e = new Map() } =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return e;
                })(),
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case r.MF.REGISTER_COMPONENT:
            return new Map(e).set(
              t.payload.type,
              t.payload.propControllerDescriptors
            );
          case r.MF.UNREGISTER_COMPONENT: {
            let n = new Map(e),
              r = n.delete(t.payload.type);
            return r ? n : e;
          }
          default:
            return e;
        }
      }
    },
    5486: function (e, t, n) {
      "use strict";
      n.d(t, {
        I6: function () {
          return i;
        },
        ZN: function () {
          return a;
        },
      });
      var r = n(5900);
      function a(e, t) {
        var n;
        return null !== (n = e.get(t)) && void 0 !== n ? n : null;
      }
      function i() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : (function () {
                  let { reactComponents: e = new Map() } =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return e;
                })(),
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case r.MF.REGISTER_REACT_COMPONENT:
            return new Map(e).set(t.payload.type, t.payload.component);
          case r.MF.UNREGISTER_REACT_COMPONENT: {
            let n = new Map(e),
              r = n.delete(t.payload.type);
            return r ? n : e;
          }
          default:
            return e;
        }
      }
    },
    3649: function (e, t, n) {
      "use strict";
      n.d(t, {
        AO: function () {
          return i;
        },
        I6: function () {
          return u;
        },
        Me: function () {
          return c;
        },
        OE: function () {
          return s;
        },
        Sc: function () {
          return a;
        },
        aY: function () {
          return o;
        },
        qi: function () {
          return l;
        },
      });
      var r = n(5900);
      function a(e) {
        return !("props" in e);
      }
      function i(e) {
        return { key: e };
      }
      function s(e, t) {
        return { key: e, rootElement: t };
      }
      function o() {
        let { rootElements: e = new Map() } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = new Map();
        return (
          e.forEach((e, n) => {
            t.set(n, s(n, e));
          }),
          t
        );
      }
      function l(e) {
        return e;
      }
      function c(e, t) {
        var n;
        return null !== (n = e.get(t)) && void 0 !== n ? n : null;
      }
      function u() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : o(),
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case r.MF.REGISTER_DOCUMENT:
            return new Map(e).set(t.payload.documentKey, t.payload.document);
          case r.MF.UNREGISTER_DOCUMENT: {
            let n = new Map(e),
              r = n.delete(t.payload.documentKey);
            return r ? n : e;
          }
          default:
            return e;
        }
      }
    },
    8574: function (e, t, n) {
      "use strict";
      n.d(t, {
        De: function () {
          return v;
        },
        Ev: function () {
          return N;
        },
        Me: function () {
          return g;
        },
        Sp: function () {
          return I;
        },
        TP: function () {
          return b;
        },
        Yh: function () {
          return L;
        },
        ZN: function () {
          return _;
        },
        eW: function () {
          return k;
        },
        ei: function () {
          return D;
        },
        fF: function () {
          return O;
        },
        le: function () {
          return M;
        },
        nR: function () {
          return S;
        },
        sb: function () {
          return C;
        },
        sj: function () {
          return x;
        },
        vS: function () {
          return R;
        },
        xC: function () {
          return w;
        },
      });
      var r = n(1441),
        a = n(9598),
        i = n(3649),
        s = n(5486),
        o = n(513),
        l = n(7042),
        c = n(3821),
        u = n(3502),
        d = n(1493),
        h = n(791),
        p = n(8358),
        f = n(1748),
        m = n(7878),
        E = n(5639);
      let T = (0, r.UY)({
        documents: i.I6,
        reactComponents: s.I6,
        componentsMeta: o.I6,
        propControllers: l.I6,
        propControllerHandles: c.I6,
        isInBuilder: u.I6,
        isPreview: d.I6,
        builderEditMode: h.I6,
        breakpoints: p.I6,
      });
      function g(e, t) {
        return i.Me(e.documents, t);
      }
      function _(e, t) {
        return s.ZN(e.reactComponents, t);
      }
      function A(e) {
        return e.propControllers;
      }
      function v(e, t) {
        return l.De(A(e), t);
      }
      function b(e, t, n) {
        return c.TP(e.propControllerHandles, t, n);
      }
      function y(e, t) {
        let n = g(e, t),
          r = l.og(A(e));
        return null == n
          ? new Map()
          : (function (e, t) {
              let n;
              let r = new Map(),
                a = [e];
              for (; (n = a.pop()); ) {
                if ((r.set(n.key, n), i.Sc(n))) continue;
                let e = t.get(n.type);
                if (null == e) continue;
                let s = n,
                  o = Object.entries(e).reduce((e, t) => {
                    let [n, r] = t;
                    return [...e, ...f.A5(r, s.props[n])];
                  }, []);
                a.push(...o);
              }
              return r;
            })(n.rootElement, r);
      }
      function N(e) {
        let t = i.qi(e.documents),
          n = Array.from(t.keys());
        if (n.length < 2) return n;
        let r = new Map();
        return (
          n.forEach((t) => {
            r.set(t, y(e, t));
          }),
          n.sort((e, t) => {
            var n;
            return (null === (n = r.get(e)) || void 0 === n ? void 0 : n.has(t))
              ? -1
              : 1;
          }),
          n
        );
      }
      function C(e, t, n) {
        var r;
        return null !== (r = y(e, t).get(n)) && void 0 !== r ? r : null;
      }
      function I(e, t, n) {
        let r = C(e, t, n);
        return null == r || i.Sc(r) ? null : v(e, r.type);
      }
      function S(e, t, n) {
        let r = C(e, t, n);
        if (null == r || i.Sc(r)) return null;
        let a = v(e, r.type);
        if (null == a) return null;
        let s = Object.entries(a).reduce((e, t) => {
          let [n, a] = t;
          return null != e ? e : f.nR(a, r.props[n]);
        }, null);
        return s;
      }
      function R(e, t, n) {
        let r = JSON.parse(JSON.stringify(t));
        return (function e(t, n) {
          return function (r) {
            let a = { replacementContext: n, copyElement: e(t, n) };
            if (i.Sc(r)) return { ...r, value: (0, m.b)(r.value, a) };
            let s = v(t, r.type);
            if (null == s) return r;
            for (let [e, t] of Object.entries(s))
              r.props[e] = (0, E.JG)(t, r.props[e], a);
            return r;
          };
        })(
          e,
          (function (e) {
            let t = {
              elementHtmlIds: new Set(e.elementHtmlIds),
              elementKeys: new Map(
                e.elementKeys && Object.entries(e.elementKeys)
              ),
              swatchIds: new Map(e.swatchIds && Object.entries(e.swatchIds)),
              fileIds: new Map(e.fileIds && Object.entries(e.fileIds)),
              typographyIds: new Map(
                e.typographyIds && Object.entries(e.typographyIds)
              ),
              tableIds: new Map(e.tableIds && Object.entries(e.tableIds)),
              tableColumnIds: new Map(
                e.tableColumnIds && Object.entries(e.tableColumnIds)
              ),
              pageIds: new Map(e.pageIds && Object.entries(e.pageIds)),
              globalElementIds: new Map(
                e.globalElementIds && Object.entries(e.globalElementIds)
              ),
              globalElementData: new Map(
                e.globalElementData && Object.entries(e.globalElementData)
              ),
            };
            return t;
          })(n)
        )(r);
      }
      function O(e, t) {
        let n = {};
        for (let r of (function* e(t, n) {
          if ((yield n, i.Sc(n))) return;
          let r = v(t, n.type);
          if (null != r)
            for (let [a, s] of Object.entries(r)) {
              let r = f.A5(s, n.props[a]);
              for (let n of r) i.Sc(n) || (yield* e(t, n)), yield n;
            }
        })(e, t)) {
          if (i.Sc(r)) continue;
          let t = v(e, r.type);
          null != t &&
            Object.entries(t).forEach((e) => {
              let [t, a] = e,
                i = (0, E.JC)(a, r.props[t]);
              null != i && (n["".concat(r.key, ":").concat(t)] = i);
            });
        }
        return n;
      }
      function k(e, t, n) {
        return (function e(t, n) {
          return function (r) {
            if (i.Sc(r)) return r;
            let a = l.og(A(t)),
              s = a.get(r.type);
            if (null == s)
              throw Error(
                "Can't merge element of type \"".concat(
                  r.type,
                  '" because it has no descriptors'
                )
              );
            let o = { translatedData: n, mergeTranslatedData: e(t, n) },
              c = {};
            for (let e of Object.keys(s)) {
              let t = s[e];
              c[e] = (0, E.UF)(
                t,
                r.props[e],
                n["".concat(r.key, ":").concat(e)],
                o
              );
            }
            return { ...r, props: c };
          };
        })(
          e,
          n
        )(t);
      }
      function x(e) {
        return e.isInBuilder;
      }
      function L(e) {
        return d.Yh(e.isPreview);
      }
      function D(e) {
        return e.builderEditMode;
      }
      function M(e) {
        return e.breakpoints;
      }
      function w() {
        let {
          rootElements: e,
          preloadedState: t,
          breakpoints: n,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, r.MT)(
          T,
          {
            ...t,
            documents: i.aY({ rootElements: e }),
            breakpoints: p.aY(
              null != n ? n : null == t ? void 0 : t.breakpoints
            ),
          },
          (0, r.md)(a.Z)
        );
      }
    },
    8422: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var r = function () {
        let e;
        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        for (e = 0; e < n.length - 1 && null == n[e]; e += 1);
        return n[e];
      };
    },
    628: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(8627);
      let { hasOwnProperty: a } = Object.prototype,
        i = (e, t) => {
          if ((0, r.Z)(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          let n = Object.keys(e),
            s = Object.keys(t);
          if (n.length !== s.length) return !1;
          for (let r = 0; r < n.length; r += 1)
            if (!a.call(t, n[r]) || !i(e[n[r]], t[n[r]])) return !1;
          return !0;
        };
      var s = i;
    },
    324: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      let r = (e) => Object.keys(e);
      var a = r;
    },
    8627: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      let { hasOwnProperty: a } = Object.prototype,
        i = (e, t) => {
          if (r(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          let n = Object.keys(e),
            i = Object.keys(t);
          if (n.length !== i.length) return !1;
          for (let i = 0; i < n.length; i += 1)
            if (!a.call(t, n[i]) || !r(e[n[i]], t[n[i]])) return !1;
          return !0;
        };
      var s = i;
    },
    1381: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(324),
        a = n(8422);
      function i(e, t) {
        let n = (0, r.Z)(t),
          i = { ...e };
        return (
          n.forEach((e) => {
            i[e] = (0, a.Z)(i[e], t[e]);
          }),
          i
        );
      }
    },
    6187: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          let n = i.default,
            a = {
              loading: (e) => {
                let { error: t, isLoading: n, pastDelay: r } = e;
                return null;
              },
            };
          e instanceof Promise
            ? (a.loader = () => e)
            : "function" == typeof e
            ? (a.loader = e)
            : "object" == typeof e && (a = r({}, a, e)),
            (a = r({}, a, t));
          let l = a.loader,
            c = () =>
              null != l ? l().then(s) : Promise.resolve(s(() => null));
          return (a.loadableGenerated &&
            delete (a = r({}, a, a.loadableGenerated)).loadableGenerated,
          "boolean" != typeof a.ssr || a.ssr)
            ? n(r({}, a, { loader: c }))
            : (delete a.webpack, delete a.modules, o(n, a));
        }),
        (t.noSSR = o);
      var r = n(834).Z,
        a = n(1997).Z,
        i = (a(n(2983)), a(n(8174)));
      function s(e) {
        return { default: (null == e ? void 0 : e.default) || e };
      }
      function o(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1706: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LoadableContext = void 0);
      var r = (0, n(1997).Z)(n(2983));
      let a = r.default.createContext(null);
      t.LoadableContext = a;
    },
    8174: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = n(834).Z,
        a = (0, n(1997).Z)(n(2983)),
        i = n(1706);
      let s = [],
        o = [],
        l = !1;
      function c(e) {
        let t = e(),
          n = { loading: !0, loaded: null, error: null };
        return (
          (n.promise = t
            .then((e) => ((n.loading = !1), (n.loaded = e), e))
            .catch((e) => {
              throw ((n.loading = !1), (n.error = e), e);
            })),
          n
        );
      }
      class u {
        promise() {
          return this._res.promise;
        }
        retry() {
          this._clearTimeouts(),
            (this._res = this._loadFn(this._opts.loader)),
            (this._state = { pastDelay: !1, timedOut: !1 });
          let { _res: e, _opts: t } = this;
          e.loading &&
            ("number" == typeof t.delay &&
              (0 === t.delay
                ? (this._state.pastDelay = !0)
                : (this._delay = setTimeout(() => {
                    this._update({ pastDelay: !0 });
                  }, t.delay))),
            "number" == typeof t.timeout &&
              (this._timeout = setTimeout(() => {
                this._update({ timedOut: !0 });
              }, t.timeout))),
            this._res.promise
              .then(() => {
                this._update({}), this._clearTimeouts();
              })
              .catch((e) => {
                this._update({}), this._clearTimeouts();
              }),
            this._update({});
        }
        _update(e) {
          (this._state = r(
            {},
            this._state,
            {
              error: this._res.error,
              loaded: this._res.loaded,
              loading: this._res.loading,
            },
            e
          )),
            this._callbacks.forEach((e) => e());
        }
        _clearTimeouts() {
          clearTimeout(this._delay), clearTimeout(this._timeout);
        }
        getCurrentValue() {
          return this._state;
        }
        subscribe(e) {
          return (
            this._callbacks.add(e),
            () => {
              this._callbacks.delete(e);
            }
          );
        }
        constructor(e, t) {
          (this._loadFn = e),
            (this._opts = t),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
      }
      function d(e) {
        return (function (e, t) {
          let n = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
              },
              t
            ),
            r = null;
          function s() {
            if (!r) {
              let t = new u(e, n);
              r = {
                getCurrentValue: t.getCurrentValue.bind(t),
                subscribe: t.subscribe.bind(t),
                retry: t.retry.bind(t),
                promise: t.promise.bind(t),
              };
            }
            return r.promise();
          }
          if (!l) {
            let e = n.webpack ? n.webpack() : n.modules;
            e &&
              o.push((t) => {
                for (let n of e) if (-1 !== t.indexOf(n)) return s();
              });
          }
          function c(e, t) {
            !(function () {
              s();
              let e = a.default.useContext(i.LoadableContext);
              e &&
                Array.isArray(n.modules) &&
                n.modules.forEach((t) => {
                  e(t);
                });
            })();
            let o = a.default.useSyncExternalStore(
              r.subscribe,
              r.getCurrentValue,
              r.getCurrentValue
            );
            return (
              a.default.useImperativeHandle(t, () => ({ retry: r.retry }), []),
              a.default.useMemo(() => {
                var t;
                return o.loading || o.error
                  ? a.default.createElement(n.loading, {
                      isLoading: o.loading,
                      pastDelay: o.pastDelay,
                      timedOut: o.timedOut,
                      error: o.error,
                      retry: r.retry,
                    })
                  : o.loaded
                  ? a.default.createElement(
                      (t = o.loaded) && t.default ? t.default : t,
                      e
                    )
                  : null;
              }, [e, o])
            );
          }
          return (
            (c.preload = () => s()),
            (c.displayName = "LoadableComponent"),
            a.default.forwardRef(c)
          );
        })(c, e);
      }
      function h(e, t) {
        let n = [];
        for (; e.length; ) {
          let r = e.pop();
          n.push(r(t));
        }
        return Promise.all(n).then(() => {
          if (e.length) return h(e, t);
        });
      }
      (d.preloadAll = () =>
        new Promise((e, t) => {
          h(s).then(e, t);
        })),
        (d.preloadReady = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise((t) => {
            let n = () => ((l = !0), t());
            h(o, e).then(n, n);
          });
        }),
        (window.__NEXT_PRELOADREADY = d.preloadReady),
        (t.default = d);
    },
    7455: function (e, t, n) {
      e.exports = n(6187);
    },
    2227: function (e, t, n) {
      e.exports = n(9578);
    },
    8854: function (e, t, n) {
      "use strict";
      function r(e, t, n, r, a, i, s) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = r),
          (this.attributeNamespace = a),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = i),
          (this.removeEmptyString = s);
      }
      let a = {};
      [
        "children",
        "dangerouslySetInnerHTML",
        "defaultValue",
        "defaultChecked",
        "innerHTML",
        "suppressContentEditableWarning",
        "suppressHydrationWarning",
        "style",
      ].forEach((e) => {
        a[e] = new r(e, 0, !1, e, null, !1, !1);
      }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
        ].forEach(([e, t]) => {
          a[e] = new r(e, 1, !1, t, null, !1, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach((e) => {
          a[e] = new r(e, 2, !1, e.toLowerCase(), null, !1, !1);
        }),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha",
        ].forEach((e) => {
          a[e] = new r(e, 2, !1, e, null, !1, !1);
        }),
        [
          "allowFullScreen",
          "async",
          "autoFocus",
          "autoPlay",
          "controls",
          "default",
          "defer",
          "disabled",
          "disablePictureInPicture",
          "disableRemotePlayback",
          "formNoValidate",
          "hidden",
          "loop",
          "noModule",
          "noValidate",
          "open",
          "playsInline",
          "readOnly",
          "required",
          "reversed",
          "scoped",
          "seamless",
          "itemScope",
        ].forEach((e) => {
          a[e] = new r(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
        ["checked", "multiple", "muted", "selected"].forEach((e) => {
          a[e] = new r(e, 3, !0, e, null, !1, !1);
        }),
        ["capture", "download"].forEach((e) => {
          a[e] = new r(e, 4, !1, e, null, !1, !1);
        }),
        ["cols", "rows", "size", "span"].forEach((e) => {
          a[e] = new r(e, 6, !1, e, null, !1, !1);
        }),
        ["rowSpan", "start"].forEach((e) => {
          a[e] = new r(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
      let i = /[\-\:]([a-z])/g,
        s = (e) => e[1].toUpperCase();
      [
        "accent-height",
        "alignment-baseline",
        "arabic-form",
        "baseline-shift",
        "cap-height",
        "clip-path",
        "clip-rule",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "dominant-baseline",
        "enable-background",
        "fill-opacity",
        "fill-rule",
        "flood-color",
        "flood-opacity",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-weight",
        "glyph-name",
        "glyph-orientation-horizontal",
        "glyph-orientation-vertical",
        "horiz-adv-x",
        "horiz-origin-x",
        "image-rendering",
        "letter-spacing",
        "lighting-color",
        "marker-end",
        "marker-mid",
        "marker-start",
        "overline-position",
        "overline-thickness",
        "paint-order",
        "panose-1",
        "pointer-events",
        "rendering-intent",
        "shape-rendering",
        "stop-color",
        "stop-opacity",
        "strikethrough-position",
        "strikethrough-thickness",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke-width",
        "text-anchor",
        "text-decoration",
        "text-rendering",
        "underline-position",
        "underline-thickness",
        "unicode-bidi",
        "unicode-range",
        "units-per-em",
        "v-alphabetic",
        "v-hanging",
        "v-ideographic",
        "v-mathematical",
        "vector-effect",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y",
        "word-spacing",
        "writing-mode",
        "xmlns:xlink",
        "x-height",
      ].forEach((e) => {
        let t = e.replace(i, s);
        a[t] = new r(t, 1, !1, e, null, !1, !1);
      }),
        [
          "xlink:actuate",
          "xlink:arcrole",
          "xlink:role",
          "xlink:show",
          "xlink:title",
          "xlink:type",
        ].forEach((e) => {
          let t = e.replace(i, s);
          a[t] = new r(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
        }),
        ["xml:base", "xml:lang", "xml:space"].forEach((e) => {
          let t = e.replace(i, s);
          a[t] = new r(
            t,
            1,
            !1,
            e,
            "http://www.w3.org/XML/1998/namespace",
            !1,
            !1
          );
        }),
        ["tabIndex", "crossOrigin"].forEach((e) => {
          a[e] = new r(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }),
        (a.xlinkHref = new r(
          "xlinkHref",
          1,
          !1,
          "xlink:href",
          "http://www.w3.org/1999/xlink",
          !0,
          !1
        )),
        ["src", "href", "action", "formAction"].forEach((e) => {
          a[e] = new r(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
      let { CAMELCASE: o, SAME: l, possibleStandardNames: c } = n(5666),
        u = RegExp.prototype.test.bind(
          RegExp(
            "^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
          )
        ),
        d = Object.keys(c).reduce((e, t) => {
          let n = c[t];
          return (
            n === l
              ? (e[t] = t)
              : n === o
              ? (e[t.toLowerCase()] = t)
              : (e[t] = n),
            e
          );
        }, {});
      (t.BOOLEAN = 3),
        (t.BOOLEANISH_STRING = 2),
        (t.NUMERIC = 5),
        (t.OVERLOADED_BOOLEAN = 4),
        (t.POSITIVE_NUMERIC = 6),
        (t.RESERVED = 0),
        (t.STRING = 1),
        (t.getPropertyInfo = function (e) {
          return a.hasOwnProperty(e) ? a[e] : null;
        }),
        (t.isCustomAttribute = u),
        (t.possibleStandardNames = d);
    },
    5666: function (e, t) {
      (t.SAME = 0),
        (t.CAMELCASE = 1),
        (t.possibleStandardNames = {
          accept: 0,
          acceptCharset: 1,
          "accept-charset": "acceptCharset",
          accessKey: 1,
          action: 0,
          allowFullScreen: 1,
          alt: 0,
          as: 0,
          async: 0,
          autoCapitalize: 1,
          autoComplete: 1,
          autoCorrect: 1,
          autoFocus: 1,
          autoPlay: 1,
          autoSave: 1,
          capture: 0,
          cellPadding: 1,
          cellSpacing: 1,
          challenge: 0,
          charSet: 1,
          checked: 0,
          children: 0,
          cite: 0,
          class: "className",
          classID: 1,
          className: 1,
          cols: 0,
          colSpan: 1,
          content: 0,
          contentEditable: 1,
          contextMenu: 1,
          controls: 0,
          controlsList: 1,
          coords: 0,
          crossOrigin: 1,
          dangerouslySetInnerHTML: 1,
          data: 0,
          dateTime: 1,
          default: 0,
          defaultChecked: 1,
          defaultValue: 1,
          defer: 0,
          dir: 0,
          disabled: 0,
          disablePictureInPicture: 1,
          disableRemotePlayback: 1,
          download: 0,
          draggable: 0,
          encType: 1,
          enterKeyHint: 1,
          for: "htmlFor",
          form: 0,
          formMethod: 1,
          formAction: 1,
          formEncType: 1,
          formNoValidate: 1,
          formTarget: 1,
          frameBorder: 1,
          headers: 0,
          height: 0,
          hidden: 0,
          high: 0,
          href: 0,
          hrefLang: 1,
          htmlFor: 1,
          httpEquiv: 1,
          "http-equiv": "httpEquiv",
          icon: 0,
          id: 0,
          innerHTML: 1,
          inputMode: 1,
          integrity: 0,
          is: 0,
          itemID: 1,
          itemProp: 1,
          itemRef: 1,
          itemScope: 1,
          itemType: 1,
          keyParams: 1,
          keyType: 1,
          kind: 0,
          label: 0,
          lang: 0,
          list: 0,
          loop: 0,
          low: 0,
          manifest: 0,
          marginWidth: 1,
          marginHeight: 1,
          max: 0,
          maxLength: 1,
          media: 0,
          mediaGroup: 1,
          method: 0,
          min: 0,
          minLength: 1,
          multiple: 0,
          muted: 0,
          name: 0,
          noModule: 1,
          nonce: 0,
          noValidate: 1,
          open: 0,
          optimum: 0,
          pattern: 0,
          placeholder: 0,
          playsInline: 1,
          poster: 0,
          preload: 0,
          profile: 0,
          radioGroup: 1,
          readOnly: 1,
          referrerPolicy: 1,
          rel: 0,
          required: 0,
          reversed: 0,
          role: 0,
          rows: 0,
          rowSpan: 1,
          sandbox: 0,
          scope: 0,
          scoped: 0,
          scrolling: 0,
          seamless: 0,
          selected: 0,
          shape: 0,
          size: 0,
          sizes: 0,
          span: 0,
          spellCheck: 1,
          src: 0,
          srcDoc: 1,
          srcLang: 1,
          srcSet: 1,
          start: 0,
          step: 0,
          style: 0,
          summary: 0,
          tabIndex: 1,
          target: 0,
          title: 0,
          type: 0,
          useMap: 1,
          value: 0,
          width: 0,
          wmode: 0,
          wrap: 0,
          about: 0,
          accentHeight: 1,
          "accent-height": "accentHeight",
          accumulate: 0,
          additive: 0,
          alignmentBaseline: 1,
          "alignment-baseline": "alignmentBaseline",
          allowReorder: 1,
          alphabetic: 0,
          amplitude: 0,
          arabicForm: 1,
          "arabic-form": "arabicForm",
          ascent: 0,
          attributeName: 1,
          attributeType: 1,
          autoReverse: 1,
          azimuth: 0,
          baseFrequency: 1,
          baselineShift: 1,
          "baseline-shift": "baselineShift",
          baseProfile: 1,
          bbox: 0,
          begin: 0,
          bias: 0,
          by: 0,
          calcMode: 1,
          capHeight: 1,
          "cap-height": "capHeight",
          clip: 0,
          clipPath: 1,
          "clip-path": "clipPath",
          clipPathUnits: 1,
          clipRule: 1,
          "clip-rule": "clipRule",
          color: 0,
          colorInterpolation: 1,
          "color-interpolation": "colorInterpolation",
          colorInterpolationFilters: 1,
          "color-interpolation-filters": "colorInterpolationFilters",
          colorProfile: 1,
          "color-profile": "colorProfile",
          colorRendering: 1,
          "color-rendering": "colorRendering",
          contentScriptType: 1,
          contentStyleType: 1,
          cursor: 0,
          cx: 0,
          cy: 0,
          d: 0,
          datatype: 0,
          decelerate: 0,
          descent: 0,
          diffuseConstant: 1,
          direction: 0,
          display: 0,
          divisor: 0,
          dominantBaseline: 1,
          "dominant-baseline": "dominantBaseline",
          dur: 0,
          dx: 0,
          dy: 0,
          edgeMode: 1,
          elevation: 0,
          enableBackground: 1,
          "enable-background": "enableBackground",
          end: 0,
          exponent: 0,
          externalResourcesRequired: 1,
          fill: 0,
          fillOpacity: 1,
          "fill-opacity": "fillOpacity",
          fillRule: 1,
          "fill-rule": "fillRule",
          filter: 0,
          filterRes: 1,
          filterUnits: 1,
          floodOpacity: 1,
          "flood-opacity": "floodOpacity",
          floodColor: 1,
          "flood-color": "floodColor",
          focusable: 0,
          fontFamily: 1,
          "font-family": "fontFamily",
          fontSize: 1,
          "font-size": "fontSize",
          fontSizeAdjust: 1,
          "font-size-adjust": "fontSizeAdjust",
          fontStretch: 1,
          "font-stretch": "fontStretch",
          fontStyle: 1,
          "font-style": "fontStyle",
          fontVariant: 1,
          "font-variant": "fontVariant",
          fontWeight: 1,
          "font-weight": "fontWeight",
          format: 0,
          from: 0,
          fx: 0,
          fy: 0,
          g1: 0,
          g2: 0,
          glyphName: 1,
          "glyph-name": "glyphName",
          glyphOrientationHorizontal: 1,
          "glyph-orientation-horizontal": "glyphOrientationHorizontal",
          glyphOrientationVertical: 1,
          "glyph-orientation-vertical": "glyphOrientationVertical",
          glyphRef: 1,
          gradientTransform: 1,
          gradientUnits: 1,
          hanging: 0,
          horizAdvX: 1,
          "horiz-adv-x": "horizAdvX",
          horizOriginX: 1,
          "horiz-origin-x": "horizOriginX",
          ideographic: 0,
          imageRendering: 1,
          "image-rendering": "imageRendering",
          in2: 0,
          in: 0,
          inlist: 0,
          intercept: 0,
          k1: 0,
          k2: 0,
          k3: 0,
          k4: 0,
          k: 0,
          kernelMatrix: 1,
          kernelUnitLength: 1,
          kerning: 0,
          keyPoints: 1,
          keySplines: 1,
          keyTimes: 1,
          lengthAdjust: 1,
          letterSpacing: 1,
          "letter-spacing": "letterSpacing",
          lightingColor: 1,
          "lighting-color": "lightingColor",
          limitingConeAngle: 1,
          local: 0,
          markerEnd: 1,
          "marker-end": "markerEnd",
          markerHeight: 1,
          markerMid: 1,
          "marker-mid": "markerMid",
          markerStart: 1,
          "marker-start": "markerStart",
          markerUnits: 1,
          markerWidth: 1,
          mask: 0,
          maskContentUnits: 1,
          maskUnits: 1,
          mathematical: 0,
          mode: 0,
          numOctaves: 1,
          offset: 0,
          opacity: 0,
          operator: 0,
          order: 0,
          orient: 0,
          orientation: 0,
          origin: 0,
          overflow: 0,
          overlinePosition: 1,
          "overline-position": "overlinePosition",
          overlineThickness: 1,
          "overline-thickness": "overlineThickness",
          paintOrder: 1,
          "paint-order": "paintOrder",
          panose1: 0,
          "panose-1": "panose1",
          pathLength: 1,
          patternContentUnits: 1,
          patternTransform: 1,
          patternUnits: 1,
          pointerEvents: 1,
          "pointer-events": "pointerEvents",
          points: 0,
          pointsAtX: 1,
          pointsAtY: 1,
          pointsAtZ: 1,
          prefix: 0,
          preserveAlpha: 1,
          preserveAspectRatio: 1,
          primitiveUnits: 1,
          property: 0,
          r: 0,
          radius: 0,
          refX: 1,
          refY: 1,
          renderingIntent: 1,
          "rendering-intent": "renderingIntent",
          repeatCount: 1,
          repeatDur: 1,
          requiredExtensions: 1,
          requiredFeatures: 1,
          resource: 0,
          restart: 0,
          result: 0,
          results: 0,
          rotate: 0,
          rx: 0,
          ry: 0,
          scale: 0,
          security: 0,
          seed: 0,
          shapeRendering: 1,
          "shape-rendering": "shapeRendering",
          slope: 0,
          spacing: 0,
          specularConstant: 1,
          specularExponent: 1,
          speed: 0,
          spreadMethod: 1,
          startOffset: 1,
          stdDeviation: 1,
          stemh: 0,
          stemv: 0,
          stitchTiles: 1,
          stopColor: 1,
          "stop-color": "stopColor",
          stopOpacity: 1,
          "stop-opacity": "stopOpacity",
          strikethroughPosition: 1,
          "strikethrough-position": "strikethroughPosition",
          strikethroughThickness: 1,
          "strikethrough-thickness": "strikethroughThickness",
          string: 0,
          stroke: 0,
          strokeDasharray: 1,
          "stroke-dasharray": "strokeDasharray",
          strokeDashoffset: 1,
          "stroke-dashoffset": "strokeDashoffset",
          strokeLinecap: 1,
          "stroke-linecap": "strokeLinecap",
          strokeLinejoin: 1,
          "stroke-linejoin": "strokeLinejoin",
          strokeMiterlimit: 1,
          "stroke-miterlimit": "strokeMiterlimit",
          strokeWidth: 1,
          "stroke-width": "strokeWidth",
          strokeOpacity: 1,
          "stroke-opacity": "strokeOpacity",
          suppressContentEditableWarning: 1,
          suppressHydrationWarning: 1,
          surfaceScale: 1,
          systemLanguage: 1,
          tableValues: 1,
          targetX: 1,
          targetY: 1,
          textAnchor: 1,
          "text-anchor": "textAnchor",
          textDecoration: 1,
          "text-decoration": "textDecoration",
          textLength: 1,
          textRendering: 1,
          "text-rendering": "textRendering",
          to: 0,
          transform: 0,
          typeof: 0,
          u1: 0,
          u2: 0,
          underlinePosition: 1,
          "underline-position": "underlinePosition",
          underlineThickness: 1,
          "underline-thickness": "underlineThickness",
          unicode: 0,
          unicodeBidi: 1,
          "unicode-bidi": "unicodeBidi",
          unicodeRange: 1,
          "unicode-range": "unicodeRange",
          unitsPerEm: 1,
          "units-per-em": "unitsPerEm",
          unselectable: 0,
          vAlphabetic: 1,
          "v-alphabetic": "vAlphabetic",
          values: 0,
          vectorEffect: 1,
          "vector-effect": "vectorEffect",
          version: 0,
          vertAdvY: 1,
          "vert-adv-y": "vertAdvY",
          vertOriginX: 1,
          "vert-origin-x": "vertOriginX",
          vertOriginY: 1,
          "vert-origin-y": "vertOriginY",
          vHanging: 1,
          "v-hanging": "vHanging",
          vIdeographic: 1,
          "v-ideographic": "vIdeographic",
          viewBox: 1,
          viewTarget: 1,
          visibility: 0,
          vMathematical: 1,
          "v-mathematical": "vMathematical",
          vocab: 0,
          widths: 0,
          wordSpacing: 1,
          "word-spacing": "wordSpacing",
          writingMode: 1,
          "writing-mode": "writingMode",
          x1: 0,
          x2: 0,
          x: 0,
          xChannelSelector: 1,
          xHeight: 1,
          "x-height": "xHeight",
          xlinkActuate: 1,
          "xlink:actuate": "xlinkActuate",
          xlinkArcrole: 1,
          "xlink:arcrole": "xlinkArcrole",
          xlinkHref: 1,
          "xlink:href": "xlinkHref",
          xlinkRole: 1,
          "xlink:role": "xlinkRole",
          xlinkShow: 1,
          "xlink:show": "xlinkShow",
          xlinkTitle: 1,
          "xlink:title": "xlinkTitle",
          xlinkType: 1,
          "xlink:type": "xlinkType",
          xmlBase: 1,
          "xml:base": "xmlBase",
          xmlLang: 1,
          "xml:lang": "xmlLang",
          xmlns: 0,
          "xml:space": "xmlSpace",
          xmlnsXlink: 1,
          "xmlns:xlink": "xmlnsXlink",
          xmlSpace: 1,
          y1: 0,
          y2: 0,
          y: 0,
          yChannelSelector: 1,
          z: 0,
          zoomAndPan: 1,
        });
    },
    9598: function (e, t) {
      "use strict";
      function n(e) {
        return function (t) {
          var n = t.dispatch,
            r = t.getState;
          return function (t) {
            return function (a) {
              return "function" == typeof a ? a(n, r, e) : t(a);
            };
          };
        };
      }
      var r = n();
      (r.withExtraArgument = n), (t.Z = r);
    },
    1441: function (e, t, n) {
      "use strict";
      n.d(t, {
        MT: function () {
          return s;
        },
        UY: function () {
          return o;
        },
        md: function () {
          return u;
        },
      });
      var r = n(3915),
        a = function () {
          return Math.random().toString(36).substring(7).split("").join(".");
        },
        i = {
          INIT: "@@redux/INIT" + a(),
          REPLACE: "@@redux/REPLACE" + a(),
          PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + a();
          },
        };
      function s(e, t, n) {
        if (
          ("function" == typeof t && "function" == typeof n) ||
          ("function" == typeof n && "function" == typeof arguments[3])
        )
          throw Error(
            "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function."
          );
        if (
          ("function" == typeof t && void 0 === n && ((n = t), (t = void 0)),
          void 0 !== n)
        ) {
          if ("function" != typeof n)
            throw Error("Expected the enhancer to be a function.");
          return n(s)(e, t);
        }
        if ("function" != typeof e)
          throw Error("Expected the reducer to be a function.");
        var a,
          o = e,
          l = t,
          c = [],
          u = c,
          d = !1;
        function h() {
          u === c && (u = c.slice());
        }
        function p() {
          if (d)
            throw Error(
              "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store."
            );
          return l;
        }
        function f(e) {
          if ("function" != typeof e)
            throw Error("Expected the listener to be a function.");
          if (d)
            throw Error(
              "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details."
            );
          var t = !0;
          return (
            h(),
            u.push(e),
            function () {
              if (t) {
                if (d)
                  throw Error(
                    "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details."
                  );
                (t = !1), h();
                var n = u.indexOf(e);
                u.splice(n, 1), (c = null);
              }
            }
          );
        }
        function m(e) {
          if (
            !(function (e) {
              if ("object" != typeof e || null === e) return !1;
              for (var t = e; null !== Object.getPrototypeOf(t); )
                t = Object.getPrototypeOf(t);
              return Object.getPrototypeOf(e) === t;
            })(e)
          )
            throw Error(
              "Actions must be plain objects. Use custom middleware for async actions."
            );
          if (void 0 === e.type)
            throw Error(
              'Actions may not have an undefined "type" property. Have you misspelled a constant?'
            );
          if (d) throw Error("Reducers may not dispatch actions.");
          try {
            (d = !0), (l = o(l, e));
          } finally {
            d = !1;
          }
          for (var t = (c = u), n = 0; n < t.length; n++) (0, t[n])();
          return e;
        }
        return (
          m({ type: i.INIT }),
          ((a = {
            dispatch: m,
            subscribe: f,
            getState: p,
            replaceReducer: function (e) {
              if ("function" != typeof e)
                throw Error("Expected the nextReducer to be a function.");
              (o = e), m({ type: i.REPLACE });
            },
          })[r.Z] = function () {
            var e;
            return (
              ((e = {
                subscribe: function (e) {
                  if ("object" != typeof e || null === e)
                    throw TypeError("Expected the observer to be an object.");
                  function t() {
                    e.next && e.next(p());
                  }
                  return t(), { unsubscribe: f(t) };
                },
              })[r.Z] = function () {
                return this;
              }),
              e
            );
          }),
          a
        );
      }
      function o(e) {
        for (var t, n = Object.keys(e), r = {}, a = 0; a < n.length; a++) {
          var s = n[a];
          "function" == typeof e[s] && (r[s] = e[s]);
        }
        var o = Object.keys(r);
        try {
          !(function (e) {
            Object.keys(e).forEach(function (t) {
              var n = e[t];
              if (void 0 === n(void 0, { type: i.INIT }))
                throw Error(
                  'Reducer "' +
                    t +
                    "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined."
                );
              if (void 0 === n(void 0, { type: i.PROBE_UNKNOWN_ACTION() }))
                throw Error(
                  'Reducer "' +
                    t +
                    "\" returned undefined when probed with a random type. Don't try to handle " +
                    i.INIT +
                    ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'
                );
            });
          })(r);
        } catch (e) {
          t = e;
        }
        return function (e, n) {
          if ((void 0 === e && (e = {}), t)) throw t;
          for (var a = !1, i = {}, s = 0; s < o.length; s++) {
            var l = o[s],
              c = r[l],
              u = e[l],
              d = c(u, n);
            if (void 0 === d)
              throw Error(
                (function (e, t) {
                  var n = t && t.type;
                  return (
                    "Given " +
                    ((n && 'action "' + String(n) + '"') || "an action") +
                    ', reducer "' +
                    e +
                    '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
                  );
                })(l, n)
              );
            (i[l] = d), (a = a || d !== u);
          }
          return (a = a || o.length !== Object.keys(e).length) ? i : e;
        };
      }
      function l(e, t) {
        var n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols &&
            n.push.apply(n, Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          n
        );
      }
      function c() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return 0 === t.length
          ? function (e) {
              return e;
            }
          : 1 === t.length
          ? t[0]
          : t.reduce(function (e, t) {
              return function () {
                return e(t.apply(void 0, arguments));
              };
            });
      }
      function u() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function (e) {
          return function () {
            var n = e.apply(void 0, arguments),
              r = function () {
                throw Error(
                  "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch."
                );
              },
              a = {
                getState: n.getState,
                dispatch: function () {
                  return r.apply(void 0, arguments);
                },
              },
              i = t.map(function (e) {
                return e(a);
              });
            return (
              (r = c.apply(void 0, i)(n.dispatch)),
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? l(n, !0).forEach(function (t) {
                        var r, a;
                        (r = e),
                          (a = n[t]),
                          t in r
                            ? Object.defineProperty(r, t, {
                                value: a,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                              })
                            : (r[t] = a);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : l(n).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              })({}, n, { dispatch: r })
            );
          };
        };
      }
    },
    2746: function (e, t, n) {
      "use strict";
      var r = n(3735);
      function a(e) {
        return e === Object(e) && 0 !== Object.keys(e).length;
      }
      t.Z = function (e, t) {
        var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
        if (a(t) && "function" == typeof t.behavior)
          return t.behavior(n ? (0, r.Z)(e, t) : []);
        if (n) {
          var i =
            !1 === t
              ? { block: "end", inline: "nearest" }
              : a(t)
              ? t
              : { block: "start", inline: "nearest" };
          return (function (e, t) {
            void 0 === t && (t = "auto");
            var n = "scrollBehavior" in document.body.style;
            e.forEach(function (e) {
              var r = e.el,
                a = e.top,
                i = e.left;
              r.scroll && n
                ? r.scroll({ top: a, left: i, behavior: t })
                : ((r.scrollTop = a), (r.scrollLeft = i));
            });
          })((0, r.Z)(e, i), i.behavior);
        }
      };
    },
    9187: function (e, t, n) {
      "use strict";
      var r = n(2086),
        a = Array.prototype.concat,
        i = Array.prototype.slice,
        s = (e.exports = function (e) {
          for (var t = [], n = 0, s = e.length; n < s; n++) {
            var o = e[n];
            r(o) ? (t = a.call(t, i.call(o))) : t.push(o);
          }
          return t;
        });
      s.wrap = function (e) {
        return function () {
          return e(s(arguments));
        };
      };
    },
    88: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = r(n(9529)),
        i = n(9868);
      t.default = function (e, t) {
        var n = {};
        return (
          e &&
            "string" == typeof e &&
            (0, a.default)(e, function (e, r) {
              e && r && (n[(0, i.camelCase)(e, t)] = r);
            }),
          n
        );
      };
    },
    9868: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.camelCase = void 0);
      var n = /^--[a-zA-Z0-9-]+$/,
        r = /-([a-z])/g,
        a = /^[^-]+$/,
        i = /^-(webkit|moz|ms|o|khtml)-/,
        s = /^-(ms)-/,
        o = function (e, t) {
          return t.toUpperCase();
        },
        l = function (e, t) {
          return "".concat(t, "-");
        };
      t.camelCase = function (e, t) {
        var c;
        return (void 0 === t && (t = {}), !(c = e) || a.test(c) || n.test(c))
          ? e
          : ((e = e.toLowerCase()),
            (e = t.reactCompat ? e.replace(s, l) : e.replace(i, l)).replace(
              r,
              o
            ));
      };
    },
    9529: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = r(n(9139));
      t.default = function (e, t) {
        var n = null;
        if (!e || "string" != typeof e) return n;
        var r = (0, a.default)(e),
          i = "function" == typeof t;
        return (
          r.forEach(function (e) {
            if ("declaration" === e.type) {
              var r = e.property,
                a = e.value;
              i ? t(r, a, e) : a && ((n = n || {})[r] = a);
            }
          }),
          n
        );
      };
    },
    3915: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      }),
        (e = n.hmd(e));
      var r,
        a,
        i,
        s =
          ("function" ==
          typeof (a = (
            "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : void 0 !== n.g
              ? n.g
              : e
          ).Symbol)
            ? a.observable
              ? (r = a.observable)
              : ((r = a("observable")), (a.observable = r))
            : (r = "@@observable"),
          r);
    },
    5517: function (e, t, n) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = n(2983),
        a =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        i = r.useState,
        s = r.useEffect,
        o = r.useLayoutEffect,
        l = r.useDebugValue;
      function c(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !a(e, n);
        } catch (e) {
          return !0;
        }
      }
      var u =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var n = t(),
                r = i({ inst: { value: n, getSnapshot: t } }),
                a = r[0].inst,
                u = r[1];
              return (
                o(
                  function () {
                    (a.value = n), (a.getSnapshot = t), c(a) && u({ inst: a });
                  },
                  [e, n, t]
                ),
                s(
                  function () {
                    return (
                      c(a) && u({ inst: a }),
                      e(function () {
                        c(a) && u({ inst: a });
                      })
                    );
                  },
                  [e]
                ),
                l(n),
                n
              );
            };
      t.useSyncExternalStore =
        void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : u;
    },
    9165: function (e, t, n) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim/with-selector.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = n(2983),
        a = n(3576),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        s = a.useSyncExternalStore,
        o = r.useRef,
        l = r.useEffect,
        c = r.useMemo,
        u = r.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, n, r, a) {
        var d = o(null);
        if (null === d.current) {
          var h = { hasValue: !1, value: null };
          d.current = h;
        } else h = d.current;
        d = c(
          function () {
            function e(e) {
              if (!l) {
                if (
                  ((l = !0), (s = e), (e = r(e)), void 0 !== a && h.hasValue)
                ) {
                  var t = h.value;
                  if (a(t, e)) return (o = t);
                }
                return (o = e);
              }
              if (((t = o), i(s, e))) return t;
              var n = r(e);
              return void 0 !== a && a(t, n) ? t : ((s = e), (o = n));
            }
            var s,
              o,
              l = !1,
              c = void 0 === n ? null : n;
            return [
              function () {
                return e(t());
              },
              null === c
                ? void 0
                : function () {
                    return e(c());
                  },
            ];
          },
          [t, n, r, a]
        );
        var p = s(e, d[0], d[1]);
        return (
          l(
            function () {
              (h.hasValue = !0), (h.value = p);
            },
            [p]
          ),
          u(p),
          p
        );
      };
    },
    3576: function (e, t, n) {
      "use strict";
      e.exports = n(5517);
    },
    2014: function (e, t, n) {
      "use strict";
      e.exports = n(9165);
    },
    810: function (e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      let a =
        "undefined" != typeof crypto &&
        crypto.randomUUID &&
        crypto.randomUUID.bind(crypto);
      var i = { randomUUID: a };
      let s = new Uint8Array(16);
      function o() {
        if (
          !r &&
          !(r =
            "undefined" != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto))
        )
          throw Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
          );
        return r(s);
      }
      let l = [];
      for (let e = 0; e < 256; ++e) l.push((e + 256).toString(16).slice(1));
      var c = function (e, t, n) {
        if (i.randomUUID && !t && !e) return i.randomUUID();
        e = e || {};
        let r = e.random || (e.rng || o)();
        if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), t)) {
          n = n || 0;
          for (let e = 0; e < 16; ++e) t[n + e] = r[e];
          return t;
        }
        return (function (e, t = 0) {
          return (
            l[e[t + 0]] +
            l[e[t + 1]] +
            l[e[t + 2]] +
            l[e[t + 3]] +
            "-" +
            l[e[t + 4]] +
            l[e[t + 5]] +
            "-" +
            l[e[t + 6]] +
            l[e[t + 7]] +
            "-" +
            l[e[t + 8]] +
            l[e[t + 9]] +
            "-" +
            l[e[t + 10]] +
            l[e[t + 11]] +
            l[e[t + 12]] +
            l[e[t + 13]] +
            l[e[t + 14]] +
            l[e[t + 15]]
          );
        })(r);
      };
    },
    597: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    3735: function (e, t, n) {
      "use strict";
      function r(e) {
        return "object" == typeof e && null != e && 1 === e.nodeType;
      }
      function a(e, t) {
        return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e;
      }
      function i(e, t) {
        if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
          var n,
            r = getComputedStyle(e, null);
          return (
            a(r.overflowY, t) ||
            a(r.overflowX, t) ||
            (!!(n = (function (e) {
              if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
              try {
                return e.ownerDocument.defaultView.frameElement;
              } catch (e) {
                return null;
              }
            })(e)) &&
              (n.clientHeight < e.scrollHeight ||
                n.clientWidth < e.scrollWidth))
          );
        }
        return !1;
      }
      function s(e, t, n, r, a, i, s, o) {
        return (i < e && s > t) || (i > e && s < t)
          ? 0
          : (i <= e && o <= n) || (s >= t && o >= n)
          ? i - e - r
          : (s > t && o < n) || (i < e && o > n)
          ? s - t + a
          : 0;
      }
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var o = function (e, t) {
        var n = window,
          a = t.scrollMode,
          o = t.block,
          l = t.inline,
          c = t.boundary,
          u = t.skipOverflowHiddenElements,
          d =
            "function" == typeof c
              ? c
              : function (e) {
                  return e !== c;
                };
        if (!r(e)) throw TypeError("Invalid target");
        for (
          var h,
            p,
            f = document.scrollingElement || document.documentElement,
            m = [],
            E = e;
          r(E) && d(E);

        ) {
          if (
            (E =
              null == (p = (h = E).parentElement)
                ? h.getRootNode().host || null
                : p) === f
          ) {
            m.push(E);
            break;
          }
          (null != E &&
            E === document.body &&
            i(E) &&
            !i(document.documentElement)) ||
            (null != E && i(E, u) && m.push(E));
        }
        for (
          var T = n.visualViewport ? n.visualViewport.width : innerWidth,
            g = n.visualViewport ? n.visualViewport.height : innerHeight,
            _ = window.scrollX || pageXOffset,
            A = window.scrollY || pageYOffset,
            v = e.getBoundingClientRect(),
            b = v.height,
            y = v.width,
            N = v.top,
            C = v.right,
            I = v.bottom,
            S = v.left,
            R =
              "start" === o || "nearest" === o
                ? N
                : "end" === o
                ? I
                : N + b / 2,
            O = "center" === l ? S + y / 2 : "end" === l ? C : S,
            k = [],
            x = 0;
          x < m.length;
          x++
        ) {
          var L = m[x],
            D = L.getBoundingClientRect(),
            M = D.height,
            w = D.width,
            P = D.top,
            B = D.right,
            H = D.bottom,
            U = D.left;
          if (
            "if-needed" === a &&
            N >= 0 &&
            S >= 0 &&
            I <= g &&
            C <= T &&
            N >= P &&
            I <= H &&
            S >= U &&
            C <= B
          )
            break;
          var F = getComputedStyle(L),
            G = parseInt(F.borderLeftWidth, 10),
            j = parseInt(F.borderTopWidth, 10),
            Y = parseInt(F.borderRightWidth, 10),
            V = parseInt(F.borderBottomWidth, 10),
            Z = 0,
            W = 0,
            q = "offsetWidth" in L ? L.offsetWidth - L.clientWidth - G - Y : 0,
            z =
              "offsetHeight" in L ? L.offsetHeight - L.clientHeight - j - V : 0,
            K =
              "offsetWidth" in L
                ? 0 === L.offsetWidth
                  ? 0
                  : w / L.offsetWidth
                : 0,
            Q =
              "offsetHeight" in L
                ? 0 === L.offsetHeight
                  ? 0
                  : M / L.offsetHeight
                : 0;
          if (f === L)
            (Z =
              "start" === o
                ? R
                : "end" === o
                ? R - g
                : "nearest" === o
                ? s(A, A + g, g, j, V, A + R, A + R + b, b)
                : R - g / 2),
              (W =
                "start" === l
                  ? O
                  : "center" === l
                  ? O - T / 2
                  : "end" === l
                  ? O - T
                  : s(_, _ + T, T, G, Y, _ + O, _ + O + y, y)),
              (Z = Math.max(0, Z + A)),
              (W = Math.max(0, W + _));
          else {
            (Z =
              "start" === o
                ? R - P - j
                : "end" === o
                ? R - H + V + z
                : "nearest" === o
                ? s(P, H, M, j, V + z, R, R + b, b)
                : R - (P + M / 2) + z / 2),
              (W =
                "start" === l
                  ? O - U - G
                  : "center" === l
                  ? O - (U + w / 2) + q / 2
                  : "end" === l
                  ? O - B + Y + q
                  : s(U, B, w, G, Y + q, O, O + y, y));
            var X = L.scrollLeft,
              $ = L.scrollTop;
            (R +=
              $ -
              (Z = Math.max(
                0,
                Math.min($ + Z / Q, L.scrollHeight - M / Q + z)
              ))),
              (O +=
                X -
                (W = Math.max(
                  0,
                  Math.min(X + W / K, L.scrollWidth - w / K + q)
                )));
          }
          k.push({ el: L, top: Z, left: W });
        }
        return k;
      };
    },
    8839: function (e, t, n) {
      "use strict";
      function r(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        throw Error(
          "[Immer] minified error nr: " +
            e +
            (n.length
              ? " " +
                n
                  .map(function (e) {
                    return "'" + e + "'";
                  })
                  .join(",")
              : "") +
            ". Find the full error at: https://bit.ly/3cXEKWf"
        );
      }
      function a(e) {
        return !!e && !!e[G];
      }
      function i(e) {
        var t;
        return (
          !!e &&
          ((function (e) {
            if (!e || "object" != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            if (null === t) return !0;
            var n =
              Object.hasOwnProperty.call(t, "constructor") && t.constructor;
            return (
              n === Object ||
              ("function" == typeof n && Function.toString.call(n) === j)
            );
          })(e) ||
            Array.isArray(e) ||
            !!e[F] ||
            !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[F]) ||
            u(e) ||
            d(e))
        );
      }
      function s(e, t, n) {
        void 0 === n && (n = !1),
          0 === o(e)
            ? (n ? Object.keys : Y)(e).forEach(function (r) {
                (n && "symbol" == typeof r) || t(r, e[r], e);
              })
            : e.forEach(function (n, r) {
                return t(r, n, e);
              });
      }
      function o(e) {
        var t = e[G];
        return t
          ? t.i > 3
            ? t.i - 4
            : t.i
          : Array.isArray(e)
          ? 1
          : u(e)
          ? 2
          : d(e)
          ? 3
          : 0;
      }
      function l(e, t) {
        return 2 === o(e)
          ? e.has(t)
          : Object.prototype.hasOwnProperty.call(e, t);
      }
      function c(e, t, n) {
        var r = o(e);
        2 === r ? e.set(t, n) : 3 === r ? e.add(n) : (e[t] = n);
      }
      function u(e) {
        return P && e instanceof Map;
      }
      function d(e) {
        return B && e instanceof Set;
      }
      function h(e) {
        return e.o || e.t;
      }
      function p(e) {
        if (Array.isArray(e)) return Array.prototype.slice.call(e);
        var t = V(e);
        delete t[G];
        for (var n = Y(t), r = 0; r < n.length; r++) {
          var a = n[r],
            i = t[a];
          !1 === i.writable && ((i.writable = !0), (i.configurable = !0)),
            (i.get || i.set) &&
              (t[a] = {
                configurable: !0,
                writable: !0,
                enumerable: i.enumerable,
                value: e[a],
              });
        }
        return Object.create(Object.getPrototypeOf(e), t);
      }
      function f(e, t) {
        return (
          void 0 === t && (t = !1),
          E(e) ||
            a(e) ||
            !i(e) ||
            (o(e) > 1 && (e.set = e.add = e.clear = e.delete = m),
            Object.freeze(e),
            t &&
              s(
                e,
                function (e, t) {
                  return f(t, !0);
                },
                !0
              )),
          e
        );
      }
      function m() {
        r(2);
      }
      function E(e) {
        return null == e || "object" != typeof e || Object.isFrozen(e);
      }
      function T(e) {
        var t = Z[e];
        return t || r(18, e), t;
      }
      function g(e, t) {
        t && (T("Patches"), (e.u = []), (e.s = []), (e.v = t));
      }
      function _(e) {
        A(e), e.p.forEach(b), (e.p = null);
      }
      function A(e) {
        e === M && (M = e.l);
      }
      function v(e) {
        return (M = { p: [], l: M, h: e, m: !0, _: 0 });
      }
      function b(e) {
        var t = e[G];
        0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
      }
      function y(e, t) {
        t._ = t.p.length;
        var n = t.p[0],
          a = void 0 !== e && e !== n;
        return (
          t.h.O || T("ES5").S(t, e, a),
          a
            ? (n[G].P && (_(t), r(4)),
              i(e) && ((e = N(t, e)), t.l || I(t, e)),
              t.u && T("Patches").M(n[G].t, e, t.u, t.s))
            : (e = N(t, n, [])),
          _(t),
          t.u && t.v(t.u, t.s),
          e !== U ? e : void 0
        );
      }
      function N(e, t, n) {
        if (E(t)) return t;
        var r = t[G];
        if (!r)
          return (
            s(
              t,
              function (a, i) {
                return C(e, r, t, a, i, n);
              },
              !0
            ),
            t
          );
        if (r.A !== e) return t;
        if (!r.P) return I(e, r.t, !0), r.t;
        if (!r.I) {
          (r.I = !0), r.A._--;
          var a = 4 === r.i || 5 === r.i ? (r.o = p(r.k)) : r.o,
            i = a,
            o = !1;
          3 === r.i && ((i = new Set(a)), a.clear(), (o = !0)),
            s(i, function (t, i) {
              return C(e, r, a, t, i, n, o);
            }),
            I(e, a, !1),
            n && e.u && T("Patches").N(r, n, e.u, e.s);
        }
        return r.o;
      }
      function C(e, t, n, r, s, o, u) {
        if (a(s)) {
          var d = N(
            e,
            s,
            o && t && 3 !== t.i && !l(t.R, r) ? o.concat(r) : void 0
          );
          if ((c(n, r, d), !a(d))) return;
          e.m = !1;
        } else u && n.add(s);
        if (i(s) && !E(s)) {
          if (!e.h.D && e._ < 1) return;
          N(e, s), (t && t.A.l) || I(e, s);
        }
      }
      function I(e, t, n) {
        void 0 === n && (n = !1), !e.l && e.h.D && e.m && f(t, n);
      }
      function S(e, t) {
        var n = e[G];
        return (n ? h(n) : e)[t];
      }
      function R(e, t) {
        if (t in e)
          for (var n = Object.getPrototypeOf(e); n; ) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r) return r;
            n = Object.getPrototypeOf(n);
          }
      }
      function O(e) {
        e.P || ((e.P = !0), e.l && O(e.l));
      }
      function k(e) {
        e.o || (e.o = p(e.t));
      }
      function x(e, t, n) {
        var r,
          a,
          i,
          s,
          o,
          l,
          c,
          h = u(t)
            ? T("MapSet").F(t, n)
            : d(t)
            ? T("MapSet").T(t, n)
            : e.O
            ? ((i = a =
                {
                  i: (r = Array.isArray(t)) ? 1 : 0,
                  A: n ? n.A : M,
                  P: !1,
                  I: !1,
                  R: {},
                  l: n,
                  t: t,
                  k: null,
                  o: null,
                  j: null,
                  C: !1,
                }),
              (s = W),
              r && ((i = [a]), (s = q)),
              (l = (o = Proxy.revocable(i, s)).revoke),
              (c = o.proxy),
              (a.k = c),
              (a.j = l),
              c)
            : T("ES5").J(t, n);
        return (n ? n.A : M).p.push(h), h;
      }
      function L(e, t) {
        switch (t) {
          case 2:
            return new Map(e);
          case 3:
            return Array.from(e);
        }
        return p(e);
      }
      n.d(t, {
        P2: function () {
          return Q;
        },
        Uy: function () {
          return K;
        },
        _x: function () {
          return X;
        },
        mv: function () {
          return a;
        },
      });
      var D,
        M,
        w = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
        P = "undefined" != typeof Map,
        B = "undefined" != typeof Set,
        H =
          "undefined" != typeof Proxy &&
          void 0 !== Proxy.revocable &&
          "undefined" != typeof Reflect,
        U = w
          ? Symbol.for("immer-nothing")
          : (((D = {})["immer-nothing"] = !0), D),
        F = w ? Symbol.for("immer-draftable") : "__$immer_draftable",
        G = w ? Symbol.for("immer-state") : "__$immer_state",
        j = "" + Object.prototype.constructor,
        Y =
          "undefined" != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e)
                );
              }
            : Object.getOwnPropertyNames,
        V =
          Object.getOwnPropertyDescriptors ||
          function (e) {
            var t = {};
            return (
              Y(e).forEach(function (n) {
                t[n] = Object.getOwnPropertyDescriptor(e, n);
              }),
              t
            );
          },
        Z = {},
        W = {
          get: function (e, t) {
            if (t === G) return e;
            var n,
              r,
              a = h(e);
            if (!l(a, t))
              return (r = R(a, t))
                ? "value" in r
                  ? r.value
                  : null === (n = r.get) || void 0 === n
                  ? void 0
                  : n.call(e.k)
                : void 0;
            var s = a[t];
            return e.I || !i(s)
              ? s
              : s === S(e.t, t)
              ? (k(e), (e.o[t] = x(e.A.h, s, e)))
              : s;
          },
          has: function (e, t) {
            return t in h(e);
          },
          ownKeys: function (e) {
            return Reflect.ownKeys(h(e));
          },
          set: function (e, t, n) {
            var r = R(h(e), t);
            if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
            if (!e.P) {
              var a = S(h(e), t),
                i = null == a ? void 0 : a[G];
              if (i && i.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
              if (
                (n === a ? 0 !== n || 1 / n == 1 / a : n != n && a != a) &&
                (void 0 !== n || l(e.t, t))
              )
                return !0;
              k(e), O(e);
            }
            return (
              (e.o[t] === n && (void 0 !== n || t in e.o)) ||
                (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
                ((e.o[t] = n), (e.R[t] = !0)),
              !0
            );
          },
          deleteProperty: function (e, t) {
            return (
              void 0 !== S(e.t, t) || t in e.t
                ? ((e.R[t] = !1), k(e), O(e))
                : delete e.R[t],
              e.o && delete e.o[t],
              !0
            );
          },
          getOwnPropertyDescriptor: function (e, t) {
            var n = h(e),
              r = Reflect.getOwnPropertyDescriptor(n, t);
            return r
              ? {
                  writable: !0,
                  configurable: 1 !== e.i || "length" !== t,
                  enumerable: r.enumerable,
                  value: n[t],
                }
              : r;
          },
          defineProperty: function () {
            r(11);
          },
          getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t);
          },
          setPrototypeOf: function () {
            r(12);
          },
        },
        q = {};
      s(W, function (e, t) {
        q[e] = function () {
          return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
        };
      }),
        (q.deleteProperty = function (e, t) {
          return q.set.call(this, e, t, void 0);
        }),
        (q.set = function (e, t, n) {
          return W.set.call(this, e[0], t, n, e[0]);
        });
      var z = new ((function () {
          function e(e) {
            var t = this;
            (this.O = H),
              (this.D = !0),
              (this.produce = function (e, n, a) {
                if ("function" == typeof e && "function" != typeof n) {
                  var s,
                    o = n;
                  return (
                    (n = e),
                    function (e) {
                      var r = this;
                      void 0 === e && (e = o);
                      for (
                        var a = arguments.length,
                          i = Array(a > 1 ? a - 1 : 0),
                          s = 1;
                        s < a;
                        s++
                      )
                        i[s - 1] = arguments[s];
                      return t.produce(e, function (e) {
                        var t;
                        return (t = n).call.apply(t, [r, e].concat(i));
                      });
                    }
                  );
                }
                if (
                  ("function" != typeof n && r(6),
                  void 0 !== a && "function" != typeof a && r(7),
                  i(e))
                ) {
                  var l = v(t),
                    c = x(t, e, void 0),
                    u = !0;
                  try {
                    (s = n(c)), (u = !1);
                  } finally {
                    u ? _(l) : A(l);
                  }
                  return "undefined" != typeof Promise && s instanceof Promise
                    ? s.then(
                        function (e) {
                          return g(l, a), y(e, l);
                        },
                        function (e) {
                          throw (_(l), e);
                        }
                      )
                    : (g(l, a), y(s, l));
                }
                if (!e || "object" != typeof e) {
                  if (
                    (void 0 === (s = n(e)) && (s = e),
                    s === U && (s = void 0),
                    t.D && f(s, !0),
                    a)
                  ) {
                    var d = [],
                      h = [];
                    T("Patches").M(e, s, d, h), a(d, h);
                  }
                  return s;
                }
                r(21, e);
              }),
              (this.produceWithPatches = function (e, n) {
                if ("function" == typeof e)
                  return function (n) {
                    for (
                      var r = arguments.length,
                        a = Array(r > 1 ? r - 1 : 0),
                        i = 1;
                      i < r;
                      i++
                    )
                      a[i - 1] = arguments[i];
                    return t.produceWithPatches(n, function (t) {
                      return e.apply(void 0, [t].concat(a));
                    });
                  };
                var r,
                  a,
                  i = t.produce(e, n, function (e, t) {
                    (r = e), (a = t);
                  });
                return "undefined" != typeof Promise && i instanceof Promise
                  ? i.then(function (e) {
                      return [e, r, a];
                    })
                  : [i, r, a];
              }),
              "boolean" == typeof (null == e ? void 0 : e.useProxies) &&
                this.setUseProxies(e.useProxies),
              "boolean" == typeof (null == e ? void 0 : e.autoFreeze) &&
                this.setAutoFreeze(e.autoFreeze);
          }
          var t = e.prototype;
          return (
            (t.createDraft = function (e) {
              i(e) || r(8),
                a(e) &&
                  (a((t = e)) || r(22, t),
                  (e = (function e(t) {
                    if (!i(t)) return t;
                    var n,
                      r = t[G],
                      a = o(t);
                    if (r) {
                      if (!r.P && (r.i < 4 || !T("ES5").K(r))) return r.t;
                      (r.I = !0), (n = L(t, a)), (r.I = !1);
                    } else n = L(t, a);
                    return (
                      s(n, function (t, a) {
                        var i;
                        (r && (2 === o((i = r.t)) ? i.get(t) : i[t]) === a) ||
                          c(n, t, e(a));
                      }),
                      3 === a ? new Set(n) : n
                    );
                  })(t)));
              var t,
                n = v(this),
                l = x(this, e, void 0);
              return (l[G].C = !0), A(n), l;
            }),
            (t.finishDraft = function (e, t) {
              var n = (e && e[G]).A;
              return g(n, t), y(void 0, n);
            }),
            (t.setAutoFreeze = function (e) {
              this.D = e;
            }),
            (t.setUseProxies = function (e) {
              e && !H && r(20), (this.O = e);
            }),
            (t.applyPatches = function (e, t) {
              for (n = t.length - 1; n >= 0; n--) {
                var n,
                  r = t[n];
                if (0 === r.path.length && "replace" === r.op) {
                  e = r.value;
                  break;
                }
              }
              n > -1 && (t = t.slice(n + 1));
              var i = T("Patches").$;
              return a(e)
                ? i(e, t)
                : this.produce(e, function (e) {
                    return i(e, t);
                  });
            }),
            e
          );
        })())(),
        K = z.produce,
        Q =
          (z.produceWithPatches.bind(z),
          z.setAutoFreeze.bind(z),
          z.setUseProxies.bind(z),
          z.applyPatches.bind(z),
          z.createDraft.bind(z)),
        X = z.finishDraft.bind(z);
    },
    3196: function (e, t, n) {
      "use strict";
      /*!
       * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
       *
       * Copyright (c) 2014-2017, Jon Schlinkert.
       * Released under the MIT License.
       */ function r(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function a(e) {
        var t, n;
        return (
          !1 !== r(e) &&
          (void 0 === (t = e.constructor) ||
            (!1 !== r((n = t.prototype)) &&
              !1 !== n.hasOwnProperty("isPrototypeOf")))
        );
      }
      n.d(t, {
        P: function () {
          return a;
        },
      });
    },
    8051: function (e, t, n) {
      "use strict";
      n.d(t, {
        EQ: function () {
          return M;
        },
        P: function () {
          return L;
        },
      });
      let r = Symbol.for("@ts-pattern/matcher"),
        a = Symbol.for("@ts-pattern/isVariadic"),
        i = "@ts-pattern/anonymous-select-key",
        s = (e) => Boolean(e && "object" == typeof e),
        o = (e) => e && !!e[r],
        l = (e, t, n) => {
          if (o(e)) {
            let a = e[r](),
              { matched: i, selections: s } = a.match(t);
            return i && s && Object.keys(s).forEach((e) => n(e, s[e])), i;
          }
          if (s(e)) {
            if (!s(t)) return !1;
            if (Array.isArray(e)) {
              if (!Array.isArray(t)) return !1;
              let r = [],
                i = [],
                s = [];
              for (let t of e.keys()) {
                let n = e[t];
                o(n) && n[a] ? s.push(n) : s.length ? i.push(n) : r.push(n);
              }
              if (s.length) {
                if (s.length > 1)
                  throw Error(
                    "Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed."
                  );
                if (t.length < r.length + i.length) return !1;
                let e = t.slice(0, r.length),
                  a = 0 === i.length ? [] : t.slice(-i.length),
                  o = t.slice(r.length, 0 === i.length ? 1 / 0 : -i.length);
                return (
                  r.every((t, r) => l(t, e[r], n)) &&
                  i.every((e, t) => l(e, a[t], n)) &&
                  (0 === s.length || l(s[0], o, n))
                );
              }
              return e.length === t.length && e.every((e, r) => l(e, t[r], n));
            }
            return Object.keys(e).every((a) => {
              let i = e[a];
              return (
                (a in t || (o(i) && "optional" === i[r]().matcherType)) &&
                l(i, t[a], n)
              );
            });
          }
          return Object.is(t, e);
        },
        c = (e) => {
          var t, n, a;
          return s(e)
            ? o(e)
              ? null !=
                (t =
                  null == (n = (a = e[r]()).getSelectionKeys)
                    ? void 0
                    : n.call(a))
                ? t
                : []
              : Array.isArray(e)
              ? u(e, c)
              : u(Object.values(e), c)
            : [];
        },
        u = (e, t) => e.reduce((e, n) => e.concat(t(n)), []);
      function d(e) {
        return Object.assign(e, {
          optional: () => h(e),
          and: (t) => m(e, t),
          or: (t) => E(e, t),
          select: (t) => (void 0 === t ? g(e) : g(t, e)),
        });
      }
      function h(e) {
        return d({
          [r]: () => ({
            match: (t) => {
              let n = {},
                r = (e, t) => {
                  n[e] = t;
                };
              return void 0 === t
                ? (c(e).forEach((e) => r(e, void 0)),
                  { matched: !0, selections: n })
                : { matched: l(e, t, r), selections: n };
            },
            getSelectionKeys: () => c(e),
            matcherType: "optional",
          }),
        });
      }
      let p = (e, t) => {
          for (let n of e) if (!t(n)) return !1;
          return !0;
        },
        f = (e, t) => {
          for (let [n, r] of e.entries()) if (!t(r, n)) return !1;
          return !0;
        };
      function m(...e) {
        return d({
          [r]: () => ({
            match: (t) => {
              let n = {},
                r = (e, t) => {
                  n[e] = t;
                };
              return { matched: e.every((e) => l(e, t, r)), selections: n };
            },
            getSelectionKeys: () => u(e, c),
            matcherType: "and",
          }),
        });
      }
      function E(...e) {
        return d({
          [r]: () => ({
            match: (t) => {
              let n = {},
                r = (e, t) => {
                  n[e] = t;
                };
              return (
                u(e, c).forEach((e) => r(e, void 0)),
                { matched: e.some((e) => l(e, t, r)), selections: n }
              );
            },
            getSelectionKeys: () => u(e, c),
            matcherType: "or",
          }),
        });
      }
      function T(e) {
        return { [r]: () => ({ match: (t) => ({ matched: Boolean(e(t)) }) }) };
      }
      function g(...e) {
        let t = "string" == typeof e[0] ? e[0] : void 0,
          n = 2 === e.length ? e[1] : "string" == typeof e[0] ? void 0 : e[0];
        return d({
          [r]: () => ({
            match: (e) => {
              let r = { [null != t ? t : i]: e };
              return {
                matched:
                  void 0 === n ||
                  l(n, e, (e, t) => {
                    r[e] = t;
                  }),
                selections: r,
              };
            },
            getSelectionKeys: () =>
              [null != t ? t : i].concat(void 0 === n ? [] : c(n)),
          }),
        });
      }
      function _(e) {
        return "number" == typeof e;
      }
      function A(e) {
        return "string" == typeof e;
      }
      function v(e) {
        return "bigint" == typeof e;
      }
      let b = d(
          T(function (e) {
            return !0;
          })
        ),
        y = (e) =>
          Object.assign(d(e), {
            startsWith: (t) =>
              y(
                m(
                  e,
                  T((e) => A(e) && e.startsWith(t))
                )
              ),
            endsWith: (t) =>
              y(
                m(
                  e,
                  T((e) => A(e) && e.endsWith(t))
                )
              ),
            minLength: (t) =>
              y(
                m(
                  e,
                  T((e) => A(e) && e.length >= t)
                )
              ),
            maxLength: (t) =>
              y(
                m(
                  e,
                  T((e) => A(e) && e.length <= t)
                )
              ),
            includes: (t) =>
              y(
                m(
                  e,
                  T((e) => A(e) && e.includes(t))
                )
              ),
            regex: (t) =>
              y(
                m(
                  e,
                  T((e) => A(e) && Boolean(e.match(t)))
                )
              ),
          }),
        N = y(T(A)),
        C = (e) =>
          Object.assign(d(e), {
            between: (t, n) =>
              C(
                m(
                  e,
                  T((e) => _(e) && t <= e && n >= e)
                )
              ),
            lt: (t) =>
              C(
                m(
                  e,
                  T((e) => _(e) && e < t)
                )
              ),
            gt: (t) =>
              C(
                m(
                  e,
                  T((e) => _(e) && e > t)
                )
              ),
            lte: (t) =>
              C(
                m(
                  e,
                  T((e) => _(e) && e <= t)
                )
              ),
            gte: (t) =>
              C(
                m(
                  e,
                  T((e) => _(e) && e >= t)
                )
              ),
            int: () =>
              C(
                m(
                  e,
                  T((e) => _(e) && Number.isInteger(e))
                )
              ),
            finite: () =>
              C(
                m(
                  e,
                  T((e) => _(e) && Number.isFinite(e))
                )
              ),
            positive: () =>
              C(
                m(
                  e,
                  T((e) => _(e) && e > 0)
                )
              ),
            negative: () =>
              C(
                m(
                  e,
                  T((e) => _(e) && e < 0)
                )
              ),
          }),
        I = C(T(_)),
        S = (e) =>
          Object.assign(d(e), {
            between: (t, n) =>
              S(
                m(
                  e,
                  T((e) => v(e) && t <= e && n >= e)
                )
              ),
            lt: (t) =>
              S(
                m(
                  e,
                  T((e) => v(e) && e < t)
                )
              ),
            gt: (t) =>
              S(
                m(
                  e,
                  T((e) => v(e) && e > t)
                )
              ),
            lte: (t) =>
              S(
                m(
                  e,
                  T((e) => v(e) && e <= t)
                )
              ),
            gte: (t) =>
              S(
                m(
                  e,
                  T((e) => v(e) && e >= t)
                )
              ),
            positive: () =>
              S(
                m(
                  e,
                  T((e) => v(e) && e > 0)
                )
              ),
            negative: () =>
              S(
                m(
                  e,
                  T((e) => v(e) && e < 0)
                )
              ),
          }),
        R = S(T(v)),
        O = d(
          T(function (e) {
            return "boolean" == typeof e;
          })
        ),
        k = d(
          T(function (e) {
            return "symbol" == typeof e;
          })
        ),
        x = d(
          T(function (e) {
            return null == e;
          })
        );
      var L = {
        __proto__: null,
        matcher: r,
        optional: h,
        array: function (...e) {
          return (function e(t) {
            return Object.assign(
              Object.assign(t, {
                *[Symbol.iterator]() {
                  yield Object.assign(t, { [a]: !0 });
                },
              }),
              {
                optional: () => e(h(t)),
                select: (n) => e(void 0 === n ? g(t) : g(n, t)),
              }
            );
          })({
            [r]: () => ({
              match: (t) => {
                if (!Array.isArray(t)) return { matched: !1 };
                if (0 === e.length) return { matched: !0 };
                let n = e[0],
                  r = {};
                if (0 === t.length)
                  return (
                    c(n).forEach((e) => {
                      r[e] = [];
                    }),
                    { matched: !0, selections: r }
                  );
                let a = (e, t) => {
                  r[e] = (r[e] || []).concat([t]);
                };
                return { matched: t.every((e) => l(n, e, a)), selections: r };
              },
              getSelectionKeys: () => (0 === e.length ? [] : c(e[0])),
            }),
          });
        },
        set: function (...e) {
          return d({
            [r]: () => ({
              match: (t) => {
                if (!(t instanceof Set)) return { matched: !1 };
                let n = {};
                if (0 === t.size) return { matched: !0, selections: n };
                if (0 === e.length) return { matched: !0 };
                let r = (e, t) => {
                    n[e] = (n[e] || []).concat([t]);
                  },
                  a = e[0];
                return { matched: p(t, (e) => l(a, e, r)), selections: n };
              },
              getSelectionKeys: () => (0 === e.length ? [] : c(e[0])),
            }),
          });
        },
        map: function (...e) {
          return d({
            [r]: () => ({
              match: (t) => {
                var n;
                if (!(t instanceof Map)) return { matched: !1 };
                let r = {};
                if (0 === t.size) return { matched: !0, selections: r };
                let a = (e, t) => {
                  r[e] = (r[e] || []).concat([t]);
                };
                if (0 === e.length) return { matched: !0 };
                if (1 === e.length)
                  throw Error(
                    `\`P.map\` wasn't given enough arguments. Expected (key, value), received ${
                      null == (n = e[0]) ? void 0 : n.toString()
                    }`
                  );
                let [i, s] = e;
                return {
                  matched: f(t, (e, t) => {
                    let n = l(i, t, a),
                      r = l(s, e, a);
                    return n && r;
                  }),
                  selections: r,
                };
              },
              getSelectionKeys: () =>
                0 === e.length ? [] : [...c(e[0]), ...c(e[1])],
            }),
          });
        },
        intersection: m,
        union: E,
        not: function (e) {
          return d({
            [r]: () => ({
              match: (t) => ({ matched: !l(e, t, () => {}) }),
              getSelectionKeys: () => [],
              matcherType: "not",
            }),
          });
        },
        when: T,
        select: g,
        any: b,
        _: b,
        string: N,
        number: I,
        bigint: R,
        boolean: O,
        symbol: k,
        nullish: x,
        instanceOf: function (e) {
          return d(T((t) => t instanceof e));
        },
        shape: function (e) {
          return d(
            T(
              (function (...e) {
                if (1 === e.length) {
                  let [t] = e;
                  return (e) => l(t, e, () => {});
                }
                if (2 === e.length) {
                  let [t, n] = e;
                  return l(t, n, () => {});
                }
                throw Error(
                  `isMatching wasn't given the right number of arguments: expected 1 or 2, received ${e.length}.`
                );
              })(e)
            )
          );
        },
      };
      let D = { matched: !1, value: void 0 };
      function M(e) {
        return new w(e, D);
      }
      class w {
        constructor(e, t) {
          (this.input = void 0),
            (this.state = void 0),
            (this.input = e),
            (this.state = t);
        }
        with(...e) {
          let t;
          if (this.state.matched) return this;
          let n = e[e.length - 1],
            r = [e[0]];
          3 === e.length && "function" == typeof e[1]
            ? (r.push(e[0]), (t = e[1]))
            : e.length > 2 && r.push(...e.slice(1, e.length - 1));
          let a = !1,
            s = {},
            o = (e, t) => {
              (a = !0), (s[e] = t);
            },
            c =
              r.some((e) => l(e, this.input, o)) &&
              (!t || Boolean(t(this.input)))
                ? {
                    matched: !0,
                    value: n(a ? (i in s ? s[i] : s) : this.input, this.input),
                  }
                : D;
          return new w(this.input, c);
        }
        when(e, t) {
          if (this.state.matched) return this;
          let n = Boolean(e(this.input));
          return new w(
            this.input,
            n ? { matched: !0, value: t(this.input, this.input) } : D
          );
        }
        otherwise(e) {
          return this.state.matched ? this.state.value : e(this.input);
        }
        exhaustive() {
          return this.run();
        }
        run() {
          let e;
          if (this.state.matched) return this.state.value;
          try {
            e = JSON.stringify(this.input);
          } catch (t) {
            e = this.input;
          }
          throw Error(`Pattern matching error: no pattern matches value ${e}`);
        }
        returnType() {
          return this;
        }
      }
    },
  },
]);
