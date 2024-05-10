"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [696],
  {
    7696: function (e, t, l) {
      l.r(t),
        l.d(t, {
          default: function () {
            return g;
          },
        });
      var n = l(7458),
        i = l(2983),
        a = l(5216),
        r = l.n(a),
        o = l(8358),
        h = l(5509),
        c = l(4301),
        u = l(1458),
        d = l(4483),
        s = l(8245),
        p = l(6809),
        f = l(9417),
        w = l(9557),
        v = l(8051);
      let C = r();
      function E(e, t) {
        let l = e.find((e) => null == e.maxWidth),
          n = l && t && (0, o.v6)(e, t, l.id),
          i =
            null == n || "px" !== n.value.unit
              ? "100vw"
              : "".concat(n.value.value, "px");
        return e
          .map((l) => {
            let n = (0, o.v6)(e, t, l.id);
            return null == n || null == l.maxWidth || "px" !== n.value.unit
              ? null
              : "(max-width: "
                  .concat(l.maxWidth, "px) ")
                  .concat(Math.min(l.maxWidth, n.value.value), "px");
          })
          .filter((e) => null != e)
          .reduce((e, t) => "".concat(t, ", ").concat(e), i);
      }
      let y = (0, i.forwardRef)(function (e, t) {
        let {
            id: l,
            width: a,
            margin: o,
            padding: y,
            file: g,
            border: m,
            borderRadius: x,
            altText: P,
            link: L,
            opacity: _,
            boxShadow: b,
            placeholder: k = h._.image,
            className: A,
            priority: N,
          } = e,
          M = (0, v.EQ)(g)
            .with(v.P.string, (e) => e)
            .with({ type: "makeswift-file", version: 1 }, (e) => e.id)
            .otherwise(() => null),
          H = (0, p.TR)(M),
          O = (0, v.EQ)([g, H])
            .with([v.P.any, v.P.not(v.P.nullish)], (e) => {
              let [, t] = e;
              return t.publicUrl;
            })
            .with([{ type: "external-file", version: 1 }, v.P.any], (e) => {
              let [t] = e;
              return t.url;
            })
            .otherwise(() => k.src),
          T = (0, v.EQ)([g, H, O])
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
              (e) => {
                let [t] = e;
                return { width: t.width, height: t.height };
              }
            )
            .with([v.P.any, v.P.not(v.P.nullish), v.P.any], (e) => {
              let [, t] = e;
              return t.dimensions;
            })
            .with([v.P.any, v.P.any, k.src], () => k.dimensions)
            .otherwise(() => null),
          [R, Z] = (0, i.useState)(null),
          S = (0, w.k)();
        (0, i.useEffect)(() => {
          if (T) return;
          let e = !1;
          return (
            new Promise((e, t) => {
              let l = new Image();
              (l.onload = () => e(l)), (l.onerror = t), (l.src = O);
            })
              .then((t) => {
                e || Z({ width: t.naturalWidth, height: t.naturalHeight });
              })
              .catch(console.error),
            () => {
              e = !0;
            }
          );
        }, [T, O]);
        let I = null != T ? T : R,
          V = L ? c.r : "div",
          j = (0, u.cx)(
            (0, d.X)({ lineHeight: 0, overflow: "hidden" }),
            (0, d.X)((0, s.NB)(a, null == I ? void 0 : I.width)),
            (0, d.X)(
              (0, s.CS)([_], (e) => {
                let [t = 1] = e;
                return { opacity: t };
              })
            ),
            o,
            y,
            m,
            x,
            b,
            A
          );
        return I
          ? (0, n.jsx)(V, {
              link: L,
              ref: t,
              id: l,
              className: j,
              children:
                f.c < 13
                  ? (0, n.jsx)(C, {
                      layout: "responsive",
                      src: O,
                      sizes: E(S, a),
                      alt: P,
                      width: I.width,
                      height: I.height,
                      priority: N,
                    })
                  : (0, n.jsx)(r(), {
                      src: O,
                      priority: N,
                      sizes: E(S, a),
                      alt: null != P ? P : "",
                      width: I.width,
                      height: I.height,
                      style: { width: "100%", height: "auto" },
                    }),
            })
          : null;
      });
      var g = y;
    },
    4301: function (e, t, l) {
      l.d(t, {
        r: function () {
          return u;
        },
      });
      var n = l(7458),
        i = l(2983),
        a = l(2746),
        r = l(7894),
        o = l.n(r),
        h = l(7136),
        c = l(6809);
      let u = (0, i.forwardRef)(function (e, t) {
        var l;
        let i,
          r,
          u,
          d,
          { link: s, onClick: p = () => {}, ...f } = e,
          w = s && "OPEN_PAGE" === s.type ? s.payload.pageId : null,
          v = (0, c._h)(null != w ? w : null),
          C =
            (null == s ? void 0 : s.type) === "SCROLL_TO_ELEMENT"
              ? null === (l = s.payload.elementIdConfig) || void 0 === l
                ? void 0
                : l.elementKey
              : null,
          E = (0, h.s)(C);
        if (s)
          switch (s.type) {
            case "OPEN_PAGE":
              v && ((i = !0), (r = "/".concat(v.pathname))),
                (u = s.payload.openInNewTab ? "_blank" : "_self");
              break;
            case "OPEN_URL":
              (i = !0),
                (r = s.payload.url),
                (u = s.payload.openInNewTab ? "_blank" : "_self");
              break;
            case "SEND_EMAIL": {
              i = !1;
              let { to: e, subject: t = "", body: l = "" } = s.payload;
              null != e &&
                (r = "mailto:"
                  .concat(e, "?subject=")
                  .concat(t, "&body=")
                  .concat(l));
              break;
            }
            case "CALL_PHONE":
              (i = !1), (r = "tel:".concat(s.payload.phoneNumber));
              break;
            case "SCROLL_TO_ELEMENT":
              (i = !1),
                (r = "#".concat(null != E ? E : "")),
                (d = s.payload.block);
              break;
            default:
              throw RangeError('Invalid link type "'.concat(s.type, '."'));
          }
        function y(e) {
          if ((p(e), !e.defaultPrevented)) {
            if (e.currentTarget.isContentEditable) return e.preventDefault();
            if (s && "SCROLL_TO_ELEMENT" === s.type) {
              let t;
              try {
                null != r &&
                  (t = new URL("http://www.example.com/".concat(r)).hash);
              } catch (e) {
                console.error("Link received invalid href: ".concat(r), e);
              }
              if (null != r && null != t && r === t) {
                e.preventDefault();
                let l = e.view;
                (0, a.Z)(l.document.querySelector(t), {
                  behavior: "smooth",
                  block: d,
                }),
                  l.location.hash !== t && l.history.pushState({}, "", t);
              }
            }
          }
        }
        return i && null != r
          ? (0, n.jsx)(o(), {
              ...f,
              ref: t,
              target: u,
              onClick: y,
              href: r,
              legacyBehavior: !1,
            })
          : (0, n.jsx)("a", { ...f, ref: t, href: r, target: u, onClick: y });
      });
    },
    5509: function (e, t, l) {
      l.d(t, {
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
