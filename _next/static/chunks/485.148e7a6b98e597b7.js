(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [485],
  {
    4876: function (e) {
      "use strict";
      var t = function (e) {
          var t;
          return (
            !!e &&
            "object" == typeof e &&
            "[object RegExp]" !== (t = Object.prototype.toString.call(e)) &&
            "[object Date]" !== t &&
            e.$$typeof !== r
          );
        },
        r =
          "function" == typeof Symbol && Symbol.for
            ? Symbol.for("react.element")
            : 60103;
      function n(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e)
          ? u(Array.isArray(e) ? [] : {}, e, t)
          : e;
      }
      function o(e, t, r) {
        return e.concat(t).map(function (e) {
          return n(e, r);
        });
      }
      function a(e) {
        return Object.keys(e).concat(
          Object.getOwnPropertySymbols
            ? Object.getOwnPropertySymbols(e).filter(function (t) {
                return Object.propertyIsEnumerable.call(e, t);
              })
            : []
        );
      }
      function i(e, t) {
        try {
          return t in e;
        } catch (e) {
          return !1;
        }
      }
      function u(e, r, l) {
        ((l = l || {}).arrayMerge = l.arrayMerge || o),
          (l.isMergeableObject = l.isMergeableObject || t),
          (l.cloneUnlessOtherwiseSpecified = n);
        var c,
          s,
          f = Array.isArray(r);
        return f !== Array.isArray(e)
          ? n(r, l)
          : f
          ? l.arrayMerge(e, r, l)
          : ((s = {}),
            (c = l).isMergeableObject(e) &&
              a(e).forEach(function (t) {
                s[t] = n(e[t], c);
              }),
            a(r).forEach(function (t) {
              (!i(e, t) ||
                (Object.hasOwnProperty.call(e, t) &&
                  Object.propertyIsEnumerable.call(e, t))) &&
                (i(e, t) && c.isMergeableObject(r[t])
                  ? (s[t] = (function (e, t) {
                      if (!t.customMerge) return u;
                      var r = t.customMerge(e);
                      return "function" == typeof r ? r : u;
                    })(t, c)(e[t], r[t], c))
                  : (s[t] = n(r[t], c)));
            }),
            s);
      }
      (u.all = function (e, t) {
        if (!Array.isArray(e)) throw Error("first argument should be an array");
        return e.reduce(function (e, r) {
          return u(e, r, t);
        }, {});
      }),
        (e.exports = u);
    },
    7112: function (e) {
      function t(e, t) {
        (e.onload = function () {
          (this.onerror = this.onload = null), t(null, e);
        }),
          (e.onerror = function () {
            (this.onerror = this.onload = null),
              t(Error("Failed to load " + this.src), e);
          });
      }
      function r(e, t) {
        e.onreadystatechange = function () {
          ("complete" == this.readyState || "loaded" == this.readyState) &&
            ((this.onreadystatechange = null), t(null, e));
        };
      }
      e.exports = function (e, n, o) {
        var a = document.head || document.getElementsByTagName("head")[0],
          i = document.createElement("script");
        "function" == typeof n && ((o = n), (n = {})),
          (n = n || {}),
          (o = o || function () {}),
          (i.type = n.type || "text/javascript"),
          (i.charset = n.charset || "utf8"),
          (i.async = !("async" in n) || !!n.async),
          (i.src = e),
          n.attrs &&
            (function (e, t) {
              for (var r in t) e.setAttribute(r, t[r]);
            })(i, n.attrs),
          n.text && (i.text = "" + n.text),
          ("onload" in i ? t : r)(i, o),
          i.onload || t(i, o),
          a.appendChild(i);
      };
    },
    1772: function (e, t, r) {
      "use strict";
      var n = r(5148);
      function o() {}
      function a() {}
      (a.resetWarningCache = o),
        (e.exports = function () {
          function e(e, t, r, o, a, i) {
            if (i !== n) {
              var u = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((u.name = "Invariant Violation"), u);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var r = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: a,
            resetWarningCache: o,
          };
          return (r.PropTypes = r), r;
        });
    },
    7862: function (e, t, r) {
      e.exports = r(1772)();
    },
    5148: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    5683: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== u(e) && "function" != typeof e))
            return { default: e };
          var t = i();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(r, o, a)
                : (r[o] = e[o]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(2983)),
        o = r(8122),
        a = r(4870);
      function i() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      function u(e) {
        return (u =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function l() {
        return (l =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function c(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function s(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function f(e) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function y(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var d = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && p(e, t);
        })(i, e);
        var t,
          r,
          o = function () {
            var e,
              t,
              r = f(i);
            if (
              (function () {
                if (
                  "undefined" == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()
            ) {
              var n = f(this).constructor;
              t = Reflect.construct(r, arguments, n);
            } else t = r.apply(this, arguments);
            return (e = t) && ("object" === u(e) || "function" == typeof e)
              ? e
              : s(this);
          };
        function i() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, i);
          for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          return (
            y(s((e = o.call.apply(o, [this].concat(r)))), "mounted", !1),
            y(s(e), "isReady", !1),
            y(s(e), "isPlaying", !1),
            y(s(e), "isLoading", !0),
            y(s(e), "loadOnReady", null),
            y(s(e), "startOnPlay", !0),
            y(s(e), "seekOnPlay", null),
            y(s(e), "onDurationCalled", !1),
            y(s(e), "getInternalPlayer", function (t) {
              return e.player ? e.player[t] : null;
            }),
            y(s(e), "progress", function () {
              if (e.props.url && e.player && e.isReady) {
                var t = e.getCurrentTime() || 0,
                  r = e.getSecondsLoaded(),
                  n = e.getDuration();
                if (n) {
                  var o = { playedSeconds: t, played: t / n };
                  null !== r && ((o.loadedSeconds = r), (o.loaded = r / n)),
                    (o.playedSeconds !== e.prevPlayed ||
                      o.loadedSeconds !== e.prevLoaded) &&
                      e.props.onProgress(o),
                    (e.prevPlayed = o.playedSeconds),
                    (e.prevLoaded = o.loadedSeconds);
                }
              }
              e.progressTimeout = setTimeout(
                e.progress,
                e.props.progressFrequency || e.props.progressInterval
              );
            }),
            y(s(e), "handleReady", function () {
              if (e.mounted) {
                (e.isReady = !0), (e.isLoading = !1);
                var t = e.props,
                  r = t.onReady,
                  n = t.playing,
                  o = t.volume,
                  a = t.muted;
                r(),
                  a || null === o || e.player.setVolume(o),
                  e.loadOnReady
                    ? (e.player.load(e.loadOnReady, !0), (e.loadOnReady = null))
                    : n && e.player.play(),
                  e.handleDurationCheck();
              }
            }),
            y(s(e), "handlePlay", function () {
              (e.isPlaying = !0), (e.isLoading = !1);
              var t = e.props,
                r = t.onStart,
                n = t.onPlay,
                o = t.playbackRate;
              e.startOnPlay &&
                (e.player.setPlaybackRate &&
                  1 !== o &&
                  e.player.setPlaybackRate(o),
                r(),
                (e.startOnPlay = !1)),
                n(),
                e.seekOnPlay && (e.seekTo(e.seekOnPlay), (e.seekOnPlay = null)),
                e.handleDurationCheck();
            }),
            y(s(e), "handlePause", function (t) {
              (e.isPlaying = !1), e.isLoading || e.props.onPause(t);
            }),
            y(s(e), "handleEnded", function () {
              var t = e.props,
                r = t.activePlayer,
                n = t.loop,
                o = t.onEnded;
              r.loopOnEnded && n && e.seekTo(0), n || ((e.isPlaying = !1), o());
            }),
            y(s(e), "handleError", function () {
              var t;
              (e.isLoading = !1), (t = e.props).onError.apply(t, arguments);
            }),
            y(s(e), "handleDurationCheck", function () {
              clearTimeout(e.durationCheckTimeout);
              var t = e.getDuration();
              t
                ? e.onDurationCalled ||
                  (e.props.onDuration(t), (e.onDurationCalled = !0))
                : (e.durationCheckTimeout = setTimeout(
                    e.handleDurationCheck,
                    100
                  ));
            }),
            y(s(e), "handleLoaded", function () {
              e.isLoading = !1;
            }),
            y(s(e), "ref", function (t) {
              t && (e.player = t);
            }),
            e
          );
        }
        return (
          (t = [
            {
              key: "componentDidMount",
              value: function () {
                (this.mounted = !0),
                  this.player.load(this.props.url),
                  this.progress();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                clearTimeout(this.progressTimeout),
                  clearTimeout(this.durationCheckTimeout),
                  this.isReady && this.player.stop(),
                  this.player.disablePIP && this.player.disablePIP(),
                  (this.mounted = !1);
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                var t = this,
                  r = this.props,
                  n = r.url,
                  o = r.playing,
                  i = r.volume,
                  u = r.muted,
                  l = r.playbackRate,
                  c = r.pip,
                  s = r.loop,
                  f = r.activePlayer;
                if (!(0, a.isEqual)(e.url, n)) {
                  if (this.isLoading && !f.forceLoad) {
                    console.warn(
                      "ReactPlayer: the attempt to load ".concat(
                        n,
                        " is being deferred until the player has loaded"
                      )
                    ),
                      (this.loadOnReady = n);
                    return;
                  }
                  (this.isLoading = !0),
                    (this.startOnPlay = !0),
                    (this.onDurationCalled = !1),
                    this.player.load(n, this.isReady);
                }
                e.playing || !o || this.isPlaying || this.player.play(),
                  e.playing && !o && this.isPlaying && this.player.pause(),
                  !e.pip &&
                    c &&
                    this.player.enablePIP &&
                    this.player.enablePIP(),
                  e.pip &&
                    !c &&
                    this.player.disablePIP &&
                    this.player.disablePIP(),
                  e.volume !== i && null !== i && this.player.setVolume(i),
                  e.muted !== u &&
                    (u
                      ? this.player.mute()
                      : (this.player.unmute(),
                        null !== i &&
                          setTimeout(function () {
                            return t.player.setVolume(i);
                          }))),
                  e.playbackRate !== l &&
                    this.player.setPlaybackRate &&
                    this.player.setPlaybackRate(l),
                  e.loop !== s && this.player.setLoop && this.player.setLoop(s);
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.isReady ? this.player.getDuration() : null;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.isReady ? this.player.getCurrentTime() : null;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return this.isReady ? this.player.getSecondsLoaded() : null;
              },
            },
            {
              key: "seekTo",
              value: function (e, t) {
                var r = this;
                if (!this.isReady && 0 !== e) {
                  (this.seekOnPlay = e),
                    setTimeout(function () {
                      r.seekOnPlay = null;
                    }, 5e3);
                  return;
                }
                if (t ? "fraction" === t : e > 0 && e < 1) {
                  var n = this.player.getDuration();
                  if (!n) {
                    console.warn(
                      "ReactPlayer: could not seek using fraction –\xa0duration not yet available"
                    );
                    return;
                  }
                  this.player.seekTo(n * e);
                  return;
                }
                this.player.seekTo(e);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props.activePlayer;
                return e
                  ? n.default.createElement(
                      e,
                      l({}, this.props, {
                        ref: this.ref,
                        onReady: this.handleReady,
                        onPlay: this.handlePlay,
                        onPause: this.handlePause,
                        onEnded: this.handleEnded,
                        onLoaded: this.handleLoaded,
                        onError: this.handleError,
                      })
                    )
                  : null;
              },
            },
          ]),
          c(i.prototype, t),
          r && c(i, r),
          i
        );
      })(n.Component);
      (t.default = d),
        y(d, "displayName", "Player"),
        y(d, "propTypes", o.propTypes),
        y(d, "defaultProps", o.defaultProps);
    },
    5657: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = (function (e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== a(e) && "function" != typeof e))
          return { default: e };
        var t = o();
        if (t && t.has(e)) return t.get(e);
        var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var u = n ? Object.getOwnPropertyDescriptor(e, i) : null;
            u && (u.get || u.set)
              ? Object.defineProperty(r, i, u)
              : (r[i] = e[i]);
          }
        return (r.default = e), t && t.set(e, r), r;
      })(r(2983));
      function o() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                p(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function l(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function c(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function s(e) {
        return (s = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function p(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var y = "64px",
        d = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && f(e, t);
          })(i, e);
          var t,
            r,
            o = function () {
              var e,
                t,
                r = s(i);
              if (
                (function () {
                  if (
                    "undefined" == typeof Reflect ||
                    !Reflect.construct ||
                    Reflect.construct.sham
                  )
                    return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Date.prototype.toString.call(
                        Reflect.construct(Date, [], function () {})
                      ),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                })()
              ) {
                var n = s(this).constructor;
                t = Reflect.construct(r, arguments, n);
              } else t = r.apply(this, arguments);
              return (e = t) && ("object" === a(e) || "function" == typeof e)
                ? e
                : c(this);
            };
          function i() {
            var e;
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, i);
            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
              r[n] = arguments[n];
            return (
              p(c((e = o.call.apply(o, [this].concat(r)))), "mounted", !1),
              p(c(e), "state", { image: null }),
              e
            );
          }
          return (
            (t = [
              {
                key: "componentDidMount",
                value: function () {
                  (this.mounted = !0), this.fetchImage(this.props);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  var t = this.props,
                    r = t.url,
                    n = t.light;
                  (e.url !== r || e.light !== n) && this.fetchImage(this.props);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.mounted = !1;
                },
              },
              {
                key: "fetchImage",
                value: function (e) {
                  var t = this,
                    r = e.url,
                    n = e.light;
                  if ("string" == typeof n) {
                    this.setState({ image: n });
                    return;
                  }
                  return (
                    this.setState({ image: null }),
                    window
                      .fetch("https://noembed.com/embed?url=".concat(r))
                      .then(function (e) {
                        return e.json();
                      })
                      .then(function (e) {
                        if (e.thumbnail_url && t.mounted) {
                          var r = e.thumbnail_url.replace(
                            "height=100",
                            "height=480"
                          );
                          t.setState({ image: r });
                        }
                      })
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.onClick,
                    r = e.playIcon,
                    o = this.state.image,
                    a = {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                    i = {
                      preview: u(
                        {
                          width: "100%",
                          height: "100%",
                          backgroundImage: o ? "url(".concat(o, ")") : void 0,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          cursor: "pointer",
                        },
                        a
                      ),
                      shadow: u(
                        {
                          background:
                            "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",
                          borderRadius: y,
                          width: y,
                          height: y,
                        },
                        a
                      ),
                      playIcon: {
                        borderStyle: "solid",
                        borderWidth: "16px 0 16px 26px",
                        borderColor:
                          "transparent transparent transparent white",
                        marginLeft: "7px",
                      },
                    },
                    l = n.default.createElement(
                      "div",
                      { style: i.shadow, className: "react-player__shadow" },
                      n.default.createElement("div", {
                        style: i.playIcon,
                        className: "react-player__play-icon",
                      })
                    );
                  return n.default.createElement(
                    "div",
                    {
                      style: i.preview,
                      className: "react-player__preview",
                      onClick: t,
                    },
                    r || l
                  );
                },
              },
            ]),
            l(i.prototype, t),
            r && l(i, r),
            i
          );
        })(n.Component);
      t.default = d;
    },
    485: function (e, t, r) {
      "use strict";
      t.ZP = void 0;
      var n = y(r(2983)),
        o = r(8122),
        a = r(4870),
        i = f(r(8237)),
        u = f(r(5683)),
        l = f(r(5657)),
        c = y(r(1297)),
        s = f(r(5314));
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function p() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function y(e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== d(e) && "function" != typeof e))
          return { default: e };
        var t = p();
        if (t && t.has(e)) return t.get(e);
        var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
            a && (a.get || a.set)
              ? Object.defineProperty(r, o, a)
              : (r[o] = e[o]);
          }
        return (r.default = e), t && t.set(e, r), r;
      }
      function d(e) {
        return (d =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function h(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function b() {
        return (b =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function v(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return m(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return m(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              if (
                ("Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r)
              )
                return Array.from(r);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return m(e, t);
            }
          })(e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function g(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function P(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function O(e) {
        return (O = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function w(e, t) {
        return (w =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function j(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      f(r(6697)),
        f(r(4973)),
        f(r(463)),
        f(r(775)),
        f(r(9133)),
        f(r(2581)),
        f(r(6283)),
        f(r(8413)),
        f(r(1320));
      var k = Object.keys(o.propTypes),
        S = [],
        E = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && w(e, t);
          })(p, e);
          var t,
            r,
            f = function () {
              var e,
                t,
                r = O(p);
              if (
                (function () {
                  if (
                    "undefined" == typeof Reflect ||
                    !Reflect.construct ||
                    Reflect.construct.sham
                  )
                    return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Date.prototype.toString.call(
                        Reflect.construct(Date, [], function () {})
                      ),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                })()
              ) {
                var n = O(this).constructor;
                t = Reflect.construct(r, arguments, n);
              } else t = r.apply(this, arguments);
              return (e = t) && ("object" === d(e) || "function" == typeof e)
                ? e
                : P(this);
            };
          function p() {
            var e;
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, p);
            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
              r[n] = arguments[n];
            return (
              j(
                P((e = f.call.apply(f, [this].concat(r)))),
                "config",
                (0, a.getConfig)(e.props, o.defaultProps, !0)
              ),
              j(P(e), "state", { showPreview: !!e.props.light }),
              j(P(e), "handleClickPreview", function () {
                e.setState({ showPreview: !1 });
              }),
              j(P(e), "showPreview", function () {
                e.setState({ showPreview: !0 });
              }),
              j(P(e), "getDuration", function () {
                return e.player ? e.player.getDuration() : null;
              }),
              j(P(e), "getCurrentTime", function () {
                return e.player ? e.player.getCurrentTime() : null;
              }),
              j(P(e), "getSecondsLoaded", function () {
                return e.player ? e.player.getSecondsLoaded() : null;
              }),
              j(P(e), "getInternalPlayer", function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "player";
                return e.player ? e.player.getInternalPlayer(t) : null;
              }),
              j(P(e), "seekTo", function (t, r) {
                if (!e.player) return null;
                e.player.seekTo(t, r);
              }),
              j(P(e), "handleReady", function () {
                e.props.onReady(P(e));
              }),
              j(P(e), "wrapperRef", function (t) {
                e.wrapper = t;
              }),
              j(P(e), "activePlayerRef", function (t) {
                e.player = t;
              }),
              e
            );
          }
          return (
            (t = [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.progressFrequency &&
                    console.warn(
                      "ReactPlayer: %cprogressFrequency%c is deprecated, please use %cprogressInterval%c instead",
                      "font-weight: bold",
                      "",
                      "font-weight: bold",
                      ""
                    );
                },
              },
              {
                key: "shouldComponentUpdate",
                value: function (e, t) {
                  return (
                    !(0, a.isEqual)(this.props, e) ||
                    !(0, a.isEqual)(this.state, t)
                  );
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  var t = this.props.light;
                  (this.config = (0, a.getConfig)(this.props, o.defaultProps)),
                    !e.light && t && this.setState({ showPreview: !0 }),
                    e.light && !t && this.setState({ showPreview: !1 });
                },
              },
              {
                key: "getActivePlayer",
                value: function (e) {
                  for (
                    var t = 0, r = [].concat(v(S), v(i.default));
                    t < r.length;
                    t++
                  ) {
                    var n = r[t];
                    if (n.canPlay(e)) return n;
                  }
                  return c.FilePlayer;
                },
              },
              {
                key: "renderActivePlayer",
                value: function (e, t) {
                  return e
                    ? n.default.createElement(
                        u.default,
                        b({}, this.props, {
                          key: t.displayName,
                          ref: this.activePlayerRef,
                          config: this.config,
                          activePlayer: t,
                          onReady: this.handleReady,
                        })
                      )
                    : null;
                },
              },
              {
                key: "sortPlayers",
                value: function (e, t) {
                  return e && t ? (e.key < t.key ? -1 : 1) : 0;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.url,
                    r = e.controls,
                    i = e.style,
                    u = e.width,
                    c = e.height,
                    f = e.light,
                    p = e.playIcon,
                    y = e.wrapper,
                    d = this.state.showPreview && t,
                    m = (0, a.omit)(this.props, k, o.DEPRECATED_CONFIG_PROPS),
                    g = this.getActivePlayer(t),
                    P = [this.renderActivePlayer(t, g)]
                      .concat(v((0, s.default)(t, r, this.config)))
                      .sort(this.sortPlayers),
                    O = n.default.createElement(l.default, {
                      url: t,
                      light: f,
                      playIcon: p,
                      onClick: this.handleClickPreview,
                    });
                  return n.default.createElement(
                    y,
                    b(
                      {
                        ref: this.wrapperRef,
                        style: (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2
                              ? h(Object(r), !0).forEach(function (t) {
                                  j(e, t, r[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(r)
                                )
                              : h(Object(r)).forEach(function (t) {
                                  Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(r, t)
                                  );
                                });
                          }
                          return e;
                        })({}, i, { width: u, height: c }),
                      },
                      m
                    ),
                    d ? O : P
                  );
                },
              },
            ]),
            g(p.prototype, t),
            r && g(p, r),
            p
          );
        })(n.Component);
      (t.ZP = E),
        j(E, "addCustomPlayer", function (e) {
          S.push(e);
        }),
        j(E, "removeCustomPlayers", function () {
          S = [];
        }),
        j(E, "displayName", "ReactPlayer"),
        j(E, "propTypes", o.propTypes),
        j(E, "defaultProps", o.defaultProps),
        j(E, "canPlay", function (e) {
          for (var t = 0, r = [].concat(v(S), v(i.default)); t < r.length; t++)
            if (r[t].canPlay(e)) return !0;
          return !1;
        }),
        j(E, "canEnablePIP", function (e) {
          for (
            var t = 0, r = [].concat(v(S), v(i.default));
            t < r.length;
            t++
          ) {
            var n = r[t];
            if (n.canEnablePIP && n.canEnablePIP(e)) return !0;
          }
          return !1;
        });
    },
    8413: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.DailyMotion = void 0);
      var n,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== l(e) && "function" != typeof e))
            return { default: e };
          var t = u();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(r, o, a)
                : (r[o] = e[o]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(2983)),
        a = r(4870),
        i = (n = r(8466)) && n.__esModule ? n : { default: n };
      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function l(e) {
        return (l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function f(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function p(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function y(e) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function d(e, t) {
        return (d =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function h(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var b =
          /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/,
        v = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && d(e, t);
          })(i, e);
          var t,
            r,
            n = function () {
              var e,
                t,
                r = y(i);
              if (
                (function () {
                  if (
                    "undefined" == typeof Reflect ||
                    !Reflect.construct ||
                    Reflect.construct.sham
                  )
                    return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Date.prototype.toString.call(
                        Reflect.construct(Date, [], function () {})
                      ),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                })()
              ) {
                var n = y(this).constructor;
                t = Reflect.construct(r, arguments, n);
              } else t = r.apply(this, arguments);
              return (e = t) && ("object" === l(e) || "function" == typeof e)
                ? e
                : p(this);
            };
          function i() {
            var e;
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, i);
            for (var t = arguments.length, r = Array(t), o = 0; o < t; o++)
              r[o] = arguments[o];
            return (
              h(
                p((e = n.call.apply(n, [this].concat(r)))),
                "callPlayer",
                a.callPlayer
              ),
              h(p(e), "onDurationChange", function () {
                var t = e.getDuration();
                e.props.onDuration(t);
              }),
              h(p(e), "mute", function () {
                e.callPlayer("setMuted", !0);
              }),
              h(p(e), "unmute", function () {
                e.callPlayer("setMuted", !1);
              }),
              h(p(e), "ref", function (t) {
                e.container = t;
              }),
              e
            );
          }
          return (
            (t = [
              {
                key: "load",
                value: function (e) {
                  var t,
                    r = this,
                    n = this.props,
                    o = n.controls,
                    i = n.config,
                    u = n.onError,
                    l = n.playing,
                    f = ((function (e) {
                      if (Array.isArray(e)) return e;
                    })((t = e.match(b))) ||
                      (function (e, t) {
                        if (
                          "undefined" != typeof Symbol &&
                          Symbol.iterator in Object(e)
                        ) {
                          var r = [],
                            n = !0,
                            o = !1,
                            a = void 0;
                          try {
                            for (
                              var i, u = e[Symbol.iterator]();
                              !(n = (i = u.next()).done) &&
                              (r.push(i.value), !t || r.length !== t);
                              n = !0
                            );
                          } catch (e) {
                            (o = !0), (a = e);
                          } finally {
                            try {
                              n || null == u.return || u.return();
                            } finally {
                              if (o) throw a;
                            }
                          }
                          return r;
                        }
                      })(t, 2) ||
                      (function (e, t) {
                        if (e) {
                          if ("string" == typeof e) return s(e, t);
                          var r = Object.prototype.toString
                            .call(e)
                            .slice(8, -1);
                          if (
                            ("Object" === r &&
                              e.constructor &&
                              (r = e.constructor.name),
                            "Map" === r || "Set" === r)
                          )
                            return Array.from(r);
                          if (
                            "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          )
                            return s(e, t);
                        }
                      })(t, 2) ||
                      (function () {
                        throw TypeError(
                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })())[1];
                  if (this.player) {
                    this.player.load(f, {
                      start: (0, a.parseStartTime)(e),
                      autoplay: l,
                    });
                    return;
                  }
                  (0, a.getSDK)(
                    "https://api.dmcdn.net/all.js",
                    "DM",
                    "dmAsyncInit",
                    function (e) {
                      return e.player;
                    }
                  ).then(function (t) {
                    if (r.container) {
                      var n = t.player;
                      r.player = new n(r.container, {
                        width: "100%",
                        height: "100%",
                        video: f,
                        params: (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2
                              ? c(Object(r), !0).forEach(function (t) {
                                  h(e, t, r[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(r)
                                )
                              : c(Object(r)).forEach(function (t) {
                                  Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(r, t)
                                  );
                                });
                          }
                          return e;
                        })(
                          {
                            controls: o,
                            autoplay: r.props.playing,
                            mute: r.props.muted,
                            start: (0, a.parseStartTime)(e),
                            origin: window.location.origin,
                          },
                          i.dailymotion.params
                        ),
                        events: {
                          apiready: r.props.onReady,
                          seeked: function () {
                            return r.props.onSeek(r.player.currentTime);
                          },
                          video_end: r.props.onEnded,
                          durationchange: r.onDurationChange,
                          pause: r.props.onPause,
                          playing: r.props.onPlay,
                          waiting: r.props.onBuffer,
                          error: function (e) {
                            return u(e);
                          },
                        },
                      });
                    }
                  }, u);
                },
              },
              {
                key: "play",
                value: function () {
                  this.callPlayer("play");
                },
              },
              {
                key: "pause",
                value: function () {
                  this.callPlayer("pause");
                },
              },
              { key: "stop", value: function () {} },
              {
                key: "seekTo",
                value: function (e) {
                  this.callPlayer("seek", e);
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.callPlayer("setVolume", e);
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.player.duration || null;
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.player.currentTime;
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  return this.player.bufferedTime;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.display;
                  return o.default.createElement(
                    "div",
                    { style: { width: "100%", height: "100%", display: e } },
                    o.default.createElement("div", { ref: this.ref })
                  );
                },
              },
            ]),
            f(i.prototype, t),
            r && f(i, r),
            i
          );
        })(o.Component);
      (t.DailyMotion = v),
        h(v, "displayName", "DailyMotion"),
        h(v, "canPlay", function (e) {
          return b.test(e);
        }),
        h(v, "loopOnEnded", !0);
      var m = (0, i.default)(v);
      t.default = m;
    },
    775: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.Facebook = void 0);
      var n,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== l(e) && "function" != typeof e))
            return { default: e };
          var t = u();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(r, o, a)
                : (r[o] = e[o]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(2983)),
        a = r(4870),
        i = (n = r(8466)) && n.__esModule ? n : { default: n };
      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function l(e) {
        return (l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function c(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function s(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function f(e) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function y(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var d = "https://connect.facebook.net/en_US/sdk.js",
        h = "fbAsyncInit",
        b =
          /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,
        v = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && p(e, t);
          })(i, e);
          var t,
            r,
            n = function () {
              var e,
                t,
                r = f(i);
              if (
                (function () {
                  if (
                    "undefined" == typeof Reflect ||
                    !Reflect.construct ||
                    Reflect.construct.sham
                  )
                    return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Date.prototype.toString.call(
                        Reflect.construct(Date, [], function () {})
                      ),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                })()
              ) {
                var n = f(this).constructor;
                t = Reflect.construct(r, arguments, n);
              } else t = r.apply(this, arguments);
              return (e = t) && ("object" === l(e) || "function" == typeof e)
                ? e
                : s(this);
            };
          function i() {
            var e;
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, i);
            for (var t = arguments.length, r = Array(t), o = 0; o < t; o++)
              r[o] = arguments[o];
            return (
              y(
                s((e = n.call.apply(n, [this].concat(r)))),
                "callPlayer",
                a.callPlayer
              ),
              y(
                s(e),
                "playerID",
                e.props.config.facebook.playerId ||
                  "".concat("facebook-player-").concat((0, a.randomString)())
              ),
              y(s(e), "mute", function () {
                e.callPlayer("mute");
              }),
              y(s(e), "unmute", function () {
                e.callPlayer("unmute");
              }),
              e
            );
          }
          return (
            (t = [
              {
                key: "load",
                value: function (e, t) {
                  var r = this;
                  if (t) {
                    (0, a.getSDK)(d, "FB", h).then(function (e) {
                      return e.XFBML.parse();
                    });
                    return;
                  }
                  (0, a.getSDK)(d, "FB", h).then(function (e) {
                    e.init({
                      appId: r.props.config.facebook.appId,
                      xfbml: !0,
                      version: r.props.config.facebook.version,
                    }),
                      e.Event.subscribe("xfbml.render", function (e) {
                        r.props.onLoaded();
                      }),
                      e.Event.subscribe("xfbml.ready", function (e) {
                        "video" === e.type &&
                          e.id === r.playerID &&
                          ((r.player = e.instance),
                          r.player.subscribe("startedPlaying", r.props.onPlay),
                          r.player.subscribe("paused", r.props.onPause),
                          r.player.subscribe(
                            "finishedPlaying",
                            r.props.onEnded
                          ),
                          r.player.subscribe(
                            "startedBuffering",
                            r.props.onBuffer
                          ),
                          r.player.subscribe(
                            "finishedBuffering",
                            r.props.onBufferEnd
                          ),
                          r.player.subscribe("error", r.props.onError),
                          r.props.muted || r.callPlayer("unmute"),
                          r.props.onReady(),
                          (document
                            .getElementById(r.playerID)
                            .querySelector("iframe").style.visibility =
                            "visible"));
                      });
                  });
                },
              },
              {
                key: "play",
                value: function () {
                  this.callPlayer("play");
                },
              },
              {
                key: "pause",
                value: function () {
                  this.callPlayer("pause");
                },
              },
              { key: "stop", value: function () {} },
              {
                key: "seekTo",
                value: function (e) {
                  this.callPlayer("seek", e);
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.callPlayer("setVolume", e);
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.callPlayer("getDuration");
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.callPlayer("getCurrentPosition");
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  return null;
                },
              },
              {
                key: "render",
                value: function () {
                  return o.default.createElement("div", {
                    style: { width: "100%", height: "100%" },
                    id: this.playerID,
                    className: "fb-video",
                    "data-href": this.props.url,
                    "data-autoplay": this.props.playing ? "true" : "false",
                    "data-allowfullscreen": "true",
                    "data-controls": this.props.controls ? "true" : "false",
                  });
                },
              },
            ]),
            c(i.prototype, t),
            r && c(i, r),
            i
          );
        })(o.Component);
      (t.Facebook = v),
        y(v, "displayName", "Facebook"),
        y(v, "canPlay", function (e) {
          return b.test(e);
        }),
        y(v, "loopOnEnded", !0);
      var m = (0, i.default)(v);
      t.default = m;
    },
    1297: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.FilePlayer = void 0);
      var n,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== l(e) && "function" != typeof e))
            return { default: e };
          var t = u();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(r, o, a)
                : (r[o] = e[o]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(2983)),
        a = r(4870),
        i = (n = r(8466)) && n.__esModule ? n : { default: n };
      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function l(e) {
        return (l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function c() {
        return (c =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function s(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function f(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function y(e, t) {
        return (y =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function d(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var b =
          "undefined" != typeof navigator &&
          /iPad|iPhone|iPod/.test(navigator.userAgent) &&
          !window.MSStream,
        v =
          /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
        m = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i,
        g = /\.(m3u8)($|\?)/i,
        P = /\.(mpd)($|\?)/i,
        O = /www\.dropbox\.com\/.+/;
      function w(e) {
        if (e instanceof Array) {
          var t,
            r = (function (e) {
              if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (
                  Array.isArray(e) ||
                  (e = (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return h(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      if (
                        ("Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r)
                      )
                        return Array.from(r);
                      if (
                        "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      )
                        return h(e, t);
                    }
                  })(e))
                ) {
                  var t = 0,
                    r = function () {};
                  return {
                    s: r,
                    n: function () {
                      return t >= e.length
                        ? { done: !0 }
                        : { done: !1, value: e[t++] };
                    },
                    e: function (e) {
                      throw e;
                    },
                    f: r,
                  };
                }
                throw TypeError(
                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              }
              var n,
                o,
                a = !0,
                i = !1;
              return {
                s: function () {
                  n = e[Symbol.iterator]();
                },
                n: function () {
                  var e = n.next();
                  return (a = e.done), e;
                },
                e: function (e) {
                  (i = !0), (o = e);
                },
                f: function () {
                  try {
                    a || null == n.return || n.return();
                  } finally {
                    if (i) throw o;
                  }
                },
              };
            })(e);
          try {
            for (r.s(); !(t = r.n()).done; ) {
              var n = t.value;
              if (("string" == typeof n && w(n)) || w(n.src)) return !0;
            }
          } catch (e) {
            r.e(e);
          } finally {
            r.f();
          }
          return !1;
        }
        return (
          !!(0, a.isMediaStream)(e) ||
          v.test(e) ||
          m.test(e) ||
          g.test(e) ||
          P.test(e)
        );
      }
      function j(e) {
        return (
          e || (e = document.createElement("video")),
          e.webkitSupportsPresentationMode &&
            "function" == typeof e.webkitSetPresentationMode &&
            !/iPhone|iPod/.test(navigator.userAgent)
        );
      }
      var k = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && y(e, t);
        })(i, e);
        var t,
          r,
          n = function () {
            var e,
              t,
              r = p(i);
            if (
              (function () {
                if (
                  "undefined" == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()
            ) {
              var n = p(this).constructor;
              t = Reflect.construct(r, arguments, n);
            } else t = r.apply(this, arguments);
            return (e = t) && ("object" === l(e) || "function" == typeof e)
              ? e
              : f(this);
          };
        function i() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, i);
          for (var t = arguments.length, r = Array(t), a = 0; a < t; a++)
            r[a] = arguments[a];
          return (
            d(
              f((e = n.call.apply(n, [this].concat(r)))),
              "onReady",
              function () {
                var t;
                return (t = e.props).onReady.apply(t, arguments);
              }
            ),
            d(f(e), "onPlay", function () {
              var t;
              return (t = e.props).onPlay.apply(t, arguments);
            }),
            d(f(e), "onBuffer", function () {
              var t;
              return (t = e.props).onBuffer.apply(t, arguments);
            }),
            d(f(e), "onBufferEnd", function () {
              var t;
              return (t = e.props).onBufferEnd.apply(t, arguments);
            }),
            d(f(e), "onPause", function () {
              var t;
              return (t = e.props).onPause.apply(t, arguments);
            }),
            d(f(e), "onEnded", function () {
              var t;
              return (t = e.props).onEnded.apply(t, arguments);
            }),
            d(f(e), "onError", function () {
              var t;
              return (t = e.props).onError.apply(t, arguments);
            }),
            d(f(e), "onEnablePIP", function () {
              var t;
              return (t = e.props).onEnablePIP.apply(t, arguments);
            }),
            d(f(e), "onDisablePIP", function (t) {
              var r = e.props,
                n = r.onDisablePIP,
                o = r.playing;
              n(t), o && e.play();
            }),
            d(f(e), "onPresentationModeChange", function (t) {
              if (e.player && j(e.player)) {
                var r = e.player.webkitPresentationMode;
                "picture-in-picture" === r
                  ? e.onEnablePIP(t)
                  : "inline" === r && e.onDisablePIP(t);
              }
            }),
            d(f(e), "onSeek", function (t) {
              e.props.onSeek(t.target.currentTime);
            }),
            d(f(e), "mute", function () {
              e.player.muted = !0;
            }),
            d(f(e), "unmute", function () {
              e.player.muted = !1;
            }),
            d(f(e), "renderSourceElement", function (e, t) {
              return "string" == typeof e
                ? o.default.createElement("source", { key: t, src: e })
                : o.default.createElement("source", c({ key: t }, e));
            }),
            d(f(e), "renderTrack", function (e, t) {
              return o.default.createElement("track", c({ key: t }, e));
            }),
            d(f(e), "ref", function (t) {
              e.player && (e.prevPlayer = e.player), (e.player = t);
            }),
            e
          );
        }
        return (
          (t = [
            {
              key: "componentDidMount",
              value: function () {
                this.addListeners(this.player), b && this.player.load();
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                this.shouldUseAudio(this.props) !== this.shouldUseAudio(e) &&
                  (this.removeListeners(this.prevPlayer),
                  this.addListeners(this.player));
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.removeListeners(this.player),
                  this.hls && this.hls.destroy();
              },
            },
            {
              key: "addListeners",
              value: function (e) {
                var t = this.props.playsinline;
                e.addEventListener("canplay", this.onReady),
                  e.addEventListener("play", this.onPlay),
                  e.addEventListener("waiting", this.onBuffer),
                  e.addEventListener("playing", this.onBufferEnd),
                  e.addEventListener("pause", this.onPause),
                  e.addEventListener("seeked", this.onSeek),
                  e.addEventListener("ended", this.onEnded),
                  e.addEventListener("error", this.onError),
                  e.addEventListener("enterpictureinpicture", this.onEnablePIP),
                  e.addEventListener(
                    "leavepictureinpicture",
                    this.onDisablePIP
                  ),
                  e.addEventListener(
                    "webkitpresentationmodechanged",
                    this.onPresentationModeChange
                  ),
                  t &&
                    (e.setAttribute("playsinline", ""),
                    e.setAttribute("webkit-playsinline", ""),
                    e.setAttribute("x5-playsinline", ""));
              },
            },
            {
              key: "removeListeners",
              value: function (e) {
                e.removeEventListener("canplay", this.onReady),
                  e.removeEventListener("play", this.onPlay),
                  e.removeEventListener("waiting", this.onBuffer),
                  e.removeEventListener("playing", this.onBufferEnd),
                  e.removeEventListener("pause", this.onPause),
                  e.removeEventListener("seeked", this.onSeek),
                  e.removeEventListener("ended", this.onEnded),
                  e.removeEventListener("error", this.onError),
                  e.removeEventListener(
                    "enterpictureinpicture",
                    this.onEnablePIP
                  ),
                  e.removeEventListener(
                    "leavepictureinpicture",
                    this.onDisablePIP
                  ),
                  e.removeEventListener(
                    "webkitpresentationmodechanged",
                    this.onPresentationModeChange
                  );
              },
            },
            {
              key: "shouldUseAudio",
              value: function (e) {
                return (
                  !e.config.file.forceVideo &&
                  !e.config.file.attributes.poster &&
                  (v.test(e.url) || e.config.file.forceAudio)
                );
              },
            },
            {
              key: "shouldUseHLS",
              value: function (e) {
                return (g.test(e) && !b) || this.props.config.file.forceHLS;
              },
            },
            {
              key: "shouldUseDASH",
              value: function (e) {
                return P.test(e) || this.props.config.file.forceDASH;
              },
            },
            {
              key: "load",
              value: function (e) {
                var t = this,
                  r = this.props.config.file,
                  n = r.hlsVersion,
                  o = r.dashVersion;
                if (
                  (this.shouldUseHLS(e) &&
                    (0, a.getSDK)(
                      "https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js".replace(
                        "VERSION",
                        n
                      ),
                      "Hls"
                    ).then(function (r) {
                      (t.hls = new r(t.props.config.file.hlsOptions)),
                        t.hls.on(r.Events.ERROR, function (e, n) {
                          t.props.onError(e, n, t.hls, r);
                        }),
                        t.hls.loadSource(e),
                        t.hls.attachMedia(t.player);
                    }),
                  this.shouldUseDASH(e) &&
                    (0, a.getSDK)(
                      "https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js".replace(
                        "VERSION",
                        o
                      ),
                      "dashjs"
                    ).then(function (r) {
                      (t.dash = r.MediaPlayer().create()),
                        t.dash.initialize(t.player, e, t.props.playing),
                        t.dash.on("error", t.props.onError),
                        t.dash.getDebug().setLogToBrowserConsole(!1);
                    }),
                  e instanceof Array)
                )
                  this.player.load();
                else if ((0, a.isMediaStream)(e))
                  try {
                    this.player.srcObject = e;
                  } catch (t) {
                    this.player.src = window.URL.createObjectURL(e);
                  }
              },
            },
            {
              key: "play",
              value: function () {
                var e = this.player.play();
                e && e.catch(this.props.onError);
              },
            },
            {
              key: "pause",
              value: function () {
                this.player.pause();
              },
            },
            {
              key: "stop",
              value: function () {
                this.player.removeAttribute("src"),
                  this.dash && this.dash.reset();
              },
            },
            {
              key: "seekTo",
              value: function (e) {
                this.player.currentTime = e;
              },
            },
            {
              key: "setVolume",
              value: function (e) {
                this.player.volume = e;
              },
            },
            {
              key: "enablePIP",
              value: function () {
                this.player.requestPictureInPicture &&
                document.pictureInPictureElement !== this.player
                  ? this.player.requestPictureInPicture()
                  : j(this.player) &&
                    "picture-in-picture" !==
                      this.player.webkitPresentationMode &&
                    this.player.webkitSetPresentationMode("picture-in-picture");
              },
            },
            {
              key: "disablePIP",
              value: function () {
                document.exitPictureInPicture &&
                document.pictureInPictureElement === this.player
                  ? document.exitPictureInPicture()
                  : j(this.player) &&
                    "inline" !== this.player.webkitPresentationMode &&
                    this.player.webkitSetPresentationMode("inline");
              },
            },
            {
              key: "setPlaybackRate",
              value: function (e) {
                this.player.playbackRate = e;
              },
            },
            {
              key: "getDuration",
              value: function () {
                if (!this.player) return null;
                var e = this.player,
                  t = e.duration,
                  r = e.seekable;
                return t === 1 / 0 && r.length > 0 ? r.end(r.length - 1) : t;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.player ? this.player.currentTime : null;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                if (!this.player) return null;
                var e = this.player.buffered;
                if (0 === e.length) return 0;
                var t = e.end(e.length - 1),
                  r = this.getDuration();
                return t > r ? r : t;
              },
            },
            {
              key: "getSource",
              value: function (e) {
                var t = this.shouldUseHLS(e),
                  r = this.shouldUseDASH(e);
                return e instanceof Array || (0, a.isMediaStream)(e) || t || r
                  ? void 0
                  : O.test(e)
                  ? e.replace("www.dropbox.com", "dl.dropboxusercontent.com")
                  : e;
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.url,
                  r = e.playing,
                  n = e.loop,
                  a = e.controls,
                  i = e.muted,
                  u = e.config,
                  l = e.width,
                  s = e.height,
                  f = this.shouldUseAudio(this.props);
                return o.default.createElement(
                  f ? "audio" : "video",
                  c(
                    {
                      ref: this.ref,
                      src: this.getSource(t),
                      style: {
                        width: "auto" === l ? l : "100%",
                        height: "auto" === s ? s : "100%",
                      },
                      preload: "auto",
                      autoPlay: r || void 0,
                      controls: a,
                      muted: i,
                      loop: n,
                    },
                    u.file.attributes
                  ),
                  t instanceof Array && t.map(this.renderSourceElement),
                  u.file.tracks.map(this.renderTrack)
                );
              },
            },
          ]),
          s(i.prototype, t),
          r && s(i, r),
          i
        );
      })(o.Component);
      (t.FilePlayer = k),
        d(k, "displayName", "FilePlayer"),
        d(k, "canPlay", w),
        d(k, "canEnablePIP", function (e) {
          return (
            w(e) && (!!document.pictureInPictureEnabled || j()) && !v.test(e)
          );
        });
      var S = (0, i.default)(k);
      t.default = S;
    },
    1320: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.Mixcloud = void 0);
      var n,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== l(e) && "function" != typeof e))
            return { default: e };
          var t = u();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(r, o, a)
                : (r[o] = e[o]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(2983)),
        a = r(4870),
        i = (n = r(8466)) && n.__esModule ? n : { default: n };
      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function l(e) {
        return (l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function f(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function y(e, t) {
        return (y =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function d(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var h = /mixcloud\.com\/([^/]+\/[^/]+)/,
        b = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && y(e, t);
          })(i, e);
          var t,
            r,
            n = function () {
              var e,
                t,
                r = p(i);
              if (
                (function () {
                  if (
                    "undefined" == typeof Reflect ||
                    !Reflect.construct ||
                    Reflect.construct.sham
                  )
                    return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Date.prototype.toString.call(
                        Reflect.construct(Date, [], function () {})
                      ),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                })()
              ) {
                var n = p(this).constructor;
                t = Reflect.construct(r, arguments, n);
              } else t = r.apply(this, arguments);
              return (e = t) && ("object" === l(e) || "function" == typeof e)
                ? e
                : f(this);
            };
          function i() {
            var e;
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, i);
            for (var t = arguments.length, r = Array(t), o = 0; o < t; o++)
              r[o] = arguments[o];
            return (
              d(
                f((e = n.call.apply(n, [this].concat(r)))),
                "callPlayer",
                a.callPlayer
              ),
              d(f(e), "duration", null),
              d(f(e), "currentTime", null),
              d(f(e), "secondsLoaded", null),
              d(f(e), "mute", function () {}),
              d(f(e), "unmute", function () {}),
              d(f(e), "ref", function (t) {
                e.iframe = t;
              }),
              e
            );
          }
          return (
            (t = [
              {
                key: "load",
                value: function (e) {
                  var t = this;
                  (0, a.getSDK)(
                    "https://widget.mixcloud.com/media/js/widgetApi.js",
                    "Mixcloud"
                  ).then(function (e) {
                    (t.player = e.PlayerWidget(t.iframe)),
                      t.player.ready.then(function () {
                        t.player.events.play.on(t.props.onPlay),
                          t.player.events.pause.on(t.props.onPause),
                          t.player.events.ended.on(t.props.onEnded),
                          t.player.events.error.on(t.props.error),
                          t.player.events.progress.on(function (e, r) {
                            (t.currentTime = e), (t.duration = r);
                          }),
                          t.props.onReady();
                      });
                  }, this.props.onError);
                },
              },
              {
                key: "play",
                value: function () {
                  this.callPlayer("play");
                },
              },
              {
                key: "pause",
                value: function () {
                  this.callPlayer("pause");
                },
              },
              { key: "stop", value: function () {} },
              {
                key: "seekTo",
                value: function (e) {
                  this.callPlayer("seek", e);
                },
              },
              { key: "setVolume", value: function (e) {} },
              {
                key: "getDuration",
                value: function () {
                  return this.duration;
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.currentTime;
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  return null;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.url,
                    r = e.config,
                    n = t.match(h)[1],
                    i = (0, a.queryString)(
                      (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var r = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? c(Object(r), !0).forEach(function (t) {
                                d(e, t, r[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(r)
                              )
                            : c(Object(r)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t)
                                );
                              });
                        }
                        return e;
                      })({}, r.mixcloud.options, { feed: "/".concat(n, "/") })
                    );
                  return o.default.createElement("iframe", {
                    key: n,
                    ref: this.ref,
                    style: { width: "100%", height: "100%" },
                    src: "https://www.mixcloud.com/widget/iframe/?".concat(i),
                    frameBorder: "0",
                  });
                },
              },
            ]),
            s(i.prototype, t),
            r && s(i, r),
            i
          );
        })(o.Component);
      (t.Mixcloud = b),
        d(b, "displayName", "Mixcloud"),
        d(b, "canPlay", function (e) {
          return h.test(e);
        }),
        d(b, "loopOnEnded", !0);
      var v = (0, i.default)(b);
      t.default = v;
    },
    4973: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.SoundCloud = void 0);
      var n,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== l(e) && "function" != typeof e))
            return { default: e };
          var t = u();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(r, o, a)
                : (r[o] = e[o]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(2983)),
        a = r(4870),
        i = (n = r(8466)) && n.__esModule ? n : { default: n };
      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function l(e) {
        return (l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function f(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function y(e, t) {
        return (y =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function d(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var h = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/,
        b = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && y(e, t);
          })(i, e);
          var t,
            r,
            n = function () {
              var e,
                t,
                r = p(i);
              if (
                (function () {
                  if (
                    "undefined" == typeof Reflect ||
                    !Reflect.construct ||
                    Reflect.construct.sham
                  )
                    return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Date.prototype.toString.call(
                        Reflect.construct(Date, [], function () {})
                      ),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                })()
              ) {
                var n = p(this).constructor;
                t = Reflect.construct(r, arguments, n);
              } else t = r.apply(this, arguments);
              return (e = t) && ("object" === l(e) || "function" == typeof e)
                ? e
                : f(this);
            };
          function i() {
            var e;
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, i);
            for (var t = arguments.length, r = Array(t), o = 0; o < t; o++)
              r[o] = arguments[o];
            return (
              d(
                f((e = n.call.apply(n, [this].concat(r)))),
                "callPlayer",
                a.callPlayer
              ),
              d(f(e), "duration", null),
              d(f(e), "currentTime", null),
              d(f(e), "fractionLoaded", null),
              d(f(e), "mute", function () {
                e.setVolume(0);
              }),
              d(f(e), "unmute", function () {
                null !== e.props.volume && e.setVolume(e.props.volume);
              }),
              d(f(e), "ref", function (t) {
                e.iframe = t;
              }),
              e
            );
          }
          return (
            (t = [
              {
                key: "load",
                value: function (e, t) {
                  var r = this;
                  (0, a.getSDK)(
                    "https://w.soundcloud.com/player/api.js",
                    "SC"
                  ).then(function (n) {
                    if (r.iframe) {
                      var o = n.Widget.Events,
                        a = o.PLAY,
                        i = o.PLAY_PROGRESS,
                        u = o.PAUSE,
                        l = o.FINISH,
                        s = o.ERROR;
                      t ||
                        ((r.player = n.Widget(r.iframe)),
                        r.player.bind(a, r.props.onPlay),
                        r.player.bind(u, r.props.onPause),
                        r.player.bind(i, function (e) {
                          (r.currentTime = e.currentPosition / 1e3),
                            (r.fractionLoaded = e.loadedProgress);
                        }),
                        r.player.bind(l, function () {
                          return r.props.onEnded();
                        }),
                        r.player.bind(s, function (e) {
                          return r.props.onError(e);
                        })),
                        r.player.load(
                          e,
                          (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var r = null != arguments[t] ? arguments[t] : {};
                              t % 2
                                ? c(Object(r), !0).forEach(function (t) {
                                    d(e, t, r[t]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(
                                    e,
                                    Object.getOwnPropertyDescriptors(r)
                                  )
                                : c(Object(r)).forEach(function (t) {
                                    Object.defineProperty(
                                      e,
                                      t,
                                      Object.getOwnPropertyDescriptor(r, t)
                                    );
                                  });
                            }
                            return e;
                          })({}, r.props.config.soundcloud.options, {
                            callback: function () {
                              r.player.getDuration(function (e) {
                                (r.duration = e / 1e3), r.props.onReady();
                              });
                            },
                          })
                        );
                    }
                  });
                },
              },
              {
                key: "play",
                value: function () {
                  this.callPlayer("play");
                },
              },
              {
                key: "pause",
                value: function () {
                  this.callPlayer("pause");
                },
              },
              { key: "stop", value: function () {} },
              {
                key: "seekTo",
                value: function (e) {
                  this.callPlayer("seekTo", 1e3 * e);
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.callPlayer("setVolume", 100 * e);
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.duration;
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.currentTime;
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  return this.fractionLoaded * this.duration;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.display;
                  return o.default.createElement("iframe", {
                    ref: this.ref,
                    src: "https://w.soundcloud.com/player/?url=".concat(
                      encodeURIComponent(this.props.url)
                    ),
                    style: { width: "100%", height: "100%", display: e },
                    frameBorder: 0,
                    allow: "autoplay",
                  });
                },
              },
            ]),
            s(i.prototype, t),
            r && s(i, r),
            i
          );
        })(o.Component);
      (t.SoundCloud = b),
        d(b, "displayName", "SoundCloud"),
        d(b, "canPlay", function (e) {
          return h.test(e);
        }),
        d(b, "loopOnEnded", !0);
      var v = (0, i.default)(b);
      t.default = v;
    },
    9133: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.Streamable = void 0);
      var n,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== l(e) && "function" != typeof e))
            return { default: e };
          var t = u();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(r, o, a)
                : (r[o] = e[o]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(2983)),
        a = r(4870),
        i = (n = r(8466)) && n.__esModule ? n : { default: n };
      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function l(e) {
        return (l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function c(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function s(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function f(e) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function y(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var d = /streamable\.com\/([a-z0-9]+)$/,
        h = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && p(e, t);
          })(i, e);
          var t,
            r,
            n = function () {
              var e,
                t,
                r = f(i);
              if (
                (function () {
                  if (
                    "undefined" == typeof Reflect ||
                    !Reflect.construct ||
                    Reflect.construct.sham
                  )
                    return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Date.prototype.toString.call(
                        Reflect.construct(Date, [], function () {})
                      ),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                })()
              ) {
                var n = f(this).constructor;
                t = Reflect.construct(r, arguments, n);
              } else t = r.apply(this, arguments);
              return (e = t) && ("object" === l(e) || "function" == typeof e)
                ? e
                : s(this);
            };
          function i() {
            var e;
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, i);
            for (var t = arguments.length, r = Array(t), o = 0; o < t; o++)
              r[o] = arguments[o];
            return (
              y(
                s((e = n.call.apply(n, [this].concat(r)))),
                "callPlayer",
                a.callPlayer
              ),
              y(s(e), "duration", null),
              y(s(e), "currentTime", null),
              y(s(e), "secondsLoaded", null),
              y(s(e), "mute", function () {
                e.callPlayer("mute");
              }),
              y(s(e), "unmute", function () {
                e.callPlayer("unmute");
              }),
              y(s(e), "ref", function (t) {
                e.iframe = t;
              }),
              e
            );
          }
          return (
            (t = [
              {
                key: "load",
                value: function (e) {
                  var t = this;
                  (0, a.getSDK)(
                    "https://cdn.embed.ly/player-0.1.0.min.js",
                    "playerjs"
                  ).then(function (e) {
                    t.iframe &&
                      ((t.player = new e.Player(t.iframe)),
                      t.player.setLoop(t.props.loop),
                      t.player.on("ready", t.props.onReady),
                      t.player.on("play", t.props.onPlay),
                      t.player.on("pause", t.props.onPause),
                      t.player.on("seeked", t.props.onSeek),
                      t.player.on("ended", t.props.onEnded),
                      t.player.on("error", t.props.onError),
                      t.player.on("timeupdate", function (e) {
                        var r = e.duration,
                          n = e.seconds;
                        (t.duration = r), (t.currentTime = n);
                      }),
                      t.player.on("buffered", function (e) {
                        var r = e.percent;
                        t.duration && (t.secondsLoaded = t.duration * r);
                      }),
                      t.props.muted && t.player.mute());
                  }, this.props.onError);
                },
              },
              {
                key: "play",
                value: function () {
                  this.callPlayer("play");
                },
              },
              {
                key: "pause",
                value: function () {
                  this.callPlayer("pause");
                },
              },
              { key: "stop", value: function () {} },
              {
                key: "seekTo",
                value: function (e) {
                  this.callPlayer("setCurrentTime", e);
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.callPlayer("setVolume", 100 * e);
                },
              },
              {
                key: "setLoop",
                value: function (e) {
                  this.callPlayer("setLoop", e);
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.duration;
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.currentTime;
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  return this.secondsLoaded;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.url.match(d)[1];
                  return o.default.createElement("iframe", {
                    ref: this.ref,
                    src: "https://streamable.com/o/".concat(e),
                    frameBorder: "0",
                    scrolling: "no",
                    style: { width: "100%", height: "100%" },
                    allowFullScreen: !0,
                  });
                },
              },
            ]),
            c(i.prototype, t),
            r && c(i, r),
            i
          );
        })(o.Component);
      (t.Streamable = h),
        y(h, "displayName", "Streamable"),
        y(h, "canPlay", function (e) {
          return d.test(e);
        });
      var b = (0, i.default)(h);
      t.default = b;
    },
    6283: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.Twitch = void 0);
      var n,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== l(e) && "function" != typeof e))
            return { default: e };
          var t = u();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(r, o, a)
                : (r[o] = e[o]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(2983)),
        a = r(4870),
        i = (n = r(8466)) && n.__esModule ? n : { default: n };
      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function l(e) {
        return (l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function f(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function y(e, t) {
        return (y =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function d(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var h = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,
        b = /(?:www\.|go\.)?twitch\.tv\/([a-z0-9_]+)($|\?)/,
        v = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && y(e, t);
          })(i, e);
          var t,
            r,
            n = function () {
              var e,
                t,
                r = p(i);
              if (
                (function () {
                  if (
                    "undefined" == typeof Reflect ||
                    !Reflect.construct ||
                    Reflect.construct.sham
                  )
                    return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Date.prototype.toString.call(
                        Reflect.construct(Date, [], function () {})
                      ),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                })()
              ) {
                var n = p(this).constructor;
                t = Reflect.construct(r, arguments, n);
              } else t = r.apply(this, arguments);
              return (e = t) && ("object" === l(e) || "function" == typeof e)
                ? e
                : f(this);
            };
          function i() {
            var e;
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, i);
            for (var t = arguments.length, r = Array(t), o = 0; o < t; o++)
              r[o] = arguments[o];
            return (
              d(
                f((e = n.call.apply(n, [this].concat(r)))),
                "callPlayer",
                a.callPlayer
              ),
              d(
                f(e),
                "playerID",
                e.props.config.twitch.playerId ||
                  "".concat("twitch-player-").concat((0, a.randomString)())
              ),
              d(f(e), "mute", function () {
                e.callPlayer("setMuted", !0);
              }),
              d(f(e), "unmute", function () {
                e.callPlayer("setMuted", !1);
              }),
              e
            );
          }
          return (
            (t = [
              {
                key: "load",
                value: function (e, t) {
                  var r = this,
                    n = this.props,
                    o = n.playsinline,
                    i = n.onError,
                    u = n.config,
                    l = n.controls,
                    s = b.test(e),
                    f = s ? e.match(b)[1] : e.match(h)[1];
                  if (t) {
                    s
                      ? this.player.setChannel(f)
                      : this.player.setVideo("v" + f);
                    return;
                  }
                  (0, a.getSDK)(
                    "https://player.twitch.tv/js/embed/v1.js",
                    "Twitch"
                  ).then(function (e) {
                    r.player = new e.Player(
                      r.playerID,
                      (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var r = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? c(Object(r), !0).forEach(function (t) {
                                d(e, t, r[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(r)
                              )
                            : c(Object(r)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t)
                                );
                              });
                        }
                        return e;
                      })(
                        {
                          video: s ? "" : f,
                          channel: s ? f : "",
                          height: "100%",
                          width: "100%",
                          playsinline: o,
                          autoplay: r.props.playing,
                          muted: r.props.muted,
                          controls: !!s || l,
                        },
                        u.twitch.options
                      )
                    );
                    var t = e.Player,
                      n = t.READY,
                      a = t.PLAYING,
                      i = t.PAUSE,
                      p = t.ENDED,
                      y = t.ONLINE,
                      h = t.OFFLINE;
                    r.player.addEventListener(n, r.props.onReady),
                      r.player.addEventListener(a, r.props.onPlay),
                      r.player.addEventListener(i, r.props.onPause),
                      r.player.addEventListener(p, r.props.onEnded),
                      r.player.addEventListener(y, r.props.onLoaded),
                      r.player.addEventListener(h, r.props.onLoaded);
                  }, i);
                },
              },
              {
                key: "play",
                value: function () {
                  this.callPlayer("play");
                },
              },
              {
                key: "pause",
                value: function () {
                  this.callPlayer("pause");
                },
              },
              {
                key: "stop",
                value: function () {
                  this.callPlayer("pause");
                },
              },
              {
                key: "seekTo",
                value: function (e) {
                  this.callPlayer("seek", e);
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.callPlayer("setVolume", e);
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.callPlayer("getDuration");
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.callPlayer("getCurrentTime");
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  return null;
                },
              },
              {
                key: "render",
                value: function () {
                  return o.default.createElement("div", {
                    style: { width: "100%", height: "100%" },
                    id: this.playerID,
                  });
                },
              },
            ]),
            s(i.prototype, t),
            r && s(i, r),
            i
          );
        })(o.Component);
      (t.Twitch = v),
        d(v, "displayName", "Twitch"),
        d(v, "canPlay", function (e) {
          return h.test(e) || b.test(e);
        }),
        d(v, "loopOnEnded", !0);
      var m = (0, i.default)(v);
      t.default = m;
    },
    463: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.Vimeo = void 0);
      var n,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== l(e) && "function" != typeof e))
            return { default: e };
          var t = u();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(r, o, a)
                : (r[o] = e[o]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(2983)),
        a = r(4870),
        i = (n = r(8466)) && n.__esModule ? n : { default: n };
      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function l(e) {
        return (l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function f(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function y(e, t) {
        return (y =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function d(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var h = /vimeo\.com\/.+/,
        b = /vimeo\.com\/external\/[0-9]+\..+/,
        v = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && y(e, t);
          })(i, e);
          var t,
            r,
            n = function () {
              var e,
                t,
                r = p(i);
              if (
                (function () {
                  if (
                    "undefined" == typeof Reflect ||
                    !Reflect.construct ||
                    Reflect.construct.sham
                  )
                    return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Date.prototype.toString.call(
                        Reflect.construct(Date, [], function () {})
                      ),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                })()
              ) {
                var n = p(this).constructor;
                t = Reflect.construct(r, arguments, n);
              } else t = r.apply(this, arguments);
              return (e = t) && ("object" === l(e) || "function" == typeof e)
                ? e
                : f(this);
            };
          function i() {
            var e;
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, i);
            for (var t = arguments.length, r = Array(t), o = 0; o < t; o++)
              r[o] = arguments[o];
            return (
              d(
                f((e = n.call.apply(n, [this].concat(r)))),
                "callPlayer",
                a.callPlayer
              ),
              d(f(e), "duration", null),
              d(f(e), "currentTime", null),
              d(f(e), "secondsLoaded", null),
              d(f(e), "mute", function () {
                e.setVolume(0);
              }),
              d(f(e), "unmute", function () {
                null !== e.props.volume && e.setVolume(e.props.volume);
              }),
              d(f(e), "ref", function (t) {
                e.container = t;
              }),
              e
            );
          }
          return (
            (t = [
              {
                key: "load",
                value: function (e) {
                  var t = this;
                  (this.duration = null),
                    (0, a.getSDK)(
                      "https://player.vimeo.com/api/player.js",
                      "Vimeo"
                    ).then(function (r) {
                      t.container &&
                        ((t.player = new r.Player(
                          t.container,
                          (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var r = null != arguments[t] ? arguments[t] : {};
                              t % 2
                                ? c(Object(r), !0).forEach(function (t) {
                                    d(e, t, r[t]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(
                                    e,
                                    Object.getOwnPropertyDescriptors(r)
                                  )
                                : c(Object(r)).forEach(function (t) {
                                    Object.defineProperty(
                                      e,
                                      t,
                                      Object.getOwnPropertyDescriptor(r, t)
                                    );
                                  });
                            }
                            return e;
                          })(
                            {
                              url: e,
                              autoplay: t.props.playing,
                              muted: t.props.muted,
                              loop: t.props.loop,
                              playsinline: t.props.playsinline,
                              controls: t.props.controls,
                            },
                            t.props.config.vimeo.playerOptions
                          )
                        )),
                        t.player
                          .ready()
                          .then(function () {
                            var e = t.container.querySelector("iframe");
                            (e.style.width = "100%"), (e.style.height = "100%");
                          })
                          .catch(t.props.onError),
                        t.player.on("loaded", function () {
                          t.props.onReady(), t.refreshDuration();
                        }),
                        t.player.on("play", function () {
                          t.props.onPlay(), t.refreshDuration();
                        }),
                        t.player.on("pause", t.props.onPause),
                        t.player.on("seeked", function (e) {
                          return t.props.onSeek(e.seconds);
                        }),
                        t.player.on("ended", t.props.onEnded),
                        t.player.on("error", t.props.onError),
                        t.player.on("timeupdate", function (e) {
                          var r = e.seconds;
                          t.currentTime = r;
                        }),
                        t.player.on("progress", function (e) {
                          var r = e.seconds;
                          t.secondsLoaded = r;
                        }));
                    }, this.props.onError);
                },
              },
              {
                key: "refreshDuration",
                value: function () {
                  var e = this;
                  this.player.getDuration().then(function (t) {
                    e.duration = t;
                  });
                },
              },
              {
                key: "play",
                value: function () {
                  var e = this.callPlayer("play");
                  e && e.catch(this.props.onError);
                },
              },
              {
                key: "pause",
                value: function () {
                  this.callPlayer("pause");
                },
              },
              {
                key: "stop",
                value: function () {
                  this.callPlayer("unload");
                },
              },
              {
                key: "seekTo",
                value: function (e) {
                  this.callPlayer("setCurrentTime", e);
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.callPlayer("setVolume", e);
                },
              },
              {
                key: "setLoop",
                value: function (e) {
                  this.callPlayer("setLoop", e);
                },
              },
              {
                key: "setPlaybackRate",
                value: function (e) {
                  this.callPlayer("setPlaybackRate", e);
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.duration;
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.currentTime;
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  return this.secondsLoaded;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.display;
                  return o.default.createElement("div", {
                    key: this.props.url,
                    ref: this.ref,
                    style: {
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      display: e,
                    },
                  });
                },
              },
            ]),
            s(i.prototype, t),
            r && s(i, r),
            i
          );
        })(o.Component);
      (t.Vimeo = v),
        d(v, "displayName", "Vimeo"),
        d(v, "forceLoad", !0),
        d(v, "canPlay", function (e) {
          return !b.test(e) && h.test(e);
        });
      var m = (0, i.default)(v);
      t.default = m;
    },
    2581: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.Wistia = void 0);
      var n,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== l(e) && "function" != typeof e))
            return { default: e };
          var t = u();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(r, o, a)
                : (r[o] = e[o]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(2983)),
        a = r(4870),
        i = (n = r(8466)) && n.__esModule ? n : { default: n };
      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function l(e) {
        return (l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function f(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function y(e, t) {
        return (y =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function d(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var h = /(?:wistia\.com|wi\.st)\/(?:medias|embed)\/(.*)$/,
        b = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && y(e, t);
          })(i, e);
          var t,
            r,
            n = function () {
              var e,
                t,
                r = p(i);
              if (
                (function () {
                  if (
                    "undefined" == typeof Reflect ||
                    !Reflect.construct ||
                    Reflect.construct.sham
                  )
                    return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Date.prototype.toString.call(
                        Reflect.construct(Date, [], function () {})
                      ),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                })()
              ) {
                var n = p(this).constructor;
                t = Reflect.construct(r, arguments, n);
              } else t = r.apply(this, arguments);
              return (e = t) && ("object" === l(e) || "function" == typeof e)
                ? e
                : f(this);
            };
          function i() {
            var e;
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, i);
            for (var t = arguments.length, r = Array(t), o = 0; o < t; o++)
              r[o] = arguments[o];
            return (
              d(
                f((e = n.call.apply(n, [this].concat(r)))),
                "callPlayer",
                a.callPlayer
              ),
              d(f(e), "onPlay", function () {
                var t;
                return (t = e.props).onPlay.apply(t, arguments);
              }),
              d(f(e), "onPause", function () {
                var t;
                return (t = e.props).onPause.apply(t, arguments);
              }),
              d(f(e), "onSeek", function () {
                var t;
                return (t = e.props).onSeek.apply(t, arguments);
              }),
              d(f(e), "onEnded", function () {
                var t;
                return (t = e.props).onEnded.apply(t, arguments);
              }),
              d(f(e), "mute", function () {
                e.callPlayer("mute");
              }),
              d(f(e), "unmute", function () {
                e.callPlayer("unmute");
              }),
              e
            );
          }
          return (
            (t = [
              {
                key: "getID",
                value: function (e) {
                  return e && e.match(h)[1];
                },
              },
              {
                key: "load",
                value: function (e) {
                  var t = this,
                    r = this.props,
                    n = r.playing,
                    o = r.muted,
                    i = r.controls,
                    u = r.onReady,
                    l = r.config,
                    s = r.onError;
                  (0, a.getSDK)(
                    "https://fast.wistia.com/assets/external/E-v1.js",
                    "Wistia"
                  ).then(function () {
                    (window._wq = window._wq || []),
                      window._wq.push({
                        id: t.getID(e),
                        options: (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2
                              ? c(Object(r), !0).forEach(function (t) {
                                  d(e, t, r[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(r)
                                )
                              : c(Object(r)).forEach(function (t) {
                                  Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(r, t)
                                  );
                                });
                          }
                          return e;
                        })(
                          {
                            autoPlay: n,
                            silentAutoPlay: "allow",
                            muted: o,
                            controlsVisibleOnLoad: i,
                          },
                          l.wistia.options
                        ),
                        onReady: function (e) {
                          (t.player = e),
                            t.unbind(),
                            t.player.bind("play", t.onPlay),
                            t.player.bind("pause", t.onPause),
                            t.player.bind("seek", t.onSeek),
                            t.player.bind("end", t.onEnded),
                            u();
                        },
                      });
                  }, s);
                },
              },
              {
                key: "unbind",
                value: function () {
                  this.player.unbind("play", this.onPlay),
                    this.player.unbind("pause", this.onPause),
                    this.player.unbind("seek", this.onSeek),
                    this.player.unbind("end", this.onEnded);
                },
              },
              {
                key: "play",
                value: function () {
                  this.callPlayer("play");
                },
              },
              {
                key: "pause",
                value: function () {
                  this.callPlayer("pause");
                },
              },
              {
                key: "stop",
                value: function () {
                  this.unbind(), this.callPlayer("remove");
                },
              },
              {
                key: "seekTo",
                value: function (e) {
                  this.callPlayer("time", e);
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.callPlayer("volume", e);
                },
              },
              {
                key: "setPlaybackRate",
                value: function (e) {
                  this.callPlayer("playbackRate", e);
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.callPlayer("duration");
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.callPlayer("time");
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  return null;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.getID(this.props.url);
                  return o.default.createElement("div", {
                    key: e,
                    className: "wistia_embed wistia_async_".concat(e),
                    style: { width: "100%", height: "100%" },
                  });
                },
              },
            ]),
            s(i.prototype, t),
            r && s(i, r),
            i
          );
        })(o.Component);
      (t.Wistia = b),
        d(b, "displayName", "Wistia"),
        d(b, "canPlay", function (e) {
          return h.test(e);
        }),
        d(b, "loopOnEnded", !0);
      var v = (0, i.default)(b);
      t.default = v;
    },
    6697: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.YouTube = void 0);
      var n,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== l(e) && "function" != typeof e))
            return { default: e };
          var t = u();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(r, o, a)
                : (r[o] = e[o]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(2983)),
        a = r(4870),
        i = (n = r(8466)) && n.__esModule ? n : { default: n };
      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function l(e) {
        return (l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function (t) {
                h(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function f(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function p(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function y(e) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function d(e, t) {
        return (d =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function h(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function b(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var v =
          /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=/,
        m = /list=([a-zA-Z0-9_-]+)/;
      function g(e) {
        if (m.test(e)) {
          var t;
          return {
            listType: "playlist",
            list: ((function (e) {
              if (Array.isArray(e)) return e;
            })((t = e.match(m))) ||
              (function (e, t) {
                if (
                  "undefined" != typeof Symbol &&
                  Symbol.iterator in Object(e)
                ) {
                  var r = [],
                    n = !0,
                    o = !1,
                    a = void 0;
                  try {
                    for (
                      var i, u = e[Symbol.iterator]();
                      !(n = (i = u.next()).done) &&
                      (r.push(i.value), !t || r.length !== t);
                      n = !0
                    );
                  } catch (e) {
                    (o = !0), (a = e);
                  } finally {
                    try {
                      n || null == u.return || u.return();
                    } finally {
                      if (o) throw a;
                    }
                  }
                  return r;
                }
              })(t, 2) ||
              (function (e, t) {
                if (e) {
                  if ("string" == typeof e) return b(e, t);
                  var r = Object.prototype.toString.call(e).slice(8, -1);
                  if (
                    ("Object" === r &&
                      e.constructor &&
                      (r = e.constructor.name),
                    "Map" === r || "Set" === r)
                  )
                    return Array.from(r);
                  if (
                    "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  )
                    return b(e, t);
                }
              })(t, 2) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })())[1],
          };
        }
        return {};
      }
      var P = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && d(e, t);
        })(i, e);
        var t,
          r,
          n = function () {
            var e,
              t,
              r = y(i);
            if (
              (function () {
                if (
                  "undefined" == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()
            ) {
              var n = y(this).constructor;
              t = Reflect.construct(r, arguments, n);
            } else t = r.apply(this, arguments);
            return (e = t) && ("object" === l(e) || "function" == typeof e)
              ? e
              : p(this);
          };
        function i() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, i);
          for (var t = arguments.length, r = Array(t), o = 0; o < t; o++)
            r[o] = arguments[o];
          return (
            h(
              p((e = n.call.apply(n, [this].concat(r)))),
              "callPlayer",
              a.callPlayer
            ),
            h(p(e), "onStateChange", function (t) {
              var r = t.data,
                n = e.props,
                o = n.onPlay,
                a = n.onPause,
                i = n.onBuffer,
                u = n.onBufferEnd,
                l = n.onEnded,
                c = n.onReady,
                s = n.loop,
                f = window.YT.PlayerState,
                p = f.PLAYING,
                y = f.PAUSED,
                d = f.BUFFERING,
                h = f.ENDED,
                b = f.CUED;
              if (
                (r === p && (o(), u()), r === y && a(), r === d && i(), r === h)
              ) {
                var v = !!e.callPlayer("getPlaylist");
                s && !v && e.play(), l();
              }
              r === b && c();
            }),
            h(p(e), "mute", function () {
              e.callPlayer("mute");
            }),
            h(p(e), "unmute", function () {
              e.callPlayer("unMute");
            }),
            h(p(e), "ref", function (t) {
              e.container = t;
            }),
            e
          );
        }
        return (
          (t = [
            {
              key: "load",
              value: function (e, t) {
                var r = this,
                  n = this.props,
                  o = n.playing,
                  i = n.muted,
                  u = n.playsinline,
                  l = n.controls,
                  c = n.loop,
                  f = n.config,
                  p = n.onError,
                  y = f.youtube,
                  d = y.playerVars,
                  h = y.embedOptions,
                  b = e && e.match(v)[1];
                if (t) {
                  if (m.test(e)) {
                    this.player.loadPlaylist(g(e));
                    return;
                  }
                  this.player.cueVideoById({
                    videoId: b,
                    startSeconds: (0, a.parseStartTime)(e) || d.start,
                    endSeconds: (0, a.parseEndTime)(e) || d.end,
                  });
                  return;
                }
                (0, a.getSDK)(
                  "https://www.youtube.com/iframe_api",
                  "YT",
                  "onYouTubeIframeAPIReady",
                  function (e) {
                    return e.loaded;
                  }
                ).then(function (t) {
                  r.container &&
                    (r.player = new t.Player(
                      r.container,
                      s(
                        {
                          width: "100%",
                          height: "100%",
                          videoId: b,
                          playerVars: s(
                            {
                              autoplay: o ? 1 : 0,
                              mute: i ? 1 : 0,
                              controls: l ? 1 : 0,
                              start: (0, a.parseStartTime)(e),
                              end: (0, a.parseEndTime)(e),
                              origin: window.location.origin,
                              playsinline: u,
                            },
                            g(e),
                            {},
                            d
                          ),
                          events: {
                            onReady: function () {
                              c && r.player.setLoop(!0), r.props.onReady();
                            },
                            onStateChange: r.onStateChange,
                            onError: function (e) {
                              return p(e.data);
                            },
                          },
                        },
                        h
                      )
                    ));
                }, p);
              },
            },
            {
              key: "play",
              value: function () {
                this.callPlayer("playVideo");
              },
            },
            {
              key: "pause",
              value: function () {
                this.callPlayer("pauseVideo");
              },
            },
            {
              key: "stop",
              value: function () {
                document.body.contains(this.callPlayer("getIframe")) &&
                  this.callPlayer("stopVideo");
              },
            },
            {
              key: "seekTo",
              value: function (e) {
                this.callPlayer("seekTo", e),
                  this.props.playing || this.pause();
              },
            },
            {
              key: "setVolume",
              value: function (e) {
                this.callPlayer("setVolume", 100 * e);
              },
            },
            {
              key: "setPlaybackRate",
              value: function (e) {
                this.callPlayer("setPlaybackRate", e);
              },
            },
            {
              key: "setLoop",
              value: function (e) {
                this.callPlayer("setLoop", e);
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.callPlayer("getDuration");
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.callPlayer("getCurrentTime");
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return (
                  this.callPlayer("getVideoLoadedFraction") * this.getDuration()
                );
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props.display;
                return o.default.createElement(
                  "div",
                  { style: { width: "100%", height: "100%", display: e } },
                  o.default.createElement("div", { ref: this.ref })
                );
              },
            },
          ]),
          f(i.prototype, t),
          r && f(i, r),
          i
        );
      })(o.Component);
      (t.YouTube = P),
        h(P, "displayName", "YouTube"),
        h(P, "canPlay", function (e) {
          return v.test(e);
        });
      var O = (0, i.default)(P);
      t.default = O;
    },
    8237: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = r(6697),
        o = r(4973),
        a = r(463),
        i = r(775),
        u = r(9133),
        l = r(2581),
        c = r(6283),
        s = r(8413),
        f = r(1320),
        p = r(1297),
        y = [
          n.YouTube,
          o.SoundCloud,
          a.Vimeo,
          i.Facebook,
          u.Streamable,
          l.Wistia,
          c.Twitch,
          s.DailyMotion,
          f.Mixcloud,
          p.FilePlayer,
        ];
      t.default = y;
    },
    5314: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t, r) {
          var a,
            i = [],
            u = (function (e) {
              if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (
                  Array.isArray(e) ||
                  (e = (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return s(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      if (
                        ("Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r)
                      )
                        return Array.from(r);
                      if (
                        "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      )
                        return s(e, t);
                    }
                  })(e))
                ) {
                  var t = 0,
                    r = function () {};
                  return {
                    s: r,
                    n: function () {
                      return t >= e.length
                        ? { done: !0 }
                        : { done: !1, value: e[t++] };
                    },
                    e: function (e) {
                      throw e;
                    },
                    f: r,
                  };
                }
                throw TypeError(
                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              }
              var n,
                o,
                a = !0,
                i = !1;
              return {
                s: function () {
                  n = e[Symbol.iterator]();
                },
                n: function () {
                  var e = n.next();
                  return (a = e.done), e;
                },
                e: function (e) {
                  (i = !0), (o = e);
                },
                f: function () {
                  try {
                    a || null == n.return || n.return();
                  } finally {
                    if (i) throw o;
                  }
                },
              };
            })(f);
          try {
            for (u.s(); !(a = u.n()).done; ) {
              var l = a.value;
              !l.Player.canPlay(e) &&
                r[l.configKey].preload &&
                i.push(
                  n.default.createElement(o.default, {
                    key: l.Player.displayName,
                    activePlayer: l.Player,
                    url: l.url,
                    controls: t,
                    playing: !0,
                    muted: !0,
                    display: "none",
                  })
                );
            }
          } catch (e) {
            u.e(e);
          } finally {
            u.f();
          }
          return i;
        });
      var n = c(r(2983)),
        o = c(r(5683)),
        a = r(6697),
        i = r(4973),
        u = r(463),
        l = r(8413);
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var f = [
        {
          Player: a.YouTube,
          configKey: "youtube",
          url: "https://www.youtube.com/watch?v=GlCmAC4MHek",
        },
        {
          Player: i.SoundCloud,
          configKey: "soundcloud",
          url: "https://soundcloud.com/seucheu/john-cage-433-8-bit-version",
        },
        {
          Player: u.Vimeo,
          configKey: "vimeo",
          url: "https://vimeo.com/300970506",
        },
        {
          Player: l.DailyMotion,
          configKey: "dailymotion",
          url: "http://www.dailymotion.com/video/xqdpyk",
        },
      ];
    },
    8122: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DEPRECATED_CONFIG_PROPS = t.defaultProps = t.propTypes = void 0);
      var n,
        o = (n = r(7862)) && n.__esModule ? n : { default: n },
        a = o.default.string,
        i = o.default.bool,
        u = o.default.number,
        l = o.default.array,
        c = o.default.oneOfType,
        s = o.default.shape,
        f = o.default.object,
        p = o.default.func,
        y = o.default.node,
        d = {
          url: c([a, l, f]),
          playing: i,
          loop: i,
          controls: i,
          volume: u,
          muted: i,
          playbackRate: u,
          width: c([a, u]),
          height: c([a, u]),
          style: f,
          progressInterval: u,
          playsinline: i,
          pip: i,
          light: c([i, a]),
          playIcon: y,
          wrapper: c([a, p, s({ render: p.isRequired })]),
          config: s({
            soundcloud: s({ options: f, preload: i }),
            youtube: s({ playerVars: f, embedOptions: f, preload: i }),
            facebook: s({ appId: a, version: a, playerId: a }),
            dailymotion: s({ params: f, preload: i }),
            vimeo: s({ playerOptions: f, preload: i }),
            file: s({
              attributes: f,
              tracks: l,
              forceVideo: i,
              forceAudio: i,
              forceHLS: i,
              forceDASH: i,
              hlsOptions: f,
              hlsVersion: a,
              dashVersion: a,
            }),
            wistia: s({ options: f }),
            mixcloud: s({ options: f }),
            twitch: s({ options: f, playerId: a }),
          }),
          onReady: p,
          onStart: p,
          onPlay: p,
          onPause: p,
          onBuffer: p,
          onBufferEnd: p,
          onEnded: p,
          onError: p,
          onDuration: p,
          onSeek: p,
          onProgress: p,
          onEnablePIP: p,
          onDisablePIP: p,
        };
      (t.propTypes = d),
        (t.defaultProps = {
          playing: !1,
          loop: !1,
          controls: !1,
          volume: null,
          muted: !1,
          playbackRate: 1,
          width: "640px",
          height: "360px",
          style: {},
          progressInterval: 1e3,
          playsinline: !1,
          pip: !1,
          light: !1,
          wrapper: "div",
          config: {
            soundcloud: {
              options: {
                visual: !0,
                buying: !1,
                liking: !1,
                download: !1,
                sharing: !1,
                show_comments: !1,
                show_playcount: !1,
              },
            },
            youtube: {
              playerVars: {
                playsinline: 1,
                showinfo: 0,
                rel: 0,
                iv_load_policy: 3,
                modestbranding: 1,
              },
              embedOptions: {},
              preload: !1,
            },
            facebook: {
              appId: "1309697205772819",
              version: "v3.3",
              playerId: null,
            },
            dailymotion: {
              params: { api: 1, "endscreen-enable": !1 },
              preload: !1,
            },
            vimeo: {
              playerOptions: {
                autopause: !1,
                byline: !1,
                portrait: !1,
                title: !1,
              },
              preload: !1,
            },
            file: {
              attributes: {},
              tracks: [],
              forceVideo: !1,
              forceAudio: !1,
              forceHLS: !1,
              forceDASH: !1,
              hlsOptions: {},
              hlsVersion: "0.13.1",
              dashVersion: "2.9.2",
            },
            wistia: { options: {} },
            mixcloud: { options: { hide_cover: 1 } },
            twitch: { options: {}, playerId: null },
          },
          onReady: function () {},
          onStart: function () {},
          onPlay: function () {},
          onPause: function () {},
          onBuffer: function () {},
          onBufferEnd: function () {},
          onEnded: function () {},
          onError: function () {},
          onDuration: function () {},
          onSeek: function () {},
          onProgress: function () {},
          onEnablePIP: function () {},
          onDisablePIP: function () {},
        }),
        (t.DEPRECATED_CONFIG_PROPS = [
          "soundcloudConfig",
          "youtubeConfig",
          "facebookConfig",
          "dailymotionConfig",
          "vimeoConfig",
          "fileConfig",
          "wistiaConfig",
        ]);
    },
    8466: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          var t, r;
          return (
            (r = t =
              (function (t) {
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    t && h(e, t);
                })(m, t);
                var r,
                  n,
                  l = function () {
                    var e,
                      t,
                      r = d(m);
                    if (
                      (function () {
                        if (
                          "undefined" == typeof Reflect ||
                          !Reflect.construct ||
                          Reflect.construct.sham
                        )
                          return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Date.prototype.toString.call(
                              Reflect.construct(Date, [], function () {})
                            ),
                            !0
                          );
                        } catch (e) {
                          return !1;
                        }
                      })()
                    ) {
                      var n = d(this).constructor;
                      t = Reflect.construct(r, arguments, n);
                    } else t = r.apply(this, arguments);
                    return (e = t) &&
                      ("object" === c(e) || "function" == typeof e)
                      ? e
                      : y(this);
                  };
                function m() {
                  var e;
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw TypeError("Cannot call a class as a function");
                  })(this, m);
                  for (
                    var t = arguments.length, r = Array(t), n = 0;
                    n < t;
                    n++
                  )
                    r[n] = arguments[n];
                  return (
                    b(
                      y((e = l.call.apply(l, [this].concat(r)))),
                      "config",
                      (0, i.getConfig)(e.props, a.defaultProps, !0)
                    ),
                    b(y(e), "getDuration", function () {
                      return e.player ? e.player.getDuration() : null;
                    }),
                    b(y(e), "getCurrentTime", function () {
                      return e.player ? e.player.getCurrentTime() : null;
                    }),
                    b(y(e), "getSecondsLoaded", function () {
                      return e.player ? e.player.getSecondsLoaded() : null;
                    }),
                    b(y(e), "getInternalPlayer", function () {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "player";
                      return e.player ? e.player.getInternalPlayer(t) : null;
                    }),
                    b(y(e), "seekTo", function (t, r) {
                      if (!e.player) return null;
                      e.player.seekTo(t, r);
                    }),
                    b(y(e), "ref", function (t) {
                      e.player = t;
                    }),
                    e
                  );
                }
                return (
                  (r = [
                    {
                      key: "shouldComponentUpdate",
                      value: function (e) {
                        return !(0, i.isEqual)(this.props, e);
                      },
                    },
                    {
                      key: "componentDidUpdate",
                      value: function () {
                        this.config = (0, i.getConfig)(
                          this.props,
                          a.defaultProps
                        );
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var t = this.config.file,
                          r = t.forceVideo,
                          n = t.forceAudio,
                          l = t.forceHLS,
                          c = t.forceDASH;
                        if (!e.canPlay(this.props.url) && !(r || n || l || c))
                          return null;
                        var p = this.props,
                          y = p.style,
                          d = p.width,
                          h = p.height,
                          m = p.wrapper,
                          g = (0, i.omit)(
                            this.props,
                            v,
                            a.DEPRECATED_CONFIG_PROPS
                          );
                        return o.default.createElement(
                          m,
                          s(
                            {
                              style: (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                  var r =
                                    null != arguments[t] ? arguments[t] : {};
                                  t % 2
                                    ? f(Object(r), !0).forEach(function (t) {
                                        b(e, t, r[t]);
                                      })
                                    : Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(
                                        e,
                                        Object.getOwnPropertyDescriptors(r)
                                      )
                                    : f(Object(r)).forEach(function (t) {
                                        Object.defineProperty(
                                          e,
                                          t,
                                          Object.getOwnPropertyDescriptor(r, t)
                                        );
                                      });
                                }
                                return e;
                              })({}, y, { width: d, height: h }),
                            },
                            g
                          ),
                          o.default.createElement(
                            u.default,
                            s({}, this.props, {
                              ref: this.ref,
                              activePlayer: e,
                              config: this.config,
                            })
                          )
                        );
                      },
                    },
                  ]),
                  p(m.prototype, r),
                  n && p(m, n),
                  m
                );
              })(o.Component)),
            b(t, "displayName", "".concat(e.displayName, "Player")),
            b(t, "propTypes", a.propTypes),
            b(t, "defaultProps", a.defaultProps),
            b(t, "canPlay", e.canPlay),
            r
          );
        });
      var n,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== c(e) && "function" != typeof e))
            return { default: e };
          var t = l();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(r, o, a)
                : (r[o] = e[o]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(2983)),
        a = r(8122),
        i = r(4870),
        u = (n = r(5683)) && n.__esModule ? n : { default: n };
      function l() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function c(e) {
        return (c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function s() {
        return (s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function f(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function p(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function y(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function d(e) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function h(e, t) {
        return (h =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function b(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var v = Object.keys(a.propTypes);
    },
    4870: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parseStartTime = function (e) {
          return h(e, f);
        }),
        (t.parseEndTime = function (e) {
          return h(e, p);
        }),
        (t.randomString = function () {
          return Math.random().toString(36).substr(2, 5);
        }),
        (t.queryString = function (e) {
          return Object.keys(e)
            .map(function (t) {
              return "".concat(t, "=").concat(e[t]);
            })
            .join("&");
        }),
        (t.getSDK = function (e, t) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : function () {
                    return !0;
                  },
            a =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : o.default;
          return window[t] && n(window[t])
            ? Promise.resolve(window[t])
            : new Promise(function (n, o) {
                if (b[e]) {
                  b[e].push({ resolve: n, reject: o });
                  return;
                }
                b[e] = [{ resolve: n, reject: o }];
                var i = function (t) {
                  b[e].forEach(function (e) {
                    return e.resolve(t);
                  });
                };
                if (r) {
                  var u = window[r];
                  window[r] = function () {
                    u && u(), i(window[t]);
                  };
                }
                a(e, function (n) {
                  n
                    ? (b[e].forEach(function (e) {
                        return e.reject(n);
                      }),
                      (b[e] = null))
                    : r || i(window[t]);
                });
              });
        }),
        (t.getConfig = function (e, t, r) {
          var n,
            o = (0, a.default)(t.config, e.config),
            u = (function (e) {
              if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (e = c(e))) {
                  var t = 0,
                    r = function () {};
                  return {
                    s: r,
                    n: function () {
                      return t >= e.length
                        ? { done: !0 }
                        : { done: !1, value: e[t++] };
                    },
                    e: function (e) {
                      throw e;
                    },
                    f: r,
                  };
                }
                throw TypeError(
                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              }
              var n,
                o,
                a = !0,
                i = !1;
              return {
                s: function () {
                  n = e[Symbol.iterator]();
                },
                n: function () {
                  var e = n.next();
                  return (a = e.done), e;
                },
                e: function (e) {
                  (i = !0), (o = e);
                },
                f: function () {
                  try {
                    a || null == n.return || n.return();
                  } finally {
                    if (i) throw o;
                  }
                },
              };
            })(i.DEPRECATED_CONFIG_PROPS);
          try {
            for (u.s(); !(n = u.n()).done; ) {
              var l = n.value;
              if (e[l]) {
                var s,
                  f,
                  p = l.replace(/Config$/, "");
                if (
                  ((o = (0, a.default)(
                    o,
                    ((s = {}),
                    (f = e[l]),
                    p in s
                      ? Object.defineProperty(s, p, {
                          value: f,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (s[p] = f),
                    s)
                  )),
                  r)
                ) {
                  var y = "ReactPlayer: %c"
                    .concat(
                      l,
                      " %cis deprecated, please use the config prop instead – "
                    )
                    .concat(
                      "https://github.com/CookPete/react-player#config-prop"
                    );
                  console.warn(y, "font-weight: bold", "");
                }
              }
            }
          } catch (e) {
            u.e(e);
          } finally {
            u.f();
          }
          return o;
        }),
        (t.omit = function (e) {
          for (
            var t, r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1;
            o < r;
            o++
          )
            n[o - 1] = arguments[o];
          for (
            var a = (t = []).concat.apply(t, n),
              i = {},
              u = Object.keys(e),
              l = 0;
            l < u.length;
            l++
          ) {
            var c = u[l];
            -1 === a.indexOf(c) && (i[c] = e[c]);
          }
          return i;
        }),
        (t.callPlayer = function (e) {
          var t;
          if (!this.player || !this.player[e]) {
            var r = "ReactPlayer: "
              .concat(this.constructor.displayName, " player could not call %c")
              .concat(e, "%c – ");
            return (
              this.player
                ? this.player[e] || (r += "The method was not available")
                : (r += "The player was not available"),
              console.warn(r, "font-weight: bold", ""),
              null
            );
          }
          for (
            var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), a = 1;
            a < n;
            a++
          )
            o[a - 1] = arguments[a];
          return (t = this.player)[e].apply(t, o);
        }),
        (t.isObject = v),
        (t.isEqual = function e(t, r) {
          if (
            ("function" == typeof t && "function" == typeof r) ||
            ((0, n.isValidElement)(t) && (0, n.isValidElement)(r))
          )
            return !0;
          if (t instanceof Array && r instanceof Array) {
            if (t.length !== r.length) return !1;
            for (var o = 0; o !== t.length; o++) if (!e(t[o], r[o])) return !1;
            return !0;
          }
          if (v(t) && v(r)) {
            if (Object.keys(t).length !== Object.keys(r).length) return !1;
            for (var a = 0, i = Object.keys(t); a < i.length; a++) {
              var u = i[a];
              if (!e(t[u], r[u])) return !1;
            }
            return !0;
          }
          return t === r;
        }),
        (t.isMediaStream = function (e) {
          return (
            "undefined" != typeof window &&
            void 0 !== window.MediaStream &&
            e instanceof window.MediaStream
          );
        });
      var n = r(2983),
        o = u(r(7112)),
        a = u(r(4876)),
        i = r(8122);
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e) {
        return (l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function c(e, t) {
        if (e) {
          if ("string" == typeof e) return s(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          if (
            ("Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r)
          )
            return Array.from(r);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return s(e, t);
        }
      }
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var f = /[?&#](?:start|t)=([0-9hms]+)/,
        p = /[?&#]end=([0-9hms]+)/,
        y = /(\d+)(h|m|s)/g,
        d = /^\d+$/;
      function h(e, t) {
        var r = e.match(t);
        if (r) {
          var n = r[1];
          if (n.match(y))
            return (function (e) {
              for (var t = 0, r = y.exec(e); null !== r; ) {
                var n,
                  o =
                    (function (e) {
                      if (Array.isArray(e)) return e;
                    })((n = r)) ||
                    (function (e, t) {
                      if (
                        "undefined" != typeof Symbol &&
                        Symbol.iterator in Object(e)
                      ) {
                        var r = [],
                          n = !0,
                          o = !1,
                          a = void 0;
                        try {
                          for (
                            var i, u = e[Symbol.iterator]();
                            !(n = (i = u.next()).done) &&
                            (r.push(i.value), !t || r.length !== t);
                            n = !0
                          );
                        } catch (e) {
                          (o = !0), (a = e);
                        } finally {
                          try {
                            n || null == u.return || u.return();
                          } finally {
                            if (o) throw a;
                          }
                        }
                        return r;
                      }
                    })(n, 3) ||
                    c(n, 3) ||
                    (function () {
                      throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })(),
                  a = o[1],
                  i = o[2];
                "h" === i && (t += 3600 * parseInt(a, 10)),
                  "m" === i && (t += 60 * parseInt(a, 10)),
                  "s" === i && (t += parseInt(a, 10)),
                  (r = y.exec(e));
              }
              return t;
            })(n);
          if (d.test(n)) return parseInt(n);
        }
      }
      var b = {};
      function v(e) {
        return null !== e && "object" === l(e);
      }
    },
  },
]);
