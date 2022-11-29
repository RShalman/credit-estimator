var CreditEstimator = (function () {
  'use strict';
  function I() {}
  function oe(e) {
    return e();
  }
  function he() {
    return Object.create(null);
  }
  function M(e) {
    e.forEach(oe);
  }
  function de(e) {
    return typeof e == 'function';
  }
  function me(e, t) {
    return e != e ? t == t : e !== t || (e && typeof e == 'object') || typeof e == 'function';
  }
  let U;
  function _e(e, t) {
    return U || (U = document.createElement('a')), (U.href = t), e === U.href;
  }
  function We(e) {
    return Object.keys(e).length === 0;
  }
  function be(e, ...t) {
    if (e == null) return I;
    const n = e.subscribe(...t);
    return n.unsubscribe ? () => n.unsubscribe() : n;
  }
  function pe(e) {
    let t;
    return be(e, (n) => (t = n))(), t;
  }
  function X(e, t, n) {
    e.$$.on_destroy.push(be(t, n));
  }
  function u(e, t) {
    e.appendChild(t);
  }
  function j(e, t, n) {
    e.insertBefore(t, n || null);
  }
  function R(e) {
    e.parentNode.removeChild(e);
  }
  function W(e, t) {
    for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
  }
  function g(e) {
    return document.createElement(e);
  }
  function z(e) {
    return document.createTextNode(e);
  }
  function T() {
    return z(' ');
  }
  function Ye() {
    return z('');
  }
  function V(e, t, n, l) {
    return e.addEventListener(t, n, l), () => e.removeEventListener(t, n, l);
  }
  function m(e, t, n) {
    n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
  }
  function ge(e) {
    return e === '' ? null : +e;
  }
  function Ke(e) {
    return Array.from(e.childNodes);
  }
  function Z(e, t) {
    (t = '' + t), e.wholeText !== t && (e.data = t);
  }
  function ve(e, t) {
    e.value = t == null ? '' : t;
  }
  function Ge(e) {
    const t = {};
    for (const n of e) t[n.name] = n.value;
    return t;
  }
  let re;
  function Y(e) {
    re = e;
  }
  const K = [],
    se = [],
    P = [],
    ke = [],
    Je = Promise.resolve();
  let ie = !1;
  function Qe() {
    ie || ((ie = !0), Je.then(we));
  }
  function ce(e) {
    P.push(e);
  }
  const ue = new Set();
  let ee = 0;
  function we() {
    const e = re;
    do {
      for (; ee < K.length; ) {
        const t = K[ee];
        ee++, Y(t), Ue(t.$$);
      }
      for (Y(null), K.length = 0, ee = 0; se.length; ) se.pop()();
      for (let t = 0; t < P.length; t += 1) {
        const n = P[t];
        ue.has(n) || (ue.add(n), n());
      }
      P.length = 0;
    } while (K.length);
    for (; ke.length; ) ke.pop()();
    (ie = !1), ue.clear(), Y(e);
  }
  function Ue(e) {
    if (e.fragment !== null) {
      e.update(), M(e.before_update);
      const t = e.dirty;
      (e.dirty = [-1]), e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(ce);
    }
  }
  const Xe = new Set();
  function Ze(e, t) {
    e && e.i && (Xe.delete(e), e.i(t));
  }
  function Pe(e, t, n, l) {
    const { fragment: o, on_mount: r, on_destroy: i, after_update: h } = e.$$;
    o && o.m(t, n),
      l ||
        ce(() => {
          const c = r.map(oe).filter(de);
          i ? i.push(...c) : M(c), (e.$$.on_mount = []);
        }),
      h.forEach(ce);
  }
  function et(e, t) {
    const n = e.$$;
    n.fragment !== null &&
      (M(n.on_destroy), n.fragment && n.fragment.d(t), (n.on_destroy = n.fragment = null), (n.ctx = []));
  }
  function tt(e, t) {
    e.$$.dirty[0] === -1 && (K.push(e), Qe(), e.$$.dirty.fill(0)), (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
  }
  function nt(e, t, n, l, o, r, i, h = [-1]) {
    const c = re;
    Y(e);
    const s = (e.$$ = {
      fragment: null,
      ctx: null,
      props: r,
      update: I,
      not_equal: o,
      bound: he(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(t.context || (c ? c.$$.context : [])),
      callbacks: he(),
      dirty: h,
      skip_bound: !1,
      root: t.target || c.$$.root,
    });
    i && i(s.root);
    let b = !1;
    if (
      ((s.ctx = n
        ? n(e, t.props || {}, (_, d, ...v) => {
            const k = v.length ? v[0] : d;
            return (
              s.ctx && o(s.ctx[_], (s.ctx[_] = k)) && (!s.skip_bound && s.bound[_] && s.bound[_](k), b && tt(e, _)), d
            );
          })
        : []),
      s.update(),
      (b = !0),
      M(s.before_update),
      (s.fragment = l ? l(s.ctx) : !1),
      t.target)
    ) {
      if (t.hydrate) {
        const _ = Ke(t.target);
        s.fragment && s.fragment.l(_), _.forEach(R);
      } else s.fragment && s.fragment.c();
      t.intro && Ze(e.$$.fragment), Pe(e, t.target, t.anchor, t.customElement), we();
    }
    Y(c);
  }
  let ye;
  typeof HTMLElement == 'function' &&
    (ye = class extends HTMLElement {
      constructor() {
        super(), this.attachShadow({ mode: 'open' });
      }
      connectedCallback() {
        const { on_mount: e } = this.$$;
        this.$$.on_disconnect = e.map(oe).filter(de);
        for (const t in this.$$.slotted) this.appendChild(this.$$.slotted[t]);
      }
      attributeChangedCallback(e, t, n) {
        this[e] = n;
      }
      disconnectedCallback() {
        M(this.$$.on_disconnect);
      }
      $destroy() {
        et(this, 1), (this.$destroy = I);
      }
      $on(e, t) {
        const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return (
          n.push(t),
          () => {
            const l = n.indexOf(t);
            l !== -1 && n.splice(l, 1);
          }
        );
      }
      $set(e) {
        this.$$set && !We(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
      }
    });
  const O = [];
  function G(e, t = I) {
    let n;
    const l = new Set();
    function o(h) {
      if (me(e, h) && ((e = h), n)) {
        const c = !O.length;
        for (const s of l) s[1](), O.push(s, e);
        if (c) {
          for (let s = 0; s < O.length; s += 2) O[s][0](O[s + 1]);
          O.length = 0;
        }
      }
    }
    function r(h) {
      o(h(e));
    }
    function i(h, c = I) {
      const s = [h, c];
      return (
        l.add(s),
        l.size === 1 && (n = t(o) || I),
        h(e),
        () => {
          l.delete(s), l.size === 0 && (n(), (n = null));
        }
      );
    }
    return { set: o, update: r, subscribe: i };
  }
  const $e = () => [
      { name: 'creditSum', value: null, type: 'number', label: 'Credit sum', placeholder: 'Enter credit sum' },
      {
        name: 'creditTimeInMonths',
        value: null,
        type: 'number',
        label: 'Amount of months',
        placeholder: 'Enter num of months',
      },
      { name: 'interestRate', value: null, type: 'number', label: 'Interest rate', placeholder: 'Enter %' },
      {
        name: 'minManualPayment',
        value: null,
        type: 'number',
        label: 'Minimal repayment',
        placeholder: 'Enter min sum of repayment / month',
      },
    ],
    J = G($e()),
    Ee = G(!1);
  J.subscribe((e) => {
    Ee.set(e.every(({ name: t, value: n }) => (t === 'minManualPayment' ? !0 : !!n)));
  });
  function lt() {
    J.set($e());
  }
  function ot() {
    lt(), it();
  }
  const rt = ['creditSum', 'amountToRepay', 'generalPayment'],
    te = G(null);
  function Ae() {
    const {
      creditSum: e,
      creditTimeInMonths: t,
      interestRate: n,
      minManualPayment: l,
    } = pe(J).reduce((o, r) => ({ ...o, [r.name]: r.value }), {});
    st(e, t, n, l);
  }
  function st(e, t, n, l) {
    const o = ct(e, n, t),
      r = Te({ creditSum: e, creditTimeInMonths: t, interestRate: n, annuityPayment: o, minManualPayment: l });
    te.set(r);
  }
  function it() {
    te.set(null);
  }
  function ct(e, t, n) {
    const l = t / 100 / 12;
    return +(e * ((l * Math.pow(1 + l, n)) / (Math.pow(1 + l, n) - 1))).toFixed(2);
  }
  function ut(e, t) {
    return ((e / 100) * t) / 12;
  }
  function Te({
    table: e = { items: [], headers: rt },
    creditSum: t,
    creditTimeInMonths: n,
    interestRate: l,
    minManualPayment: o,
    annuityPayment: r,
  }) {
    if ((typeof o == 'number' && t > o) || t > r) {
      const i = !!o && o >= r ? o : r,
        h = t + ut(t, l) - (o != null ? o : i),
        c = +(h > 0 ? h : 0).toFixed(2);
      return c === 0
        ? e
        : (e.items.push({ creditSum: c, amountToRepay: c < i ? c : i, generalPayment: c < i ? c : r }),
          Te({
            table: e,
            creditSum: c,
            creditTimeInMonths: n - 1,
            interestRate: l,
            minManualPayment: o,
            annuityPayment: r,
          }));
    } else return e;
  }
  const ne = 'data-theme',
    ae = () => {
      var n, l;
      const e = localStorage == null ? void 0 : localStorage.getItem(ne),
        t = (n = document == null ? void 0 : document.documentElement) == null ? void 0 : n.getAttribute(ne);
      return e && e !== t && fe(e), (l = e != null ? e : t) != null ? l : !1;
    },
    fe = (e) => {
      var t;
      (t = document == null ? void 0 : document.documentElement) == null || t.setAttribute(ne, e),
        localStorage == null || localStorage.setItem(ne, e);
    },
    at = () => {
      let e = ae();
      fe(e && e === 'light' ? 'dark' : 'light');
    },
    Ce = G(ae()),
    Se = G(pe(Ce) === 'light');
  function ft() {
    at(), Ce.set(ae());
  }
  const le = (e, t) => (e ? ' ' + t : ''),
    ht = 'font-sans overflow-x-hidden w-full h-full',
    dt = 'bg-green-200 dark:bg-teal-600 min-h-screen w-full',
    mt = 'container mx-auto w-full h-full p-10',
    _t = 'w-11/12 sm:w-6/12 md:w-5/12 max-w-screen-md mx-auto',
    Le = 'fill-current w-10 h-10',
    bt = 'container mx-auto flex items-center justify-center flex-wrap flex-row',
    pt = 'flex-auto w-full mx-auto my-2 [&>div]:justify-center [&>div]:items-center',
    gt = 'input input-primary input-bordered dark:text-white w-full',
    vt = 'max-w-full flex flex-wrap flex-row [&>button]:mx-5 justify-center align-center',
    Fe = 'btn btn-primary dark:btn-default dark:hover:btn-success mt-10 w-full btn-md sm:btn-md md:btn-md lg:btn-md',
    kt =
      'btn btn-neutral hover:btn-error text-black dark:text-white dark:hover:text-black mt-12 w-full btn-md sm:btn-md md:btn-md lg:btn-md';
  function xe(e, t, n) {
    const l = e.slice();
    return (l[9] = t[n]), l;
  }
  function Ie(e, t, n) {
    const l = e.slice();
    return (l[12] = t[n]), (l[14] = n), l;
  }
  function je(e, t, n) {
    const l = e.slice();
    return (l[9] = t[n]), l;
  }
  function Re(e, t, n) {
    const l = e.slice();
    return (l[9] = t[n]), l;
  }
  function ze(e, t, n) {
    const l = e.slice();
    return (
      (l[19] = t[n].name),
      (l[20] = t[n].value),
      (l[21] = t[n].type),
      (l[22] = t[n].label),
      (l[23] = t[n].placeholder),
      (l[24] = t),
      (l[25] = n),
      l
    );
  }
  function He(e) {
    let t,
      n = e[3],
      l = [];
    for (let o = 0; o < n.length; o += 1) l[o] = Ne(ze(e, n, o));
    return {
      c() {
        for (let o = 0; o < l.length; o += 1) l[o].c();
        t = Ye();
      },
      m(o, r) {
        for (let i = 0; i < l.length; i += 1) l[i].m(o, r);
        j(o, t, r);
      },
      p(o, r) {
        if (r & 8) {
          n = o[3];
          let i;
          for (i = 0; i < n.length; i += 1) {
            const h = ze(o, n, i);
            l[i] ? l[i].p(h, r) : ((l[i] = Ne(h)), l[i].c(), l[i].m(t.parentNode, t));
          }
          for (; i < l.length; i += 1) l[i].d(1);
          l.length = n.length;
        }
      },
      d(o) {
        W(l, o), o && R(t);
      },
    };
  }
  function Ne(e) {
    let t,
      n,
      l,
      o,
      r = e[22] + '',
      i,
      h,
      c,
      s,
      b,
      _,
      d,
      v,
      k;
    function w() {
      e[7].call(s, e[24], e[25]);
    }
    return {
      c() {
        (t = g('div')),
          (n = g('div')),
          (l = g('label')),
          (o = g('span')),
          (i = z(r)),
          (c = T()),
          (s = g('input')),
          (d = T()),
          m(o, 'class', 'text-black dark:text-white'),
          m(l, 'for', (h = e[22])),
          m(l, 'class', 'label self-start'),
          m(s, 'id', (b = e[22])),
          m(s, 'type', 'number'),
          m(s, 'placeholder', (_ = e[23])),
          m(s, 'class', gt),
          m(n, 'class', 'form-control'),
          m(t, 'class', pt);
      },
      m(y, p) {
        j(y, t, p),
          u(t, n),
          u(n, l),
          u(l, o),
          u(o, i),
          u(n, c),
          u(n, s),
          ve(s, e[20]),
          u(t, d),
          v || ((k = V(s, 'input', w)), (v = !0));
      },
      p(y, p) {
        (e = y),
          p & 8 && r !== (r = e[22] + '') && Z(i, r),
          p & 8 && h !== (h = e[22]) && m(l, 'for', h),
          p & 8 && b !== (b = e[22]) && m(s, 'id', b),
          p & 8 && _ !== (_ = e[23]) && m(s, 'placeholder', _),
          p & 8 && ge(s.value) !== e[20] && ve(s, e[20]);
      },
      d(y) {
        y && R(t), (v = !1), k();
      },
    };
  }
  function qe(e) {
    var q, B, Q;
    let t,
      n,
      l,
      o,
      r,
      i,
      h,
      c,
      s,
      b,
      _,
      d,
      v,
      k = (q = e[4]) == null ? void 0 : q.headers,
      w = [];
    for (let a = 0; a < k.length; a += 1) w[a] = Be(Re(e, k, a));
    let y = (B = e[4]) == null ? void 0 : B.items,
      p = [];
    for (let a = 0; a < y.length; a += 1) p[a] = Me(Ie(e, y, a));
    let H = (Q = e[4]) == null ? void 0 : Q.headers,
      $ = [];
    for (let a = 0; a < H.length; a += 1) $[a] = Ve(xe(e, H, a));
    return {
      c() {
        (t = g('div')), (n = g('table')), (l = g('thead')), (o = g('tr')), (r = g('th')), (i = T());
        for (let a = 0; a < w.length; a += 1) w[a].c();
        (h = T()), (c = g('tbody'));
        for (let a = 0; a < p.length; a += 1) p[a].c();
        (s = T()), (b = g('tfoot')), (_ = g('tr')), (d = g('th')), (v = T());
        for (let a = 0; a < $.length; a += 1) $[a].c();
        m(n, 'class', 'table table-normal w-full'), m(t, 'class', 'overflow-x-auto');
      },
      m(a, L) {
        j(a, t, L), u(t, n), u(n, l), u(l, o), u(o, r), u(o, i);
        for (let E = 0; E < w.length; E += 1) w[E].m(o, null);
        u(n, h), u(n, c);
        for (let E = 0; E < p.length; E += 1) p[E].m(c, null);
        u(n, s), u(n, b), u(b, _), u(_, d), u(_, v);
        for (let E = 0; E < $.length; E += 1) $[E].m(_, null);
      },
      p(a, L) {
        var E, x, D;
        if (L & 16) {
          k = (E = a[4]) == null ? void 0 : E.headers;
          let f;
          for (f = 0; f < k.length; f += 1) {
            const F = Re(a, k, f);
            w[f] ? w[f].p(F, L) : ((w[f] = Be(F)), w[f].c(), w[f].m(o, null));
          }
          for (; f < w.length; f += 1) w[f].d(1);
          w.length = k.length;
        }
        if (L & 16) {
          y = (x = a[4]) == null ? void 0 : x.items;
          let f;
          for (f = 0; f < y.length; f += 1) {
            const F = Ie(a, y, f);
            p[f] ? p[f].p(F, L) : ((p[f] = Me(F)), p[f].c(), p[f].m(c, null));
          }
          for (; f < p.length; f += 1) p[f].d(1);
          p.length = y.length;
        }
        if (L & 16) {
          H = (D = a[4]) == null ? void 0 : D.headers;
          let f;
          for (f = 0; f < H.length; f += 1) {
            const F = xe(a, H, f);
            $[f] ? $[f].p(F, L) : (($[f] = Ve(F)), $[f].c(), $[f].m(_, null));
          }
          for (; f < $.length; f += 1) $[f].d(1);
          $.length = H.length;
        }
      },
      d(a) {
        a && R(t), W(w, a), W(p, a), W($, a);
      },
    };
  }
  function Be(e) {
    let t,
      n = e[9] + '',
      l;
    return {
      c() {
        (t = g('th')), (l = z(n));
      },
      m(o, r) {
        j(o, t, r), u(t, l);
      },
      p(o, r) {
        r & 16 && n !== (n = o[9] + '') && Z(l, n);
      },
      d(o) {
        o && R(t);
      },
    };
  }
  function De(e) {
    let t,
      n = e[12][e[9]] + '',
      l;
    return {
      c() {
        (t = g('td')), (l = z(n));
      },
      m(o, r) {
        j(o, t, r), u(t, l);
      },
      p(o, r) {
        r & 16 && n !== (n = o[12][o[9]] + '') && Z(l, n);
      },
      d(o) {
        o && R(t);
      },
    };
  }
  function Me(e) {
    var s;
    let t,
      n,
      l = e[14] + 1 + '',
      o,
      r,
      i,
      h = (s = e[4]) == null ? void 0 : s.headers,
      c = [];
    for (let b = 0; b < h.length; b += 1) c[b] = De(je(e, h, b));
    return {
      c() {
        (t = g('tr')), (n = g('th')), (o = z(l)), (r = T());
        for (let b = 0; b < c.length; b += 1) c[b].c();
        i = T();
      },
      m(b, _) {
        j(b, t, _), u(t, n), u(n, o), u(t, r);
        for (let d = 0; d < c.length; d += 1) c[d].m(t, null);
        u(t, i);
      },
      p(b, _) {
        var d;
        if (_ & 16) {
          h = (d = b[4]) == null ? void 0 : d.headers;
          let v;
          for (v = 0; v < h.length; v += 1) {
            const k = je(b, h, v);
            c[v] ? c[v].p(k, _) : ((c[v] = De(k)), c[v].c(), c[v].m(t, i));
          }
          for (; v < c.length; v += 1) c[v].d(1);
          c.length = h.length;
        }
      },
      d(b) {
        b && R(t), W(c, b);
      },
    };
  }
  function Ve(e) {
    let t,
      n = e[9] + '',
      l;
    return {
      c() {
        (t = g('th')), (l = z(n));
      },
      m(o, r) {
        j(o, t, r), u(t, l);
      },
      p(o, r) {
        r & 16 && n !== (n = o[9] + '') && Z(l, n);
      },
      d(o) {
        o && R(t);
      },
    };
  }
  function wt(e) {
    let t,
      n,
      l,
      o,
      r,
      i,
      h,
      c,
      s,
      b,
      _,
      d,
      v,
      k,
      w,
      y,
      p,
      H,
      $,
      q,
      B,
      Q,
      a,
      L,
      E,
      x,
      D,
      f,
      F,
      C = e[3] && He(e),
      S = e[4] && qe(e);
    return {
      c() {
        (t = g('main')),
          (n = g('section')),
          (l = g('div')),
          (o = g('div')),
          (r = g('label')),
          (i = g('input')),
          (h = T()),
          (c = g('img')),
          (b = T()),
          (_ = g('img')),
          (v = T()),
          (k = g('form')),
          C && C.c(),
          (w = T()),
          (y = g('div')),
          (p = g('button')),
          (H = z('Submit')),
          (Q = T()),
          (a = g('button')),
          (L = z('Reset')),
          (E = T()),
          (x = g('section')),
          S && S.c(),
          (this.c = I),
          m(i, 'type', 'checkbox'),
          _e(c.src, (s = '/src/assets/sun.svg')) || m(c, 'src', s),
          m(c, 'class', `swap-on ${Le}`),
          m(c, 'alt', 'sun'),
          _e(_.src, (d = '/src/assets/moon.svg')) || m(_, 'src', d),
          m(_, 'class', `swap-off ${Le}`),
          m(_, 'alt', 'moon'),
          m(r, 'class', 'swap swap-rotate'),
          m(p, 'class', ($ = `${Fe}${le(!e[1], 'btn-disabled')}`)),
          m(p, 'aria-disabled', (q = !e[1])),
          (p.disabled = B = !e[1]),
          m(a, 'class', kt),
          m(y, 'class', vt),
          m(k, 'class', bt),
          m(o, 'class', _t),
          m(l, 'class', mt),
          m(n, 'class', dt),
          m(x, 'class', (D = `h-screen overflow-auto w-full${le(!e[4], 'hidden')}`)),
          m(t, 'class', ht);
      },
      m(A, N) {
        j(A, t, N),
          u(t, n),
          u(n, l),
          u(l, o),
          u(o, r),
          u(r, i),
          (i.checked = e[2]),
          u(r, h),
          u(r, c),
          u(r, b),
          u(r, _),
          u(o, v),
          u(o, k),
          C && C.m(k, null),
          u(k, w),
          u(k, y),
          u(y, p),
          u(p, H),
          u(y, Q),
          u(y, a),
          u(a, L),
          u(t, E),
          u(t, x),
          S && S.m(x, null),
          e[8](x),
          f ||
            ((F = [
              V(i, 'change', e[6]),
              V(i, 'click', ft),
              V(p, 'click', Ae),
              V(a, 'click', ot),
              V(k, 'submit', e[5]),
            ]),
            (f = !0));
      },
      p(A, [N]) {
        N & 4 && (i.checked = A[2]),
          A[3] ? (C ? C.p(A, N) : ((C = He(A)), C.c(), C.m(k, w))) : C && (C.d(1), (C = null)),
          N & 2 && $ !== ($ = `${Fe}${le(!A[1], 'btn-disabled')}`) && m(p, 'class', $),
          N & 2 && q !== (q = !A[1]) && m(p, 'aria-disabled', q),
          N & 2 && B !== (B = !A[1]) && (p.disabled = B),
          A[4] ? (S ? S.p(A, N) : ((S = qe(A)), S.c(), S.m(x, null))) : S && (S.d(1), (S = null)),
          N & 16 && D !== (D = `h-screen overflow-auto w-full${le(!A[4], 'hidden')}`) && m(x, 'class', D);
      },
      i: I,
      o: I,
      d(A) {
        A && R(t), C && C.d(), S && S.d(), e[8](null), (f = !1), M(F);
      },
    };
  }
  function yt(e, t, n) {
    let l, o, r, i;
    X(e, Ee, (d) => n(1, (l = d))),
      X(e, Se, (d) => n(2, (o = d))),
      X(e, J, (d) => n(3, (r = d))),
      X(e, te, (d) => n(4, (i = d)));
    let h;
    te.subscribe((d) => {
      l && !!d && !!h && setTimeout(() => h.scrollIntoView({ behavior: 'smooth' }), 0);
    });
    function c(d) {
      d.preventDefault(), d.key === 'Enter' && Ae();
    }
    function s() {
      (o = this.checked), Se.set(o);
    }
    function b(d, v) {
      (d[v].value = ge(this.value)), J.set(r);
    }
    function _(d) {
      se[d ? 'unshift' : 'push'](() => {
        (h = d), n(0, h);
      });
    }
    return [h, l, o, r, i, c, s, b, _];
  }
  class Oe extends ye {
    constructor(t) {
      super(),
        (this.shadowRoot.innerHTML =
          '<style>@tailwind utilities;@tailwind components;@tailwind base;@layer base{font-family:Inter, Avenir, Helvetica, Arial, sans-serif;margin:0;box-sizing:border-box}:global(body){margin:0;box-sizing:border-box}</style>'),
        nt(this, { target: this.shadowRoot, props: Ge(this.attributes), customElement: !0 }, yt, wt, me, {}, null),
        t && t.target && j(t.target, this, t.anchor);
    }
  }
  return customElements.define('credit-estimator', Oe), Oe;
})();
//# sourceMappingURL=credit-estimator.iife.js.map
