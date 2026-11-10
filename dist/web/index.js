const t = globalThis.__OPENCODE_EXTENSION_HOST__?.modules?.["solid-js/web"];
if (!t) throw new Error("OpenCode host module is unavailable: solid-js/web");
t.Aliases;
t.Assets;
t.ChildProperties;
t.DOMElements;
t.DelegatedEvents;
t.Dynamic;
t.ErrorBoundary;
t.For;
t.Hydration;
t.HydrationScript;
t.Index;
t.Match;
t.NoHydration;
t.Portal;
t.Properties;
t.RequestContext;
t.SVGElements;
t.SVGNamespace;
t.Show;
t.Suspense;
t.SuspenseList;
t.Switch;
t.addEventListener;
t.assign;
t.classList;
t.className;
t.clearDelegatedEvents;
const k = t.createComponent;
t.createDynamic;
const rt = t.delegateEvents;
t.dynamicProperty;
const X = t.effect;
t.escape;
t.generateHydrationScript;
t.getAssets;
t.getHydrationKey;
t.getNextElement;
t.getNextMarker;
t.getNextMatch;
t.getOwner;
t.getPropAlias;
t.getRequestEvent;
t.hydrate;
t.innerHTML;
const p = t.insert;
t.isDev;
t.isServer;
t.memo;
t.mergeProps;
t.render;
t.renderToStream;
t.renderToString;
t.renderToStringAsync;
t.resolveSSRNode;
t.runHydrationEvents;
const T = t.setAttribute;
t.setAttributeNS;
t.setBoolAttribute;
t.setProperty;
t.setStyleProperty;
t.spread;
t.ssr;
t.ssrAttribute;
t.ssrClassList;
t.ssrElement;
t.ssrHydrationKey;
t.ssrSpread;
t.ssrStyle;
const st = t.style, j = t.template;
t.untrack;
const Se = t.use;
t.useAssets;
const r = globalThis.__OPENCODE_EXTENSION_HOST__?.modules?.["solid-js"];
if (!r) throw new Error("OpenCode host module is unavailable: solid-js");
r.$DEVCOMP;
r.$PROXY;
r.$TRACK;
r.DEV;
r.ErrorBoundary;
const le = r.For, at = r.Index;
r.Match;
const ce = r.Show;
r.Suspense;
r.SuspenseList;
r.Switch;
r.batch;
r.cancelCallback;
r.catchError;
r.children;
r.createComponent;
r.createComputed;
r.createContext;
r.createDeferred;
const K = r.createEffect, U = r.createMemo;
r.createReaction;
r.createRenderEffect;
r.createResource;
r.createRoot;
r.createSelector;
const w = r.createSignal;
r.createUniqueId;
r.enableExternalSource;
r.enableHydration;
r.enableScheduling;
r.equalFn;
r.from;
r.getListener;
r.getOwner;
r.indexArray;
r.lazy;
r.mapArray;
r.mergeProps;
r.observable;
r.on;
const ne = r.onCleanup;
r.onError;
const xe = r.onMount;
r.requestCallback;
r.resetErrorBoundaries;
r.runWithOwner;
r.sharedConfig;
r.splitProps;
r.startTransition;
const it = r.untrack;
r.useContext;
r.useTransition;
const Pe = globalThis.__OPENCODE_EXTENSION_HOST__?.modules?.["@opencode-ai/ui/button"];
if (!Pe) throw new Error("OpenCode host module is unavailable: @opencode-ai/ui/button");
const V = Pe.Button;
const He = {
  run: "Run",
  continue: "Continue",
  step: "Step",
  abort: "Abort",
  restart: "Restart",
  stop: "Stop",
  source: "Source",
  idle: "Idle",
  starting: "Starting kernel…",
  ready: "Ready",
  running: "Running…",
  paused: "Paused",
  error: "Error",
  stopped: "Kernel stopped",
  pausedLine: "Paused at line {line}",
  breakpoint: "Toggle breakpoint",
  variables: "Variables (User` context)",
  empty: "No variables defined yet",
  input: "Evaluate an expression in the kernel",
  inspect: "Evaluate an expression in the paused state"
}, je = {
  run: "运行",
  continue: "继续",
  step: "单步",
  abort: "中止",
  restart: "重启",
  stop: "停止",
  source: "源代码",
  idle: "空闲",
  starting: "正在启动内核…",
  ready: "就绪",
  running: "运行中…",
  paused: "已暂停",
  error: "错误",
  stopped: "内核已停止",
  pausedLine: "已暂停于第 {line} 行",
  breakpoint: "切换断点",
  variables: "变量（User` 上下文）",
  empty: "尚未定义变量",
  input: "在内核中计算表达式",
  inspect: "在暂停状态下计算表达式"
}, De = {
  run: "執行",
  continue: "繼續",
  step: "單步",
  abort: "中止",
  restart: "重新啟動",
  stop: "停止",
  source: "原始碼",
  idle: "閒置",
  starting: "正在啟動核心…",
  ready: "就緒",
  running: "執行中…",
  paused: "已暫停",
  error: "錯誤",
  stopped: "核心已停止",
  pausedLine: "已暫停於第 {line} 行",
  breakpoint: "切換中斷點",
  variables: "變數（User` 上下文）",
  empty: "尚未定義變數",
  input: "在核心中計算運算式",
  inspect: "在暫停狀態下計算運算式"
}, ot = {
  run: "実行",
  continue: "続行",
  step: "ステップ",
  abort: "中断",
  restart: "再起動",
  stop: "停止",
  source: "ソース",
  idle: "待機中",
  starting: "カーネルを起動中…",
  ready: "準備完了",
  running: "実行中…",
  paused: "一時停止中",
  error: "エラー",
  stopped: "カーネル停止",
  pausedLine: "{line} 行目で一時停止",
  breakpoint: "ブレークポイントを切り替え",
  variables: "変数（User` コンテキスト）",
  empty: "変数はまだ定義されていません",
  input: "カーネルで式を評価",
  inspect: "一時停止状態で式を評価"
}, lt = {
  run: "실행",
  continue: "계속",
  step: "단계 실행",
  abort: "중단",
  restart: "다시 시작",
  stop: "정지",
  source: "소스 코드",
  idle: "대기",
  starting: "커널 시작 중…",
  ready: "준비됨",
  running: "실행 중…",
  paused: "일시 중지됨",
  error: "오류",
  stopped: "커널이 정지됨",
  pausedLine: "{line}행에서 일시 중지됨",
  breakpoint: "중단점 전환",
  variables: "변수 (User` 컨텍스트)",
  empty: "아직 정의된 변수가 없습니다",
  input: "커널에서 표현식 평가",
  inspect: "일시 중지 상태에서 표현식 평가"
}, ct = {
  run: "Ausführen",
  continue: "Fortsetzen",
  step: "Einzelschritt",
  abort: "Abbrechen",
  restart: "Neu starten",
  stop: "Stoppen",
  source: "Quellcode",
  idle: "Inaktiv",
  starting: "Kernel wird gestartet…",
  ready: "Bereit",
  running: "Wird ausgeführt…",
  paused: "Pausiert",
  error: "Fehler",
  stopped: "Kernel gestoppt",
  pausedLine: "In Zeile {line} pausiert",
  breakpoint: "Haltepunkt umschalten",
  variables: "Variablen (User`-Kontext)",
  empty: "Noch keine Variablen definiert",
  input: "Einen Ausdruck im Kernel auswerten",
  inspect: "Einen Ausdruck im pausierten Zustand auswerten"
}, ut = {
  run: "Ejecutar",
  continue: "Continuar",
  step: "Paso",
  abort: "Abortar",
  restart: "Reiniciar",
  stop: "Detener",
  source: "Código fuente",
  idle: "Inactivo",
  starting: "Iniciando el núcleo…",
  ready: "Listo",
  running: "Ejecutando…",
  paused: "En pausa",
  error: "Error",
  stopped: "Núcleo detenido",
  pausedLine: "En pausa en la línea {line}",
  breakpoint: "Alternar punto de interrupción",
  variables: "Variables (contexto User`)",
  empty: "Aún no hay variables definidas",
  input: "Evaluar una expresión en el núcleo",
  inspect: "Evaluar una expresión en estado de pausa"
}, dt = {
  run: "Exécuter",
  continue: "Continuer",
  step: "Pas à pas",
  abort: "Interrompre",
  restart: "Redémarrer",
  stop: "Arrêter",
  source: "Code source",
  idle: "Inactif",
  starting: "Démarrage du noyau…",
  ready: "Prêt",
  running: "Exécution en cours…",
  paused: "En pause",
  error: "Erreur",
  stopped: "Noyau arrêté",
  pausedLine: "En pause à la ligne {line}",
  breakpoint: "Basculer le point d’arrêt",
  variables: "Variables (contexte User`)",
  empty: "Aucune variable définie pour le moment",
  input: "Évaluer une expression dans le noyau",
  inspect: "Évaluer une expression en pause"
}, pt = {
  run: "Kør",
  continue: "Fortsæt",
  step: "Enkelttrin",
  abort: "Afbryd",
  restart: "Genstart",
  stop: "Stop",
  source: "Kildekode",
  idle: "Inaktiv",
  starting: "Starter kernen…",
  ready: "Klar",
  running: "Kører…",
  paused: "Sat på pause",
  error: "Fejl",
  stopped: "Kernen er stoppet",
  pausedLine: "Sat på pause ved linje {line}",
  breakpoint: "Slå stoppunkt til eller fra",
  variables: "Variabler (User`-kontekst)",
  empty: "Ingen variabler er defineret endnu",
  input: "Evaluer et udtryk i kernen",
  inspect: "Evaluer et udtryk i pauset tilstand"
}, ft = {
  run: "Uruchom",
  continue: "Kontynuuj",
  step: "Krok",
  abort: "Przerwij",
  restart: "Uruchom ponownie",
  stop: "Zatrzymaj",
  source: "Kod źródłowy",
  idle: "Bezczynny",
  starting: "Uruchamianie jądra…",
  ready: "Gotowy",
  running: "Wykonywanie…",
  paused: "Wstrzymano",
  error: "Błąd",
  stopped: "Jądro zatrzymane",
  pausedLine: "Wstrzymano w wierszu {line}",
  breakpoint: "Przełącz punkt przerwania",
  variables: "Zmienne (kontekst User`)",
  empty: "Nie zdefiniowano jeszcze żadnych zmiennych",
  input: "Oblicz wyrażenie w jądrze",
  inspect: "Oblicz wyrażenie we wstrzymanym stanie"
}, gt = {
  run: "Выполнить",
  continue: "Продолжить",
  step: "Шаг",
  abort: "Прервать",
  restart: "Перезапустить",
  stop: "Остановить",
  source: "Исходный код",
  idle: "Бездействие",
  starting: "Запуск ядра…",
  ready: "Готово",
  running: "Выполняется…",
  paused: "Приостановлено",
  error: "Ошибка",
  stopped: "Ядро остановлено",
  pausedLine: "Приостановлено на строке {line}",
  breakpoint: "Переключить точку останова",
  variables: "Переменные (контекст User`)",
  empty: "Переменные пока не определены",
  input: "Вычислить выражение в ядре",
  inspect: "Вычислить выражение в приостановленном состоянии"
}, ht = {
  run: "تشغيل",
  continue: "متابعة",
  step: "خطوة",
  abort: "إلغاء التنفيذ",
  restart: "إعادة التشغيل",
  stop: "إيقاف",
  source: "الشيفرة المصدرية",
  idle: "خامل",
  starting: "جارٍ بدء النواة…",
  ready: "جاهز",
  running: "قيد التشغيل…",
  paused: "متوقف مؤقتًا",
  error: "خطأ",
  stopped: "تم إيقاف النواة",
  pausedLine: "متوقف مؤقتًا عند السطر {line}",
  breakpoint: "تبديل نقطة التوقف",
  variables: "المتغيرات (سياق User`)",
  empty: "لم يتم تعريف أي متغيرات بعد",
  input: "تقييم تعبير في النواة",
  inspect: "تقييم تعبير في حالة التوقف المؤقت"
}, Me = {
  run: "Kjør",
  continue: "Fortsett",
  step: "Enkeltsteg",
  abort: "Avbryt",
  restart: "Start på nytt",
  stop: "Stopp",
  source: "Kildekode",
  idle: "Inaktiv",
  starting: "Starter kjernen…",
  ready: "Klar",
  running: "Kjører…",
  paused: "Satt på pause",
  error: "Feil",
  stopped: "Kjernen er stoppet",
  pausedLine: "Satt på pause på linje {line}",
  breakpoint: "Slå av/på bruddpunkt",
  variables: "Variabler (User`-kontekst)",
  empty: "Ingen variabler er definert ennå",
  input: "Evaluer et uttrykk i kjernen",
  inspect: "Evaluer et uttrykk mens kjøringen er satt på pause"
}, Re = {
  run: "Executar",
  continue: "Continuar",
  step: "Passo",
  abort: "Abortar",
  restart: "Reiniciar",
  stop: "Parar",
  source: "Código-fonte",
  idle: "Ocioso",
  starting: "Iniciando o kernel…",
  ready: "Pronto",
  running: "Executando…",
  paused: "Pausado",
  error: "Erro",
  stopped: "Kernel parado",
  pausedLine: "Pausado na linha {line}",
  breakpoint: "Alternar ponto de interrupção",
  variables: "Variáveis (contexto User`)",
  empty: "Nenhuma variável definida ainda",
  input: "Avaliar uma expressão no kernel",
  inspect: "Avaliar uma expressão no estado pausado"
}, vt = {
  run: "เรียกใช้",
  continue: "ดำเนินการต่อ",
  step: "ทำงานทีละขั้น",
  abort: "ยกเลิกการทำงาน",
  restart: "เริ่มใหม่",
  stop: "หยุด",
  source: "ซอร์สโค้ด",
  idle: "ว่าง",
  starting: "กำลังเริ่มเคอร์เนล…",
  ready: "พร้อม",
  running: "กำลังทำงาน…",
  paused: "หยุดชั่วคราว",
  error: "ข้อผิดพลาด",
  stopped: "เคอร์เนลหยุดแล้ว",
  pausedLine: "หยุดชั่วคราวที่บรรทัด {line}",
  breakpoint: "สลับจุดพัก",
  variables: "ตัวแปร (บริบท User`)",
  empty: "ยังไม่มีการกำหนดตัวแปร",
  input: "ประเมินนิพจน์ในเคอร์เนล",
  inspect: "ประเมินนิพจน์ในสถานะหยุดชั่วคราว"
}, bt = {
  run: "Pokreni",
  continue: "Nastavi",
  step: "Korak",
  abort: "Prekini",
  restart: "Pokreni ponovo",
  stop: "Zaustavi",
  source: "Izvorni kod",
  idle: "Neaktivno",
  starting: "Pokretanje jezgre…",
  ready: "Spremno",
  running: "Izvršavanje…",
  paused: "Pauzirano",
  error: "Greška",
  stopped: "Jezgra je zaustavljena",
  pausedLine: "Pauzirano na liniji {line}",
  breakpoint: "Uključi/isključi tačku prekida",
  variables: "Varijable (kontekst User`)",
  empty: "Još nema definisanih varijabli",
  input: "Izračunaj izraz u jezgri",
  inspect: "Izračunaj izraz u pauziranom stanju"
}, mt = {
  run: "Çalıştır",
  continue: "Devam et",
  step: "Adım",
  abort: "İptal et",
  restart: "Yeniden başlat",
  stop: "Durdur",
  source: "Kaynak kodu",
  idle: "Boşta",
  starting: "Çekirdek başlatılıyor…",
  ready: "Hazır",
  running: "Çalışıyor…",
  paused: "Duraklatıldı",
  error: "Hata",
  stopped: "Çekirdek durduruldu",
  pausedLine: "{line}. satırda duraklatıldı",
  breakpoint: "Kesme noktasını aç/kapat",
  variables: "Değişkenler (User` bağlamı)",
  empty: "Henüz değişken tanımlanmadı",
  input: "Çekirdekte bir ifadeyi değerlendir",
  inspect: "Duraklatılmış durumda bir ifadeyi değerlendir"
}, $e = { en: He, zh: je, zht: De, ko: lt, de: ct, es: ut, fr: dt, da: pt, ja: ot, pl: ft, ru: gt, ar: ht, no: Me, br: Re, th: vt, bs: bt, tr: mt };
function yt(s) {
  const [e = "", ...c] = s.toLowerCase().replaceAll("_", "-").split("-");
  return e === "zh" ? c.some((i) => ["hant", "tw", "hk", "mo"].includes(i)) ? De : je : e === "pt" ? Re : e === "nb" || e === "nn" ? Me : Object.prototype.hasOwnProperty.call($e, e) ? $e[e] : He;
}
const kt = 4e3, wt = 64 * 1024, Ce = /* @__PURE__ */ new Set([
  "True",
  "False",
  "Null",
  "None",
  "All",
  "Automatic",
  "Infinity",
  "ComplexInfinity",
  "Indeterminate",
  "Pi",
  "E",
  "I",
  "Degree"
]), _e = /[\p{L}$][\p{L}\p{N}$`]*|`[\p{L}\p{N}$`]+/uy, ze = /(?:[0-9]+\^\^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]*)?|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+))(?:`{1,2}(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)?)?(?:\*\^[+-]?[0-9]+)?/y, Ne = /\\\[[a-zA-Z][a-zA-Z0-9]*\]/y, Et = /* @__PURE__ */ new Set([
  "Rule",
  "RuleDelayed",
  "Equal",
  "Unequal",
  "LessEqual",
  "GreaterEqual",
  "And",
  "Or",
  "Not",
  "Times",
  "InvisibleTimes",
  "Element",
  "NotElement",
  "Function",
  "Condition"
]);
function Ae(s) {
  return {
    offset: 0,
    commentDepth: s?.commentDepth ?? 0,
    string: s?.string ?? !1,
    escaped: s?.escaped ?? !1
  };
}
function Te(s, e, c, i = s.length) {
  const o = Math.min(s.length, i);
  for (; e.offset < o; ) {
    const u = e.offset;
    if (e.commentDepth || s.startsWith("(*", u)) {
      for (e.commentDepth || (e.commentDepth = 1, e.offset += 2); e.offset < o && e.commentDepth; )
        s.startsWith("(*", e.offset) ? (e.commentDepth++, e.offset += 2) : s.startsWith("*)", e.offset) ? (e.commentDepth--, e.offset += 2) : e.offset++;
      c?.("comment", u, e.offset);
      continue;
    }
    if (e.string || s[u] === '"') {
      for (e.string || (e.string = !0, e.offset++); e.offset < o && e.string; ) {
        const h = s[e.offset++];
        e.escaped ? e.escaped = !1 : h === "\\" ? e.escaped = !0 : h === '"' && (e.string = !1);
      }
      c?.("string", u, e.offset);
      continue;
    }
    Ne.lastIndex = u;
    const $ = Ne.exec(s)?.[0];
    if ($) {
      e.offset += $.length;
      const h = $.slice(2, -1);
      c?.(Et.has(h) ? "operator" : Ce.has(h) ? "constant" : "symbol", u, e.offset);
      continue;
    }
    ze.lastIndex = u;
    const C = ze.exec(s)?.[0];
    if (C) {
      e.offset += C.length, c?.("number", u, e.offset);
      continue;
    }
    _e.lastIndex = u;
    const l = _e.exec(s)?.[0];
    if (l) {
      e.offset += l.length;
      const h = l.split("`").at(-1) ?? l;
      let E = e.offset;
      for (; E < s.length && /\s/.test(s[E]); ) E++;
      c?.(
        Ce.has(h) || h.startsWith("$") ? "constant" : s[E] === "[" || /^[A-Z]/.test(h) ? "function" : "symbol",
        u,
        e.offset
      );
      continue;
    }
    const f = s[e.offset++];
    if (f === "_" || f === "#" || f === "%") {
      for (; s[e.offset] === f; ) e.offset++;
      if (f === "#" || f === "%") for (; /[0-9]/.test(s[e.offset] ?? ""); ) e.offset++;
      c?.("pattern", u, e.offset);
      continue;
    }
    c?.(
      "[]{}(),;".includes(f) ? "punctuation" : "+-*/^=<>!:?@&|~.\\".includes(f) ? "operator" : "plain",
      u,
      e.offset
    );
  }
  return e;
}
const St = 256, xt = 16 * 1024;
function $t(s, e) {
  const c = [0];
  for (let l = 0; l < e.length - 1; l++) c.push(c[l] + e[l].length + 1);
  const i = [0], o = Ae(), u = /* @__PURE__ */ new Map();
  let $ = 0, C = !1;
  return {
    get cachedLines() {
      return u.size;
    },
    get indexedLines() {
      return i.length;
    },
    advance(l = 64 * 1024) {
      if (C) return !0;
      const f = o.offset + Math.max(1, l);
      for (; $ < e.length && o.offset < f; ) {
        const h = c[$ + 1] ?? s.length;
        Te(s, o, void 0, Math.min(h, o.offset + xt, f)), o.offset >= h && ($++, $ < e.length && (i[$] = o.commentDepth * 4 + Number(o.string) * 2 + Number(o.escaped)));
      }
      return $ >= e.length;
    },
    tokens(l) {
      const f = e[l] ?? "";
      if (C || i[l] === void 0 || !f) return [{ kind: "plain", text: f }];
      const h = u.get(l);
      if (h)
        return u.delete(l), u.set(l, h), h;
      const E = i[l], I = Ae({
        commentDepth: Math.floor(E / 4),
        string: !!(E & 2),
        escaped: !!(E & 1)
      });
      I.offset = c[l];
      const A = [];
      let L = -1;
      return f.length > wt ? [{ kind: "plain", text: f }] : (Te(
        s,
        I,
        (D, Y, re) => {
          if (L >= 0) return;
          if (A.length >= kt) {
            L = Y;
            return;
          }
          const Q = s.slice(Y, re), q = A.at(-1);
          q?.kind === D ? q.text += Q : A.push({ kind: D, text: Q });
        },
        c[l] + f.length
      ), L >= 0 && A.push({ kind: "plain", text: s.slice(L, c[l] + f.length) }), u.set(l, A), u.size > St && u.delete(u.keys().next().value), A);
    },
    dispose() {
      C = !0, u.clear();
    }
  };
}
const G = 20, Ke = 8, Ct = 1e3, Ie = 12;
function _t(s, e, c) {
  const i = Math.floor(Math.max(0, e - Ke) / G), o = Math.min(Math.max(0, s - 1), Math.max(0, i - Ie)), u = Math.min(s, Math.max(o + 1, i + Math.ceil(Math.max(0, c) / G) + Ie + 1));
  return { start: o, end: u };
}
function zt(s, e) {
  return Math.max(0, Ke + (s - 0.5) * G - e / 2);
}
function Nt(s) {
  let e = 0;
  for (const c of s) {
    let i = 0;
    for (let o = 0; o < c.length; o++) i += c[o] === "	" ? 4 - i % 4 : 1;
    e = Math.max(e, i);
  }
  return e;
}
var At = /* @__PURE__ */ j("<ul class=oc-wls-variables-list>"), Tt = /* @__PURE__ */ j("<aside class=oc-wls-variables><div class=oc-wls-variables-head>"), It = /* @__PURE__ */ j("<section class=oc-wls-root><header class=oc-wls-toolbar><span class=oc-wls-status><span class=oc-wls-status-dot></span></span><div class=oc-wls-actions></div></header><div class=oc-wls-body><div class=oc-wls-code><div class=oc-wls-code-window></div></div></div><footer class=oc-wls-console><div class=oc-wls-console-entries></div><div class=oc-wls-input-row><span class=oc-wls-prompt></span><input class=oc-wls-input>"), Lt = /* @__PURE__ */ j("<div class=oc-wls-line><button type=button class=oc-wls-gutter><span class=oc-wls-line-number></span><span class=oc-wls-bp-dot></span></button><pre class=oc-wls-line-text>"), Ot = /* @__PURE__ */ j("<span>"), Pt = /* @__PURE__ */ j("<div class=oc-wls-variables-empty>"), Ht = /* @__PURE__ */ j("<li><span class=oc-wls-var-name></span><span class=oc-wls-var-value>"), jt = /* @__PURE__ */ j("<div class=oc-wls-entry>");
const Ue = "local.wls-repl", Dt = `${Ue}/message`, [x, Le] = w({}), Oe = 500;
let Mt = 0;
function Rt(s) {
  return s.split("; ").filter((e) => e !== "").map((e) => {
    const c = e.replace(/^HoldPattern\[/, ""), i = c.indexOf("] :> ");
    if (i === -1) return c;
    const o = c.slice(0, i), u = c.slice(i + 5);
    return `${o} ${o.includes("[") ? ":=" : "="} ${u}`;
  }).join("; ");
}
function Kt(s, e) {
  for (const c of [" = ", " := "]) {
    const i = s + c;
    if (e.startsWith(i)) return e.slice(i.length);
  }
  return e;
}
function Ut(s) {
  const [e, c] = w(document.documentElement.lang || "en"), i = U(() => yt(e()));
  xe(() => {
    const n = new MutationObserver(() => c(document.documentElement.lang || "en"));
    n.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["lang"]
    }), x().log?.info(`wls viewer layout mounted ${JSON.stringify({
      path: s.file.absolutePath,
      pinnedInput: !0
    })}`), ne(() => n.disconnect());
  }), K(() => x().log?.info(`wls viewer locale ${e()}`));
  const o = () => s.file.absolutePath, [u, $] = w(s.text() ?? ""), [C, l] = w("unknown"), [f, h] = w(void 0), [E, I] = w(void 0), [A, L] = w([]), [D, Y] = w([]), [re, Q] = w([]), [q, ue] = w(""), [de, ee] = w(!1);
  let se, _;
  const [Ve, ae] = w(0), [pe, fe] = w(600), O = U(() => u().split(`
`)), M = U(() => O().length > Ct), Be = U(() => M() ? Nt(O()) : 0), B = U(() => M() ? _t(O().length, Ve(), pe()) : {
    start: 0,
    end: O().length
  }, void 0, {
    equals: (n, a) => n.start === a.start && n.end === a.end
  }), [Ge, qe] = w(0), ge = U(() => $t(u(), O()));
  K(() => {
    const n = ge();
    let a;
    const g = () => {
      const m = n.advance();
      qe((z) => z + 1), m || (a = setTimeout(g, 0));
    };
    g(), ne(() => {
      clearTimeout(a), n.dispose();
    });
  });
  const We = U(() => (Ge(), O().slice(B().start, B().end).map((n, a) => ({
    text: n,
    number: B().start + a + 1,
    tokens: ge().tokens(B().start + a)
  }))));
  xe(() => {
    if (!_) return;
    const n = new ResizeObserver(() => fe(_.clientHeight));
    n.observe(_), fe(_.clientHeight), ne(() => n.disconnect());
  }), K(() => {
    const n = O().length;
    x().log?.info(`wls viewer indexed ${JSON.stringify({
      path: o(),
      lines: n,
      virtual: M()
    })}`), _ && ae(_.scrollTop);
  });
  const b = (n, a) => {
    Q((g) => {
      const m = [...g, {
        id: ++Mt,
        kind: n,
        text: a
      }];
      return m.length > Oe ? m.slice(m.length - Oe) : m;
    });
  }, he = async () => {
    try {
      x().log?.info(`wls viewer reading ${o()}`);
      const n = await s.readText();
      typeof n == "string" && ($(n), x().log?.info(`wls viewer read complete ${JSON.stringify({
        path: o(),
        characters: n.length
      })}`));
    } catch (n) {
      x().log?.warn(`wls viewer read failed; using cached text ${o()}: ${String(n)}`);
    }
  };
  K(() => {
    s.revision?.(), it(() => void he());
  }), K(() => {
    const n = se;
    n && (n.scrollTop = n.scrollHeight);
  }), K(() => {
    const n = E();
    n === void 0 || !_ || (M() ? (_.scrollTop = zt(n, pe()), ae(_.scrollTop)) : _.querySelector(`[data-line="${n}"]`)?.scrollIntoView({
      block: "center"
    }), x().log?.info(`wls viewer pause navigation ${JSON.stringify({
      path: o(),
      line: n,
      virtual: M()
    })}`));
  });
  const Fe = (n) => {
    Y((a) => a.includes(n) ? a.filter((g) => g !== n) : [...a, n]);
  }, W = async (n, a) => {
    const g = x().rpc;
    if (!g) {
      b("err", "server bridge not available in this host");
      return;
    }
    try {
      x().log?.info(`wls viewer rpc request ${JSON.stringify({
        method: n,
        path: o()
      })}`);
      const m = await g.call(n, a);
      return x().log?.info(`wls viewer rpc complete ${JSON.stringify({
        method: n,
        path: o()
      })}`), m;
    } catch (m) {
      const z = m instanceof Error ? m.message : String(m);
      x().log?.warn(`wls viewer rpc failed ${n}: ${z}`), b("err", `${n}: ${z}`);
      return;
    }
  }, Je = async () => {
    ee(!0);
    try {
      await he(), (await W("kernel.run", {
        path: o(),
        code: u(),
        breakpoints: D()
      }))?.started && (l("running"), I(void 0), b("info", `run started (${D().length} breakpoint${D().length === 1 ? "" : "s"})`));
    } finally {
      ee(!1);
    }
  }, ie = (n) => async () => {
    await W("kernel." + n, {
      path: o()
    });
  }, Ze = async () => {
    ee(!0);
    try {
      const n = await W("kernel.restart", {
        path: o()
      });
      n?.status && (l(n.status), I(void 0), L([]), b("info", "kernel restarted; user variables were reset"));
    } finally {
      ee(!1);
    }
  }, Xe = async () => {
    await W("kernel.stop", {
      path: o()
    });
  }, Ye = async () => {
    const n = q().trim();
    if (!n) return;
    ue(""), b("input", n);
    const a = await W("kernel.eval", {
      path: o(),
      code: n
    });
    a?.queued && b("pending", `awaiting result (${a.id})`);
  }, Qe = (n) => {
    if (!n || typeof n != "object") return;
    const a = n;
    if (a.path === o()) {
      if (x().log?.info(`wls viewer message ${JSON.stringify({
        path: a.path,
        kind: a.kind,
        type: a.type
      })}`), a.kind === "output") {
        b("out", a.text ?? "");
        return;
      }
      if (a.kind === "stderr") {
        b("err", a.text ?? "");
        return;
      }
      if (a.kind === "protocol")
        switch (a.type) {
          case "ready":
            l("ready"), h(a.version), b("info", `kernel ready (${a.version ?? "unknown version"})`);
            break;
          case "paused":
            l("paused"), I(a.line), L(Object.entries(a.variables ?? {}).filter(([, g]) => g !== "").map(([g, m]) => [g, Kt(g, Rt(m))])), b("info", `paused at line ${a.line}`);
            break;
          case "done":
            l("ready"), I(void 0), L([]), b("info", a.aborted === !0 ? "run aborted" : "run finished");
            break;
          case "result":
            b("result", `[line ${a.line}] ${a.text ?? ""}`);
            break;
          case "error":
            b("err", a.text ?? "evaluation error");
            break;
          case "inspect-result":
          case "eval-result":
            b("result", `${a.ok === !1 ? "error: " : ""}${a.text ?? ""}`);
            break;
          case "bridge-error":
            l("error"), b("err", a.text ?? "bridge error");
            break;
          case "kernel-exit":
            l("stopped"), I(void 0), b("info", `kernel exited${a.code !== void 0 ? ` (code ${a.code})` : ""}`);
            break;
          case "kernel-error":
            l("error"), b("err", a.text ?? "kernel failed to start — is wolframscript installed and on PATH?");
            break;
        }
    }
  };
  K(() => {
    const n = x().events;
    if (!n) return;
    const a = n.on(Dt, Qe);
    ne(() => a.dispose());
  });
  const et = () => {
    switch (C()) {
      case "unknown":
        return i().idle;
      case "starting":
        return i().starting;
      case "ready":
        return f() ? `${i().ready} (${f()})` : i().ready;
      case "running":
        return i().running;
      case "paused":
        return E() !== void 0 ? i().pausedLine.replace("{line}", String(E())) : i().paused;
      case "error":
        return i().error;
      case "stopped":
        return i().stopped;
    }
  }, P = () => C() === "paused";
  return (() => {
    var n = It(), a = n.firstChild, g = a.firstChild, m = g.firstChild, z = g.nextSibling, oe = a.nextSibling, F = oe.firstChild, ve = F.firstChild, tt = oe.nextSibling, te = tt.firstChild, nt = te.nextSibling, be = nt.firstChild, J = be.nextSibling;
    p(g, et, null), p(z, k(V, {
      size: "small",
      variant: "secondary",
      get disabled() {
        return de() || P() || C() === "running";
      },
      onClick: () => void Je(),
      get children() {
        return i().run;
      }
    }), null), p(z, k(V, {
      size: "small",
      variant: "secondary",
      get disabled() {
        return !P();
      },
      onClick: () => void ie("continue")(),
      get children() {
        return i().continue;
      }
    }), null), p(z, k(V, {
      size: "small",
      variant: "secondary",
      get disabled() {
        return !P();
      },
      onClick: () => void ie("step")(),
      get children() {
        return i().step;
      }
    }), null), p(z, k(V, {
      size: "small",
      variant: "ghost",
      get disabled() {
        return !P();
      },
      onClick: () => void ie("abort")(),
      get children() {
        return i().abort;
      }
    }), null), p(z, k(V, {
      size: "small",
      variant: "ghost",
      get disabled() {
        return de();
      },
      onClick: () => void Ze(),
      get children() {
        return i().restart;
      }
    }), null), p(z, k(V, {
      size: "small",
      variant: "ghost",
      onClick: () => void Xe(),
      get children() {
        return i().stop;
      }
    }), null), p(z, k(V, {
      size: "small",
      variant: "ghost",
      get onClick() {
        return s.showSource;
      },
      get children() {
        return i().source;
      }
    }), null), F.addEventListener("scroll", (d) => ae(d.currentTarget.scrollTop));
    var me = _;
    typeof me == "function" ? Se(me, F) : _ = F, p(ve, k(at, {
      get each() {
        return We();
      },
      children: (d) => {
        const y = () => d().number;
        return (() => {
          var S = Lt(), N = S.firstChild, Z = N.firstChild, R = N.nextSibling;
          return N.$$click = () => Fe(y()), p(Z, y), p(R, k(ce, {
            get when() {
              return d().text !== "";
            },
            fallback: " ",
            get children() {
              return k(le, {
                get each() {
                  return d().tokens;
                },
                children: (v) => (() => {
                  var H = Ot();
                  return p(H, () => v.text), X(() => T(H, "data-token", v.kind)), H;
                })()
              });
            }
          })), X((v) => {
            var H = y(), ke = E() === y(), we = !!D().includes(y()), Ee = i().breakpoint;
            return H !== v.e && T(S, "data-line", v.e = H), ke !== v.t && S.classList.toggle("is-paused", v.t = ke), we !== v.a && N.classList.toggle("has-breakpoint", v.a = we), Ee !== v.o && T(N, "title", v.o = Ee), v;
          }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0
          }), S;
        })();
      }
    })), p(oe, k(ce, {
      get when() {
        return P();
      },
      get children() {
        var d = Tt(), y = d.firstChild;
        return p(y, () => i().variables), p(d, k(ce, {
          get when() {
            return A().length > 0;
          },
          get fallback() {
            return (() => {
              var S = Pt();
              return p(S, () => i().empty), S;
            })();
          },
          get children() {
            var S = At();
            return p(S, k(le, {
              get each() {
                return A();
              },
              children: ([N, Z]) => (() => {
                var R = Ht(), v = R.firstChild, H = v.nextSibling;
                return p(v, N), p(H, Z), R;
              })()
            })), S;
          }
        }), null), d;
      }
    }), null);
    var ye = se;
    return typeof ye == "function" ? Se(ye, te) : se = te, p(te, k(le, {
      get each() {
        return re();
      },
      children: (d) => (() => {
        var y = jt();
        return p(y, () => d.text), X(() => T(y, "data-kind", d.kind)), y;
      })()
    })), p(be, () => P() ? "inspect>" : "In>"), J.$$keydown = (d) => {
      d.key === "Enter" && Ye();
    }, J.$$input = (d) => ue(d.currentTarget.value), X((d) => {
      var y = C(), S = C(), N = M(), Z = M() ? {
        "padding-top": `${B().start * G}px`,
        "padding-bottom": `${(O().length - B().end) * G}px`,
        "min-width": `calc(${Be()}ch + 64px)`,
        "--wls-line-height": `${G}px`
      } : void 0, R = P() ? i().inspect : i().input, v = P() ? i().inspect : i().input;
      return y !== d.e && T(g, "data-status", d.e = y), S !== d.t && T(m, "data-status", d.t = S), N !== d.a && T(F, "data-virtual", d.a = N), d.o = st(ve, Z, d.o), R !== d.i && T(J, "aria-label", d.i = R), v !== d.n && T(J, "placeholder", d.n = v), d;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0,
      i: void 0,
      n: void 0
    }), X(() => J.value = q()), n;
  })();
}
const Vt = {
  id: Ue,
  apiVersion: 1,
  activate(s) {
    s.log.info("activating wls-repl viewer"), Le({
      rpc: s.rpc,
      events: s.events,
      log: s.log
    });
    const e = s.fileViewers.register({
      id: "wls-repl",
      component: Ut
    });
    return () => {
      e.dispose(), Le({});
    };
  }
};
rt(["input", "keydown", "click"]);
export {
  Ut as WlsViewer,
  Vt as default,
  Rt as prettyDefinition,
  Kt as stripNamePrefix
};
