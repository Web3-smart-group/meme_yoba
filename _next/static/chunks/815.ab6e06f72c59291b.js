"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [815, 696],
  {
    9815: function (t, e, i) {
      let n;
      i.r(e),
        i.d(e, {
          default: function () {
            return oz;
          },
        });
      var r,
        s,
        o = i(7458),
        a = i(2983);
      let l = (t) => t,
        u = (t) => /^\-?\d*\.?\d+$/.test(t),
        h = (t) => /^0[^.\s]+$/.test(t),
        c = (t) => Array.isArray(t),
        d = (t) => Boolean(t && "object" == typeof t && t.mix && t.toValue),
        p = (t) => (c(t) ? t[t.length - 1] || 0 : t);
      function m(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function f(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      class v {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return m(this.subscriptions, t), () => f(this.subscriptions, t);
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let n = this.subscriptions[r];
                n && n(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      class g {
        constructor() {
          (this.order = []), (this.scheduled = new Set());
        }
        add(t) {
          if (!this.scheduled.has(t))
            return this.scheduled.add(t), this.order.push(t), !0;
        }
        remove(t) {
          let e = this.order.indexOf(t);
          -1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t));
        }
        clear() {
          (this.order.length = 0), this.scheduled.clear();
        }
      }
      let y = [
          "prepare",
          "read",
          "update",
          "preRender",
          "render",
          "postRender",
        ],
        {
          schedule: x,
          cancel: b,
          state: w,
          steps: P,
        } = (function (t, e) {
          let i = !1,
            n = !0,
            r = { delta: 0, timestamp: 0, isProcessing: !1 },
            s = y.reduce(
              (t, e) => (
                (t[e] = (function (t) {
                  let e = new g(),
                    i = new g(),
                    n = 0,
                    r = !1,
                    s = !1,
                    o = new WeakSet(),
                    a = {
                      schedule: (t, s = !1, a = !1) => {
                        let l = a && r,
                          u = l ? e : i;
                        return (
                          s && o.add(t),
                          u.add(t) && l && r && (n = e.order.length),
                          t
                        );
                      },
                      cancel: (t) => {
                        i.remove(t), o.delete(t);
                      },
                      process: (l) => {
                        if (r) {
                          s = !0;
                          return;
                        }
                        if (
                          ((r = !0),
                          ([e, i] = [i, e]),
                          i.clear(),
                          (n = e.order.length))
                        )
                          for (let i = 0; i < n; i++) {
                            let n = e.order[i];
                            n(l), o.has(n) && (a.schedule(n), t());
                          }
                        (r = !1), s && ((s = !1), a.process(l));
                      },
                    };
                  return a;
                })(() => (i = !0))),
                t
              ),
              {}
            ),
            o = (t) => s[t].process(r),
            a = () => {
              let s = performance.now();
              (i = !1),
                (r.delta = n
                  ? 1e3 / 60
                  : Math.max(Math.min(s - r.timestamp, 40), 1)),
                (r.timestamp = s),
                (r.isProcessing = !0),
                y.forEach(o),
                (r.isProcessing = !1),
                i && e && ((n = !1), t(a));
            },
            l = () => {
              (i = !0), (n = !0), r.isProcessing || t(a);
            },
            u = y.reduce((t, e) => {
              let n = s[e];
              return (
                (t[e] = (t, e = !1, r = !1) => (i || l(), n.schedule(t, e, r))),
                t
              );
            }, {}),
            h = (t) => y.forEach((e) => s[e].cancel(t));
          return { schedule: u, cancel: h, state: r, steps: s };
        })(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : l,
          !0
        ),
        S = (t) => !isNaN(parseFloat(t)),
        T = { current: void 0 };
      class E {
        constructor(t, e = {}) {
          (this.version = "10.17.6"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              (this.prev = this.current), (this.current = t);
              let { delta: i, timestamp: n } = w;
              this.lastUpdated !== n &&
                ((this.timeDelta = i),
                (this.lastUpdated = n),
                x.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              x.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: t }) => {
              t !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = t),
            (this.canTrackVelocity = S(this.current)),
            (this.owner = e.owner);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new v());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  x.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e), (this.prev = t), (this.timeDelta = i);
        }
        jump(t) {
          this.updateAndNotify(t),
            (this.prev = t),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return T.current && T.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t, e;
          return this.canTrackVelocity
            ? ((t = parseFloat(this.current) - parseFloat(this.prev)),
              (e = this.timeDelta) ? t * (1e3 / e) : 0)
            : 0;
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function A(t, e) {
        return new E(t, e);
      }
      let C = (t) => (e) => "string" == typeof e && e.startsWith(t),
        M = C("--"),
        k = C("var(--"),
        V = (t) => Math.round(1e5 * t) / 1e5,
        _ = /(-)?([\d]*\.?[\d])+/g,
        D =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        L =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function j(t) {
        return "string" == typeof t;
      }
      let R = (t, e, i) => Math.min(Math.max(i, t), e),
        B = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        O = { ...B, transform: (t) => R(0, 1, t) },
        I = { ...B, default: 1 },
        F = (t, e) => (i) =>
          Boolean(
            (j(i) && L.test(i) && i.startsWith(t)) ||
              (e && Object.prototype.hasOwnProperty.call(i, e))
          ),
        N = (t, e, i) => (n) => {
          if (!j(n)) return n;
          let [r, s, o, a] = n.match(_);
          return {
            [t]: parseFloat(r),
            [e]: parseFloat(s),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        U = (t) => R(0, 255, t),
        X = { ...B, transform: (t) => Math.round(U(t)) },
        W = {
          test: F("rgb", "red"),
          parse: N("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            X.transform(t) +
            ", " +
            X.transform(e) +
            ", " +
            X.transform(i) +
            ", " +
            V(O.transform(n)) +
            ")",
        },
        H = {
          test: F("#"),
          parse: function (t) {
            let e = "",
              i = "",
              n = "",
              r = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (n = t.substring(5, 7)),
                  (r = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (n = t.substring(3, 4)),
                  (r = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (n += n),
                  (r += r)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(n, 16),
                alpha: r ? parseInt(r, 16) / 255 : 1,
              }
            );
          },
          transform: W.transform,
        },
        $ = (t) => ({
          test: (e) => j(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        z = $("deg"),
        Y = $("%"),
        K = $("px"),
        q = $("vh"),
        G = $("vw"),
        Z = {
          ...Y,
          parse: (t) => Y.parse(t) / 100,
          transform: (t) => Y.transform(100 * t),
        },
        Q = {
          test: F("hsl", "hue"),
          parse: N("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: n = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            Y.transform(V(e)) +
            ", " +
            Y.transform(V(i)) +
            ", " +
            V(O.transform(n)) +
            ")",
        },
        J = {
          test: (t) => W.test(t) || H.test(t) || Q.test(t),
          parse: (t) =>
            W.test(t) ? W.parse(t) : Q.test(t) ? Q.parse(t) : H.parse(t),
          transform: (t) =>
            j(t)
              ? t
              : t.hasOwnProperty("red")
              ? W.transform(t)
              : Q.transform(t),
        },
        tt = {
          regex:
            /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
          countKey: "Vars",
          token: "${v}",
          parse: l,
        },
        te = { regex: D, countKey: "Colors", token: "${c}", parse: J.parse },
        ti = { regex: _, countKey: "Numbers", token: "${n}", parse: B.parse };
      function tn(t, { regex: e, countKey: i, token: n, parse: r }) {
        let s = t.tokenised.match(e);
        s &&
          ((t["num" + i] = s.length),
          (t.tokenised = t.tokenised.replace(e, n)),
          t.values.push(...s.map(r)));
      }
      function tr(t) {
        let e = t.toString(),
          i = {
            value: e,
            tokenised: e,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
          };
        return i.value.includes("var(--") && tn(i, tt), tn(i, te), tn(i, ti), i;
      }
      function ts(t) {
        return tr(t).values;
      }
      function to(t) {
        let { values: e, numColors: i, numVars: n, tokenised: r } = tr(t),
          s = e.length;
        return (t) => {
          let e = r;
          for (let r = 0; r < s; r++)
            e =
              r < n
                ? e.replace(tt.token, t[r])
                : r < n + i
                ? e.replace(te.token, J.transform(t[r]))
                : e.replace(ti.token, V(t[r]));
          return e;
        };
      }
      let ta = (t) => ("number" == typeof t ? 0 : t),
        tl = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              j(t) &&
              ((null === (e = t.match(_)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(D)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: ts,
          createTransformer: to,
          getAnimatableNone: function (t) {
            let e = ts(t),
              i = to(t);
            return i(e.map(ta));
          },
        },
        tu = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function th(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(_) || [];
        if (!n) return t;
        let r = i.replace(n, ""),
          s = tu.has(e) ? 1 : 0;
        return n !== i && (s *= 100), e + "(" + s + r + ")";
      }
      let tc = /([a-z-]*)\(.*?\)/g,
        td = {
          ...tl,
          getAnimatableNone: (t) => {
            let e = t.match(tc);
            return e ? e.map(th).join(" ") : t;
          },
        },
        tp = { ...B, transform: Math.round },
        tm = {
          borderWidth: K,
          borderTopWidth: K,
          borderRightWidth: K,
          borderBottomWidth: K,
          borderLeftWidth: K,
          borderRadius: K,
          radius: K,
          borderTopLeftRadius: K,
          borderTopRightRadius: K,
          borderBottomRightRadius: K,
          borderBottomLeftRadius: K,
          width: K,
          maxWidth: K,
          height: K,
          maxHeight: K,
          size: K,
          top: K,
          right: K,
          bottom: K,
          left: K,
          padding: K,
          paddingTop: K,
          paddingRight: K,
          paddingBottom: K,
          paddingLeft: K,
          margin: K,
          marginTop: K,
          marginRight: K,
          marginBottom: K,
          marginLeft: K,
          rotate: z,
          rotateX: z,
          rotateY: z,
          rotateZ: z,
          scale: I,
          scaleX: I,
          scaleY: I,
          scaleZ: I,
          skew: z,
          skewX: z,
          skewY: z,
          distance: K,
          translateX: K,
          translateY: K,
          translateZ: K,
          x: K,
          y: K,
          z: K,
          perspective: K,
          transformPerspective: K,
          opacity: O,
          originX: Z,
          originY: Z,
          originZ: K,
          zIndex: tp,
          fillOpacity: O,
          strokeOpacity: O,
          numOctaves: tp,
        },
        tf = {
          ...tm,
          color: J,
          backgroundColor: J,
          outlineColor: J,
          fill: J,
          stroke: J,
          borderColor: J,
          borderTopColor: J,
          borderRightColor: J,
          borderBottomColor: J,
          borderLeftColor: J,
          filter: td,
          WebkitFilter: td,
        },
        tv = (t) => tf[t];
      function tg(t, e) {
        let i = tv(t);
        return (
          i !== td && (i = tl),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let ty = (t) => (e) => e.test(t),
        tx = [B, K, Y, z, G, q, { test: (t) => "auto" === t, parse: (t) => t }],
        tb = (t) => tx.find(ty(t)),
        tw = [...tx, J, tl],
        tP = (t) => tw.find(ty(t));
      function tS(t, e, i, n = {}, r = {}) {
        return (
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)),
          "string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)),
          e
        );
      }
      function tT(t, e, i) {
        let n = t.getProps();
        return tS(
          n,
          e,
          void 0 !== i ? i : n.custom,
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.get())), e;
          })(t),
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.getVelocity())), e;
          })(t)
        );
      }
      function tE(t, e) {
        let i = tT(t, e),
          {
            transitionEnd: n = {},
            transition: r = {},
            ...s
          } = i ? t.makeTargetAnimatable(i, !1) : {};
        for (let e in (s = { ...s, ...n })) {
          var o;
          let i = p(s[e]);
          (o = e), t.hasValue(o) ? t.getValue(o).set(i) : t.addValue(o, A(i));
        }
      }
      function tA(t, e) {
        let i = [...e].reverse();
        i.forEach((i) => {
          let n = t.getVariant(i);
          n && tE(t, n),
            t.variantChildren &&
              t.variantChildren.forEach((t) => {
                tA(t, e);
              });
        });
      }
      let tC = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        tM = new Set(tC),
        tk = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
        tV = "data-" + tk("framerAppearId"),
        t_ = (t) => 1e3 * t,
        tD = (t) => t / 1e3,
        tL = { current: !1 },
        tj = (t) => Array.isArray(t) && "number" == typeof t[0],
        tR = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        tB = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: tR([0, 0.65, 0.55, 1]),
          circOut: tR([0.55, 0, 1, 0.45]),
          backIn: tR([0.31, 0.01, 0.66, -0.59]),
          backOut: tR([0.33, 1.53, 0.69, 0.99]),
        },
        tO = (t, e, i) =>
          (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function tI(t, e, i, n) {
        if (t === e && i === n) return l;
        let r = (e) =>
          (function (t, e, i, n, r) {
            let s, o;
            let a = 0;
            do
              (s = tO((o = e + (i - e) / 2), n, r) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : tO(r(t), e, n));
      }
      let tF = tI(0.42, 0, 1, 1),
        tN = tI(0, 0, 0.58, 1),
        tU = tI(0.42, 0, 0.58, 1),
        tX = (t) => Array.isArray(t) && "number" != typeof t[0],
        tW = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        tH = (t) => (e) => 1 - t(1 - e),
        t$ = (t) => 1 - Math.sin(Math.acos(t)),
        tz = tH(t$),
        tY = tW(t$),
        tK = tI(0.33, 1.53, 0.69, 0.99),
        tq = tH(tK),
        tG = tW(tq),
        tZ = (t) =>
          (t *= 2) < 1 ? 0.5 * tq(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        tQ = {
          linear: l,
          easeIn: tF,
          easeInOut: tU,
          easeOut: tN,
          circIn: t$,
          circInOut: tY,
          circOut: tz,
          backIn: tq,
          backInOut: tG,
          backOut: tK,
          anticipate: tZ,
        },
        tJ = (t) => {
          if (Array.isArray(t)) {
            l(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, n, r] = t;
            return tI(e, i, n, r);
          }
          return "string" == typeof t
            ? (l(void 0 !== tQ[t], `Invalid easing type '${t}'`), tQ[t])
            : t;
        },
        t0 = (t, e, i) => -i * t + i * e + t;
      function t1(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      let t2 = (t, e, i) => {
          let n = t * t;
          return Math.sqrt(Math.max(0, i * (e * e - n) + n));
        },
        t3 = [H, W, Q],
        t5 = (t) => t3.find((e) => e.test(t));
      function t9(t) {
        let e = t5(t);
        l(
          Boolean(e),
          `'${t}' is not an animatable color. Use the equivalent color code instead.`
        );
        let i = e.parse(t);
        return (
          e === Q &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              (t /= 360), (i /= 100);
              let r = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - n;
                (r = t1(a, n, t + 1 / 3)),
                  (s = t1(a, n, t)),
                  (o = t1(a, n, t - 1 / 3));
              } else r = s = o = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let t4 = (t, e) => {
          let i = t9(t),
            n = t9(e),
            r = { ...i };
          return (t) => (
            (r.red = t2(i.red, n.red, t)),
            (r.green = t2(i.green, n.green, t)),
            (r.blue = t2(i.blue, n.blue, t)),
            (r.alpha = t0(i.alpha, n.alpha, t)),
            W.transform(r)
          );
        },
        t6 = (t, e) => (i) => e(t(i)),
        t8 = (...t) => t.reduce(t6),
        t7 = (t, e) => (i) => `${i > 0 ? e : t}`;
      function et(t, e) {
        return "number" == typeof t
          ? (i) => t0(t, e, i)
          : J.test(t)
          ? t4(t, e)
          : t.startsWith("var(")
          ? t7(t, e)
          : en(t, e);
      }
      let ee = (t, e) => {
          let i = [...t],
            n = i.length,
            r = t.map((t, i) => et(t, e[i]));
          return (t) => {
            for (let e = 0; e < n; e++) i[e] = r[e](t);
            return i;
          };
        },
        ei = (t, e) => {
          let i = { ...t, ...e },
            n = {};
          for (let r in i)
            void 0 !== t[r] && void 0 !== e[r] && (n[r] = et(t[r], e[r]));
          return (t) => {
            for (let e in n) i[e] = n[e](t);
            return i;
          };
        },
        en = (t, e) => {
          let i = tl.createTransformer(e),
            n = tr(t),
            r = tr(e),
            s =
              n.numVars === r.numVars &&
              n.numColors === r.numColors &&
              n.numNumbers >= r.numNumbers;
          return s
            ? t8(ee(n.values, r.values), i)
            : (l(
                !0,
                `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              t7(t, e));
        },
        er = (t, e, i) => {
          let n = e - t;
          return 0 === n ? 1 : (i - t) / n;
        },
        es = (t, e) => (i) => t0(t, e, i);
      function eo(t, e, { clamp: i = !0, ease: n, mixer: r } = {}) {
        let s = t.length;
        if (
          (l(
            s === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === s)
        )
          return () => e[0];
        t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let o = (function (t, e, i) {
            let n = [],
              r =
                i ||
                (function (t) {
                  if ("number" == typeof t);
                  else if ("string" == typeof t) return J.test(t) ? t4 : en;
                  else if (Array.isArray(t)) return ee;
                  else if ("object" == typeof t) return ei;
                  return es;
                })(t[0]),
              s = t.length - 1;
            for (let i = 0; i < s; i++) {
              let s = r(t[i], t[i + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[i] || l : e;
                s = t8(t, s);
              }
              n.push(s);
            }
            return n;
          })(e, n, r),
          a = o.length,
          u = (e) => {
            let i = 0;
            if (a > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
            let n = er(t[i], t[i + 1], e);
            return o[i](n);
          };
        return i ? (e) => u(R(t[0], t[s - 1], e)) : u;
      }
      function ea({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        let r = tX(n) ? n.map(tJ) : tJ(n),
          s = { done: !1, value: e[0] },
          o = (
            i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let n = 1; n <= e; n++) {
                        let r = er(0, e, n);
                        t.push(t0(i, 1, r));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
          ).map((e) => e * t),
          a = eo(o, e, {
            ease: Array.isArray(r)
              ? r
              : e.map(() => r || tU).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = a(e)), (s.done = e >= t), s),
        };
      }
      function el(t, e, i) {
        var n, r;
        let s = Math.max(e - 5, 0);
        return (n = i - t(s)), (r = e - s) ? n * (1e3 / r) : 0;
      }
      function eu(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let eh = ["duration", "bounce"],
        ec = ["stiffness", "damping", "mass"];
      function ed(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function ep({ keyframes: t, restDelta: e, restSpeed: i, ...n }) {
        let r;
        let s = t[0],
          o = t[t.length - 1],
          a = { done: !1, value: s },
          {
            stiffness: u,
            damping: h,
            mass: c,
            duration: d,
            velocity: p,
            isResolvedFromDuration: m,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!ed(t, ec) && ed(t, eh)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: n = 1,
              }) {
                let r, s;
                l(t <= t_(10), "Spring duration must be 10 seconds or less");
                let o = 1 - e;
                (o = R(0.05, 1, o)),
                  (t = R(0.01, 10, tD(t))),
                  o < 1
                    ? ((r = (e) => {
                        let n = e * o,
                          r = n * t,
                          s = eu(e, o);
                        return 0.001 - ((n - i) / s) * Math.exp(-r);
                      }),
                      (s = (e) => {
                        let n = e * o,
                          s = n * t,
                          a = Math.pow(o, 2) * Math.pow(e, 2) * t,
                          l = eu(Math.pow(e, 2), o),
                          u = -r(e) + 0.001 > 0 ? -1 : 1;
                        return (u * ((s * i + i - a) * Math.exp(-s))) / l;
                      }))
                    : ((r = (e) => {
                        let n = Math.exp(-e * t),
                          r = (e - i) * t + 1;
                        return -0.001 + n * r;
                      }),
                      (s = (e) => {
                        let n = Math.exp(-e * t),
                          r = (i - e) * (t * t);
                        return n * r;
                      }));
                let a = 5 / t,
                  u = (function (t, e, i) {
                    let n = i;
                    for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                    return n;
                  })(r, s, a);
                if (((t = t_(t)), isNaN(u)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(u, 2) * n;
                  return {
                    stiffness: e,
                    damping: 2 * o * Math.sqrt(n * e),
                    duration: t,
                  };
                }
              })(t);
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...n, velocity: -tD(n.velocity || 0) }),
          f = p || 0,
          v = h / (2 * Math.sqrt(u * c)),
          g = o - s,
          y = tD(Math.sqrt(u / c)),
          x = 5 > Math.abs(g);
        if ((i || (i = x ? 0.01 : 2), e || (e = x ? 0.005 : 0.5), v < 1)) {
          let t = eu(y, v);
          r = (e) =>
            o -
            Math.exp(-v * y * e) *
              (((f + v * y * g) / t) * Math.sin(t * e) + g * Math.cos(t * e));
        } else if (1 === v)
          r = (t) => o - Math.exp(-y * t) * (g + (f + y * g) * t);
        else {
          let t = y * Math.sqrt(v * v - 1);
          r = (e) => {
            let i = Math.min(t * e, 300);
            return (
              o -
              (Math.exp(-v * y * e) *
                ((f + v * y * g) * Math.sinh(i) + t * g * Math.cosh(i))) /
                t
            );
          };
        }
        return {
          calculatedDuration: (m && d) || null,
          next: (t) => {
            let n = r(t);
            if (m) a.done = t >= d;
            else {
              let s = f;
              0 !== t && (s = v < 1 ? el(r, t, n) : 0);
              let l = Math.abs(s) <= i,
                u = Math.abs(o - n) <= e;
              a.done = l && u;
            }
            return (a.value = a.done ? o : n), a;
          },
        };
      }
      function em({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let c, d;
        let p = t[0],
          m = { done: !1, value: p },
          f = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          g = i * e,
          y = p + g,
          x = void 0 === o ? y : o(y);
        x !== y && (g = x - p);
        let b = (t) => -g * Math.exp(-t / n),
          w = (t) => x + b(t),
          P = (t) => {
            let e = b(t),
              i = w(t);
            (m.done = Math.abs(e) <= u), (m.value = m.done ? x : i);
          },
          S = (t) => {
            f(m.value) &&
              ((c = t),
              (d = ep({
                keyframes: [m.value, v(m.value)],
                velocity: el(w, t, m.value),
                damping: r,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          S(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (d || void 0 !== c || ((e = !0), P(t), S(t)),
              void 0 !== c && t > c)
                ? d.next(t - c)
                : (e || P(t), m);
            },
          }
        );
      }
      let ef = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: () => x.update(e, !0),
          stop: () => b(e),
          now: () => (w.isProcessing ? w.timestamp : performance.now()),
        };
      };
      function ev(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
        return e >= 2e4 ? 1 / 0 : e;
      }
      let eg = { decay: em, inertia: em, tween: ea, keyframes: ea, spring: ep };
      function ey({
        autoplay: t = !0,
        delay: e = 0,
        driver: i = ef,
        keyframes: n,
        type: r = "keyframes",
        repeat: s = 0,
        repeatDelay: o = 0,
        repeatType: a = "loop",
        onPlay: l,
        onStop: u,
        onComplete: h,
        onUpdate: c,
        ...d
      }) {
        let p,
          m,
          f,
          v,
          g,
          y = 1,
          x = !1,
          b = () => {
            m = new Promise((t) => {
              p = t;
            });
          };
        b();
        let w = eg[r] || ea;
        w !== ea &&
          "number" != typeof n[0] &&
          ((v = eo([0, 100], n, { clamp: !1 })), (n = [0, 100]));
        let P = w({ ...d, keyframes: n });
        "mirror" === a &&
          (g = w({
            ...d,
            keyframes: [...n].reverse(),
            velocity: -(d.velocity || 0),
          }));
        let S = "idle",
          T = null,
          E = null,
          A = null;
        null === P.calculatedDuration && s && (P.calculatedDuration = ev(P));
        let { calculatedDuration: C } = P,
          M = 1 / 0,
          k = 1 / 0;
        null !== C && (k = (M = C + o) * (s + 1) - o);
        let V = 0,
          _ = (t) => {
            if (null === E) return;
            y > 0 && (E = Math.min(E, t)),
              y < 0 && (E = Math.min(t - k / y, E)),
              (V = null !== T ? T : Math.round(t - E) * y);
            let i = V - e * (y >= 0 ? 1 : -1),
              r = y >= 0 ? i < 0 : i > k;
            (V = Math.max(i, 0)), "finished" === S && null === T && (V = k);
            let l = V,
              u = P;
            if (s) {
              let t = Math.min(V, k) / M,
                e = Math.floor(t),
                i = t % 1;
              !i && t >= 1 && (i = 1), 1 === i && e--, (e = Math.min(e, s + 1));
              let n = Boolean(e % 2);
              n &&
                ("reverse" === a
                  ? ((i = 1 - i), o && (i -= o / M))
                  : "mirror" === a && (u = g)),
                (l = R(0, 1, i) * M);
            }
            let h = r ? { done: !1, value: n[0] } : u.next(l);
            v && (h.value = v(h.value));
            let { done: d } = h;
            r || null === C || (d = y >= 0 ? V >= k : V <= 0);
            let p = null === T && ("finished" === S || ("running" === S && d));
            return c && c(h.value), p && j(), h;
          },
          D = () => {
            f && f.stop(), (f = void 0);
          },
          L = () => {
            (S = "idle"), D(), p(), b(), (E = A = null);
          },
          j = () => {
            (S = "finished"), h && h(), D(), p();
          },
          B = () => {
            if (x) return;
            f || (f = i(_));
            let t = f.now();
            l && l(),
              null !== T ? (E = t - T) : (E && "finished" !== S) || (E = t),
              "finished" === S && b(),
              (A = E),
              (T = null),
              (S = "running"),
              f.start();
          };
        t && B();
        let O = {
          then: (t, e) => m.then(t, e),
          get time() {
            return tD(V);
          },
          set time(newTime) {
            (V = newTime = t_(newTime)),
              null === T && f && 0 !== y
                ? (E = f.now() - newTime / y)
                : (T = newTime);
          },
          get duration() {
            let t =
              null === P.calculatedDuration ? ev(P) : P.calculatedDuration;
            return tD(t);
          },
          get speed() {
            return y;
          },
          set speed(newSpeed) {
            if (newSpeed === y || !f) return;
            (y = newSpeed), (O.time = tD(V));
          },
          get state() {
            return S;
          },
          play: B,
          pause: () => {
            (S = "paused"), (T = V);
          },
          stop: () => {
            (x = !0), "idle" !== S && ((S = "idle"), u && u(), L());
          },
          cancel: () => {
            null !== A && _(A), L();
          },
          complete: () => {
            S = "finished";
          },
          sample: (t) => ((E = 0), _(t)),
        };
        return O;
      }
      let ex =
          ((r = () => Object.hasOwnProperty.call(Element.prototype, "animate")),
          () => (void 0 === n && (n = r()), n)),
        eb = new Set([
          "opacity",
          "clipPath",
          "filter",
          "transform",
          "backgroundColor",
        ]),
        ew = (t, e) =>
          "spring" === e.type ||
          "backgroundColor" === t ||
          !(function t(e) {
            return Boolean(
              !e ||
                ("string" == typeof e && tB[e]) ||
                tj(e) ||
                (Array.isArray(e) && e.every(t))
            );
          })(e.ease),
        eP = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        eS = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        eT = { type: "keyframes", duration: 0.8 },
        eE = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        eA = (t, { keyframes: e }) =>
          e.length > 2
            ? eT
            : tM.has(t)
            ? t.startsWith("scale")
              ? eS(e[1])
              : eP
            : eE,
        eC = (t, e) =>
          "zIndex" !== t &&
          !!(
            "number" == typeof e ||
            Array.isArray(e) ||
            ("string" == typeof e &&
              (tl.test(e) || "0" === e) &&
              !e.startsWith("url("))
          );
      function eM(t, e) {
        return t[e] || t.default || t;
      }
      let ek = { skipAnimations: !1 },
        eV =
          (t, e, i, n = {}) =>
          (r) => {
            let s = eM(n, t) || {},
              o = s.delay || n.delay || 0,
              { elapsed: a = 0 } = n;
            a -= t_(o);
            let u = (function (t, e, i, n) {
                let r, s;
                let o = eC(e, i);
                r = Array.isArray(i) ? [...i] : [null, i];
                let a = void 0 !== n.from ? n.from : t.get(),
                  l = [];
                for (let t = 0; t < r.length; t++) {
                  var u;
                  null === r[t] && (r[t] = 0 === t ? a : r[t - 1]),
                    ("number" == typeof (u = r[t])
                      ? 0 === u
                      : null !== u
                      ? "none" === u || "0" === u || h(u)
                      : void 0) && l.push(t),
                    "string" == typeof r[t] &&
                      "none" !== r[t] &&
                      "0" !== r[t] &&
                      (s = r[t]);
                }
                if (o && l.length && s)
                  for (let t = 0; t < l.length; t++) {
                    let i = l[t];
                    r[i] = tg(e, s);
                  }
                return r;
              })(e, t, i, s),
              c = u[0],
              d = u[u.length - 1],
              p = eC(t, c),
              m = eC(t, d);
            l(
              p === m,
              `You are trying to animate ${t} from "${c}" to "${d}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${d} via the \`style\` property.`
            );
            let f = {
              keyframes: u,
              velocity: e.getVelocity(),
              ease: "easeOut",
              ...s,
              delay: -a,
              onUpdate: (t) => {
                e.set(t), s.onUpdate && s.onUpdate(t);
              },
              onComplete: () => {
                r(), s.onComplete && s.onComplete();
              },
            };
            if (
              (!(function ({
                when: t,
                delay: e,
                delayChildren: i,
                staggerChildren: n,
                staggerDirection: r,
                repeat: s,
                repeatType: o,
                repeatDelay: a,
                from: l,
                elapsed: u,
                ...h
              }) {
                return !!Object.keys(h).length;
              })(s) && (f = { ...f, ...eA(t, f) }),
              f.duration && (f.duration = t_(f.duration)),
              f.repeatDelay && (f.repeatDelay = t_(f.repeatDelay)),
              !p || !m || tL.current || !1 === s.type || ek.skipAnimations)
            )
              return (function ({
                keyframes: t,
                delay: e,
                onUpdate: i,
                onComplete: n,
              }) {
                let r = () => (
                  i && i(t[t.length - 1]),
                  n && n(),
                  {
                    time: 0,
                    speed: 1,
                    duration: 0,
                    play: l,
                    pause: l,
                    stop: l,
                    then: (t) => (t(), Promise.resolve()),
                    cancel: l,
                    complete: l,
                  }
                );
                return e
                  ? ey({
                      keyframes: [0, 1],
                      duration: 0,
                      delay: e,
                      onComplete: r,
                    })
                  : r();
              })(tL.current ? { ...f, delay: 0 } : f);
            if (
              !n.isHandoff &&
              e.owner &&
              e.owner.current instanceof HTMLElement &&
              !e.owner.getProps().onUpdate
            ) {
              let i = (function (t, e, { onUpdate: i, onComplete: n, ...r }) {
                let s, o;
                let a =
                  ex() &&
                  eb.has(e) &&
                  !r.repeatDelay &&
                  "mirror" !== r.repeatType &&
                  0 !== r.damping &&
                  "inertia" !== r.type;
                if (!a) return !1;
                let u = !1,
                  h = !1,
                  c = () => {
                    o = new Promise((t) => {
                      s = t;
                    });
                  };
                c();
                let { keyframes: d, duration: p = 300, ease: m, times: f } = r;
                if (ew(e, r)) {
                  let t = ey({ ...r, repeat: 0, delay: 0 }),
                    e = { done: !1, value: d[0] },
                    i = [],
                    n = 0;
                  for (; !e.done && n < 2e4; )
                    i.push((e = t.sample(n)).value), (n += 10);
                  (f = void 0), (d = i), (p = n - 10), (m = "linear");
                }
                let v = (function (
                    t,
                    e,
                    i,
                    {
                      delay: n = 0,
                      duration: r,
                      repeat: s = 0,
                      repeatType: o = "loop",
                      ease: a,
                      times: l,
                    } = {}
                  ) {
                    let u = { [e]: i };
                    l && (u.offset = l);
                    let h = (function t(e) {
                      if (e)
                        return tj(e)
                          ? tR(e)
                          : Array.isArray(e)
                          ? e.map(t)
                          : tB[e];
                    })(a);
                    return (
                      Array.isArray(h) && (u.easing = h),
                      t.animate(u, {
                        delay: n,
                        duration: r,
                        easing: Array.isArray(h) ? "linear" : h,
                        fill: "both",
                        iterations: s + 1,
                        direction: "reverse" === o ? "alternate" : "normal",
                      })
                    );
                  })(t.owner.current, e, d, {
                    ...r,
                    duration: p,
                    ease: m,
                    times: f,
                  }),
                  g = () => {
                    (h = !1), v.cancel();
                  },
                  y = () => {
                    (h = !0), x.update(g), s(), c();
                  };
                v.onfinish = () => {
                  h ||
                    (t.set(
                      (function (t, { repeat: e, repeatType: i = "loop" }) {
                        let n =
                          e && "loop" !== i && e % 2 == 1 ? 0 : t.length - 1;
                        return t[n];
                      })(d, r)
                    ),
                    n && n(),
                    y());
                };
                let w = {
                  then: (t, e) => o.then(t, e),
                  attachTimeline: (t) => (
                    (v.timeline = t), (v.onfinish = null), l
                  ),
                  get time() {
                    return tD(v.currentTime || 0);
                  },
                  set time(newTime) {
                    v.currentTime = t_(newTime);
                  },
                  get speed() {
                    return v.playbackRate;
                  },
                  set speed(newSpeed) {
                    v.playbackRate = newSpeed;
                  },
                  get duration() {
                    return tD(p);
                  },
                  play: () => {
                    u || (v.play(), b(g));
                  },
                  pause: () => v.pause(),
                  stop: () => {
                    if (((u = !0), "idle" === v.playState)) return;
                    let { currentTime: e } = v;
                    if (e) {
                      let i = ey({ ...r, autoplay: !1 });
                      t.setWithVelocity(
                        i.sample(e - 10).value,
                        i.sample(e).value,
                        10
                      );
                    }
                    y();
                  },
                  complete: () => {
                    h || v.finish();
                  },
                  cancel: y,
                };
                return w;
              })(e, t, f);
              if (i) return i;
            }
            return ey(f);
          },
        e_ = (t) => Boolean(t && t.getVelocity);
      function eD(t) {
        return Boolean(e_(t) && t.add);
      }
      function eL(t, e, { delay: i = 0, transitionOverride: n, type: r } = {}) {
        let {
            transition: s = t.getDefaultTransition(),
            transitionEnd: o,
            ...a
          } = t.makeTargetAnimatable(e),
          l = t.getValue("willChange");
        n && (s = n);
        let u = [],
          h = r && t.animationState && t.animationState.getState()[r];
        for (let e in a) {
          let n = t.getValue(e),
            r = a[e];
          if (
            !n ||
            void 0 === r ||
            (h &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), n;
              })(h, e))
          )
            continue;
          let o = { delay: i, elapsed: 0, ...eM(s || {}, e) };
          if (window.HandoffAppearAnimations) {
            let i = t.getProps()[tV];
            if (i) {
              let t = window.HandoffAppearAnimations(i, e, n, x);
              null !== t && ((o.elapsed = t), (o.isHandoff = !0));
            }
          }
          let c =
            !o.isHandoff &&
            !(function (t, e) {
              let i = t.get();
              if (!Array.isArray(e)) return i !== e;
              for (let t = 0; t < e.length; t++) if (e[t] !== i) return !0;
            })(n, r);
          if (
            ("spring" === o.type && (n.getVelocity() || o.velocity) && (c = !1),
            n.animation && (c = !1),
            c)
          )
            continue;
          n.start(
            eV(e, n, r, t.shouldReduceMotion && tM.has(e) ? { type: !1 } : o)
          );
          let d = n.animation;
          eD(l) && (l.add(e), d.then(() => l.remove(e))), u.push(d);
        }
        return (
          o &&
            Promise.all(u).then(() => {
              o && tE(t, o);
            }),
          u
        );
      }
      function ej(t, e, i = {}) {
        let n = tT(t, e, i.custom),
          { transition: r = t.getDefaultTransition() || {} } = n || {};
        i.transitionOverride && (r = i.transitionOverride);
        let s = n ? () => Promise.all(eL(t, n, i)) : () => Promise.resolve(),
          o =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: s = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = r;
                  return (function (t, e, i = 0, n = 0, r = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * n,
                      l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(eR)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              ej(t, e, { ...s, delay: i + l(n) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, s + n, o, a, i);
                }
              : () => Promise.resolve(),
          { when: a } = r;
        if (!a) return Promise.all([s(), o(i.delay)]);
        {
          let [t, e] = "beforeChildren" === a ? [s, o] : [o, s];
          return t().then(() => e());
        }
      }
      function eR(t, e) {
        return t.sortNodePosition(e);
      }
      function eB(t, e, i = {}) {
        let n;
        if ((t.notify("AnimationStart", e), Array.isArray(e))) {
          let r = e.map((e) => ej(t, e, i));
          n = Promise.all(r);
        } else if ("string" == typeof e) n = ej(t, e, i);
        else {
          let r = "function" == typeof e ? tT(t, e, i.custom) : e;
          n = Promise.all(eL(t, r, i));
        }
        return n.then(() => t.notify("AnimationComplete", e));
      }
      function eO() {
        let t = !1,
          e = new Set(),
          i = {
            subscribe: (t) => (e.add(t), () => void e.delete(t)),
            start(i, n) {
              l(
                t,
                "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook."
              );
              let r = [];
              return (
                e.forEach((t) => {
                  r.push(eB(t, i, { transitionOverride: n }));
                }),
                Promise.all(r)
              );
            },
            set: (i) => (
              l(
                t,
                "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."
              ),
              e.forEach((t) => {
                Array.isArray(i)
                  ? tA(t, i)
                  : "string" == typeof i
                  ? tA(t, [i])
                  : tE(t, i);
              })
            ),
            stop() {
              e.forEach((t) => {
                !(function (t) {
                  t.values.forEach((t) => t.stop());
                })(t);
              });
            },
            mount: () => (
              (t = !0),
              () => {
                (t = !1), i.stop();
              }
            ),
          };
        return i;
      }
      function eI(t) {
        let e = (0, a.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
      let eF = "undefined" != typeof document,
        eN = eF ? a.useLayoutEffect : a.useEffect,
        eU = function () {
          let t = eI(eO);
          return eN(t.mount, []), t;
        },
        eX = (0, a.createContext)({
          transformPagePoint: (t) => t,
          isStatic: !1,
          reducedMotion: "never",
        }),
        eW = (0, a.createContext)({}),
        eH = (0, a.createContext)(null),
        e$ = (0, a.createContext)({ strict: !1 });
      function ez(t) {
        return (
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function eY(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function eK(t) {
        return "object" == typeof t && "function" == typeof t.start;
      }
      let eq = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        eG = ["initial", ...eq];
      function eZ(t) {
        return eK(t.animate) || eG.some((e) => eY(t[e]));
      }
      function eQ(t) {
        return Boolean(eZ(t) || t.variants);
      }
      function eJ(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let e0 = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        e1 = {};
      for (let t in e0) e1[t] = { isEnabled: (e) => e0[t].some((t) => !!e[t]) };
      let e2 = (0, a.createContext)({}),
        e3 = (0, a.createContext)({}),
        e5 = Symbol.for("motionComponentSymbol"),
        e9 = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function e4(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (e9.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
        return !1;
      }
      let e6 = {};
      function e8(t, { layout: e, layoutId: i }) {
        return (
          tM.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!e6[t] || "opacity" === t))
        );
      }
      let e7 = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        it = tC.length,
        ie = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
      function ii(t, e, i, n) {
        let { style: r, vars: s, transform: o, transformOrigin: a } = t,
          l = !1,
          u = !1,
          h = !0;
        for (let t in e) {
          let i = e[t];
          if (M(t)) {
            s[t] = i;
            continue;
          }
          let n = tm[t],
            c = ie(i, n);
          if (tM.has(t)) {
            if (((l = !0), (o[t] = c), !h)) continue;
            i !== (n.default || 0) && (h = !1);
          } else t.startsWith("origin") ? ((u = !0), (a[t] = c)) : (r[t] = c);
        }
        if (
          (!e.transform &&
            (l || n
              ? (r.transform = (function (
                  t,
                  {
                    enableHardwareAcceleration: e = !0,
                    allowTransformNone: i = !0,
                  },
                  n,
                  r
                ) {
                  let s = "";
                  for (let e = 0; e < it; e++) {
                    let i = tC[e];
                    if (void 0 !== t[i]) {
                      let e = e7[i] || i;
                      s += `${e}(${t[i]}) `;
                    }
                  }
                  return (
                    e && !t.z && (s += "translateZ(0)"),
                    (s = s.trim()),
                    r ? (s = r(t, n ? "" : s)) : i && n && (s = "none"),
                    s
                  );
                })(t.transform, i, h, n))
              : r.transform && (r.transform = "none")),
          u)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = a;
          r.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      let ir = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function is(t, e, i) {
        for (let n in e) e_(e[n]) || e8(n, i) || (t[n] = e[n]);
      }
      function io(t, e, i) {
        let n = {},
          r = (function (t, e, i) {
            let n = t.style || {},
              r = {};
            return (
              is(r, n, t),
              Object.assign(
                r,
                (function ({ transformTemplate: t }, e, i) {
                  return (0, a.useMemo)(() => {
                    let n = ir();
                    return (
                      ii(n, e, { enableHardwareAcceleration: !i }, t),
                      Object.assign({}, n.vars, n.style)
                    );
                  }, [e]);
                })(t, e, i)
              ),
              t.transformValues ? t.transformValues(r) : r
            );
          })(t, e, i);
        return (
          t.drag &&
            !1 !== t.dragListener &&
            ((n.draggable = !1),
            (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
            (r.touchAction =
              !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`)),
          void 0 === t.tabIndex &&
            (t.onTap || t.onTapStart || t.whileTap) &&
            (n.tabIndex = 0),
          (n.style = r),
          n
        );
      }
      let ia = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "ignoreStrict",
        "viewport",
      ]);
      function il(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          ia.has(t)
        );
      }
      let iu = (t) => !il(t);
      try {
        (s = require("@emotion/is-prop-valid").default) &&
          (iu = (t) => (t.startsWith("on") ? !il(t) : s(t)));
      } catch (t) {}
      function ih(t, e, i) {
        return "string" == typeof t ? t : K.transform(e + i * t);
      }
      let ic = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        id = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function ip(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: n,
          originX: r,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        c,
        d
      ) {
        if ((ii(t, u, h, d), c)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: p, style: m, dimensions: f } = t;
        p.transform && (f && (m.transform = p.transform), delete p.transform),
          f &&
            (void 0 !== r || void 0 !== s || m.transform) &&
            (m.transformOrigin = (function (t, e, i) {
              let n = ih(e, t.x, t.width),
                r = ih(i, t.y, t.height);
              return `${n} ${r}`;
            })(f, void 0 !== r ? r : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== e && (p.x = e),
          void 0 !== i && (p.y = i),
          void 0 !== n && (p.scale = n),
          void 0 !== o &&
            (function (t, e, i = 1, n = 0, r = !0) {
              t.pathLength = 1;
              let s = r ? ic : id;
              t[s.offset] = K.transform(-n);
              let o = K.transform(e),
                a = K.transform(i);
              t[s.array] = `${o} ${a}`;
            })(p, o, a, l, !1);
      }
      let im = () => ({ ...ir(), attrs: {} }),
        iv = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function ig(t, e, i, n) {
        let r = (0, a.useMemo)(() => {
          let i = im();
          return (
            ip(
              i,
              e,
              { enableHardwareAcceleration: !1 },
              iv(n),
              t.transformTemplate
            ),
            { ...i.attrs, style: { ...i.style } }
          );
        }, [e]);
        if (t.style) {
          let e = {};
          is(e, t.style, t), (r.style = { ...e, ...r.style });
        }
        return r;
      }
      function iy(t, { style: e, vars: i }, n, r) {
        for (let s in (Object.assign(t.style, e, r && r.getProjectionStyles(n)),
        i))
          t.style.setProperty(s, i[s]);
      }
      let ix = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function ib(t, e, i, n) {
        for (let i in (iy(t, e, void 0, n), e.attrs))
          t.setAttribute(ix.has(i) ? i : tk(i), e.attrs[i]);
      }
      function iw(t, e) {
        let { style: i } = t,
          n = {};
        for (let r in i)
          (e_(i[r]) || (e.style && e_(e.style[r])) || e8(r, t)) &&
            (n[r] = i[r]);
        return n;
      }
      function iP(t, e) {
        let i = iw(t, e);
        for (let n in t)
          if (e_(t[n]) || e_(e[n])) {
            let e =
              -1 !== tC.indexOf(n)
                ? "attr" + n.charAt(0).toUpperCase() + n.substring(1)
                : n;
            i[e] = t[n];
          }
        return i;
      }
      function iS(t) {
        let e = e_(t) ? t.get() : t;
        return d(e) ? e.toValue() : e;
      }
      let iT = (t) => (e, i) => {
          let n = (0, a.useContext)(eW),
            r = (0, a.useContext)(eH),
            s = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: t,
                  createRenderState: e,
                  onMount: i,
                },
                n,
                r,
                s
              ) {
                let o = {
                  latestValues: (function (t, e, i, n) {
                    let r = {},
                      s = n(t, {});
                    for (let t in s) r[t] = iS(s[t]);
                    let { initial: o, animate: a } = t,
                      l = eZ(t),
                      u = eQ(t);
                    e &&
                      u &&
                      !l &&
                      !1 !== t.inherit &&
                      (void 0 === o && (o = e.initial),
                      void 0 === a && (a = e.animate));
                    let h = !!i && !1 === i.initial;
                    h = h || !1 === o;
                    let c = h ? a : o;
                    if (c && "boolean" != typeof c && !eK(c)) {
                      let e = Array.isArray(c) ? c : [c];
                      e.forEach((e) => {
                        let i = tS(t, e);
                        if (!i) return;
                        let { transitionEnd: n, transition: s, ...o } = i;
                        for (let t in o) {
                          let e = o[t];
                          if (Array.isArray(e)) {
                            let t = h ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (r[t] = e);
                        }
                        for (let t in n) r[t] = n[t];
                      });
                    }
                    return r;
                  })(n, r, s, t),
                  renderState: e(),
                };
                return i && (o.mount = (t) => i(n, t, o)), o;
              })(t, e, n, r);
          return i ? s() : eI(s);
        },
        iE = {
          useVisualState: iT({
            scrapeMotionValuesFromProps: iP,
            createRenderState: im,
            onMount: (t, e, { renderState: i, latestValues: n }) => {
              x.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                x.render(() => {
                  ip(
                    i,
                    n,
                    { enableHardwareAcceleration: !1 },
                    iv(e.tagName),
                    t.transformTemplate
                  ),
                    ib(e, i);
                });
            },
          }),
        },
        iA = {
          useVisualState: iT({
            scrapeMotionValuesFromProps: iw,
            createRenderState: ir,
          }),
        };
      function iC(t, e, i, n = { passive: !0 }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
      let iM = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function ik(t, e = "page") {
        return { point: { x: t[e + "X"], y: t[e + "Y"] } };
      }
      let iV = (t) => (e) => iM(e) && t(e, ik(e));
      function i_(t, e, i, n) {
        return iC(t, e, iV(i), n);
      }
      function iD(t) {
        let e = null;
        return () => {
          let i = () => {
            e = null;
          };
          return null === e && ((e = t), i);
        };
      }
      let iL = iD("dragHorizontal"),
        ij = iD("dragVertical");
      function iR(t) {
        let e = !1;
        if ("y" === t) e = ij();
        else if ("x" === t) e = iL();
        else {
          let t = iL(),
            i = ij();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function iB() {
        let t = iR(!0);
        return !t || (t(), !1);
      }
      class iO {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      function iI(t, e) {
        let i = "onHover" + (e ? "Start" : "End"),
          n = (n, r) => {
            if ("touch" === n.type || iB()) return;
            let s = t.getProps();
            t.animationState &&
              s.whileHover &&
              t.animationState.setActive("whileHover", e),
              s[i] && x.update(() => s[i](n, r));
          };
        return i_(t.current, "pointer" + (e ? "enter" : "leave"), n, {
          passive: !t.getProps()[i],
        });
      }
      let iF = (t, e) => !!e && (t === e || iF(t, e.parentElement));
      function iN(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, ik(i));
      }
      let iU = new WeakMap(),
        iX = new WeakMap(),
        iW = (t) => {
          let e = iU.get(t.target);
          e && e(t);
        },
        iH = (t) => {
          t.forEach(iW);
        },
        i$ = { some: 0, all: 1 };
      function iz(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      let iY = [...eq].reverse(),
        iK = eq.length;
      function iq(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      let iG = 0,
        iZ = (t, e) => Math.abs(t - e);
      class iQ {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n,
            dragSnapToOrigin: r = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = i1(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    let i = iZ(t.x, e.x),
                      n = iZ(t.y, e.y);
                    return Math.sqrt(i ** 2 + n ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !i) return;
              let { point: n } = t,
                { timestamp: r } = w;
              this.history.push({ ...n, timestamp: r });
              let { onStart: s, onMove: o } = this.handlers;
              e ||
                (s && s(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = iJ(e, this.transformPagePoint)),
                x.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: n,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = i1(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : iJ(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, s), n && n(t, s);
            }),
            !iM(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = n || window);
          let s = ik(t),
            o = iJ(s, this.transformPagePoint),
            { point: a } = o,
            { timestamp: l } = w;
          this.history = [{ ...a, timestamp: l }];
          let { onSessionStart: u } = e;
          u && u(t, i1(o, this.history)),
            (this.removeListeners = t8(
              i_(this.contextWindow, "pointermove", this.handlePointerMove),
              i_(this.contextWindow, "pointerup", this.handlePointerUp),
              i_(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(), b(this.updatePoint);
        }
      }
      function iJ(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function i0(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function i1({ point: t }, e) {
        return {
          point: t,
          delta: i0(t, i2(e)),
          offset: i0(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              r = i2(t);
            for (
              ;
              i >= 0 && ((n = t[i]), !(r.timestamp - n.timestamp > t_(0.1)));

            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let s = tD(r.timestamp - n.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - n.x) / s, y: (r.y - n.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function i2(t) {
        return t[t.length - 1];
      }
      function i3(t) {
        return t.max - t.min;
      }
      function i5(t, e = 0, i = 0.01) {
        return Math.abs(t - e) <= i;
      }
      function i9(t, e, i, n = 0.5) {
        (t.origin = n),
          (t.originPoint = t0(e.min, e.max, t.origin)),
          (t.scale = i3(i) / i3(e)),
          (i5(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = t0(i.min, i.max, t.origin) - t.originPoint),
          (i5(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function i4(t, e, i, n) {
        i9(t.x, e.x, i.x, n ? n.originX : void 0),
          i9(t.y, e.y, i.y, n ? n.originY : void 0);
      }
      function i6(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + i3(e));
      }
      function i8(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + i3(e));
      }
      function i7(t, e, i) {
        i8(t.x, e.x, i.x), i8(t.y, e.y, i.y);
      }
      function nt(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function ne(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n }
        );
      }
      function ni(t, e, i) {
        return { min: nn(t, e), max: nn(t, i) };
      }
      function nn(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let nr = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        ns = () => ({ x: nr(), y: nr() }),
        no = () => ({ min: 0, max: 0 }),
        na = () => ({ x: no(), y: no() });
      function nl(t) {
        return [t("x"), t("y")];
      }
      function nu({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function nh(t) {
        return void 0 === t || 1 === t;
      }
      function nc({ scale: t, scaleX: e, scaleY: i }) {
        return !nh(t) || !nh(e) || !nh(i);
      }
      function nd(t) {
        return nc(t) || np(t) || t.z || t.rotate || t.rotateX || t.rotateY;
      }
      function np(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function nm(t, e, i, n, r) {
        return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e;
      }
      function nf(t, e = 0, i = 1, n, r) {
        (t.min = nm(t.min, e, i, n, r)), (t.max = nm(t.max, e, i, n, r));
      }
      function nv(t, { x: e, y: i }) {
        nf(t.x, e.translate, e.scale, e.originPoint),
          nf(t.y, i.translate, i.scale, i.originPoint);
      }
      function ng(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }
      function ny(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function nx(t, e, [i, n, r]) {
        let s = void 0 !== e[r] ? e[r] : 0.5,
          o = t0(t.min, t.max, s);
        nf(t, e[i], e[n], o, e.scale);
      }
      let nb = ["x", "scaleX", "originX"],
        nw = ["y", "scaleY", "originY"];
      function nP(t, e) {
        nx(t.x, e, nb), nx(t.y, e, nw);
      }
      function nS(t, e) {
        return nu(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let nT = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        nE = new WeakMap();
      class nA {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = na()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let n = (t) => {
              let { dragSnapToOrigin: i } = this.getProps();
              i ? this.pauseAnimation() : this.stopAnimation(),
                e && this.snapToCursor(ik(t, "page").point);
            },
            r = (t, e) => {
              let {
                drag: i,
                dragPropagation: n,
                onDragStart: r,
              } = this.getProps();
              if (
                i &&
                !n &&
                (this.openGlobalLock && this.openGlobalLock(),
                (this.openGlobalLock = iR(i)),
                !this.openGlobalLock)
              )
                return;
              (this.isDragging = !0),
                (this.currentDirection = null),
                this.resolveConstraints(),
                this.visualElement.projection &&
                  ((this.visualElement.projection.isAnimationBlocked = !0),
                  (this.visualElement.projection.target = void 0)),
                nl((t) => {
                  let e = this.getAxisMotionValue(t).get() || 0;
                  if (Y.test(e)) {
                    let { projection: i } = this.visualElement;
                    if (i && i.layout) {
                      let n = i.layout.layoutBox[t];
                      if (n) {
                        let t = i3(n);
                        e = t * (parseFloat(e) / 100);
                      }
                    }
                  }
                  this.originPoint[t] = e;
                }),
                r && x.update(() => r(t, e), !1, !0);
              let { animationState: s } = this.visualElement;
              s && s.setActive("whileDrag", !0);
            },
            s = (t, e) => {
              let {
                dragPropagation: i,
                dragDirectionLock: n,
                onDirectionLock: r,
                onDrag: s,
              } = this.getProps();
              if (!i && !this.openGlobalLock) return;
              let { offset: o } = e;
              if (n && null === this.currentDirection) {
                (this.currentDirection = (function (t, e = 10) {
                  let i = null;
                  return (
                    Math.abs(t.y) > e
                      ? (i = "y")
                      : Math.abs(t.x) > e && (i = "x"),
                    i
                  );
                })(o)),
                  null !== this.currentDirection &&
                    r &&
                    r(this.currentDirection);
                return;
              }
              this.updateAxis("x", e.point, o),
                this.updateAxis("y", e.point, o),
                this.visualElement.render(),
                s && s(t, e);
            },
            o = (t, e) => this.stop(t, e),
            a = () =>
              nl((t) => {
                var e;
                return (
                  "paused" === this.getAnimationState(t) &&
                  (null === (e = this.getAxisMotionValue(t).animation) ||
                  void 0 === e
                    ? void 0
                    : e.play())
                );
              }),
            { dragSnapToOrigin: l } = this.getProps();
          this.panSession = new iQ(
            t,
            {
              onSessionStart: n,
              onStart: r,
              onMove: s,
              onSessionEnd: o,
              resumeAnimation: a,
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: l,
              contextWindow: nT(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: n } = e;
          this.startAnimation(n);
          let { onDragEnd: r } = this.getProps();
          r && x.update(() => r(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !nC(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? t0(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? t0(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            r = this.constraints;
          e && ez(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && n
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: n, right: r }
              ) {
                return { x: nt(t.x, i, r), y: nt(t.y, e, n) };
              })(n.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: ni(t, "left", "right"), y: ni(t, "top", "bottom") }
              );
            })(i)),
            r !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              nl((t) => {
                this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(n.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !ez(e)) return !1;
          let n = e.current;
          l(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (function (t, e, i) {
              let n = nS(t, i),
                { scroll: r } = e;
              return r && (ny(n.x, r.offset.x), ny(n.y, r.offset.y)), n;
            })(n, r.root, this.visualElement.getTransformPagePoint()),
            o = { x: ne((t = r.layout.layoutBox).x, s.x), y: ne(t.y, s.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = nu(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {},
            l = nl((o) => {
              if (!nC(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            });
          return Promise.all(l).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start(eV(t, i, 0, e));
        }
        stopAnimation() {
          nl((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          nl((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = "_drag" + t.toUpperCase(),
            i = this.visualElement.getProps(),
            n = i[e];
          return (
            n ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          nl((e) => {
            let { drag: i } = this.getProps();
            if (!nC(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: s } = n.layout.layoutBox[e];
              r.set(t[e] - t0(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!ez(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          nl((t) => {
            let e = this.getAxisMotionValue(t);
            if (e) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = i3(t),
                  r = i3(e);
                return (
                  r > n
                    ? (i = er(e.min, e.max - n, t.min))
                    : n > r && (i = er(t.min, t.max - r, e.min)),
                  R(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            nl((e) => {
              if (!nC(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              i.set(t0(r, s, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          nE.set(this.visualElement, this);
          let t = this.visualElement.current,
            e = i_(t, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            i = () => {
              let { dragConstraints: t } = this.getProps();
              ez(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: n } = this.visualElement,
            r = n.addEventListener("measure", i);
          n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
            i();
          let s = iC(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            o = n.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (nl((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            s(), e(), r(), o && o();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function nC(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      let nM = (t) => (e, i) => {
          t && x.update(() => t(e, i));
        },
        nk = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function nV(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let n_ = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!K.test(t)) return t;
            t = parseFloat(t);
          }
          let i = nV(t, e.target.x),
            n = nV(t, e.target.y);
          return `${i}% ${n}%`;
        },
      };
      class nD extends a.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: r } = t;
          Object.assign(e6, nj),
            r &&
              (e.group && e.group.add(r),
              i && i.register && n && i.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (nk.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: r,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = r),
              n || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    x.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            queueMicrotask(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            i && i.deregister && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function nL(t) {
        let [e, i] = (function () {
            let t = (0, a.useContext)(eH);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: n } = t,
              r = (0, a.useId)();
            (0, a.useEffect)(() => n(r), []);
            let s = () => i && i(r);
            return !e && i ? [!1, s] : [!0];
          })(),
          n = (0, a.useContext)(e2);
        return a.createElement(nD, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, a.useContext)(e3),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let nj = {
          borderRadius: {
            ...n_,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: n_,
          borderTopRightRadius: n_,
          borderBottomLeftRadius: n_,
          borderBottomRightRadius: n_,
          boxShadow: {
            correct: (t, { treeScale: e, projectionDelta: i }) => {
              let n = tl.parse(t);
              if (n.length > 5) return t;
              let r = tl.createTransformer(t),
                s = "number" != typeof n[0] ? 1 : 0,
                o = i.x.scale * e.x,
                a = i.y.scale * e.y;
              (n[0 + s] /= o), (n[1 + s] /= a);
              let l = t0(o, a, 0.5);
              return (
                "number" == typeof n[2 + s] && (n[2 + s] /= l),
                "number" == typeof n[3 + s] && (n[3 + s] /= l),
                r(n)
              );
            },
          },
        },
        nR = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        nB = nR.length,
        nO = (t) => ("string" == typeof t ? parseFloat(t) : t),
        nI = (t) => "number" == typeof t || K.test(t);
      function nF(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let nN = nX(0, 0.5, tz),
        nU = nX(0.5, 0.95, l);
      function nX(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i(er(t, e, n)));
      }
      function nW(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function nH(t, e) {
        nW(t.x, e.x), nW(t.y, e.y);
      }
      function n$(t, e, i, n, r) {
        return (
          (t -= e),
          (t = n + (1 / i) * (t - n)),
          void 0 !== r && (t = n + (1 / r) * (t - n)),
          t
        );
      }
      function nz(t, e, [i, n, r], s, o) {
        !(function (t, e = 0, i = 1, n = 0.5, r, s = t, o = t) {
          if (Y.test(e)) {
            e = parseFloat(e);
            let t = t0(o.min, o.max, e / 100);
            e = t - o.min;
          }
          if ("number" != typeof e) return;
          let a = t0(s.min, s.max, n);
          t === s && (a -= e),
            (t.min = n$(t.min, e, i, a, r)),
            (t.max = n$(t.max, e, i, a, r));
        })(t, e[i], e[n], e[r], e.scale, s, o);
      }
      let nY = ["x", "scaleX", "originX"],
        nK = ["y", "scaleY", "originY"];
      function nq(t, e, i, n) {
        nz(t.x, e, nY, i ? i.x : void 0, n ? n.x : void 0),
          nz(t.y, e, nK, i ? i.y : void 0, n ? n.y : void 0);
      }
      function nG(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function nZ(t) {
        return nG(t.x) && nG(t.y);
      }
      function nQ(t, e) {
        return (
          Math.round(t.x.min) === Math.round(e.x.min) &&
          Math.round(t.x.max) === Math.round(e.x.max) &&
          Math.round(t.y.min) === Math.round(e.y.min) &&
          Math.round(t.y.max) === Math.round(e.y.max)
        );
      }
      function nJ(t) {
        return i3(t.x) / i3(t.y);
      }
      class n0 {
        constructor() {
          this.members = [];
        }
        add(t) {
          m(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (f(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function n1(t, e, i) {
        let n = "",
          r = t.x.translate / e.x,
          s = t.y.translate / e.y;
        if (
          ((r || s) && (n = `translate3d(${r}px, ${s}px, 0) `),
          (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `),
          i)
        ) {
          let { rotate: t, rotateX: e, rotateY: r } = i;
          t && (n += `rotate(${t}deg) `),
            e && (n += `rotateX(${e}deg) `),
            r && (n += `rotateY(${r}deg) `);
        }
        let o = t.x.scale * e.x,
          a = t.y.scale * e.y;
        return (1 !== o || 1 !== a) && (n += `scale(${o}, ${a})`), n || "none";
      }
      let n2 = (t, e) => t.depth - e.depth;
      class n3 {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          m(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          f(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(n2),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      let n5 = ["", "X", "Y", "Z"],
        n9 = { visibility: "hidden" },
        n4 = 0,
        n6 = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function n8({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = n4++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  (n6.totalNodes =
                    n6.resolvedTargetDeltas =
                    n6.recalculatedProjection =
                      0),
                  this.nodes.forEach(re),
                  this.nodes.forEach(rl),
                  this.nodes.forEach(ru),
                  this.nodes.forEach(ri),
                  window.MotionDebug && window.MotionDebug.record(n6);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new n3());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new v()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: n, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (r || n) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let n = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = performance.now(),
                      n = ({ timestamp: r }) => {
                        let s = r - i;
                        s >= e && (b(n), t(s - e));
                      };
                    return x.read(n, !0), () => b(n);
                  })(n, 250)),
                  nk.hasAnimatedSinceResize &&
                    ((nk.hasAnimatedSinceResize = !1), this.nodes.forEach(ra));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                s &&
                (n || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        rf,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !nQ(this.targetLayout, n) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = { ...eM(r, "layout"), onPlay: o, onComplete: a };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || ra(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              b(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(rh),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            this.updateScheduled = !1;
            let t = this.isUpdateBlocked();
            if (t) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(rr);
              return;
            }
            this.isUpdating || this.nodes.forEach(rs),
              (this.isUpdating = !1),
              this.nodes.forEach(ro),
              this.nodes.forEach(n7),
              this.nodes.forEach(rt),
              this.clearAllSnapshots();
            let e = performance.now();
            (w.delta = R(0, 1e3 / 60, e - w.timestamp)),
              (w.timestamp = e),
              (w.isProcessing = !0),
              P.update.process(w),
              P.preRender.process(w),
              P.render.process(w),
              (w.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0),
              queueMicrotask(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(rn), this.sharedNodes.forEach(rc);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              x.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            x.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++) {
                let e = this.path[t];
                e.updateScroll();
              }
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = na()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = Boolean(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: n(this.instance),
                  offset: i(this.instance),
                });
          }
          resetTransform() {
            if (!r) return;
            let t = this.isLayoutDirty || this.shouldResetTransform,
              e = this.projectionDelta && !nZ(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              s = n !== this.prevTransformTemplateValue;
            t &&
              (e || nd(this.latestValues) || s) &&
              (r(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              ry((e = n).x),
              ry(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return na();
            let e = t.measureViewportBox(),
              { scroll: i } = this.root;
            return i && (ny(e.x, i.offset.x), ny(e.y, i.offset.y)), e;
          }
          removeElementScroll(t) {
            let e = na();
            nH(e, t);
            for (let i = 0; i < this.path.length; i++) {
              let n = this.path[i],
                { scroll: r, options: s } = n;
              if (n !== this.root && r && s.layoutScroll) {
                if (r.isRoot) {
                  nH(e, t);
                  let { scroll: i } = this.root;
                  i && (ny(e.x, -i.offset.x), ny(e.y, -i.offset.y));
                }
                ny(e.x, r.offset.x), ny(e.y, r.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let i = na();
            nH(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                nP(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                nd(n.latestValues) && nP(i, n.latestValues);
            }
            return nd(this.latestValues) && nP(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = na();
            nH(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !nd(i.latestValues)) continue;
              nc(i.latestValues) && i.updateSnapshot();
              let n = na(),
                r = i.measurePageBox();
              nH(n, r),
                nq(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n
                );
            }
            return nd(this.latestValues) && nq(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== w.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, n, r;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = Boolean(this.resumingFrom) || this !== s,
              a = !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              );
            if (a) return;
            let { layout: l, layoutId: u } = this.options;
            if (this.layout && (l || u)) {
              if (
                ((this.resolvedRelativeTargetAt = w.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = na()),
                    (this.relativeTargetOrigin = na()),
                    i7(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    nH(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = na()), (this.targetWithTransforms = na())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      i6(i.x, n.x, r.x),
                      i6(i.y, n.y, r.y))
                    : this.targetDelta
                    ? (Boolean(this.resumingFrom)
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : nH(this.target, this.layout.layoutBox),
                      nv(this.target, this.targetDelta))
                    : nH(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  Boolean(t.resumingFrom) === Boolean(this.resumingFrom) &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = na()),
                      (this.relativeTargetOrigin = na()),
                      i7(this.relativeTargetOrigin, this.target, t.target),
                      nH(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                n6.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              nc(this.parent.latestValues) ||
              np(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return Boolean(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
                this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = Boolean(this.resumingFrom) || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === w.timestamp && (n = !1),
              n)
            )
              return;
            let { layout: r, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = Boolean(
                (this.parent && this.parent.isTreeAnimating) ||
                  this.currentAnimation ||
                  this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || s))
            )
              return;
            nH(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, n = !1) {
              let r, s;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (r = i[a]).projectionDelta;
                  let o = r.instance;
                  (!o || !o.style || "contents" !== o.style.display) &&
                    (n &&
                      r.options.layoutScroll &&
                      r.scroll &&
                      r !== r.root &&
                      nP(t, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), nv(t, s)),
                    n && nd(r.latestValues) && nP(t, r.latestValues));
                }
                (e.x = ng(e.x)), (e.y = ng(e.y));
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                (e.target = e.layout.layoutBox);
            let { target: l } = e;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = ns()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = ns()),
              (this.projectionDeltaWithTransform = ns()));
            let u = this.projectionTransform;
            i4(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = n1(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== u ||
                this.treeScale.x !== o ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              n6.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let n = this.snapshot,
              r = n ? n.latestValues : {},
              s = { ...this.latestValues },
              o = ns();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = na(),
              l = n ? n.source : void 0,
              u = this.layout ? this.layout.source : void 0,
              h = l !== u,
              c = this.getStack(),
              d = !c || c.members.length <= 1,
              p = Boolean(
                h && !d && !0 === this.options.crossfade && !this.path.some(rm)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (rd(o.x, t.x, n),
                  rd(o.y, t.y, n),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var l, u, c, m;
                  i7(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (c = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    rp(c.x, m.x, a.x, n),
                    rp(c.y, m.y, a.y, n),
                    i &&
                      ((l = this.relativeTarget),
                      (u = i),
                      l.x.min === u.x.min &&
                        l.x.max === u.x.max &&
                        l.y.min === u.y.min &&
                        l.y.max === u.y.max) &&
                      (this.isProjectionDirty = !1),
                    i || (i = na()),
                    nH(i, this.relativeTarget);
                }
                h &&
                  ((this.animationValues = s),
                  (function (t, e, i, n, r, s) {
                    r
                      ? ((t.opacity = t0(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          nN(n)
                        )),
                        (t.opacityExit = t0(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          nU(n)
                        )))
                      : s &&
                        (t.opacity = t0(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          n
                        ));
                    for (let r = 0; r < nB; r++) {
                      let s = `border${nR[r]}Radius`,
                        o = nF(e, s),
                        a = nF(i, s);
                      if (void 0 === o && void 0 === a) continue;
                      o || (o = 0), a || (a = 0);
                      let l = 0 === o || 0 === a || nI(o) === nI(a);
                      l
                        ? ((t[s] = Math.max(t0(nO(o), nO(a), n), 0)),
                          (Y.test(a) || Y.test(o)) && (t[s] += "%"))
                        : (t[s] = a);
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = t0(e.rotate || 0, i.rotate || 0, n));
                  })(s, r, this.latestValues, n, p, d)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                (b(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = x.update(() => {
                (nk.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let n = e_(t) ? t : A(t);
                    return n.start(eV("", n, 1e3, i)), n.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: r,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                rx(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                i = this.target || na();
                let e = i3(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let n = i3(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + n);
              }
              nH(e, i),
                nP(e, r),
                i4(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new n0());
            let i = this.sharedNodes.get(t);
            i.add(e);
            let n = e.options.initialPromotionConfig;
            e.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity:
                n && n.shouldPreserveFollowOpacity
                  ? n.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0),
              !e)
            )
              return;
            let n = {};
            for (let e = 0; e < n5.length; e++) {
              let r = "rotate" + n5[e];
              i[r] && ((n[r] = i[r]), t.setStaticValue(r, 0));
            }
            for (let e in (t.render(), n)) t.setStaticValue(e, n[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return n9;
            let n = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents =
                  iS(null == t ? void 0 : t.pointerEvents) || ""),
                (n.transform = r ? r(this.latestValues, "") : "none"),
                n
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    iS(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !nd(this.latestValues) &&
                  ((e.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = n1(
                this.projectionDeltaWithTransform,
                this.treeScale,
                o
              )),
              r && (n.transform = r(o, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (n.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (n.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            e6)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = e6[t],
                r = "none" === n.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) n[i[e]] = r;
              } else n[t] = r;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  s === this
                    ? iS(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(rr),
              this.root.sharedNodes.clear();
          }
        };
      }
      function n7(t) {
        t.updateLayout();
      }
      function rt(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: r } = t.options,
            s = i.source !== t.layout.source;
          "size" === r
            ? nl((t) => {
                let n = s ? i.measuredBox[t] : i.layoutBox[t],
                  r = i3(n);
                (n.min = e[t].min), (n.max = n.min + r);
              })
            : rx(r, i.layoutBox, e) &&
              nl((n) => {
                let r = s ? i.measuredBox[n] : i.layoutBox[n],
                  o = i3(e[n]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o));
              });
          let o = ns();
          i4(o, e, i.layoutBox);
          let a = ns();
          s
            ? i4(a, t.applyTransform(n, !0), i.measuredBox)
            : i4(a, e, i.layoutBox);
          let l = !nZ(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: r, layout: s } = n;
              if (r && s) {
                let o = na();
                i7(o, i.layoutBox, r.layoutBox);
                let a = na();
                i7(a, e, s.layoutBox),
                  nQ(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function re(t) {
        n6.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = Boolean(
                t.isProjectionDirty ||
                  t.parent.isProjectionDirty ||
                  t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function ri(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function rn(t) {
        t.clearSnapshot();
      }
      function rr(t) {
        t.clearMeasurements();
      }
      function rs(t) {
        t.isLayoutDirty = !1;
      }
      function ro(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function ra(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function rl(t) {
        t.resolveTargetDelta();
      }
      function ru(t) {
        t.calcProjection();
      }
      function rh(t) {
        t.resetRotation();
      }
      function rc(t) {
        t.removeLeadSnapshot();
      }
      function rd(t, e, i) {
        (t.translate = t0(e.translate, 0, i)),
          (t.scale = t0(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function rp(t, e, i, n) {
        (t.min = t0(e.min, i.min, n)), (t.max = t0(e.max, i.max, n));
      }
      function rm(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let rf = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        rv = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent.toLowerCase().includes(t),
        rg = rv("applewebkit/") && !rv("chrome/") ? Math.round : l;
      function ry(t) {
        (t.min = rg(t.min)), (t.max = rg(t.max));
      }
      function rx(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !i5(nJ(e), nJ(i), 0.2))
        );
      }
      let rb = n8({
          attachResizeListener: (t, e) => iC(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        rw = { current: void 0 },
        rP = n8({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!rw.current) {
              let t = new rb({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (rw.current = t);
            }
            return rw.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            Boolean("fixed" === window.getComputedStyle(t).position),
        }),
        rS = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function rT(t, e, i = 1) {
        l(
          i <= 4,
          `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
        );
        let [n, r] = (function (t) {
          let e = rS.exec(t);
          if (!e) return [,];
          let [, i, n] = e;
          return [i, n];
        })(t);
        if (!n) return;
        let s = window.getComputedStyle(e).getPropertyValue(n);
        if (s) {
          let t = s.trim();
          return u(t) ? parseFloat(t) : t;
        }
        return k(r) ? rT(r, e, i + 1) : r;
      }
      let rE = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        rA = (t) => rE.has(t),
        rC = (t) => Object.keys(t).some(rA),
        rM = (t) => t === B || t === K,
        rk = (t, e) => parseFloat(t.split(", ")[e]),
        rV =
          (t, e) =>
          (i, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let r = n.match(/^matrix3d\((.+)\)$/);
            if (r) return rk(r[1], e);
            {
              let e = n.match(/^matrix\((.+)\)$/);
              return e ? rk(e[1], t) : 0;
            }
          },
        r_ = new Set(["x", "y", "z"]),
        rD = tC.filter((t) => !r_.has(t)),
        rL = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: rV(4, 13),
          y: rV(5, 14),
        };
      (rL.translateX = rL.x), (rL.translateY = rL.y);
      let rj = (t, e, i) => {
          let n = e.measureViewportBox(),
            r = e.current,
            s = getComputedStyle(r),
            { display: o } = s,
            a = {};
          "none" === o && e.setStaticValue("display", t.display || "block"),
            i.forEach((t) => {
              a[t] = rL[t](n, s);
            }),
            e.render();
          let l = e.measureViewportBox();
          return (
            i.forEach((i) => {
              let n = e.getValue(i);
              n && n.jump(a[i]), (t[i] = rL[i](l, s));
            }),
            t
          );
        },
        rR = (t, e, i = {}, n = {}) => {
          (e = { ...e }), (n = { ...n });
          let r = Object.keys(e).filter(rA),
            s = [],
            o = !1,
            a = [];
          if (
            (r.forEach((r) => {
              let u;
              let h = t.getValue(r);
              if (!t.hasValue(r)) return;
              let d = i[r],
                p = tb(d),
                m = e[r];
              if (c(m)) {
                let t = m.length,
                  e = null === m[0] ? 1 : 0;
                p = tb((d = m[e]));
                for (let i = e; i < t && null !== m[i]; i++)
                  u
                    ? l(
                        tb(m[i]) === u,
                        "All keyframes must be of the same type"
                      )
                    : l(
                        (u = tb(m[i])) === p || (rM(p) && rM(u)),
                        "Keyframes must be of the same dimension as the current value"
                      );
              } else u = tb(m);
              if (p !== u) {
                if (rM(p) && rM(u)) {
                  let t = h.get();
                  "string" == typeof t && h.set(parseFloat(t)),
                    "string" == typeof m
                      ? (e[r] = parseFloat(m))
                      : Array.isArray(m) &&
                        u === K &&
                        (e[r] = m.map(parseFloat));
                } else
                  (null == p ? void 0 : p.transform) &&
                  (null == u ? void 0 : u.transform) &&
                  (0 === d || 0 === m)
                    ? 0 === d
                      ? h.set(u.transform(d))
                      : (e[r] = p.transform(m))
                    : (o ||
                        ((s = (function (t) {
                          let e = [];
                          return (
                            rD.forEach((i) => {
                              let n = t.getValue(i);
                              void 0 !== n &&
                                (e.push([i, n.get()]),
                                n.set(i.startsWith("scale") ? 1 : 0));
                            }),
                            e.length && t.render(),
                            e
                          );
                        })(t)),
                        (o = !0)),
                      a.push(r),
                      (n[r] = void 0 !== n[r] ? n[r] : e[r]),
                      h.jump(m));
              }
            }),
            !a.length)
          )
            return { target: e, transitionEnd: n };
          {
            let i = a.indexOf("height") >= 0 ? window.pageYOffset : null,
              r = rj(e, t, a);
            return (
              s.length &&
                s.forEach(([e, i]) => {
                  t.getValue(e).set(i);
                }),
              t.render(),
              eF && null !== i && window.scrollTo({ top: i }),
              { target: r, transitionEnd: n }
            );
          }
        },
        rB = (t, e, i, n) => {
          var r, s;
          let o = (function (t, { ...e }, i) {
            let n = t.current;
            if (!(n instanceof Element)) return { target: e, transitionEnd: i };
            for (let r in (i && (i = { ...i }),
            t.values.forEach((t) => {
              let e = t.get();
              if (!k(e)) return;
              let i = rT(e, n);
              i && t.set(i);
            }),
            e)) {
              let t = e[r];
              if (!k(t)) continue;
              let s = rT(t, n);
              s && ((e[r] = s), i || (i = {}), void 0 === i[r] && (i[r] = t));
            }
            return { target: e, transitionEnd: i };
          })(t, e, n);
          return (
            (e = o.target),
            (n = o.transitionEnd),
            (r = e),
            (s = n),
            rC(r) ? rR(t, r, i, s) : { target: r, transitionEnd: s }
          );
        },
        rO = { current: null },
        rI = { current: !1 },
        rF = new WeakMap(),
        rN = Object.keys(e1),
        rU = rN.length,
        rX = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        rW = eG.length;
      class rH {
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            visualState: r,
          },
          s = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => x.render(this.render, !1, !0));
          let { latestValues: o, renderState: a } = r;
          (this.latestValues = o),
            (this.baseTarget = { ...o }),
            (this.initialValues = e.initial ? { ...o } : {}),
            (this.renderState = a),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = s),
            (this.isControllingVariants = eZ(e)),
            (this.isVariantNode = eQ(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = Boolean(t && t.current));
          let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(e, {});
          for (let t in u) {
            let e = u[t];
            void 0 !== o[t] && e_(e) && (e.set(o[t], !1), eD(l) && l.add(t));
          }
        }
        scrapeMotionValuesFromProps(t, e) {
          return {};
        }
        mount(t) {
          (this.current = t),
            rF.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            rI.current ||
              (function () {
                if (((rI.current = !0), eF)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (rO.current = t.matches);
                    t.addListener(e), e();
                  } else rO.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || rO.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (rF.delete(this.current),
          this.projection && this.projection.unmount(),
          b(this.notifyUpdate),
          b(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) this.features[t].unmount();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i = tM.has(t),
            n = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && x.update(this.notifyUpdate, !1, !0),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            r = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            n(), r();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures({ children: t, ...e }, i, n, r) {
          let s, o;
          for (let t = 0; t < rU; t++) {
            let i = rN[t],
              {
                isEnabled: n,
                Feature: r,
                ProjectionNode: a,
                MeasureLayout: l,
              } = e1[i];
            a && (s = a),
              n(e) &&
                (!this.features[i] && r && (this.features[i] = new r(this)),
                l && (o = l));
          }
          if (!this.projection && s) {
            this.projection = new s(
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: t,
              layout: i,
              drag: n,
              dragConstraints: o,
              layoutScroll: a,
              layoutRoot: l,
            } = e;
            this.projection.setOptions({
              layoutId: t,
              layout: i,
              alwaysMeasureLayout: Boolean(n) || (o && ez(o)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof i ? i : "both",
              initialPromotionConfig: r,
              layoutScroll: a,
              layoutRoot: l,
            });
          }
          return o;
        }
        updateFeatures() {
          for (let t in this.features) {
            let e = this.features[t];
            e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : na();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        makeTargetAnimatable(t, e = !0) {
          return this.makeTargetAnimatableFromInstance(t, this.props, e);
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < rX.length; e++) {
            let i = rX[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          (this.prevMotionValues = (function (t, e, i) {
            let { willChange: n } = e;
            for (let r in e) {
              let s = e[r],
                o = i[r];
              if (e_(s)) t.addValue(r, s), eD(n) && n.add(r);
              else if (e_(o))
                t.addValue(r, A(s, { owner: t })), eD(n) && n.remove(r);
              else if (o !== s) {
                if (t.hasValue(r)) {
                  let e = t.getValue(r);
                  e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(r);
                  t.addValue(r, A(void 0 !== e ? e : s, { owner: t }));
                }
              }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < rW; t++) {
            let i = eG[t],
              n = this.props[i];
            (eY(n) || !1 === n) && (e[i] = n);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          e !== this.values.get(t) &&
            (this.removeValue(t), this.bindToMotionValue(t, e)),
            this.values.set(t, e),
            (this.latestValues[t] = e.get());
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = A(e, { owner: this })), this.addValue(t, i)),
            i
          );
        }
        readValue(t) {
          var e;
          return void 0 === this.latestValues[t] && this.current
            ? null !== (e = this.getBaseTargetFromProps(this.props, t)) &&
              void 0 !== e
              ? e
              : this.readValueFromInstance(this.current, t, this.options)
            : this.latestValues[t];
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let { initial: i } = this.props,
            n =
              "string" == typeof i || "object" == typeof i
                ? null === (e = tS(this.props, i)) || void 0 === e
                  ? void 0
                  : e[t]
                : void 0;
          if (i && void 0 !== n) return n;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || e_(r)
            ? void 0 !== this.initialValues[t] && void 0 === n
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new v()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class r$ extends rH {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
        makeTargetAnimatableFromInstance(
          { transition: t, transitionEnd: e, ...i },
          { transformValues: n },
          r
        ) {
          let s = (function (t, e, i) {
            let n = {};
            for (let r in t) {
              let t = (function (t, e) {
                if (!e) return;
                let i = e[t] || e.default || e;
                return i.from;
              })(r, e);
              if (void 0 !== t) n[r] = t;
              else {
                let t = i.getValue(r);
                t && (n[r] = t.get());
              }
            }
            return n;
          })(i, t || {}, this);
          if ((n && (e && (e = n(e)), i && (i = n(i)), s && (s = n(s))), r)) {
            !(function (t, e, i) {
              var n, r;
              let s = Object.keys(e).filter((e) => !t.hasValue(e)),
                o = s.length;
              if (o)
                for (let a = 0; a < o; a++) {
                  let o = s[a],
                    l = e[o],
                    c = null;
                  Array.isArray(l) && (c = l[0]),
                    null === c &&
                      (c =
                        null !==
                          (r =
                            null !== (n = i[o]) && void 0 !== n
                              ? n
                              : t.readValue(o)) && void 0 !== r
                          ? r
                          : e[o]),
                    null != c &&
                      ("string" == typeof c && (u(c) || h(c))
                        ? (c = parseFloat(c))
                        : !tP(c) && tl.test(l) && (c = tg(o, l)),
                      t.addValue(o, A(c, { owner: t })),
                      void 0 === i[o] && (i[o] = c),
                      null !== c && t.setBaseTarget(o, c));
                }
            })(this, i, s);
            let t = rB(this, i, s, e);
            (e = t.transitionEnd), (i = t.target);
          }
          return { transition: t, transitionEnd: e, ...i };
        }
      }
      class rz extends r$ {
        readValueFromInstance(t, e) {
          if (tM.has(e)) {
            let t = tv(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              n = (M(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return nS(t, e);
        }
        build(t, e, i, n) {
          ii(t, e, i, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e) {
          return iw(t, e);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          e_(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
        renderInstance(t, e, i, n) {
          iy(t, e, i, n);
        }
      }
      class rY extends r$ {
        constructor() {
          super(...arguments), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (tM.has(e)) {
            let t = tv(e);
            return (t && t.default) || 0;
          }
          return (e = ix.has(e) ? e : tk(e)), t.getAttribute(e);
        }
        measureInstanceViewportBox() {
          return na();
        }
        scrapeMotionValuesFromProps(t, e) {
          return iP(t, e);
        }
        build(t, e, i, n) {
          ip(t, e, i, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          ib(t, e, i, n);
        }
        mount(t) {
          (this.isSVGTag = iv(t.tagName)), super.mount(t);
        }
      }
      let rK = (t, e) =>
          e4(t)
            ? new rY(e, { enableHardwareAcceleration: !1 })
            : new rz(e, { enableHardwareAcceleration: !0 }),
        rq = {
          animation: {
            Feature: class extends iO {
              constructor(t) {
                super(t),
                  t.animationState ||
                    (t.animationState = (function (t) {
                      let e = (e) =>
                          Promise.all(
                            e.map(({ animation: e, options: i }) => eB(t, e, i))
                          ),
                        i = {
                          animate: iq(!0),
                          whileInView: iq(),
                          whileHover: iq(),
                          whileTap: iq(),
                          whileDrag: iq(),
                          whileFocus: iq(),
                          exit: iq(),
                        },
                        n = !0,
                        r = (e, i) => {
                          let n = tT(t, i);
                          if (n) {
                            let { transition: t, transitionEnd: i, ...r } = n;
                            e = { ...e, ...r, ...i };
                          }
                          return e;
                        };
                      function s(s, o) {
                        let a = t.getProps(),
                          l = t.getVariantContext(!0) || {},
                          u = [],
                          h = new Set(),
                          d = {},
                          p = 1 / 0;
                        for (let e = 0; e < iK; e++) {
                          var m;
                          let f = iY[e],
                            v = i[f],
                            g = void 0 !== a[f] ? a[f] : l[f],
                            y = eY(g),
                            x = f === o ? v.isActive : null;
                          !1 === x && (p = e);
                          let b = g === l[f] && g !== a[f] && y;
                          if (
                            (b && n && t.manuallyAnimateOnMount && (b = !1),
                            (v.protectedKeys = { ...d }),
                            (!v.isActive && null === x) ||
                              (!g && !v.prevProp) ||
                              eK(g) ||
                              "boolean" == typeof g)
                          )
                            continue;
                          let w =
                              ((m = v.prevProp),
                              "string" == typeof g
                                ? g !== m
                                : !!Array.isArray(g) && !iz(g, m)),
                            P =
                              w ||
                              (f === o && v.isActive && !b && y) ||
                              (e > p && y),
                            S = !1,
                            T = Array.isArray(g) ? g : [g],
                            E = T.reduce(r, {});
                          !1 === x && (E = {});
                          let { prevResolvedValues: A = {} } = v,
                            C = { ...A, ...E },
                            M = (t) => {
                              (P = !0),
                                h.has(t) && ((S = !0), h.delete(t)),
                                (v.needsAnimating[t] = !0);
                            };
                          for (let t in C) {
                            let e = E[t],
                              i = A[t];
                            if (!d.hasOwnProperty(t))
                              (c(e) && c(i) ? iz(e, i) : e === i)
                                ? void 0 !== e && h.has(t)
                                  ? M(t)
                                  : (v.protectedKeys[t] = !0)
                                : void 0 !== e
                                ? M(t)
                                : h.add(t);
                          }
                          (v.prevProp = g),
                            (v.prevResolvedValues = E),
                            v.isActive && (d = { ...d, ...E }),
                            n && t.blockInitialAnimation && (P = !1),
                            P &&
                              (!b || S) &&
                              u.push(
                                ...T.map((t) => ({
                                  animation: t,
                                  options: { type: f, ...s },
                                }))
                              );
                        }
                        if (h.size) {
                          let e = {};
                          h.forEach((i) => {
                            let n = t.getBaseTarget(i);
                            void 0 !== n && (e[i] = n);
                          }),
                            u.push({ animation: e });
                        }
                        let f = Boolean(u.length);
                        return (
                          n &&
                            (!1 === a.initial || a.initial === a.animate) &&
                            !t.manuallyAnimateOnMount &&
                            (f = !1),
                          (n = !1),
                          f ? e(u) : Promise.resolve()
                        );
                      }
                      return {
                        animateChanges: s,
                        setActive: function (e, n, r) {
                          var o;
                          if (i[e].isActive === n) return Promise.resolve();
                          null === (o = t.variantChildren) ||
                            void 0 === o ||
                            o.forEach((t) => {
                              var i;
                              return null === (i = t.animationState) ||
                                void 0 === i
                                ? void 0
                                : i.setActive(e, n);
                            }),
                            (i[e].isActive = n);
                          let a = s(r, e);
                          for (let t in i) i[t].protectedKeys = {};
                          return a;
                        },
                        setAnimateFunction: function (i) {
                          e = i(t);
                        },
                        getState: () => i,
                      };
                    })(t));
              }
              updateAnimationControlsSubscription() {
                let { animate: t } = this.node.getProps();
                this.unmount(),
                  eK(t) && (this.unmount = t.subscribe(this.node));
              }
              mount() {
                this.updateAnimationControlsSubscription();
              }
              update() {
                let { animate: t } = this.node.getProps(),
                  { animate: e } = this.node.prevProps || {};
                t !== e && this.updateAnimationControlsSubscription();
              }
              unmount() {}
            },
          },
          exit: {
            Feature: class extends iO {
              constructor() {
                super(...arguments), (this.id = iG++);
              }
              update() {
                if (!this.node.presenceContext) return;
                let {
                    isPresent: t,
                    onExitComplete: e,
                    custom: i,
                  } = this.node.presenceContext,
                  { isPresent: n } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === n) return;
                let r = this.node.animationState.setActive("exit", !t, {
                  custom: null != i ? i : this.node.getProps().custom,
                });
                e && !t && r.then(() => e(this.id));
              }
              mount() {
                let { register: t } = this.node.presenceContext || {};
                t && (this.unmount = t(this.id));
              }
              unmount() {}
            },
          },
          inView: {
            Feature: class extends iO {
              constructor() {
                super(...arguments),
                  (this.hasEnteredView = !1),
                  (this.isInView = !1);
              }
              startObserver() {
                this.unmount();
                let { viewport: t = {} } = this.node.getProps(),
                  { root: e, margin: i, amount: n = "some", once: r } = t,
                  s = {
                    root: e ? e.current : void 0,
                    rootMargin: i,
                    threshold: "number" == typeof n ? n : i$[n],
                  },
                  o = (t) => {
                    let { isIntersecting: e } = t;
                    if (
                      this.isInView === e ||
                      ((this.isInView = e), r && !e && this.hasEnteredView)
                    )
                      return;
                    e && (this.hasEnteredView = !0),
                      this.node.animationState &&
                        this.node.animationState.setActive("whileInView", e);
                    let { onViewportEnter: i, onViewportLeave: n } =
                        this.node.getProps(),
                      s = e ? i : n;
                    s && s(t);
                  };
                return (function (t, e, i) {
                  let n = (function ({ root: t, ...e }) {
                    let i = t || document;
                    iX.has(i) || iX.set(i, {});
                    let n = iX.get(i),
                      r = JSON.stringify(e);
                    return (
                      n[r] ||
                        (n[r] = new IntersectionObserver(iH, {
                          root: t,
                          ...e,
                        })),
                      n[r]
                    );
                  })(e);
                  return (
                    iU.set(t, i),
                    n.observe(t),
                    () => {
                      iU.delete(t), n.unobserve(t);
                    }
                  );
                })(this.node.current, s, o);
              }
              mount() {
                this.startObserver();
              }
              update() {
                if ("undefined" == typeof IntersectionObserver) return;
                let { props: t, prevProps: e } = this.node,
                  i = ["amount", "margin", "root"].some(
                    (function (
                      { viewport: t = {} },
                      { viewport: e = {} } = {}
                    ) {
                      return (i) => t[i] !== e[i];
                    })(t, e)
                  );
                i && this.startObserver();
              }
              unmount() {}
            },
          },
          tap: {
            Feature: class extends iO {
              constructor() {
                super(...arguments),
                  (this.removeStartListeners = l),
                  (this.removeEndListeners = l),
                  (this.removeAccessibleListeners = l),
                  (this.startPointerPress = (t, e) => {
                    if ((this.removeEndListeners(), this.isPressing)) return;
                    let i = this.node.getProps(),
                      n = (t, e) => {
                        if (!this.checkPressEnd()) return;
                        let { onTap: i, onTapCancel: n } = this.node.getProps();
                        x.update(() => {
                          iF(this.node.current, t.target)
                            ? i && i(t, e)
                            : n && n(t, e);
                        });
                      },
                      r = i_(window, "pointerup", n, {
                        passive: !(i.onTap || i.onPointerUp),
                      }),
                      s = i_(
                        window,
                        "pointercancel",
                        (t, e) => this.cancelPress(t, e),
                        { passive: !(i.onTapCancel || i.onPointerCancel) }
                      );
                    (this.removeEndListeners = t8(r, s)), this.startPress(t, e);
                  }),
                  (this.startAccessiblePress = () => {
                    let t = (t) => {
                        if ("Enter" !== t.key || this.isPressing) return;
                        let e = (t) => {
                          "Enter" === t.key &&
                            this.checkPressEnd() &&
                            iN("up", (t, e) => {
                              let { onTap: i } = this.node.getProps();
                              i && x.update(() => i(t, e));
                            });
                        };
                        this.removeEndListeners(),
                          (this.removeEndListeners = iC(
                            this.node.current,
                            "keyup",
                            e
                          )),
                          iN("down", (t, e) => {
                            this.startPress(t, e);
                          });
                      },
                      e = iC(this.node.current, "keydown", t),
                      i = () => {
                        this.isPressing &&
                          iN("cancel", (t, e) => this.cancelPress(t, e));
                      },
                      n = iC(this.node.current, "blur", i);
                    this.removeAccessibleListeners = t8(e, n);
                  });
              }
              startPress(t, e) {
                this.isPressing = !0;
                let { onTapStart: i, whileTap: n } = this.node.getProps();
                n &&
                  this.node.animationState &&
                  this.node.animationState.setActive("whileTap", !0),
                  i && x.update(() => i(t, e));
              }
              checkPressEnd() {
                this.removeEndListeners(), (this.isPressing = !1);
                let t = this.node.getProps();
                return (
                  t.whileTap &&
                    this.node.animationState &&
                    this.node.animationState.setActive("whileTap", !1),
                  !iB()
                );
              }
              cancelPress(t, e) {
                if (!this.checkPressEnd()) return;
                let { onTapCancel: i } = this.node.getProps();
                i && x.update(() => i(t, e));
              }
              mount() {
                let t = this.node.getProps(),
                  e = i_(
                    this.node.current,
                    "pointerdown",
                    this.startPointerPress,
                    { passive: !(t.onTapStart || t.onPointerStart) }
                  ),
                  i = iC(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = t8(e, i);
              }
              unmount() {
                this.removeStartListeners(),
                  this.removeEndListeners(),
                  this.removeAccessibleListeners();
              }
            },
          },
          focus: {
            Feature: class extends iO {
              constructor() {
                super(...arguments), (this.isActive = !1);
              }
              onFocus() {
                let t = !1;
                try {
                  t = this.node.current.matches(":focus-visible");
                } catch (e) {
                  t = !0;
                }
                t &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !0),
                  (this.isActive = !0));
              }
              onBlur() {
                this.isActive &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !1),
                  (this.isActive = !1));
              }
              mount() {
                this.unmount = t8(
                  iC(this.node.current, "focus", () => this.onFocus()),
                  iC(this.node.current, "blur", () => this.onBlur())
                );
              }
              unmount() {}
            },
          },
          hover: {
            Feature: class extends iO {
              mount() {
                this.unmount = t8(iI(this.node, !0), iI(this.node, !1));
              }
              unmount() {}
            },
          },
          pan: {
            Feature: class extends iO {
              constructor() {
                super(...arguments), (this.removePointerDownListener = l);
              }
              onPointerDown(t) {
                this.session = new iQ(t, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                  contextWindow: nT(this.node),
                });
              }
              createPanHandlers() {
                let {
                  onPanSessionStart: t,
                  onPanStart: e,
                  onPan: i,
                  onPanEnd: n,
                } = this.node.getProps();
                return {
                  onSessionStart: nM(t),
                  onStart: nM(e),
                  onMove: i,
                  onEnd: (t, e) => {
                    delete this.session, n && x.update(() => n(t, e));
                  },
                };
              }
              mount() {
                this.removePointerDownListener = i_(
                  this.node.current,
                  "pointerdown",
                  (t) => this.onPointerDown(t)
                );
              }
              update() {
                this.session &&
                  this.session.updateHandlers(this.createPanHandlers());
              }
              unmount() {
                this.removePointerDownListener(),
                  this.session && this.session.end();
              }
            },
          },
          drag: {
            Feature: class extends iO {
              constructor(t) {
                super(t),
                  (this.removeGroupControls = l),
                  (this.removeListeners = l),
                  (this.controls = new nA(t));
              }
              mount() {
                let { dragControls: t } = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)),
                  (this.removeListeners = this.controls.addListeners() || l);
              }
              unmount() {
                this.removeGroupControls(), this.removeListeners();
              }
            },
            ProjectionNode: rP,
            MeasureLayout: nL,
          },
          layout: { ProjectionNode: rP, MeasureLayout: nL },
        },
        rG = (function (t) {
          function e(e, i = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              useRender: i,
              useVisualState: n,
              Component: r,
            }) {
              t &&
                (function (t) {
                  for (let e in t) e1[e] = { ...e1[e], ...t[e] };
                })(t);
              let s = (0, a.forwardRef)(function (s, o) {
                var l, u;
                let h;
                let c = {
                    ...(0, a.useContext)(eX),
                    ...s,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, a.useContext)(e2).id;
                      return e && void 0 !== t ? e + "-" + t : t;
                    })(s),
                  },
                  { isStatic: d } = c,
                  p = (function (t) {
                    let { initial: e, animate: i } = (function (t, e) {
                      if (eZ(t)) {
                        let { initial: e, animate: i } = t;
                        return {
                          initial: !1 === e || eY(e) ? e : void 0,
                          animate: eY(i) ? i : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, a.useContext)(eW));
                    return (0, a.useMemo)(
                      () => ({ initial: e, animate: i }),
                      [eJ(e), eJ(i)]
                    );
                  })(s),
                  m = n(s, d);
                if (!d && eF) {
                  p.visualElement = (function (t, e, i, n) {
                    let { visualElement: r } = (0, a.useContext)(eW),
                      s = (0, a.useContext)(e$),
                      o = (0, a.useContext)(eH),
                      l = (0, a.useContext)(eX).reducedMotion,
                      u = (0, a.useRef)();
                    (n = n || s.renderer),
                      !u.current &&
                        n &&
                        (u.current = n(t, {
                          visualState: e,
                          parent: r,
                          props: i,
                          presenceContext: o,
                          blockInitialAnimation: !!o && !1 === o.initial,
                          reducedMotionConfig: l,
                        }));
                    let h = u.current;
                    (0, a.useInsertionEffect)(() => {
                      h && h.update(i, o);
                    });
                    let c = (0, a.useRef)(
                      Boolean(i[tV] && !window.HandoffComplete)
                    );
                    return (
                      eN(() => {
                        h &&
                          (h.render(),
                          c.current &&
                            h.animationState &&
                            h.animationState.animateChanges());
                      }),
                      (0, a.useEffect)(() => {
                        h &&
                          (h.updateFeatures(),
                          !c.current &&
                            h.animationState &&
                            h.animationState.animateChanges(),
                          c.current &&
                            ((c.current = !1), (window.HandoffComplete = !0)));
                      }),
                      h
                    );
                  })(r, m, c, e);
                  let i = (0, a.useContext)(e3),
                    n = (0, a.useContext)(e$).strict;
                  p.visualElement &&
                    (h = p.visualElement.loadFeatures(c, n, t, i));
                }
                return a.createElement(
                  eW.Provider,
                  { value: p },
                  h && p.visualElement
                    ? a.createElement(h, {
                        visualElement: p.visualElement,
                        ...c,
                      })
                    : null,
                  i(
                    r,
                    s,
                    ((l = p.visualElement),
                    (u = o),
                    (0, a.useCallback)(
                      (t) => {
                        t && m.mount && m.mount(t),
                          l && (t ? l.mount(t) : l.unmount()),
                          u &&
                            ("function" == typeof u
                              ? u(t)
                              : ez(u) && (u.current = t));
                      },
                      [l]
                    )),
                    m,
                    d,
                    p.visualElement
                  )
                );
              });
              return (s[e5] = r), s;
            })(t(e, i));
          }
          if ("undefined" == typeof Proxy) return e;
          let i = new Map();
          return new Proxy(e, {
            get: (t, n) => (i.has(n) || i.set(n, e(n)), i.get(n)),
          });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, i, n) {
            let r = e4(t) ? iE : iA;
            return {
              ...r,
              preloadedFeatures: i,
              useRender: (function (t = !1) {
                let e = (e, i, n, { latestValues: r }, s) => {
                  let o = e4(e) ? ig : io,
                    l = o(i, r, s, e),
                    u = (function (t, e, i) {
                      let n = {};
                      for (let r in t)
                        ("values" !== r || "object" != typeof t.values) &&
                          (iu(r) ||
                            (!0 === i && il(r)) ||
                            (!e && !il(r)) ||
                            (t.draggable && r.startsWith("onDrag"))) &&
                          (n[r] = t[r]);
                      return n;
                    })(i, "string" == typeof e, t),
                    h = { ...u, ...l, ref: n },
                    { children: c } = i,
                    d = (0, a.useMemo)(() => (e_(c) ? c.get() : c), [c]);
                  return (0, a.createElement)(e, { ...h, children: d });
                };
                return e;
              })(e),
              createVisualElement: n,
              Component: t,
            };
          })(t, e, rq, rK)
        ),
        rZ = {
          toVector: (t, e) => (
            void 0 === t && (t = e), Array.isArray(t) ? t : [t, t]
          ),
          add: (t, e) => [t[0] + e[0], t[1] + e[1]],
          sub: (t, e) => [t[0] - e[0], t[1] - e[1]],
          addTo(t, e) {
            (t[0] += e[0]), (t[1] += e[1]);
          },
          subTo(t, e) {
            (t[0] -= e[0]), (t[1] -= e[1]);
          },
        };
      function rQ(t, e, i) {
        return 0 === e || Math.abs(e) === 1 / 0
          ? Math.pow(t, 5 * i)
          : (t * e * i) / (e + i * t);
      }
      function rJ(t, e, i, n = 0.15) {
        return 0 === n
          ? Math.max(e, Math.min(t, i))
          : t < e
          ? -rQ(e - t, i - e, n) + e
          : t > i
          ? +rQ(t - i, i - e, n) + i
          : t;
      }
      function r0(t, e, i) {
        var n;
        return (
          (e =
            "symbol" ==
            typeof (n = (function (t, e) {
              if ("object" != typeof t || null === t) return t;
              var i = t[Symbol.toPrimitive];
              if (void 0 !== i) {
                var n = i.call(t, e || "default");
                if ("object" != typeof n) return n;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === e ? String : Number)(t);
            })(e, "string"))
              ? n
              : String(n)) in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = i),
          t
        );
      }
      function r1(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function r2(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? r1(Object(i), !0).forEach(function (e) {
                r0(t, e, i[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : r1(Object(i)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(i, e)
                );
              });
        }
        return t;
      }
      let r3 = {
        pointer: { start: "down", change: "move", end: "up" },
        mouse: { start: "down", change: "move", end: "up" },
        touch: { start: "start", change: "move", end: "end" },
        gesture: { start: "start", change: "change", end: "end" },
      };
      function r5(t) {
        return t ? t[0].toUpperCase() + t.slice(1) : "";
      }
      let r9 = ["enter", "leave"],
        r4 = ["gotpointercapture", "lostpointercapture"];
      function r6(t) {
        return "touches" in t;
      }
      function r8(t) {
        return r6(t) ? "touch" : "pointerType" in t ? t.pointerType : "mouse";
      }
      function r7(t) {
        return r6(t)
          ? ("touchend" === t.type || "touchcancel" === t.type
              ? t.changedTouches
              : t.targetTouches)[0]
          : t;
      }
      function st(t, e) {
        try {
          let i = e.clientX - t.clientX,
            n = e.clientY - t.clientY,
            r = (e.clientX + t.clientX) / 2,
            s = (e.clientY + t.clientY) / 2;
          return {
            angle: -(180 * Math.atan2(i, n)) / Math.PI,
            distance: Math.hypot(i, n),
            origin: [r, s],
          };
        } catch (t) {}
        return null;
      }
      function se(t, e) {
        let [i, n] = Array.from(t.touches).filter((t) =>
          e.includes(t.identifier)
        );
        return st(i, n);
      }
      function si(t) {
        let e = r7(t);
        return r6(t) ? e.identifier : e.pointerId;
      }
      function sn(t) {
        let e = r7(t);
        return [e.clientX, e.clientY];
      }
      function sr(t) {
        let { deltaX: e, deltaY: i, deltaMode: n } = t;
        return (
          1 === n
            ? ((e *= 40), (i *= 40))
            : 2 === n && ((e *= 800), (i *= 800)),
          [e, i]
        );
      }
      function ss(t, ...e) {
        return "function" == typeof t ? t(...e) : t;
      }
      function so() {}
      function sa(t, e) {
        return Object.assign({}, e, t || {});
      }
      class sl {
        constructor(t, e, i) {
          (this.ctrl = t),
            (this.args = e),
            (this.key = i),
            this.state ||
              ((this.state = {}),
              this.computeValues([0, 0]),
              this.computeInitial(),
              this.init && this.init(),
              this.reset());
        }
        get state() {
          return this.ctrl.state[this.key];
        }
        set state(t) {
          this.ctrl.state[this.key] = t;
        }
        get shared() {
          return this.ctrl.state.shared;
        }
        get eventStore() {
          return this.ctrl.gestureEventStores[this.key];
        }
        get timeoutStore() {
          return this.ctrl.gestureTimeoutStores[this.key];
        }
        get config() {
          return this.ctrl.config[this.key];
        }
        get sharedConfig() {
          return this.ctrl.config.shared;
        }
        get handler() {
          return this.ctrl.handlers[this.key];
        }
        reset() {
          let { state: t, shared: e, ingKey: i, args: n } = this;
          (e[i] = t._active = t.active = t._blocked = t._force = !1),
            (t._step = [!1, !1]),
            (t.intentional = !1),
            (t._movement = [0, 0]),
            (t._distance = [0, 0]),
            (t._direction = [0, 0]),
            (t._delta = [0, 0]),
            (t._bounds = [
              [-1 / 0, 1 / 0],
              [-1 / 0, 1 / 0],
            ]),
            (t.args = n),
            (t.axis = void 0),
            (t.memo = void 0),
            (t.elapsedTime = t.timeDelta = 0),
            (t.direction = [0, 0]),
            (t.distance = [0, 0]),
            (t.overflow = [0, 0]),
            (t._movementBound = [!1, !1]),
            (t.velocity = [0, 0]),
            (t.movement = [0, 0]),
            (t.delta = [0, 0]),
            (t.timeStamp = 0);
        }
        start(t) {
          let e = this.state,
            i = this.config;
          e._active ||
            (this.reset(),
            this.computeInitial(),
            (e._active = !0),
            (e.target = t.target),
            (e.currentTarget = t.currentTarget),
            (e.lastOffset = i.from ? ss(i.from, e) : e.offset),
            (e.offset = e.lastOffset),
            (e.startTime = e.timeStamp = t.timeStamp));
        }
        computeValues(t) {
          let e = this.state;
          (e._values = t), (e.values = this.config.transform(t));
        }
        computeInitial() {
          let t = this.state;
          (t._initial = t._values), (t.initial = t.values);
        }
        compute(t) {
          let { state: e, config: i, shared: n } = this;
          e.args = this.args;
          let r = 0;
          if (
            (t &&
              ((e.event = t),
              i.preventDefault && t.cancelable && e.event.preventDefault(),
              (e.type = t.type),
              (n.touches =
                this.ctrl.pointerIds.size || this.ctrl.touchIds.size),
              (n.locked = !!document.pointerLockElement),
              Object.assign(
                n,
                (function (t) {
                  let e = {};
                  if (
                    ("buttons" in t && (e.buttons = t.buttons), "shiftKey" in t)
                  ) {
                    let { shiftKey: i, altKey: n, metaKey: r, ctrlKey: s } = t;
                    Object.assign(e, {
                      shiftKey: i,
                      altKey: n,
                      metaKey: r,
                      ctrlKey: s,
                    });
                  }
                  return e;
                })(t)
              ),
              (n.down = n.pressed = n.buttons % 2 == 1 || n.touches > 0),
              (r = t.timeStamp - e.timeStamp),
              (e.timeStamp = t.timeStamp),
              (e.elapsedTime = e.timeStamp - e.startTime)),
            e._active)
          ) {
            let t = e._delta.map(Math.abs);
            rZ.addTo(e._distance, t);
          }
          this.axisIntent && this.axisIntent(t);
          let [s, o] = e._movement,
            [a, l] = i.threshold,
            { _step: u, values: h } = e;
          if (
            (i.hasCustomTransform
              ? (!1 === u[0] && (u[0] = Math.abs(s) >= a && h[0]),
                !1 === u[1] && (u[1] = Math.abs(o) >= l && h[1]))
              : (!1 === u[0] && (u[0] = Math.abs(s) >= a && Math.sign(s) * a),
                !1 === u[1] && (u[1] = Math.abs(o) >= l && Math.sign(o) * l)),
            (e.intentional = !1 !== u[0] || !1 !== u[1]),
            !e.intentional)
          )
            return;
          let c = [0, 0];
          if (i.hasCustomTransform) {
            let [t, e] = h;
            (c[0] = !1 !== u[0] ? t - u[0] : 0),
              (c[1] = !1 !== u[1] ? e - u[1] : 0);
          } else
            (c[0] = !1 !== u[0] ? s - u[0] : 0),
              (c[1] = !1 !== u[1] ? o - u[1] : 0);
          this.restrictToAxis && !e._blocked && this.restrictToAxis(c);
          let d = e.offset,
            p = (e._active && !e._blocked) || e.active;
          p &&
            ((e.first = e._active && !e.active),
            (e.last = !e._active && e.active),
            (e.active = n[this.ingKey] = e._active),
            t &&
              (e.first &&
                ("bounds" in i && (e._bounds = ss(i.bounds, e)),
                this.setup && this.setup()),
              (e.movement = c),
              this.computeOffset()));
          let [m, f] = e.offset,
            [[v, g], [y, x]] = e._bounds;
          (e.overflow = [
            m < v ? -1 : m > g ? 1 : 0,
            f < y ? -1 : f > x ? 1 : 0,
          ]),
            (e._movementBound[0] =
              !!e.overflow[0] &&
              (!1 === e._movementBound[0]
                ? e._movement[0]
                : e._movementBound[0])),
            (e._movementBound[1] =
              !!e.overflow[1] &&
              (!1 === e._movementBound[1]
                ? e._movement[1]
                : e._movementBound[1]));
          let b = (e._active && i.rubberband) || [0, 0];
          if (
            ((e.offset = (function (t, [e, i], [n, r]) {
              let [[s, o], [a, l]] = t;
              return [rJ(e, s, o, n), rJ(i, a, l, r)];
            })(e._bounds, e.offset, b)),
            (e.delta = rZ.sub(e.offset, d)),
            this.computeMovement(),
            p && (!e.last || r > 32))
          ) {
            e.delta = rZ.sub(e.offset, d);
            let t = e.delta.map(Math.abs);
            rZ.addTo(e.distance, t),
              (e.direction = e.delta.map(Math.sign)),
              (e._direction = e._delta.map(Math.sign)),
              !e.first &&
                r > 0 &&
                ((e.velocity = [t[0] / r, t[1] / r]), (e.timeDelta = r));
          }
        }
        emit() {
          let t = this.state,
            e = this.shared,
            i = this.config;
          if (
            (t._active || this.clean(),
            (t._blocked || !t.intentional) && !t._force && !i.triggerAllEvents)
          )
            return;
          let n = this.handler(
            r2(r2(r2({}, e), t), {}, { [this.aliasKey]: t.values })
          );
          void 0 !== n && (t.memo = n);
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean();
        }
      }
      class su extends sl {
        constructor(...t) {
          super(...t), r0(this, "aliasKey", "xy");
        }
        reset() {
          super.reset(), (this.state.axis = void 0);
        }
        init() {
          (this.state.offset = [0, 0]), (this.state.lastOffset = [0, 0]);
        }
        computeOffset() {
          this.state.offset = rZ.add(
            this.state.lastOffset,
            this.state.movement
          );
        }
        computeMovement() {
          this.state.movement = rZ.sub(
            this.state.offset,
            this.state.lastOffset
          );
        }
        axisIntent(t) {
          let e = this.state,
            i = this.config;
          if (!e.axis && t) {
            let n =
              "object" == typeof i.axisThreshold
                ? i.axisThreshold[r8(t)]
                : i.axisThreshold;
            e.axis = (function ([t, e], i) {
              let n = Math.abs(t),
                r = Math.abs(e);
              return n > r && n > i ? "x" : r > n && r > i ? "y" : void 0;
            })(e._movement, n);
          }
          e._blocked =
            ((i.lockDirection || !!i.axis) && !e.axis) ||
            (!!i.axis && i.axis !== e.axis);
        }
        restrictToAxis(t) {
          if (this.config.axis || this.config.lockDirection)
            switch (this.state.axis) {
              case "x":
                t[1] = 0;
                break;
              case "y":
                t[0] = 0;
            }
        }
      }
      let sh = (t) => t,
        sc = {
          enabled: (t = !0) => t,
          eventOptions: (t, e, i) => r2(r2({}, i.shared.eventOptions), t),
          preventDefault: (t = !1) => t,
          triggerAllEvents: (t = !1) => t,
          rubberband(t = 0) {
            switch (t) {
              case !0:
                return [0.15, 0.15];
              case !1:
                return [0, 0];
              default:
                return rZ.toVector(t);
            }
          },
          from: (t) =>
            "function" == typeof t ? t : null != t ? rZ.toVector(t) : void 0,
          transform(t, e, i) {
            let n = t || i.shared.transform;
            return (this.hasCustomTransform = !!n), n || sh;
          },
          threshold: (t) => rZ.toVector(t, 0),
        },
        sd = r2(
          r2({}, sc),
          {},
          {
            axis(t, e, { axis: i }) {
              if (((this.lockDirection = "lock" === i), !this.lockDirection))
                return i;
            },
            axisThreshold: (t = 0) => t,
            bounds(t = {}) {
              if ("function" == typeof t) return (e) => sd.bounds(t(e));
              if ("current" in t) return () => t.current;
              if ("function" == typeof HTMLElement && t instanceof HTMLElement)
                return t;
              let {
                left: e = -1 / 0,
                right: i = 1 / 0,
                top: n = -1 / 0,
                bottom: r = 1 / 0,
              } = t;
              return [
                [e, i],
                [n, r],
              ];
            },
          }
        ),
        sp = {
          ArrowRight: (t, e = 1) => [t * e, 0],
          ArrowLeft: (t, e = 1) => [-1 * t * e, 0],
          ArrowUp: (t, e = 1) => [0, -1 * t * e],
          ArrowDown: (t, e = 1) => [0, t * e],
        },
        sm =
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement;
      function sf() {
        return sm && "ontouchstart" in window;
      }
      let sv = {
          isBrowser: sm,
          gesture: (function () {
            try {
              return "constructor" in GestureEvent;
            } catch (t) {
              return !1;
            }
          })(),
          touch: sf(),
          touchscreen: sf() || (sm && window.navigator.maxTouchPoints > 1),
          pointer: sm && "onpointerdown" in window,
          pointerLock: sm && "exitPointerLock" in window.document,
        },
        sg = { mouse: 0, touch: 0, pen: 8 },
        sy = r2(
          r2({}, sd),
          {},
          {
            device(
              t,
              e,
              { pointer: { touch: i = !1, lock: n = !1, mouse: r = !1 } = {} }
            ) {
              return ((this.pointerLock = n && sv.pointerLock), sv.touch && i)
                ? "touch"
                : this.pointerLock
                ? "mouse"
                : sv.pointer && !r
                ? "pointer"
                : sv.touch
                ? "touch"
                : "mouse";
            },
            preventScrollAxis(t, e, { preventScroll: i }) {
              if (
                ((this.preventScrollDelay =
                  "number" == typeof i
                    ? i
                    : i || (void 0 === i && t)
                    ? 250
                    : void 0),
                sv.touchscreen && !1 !== i)
              )
                return t || (void 0 !== i ? "y" : void 0);
            },
            pointerCapture(
              t,
              e,
              {
                pointer: { capture: i = !0, buttons: n = 1, keys: r = !0 } = {},
              }
            ) {
              return (
                (this.pointerButtons = n),
                (this.keys = r),
                !this.pointerLock && "pointer" === this.device && i
              );
            },
            threshold(
              t,
              e,
              { filterTaps: i = !1, tapsThreshold: n = 3, axis: r }
            ) {
              let s = rZ.toVector(t, i ? n : r ? 1 : 0);
              return (this.filterTaps = i), (this.tapsThreshold = n), s;
            },
            swipe({
              velocity: t = 0.5,
              distance: e = 50,
              duration: i = 250,
            } = {}) {
              return {
                velocity: this.transform(rZ.toVector(t)),
                distance: this.transform(rZ.toVector(e)),
                duration: i,
              };
            },
            delay(t = 0) {
              switch (t) {
                case !0:
                  return 180;
                case !1:
                  return 0;
                default:
                  return t;
              }
            },
            axisThreshold: (t) => (t ? r2(r2({}, sg), t) : sg),
            keyboardDisplacement: (t = 10) => t,
          }
        );
      function sx(t) {
        let [e, i] = t.overflow,
          [n, r] = t._delta,
          [s, o] = t._direction;
        ((e < 0 && n > 0 && s < 0) || (e > 0 && n < 0 && s > 0)) &&
          (t._movement[0] = t._movementBound[0]),
          ((i < 0 && r > 0 && o < 0) || (i > 0 && r < 0 && o > 0)) &&
            (t._movement[1] = t._movementBound[1]);
      }
      let sb = r2(
          r2({}, sc),
          {},
          {
            device(t, e, { shared: i, pointer: { touch: n = !1 } = {} }) {
              if (i.target && !sv.touch && sv.gesture) return "gesture";
              if (sv.touch && n) return "touch";
              if (sv.touchscreen) {
                if (sv.pointer) return "pointer";
                if (sv.touch) return "touch";
              }
            },
            bounds(t, e, { scaleBounds: i = {}, angleBounds: n = {} }) {
              let r = (t) => {
                  let e = sa(ss(i, t), { min: -1 / 0, max: 1 / 0 });
                  return [e.min, e.max];
                },
                s = (t) => {
                  let e = sa(ss(n, t), { min: -1 / 0, max: 1 / 0 });
                  return [e.min, e.max];
                };
              return "function" != typeof i && "function" != typeof n
                ? [r(), s()]
                : (t) => [r(t), s(t)];
            },
            threshold(t, e, i) {
              this.lockDirection = "lock" === i.axis;
              let n = rZ.toVector(t, this.lockDirection ? [0.1, 3] : 0);
              return n;
            },
            modifierKey: (t) => (void 0 === t ? "ctrlKey" : t),
            pinchOnWheel: (t = !0) => t,
          }
        ),
        sw = r2(r2({}, sd), {}, { mouseOnly: (t = !0) => t }),
        sP = r2(r2({}, sd), {}, { mouseOnly: (t = !0) => t }),
        sS = new Map(),
        sT = new Map();
      function sE(t) {
        sS.set(t.key, t.engine), sT.set(t.key, t.resolver);
      }
      let sA = {
          key: "drag",
          engine: class extends su {
            constructor(...t) {
              super(...t), r0(this, "ingKey", "dragging");
            }
            reset() {
              super.reset();
              let t = this.state;
              (t._pointerId = void 0),
                (t._pointerActive = !1),
                (t._keyboardActive = !1),
                (t._preventScroll = !1),
                (t._delayed = !1),
                (t.swipe = [0, 0]),
                (t.tap = !1),
                (t.canceled = !1),
                (t.cancel = this.cancel.bind(this));
            }
            setup() {
              let t = this.state;
              if (t._bounds instanceof HTMLElement) {
                let e = t._bounds.getBoundingClientRect(),
                  i = t.currentTarget.getBoundingClientRect(),
                  n = {
                    left: e.left - i.left + t.offset[0],
                    right: e.right - i.right + t.offset[0],
                    top: e.top - i.top + t.offset[1],
                    bottom: e.bottom - i.bottom + t.offset[1],
                  };
                t._bounds = sd.bounds(n);
              }
            }
            cancel() {
              let t = this.state;
              t.canceled ||
                ((t.canceled = !0),
                (t._active = !1),
                setTimeout(() => {
                  this.compute(), this.emit();
                }, 0));
            }
            setActive() {
              this.state._active =
                this.state._pointerActive || this.state._keyboardActive;
            }
            clean() {
              this.pointerClean(),
                (this.state._pointerActive = !1),
                (this.state._keyboardActive = !1),
                super.clean();
            }
            pointerDown(t) {
              let e = this.config,
                i = this.state;
              if (
                null != t.buttons &&
                (Array.isArray(e.pointerButtons)
                  ? !e.pointerButtons.includes(t.buttons)
                  : -1 !== e.pointerButtons && e.pointerButtons !== t.buttons)
              )
                return;
              let n = this.ctrl.setEventIds(t);
              e.pointerCapture && t.target.setPointerCapture(t.pointerId),
                (n && n.size > 1 && i._pointerActive) ||
                  (this.start(t),
                  this.setupPointer(t),
                  (i._pointerId = si(t)),
                  (i._pointerActive = !0),
                  this.computeValues(sn(t)),
                  this.computeInitial(),
                  e.preventScrollAxis && "mouse" !== r8(t)
                    ? ((i._active = !1), this.setupScrollPrevention(t))
                    : e.delay > 0
                    ? (this.setupDelayTrigger(t),
                      e.triggerAllEvents && (this.compute(t), this.emit()))
                    : this.startPointerDrag(t));
            }
            startPointerDrag(t) {
              let e = this.state;
              (e._active = !0),
                (e._preventScroll = !0),
                (e._delayed = !1),
                this.compute(t),
                this.emit();
            }
            pointerMove(t) {
              let e = this.state,
                i = this.config;
              if (!e._pointerActive) return;
              let n = si(t);
              if (void 0 !== e._pointerId && n !== e._pointerId) return;
              let r = sn(t);
              if (
                (document.pointerLockElement === t.target
                  ? (e._delta = [t.movementX, t.movementY])
                  : ((e._delta = rZ.sub(r, e._values)), this.computeValues(r)),
                rZ.addTo(e._movement, e._delta),
                this.compute(t),
                e._delayed && e.intentional)
              ) {
                this.timeoutStore.remove("dragDelay"),
                  (e.active = !1),
                  this.startPointerDrag(t);
                return;
              }
              if (i.preventScrollAxis && !e._preventScroll) {
                if (!e.axis) return;
                if (
                  e.axis === i.preventScrollAxis ||
                  "xy" === i.preventScrollAxis
                ) {
                  (e._active = !1), this.clean();
                  return;
                }
                this.timeoutStore.remove("startPointerDrag"),
                  this.startPointerDrag(t);
                return;
              }
              this.emit();
            }
            pointerUp(t) {
              this.ctrl.setEventIds(t);
              try {
                this.config.pointerCapture &&
                  t.target.hasPointerCapture(t.pointerId) &&
                  t.target.releasePointerCapture(t.pointerId);
              } catch (t) {}
              let e = this.state,
                i = this.config;
              if (!e._active || !e._pointerActive) return;
              let n = si(t);
              if (void 0 !== e._pointerId && n !== e._pointerId) return;
              (this.state._pointerActive = !1),
                this.setActive(),
                this.compute(t);
              let [r, s] = e._distance;
              if (
                ((e.tap = r <= i.tapsThreshold && s <= i.tapsThreshold),
                e.tap && i.filterTaps)
              )
                e._force = !0;
              else {
                let [t, n] = e._delta,
                  [r, s] = e._movement,
                  [o, a] = i.swipe.velocity,
                  [l, u] = i.swipe.distance,
                  h = i.swipe.duration;
                if (e.elapsedTime < h) {
                  let i = Math.abs(t / e.timeDelta),
                    h = Math.abs(n / e.timeDelta);
                  i > o && Math.abs(r) > l && (e.swipe[0] = Math.sign(t)),
                    h > a && Math.abs(s) > u && (e.swipe[1] = Math.sign(n));
                }
              }
              this.emit();
            }
            pointerClick(t) {
              !this.state.tap &&
                t.detail > 0 &&
                (t.preventDefault(), t.stopPropagation());
            }
            setupPointer(t) {
              let e = this.config,
                i = e.device;
              e.pointerLock && t.currentTarget.requestPointerLock(),
                e.pointerCapture ||
                  (this.eventStore.add(
                    this.sharedConfig.window,
                    i,
                    "change",
                    this.pointerMove.bind(this)
                  ),
                  this.eventStore.add(
                    this.sharedConfig.window,
                    i,
                    "end",
                    this.pointerUp.bind(this)
                  ),
                  this.eventStore.add(
                    this.sharedConfig.window,
                    i,
                    "cancel",
                    this.pointerUp.bind(this)
                  ));
            }
            pointerClean() {
              this.config.pointerLock &&
                document.pointerLockElement === this.state.currentTarget &&
                document.exitPointerLock();
            }
            preventScroll(t) {
              this.state._preventScroll && t.cancelable && t.preventDefault();
            }
            setupScrollPrevention(t) {
              (this.state._preventScroll = !1),
                "persist" in t && "function" == typeof t.persist && t.persist();
              let e = this.eventStore.add(
                this.sharedConfig.window,
                "touch",
                "change",
                this.preventScroll.bind(this),
                { passive: !1 }
              );
              this.eventStore.add(this.sharedConfig.window, "touch", "end", e),
                this.eventStore.add(
                  this.sharedConfig.window,
                  "touch",
                  "cancel",
                  e
                ),
                this.timeoutStore.add(
                  "startPointerDrag",
                  this.startPointerDrag.bind(this),
                  this.config.preventScrollDelay,
                  t
                );
            }
            setupDelayTrigger(t) {
              (this.state._delayed = !0),
                this.timeoutStore.add(
                  "dragDelay",
                  () => {
                    (this.state._step = [0, 0]), this.startPointerDrag(t);
                  },
                  this.config.delay
                );
            }
            keyDown(t) {
              let e = sp[t.key];
              if (e) {
                let i = this.state,
                  n = t.shiftKey ? 10 : t.altKey ? 0.1 : 1;
                this.start(t),
                  (i._delta = e(this.config.keyboardDisplacement, n)),
                  (i._keyboardActive = !0),
                  rZ.addTo(i._movement, i._delta),
                  this.compute(t),
                  this.emit();
              }
            }
            keyUp(t) {
              t.key in sp &&
                ((this.state._keyboardActive = !1),
                this.setActive(),
                this.compute(t),
                this.emit());
            }
            bind(t) {
              let e = this.config.device;
              t(e, "start", this.pointerDown.bind(this)),
                this.config.pointerCapture &&
                  (t(e, "change", this.pointerMove.bind(this)),
                  t(e, "end", this.pointerUp.bind(this)),
                  t(e, "cancel", this.pointerUp.bind(this)),
                  t("lostPointerCapture", "", this.pointerUp.bind(this))),
                this.config.keys &&
                  (t("key", "down", this.keyDown.bind(this)),
                  t("key", "up", this.keyUp.bind(this))),
                this.config.filterTaps &&
                  t("click", "", this.pointerClick.bind(this), {
                    capture: !0,
                    passive: !1,
                  });
            }
          },
          resolver: sy,
        },
        sC = {
          key: "hover",
          engine: class extends su {
            constructor(...t) {
              super(...t), r0(this, "ingKey", "hovering");
            }
            enter(t) {
              (this.config.mouseOnly && "mouse" !== t.pointerType) ||
                (this.start(t),
                this.computeValues(sn(t)),
                this.compute(t),
                this.emit());
            }
            leave(t) {
              if (this.config.mouseOnly && "mouse" !== t.pointerType) return;
              let e = this.state;
              if (!e._active) return;
              e._active = !1;
              let i = sn(t);
              (e._movement = e._delta = rZ.sub(i, e._values)),
                this.computeValues(i),
                this.compute(t),
                (e.delta = e.movement),
                this.emit();
            }
            bind(t) {
              t("pointer", "enter", this.enter.bind(this)),
                t("pointer", "leave", this.leave.bind(this));
            }
          },
          resolver: sP,
        },
        sM = {
          key: "move",
          engine: class extends su {
            constructor(...t) {
              super(...t), r0(this, "ingKey", "moving");
            }
            move(t) {
              (this.config.mouseOnly && "mouse" !== t.pointerType) ||
                (this.state._active ? this.moveChange(t) : this.moveStart(t),
                this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)));
            }
            moveStart(t) {
              this.start(t),
                this.computeValues(sn(t)),
                this.compute(t),
                this.computeInitial(),
                this.emit();
            }
            moveChange(t) {
              if (!this.state._active) return;
              let e = sn(t),
                i = this.state;
              (i._delta = rZ.sub(e, i._values)),
                rZ.addTo(i._movement, i._delta),
                this.computeValues(e),
                this.compute(t),
                this.emit();
            }
            moveEnd(t) {
              this.state._active &&
                ((this.state._active = !1), this.compute(t), this.emit());
            }
            bind(t) {
              t("pointer", "change", this.move.bind(this)),
                t("pointer", "leave", this.moveEnd.bind(this));
            }
          },
          resolver: sw,
        },
        sk = {
          key: "pinch",
          engine: class extends sl {
            constructor(...t) {
              super(...t),
                r0(this, "ingKey", "pinching"),
                r0(this, "aliasKey", "da");
            }
            init() {
              (this.state.offset = [1, 0]),
                (this.state.lastOffset = [1, 0]),
                (this.state._pointerEvents = new Map());
            }
            reset() {
              super.reset();
              let t = this.state;
              (t._touchIds = []),
                (t.canceled = !1),
                (t.cancel = this.cancel.bind(this)),
                (t.turns = 0);
            }
            computeOffset() {
              let { type: t, movement: e, lastOffset: i } = this.state;
              "wheel" === t
                ? (this.state.offset = rZ.add(e, i))
                : (this.state.offset = [(1 + e[0]) * i[0], e[1] + i[1]]);
            }
            computeMovement() {
              let { offset: t, lastOffset: e } = this.state;
              this.state.movement = [t[0] / e[0], t[1] - e[1]];
            }
            axisIntent() {
              let t = this.state,
                [e, i] = t._movement;
              if (!t.axis) {
                let n = 30 * Math.abs(e) - Math.abs(i);
                n < 0 ? (t.axis = "angle") : n > 0 && (t.axis = "scale");
              }
            }
            restrictToAxis(t) {
              this.config.lockDirection &&
                ("scale" === this.state.axis
                  ? (t[1] = 0)
                  : "angle" === this.state.axis && (t[0] = 0));
            }
            cancel() {
              let t = this.state;
              t.canceled ||
                setTimeout(() => {
                  (t.canceled = !0),
                    (t._active = !1),
                    this.compute(),
                    this.emit();
                }, 0);
            }
            touchStart(t) {
              this.ctrl.setEventIds(t);
              let e = this.state,
                i = this.ctrl.touchIds;
              if (
                (e._active && e._touchIds.every((t) => i.has(t))) ||
                i.size < 2
              )
                return;
              this.start(t), (e._touchIds = Array.from(i).slice(0, 2));
              let n = se(t, e._touchIds);
              n && this.pinchStart(t, n);
            }
            pointerStart(t) {
              if (null != t.buttons && t.buttons % 2 != 1) return;
              this.ctrl.setEventIds(t), t.target.setPointerCapture(t.pointerId);
              let e = this.state,
                i = e._pointerEvents,
                n = this.ctrl.pointerIds;
              if (
                (e._active && Array.from(i.keys()).every((t) => n.has(t))) ||
                (i.size < 2 && i.set(t.pointerId, t), e._pointerEvents.size < 2)
              )
                return;
              this.start(t);
              let r = st(...Array.from(i.values()));
              r && this.pinchStart(t, r);
            }
            pinchStart(t, e) {
              let i = this.state;
              (i.origin = e.origin),
                this.computeValues([e.distance, e.angle]),
                this.computeInitial(),
                this.compute(t),
                this.emit();
            }
            touchMove(t) {
              if (!this.state._active) return;
              let e = se(t, this.state._touchIds);
              e && this.pinchMove(t, e);
            }
            pointerMove(t) {
              let e = this.state._pointerEvents;
              if (
                (e.has(t.pointerId) && e.set(t.pointerId, t),
                !this.state._active)
              )
                return;
              let i = st(...Array.from(e.values()));
              i && this.pinchMove(t, i);
            }
            pinchMove(t, e) {
              let i = this.state,
                n = i._values[1],
                r = e.angle - n,
                s = 0;
              Math.abs(r) > 270 && (s += Math.sign(r)),
                this.computeValues([e.distance, e.angle - 360 * s]),
                (i.origin = e.origin),
                (i.turns = s),
                (i._movement = [
                  i._values[0] / i._initial[0] - 1,
                  i._values[1] - i._initial[1],
                ]),
                this.compute(t),
                this.emit();
            }
            touchEnd(t) {
              this.ctrl.setEventIds(t),
                this.state._active &&
                  this.state._touchIds.some(
                    (t) => !this.ctrl.touchIds.has(t)
                  ) &&
                  ((this.state._active = !1), this.compute(t), this.emit());
            }
            pointerEnd(t) {
              let e = this.state;
              this.ctrl.setEventIds(t);
              try {
                t.target.releasePointerCapture(t.pointerId);
              } catch (t) {}
              e._pointerEvents.has(t.pointerId) &&
                e._pointerEvents.delete(t.pointerId),
                e._active &&
                  e._pointerEvents.size < 2 &&
                  ((e._active = !1), this.compute(t), this.emit());
            }
            gestureStart(t) {
              t.cancelable && t.preventDefault();
              let e = this.state;
              e._active ||
                (this.start(t),
                this.computeValues([t.scale, t.rotation]),
                (e.origin = [t.clientX, t.clientY]),
                this.compute(t),
                this.emit());
            }
            gestureMove(t) {
              if ((t.cancelable && t.preventDefault(), !this.state._active))
                return;
              let e = this.state;
              this.computeValues([t.scale, t.rotation]),
                (e.origin = [t.clientX, t.clientY]);
              let i = e._movement;
              (e._movement = [t.scale - 1, t.rotation]),
                (e._delta = rZ.sub(e._movement, i)),
                this.compute(t),
                this.emit();
            }
            gestureEnd(t) {
              this.state._active &&
                ((this.state._active = !1), this.compute(t), this.emit());
            }
            wheel(t) {
              let e = this.config.modifierKey;
              (!e || (Array.isArray(e) ? e.find((e) => t[e]) : t[e])) &&
                (this.state._active ? this.wheelChange(t) : this.wheelStart(t),
                this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this)));
            }
            wheelStart(t) {
              this.start(t), this.wheelChange(t);
            }
            wheelChange(t) {
              "uv" in t || !t.cancelable || t.preventDefault();
              let e = this.state;
              (e._delta = [(-sr(t)[1] / 100) * e.offset[0], 0]),
                rZ.addTo(e._movement, e._delta),
                sx(e),
                (this.state.origin = [t.clientX, t.clientY]),
                this.compute(t),
                this.emit();
            }
            wheelEnd() {
              this.state._active &&
                ((this.state._active = !1), this.compute(), this.emit());
            }
            bind(t) {
              let e = this.config.device;
              e &&
                (t(e, "start", this[e + "Start"].bind(this)),
                t(e, "change", this[e + "Move"].bind(this)),
                t(e, "end", this[e + "End"].bind(this)),
                t(e, "cancel", this[e + "End"].bind(this)),
                t("lostPointerCapture", "", this[e + "End"].bind(this))),
                this.config.pinchOnWheel &&
                  t("wheel", "", this.wheel.bind(this), { passive: !1 });
            }
          },
          resolver: sb,
        },
        sV = {
          key: "scroll",
          engine: class extends su {
            constructor(...t) {
              super(...t), r0(this, "ingKey", "scrolling");
            }
            scroll(t) {
              this.state._active || this.start(t),
                this.scrollChange(t),
                this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this));
            }
            scrollChange(t) {
              t.cancelable && t.preventDefault();
              let e = this.state,
                i = (function (t) {
                  var e, i;
                  let {
                    scrollX: n,
                    scrollY: r,
                    scrollLeft: s,
                    scrollTop: o,
                  } = t.currentTarget;
                  return [
                    null !== (e = null != n ? n : s) && void 0 !== e ? e : 0,
                    null !== (i = null != r ? r : o) && void 0 !== i ? i : 0,
                  ];
                })(t);
              (e._delta = rZ.sub(i, e._values)),
                rZ.addTo(e._movement, e._delta),
                this.computeValues(i),
                this.compute(t),
                this.emit();
            }
            scrollEnd() {
              this.state._active &&
                ((this.state._active = !1), this.compute(), this.emit());
            }
            bind(t) {
              t("scroll", "", this.scroll.bind(this));
            }
          },
          resolver: sd,
        },
        s_ = {
          key: "wheel",
          engine: class extends su {
            constructor(...t) {
              super(...t), r0(this, "ingKey", "wheeling");
            }
            wheel(t) {
              this.state._active || this.start(t),
                this.wheelChange(t),
                this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
            }
            wheelChange(t) {
              let e = this.state;
              (e._delta = sr(t)),
                rZ.addTo(e._movement, e._delta),
                sx(e),
                this.compute(t),
                this.emit();
            }
            wheelEnd() {
              this.state._active &&
                ((this.state._active = !1), this.compute(), this.emit());
            }
            bind(t) {
              t("wheel", "", this.wheel.bind(this));
            }
          },
          resolver: sd,
        },
        sD = {
          target(t) {
            if (t) return () => ("current" in t ? t.current : t);
          },
          enabled: (t = !0) => t,
          window: (t = sv.isBrowser ? window : void 0) => t,
          eventOptions: ({ passive: t = !0, capture: e = !1 } = {}) => ({
            passive: t,
            capture: e,
          }),
          transform: (t) => t,
        },
        sL = ["target", "eventOptions", "window", "enabled", "transform"];
      function sj(t = {}, e) {
        let i = {};
        for (let [n, r] of Object.entries(e))
          switch (typeof r) {
            case "function":
              i[n] = r.call(i, t[n], n, t);
              break;
            case "object":
              i[n] = sj(t[n], r);
              break;
            case "boolean":
              r && (i[n] = t[n]);
          }
        return i;
      }
      class sR {
        constructor(t, e) {
          r0(this, "_listeners", new Set()),
            (this._ctrl = t),
            (this._gestureKey = e);
        }
        add(t, e, i, n, r) {
          let s = this._listeners,
            o = (function (t, e = "") {
              let i = r3[t],
                n = (i && i[e]) || e;
              return t + n;
            })(e, i),
            a = this._gestureKey
              ? this._ctrl.config[this._gestureKey].eventOptions
              : {},
            l = r2(r2({}, a), r);
          t.addEventListener(o, n, l);
          let u = () => {
            t.removeEventListener(o, n, l), s.delete(u);
          };
          return s.add(u), u;
        }
        clean() {
          this._listeners.forEach((t) => t()), this._listeners.clear();
        }
      }
      class sB {
        constructor() {
          r0(this, "_timeouts", new Map());
        }
        add(t, e, i = 140, ...n) {
          this.remove(t), this._timeouts.set(t, window.setTimeout(e, i, ...n));
        }
        remove(t) {
          let e = this._timeouts.get(t);
          e && window.clearTimeout(e);
        }
        clean() {
          this._timeouts.forEach((t) => void window.clearTimeout(t)),
            this._timeouts.clear();
        }
      }
      class sO {
        constructor(t) {
          r0(this, "gestures", new Set()),
            r0(this, "_targetEventStore", new sR(this)),
            r0(this, "gestureEventStores", {}),
            r0(this, "gestureTimeoutStores", {}),
            r0(this, "handlers", {}),
            r0(this, "config", {}),
            r0(this, "pointerIds", new Set()),
            r0(this, "touchIds", new Set()),
            r0(this, "state", {
              shared: { shiftKey: !1, metaKey: !1, ctrlKey: !1, altKey: !1 },
            }),
            t.drag && sI(this, "drag"),
            t.wheel && sI(this, "wheel"),
            t.scroll && sI(this, "scroll"),
            t.move && sI(this, "move"),
            t.pinch && sI(this, "pinch"),
            t.hover && sI(this, "hover");
        }
        setEventIds(t) {
          return r6(t)
            ? ((this.touchIds = new Set(
                Array.from(t.touches)
                  .filter((e) => {
                    var i, n;
                    return (
                      e.target === t.currentTarget ||
                      (null === (i = t.currentTarget) ||
                      void 0 === i ||
                      null === (n = i.contains) ||
                      void 0 === n
                        ? void 0
                        : n.call(i, e.target))
                    );
                  })
                  .map((t) => t.identifier)
              )),
              this.touchIds)
            : "pointerId" in t
            ? ("pointerup" === t.type || "pointercancel" === t.type
                ? this.pointerIds.delete(t.pointerId)
                : "pointerdown" === t.type && this.pointerIds.add(t.pointerId),
              this.pointerIds)
            : void 0;
        }
        applyHandlers(t, e) {
          (this.handlers = t), (this.nativeHandlers = e);
        }
        applyConfig(t, e) {
          this.config = (function (t, e, i = {}) {
            let {
                target: n,
                eventOptions: r,
                window: s,
                enabled: o,
                transform: a,
              } = t,
              l = (function (t, e) {
                if (null == t) return {};
                var i,
                  n,
                  r = (function (t, e) {
                    if (null == t) return {};
                    var i,
                      n,
                      r = {},
                      s = Object.keys(t);
                    for (n = 0; n < s.length; n++)
                      (i = s[n]), e.indexOf(i) >= 0 || (r[i] = t[i]);
                    return r;
                  })(t, e);
                if (Object.getOwnPropertySymbols) {
                  var s = Object.getOwnPropertySymbols(t);
                  for (n = 0; n < s.length; n++)
                    (i = s[n]),
                      !(e.indexOf(i) >= 0) &&
                        Object.prototype.propertyIsEnumerable.call(t, i) &&
                        (r[i] = t[i]);
                }
                return r;
              })(t, sL);
            if (
              ((i.shared = sj(
                {
                  target: n,
                  eventOptions: r,
                  window: s,
                  enabled: o,
                  transform: a,
                },
                sD
              )),
              e)
            ) {
              let t = sT.get(e);
              i[e] = sj(r2({ shared: i.shared }, l), t);
            } else
              for (let t in l) {
                let e = sT.get(t);
                e && (i[t] = sj(r2({ shared: i.shared }, l[t]), e));
              }
            return i;
          })(t, e, this.config);
        }
        clean() {
          for (let t of (this._targetEventStore.clean(), this.gestures))
            this.gestureEventStores[t].clean(),
              this.gestureTimeoutStores[t].clean();
        }
        effect() {
          return (
            this.config.shared.target && this.bind(),
            () => this._targetEventStore.clean()
          );
        }
        bind(...t) {
          let e;
          let i = this.config.shared,
            n = {};
          if (!i.target || (e = i.target())) {
            if (i.enabled) {
              for (let i of this.gestures) {
                let r = this.config[i],
                  s = sF(n, r.eventOptions, !!e);
                if (r.enabled) {
                  let e = sS.get(i);
                  new e(this, t, i).bind(s);
                }
              }
              let r = sF(n, i.eventOptions, !!e);
              for (let e in this.nativeHandlers)
                r(
                  e,
                  "",
                  (i) =>
                    this.nativeHandlers[e](
                      r2(r2({}, this.state.shared), {}, { event: i, args: t })
                    ),
                  void 0,
                  !0
                );
            }
            for (let t in n)
              n[t] = (function (...t) {
                return 0 === t.length
                  ? so
                  : 1 === t.length
                  ? t[0]
                  : function () {
                      let e;
                      for (let i of t) e = i.apply(this, arguments) || e;
                      return e;
                    };
              })(...n[t]);
            if (!e) return n;
            for (let t in n) {
              let {
                device: i,
                capture: r,
                passive: s,
              } = (function (t) {
                let e = t.substring(2).toLowerCase(),
                  i = !!~e.indexOf("passive");
                i && (e = e.replace("passive", ""));
                let n = r4.includes(e) ? "capturecapture" : "capture",
                  r = !!~e.indexOf(n);
                return (
                  r && (e = e.replace("capture", "")),
                  { device: e, capture: r, passive: i }
                );
              })(t);
              this._targetEventStore.add(e, i, "", n[t], {
                capture: r,
                passive: s,
              });
            }
          }
        }
      }
      function sI(t, e) {
        t.gestures.add(e),
          (t.gestureEventStores[e] = new sR(t, e)),
          (t.gestureTimeoutStores[e] = new sB());
      }
      let sF =
          (t, e, i) =>
          (n, r, s, o = {}, a = !1) => {
            var l, u;
            let h = null !== (l = o.capture) && void 0 !== l ? l : e.capture,
              c = null !== (u = o.passive) && void 0 !== u ? u : e.passive,
              d = a
                ? n
                : (function (t, e = "", i = !1) {
                    let n = r3[t],
                      r = (n && n[e]) || e;
                    return (
                      "on" +
                      r5(t) +
                      r5(r) +
                      (!(function (t = !1, e) {
                        return t && !r9.includes(e);
                      })(i, r)
                        ? ""
                        : "Capture")
                    );
                  })(n, r, h);
            i && c && (d += "Passive"), (t[d] = t[d] || []), t[d].push(s);
          },
        sN = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;
      function sU(t, e, i, n, r, s) {
        if (!t.has(i) || !sS.has(n)) return;
        let o = i + "Start",
          a = i + "End",
          l = (t) => {
            let n;
            return (
              t.first && o in e && e[o](t),
              i in e && (n = e[i](t)),
              t.last && a in e && e[a](t),
              n
            );
          };
        (r[n] = l), (s[n] = s[n] || {});
      }
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var sX =
          function () {
            return (sX =
              Object.assign ||
              function (t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                  for (var r in (e = arguments[i]))
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t;
              }).apply(this, arguments);
          },
        sW = function (t, e) {
          return function (i) {
            return Math.max(Math.min(i, e), t);
          };
        },
        sH = function (t) {
          return t % 1 ? Number(t.toFixed(5)) : t;
        },
        s$ = /(-)?(\d[\d\.]*)/g,
        sz =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
        sY =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i,
        sK = {
          test: function (t) {
            return "number" == typeof t;
          },
          parse: parseFloat,
          transform: function (t) {
            return t;
          },
        },
        sq = sX(sX({}, sK), { transform: sW(0, 1) });
      sX(sX({}, sK), { default: 1 });
      var sG = function (t) {
        return {
          test: function (e) {
            return (
              "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length
            );
          },
          parse: parseFloat,
          transform: function (e) {
            return "" + e + t;
          },
        };
      };
      sG("deg");
      var sZ = sG("%");
      sG("px"),
        sG("vh"),
        sG("vw"),
        sX(sX({}, sZ), {
          parse: function (t) {
            return sZ.parse(t) / 100;
          },
          transform: function (t) {
            return sZ.transform(100 * t);
          },
        });
      var sQ = sW(0, 255),
        sJ = function (t) {
          return void 0 !== t.red;
        },
        s0 = function (t) {
          return void 0 !== t.hue;
        },
        s1 = function (t) {
          return function (e) {
            if ("string" != typeof e) return e;
            for (
              var i = {},
                n = e
                  .substring(e.indexOf("(") + 1, e.lastIndexOf(")"))
                  .replace(/(,|\/)/g, " ")
                  .split(/ \s*/),
                r = 0;
              r < 4;
              r++
            )
              i[t[r]] = void 0 !== n[r] ? parseFloat(n[r]) : 1;
            return i;
          };
        },
        s2 = function (t) {
          var e = t.red,
            i = t.green,
            n = t.blue,
            r = t.alpha;
          return (
            "rgba(" +
            e +
            ", " +
            i +
            ", " +
            n +
            ", " +
            (void 0 === r ? 1 : r) +
            ")"
          );
        },
        s3 = function (t) {
          var e = t.hue,
            i = t.saturation,
            n = t.lightness,
            r = t.alpha;
          return (
            "hsla(" +
            e +
            ", " +
            i +
            ", " +
            n +
            ", " +
            (void 0 === r ? 1 : r) +
            ")"
          );
        },
        s5 = sX(sX({}, sK), {
          transform: function (t) {
            return Math.round(sQ(t));
          },
        });
      function s9(t, e) {
        return t.startsWith(e) && sY.test(t);
      }
      var s4 = {
          test: function (t) {
            return "string" == typeof t ? s9(t, "rgb") : sJ(t);
          },
          parse: s1(["red", "green", "blue", "alpha"]),
          transform: function (t) {
            var e = t.red,
              i = t.green,
              n = t.blue,
              r = t.alpha;
            return s2({
              red: s5.transform(e),
              green: s5.transform(i),
              blue: s5.transform(n),
              alpha: sH(sq.transform(void 0 === r ? 1 : r)),
            });
          },
        },
        s6 = {
          test: function (t) {
            return "string" == typeof t ? s9(t, "hsl") : s0(t);
          },
          parse: s1(["hue", "saturation", "lightness", "alpha"]),
          transform: function (t) {
            var e = t.hue,
              i = t.saturation,
              n = t.lightness,
              r = t.alpha;
            return s3({
              hue: Math.round(e),
              saturation: sZ.transform(sH(i)),
              lightness: sZ.transform(sH(n)),
              alpha: sH(sq.transform(void 0 === r ? 1 : r)),
            });
          },
        },
        s8 = sX(sX({}, s4), {
          test: function (t) {
            return "string" == typeof t && s9(t, "#");
          },
          parse: function (t) {
            var e = "",
              i = "",
              n = "";
            return (
              t.length > 4
                ? ((e = t.substr(1, 2)),
                  (i = t.substr(3, 2)),
                  (n = t.substr(5, 2)))
                : ((e = t.substr(1, 1)),
                  (i = t.substr(2, 1)),
                  (n = t.substr(3, 1)),
                  (e += e),
                  (i += i),
                  (n += n)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(n, 16),
                alpha: 1,
              }
            );
          },
        }),
        s7 = {
          test: function (t) {
            return ("string" == typeof t && sY.test(t)) || sJ(t) || s0(t);
          },
          parse: function (t) {
            return s4.test(t)
              ? s4.parse(t)
              : s6.test(t)
              ? s6.parse(t)
              : s8.test(t)
              ? s8.parse(t)
              : t;
          },
          transform: function (t) {
            return sJ(t) ? s4.transform(t) : s0(t) ? s6.transform(t) : t;
          },
        },
        ot = "${c}",
        oe = "${n}",
        oi = function (t) {
          return "number" == typeof t ? 0 : t;
        },
        on = {
          test: function (t) {
            if ("string" != typeof t || !isNaN(t)) return !1;
            var e = 0,
              i = t.match(s$),
              n = t.match(sz);
            return i && (e += i.length), n && (e += n.length), e > 0;
          },
          parse: function (t) {
            var e = t,
              i = [],
              n = e.match(sz);
            n && ((e = e.replace(sz, ot)), i.push.apply(i, n.map(s7.parse)));
            var r = e.match(s$);
            return r && i.push.apply(i, r.map(sK.parse)), i;
          },
          createTransformer: function (t) {
            var e = t,
              i = 0,
              n = t.match(sz),
              r = n ? n.length : 0;
            if (n) for (var s = 0; s < r; s++) (e = e.replace(n[s], ot)), i++;
            var o = e.match(s$),
              a = o ? o.length : 0;
            if (o) for (var s = 0; s < a; s++) (e = e.replace(o[s], oe)), i++;
            return function (t) {
              for (var n = e, s = 0; s < i; s++)
                n = n.replace(
                  s < r ? ot : oe,
                  s < r ? s7.transform(t[s]) : sH(t[s])
                );
              return n;
            };
          },
          getAnimatableNone: function (t) {
            var e = on.parse(t);
            return on.createTransformer(t)(e.map(oi));
          },
        },
        or = function () {},
        os = 0,
        oo =
          "undefined" != typeof window &&
          void 0 !== window.requestAnimationFrame
            ? function (t) {
                return window.requestAnimationFrame(t);
              }
            : function (t) {
                var e = Date.now(),
                  i = Math.max(0, 16.7 - (e - os));
                (os = e + i),
                  setTimeout(function () {
                    return t(os);
                  }, i);
              },
        oa = function (t) {
          var e = [],
            i = [],
            n = 0,
            r = !1,
            s = 0,
            o = new WeakSet(),
            a = new WeakSet(),
            l = {
              cancel: function (t) {
                var e = i.indexOf(t);
                o.add(t), -1 !== e && i.splice(e, 1);
              },
              process: function (u) {
                var h, c;
                if (
                  ((r = !0),
                  (e = (h = [i, e])[0]),
                  ((i = h[1]).length = 0),
                  (n = e.length))
                )
                  for (s = 0; s < n; s++)
                    (c = e[s])(u),
                      !0 !== a.has(c) || o.has(c) || (l.schedule(c), t(!0));
                r = !1;
              },
              schedule: function (t, s, l) {
                void 0 === s && (s = !1),
                  void 0 === l && (l = !1),
                  or("function" == typeof t, "Argument must be a function");
                var u = l && r,
                  h = u ? e : i;
                o.delete(t),
                  s && a.add(t),
                  -1 === h.indexOf(t) && (h.push(t), u && (n = e.length));
              },
            };
          return l;
        },
        ol = (1 / 60) * 1e3,
        ou = !0,
        oh = !1,
        oc = { delta: 0, timestamp: 0 },
        od = ["read", "update", "preRender", "render", "postRender"],
        op = function (t) {
          return (oh = t);
        },
        om = od.reduce(function (t, e) {
          return (t[e] = oa(op)), t;
        }, {}),
        of = function (t) {
          return om[t].process(oc);
        },
        ov = function (t) {
          (oh = !1),
            (oc.delta = ou ? ol : Math.max(Math.min(t - oc.timestamp, 40), 1)),
            ou || (ol = oc.delta),
            (oc.timestamp = t),
            od.forEach(of),
            oh && ((ou = !1), oo(ov));
        },
        og = function (t) {
          return function (e, i, n) {
            return void 0 !== n
              ? t(e, i, n)
              : function (n) {
                  return t(e, i, n);
                };
          };
        },
        oy = og(function (t, e, i) {
          return Math.min(Math.max(i, t), e);
        }),
        ox = function (t, e, i) {
          return -i * t + i * e + t;
        },
        ob = function () {
          return (ob =
            Object.assign ||
            function (t) {
              for (var e, i = 1, n = arguments.length; i < n; i++)
                for (var r in (e = arguments[i]))
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return t;
            }).apply(this, arguments);
        },
        ow = function (t, e, i) {
          var n = t * t;
          return Math.sqrt(Math.max(0, i * (e * e - n) + n));
        },
        oP = [s8, s4, s6],
        oS = function (t) {
          return oP.find(function (e) {
            return e.test(t);
          });
        },
        oT = function (t) {
          return (
            "'" +
            t +
            "' is not an animatable color. Use the equivalent color code instead."
          );
        },
        oE = function (t, e) {
          var i = oS(t),
            n = oS(e);
          invariant(!!i, oT(t)),
            invariant(!!n, oT(e)),
            invariant(
              i.transform === n.transform,
              "Both colors must be hex/RGBA, OR both must be HSLA."
            );
          var r = i.parse(t),
            s = n.parse(e),
            o = ob({}, r),
            a = i === hsla ? ox : ow;
          return function (t) {
            for (var e in o) "alpha" !== e && (o[e] = a(r[e], s[e], t));
            return (o.alpha = ox(r.alpha, s.alpha, t)), i.transform(o);
          };
        },
        oA = function (t, e) {
          return function (i) {
            return e(t(i));
          };
        },
        oC = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          return t.reduce(oA);
        },
        oM = function (t, e) {
          var i = t.slice(),
            n = i.length,
            r = t.map(function (t, i) {
              var n;
              return (
                (n = e[i]),
                "number" == typeof t
                  ? function (e) {
                      return ox(t, n, e);
                    }
                  : color.test(t)
                  ? oE(t, n)
                  : oV(t, n)
              );
            });
          return function (t) {
            for (var e = 0; e < n; e++) i[e] = r[e](t);
            return i;
          };
        };
      function ok(t) {
        for (
          var e = complex.parse(t), i = e.length, n = 0, r = 0, s = 0, o = 0;
          o < i;
          o++
        )
          n || "number" == typeof e[o] ? n++ : void 0 !== e[o].hue ? s++ : r++;
        return { parsed: e, numNumbers: n, numRGB: r, numHSL: s };
      }
      var oV = function (t, e) {
          var i = complex.createTransformer(e),
            n = ok(t),
            r = ok(e);
          return (
            invariant(
              n.numHSL === r.numHSL &&
                n.numRGB === r.numRGB &&
                n.numNumbers >= r.numNumbers,
              "Complex values '" +
                t +
                "' and '" +
                e +
                "' too different to mix. Ensure all colors are of the same type."
            ),
            oC(oM(n.parsed, r.parsed), i)
          );
        },
        o_ = function (t) {
          return t;
        },
        oD = function (t) {
          return (
            void 0 === t && (t = o_),
            og(function (e, i, n) {
              var r = i - n,
                s = -(0 - e + 1) * (0 - t(Math.abs(r)));
              return r <= 0 ? i + s : i - s;
            })
          );
        };
      oD(), oD(Math.sqrt);
      var oL = og(function (t, e, i) {
        var n = e - t;
        return ((((i - t) % n) + n) % n) + t;
      });
      oy(0, 1);
      var oj = i(6829),
        oR = i(8966),
        oB = i(7696),
        oO = i(4483),
        oI = i(1458),
        oF = i(8245),
        oN = i(8358),
        oU = i(9557);
      let oX = () =>
          (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "10",
            height: "14",
            viewBox: "0 0 10 14",
            children: (0, o.jsx)("path", {
              d: "M7,13,1,7,7,1",
              fill: "none",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
            }),
          }),
        oW = () =>
          (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "10",
            height: "14",
            viewBox: "0 0 10 14",
            children: (0, o.jsx)("path", {
              d: "M3,1,9,7,3,13",
              fill: "none",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
            }),
          }),
        oH = (t, e) => t * (1 + e),
        o$ = (0, a.forwardRef)(function (t, e) {
          let {
              images: i = [],
              width: n,
              margin: r,
              pageSize: s,
              step: l,
              gap: u,
              slideAlignment: h,
              showDots: c,
              showArrows: d,
              arrowPosition: p,
              arrowColor: m,
              arrowBackground: f,
              dotColor: v,
              autoplay: g = !1,
              delay: y = 5,
              slideBorder: x,
              slideBorderRadius: b,
            } = t,
            w = (0, oU.k)(),
            [P, S] = (0, a.useState)(0),
            T = (0, a.useRef)(0),
            E = oL(0, i.length, P),
            A = (0, oR.a)(s) || 1,
            C = (0, oR.a)(l) || 1,
            M = E + A,
            k = Math.ceil((i.length - A) / C + 1),
            V = Math.ceil(E / C),
            _ = V === k - 1,
            D = (0, a.useCallback)(
              (t) => {
                if (0 === t) return;
                let e = t / Math.abs(t),
                  n = e > 0 ? i.slice(M) : i.slice(0, E),
                  r = e * Math.min(n.length, C * Math.abs(t));
                S(P + r);
              },
              [i, P, E, M, C]
            ),
            L = eU({ x: 0, transition: { type: "spring", stiffness: 100 } }),
            j = (function (t, e) {
              let i =
                ([sA, sk, sV, s_, sM, sC].forEach(sE),
                function (t, e) {
                  let {
                    handlers: i,
                    nativeHandlers: n,
                    config: r,
                  } = (function (t, e) {
                    let [i, n, r] = (function (t) {
                        let e = {},
                          i = {},
                          n = new Set();
                        for (let r in t)
                          sN.test(r)
                            ? (n.add(RegExp.lastMatch), (i[r] = t[r]))
                            : (e[r] = t[r]);
                        return [i, e, n];
                      })(t),
                      s = {};
                    return (
                      sU(r, i, "onDrag", "drag", s, e),
                      sU(r, i, "onWheel", "wheel", s, e),
                      sU(r, i, "onScroll", "scroll", s, e),
                      sU(r, i, "onPinch", "pinch", s, e),
                      sU(r, i, "onMove", "move", s, e),
                      sU(r, i, "onHover", "hover", s, e),
                      { handlers: s, config: e, nativeHandlers: n }
                    );
                  })(t, e || {});
                  return (function (t, e = {}, i, n) {
                    let r = a.useMemo(() => new sO(t), []);
                    if (
                      (r.applyHandlers(t, n),
                      r.applyConfig(e, i),
                      a.useEffect(r.effect.bind(r)),
                      a.useEffect(() => r.clean.bind(r), []),
                      void 0 === e.target)
                    )
                      return r.bind.bind(r);
                  })(i, r, void 0, n);
                });
              return i(t, e || {});
            })(
              {
                onDrag: (t) => {
                  let {
                    movement: [e],
                    delta: [i],
                    velocity: [n],
                  } = t;
                  L.start({ x: e }), (T.current = oH(i, n));
                },
                onDragEnd: () => {
                  L.start({ x: 0 }),
                    T.current > 20 ? D(1) : T.current < -20 && D(-1);
                },
              },
              {
                drag: {
                  axis: "x",
                  bounds: { left: 0, right: 0 },
                  rubberband: !0,
                },
              }
            );
          (0, a.useEffect)(() => {
            (g && 0 === A) || S(0);
          }, [g, A]),
            (0, a.useEffect)(() => {
              if (!g) return () => {};
              let t = setInterval(() => (_ ? S(0) : D(1)), 1e3 * y);
              return () => clearInterval(t);
            }, [g, y, D, _]);
          let R = (0, oO.X)({ overflow: "hidden" }),
            B = (0, oO.X)({ position: "relative", width: "100%" }),
            O = (0, oI.cx)(
              (0, oO.X)({ display: "flex" }),
              (0, oO.X)(
                (0, oF.CS)([s], (t) => {
                  let [e = 1] = t;
                  return {
                    flexBasis: "".concat(100 / e, "%"),
                    maxWidth: "".concat(100 / e, "%"),
                    minWidth: "".concat(100 / e, "%"),
                  };
                })
              ),
              (0, oO.X)(
                (0, oF.CS)([h], (t) => {
                  let [e = "center"] = t;
                  return { alignItems: e };
                })
              )
            ),
            I = (0, oI.cx)(
              (0, oO.X)({
                display: "flex",
                position: "relative",
                flexWrap: "nowrap",
              }),
              (0, oO.X)(
                (0, oF.CS)([u], (t) => {
                  let [e = { value: 0, unit: "px" }] = t;
                  return {
                    margin: "0 ".concat("".concat(-e.value / 2).concat(e.unit)),
                    ["& > .".concat(O)]: {
                      padding: "0 ".concat(
                        "".concat(e.value / 2).concat(e.unit)
                      ),
                    },
                  };
                })
              )
            ),
            F = (0, oI.cx)(
              (0, oO.X)({
                padding: 10,
                borderRadius: "50%",
                outline: 0,
                border: 0,
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                userSelect: "none",
              }),
              (0, oO.X)(
                (0, oF.CS)([f], (t) => {
                  let [
                    e = {
                      swatch: { hue: 0, saturation: 0, lightness: 100 },
                      alpha: 1,
                    },
                  ] = t;
                  return { background: (0, oj.U)(e) };
                })
              ),
              (0, oO.X)({
                svg: { transition: "transform 0.15s", stroke: "currentcolor" },
              })
            ),
            N = (0, oI.cx)(
              (0, oO.X)({
                position: "absolute",
                top: 0,
                bottom: 0,
                display: "flex",
                "&[hidden]": { display: "none" },
                alignItems: "center",
                cursor: "pointer",
                zIndex: 2,
              }),
              (0, oO.X)(
                (0, oF.CS)([m], (t) => {
                  let [
                    e = {
                      swatch: { hue: 0, saturation: 0, lightness: 0 },
                      alpha: 1,
                    },
                  ] = t;
                  return { color: (0, oj.U)(e) };
                })
              )
            ),
            U = (0, oI.cx)(
              N,
              (0, oO.X)(
                (0, oF.CS)([p], (t) => {
                  let [e = "inside"] = t;
                  switch (e) {
                    case "inside":
                      return { transform: "translateX(8px)" };
                    case "outside":
                      return { transform: "translateX(calc(-100% - 8px))" };
                    default:
                      return { transform: "translateX(calc(-50%))" };
                  }
                })
              ),
              (0, oO.X)({
                left: 0,
                ["&:hover > .".concat(F)]: {
                  "& > svg": { transform: "translateX(-2px)" },
                },
              })
            ),
            X = (0, oI.cx)(
              N,
              (0, oO.X)(
                (0, oF.CS)([p], (t) => {
                  let [e = "inside"] = t;
                  switch (e) {
                    case "inside":
                      return { transform: "translateX(-8px)" };
                    case "outside":
                      return { transform: "translateX(calc(100% + 8px))" };
                    default:
                      return { transform: "translateX(calc(50%))" };
                  }
                })
              ),
              (0, oO.X)({
                right: 0,
                ["&:hover > .".concat(F)]: {
                  "& > svg": { transform: "translateX(2px)" },
                },
              })
            ),
            W = (0, oI.cx)(
              (0, oO.X)({
                display: c ? "flex" : "none",
                justifyContent: "center",
                marginTop: 20,
              }),
              (0, oO.X)(
                (0, oF.CS)([v], (t) => {
                  let [
                    e = {
                      swatch: { hue: 0, saturation: 0, lightness: 0 },
                      alpha: 1,
                    },
                  ] = t;
                  return { color: (0, oj.U)(e) };
                })
              )
            );
          return (0, o.jsxs)("div", {
            ref: e,
            className: (0, oI.cx)(
              (0, oO.X)({
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }),
              n,
              r,
              (0, oO.X)({ "&:focus": { outline: 0 } })
            ),
            tabIndex: -1,
            onKeyDown: (t) => {
              switch (t.key) {
                case "ArrowRight":
                  D(1);
                  break;
                case "ArrowLeft":
                  D(-1);
              }
            },
            children: [
              (0, o.jsxs)("div", {
                className: (0, oO.X)({ position: "relative", height: "100%" }),
                children: [
                  (0, o.jsx)("div", {
                    className: R,
                    children: (0, o.jsx)(rG.div, {
                      ...j(),
                      className: B,
                      animate: L,
                      children: (0, o.jsx)(rG.div, {
                        className: I,
                        animate: { x: "".concat(-(100 / A) * E, "%") },
                        transition: {
                          x: {
                            type: "tween",
                            ease: [0.165, 0.84, 0.44, 1],
                            duration: 0.5,
                          },
                        },
                        children: i.map((t) => {
                          let { props: e, key: i } = t;
                          return (0, o.jsx)(
                            rG.div,
                            {
                              id: i,
                              className: O,
                              onMouseDown: (t) => t.preventDefault(),
                              onClick: (t) => {
                                0 !== T.current && t.preventDefault();
                              },
                              children: (0, o.jsx)(oB.default, {
                                width: [
                                  {
                                    deviceId: (0, oN.N4)(w).id,
                                    value: { value: 100, unit: "%" },
                                  },
                                ],
                                file: e.file,
                                altText: e.altText,
                                link: e.link,
                                border: x,
                                borderRadius: b,
                              }),
                            },
                            i
                          );
                        }),
                      }),
                    }),
                  }),
                  (0, o.jsx)("div", {
                    onClick: () => D(-1),
                    className: U,
                    hidden: !d || 0 === V,
                    children: (0, o.jsx)("div", {
                      className: F,
                      children: (0, o.jsx)(oX, {}),
                    }),
                  }),
                  (0, o.jsx)("div", {
                    onClick: () => D(1),
                    className: X,
                    hidden: !d || _,
                    children: (0, o.jsx)("div", {
                      className: F,
                      children: (0, o.jsx)(oW, {}),
                    }),
                  }),
                ],
              }),
              (0, o.jsx)("div", {
                className: W,
                children: Array.from({ length: k }).map((t, e) =>
                  (0, o.jsx)(
                    oY,
                    { active: e === V, onClick: () => D(e - V) },
                    e
                  )
                ),
              }),
            ],
          });
        });
      var oz = o$;
      function oY(t) {
        let { className: e, active: i, ...n } = t;
        return (0, o.jsx)("div", {
          ...n,
          className: (0, oI.cx)(
            (0, oO.X)({
              position: "relative",
              margin: "0 6px",
              borderRadius: "50%",
              cursor: "pointer",
              width: 16,
              height: 16,
              "&::before, &::after": {
                content: '""',
                position: "absolute",
                top: "50%",
                left: "50%",
                display: "block",
                borderRadius: "50%",
                transition: "all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              },
              "&::before": {
                boxShadow: "0 0 0 2px currentColor",
                transform: "translate3d(-50%, -50%, 0)",
                width: i ? 16 : 10,
                height: i ? 16 : 10,
              },
              "&::after": {
                background: "currentColor",
                transform: "translate3d(-50%, -50%, 0) scale(".concat(
                  i ? 1 : 0,
                  ")"
                ),
                width: 10,
                height: 10,
              },
              "&:hover::after": {
                transform: "translate3d(-50%, -50%, 0) scale(".concat(
                  i ? 1 : 0,
                  ")"
                ),
              },
            }),
            e
          ),
        });
      }
    },
    7696: function (t, e, i) {
      i.r(e),
        i.d(e, {
          default: function () {
            return b;
          },
        });
      var n = i(7458),
        r = i(2983),
        s = i(5216),
        o = i.n(s),
        a = i(8358),
        l = i(5509),
        u = i(4301),
        h = i(1458),
        c = i(4483),
        d = i(8245),
        p = i(6809),
        m = i(9417),
        f = i(9557),
        v = i(8051);
      let g = o();
      function y(t, e) {
        let i = t.find((t) => null == t.maxWidth),
          n = i && e && (0, a.v6)(t, e, i.id),
          r =
            null == n || "px" !== n.value.unit
              ? "100vw"
              : "".concat(n.value.value, "px");
        return t
          .map((i) => {
            let n = (0, a.v6)(t, e, i.id);
            return null == n || null == i.maxWidth || "px" !== n.value.unit
              ? null
              : "(max-width: "
                  .concat(i.maxWidth, "px) ")
                  .concat(Math.min(i.maxWidth, n.value.value), "px");
          })
          .filter((t) => null != t)
          .reduce((t, e) => "".concat(e, ", ").concat(t), r);
      }
      let x = (0, r.forwardRef)(function (t, e) {
        let {
            id: i,
            width: s,
            margin: a,
            padding: x,
            file: b,
            border: w,
            borderRadius: P,
            altText: S,
            link: T,
            opacity: E,
            boxShadow: A,
            placeholder: C = l._.image,
            className: M,
            priority: k,
          } = t,
          V = (0, v.EQ)(b)
            .with(v.P.string, (t) => t)
            .with({ type: "makeswift-file", version: 1 }, (t) => t.id)
            .otherwise(() => null),
          _ = (0, p.TR)(V),
          D = (0, v.EQ)([b, _])
            .with([v.P.any, v.P.not(v.P.nullish)], (t) => {
              let [, e] = t;
              return e.publicUrl;
            })
            .with([{ type: "external-file", version: 1 }, v.P.any], (t) => {
              let [e] = t;
              return e.url;
            })
            .otherwise(() => C.src),
          L = (0, v.EQ)([b, _, D])
            .with(
              [
                {
                  type: "external-file",
                  version: 1,
                  width: v.P.number,
                  height: v.P.number,
                },
                v.P.any,
                v.P.any,
              ],
              (t) => {
                let [e] = t;
                return { width: e.width, height: e.height };
              }
            )
            .with([v.P.any, v.P.not(v.P.nullish), v.P.any], (t) => {
              let [, e] = t;
              return e.dimensions;
            })
            .with([v.P.any, v.P.any, C.src], () => C.dimensions)
            .otherwise(() => null),
          [j, R] = (0, r.useState)(null),
          B = (0, f.k)();
        (0, r.useEffect)(() => {
          if (L) return;
          let t = !1;
          return (
            new Promise((t, e) => {
              let i = new Image();
              (i.onload = () => t(i)), (i.onerror = e), (i.src = D);
            })
              .then((e) => {
                t || R({ width: e.naturalWidth, height: e.naturalHeight });
              })
              .catch(console.error),
            () => {
              t = !0;
            }
          );
        }, [L, D]);
        let O = null != L ? L : j,
          I = T ? u.r : "div",
          F = (0, h.cx)(
            (0, c.X)({ lineHeight: 0, overflow: "hidden" }),
            (0, c.X)((0, d.NB)(s, null == O ? void 0 : O.width)),
            (0, c.X)(
              (0, d.CS)([E], (t) => {
                let [e = 1] = t;
                return { opacity: e };
              })
            ),
            a,
            x,
            w,
            P,
            A,
            M
          );
        return O
          ? (0, n.jsx)(I, {
              link: T,
              ref: e,
              id: i,
              className: F,
              children:
                m.c < 13
                  ? (0, n.jsx)(g, {
                      layout: "responsive",
                      src: D,
                      sizes: y(B, s),
                      alt: S,
                      width: O.width,
                      height: O.height,
                      priority: k,
                    })
                  : (0, n.jsx)(o(), {
                      src: D,
                      priority: k,
                      sizes: y(B, s),
                      alt: null != S ? S : "",
                      width: O.width,
                      height: O.height,
                      style: { width: "100%", height: "auto" },
                    }),
            })
          : null;
      });
      var b = x;
    },
    8966: function (t, e, i) {
      i.d(e, {
        a: function () {
          return l;
        },
      });
      var n = i(3576),
        r = i(2983),
        s = i(8358),
        o = i(9557);
      let a = (t) =>
        t.map((t) => ({ id: t.id, query: (0, s.PR)(t).replace("@media", "") }));
      function l(t) {
        let e = (0, o.k)(),
          i = (0, s.N4)(e).id,
          l = (0, r.useCallback)(
            (t) => {
              let i = a(e).map((e) => {
                let i = window.matchMedia(e.query);
                return (
                  i.addEventListener("change", t),
                  () => i.removeEventListener("change", t)
                );
              });
              return () => i.forEach((t) => t());
            },
            [e]
          ),
          u = () => {
            var n;
            return null === (n = (0, s.v6)(e, t, i)) || void 0 === n
              ? void 0
              : n.value;
          };
        return (0, n.useSyncExternalStore)(
          l,
          function () {
            var n;
            let r = a(e).reduce(
              (t, e) => (window.matchMedia(e.query).matches ? e.id : t),
              i
            );
            return null === (n = (0, s.v6)(e, t, r)) || void 0 === n
              ? void 0
              : n.value;
          },
          u
        );
      }
    },
    4301: function (t, e, i) {
      i.d(e, {
        r: function () {
          return h;
        },
      });
      var n = i(7458),
        r = i(2983),
        s = i(2746),
        o = i(7894),
        a = i.n(o),
        l = i(7136),
        u = i(6809);
      let h = (0, r.forwardRef)(function (t, e) {
        var i;
        let r,
          o,
          h,
          c,
          { link: d, onClick: p = () => {}, ...m } = t,
          f = d && "OPEN_PAGE" === d.type ? d.payload.pageId : null,
          v = (0, u._h)(null != f ? f : null),
          g =
            (null == d ? void 0 : d.type) === "SCROLL_TO_ELEMENT"
              ? null === (i = d.payload.elementIdConfig) || void 0 === i
                ? void 0
                : i.elementKey
              : null,
          y = (0, l.s)(g);
        if (d)
          switch (d.type) {
            case "OPEN_PAGE":
              v && ((r = !0), (o = "/".concat(v.pathname))),
                (h = d.payload.openInNewTab ? "_blank" : "_self");
              break;
            case "OPEN_URL":
              (r = !0),
                (o = d.payload.url),
                (h = d.payload.openInNewTab ? "_blank" : "_self");
              break;
            case "SEND_EMAIL": {
              r = !1;
              let { to: t, subject: e = "", body: i = "" } = d.payload;
              null != t &&
                (o = "mailto:"
                  .concat(t, "?subject=")
                  .concat(e, "&body=")
                  .concat(i));
              break;
            }
            case "CALL_PHONE":
              (r = !1), (o = "tel:".concat(d.payload.phoneNumber));
              break;
            case "SCROLL_TO_ELEMENT":
              (r = !1),
                (o = "#".concat(null != y ? y : "")),
                (c = d.payload.block);
              break;
            default:
              throw RangeError('Invalid link type "'.concat(d.type, '."'));
          }
        function x(t) {
          if ((p(t), !t.defaultPrevented)) {
            if (t.currentTarget.isContentEditable) return t.preventDefault();
            if (d && "SCROLL_TO_ELEMENT" === d.type) {
              let e;
              try {
                null != o &&
                  (e = new URL("http://www.example.com/".concat(o)).hash);
              } catch (t) {
                console.error("Link received invalid href: ".concat(o), t);
              }
              if (null != o && null != e && o === e) {
                t.preventDefault();
                let i = t.view;
                (0, s.Z)(i.document.querySelector(e), {
                  behavior: "smooth",
                  block: c,
                }),
                  i.location.hash !== e && i.history.pushState({}, "", e);
              }
            }
          }
        }
        return r && null != o
          ? (0, n.jsx)(a(), {
              ...m,
              ref: e,
              target: h,
              onClick: x,
              href: o,
              legacyBehavior: !1,
            })
          : (0, n.jsx)("a", { ...m, ref: e, href: o, target: h, onClick: x });
      });
    },
    5509: function (t, e, i) {
      i.d(e, {
        _: function () {
          return n;
        },
      });
      let n = {
        image: {
          src: "data:image/svg+xml,%3Csvg width='360' height='240' viewBox='0 0 360 240' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M0 0H360V240H0V0Z' fill='%23A1A8C2' fill-opacity='0.18'/%3E%3Cpath d='M260 59C260 78.33 244.33 94 225 94C205.67 94 190 78.33 190 59C190 39.67 205.67 24 225 24C244.33 24 260 39.67 260 59Z' fill='%23A1A8C2' fill-opacity='0.25'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M319 250H417L291.485 124.485C286.799 119.799 279.201 119.799 274.515 124.485L234 165L319 250Z' fill='%23A1A8C2' fill-opacity='0.25'/%3E%3Cpath d='M311 250L-89 250L102.515 58.4853C107.201 53.799 114.799 53.799 119.485 58.4853L311 250Z' fill='%23A1A8C2' fill-opacity='0.25'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Cpath d='M0 0H360V240H0V0Z' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
          dimensions: { width: 360, height: 240 },
        },
        video: {
          src: "data:image/svg+xml,%3Csvg width='712' height='400' viewBox='0 0 712 400' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M712 0H0V400H712V0ZM356 240C378.091 240 396 222.091 396 200C396 177.909 378.091 160 356 160C333.909 160 316 177.909 316 200C316 222.091 333.909 240 356 240Z' fill='%23A1A8C2' fill-opacity='0.18'/%3E%3Cpath d='M344 216.503V183.497C344 181.95 345.681 180.989 347.014 181.773L375.069 198.276C376.384 199.049 376.384 200.951 375.069 201.724L347.014 218.227C345.681 219.011 344 218.05 344 216.503Z' fill='%23A1A8C2' fill-opacity='0.4'/%3E%3C/svg%3E%0A",
          dimensions: { width: 712, height: 400 },
        },
      };
    },
  },
]);
