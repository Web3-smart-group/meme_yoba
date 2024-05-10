"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [260, 675, 696],
  {
    8675: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        });
      var a = n(7458),
        l = n(2983),
        r = n(3733),
        o = n.n(r),
        i = n(6829),
        c = n(4301),
        s = n(4483),
        d = n(8245),
        u = n(1458);
      let h = (0, l.forwardRef)(function (e, t) {
        let {
            as: n,
            id: l,
            children: r,
            link: h,
            variant: x,
            shape: p,
            size: f,
            textColor: g,
            color: w,
            textStyle: m,
            width: v,
            margin: b,
            className: y,
            ...j
          } = e,
          C = null != n ? n : c.r;
        return (0, a.jsx)(C, {
          ...j,
          ref: t,
          id: l,
          className: (0, u.cx)(
            (0, s.X)({
              display: "table",
              border: 0,
              outline: 0,
              userSelect: "none",
              cursor: "pointer",
              fontFamily: "inherit",
              textDecoration: "none",
              textAlign: "center",
            }),
            (0, s.X)((0, d.NB)(v, "auto")),
            b,
            (0, s.X)(
              (0, d.CS)([x, p, f, g, w], (e) => {
                let [
                    t = "flat",
                    n = "rounded",
                    a = "medium",
                    l = {
                      swatch: { hue: 0, saturation: 0, lightness: 100 },
                      alpha: 1,
                    },
                    r = {
                      swatch: { hue: 0, saturation: 0, lightness: 0 },
                      alpha: 1,
                    },
                  ] = e,
                  c = {
                    value: { small: 12, medium: 14, large: 18 }[a],
                    unit: "px",
                  };
                return {
                  color: (0, i.U)(l),
                  borderRadius: "".concat(
                    { square: 0, rounded: 4, pill: 500 }[n],
                    "px"
                  ),
                  padding: "".concat(
                    {
                      small: "8px 12px",
                      medium: "12px 16px",
                      large: "16px 20px",
                    }[a]
                  ),
                  fontSize: "".concat(c.value).concat(c.unit),
                  ...{
                    flat: {
                      background: (0, i.U)(r),
                      border: "none",
                      transition: [
                        "color",
                        "background",
                        "border",
                        "box-shadow",
                      ]
                        .map((e) => "".concat(e, " 0.15s ease-in-out"))
                        .join(", "),
                      ":hover": {
                        background: o()((0, i.U)(r))
                          .darken(0.1)
                          .hex(),
                      },
                      ":active": {
                        background: o()((0, i.U)(r))
                          .darken(0.15)
                          .hex(),
                      },
                    },
                    outline: {
                      background: "transparent",
                      boxShadow: "inset 0 0 0 2px ".concat((0, i.U)(r)),
                      transition: ["color", "background", "box-shadow"]
                        .map((e) => "".concat(e, " 0.15s ease-in-out"))
                        .join(", "),
                      ":hover": {
                        boxShadow: "inset 0 0 0 2px ".concat(
                          o()((0, i.U)(r))
                            .darken(0.1)
                            .hex()
                        ),
                        color: o()((0, i.U)(r))
                          .darken(0.1)
                          .hex(),
                      },
                      ":active": {
                        boxShadow: "inset 0 0 0 2px ".concat(
                          o()((0, i.U)(r))
                            .darken(0.15)
                            .hex()
                        ),
                        color: o()((0, i.U)(r))
                          .darken(0.15)
                          .hex(),
                      },
                    },
                    shadow: {
                      background: (0, i.U)(r),
                      boxShadow:
                        "0 2px 4px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.2)",
                      transition: ["transform", "box-shadow"]
                        .map((e) => "".concat(e, " 0.18s"))
                        .join(", "),
                      ":hover": {
                        boxShadow:
                          "0 10px 25px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.3)",
                        transform: "translateY(-1px)",
                      },
                      ":active": {
                        boxShadow:
                          "0 4px 12px rgba(0, 0, 0, 0.15), 0 4px 6px -3px rgba(0, 0, 0, 0.3)",
                        transform: "translateY(0px)",
                      },
                    },
                    clear: {
                      background: "transparent",
                      border: "none",
                      ":hover": {
                        color: o()((0, i.U)(l))
                          .alpha(0.5)
                          .toString(),
                      },
                      ":active": {
                        color: o()((0, i.U)(l))
                          .alpha(0.6)
                          .toString(),
                      },
                    },
                    blocky: {
                      background: (0, i.U)(r),
                      borderWidth: 1,
                      borderStyle: "solid",
                      borderColor: o()((0, i.U)(r))
                        .darken(0.25)
                        .hex(),
                      boxShadow: "0 4px ".concat(
                        o()((0, i.U)(r))
                          .darken(0.25)
                          .hex()
                      ),
                      transition: ["transform", "box-shadow"]
                        .map((e) => "".concat(e, " 0.1s"))
                        .join(", "),
                      ":hover": {
                        transform: "translateY(2px)",
                        boxShadow: "0 2px ".concat(
                          o()((0, i.U)(r))
                            .darken(0.25)
                            .hex()
                        ),
                      },
                      ":active": {
                        transform: "translateY(4px)",
                        boxShadow: "0 0 ".concat(
                          o()((0, i.U)(r))
                            .darken(0.25)
                            .hex()
                        ),
                      },
                    },
                    bubbly: {
                      background:
                        "linear-gradient(\n                      180deg,\n                      "
                          .concat(
                            o()((0, i.U)(r))
                              .lighten(0.05)
                              .hex(),
                            ",\n                      "
                          )
                          .concat(
                            o()((0, i.U)(r))
                              .darken(0.3)
                              .saturate(0.05)
                              .hex(),
                            "\n                    )"
                          ),
                      position: "relative",
                      zIndex: "0",
                      ":before": {
                        position: "absolute",
                        content: '""',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        zIndex: "-1",
                        borderRadius: "inherit",
                        background:
                          "linear-gradient(\n                        180deg,\n                        "
                            .concat(
                              o()((0, i.U)(r))
                                .lighten(0.2)
                                .hex(),
                              ",\n                        "
                            )
                            .concat(
                              o()((0, i.U)(r))
                                .darken(0.2)
                                .saturate(0.05)
                                .hex(),
                              "\n                      )"
                            ),
                        opacity: "0",
                        transition: "opacity 0.15s",
                      },
                      ":hover": { ":before": { opacity: "1" } },
                      ":active": { ":before": { opacity: "0.25" } },
                    },
                    skewed: {
                      position: "relative",
                      zIndex: "0",
                      ":before": {
                        position: "absolute",
                        content: '""',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        zIndex: "-1",
                        background: (0, i.U)(r),
                        transform: "skewX(-12deg)",
                        borderRadius: "inherit",
                        transition:
                          "transform 0.2s cubic-bezier(0.25, 0, 0.25, 1.75)",
                      },
                      ":hover:before": { transform: "skew(0deg)" },
                      ":active:before": { transform: "skew(-8deg)" },
                    },
                  }[t],
                };
              })
            ),
            (0, s.X)((0, d.QG)(m)),
            y
          ),
          link: h,
          children: null == r ? "Button Text" : r,
        });
      });
      var x = h;
    },
    7696: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return b;
          },
        });
      var a = n(7458),
        l = n(2983),
        r = n(5216),
        o = n.n(r),
        i = n(8358),
        c = n(5509),
        s = n(4301),
        d = n(1458),
        u = n(4483),
        h = n(8245),
        x = n(6809),
        p = n(9417),
        f = n(9557),
        g = n(8051);
      let w = o();
      function m(e, t) {
        let n = e.find((e) => null == e.maxWidth),
          a = n && t && (0, i.v6)(e, t, n.id),
          l =
            null == a || "px" !== a.value.unit
              ? "100vw"
              : "".concat(a.value.value, "px");
        return e
          .map((n) => {
            let a = (0, i.v6)(e, t, n.id);
            return null == a || null == n.maxWidth || "px" !== a.value.unit
              ? null
              : "(max-width: "
                  .concat(n.maxWidth, "px) ")
                  .concat(Math.min(n.maxWidth, a.value.value), "px");
          })
          .filter((e) => null != e)
          .reduce((e, t) => "".concat(t, ", ").concat(e), l);
      }
      let v = (0, l.forwardRef)(function (e, t) {
        let {
            id: n,
            width: r,
            margin: i,
            padding: v,
            file: b,
            border: y,
            borderRadius: j,
            altText: C,
            link: k,
            opacity: S,
            boxShadow: E,
            placeholder: L = c._.image,
            className: X,
            priority: N,
          } = e,
          U = (0, g.EQ)(b)
            .with(g.P.string, (e) => e)
            .with({ type: "makeswift-file", version: 1 }, (e) => e.id)
            .otherwise(() => null),
          R = (0, x.TR)(U),
          P = (0, g.EQ)([b, R])
            .with([g.P.any, g.P.not(g.P.nullish)], (e) => {
              let [, t] = e;
              return t.publicUrl;
            })
            .with([{ type: "external-file", version: 1 }, g.P.any], (e) => {
              let [t] = e;
              return t.url;
            })
            .otherwise(() => L.src),
          A = (0, g.EQ)([b, R, P])
            .with(
              [
                {
                  type: "external-file",
                  version: 1,
                  width: g.P.number,
                  height: g.P.number,
                },
                g.P.any,
                g.P.any,
              ],
              (e) => {
                let [t] = e;
                return { width: t.width, height: t.height };
              }
            )
            .with([g.P.any, g.P.not(g.P.nullish), g.P.any], (e) => {
              let [, t] = e;
              return t.dimensions;
            })
            .with([g.P.any, g.P.any, L.src], () => L.dimensions)
            .otherwise(() => null),
          [_, M] = (0, l.useState)(null),
          Z = (0, f.k)();
        (0, l.useEffect)(() => {
          if (A) return;
          let e = !1;
          return (
            new Promise((e, t) => {
              let n = new Image();
              (n.onload = () => e(n)), (n.onerror = t), (n.src = P);
            })
              .then((t) => {
                e || M({ width: t.naturalWidth, height: t.naturalHeight });
              })
              .catch(console.error),
            () => {
              e = !0;
            }
          );
        }, [A, P]);
        let I = null != A ? A : _,
          H = k ? s.r : "div",
          z = (0, d.cx)(
            (0, u.X)({ lineHeight: 0, overflow: "hidden" }),
            (0, u.X)((0, h.NB)(r, null == I ? void 0 : I.width)),
            (0, u.X)(
              (0, h.CS)([S], (e) => {
                let [t = 1] = e;
                return { opacity: t };
              })
            ),
            i,
            v,
            y,
            j,
            E,
            X
          );
        return I
          ? (0, a.jsx)(H, {
              link: k,
              ref: t,
              id: n,
              className: z,
              children:
                p.c < 13
                  ? (0, a.jsx)(w, {
                      layout: "responsive",
                      src: P,
                      sizes: m(Z, r),
                      alt: C,
                      width: I.width,
                      height: I.height,
                      priority: N,
                    })
                  : (0, a.jsx)(o(), {
                      src: P,
                      priority: N,
                      sizes: m(Z, r),
                      alt: null != C ? C : "",
                      width: I.width,
                      height: I.height,
                      style: { width: "100%", height: "auto" },
                    }),
            })
          : null;
      });
      var b = v;
    },
    8260: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return B;
          },
        });
      var a = n(7458),
        l = n(2983);
      function r(e) {
        return (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 28,
          height: 28,
          ...e,
          children: (0, a.jsx)("path", {
            d: "M27 15H1a1 1 0 0 1-1-1 1 1 0 0 1 1-1h26a1 1 0 0 1 1 1 1 1 0 0 1-1 1m0-10H1a1 1 0 0 0-1 1 1 1 0 0 0 1 1h26a1 1 0 0 0 1-1 1 1 0 0 0-1-1m0 16H1a1 1 0 0 0-1 1 1 1 0 0 0 1 1h26a1 1 0 0 0 1-1 1 1 0 0 0-1-1",
          }),
        });
      }
      var o = n(7612),
        i = n(7696),
        c = n(8675),
        s = n(4483);
      function d(e) {
        let { width: t, button: n } = e;
        return (0, a.jsx)("div", {
          className: (0, s.X)({
            width: t,
            height: !0 === n ? 32 : 8,
            backgroundColor: "#a1a8c2",
            borderRadius: !0 === n ? 6 : 2,
            opacity: 0.4,
          }),
        });
      }
      let u = [
        { width: 50 },
        { width: 70 },
        { width: 60 },
        { width: 80, button: !0 },
      ];
      function h(e) {
        let { gutter: t } = e;
        return (0, a.jsx)(a.Fragment, {
          children: u.map((e, n) =>
            (0, a.jsx)(
              o.Z,
              {
                gutter: t,
                first: 0 === n,
                last: n === u.length - 1,
                children: (0, a.jsx)(d, { ...e }),
              },
              n
            )
          ),
        });
      }
      var x = n(278);
      function p(e) {
        return (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 8,
          height: 8,
          ...e,
          children: (0, a.jsx)("path", {
            d: "M1 2a1 1 0 0 0-.707 1.707l3 3a1 1 0 0 0 1.414 0l3-3A1 1 0 0 0 7 2z",
          }),
        });
      }
      function f(e) {
        return (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 8,
          height: 8,
          ...e,
          children: (0, a.jsx)("path", {
            d: "M4 0a1 1 0 0 0-1 1v2H1a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V5h2a1 1 0 0 0 0-2H5V1a1 1 0 0 0-1-1",
          }),
        });
      }
      function g(e) {
        return (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 8,
          height: 8,
          ...e,
          children: (0, a.jsx)("path", {
            d: "M5 1a1 1 0 0 0-2 0v3.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0-1.414-1.414L5 4.586z",
          }),
        });
      }
      function w(e) {
        return (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 8,
          height: 8,
          ...e,
          children: (0, a.jsx)("path", {
            fillRule: "evenodd",
            d: "M.293 2.293a1 1 0 0 1 1.414 0L4 4.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414",
            clipRule: "evenodd",
          }),
        });
      }
      var m = n(6829),
        v = n(3811),
        b = n(4301),
        y = n(8582),
        j = n(1458),
        C = n(8245);
      function k() {
        let e = (0, x.Z)([
          "\n  0% {\n      opacity: 0;\n      transform: rotateX(-20deg);\n  }\n  100% {\n      opacity: 1;\n      transform: none;\n  }\n",
        ]);
        return (
          (k = function () {
            return e;
          }),
          e
        );
      }
      let S = "drop-down-menu";
      function E(e) {
        let { className: t, position: n, ...l } = e;
        return (0, a.jsx)("div", {
          ...l,
          className: (0, j.cx)(
            S,
            (0, s.X)({
              position: "absolute",
              top: "100%",
              left: "left" === n ? 0 : "auto",
              right: "right" === n ? 0 : "auto",
              background: "#fff",
              margin: 0,
              padding: "8px 0",
              borderRadius: 4,
              boxShadow: "0 3px 10px rgba(0, 0, 0, 0.15)",
              width: 200,
              zIndex: 99,
              listStyle: "none",
              overflow: "hidden",
              transformOrigin: "50% 0",
              willChange: "transform, opacity",
              transformStyle: "preserve-3d",
              display: "none",
            }),
            t
          ),
        });
      }
      let L = (0, j.F4)(k()),
        X = (0, l.forwardRef)(function (e, t) {
          let { className: n, ...l } = e;
          return (0,
          a.jsx)("div", { ...l, ref: t, className: (0, j.cx)((0, s.X)({ position: "relative", ["&:hover .".concat(S)]: { display: "block", animation: "".concat(L, " 0.25s") } }), n) });
        });
      function N(e) {
        let { className: t, color: n, textStyle: l, ...r } = e,
          o = (0, v.S)(n);
        return (0, a.jsx)(b.r, {
          ...r,
          className: (0, j.cx)(
            (0, s.X)({
              display: "block",
              textDecoration: "none",
              lineHeight: 1.4,
              padding: "8px 16px",
              color: "black",
              backgroundColor: "transparent",
              transition: "background-color 0.2s",
            }),
            (0, s.X)((0, C.QG)(l)),
            (0, s.X)(
              (0, C.CS)([o, l], (e) => {
                let [t, n = {}] = e,
                  a = n.fontSize || { value: 14, unit: "px" },
                  l = null == n.fontWeight ? "normal" : n.fontWeight,
                  r = n.fontStyle || [],
                  o = null == n.letterSpacing ? null : n.letterSpacing,
                  i = n.textTransform || [];
                return {
                  color: null == t ? "black" : (0, m.U)(t),
                  fontSize: "".concat(a.value).concat(a.unit),
                  fontWeight: l,
                  fontStyle: r.includes("italic") ? "italic" : "normal",
                  letterSpacing: null == o ? "normal" : "".concat(o, "px"),
                  textTransform: i.includes("uppercase") ? "uppercase" : "none",
                };
              })
            ),
            (0, s.X)({ "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" } }),
            t
          ),
        });
      }
      function U(e) {
        let {
            label: t,
            caret: n = "caret",
            links: r = [],
            textColor: o,
            color: i,
            ...s
          } = e,
          d = (0, l.useRef)(null),
          [u, h] = (0, l.useState)("left");
        return (
          (0, y.L)(() => {
            d.current &&
            d.current.ownerDocument.defaultView.innerWidth <
              d.current.offsetLeft + 200
              ? h("right")
              : h("left");
          }, [h]),
          (0, a.jsxs)(X, {
            ref: d,
            children: [
              (0, a.jsx)(c.default, {
                ...s,
                textColor: (0, v.S)(o),
                color: (0, v.S)(i),
                children: (0, a.jsxs)("div", {
                  style: { display: "flex", alignItems: "center" },
                  children: [
                    (0, a.jsx)("span", {
                      style: { marginRight: 6 },
                      children: t,
                    }),
                    (0, a.jsxs)("span", {
                      style: { display: "inline-flex", fill: "currentColor" },
                      children: [
                        "caret" === n && (0, a.jsx)(p, {}),
                        "plus" === n && (0, a.jsx)(f, {}),
                        "arrow-down" === n && (0, a.jsx)(g, {}),
                        "chevron-down" === n && (0, a.jsx)(w, {}),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(E, {
                position: u,
                children: r.map((e) => {
                  let { id: t, payload: n } = e;
                  return (0, l.createElement)(N, { ...n, key: t }, n.label);
                }),
              }),
            ],
          })
        );
      }
      function R(e) {
        return (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 16,
          height: 16,
          ...e,
          children: (0, a.jsx)("path", {
            fillRule: "evenodd",
            d: "M13.707 3.707a1 1 0 0 0-1.414-1.414L8 6.586 3.707 2.293a1 1 0 0 0-1.414 1.414L6.586 8l-4.293 4.293a1 1 0 1 0 1.414 1.414L8 9.414l4.293 4.293a1 1 0 0 0 1.414-1.414L9.414 8z",
            clipRule: "evenodd",
          }),
        });
      }
      function P(e) {
        let { className: t, open: n, ...l } = e;
        return (0, a.jsx)("div", {
          ...l,
          className: (0, j.cx)(
            (0, s.X)({
              display: n ? "flex" : "none",
              flexDirection: "column",
              padding: 8,
            }),
            t
          ),
        });
      }
      function A(e) {
        let { className: t, ...n } = e;
        return (0, a.jsx)(c.default, {
          ...n,
          className: (0, j.cx)((0, s.X)({ margin: "8px 0" }), t),
        });
      }
      function _(e) {
        let { color: t, className: n, textStyle: l, ...r } = e,
          o = (0, v.S)(t);
        return (0, a.jsx)(b.r, {
          ...r,
          className: (0, j.cx)(
            (0, s.X)({
              textDecoration: "none",
              lineHeight: 1.4,
              padding: "8px 16px",
              color: "black",
            }),
            (0, s.X)((0, C.QG)(l)),
            (0, s.X)(
              (0, C.CS)([o], (e) => {
                let [t] = e;
                return { color: null == t ? "black" : (0, m.U)(t) };
              })
            ),
            n
          ),
        });
      }
      function M(e) {
        let {
            label: t,
            caret: n,
            links: r = [],
            onClose: o = () => {},
            color: i,
            textColor: c,
            ...s
          } = e,
          [d, u] = (0, l.useState)(!1);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(A, {
              ...s,
              textColor: (0, v.S)(c),
              color: (0, v.S)(i),
              onPointerDown: () => u((e) => !e),
              children: (0, a.jsxs)("div", {
                style: { display: "flex", alignItems: "center" },
                children: [
                  (0, a.jsx)("span", {
                    style: { marginRight: 6 },
                    children: t,
                  }),
                  (0, a.jsx)("span", {
                    style: { display: "inline-flex", fill: "currentColor" },
                    children: (0, a.jsxs)(a.Fragment, {
                      children: [
                        "caret" === n && (0, a.jsx)(p, {}),
                        "plus" === n && (0, a.jsx)(f, {}),
                        "arrow-down" === n && (0, a.jsx)(g, {}),
                        "chevron-down" === n && (0, a.jsx)(w, {}),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, a.jsx)(P, {
              open: d,
              children: r.map((e) => {
                let { id: t, payload: n } = e;
                return (0, l.createElement)(
                  _,
                  { ...n, key: t, onClick: o },
                  n.label
                );
              }),
            }),
          ],
        });
      }
      function Z(e) {
        let { className: t, textColor: n, color: l, ...r } = e;
        return (0, a.jsx)(c.default, {
          ...r,
          className: (0, j.cx)((0, s.X)({ margin: "8px 0" }), t),
          textColor: (0, v.S)(n),
          color: (0, v.S)(l),
        });
      }
      function I(e) {
        let {
          className: t,
          animation: n,
          backgroundColor: l,
          open: r,
          ...o
        } = e;
        return (0, a.jsx)("div", {
          ...o,
          className: (0, j.cx)(
            (0, s.X)({
              position: "fixed",
              flexDirection: "column",
              width: "100%",
              padding: "40px 15px",
              transition: "transform 300ms ease-in-out",
              overflowY: "auto",
              zIndex: 9999,
              maxWidth: 575,
            }),
            (0, s.X)(
              (0, C.CS)([n, l], (e) => {
                let [t, n] = e;
                return null == t
                  ? { display: "none" }
                  : {
                      display: "flex",
                      backgroundColor: null == n ? "black" : (0, m.U)(n),
                      transform: r
                        ? "translate3d(0,0,0)"
                        : "translate3d(".concat(
                            { coverRight: "", coverLeft: "-" }[t],
                            "100%, 0, 0)"
                          ),
                      ...{
                        coverRight: { top: 0, bottom: 0, right: 0 },
                        coverLeft: { top: 0, bottom: 0, left: 0 },
                      }[t],
                    };
              })
            ),
            t
          ),
        });
      }
      function H(e) {
        let { className: t, color: n, ...l } = e;
        return (0, a.jsx)("button", {
          ...l,
          className: (0, j.cx)(
            (0, s.X)({
              position: "absolute",
              top: 15,
              right: 15,
              padding: 0,
              border: 0,
              outline: 0,
              background: "none",
              fill: "currentcolor",
            }),
            (0, s.X)(
              (0, C.CS)([n], (e) => {
                let [t] = e;
                return {
                  color: null == t ? "rgba(161, 168, 194, 0.5)" : (0, m.U)(t),
                };
              })
            ),
            t
          ),
        });
      }
      function z(e) {
        let {
          animation: t,
          backgroundColor: n,
          open: r = !1,
          closeIconColor: o,
          links: i = [],
          onClose: c = () => {},
        } = e;
        return (0, a.jsxs)(I, {
          animation: t,
          backgroundColor: n,
          open: r,
          children: [
            (0, a.jsx)(H, {
              color: o,
              onClick: c,
              children: (0, a.jsx)(R, {}),
            }),
            (0, a.jsx)("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexShrink: 0,
              },
              children: i.map((e) =>
                (0, a.jsxs)(
                  l.Fragment,
                  {
                    children: [
                      "button" === e.type &&
                        (0, a.jsx)(Z, {
                          ...e.payload,
                          onClick: c,
                          children: e.payload.label,
                        }),
                      "dropdown" === e.type &&
                        (0, a.jsx)(M, { ...e.payload, onClose: c }),
                    ],
                  },
                  e.id
                )
              ),
            }),
          ],
        });
      }
      let O = (0, l.forwardRef)(function (e, t) {
        let {
          className: n,
          width: l,
          margin: r,
          textStyle: o,
          gutter: i,
          ...c
        } = e;
        return (0, a.jsx)("nav", {
          ...c,
          ref: t,
          className: (0, j.cx)(
            (0, s.X)({ display: "flex", alignItems: "center" }),
            l,
            r,
            (0, s.X)((0, C.QG)(o)),
            (0, s.X)(
              (0, C.CS)([i], (e) => {
                let [t = { value: 0, unit: "px" }] = e;
                return { gap: "".concat(t.value).concat(t.unit) };
              })
            ),
            n
          ),
        });
      });
      function T(e) {
        let { className: t, alignment: n, mobileMenuAnimation: l, ...r } = e;
        return (0, a.jsx)("div", {
          ...r,
          className: (0, j.cx)(
            (0, s.X)({ display: "flex", alignItems: "center", flexGrow: 1 }),
            (0, s.X)(
              (0, C.CS)([n, l], (e) => {
                let [t = "flex-end", n] = e;
                return {
                  display: null == n ? "flex" : "none",
                  justifyContent: t,
                };
              })
            ),
            t
          ),
        });
      }
      function V(e) {
        let {
          className: t,
          mobileMenuAnimation: n,
          alignment: l,
          color: r,
          ...o
        } = e;
        return (0, a.jsx)("button", {
          ...o,
          className: (0, j.cx)(
            (0, s.X)({
              display: "none",
              flexGrow: 1,
              alignItems: "center",
              background: "none",
              outline: 0,
              border: 0,
              padding: 0,
              fill: "currentcolor",
            }),
            (0, s.X)(
              (0, C.CS)([n, l, r], (e) => {
                let [t, n = "flex-end", a] = e;
                return {
                  display: null == t ? "none" : "flex",
                  justifyContent: n,
                  color: null == a ? "rgba(161, 168, 194, 0.5)" : (0, m.U)(a),
                };
              })
            ),
            t
          ),
        });
      }
      function D(e) {
        let { textColor: t, color: n, ...l } = e;
        return (0, a.jsx)(c.default, {
          ...l,
          textColor: (0, v.S)(t),
          color: (0, v.S)(n),
        });
      }
      let W = {
          src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='93.12' height='36' viewBox='0 0 93.12 36'%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath d='M18,0A18,18,0,1,1,0,18,18,18,0,0,1,18,0ZM49.36,21.94h6.36V24H46.8V10h2.56Zm9.06.72a4.88,4.88,0,0,1-1.64-3.72,5,5,0,0,1,1.64-3.74,5.57,5.57,0,0,1,7.7,0,5.09,5.09,0,0,1,.26,7.18l-.26.26a5.56,5.56,0,0,1-7.7,0Zm1.68-6a3.39,3.39,0,0,0,0,4.52,3,3,0,0,0,4.24.08l.08-.08a3.39,3.39,0,0,0,0-4.52,3,3,0,0,0-4.24-.08Zm10,10.68,1-1.92a5.28,5.28,0,0,0,3.3,1.22,3.6,3.6,0,0,0,2.32-.72,2.73,2.73,0,0,0,.9-2.26V22.5a3.61,3.61,0,0,1-1.45,1.26,4.35,4.35,0,0,1-2,.46,4.57,4.57,0,0,1-3.58-1.54A5.48,5.48,0,0,1,69.2,18.9a5.42,5.42,0,0,1,1.36-3.74,4.64,4.64,0,0,1,3.62-1.5,4,4,0,0,1,3.44,1.72v-1.5h2.46v9a6.13,6.13,0,0,1-1.43,4.46,5.27,5.27,0,0,1-4,1.44,7.09,7.09,0,0,1-4.53-1.42Zm1.54-8.44a3.4,3.4,0,0,0,.82,2.3,2.72,2.72,0,0,0,2.17.94,3.13,3.13,0,0,0,1.21-.22,2.89,2.89,0,0,0,1-.62,3.08,3.08,0,0,0,.63-1,3.62,3.62,0,0,0,.21-1.3,4,4,0,0,0-.23-1.33,3.3,3.3,0,0,0-.63-1.05,2.74,2.74,0,0,0-1-.68,3.35,3.35,0,0,0-1.25-.24,2.92,2.92,0,0,0-1.2.24,2.58,2.58,0,0,0-.93.67,3,3,0,0,0-.59,1,3.89,3.89,0,0,0-.19,1.31ZM83.8,22.66a4.88,4.88,0,0,1-1.64-3.72A5,5,0,0,1,83.8,15.2a5.57,5.57,0,0,1,7.7,0,5.09,5.09,0,0,1,.26,7.18,3.19,3.19,0,0,1-.26.26,5.56,5.56,0,0,1-7.7,0Zm1.68-6a3.39,3.39,0,0,0,0,4.52,3,3,0,0,0,4.24.08l.08-.08a3.39,3.39,0,0,0,0-4.52,3,3,0,0,0-4.24-.08Z' fill='%23a1a8c2' opacity='0.4' style='isolation: isolate'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A",
          dimensions: { width: 93, height: 36 },
        },
        G = (0, l.forwardRef)(function (e, t) {
          let {
              id: n,
              links: c = [],
              linkTextStyle: s,
              showLogo: d,
              logoFile: u,
              logoWidth: x,
              logoAltText: p,
              logoLink: f,
              alignment: g,
              gutter: w,
              mobileMenuAnimation: m,
              mobileMenuOpenIconColor: v,
              mobileMenuCloseIconColor: b,
              mobileMenuBackgroundColor: y,
              width: j,
              margin: C,
            } = e,
            [k, S] = (0, l.useState)(!1);
          return (0,
          a.jsxs)(O, { ref: t, id: n, width: j, margin: C, textStyle: s, gutter: w, children: [!0 === d && (0, a.jsx)(i.default, { altText: p, file: u, link: f, placeholder: W, width: x }), (0, a.jsxs)("div", { style: { display: "flex", flexGrow: 1, justifyContent: "flex-end" }, children: [(0, a.jsx)(T, { alignment: g, mobileMenuAnimation: m, children: c.length > 0 ? c.map((e, t) => (0, a.jsxs)(o.Z, { gutter: w, first: 0 === t, last: t === c.length - 1, children: ["button" === e.type && (0, a.jsx)(D, { ...e.payload, children: e.payload.label }), "dropdown" === e.type && (0, a.jsx)(U, { ...e.payload })] }, e.id)) : (0, a.jsx)(h, { gutter: w }) }), (0, a.jsx)(V, { alignment: g, color: v, mobileMenuAnimation: m, onClick: () => S(!0), children: (0, a.jsx)(r, {}) }), (0, a.jsx)(z, { animation: m, backgroundColor: y, closeIconColor: b, links: c, onClose: () => S(!1), open: k })] })] });
        });
      var B = G;
    },
    8582: function (e, t, n) {
      n.d(t, {
        L: function () {
          return r;
        },
      });
      var a = n(2983);
      let l = /ServerSideRendering/.test(
          window.navigator && window.navigator.userAgent
        ),
        r = l ? a.useEffect : a.useLayoutEffect;
    },
    7612: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var a = n(7458),
        l = n(1458),
        r = n(4483),
        o = n(8245);
      function i(e) {
        let { className: t, gutter: n, first: i, last: c, ...s } = e;
        return (0, a.jsx)("div", {
          ...s,
          className: (0, l.cx)(
            (0, r.X)(
              (0, o.CS)([n], (e) => {
                let [t = { value: 0, unit: "px" }] = e;
                return {
                  paddingLeft: i
                    ? "0px"
                    : "".concat(t.value / 2).concat(t.unit),
                  paddingRight: c
                    ? "0px"
                    : "".concat(t.value / 2).concat(t.unit),
                };
              })
            ),
            t
          ),
        });
      }
    },
    4301: function (e, t, n) {
      n.d(t, {
        r: function () {
          return d;
        },
      });
      var a = n(7458),
        l = n(2983),
        r = n(2746),
        o = n(7894),
        i = n.n(o),
        c = n(7136),
        s = n(6809);
      let d = (0, l.forwardRef)(function (e, t) {
        var n;
        let l,
          o,
          d,
          u,
          { link: h, onClick: x = () => {}, ...p } = e,
          f = h && "OPEN_PAGE" === h.type ? h.payload.pageId : null,
          g = (0, s._h)(null != f ? f : null),
          w =
            (null == h ? void 0 : h.type) === "SCROLL_TO_ELEMENT"
              ? null === (n = h.payload.elementIdConfig) || void 0 === n
                ? void 0
                : n.elementKey
              : null,
          m = (0, c.s)(w);
        if (h)
          switch (h.type) {
            case "OPEN_PAGE":
              g && ((l = !0), (o = "/".concat(g.pathname))),
                (d = h.payload.openInNewTab ? "_blank" : "_self");
              break;
            case "OPEN_URL":
              (l = !0),
                (o = h.payload.url),
                (d = h.payload.openInNewTab ? "_blank" : "_self");
              break;
            case "SEND_EMAIL": {
              l = !1;
              let { to: e, subject: t = "", body: n = "" } = h.payload;
              null != e &&
                (o = "mailto:"
                  .concat(e, "?subject=")
                  .concat(t, "&body=")
                  .concat(n));
              break;
            }
            case "CALL_PHONE":
              (l = !1), (o = "tel:".concat(h.payload.phoneNumber));
              break;
            case "SCROLL_TO_ELEMENT":
              (l = !1),
                (o = "#".concat(null != m ? m : "")),
                (u = h.payload.block);
              break;
            default:
              throw RangeError('Invalid link type "'.concat(h.type, '."'));
          }
        function v(e) {
          if ((x(e), !e.defaultPrevented)) {
            if (e.currentTarget.isContentEditable) return e.preventDefault();
            if (h && "SCROLL_TO_ELEMENT" === h.type) {
              let t;
              try {
                null != o &&
                  (t = new URL("http://www.example.com/".concat(o)).hash);
              } catch (e) {
                console.error("Link received invalid href: ".concat(o), e);
              }
              if (null != o && null != t && o === t) {
                e.preventDefault();
                let n = e.view;
                (0, r.Z)(n.document.querySelector(t), {
                  behavior: "smooth",
                  block: u,
                }),
                  n.location.hash !== t && n.history.pushState({}, "", t);
              }
            }
          }
        }
        return l && null != o
          ? (0, a.jsx)(i(), {
              ...p,
              ref: t,
              target: d,
              onClick: v,
              href: o,
              legacyBehavior: !1,
            })
          : (0, a.jsx)("a", { ...p, ref: t, href: o, target: d, onClick: v });
      });
    },
    5509: function (e, t, n) {
      n.d(t, {
        _: function () {
          return a;
        },
      });
      let a = {
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
    278: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      function a(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
    },
  },
]);
