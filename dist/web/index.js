const e = globalThis.__OPENCODE_EXTENSION_HOST__?.modules?.["solid-js/web"];
if (!e) throw new Error("OpenCode host module is unavailable: solid-js/web");
e.Aliases;
e.Assets;
e.ChildProperties;
e.DOMElements;
e.DelegatedEvents;
e.Dynamic;
e.ErrorBoundary;
e.For;
e.Hydration;
e.HydrationScript;
e.Index;
e.Match;
e.NoHydration;
e.Portal;
e.Properties;
e.RequestContext;
e.SVGElements;
e.SVGNamespace;
e.Show;
e.Suspense;
e.SuspenseList;
e.Switch;
e.addEventListener;
e.assign;
e.classList;
e.className;
e.clearDelegatedEvents;
const u = e.createComponent;
e.createDynamic;
const Se = e.delegateEvents;
e.dynamicProperty;
const I = e.effect;
e.escape;
e.generateHydrationScript;
e.getAssets;
e.getHydrationKey;
e.getNextElement;
e.getNextMarker;
e.getNextMatch;
e.getOwner;
e.getPropAlias;
e.getRequestEvent;
e.hydrate;
e.innerHTML;
const a = e.insert;
e.isDev;
e.isServer;
e.memo;
e.mergeProps;
e.render;
e.renderToStream;
e.renderToString;
e.renderToStringAsync;
e.resolveSSRNode;
e.runHydrationEvents;
const T = e.setAttribute;
e.setAttributeNS;
e.setBoolAttribute;
e.setProperty;
e.setStyleProperty;
e.spread;
e.ssr;
e.ssrAttribute;
e.ssrClassList;
e.ssrElement;
e.ssrHydrationKey;
e.ssrSpread;
e.ssrStyle;
e.style;
const E = e.template;
e.untrack;
const re = e.use;
e.useAssets;
const t = globalThis.__OPENCODE_EXTENSION_HOST__?.modules?.["solid-js"];
if (!t) throw new Error("OpenCode host module is unavailable: solid-js");
t.$DEVCOMP;
t.$PROXY;
t.$TRACK;
t.DEV;
t.ErrorBoundary;
const X = t.For;
t.Index;
t.Match;
const se = t.Show;
t.Suspense;
t.SuspenseList;
t.Switch;
t.batch;
t.cancelCallback;
t.catchError;
t.children;
t.createComponent;
t.createComputed;
t.createContext;
t.createDeferred;
const L = t.createEffect;
t.createMemo;
t.createReaction;
t.createRenderEffect;
t.createResource;
t.createRoot;
t.createSelector;
const f = t.createSignal;
t.createUniqueId;
t.enableExternalSource;
t.enableHydration;
t.enableScheduling;
t.equalFn;
t.from;
t.getListener;
t.getOwner;
t.indexArray;
t.lazy;
t.mapArray;
t.mergeProps;
t.observable;
t.on;
const Ee = t.onCleanup;
t.onError;
t.onMount;
t.requestCallback;
t.resetErrorBoundaries;
t.runWithOwner;
t.sharedConfig;
t.splitProps;
t.startTransition;
const _e = t.untrack;
t.useContext;
t.useTransition;
const oe = globalThis.__OPENCODE_EXTENSION_HOST__?.modules?.["@opencode-ai/ui/button"];
if (!oe) throw new Error("OpenCode host module is unavailable: @opencode-ai/ui/button");
const S = oe.Button;
var Ce = /* @__PURE__ */ E("<ul class=oc-wls-variables-list>"), xe = /* @__PURE__ */ E("<aside class=oc-wls-variables><div class=oc-wls-variables-head>Variables (User` context)"), Te = /* @__PURE__ */ E("<section class=oc-wls-root><header class=oc-wls-toolbar><span class=oc-wls-status><span class=oc-wls-status-dot></span></span><div class=oc-wls-actions></div></header><div class=oc-wls-body><div class=oc-wls-code></div></div><footer class=oc-wls-console><div class=oc-wls-console-entries></div><div class=oc-wls-input-row><span class=oc-wls-prompt></span><input class=oc-wls-input>"), Oe = /* @__PURE__ */ E('<div class=oc-wls-line><button type=button class=oc-wls-gutter title="toggle breakpoint"><span class=oc-wls-line-number></span><span class=oc-wls-bp-dot></span></button><pre class=oc-wls-line-text>'), Ne = /* @__PURE__ */ E("<div class=oc-wls-variables-empty>no variables defined yet"), Pe = /* @__PURE__ */ E("<li><span class=oc-wls-var-name></span><span class=oc-wls-var-value>"), Ae = /* @__PURE__ */ E("<div class=oc-wls-entry>");
const le = "local.wls-repl", He = `${le}/message`, [ne, ae] = f({}), ie = 500;
let De = 0;
function Re(c) {
  return c.split("; ").filter((o) => o !== "").map((o) => {
    const h = o.replace(/^HoldPattern\[/, ""), y = h.indexOf("] :> ");
    if (y === -1) return h;
    const m = h.slice(0, y), v = h.slice(y + 5);
    return `${m} ${m.includes("[") ? ":=" : "="} ${v}`;
  }).join("; ");
}
function Ie(c, o) {
  for (const h of [" = ", " := "]) {
    const y = c + h;
    if (o.startsWith(y)) return o.slice(y.length);
  }
  return o;
}
function Le(c) {
  const o = () => c.file.absolutePath, [h, y] = f(c.text() ?? ""), [m, v] = f("unknown"), [F, ce] = f(void 0), [O, _] = f(void 0), [W, M] = f([]), [N, de] = f([]), [ue, pe] = f([]), [G, K] = f(""), [U, P] = f(!1);
  let V, A;
  const i = (s, r) => {
    pe((l) => {
      const d = [...l, {
        id: ++De,
        kind: s,
        text: r
      }];
      return d.length > ie ? d.slice(d.length - ie) : d;
    });
  }, Y = async () => {
    try {
      const s = await c.readText();
      typeof s == "string" && y(s);
    } catch {
    }
  };
  L(() => {
    c.revision?.(), _e(() => void Y());
  }), L(() => {
    const s = V;
    s && (s.scrollTop = s.scrollHeight);
  }), L(() => {
    const s = O();
    if (s === void 0 || !A) return;
    A.querySelector(`[data-line="${s}"]`)?.scrollIntoView({
      block: "center"
    });
  });
  const ve = () => h().split(`
`), ge = (s) => {
    de((r) => r.includes(s) ? r.filter((l) => l !== s) : [...r, s]);
  }, C = async (s, r) => {
    const l = ne().rpc;
    if (!l) {
      i("err", "server bridge not available in this host");
      return;
    }
    try {
      return await l.call(s, r);
    } catch (d) {
      const b = d instanceof Error ? d.message : String(d);
      i("err", `${s}: ${b}`);
      return;
    }
  }, fe = async () => {
    P(!0);
    try {
      await Y(), (await C("kernel.run", {
        path: o(),
        code: h(),
        breakpoints: N()
      }))?.started && (v("running"), _(void 0), i("info", `run started (${N().length} breakpoint${N().length === 1 ? "" : "s"})`));
    } finally {
      P(!1);
    }
  }, B = (s) => async () => {
    await C("kernel." + s, {
      path: o()
    });
  }, he = async () => {
    P(!0);
    try {
      const s = await C("kernel.restart", {
        path: o()
      });
      s?.status && (v(s.status), _(void 0), M([]), i("info", "kernel restarted; user variables were reset"));
    } finally {
      P(!1);
    }
  }, be = async () => {
    await C("kernel.stop", {
      path: o()
    });
  }, we = async () => {
    const s = G().trim();
    if (!s) return;
    K(""), i("input", s);
    const r = await C("kernel.eval", {
      path: o(),
      code: s
    });
    r?.queued && i("pending", `awaiting result (${r.id})`);
  }, ye = (s) => {
    if (!s || typeof s != "object") return;
    const r = s;
    if (r.path === o()) {
      if (r.kind === "output") {
        i("out", r.text ?? "");
        return;
      }
      if (r.kind === "stderr") {
        i("err", r.text ?? "");
        return;
      }
      if (r.kind === "protocol")
        switch (r.type) {
          case "ready":
            v("ready"), ce(r.version), i("info", `kernel ready (${r.version ?? "unknown version"})`);
            break;
          case "paused":
            v("paused"), _(r.line), M(Object.entries(r.variables ?? {}).filter(([, l]) => l !== "").map(([l, d]) => [l, Ie(l, Re(d))])), i("info", `paused at line ${r.line}`);
            break;
          case "done":
            v("ready"), _(void 0), M([]), i("info", r.aborted === !0 ? "run aborted" : "run finished");
            break;
          case "result":
            i("result", `[line ${r.line}] ${r.text ?? ""}`);
            break;
          case "error":
            i("err", r.text ?? "evaluation error");
            break;
          case "inspect-result":
          case "eval-result":
            i("result", `${r.ok === !1 ? "error: " : ""}${r.text ?? ""}`);
            break;
          case "bridge-error":
            v("error"), i("err", r.text ?? "bridge error");
            break;
          case "kernel-exit":
            v("stopped"), _(void 0), i("info", `kernel exited${r.code !== void 0 ? ` (code ${r.code})` : ""}`);
            break;
          case "kernel-error":
            v("error"), i("err", r.text ?? "kernel failed to start — is wolframscript installed and on PATH?");
            break;
        }
    }
  };
  L(() => {
    const s = ne().events;
    if (!s) return;
    const r = s.on(He, ye);
    Ee(() => r.dispose());
  });
  const me = () => {
    switch (m()) {
      case "unknown":
        return "idle";
      case "starting":
        return "starting kernel…";
      case "ready":
        return F() ? `ready (${F()})` : "ready";
      case "running":
        return "running…";
      case "paused":
        return O() !== void 0 ? `paused at line ${O()}` : "paused";
      case "error":
        return "error";
      case "stopped":
        return "kernel stopped";
    }
  }, k = () => m() === "paused";
  return (() => {
    var s = Te(), r = s.firstChild, l = r.firstChild, d = l.firstChild, b = l.nextSibling, q = r.nextSibling, z = q.firstChild, ke = q.nextSibling, H = ke.firstChild, $e = H.nextSibling, J = $e.firstChild, D = J.nextSibling;
    a(l, me, null), a(b, u(S, {
      size: "small",
      variant: "secondary",
      get disabled() {
        return U() || k() || m() === "running";
      },
      onClick: () => void fe(),
      children: "Run"
    }), null), a(b, u(S, {
      size: "small",
      variant: "secondary",
      get disabled() {
        return !k();
      },
      onClick: () => void B("continue")(),
      children: "Continue"
    }), null), a(b, u(S, {
      size: "small",
      variant: "secondary",
      get disabled() {
        return !k();
      },
      onClick: () => void B("step")(),
      children: "Step"
    }), null), a(b, u(S, {
      size: "small",
      variant: "ghost",
      get disabled() {
        return !k();
      },
      onClick: () => void B("abort")(),
      children: "Abort"
    }), null), a(b, u(S, {
      size: "small",
      variant: "ghost",
      get disabled() {
        return U();
      },
      onClick: () => void he(),
      children: "Restart"
    }), null), a(b, u(S, {
      size: "small",
      variant: "ghost",
      onClick: () => void be(),
      children: "Stop"
    }), null), a(b, u(S, {
      size: "small",
      variant: "ghost",
      get onClick() {
        return c.showSource;
      },
      children: "Source"
    }), null);
    var Q = A;
    typeof Q == "function" ? re(Q, z) : A = z, a(z, u(X, {
      get each() {
        return ve();
      },
      children: (n, p) => {
        const g = p() + 1;
        return (() => {
          var w = Oe(), $ = w.firstChild, R = $.firstChild, j = $.nextSibling;
          return T(w, "data-line", g), $.$$click = () => ge(g), a(R, g), a(j, n === "" ? " " : n), I((x) => {
            var ee = O() === g, te = !!N().includes(g);
            return ee !== x.e && w.classList.toggle("is-paused", x.e = ee), te !== x.t && $.classList.toggle("has-breakpoint", x.t = te), x;
          }, {
            e: void 0,
            t: void 0
          }), w;
        })();
      }
    })), a(q, u(se, {
      get when() {
        return k();
      },
      get children() {
        var n = xe();
        return n.firstChild, a(n, u(se, {
          get when() {
            return W().length > 0;
          },
          get fallback() {
            return Ne();
          },
          get children() {
            var p = Ce();
            return a(p, u(X, {
              get each() {
                return W();
              },
              children: ([g, w]) => (() => {
                var $ = Pe(), R = $.firstChild, j = R.nextSibling;
                return a(R, g), a(j, w), $;
              })()
            })), p;
          }
        }), null), n;
      }
    }), null);
    var Z = V;
    return typeof Z == "function" ? re(Z, H) : V = H, a(H, u(X, {
      get each() {
        return ue();
      },
      children: (n) => (() => {
        var p = Ae();
        return a(p, () => n.text), I(() => T(p, "data-kind", n.kind)), p;
      })()
    })), a(J, () => k() ? "inspect>" : "In>"), D.$$keydown = (n) => {
      n.key === "Enter" && we();
    }, D.$$input = (n) => K(n.currentTarget.value), I((n) => {
      var p = m(), g = m(), w = k() ? "evaluate an expression in the paused state" : "evaluate an expression in the kernel";
      return p !== n.e && T(l, "data-status", n.e = p), g !== n.t && T(d, "data-status", n.t = g), w !== n.a && T(D, "placeholder", n.a = w), n;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    }), I(() => D.value = G()), s;
  })();
}
const Me = {
  id: le,
  apiVersion: 1,
  activate(c) {
    c.log.info("activating wls-repl viewer"), ae({
      rpc: c.rpc,
      events: c.events
    });
    const o = c.fileViewers.register({
      id: "wls-repl",
      component: Le
    });
    return () => {
      o.dispose(), ae({});
    };
  }
};
Se(["input", "keydown", "click"]);
export {
  Me as default,
  Re as prettyDefinition,
  Ie as stripNamePrefix
};
