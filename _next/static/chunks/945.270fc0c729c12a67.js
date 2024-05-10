"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [945],
  {
    4301: function (e, n, t) {
      t.d(n, {
        r: function () {
          return d;
        },
      });
      var l = t(7458),
        a = t(2983),
        i = t(2746),
        r = t(7894),
        c = t.n(r),
        o = t(7136),
        u = t(6809);
      let d = (0, a.forwardRef)(function (e, n) {
        var t;
        let a,
          r,
          d,
          s,
          { link: f, onClick: p = () => {}, ...k } = e,
          h = f && "OPEN_PAGE" === f.type ? f.payload.pageId : null,
          v = (0, u._h)(null != h ? h : null),
          H =
            (null == f ? void 0 : f.type) === "SCROLL_TO_ELEMENT"
              ? null === (t = f.payload.elementIdConfig) || void 0 === t
                ? void 0
                : t.elementKey
              : null,
          m = (0, o.s)(H);
        if (f)
          switch (f.type) {
            case "OPEN_PAGE":
              v && ((a = !0), (r = "/".concat(v.pathname))),
                (d = f.payload.openInNewTab ? "_blank" : "_self");
              break;
            case "OPEN_URL":
              (a = !0),
                (r = f.payload.url),
                (d = f.payload.openInNewTab ? "_blank" : "_self");
              break;
            case "SEND_EMAIL": {
              a = !1;
              let { to: e, subject: n = "", body: t = "" } = f.payload;
              null != e &&
                (r = "mailto:"
                  .concat(e, "?subject=")
                  .concat(n, "&body=")
                  .concat(t));
              break;
            }
            case "CALL_PHONE":
              (a = !1), (r = "tel:".concat(f.payload.phoneNumber));
              break;
            case "SCROLL_TO_ELEMENT":
              (a = !1),
                (r = "#".concat(null != m ? m : "")),
                (s = f.payload.block);
              break;
            default:
              throw RangeError('Invalid link type "'.concat(f.type, '."'));
          }
        function g(e) {
          if ((p(e), !e.defaultPrevented)) {
            if (e.currentTarget.isContentEditable) return e.preventDefault();
            if (f && "SCROLL_TO_ELEMENT" === f.type) {
              let n;
              try {
                null != r &&
                  (n = new URL("http://www.example.com/".concat(r)).hash);
              } catch (e) {
                console.error("Link received invalid href: ".concat(r), e);
              }
              if (null != r && null != n && r === n) {
                e.preventDefault();
                let t = e.view;
                (0, i.Z)(t.document.querySelector(n), {
                  behavior: "smooth",
                  block: s,
                }),
                  t.location.hash !== n && t.history.pushState({}, "", n);
              }
            }
          }
        }
        return a && null != r
          ? (0, l.jsx)(c(), {
              ...k,
              ref: n,
              target: d,
              onClick: g,
              href: r,
              legacyBehavior: !1,
            })
          : (0, l.jsx)("a", { ...k, ref: n, href: r, target: d, onClick: g });
      });
    },
    945: function (e, n, t) {
      t.r(n),
        t.d(n, {
          LeafComponent: function () {
            return x;
          },
          default: function () {
            return m;
          },
        });
      var l = t(7458),
        a = t(2983),
        i = t(1494),
        r = t(4483),
        c = t(3057);
      function o(e) {
        return "object" == typeof e && "text" in e;
      }
      function u(e) {
        if (o(e)) return !1;
        switch (e.type) {
          case c.kH.Heading1:
          case c.kH.Heading2:
          case c.kH.Heading3:
          case c.kH.Heading4:
          case c.kH.Heading5:
          case c.kH.Heading6:
          case c.kH.BlockQuote:
          case c.kH.Paragraph:
          case c.kH.Default:
          case c.kH.OrderedList:
          case c.kH.UnorderedList:
          case c.kH.ListItem:
          case c.kH.ListItemChild:
            return !0;
          default:
            return !1;
        }
      }
      var d = t(2991),
        s = t(9440),
        f = t(148),
        p = t(7898),
        k = t(2074),
        h = t(5323),
        v = t(333);
      let H = (0, a.forwardRef)(function (e, n) {
        var t, a, r;
        let {
            text: { descendants: v },
            definition: H,
          } = e,
          m =
            ((r =
              null !== (a = null == H ? void 0 : H.config.mode) && void 0 !== a
                ? a
                : i._w.Block),
            v
              .map((e) =>
                (function e(n, t) {
                  var l, a, r, d, s;
                  if (o(n))
                    return null !== (l = n.text) && void 0 !== l ? l : "";
                  switch (n.type) {
                    case c.kH.Default:
                      return t === i._w.Inline
                        ? null !==
                            (a = n.children.map((n) => e(n, t)).join("")) &&
                          void 0 !== a
                          ? a
                          : ""
                        : null !==
                            (r = n.children
                              .map((n) => e(n, t))
                              .join(n.children.every(u) ? "\n" : "")) &&
                          void 0 !== r
                        ? r
                        : "";
                    case c.T5.Link:
                    case c.T5.Code:
                    case c.T5.SubScript:
                    case c.T5.SuperScript:
                      return null !==
                        (d = n.children.map((n) => e(n, t)).join("")) &&
                        void 0 !== d
                        ? d
                        : "";
                    case c.kH.Heading1:
                    case c.kH.Heading2:
                    case c.kH.Heading3:
                    case c.kH.Heading4:
                    case c.kH.Heading5:
                    case c.kH.Heading6:
                    case c.kH.BlockQuote:
                    case c.kH.Paragraph:
                    case c.kH.OrderedList:
                    case c.kH.UnorderedList:
                    case c.kH.ListItem:
                    case c.kH.ListItemChild:
                      return null !==
                        (s = n.children
                          .map((n) => e(n, t))
                          .join(n.children.every(u) ? "\n" : "")) &&
                        void 0 !== s
                        ? s
                        : "";
                    default:
                      return "";
                  }
                })(e, r)
              )
              .join("\n"));
        return (0,
        l.jsx)("div", { ref: n, style: { position: "relative", whiteSpace: "pre-wrap", wordWrap: "break-word" }, children: "" === m ? (0, l.jsx)(g, {}) : (0, l.jsx)(L, { plugins: (null == H ? void 0 : null === (t = H.config) || void 0 === t ? void 0 : t.mode) === i._w.Inline ? [(0, d.R)()] : [(0, s.AT)(), (0, f.Mx)(), (0, p.k)(), (0, k.C)(), (0, h.H)()], descendants: v }) });
      });
      var m = H;
      function g(e) {
        let { text: n = "Write some text..." } = e;
        return (0, l.jsx)("span", {
          className: (0, r.X)({
            display: "inline-block",
            width: 0,
            maxWidth: "100%",
            whiteSpace: "nowrap",
            opacity: 0.333,
            verticalAlign: "text-top",
          }),
          children: n,
        });
      }
      function x(e) {
        let { plugins: n, ...t } = e,
          a = n.reduce(
            (e, n) => (t) => {
              let { control: a, renderLeaf: i } = n;
              return (null == a ? void 0 : a.definition) == null || null == i
                ? e(t)
                : null == a.getLeafValue
                ? i(e, void 0)(t)
                : (0, l.jsx)(v.$, {
                    definition: a.definition,
                    data: a.getLeafValue(t.leaf),
                    children: (n) => i(e, n)(t),
                  });
            },
            function (e) {
              let { leaf: n } = e;
              return (0, l.jsx)("span", {
                className: n.className,
                children: "" === n.text ? "\uFEFF" : n.text,
              });
            }
          );
        return a({
          attributes: {},
          leaf: t.leaf,
          children: null,
          text: t.leaf,
        });
      }
      function y(e) {
        let { plugins: n, ...t } = e,
          a = n.reduce(
            (e, n) => (t) => {
              let { control: a, renderElement: i } = n;
              return (null == a ? void 0 : a.definition) == null || null == i
                ? e(t)
                : null == a.getElementValue
                ? i(e, void 0)(t)
                : (0, l.jsx)(v.$, {
                    definition: a.definition,
                    data: a.getElementValue(t.element),
                    children: (n) => i(e, n)(t),
                  });
            },
            function (e) {
              return (0, l.jsx)(L, {
                descendants: e.element.children,
                plugins: n,
              });
            }
          );
        return a({ attributes: {}, children: null, element: t.descendant });
      }
      function L(e) {
        let { descendants: n, plugins: t } = e;
        return (0, l.jsx)(l.Fragment, {
          children: n.map((e, n) =>
            "object" == typeof e && "text" in e
              ? (0, l.jsx)(x, { plugins: t, leaf: e }, n)
              : (0, l.jsx)(y, { descendant: e, plugins: t }, n)
          ),
        });
      }
    },
    5323: function (e, n, t) {
      t.d(n, {
        H: function () {
          return v;
        },
      });
      var l = t(7458),
        a = t(7617),
        i = t(5279),
        r = t(2342),
        c = t(3057),
        o = t(4483),
        u = t(4301),
        d = t(1458),
        s = t(4408),
        f = t(5038),
        p = t(2304);
      let k = (e) => {
        let { isInline: n } = e;
        return (e.isInline = (e) => r.q.isInline(e) && n(e)), e;
      };
      function h(e) {
        let { element: n, attributes: t, children: a, renderElement: i } = e,
          r = (0, o.X)({ textDecoration: "none" });
        if (n.type === c.T5.Link) {
          var s;
          return (0, l.jsx)(u.r, {
            ...t,
            link: null !== (s = n.link) && void 0 !== s ? s : void 0,
            className: (0, d.cx)(r, n.className),
            children: i({ element: n, attributes: t, children: a }),
          });
        }
        return (0, l.jsx)(l.Fragment, {
          children: i({ element: n, attributes: t, children: a }),
        });
      }
      function v() {
        return (0, a.Y)({
          control: {
            definition: (0, i.rU)({ label: "On Click" }),
            onChange: f.z,
            getValue: p.N,
            getElementValue: (e) =>
              r.q.isInline(e) && (0, s.j)(e) ? e.link : void 0,
          },
          withPlugin: k,
          renderElement: (e) => (n) =>
            (0, l.jsx)(h, { ...n, renderElement: e }),
        });
      }
    },
  },
]);
