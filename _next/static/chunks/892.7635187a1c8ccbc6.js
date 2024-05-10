(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [892],
  {
    9417: function (e, t, s) {
      "use strict";
      s.d(t, {
        c: function () {
          return i;
        },
      });
      var r = JSON.parse(
        '{"name":"next","version":"13.2.1","description":"The React Framework","main":"./dist/server/next.js","license":"MIT","repository":"vercel/next.js","bugs":"https://github.com/vercel/next.js/issues","homepage":"https://nextjs.org","types":"index.d.ts","files":["dist","app.js","app.d.ts","babel.js","babel.d.ts","client.js","client.d.ts","compat","config.js","config.d.ts","constants.js","constants.d.ts","document.js","document.d.ts","dynamic.js","dynamic.d.ts","error.js","error.d.ts","future","legacy","script.js","script.d.ts","server.js","server.d.ts","head.js","head.d.ts","image.js","image.d.ts","link.js","link.d.ts","router.js","router.d.ts","jest.js","jest.d.ts","amp.js","amp.d.ts","index.d.ts","types/index.d.ts","types/global.d.ts","types/compiled.d.ts","image-types/global.d.ts","navigation-types/navigation.d.ts","navigation-types/compat/navigation.d.ts","font","navigation.js","navigation.d.ts","headers.js","headers.d.ts","navigation-types"],"bin":{"next":"./dist/bin/next"},"scripts":{"dev":"taskr","release":"taskr release","build":"pnpm release && pnpm types","prepublishOnly":"cd ../../ && turbo run build","types":"tsc --declaration --emitDeclarationOnly --stripInternal --declarationDir dist","typescript":"tsec --noEmit","ncc-compiled":"ncc cache clean && taskr ncc","test-pack":"cd ../../ && pnpm test-pack next"},"taskr":{"requires":["./taskfile-ncc.js","./taskfile-swc.js","./taskfile-watch.js"]},"dependencies":{"@next/env":"13.2.1","@swc/helpers":"0.4.14","caniuse-lite":"^1.0.30001406","postcss":"8.4.14","styled-jsx":"5.1.1"},"peerDependencies":{"@opentelemetry/api":"^1.4.0","fibers":">= 3.1.0","node-sass":"^6.0.0 || ^7.0.0","react":"^18.2.0","react-dom":"^18.2.0","sass":"^1.3.0"},"peerDependenciesMeta":{"node-sass":{"optional":true},"sass":{"optional":true},"fibers":{"optional":true},"@opentelemetry/api":{"optional":true}},"devDependencies":{"@ampproject/toolbox-optimizer":"2.8.3","@babel/code-frame":"7.12.11","@babel/core":"7.18.0","@babel/eslint-parser":"7.18.2","@babel/generator":"7.18.0","@babel/plugin-proposal-class-properties":"7.14.5","@babel/plugin-proposal-export-namespace-from":"7.14.5","@babel/plugin-proposal-numeric-separator":"7.14.5","@babel/plugin-proposal-object-rest-spread":"7.14.7","@babel/plugin-syntax-bigint":"7.8.3","@babel/plugin-syntax-dynamic-import":"7.8.3","@babel/plugin-syntax-import-assertions":"7.16.7","@babel/plugin-syntax-jsx":"7.14.5","@babel/plugin-transform-modules-commonjs":"7.18.0","@babel/plugin-transform-runtime":"7.18.0","@babel/preset-env":"7.18.0","@babel/preset-react":"7.14.5","@babel/preset-typescript":"7.17.12","@babel/runtime":"7.15.4","@babel/traverse":"7.18.0","@babel/types":"7.18.0","@edge-runtime/cookies":"3.0.4","@edge-runtime/primitives":"2.0.5","@hapi/accept":"5.0.2","@napi-rs/cli":"2.14.7","@napi-rs/triples":"1.1.0","@next/polyfill-module":"13.2.1","@next/polyfill-nomodule":"13.2.1","@next/react-dev-overlay":"13.2.1","@next/react-refresh-utils":"13.2.1","@next/swc":"13.2.1","@opentelemetry/api":"1.4.0","@segment/ajv-human-errors":"2.1.2","@taskr/clear":"1.1.0","@taskr/esnext":"1.1.0","@types/amphtml-validator":"1.0.0","@types/babel__code-frame":"7.0.2","@types/babel__core":"7.1.12","@types/babel__generator":"7.6.2","@types/babel__template":"7.4.0","@types/babel__traverse":"7.11.0","@types/bytes":"3.1.1","@types/ci-info":"2.0.0","@types/compression":"0.0.36","@types/content-disposition":"0.5.4","@types/content-type":"1.1.3","@types/cookie":"0.3.3","@types/cross-spawn":"6.0.0","@types/debug":"4.1.5","@types/express-serve-static-core":"4.17.33","@types/fresh":"0.5.0","@types/glob":"7.1.1","@types/jsonwebtoken":"9.0.0","@types/lodash":"4.14.149","@types/lodash.curry":"4.1.6","@types/lru-cache":"5.1.0","@types/micromatch":"4.0.2","@types/node-fetch":"2.6.1","@types/path-to-regexp":"1.7.0","@types/platform":"1.3.4","@types/react":"16.9.17","@types/react-dom":"16.9.4","@types/react-is":"16.7.1","@types/semver":"7.3.1","@types/send":"0.14.4","@types/shell-quote":"1.7.1","@types/tar":"4.0.3","@types/text-table":"0.2.1","@types/ua-parser-js":"0.7.36","@types/uuid":"8.3.1","@types/webpack-sources1":"npm:@types/webpack-sources@0.1.5","@types/ws":"8.2.0","@vercel/ncc":"0.34.0","@vercel/nft":"0.22.6","acorn":"8.5.0","ajv":"8.11.0","amphtml-validator":"1.0.35","anser":"1.4.9","arg":"4.1.0","assert":"2.0.0","async-retry":"1.2.3","async-sema":"3.0.0","babel-plugin-transform-define":"2.0.0","babel-plugin-transform-react-remove-prop-types":"0.4.24","browserify-zlib":"0.2.0","browserslist":"4.20.2","buffer":"5.6.0","bytes":"3.1.1","chalk":"2.4.2","ci-info":"watson/ci-info#f43f6a1cefff47fb361c88cf4b943fdbcaafe540","cli-select":"1.1.2","client-only":"0.0.1","comment-json":"3.0.3","compression":"1.7.4","conf":"5.0.0","constants-browserify":"1.0.0","content-disposition":"0.5.3","content-type":"1.0.4","cookie":"0.4.1","cross-spawn":"7.0.3","crypto-browserify":"3.12.0","css.escape":"1.5.1","cssnano-simple":"3.0.1","data-uri-to-buffer":"3.0.1","debug":"4.1.1","devalue":"2.0.1","domain-browser":"4.19.0","edge-runtime":"2.0.0","events":"3.3.0","find-cache-dir":"3.3.1","find-up":"4.1.0","fresh":"0.5.2","get-orientation":"1.1.2","glob":"7.1.7","gzip-size":"5.1.1","http-proxy":"1.18.1","https-browserify":"1.0.0","icss-utils":"5.1.0","ignore-loader":"0.1.2","image-size":"1.0.0","is-docker":"2.0.0","is-wsl":"2.2.0","jest-worker":"27.0.0-next.5","json5":"2.2.3","jsonwebtoken":"9.0.0","loader-runner":"4.3.0","loader-utils2":"npm:loader-utils@2.0.0","loader-utils3":"npm:loader-utils@3.1.3","lodash.curry":"4.1.1","lru-cache":"5.1.1","micromatch":"4.0.4","mini-css-extract-plugin":"2.4.3","nanoid":"3.1.32","native-url":"0.3.4","neo-async":"2.6.1","node-fetch":"2.6.7","node-html-parser":"5.3.3","ora":"4.0.4","os-browserify":"0.3.0","p-limit":"3.1.0","path-browserify":"1.0.1","path-to-regexp":"6.1.0","platform":"1.3.6","postcss-flexbugs-fixes":"5.0.2","postcss-modules-extract-imports":"3.0.0","postcss-modules-local-by-default":"4.0.0","postcss-modules-scope":"3.0.0","postcss-modules-values":"4.0.0","postcss-preset-env":"7.4.3","postcss-safe-parser":"6.0.0","postcss-scss":"4.0.3","postcss-value-parser":"4.2.0","process":"0.11.10","punycode":"2.1.1","querystring-es3":"0.2.1","raw-body":"2.4.1","react-is":"18.2.0","react-refresh":"0.12.0","regenerator-runtime":"0.13.4","sass-loader":"12.4.0","schema-utils2":"npm:schema-utils@2.7.1","schema-utils3":"npm:schema-utils@3.0.0","semver":"7.3.2","send":"0.17.1","server-only":"0.0.1","setimmediate":"1.0.5","shell-quote":"1.7.3","source-map":"0.6.1","stacktrace-parser":"0.1.10","stream-browserify":"3.0.0","stream-http":"3.1.1","string-hash":"1.1.3","string_decoder":"1.3.0","strip-ansi":"6.0.0","tar":"6.1.11","taskr":"1.1.0","terser":"5.14.1","text-table":"0.2.0","timers-browserify":"2.0.12","tty-browserify":"0.0.1","ua-parser-js":"0.7.28","undici":"5.14.0","unistore":"3.4.1","util":"0.12.4","uuid":"8.3.2","vm-browserify":"1.1.2","watchpack":"2.4.0","web-vitals":"3.0.0","webpack":"5.74.0","webpack-sources1":"npm:webpack-sources@1.4.3","webpack-sources3":"npm:webpack-sources@3.2.3","ws":"8.2.3"},"resolutions":{"browserslist":"4.20.2","caniuse-lite":"1.0.30001406"},"engines":{"node":">=14.6.0"},"optionalDependencies":{"@next/swc-android-arm-eabi":"13.2.1","@next/swc-android-arm64":"13.2.1","@next/swc-darwin-arm64":"13.2.1","@next/swc-darwin-x64":"13.2.1","@next/swc-freebsd-x64":"13.2.1","@next/swc-linux-arm-gnueabihf":"13.2.1","@next/swc-linux-arm64-gnu":"13.2.1","@next/swc-linux-arm64-musl":"13.2.1","@next/swc-linux-x64-gnu":"13.2.1","@next/swc-linux-x64-musl":"13.2.1","@next/swc-win32-arm64-msvc":"13.2.1","@next/swc-win32-ia32-msvc":"13.2.1","@next/swc-win32-x64-msvc":"13.2.1"}}'
      );
      let { version: a } = r,
        i = parseInt(a.split(".")[0]);
    },
    4899: function (e, t, s) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = s(834).Z,
        a = s(1997).Z,
        i = s(792).Z,
        n = s(4385).Z,
        o = i(s(2983)),
        l = a(s(9578)),
        c = s(8515),
        p = s(965),
        d = s(8434);
      s(443);
      var u = a(s(7637));
      let m = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      };
      function f(e) {
        return void 0 !== e.default;
      }
      function b(e) {
        return "number" == typeof e || void 0 === e
          ? e
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function g(e, t, s, a, i, n, o) {
        if (!e || e["data-loaded-src"] === t) return;
        e["data-loaded-src"] = t;
        let l = "decode" in e ? e.decode() : Promise.resolve();
        l.catch(() => {}).then(() => {
          if (e.parentNode) {
            if (("blur" === s && n(!0), null == a ? void 0 : a.current)) {
              let t = new Event("load");
              Object.defineProperty(t, "target", { writable: !1, value: e });
              let s = !1,
                i = !1;
              a.current(
                r({}, t, {
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => s,
                  isPropagationStopped: () => i,
                  persist: () => {},
                  preventDefault: () => {
                    (s = !0), t.preventDefault();
                  },
                  stopPropagation: () => {
                    (i = !0), t.stopPropagation();
                  },
                })
              );
            }
            (null == i ? void 0 : i.current) && i.current(e);
          }
        });
      }
      let y = o.forwardRef((e, t) => {
          var {
              imgAttributes: s,
              heightInt: a,
              widthInt: i,
              qualityInt: l,
              className: c,
              imgStyle: p,
              blurStyle: d,
              isLazy: u,
              fill: m,
              placeholder: f,
              loading: b,
              srcString: y,
              config: h,
              unoptimized: w,
              loader: v,
              onLoadRef: x,
              onLoadingCompleteRef: j,
              setBlurComplete: k,
              setShowAltText: _,
              onLoad: E,
              onError: S,
            } = e,
            z = n(e, [
              "imgAttributes",
              "heightInt",
              "widthInt",
              "qualityInt",
              "className",
              "imgStyle",
              "blurStyle",
              "isLazy",
              "fill",
              "placeholder",
              "loading",
              "srcString",
              "config",
              "unoptimized",
              "loader",
              "onLoadRef",
              "onLoadingCompleteRef",
              "setBlurComplete",
              "setShowAltText",
              "onLoad",
              "onError",
            ]);
          return (
            (b = u ? "lazy" : b),
            o.default.createElement(
              o.default.Fragment,
              null,
              o.default.createElement(
                "img",
                Object.assign(
                  {},
                  z,
                  {
                    loading: b,
                    width: i,
                    height: a,
                    decoding: "async",
                    "data-nimg": m ? "fill" : "1",
                    className: c,
                    style: r({}, p, d),
                  },
                  s,
                  {
                    ref: o.useCallback(
                      (e) => {
                        t &&
                          ("function" == typeof t
                            ? t(e)
                            : "object" == typeof t && (t.current = e)),
                          e &&
                            (S && (e.src = e.src),
                            e.complete && g(e, y, f, x, j, k, w));
                      },
                      [y, f, x, j, k, S, w, t]
                    ),
                    onLoad: (e) => {
                      let t = e.currentTarget;
                      g(t, y, f, x, j, k, w);
                    },
                    onError: (e) => {
                      _(!0), "blur" === f && k(!0), S && S(e);
                    },
                  }
                )
              )
            )
          );
        }),
        h = o.forwardRef((e, t) => {
          let s, a;
          var i,
            {
              src: g,
              sizes: h,
              unoptimized: w = !1,
              priority: v = !1,
              loading: x,
              className: j,
              quality: k,
              width: _,
              height: E,
              fill: S,
              style: z,
              onLoad: C,
              onLoadingComplete: R,
              placeholder: O = "empty",
              blurDataURL: I,
              layout: M,
              objectFit: D,
              objectPosition: P,
              lazyBoundary: A,
              lazyRoot: N,
            } = e,
            L = n(e, [
              "src",
              "sizes",
              "unoptimized",
              "priority",
              "loading",
              "className",
              "quality",
              "width",
              "height",
              "fill",
              "style",
              "onLoad",
              "onLoadingComplete",
              "placeholder",
              "blurDataURL",
              "layout",
              "objectFit",
              "objectPosition",
              "lazyBoundary",
              "lazyRoot",
            ]);
          let q = o.useContext(d.ImageConfigContext),
            F = o.useMemo(() => {
              let e = m || q || p.imageConfigDefault,
                t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                s = e.deviceSizes.sort((e, t) => e - t);
              return r({}, e, { allSizes: t, deviceSizes: s });
            }, [q]),
            B = L,
            T = B.loader || u.default;
          delete B.loader;
          let W = "__next_img_default" in T;
          if (W) {
            if ("custom" === F.loader)
              throw Error(
                'Image with src "'.concat(g, '" is missing "loader" prop.') +
                  "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader"
              );
          } else {
            let e = T;
            T = (t) => {
              let { config: s } = t,
                r = n(t, ["config"]);
              return e(r);
            };
          }
          if (M) {
            "fill" === M && (S = !0);
            let e = {
              intrinsic: { maxWidth: "100%", height: "auto" },
              responsive: { width: "100%", height: "auto" },
            }[M];
            e && (z = r({}, z, e));
            let t = { responsive: "100vw", fill: "100vw" }[M];
            t && !h && (h = t);
          }
          let G = "",
            Z = b(_),
            J = b(E);
          if ("object" == typeof (i = g) && (f(i) || void 0 !== i.src)) {
            let e = f(g) ? g.default : g;
            if (!e.src)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(
                  JSON.stringify(e)
                )
              );
            if (!e.height || !e.width)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(
                  JSON.stringify(e)
                )
              );
            if (
              ((s = e.blurWidth),
              (a = e.blurHeight),
              (I = I || e.blurDataURL),
              (G = e.src),
              !S)
            ) {
              if (Z || J) {
                if (Z && !J) {
                  let t = Z / e.width;
                  J = Math.round(e.height * t);
                } else if (!Z && J) {
                  let t = J / e.height;
                  Z = Math.round(e.width * t);
                }
              } else (Z = e.width), (J = e.height);
            }
          }
          let U = !v && ("lazy" === x || void 0 === x);
          ((g = "string" == typeof g ? g : G).startsWith("data:") ||
            g.startsWith("blob:")) &&
            ((w = !0), (U = !1)),
            F.unoptimized && (w = !0),
            W && g.endsWith(".svg") && !F.dangerouslyAllowSVG && (w = !0);
          let [V, Y] = o.useState(!1),
            [H, $] = o.useState(!1),
            K = b(k),
            Q = Object.assign(
              S
                ? {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: D,
                    objectPosition: P,
                  }
                : {},
              H ? {} : { color: "transparent" },
              z
            ),
            X =
              "blur" === O && I && !V
                ? {
                    backgroundSize: Q.objectFit || "cover",
                    backgroundPosition: Q.objectPosition || "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundImage:
                      'url("data:image/svg+xml;charset=utf-8,'.concat(
                        c.getImageBlurSvg({
                          widthInt: Z,
                          heightInt: J,
                          blurWidth: s,
                          blurHeight: a,
                          blurDataURL: I,
                          objectFit: Q.objectFit,
                        }),
                        '")'
                      ),
                  }
                : {},
            ee = (function (e) {
              let {
                config: t,
                src: s,
                unoptimized: r,
                width: a,
                quality: i,
                sizes: n,
                loader: o,
              } = e;
              if (r) return { src: s, srcSet: void 0, sizes: void 0 };
              let { widths: l, kind: c } = (function (e, t, s) {
                  let { deviceSizes: r, allSizes: a } = e;
                  if (s) {
                    let e = /(^|\s)(1?\d?\d)vw/g,
                      t = [];
                    for (let r; (r = e.exec(s)); r) t.push(parseInt(r[2]));
                    if (t.length) {
                      let e = 0.01 * Math.min(...t);
                      return {
                        widths: a.filter((t) => t >= r[0] * e),
                        kind: "w",
                      };
                    }
                    return { widths: a, kind: "w" };
                  }
                  if ("number" != typeof t) return { widths: r, kind: "w" };
                  let i = [
                    ...new Set(
                      [t, 2 * t].map(
                        (e) => a.find((t) => t >= e) || a[a.length - 1]
                      )
                    ),
                  ];
                  return { widths: i, kind: "x" };
                })(t, a, n),
                p = l.length - 1;
              return {
                sizes: n || "w" !== c ? n : "100vw",
                srcSet: l
                  .map((e, r) =>
                    ""
                      .concat(
                        o({ config: t, src: s, quality: i, width: e }),
                        " "
                      )
                      .concat("w" === c ? e : r + 1)
                      .concat(c)
                  )
                  .join(", "),
                src: o({ config: t, src: s, quality: i, width: l[p] }),
              };
            })({
              config: F,
              src: g,
              unoptimized: w,
              width: Z,
              quality: K,
              sizes: h,
              loader: T,
            }),
            et = g,
            es = {
              imageSrcSet: ee.srcSet,
              imageSizes: ee.sizes,
              crossOrigin: B.crossOrigin,
            },
            er = o.useRef(C);
          o.useEffect(() => {
            er.current = C;
          }, [C]);
          let ea = o.useRef(R);
          o.useEffect(() => {
            ea.current = R;
          }, [R]);
          let ei = r(
            {
              isLazy: U,
              imgAttributes: ee,
              heightInt: J,
              widthInt: Z,
              qualityInt: K,
              className: j,
              imgStyle: Q,
              blurStyle: X,
              loading: x,
              config: F,
              fill: S,
              unoptimized: w,
              placeholder: O,
              loader: T,
              srcString: et,
              onLoadRef: er,
              onLoadingCompleteRef: ea,
              setBlurComplete: Y,
              setShowAltText: $,
            },
            B
          );
          return o.default.createElement(
            o.default.Fragment,
            null,
            o.default.createElement(y, Object.assign({}, ei, { ref: t })),
            v
              ? o.default.createElement(
                  l.default,
                  null,
                  o.default.createElement(
                    "link",
                    Object.assign(
                      {
                        key: "__nimg-" + ee.src + ee.srcSet + ee.sizes,
                        rel: "preload",
                        as: "image",
                        href: ee.srcSet ? void 0 : ee.src,
                      },
                      es
                    )
                  )
                )
              : null
          );
        });
      (t.default = h),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    8515: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getImageBlurSvg = function (e) {
          let {
              widthInt: t,
              heightInt: s,
              blurWidth: r,
              blurHeight: a,
              blurDataURL: i,
              objectFit: n,
            } = e,
            o = r || t,
            l = a || s,
            c = i.startsWith("data:image/jpeg")
              ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%"
              : "";
          return o && l
            ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "
                .concat(o, " ")
                .concat(
                  l,
                  "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"
                )
                .concat(r && a ? "1" : "20", "'/%3E")
                .concat(
                  c,
                  "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"
                )
                .concat(i, "'/%3E%3C/svg%3E")
            : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"
                .concat(
                  "contain" === n
                    ? "xMidYMid"
                    : "cover" === n
                    ? "xMidYMid slice"
                    : "none",
                  "' x='0' y='0' height='100%25' width='100%25' href='"
                )
                .concat(i, "'/%3E%3C/svg%3E");
        });
    },
    7637: function (e, t) {
      "use strict";
      function s(e) {
        let { config: t, src: s, width: r, quality: a } = e;
        return s
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        (s.__next_img_default = !0),
        (t.default = s);
    },
    5216: function (e, t, s) {
      e.exports = s(4899);
    },
  },
]);
