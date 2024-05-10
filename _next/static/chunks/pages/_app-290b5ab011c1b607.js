(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    6236: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(1679);
        },
      ]);
    },
    1640: function (t, e, n) {
      "use strict";
      n.d(e, {
        J: function () {
          return r;
        },
      });
      let r = "production";
    },
    4026: function (t, e, n) {
      "use strict";
      n.d(e, {
        X: function () {
          return r;
        },
      });
      let r = !1;
    },
    741: function (t, e, n) {
      "use strict";
      n.d(e, {
        RP: function () {
          return function t(e, n, r) {
            let c =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0;
            return new i.cW((i, u) => {
              let l = e[c];
              if (null === n || "function" != typeof l) i(n);
              else {
                let d = l({ ...n }, r);
                o.X &&
                  l.id &&
                  null === d &&
                  s.kg.log('Event processor "'.concat(l.id, '" dropped event')),
                  (0, a.J8)(d)
                    ? d.then((n) => t(e, n, r, c + 1).then(i)).then(null, u)
                    : t(e, d, r, c + 1)
                        .then(i)
                        .then(null, u);
              }
            });
          };
        },
        cc: function () {
          return u;
        },
        fH: function () {
          return c;
        },
      });
      var r = n(299),
        i = n(9107),
        s = n(6994),
        a = n(4471),
        o = n(4026);
      function c() {
        return (0, r.YO)("globalEventProcessors", () => []);
      }
      function u(t) {
        c().push(t);
      }
    },
    3729: function (t, e, n) {
      "use strict";
      n.d(e, {
        $e: function () {
          return p;
        },
        Tb: function () {
          return l;
        },
        cg: function () {
          return b;
        },
        eN: function () {
          return d;
        },
        nZ: function () {
          return m;
        },
        n_: function () {
          return h;
        },
        s3: function () {
          return g;
        },
        yj: function () {
          return _;
        },
        yl: function () {
          return f;
        },
      });
      var r = n(6994),
        i = n(299),
        s = n(1640),
        a = n(4026),
        o = n(5048),
        c = n(116),
        u = n(9677);
      function l(t, e) {
        return (0, o.Gd)().captureException(t, (0, u.U0)(e));
      }
      function d(t, e) {
        return (0, o.Gd)().captureEvent(t, e);
      }
      function h(t, e) {
        (0, o.Gd)().addBreadcrumb(t, e);
      }
      function p() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        let r = (0, o.Gd)();
        if (2 === e.length) {
          let [t, n] = e;
          return t
            ? r.withScope(() => ((r.getStackTop().scope = t), n(t)))
            : r.withScope(n);
        }
        return r.withScope(e[0]);
      }
      async function f(t) {
        let e = g();
        return e
          ? e.flush(t)
          : (a.X && r.kg.warn("Cannot flush events. No client defined."),
            Promise.resolve(!1));
      }
      function g() {
        return (0, o.Gd)().getClient();
      }
      function m() {
        return (0, o.Gd)().getScope();
      }
      function _(t) {
        let e = g(),
          n = (0, o.aF)(),
          r = m(),
          { release: a, environment: u = s.J } = (e && e.getOptions()) || {},
          { userAgent: l } = i.n2.navigator || {},
          d = (0, c.Hv)({
            release: a,
            environment: u,
            user: r.getUser() || n.getUser(),
            ...(l && { userAgent: l }),
            ...t,
          }),
          h = n.getSession();
        return (
          h && "ok" === h.status && (0, c.CT)(h, { status: "exited" }),
          v(),
          n.setSession(d),
          r.setSession(d),
          d
        );
      }
      function v() {
        let t = (0, o.aF)(),
          e = m(),
          n = e.getSession() || t.getSession();
        n && (0, c.RJ)(n), y(), t.setSession(), e.setSession();
      }
      function y() {
        let t = (0, o.aF)(),
          e = m(),
          n = g(),
          r = e.getSession() || t.getSession();
        r && n && n.captureSession && n.captureSession(r);
      }
      function b() {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (t) {
          v();
          return;
        }
        y();
      }
    },
    5048: function (t, e, n) {
      "use strict";
      n.d(e, {
        Gd: function () {
          return _;
        },
        aF: function () {
          return v;
        },
        cu: function () {
          return g;
        },
      });
      var r = n(4471),
        i = n(1760),
        s = n(8459),
        a = n(6994),
        o = n(299),
        c = n(1640),
        u = n(4026),
        l = n(9459),
        d = n(116),
        h = n(9150);
      let p = parseFloat(h.J);
      class f {
        isOlderThan(t) {
          return this._version < t;
        }
        bindClient(t) {
          let e = this.getStackTop();
          (e.client = t),
            e.scope.setClient(t),
            t && t.setupIntegrations && t.setupIntegrations();
        }
        pushScope() {
          let t = this.getScope().clone();
          return (
            this.getStack().push({ client: this.getClient(), scope: t }), t
          );
        }
        popScope() {
          return !(this.getStack().length <= 1) && !!this.getStack().pop();
        }
        withScope(t) {
          let e;
          let n = this.pushScope();
          try {
            e = t(n);
          } catch (t) {
            throw (this.popScope(), t);
          }
          return (0, r.J8)(e)
            ? e.then(
                (t) => (this.popScope(), t),
                (t) => {
                  throw (this.popScope(), t);
                }
              )
            : (this.popScope(), e);
        }
        getClient() {
          return this.getStackTop().client;
        }
        getScope() {
          return this.getStackTop().scope;
        }
        getIsolationScope() {
          return this._isolationScope;
        }
        getStack() {
          return this._stack;
        }
        getStackTop() {
          return this._stack[this._stack.length - 1];
        }
        captureException(t, e) {
          let n = (this._lastEventId =
              e && e.event_id ? e.event_id : (0, i.DM)()),
            r = Error("Sentry syntheticException");
          return (
            this.getScope().captureException(t, {
              originalException: t,
              syntheticException: r,
              ...e,
              event_id: n,
            }),
            n
          );
        }
        captureMessage(t, e, n) {
          let r = (this._lastEventId =
              n && n.event_id ? n.event_id : (0, i.DM)()),
            s = Error(t);
          return (
            this.getScope().captureMessage(t, e, {
              originalException: t,
              syntheticException: s,
              ...n,
              event_id: r,
            }),
            r
          );
        }
        captureEvent(t, e) {
          let n = e && e.event_id ? e.event_id : (0, i.DM)();
          return (
            t.type || (this._lastEventId = n),
            this.getScope().captureEvent(t, { ...e, event_id: n }),
            n
          );
        }
        lastEventId() {
          return this._lastEventId;
        }
        addBreadcrumb(t, e) {
          let { scope: n, client: r } = this.getStackTop();
          if (!r) return;
          let { beforeBreadcrumb: i = null, maxBreadcrumbs: o = 100 } =
            (r.getOptions && r.getOptions()) || {};
          if (o <= 0) return;
          let c = (0, s.yW)(),
            u = { timestamp: c, ...t },
            l = i ? (0, a.Cf)(() => i(u, e)) : u;
          null !== l &&
            (r.emit && r.emit("beforeAddBreadcrumb", l, e),
            n.addBreadcrumb(l, o));
        }
        setUser(t) {
          this.getScope().setUser(t), this.getIsolationScope().setUser(t);
        }
        setTags(t) {
          this.getScope().setTags(t), this.getIsolationScope().setTags(t);
        }
        setExtras(t) {
          this.getScope().setExtras(t), this.getIsolationScope().setExtras(t);
        }
        setTag(t, e) {
          this.getScope().setTag(t, e), this.getIsolationScope().setTag(t, e);
        }
        setExtra(t, e) {
          this.getScope().setExtra(t, e),
            this.getIsolationScope().setExtra(t, e);
        }
        setContext(t, e) {
          this.getScope().setContext(t, e),
            this.getIsolationScope().setContext(t, e);
        }
        configureScope(t) {
          let { scope: e, client: n } = this.getStackTop();
          n && t(e);
        }
        run(t) {
          let e = m(this);
          try {
            t(this);
          } finally {
            m(e);
          }
        }
        getIntegration(t) {
          let e = this.getClient();
          if (!e) return null;
          try {
            return e.getIntegration(t);
          } catch (e) {
            return (
              u.X &&
                a.kg.warn(
                  "Cannot retrieve integration ".concat(
                    t.id,
                    " from the current Hub"
                  )
                ),
              null
            );
          }
        }
        startTransaction(t, e) {
          let n = this._callExtensionMethod("startTransaction", t, e);
          if (u.X && !n) {
            let t = this.getClient();
            t
              ? a.kg.warn(
                  "Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':\nSentry.addTracingExtensions();\nSentry.init({...});\n"
                )
              : a.kg.warn(
                  "Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'"
                );
          }
          return n;
        }
        traceHeaders() {
          return this._callExtensionMethod("traceHeaders");
        }
        captureSession() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (t) return this.endSession();
          this._sendSessionUpdate();
        }
        endSession() {
          let t = this.getStackTop(),
            e = t.scope,
            n = e.getSession();
          n && (0, d.RJ)(n), this._sendSessionUpdate(), e.setSession();
        }
        startSession(t) {
          let { scope: e, client: n } = this.getStackTop(),
            { release: r, environment: i = c.J } = (n && n.getOptions()) || {},
            { userAgent: s } = o.n2.navigator || {},
            a = (0, d.Hv)({
              release: r,
              environment: i,
              user: e.getUser(),
              ...(s && { userAgent: s }),
              ...t,
            }),
            u = e.getSession && e.getSession();
          return (
            u && "ok" === u.status && (0, d.CT)(u, { status: "exited" }),
            this.endSession(),
            e.setSession(a),
            a
          );
        }
        shouldSendDefaultPii() {
          let t = this.getClient(),
            e = t && t.getOptions();
          return Boolean(e && e.sendDefaultPii);
        }
        _sendSessionUpdate() {
          let { scope: t, client: e } = this.getStackTop(),
            n = t.getSession();
          n && e && e.captureSession && e.captureSession(n);
        }
        _callExtensionMethod(t) {
          for (
            var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r];
          let i = g(),
            s = i.__SENTRY__;
          if (s && s.extensions && "function" == typeof s.extensions[t])
            return s.extensions[t].apply(this, n);
          u.X &&
            a.kg.warn(
              "Extension method ".concat(
                t,
                " couldn't be found, doing nothing."
              )
            );
        }
        constructor(t, e, n, r = p) {
          let i, s;
          (this._version = r),
            e ? (i = e) : (i = new l.sX()).setClient(t),
            n ? (s = n) : (s = new l.sX()).setClient(t),
            (this._stack = [{ scope: i }]),
            t && this.bindClient(t),
            (this._isolationScope = s);
        }
      }
      function g() {
        return (
          (o.n2.__SENTRY__ = o.n2.__SENTRY__ || {
            extensions: {},
            hub: void 0,
          }),
          o.n2
        );
      }
      function m(t) {
        let e = g(),
          n = y(e);
        return b(e, t), n;
      }
      function _() {
        let t = g();
        if (t.__SENTRY__ && t.__SENTRY__.acs) {
          let e = t.__SENTRY__.acs.getCurrentHub();
          if (e) return e;
        }
        return (function () {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : g();
          return (
            (!(t && t.__SENTRY__ && t.__SENTRY__.hub) || y(t).isOlderThan(p)) &&
              b(t, new f()),
            y(t)
          );
        })(t);
      }
      function v() {
        return _().getIsolationScope();
      }
      function y(t) {
        return (0, o.YO)("hub", () => new f(), t);
      }
      function b(t, e) {
        if (!t) return !1;
        let n = (t.__SENTRY__ = t.__SENTRY__ || {});
        return (n.hub = e), !0;
      }
    },
    9459: function (t, e, n) {
      "use strict";
      let r;
      n.d(e, {
        lW: function () {
          return h;
        },
        sX: function () {
          return d;
        },
      });
      var i = n(4471),
        s = n(8459),
        a = n(1760),
        o = n(6994),
        c = n(741),
        u = n(116),
        l = n(9582);
      class d {
        static clone(t) {
          return t ? t.clone() : new d();
        }
        clone() {
          let t = new d();
          return (
            (t._breadcrumbs = [...this._breadcrumbs]),
            (t._tags = { ...this._tags }),
            (t._extra = { ...this._extra }),
            (t._contexts = { ...this._contexts }),
            (t._user = this._user),
            (t._level = this._level),
            (t._span = this._span),
            (t._session = this._session),
            (t._transactionName = this._transactionName),
            (t._fingerprint = this._fingerprint),
            (t._eventProcessors = [...this._eventProcessors]),
            (t._requestSession = this._requestSession),
            (t._attachments = [...this._attachments]),
            (t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
            (t._propagationContext = { ...this._propagationContext }),
            (t._client = this._client),
            t
          );
        }
        setClient(t) {
          this._client = t;
        }
        getClient() {
          return this._client;
        }
        addScopeListener(t) {
          this._scopeListeners.push(t);
        }
        addEventProcessor(t) {
          return this._eventProcessors.push(t), this;
        }
        setUser(t) {
          return (
            (this._user = t || {
              email: void 0,
              id: void 0,
              ip_address: void 0,
              segment: void 0,
              username: void 0,
            }),
            this._session && (0, u.CT)(this._session, { user: t }),
            this._notifyScopeListeners(),
            this
          );
        }
        getUser() {
          return this._user;
        }
        getRequestSession() {
          return this._requestSession;
        }
        setRequestSession(t) {
          return (this._requestSession = t), this;
        }
        setTags(t) {
          return (
            (this._tags = { ...this._tags, ...t }),
            this._notifyScopeListeners(),
            this
          );
        }
        setTag(t, e) {
          return (
            (this._tags = { ...this._tags, [t]: e }),
            this._notifyScopeListeners(),
            this
          );
        }
        setExtras(t) {
          return (
            (this._extra = { ...this._extra, ...t }),
            this._notifyScopeListeners(),
            this
          );
        }
        setExtra(t, e) {
          return (
            (this._extra = { ...this._extra, [t]: e }),
            this._notifyScopeListeners(),
            this
          );
        }
        setFingerprint(t) {
          return (this._fingerprint = t), this._notifyScopeListeners(), this;
        }
        setLevel(t) {
          return (this._level = t), this._notifyScopeListeners(), this;
        }
        setTransactionName(t) {
          return (
            (this._transactionName = t), this._notifyScopeListeners(), this
          );
        }
        setContext(t, e) {
          return (
            null === e ? delete this._contexts[t] : (this._contexts[t] = e),
            this._notifyScopeListeners(),
            this
          );
        }
        setSpan(t) {
          return (this._span = t), this._notifyScopeListeners(), this;
        }
        getSpan() {
          return this._span;
        }
        getTransaction() {
          let t = this._span;
          return t && t.transaction;
        }
        setSession(t) {
          return (
            t ? (this._session = t) : delete this._session,
            this._notifyScopeListeners(),
            this
          );
        }
        getSession() {
          return this._session;
        }
        update(t) {
          if (!t) return this;
          if ("function" == typeof t) {
            let e = t(this);
            return e instanceof d ? e : this;
          }
          return (
            t instanceof d
              ? ((this._tags = { ...this._tags, ...t._tags }),
                (this._extra = { ...this._extra, ...t._extra }),
                (this._contexts = { ...this._contexts, ...t._contexts }),
                t._user &&
                  Object.keys(t._user).length &&
                  (this._user = t._user),
                t._level && (this._level = t._level),
                t._fingerprint && (this._fingerprint = t._fingerprint),
                t._requestSession && (this._requestSession = t._requestSession),
                t._propagationContext &&
                  (this._propagationContext = t._propagationContext))
              : (0, i.PO)(t) &&
                ((this._tags = { ...this._tags, ...t.tags }),
                (this._extra = { ...this._extra, ...t.extra }),
                (this._contexts = { ...this._contexts, ...t.contexts }),
                t.user && (this._user = t.user),
                t.level && (this._level = t.level),
                t.fingerprint && (this._fingerprint = t.fingerprint),
                t.requestSession && (this._requestSession = t.requestSession),
                t.propagationContext &&
                  (this._propagationContext = t.propagationContext)),
            this
          );
        }
        clear() {
          return (
            (this._breadcrumbs = []),
            (this._tags = {}),
            (this._extra = {}),
            (this._user = {}),
            (this._contexts = {}),
            (this._level = void 0),
            (this._transactionName = void 0),
            (this._fingerprint = void 0),
            (this._requestSession = void 0),
            (this._span = void 0),
            (this._session = void 0),
            this._notifyScopeListeners(),
            (this._attachments = []),
            (this._propagationContext = p()),
            this
          );
        }
        addBreadcrumb(t, e) {
          let n = "number" == typeof e ? e : 100;
          if (n <= 0) return this;
          let r = { timestamp: (0, s.yW)(), ...t },
            i = this._breadcrumbs;
          return (
            i.push(r),
            (this._breadcrumbs = i.length > n ? i.slice(-n) : i),
            this._notifyScopeListeners(),
            this
          );
        }
        getLastBreadcrumb() {
          return this._breadcrumbs[this._breadcrumbs.length - 1];
        }
        clearBreadcrumbs() {
          return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
        }
        addAttachment(t) {
          return this._attachments.push(t), this;
        }
        getAttachments() {
          let t = this.getScopeData();
          return t.attachments;
        }
        clearAttachments() {
          return (this._attachments = []), this;
        }
        getScopeData() {
          let {
            _breadcrumbs: t,
            _attachments: e,
            _contexts: n,
            _tags: r,
            _extra: i,
            _user: s,
            _level: a,
            _fingerprint: o,
            _eventProcessors: c,
            _propagationContext: u,
            _sdkProcessingMetadata: l,
            _transactionName: d,
            _span: h,
          } = this;
          return {
            breadcrumbs: t,
            attachments: e,
            contexts: n,
            tags: r,
            extra: i,
            user: s,
            level: a,
            fingerprint: o || [],
            eventProcessors: c,
            propagationContext: u,
            sdkProcessingMetadata: l,
            transactionName: d,
            span: h,
          };
        }
        applyToEvent(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [];
          (0, l.gi)(t, this.getScopeData());
          let r = [...n, ...(0, c.fH)(), ...this._eventProcessors];
          return (0, c.RP)(r, t, e);
        }
        setSDKProcessingMetadata(t) {
          return (
            (this._sdkProcessingMetadata = {
              ...this._sdkProcessingMetadata,
              ...t,
            }),
            this
          );
        }
        setPropagationContext(t) {
          return (this._propagationContext = t), this;
        }
        getPropagationContext() {
          return this._propagationContext;
        }
        captureException(t, e) {
          let n = e && e.event_id ? e.event_id : (0, a.DM)();
          if (!this._client)
            return (
              o.kg.warn(
                "No client configured on scope - will not capture exception!"
              ),
              n
            );
          let r = Error("Sentry syntheticException");
          return (
            this._client.captureException(
              t,
              {
                originalException: t,
                syntheticException: r,
                ...e,
                event_id: n,
              },
              this
            ),
            n
          );
        }
        captureMessage(t, e, n) {
          let r = n && n.event_id ? n.event_id : (0, a.DM)();
          if (!this._client)
            return (
              o.kg.warn(
                "No client configured on scope - will not capture message!"
              ),
              r
            );
          let i = Error(t);
          return (
            this._client.captureMessage(
              t,
              e,
              {
                originalException: t,
                syntheticException: i,
                ...n,
                event_id: r,
              },
              this
            ),
            r
          );
        }
        captureEvent(t, e) {
          let n = e && e.event_id ? e.event_id : (0, a.DM)();
          return this._client
            ? (this._client.captureEvent(t, { ...e, event_id: n }, this), n)
            : (o.kg.warn(
                "No client configured on scope - will not capture event!"
              ),
              n);
        }
        _notifyScopeListeners() {
          this._notifyingListeners ||
            ((this._notifyingListeners = !0),
            this._scopeListeners.forEach((t) => {
              t(this);
            }),
            (this._notifyingListeners = !1));
        }
        constructor() {
          (this._notifyingListeners = !1),
            (this._scopeListeners = []),
            (this._eventProcessors = []),
            (this._breadcrumbs = []),
            (this._attachments = []),
            (this._user = {}),
            (this._tags = {}),
            (this._extra = {}),
            (this._contexts = {}),
            (this._sdkProcessingMetadata = {}),
            (this._propagationContext = p());
        }
      }
      function h() {
        return r || (r = new d()), r;
      }
      function p() {
        return { traceId: (0, a.DM)(), spanId: (0, a.DM)().substring(16) };
      }
    },
    116: function (t, e, n) {
      "use strict";
      n.d(e, {
        CT: function () {
          return o;
        },
        Hv: function () {
          return a;
        },
        RJ: function () {
          return c;
        },
      });
      var r = n(8459),
        i = n(1760),
        s = n(819);
      function a(t) {
        let e = (0, r.ph)(),
          n = {
            sid: (0, i.DM)(),
            init: !0,
            timestamp: e,
            started: e,
            duration: 0,
            status: "ok",
            errors: 0,
            ignoreDuration: !1,
            toJSON: () =>
              (0, s.Jr)({
                sid: "".concat(n.sid),
                init: n.init,
                started: new Date(1e3 * n.started).toISOString(),
                timestamp: new Date(1e3 * n.timestamp).toISOString(),
                status: n.status,
                errors: n.errors,
                did:
                  "number" == typeof n.did || "string" == typeof n.did
                    ? "".concat(n.did)
                    : void 0,
                duration: n.duration,
                abnormal_mechanism: n.abnormal_mechanism,
                attrs: {
                  release: n.release,
                  environment: n.environment,
                  ip_address: n.ipAddress,
                  user_agent: n.userAgent,
                },
              }),
          };
        return t && o(n, t), n;
      }
      function o(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (
          (!e.user ||
            (!t.ipAddress &&
              e.user.ip_address &&
              (t.ipAddress = e.user.ip_address),
            t.did ||
              e.did ||
              (t.did = e.user.id || e.user.email || e.user.username)),
          (t.timestamp = e.timestamp || (0, r.ph)()),
          e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism),
          e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
          e.sid && (t.sid = 32 === e.sid.length ? e.sid : (0, i.DM)()),
          void 0 !== e.init && (t.init = e.init),
          !t.did && e.did && (t.did = "".concat(e.did)),
          "number" == typeof e.started && (t.started = e.started),
          t.ignoreDuration)
        )
          t.duration = void 0;
        else if ("number" == typeof e.duration) t.duration = e.duration;
        else {
          let e = t.timestamp - t.started;
          t.duration = e >= 0 ? e : 0;
        }
        e.release && (t.release = e.release),
          e.environment && (t.environment = e.environment),
          !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
          !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
          "number" == typeof e.errors && (t.errors = e.errors),
          e.status && (t.status = e.status);
      }
      function c(t, e) {
        let n = {};
        e
          ? (n = { status: e })
          : "ok" === t.status && (n = { status: "exited" }),
          o(t, n);
      }
    },
    8904: function (t, e, n) {
      "use strict";
      n.d(e, {
        _: function () {
          return c;
        },
        j: function () {
          return u;
        },
      });
      var r = n(819),
        i = n(1640),
        s = n(3729),
        a = n(7235),
        o = n(16);
      function c(t, e, n) {
        let s = e.getOptions(),
          { publicKey: a } = e.getDsn() || {},
          { segment: o } = (n && n.getUser()) || {},
          c = (0, r.Jr)({
            environment: s.environment || i.J,
            release: s.release,
            user_segment: o,
            public_key: a,
            trace_id: t,
          });
        return e.emit && e.emit("createDsc", c), c;
      }
      function u(t) {
        let e = (0, s.s3)();
        if (!e) return {};
        let n = c((0, o.XU)(t).trace_id || "", e, (0, s.nZ)()),
          r = (0, a.G)(t);
        if (!r) return n;
        let i = r && r._frozenDynamicSamplingContext;
        if (i) return i;
        let { sampleRate: u, source: l } = r.metadata;
        null != u && (n.sample_rate = "".concat(u));
        let d = (0, o.XU)(r);
        return (
          l && "url" !== l && (n.transaction = d.description),
          (n.sampled = String((0, o.Tt)(r))),
          e.emit && e.emit("createDsc", n),
          n
        );
      }
    },
    9582: function (t, e, n) {
      "use strict";
      n.d(e, {
        gi: function () {
          return c;
        },
        yo: function () {
          return u;
        },
      });
      var r = n(819),
        i = n(1760),
        s = n(8904),
        a = n(7235),
        o = n(16);
      function c(t, e) {
        var n, c;
        let {
          fingerprint: u,
          span: l,
          breadcrumbs: d,
          sdkProcessingMetadata: h,
          propagationContext: p,
        } = e;
        (function (t, e) {
          let {
              extra: n,
              tags: i,
              user: s,
              contexts: a,
              level: o,
              transactionName: c,
            } = e,
            u = (0, r.Jr)(n);
          u && Object.keys(u).length && (t.extra = { ...u, ...t.extra });
          let l = (0, r.Jr)(i);
          l && Object.keys(l).length && (t.tags = { ...l, ...t.tags });
          let d = (0, r.Jr)(s);
          d && Object.keys(d).length && (t.user = { ...d, ...t.user });
          let h = (0, r.Jr)(a);
          h && Object.keys(h).length && (t.contexts = { ...h, ...t.contexts }),
            o && (t.level = o),
            c && (t.transaction = c);
        })(t, e),
          l &&
            (function (t, e) {
              t.contexts = { trace: (0, o.wy)(e), ...t.contexts };
              let n = (0, a.G)(e);
              if (n) {
                t.sdkProcessingMetadata = {
                  dynamicSamplingContext: (0, s.j)(e),
                  ...t.sdkProcessingMetadata,
                };
                let r = (0, o.XU)(n).description;
                r && (t.tags = { transaction: r, ...t.tags });
              }
            })(t, l),
          ((n = t).fingerprint = n.fingerprint ? (0, i.lE)(n.fingerprint) : []),
          u && (n.fingerprint = n.fingerprint.concat(u)),
          n.fingerprint && !n.fingerprint.length && delete n.fingerprint,
          (function (t, e) {
            let n = [...(t.breadcrumbs || []), ...e];
            t.breadcrumbs = n.length ? n : void 0;
          })(t, d),
          ((c = t).sdkProcessingMetadata = {
            ...c.sdkProcessingMetadata,
            ...h,
            propagationContext: p,
          });
      }
      function u(t, e) {
        let {
          extra: n,
          tags: r,
          user: i,
          contexts: s,
          level: a,
          sdkProcessingMetadata: o,
          breadcrumbs: c,
          fingerprint: u,
          eventProcessors: d,
          attachments: h,
          propagationContext: p,
          transactionName: f,
          span: g,
        } = e;
        l(t, "extra", n),
          l(t, "tags", r),
          l(t, "user", i),
          l(t, "contexts", s),
          l(t, "sdkProcessingMetadata", o),
          a && (t.level = a),
          f && (t.transactionName = f),
          g && (t.span = g),
          c.length && (t.breadcrumbs = [...t.breadcrumbs, ...c]),
          u.length && (t.fingerprint = [...t.fingerprint, ...u]),
          d.length && (t.eventProcessors = [...t.eventProcessors, ...d]),
          h.length && (t.attachments = [...t.attachments, ...h]),
          (t.propagationContext = { ...t.propagationContext, ...p });
      }
      function l(t, e, n) {
        if (n && Object.keys(n).length)
          for (let r in ((t[e] = { ...t[e] }), n))
            Object.prototype.hasOwnProperty.call(n, r) && (t[e][r] = n[r]);
      }
    },
    7235: function (t, e, n) {
      "use strict";
      function r(t) {
        return t.transaction;
      }
      n.d(e, {
        G: function () {
          return r;
        },
      });
    },
    9677: function (t, e, n) {
      "use strict";
      n.d(e, {
        R: function () {
          return p;
        },
        U0: function () {
          return g;
        },
      });
      var r = n(1760),
        i = n(8459),
        s = n(328),
        a = n(299),
        o = n(4182),
        c = n(1640),
        u = n(741),
        l = n(9459),
        d = n(9582),
        h = n(16);
      function p(t, e, n, p, g, m) {
        var _;
        let { normalizeDepth: v = 3, normalizeMaxBreadth: y = 1e3 } = t,
          b = {
            ...e,
            event_id: e.event_id || n.event_id || (0, r.DM)(),
            timestamp: e.timestamp || (0, i.yW)(),
          },
          S = n.integrations || t.integrations.map((t) => t.name);
        (function (t, e) {
          let {
            environment: n,
            release: r,
            dist: i,
            maxValueLength: a = 250,
          } = e;
          "environment" in t || (t.environment = "environment" in e ? n : c.J),
            void 0 === t.release && void 0 !== r && (t.release = r),
            void 0 === t.dist && void 0 !== i && (t.dist = i),
            t.message && (t.message = (0, s.$G)(t.message, a));
          let o = t.exception && t.exception.values && t.exception.values[0];
          o && o.value && (o.value = (0, s.$G)(o.value, a));
          let u = t.request;
          u && u.url && (u.url = (0, s.$G)(u.url, a));
        })(b, t),
          (_ = b),
          S.length > 0 &&
            ((_.sdk = _.sdk || {}),
            (_.sdk.integrations = [...(_.sdk.integrations || []), ...S])),
          void 0 === e.type &&
            (function (t, e) {
              let n;
              let r = a.n2._sentryDebugIds;
              if (!r) return;
              let i = f.get(e);
              i ? (n = i) : ((n = new Map()), f.set(e, n));
              let s = Object.keys(r).reduce((t, i) => {
                let s;
                let a = n.get(i);
                a ? (s = a) : ((s = e(i)), n.set(i, s));
                for (let e = s.length - 1; e >= 0; e--) {
                  let n = s[e];
                  if (n.filename) {
                    t[n.filename] = r[i];
                    break;
                  }
                }
                return t;
              }, {});
              try {
                t.exception.values.forEach((t) => {
                  t.stacktrace.frames.forEach((t) => {
                    t.filename && (t.debug_id = s[t.filename]);
                  });
                });
              } catch (t) {}
            })(b, t.stackParser);
        let E = (function (t, e) {
          if (!e) return t;
          let n = t ? t.clone() : new l.sX();
          return n.update(e), n;
        })(p, n.captureContext);
        n.mechanism && (0, r.EG)(b, n.mechanism);
        let T = g && g.getEventProcessors ? g.getEventProcessors() : [],
          x = (0, l.lW)().getScopeData();
        if (m) {
          let t = m.getScopeData();
          (0, d.yo)(x, t);
        }
        if (E) {
          let t = E.getScopeData();
          (0, d.yo)(x, t);
        }
        let k = [...(n.attachments || []), ...x.attachments];
        k.length && (n.attachments = k), (0, d.gi)(b, x);
        let w = [...T, ...(0, u.fH)(), ...x.eventProcessors],
          I = (0, u.RP)(w, b, n);
        return I.then((t) =>
          (t &&
            (function (t) {
              let e = {};
              try {
                t.exception.values.forEach((t) => {
                  t.stacktrace.frames.forEach((t) => {
                    t.debug_id &&
                      (t.abs_path
                        ? (e[t.abs_path] = t.debug_id)
                        : t.filename && (e[t.filename] = t.debug_id),
                      delete t.debug_id);
                  });
                });
              } catch (t) {}
              if (0 === Object.keys(e).length) return;
              (t.debug_meta = t.debug_meta || {}),
                (t.debug_meta.images = t.debug_meta.images || []);
              let n = t.debug_meta.images;
              Object.keys(e).forEach((t) => {
                n.push({ type: "sourcemap", code_file: t, debug_id: e[t] });
              });
            })(t),
          "number" == typeof v && v > 0)
            ? (function (t, e, n) {
                if (!t) return null;
                let r = {
                  ...t,
                  ...(t.breadcrumbs && {
                    breadcrumbs: t.breadcrumbs.map((t) => ({
                      ...t,
                      ...(t.data && { data: (0, o.Fv)(t.data, e, n) }),
                    })),
                  }),
                  ...(t.user && { user: (0, o.Fv)(t.user, e, n) }),
                  ...(t.contexts && { contexts: (0, o.Fv)(t.contexts, e, n) }),
                  ...(t.extra && { extra: (0, o.Fv)(t.extra, e, n) }),
                };
                return (
                  t.contexts &&
                    t.contexts.trace &&
                    r.contexts &&
                    ((r.contexts.trace = t.contexts.trace),
                    t.contexts.trace.data &&
                      (r.contexts.trace.data = (0, o.Fv)(
                        t.contexts.trace.data,
                        e,
                        n
                      ))),
                  t.spans &&
                    (r.spans = t.spans.map((t) => {
                      let r = (0, h.XU)(t).data;
                      return r && (t.data = (0, o.Fv)(r, e, n)), t;
                    })),
                  r
                );
              })(t, v, y)
            : t
        );
      }
      let f = new WeakMap();
      function g(t) {
        return t
          ? t instanceof l.sX ||
            "function" == typeof t ||
            Object.keys(t).some((t) => m.includes(t))
            ? { captureContext: t }
            : t
          : void 0;
      }
      let m = [
        "user",
        "level",
        "extra",
        "contexts",
        "tags",
        "fingerprint",
        "requestSession",
        "propagationContext",
      ];
    },
    16: function (t, e, n) {
      "use strict";
      n.d(e, {
        $k: function () {
          return l;
        },
        Hb: function () {
          return u;
        },
        Tt: function () {
          return p;
        },
        XU: function () {
          return h;
        },
        i0: function () {
          return o;
        },
        ve: function () {
          return a;
        },
        wy: function () {
          return c;
        },
      });
      var r = n(819),
        i = n(8932),
        s = n(8459);
      let a = 0,
        o = 1;
      function c(t) {
        let { spanId: e, traceId: n } = t.spanContext(),
          {
            data: i,
            op: s,
            parent_span_id: a,
            status: o,
            tags: c,
            origin: u,
          } = h(t);
        return (0, r.Jr)({
          data: i,
          op: s,
          parent_span_id: a,
          span_id: e,
          status: o,
          tags: c,
          trace_id: n,
          origin: u,
        });
      }
      function u(t) {
        let { traceId: e, spanId: n } = t.spanContext(),
          r = p(t);
        return (0, i.$p)(e, n, r);
      }
      function l(t) {
        return "number" == typeof t
          ? d(t)
          : Array.isArray(t)
          ? t[0] + t[1] / 1e9
          : t instanceof Date
          ? d(t.getTime())
          : (0, s.ph)();
      }
      function d(t) {
        return t > 9999999999 ? t / 1e3 : t;
      }
      function h(t) {
        return "function" == typeof t.getSpanJSON
          ? t.getSpanJSON()
          : "function" == typeof t.toJSON
          ? t.toJSON()
          : {};
      }
      function p(t) {
        let { traceFlags: e } = t.spanContext();
        return Boolean(e & o);
      }
    },
    9150: function (t, e, n) {
      "use strict";
      n.d(e, {
        J: function () {
          return r;
        },
      });
      let r = "7.94.1";
    },
    5060: function (t, e, n) {
      "use strict";
      n.d(e, {
        X: function () {
          return r;
        },
      });
      let r = !1;
    },
    1200: function (t, e, n) {
      "use strict";
      let r, i, s, a, o, c, u, l, d, h, p, f, g;
      var m = n(3729);
      function _(t) {
        if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__)
          return !1;
        let e = (0, m.s3)(),
          n = t || (e && e.getOptions());
        return (
          !!n &&
          (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
        );
      }
      var v = n(1760),
        y = n(6994),
        b = n(4026),
        S = n(741),
        E = n(5048);
      let T = [];
      function x(t, e, n) {
        if (n[e.name]) {
          b.X &&
            y.kg.log(
              "Integration skipped because it was already installed: ".concat(
                e.name
              )
            );
          return;
        }
        if (
          ((n[e.name] = e),
          -1 === T.indexOf(e.name) && (e.setupOnce(S.cc, E.Gd), T.push(e.name)),
          e.setup && "function" == typeof e.setup && e.setup(t),
          t.on && "function" == typeof e.preprocessEvent)
        ) {
          let n = e.preprocessEvent.bind(e);
          t.on("preprocessEvent", (e, r) => n(e, r, t));
        }
        if (t.addEventProcessor && "function" == typeof e.processEvent) {
          let n = e.processEvent.bind(e),
            r = Object.assign((e, r) => n(e, r, t), { id: e.name });
          t.addEventProcessor(r);
        }
        b.X && y.kg.log("Integration installed: ".concat(e.name));
      }
      function k(t, e) {
        return Object.assign(
          function () {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return e(...n);
          },
          { id: t }
        );
      }
      let w =
        /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
      function I() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        let r = "",
          i = !1;
        for (let t = e.length - 1; t >= -1 && !i; t--) {
          let n = t >= 0 ? e[t] : "/";
          n && ((r = "".concat(n, "/").concat(r)), (i = "/" === n.charAt(0)));
        }
        return (
          (r = (function (t, e) {
            let n = 0;
            for (let e = t.length - 1; e >= 0; e--) {
              let r = t[e];
              "." === r
                ? t.splice(e, 1)
                : ".." === r
                ? (t.splice(e, 1), n++)
                : n && (t.splice(e, 1), n--);
            }
            if (e) for (; n--; n) t.unshift("..");
            return t;
          })(
            r.split("/").filter((t) => !!t),
            !i
          ).join("/")),
          (i ? "/" : "") + r || "."
        );
      }
      function C(t) {
        let e = 0;
        for (; e < t.length && "" === t[e]; e++);
        let n = t.length - 1;
        for (; n >= 0 && "" === t[n]; n--);
        return e > n ? [] : t.slice(e, n - e + 1);
      }
      let O = "RewriteFrames",
        R = k(O, function () {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = t.root,
            n = t.prefix || "app:///",
            r =
              t.iteratee ||
              ((t) => {
                if (!t.filename) return t;
                let r =
                    /^[a-zA-Z]:\\/.test(t.filename) ||
                    (t.filename.includes("\\") && !t.filename.includes("/")),
                  i = /^\//.test(t.filename);
                if (r || i) {
                  var s;
                  let i;
                  let a = r
                      ? t.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/")
                      : t.filename,
                    o = e
                      ? (function (t, e) {
                          (t = I(t).slice(1)), (e = I(e).slice(1));
                          let n = C(t.split("/")),
                            r = C(e.split("/")),
                            i = Math.min(n.length, r.length),
                            s = i;
                          for (let t = 0; t < i; t++)
                            if (n[t] !== r[t]) {
                              s = t;
                              break;
                            }
                          let a = [];
                          for (let t = s; t < n.length; t++) a.push("..");
                          return (a = a.concat(r.slice(s))).join("/");
                        })(e, a)
                      : ((i = (function (t) {
                          let e =
                              t.length > 1024
                                ? "<truncated>".concat(t.slice(-1024))
                                : t,
                            n = w.exec(e);
                          return n ? n.slice(1) : [];
                        })(a)[2]),
                        s &&
                          i.slice(-1 * s.length) === s &&
                          (i = i.slice(0, i.length - s.length)),
                        i);
                  t.filename = "".concat(n).concat(o);
                }
                return t;
              });
          return {
            name: O,
            setupOnce() {},
            processEvent(t) {
              let e = t;
              return (
                t.exception &&
                  Array.isArray(t.exception.values) &&
                  (e = (function (t) {
                    try {
                      return {
                        ...t,
                        exception: {
                          ...t.exception,
                          values: t.exception.values.map((t) => {
                            var e;
                            return {
                              ...t,
                              ...(t.stacktrace && {
                                stacktrace: {
                                  ...(e = t.stacktrace),
                                  frames:
                                    e && e.frames && e.frames.map((t) => r(t)),
                                },
                              }),
                            };
                          }),
                        },
                      };
                    } catch (e) {
                      return t;
                    }
                  })(e)),
                e
              );
            },
          };
        });
      var D = n(9150),
        A = n(328);
      let N = [
          /^Script error\.?$/,
          /^Javascript error: Script error\.? on line 0$/,
        ],
        j = [
          /^.*\/healthcheck$/,
          /^.*\/healthy$/,
          /^.*\/live$/,
          /^.*\/ready$/,
          /^.*\/heartbeat$/,
          /^.*\/health$/,
          /^.*\/healthz$/,
        ],
        P = "InboundFilters",
        L = k(P, function () {
          let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            name: P,
            setupOnce() {},
            processEvent(e, n, r) {
              var i;
              let s = r.getOptions(),
                a = (function () {
                  let t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  return {
                    allowUrls: [...(t.allowUrls || []), ...(e.allowUrls || [])],
                    denyUrls: [...(t.denyUrls || []), ...(e.denyUrls || [])],
                    ignoreErrors: [
                      ...(t.ignoreErrors || []),
                      ...(e.ignoreErrors || []),
                      ...(t.disableErrorDefaults ? [] : N),
                    ],
                    ignoreTransactions: [
                      ...(t.ignoreTransactions || []),
                      ...(e.ignoreTransactions || []),
                      ...(t.disableTransactionDefaults ? [] : j),
                    ],
                    ignoreInternal:
                      void 0 === t.ignoreInternal || t.ignoreInternal,
                  };
                })(t, s);
              return (
                a.ignoreInternal &&
                (function (t) {
                  try {
                    return "SentryError" === t.exception.values[0].type;
                  } catch (t) {}
                  return !1;
                })(e)
                  ? (b.X &&
                      y.kg.warn(
                        "Event dropped due to being internal Sentry Error.\nEvent: ".concat(
                          (0, v.jH)(e)
                        )
                      ),
                    0)
                  : ((i = a.ignoreErrors),
                    !e.type &&
                      i &&
                      i.length &&
                      (function (t) {
                        let e;
                        let n = [];
                        t.message && n.push(t.message);
                        try {
                          e = t.exception.values[t.exception.values.length - 1];
                        } catch (t) {}
                        return (
                          e &&
                            e.value &&
                            (n.push(e.value),
                            e.type &&
                              n.push("".concat(e.type, ": ").concat(e.value))),
                          b.X &&
                            0 === n.length &&
                            y.kg.error(
                              "Could not extract message for event ".concat(
                                (0, v.jH)(t)
                              )
                            ),
                          n
                        );
                      })(e).some((t) => (0, A.U0)(t, i)))
                  ? (b.X &&
                      y.kg.warn(
                        "Event dropped due to being matched by `ignoreErrors` option.\nEvent: ".concat(
                          (0, v.jH)(e)
                        )
                      ),
                    0)
                  : !(function (t, e) {
                      if ("transaction" !== t.type || !e || !e.length)
                        return !1;
                      let n = t.transaction;
                      return !!n && (0, A.U0)(n, e);
                    })(e, a.ignoreTransactions)
                  ? !(function (t, e) {
                      if (!e || !e.length) return !1;
                      let n = M(t);
                      return !!n && (0, A.U0)(n, e);
                    })(e, a.denyUrls)
                    ? (function (t, e) {
                        if (!e || !e.length) return !0;
                        let n = M(t);
                        return !n || (0, A.U0)(n, e);
                      })(e, a.allowUrls) ||
                      (b.X &&
                        y.kg.warn(
                          "Event dropped due to not being matched by `allowUrls` option.\nEvent: "
                            .concat((0, v.jH)(e), ".\nUrl: ")
                            .concat(M(e))
                        ),
                      0)
                    : (b.X &&
                        y.kg.warn(
                          "Event dropped due to being matched by `denyUrls` option.\nEvent: "
                            .concat((0, v.jH)(e), ".\nUrl: ")
                            .concat(M(e))
                        ),
                      0)
                  : (b.X &&
                      y.kg.warn(
                        "Event dropped due to being matched by `ignoreTransactions` option.\nEvent: ".concat(
                          (0, v.jH)(e)
                        )
                      ),
                    0)
              )
                ? e
                : null;
            },
          };
        });
      function M(t) {
        try {
          let e;
          try {
            e = t.exception.values[0].stacktrace.frames;
          } catch (t) {}
          return e
            ? (function () {
                let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [];
                for (let e = t.length - 1; e >= 0; e--) {
                  let n = t[e];
                  if (
                    n &&
                    "<anonymous>" !== n.filename &&
                    "[native code]" !== n.filename
                  )
                    return n.filename || null;
                }
                return null;
              })(e)
            : null;
        } catch (e) {
          return (
            b.X &&
              y.kg.error("Cannot extract url for event ".concat((0, v.jH)(t))),
            null
          );
        }
      }
      var X = n(819);
      let H = "FunctionToString",
        U = () => ({
          name: H,
          setupOnce() {
            r = Function.prototype.toString;
            try {
              Function.prototype.toString = function () {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                  e[n] = arguments[n];
                let i = (0, X.HK)(this) || this;
                return r.apply(i, e);
              };
            } catch (t) {}
          },
        }),
        q = k(H, U);
      var F = n(2325),
        J = n(3580),
        $ = n(299);
      let G = (0, $.Rf)();
      function W() {
        if (!("fetch" in G)) return !1;
        try {
          return (
            new Headers(),
            new Request("http://www.example.com"),
            new Response(),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      function Y(t) {
        return (
          t &&
          /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
        );
      }
      let B = (0, $.Rf)(),
        z = {},
        V = {};
      function Z(t, e) {
        (z[t] = z[t] || []), z[t].push(e);
      }
      function K(t, e) {
        V[t] || (e(), (V[t] = !0));
      }
      function Q(t, e) {
        let n = t && z[t];
        if (n)
          for (let r of n)
            try {
              r(e);
            } catch (e) {
              J.X &&
                y.kg.error(
                  "Error while triggering instrumentation handler.\nType: "
                    .concat(t, "\nName: ")
                    .concat((0, F.$P)(r), "\nError:"),
                  e
                );
            }
      }
      let tt = $.n2;
      function te(t) {
        let e = "history";
        Z(e, t), K(e, tn);
      }
      function tn() {
        if (
          !(function () {
            let t = B.chrome,
              e = t && t.app && t.app.runtime,
              n =
                "history" in B &&
                !!B.history.pushState &&
                !!B.history.replaceState;
            return !e && n;
          })()
        )
          return;
        let t = tt.onpopstate;
        function e(t) {
          return function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            let s = n.length > 2 ? n[2] : void 0;
            if (s) {
              let t = i,
                e = String(s);
              (i = e), Q("history", { from: t, to: e });
            }
            return t.apply(this, n);
          };
        }
        (tt.onpopstate = function () {
          for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          let s = tt.location.href,
            a = i;
          if (((i = s), Q("history", { from: a, to: s }), t))
            try {
              return t.apply(this, n);
            } catch (t) {}
        }),
          (0, X.hl)(tt.history, "pushState", e),
          (0, X.hl)(tt.history, "replaceState", e);
      }
      var tr = n(4471),
        ti = n(9107);
      let ts =
        /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
      function ta(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          {
            host: n,
            path: r,
            pass: i,
            port: s,
            projectId: a,
            protocol: o,
            publicKey: c,
          } = t;
        return (
          ""
            .concat(o, "://")
            .concat(c)
            .concat(e && i ? ":".concat(i) : "") +
          "@"
            .concat(n)
            .concat(s ? ":".concat(s) : "", "/")
            .concat(r ? "".concat(r, "/") : r)
            .concat(a)
        );
      }
      function to(t) {
        let e = ts.exec(t);
        if (!e) {
          (0, y.Cf)(() => {
            console.error("Invalid Sentry Dsn: ".concat(t));
          });
          return;
        }
        let [n, r, i = "", s, a = "", o] = e.slice(1),
          c = "",
          u = o,
          l = u.split("/");
        if (
          (l.length > 1 && ((c = l.slice(0, -1).join("/")), (u = l.pop())), u)
        ) {
          let t = u.match(/^\d+/);
          t && (u = t[0]);
        }
        return tc({
          host: s,
          pass: i,
          path: c,
          projectId: u,
          port: a,
          protocol: n,
          publicKey: r,
        });
      }
      function tc(t) {
        return {
          protocol: t.protocol,
          publicKey: t.publicKey || "",
          pass: t.pass || "",
          host: t.host,
          port: t.port || "",
          path: t.path || "",
          projectId: t.projectId,
        };
      }
      var tu = n(4182);
      function tl(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return [t, e];
      }
      function td(t, e) {
        let n = t[1];
        for (let t of n) {
          let n = t[0].type,
            r = e(t, n);
          if (r) return !0;
        }
        return !1;
      }
      function th(t, e) {
        let n = e || new TextEncoder();
        return n.encode(t);
      }
      let tp = {
        session: "session",
        sessions: "session",
        attachment: "attachment",
        transaction: "transaction",
        event: "error",
        client_report: "internal",
        user_report: "default",
        profile: "profile",
        replay_event: "replay",
        replay_recording: "replay",
        check_in: "monitor",
        feedback: "feedback",
        statsd: "unknown",
      };
      function tf(t) {
        if (!t || !t.sdk) return;
        let { name: e, version: n } = t.sdk;
        return { name: e, version: n };
      }
      class tg extends Error {
        constructor(t, e = "warn") {
          super(t),
            (this.message = t),
            (this.name = new.target.prototype.constructor.name),
            Object.setPrototypeOf(this, new.target.prototype),
            (this.logLevel = e);
        }
      }
      var tm = n(116),
        t_ = n(8904),
        tv = n(9677);
      let ty = "Not capturing exception because it's already been captured.";
      class tb {
        captureException(t, e, n) {
          if ((0, v.YO)(t)) {
            b.X && y.kg.log(ty);
            return;
          }
          let r = e && e.event_id;
          return (
            this._process(
              this.eventFromException(t, e)
                .then((t) => this._captureEvent(t, e, n))
                .then((t) => {
                  r = t;
                })
            ),
            r
          );
        }
        captureMessage(t, e, n, r) {
          let i = n && n.event_id,
            s = (0, tr.Le)(t) ? t : String(t),
            a = (0, tr.pt)(t)
              ? this.eventFromMessage(s, e, n)
              : this.eventFromException(t, n);
          return (
            this._process(
              a
                .then((t) => this._captureEvent(t, n, r))
                .then((t) => {
                  i = t;
                })
            ),
            i
          );
        }
        captureEvent(t, e, n) {
          if (e && e.originalException && (0, v.YO)(e.originalException)) {
            b.X && y.kg.log(ty);
            return;
          }
          let r = e && e.event_id;
          return (
            this._process(
              this._captureEvent(t, e, n).then((t) => {
                r = t;
              })
            ),
            r
          );
        }
        captureSession(t) {
          "string" != typeof t.release
            ? b.X &&
              y.kg.warn(
                "Discarded session because of missing or non-string release"
              )
            : (this.sendSession(t), (0, tm.CT)(t, { init: !1 }));
        }
        getDsn() {
          return this._dsn;
        }
        getOptions() {
          return this._options;
        }
        getSdkMetadata() {
          return this._options._metadata;
        }
        getTransport() {
          return this._transport;
        }
        flush(t) {
          let e = this._transport;
          return e
            ? (this.metricsAggregator && this.metricsAggregator.flush(),
              this._isClientDoneProcessing(t).then((n) =>
                e.flush(t).then((t) => n && t)
              ))
            : (0, ti.WD)(!0);
        }
        close(t) {
          return this.flush(t).then(
            (t) => (
              (this.getOptions().enabled = !1),
              this.metricsAggregator && this.metricsAggregator.close(),
              t
            )
          );
        }
        getEventProcessors() {
          return this._eventProcessors;
        }
        addEventProcessor(t) {
          this._eventProcessors.push(t);
        }
        setupIntegrations(t) {
          ((t && !this._integrationsInitialized) ||
            (this._isEnabled() && !this._integrationsInitialized)) &&
            this._setupIntegrations();
        }
        init() {
          this._isEnabled() && this._setupIntegrations();
        }
        getIntegrationById(t) {
          return this.getIntegrationByName(t);
        }
        getIntegrationByName(t) {
          return this._integrations[t];
        }
        getIntegration(t) {
          try {
            return this._integrations[t.id] || null;
          } catch (e) {
            return (
              b.X &&
                y.kg.warn(
                  "Cannot retrieve integration ".concat(
                    t.id,
                    " from the current Client"
                  )
                ),
              null
            );
          }
        }
        addIntegration(t) {
          x(this, t, this._integrations);
        }
        sendEvent(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          this.emit("beforeSendEvent", t, e);
          let n = (function (t, e, n, r) {
            var i, s;
            let a = tf(n),
              o = t.type && "replay_event" !== t.type ? t.type : "event";
            (i = t),
              (s = n && n.sdk) &&
                ((i.sdk = i.sdk || {}),
                (i.sdk.name = i.sdk.name || s.name),
                (i.sdk.version = i.sdk.version || s.version),
                (i.sdk.integrations = [
                  ...(i.sdk.integrations || []),
                  ...(s.integrations || []),
                ]),
                (i.sdk.packages = [
                  ...(i.sdk.packages || []),
                  ...(s.packages || []),
                ]));
            let c = (function (t, e, n, r) {
              let i =
                t.sdkProcessingMetadata &&
                t.sdkProcessingMetadata.dynamicSamplingContext;
              return {
                event_id: t.event_id,
                sent_at: new Date().toISOString(),
                ...(e && { sdk: e }),
                ...(!!n && r && { dsn: ta(r) }),
                ...(i && { trace: (0, X.Jr)({ ...i }) }),
              };
            })(t, a, r, e);
            delete t.sdkProcessingMetadata;
            let u = [{ type: o }, t];
            return tl(c, [u]);
          })(t, this._dsn, this._options._metadata, this._options.tunnel);
          for (let t of e.attachments || [])
            n = (function (t, e) {
              let [n, r] = t;
              return [n, [...r, e]];
            })(
              n,
              (function (t, e) {
                let n = "string" == typeof t.data ? th(t.data, e) : t.data;
                return [
                  (0, X.Jr)({
                    type: "attachment",
                    length: n.length,
                    filename: t.filename,
                    content_type: t.contentType,
                    attachment_type: t.attachmentType,
                  }),
                  n,
                ];
              })(
                t,
                this._options.transportOptions &&
                  this._options.transportOptions.textEncoder
              )
            );
          let r = this._sendEnvelope(n);
          r && r.then((e) => this.emit("afterSendEvent", t, e), null);
        }
        sendSession(t) {
          let e = (function (t, e, n, r) {
            let i = tf(n),
              s = {
                sent_at: new Date().toISOString(),
                ...(i && { sdk: i }),
                ...(!!r && e && { dsn: ta(e) }),
              },
              a =
                "aggregates" in t
                  ? [{ type: "sessions" }, t]
                  : [{ type: "session" }, t.toJSON()];
            return tl(s, [a]);
          })(t, this._dsn, this._options._metadata, this._options.tunnel);
          this._sendEnvelope(e);
        }
        recordDroppedEvent(t, e, n) {
          if (this._options.sendClientReports) {
            let n = "".concat(t, ":").concat(e);
            b.X && y.kg.log('Adding outcome: "'.concat(n, '"')),
              (this._outcomes[n] = this._outcomes[n] + 1 || 1);
          }
        }
        captureAggregateMetrics(t) {
          b.X &&
            y.kg.log(
              "Flushing aggregated metrics, number of metrics: ".concat(
                t.length
              )
            );
          let e = (function (t, e, n, r) {
            let i = { sent_at: new Date().toISOString() };
            n &&
              n.sdk &&
              (i.sdk = { name: n.sdk.name, version: n.sdk.version }),
              r && e && (i.dsn = ta(e));
            let s = (function (t) {
              let e = (function (t) {
                  let e = "";
                  for (let n of t) {
                    let t = Object.entries(n.tags),
                      r =
                        t.length > 0
                          ? "|#".concat(
                              t
                                .map((t) => {
                                  let [e, n] = t;
                                  return "".concat(e, ":").concat(n);
                                })
                                .join(",")
                            )
                          : "";
                    e += ""
                      .concat(n.name, "@")
                      .concat(n.unit, ":")
                      .concat(n.metric, "|")
                      .concat(n.metricType)
                      .concat(r, "|T")
                      .concat(n.timestamp, "\n");
                  }
                  return e;
                })(t),
                n = { type: "statsd", length: e.length };
              return [n, e];
            })(t);
            return tl(i, [s]);
          })(t, this._dsn, this._options._metadata, this._options.tunnel);
          this._sendEnvelope(e);
        }
        on(t, e) {
          this._hooks[t] || (this._hooks[t] = []), this._hooks[t].push(e);
        }
        emit(t) {
          for (
            var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r];
          this._hooks[t] && this._hooks[t].forEach((t) => t(...n));
        }
        _setupIntegrations() {
          (this._integrations = (function (t, e) {
            let n = {};
            return (
              e.forEach((e) => {
                e && x(t, e, n);
              }),
              n
            );
          })(this, this._options.integrations)),
            (this._integrationsInitialized = !0);
        }
        _updateSessionFromEvent(t, e) {
          let n = !1,
            r = !1,
            i = e.exception && e.exception.values;
          if (i)
            for (let t of ((r = !0), i)) {
              let e = t.mechanism;
              if (e && !1 === e.handled) {
                n = !0;
                break;
              }
            }
          let s = "ok" === t.status,
            a = (s && 0 === t.errors) || (s && n);
          a &&
            ((0, tm.CT)(t, {
              ...(n && { status: "crashed" }),
              errors: t.errors || Number(r || n),
            }),
            this.captureSession(t));
        }
        _isClientDoneProcessing(t) {
          return new ti.cW((e) => {
            let n = 0,
              r = setInterval(() => {
                0 == this._numProcessing
                  ? (clearInterval(r), e(!0))
                  : ((n += 1), t && n >= t && (clearInterval(r), e(!1)));
              }, 1);
          });
        }
        _isEnabled() {
          return !1 !== this.getOptions().enabled && void 0 !== this._transport;
        }
        _prepareEvent(t, e, n) {
          let r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : (0, E.aF)(),
            i = this.getOptions(),
            s = Object.keys(this._integrations);
          return (
            !e.integrations && s.length > 0 && (e.integrations = s),
            this.emit("preprocessEvent", t, e),
            (0, tv.R)(i, t, e, n, this, r).then((t) => {
              if (null === t) return t;
              let { propagationContext: e } = t.sdkProcessingMetadata || {},
                r = t.contexts && t.contexts.trace;
              if (!r && e) {
                let { traceId: r, spanId: i, parentSpanId: s, dsc: a } = e;
                t.contexts = {
                  trace: { trace_id: r, span_id: i, parent_span_id: s },
                  ...t.contexts,
                };
                let o = a || (0, t_._)(r, this, n);
                t.sdkProcessingMetadata = {
                  dynamicSamplingContext: o,
                  ...t.sdkProcessingMetadata,
                };
              }
              return t;
            })
          );
        }
        _captureEvent(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = arguments.length > 2 ? arguments[2] : void 0;
          return this._processEvent(t, e, n).then(
            (t) => t.event_id,
            (t) => {
              b.X &&
                ("log" === t.logLevel ? y.kg.log(t.message) : y.kg.warn(t));
            }
          );
        }
        _processEvent(t, e, n) {
          let r = this.getOptions(),
            { sampleRate: i } = r,
            s = tE(t),
            a = tS(t),
            o = t.type || "error",
            c = "before send for type `".concat(o, "`");
          if (a && "number" == typeof i && Math.random() > i)
            return (
              this.recordDroppedEvent("sample_rate", "error", t),
              (0, ti.$2)(
                new tg(
                  "Discarding event because it's not included in the random sample (sampling rate = ".concat(
                    i,
                    ")"
                  ),
                  "log"
                )
              )
            );
          let u = "replay_event" === o ? "replay" : o;
          return this._prepareEvent(t, e, n)
            .then((n) => {
              if (null === n)
                throw (
                  (this.recordDroppedEvent("event_processor", u, t),
                  new tg(
                    "An event processor returned `null`, will not send event.",
                    "log"
                  ))
                );
              let i = e.data && !0 === e.data.__sentry__;
              if (i) return n;
              let s = (function (t, e, n) {
                let { beforeSend: r, beforeSendTransaction: i } = t;
                return tS(e) && r ? r(e, n) : tE(e) && i ? i(e, n) : e;
              })(r, n, e);
              return (function (t, e) {
                let n = "".concat(e, " must return `null` or a valid event.");
                if ((0, tr.J8)(t))
                  return t.then(
                    (t) => {
                      if (!(0, tr.PO)(t) && null !== t) throw new tg(n);
                      return t;
                    },
                    (t) => {
                      throw new tg("".concat(e, " rejected with ").concat(t));
                    }
                  );
                if (!(0, tr.PO)(t) && null !== t) throw new tg(n);
                return t;
              })(s, c);
            })
            .then((r) => {
              if (null === r)
                throw (
                  (this.recordDroppedEvent("before_send", u, t),
                  new tg(
                    "".concat(c, " returned `null`, will not send event."),
                    "log"
                  ))
                );
              let i = n && n.getSession();
              !s && i && this._updateSessionFromEvent(i, r);
              let a = r.transaction_info;
              return (
                s &&
                  a &&
                  r.transaction !== t.transaction &&
                  (r.transaction_info = { ...a, source: "custom" }),
                this.sendEvent(r, e),
                r
              );
            })
            .then(null, (t) => {
              if (t instanceof tg) throw t;
              throw (
                (this.captureException(t, {
                  data: { __sentry__: !0 },
                  originalException: t,
                }),
                new tg(
                  "Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ".concat(
                    t
                  )
                ))
              );
            });
        }
        _process(t) {
          this._numProcessing++,
            t.then(
              (t) => (this._numProcessing--, t),
              (t) => (this._numProcessing--, t)
            );
        }
        _sendEnvelope(t) {
          if (
            (this.emit("beforeEnvelope", t),
            this._isEnabled() && this._transport)
          )
            return this._transport.send(t).then(null, (t) => {
              b.X && y.kg.error("Error while sending event:", t);
            });
          b.X && y.kg.error("Transport disabled");
        }
        _clearOutcomes() {
          let t = this._outcomes;
          return (
            (this._outcomes = {}),
            Object.keys(t).map((e) => {
              let [n, r] = e.split(":");
              return { reason: n, category: r, quantity: t[e] };
            })
          );
        }
        constructor(t) {
          if (
            ((this._options = t),
            (this._integrations = {}),
            (this._integrationsInitialized = !1),
            (this._numProcessing = 0),
            (this._outcomes = {}),
            (this._hooks = {}),
            (this._eventProcessors = []),
            t.dsn
              ? (this._dsn = (function (t) {
                  let e = "string" == typeof t ? to(t) : tc(t);
                  if (
                    e &&
                    (function (t) {
                      if (!J.X) return !0;
                      let { port: e, projectId: n, protocol: r } = t,
                        i = ["protocol", "publicKey", "host", "projectId"].find(
                          (e) =>
                            !t[e] &&
                            (y.kg.error(
                              "Invalid Sentry Dsn: ".concat(e, " missing")
                            ),
                            !0)
                        );
                      return (
                        !i &&
                        (n.match(/^\d+$/)
                          ? "http" === r || "https" === r
                            ? !(e && isNaN(parseInt(e, 10))) ||
                              (y.kg.error(
                                "Invalid Sentry Dsn: Invalid port ".concat(e)
                              ),
                              !1)
                            : (y.kg.error(
                                "Invalid Sentry Dsn: Invalid protocol ".concat(
                                  r
                                )
                              ),
                              !1)
                          : (y.kg.error(
                              "Invalid Sentry Dsn: Invalid projectId ".concat(n)
                            ),
                            !1))
                      );
                    })(e)
                  )
                    return e;
                })(t.dsn))
              : b.X &&
                y.kg.warn("No DSN provided, client will not send events."),
            this._dsn)
          ) {
            let e = (function (t) {
              let e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = "string" == typeof e ? e : e.tunnel,
                r =
                  "string" != typeof e && e._metadata
                    ? e._metadata.sdk
                    : void 0;
              return (
                n ||
                ""
                  .concat(
                    ""
                      .concat(
                        (function (t) {
                          let e = t.protocol ? "".concat(t.protocol, ":") : "",
                            n = t.port ? ":".concat(t.port) : "";
                          return ""
                            .concat(e, "//")
                            .concat(t.host)
                            .concat(n)
                            .concat(t.path ? "/".concat(t.path) : "", "/api/");
                        })(t)
                      )
                      .concat(t.projectId, "/envelope/"),
                    "?"
                  )
                  .concat(
                    (0, X._j)({
                      sentry_key: t.publicKey,
                      sentry_version: "7",
                      ...(r && {
                        sentry_client: "".concat(r.name, "/").concat(r.version),
                      }),
                    })
                  )
              );
            })(this._dsn, t);
            this._transport = t.transport({
              recordDroppedEvent: this.recordDroppedEvent.bind(this),
              ...t.transportOptions,
              url: e,
            });
          }
        }
      }
      function tS(t) {
        return void 0 === t.type;
      }
      function tE(t) {
        return "transaction" === t.type;
      }
      var tT = n(8459);
      function tx(t, e) {
        let n = tw(t, e),
          r = {
            type: e && e.name,
            value: (function (t) {
              let e = t && t.message;
              return e
                ? e.error && "string" == typeof e.error.message
                  ? e.error.message
                  : e
                : "No error message";
            })(e),
          };
        return (
          n.length && (r.stacktrace = { frames: n }),
          void 0 === r.type &&
            "" === r.value &&
            (r.value = "Unrecoverable error caught"),
          r
        );
      }
      function tk(t, e) {
        return { exception: { values: [tx(t, e)] } };
      }
      function tw(t, e) {
        let n = e.stacktrace || e.stack || "",
          r = (function (t) {
            if (t) {
              if ("number" == typeof t.framesToPop) return t.framesToPop;
              if (tI.test(t.message)) return 1;
            }
            return 0;
          })(e);
        try {
          return t(n, r);
        } catch (t) {}
        return [];
      }
      let tI = /Minified React error #\d+;/i;
      function tC(t, e, n, r, i) {
        let s;
        if ((0, tr.VW)(e) && e.error) return tk(t, e.error);
        if ((0, tr.TX)(e) || (0, tr.fm)(e)) {
          if ("stack" in e) s = tk(t, e);
          else {
            let i = e.name || ((0, tr.TX)(e) ? "DOMError" : "DOMException"),
              a = e.message ? "".concat(i, ": ").concat(e.message) : i;
            (s = tO(t, a, n, r)), (0, v.Db)(s, a);
          }
          return (
            "code" in e &&
              (s.tags = { ...s.tags, "DOMException.code": "".concat(e.code) }),
            s
          );
        }
        return (0, tr.VZ)(e)
          ? tk(t, e)
          : (0, tr.PO)(e) || (0, tr.cO)(e)
          ? ((s = (function (t, e, n, r) {
              let i = (0, m.s3)(),
                s = i && i.getOptions().normalizeDepth,
                a = {
                  exception: {
                    values: [
                      {
                        type: (0, tr.cO)(e)
                          ? e.constructor.name
                          : r
                          ? "UnhandledRejection"
                          : "Error",
                        value: (function (t, e) {
                          let { isUnhandledRejection: n } = e,
                            r = (0, X.zf)(t),
                            i = n ? "promise rejection" : "exception";
                          if ((0, tr.VW)(t))
                            return "Event `ErrorEvent` captured as "
                              .concat(i, " with message `")
                              .concat(t.message, "`");
                          if ((0, tr.cO)(t)) {
                            let e = (function (t) {
                              try {
                                let e = Object.getPrototypeOf(t);
                                return e ? e.constructor.name : void 0;
                              } catch (t) {}
                            })(t);
                            return "Event `"
                              .concat(e, "` (type=")
                              .concat(t.type, ") captured as ")
                              .concat(i);
                          }
                          return "Object captured as "
                            .concat(i, " with keys: ")
                            .concat(r);
                        })(e, { isUnhandledRejection: r }),
                      },
                    ],
                  },
                  extra: { __serialized__: (0, tu.Qy)(e, s) },
                };
              if (n) {
                let e = tw(t, n);
                e.length && (a.exception.values[0].stacktrace = { frames: e });
              }
              return a;
            })(t, e, n, i)),
            (0, v.EG)(s, { synthetic: !0 }),
            s)
          : ((s = tO(t, e, n, r)),
            (0, v.Db)(s, "".concat(e), void 0),
            (0, v.EG)(s, { synthetic: !0 }),
            s);
      }
      function tO(t, e, n, r) {
        let i = {};
        if (r && n) {
          let r = tw(t, n);
          r.length &&
            (i.exception = {
              values: [{ value: e, stacktrace: { frames: r } }],
            });
        }
        if ((0, tr.Le)(e)) {
          let { __sentry_template_string__: t, __sentry_template_values__: n } =
            e;
          return (i.logentry = { message: t, params: n }), i;
        }
        return (i.message = e), i;
      }
      let tR = $.n2,
        tD = 0;
      function tA(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 ? arguments[2] : void 0;
        if ("function" != typeof t) return t;
        try {
          let e = t.__sentry_wrapped__;
          if (e) return e;
          if ((0, X.HK)(t)) return t;
        } catch (e) {
          return t;
        }
        let r = function () {
          let r = Array.prototype.slice.call(arguments);
          try {
            n && "function" == typeof n && n.apply(this, arguments);
            let i = r.map((t) => tA(t, e));
            return t.apply(this, i);
          } catch (t) {
            throw (
              (tD++,
              setTimeout(() => {
                tD--;
              }),
              (0, m.$e)((n) => {
                n.addEventProcessor(
                  (t) => (
                    e.mechanism &&
                      ((0, v.Db)(t, void 0, void 0), (0, v.EG)(t, e.mechanism)),
                    (t.extra = { ...t.extra, arguments: r }),
                    t
                  )
                ),
                  (0, m.Tb)(t);
              }),
              t)
            );
          }
        };
        try {
          for (let e in t)
            Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e]);
        } catch (t) {}
        (0, X.$Q)(r, t), (0, X.xp)(t, "__sentry_wrapped__", r);
        try {
          let e = Object.getOwnPropertyDescriptor(r, "name");
          e.configurable &&
            Object.defineProperty(r, "name", { get: () => t.name });
        } catch (t) {}
        return r;
      }
      class tN extends tb {
        eventFromException(t, e) {
          return (function (t, e, n, r) {
            let i = (n && n.syntheticException) || void 0,
              s = tC(t, e, i, r);
            return (
              (0, v.EG)(s),
              (s.level = "error"),
              n && n.event_id && (s.event_id = n.event_id),
              (0, ti.WD)(s)
            );
          })(this._options.stackParser, t, e, this._options.attachStacktrace);
        }
        eventFromMessage(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "info",
            n = arguments.length > 2 ? arguments[2] : void 0;
          return (function (t, e) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "info",
              r = arguments.length > 3 ? arguments[3] : void 0,
              i = arguments.length > 4 ? arguments[4] : void 0,
              s = (r && r.syntheticException) || void 0,
              a = tO(t, e, s, i);
            return (
              (a.level = n),
              r && r.event_id && (a.event_id = r.event_id),
              (0, ti.WD)(a)
            );
          })(
            this._options.stackParser,
            t,
            e,
            n,
            this._options.attachStacktrace
          );
        }
        captureUserFeedback(t) {
          if (!this._isEnabled()) return;
          let e = (function (t, e) {
            let { metadata: n, tunnel: r, dsn: i } = e,
              s = {
                event_id: t.event_id,
                sent_at: new Date().toISOString(),
                ...(n &&
                  n.sdk && {
                    sdk: { name: n.sdk.name, version: n.sdk.version },
                  }),
                ...(!!r && !!i && { dsn: ta(i) }),
              };
            return tl(s, [[{ type: "user_report" }, t]]);
          })(t, {
            metadata: this.getSdkMetadata(),
            dsn: this.getDsn(),
            tunnel: this.getOptions().tunnel,
          });
          this._sendEnvelope(e);
        }
        _prepareEvent(t, e, n) {
          return (
            (t.platform = t.platform || "javascript"),
            super._prepareEvent(t, e, n)
          );
        }
        _flushOutcomes() {
          let t = this._clearOutcomes();
          if (0 === t.length || !this._dsn) return;
          let e = (function (t, e, n) {
            let r = [
              { type: "client_report" },
              { timestamp: (0, tT.yW)(), discarded_events: t },
            ];
            return tl(e ? { dsn: e } : {}, [r]);
          })(t, this._options.tunnel && ta(this._dsn));
          this._sendEnvelope(e);
        }
        constructor(t) {
          let e = tR.SENTRY_SDK_SOURCE || "npm";
          (t._metadata = t._metadata || {}),
            (t._metadata.sdk = t._metadata.sdk || {
              name: "sentry.javascript.browser",
              packages: [
                { name: "".concat(e, ":@sentry/browser"), version: D.J },
              ],
              version: D.J,
            }),
            super(t),
            t.sendClientReports &&
              tR.document &&
              tR.document.addEventListener("visibilitychange", () => {
                "hidden" === tR.document.visibilityState &&
                  this._flushOutcomes();
              });
        }
      }
      let tj = null;
      function tP(t) {
        let e = "error";
        Z(e, t), K(e, tL);
      }
      function tL() {
        (tj = $.n2.onerror),
          ($.n2.onerror = function (t, e, n, r, i) {
            return (
              Q("error", { column: r, error: i, line: n, msg: t, url: e }),
              !!tj && !tj.__SENTRY_LOADER__ && tj.apply(this, arguments)
            );
          }),
          ($.n2.onerror.__SENTRY_INSTRUMENTED__ = !0);
      }
      let tM = null;
      function tX(t) {
        let e = "unhandledrejection";
        Z(e, t), K(e, tH);
      }
      function tH() {
        (tM = $.n2.onunhandledrejection),
          ($.n2.onunhandledrejection = function (t) {
            return (
              Q("unhandledrejection", t),
              !tM || !!tM.__SENTRY_LOADER__ || tM.apply(this, arguments)
            );
          }),
          ($.n2.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
      }
      var tU = n(6613);
      let tq = "GlobalHandlers",
        tF = k(tq, function () {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = { onerror: !0, onunhandledrejection: !0, ...t };
          return {
            name: tq,
            setupOnce() {
              Error.stackTraceLimit = 50;
            },
            setup(t) {
              e.onerror &&
                tP((e) => {
                  let { stackParser: n, attachStacktrace: r } = t$();
                  if ((0, m.s3)() !== t || tD > 0) return;
                  let { msg: i, url: s, line: a, column: o, error: c } = e,
                    u =
                      void 0 === c && (0, tr.HD)(i)
                        ? (function (t, e, n, r) {
                            let i = (0, tr.VW)(t) ? t.message : t,
                              s = "Error",
                              a = i.match(
                                /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
                              );
                            a && ((s = a[1]), (i = a[2]));
                            let o = {
                              exception: { values: [{ type: s, value: i }] },
                            };
                            return tJ(o, e, n, r);
                          })(i, s, a, o)
                        : tJ(tC(n, c || i, void 0, r, !1), s, a, o);
                  (u.level = "error"),
                    (0, m.eN)(u, {
                      originalException: c,
                      mechanism: { handled: !1, type: "onerror" },
                    });
                }),
                e.onunhandledrejection &&
                  tX((e) => {
                    let { stackParser: n, attachStacktrace: r } = t$();
                    if ((0, m.s3)() !== t || tD > 0) return;
                    let i = (function (t) {
                        if ((0, tr.pt)(t)) return t;
                        try {
                          if ("reason" in t) return t.reason;
                          if ("detail" in t && "reason" in t.detail)
                            return t.detail.reason;
                        } catch (t) {}
                        return t;
                      })(e),
                      s = (0, tr.pt)(i)
                        ? {
                            exception: {
                              values: [
                                {
                                  type: "UnhandledRejection",
                                  value:
                                    "Non-Error promise rejection captured with value: ".concat(
                                      String(i)
                                    ),
                                },
                              ],
                            },
                          }
                        : tC(n, i, void 0, r, !0);
                    (s.level = "error"),
                      (0, m.eN)(s, {
                        originalException: i,
                        mechanism: {
                          handled: !1,
                          type: "onunhandledrejection",
                        },
                      });
                  });
            },
          };
        });
      function tJ(t, e, n, r) {
        let i = (t.exception = t.exception || {}),
          s = (i.values = i.values || []),
          a = (s[0] = s[0] || {}),
          o = (a.stacktrace = a.stacktrace || {}),
          c = (o.frames = o.frames || []),
          u = isNaN(parseInt(r, 10)) ? void 0 : r,
          l = isNaN(parseInt(n, 10)) ? void 0 : n,
          d = (0, tr.HD)(e) && e.length > 0 ? e : (0, tU.l4)();
        return (
          0 === c.length &&
            c.push({
              colno: u,
              filename: d,
              function: "?",
              in_app: !0,
              lineno: l,
            }),
          t
        );
      }
      function t$() {
        let t = (0, m.s3)(),
          e = (t && t.getOptions()) || {
            stackParser: () => [],
            attachStacktrace: !1,
          };
        return e;
      }
      let tG = [
          "EventTarget",
          "Window",
          "Node",
          "ApplicationCache",
          "AudioTrackList",
          "BroadcastChannel",
          "ChannelMergerNode",
          "CryptoOperation",
          "EventSource",
          "FileReader",
          "HTMLUnknownElement",
          "IDBDatabase",
          "IDBRequest",
          "IDBTransaction",
          "KeyOperation",
          "MediaController",
          "MessagePort",
          "ModalWindow",
          "Notification",
          "SVGElementInstance",
          "Screen",
          "SharedWorker",
          "TextTrack",
          "TextTrackCue",
          "TextTrackList",
          "WebSocket",
          "WebSocketWorker",
          "Worker",
          "XMLHttpRequest",
          "XMLHttpRequestEventTarget",
          "XMLHttpRequestUpload",
        ],
        tW = "TryCatch",
        tY = k(tW, function () {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = {
              XMLHttpRequest: !0,
              eventTarget: !0,
              requestAnimationFrame: !0,
              setInterval: !0,
              setTimeout: !0,
              ...t,
            };
          return {
            name: tW,
            setupOnce() {
              e.setTimeout && (0, X.hl)(tR, "setTimeout", tB),
                e.setInterval && (0, X.hl)(tR, "setInterval", tB),
                e.requestAnimationFrame &&
                  (0, X.hl)(tR, "requestAnimationFrame", tz),
                e.XMLHttpRequest &&
                  "XMLHttpRequest" in tR &&
                  (0, X.hl)(XMLHttpRequest.prototype, "send", tV);
              let t = e.eventTarget;
              if (t) {
                let e = Array.isArray(t) ? t : tG;
                e.forEach(tZ);
              }
            },
          };
        });
      function tB(t) {
        return function () {
          for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          let i = n[0];
          return (
            (n[0] = tA(i, {
              mechanism: {
                data: { function: (0, F.$P)(t) },
                handled: !1,
                type: "instrument",
              },
            })),
            t.apply(this, n)
          );
        };
      }
      function tz(t) {
        return function (e) {
          return t.apply(this, [
            tA(e, {
              mechanism: {
                data: {
                  function: "requestAnimationFrame",
                  handler: (0, F.$P)(t),
                },
                handled: !1,
                type: "instrument",
              },
            }),
          ]);
        };
      }
      function tV(t) {
        return function () {
          for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          let i = this;
          return (
            ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(
              (t) => {
                t in i &&
                  "function" == typeof i[t] &&
                  (0, X.hl)(i, t, function (e) {
                    let n = {
                        mechanism: {
                          data: { function: t, handler: (0, F.$P)(e) },
                          handled: !1,
                          type: "instrument",
                        },
                      },
                      r = (0, X.HK)(e);
                    return (
                      r && (n.mechanism.data.handler = (0, F.$P)(r)), tA(e, n)
                    );
                  });
              }
            ),
            t.apply(this, n)
          );
        };
      }
      function tZ(t) {
        let e = tR[t] && tR[t].prototype;
        e &&
          e.hasOwnProperty &&
          e.hasOwnProperty("addEventListener") &&
          ((0, X.hl)(e, "addEventListener", function (e) {
            return function (n, r, i) {
              try {
                "function" == typeof r.handleEvent &&
                  (r.handleEvent = tA(r.handleEvent, {
                    mechanism: {
                      data: {
                        function: "handleEvent",
                        handler: (0, F.$P)(r),
                        target: t,
                      },
                      handled: !1,
                      type: "instrument",
                    },
                  }));
              } catch (t) {}
              return e.apply(this, [
                n,
                tA(r, {
                  mechanism: {
                    data: {
                      function: "addEventListener",
                      handler: (0, F.$P)(r),
                      target: t,
                    },
                    handled: !1,
                    type: "instrument",
                  },
                }),
                i,
              ]);
            };
          }),
          (0, X.hl)(e, "removeEventListener", function (t) {
            return function (e, n, r) {
              try {
                let i = n && n.__sentry_wrapped__;
                i && t.call(this, e, i, r);
              } catch (t) {}
              return t.call(this, e, n, r);
            };
          }));
      }
      function tK() {
        "console" in $.n2 &&
          y.RU.forEach(function (t) {
            t in $.n2.console &&
              (0, X.hl)($.n2.console, t, function (e) {
                return (
                  (y.LD[t] = e),
                  function () {
                    for (
                      var e = arguments.length, n = Array(e), r = 0;
                      r < e;
                      r++
                    )
                      n[r] = arguments[r];
                    Q("console", { args: n, level: t });
                    let i = y.LD[t];
                    i && i.apply($.n2.console, n);
                  }
                );
              });
          });
      }
      let tQ = $.n2;
      function t0() {
        if (!tQ.document) return;
        let t = Q.bind(null, "dom"),
          e = t1(t, !0);
        tQ.document.addEventListener("click", e, !1),
          tQ.document.addEventListener("keypress", e, !1),
          ["EventTarget", "Node"].forEach((e) => {
            let n = tQ[e] && tQ[e].prototype;
            n &&
              n.hasOwnProperty &&
              n.hasOwnProperty("addEventListener") &&
              ((0, X.hl)(n, "addEventListener", function (e) {
                return function (n, r, i) {
                  if ("click" === n || "keypress" == n)
                    try {
                      let r = this,
                        s = (r.__sentry_instrumentation_handlers__ =
                          r.__sentry_instrumentation_handlers__ || {}),
                        a = (s[n] = s[n] || { refCount: 0 });
                      if (!a.handler) {
                        let r = t1(t);
                        (a.handler = r), e.call(this, n, r, i);
                      }
                      a.refCount++;
                    } catch (t) {}
                  return e.call(this, n, r, i);
                };
              }),
              (0, X.hl)(n, "removeEventListener", function (t) {
                return function (e, n, r) {
                  if ("click" === e || "keypress" == e)
                    try {
                      let n = this.__sentry_instrumentation_handlers__ || {},
                        i = n[e];
                      i &&
                        (i.refCount--,
                        i.refCount <= 0 &&
                          (t.call(this, e, i.handler, r),
                          (i.handler = void 0),
                          delete n[e]),
                        0 === Object.keys(n).length &&
                          delete this.__sentry_instrumentation_handlers__);
                    } catch (t) {}
                  return t.call(this, e, n, r);
                };
              }));
          });
      }
      function t1(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (n) => {
          if (!n || n._sentryCaptured) return;
          let r = (function (t) {
            try {
              return t.target;
            } catch (t) {
              return null;
            }
          })(n);
          if (
            "keypress" === n.type &&
            (!r ||
              !r.tagName ||
              ("INPUT" !== r.tagName &&
                "TEXTAREA" !== r.tagName &&
                !r.isContentEditable))
          )
            return;
          (0, X.xp)(n, "_sentryCaptured", !0),
            r && !r._sentryId && (0, X.xp)(r, "_sentryId", (0, v.DM)());
          let i = "keypress" === n.type ? "input" : n.type;
          !(function (t) {
            if (t.type !== a) return !1;
            try {
              if (!t.target || t.target._sentryId !== o) return !1;
            } catch (t) {}
            return !0;
          })(n) &&
            (t({ event: n, name: i, global: e }),
            (a = n.type),
            (o = r ? r._sentryId : void 0)),
            clearTimeout(s),
            (s = tQ.setTimeout(() => {
              (o = void 0), (a = void 0);
            }, 1e3));
        };
      }
      let t2 = $.n2,
        t4 = "__sentry_xhr_v3__";
      function t3(t) {
        Z("xhr", t), K("xhr", t9);
      }
      function t9() {
        if (!t2.XMLHttpRequest) return;
        let t = XMLHttpRequest.prototype;
        (0, X.hl)(t, "open", function (t) {
          return function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            let i = Date.now(),
              s = (0, tr.HD)(n[0]) ? n[0].toUpperCase() : void 0,
              a = (function (t) {
                if ((0, tr.HD)(t)) return t;
                try {
                  return t.toString();
                } catch (t) {}
              })(n[1]);
            if (!s || !a) return t.apply(this, n);
            (this[t4] = { method: s, url: a, request_headers: {} }),
              "POST" === s &&
                a.match(/sentry_key/) &&
                (this.__sentry_own_request__ = !0);
            let o = () => {
              let t = this[t4];
              if (t && 4 === this.readyState) {
                try {
                  t.status_code = this.status;
                } catch (t) {}
                let e = {
                  args: [s, a],
                  endTimestamp: Date.now(),
                  startTimestamp: i,
                  xhr: this,
                };
                Q("xhr", e);
              }
            };
            return (
              "onreadystatechange" in this &&
              "function" == typeof this.onreadystatechange
                ? (0, X.hl)(this, "onreadystatechange", function (t) {
                    return function () {
                      for (
                        var e = arguments.length, n = Array(e), r = 0;
                        r < e;
                        r++
                      )
                        n[r] = arguments[r];
                      return o(), t.apply(this, n);
                    };
                  })
                : this.addEventListener("readystatechange", o),
              (0, X.hl)(this, "setRequestHeader", function (t) {
                return function () {
                  for (
                    var e = arguments.length, n = Array(e), r = 0;
                    r < e;
                    r++
                  )
                    n[r] = arguments[r];
                  let [i, s] = n,
                    a = this[t4];
                  return (
                    a &&
                      (0, tr.HD)(i) &&
                      (0, tr.HD)(s) &&
                      (a.request_headers[i.toLowerCase()] = s),
                    t.apply(this, n)
                  );
                };
              }),
              t.apply(this, n)
            );
          };
        }),
          (0, X.hl)(t, "send", function (t) {
            return function () {
              for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                n[r] = arguments[r];
              let i = this[t4];
              if (!i) return t.apply(this, n);
              void 0 !== n[0] && (i.body = n[0]);
              let s = {
                args: [i.method, i.url],
                startTimestamp: Date.now(),
                xhr: this,
              };
              return Q("xhr", s), t.apply(this, n);
            };
          });
      }
      function t6(t) {
        let e = "fetch";
        Z(e, t), K(e, t5);
      }
      function t5() {
        (function () {
          if ("string" == typeof EdgeRuntime) return !0;
          if (!W()) return !1;
          if (Y(G.fetch)) return !0;
          let t = !1,
            e = G.document;
          if (e && "function" == typeof e.createElement)
            try {
              let n = e.createElement("iframe");
              (n.hidden = !0),
                e.head.appendChild(n),
                n.contentWindow &&
                  n.contentWindow.fetch &&
                  (t = Y(n.contentWindow.fetch)),
                e.head.removeChild(n);
            } catch (t) {
              J.X &&
                y.kg.warn(
                  "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
                  t
                );
            }
          return t;
        })() &&
          (0, X.hl)($.n2, "fetch", function (t) {
            return function () {
              for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                n[r] = arguments[r];
              let { method: i, url: s } = (function (t) {
                  if (0 === t.length) return { method: "GET", url: "" };
                  if (2 === t.length) {
                    let [e, n] = t;
                    return {
                      url: t7(e),
                      method: t8(n, "method")
                        ? String(n.method).toUpperCase()
                        : "GET",
                    };
                  }
                  let e = t[0];
                  return {
                    url: t7(e),
                    method: t8(e, "method")
                      ? String(e.method).toUpperCase()
                      : "GET",
                  };
                })(n),
                a = {
                  args: n,
                  fetchData: { method: i, url: s },
                  startTimestamp: Date.now(),
                };
              return (
                Q("fetch", { ...a }),
                t.apply($.n2, n).then(
                  (t) => {
                    let e = { ...a, endTimestamp: Date.now(), response: t };
                    return Q("fetch", e), t;
                  },
                  (t) => {
                    let e = { ...a, endTimestamp: Date.now(), error: t };
                    throw (Q("fetch", e), t);
                  }
                )
              );
            };
          });
      }
      function t8(t, e) {
        return !!t && "object" == typeof t && !!t[e];
      }
      function t7(t) {
        return "string" == typeof t
          ? t
          : t
          ? t8(t, "url")
            ? t.url
            : t.toString
            ? t.toString()
            : ""
          : "";
      }
      let et = ["fatal", "error", "warning", "log", "info", "debug"];
      function ee(t) {
        if (!t) return {};
        let e = t.match(
          /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
        );
        if (!e) return {};
        let n = e[6] || "",
          r = e[8] || "";
        return {
          host: e[4],
          path: e[5],
          protocol: e[2],
          search: n,
          hash: r,
          relative: e[5] + n + r,
        };
      }
      let en = "Breadcrumbs",
        er = k(en, function () {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = {
              console: !0,
              dom: !0,
              fetch: !0,
              history: !0,
              sentry: !0,
              xhr: !0,
              ...t,
            };
          return {
            name: en,
            setupOnce() {},
            setup(t) {
              var n;
              e.console &&
                (function (t) {
                  let e = "console";
                  Z(e, t), K(e, tK);
                })(function (e) {
                  var n;
                  if ((0, m.s3)() !== t) return;
                  let r = {
                    category: "console",
                    data: { arguments: e.args, logger: "console" },
                    level:
                      "warn" === (n = e.level)
                        ? "warning"
                        : et.includes(n)
                        ? n
                        : "log",
                    message: (0, A.nK)(e.args, " "),
                  };
                  if ("assert" === e.level) {
                    if (!1 !== e.args[0]) return;
                    (r.message = "Assertion failed: ".concat(
                      (0, A.nK)(e.args.slice(1), " ") || "console.assert"
                    )),
                      (r.data.arguments = e.args.slice(1));
                  }
                  (0, m.n_)(r, { input: e.args, level: e.level });
                }),
                e.dom &&
                  (Z(
                    "dom",
                    ((n = e.dom),
                    function (e) {
                      let r, i;
                      if ((0, m.s3)() !== t) return;
                      let s =
                          "object" == typeof n ? n.serializeAttribute : void 0,
                        a =
                          "object" == typeof n &&
                          "number" == typeof n.maxStringLength
                            ? n.maxStringLength
                            : void 0;
                      a && a > 1024 && (a = 1024),
                        "string" == typeof s && (s = [s]);
                      try {
                        let t = e.event,
                          n = t && t.target ? t.target : t;
                        (r = (0, tU.Rt)(n, {
                          keyAttrs: s,
                          maxStringLength: a,
                        })),
                          (i = (0, tU.iY)(n));
                      } catch (t) {
                        r = "<unknown>";
                      }
                      if (0 === r.length) return;
                      let o = { category: "ui.".concat(e.name), message: r };
                      i && (o.data = { "ui.component_name": i }),
                        (0, m.n_)(o, {
                          event: e.event,
                          name: e.name,
                          global: e.global,
                        });
                    })
                  ),
                  K("dom", t0)),
                e.xhr &&
                  t3(function (e) {
                    if ((0, m.s3)() !== t) return;
                    let { startTimestamp: n, endTimestamp: r } = e,
                      i = e.xhr[t4];
                    if (!n || !r || !i) return;
                    let { method: s, url: a, status_code: o, body: c } = i,
                      u = {
                        xhr: e.xhr,
                        input: c,
                        startTimestamp: n,
                        endTimestamp: r,
                      };
                    (0,
                    m.n_)({ category: "xhr", data: { method: s, url: a, status_code: o }, type: "http" }, u);
                  }),
                e.fetch &&
                  t6(function (e) {
                    if ((0, m.s3)() !== t) return;
                    let { startTimestamp: n, endTimestamp: r } = e;
                    if (
                      !(
                        !r ||
                        (e.fetchData.url.match(/sentry_key/) &&
                          "POST" === e.fetchData.method)
                      )
                    ) {
                      if (e.error) {
                        let t = e.fetchData,
                          i = {
                            data: e.error,
                            input: e.args,
                            startTimestamp: n,
                            endTimestamp: r,
                          };
                        (0, m.n_)(
                          {
                            category: "fetch",
                            data: t,
                            level: "error",
                            type: "http",
                          },
                          i
                        );
                      } else {
                        let t = e.response,
                          i = { ...e.fetchData, status_code: t && t.status },
                          s = {
                            input: e.args,
                            response: t,
                            startTimestamp: n,
                            endTimestamp: r,
                          };
                        (0, m.n_)(
                          { category: "fetch", data: i, type: "http" },
                          s
                        );
                      }
                    }
                  }),
                e.history &&
                  te(function (e) {
                    if ((0, m.s3)() !== t) return;
                    let n = e.from,
                      r = e.to,
                      i = ee(tR.location.href),
                      s = n ? ee(n) : void 0,
                      a = ee(r);
                    (s && s.path) || (s = i),
                      i.protocol === a.protocol &&
                        i.host === a.host &&
                        (r = a.relative),
                      i.protocol === s.protocol &&
                        i.host === s.host &&
                        (n = s.relative),
                      (0, m.n_)({
                        category: "navigation",
                        data: { from: n, to: r },
                      });
                  }),
                e.sentry &&
                  t.on &&
                  t.on("beforeSendEvent", function (e) {
                    (0, m.s3)() === t &&
                      (0, m.n_)(
                        {
                          category: "sentry.".concat(
                            "transaction" === e.type ? "transaction" : "event"
                          ),
                          event_id: e.event_id,
                          level: e.level,
                          message: (0, v.jH)(e),
                        },
                        { event: e }
                      );
                  });
            },
          };
        });
      function ei(t, e) {
        (t.mechanism = t.mechanism || { type: "generic", handled: !0 }),
          (t.mechanism = {
            ...t.mechanism,
            is_exception_group: !0,
            exception_id: e,
          });
      }
      function es(t, e, n, r) {
        (t.mechanism = t.mechanism || { type: "generic", handled: !0 }),
          (t.mechanism = {
            ...t.mechanism,
            type: "chained",
            source: e,
            exception_id: n,
            parent_id: r,
          });
      }
      let ea = "LinkedErrors",
        eo = k(ea, function () {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = t.limit || 5,
            n = t.key || "cause";
          return {
            name: ea,
            setupOnce() {},
            preprocessEvent(t, r, i) {
              let s = i.getOptions();
              !(function (t, e) {
                let n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 250,
                  r = arguments.length > 3 ? arguments[3] : void 0,
                  i = arguments.length > 4 ? arguments[4] : void 0,
                  s = arguments.length > 5 ? arguments[5] : void 0,
                  a = arguments.length > 6 ? arguments[6] : void 0;
                if (
                  !s.exception ||
                  !s.exception.values ||
                  !a ||
                  !(0, tr.V9)(a.originalException, Error)
                )
                  return;
                let o =
                  s.exception.values.length > 0
                    ? s.exception.values[s.exception.values.length - 1]
                    : void 0;
                o &&
                  (s.exception.values = (function t(e, n, r, i, s, a, o, c) {
                    if (a.length >= r + 1) return a;
                    let u = [...a];
                    if ((0, tr.V9)(i[s], Error)) {
                      ei(o, c);
                      let a = e(n, i[s]),
                        l = u.length;
                      es(a, s, l, c),
                        (u = t(e, n, r, i[s], s, [a, ...u], a, l));
                    }
                    return (
                      Array.isArray(i.errors) &&
                        i.errors.forEach((i, a) => {
                          if ((0, tr.V9)(i, Error)) {
                            ei(o, c);
                            let l = e(n, i),
                              d = u.length;
                            es(l, "errors[".concat(a, "]"), d, c),
                              (u = t(e, n, r, i, s, [l, ...u], l, d));
                          }
                        }),
                      u
                    );
                  })(
                    t,
                    e,
                    i,
                    a.originalException,
                    r,
                    s.exception.values,
                    o,
                    0
                  ).map(
                    (t) => (t.value && (t.value = (0, A.$G)(t.value, n)), t)
                  ));
              })(tx, s.stackParser, s.maxValueLength, n, e, t, r);
            },
          };
        }),
        ec = "HttpContext",
        eu = () => ({
          name: ec,
          setupOnce() {},
          preprocessEvent(t) {
            if (!tR.navigator && !tR.location && !tR.document) return;
            let e =
                (t.request && t.request.url) ||
                (tR.location && tR.location.href),
              { referrer: n } = tR.document || {},
              { userAgent: r } = tR.navigator || {},
              i = {
                ...(t.request && t.request.headers),
                ...(n && { Referer: n }),
                ...(r && { "User-Agent": r }),
              },
              s = { ...t.request, ...(e && { url: e }), headers: i };
            t.request = s;
          },
        }),
        el = k(ec, eu),
        ed = "Dedupe",
        eh = () => {
          let t;
          return {
            name: ed,
            setupOnce() {},
            processEvent(e) {
              if (e.type) return e;
              try {
                var n;
                if (
                  (n = t) &&
                  ((function (t, e) {
                    let n = t.message,
                      r = e.message;
                    return !!(
                      (n || r) &&
                      (!n || r) &&
                      (n || !r) &&
                      n === r &&
                      eg(t, e) &&
                      ef(t, e)
                    );
                  })(e, n) ||
                    (function (t, e) {
                      let n = em(e),
                        r = em(t);
                      return !!(
                        n &&
                        r &&
                        n.type === r.type &&
                        n.value === r.value &&
                        eg(t, e) &&
                        ef(t, e)
                      );
                    })(e, n))
                )
                  return null;
              } catch (t) {}
              return (t = e);
            },
          };
        },
        ep = k(ed, eh);
      function ef(t, e) {
        let n = e_(t),
          r = e_(e);
        if (!n && !r) return !0;
        if ((n && !r) || (!n && r) || r.length !== n.length) return !1;
        for (let t = 0; t < r.length; t++) {
          let e = r[t],
            i = n[t];
          if (
            e.filename !== i.filename ||
            e.lineno !== i.lineno ||
            e.colno !== i.colno ||
            e.function !== i.function
          )
            return !1;
        }
        return !0;
      }
      function eg(t, e) {
        let n = t.fingerprint,
          r = e.fingerprint;
        if (!n && !r) return !0;
        if ((n && !r) || (!n && r)) return !1;
        try {
          return !(n.join("") !== r.join(""));
        } catch (t) {
          return !1;
        }
      }
      function em(t) {
        return t.exception && t.exception.values && t.exception.values[0];
      }
      function e_(t) {
        let e = t.exception;
        if (e)
          try {
            return e.values[0].stacktrace.frames;
          } catch (t) {}
      }
      function ev(t, e, n, r) {
        let i = { filename: t, function: e, in_app: !0 };
        return void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i;
      }
      let ey =
          /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        eb = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        eS = (t) => {
          let e = ey.exec(t);
          if (e) {
            let t = e[2] && 0 === e[2].indexOf("eval");
            if (t) {
              let t = eb.exec(e[2]);
              t && ((e[2] = t[1]), (e[3] = t[2]), (e[4] = t[3]));
            }
            let [n, r] = eC(e[1] || "?", e[2]);
            return ev(r, n, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0);
          }
        },
        eE =
          /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        eT = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        ex = (t) => {
          let e = eE.exec(t);
          if (e) {
            let t = e[3] && e[3].indexOf(" > eval") > -1;
            if (t) {
              let t = eT.exec(e[3]);
              t &&
                ((e[1] = e[1] || "eval"),
                (e[3] = t[1]),
                (e[4] = t[2]),
                (e[5] = ""));
            }
            let n = e[3],
              r = e[1] || "?";
            return (
              ([r, n] = eC(r, n)),
              ev(n, r, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
            );
          }
        },
        ek =
          /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        ew = (t) => {
          let e = ek.exec(t);
          return e
            ? ev(e[2], e[1] || "?", +e[3], e[4] ? +e[4] : void 0)
            : void 0;
        },
        eI = (0, F.pE)(
          ...[
            [30, eS],
            [50, ex],
            [40, ew],
          ]
        ),
        eC = (t, e) => {
          let n = -1 !== t.indexOf("safari-extension"),
            r = -1 !== t.indexOf("safari-web-extension");
          return n || r
            ? [
                -1 !== t.indexOf("@") ? t.split("@")[0] : "?",
                n
                  ? "safari-extension:".concat(e)
                  : "safari-web-extension:".concat(e),
              ]
            : [t, e];
        };
      function eO(t, e) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : (function (t) {
                  let e = [];
                  function n(t) {
                    return e.splice(e.indexOf(t), 1)[0];
                  }
                  return {
                    $: e,
                    add: function (r) {
                      if (!(void 0 === t || e.length < t))
                        return (0, ti.$2)(
                          new tg(
                            "Not adding Promise because buffer limit was reached."
                          )
                        );
                      let i = r();
                      return (
                        -1 === e.indexOf(i) && e.push(i),
                        i
                          .then(() => n(i))
                          .then(null, () => n(i).then(null, () => {})),
                        i
                      );
                    },
                    drain: function (t) {
                      return new ti.cW((n, r) => {
                        let i = e.length;
                        if (!i) return n(!0);
                        let s = setTimeout(() => {
                          t && t > 0 && n(!1);
                        }, t);
                        e.forEach((t) => {
                          (0, ti.WD)(t).then(() => {
                            --i || (clearTimeout(s), n(!0));
                          }, r);
                        });
                      });
                    },
                  };
                })(t.bufferSize || 30),
          r = {},
          i = (t) => n.drain(t);
        function s(i) {
          let s = [];
          if (
            (td(i, (e, n) => {
              let i = tp[n];
              if (
                (function (t, e) {
                  let n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : Date.now();
                  return (t[e] || t.all || 0) > n;
                })(r, i)
              ) {
                let r = eR(e, n);
                t.recordDroppedEvent("ratelimit_backoff", i, r);
              } else s.push(e);
            }),
            0 === s.length)
          )
            return (0, ti.WD)();
          let a = tl(i[0], s),
            o = (e) => {
              td(a, (n, r) => {
                let i = eR(n, r);
                t.recordDroppedEvent(e, tp[r], i);
              });
            },
            c = () =>
              e({
                body: (function (t, e) {
                  let [n, r] = t,
                    i = JSON.stringify(n);
                  function s(t) {
                    "string" == typeof i
                      ? (i = "string" == typeof t ? i + t : [th(i, e), t])
                      : i.push("string" == typeof t ? th(t, e) : t);
                  }
                  for (let t of r) {
                    let [e, n] = t;
                    if (
                      (s("\n".concat(JSON.stringify(e), "\n")),
                      "string" == typeof n || n instanceof Uint8Array)
                    )
                      s(n);
                    else {
                      let t;
                      try {
                        t = JSON.stringify(n);
                      } catch (e) {
                        t = JSON.stringify((0, tu.Fv)(n));
                      }
                      s(t);
                    }
                  }
                  return "string" == typeof i
                    ? i
                    : (function (t) {
                        let e = t.reduce((t, e) => t + e.length, 0),
                          n = new Uint8Array(e),
                          r = 0;
                        for (let e of t) n.set(e, r), (r += e.length);
                        return n;
                      })(i);
                })(a, t.textEncoder),
              }).then(
                (t) => (
                  void 0 !== t.statusCode &&
                    (t.statusCode < 200 || t.statusCode >= 300) &&
                    b.X &&
                    y.kg.warn(
                      "Sentry responded with status code ".concat(
                        t.statusCode,
                        " to sent event."
                      )
                    ),
                  (r = (function (t, e) {
                    let { statusCode: n, headers: r } = e,
                      i =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : Date.now(),
                      s = { ...t },
                      a = r && r["x-sentry-rate-limits"],
                      o = r && r["retry-after"];
                    if (a)
                      for (let t of a.trim().split(",")) {
                        let [e, n] = t.split(":", 2),
                          r = parseInt(e, 10),
                          a = (isNaN(r) ? 60 : r) * 1e3;
                        if (n) for (let t of n.split(";")) s[t] = i + a;
                        else s.all = i + a;
                      }
                    else
                      o
                        ? (s.all =
                            i +
                            (function (t) {
                              let e =
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : Date.now(),
                                n = parseInt("".concat(t), 10);
                              if (!isNaN(n)) return 1e3 * n;
                              let r = Date.parse("".concat(t));
                              return isNaN(r) ? 6e4 : r - e;
                            })(o, i))
                        : 429 === n && (s.all = i + 6e4);
                    return s;
                  })(r, t)),
                  t
                ),
                (t) => {
                  throw (o("network_error"), t);
                }
              );
          return n.add(c).then(
            (t) => t,
            (t) => {
              if (t instanceof tg)
                return (
                  b.X &&
                    y.kg.error("Skipped sending event because buffer is full."),
                  o("queue_overflow"),
                  (0, ti.WD)()
                );
              throw t;
            }
          );
        }
        return (s.__sentry__baseTransport__ = !0), { send: s, flush: i };
      }
      function eR(t, e) {
        if ("event" === e || "transaction" === e)
          return Array.isArray(t) ? t[1] : void 0;
      }
      function eD(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : (function () {
                  if (p) return p;
                  if (Y(tR.fetch)) return (p = tR.fetch.bind(tR));
                  let t = tR.document,
                    e = tR.fetch;
                  if (t && "function" == typeof t.createElement)
                    try {
                      let n = t.createElement("iframe");
                      (n.hidden = !0), t.head.appendChild(n);
                      let r = n.contentWindow;
                      r && r.fetch && (e = r.fetch), t.head.removeChild(n);
                    } catch (t) {}
                  return (p = e.bind(tR));
                })(),
          n = 0,
          r = 0;
        return eO(t, function (i) {
          let s = i.body.length;
          (n += s), r++;
          let a = {
            body: i.body,
            method: "POST",
            referrerPolicy: "origin",
            headers: t.headers,
            keepalive: n <= 6e4 && r < 15,
            ...t.fetchOptions,
          };
          try {
            return e(t.url, a).then(
              (t) => (
                (n -= s),
                r--,
                {
                  statusCode: t.status,
                  headers: {
                    "x-sentry-rate-limits": t.headers.get(
                      "X-Sentry-Rate-Limits"
                    ),
                    "retry-after": t.headers.get("Retry-After"),
                  },
                }
              )
            );
          } catch (t) {
            return (p = void 0), (n -= s), r--, (0, ti.$2)(t);
          }
        });
      }
      function eA(t) {
        return eO(t, function (e) {
          return new ti.cW((n, r) => {
            let i = new XMLHttpRequest();
            for (let e in ((i.onerror = r),
            (i.onreadystatechange = () => {
              4 === i.readyState &&
                n({
                  statusCode: i.status,
                  headers: {
                    "x-sentry-rate-limits": i.getResponseHeader(
                      "X-Sentry-Rate-Limits"
                    ),
                    "retry-after": i.getResponseHeader("Retry-After"),
                  },
                });
            }),
            i.open("POST", t.url),
            t.headers))
              Object.prototype.hasOwnProperty.call(t.headers, e) &&
                i.setRequestHeader(e, t.headers[e]);
            i.send(e.body);
          });
        });
      }
      let eN = [
        new L(),
        new q(),
        new tY(),
        new er(),
        new tF(),
        new eo(),
        new ep(),
        new el(),
      ];
      var ej = n(16);
      let eP = "sentry.source",
        eL = "sentry.sample_rate",
        eM = "sentry.op";
      var eX = n(7235);
      class eH {
        add(t) {
          this.spans.length > this._maxlen
            ? (t.spanRecorder = void 0)
            : this.spans.push(t);
        }
        constructor(t = 1e3) {
          (this._maxlen = t), (this.spans = []);
        }
      }
      class eU {
        get name() {
          return this._name || "";
        }
        set name(t) {
          this.updateName(t);
        }
        get description() {
          return this._name;
        }
        set description(t) {
          this._name = t;
        }
        get traceId() {
          return this._traceId;
        }
        set traceId(t) {
          this._traceId = t;
        }
        get spanId() {
          return this._spanId;
        }
        set spanId(t) {
          this._spanId = t;
        }
        get sampled() {
          return this._sampled;
        }
        set sampled(t) {
          this._sampled = t;
        }
        get attributes() {
          return this._attributes;
        }
        set attributes(t) {
          this._attributes = t;
        }
        get startTimestamp() {
          return this._startTime;
        }
        set startTimestamp(t) {
          this._startTime = t;
        }
        get endTimestamp() {
          return this._endTime;
        }
        set endTimestamp(t) {
          this._endTime = t;
        }
        get status() {
          return this._status;
        }
        set status(t) {
          this._status = t;
        }
        get op() {
          return this._attributes[eM];
        }
        set op(t) {
          this.setAttribute(eM, t);
        }
        spanContext() {
          let { _spanId: t, _traceId: e, _sampled: n } = this;
          return { spanId: t, traceId: e, traceFlags: n ? ej.i0 : ej.ve };
        }
        startChild(t) {
          let e = new eU({
            ...t,
            parentSpanId: this._spanId,
            sampled: this._sampled,
            traceId: this._traceId,
          });
          (e.spanRecorder = this.spanRecorder),
            e.spanRecorder && e.spanRecorder.add(e);
          let n = (0, eX.G)(this);
          if (((e.transaction = n), b.X && n)) {
            let r = (t && t.op) || "< unknown op >",
              i = (0, ej.XU)(e).description || "< unknown name >",
              s = n.spanContext().spanId,
              a = "[Tracing] Starting '"
                .concat(r, "' span on transaction '")
                .concat(i, "' (")
                .concat(s, ").");
            y.kg.log(a), (this._logMessage = a);
          }
          return e;
        }
        setTag(t, e) {
          return (this.tags = { ...this.tags, [t]: e }), this;
        }
        setData(t, e) {
          return (this.data = { ...this.data, [t]: e }), this;
        }
        setAttribute(t, e) {
          void 0 === e ? delete this._attributes[t] : (this._attributes[t] = e);
        }
        setAttributes(t) {
          Object.keys(t).forEach((e) => this.setAttribute(e, t[e]));
        }
        setStatus(t) {
          return (this._status = t), this;
        }
        setHttpStatus(t) {
          this.setTag("http.status_code", String(t)),
            this.setData("http.response.status_code", t);
          let e = (function (t) {
            if (t < 400 && t >= 100) return "ok";
            if (t >= 400 && t < 500)
              switch (t) {
                case 401:
                  return "unauthenticated";
                case 403:
                  return "permission_denied";
                case 404:
                  return "not_found";
                case 409:
                  return "already_exists";
                case 413:
                  return "failed_precondition";
                case 429:
                  return "resource_exhausted";
                default:
                  return "invalid_argument";
              }
            if (t >= 500 && t < 600)
              switch (t) {
                case 501:
                  return "unimplemented";
                case 503:
                  return "unavailable";
                case 504:
                  return "deadline_exceeded";
                default:
                  return "internal_error";
              }
            return "unknown_error";
          })(t);
          return "unknown_error" !== e && this.setStatus(e), this;
        }
        setName(t) {
          this.updateName(t);
        }
        updateName(t) {
          return (this._name = t), this;
        }
        isSuccess() {
          return "ok" === this._status;
        }
        finish(t) {
          return this.end(t);
        }
        end(t) {
          if (this._endTime) return;
          let e = (0, eX.G)(this);
          if (b.X && e && e.spanContext().spanId !== this._spanId) {
            let t = this._logMessage;
            t && y.kg.log(t.replace("Starting", "Finishing"));
          }
          this._endTime = (0, ej.$k)(t);
        }
        toTraceparent() {
          return (0, ej.Hb)(this);
        }
        toContext() {
          return (0, X.Jr)({
            data: this._getData(),
            description: this._name,
            endTimestamp: this._endTime,
            op: this.op,
            parentSpanId: this.parentSpanId,
            sampled: this._sampled,
            spanId: this._spanId,
            startTimestamp: this._startTime,
            status: this._status,
            tags: this.tags,
            traceId: this._traceId,
          });
        }
        updateWithContext(t) {
          return (
            (this.data = t.data || {}),
            (this._name = t.name || t.description),
            (this._endTime = t.endTimestamp),
            (this.op = t.op),
            (this.parentSpanId = t.parentSpanId),
            (this._sampled = t.sampled),
            (this._spanId = t.spanId || this._spanId),
            (this._startTime = t.startTimestamp || this._startTime),
            (this._status = t.status),
            (this.tags = t.tags || {}),
            (this._traceId = t.traceId || this._traceId),
            this
          );
        }
        getTraceContext() {
          return (0, ej.wy)(this);
        }
        getSpanJSON() {
          return (0, X.Jr)({
            data: this._getData(),
            description: this._name,
            op: this._attributes[eM],
            parent_span_id: this.parentSpanId,
            span_id: this._spanId,
            start_timestamp: this._startTime,
            status: this._status,
            tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
            timestamp: this._endTime,
            trace_id: this._traceId,
            origin: this.origin,
          });
        }
        isRecording() {
          return !this._endTime && !!this._sampled;
        }
        toJSON() {
          return this.getSpanJSON();
        }
        _getData() {
          let { data: t, _attributes: e } = this,
            n = Object.keys(t).length > 0,
            r = Object.keys(e).length > 0;
          return n || r ? (n && r ? { ...t, ...e } : n ? t : e) : void 0;
        }
        constructor(t = {}) {
          (this._traceId = t.traceId || (0, v.DM)()),
            (this._spanId = t.spanId || (0, v.DM)().substring(16)),
            (this._startTime = t.startTimestamp || (0, tT.ph)()),
            (this.tags = t.tags ? { ...t.tags } : {}),
            (this.data = t.data ? { ...t.data } : {}),
            (this._attributes = t.attributes ? { ...t.attributes } : {}),
            (this.instrumenter = t.instrumenter || "sentry"),
            (this.origin = t.origin || "manual"),
            (this._name = t.name || t.description),
            t.parentSpanId && (this.parentSpanId = t.parentSpanId),
            "sampled" in t && (this._sampled = t.sampled),
            t.op && this.setAttribute(eM, t.op),
            t.status && (this._status = t.status),
            t.endTimestamp && (this._endTime = t.endTimestamp);
        }
      }
      class eq extends eU {
        get name() {
          return this._name;
        }
        set name(t) {
          this.setName(t);
        }
        get metadata() {
          return {
            source: "custom",
            spanMetadata: {},
            ...this._metadata,
            ...(this._attributes[eP] && { source: this._attributes[eP] }),
            ...(this._attributes[eL] && { sampleRate: this._attributes[eL] }),
          };
        }
        set metadata(t) {
          this._metadata = t;
        }
        setName(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "custom";
          (this._name = t), this.setAttribute(eP, e);
        }
        updateName(t) {
          return (this._name = t), this;
        }
        initSpanRecorder() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 1e3;
          this.spanRecorder || (this.spanRecorder = new eH(t)),
            this.spanRecorder.add(this);
        }
        setContext(t, e) {
          null === e ? delete this._contexts[t] : (this._contexts[t] = e);
        }
        setMeasurement(t, e) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          this._measurements[t] = { value: e, unit: n };
        }
        setMetadata(t) {
          this._metadata = { ...this._metadata, ...t };
        }
        end(t) {
          let e = (0, ej.$k)(t),
            n = this._finishTransaction(e);
          if (n) return this._hub.captureEvent(n);
        }
        toContext() {
          let t = super.toContext();
          return (0, X.Jr)({ ...t, name: this._name, trimEnd: this._trimEnd });
        }
        updateWithContext(t) {
          return (
            super.updateWithContext(t),
            (this._name = t.name || ""),
            (this._trimEnd = t.trimEnd),
            this
          );
        }
        getDynamicSamplingContext() {
          return (0, t_.j)(this);
        }
        setHub(t) {
          this._hub = t;
        }
        _finishTransaction(t) {
          if (void 0 !== this._endTime) return;
          this._name ||
            (b.X &&
              y.kg.warn(
                "Transaction has no name, falling back to `<unlabeled transaction>`."
              ),
            (this._name = "<unlabeled transaction>")),
            super.end(t);
          let e = this._hub.getClient();
          if (
            (e && e.emit && e.emit("finishTransaction", this),
            !0 !== this._sampled)
          ) {
            b.X &&
              y.kg.log(
                "[Tracing] Discarding transaction because its trace was not chosen to be sampled."
              ),
              e && e.recordDroppedEvent("sample_rate", "transaction");
            return;
          }
          let n = this.spanRecorder
            ? this.spanRecorder.spans.filter(
                (t) => t !== this && (0, ej.XU)(t).timestamp
              )
            : [];
          if (this._trimEnd && n.length > 0) {
            let t = n.map((t) => (0, ej.XU)(t).timestamp).filter(Boolean);
            this._endTime = t.reduce((t, e) => (t > e ? t : e));
          }
          let { metadata: r } = this,
            { source: i } = r,
            s = {
              contexts: { ...this._contexts, trace: (0, ej.wy)(this) },
              spans: n,
              start_timestamp: this._startTime,
              tags: this.tags,
              timestamp: this._endTime,
              transaction: this._name,
              type: "transaction",
              sdkProcessingMetadata: {
                ...r,
                dynamicSamplingContext: (0, t_.j)(this),
              },
              ...(i && { transaction_info: { source: i } }),
            },
            a = Object.keys(this._measurements).length > 0;
          return (
            a &&
              (b.X &&
                y.kg.log(
                  "[Measurements] Adding measurements to transaction",
                  JSON.stringify(this._measurements, void 0, 2)
                ),
              (s.measurements = this._measurements)),
            b.X &&
              y.kg.log(
                "[Tracing] Finishing "
                  .concat(this.op, " transaction: ")
                  .concat(this._name, ".")
              ),
            s
          );
        }
        constructor(t, e) {
          super(t),
            (this._measurements = {}),
            (this._contexts = {}),
            (this._hub = e || (0, E.Gd)()),
            (this._name = t.name || ""),
            (this._metadata = { ...t.metadata }),
            (this._trimEnd = t.trimEnd),
            (this.transaction = this);
          let n = this._metadata.dynamicSamplingContext;
          n && (this._frozenDynamicSamplingContext = { ...n });
        }
      }
      let eF = { idleTimeout: 1e3, finalTimeout: 3e4, heartbeatInterval: 5e3 };
      class eJ extends eH {
        add(t) {
          if (t.spanContext().spanId !== this.transactionSpanId) {
            var e = this;
            let n = t.end;
            (t.end = function () {
              for (var r = arguments.length, i = Array(r), s = 0; s < r; s++)
                i[s] = arguments[s];
              return e._popActivity(t.spanContext().spanId), n.apply(t, i);
            }),
              void 0 === (0, ej.XU)(t).timestamp &&
                this._pushActivity(t.spanContext().spanId);
          }
          super.add(t);
        }
        constructor(t, e, n, r) {
          super(r),
            (this._pushActivity = t),
            (this._popActivity = e),
            (this.transactionSpanId = n);
        }
      }
      class e$ extends eq {
        end(t) {
          let e = (0, ej.$k)(t);
          if (
            ((this._finished = !0),
            (this.activities = {}),
            "ui.action.click" === this.op &&
              this.setAttribute("finishReason", this._finishReason),
            this.spanRecorder)
          ) {
            for (let t of (b.X &&
              y.kg.log(
                "[Tracing] finishing IdleTransaction",
                new Date(1e3 * e).toISOString(),
                this.op
              ),
            this._beforeFinishCallbacks))
              t(this, e);
            (this.spanRecorder.spans = this.spanRecorder.spans.filter((t) => {
              if (t.spanContext().spanId === this.spanContext().spanId)
                return !0;
              !(0, ej.XU)(t).timestamp &&
                (t.setStatus("cancelled"),
                t.end(e),
                b.X &&
                  y.kg.log(
                    "[Tracing] cancelling span since transaction ended early",
                    JSON.stringify(t, void 0, 2)
                  ));
              let { start_timestamp: n, timestamp: r } = (0, ej.XU)(t),
                i = n && n < e,
                s = (this._finalTimeout + this._idleTimeout) / 1e3,
                a = r && n && r - n < s;
              if (b.X) {
                let e = JSON.stringify(t, void 0, 2);
                i
                  ? a ||
                    y.kg.log(
                      "[Tracing] discarding Span since it finished after Transaction final timeout",
                      e
                    )
                  : y.kg.log(
                      "[Tracing] discarding Span since it happened after Transaction was finished",
                      e
                    );
              }
              return i && a;
            })),
              b.X && y.kg.log("[Tracing] flushing IdleTransaction");
          } else b.X && y.kg.log("[Tracing] No active IdleTransaction");
          if (this._onScope) {
            let t = this._idleHub.getScope();
            t.getTransaction() === this && t.setSpan(void 0);
          }
          return super.end(t);
        }
        registerBeforeFinishCallback(t) {
          this._beforeFinishCallbacks.push(t);
        }
        initSpanRecorder(t) {
          if (!this.spanRecorder) {
            let e = (t) => {
                this._finished || this._pushActivity(t);
              },
              n = (t) => {
                this._finished || this._popActivity(t);
              };
            (this.spanRecorder = new eJ(e, n, this.spanContext().spanId, t)),
              b.X && y.kg.log("Starting heartbeat"),
              this._pingHeartbeat();
          }
          this.spanRecorder.add(this);
        }
        cancelIdleTimeout(t) {
          let { restartOnChildSpanChange: e } =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { restartOnChildSpanChange: !0 };
          (this._idleTimeoutCanceledPermanently = !1 === e),
            this._idleTimeoutID &&
              (clearTimeout(this._idleTimeoutID),
              (this._idleTimeoutID = void 0),
              0 === Object.keys(this.activities).length &&
                this._idleTimeoutCanceledPermanently &&
                ((this._finishReason = "cancelled"), this.end(t)));
        }
        setFinishReason(t) {
          this._finishReason = t;
        }
        sendAutoFinishSignal() {
          this._autoFinishAllowed ||
            (b.X &&
              y.kg.log(
                "[Tracing] Received finish signal for idle transaction."
              ),
            this._restartIdleTimeout(),
            (this._autoFinishAllowed = !0));
        }
        _restartIdleTimeout(t) {
          this.cancelIdleTimeout(),
            (this._idleTimeoutID = setTimeout(() => {
              this._finished ||
                0 !== Object.keys(this.activities).length ||
                ((this._finishReason = "idleTimeout"), this.end(t));
            }, this._idleTimeout));
        }
        _pushActivity(t) {
          this.cancelIdleTimeout(void 0, {
            restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently,
          }),
            b.X && y.kg.log("[Tracing] pushActivity: ".concat(t)),
            (this.activities[t] = !0),
            b.X &&
              y.kg.log(
                "[Tracing] new activities count",
                Object.keys(this.activities).length
              );
        }
        _popActivity(t) {
          if (
            (this.activities[t] &&
              (b.X && y.kg.log("[Tracing] popActivity ".concat(t)),
              delete this.activities[t],
              b.X &&
                y.kg.log(
                  "[Tracing] new activities count",
                  Object.keys(this.activities).length
                )),
            0 === Object.keys(this.activities).length)
          ) {
            let t = (0, tT.ph)();
            this._idleTimeoutCanceledPermanently
              ? this._autoFinishAllowed &&
                ((this._finishReason = "cancelled"), this.end(t))
              : this._restartIdleTimeout(t + this._idleTimeout / 1e3);
          }
        }
        _beat() {
          if (this._finished) return;
          let t = Object.keys(this.activities).join("");
          t === this._prevHeartbeatString
            ? this._heartbeatCounter++
            : (this._heartbeatCounter = 1),
            (this._prevHeartbeatString = t),
            this._heartbeatCounter >= 3
              ? this._autoFinishAllowed &&
                (b.X &&
                  y.kg.log(
                    "[Tracing] Transaction finished because of no change for 3 heart beats"
                  ),
                this.setStatus("deadline_exceeded"),
                (this._finishReason = "heartbeatFailed"),
                this.end())
              : this._pingHeartbeat();
        }
        _pingHeartbeat() {
          b.X &&
            y.kg.log(
              "pinging Heartbeat -> current counter: ".concat(
                this._heartbeatCounter
              )
            ),
            setTimeout(() => {
              this._beat();
            }, this._heartbeatInterval);
        }
        constructor(
          t,
          e,
          n = eF.idleTimeout,
          r = eF.finalTimeout,
          i = eF.heartbeatInterval,
          s = !1,
          a = !1
        ) {
          super(t, e),
            (this._idleHub = e),
            (this._idleTimeout = n),
            (this._finalTimeout = r),
            (this._heartbeatInterval = i),
            (this._onScope = s),
            (this.activities = {}),
            (this._heartbeatCounter = 0),
            (this._finished = !1),
            (this._idleTimeoutCanceledPermanently = !1),
            (this._beforeFinishCallbacks = []),
            (this._finishReason = "externalFinish"),
            (this._autoFinishAllowed = !a),
            s &&
              (b.X &&
                y.kg.log(
                  "Setting idle transaction on scope. Span ID: ".concat(
                    this.spanContext().spanId
                  )
                ),
              e.getScope().setSpan(this)),
            a || this._restartIdleTimeout(),
            setTimeout(() => {
              this._finished ||
                (this.setStatus("deadline_exceeded"),
                (this._finishReason = "finalTimeout"),
                this.end());
            }, this._finalTimeout);
        }
      }
      function eG(t) {
        let e = t || (0, E.Gd)(),
          n = e.getScope();
        return n.getTransaction();
      }
      let eW = !1;
      function eY() {
        let t = eG();
        if (t) {
          let e = "internal_error";
          b.X &&
            y.kg.log(
              "[Tracing] Transaction: ".concat(e, " -> Global error occured")
            ),
            t.setStatus(e);
        }
      }
      function eB(t, e, n) {
        var r;
        let i;
        return _(e)
          ? void 0 !== t.sampled
            ? (t.setAttribute(eL, Number(t.sampled)), t)
            : ("function" == typeof e.tracesSampler
                ? ((i = e.tracesSampler(n)), t.setAttribute(eL, Number(i)))
                : void 0 !== n.parentSampled
                ? (i = n.parentSampled)
                : void 0 !== e.tracesSampleRate
                ? ((i = e.tracesSampleRate), t.setAttribute(eL, Number(i)))
                : ((i = 1), t.setAttribute(eL, i)),
              (r = i),
              (0, tr.i2)(r) || !("number" == typeof r || "boolean" == typeof r)
                ? (b.X &&
                    y.kg.warn(
                      "[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got "
                        .concat(JSON.stringify(r), " of type ")
                        .concat(JSON.stringify(typeof r), ".")
                    ),
                  1)
                : (r < 0 || r > 1) &&
                  (b.X &&
                    y.kg.warn(
                      "[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ".concat(
                        r,
                        "."
                      )
                    ),
                  1))
            ? (b.X &&
                y.kg.warn(
                  "[Tracing] Discarding transaction because of invalid sample rate."
                ),
              (t.sampled = !1),
              t)
            : i
            ? ((t.sampled = Math.random() < i), t.sampled)
              ? (b.X &&
                  y.kg.log(
                    "[Tracing] starting "
                      .concat(t.op, " transaction - ")
                      .concat((0, ej.XU)(t).description)
                  ),
                t)
              : (b.X &&
                  y.kg.log(
                    "[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ".concat(
                      Number(i),
                      ")"
                    )
                  ),
                t)
            : (b.X &&
                y.kg.log(
                  "[Tracing] Discarding transaction because ".concat(
                    "function" == typeof e.tracesSampler
                      ? "tracesSampler returned 0 or false"
                      : "a negative sampling decision was inherited or tracesSampleRate is set to 0"
                  )
                ),
              (t.sampled = !1),
              t)
          : ((t.sampled = !1), t);
      }
      function ez() {
        let t = this.getScope(),
          e = t.getSpan();
        return e ? { "sentry-trace": (0, ej.Hb)(e) } : {};
      }
      function eV(t, e) {
        let n = this.getClient(),
          r = (n && n.getOptions()) || {},
          i = r.instrumenter || "sentry",
          s = t.instrumenter || "sentry";
        i !== s &&
          (b.X &&
            y.kg.error(
              "A transaction was started with instrumenter=`"
                .concat(s, "`, but the SDK is configured with the `")
                .concat(
                  i,
                  "` instrumenter.\nThe transaction will not be sampled. Please use the "
                )
                .concat(i, " instrumentation to start transactions.")
            ),
          (t.sampled = !1));
        let a = new eq(t, this);
        return (
          (a = eB(a, r, {
            parentSampled: t.parentSampled,
            transactionContext: t,
            ...e,
          })).isRecording() &&
            a.initSpanRecorder(r._experiments && r._experiments.maxSpans),
          n && n.emit && n.emit("startTransaction", a),
          a
        );
      }
      function eZ(t, e, n, r, i, s, a) {
        let o = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          c = t.getClient(),
          u = (c && c.getOptions()) || {},
          l = new e$(e, t, n, r, a, i, o);
        return (
          (l = eB(l, u, {
            parentSampled: e.parentSampled,
            transactionContext: e,
            ...s,
          })).isRecording() &&
            l.initSpanRecorder(u._experiments && u._experiments.maxSpans),
          c && c.emit && c.emit("startTransaction", l),
          l
        );
      }
      eY.tag = "sentry_tracingErrorCallback";
      var eK = n(8932);
      let eQ = $.n2,
        e0 = (t, e, n) => {
          let r, i;
          return (s) => {
            e.value >= 0 &&
              (s || n) &&
              ((i = e.value - (r || 0)) || void 0 === r) &&
              ((r = e.value), (e.delta = i), t(e));
          };
        },
        e1 = () =>
          "v3-"
            .concat(Date.now(), "-")
            .concat(Math.floor(Math.random() * (9e12 - 1)) + 1e12),
        e2 = () => {
          let t = eQ.performance.timing,
            e = eQ.performance.navigation.type,
            n = {
              entryType: "navigation",
              startTime: 0,
              type: 2 == e ? "back_forward" : 1 === e ? "reload" : "navigate",
            };
          for (let e in t)
            "navigationStart" !== e &&
              "toJSON" !== e &&
              (n[e] = Math.max(t[e] - t.navigationStart, 0));
          return n;
        },
        e4 = () =>
          eQ.__WEB_VITALS_POLYFILL__
            ? eQ.performance &&
              ((performance.getEntriesByType &&
                performance.getEntriesByType("navigation")[0]) ||
                e2())
            : eQ.performance &&
              performance.getEntriesByType &&
              performance.getEntriesByType("navigation")[0],
        e3 = () => {
          let t = e4();
          return (t && t.activationStart) || 0;
        },
        e9 = (t, e) => {
          let n = e4(),
            r = "navigate";
          return (
            n &&
              (r =
                eQ.document.prerendering || e3() > 0
                  ? "prerender"
                  : n.type.replace(/_/g, "-")),
            {
              name: t,
              value: void 0 === e ? -1 : e,
              rating: "good",
              delta: 0,
              entries: [],
              id: e1(),
              navigationType: r,
            }
          );
        },
        e6 = (t, e, n) => {
          try {
            if (PerformanceObserver.supportedEntryTypes.includes(t)) {
              let r = new PerformanceObserver((t) => {
                e(t.getEntries());
              });
              return (
                r.observe(Object.assign({ type: t, buffered: !0 }, n || {})), r
              );
            }
          } catch (t) {}
        },
        e5 = (t, e) => {
          let n = (r) => {
            ("pagehide" === r.type ||
              "hidden" === eQ.document.visibilityState) &&
              (t(r),
              e &&
                (removeEventListener("visibilitychange", n, !0),
                removeEventListener("pagehide", n, !0)));
          };
          addEventListener("visibilitychange", n, !0),
            addEventListener("pagehide", n, !0);
        },
        e8 = (t) => {
          let e;
          let n = e9("CLS", 0),
            r = 0,
            i = [],
            s = (t) => {
              t.forEach((t) => {
                if (!t.hadRecentInput) {
                  let s = i[0],
                    a = i[i.length - 1];
                  r &&
                  0 !== i.length &&
                  t.startTime - a.startTime < 1e3 &&
                  t.startTime - s.startTime < 5e3
                    ? ((r += t.value), i.push(t))
                    : ((r = t.value), (i = [t])),
                    r > n.value && ((n.value = r), (n.entries = i), e && e());
                }
              });
            },
            a = e6("layout-shift", s);
          if (a) {
            e = e0(t, n);
            let r = () => {
              s(a.takeRecords()), e(!0);
            };
            return e5(r), r;
          }
        },
        e7 = -1,
        nt = () =>
          "hidden" !== eQ.document.visibilityState || eQ.document.prerendering
            ? 1 / 0
            : 0,
        ne = () => {
          e5((t) => {
            let { timeStamp: e } = t;
            e7 = e;
          }, !0);
        },
        nn = () => (
          e7 < 0 && ((e7 = nt()), ne()),
          {
            get firstHiddenTime() {
              return e7;
            },
          }
        ),
        nr = (t) => {
          let e;
          let n = nn(),
            r = e9("FID"),
            i = (t) => {
              t.startTime < n.firstHiddenTime &&
                ((r.value = t.processingStart - t.startTime),
                r.entries.push(t),
                e(!0));
            },
            s = (t) => {
              t.forEach(i);
            },
            a = e6("first-input", s);
          (e = e0(t, r)),
            a &&
              e5(() => {
                s(a.takeRecords()), a.disconnect();
              }, !0);
        },
        ni = {},
        ns = (t) => {
          let e;
          let n = nn(),
            r = e9("LCP"),
            i = (t) => {
              let i = t[t.length - 1];
              if (i) {
                let t = Math.max(i.startTime - e3(), 0);
                t < n.firstHiddenTime &&
                  ((r.value = t), (r.entries = [i]), e());
              }
            },
            s = e6("largest-contentful-paint", i);
          if (s) {
            e = e0(t, r);
            let n = () => {
              ni[r.id] ||
                (i(s.takeRecords()), s.disconnect(), (ni[r.id] = !0), e(!0));
            };
            return (
              ["keydown", "click"].forEach((t) => {
                addEventListener(t, n, { once: !0, capture: !0 });
              }),
              e5(n, !0),
              n
            );
          }
        },
        na = {},
        no = {};
      function nc(t, e) {
        return (
          nf(t, e),
          no[t] ||
            ((function (t) {
              let e = {};
              "event" === t && (e.durationThreshold = 0),
                e6(
                  t,
                  (e) => {
                    nu(t, { entries: e });
                  },
                  e
                );
            })(t),
            (no[t] = !0)),
          ng(t, e)
        );
      }
      function nu(t, e) {
        let n = na[t];
        if (n && n.length)
          for (let t of n)
            try {
              t(e);
            } catch (t) {}
      }
      function nl() {
        e8((t) => {
          nu("cls", { metric: t }), (c = t);
        });
      }
      function nd() {
        nr((t) => {
          nu("fid", { metric: t }), (u = t);
        });
      }
      function nh() {
        ns((t) => {
          nu("lcp", { metric: t }), (l = t);
        });
      }
      function np(t, e, n, r) {
        return (
          nf(t, e),
          no[t] || (n(), (no[t] = !0)),
          r && e({ metric: r }),
          ng(t, e)
        );
      }
      function nf(t, e) {
        (na[t] = na[t] || []), na[t].push(e);
      }
      function ng(t, e) {
        return () => {
          let n = na[t];
          if (!n) return;
          let r = n.indexOf(e);
          -1 !== r && n.splice(r, 1);
        };
      }
      function nm(t) {
        return "number" == typeof t && isFinite(t);
      }
      function n_(t, e) {
        let { startTimestamp: n, ...r } = e;
        return (
          n && t.startTimestamp > n && (t.startTimestamp = n),
          t.startChild({ startTimestamp: n, ...r })
        );
      }
      function nv(t) {
        return t / 1e3;
      }
      function ny() {
        return eQ && eQ.addEventListener && eQ.performance;
      }
      let nb = 0,
        nS = {};
      function nE(t, e, n, r, i, s) {
        let a = s ? e[s] : e["".concat(n, "End")],
          o = e["".concat(n, "Start")];
        o &&
          a &&
          n_(t, {
            op: "browser",
            origin: "auto.browser.browser.metrics",
            description: i || n,
            startTimestamp: r + nv(o),
            endTimestamp: r + nv(a),
          });
      }
      function nT(t, e, n, r) {
        let i = e[n];
        null != i && i < 2147483647 && (t[r] = i);
      }
      function nx() {
        return (0, m.nZ)().getSpan();
      }
      var nk = n(5580);
      let nw = ["localhost", /^\/(?!\/)/],
        nI = {
          traceFetch: !0,
          traceXHR: !0,
          enableHTTPTimings: !0,
          tracingOrigins: nw,
          tracePropagationTargets: nw,
        };
      function nC(t) {
        let { url: e } = (0, ej.XU)(t).data || {};
        if (!e || "string" != typeof e) return;
        let n = nc("resource", (r) => {
          let { entries: i } = r;
          i.forEach((r) => {
            if (
              "resource" === r.entryType &&
              "initiatorType" in r &&
              "string" == typeof r.nextHopProtocol &&
              ("fetch" === r.initiatorType ||
                "xmlhttprequest" === r.initiatorType) &&
              r.name.endsWith(e)
            ) {
              let e = (function (t) {
                let { name: e, version: n } = (function (t) {
                    let e = "unknown",
                      n = "unknown",
                      r = "";
                    for (let i of t) {
                      if ("/" === i) {
                        [e, n] = t.split("/");
                        break;
                      }
                      if (!isNaN(Number(i))) {
                        (e = "h" === r ? "http" : r), (n = t.split(r)[1]);
                        break;
                      }
                      r += i;
                    }
                    return r === t && (e = r), { name: e, version: n };
                  })(t.nextHopProtocol),
                  r = [];
                return (r.push(
                  ["network.protocol.version", n],
                  ["network.protocol.name", e]
                ),
                tT.Z1)
                  ? [
                      ...r,
                      ["http.request.redirect_start", nO(t.redirectStart)],
                      ["http.request.fetch_start", nO(t.fetchStart)],
                      [
                        "http.request.domain_lookup_start",
                        nO(t.domainLookupStart),
                      ],
                      ["http.request.domain_lookup_end", nO(t.domainLookupEnd)],
                      ["http.request.connect_start", nO(t.connectStart)],
                      [
                        "http.request.secure_connection_start",
                        nO(t.secureConnectionStart),
                      ],
                      ["http.request.connection_end", nO(t.connectEnd)],
                      ["http.request.request_start", nO(t.requestStart)],
                      ["http.request.response_start", nO(t.responseStart)],
                      ["http.request.response_end", nO(t.responseEnd)],
                    ]
                  : r;
              })(r);
              e.forEach((e) => t.setAttribute(...e)), setTimeout(n);
            }
          });
        });
      }
      function nO() {
        let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return ((tT.Z1 || performance.timeOrigin) + t) / 1e3;
      }
      function nR(t, e, n) {
        try {
          t.setRequestHeader("sentry-trace", e),
            n && t.setRequestHeader(nk.bU, n);
        } catch (t) {}
      }
      let nD = {
        ...eF,
        markBackgroundTransactions: !0,
        routingInstrumentation: function (t) {
          let e,
            n =
              !(arguments.length > 1) ||
              void 0 === arguments[1] ||
              arguments[1],
            r =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2];
          if (!eQ || !eQ.location) return;
          let i = eQ.location.href;
          n &&
            (e = t({
              name: eQ.location.pathname,
              startTimestamp: tT.Z1 ? tT.Z1 / 1e3 : void 0,
              op: "pageload",
              origin: "auto.pageload.browser",
              metadata: { source: "url" },
            })),
            r &&
              te((n) => {
                let { to: r, from: s } = n;
                if (void 0 === s && i && -1 !== i.indexOf(r)) {
                  i = void 0;
                  return;
                }
                s !== r &&
                  ((i = void 0),
                  e && e.end(),
                  (e = t({
                    name: eQ.location.pathname,
                    op: "navigation",
                    origin: "auto.navigation.browser",
                    metadata: { source: "url" },
                  })));
              });
        },
        startTransactionOnLocationChange: !0,
        startTransactionOnPageLoad: !0,
        enableLongTask: !0,
        _experiments: {},
        ...nI,
      };
      class nA {
        setupOnce(t, e) {
          this._getCurrentHub = e;
          let n = e(),
            r = n.getClient(),
            i = r && r.getOptions(),
            {
              routingInstrumentation: s,
              startTransactionOnLocationChange: a,
              startTransactionOnPageLoad: o,
              markBackgroundTransactions: c,
              traceFetch: u,
              traceXHR: l,
              shouldCreateSpanForRequest: d,
              enableHTTPTimings: h,
              _experiments: p,
            } = this.options,
            f = i && i.tracePropagationTargets,
            g = f || this.options.tracePropagationTargets;
          s(
            (t) => {
              let n = this._createRouteTransaction(t);
              return (
                this.options._experiments.onStartRouteTransaction &&
                  this.options._experiments.onStartRouteTransaction(n, t, e),
                n
              );
            },
            o,
            a
          ),
            c &&
              eQ &&
              eQ.document &&
              eQ.document.addEventListener("visibilitychange", () => {
                let t = eG();
                if (eQ.document.hidden && t) {
                  let { op: e, status: n } = (0, ej.XU)(t);
                  n || t.setStatus("cancelled"),
                    t.setTag("visibilitychange", "document.hidden"),
                    t.end();
                }
              }),
            p.enableInteractions && this._registerInteractionListener(),
            (function (t) {
              let {
                  traceFetch: e,
                  traceXHR: n,
                  tracePropagationTargets: r,
                  tracingOrigins: i,
                  shouldCreateSpanForRequest: s,
                  enableHTTPTimings: a,
                } = { traceFetch: nI.traceFetch, traceXHR: nI.traceXHR, ...t },
                o = "function" == typeof s ? s : (t) => !0,
                c = (t) => (0, A.U0)(t, r || i || nw),
                u = {};
              e &&
                t6((t) => {
                  let e = (function (t, e, n, r) {
                    let i =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : "auto.http.browser";
                    if (!_() || !t.fetchData) return;
                    let s = e(t.fetchData.url);
                    if (t.endTimestamp && s) {
                      let e = t.fetchData.__span;
                      if (!e) return;
                      let n = r[e];
                      if (n) {
                        if (t.response) {
                          n.setHttpStatus(t.response.status);
                          let e =
                            t.response &&
                            t.response.headers &&
                            t.response.headers.get("content-length");
                          if (e) {
                            let t = parseInt(e);
                            t > 0 &&
                              n.setAttribute("http.response_content_length", t);
                          }
                        } else t.error && n.setStatus("internal_error");
                        n.end(), delete r[e];
                      }
                      return;
                    }
                    let a = (0, m.nZ)(),
                      o = (0, m.s3)(),
                      c = nx(),
                      { method: u, url: l } = t.fetchData,
                      d =
                        s && c
                          ? c.startChild({
                              data: { url: l, type: "fetch", "http.method": u },
                              description: "".concat(u, " ").concat(l),
                              op: "http.client",
                              origin: i,
                            })
                          : void 0;
                    if (
                      (d &&
                        ((t.fetchData.__span = d.spanContext().spanId),
                        (r[d.spanContext().spanId] = d)),
                      n(t.fetchData.url) && o)
                    ) {
                      let e = t.args[0];
                      t.args[1] = t.args[1] || {};
                      let n = t.args[1];
                      n.headers = (function (t, e, n, r, i) {
                        let s = i || n.getSpan(),
                          a = s && (0, eX.G)(s),
                          {
                            traceId: o,
                            sampled: c,
                            dsc: u,
                          } = n.getPropagationContext(),
                          l = s ? (0, ej.Hb)(s) : (0, eK.$p)(o, void 0, c),
                          d = a ? (0, t_.j)(a) : u || (0, t_._)(o, e, n),
                          h = (0, nk.IQ)(d),
                          p =
                            r.headers ||
                            ("undefined" != typeof Request &&
                            (0, tr.V9)(t, Request)
                              ? t.headers
                              : void 0);
                        if (!p) return { "sentry-trace": l, baggage: h };
                        if (
                          "undefined" != typeof Headers &&
                          (0, tr.V9)(p, Headers)
                        ) {
                          let t = new Headers(p);
                          return (
                            t.append("sentry-trace", l),
                            h && t.append(nk.bU, h),
                            t
                          );
                        }
                        if (Array.isArray(p)) {
                          let t = [...p, ["sentry-trace", l]];
                          return h && t.push([nk.bU, h]), t;
                        }
                        {
                          let t = "baggage" in p ? p.baggage : void 0,
                            e = [];
                          return (
                            Array.isArray(t) ? e.push(...t) : t && e.push(t),
                            h && e.push(h),
                            {
                              ...p,
                              "sentry-trace": l,
                              baggage: e.length > 0 ? e.join(",") : void 0,
                            }
                          );
                        }
                      })(e, o, a, n, d);
                    }
                    return d;
                  })(t, o, c, u);
                  a && e && nC(e);
                }),
                n &&
                  t3((t) => {
                    let e = (function (t, e, n, r) {
                      let i = t.xhr,
                        s = i && i[t4];
                      if (!_() || !i || i.__sentry_own_request__ || !s) return;
                      let a = e(s.url);
                      if (t.endTimestamp && a) {
                        let t = i.__sentry_xhr_span_id__;
                        if (!t) return;
                        let e = r[t];
                        e &&
                          void 0 !== s.status_code &&
                          (e.setHttpStatus(s.status_code),
                          e.end(),
                          delete r[t]);
                        return;
                      }
                      let o = (0, m.nZ)(),
                        c = nx(),
                        u =
                          a && c
                            ? c.startChild({
                                data: {
                                  type: "xhr",
                                  "http.method": s.method,
                                  url: s.url,
                                },
                                description: ""
                                  .concat(s.method, " ")
                                  .concat(s.url),
                                op: "http.client",
                                origin: "auto.http.browser",
                              })
                            : void 0;
                      if (
                        (u &&
                          ((i.__sentry_xhr_span_id__ = u.spanContext().spanId),
                          (r[i.__sentry_xhr_span_id__] = u)),
                        i.setRequestHeader && n(s.url))
                      ) {
                        if (u) {
                          let t = u && (0, eX.G)(u),
                            e = t && (0, t_.j)(t),
                            n = (0, nk.IQ)(e);
                          nR(i, (0, ej.Hb)(u), n);
                        } else {
                          let t = (0, m.s3)(),
                            {
                              traceId: e,
                              sampled: n,
                              dsc: r,
                            } = o.getPropagationContext(),
                            s = (0, eK.$p)(e, void 0, n),
                            a = r || (t ? (0, t_._)(e, t, o) : void 0),
                            c = (0, nk.IQ)(a);
                          nR(i, s, c);
                        }
                      }
                      return u;
                    })(t, o, c, u);
                    a && e && nC(e);
                  });
            })({
              traceFetch: u,
              traceXHR: l,
              tracePropagationTargets: g,
              shouldCreateSpanForRequest: d,
              enableHTTPTimings: h,
            });
        }
        _createRouteTransaction(t) {
          if (!this._getCurrentHub) return;
          let e = this._getCurrentHub(),
            {
              beforeNavigate: n,
              idleTimeout: r,
              finalTimeout: i,
              heartbeatInterval: s,
            } = this.options,
            a = "pageload" === t.op,
            o = a ? nN("sentry-trace") : "",
            c = a ? nN("baggage") : "",
            {
              traceparentData: u,
              dynamicSamplingContext: l,
              propagationContext: p,
            } = (0, eK.KA)(o, c),
            f = {
              ...t,
              ...u,
              metadata: {
                ...t.metadata,
                dynamicSamplingContext: u && !l ? {} : l,
              },
              trimEnd: !0,
            },
            g = "function" == typeof n ? n(f) : f,
            m = void 0 === g ? { ...f, sampled: !1 } : g;
          (m.metadata =
            m.name !== f.name
              ? { ...m.metadata, source: "custom" }
              : m.metadata),
            (this._latestRouteName = m.name);
          let _ = t.data && t.data[eP],
            v = m.metadata && m.metadata.source;
          (this._latestRouteSource = _ || v), m.sampled;
          let { location: y } = eQ,
            b = eZ(e, m, r, i, !0, { location: y }, s, a);
          a &&
            (eQ.document.addEventListener("readystatechange", () => {
              ["interactive", "complete"].includes(eQ.document.readyState) &&
                b.sendAutoFinishSignal();
            }),
            ["interactive", "complete"].includes(eQ.document.readyState) &&
              b.sendAutoFinishSignal());
          let S = e.getScope();
          return (
            a && u
              ? S.setPropagationContext(p)
              : S.setPropagationContext({
                  traceId: b.spanContext().traceId,
                  spanId: b.spanContext().spanId,
                  parentSpanId: b.parentSpanId,
                  sampled: (0, ej.Tt)(b),
                }),
            b.registerBeforeFinishCallback((t) => {
              this._collectWebVitals(),
                (function (t) {
                  let e, n;
                  let r = ny();
                  if (!r || !eQ.performance.getEntries || !tT.Z1) return;
                  let i = nv(tT.Z1),
                    s = r.getEntries(),
                    { op: a, start_timestamp: o } = (0, ej.XU)(t);
                  if (
                    (s.slice(nb).forEach((r) => {
                      let s = nv(r.startTime),
                        a = nv(r.duration);
                      if ("navigation" !== t.op || !o || !(i + s < o))
                        switch (r.entryType) {
                          case "navigation":
                            [
                              "unloadEvent",
                              "redirect",
                              "domContentLoadedEvent",
                              "loadEvent",
                              "connect",
                            ].forEach((e) => {
                              nE(t, r, e, i);
                            }),
                              nE(
                                t,
                                r,
                                "secureConnection",
                                i,
                                "TLS/SSL",
                                "connectEnd"
                              ),
                              nE(
                                t,
                                r,
                                "fetch",
                                i,
                                "cache",
                                "domainLookupStart"
                              ),
                              nE(t, r, "domainLookup", i, "DNS"),
                              r.responseEnd &&
                                (n_(t, {
                                  op: "browser",
                                  origin: "auto.browser.browser.metrics",
                                  description: "request",
                                  startTimestamp: i + nv(r.requestStart),
                                  endTimestamp: i + nv(r.responseEnd),
                                }),
                                n_(t, {
                                  op: "browser",
                                  origin: "auto.browser.browser.metrics",
                                  description: "response",
                                  startTimestamp: i + nv(r.responseStart),
                                  endTimestamp: i + nv(r.responseEnd),
                                })),
                              (e = i + nv(r.responseStart)),
                              (n = i + nv(r.requestStart));
                            break;
                          case "mark":
                          case "paint":
                          case "measure": {
                            (function (t, e, n, r, i) {
                              let s = i + n;
                              n_(t, {
                                description: e.name,
                                endTimestamp: s + r,
                                op: e.entryType,
                                origin: "auto.resource.browser.metrics",
                                startTimestamp: s,
                              });
                            })(t, r, s, a, i);
                            let e = nn(),
                              n = r.startTime < e.firstHiddenTime;
                            "first-paint" === r.name &&
                              n &&
                              (nS.fp = {
                                value: r.startTime,
                                unit: "millisecond",
                              }),
                              "first-contentful-paint" === r.name &&
                                n &&
                                (nS.fcp = {
                                  value: r.startTime,
                                  unit: "millisecond",
                                });
                            break;
                          }
                          case "resource":
                            (function (t, e, n, r, i, s) {
                              if (
                                "xmlhttprequest" === e.initiatorType ||
                                "fetch" === e.initiatorType
                              )
                                return;
                              let a = ee(n),
                                o = {};
                              nT(
                                o,
                                e,
                                "transferSize",
                                "http.response_transfer_size"
                              ),
                                nT(
                                  o,
                                  e,
                                  "encodedBodySize",
                                  "http.response_content_length"
                                ),
                                nT(
                                  o,
                                  e,
                                  "decodedBodySize",
                                  "http.decoded_response_content_length"
                                ),
                                "renderBlockingStatus" in e &&
                                  (o["resource.render_blocking_status"] =
                                    e.renderBlockingStatus),
                                a.protocol &&
                                  (o["url.scheme"] = a.protocol
                                    .split(":")
                                    .pop()),
                                a.host && (o["server.address"] = a.host),
                                (o["url.same_origin"] = n.includes(
                                  eQ.location.origin
                                ));
                              let c = s + r;
                              n_(t, {
                                description: n.replace(eQ.location.origin, ""),
                                endTimestamp: c + i,
                                op: e.initiatorType
                                  ? "resource.".concat(e.initiatorType)
                                  : "resource.other",
                                origin: "auto.resource.browser.metrics",
                                startTimestamp: c,
                                data: o,
                              });
                            })(t, r, r.name, s, a, i);
                        }
                    }),
                    (nb = Math.max(s.length - 1, 0)),
                    (function (t) {
                      let e = eQ.navigator;
                      if (!e) return;
                      let n = e.connection;
                      n &&
                        (n.effectiveType &&
                          t.setTag("effectiveConnectionType", n.effectiveType),
                        n.type && t.setTag("connectionType", n.type),
                        nm(n.rtt) &&
                          (nS["connection.rtt"] = {
                            value: n.rtt,
                            unit: "millisecond",
                          })),
                        nm(e.deviceMemory) &&
                          t.setTag(
                            "deviceMemory",
                            "".concat(e.deviceMemory, " GB")
                          ),
                        nm(e.hardwareConcurrency) &&
                          t.setTag(
                            "hardwareConcurrency",
                            String(e.hardwareConcurrency)
                          );
                    })(t),
                    "pageload" === a)
                  ) {
                    "number" == typeof e &&
                      o &&
                      ((nS.ttfb = {
                        value: (e - o) * 1e3,
                        unit: "millisecond",
                      }),
                      "number" == typeof n &&
                        n <= e &&
                        (nS["ttfb.requestTime"] = {
                          value: (e - n) * 1e3,
                          unit: "millisecond",
                        })),
                      ["fcp", "fp", "lcp"].forEach((t) => {
                        if (!nS[t] || !o || i >= o) return;
                        let e = nS[t].value,
                          n = i + nv(e);
                        nS[t].value = Math.abs((n - o) * 1e3);
                      });
                    let r = nS["mark.fid"];
                    r &&
                      nS.fid &&
                      (n_(t, {
                        description: "first input delay",
                        endTimestamp: r.value + nv(nS.fid.value),
                        op: "ui.action",
                        origin: "auto.ui.browser.metrics",
                        startTimestamp: r.value,
                      }),
                      delete nS["mark.fid"]),
                      "fcp" in nS || delete nS.cls,
                      Object.keys(nS).forEach((t) => {
                        !(function (t, e, n) {
                          let r = eG();
                          r && r.setMeasurement(t, e, n);
                        })(t, nS[t].value, nS[t].unit);
                      }),
                      d &&
                        (d.element &&
                          t.setTag("lcp.element", (0, tU.Rt)(d.element)),
                        d.id && t.setTag("lcp.id", d.id),
                        d.url &&
                          t.setTag("lcp.url", d.url.trim().slice(0, 200)),
                        t.setTag("lcp.size", d.size)),
                      h &&
                        h.sources &&
                        h.sources.forEach((e, n) =>
                          t.setTag(
                            "cls.source.".concat(n + 1),
                            (0, tU.Rt)(e.node)
                          )
                        );
                  }
                  (d = void 0), (h = void 0), (nS = {});
                })(t);
            }),
            b
          );
        }
        _registerInteractionListener() {
          let t;
          let e = () => {
            let {
                idleTimeout: e,
                finalTimeout: n,
                heartbeatInterval: r,
              } = this.options,
              i = eG();
            if (
              (i && i.op && ["navigation", "pageload"].includes(i.op)) ||
              (t &&
                (t.setFinishReason("interactionInterrupted"),
                t.end(),
                (t = void 0)),
              !this._getCurrentHub) ||
              !this._latestRouteName
            )
              return;
            let s = this._getCurrentHub(),
              { location: a } = eQ,
              o = {
                name: this._latestRouteName,
                op: "ui.action.click",
                trimEnd: !0,
                data: { [eP]: this._latestRouteSource || "url" },
              };
            t = eZ(s, o, e, n, !0, { location: a }, r);
          };
          ["click"].forEach((t) => {
            addEventListener(t, e, { once: !1, capture: !0 });
          });
        }
        constructor(t) {
          (this.name = "BrowserTracing"),
            (this._hasSetTracePropagationTargets = !1),
            (function () {
              let t = (0, E.cu)();
              t.__SENTRY__ &&
                ((t.__SENTRY__.extensions = t.__SENTRY__.extensions || {}),
                t.__SENTRY__.extensions.startTransaction ||
                  (t.__SENTRY__.extensions.startTransaction = eV),
                t.__SENTRY__.extensions.traceHeaders ||
                  (t.__SENTRY__.extensions.traceHeaders = ez),
                eW || ((eW = !0), tP(eY), tX(eY)));
            })(),
            (this.options = { ...nD, ...t }),
            void 0 !== this.options._experiments.enableLongTask &&
              (this.options.enableLongTask =
                this.options._experiments.enableLongTask),
            t &&
              !t.tracePropagationTargets &&
              t.tracingOrigins &&
              (this.options.tracePropagationTargets = t.tracingOrigins),
            (this._collectWebVitals = (function () {
              let t = ny();
              if (t && tT.Z1) {
                t.mark && eQ.performance.mark("sentry-tracing-init");
                let e = np(
                    "fid",
                    (t) => {
                      let { metric: e } = t,
                        n = e.entries.pop();
                      if (!n) return;
                      let r = nv(tT.Z1),
                        i = nv(n.startTime);
                      (nS.fid = { value: e.value, unit: "millisecond" }),
                        (nS["mark.fid"] = { value: r + i, unit: "second" });
                    },
                    nd,
                    u
                  ),
                  n = np(
                    "cls",
                    (t) => {
                      let { metric: e } = t,
                        n = e.entries.pop();
                      n && ((nS.cls = { value: e.value, unit: "" }), (h = n));
                    },
                    nl,
                    c
                  ),
                  r = np(
                    "lcp",
                    (t) => {
                      let { metric: e } = t,
                        n = e.entries.pop();
                      n &&
                        ((nS.lcp = { value: e.value, unit: "millisecond" }),
                        (d = n));
                    },
                    nh,
                    l
                  );
                return () => {
                  e(), n(), r();
                };
              }
              return () => void 0;
            })()),
            this.options.enableLongTask &&
              nc("longtask", (t) => {
                let { entries: e } = t;
                for (let t of e) {
                  let e = eG();
                  if (!e) return;
                  let n = nv(tT.Z1 + t.startTime),
                    r = nv(t.duration);
                  e.startChild({
                    description: "Main UI thread blocked",
                    op: "ui.long-task",
                    origin: "auto.ui.browser.metrics",
                    startTimestamp: n,
                    endTimestamp: n + r,
                  });
                }
              }),
            this.options._experiments.enableInteractions &&
              nc("event", (t) => {
                let { entries: e } = t;
                for (let t of e) {
                  let e = eG();
                  if (!e) return;
                  if ("click" === t.name) {
                    let n = nv(tT.Z1 + t.startTime),
                      r = nv(t.duration),
                      i = {
                        description: (0, tU.Rt)(t.target),
                        op: "ui.interaction.".concat(t.name),
                        origin: "auto.ui.browser.metrics",
                        startTimestamp: n,
                        endTimestamp: n + r,
                      },
                      s = (0, tU.iY)(t.target);
                    s && (i.attributes = { "ui.component_name": s }),
                      e.startChild(i);
                  }
                }
              });
        }
      }
      function nN(t) {
        let e = (0, tU.qT)("meta[name=".concat(t, "]"));
        return e ? e.getAttribute("content") : void 0;
      }
      function nj(t, e) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return Array.isArray(e)
          ? nP(t, e, n)
          : (function (t, e, n) {
              let r = (r) => {
                let i = e(r);
                if (t.allowExclusionByUser) {
                  let e = i.find((e) => e.name === t.name);
                  if (!e) return i;
                }
                return nP(t, i, n);
              };
              return r;
            })(t, e, n);
      }
      function nP(t, e, n) {
        let r = e.find((e) => e.name === t.name);
        if (r) {
          for (let [t, e] of Object.entries(n))
            !(function t(e, n, r) {
              let i = n.match(/([a-z_]+)\.(.*)/i);
              if (null === i) e[n] = r;
              else {
                let n = e[i[1]];
                t(n, i[2], r);
              }
            })(r, t, e);
          return e;
        }
        return [...e, t];
      }
      var nL = n(3656);
      let nM = { "routing.instrumentation": "next-app-router" };
      var nX = n(6864),
        nH = n.n(nX),
        nU = n(5060);
      let nq = { "routing.instrumentation": "next-pages-router" },
        nF = (0, m.s3)();
      function nJ(t) {
        let e =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          r = !tR.document.getElementById("__NEXT_DATA__");
        r
          ? (function (t) {
              let e,
                n =
                  !(arguments.length > 1) ||
                  void 0 === arguments[1] ||
                  arguments[1],
                r =
                  !(arguments.length > 2) ||
                  void 0 === arguments[2] ||
                  arguments[2],
                i = tR.location.pathname;
              n &&
                (e = t({
                  name: i,
                  op: "pageload",
                  origin: "auto.pageload.nextjs.app_router_instrumentation",
                  tags: nM,
                  startTimestamp: tT.Z1 ? tT.Z1 / 1e3 : void 0,
                  metadata: { source: "url" },
                })),
                r &&
                  t6((n) => {
                    if (
                      void 0 !== n.endTimestamp ||
                      "GET" !== n.fetchData.method
                    )
                      return;
                    let r = (function (t) {
                      if (
                        !t[0] ||
                        "object" != typeof t[0] ||
                        void 0 === t[0].searchParams ||
                        !t[1] ||
                        "object" != typeof t[1] ||
                        !("headers" in t[1])
                      )
                        return null;
                      try {
                        let e = t[0],
                          n = t[1].headers;
                        if ("1" !== n.RSC || "1" === n["Next-Router-Prefetch"])
                          return null;
                        return { targetPathname: e.pathname };
                      } catch (t) {
                        return null;
                      }
                    })(n.args);
                    if (null === r) return;
                    let s = r.targetPathname,
                      a = { ...nM, from: i };
                    (i = s),
                      e && e.end(),
                      t({
                        name: s,
                        op: "navigation",
                        origin:
                          "auto.navigation.nextjs.app_router_instrumentation",
                        tags: a,
                        metadata: { source: "url" },
                      });
                  });
            })(t, e, n)
          : (function (t) {
              let e =
                  !(arguments.length > 1) ||
                  void 0 === arguments[1] ||
                  arguments[1],
                n =
                  !(arguments.length > 2) ||
                  void 0 === arguments[2] ||
                  arguments[2],
                {
                  route: r,
                  params: i,
                  sentryTrace: s,
                  baggage: a,
                } = (function () {
                  let t;
                  let e = tR.document.getElementById("__NEXT_DATA__");
                  if (e && e.innerHTML)
                    try {
                      t = JSON.parse(e.innerHTML);
                    } catch (t) {
                      nU.X && y.kg.warn("Could not extract __NEXT_DATA__");
                    }
                  if (!t) return {};
                  let n = {},
                    { page: r, query: i, props: s } = t;
                  return (
                    (n.route = r),
                    (n.params = i),
                    s &&
                      s.pageProps &&
                      ((n.sentryTrace = s.pageProps._sentryTraceData),
                      (n.baggage = s.pageProps._sentryBaggage)),
                    n
                  );
                })(),
                {
                  traceparentData: o,
                  dynamicSamplingContext: c,
                  propagationContext: u,
                } = (0, eK.KA)(s, a);
              (0, m.nZ)().setPropagationContext(u),
                (g = r || tR.location.pathname),
                e &&
                  (f = t({
                    name: g,
                    op: "pageload",
                    origin: "auto.pageload.nextjs.pages_router_instrumentation",
                    tags: nq,
                    startTimestamp: tT.Z1 ? tT.Z1 / 1e3 : void 0,
                    ...(i &&
                      nF &&
                      nF.getOptions().sendDefaultPii && { data: i }),
                    ...o,
                    metadata: {
                      source: r ? "route" : "url",
                      dynamicSamplingContext: o && !c ? {} : c,
                    },
                  })),
                n &&
                  nH().events.on("routeChangeStart", (e) => {
                    let n, r;
                    let i = e.split(/[\?#]/, 1)[0],
                      s = (function (t) {
                        let e = (tR.__BUILD_MANIFEST || {}).sortedPages;
                        if (e)
                          return e.find((e) => {
                            let n = (function (t) {
                              let e = t.split("/"),
                                n = "";
                              e[e.length - 1].match(/^\[\[\.\.\..+\]\]$/) &&
                                (e.pop(), (n = "(?:/(.+?))?"));
                              let r = e
                                .map((t) =>
                                  t
                                    .replace(/^\[\.\.\..+\]$/, "(.+?)")
                                    .replace(/^\[.*\]$/, "([^/]+?)")
                                )
                                .join("/");
                              return RegExp("^".concat(r).concat(n, "(?:/)?$"));
                            })(e);
                            return t.match(n);
                          });
                      })(i);
                    s ? ((n = s), (r = "route")) : ((n = i), (r = "url"));
                    let a = { ...nq, from: g };
                    (g = n), f && f.end();
                    let o = t({
                      name: n,
                      op: "navigation",
                      origin:
                        "auto.navigation.nextjs.pages_router_instrumentation",
                      tags: a,
                      metadata: { source: r },
                    });
                    if (o) {
                      let t = o.startChild({
                          op: "ui.nextjs.route-change",
                          origin: "auto.ui.nextjs.pages_router_instrumentation",
                          description: "Next.js Route Change",
                        }),
                        e = () => {
                          t.end(), nH().events.off("routeChangeComplete", e);
                        };
                      nH().events.on("routeChangeComplete", e);
                    }
                  });
            })(t, e, n);
      }
      let n$ = n.g,
        nG = n.g;
      var nW = window;
      (nW.__sentryRewritesTunnelPath__ = void 0),
        (nW.SENTRY_RELEASE = { id: "b781882" }),
        (nW.__sentryBasePath = void 0),
        (nW.__rewriteFramesAssetPrefixPath__ = ""),
        (function (t) {
          var e;
          let n = {
            environment:
              (function (t) {
                let e = t ? "production" : nL.env.VERCEL_ENV;
                return e ? "vercel-".concat(e) : void 0;
              })(!0) || "production",
            ...t,
          };
          (function (t) {
            let e = n$.__sentryRewritesTunnelPath__;
            if (e && t.dsn) {
              let n = to(t.dsn);
              if (!n) return;
              let r = n.host.match(/^o(\d+)\.ingest\.sentry\.io$/);
              if (r) {
                let i = r[1],
                  s = "".concat(e, "?o=").concat(i, "&p=").concat(n.projectId);
                (t.tunnel = s),
                  nU.X && y.kg.info('Tunneling events to "'.concat(s, '"'));
              } else
                nU.X &&
                  y.kg.warn(
                    "Provided DSN is not a Sentry SaaS DSN. Will not tunnel events."
                  );
            }
          })(n),
            ((e = n)._metadata = e._metadata || {}),
            (e._metadata.sdk = e._metadata.sdk || {
              name: "sentry.javascript.nextjs",
              packages: ["nextjs", "react"].map((t) => ({
                name: "".concat("npm:@sentry/").concat(t),
                version: D.J,
              })),
              version: D.J,
            }),
            (function (t) {
              let e = t.integrations || [],
                n = nG.__rewriteFramesAssetPrefixPath__ || "",
                r = new R({
                  iteratee: (t) => {
                    try {
                      let { origin: e } = new URL(t.filename);
                      t.filename = (function (t) {
                        let e;
                        let n = t[0],
                          r = 1;
                        for (; r < t.length; ) {
                          let i = t[r],
                            s = t[r + 1];
                          if (
                            ((r += 2),
                            ("optionalAccess" === i || "optionalCall" === i) &&
                              null == n)
                          )
                            return;
                          "access" === i || "optionalAccess" === i
                            ? ((e = n), (n = s(n)))
                            : ("call" === i || "optionalCall" === i) &&
                              ((n = s(function () {
                                for (
                                  var t = arguments.length, r = Array(t), i = 0;
                                  i < t;
                                  i++
                                )
                                  r[i] = arguments[i];
                                return n.call(e, ...r);
                              })),
                              (e = void 0));
                        }
                        return n;
                      })([
                        t,
                        "access",
                        (t) => t.filename,
                        "optionalAccess",
                        (t) => t.replace,
                        "call",
                        (t) => t(e, "app://"),
                        "access",
                        (t) => t.replace,
                        "call",
                        (t) => t(n, ""),
                      ]);
                    } catch (t) {}
                    return (
                      t.filename &&
                        t.filename.startsWith("app:///_next") &&
                        (t.filename = decodeURI(t.filename)),
                      t.filename &&
                        t.filename.match(
                          /^app:\/\/\/_next\/static\/chunks\/(main-|main-app-|polyfills-|webpack-|framework-|framework\.)[0-9a-f]+\.js$/
                        ) &&
                        (t.in_app = !1),
                      t
                    );
                  },
                });
              if (
                ((e = nj(r, e)),
                ("undefined" == typeof __SENTRY_TRACING__ ||
                  __SENTRY_TRACING__) &&
                  _(t))
              ) {
                let t = new nA({
                  tracingOrigins: [...nI.tracingOrigins, /^(api\/)/],
                  routingInstrumentation: nJ,
                });
                e = nj(t, e, { "options.routingInstrumentation": nJ });
              }
              t.integrations = e;
            })(n),
            (function (t) {
              let e = { _metadata: {}, ...t };
              (e._metadata.sdk = e._metadata.sdk || {
                name: "sentry.javascript.react",
                packages: [{ name: "npm:@sentry/react", version: D.J }],
                version: D.J,
              }),
                (function () {
                  let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  void 0 === t.defaultIntegrations &&
                    (t.defaultIntegrations = eN),
                    void 0 === t.release &&
                      ("string" == typeof __SENTRY_RELEASE__ &&
                        (t.release = __SENTRY_RELEASE__),
                      tR.SENTRY_RELEASE &&
                        tR.SENTRY_RELEASE.id &&
                        (t.release = tR.SENTRY_RELEASE.id)),
                    void 0 === t.autoSessionTracking &&
                      (t.autoSessionTracking = !0),
                    void 0 === t.sendClientReports &&
                      (t.sendClientReports = !0);
                  let e = {
                    ...t,
                    stackParser: (0, F.Sq)(t.stackParser || eI),
                    integrations: (function (t) {
                      let e;
                      let n = t.defaultIntegrations || [],
                        r = t.integrations;
                      n.forEach((t) => {
                        t.isDefaultInstance = !0;
                      }),
                        (e = Array.isArray(r)
                          ? [...n, ...r]
                          : "function" == typeof r
                          ? (0, v.lE)(r(n))
                          : n);
                      let i = (function (t) {
                          let e = {};
                          return (
                            t.forEach((t) => {
                              let { name: n } = t,
                                r = e[n];
                              (r &&
                                !r.isDefaultInstance &&
                                t.isDefaultInstance) ||
                                (e[n] = t);
                            }),
                            Object.keys(e).map((t) => e[t])
                          );
                        })(e),
                        s = (function (t, e) {
                          for (let n = 0; n < t.length; n++)
                            if (!0 === e(t[n])) return n;
                          return -1;
                        })(i, (t) => "Debug" === t.name);
                      if (-1 !== s) {
                        let [t] = i.splice(s, 1);
                        i.push(t);
                      }
                      return i;
                    })(t),
                    transport: t.transport || (W() ? eD : eA),
                  };
                  (function (t, e) {
                    !0 === e.debug &&
                      (b.X
                        ? y.kg.enable()
                        : (0, y.Cf)(() => {
                            console.warn(
                              "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."
                            );
                          }));
                    let n = (0, m.nZ)();
                    n.update(e.initialScope);
                    let r = new t(e);
                    (function (t) {
                      let e = (0, E.Gd)(),
                        n = e.getStackTop();
                      (n.client = t), n.scope.setClient(t);
                    })(r),
                      r.init
                        ? r.init()
                        : r.setupIntegrations && r.setupIntegrations();
                  })(tN, e),
                    t.autoSessionTracking &&
                      void 0 !== tR.document &&
                      ((0, m.yj)({ ignoreDuration: !0 }),
                      (0, m.cg)(),
                      te((t) => {
                        let { from: e, to: n } = t;
                        void 0 !== e &&
                          e !== n &&
                          ((0, m.yj)({ ignoreDuration: !0 }), (0, m.cg)());
                      }));
                })(e);
            })(n);
          let r = (0, m.nZ)();
          r.setTag("runtime", "browser");
          let i = (t) =>
            "transaction" === t.type && "/404" === t.transaction ? null : t;
          (i.id = "NextClient404Filter"), r.addEventProcessor(i);
        })({
          dsn: "https://57b7cb31c0ee38a4d7d4883b10fef863@o4506588743467008.ingest.sentry.io/4506598143754240",
          environment: "production",
          release: "b781882",
          debug: !1,
          enableTracing: !1,
          enabled: !1,
        });
    },
    5580: function (t, e, n) {
      "use strict";
      n.d(e, {
        EN: function () {
          return u;
        },
        IQ: function () {
          return l;
        },
        bU: function () {
          return a;
        },
      });
      var r = n(3580),
        i = n(4471),
        s = n(6994);
      let a = "baggage",
        o = "sentry-",
        c = /^sentry-/;
      function u(t) {
        if (!(0, i.HD)(t) && !Array.isArray(t)) return;
        let e = {};
        if (Array.isArray(t))
          e = t.reduce((t, e) => {
            let n = d(e);
            for (let e of Object.keys(n)) t[e] = n[e];
            return t;
          }, {});
        else {
          if (!t) return;
          e = d(t);
        }
        let n = Object.entries(e).reduce((t, e) => {
          let [n, r] = e;
          if (n.match(c)) {
            let e = n.slice(o.length);
            t[e] = r;
          }
          return t;
        }, {});
        return Object.keys(n).length > 0 ? n : void 0;
      }
      function l(t) {
        if (!t) return;
        let e = Object.entries(t).reduce((t, e) => {
          let [n, r] = e;
          return r && (t["".concat(o).concat(n)] = r), t;
        }, {});
        return (function (t) {
          if (0 !== Object.keys(t).length)
            return Object.entries(t).reduce((t, e, n) => {
              let [i, a] = e,
                o = ""
                  .concat(encodeURIComponent(i), "=")
                  .concat(encodeURIComponent(a)),
                c = 0 === n ? o : "".concat(t, ",").concat(o);
              return c.length > 8192
                ? (r.X &&
                    s.kg.warn(
                      "Not adding key: "
                        .concat(i, " with val: ")
                        .concat(
                          a,
                          " to baggage header due to exceeding baggage size limits."
                        )
                    ),
                  t)
                : c;
            }, "");
        })(e);
      }
      function d(t) {
        return t
          .split(",")
          .map((t) => t.split("=").map((t) => decodeURIComponent(t.trim())))
          .reduce((t, e) => {
            let [n, r] = e;
            return (t[n] = r), t;
          }, {});
      }
    },
    6613: function (t, e, n) {
      "use strict";
      n.d(e, {
        Rt: function () {
          return a;
        },
        iY: function () {
          return u;
        },
        l4: function () {
          return o;
        },
        qT: function () {
          return c;
        },
      });
      var r = n(4471),
        i = n(299);
      let s = (0, i.Rf)();
      function a(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!t) return "<unknown>";
        try {
          let n,
            i = t,
            a = [],
            o = 0,
            c = 0,
            u = Array.isArray(e) ? e : e.keyAttrs,
            l = (!Array.isArray(e) && e.maxStringLength) || 80;
          for (
            ;
            i &&
            o++ < 5 &&
            ((n = (function (t, e) {
              let n, i, a, o, c;
              let u = [];
              if (!t || !t.tagName) return "";
              if (
                s.HTMLElement &&
                t instanceof HTMLElement &&
                t.dataset &&
                t.dataset.sentryComponent
              )
                return t.dataset.sentryComponent;
              u.push(t.tagName.toLowerCase());
              let l =
                e && e.length
                  ? e
                      .filter((e) => t.getAttribute(e))
                      .map((e) => [e, t.getAttribute(e)])
                  : null;
              if (l && l.length)
                l.forEach((t) => {
                  u.push("[".concat(t[0], '="').concat(t[1], '"]'));
                });
              else if (
                (t.id && u.push("#".concat(t.id)),
                (n = t.className) && (0, r.HD)(n))
              )
                for (c = 0, i = n.split(/\s+/); c < i.length; c++)
                  u.push(".".concat(i[c]));
              let d = ["aria-label", "type", "name", "title", "alt"];
              for (c = 0; c < d.length; c++)
                (a = d[c]),
                  (o = t.getAttribute(a)) &&
                    u.push("[".concat(a, '="').concat(o, '"]'));
              return u.join("");
            })(i, u)),
            "html" !== n && (!(o > 1) || !(c + 3 * a.length + n.length >= l)));

          )
            a.push(n), (c += n.length), (i = i.parentNode);
          return a.reverse().join(" > ");
        } catch (t) {
          return "<unknown>";
        }
      }
      function o() {
        try {
          return s.document.location.href;
        } catch (t) {
          return "";
        }
      }
      function c(t) {
        return s.document && s.document.querySelector
          ? s.document.querySelector(t)
          : null;
      }
      function u(t) {
        if (!s.HTMLElement) return null;
        let e = t;
        for (let t = 0; t < 5 && e; t++) {
          if (e instanceof HTMLElement && e.dataset.sentryComponent)
            return e.dataset.sentryComponent;
          e = e.parentNode;
        }
        return null;
      }
    },
    3580: function (t, e, n) {
      "use strict";
      n.d(e, {
        X: function () {
          return r;
        },
      });
      let r = !1;
    },
    4471: function (t, e, n) {
      "use strict";
      n.d(e, {
        Cy: function () {
          return _;
        },
        HD: function () {
          return u;
        },
        J8: function () {
          return m;
        },
        Kj: function () {
          return g;
        },
        Le: function () {
          return l;
        },
        PO: function () {
          return h;
        },
        TX: function () {
          return o;
        },
        V9: function () {
          return y;
        },
        VW: function () {
          return a;
        },
        VZ: function () {
          return i;
        },
        cO: function () {
          return p;
        },
        fm: function () {
          return c;
        },
        i2: function () {
          return v;
        },
        kK: function () {
          return f;
        },
        pt: function () {
          return d;
        },
        y1: function () {
          return b;
        },
      });
      let r = Object.prototype.toString;
      function i(t) {
        switch (r.call(t)) {
          case "[object Error]":
          case "[object Exception]":
          case "[object DOMException]":
            return !0;
          default:
            return y(t, Error);
        }
      }
      function s(t, e) {
        return r.call(t) === "[object ".concat(e, "]");
      }
      function a(t) {
        return s(t, "ErrorEvent");
      }
      function o(t) {
        return s(t, "DOMError");
      }
      function c(t) {
        return s(t, "DOMException");
      }
      function u(t) {
        return s(t, "String");
      }
      function l(t) {
        return (
          "object" == typeof t &&
          null !== t &&
          "__sentry_template_string__" in t &&
          "__sentry_template_values__" in t
        );
      }
      function d(t) {
        return (
          null === t || l(t) || ("object" != typeof t && "function" != typeof t)
        );
      }
      function h(t) {
        return s(t, "Object");
      }
      function p(t) {
        return "undefined" != typeof Event && y(t, Event);
      }
      function f(t) {
        return "undefined" != typeof Element && y(t, Element);
      }
      function g(t) {
        return s(t, "RegExp");
      }
      function m(t) {
        return Boolean(t && t.then && "function" == typeof t.then);
      }
      function _(t) {
        return (
          h(t) &&
          "nativeEvent" in t &&
          "preventDefault" in t &&
          "stopPropagation" in t
        );
      }
      function v(t) {
        return "number" == typeof t && t != t;
      }
      function y(t, e) {
        try {
          return t instanceof e;
        } catch (t) {
          return !1;
        }
      }
      function b(t) {
        return !!(
          "object" == typeof t &&
          null !== t &&
          (t.__isVue || t._isVue)
        );
      }
    },
    6994: function (t, e, n) {
      "use strict";
      n.d(e, {
        Cf: function () {
          return o;
        },
        LD: function () {
          return a;
        },
        RU: function () {
          return s;
        },
        kg: function () {
          return c;
        },
      });
      var r = n(3580),
        i = n(299);
      let s = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        a = {};
      function o(t) {
        if (!("console" in i.n2)) return t();
        let e = i.n2.console,
          n = {},
          r = Object.keys(a);
        r.forEach((t) => {
          let r = a[t];
          (n[t] = e[t]), (e[t] = r);
        });
        try {
          return t();
        } finally {
          r.forEach((t) => {
            e[t] = n[t];
          });
        }
      }
      let c = (function () {
        let t = !1,
          e = {
            enable: () => {
              t = !0;
            },
            disable: () => {
              t = !1;
            },
            isEnabled: () => t,
          };
        return (
          r.X
            ? s.forEach((n) => {
                e[n] = function () {
                  for (
                    var e = arguments.length, r = Array(e), s = 0;
                    s < e;
                    s++
                  )
                    r[s] = arguments[s];
                  t &&
                    o(() => {
                      i.n2.console[n](
                        "".concat("Sentry Logger ", "[").concat(n, "]:"),
                        ...r
                      );
                    });
                };
              })
            : s.forEach((t) => {
                e[t] = () => void 0;
              }),
          e
        );
      })();
    },
    1760: function (t, e, n) {
      "use strict";
      n.d(e, {
        DM: function () {
          return s;
        },
        Db: function () {
          return c;
        },
        EG: function () {
          return u;
        },
        YO: function () {
          return l;
        },
        jH: function () {
          return o;
        },
        lE: function () {
          return d;
        },
      });
      var r = n(819),
        i = n(299);
      function s() {
        let t = i.n2,
          e = t.crypto || t.msCrypto,
          n = () => 16 * Math.random();
        try {
          if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
          e &&
            e.getRandomValues &&
            (n = () => {
              let t = new Uint8Array(1);
              return e.getRandomValues(t), t[0];
            });
        } catch (t) {}
        return "10000000100040008000100000000000".replace(/[018]/g, (t) =>
          (t ^ ((15 & n()) >> (t / 4))).toString(16)
        );
      }
      function a(t) {
        return t.exception && t.exception.values
          ? t.exception.values[0]
          : void 0;
      }
      function o(t) {
        let { message: e, event_id: n } = t;
        if (e) return e;
        let r = a(t);
        return r
          ? r.type && r.value
            ? "".concat(r.type, ": ").concat(r.value)
            : r.type || r.value || n || "<unknown>"
          : n || "<unknown>";
      }
      function c(t, e, n) {
        let r = (t.exception = t.exception || {}),
          i = (r.values = r.values || []),
          s = (i[0] = i[0] || {});
        s.value || (s.value = e || ""), s.type || (s.type = n || "Error");
      }
      function u(t, e) {
        let n = a(t);
        if (!n) return;
        let r = n.mechanism;
        if (
          ((n.mechanism = { type: "generic", handled: !0, ...r, ...e }),
          e && "data" in e)
        ) {
          let t = { ...(r && r.data), ...e.data };
          n.mechanism.data = t;
        }
      }
      function l(t) {
        if (t && t.__sentry_captured__) return !0;
        try {
          (0, r.xp)(t, "__sentry_captured__", !0);
        } catch (t) {}
        return !1;
      }
      function d(t) {
        return Array.isArray(t) ? t : [t];
      }
    },
    4182: function (t, e, n) {
      "use strict";
      n.d(e, {
        Fv: function () {
          return a;
        },
        Qy: function () {
          return function t(e) {
            let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 3,
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 102400,
              i = a(e, n);
            return ~-encodeURI(JSON.stringify(i)).split(/%..|./).length > r
              ? t(e, n - 1, r)
              : i;
          };
        },
      });
      var r = n(4471),
        i = n(819),
        s = n(2325);
      function a(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 100,
          a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : Infinity;
        try {
          return (function t(e, a) {
            let o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : Infinity,
              c =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : Infinity,
              u =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : (function () {
                      let t = "function" == typeof WeakSet,
                        e = t ? new WeakSet() : [];
                      return [
                        function (n) {
                          if (t) return !!e.has(n) || (e.add(n), !1);
                          for (let t = 0; t < e.length; t++) {
                            let r = e[t];
                            if (r === n) return !0;
                          }
                          return e.push(n), !1;
                        },
                        function (n) {
                          if (t) e.delete(n);
                          else
                            for (let t = 0; t < e.length; t++)
                              if (e[t] === n) {
                                e.splice(t, 1);
                                break;
                              }
                        },
                      ];
                    })(),
              [l, d] = u;
            if (
              null == a ||
              (["number", "boolean", "string"].includes(typeof a) &&
                !(0, r.i2)(a))
            )
              return a;
            let h = (function (t, e) {
              try {
                if ("domain" === t && e && "object" == typeof e && e._events)
                  return "[Domain]";
                if ("domainEmitter" === t) return "[DomainEmitter]";
                if (void 0 !== n.g && e === n.g) return "[Global]";
                if (e === window) return "[Window]";
                if ("undefined" != typeof document && e === document)
                  return "[Document]";
                if ((0, r.y1)(e)) return "[VueViewModel]";
                if ((0, r.Cy)(e)) return "[SyntheticEvent]";
                if ("number" == typeof e && e != e) return "[NaN]";
                if ("function" == typeof e)
                  return "[Function: ".concat((0, s.$P)(e), "]");
                if ("symbol" == typeof e) return "[".concat(String(e), "]");
                if ("bigint" == typeof e)
                  return "[BigInt: ".concat(String(e), "]");
                let i = (function (t) {
                  let e = Object.getPrototypeOf(t);
                  return e ? e.constructor.name : "null prototype";
                })(e);
                if (/^HTML(\w*)Element$/.test(i))
                  return "[HTMLElement: ".concat(i, "]");
                return "[object ".concat(i, "]");
              } catch (t) {
                return "**non-serializable** (".concat(t, ")");
              }
            })(e, a);
            if (!h.startsWith("[object ")) return h;
            if (a.__sentry_skip_normalization__) return a;
            let p =
              "number" == typeof a.__sentry_override_normalization_depth__
                ? a.__sentry_override_normalization_depth__
                : o;
            if (0 === p) return h.replace("object ", "");
            if (l(a)) return "[Circular ~]";
            if (a && "function" == typeof a.toJSON)
              try {
                let e = a.toJSON();
                return t("", e, p - 1, c, u);
              } catch (t) {}
            let f = Array.isArray(a) ? [] : {},
              g = 0,
              m = (0, i.Sh)(a);
            for (let e in m) {
              if (!Object.prototype.hasOwnProperty.call(m, e)) continue;
              if (g >= c) {
                f[e] = "[MaxProperties ~]";
                break;
              }
              let n = m[e];
              (f[e] = t(e, n, p - 1, c, u)), g++;
            }
            return d(a), f;
          })("", t, e, a);
        } catch (t) {
          return { ERROR: "**non-serializable** (".concat(t, ")") };
        }
      }
    },
    819: function (t, e, n) {
      "use strict";
      n.d(e, {
        $Q: function () {
          return l;
        },
        HK: function () {
          return d;
        },
        Jr: function () {
          return _;
        },
        Sh: function () {
          return p;
        },
        _j: function () {
          return h;
        },
        hl: function () {
          return c;
        },
        xp: function () {
          return u;
        },
        zf: function () {
          return m;
        },
      });
      var r = n(6613),
        i = n(3580),
        s = n(4471),
        a = n(6994),
        o = n(328);
      function c(t, e, n) {
        if (!(e in t)) return;
        let r = t[e],
          i = n(r);
        "function" == typeof i && l(i, r), (t[e] = i);
      }
      function u(t, e, n) {
        try {
          Object.defineProperty(t, e, {
            value: n,
            writable: !0,
            configurable: !0,
          });
        } catch (n) {
          i.X &&
            a.kg.log(
              'Failed to add non-enumerable property "'.concat(
                e,
                '" to object'
              ),
              t
            );
        }
      }
      function l(t, e) {
        try {
          let n = e.prototype || {};
          (t.prototype = e.prototype = n), u(t, "__sentry_original__", e);
        } catch (t) {}
      }
      function d(t) {
        return t.__sentry_original__;
      }
      function h(t) {
        return Object.keys(t)
          .map((e) =>
            ""
              .concat(encodeURIComponent(e), "=")
              .concat(encodeURIComponent(t[e]))
          )
          .join("&");
      }
      function p(t) {
        if ((0, s.VZ)(t))
          return { message: t.message, name: t.name, stack: t.stack, ...g(t) };
        if (!(0, s.cO)(t)) return t;
        {
          let e = {
            type: t.type,
            target: f(t.target),
            currentTarget: f(t.currentTarget),
            ...g(t),
          };
          return (
            "undefined" != typeof CustomEvent &&
              (0, s.V9)(t, CustomEvent) &&
              (e.detail = t.detail),
            e
          );
        }
      }
      function f(t) {
        try {
          return (0, s.kK)(t)
            ? (0, r.Rt)(t)
            : Object.prototype.toString.call(t);
        } catch (t) {
          return "<unknown>";
        }
      }
      function g(t) {
        if ("object" != typeof t || null === t) return {};
        {
          let e = {};
          for (let n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e;
        }
      }
      function m(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
          n = Object.keys(p(t));
        if ((n.sort(), !n.length)) return "[object has no keys]";
        if (n[0].length >= e) return (0, o.$G)(n[0], e);
        for (let t = n.length; t > 0; t--) {
          let r = n.slice(0, t).join(", ");
          if (!(r.length > e)) {
            if (t === n.length) return r;
            return (0, o.$G)(r, e);
          }
        }
        return "";
      }
      function _(t) {
        let e = new Map();
        return (function t(e, n) {
          if (
            (function (t) {
              if (!(0, s.PO)(t)) return !1;
              try {
                let e = Object.getPrototypeOf(t).constructor.name;
                return !e || "Object" === e;
              } catch (t) {
                return !0;
              }
            })(e)
          ) {
            let r = n.get(e);
            if (void 0 !== r) return r;
            let i = {};
            for (let r of (n.set(e, i), Object.keys(e)))
              void 0 !== e[r] && (i[r] = t(e[r], n));
            return i;
          }
          if (Array.isArray(e)) {
            let r = n.get(e);
            if (void 0 !== r) return r;
            let i = [];
            return (
              n.set(e, i),
              e.forEach((e) => {
                i.push(t(e, n));
              }),
              i
            );
          }
          return e;
        })(t, e);
      }
    },
    2325: function (t, e, n) {
      "use strict";
      n.d(e, {
        $P: function () {
          return c;
        },
        Sq: function () {
          return a;
        },
        pE: function () {
          return s;
        },
      });
      let r = /\(error: (.*)\)/,
        i = /captureMessage|captureException/;
      function s() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        let s = e.sort((t, e) => t[0] - e[0]).map((t) => t[1]);
        return function (t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = [],
            a = t.split("\n");
          for (let t = e; t < a.length; t++) {
            let e = a[t];
            if (e.length > 1024) continue;
            let i = r.test(e) ? e.replace(r, "$1") : e;
            if (!i.match(/\S*Error: /)) {
              for (let t of s) {
                let e = t(i);
                if (e) {
                  n.push(e);
                  break;
                }
              }
              if (n.length >= 50) break;
            }
          }
          return (function (t) {
            if (!t.length) return [];
            let e = Array.from(t);
            return (
              /sentryWrapped/.test(e[e.length - 1].function || "") && e.pop(),
              e.reverse(),
              i.test(e[e.length - 1].function || "") &&
                (e.pop(), i.test(e[e.length - 1].function || "") && e.pop()),
              e
                .slice(0, 50)
                .map((t) => ({
                  ...t,
                  filename: t.filename || e[e.length - 1].filename,
                  function: t.function || "?",
                }))
            );
          })(n);
        };
      }
      function a(t) {
        return Array.isArray(t) ? s(...t) : t;
      }
      let o = "<anonymous>";
      function c(t) {
        try {
          if (!t || "function" != typeof t) return o;
          return t.name || o;
        } catch (t) {
          return o;
        }
      }
    },
    328: function (t, e, n) {
      "use strict";
      n.d(e, {
        $G: function () {
          return i;
        },
        U0: function () {
          return a;
        },
        nK: function () {
          return s;
        },
      });
      var r = n(4471);
      function i(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return "string" != typeof t || 0 === e
          ? t
          : t.length <= e
          ? t
          : "".concat(t.slice(0, e), "...");
      }
      function s(t, e) {
        if (!Array.isArray(t)) return "";
        let n = [];
        for (let e = 0; e < t.length; e++) {
          let i = t[e];
          try {
            (0, r.y1)(i) ? n.push("[VueViewModel]") : n.push(String(i));
          } catch (t) {
            n.push("[value cannot be serialized]");
          }
        }
        return n.join(e);
      }
      function a(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return e.some((e) =>
          (function (t, e) {
            let n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return (
              !!(0, r.HD)(t) &&
              ((0, r.Kj)(e)
                ? e.test(t)
                : !!(0, r.HD)(e) && (n ? t === e : t.includes(e)))
            );
          })(t, e, n)
        );
      }
    },
    9107: function (t, e, n) {
      "use strict";
      n.d(e, {
        $2: function () {
          return o;
        },
        WD: function () {
          return a;
        },
        cW: function () {
          return c;
        },
      });
      var r,
        i,
        s = n(4471);
      function a(t) {
        return new c((e) => {
          e(t);
        });
      }
      function o(t) {
        return new c((e, n) => {
          n(t);
        });
      }
      ((r = i || (i = {}))[(r.PENDING = 0)] = "PENDING"),
        (r[(r.RESOLVED = 1)] = "RESOLVED"),
        (r[(r.REJECTED = 2)] = "REJECTED");
      class c {
        then(t, e) {
          return new c((n, r) => {
            this._handlers.push([
              !1,
              (e) => {
                if (t)
                  try {
                    n(t(e));
                  } catch (t) {
                    r(t);
                  }
                else n(e);
              },
              (t) => {
                if (e)
                  try {
                    n(e(t));
                  } catch (t) {
                    r(t);
                  }
                else r(t);
              },
            ]),
              this._executeHandlers();
          });
        }
        catch(t) {
          return this.then((t) => t, t);
        }
        finally(t) {
          return new c((e, n) => {
            let r, i;
            return this.then(
              (e) => {
                (i = !1), (r = e), t && t();
              },
              (e) => {
                (i = !0), (r = e), t && t();
              }
            ).then(() => {
              if (i) {
                n(r);
                return;
              }
              e(r);
            });
          });
        }
        __init() {
          this._resolve = (t) => {
            this._setResult(i.RESOLVED, t);
          };
        }
        __init2() {
          this._reject = (t) => {
            this._setResult(i.REJECTED, t);
          };
        }
        __init3() {
          this._setResult = (t, e) => {
            if (this._state === i.PENDING) {
              if ((0, s.J8)(e)) {
                e.then(this._resolve, this._reject);
                return;
              }
              (this._state = t), (this._value = e), this._executeHandlers();
            }
          };
        }
        __init4() {
          this._executeHandlers = () => {
            if (this._state === i.PENDING) return;
            let t = this._handlers.slice();
            (this._handlers = []),
              t.forEach((t) => {
                t[0] ||
                  (this._state === i.RESOLVED && t[1](this._value),
                  this._state === i.REJECTED && t[2](this._value),
                  (t[0] = !0));
              });
          };
        }
        constructor(t) {
          c.prototype.__init.call(this),
            c.prototype.__init2.call(this),
            c.prototype.__init3.call(this),
            c.prototype.__init4.call(this),
            (this._state = i.PENDING),
            (this._handlers = []);
          try {
            t(this._resolve, this._reject);
          } catch (t) {
            this._reject(t);
          }
        }
      }
    },
    8459: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z1: function () {
          return a;
        },
        ph: function () {
          return s;
        },
        yW: function () {
          return i;
        },
      });
      var r = n(299);
      function i() {
        return Date.now() / 1e3;
      }
      let s = (function () {
          let { performance: t } = r.n2;
          if (!t || !t.now) return i;
          let e = Date.now() - t.now(),
            n = void 0 == t.timeOrigin ? e : t.timeOrigin;
          return () => (n + t.now()) / 1e3;
        })(),
        a = (() => {
          let { performance: t } = r.n2;
          if (!t || !t.now) return;
          let e = t.now(),
            n = Date.now(),
            i = t.timeOrigin ? Math.abs(t.timeOrigin + e - n) : 36e5,
            s = t.timing && t.timing.navigationStart,
            a = "number" == typeof s ? Math.abs(s + e - n) : 36e5;
          return i < 36e5 || a < 36e5 ? (i <= a ? t.timeOrigin : s) : n;
        })();
    },
    8932: function (t, e, n) {
      "use strict";
      n.d(e, {
        $p: function () {
          return o;
        },
        KA: function () {
          return a;
        },
      });
      var r = n(5580),
        i = n(1760);
      let s = RegExp(
        "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"
      );
      function a(t, e) {
        let n = (function (t) {
            let e;
            if (!t) return;
            let n = t.match(s);
            if (n)
              return (
                "1" === n[3] ? (e = !0) : "0" === n[3] && (e = !1),
                { traceId: n[1], parentSampled: e, parentSpanId: n[2] }
              );
          })(t),
          a = (0, r.EN)(e),
          { traceId: o, parentSpanId: c, parentSampled: u } = n || {},
          l = {
            traceId: o || (0, i.DM)(),
            spanId: (0, i.DM)().substring(16),
            sampled: u,
          };
        return (
          c && (l.parentSpanId = c),
          a && (l.dsc = a),
          {
            traceparentData: n,
            dynamicSamplingContext: a,
            propagationContext: l,
          }
        );
      }
      function o() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : (0, i.DM)(),
          e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : (0, i.DM)().substring(16),
          n = arguments.length > 2 ? arguments[2] : void 0,
          r = "";
        return (
          void 0 !== n && (r = n ? "-1" : "-0"),
          "".concat(t, "-").concat(e).concat(r)
        );
      }
    },
    299: function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.Math == Math ? t : void 0;
      }
      n.d(e, {
        Rf: function () {
          return s;
        },
        YO: function () {
          return a;
        },
        n2: function () {
          return i;
        },
      });
      let i =
        ("object" == typeof globalThis && r(globalThis)) ||
        r(window) ||
        ("object" == typeof self && r(self)) ||
        ("object" == typeof n.g && r(n.g)) ||
        (function () {
          return this;
        })() ||
        {};
      function s() {
        return i;
      }
      function a(t, e, n) {
        let r = n || i,
          s = (r.__SENTRY__ = r.__SENTRY__ || {}),
          a = s[t] || (s[t] = e());
        return a;
      }
    },
    6864: function (t, e, n) {
      t.exports = n(7572);
    },
    3656: function (t) {
      var e,
        n,
        r,
        i = (t.exports = {});
      function s() {
        throw Error("setTimeout has not been defined");
      }
      function a() {
        throw Error("clearTimeout has not been defined");
      }
      function o(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === s || !e) && setTimeout)
          return (e = setTimeout), setTimeout(t, 0);
        try {
          return e(t, 0);
        } catch (n) {
          try {
            return e.call(null, t, 0);
          } catch (n) {
            return e.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          e = "function" == typeof setTimeout ? setTimeout : s;
        } catch (t) {
          e = s;
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : a;
        } catch (t) {
          n = a;
        }
      })();
      var c = [],
        u = !1,
        l = -1;
      function d() {
        u &&
          r &&
          ((u = !1), r.length ? (c = r.concat(c)) : (l = -1), c.length && h());
      }
      function h() {
        if (!u) {
          var t = o(d);
          u = !0;
          for (var e = c.length; e; ) {
            for (r = c, c = []; ++l < e; ) r && r[l].run();
            (l = -1), (e = c.length);
          }
          (r = null),
            (u = !1),
            (function (t) {
              if (n === clearTimeout) return clearTimeout(t);
              if ((n === a || !n) && clearTimeout)
                return (n = clearTimeout), clearTimeout(t);
              try {
                n(t);
              } catch (e) {
                try {
                  return n.call(null, t);
                } catch (e) {
                  return n.call(this, t);
                }
              }
            })(t);
        }
      }
      function p(t, e) {
        (this.fun = t), (this.array = e);
      }
      function f() {}
      (i.nextTick = function (t) {
        var e = Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        c.push(new p(t, e)), 1 !== c.length || u || o(h);
      }),
        (p.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (i.title = "browser"),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ""),
        (i.versions = {}),
        (i.on = f),
        (i.addListener = f),
        (i.once = f),
        (i.off = f),
        (i.removeListener = f),
        (i.removeAllListeners = f),
        (i.emit = f),
        (i.prependListener = f),
        (i.prependOnceListener = f),
        (i.listeners = function (t) {
          return [];
        }),
        (i.binding = function (t) {
          throw Error("process.binding is not supported");
        }),
        (i.cwd = function () {
          return "/";
        }),
        (i.chdir = function (t) {
          throw Error("process.chdir is not supported");
        }),
        (i.umask = function () {
          return 0;
        });
    },
  },
  function (t) {
    var e = function (e) {
      return t((t.s = e));
    };
    t.O(0, [774, 179], function () {
      return e(1200), e(6236), e(7572);
    }),
      (_N_E = t.O());
  },
]);
