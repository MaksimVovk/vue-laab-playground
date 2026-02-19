import { openBlock as y, createElementBlock as C, normalizeClass as Q, renderSlot as re, computed as S, createElementVNode as O, toDisplayString as U, createCommentVNode as M, Fragment as G, renderList as X, createBlock as P, createStaticVNode as Yt, resolveComponent as ye, resolveDirective as Me, withDirectives as Ke, withCtx as q, resolveDynamicComponent as pe, createTextVNode as J, ref as $, createVNode as F, useCssVars as Ue, normalizeStyle as te, onMounted as Y, nextTick as le, watch as ne, withKeys as se, normalizeProps as It, guardReactiveProps as Pt, useAttrs as Ze, getCurrentInstance as Ye, inject as ke, withModifiers as ee, onBeforeUnmount as Je, reactive as ge, mergeProps as Jt, createApp as ei } from "vue";
import { createRouter as ti, createWebHistory as ii } from "vue-router";
import "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/general/Popover/index.vue?vue&type=style&index=0&scoped=22f54b08&lang.css";
import "highlight.js";
import et from "@highlightjs/vue-plugin";
import "highlight.js/styles/monokai-sublime.css";
const z = (r, n) => {
  const t = r.__vccOpts || r;
  for (const [e, s] of n)
    t[e] = s;
  return t;
}, si = {
  __name: "index",
  props: {
    size: {
      type: String,
      default: "md",
      validator: (r) => ["sm", "md", "lg"].includes(r)
    },
    palette: {
      type: String,
      default: "primary",
      validator: (r) => ["success", "error", "warning", "info", "primary"].includes(r)
    }
  },
  emits: ["click"],
  setup(r, { expose: n, emit: t }) {
    n();
    const e = r, s = t, _ = S(() => [`vue-lab__lab-button_size-${e.size}`, `vue-lab__lab-button_palette-${e.palette}`]), a = { props: e, emit: s, classes: _, handleClick: () => s("click"), computed: S };
    return Object.defineProperty(a, "__isScriptSetup", { enumerable: !1, value: !0 }), a;
  }
};
function ni(r, n, t, e, s, _) {
  return y(), C(
    "div",
    {
      class: Q(["vue-lab__lab-button", ...e.classes]),
      onClick: e.handleClick
    },
    [
      re(r.$slots, "default", {}, void 0, !0)
    ],
    2
    /* CLASS */
  );
}
const Dt = /* @__PURE__ */ z(si, [["render", ni], ["__scopeId", "data-v-5643684a"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/general/Button/index.vue"]]), ai = {
  __name: "index",
  props: {
    title: { type: [String, Number], default: () => null },
    isClose: { type: Boolean, default: () => !1 },
    isActive: { type: Boolean, default: () => !1 },
    value: { type: [String, Number, null], required: !0 },
    size: {
      type: String,
      default: "md",
      validator: (r) => ["sm", "md", "lg"].includes(r)
    },
    palette: {
      type: String,
      default: "primary",
      validator: (r) => ["success", "error", "warning", "info", "primary"].includes(r)
    }
  },
  emits: ["input"],
  setup(r, { expose: n, emit: t }) {
    n();
    const e = r, s = t, _ = S(() => [`vue-lab-tag_size-${e.size}`, `vue-lab-tag_palette-${e.palette}`]), u = S(() => e.title == null ? "Null" : e.title), l = { props: e, emit: s, classes: _, label: u, handleClick: () => s("input", e.value), computed: S };
    return Object.defineProperty(l, "__isScriptSetup", { enumerable: !1, value: !0 }), l;
  }
}, ri = { class: "vue-lab-tag__title" }, _i = {
  key: 0,
  class: "vue-lab-tag__close"
};
function oi(r, n, t, e, s, _) {
  return y(), C(
    "div",
    {
      class: Q(["vue-lab-tag", ...e.classes, {
        "vue-lab-tag_active": t.isActive
      }]),
      onClick: e.handleClick
    },
    [
      O(
        "div",
        ri,
        U(e.label),
        1
        /* TEXT */
      ),
      t.isClose ? (y(), C("div", _i, "X")) : M("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const ui = /* @__PURE__ */ z(ai, [["render", oi], ["__scopeId", "data-v-553567f5"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/general/Tag/index.vue"]]), li = {
  __name: "index",
  props: {
    description: String
  },
  setup(r, { expose: n }) {
    n();
    const e = { props: r };
    return Object.defineProperty(e, "__isScriptSetup", { enumerable: !1, value: !0 }), e;
  }
}, pi = { class: "vue-lab__description" };
function ci(r, n, t, e, s, _) {
  return y(), C(
    "div",
    pi,
    U(t.description),
    1
    /* TEXT */
  );
}
const We = /* @__PURE__ */ z(li, [["render", ci], ["__scopeId", "data-v-f2d48cdd"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/general/Description/index.vue"]]), hi = {
  __name: "item",
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  setup(r, { expose: n }) {
    n();
    const t = r, e = (l) => !(l == null || typeof l == "string" && l.trim() === "" || Array.isArray(l) && l.length === 0 || typeof l == "object" && Object.keys(l).length === 0), s = S(() => e(t.data.default)), _ = S(() => e(t.data.values)), u = S(() => e(t.data.description)), a = { props: t, isExist: e, isDefault: s, isValues: _, isDescription: u, computed: S };
    return Object.defineProperty(a, "__isScriptSetup", { enumerable: !1, value: !0 }), a;
  }
}, fi = { class: "vue-lab__props-description__item" }, di = { class: "vue-lab__props-description__item__header" }, vi = { class: "vue-lab__props-description__item__header_name" }, mi = { class: "vue-lab__props-description__item__header_type" }, gi = {
  key: 0,
  class: "vue-lab__props-description__item__body"
}, bi = {
  key: 0,
  class: "vue-lab__props-description__item__body__row"
}, yi = { class: "vue-lab__props-description__item__body__row-value" }, xi = {
  key: 1,
  class: "vue-lab__props-description__item__body__row"
}, wi = { class: "vue-lab__props-description__item__body__row-value" }, ki = {
  key: 2,
  class: "vue-lab__props-description__item__body__row"
}, Oi = { class: "vue-lab__props-description__item__body__row-value" };
function Ei(r, n, t, e, s, _) {
  return y(), C("div", fi, [
    O("div", di, [
      O(
        "div",
        vi,
        U(t.data.name),
        1
        /* TEXT */
      ),
      O(
        "div",
        mi,
        U(t.data.type),
        1
        /* TEXT */
      )
    ]),
    e.isDefault || e.isValues || e.isDescription ? (y(), C("div", gi, [
      e.isDefault ? (y(), C("div", bi, [
        n[0] || (n[0] = O(
          "div",
          { class: "vue-lab__props-description__item__body__row-key" },
          "Default:",
          -1
          /* CACHED */
        )),
        O(
          "div",
          yi,
          U(t.data.default),
          1
          /* TEXT */
        )
      ])) : M("v-if", !0),
      e.isValues ? (y(), C("div", xi, [
        n[1] || (n[1] = O(
          "div",
          { class: "vue-lab__props-description__item__body__row-key" },
          "Values:",
          -1
          /* CACHED */
        )),
        O(
          "div",
          wi,
          U(t.data.values),
          1
          /* TEXT */
        )
      ])) : M("v-if", !0),
      e.isDescription ? (y(), C("div", ki, [
        n[2] || (n[2] = O(
          "div",
          { class: "vue-lab__props-description__item__body__row-key" },
          "Description:",
          -1
          /* CACHED */
        )),
        O(
          "div",
          Oi,
          U(t.data.description),
          1
          /* TEXT */
        )
      ])) : M("v-if", !0)
    ])) : M("v-if", !0)
  ]);
}
const Si = /* @__PURE__ */ z(hi, [["render", Ei], ["__scopeId", "data-v-845d1c40"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/general/PropsDescription/item.vue"]]), ie = () => {
  let r = (/* @__PURE__ */ new Date()).getTime(), n = typeof performance < "u" && performance.now && performance.now() * 1e3 || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    let e = Math.random() * 16;
    return r > 0 ? (e = (r + e) % 16 | 0, r = Math.floor(r / 16)) : (e = (n + e) % 16 | 0, n = Math.floor(n / 16)), (t === "x" ? e : e & 3 | 8).toString(16);
  });
}, Ti = /\s/, Ci = /(_|-|\.|:)/, Ri = /([a-z][A-Z]|[A-Z][a-z])/, Li = /[\W_]+(.|$)/g, Ai = /(.)([A-Z]+)/g, ji = (r) => r.replace(Li, function(n, t) {
  return t ? " " + t : "";
}), Ni = (r) => r.replace(Ai, function(n, t, e) {
  return t + " " + e.toLowerCase().split("").join(" ");
}), Ii = (r) => Ti.test(r) ? r.toLowerCase() : Ci.test(r) ? (ji(r) || r).toLowerCase() : Ri.test(r) ? Ni(r).toLowerCase() : r.toLowerCase(), Pi = (r) => Ii(r).replace(/[\W_]+(.|$)/g, (n, t) => t ? " " + t : "").trim(), tt = (r) => {
  const n = Pi(r).replace(/ (.)/g, (t, e) => e.toUpperCase());
  return n.charAt(0).toUpperCase() + n.slice(1);
}, Di = {
  __name: "index",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(r, { expose: n }) {
    n();
    const e = { props: r, computed: S, PropsDescriptionItem: Si, get generateKey() {
      return ie;
    } };
    return Object.defineProperty(e, "__isScriptSetup", { enumerable: !1, value: !0 }), e;
  }
}, Bi = { class: "vue-lab__props-description" }, $i = { class: "vue-lab__block-body" };
function zi(r, n, t, e, s, _) {
  return y(), C("div", Bi, [
    n[0] || (n[0] = O(
      "div",
      { class: "vue-lab__props-description__title vue-lab__block-title" },
      "Props",
      -1
      /* CACHED */
    )),
    O("div", $i, [
      (y(!0), C(
        G,
        null,
        X(t.data, (u) => (y(), P(e.PropsDescriptionItem, {
          key: e.generateKey(u.name),
          data: u
        }, null, 8, ["data"]))),
        128
        /* KEYED_FRAGMENT */
      ))
    ])
  ]);
}
const Bt = /* @__PURE__ */ z(Di, [["render", zi], ["__scopeId", "data-v-db8d12a1"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/general/PropsDescription/index.vue"]]), Mi = {
  __name: "index",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(r, { expose: n }) {
    n();
    const e = { props: r, get generateKey() {
      return ie;
    } };
    return Object.defineProperty(e, "__isScriptSetup", { enumerable: !1, value: !0 }), e;
  }
}, Ki = { class: "vue-lab__events" }, Ui = { class: "vue-lab__events__body" }, Wi = { class: "vue-lab__events__body-content" }, Vi = { class: "vue-lab__events__body-column vue-lab__events__body-column--td bold" }, qi = { class: "vue-lab__events__body-column vue-lab__events__body-column--td vue-lab__events__body-column--td-regular" };
function Gi(r, n, t, e, s, _) {
  return y(), C("div", Ki, [
    n[1] || (n[1] = O(
      "div",
      { class: "vue-lab__events__title vue-lab__block-title" },
      "Events",
      -1
      /* CACHED */
    )),
    O("div", Ui, [
      n[0] || (n[0] = O(
        "div",
        { class: "vue-lab__events__body-header" },
        [
          O("div", { class: "vue-lab__events__body-row" }, [
            O("div", { class: "vue-lab__events__body-column vue-lab__events__body-column--th" }, "Name"),
            O("div", { class: "vue-lab__events__body-column vue-lab__events__body-column--th vue-lab__events__body-column--th-regular" }, "Description")
          ])
        ],
        -1
        /* CACHED */
      )),
      O("div", Wi, [
        (y(!0), C(
          G,
          null,
          X(t.data, (u) => (y(), C("div", {
            key: e.generateKey(u.name),
            class: "vue-lab__events__body-row"
          }, [
            O(
              "div",
              Vi,
              "@" + U(u.name),
              1
              /* TEXT */
            ),
            O(
              "div",
              qi,
              U(u.description),
              1
              /* TEXT */
            )
          ]))),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ])
  ]);
}
const $t = /* @__PURE__ */ z(Mi, [["render", Gi], ["__scopeId", "data-v-7b2edc41"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/general/Events/index.vue"]]), Fi = {}, Xi = {
  "aria-hidden": "true",
  height: "16",
  viewBox: "0 0 16 16",
  version: "1.1",
  width: "16",
  "data-view-component": "true",
  class: "octicon octicon-copy js-clipboard-copy-icon"
};
function Hi(r, n) {
  return y(), C("svg", Xi, [...n[0] || (n[0] = [
    O(
      "path",
      { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z" },
      null,
      -1
      /* CACHED */
    ),
    O(
      "path",
      { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z" },
      null,
      -1
      /* CACHED */
    )
  ])]);
}
const Qi = /* @__PURE__ */ z(Fi, [["render", Hi], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/Icons/CopyIcon.vue"]]), Zi = {}, Yi = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24"
};
function Ji(r, n) {
  return y(), C("svg", Yi, [...n[0] || (n[0] = [
    Yt('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></g>', 1)
  ])]);
}
const zt = /* @__PURE__ */ z(Zi, [["render", Ji], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/Icons/DefaultMenuIcon.vue"]]), es = {}, ts = {
  fill: "#4fa760",
  width: "32px",
  height: "32px",
  viewBox: "0 0 32 32",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
};
function is(r, n) {
  return y(), C("svg", ts, [...n[0] || (n[0] = [
    O(
      "path",
      { d: "M19.332 19.041c0 0-1.664 2.125-3.79 0-2.062-2-3.562 0-3.562 0l-4.967 9.79c-0.144 0.533 0.173 1.081 0.706 1.224h16.497c0.533-0.143 0.85-0.69 0.707-1.224l-5.591-9.79zM26.939 28.33l-7.979-13.428v-0.025l-0.014-7.869h0.551c0.826 0 1.498-0.671 1.498-1.499 0-0.827-0.672-1.498-1.498-1.498h-7.995c-0.827 0-1.498 0.671-1.498 1.498 0 0.828 0.671 1.499 1.498 1.499h0.482l-0.016 7.871-6.908 13.451c-0.428 1.599 0.521 3.242 2.119 3.67h17.641c1.6-0.428 2.549-2.071 2.119-3.67zM24.553 30.998l-17.108-0.019c-1.065-0.286-1.697-1.382-1.412-2.446l6.947-13.616 0.021-8.908h-1.498c-0.275 0-0.499-0.224-0.499-0.5s0.224-0.499 0.499-0.499h7.995c0.275 0 0.498 0.224 0.498 0.499 0 0.276-0.223 0.5-0.498 0.5h-1.498l0.025 8.875 7.939 13.666c0.286 1.067-0.347 2.163-1.411 2.448zM16.48 2.512c0 0.552 0.448 1 1 1s1-0.448 1-1-0.447-1-1-1-1 0.447-1 1zM17.48 0.012c0.828 0 1.5-0.671 1.5-1.5s-0.672-1.5-1.5-1.5-1.5 0.671-1.5 1.5 0.672 1.5 1.5 1.5zM13.48 2.512c0.553 0 1-0.448 1-1s-0.447-1-1-1-1 0.448-1 1 0.447 1 1 1z" },
      null,
      -1
      /* CACHED */
    )
  ])]);
}
const Mt = /* @__PURE__ */ z(es, [["render", is], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/Icons/LabIcon.vue"]]), ss = {}, ns = {
  height: "5",
  version: "1.1",
  width: "9",
  class: "octicon octicon-copy js-clipboard-copy-icon"
};
function as(r, n) {
  return y(), C("svg", ns, [...n[0] || (n[0] = [
    O(
      "path",
      {
        class: "icon__geometry",
        d: "M4.49586 5C4.40073 5 4.31325 4.98392 4.23339 4.95176C4.15295 4.91959 4.07456 4.86407 3.99823 4.78518L0.13263 0.790097C0.0504272 0.70514 0.00638974 0.600765 0.000518086 0.476971C-0.00535357 0.353177 0.0386839 0.242733 0.13263 0.14564C0.226577 0.0485465 0.330505 0 0.444415 0C0.558325 0 0.662254 0.0485465 0.7562 0.14564L4.49586 4.01147L8.23551 0.14564C8.31771 0.0606832 8.41871 0.015171 8.53849 0.0091027C8.65827 0.00303437 8.76513 0.0485465 8.85908 0.14564C8.95303 0.242733 9 0.350143 9 0.467868C9 0.585594 8.95303 0.693003 8.85908 0.790097L4.99348 4.78518C4.91715 4.86407 4.83876 4.91959 4.75832 4.95176C4.67846 4.98392 4.59098 5 4.49586 5Z"
      },
      null,
      -1
      /* CACHED */
    )
  ])]);
}
const rs = /* @__PURE__ */ z(ss, [["render", as], ["__scopeId", "data-v-11d57440"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/Icons/ArrowIcon.vue"]]), _s = {
  __name: "search",
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  setup(r, { expose: n }) {
    n();
    const t = $(""), e = $(!1), s = r, _ = $(null), u = S(() => t.value ? s.options.filter(
      (R) => R.name.toLowerCase().includes(t.value.toLowerCase())
    ) : s.options), a = S(() => t.value.length >= 3), l = S(() => u.value.length === 0), x = { searchTerm: t, isOpened: e, props: s, activator: _, filteredOptions: u, isShowList: a, isSearchEmpty: l, handleSearch: (R) => {
      t.value = R;
    }, toogleOpened: () => {
      t.value = "", e.value = !e.value;
    }, close: () => {
      e.value = !1, t.value = "";
    }, ref: $, computed: S, get DefaultMenuIcon() {
      return zt;
    }, get Popover() {
      return Kt;
    } };
    return Object.defineProperty(x, "__isScriptSetup", { enumerable: !1, value: !0 }), x;
  }
}, os = { class: "vue-lab__search" }, us = ["value"], ls = {
  key: 0,
  class: "vue-lab__search-list"
}, ps = {
  key: 0,
  class: "vue-lab__search-list--empty"
};
function cs(r, n, t, e, s, _) {
  const u = ye("router-link"), a = Me("click-outside");
  return y(), C("div", os, [
    Ke((y(), C("div", {
      ref: "activator",
      class: "vue-lab__search-field",
      onClick: e.toogleOpened
    }, [
      O("input", {
        value: e.searchTerm,
        type: "text",
        class: "vue-lab__search-input",
        placeholder: "Search...",
        onInput: n[0] || (n[0] = (l) => e.handleSearch(l.target.value))
      }, null, 40, us)
    ])), [
      [a, e.close]
    ]),
    e.isShowList && e.isOpened ? (y(), P(e.Popover, {
      key: 0,
      reference: e.activator,
      position: "top:bottom",
      alignment: "left"
    }, {
      default: q(() => [
        e.isShowList && e.isOpened ? (y(), C("div", ls, [
          e.isSearchEmpty ? (y(), C("div", ps, " No results found ")) : (y(!0), C(
            G,
            { key: 1 },
            X(e.filteredOptions, (l) => (y(), C("div", {
              key: l.name,
              onClick: e.toogleOpened
            }, [
              l ? (y(), P(u, {
                key: 0,
                to: l.path,
                title: l.name,
                class: "vue-lab__search-list-item"
              }, {
                default: q(() => [
                  l.icon ? (y(), P(pe(l.icon), { key: 0 })) : (y(), P(e.DefaultMenuIcon, {
                    key: 1,
                    class: "vue-lab__search-list-item-icon"
                  })),
                  J(
                    " " + U(l.name),
                    1
                    /* TEXT */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["to", "title"])) : M("v-if", !0)
            ]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ])) : M("v-if", !0)
      ]),
      _: 1
      /* STABLE */
    }, 8, ["reference"])) : M("v-if", !0)
  ]);
}
const hs = /* @__PURE__ */ z(_s, [["render", cs], ["__scopeId", "data-v-163aedb2"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/general/Nav/search.vue"]]), fs = {
  __name: "item",
  props: {
    item: {
      type: Object,
      required: !0
    },
    path: {
      type: String,
      default: "/"
    }
  },
  setup(r, { expose: n }) {
    n();
    const t = r, e = S(() => t.path?.toLowerCase() === t.item.path?.toLowerCase()), s = { props: t, isActive: e, computed: S, get DefaultMenuIcon() {
      return zt;
    } };
    return Object.defineProperty(s, "__isScriptSetup", { enumerable: !1, value: !0 }), s;
  }
}, ds = { class: "vue-lab__nav-item-icon" }, vs = { class: "vue-lab__nav-item-label" };
function ms(r, n, t, e, s, _) {
  const u = ye("router-link");
  return t.item ? (y(), P(u, {
    key: 0,
    to: t.item.path,
    title: t.item.name,
    class: Q(["vue-lab__nav-item", {
      "vue-lab__nav-item--active": e.isActive
    }])
  }, {
    default: q(() => [
      O("div", ds, [
        t.item.icon ? (y(), P(pe(t.item.icon), { key: 0 })) : (y(), P(e.DefaultMenuIcon, {
          key: 1,
          class: "vue-lab__nav-item-icon-menu"
        }))
      ]),
      O(
        "div",
        vs,
        U(t.item.name),
        1
        /* TEXT */
      )
    ]),
    _: 1
    /* STABLE */
  }, 8, ["to", "title", "class"])) : M("v-if", !0);
}
const gs = /* @__PURE__ */ z(fs, [["render", ms], ["__scopeId", "data-v-875f6eef"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/general/Nav/item.vue"]]), bs = {
  __name: "group",
  props: {
    option: {
      type: Object,
      default: () => ({})
    },
    path: {
      type: String,
      default: "/"
    },
    isGroup: {
      type: Boolean,
      default: !1
    }
  },
  setup(r, { expose: n }) {
    n(), Ue((f) => ({
      "4061da29-maxHeightDuration": l.value,
      "4061da29-maxHeight": a.value
    }));
    const t = r, e = $(!0), s = () => {
      e.value = !e.value;
    }, _ = S(() => ({
      "vue-lab__nav-group-arrow": !0,
      "vue-lab__nav-group-arrow--closed": !e.value
    })), u = S(() => ({
      "vue-lab__nav-group-items": !0,
      "vue-lab__nav-group-items--opened": e.value
    })), a = S(() => {
      const f = t?.option?.items?.length;
      return f ? f * 35 + 100 + "px" : "1000px";
    }), l = S(() => {
      const f = t?.option?.items?.length;
      return !f || f < 30 ? ".3s" : f < 50 ? ".5s" : f < 80 ? ".8s" : f < 100 ? "1s" : f / 150 + "s";
    }), k = { props: t, isOpened: e, toggleOpened: s, arrowClasses: _, listClasses: u, maxHeight: a, maxHeightDuration: l, ref: $, computed: S, NavItem: gs, get generateKey() {
      return ie;
    }, get ArrowIcon() {
      return rs;
    } };
    return Object.defineProperty(k, "__isScriptSetup", { enumerable: !1, value: !0 }), k;
  }
}, ys = { class: "vue-lab__nav-group" };
function xs(r, n, t, e, s, _) {
  return y(), C("div", ys, [
    t.option?.name || t.isGroup ? (y(), C("div", {
      key: 0,
      class: "vue-lab__nav-group-name",
      onClick: e.toggleOpened
    }, [
      J(
        U(t.isGroup ? t.option.name || "Other components" : "") + " ",
        1
        /* TEXT */
      ),
      F(e.ArrowIcon, {
        class: Q(e.arrowClasses)
      }, null, 8, ["class"])
    ])) : M("v-if", !0),
    O(
      "div",
      {
        class: Q(e.listClasses)
      },
      [
        (y(!0), C(
          G,
          null,
          X(t.option.items, (u) => (y(), P(e.NavItem, {
            key: e.generateKey(u),
            item: u,
            path: t.path
          }, null, 8, ["item", "path"]))),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      2
      /* CLASS */
    )
  ]);
}
const ws = /* @__PURE__ */ z(bs, [["render", xs], ["__scopeId", "data-v-4061da29"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/general/Nav/group.vue"]]), ks = {
  __name: "index",
  props: {
    name: { type: String, default: "Vue Lab" },
    options: {
      type: Array,
      default: () => []
    },
    path: {
      type: String,
      default: "/"
    }
  },
  emits: ["navigate"],
  setup(r, { expose: n, emit: t }) {
    n();
    const e = r, s = t, _ = S(() => {
      const k = e.options.map((R) => R.group), v = [...new Set(k)].filter((R) => R && R.length).map((R) => ({
        name: R,
        items: e.options.filter((j) => j.group === R)
      })), x = {
        name: null,
        items: e.options.filter((R) => !R.group || !R.group.length)
      };
      return [...v, x];
    }), u = S(() => e.options.some((k) => k.group && k.group.length)), l = { props: e, emit: s, menuItems: _, isGroup: u, goToHome: () => {
      s("navigate", "/");
    }, computed: S, get generateKey() {
      return ie;
    }, Search: hs, get LabIcon() {
      return Mt;
    }, NavGroup: ws };
    return Object.defineProperty(l, "__isScriptSetup", { enumerable: !1, value: !0 }), l;
  }
}, Os = { class: "vue-lab__nav" }, Es = { class: "vue-lab__nav-header-icon" }, Ss = { class: "vue-lab__nav-header-title" }, Ts = { class: "vue-lab__nav-search" }, Cs = { class: "vue-lab__nav-body" }, Rs = { class: "vue-lab__nav-body-items custom-scroll--simple" };
function Ls(r, n, t, e, s, _) {
  return y(), C("div", Os, [
    O("div", {
      class: "vue-lab__nav-header",
      onClick: e.goToHome
    }, [
      O("div", Es, [
        F(e.LabIcon)
      ]),
      O(
        "div",
        Ss,
        U(t.name),
        1
        /* TEXT */
      )
    ]),
    O("div", Ts, [
      F(e.Search, { options: t.options }, null, 8, ["options"])
    ]),
    O("div", Cs, [
      M(` <div class="vue-lab__nav-body-title">
        Components
      </div> `),
      O("div", Rs, [
        (y(!0), C(
          G,
          null,
          X(e.menuItems, (u) => (y(), P(e.NavGroup, {
            key: e.generateKey(u),
            option: u,
            path: t.path,
            isGroup: e.isGroup
          }, null, 8, ["option", "path", "isGroup"]))),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ])
  ]);
}
const As = /* @__PURE__ */ z(ks, [["render", Ls], ["__scopeId", "data-v-3672c48c"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/general/Nav/index.vue"]]), js = {
  __name: "index",
  props: {
    width: String,
    height: String,
    left: String,
    top: String,
    right: String,
    bottom: String,
    centered: { type: Boolean, default: !1 },
    reference: [HTMLElement, Object, String, Function],
    position: {
      type: String,
      default: "top",
      validator: (r) => ["top", "top:bottom", "bottom:top", "bottom", "left", "right"].includes(r)
    },
    alignment: {
      type: String,
      default: void 0,
      validator: (r) => [void 0, "left", "right"].includes(r)
    },
    margin: {
      type: [String, Number],
      default: 0
    }
  },
  emits: ["close"],
  setup(r, { expose: n, emit: t }) {
    n();
    const e = r, s = t, _ = $({});
    function u() {
      return e.reference ? e.reference instanceof HTMLElement ? e.reference : e.reference?.$el ? e.reference.$el : typeof e.reference == "function" ? e.reference() : null : null;
    }
    function a() {
      const f = u();
      if (!f)
        return;
      const v = f.getBoundingClientRect();
      let { width: x, height: R, left: j, top: A, right: p, bottom: o, position: h, alignment: T } = e;
      switch (T || (T = _.value.width > window.innerWidth - v.left && v.right > _.value.width ? "right" : "left", x = Math.max(_.value.width, v.width)), T === "left" ? j = v.left + "px" : p = window.innerWidth - v.right + "px", h) {
        case "top":
          A = v.top + +e.margin + "px";
          break;
        case "top:bottom":
          A = v.bottom + +e.margin + "px";
          break;
        case "bottom":
          o = window.innerHeight - v.bottom - +e.margin + "px";
          break;
        case "bottom:top":
          o = window.innerHeight - v.bottom - +e.margin + "px";
          break;
        case "left":
          j = v.left - (x || 0) + "px";
          break;
        case "right":
          j = v.right + +e.margin + "px";
          break;
      }
      _.value = {
        width: x ? x + "px" : void 0,
        height: R ? R + "px" : void 0,
        left: e.centered ? "50%" : j,
        top: e.centered ? "50%" : A,
        transform: e.centered ? "translate(-50%, -50%)" : void 0,
        right: p,
        bottom: o,
        position: "absolute",
        zIndex: 999
      };
    }
    function l(f) {
      s("close", f);
    }
    Y(() => {
      le(a), window.addEventListener("resize", a), window.addEventListener("scroll", a, !0);
    }), ne(
      () => [e.reference, e.width, e.height, e.position, e.alignment],
      () => le(a)
    );
    const k = { props: e, emit: s, style: _, getReferenceElement: u, setStyle: a, close: l, ref: $, onMounted: Y, watch: ne, nextTick: le };
    return Object.defineProperty(k, "__isScriptSetup", { enumerable: !1, value: !0 }), k;
  }
};
function Ns(r, n, t, e, s, _) {
  const u = Me("hoisted");
  return Ke((y(), C(
    "div",
    {
      style: te(e.style),
      class: "vue-lab__popover"
    },
    [
      re(r.$slots, "default", {}, void 0, !0)
    ],
    4
    /* STYLE */
  )), [
    [u]
  ]);
}
const Kt = /* @__PURE__ */ z(js, [["render", Ns], ["__scopeId", "data-v-22f54b08"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/general/Popover/index.vue"]]), Is = {
  __name: "index",
  props: {
    label: { type: String, default: () => "Search" },
    size: { type: String, default: () => "md", validator: (r) => ["sm", "md", "lg"].includes(r) },
    focus: { type: Boolean, default: !1 }
  },
  emits: ["input"],
  setup(r, { expose: n, emit: t }) {
    n();
    const e = r, s = Math.random().toString(36).slice(2, 9);
    Y(() => {
      e.focus && le(() => {
        u.value.focus();
      });
    });
    const _ = t, u = $(null), a = S(() => [`vue-lab__search_size-${e.size}`]), f = { props: e, uuid: s, emit: _, searchInput: u, classes: a, handleInput: (v) => {
      _("input", v.target.value);
    }, unFocus: () => {
      u.value.blur();
    }, computed: S, nextTick: le, onMounted: Y, ref: $ };
    return Object.defineProperty(f, "__isScriptSetup", { enumerable: !1, value: !0 }), f;
  }
}, Ps = { class: "vue-lab__search" }, Ds = ["id"], Bs = ["for"];
function $s(r, n, t, e, s, _) {
  return y(), C("div", Ps, [
    O(
      "div",
      {
        class: Q(["vue-lab__search__field", ...e.classes])
      },
      [
        O("input", {
          id: e.uuid,
          ref: "searchInput",
          type: "text",
          class: "vue-lab__search-input",
          placeholder: " ",
          onKeydown: se(e.unFocus, ["esc"]),
          onInput: e.handleInput
        }, null, 40, Ds),
        O("label", {
          for: e.uuid,
          class: "vue-lab__search-label"
        }, U(t.label), 9, Bs)
      ],
      2
      /* CLASS */
    )
  ]);
}
const Ve = /* @__PURE__ */ z(Is, [["render", $s], ["__scopeId", "data-v-06e447f6"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/general/Search/index.vue"]]), zs = {
  __name: "BaseTemplate",
  props: {
    viewBox: {
      type: String,
      default: "0 0 24 24"
    },
    size: {
      type: [String, Number],
      default: 24
    },
    color: {
      type: String,
      default: null
    },
    name: {
      type: [String],
      default: null
    },
    palette: {
      type: String,
      default: "primary",
      validator: (r) => ["success", "error", "warning", "info", "primary", "accent", "neutral", "muted"].includes(r)
    }
  },
  emits: ["click"],
  setup(r, { expose: n, emit: t }) {
    n();
    const e = t, s = r, _ = S(() => isNaN(s.size) ? s.size : `${s.size}px`), u = S(() => ({
      "--icon-size": _.value,
      "--custom-color": s.color
    })), a = S(() => [
      "icon",
      `icon_${s.name}`,
      `icon_palette-${s.palette}`
    ]), k = { emit: e, props: s, sizeValue: _, iconStyles: u, classes: a, handleClick: () => e("click"), computed: S };
    return Object.defineProperty(k, "__isScriptSetup", { enumerable: !1, value: !0 }), k;
  }
}, Ms = ["viewBox"];
function Ks(r, n, t, e, s, _) {
  return y(), C(
    "div",
    {
      style: te(e.iconStyles),
      role: "img",
      class: "vue-lab__icon-base-template"
    },
    [
      (y(), C("svg", {
        viewBox: t.viewBox,
        "stroke-width": 2,
        class: Q([
          "icon-svg",
          r.$attrs?.class,
          ...e.classes
        ]),
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        onClick: e.handleClick
      }, [
        re(r.$slots, "default", {}, void 0, !0)
      ], 10, Ms))
    ],
    4
    /* STYLE */
  );
}
const Us = /* @__PURE__ */ z(zs, [["render", Ks], ["__scopeId", "data-v-1586512e"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/general/Icon/BaseTemplate.vue"]]), Ws = {
  __name: "SadIcon",
  setup(r, { expose: n }) {
    n();
    const t = Ze(), e = S(() => ({
      ...t,
      viewBox: "0 0 512 512.01",
      fill: "none",
      strokeWidth: 1,
      name: "sad-icon"
    })), s = { attrs: t, iconAttrs: e, useAttrs: Ze, computed: S, BaseIcon: Us };
    return Object.defineProperty(s, "__isScriptSetup", { enumerable: !1, value: !0 }), s;
  }
};
function Vs(r, n, t, e, s, _) {
  return y(), P(
    e.BaseIcon,
    It(Pt(e.iconAttrs)),
    {
      default: q(() => [...n[0] || (n[0] = [
        O(
          "path",
          {
            "fill-rule": "nonzero",
            d: "M189.76 8.78c68.25-18.29 137.48-7.17 194.22 25.59l.76.47c56.37 32.82 100.29 87.02 118.48 154.93 18.29 68.25 7.17 137.47-25.59 194.21l-.47.76c-32.82 56.37-87.02 100.29-154.93 118.49-58.69 15.73-118.1 9.7-169.67-13.12-20.14-8.91-39.15-20.48-56.36-34.21-41.26-32.92-72.73-78.82-87.43-133.66-18.27-68.22-7.16-137.43 25.6-194.16C67.13 71.32 121.53 27.06 189.76 8.78zm-58.14 369.67a3.096 3.096 0 0 1-4.38.01l-9.64-9.58a3.118 3.118 0 0 1-.39-4.1c10.84-14.75 23.3-27.16 36.86-37.26 30.2-22.47 65.91-33.48 101.6-33.32 35.67.17 71.34 11.49 101.48 33.63 13.86 10.19 26.56 22.69 37.56 37.44.97 1.22.88 3-.25 4.12l-9.26 9.23a3.12 3.12 0 0 1-4.4 0c-2.03-1.99-4.04-3.91-6.19-5.77-30.22-26.27-74.7-39.8-119.05-40.02-44.18-.22-88.15 12.77-117.65 39.49-2.21 2-4.22 4.02-6.29 6.13zm210.37-231.89c12.47 18.04 12.47 46.92 0 64.97-12.89 18.67-34.64 18.66-47.54 0-12.46-18.05-12.46-46.93 0-64.97 12.9-18.67 34.65-18.67 47.54 0zm-120.72 0c12.46 18.04 12.46 46.92 0 64.97-12.9 18.66-34.65 18.67-47.54 0-12.46-18.05-12.46-46.93 0-64.97 12.89-18.67 34.64-18.67 47.54 0zm149.1-88.69c-50.68-29.26-112.55-39.18-173.59-22.83C135.74 51.4 87.11 90.92 57.87 141.58 28.6 192.27 18.68 254.16 35.04 315.22c13.7 51.13 43.66 93.55 82.8 123.17a230.483 230.483 0 0 0 48.48 28.09c45.43 19.39 97.46 24.27 148.89 10.49 60.8-16.29 109.27-55.55 138.55-105.92l.37-.68c29.26-50.67 39.18-112.55 22.83-173.58C460.67 136 421.41 87.53 371.05 58.24l-.68-.37z",
            class: "icon__geometry"
          },
          null,
          -1
          /* CACHED */
        )
      ])]),
      _: 1
      /* STABLE */
    },
    16
    /* FULL_PROPS */
  );
}
const qs = /* @__PURE__ */ z(Ws, [["render", Vs], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/general/Icon/General/SadIcon.vue"]]), Gs = {
  __name: "index",
  props: {
    size: {
      type: [String],
      default: () => "md",
      validator: (r) => ["sm", "md", "lg"].includes(r)
    }
  },
  emits: [],
  setup(r, { expose: n, emit: t }) {
    n();
    const e = r, s = t, _ = S(() => {
      switch (e.size) {
        case "sm":
          return 24;
        case "md":
          return 36;
        case "lg":
          return 48;
        default:
          return 48;
      }
    }), u = { props: e, emit: s, iconSize: _, computed: S, SadIcon: qs };
    return Object.defineProperty(u, "__isScriptSetup", { enumerable: !1, value: !0 }), u;
  }
}, Fs = ["data-size"], Xs = { class: "vue-lab__empty-screen__text" };
function Hs(r, n, t, e, s, _) {
  return y(), C("div", {
    "data-size": t.size,
    class: "vue-lab__empty-screen"
  }, [
    F(e.SadIcon, {
      size: e.iconSize,
      palette: "muted"
    }, null, 8, ["size"]),
    O("div", Xs, [
      re(r.$slots, "default", {}, () => [
        n[0] || (n[0] = J(
          "Nothing to display",
          -1
          /* CACHED */
        ))
      ], !0)
    ])
  ], 8, Fs);
}
const qe = /* @__PURE__ */ z(Gs, [["render", Hs], ["__scopeId", "data-v-c7a78350"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/general/EmptyScreen/index.vue"]]), Qs = {
  __name: "App",
  setup(r, { expose: n }) {
    n();
    const t = Ye(), e = t?.appContext.config.globalProperties.$router, s = ke("menu"), _ = ke("kit-title"), a = { instance: t, router: e, menu: s, title: _, navigate: (l) => {
      e.push({ path: l });
    }, get Nav() {
      return As;
    }, inject: ke, getCurrentInstance: Ye };
    return Object.defineProperty(a, "__isScriptSetup", { enumerable: !1, value: !0 }), a;
  }
}, Zs = { class: "vue-lab-application" }, Ys = { class: "vue-lab-application__body" }, Js = { class: "vue-lab-application__content" };
function en(r, n, t, e, s, _) {
  const u = ye("router-view");
  return y(), C("div", Zs, [
    O("div", Ys, [
      F(e.Nav, {
        path: r.$route.path,
        name: e.title,
        options: e.menu,
        onNavigate: e.navigate
      }, null, 8, ["path", "name", "options"]),
      O("div", Js, [
        F(u)
      ])
    ])
  ]);
}
const tn = /* @__PURE__ */ z(Qs, [["render", en], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/App.vue"]]), sn = {
  __name: "CtrlLayout",
  props: {
    name: { type: String, required: !0 }
  },
  setup(r, { expose: n }) {
    n();
    const t = {};
    return Object.defineProperty(t, "__isScriptSetup", { enumerable: !1, value: !0 }), t;
  }
}, nn = { class: "vue-lab__ctrl-layout" }, an = { class: "vue-lab__ctrl-layout__title" }, rn = { class: "vue-lab__ctrl-layout__body" };
function _n(r, n, t, e, s, _) {
  return y(), C("div", nn, [
    O(
      "div",
      an,
      U(t.name),
      1
      /* TEXT */
    ),
    O("div", rn, [
      re(r.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const _e = /* @__PURE__ */ z(sn, [["render", _n], ["__scopeId", "data-v-9214d2d0"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/controls/CtrlLayout.vue"]]), on = {
  __name: "index",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: "Tags"
    },
    value: {
      type: String,
      default: () => null
    }
  },
  emits: ["input"],
  setup(r, { expose: n, emit: t }) {
    n();
    const e = r, s = t, u = { props: e, emit: s, setValue: (a) => {
      s("input", a);
    }, CtrlLayout: _e, get Tag() {
      return ui;
    }, get generateKey() {
      return ie;
    } };
    return Object.defineProperty(u, "__isScriptSetup", { enumerable: !1, value: !0 }), u;
  }
}, un = { class: "vue-lab__tags" };
function ln(r, n, t, e, s, _) {
  return y(), P(e.CtrlLayout, { name: t.title }, {
    default: q(() => [
      O("div", un, [
        (y(!0), C(
          G,
          null,
          X(t.options, (u) => (y(), P(e.Tag, {
            key: e.generateKey(u),
            value: u,
            isActive: u == t.value,
            title: u,
            class: "vue-lab__tags__item",
            onInput: e.setValue
          }, null, 8, ["value", "isActive", "title"]))),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["name"]);
}
const it = /* @__PURE__ */ z(on, [["render", ln], ["__scopeId", "data-v-6c569ff9"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/controls/Tags/index.vue"]]), pn = {
  __name: "index",
  props: {
    value: { type: [Number, String], default: 0 },
    options: { type: Array, default: () => [] }
  },
  emits: ["input"],
  setup(r, { expose: n, emit: t }) {
    n();
    const e = r, s = t, _ = $(0), u = $(null), a = $(null), l = $(null), k = S(() => e.options.length), f = (c) => {
      if (typeof c == "number" && Number.isInteger(c) && c >= 0 && c < k.value)
        return c;
      const g = e.options.findIndex((i) => String(i) === String(c));
      return g >= 0 ? g : 0;
    };
    ne(() => e.value, (c) => {
      _.value = f(c);
    }, { immediate: !0 }), ne(_, (c) => {
      s("input", e.options[c]);
    });
    const v = S(() => {
      const c = k.value;
      return c === 1 ? [0] : Array.from({ length: c }, (g, i) => i / (c - 1) * 100);
    }), x = S(() => e.options[_.value]);
    let R = !1, j = null;
    const A = (c, g, i) => Math.max(g, Math.min(i, c)), p = (c) => {
      const g = a.value.getBoundingClientRect(), d = A(c - g.left, 0, g.width) / g.width, m = Math.round(d * (k.value - 1));
      return A(m, 0, k.value - 1);
    }, o = (c) => {
      _.value = A(c, 0, k.value - 1);
    }, h = (c) => {
      const g = p(c.clientX);
      o(g);
    }, T = (c) => {
      R = !0, j = c.pointerId, c.target.setPointerCapture(j), window.addEventListener("pointermove", E), window.addEventListener("pointerup", I);
    };
    function E(c) {
      if (!R || c.pointerId !== j)
        return;
      const g = p(c.clientX);
      _.value = g;
    }
    const I = () => {
      if (R) {
        R = !1;
        try {
          l.value.releasePointerCapture(j);
        } catch {
        }
        j = null, window.removeEventListener("pointermove", E), window.removeEventListener("pointerup", I);
      }
    }, b = (c) => {
      o(_.value + c);
    };
    Je(() => {
      window.removeEventListener("pointermove", E), window.removeEventListener("pointerup", I);
    }), Y(() => {
      _.value = f(e.value);
    });
    const w = { props: e, emit: s, currentIndex: _, root: u, track: a, handle: l, optionsCount: k, valueToIndex: f, positions: v, displayValue: x, get dragging() {
      return R;
    }, set dragging(c) {
      R = c;
    }, get pointerId() {
      return j;
    }, set pointerId(c) {
      j = c;
    }, clamp: A, clientXToIndex: p, selectIndex: o, onTrackClick: h, startDrag: T, onPointerMove: E, stopDrag: I, onArrow: b, ref: $, computed: S, watch: ne, onMounted: Y, onBeforeUnmount: Je, CtrlLayout: _e };
    return Object.defineProperty(w, "__isScriptSetup", { enumerable: !1, value: !0 }), w;
  }
}, cn = {
  class: "vue-lab__size",
  ref: "root"
}, hn = ["onClick", "aria-label", "onKeydown"], fn = ["aria-valuemax", "aria-valuenow", "aria-valuetext"], dn = { class: "vue-lab__size-value" };
function vn(r, n, t, e, s, _) {
  return y(), P(e.CtrlLayout, { name: "Size" }, {
    default: q(() => [
      O(
        "div",
        cn,
        [
          O(
            "div",
            {
              class: "vue-lab__size-track",
              ref: "track",
              onClick: n[4] || (n[4] = (u) => e.onTrackClick(u))
            },
            [
              (y(!0), C(
                G,
                null,
                X(t.options, (u, a) => (y(), C("div", {
                  key: a,
                  class: Q(["vue-lab__size-tick", {
                    "vue-lab__size-tick_active": a === e.currentIndex
                  }]),
                  style: te({ left: e.positions[a] + "%" }),
                  onClick: ee((l) => e.selectIndex(a), ["stop"]),
                  role: "button",
                  "aria-label": `Select ${u}`,
                  tabindex: "0",
                  onKeydown: [
                    se(ee((l) => e.selectIndex(a), ["prevent"]), ["enter"]),
                    se(ee((l) => e.selectIndex(a), ["prevent"]), ["space"])
                  ]
                }, null, 46, hn))),
                128
                /* KEYED_FRAGMENT */
              )),
              O(
                "div",
                {
                  class: "vue-lab__size-range-fill",
                  style: te({ width: e.positions[e.currentIndex] + "%" }),
                  "aria-hidden": "true"
                },
                null,
                4
                /* STYLE */
              ),
              O("div", {
                class: "vue-lab__size-handle",
                ref: "handle",
                style: te({ left: e.positions[e.currentIndex] + "%" }),
                role: "slider",
                "aria-valuemin": 0,
                "aria-valuemax": t.options.length - 1,
                "aria-valuenow": e.currentIndex,
                "aria-valuetext": String(e.displayValue),
                tabindex: "0",
                onPointerdown: ee(e.startDrag, ["prevent"]),
                onKeydown: [
                  n[0] || (n[0] = se(ee((u) => e.onArrow(-1), ["prevent"]), ["left"])),
                  n[1] || (n[1] = se(ee((u) => e.onArrow(1), ["prevent"]), ["right"])),
                  n[2] || (n[2] = se(ee((u) => e.onArrow(1), ["prevent"]), ["up"])),
                  n[3] || (n[3] = se(ee((u) => e.onArrow(-1), ["prevent"]), ["down"]))
                ]
              }, null, 44, fn)
            ],
            512
            /* NEED_PATCH */
          ),
          O(
            "div",
            dn,
            U(t.value),
            1
            /* TEXT */
          )
        ],
        512
        /* NEED_PATCH */
      )
    ]),
    _: 1
    /* STABLE */
  });
}
const st = /* @__PURE__ */ z(pn, [["render", vn], ["__scopeId", "data-v-96bfa191"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/controls/Size/index.vue"]]), mn = {
  __name: "index",
  props: {
    value: {
      type: Boolean,
      default: !1
    },
    title: {
      type: String,
      default: "Boolean state"
    }
  },
  emits: ["input"],
  setup(r, { expose: n, emit: t }) {
    n();
    const e = r, s = t, _ = S(() => ["vue-lab__boolean-tumbler", {
      "vue-lab__boolean-tumbler--right": !!e.value,
      "vue-lab__boolean-tumbler--left": !e.value
    }]), u = { props: e, emit: s, classList: _, computed: S, CtrlLayout: _e };
    return Object.defineProperty(u, "__isScriptSetup", { enumerable: !1, value: !0 }), u;
  }
};
function gn(r, n, t, e, s, _) {
  return y(), P(e.CtrlLayout, { name: t.title }, {
    default: q(() => [
      O("div", {
        class: "vue-lab__boolean",
        onClick: n[0] || (n[0] = (u) => e.emit("input", !t.value))
      }, [
        O(
          "div",
          {
            class: Q(e.classList)
          },
          null,
          2
          /* CLASS */
        )
      ])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["name"]);
}
const nt = /* @__PURE__ */ z(mn, [["render", gn], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/controls/Boolean/index.vue"]]), bn = {
  __name: "index",
  props: {
    value: { type: [String], default: () => "" },
    title: { type: String, default: "Text Input" }
  },
  emits: ["input"],
  setup(r, { expose: n, emit: t }) {
    n();
    const e = t, s = r, _ = $(!1), u = (f) => {
      e("input", f?.target.value);
    }, a = S(() => !!s.value && s.value !== ""), k = { emit: e, props: s, isFocused: _, handleTextInput: u, isValue: a, handleFocus: (f) => {
      _.value = f === "in";
    }, computed: S, ref: $, CtrlLayout: _e };
    return Object.defineProperty(k, "__isScriptSetup", { enumerable: !1, value: !0 }), k;
  }
}, yn = { class: "vue-lab__text-ctrl" }, xn = ["value"];
function wn(r, n, t, e, s, _) {
  return y(), P(e.CtrlLayout, { name: t.title }, {
    default: q(() => [
      O("div", yn, [
        O(
          "div",
          {
            class: Q([
              "vue-lab__text-ctrl__field",
              {
                "vue-lab__text-ctrl__field--active": e.isValue,
                "vue-lab__text-ctrl__field--focused": e.isFocused
              }
            ])
          },
          [
            O("input", {
              value: t.value,
              class: "vue-lab__text-ctrl__input",
              type: "text",
              onFocusin: n[0] || (n[0] = (u) => e.handleFocus("in")),
              onFocusout: n[1] || (n[1] = (u) => e.handleFocus("out")),
              onInput: e.handleTextInput
            }, null, 40, xn)
          ],
          2
          /* CLASS */
        )
      ])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["name"]);
}
const at = /* @__PURE__ */ z(bn, [["render", wn], ["__scopeId", "data-v-3d8e17f8"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/controls/Text/index.vue"]]), kn = {
  __name: "index",
  props: {
    title: {
      type: String,
      default: "Color Picker"
    },
    value: {
      type: String,
      default: () => null
    }
  },
  emits: ["input"],
  setup(r, { expose: n, emit: t }) {
    n();
    const e = r, s = t, _ = S(() => e.value || "linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)"), a = { props: e, emit: s, bgColor: _, handleColorInput: (l) => {
      s("input", l?.target.value);
    }, computed: S, CtrlLayout: _e };
    return Object.defineProperty(a, "__isScriptSetup", { enumerable: !1, value: !0 }), a;
  }
}, On = { class: "vue-lab-color-picker" }, En = ["value"];
function Sn(r, n, t, e, s, _) {
  return y(), P(e.CtrlLayout, { name: t.title }, {
    default: q(() => [
      O("div", On, [
        O(
          "label",
          {
            class: "vue-lab-color-picker__color-preview",
            style: te({ background: e.bgColor })
          },
          [
            O("input", {
              type: "color",
              value: t.value || "#000000",
              class: "vue-lab-color-picker__hidden-input",
              onInput: e.handleColorInput
            }, null, 40, En)
          ],
          4
          /* STYLE */
        )
      ])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["name"]);
}
const rt = /* @__PURE__ */ z(kn, [["render", Sn], ["__scopeId", "data-v-8e33fe98"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/controls/ColorPicker/index.vue"]]), Tn = {
  __name: "index",
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    title: {
      type: String,
      default: "Dropdown"
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  emits: ["input"],
  setup(r, { expose: n, emit: t }) {
    n();
    const e = r, s = t, _ = $(null), u = $(!1), a = $(""), l = S(() => e.options.find((A) => A.id === e.value)?.name || null), k = S(() => a.value ? e.options.filter((A) => A?.name?.toLowerCase().includes(a?.value?.toLowerCase())) : e.options), f = () => {
      u.value = !u.value;
    }, v = () => {
      u.value = !1;
    }, j = { props: e, emit: s, dropdownActivator: _, isOpened: u, searchValue: a, selectedValue: l, filteredOptions: k, toggleOpened: f, close: v, handleItem: (A) => {
      s("input", A), v();
    }, handleSearch: (A) => {
      a.value = A;
    }, computed: S, ref: $, CtrlLayout: _e, get Popover() {
      return Kt;
    }, get Search() {
      return Ve;
    }, get EmptyScreen() {
      return qe;
    } };
    return Object.defineProperty(j, "__isScriptSetup", { enumerable: !1, value: !0 }), j;
  }
}, Cn = { class: "vue-lab__dropdown-modal" }, Rn = {
  key: 1,
  class: "vue-lab__dropdown-list custom-scroll"
}, Ln = ["onClick"];
function An(r, n, t, e, s, _) {
  const u = Me("click-outside");
  return y(), P(e.CtrlLayout, {
    name: t.title,
    class: "vue-lab__dropdown"
  }, {
    default: q(() => [
      O(
        "div",
        {
          ref: "dropdownActivator",
          class: Q(["vue-lab__dropdown-field", {
            "vue-lab__dropdown-field_active": e.props.value,
            "vue-lab__dropdown-field_focused": e.isOpened
          }]),
          onClick: e.toggleOpened
        },
        U(e.selectedValue),
        3
        /* TEXT, CLASS */
      ),
      e.isOpened ? Ke((y(), P(e.Popover, {
        key: 0,
        reference: e.dropdownActivator,
        position: "top:bottom",
        alignment: "left"
      }, {
        default: q(() => [
          O("div", Cn, [
            F(e.Search, {
              size: "sm",
              focus: "",
              onInput: e.handleSearch
            }),
            e.filteredOptions.length ? (y(), C("ul", Rn, [
              (y(!0), C(
                G,
                null,
                X(e.filteredOptions, (a) => (y(), C("li", {
                  key: a.id,
                  class: Q(["vue-lab__dropdown-list-item", {
                    "vue-lab__dropdown-list-item_active": a.id === e.props.value
                  }]),
                  onClick: (l) => e.handleItem(a.id)
                }, [
                  O(
                    "p",
                    null,
                    U(a.name),
                    1
                    /* TEXT */
                  )
                ], 10, Ln))),
                128
                /* KEYED_FRAGMENT */
              ))
            ])) : (y(), P(e.EmptyScreen, {
              key: 0,
              size: "sm"
            }, {
              default: q(() => [...n[0] || (n[0] = [
                J(
                  "No options found",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }))
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["reference"])), [
        [u, e.close]
      ]) : M("v-if", !0)
    ]),
    _: 1
    /* STABLE */
  }, 8, ["name"]);
}
const _t = /* @__PURE__ */ z(Tn, [["render", An], ["__scopeId", "data-v-b886953d"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/controls/Dropdown/index.vue"]]), jn = {
  __name: "index",
  props: {
    options: { type: Array, default: () => [] },
    values: { type: Object, default: () => ({}) }
  },
  emits: ["input", "reset"],
  setup(r, { expose: n, emit: t }) {
    n();
    const e = r, s = t, k = { props: e, emit: s, componentsMap: {
      tags: it,
      size: st,
      boolean: nt,
      text: at,
      color: rt,
      list: _t
    }, getValue: (f) => e.values?.[f], handleInput: ({ ctrl: f, value: v }) => s("input", { ctrl: f, value: v }), resetSettings: () => s("reset"), get Tags() {
      return it;
    }, get Size() {
      return st;
    }, get BooleanSwitcher() {
      return nt;
    }, get Text() {
      return at;
    }, get ColorPicker() {
      return rt;
    }, get Dropdown() {
      return _t;
    }, get Button() {
      return Dt;
    } };
    return Object.defineProperty(k, "__isScriptSetup", { enumerable: !1, value: !0 }), k;
  }
}, Nn = { class: "vue-lab__control-block" }, In = { class: "vue-lab__control-block__header" }, Pn = { class: "vue-lab__control-block__header-ctrl" }, Dn = { class: "vue-lab__control-block__body custom-scroll" };
function Bn(r, n, t, e, s, _) {
  return y(), C("div", Nn, [
    O("div", In, [
      n[1] || (n[1] = O(
        "div",
        { class: "vue-lab__control-block__header-title" },
        "Controls",
        -1
        /* CACHED */
      )),
      O("div", Pn, [
        F(e.Button, { onClick: e.resetSettings }, {
          default: q(() => [...n[0] || (n[0] = [
            J(
              "Reset",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    O("div", Dn, [
      (y(!0), C(
        G,
        null,
        X(t.options, (u, a) => (y(), P(pe(e.componentsMap[u.ctrl]), {
          key: `ctrl-${u.ctrl}-${a}`,
          options: u.variants,
          title: u.title,
          value: e.getValue(u.field),
          onInput: (l) => e.handleInput({ ctrl: u.field, value: l })
        }, null, 40, ["options", "title", "value", "onInput"]))),
        128
        /* KEYED_FRAGMENT */
      ))
    ])
  ]);
}
const Ut = /* @__PURE__ */ z(jn, [["render", Bn], ["__scopeId", "data-v-25497d41"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/layout/ControlBlock/index.vue"]]), $n = {
  __name: "index",
  props: {
    isControls: { type: Boolean, default: () => !0 }
  },
  setup(r, { expose: n }) {
    n(), Ue((_) => ({
      "036062d8-gridTemplate": e.value
    }));
    const t = r, e = S(() => t.isControls ? "1fr 300px" : "1fr"), s = { props: t, gridTemplate: e, computed: S };
    return Object.defineProperty(s, "__isScriptSetup", { enumerable: !1, value: !0 }), s;
  }
}, zn = { class: "vue-lab" };
function Mn(r, n, t, e, s, _) {
  return y(), C("div", zn, [
    re(r.$slots, "default", {}, void 0, !0)
  ]);
}
const Ge = /* @__PURE__ */ z($n, [["render", Mn], ["__scopeId", "data-v-036062d8"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/layout/Page/index.vue"]]);
var Oe = { exports: {} }, oe = {}, ce = { exports: {} }, Ee = {}, Se = {}, ot;
function Fe() {
  if (ot) return Se;
  ot = 1;
  function r(e) {
    this.__parent = e, this.__character_count = 0, this.__indent_count = -1, this.__alignment_count = 0, this.__wrap_point_index = 0, this.__wrap_point_character_count = 0, this.__wrap_point_indent_count = -1, this.__wrap_point_alignment_count = 0, this.__items = [];
  }
  r.prototype.clone_empty = function() {
    var e = new r(this.__parent);
    return e.set_indent(this.__indent_count, this.__alignment_count), e;
  }, r.prototype.item = function(e) {
    return e < 0 ? this.__items[this.__items.length + e] : this.__items[e];
  }, r.prototype.has_match = function(e) {
    for (var s = this.__items.length - 1; s >= 0; s--)
      if (this.__items[s].match(e))
        return !0;
    return !1;
  }, r.prototype.set_indent = function(e, s) {
    this.is_empty() && (this.__indent_count = e || 0, this.__alignment_count = s || 0, this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count));
  }, r.prototype._set_wrap_point = function() {
    this.__parent.wrap_line_length && (this.__wrap_point_index = this.__items.length, this.__wrap_point_character_count = this.__character_count, this.__wrap_point_indent_count = this.__parent.next_line.__indent_count, this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count);
  }, r.prototype._should_wrap = function() {
    return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count;
  }, r.prototype._allow_wrap = function() {
    if (this._should_wrap()) {
      this.__parent.add_new_line();
      var e = this.__parent.current_line;
      return e.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count), e.__items = this.__items.slice(this.__wrap_point_index), this.__items = this.__items.slice(0, this.__wrap_point_index), e.__character_count += this.__character_count - this.__wrap_point_character_count, this.__character_count = this.__wrap_point_character_count, e.__items[0] === " " && (e.__items.splice(0, 1), e.__character_count -= 1), !0;
    }
    return !1;
  }, r.prototype.is_empty = function() {
    return this.__items.length === 0;
  }, r.prototype.last = function() {
    return this.is_empty() ? null : this.__items[this.__items.length - 1];
  }, r.prototype.push = function(e) {
    this.__items.push(e);
    var s = e.lastIndexOf(`
`);
    s !== -1 ? this.__character_count = e.length - s : this.__character_count += e.length;
  }, r.prototype.pop = function() {
    var e = null;
    return this.is_empty() || (e = this.__items.pop(), this.__character_count -= e.length), e;
  }, r.prototype._remove_indent = function() {
    this.__indent_count > 0 && (this.__indent_count -= 1, this.__character_count -= this.__parent.indent_size);
  }, r.prototype._remove_wrap_indent = function() {
    this.__wrap_point_indent_count > 0 && (this.__wrap_point_indent_count -= 1);
  }, r.prototype.trim = function() {
    for (; this.last() === " "; )
      this.__items.pop(), this.__character_count -= 1;
  }, r.prototype.toString = function() {
    var e = "";
    return this.is_empty() ? this.__parent.indent_empty_lines && (e = this.__parent.get_indent_string(this.__indent_count)) : (e = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count), e += this.__items.join("")), e;
  };
  function n(e, s) {
    this.__cache = [""], this.__indent_size = e.indent_size, this.__indent_string = e.indent_char, e.indent_with_tabs || (this.__indent_string = new Array(e.indent_size + 1).join(e.indent_char)), s = s || "", e.indent_level > 0 && (s = new Array(e.indent_level + 1).join(this.__indent_string)), this.__base_string = s, this.__base_string_length = s.length;
  }
  n.prototype.get_indent_size = function(e, s) {
    var _ = this.__base_string_length;
    return s = s || 0, e < 0 && (_ = 0), _ += e * this.__indent_size, _ += s, _;
  }, n.prototype.get_indent_string = function(e, s) {
    var _ = this.__base_string;
    return s = s || 0, e < 0 && (e = 0, _ = ""), s += e * this.__indent_size, this.__ensure_cache(s), _ += this.__cache[s], _;
  }, n.prototype.__ensure_cache = function(e) {
    for (; e >= this.__cache.length; )
      this.__add_column();
  }, n.prototype.__add_column = function() {
    var e = this.__cache.length, s = 0, _ = "";
    this.__indent_size && e >= this.__indent_size && (s = Math.floor(e / this.__indent_size), e -= s * this.__indent_size, _ = new Array(s + 1).join(this.__indent_string)), e && (_ += new Array(e + 1).join(" ")), this.__cache.push(_);
  };
  function t(e, s) {
    this.__indent_cache = new n(e, s), this.raw = !1, this._end_with_newline = e.end_with_newline, this.indent_size = e.indent_size, this.wrap_line_length = e.wrap_line_length, this.indent_empty_lines = e.indent_empty_lines, this.__lines = [], this.previous_line = null, this.current_line = null, this.next_line = new r(this), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1, this.__add_outputline();
  }
  return t.prototype.__add_outputline = function() {
    this.previous_line = this.current_line, this.current_line = this.next_line.clone_empty(), this.__lines.push(this.current_line);
  }, t.prototype.get_line_number = function() {
    return this.__lines.length;
  }, t.prototype.get_indent_string = function(e, s) {
    return this.__indent_cache.get_indent_string(e, s);
  }, t.prototype.get_indent_size = function(e, s) {
    return this.__indent_cache.get_indent_size(e, s);
  }, t.prototype.is_empty = function() {
    return !this.previous_line && this.current_line.is_empty();
  }, t.prototype.add_new_line = function(e) {
    return this.is_empty() || !e && this.just_added_newline() ? !1 : (this.raw || this.__add_outputline(), !0);
  }, t.prototype.get_code = function(e) {
    this.trim(!0);
    var s = this.current_line.pop();
    s && (s[s.length - 1] === `
` && (s = s.replace(/\n+$/g, "")), this.current_line.push(s)), this._end_with_newline && this.__add_outputline();
    var _ = this.__lines.join(`
`);
    return e !== `
` && (_ = _.replace(/[\n]/g, e)), _;
  }, t.prototype.set_wrap_point = function() {
    this.current_line._set_wrap_point();
  }, t.prototype.set_indent = function(e, s) {
    return e = e || 0, s = s || 0, this.next_line.set_indent(e, s), this.__lines.length > 1 ? (this.current_line.set_indent(e, s), !0) : (this.current_line.set_indent(), !1);
  }, t.prototype.add_raw_token = function(e) {
    for (var s = 0; s < e.newlines; s++)
      this.__add_outputline();
    this.current_line.set_indent(-1), this.current_line.push(e.whitespace_before), this.current_line.push(e.text), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1;
  }, t.prototype.add_token = function(e) {
    this.__add_space_before_token(), this.current_line.push(e), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = this.current_line._allow_wrap();
  }, t.prototype.__add_space_before_token = function() {
    this.space_before_token && !this.just_added_newline() && (this.non_breaking_space || this.set_wrap_point(), this.current_line.push(" "));
  }, t.prototype.remove_indent = function(e) {
    for (var s = this.__lines.length; e < s; )
      this.__lines[e]._remove_indent(), e++;
    this.current_line._remove_wrap_indent();
  }, t.prototype.trim = function(e) {
    for (e = e === void 0 ? !1 : e, this.current_line.trim(); e && this.__lines.length > 1 && this.current_line.is_empty(); )
      this.__lines.pop(), this.current_line = this.__lines[this.__lines.length - 1], this.current_line.trim();
    this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null;
  }, t.prototype.just_added_newline = function() {
    return this.current_line.is_empty();
  }, t.prototype.just_added_blankline = function() {
    return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty();
  }, t.prototype.ensure_empty_line_above = function(e, s) {
    for (var _ = this.__lines.length - 2; _ >= 0; ) {
      var u = this.__lines[_];
      if (u.is_empty())
        break;
      if (u.item(0).indexOf(e) !== 0 && u.item(-1) !== s) {
        this.__lines.splice(_ + 1, 0, new r(this)), this.previous_line = this.__lines[this.__lines.length - 2];
        break;
      }
      _--;
    }
  }, Se.Output = t, Se;
}
var Te = {}, ut;
function Wt() {
  if (ut) return Te;
  ut = 1;
  function r(n, t, e, s) {
    this.type = n, this.text = t, this.comments_before = null, this.newlines = e || 0, this.whitespace_before = s || "", this.parent = null, this.next = null, this.previous = null, this.opened = null, this.closed = null, this.directives = null;
  }
  return Te.Token = r, Te;
}
var Ce = {}, lt;
function Vt() {
  return lt || (lt = 1, (function(r) {
    var n = "\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a", t = "\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a", e = "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc", s = "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f", _ = "\\\\u[0-9a-fA-F]{4}|\\\\u\\{[0-9a-fA-F]+\\}", u = "(?:" + _ + "|[" + n + e + "])", a = "(?:" + _ + "|[" + t + e + s + "])*";
    r.identifier = new RegExp(u + a, "g"), r.identifierStart = new RegExp(u), r.identifierMatch = new RegExp("(?:" + _ + "|[" + t + e + s + "])+"), r.newline = /[\n\r\u2028\u2029]/, r.lineBreak = new RegExp(`\r
|` + r.newline.source), r.allLineBreaks = new RegExp(r.lineBreak.source, "g");
  })(Ce)), Ce;
}
var Re = {}, ue = {}, pt;
function Xe() {
  if (pt) return ue;
  pt = 1;
  function r(e, s) {
    this.raw_options = n(e, s), this.disabled = this._get_boolean("disabled"), this.eol = this._get_characters("eol", "auto"), this.end_with_newline = this._get_boolean("end_with_newline"), this.indent_size = this._get_number("indent_size", 4), this.indent_char = this._get_characters("indent_char", " "), this.indent_level = this._get_number("indent_level"), this.preserve_newlines = this._get_boolean("preserve_newlines", !0), this.max_preserve_newlines = this._get_number("max_preserve_newlines", 32786), this.preserve_newlines || (this.max_preserve_newlines = 0), this.indent_with_tabs = this._get_boolean("indent_with_tabs", this.indent_char === "	"), this.indent_with_tabs && (this.indent_char = "	", this.indent_size === 1 && (this.indent_size = 4)), this.wrap_line_length = this._get_number("wrap_line_length", this._get_number("max_char")), this.indent_empty_lines = this._get_boolean("indent_empty_lines"), this.templating = this._get_selection_list("templating", ["auto", "none", "angular", "django", "erb", "handlebars", "php", "smarty"], ["auto"]);
  }
  r.prototype._get_array = function(e, s) {
    var _ = this.raw_options[e], u = s || [];
    return typeof _ == "object" ? _ !== null && typeof _.concat == "function" && (u = _.concat()) : typeof _ == "string" && (u = _.split(/[^a-zA-Z0-9_\/\-]+/)), u;
  }, r.prototype._get_boolean = function(e, s) {
    var _ = this.raw_options[e], u = _ === void 0 ? !!s : !!_;
    return u;
  }, r.prototype._get_characters = function(e, s) {
    var _ = this.raw_options[e], u = s || "";
    return typeof _ == "string" && (u = _.replace(/\\r/, "\r").replace(/\\n/, `
`).replace(/\\t/, "	")), u;
  }, r.prototype._get_number = function(e, s) {
    var _ = this.raw_options[e];
    s = parseInt(s, 10), isNaN(s) && (s = 0);
    var u = parseInt(_, 10);
    return isNaN(u) && (u = s), u;
  }, r.prototype._get_selection = function(e, s, _) {
    var u = this._get_selection_list(e, s, _);
    if (u.length !== 1)
      throw new Error(
        "Invalid Option Value: The option '" + e + `' can only be one of the following values:
` + s + `
You passed in: '` + this.raw_options[e] + "'"
      );
    return u[0];
  }, r.prototype._get_selection_list = function(e, s, _) {
    if (!s || s.length === 0)
      throw new Error("Selection list cannot be empty.");
    if (_ = _ || [s[0]], !this._is_valid_selection(_, s))
      throw new Error("Invalid Default Value!");
    var u = this._get_array(e, _);
    if (!this._is_valid_selection(u, s))
      throw new Error(
        "Invalid Option Value: The option '" + e + `' can contain only the following values:
` + s + `
You passed in: '` + this.raw_options[e] + "'"
      );
    return u;
  }, r.prototype._is_valid_selection = function(e, s) {
    return e.length && s.length && !e.some(function(_) {
      return s.indexOf(_) === -1;
    });
  };
  function n(e, s) {
    var _ = {};
    e = t(e);
    var u;
    for (u in e)
      u !== s && (_[u] = e[u]);
    if (s && e[s])
      for (u in e[s])
        _[u] = e[s][u];
    return _;
  }
  function t(e) {
    var s = {}, _;
    for (_ in e) {
      var u = _.replace(/-/g, "_");
      s[u] = e[_];
    }
    return s;
  }
  return ue.Options = r, ue.normalizeOpts = t, ue.mergeOpts = n, ue;
}
var ct;
function qt() {
  if (ct) return Re;
  ct = 1;
  var r = Xe().Options, n = ["before-newline", "after-newline", "preserve-newline"];
  function t(e) {
    r.call(this, e, "js");
    var s = this.raw_options.brace_style || null;
    s === "expand-strict" ? this.raw_options.brace_style = "expand" : s === "collapse-preserve-inline" ? this.raw_options.brace_style = "collapse,preserve-inline" : this.raw_options.braces_on_own_line !== void 0 && (this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse");
    var _ = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
    this.brace_preserve_inline = !1, this.brace_style = "collapse";
    for (var u = 0; u < _.length; u++)
      _[u] === "preserve-inline" ? this.brace_preserve_inline = !0 : this.brace_style = _[u];
    this.unindent_chained_methods = this._get_boolean("unindent_chained_methods"), this.break_chained_methods = this._get_boolean("break_chained_methods"), this.space_in_paren = this._get_boolean("space_in_paren"), this.space_in_empty_paren = this._get_boolean("space_in_empty_paren"), this.jslint_happy = this._get_boolean("jslint_happy"), this.space_after_anon_function = this._get_boolean("space_after_anon_function"), this.space_after_named_function = this._get_boolean("space_after_named_function"), this.keep_array_indentation = this._get_boolean("keep_array_indentation"), this.space_before_conditional = this._get_boolean("space_before_conditional", !0), this.unescape_strings = this._get_boolean("unescape_strings"), this.e4x = this._get_boolean("e4x"), this.comma_first = this._get_boolean("comma_first"), this.operator_position = this._get_selection("operator_position", n), this.test_output_raw = this._get_boolean("test_output_raw"), this.jslint_happy && (this.space_after_anon_function = !0);
  }
  return t.prototype = new r(), Re.Options = t, Re;
}
var ae = {}, Le = {}, ht;
function He() {
  if (ht) return Le;
  ht = 1;
  var r = RegExp.prototype.hasOwnProperty("sticky");
  function n(t) {
    this.__input = t || "", this.__input_length = this.__input.length, this.__position = 0;
  }
  return n.prototype.restart = function() {
    this.__position = 0;
  }, n.prototype.back = function() {
    this.__position > 0 && (this.__position -= 1);
  }, n.prototype.hasNext = function() {
    return this.__position < this.__input_length;
  }, n.prototype.next = function() {
    var t = null;
    return this.hasNext() && (t = this.__input.charAt(this.__position), this.__position += 1), t;
  }, n.prototype.peek = function(t) {
    var e = null;
    return t = t || 0, t += this.__position, t >= 0 && t < this.__input_length && (e = this.__input.charAt(t)), e;
  }, n.prototype.__match = function(t, e) {
    t.lastIndex = e;
    var s = t.exec(this.__input);
    return s && !(r && t.sticky) && s.index !== e && (s = null), s;
  }, n.prototype.test = function(t, e) {
    return e = e || 0, e += this.__position, e >= 0 && e < this.__input_length ? !!this.__match(t, e) : !1;
  }, n.prototype.testChar = function(t, e) {
    var s = this.peek(e);
    return t.lastIndex = 0, s !== null && t.test(s);
  }, n.prototype.match = function(t) {
    var e = this.__match(t, this.__position);
    return e ? this.__position += e[0].length : e = null, e;
  }, n.prototype.read = function(t, e, s) {
    var _ = "", u;
    return t && (u = this.match(t), u && (_ += u[0])), e && (u || !t) && (_ += this.readUntil(e, s)), _;
  }, n.prototype.readUntil = function(t, e) {
    var s = "", _ = this.__position;
    t.lastIndex = this.__position;
    var u = t.exec(this.__input);
    return u ? (_ = u.index, e && (_ += u[0].length)) : _ = this.__input_length, s = this.__input.substring(this.__position, _), this.__position = _, s;
  }, n.prototype.readUntilAfter = function(t) {
    return this.readUntil(t, !0);
  }, n.prototype.get_regexp = function(t, e) {
    var s = null, _ = "g";
    return e && r && (_ = "y"), typeof t == "string" && t !== "" ? s = new RegExp(t, _) : t && (s = new RegExp(t.source, _)), s;
  }, n.prototype.get_literal_regexp = function(t) {
    return RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
  }, n.prototype.peekUntilAfter = function(t) {
    var e = this.__position, s = this.readUntilAfter(t);
    return this.__position = e, s;
  }, n.prototype.lookBack = function(t) {
    var e = this.__position - 1;
    return e >= t.length && this.__input.substring(e - t.length, e).toLowerCase() === t;
  }, Le.InputScanner = n, Le;
}
var he = {}, Ae = {}, ft;
function Kn() {
  if (ft) return Ae;
  ft = 1;
  function r(n) {
    this.__tokens = [], this.__tokens_length = this.__tokens.length, this.__position = 0, this.__parent_token = n;
  }
  return r.prototype.restart = function() {
    this.__position = 0;
  }, r.prototype.isEmpty = function() {
    return this.__tokens_length === 0;
  }, r.prototype.hasNext = function() {
    return this.__position < this.__tokens_length;
  }, r.prototype.next = function() {
    var n = null;
    return this.hasNext() && (n = this.__tokens[this.__position], this.__position += 1), n;
  }, r.prototype.peek = function(n) {
    var t = null;
    return n = n || 0, n += this.__position, n >= 0 && n < this.__tokens_length && (t = this.__tokens[n]), t;
  }, r.prototype.add = function(n) {
    this.__parent_token && (n.parent = this.__parent_token), this.__tokens.push(n), this.__tokens_length += 1;
  }, Ae.TokenStream = r, Ae;
}
var je = {}, Ne = {}, dt;
function xe() {
  if (dt) return Ne;
  dt = 1;
  function r(n, t) {
    this._input = n, this._starting_pattern = null, this._match_pattern = null, this._until_pattern = null, this._until_after = !1, t && (this._starting_pattern = this._input.get_regexp(t._starting_pattern, !0), this._match_pattern = this._input.get_regexp(t._match_pattern, !0), this._until_pattern = this._input.get_regexp(t._until_pattern), this._until_after = t._until_after);
  }
  return r.prototype.read = function() {
    var n = this._input.read(this._starting_pattern);
    return (!this._starting_pattern || n) && (n += this._input.read(this._match_pattern, this._until_pattern, this._until_after)), n;
  }, r.prototype.read_match = function() {
    return this._input.match(this._match_pattern);
  }, r.prototype.until_after = function(n) {
    var t = this._create();
    return t._until_after = !0, t._until_pattern = this._input.get_regexp(n), t._update(), t;
  }, r.prototype.until = function(n) {
    var t = this._create();
    return t._until_after = !1, t._until_pattern = this._input.get_regexp(n), t._update(), t;
  }, r.prototype.starting_with = function(n) {
    var t = this._create();
    return t._starting_pattern = this._input.get_regexp(n, !0), t._update(), t;
  }, r.prototype.matching = function(n) {
    var t = this._create();
    return t._match_pattern = this._input.get_regexp(n, !0), t._update(), t;
  }, r.prototype._create = function() {
    return new r(this._input, this);
  }, r.prototype._update = function() {
  }, Ne.Pattern = r, Ne;
}
var vt;
function Un() {
  if (vt) return je;
  vt = 1;
  var r = xe().Pattern;
  function n(t, e) {
    r.call(this, t, e), e ? this._line_regexp = this._input.get_regexp(e._line_regexp) : this.__set_whitespace_patterns("", ""), this.newline_count = 0, this.whitespace_before_token = "";
  }
  return n.prototype = new r(), n.prototype.__set_whitespace_patterns = function(t, e) {
    t += "\\t ", e += "\\n\\r", this._match_pattern = this._input.get_regexp(
      "[" + t + e + "]+",
      !0
    ), this._newline_regexp = this._input.get_regexp(
      "\\r\\n|[" + e + "]"
    );
  }, n.prototype.read = function() {
    this.newline_count = 0, this.whitespace_before_token = "";
    var t = this._input.read(this._match_pattern);
    if (t === " ")
      this.whitespace_before_token = " ";
    else if (t) {
      var e = this.__split(this._newline_regexp, t);
      this.newline_count = e.length - 1, this.whitespace_before_token = e[this.newline_count];
    }
    return t;
  }, n.prototype.matching = function(t, e) {
    var s = this._create();
    return s.__set_whitespace_patterns(t, e), s._update(), s;
  }, n.prototype._create = function() {
    return new n(this._input, this);
  }, n.prototype.__split = function(t, e) {
    t.lastIndex = 0;
    for (var s = 0, _ = [], u = t.exec(e); u; )
      _.push(e.substring(s, u.index)), s = u.index + u[0].length, u = t.exec(e);
    return s < e.length ? _.push(e.substring(s, e.length)) : _.push(""), _;
  }, je.WhitespacePattern = n, je;
}
var mt;
function be() {
  if (mt) return he;
  mt = 1;
  var r = He().InputScanner, n = Wt().Token, t = Kn().TokenStream, e = Un().WhitespacePattern, s = {
    START: "TK_START",
    RAW: "TK_RAW",
    EOF: "TK_EOF"
  }, _ = function(u, a) {
    this._input = new r(u), this._options = a || {}, this.__tokens = null, this._patterns = {}, this._patterns.whitespace = new e(this._input);
  };
  return _.prototype.tokenize = function() {
    this._input.restart(), this.__tokens = new t(), this._reset();
    for (var u, a = new n(s.START, ""), l = null, k = [], f = new t(); a.type !== s.EOF; ) {
      for (u = this._get_next_token(a, l); this._is_comment(u); )
        f.add(u), u = this._get_next_token(a, l);
      f.isEmpty() || (u.comments_before = f, f = new t()), u.parent = l, this._is_opening(u) ? (k.push(l), l = u) : l && this._is_closing(u, l) && (u.opened = l, l.closed = u, l = k.pop(), u.parent = l), u.previous = a, a.next = u, this.__tokens.add(u), a = u;
    }
    return this.__tokens;
  }, _.prototype._is_first_token = function() {
    return this.__tokens.isEmpty();
  }, _.prototype._reset = function() {
  }, _.prototype._get_next_token = function(u, a) {
    this._readWhitespace();
    var l = this._input.read(/.+/g);
    return l ? this._create_token(s.RAW, l) : this._create_token(s.EOF, "");
  }, _.prototype._is_comment = function(u) {
    return !1;
  }, _.prototype._is_opening = function(u) {
    return !1;
  }, _.prototype._is_closing = function(u, a) {
    return !1;
  }, _.prototype._create_token = function(u, a) {
    var l = new n(
      u,
      a,
      this._patterns.whitespace.newline_count,
      this._patterns.whitespace.whitespace_before_token
    );
    return l;
  }, _.prototype._readWhitespace = function() {
    return this._patterns.whitespace.read();
  }, he.Tokenizer = _, he.TOKEN = s, he;
}
var Ie = {}, gt;
function Qe() {
  if (gt) return Ie;
  gt = 1;
  function r(n, t) {
    n = typeof n == "string" ? n : n.source, t = typeof t == "string" ? t : t.source, this.__directives_block_pattern = new RegExp(n + / beautify( \w+[:]\w+)+ /.source + t, "g"), this.__directive_pattern = / (\w+)[:](\w+)/g, this.__directives_end_ignore_pattern = new RegExp(n + /\sbeautify\signore:end\s/.source + t, "g");
  }
  return r.prototype.get_directives = function(n) {
    if (!n.match(this.__directives_block_pattern))
      return null;
    var t = {};
    this.__directive_pattern.lastIndex = 0;
    for (var e = this.__directive_pattern.exec(n); e; )
      t[e[1]] = e[2], e = this.__directive_pattern.exec(n);
    return t;
  }, r.prototype.readIgnored = function(n) {
    return n.readUntilAfter(this.__directives_end_ignore_pattern);
  }, Ie.Directives = r, Ie;
}
var Pe = {}, bt;
function Gt() {
  if (bt) return Pe;
  bt = 1;
  var r = xe().Pattern, n = {
    django: !1,
    erb: !1,
    handlebars: !1,
    php: !1,
    smarty: !1,
    angular: !1
  };
  function t(e, s) {
    r.call(this, e, s), this.__template_pattern = null, this._disabled = Object.assign({}, n), this._excluded = Object.assign({}, n), s && (this.__template_pattern = this._input.get_regexp(s.__template_pattern), this._excluded = Object.assign(this._excluded, s._excluded), this._disabled = Object.assign(this._disabled, s._disabled));
    var _ = new r(e);
    this.__patterns = {
      handlebars_comment: _.starting_with(/{{!--/).until_after(/--}}/),
      handlebars_unescaped: _.starting_with(/{{{/).until_after(/}}}/),
      handlebars: _.starting_with(/{{/).until_after(/}}/),
      php: _.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
      erb: _.starting_with(/<%[^%]/).until_after(/[^%]%>/),
      // django coflicts with handlebars a bit.
      django: _.starting_with(/{%/).until_after(/%}/),
      django_value: _.starting_with(/{{/).until_after(/}}/),
      django_comment: _.starting_with(/{#/).until_after(/#}/),
      smarty: _.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
      smarty_comment: _.starting_with(/{\*/).until_after(/\*}/),
      smarty_literal: _.starting_with(/{literal}/).until_after(/{\/literal}/)
    };
  }
  return t.prototype = new r(), t.prototype._create = function() {
    return new t(this._input, this);
  }, t.prototype._update = function() {
    this.__set_templated_pattern();
  }, t.prototype.disable = function(e) {
    var s = this._create();
    return s._disabled[e] = !0, s._update(), s;
  }, t.prototype.read_options = function(e) {
    var s = this._create();
    for (var _ in n)
      s._disabled[_] = e.templating.indexOf(_) === -1;
    return s._update(), s;
  }, t.prototype.exclude = function(e) {
    var s = this._create();
    return s._excluded[e] = !0, s._update(), s;
  }, t.prototype.read = function() {
    var e = "";
    this._match_pattern ? e = this._input.read(this._starting_pattern) : e = this._input.read(this._starting_pattern, this.__template_pattern);
    for (var s = this._read_template(); s; )
      this._match_pattern ? s += this._input.read(this._match_pattern) : s += this._input.readUntil(this.__template_pattern), e += s, s = this._read_template();
    return this._until_after && (e += this._input.readUntilAfter(this._until_pattern)), e;
  }, t.prototype.__set_templated_pattern = function() {
    var e = [];
    this._disabled.php || e.push(this.__patterns.php._starting_pattern.source), this._disabled.handlebars || e.push(this.__patterns.handlebars._starting_pattern.source), this._disabled.angular || e.push(this.__patterns.handlebars._starting_pattern.source), this._disabled.erb || e.push(this.__patterns.erb._starting_pattern.source), this._disabled.django || (e.push(this.__patterns.django._starting_pattern.source), e.push(this.__patterns.django_value._starting_pattern.source), e.push(this.__patterns.django_comment._starting_pattern.source)), this._disabled.smarty || e.push(this.__patterns.smarty._starting_pattern.source), this._until_pattern && e.push(this._until_pattern.source), this.__template_pattern = this._input.get_regexp("(?:" + e.join("|") + ")");
  }, t.prototype._read_template = function() {
    var e = "", s = this._input.peek();
    if (s === "<") {
      var _ = this._input.peek(1);
      !this._disabled.php && !this._excluded.php && _ === "?" && (e = e || this.__patterns.php.read()), !this._disabled.erb && !this._excluded.erb && _ === "%" && (e = e || this.__patterns.erb.read());
    } else s === "{" && (!this._disabled.handlebars && !this._excluded.handlebars && (e = e || this.__patterns.handlebars_comment.read(), e = e || this.__patterns.handlebars_unescaped.read(), e = e || this.__patterns.handlebars.read()), this._disabled.django || (!this._excluded.django && !this._excluded.handlebars && (e = e || this.__patterns.django_value.read()), this._excluded.django || (e = e || this.__patterns.django_comment.read(), e = e || this.__patterns.django.read())), this._disabled.smarty || this._disabled.django && this._disabled.handlebars && (e = e || this.__patterns.smarty_comment.read(), e = e || this.__patterns.smarty_literal.read(), e = e || this.__patterns.smarty.read()));
    return e;
  }, Pe.TemplatablePattern = t, Pe;
}
var yt;
function fe() {
  if (yt) return ae;
  yt = 1;
  var r = He().InputScanner, n = be().Tokenizer, t = be().TOKEN, e = Qe().Directives, s = Vt(), _ = xe().Pattern, u = Gt().TemplatablePattern;
  function a(b, w) {
    return w.indexOf(b) !== -1;
  }
  var l = {
    START_EXPR: "TK_START_EXPR",
    END_EXPR: "TK_END_EXPR",
    START_BLOCK: "TK_START_BLOCK",
    END_BLOCK: "TK_END_BLOCK",
    WORD: "TK_WORD",
    RESERVED: "TK_RESERVED",
    SEMICOLON: "TK_SEMICOLON",
    STRING: "TK_STRING",
    EQUALS: "TK_EQUALS",
    OPERATOR: "TK_OPERATOR",
    COMMA: "TK_COMMA",
    BLOCK_COMMENT: "TK_BLOCK_COMMENT",
    COMMENT: "TK_COMMENT",
    DOT: "TK_DOT",
    UNKNOWN: "TK_UNKNOWN",
    START: t.START,
    RAW: t.RAW,
    EOF: t.EOF
  }, k = new e(/\/\*/, /\*\//), f = /0[xX][0123456789abcdefABCDEF_]*n?|0[oO][01234567_]*n?|0[bB][01_]*n?|\d[\d_]*n|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/, v = /[0-9]/, x = /[^\d\.]/, R = ">>> === !== &&= ??= ||= << && >= ** != == <= >> || ?? |> < / - + > : & % ? ^ | *".split(" "), j = ">>>= ... >>= <<= === >>> !== **= &&= ??= ||= => ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |";
  j = j.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"), j = "\\?\\.(?!\\d) " + j, j = j.replace(/ /g, "|");
  var A = new RegExp(j), p = "continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(","), o = p.concat(["do", "in", "of", "else", "get", "set", "new", "catch", "finally", "typeof", "yield", "async", "await", "from", "as", "class", "extends"]), h = new RegExp("^(?:" + o.join("|") + ")$"), T, E = function(b, w) {
    n.call(this, b, w), this._patterns.whitespace = this._patterns.whitespace.matching(
      /\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source,
      /\u2028\u2029/.source
    );
    var c = new _(this._input), g = new u(this._input).read_options(this._options);
    this.__patterns = {
      template: g,
      identifier: g.starting_with(s.identifier).matching(s.identifierMatch),
      number: c.matching(f),
      punct: c.matching(A),
      // comment ends just before nearest linefeed or end of file
      comment: c.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
      //  /* ... */ comment ends with nearest */ or end of file
      block_comment: c.starting_with(/\/\*/).until_after(/\*\//),
      html_comment_start: c.matching(/<!--/),
      html_comment_end: c.matching(/-->/),
      include: c.starting_with(/#include/).until_after(s.lineBreak),
      shebang: c.starting_with(/#!/).until_after(s.lineBreak),
      xml: c.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[^}]+?}|!\[CDATA\[[^\]]*?\]\]|)(\s*{[^}]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{([^{}]|{[^}]+?})+?}))*\s*(\/?)\s*>/),
      single_quote: g.until(/['\\\n\r\u2028\u2029]/),
      double_quote: g.until(/["\\\n\r\u2028\u2029]/),
      template_text: g.until(/[`\\$]/),
      template_expression: g.until(/[`}\\]/)
    };
  };
  E.prototype = new n(), E.prototype._is_comment = function(b) {
    return b.type === l.COMMENT || b.type === l.BLOCK_COMMENT || b.type === l.UNKNOWN;
  }, E.prototype._is_opening = function(b) {
    return b.type === l.START_BLOCK || b.type === l.START_EXPR;
  }, E.prototype._is_closing = function(b, w) {
    return (b.type === l.END_BLOCK || b.type === l.END_EXPR) && w && (b.text === "]" && w.text === "[" || b.text === ")" && w.text === "(" || b.text === "}" && w.text === "{");
  }, E.prototype._reset = function() {
    T = !1;
  }, E.prototype._get_next_token = function(b, w) {
    var c = null;
    this._readWhitespace();
    var g = this._input.peek();
    return g === null ? this._create_token(l.EOF, "") : (c = c || this._read_non_javascript(g), c = c || this._read_string(g), c = c || this._read_pair(g, this._input.peek(1)), c = c || this._read_word(b), c = c || this._read_singles(g), c = c || this._read_comment(g), c = c || this._read_regexp(g, b), c = c || this._read_xml(g, b), c = c || this._read_punctuation(), c = c || this._create_token(l.UNKNOWN, this._input.next()), c);
  }, E.prototype._read_word = function(b) {
    var w;
    if (w = this.__patterns.identifier.read(), w !== "")
      return w = w.replace(s.allLineBreaks, `
`), !(b.type === l.DOT || b.type === l.RESERVED && (b.text === "set" || b.text === "get")) && h.test(w) ? (w === "in" || w === "of") && (b.type === l.WORD || b.type === l.STRING) ? this._create_token(l.OPERATOR, w) : this._create_token(l.RESERVED, w) : this._create_token(l.WORD, w);
    if (w = this.__patterns.number.read(), w !== "")
      return this._create_token(l.WORD, w);
  }, E.prototype._read_singles = function(b) {
    var w = null;
    return b === "(" || b === "[" ? w = this._create_token(l.START_EXPR, b) : b === ")" || b === "]" ? w = this._create_token(l.END_EXPR, b) : b === "{" ? w = this._create_token(l.START_BLOCK, b) : b === "}" ? w = this._create_token(l.END_BLOCK, b) : b === ";" ? w = this._create_token(l.SEMICOLON, b) : b === "." && x.test(this._input.peek(1)) ? w = this._create_token(l.DOT, b) : b === "," && (w = this._create_token(l.COMMA, b)), w && this._input.next(), w;
  }, E.prototype._read_pair = function(b, w) {
    var c = null;
    return b === "#" && w === "{" && (c = this._create_token(l.START_BLOCK, b + w)), c && (this._input.next(), this._input.next()), c;
  }, E.prototype._read_punctuation = function() {
    var b = this.__patterns.punct.read();
    if (b !== "")
      return b === "=" ? this._create_token(l.EQUALS, b) : b === "?." ? this._create_token(l.DOT, b) : this._create_token(l.OPERATOR, b);
  }, E.prototype._read_non_javascript = function(b) {
    var w = "";
    if (b === "#") {
      if (this._is_first_token() && (w = this.__patterns.shebang.read(), w))
        return this._create_token(l.UNKNOWN, w.trim() + `
`);
      if (w = this.__patterns.include.read(), w)
        return this._create_token(l.UNKNOWN, w.trim() + `
`);
      b = this._input.next();
      var c = "#";
      if (this._input.hasNext() && this._input.testChar(v)) {
        do
          b = this._input.next(), c += b;
        while (this._input.hasNext() && b !== "#" && b !== "=");
        return b === "#" || (this._input.peek() === "[" && this._input.peek(1) === "]" ? (c += "[]", this._input.next(), this._input.next()) : this._input.peek() === "{" && this._input.peek(1) === "}" && (c += "{}", this._input.next(), this._input.next())), this._create_token(l.WORD, c);
      }
      this._input.back();
    } else if (b === "<" && this._is_first_token()) {
      if (w = this.__patterns.html_comment_start.read(), w) {
        for (; this._input.hasNext() && !this._input.testChar(s.newline); )
          w += this._input.next();
        return T = !0, this._create_token(l.COMMENT, w);
      }
    } else if (T && b === "-" && (w = this.__patterns.html_comment_end.read(), w))
      return T = !1, this._create_token(l.COMMENT, w);
    return null;
  }, E.prototype._read_comment = function(b) {
    var w = null;
    if (b === "/") {
      var c = "";
      if (this._input.peek(1) === "*") {
        c = this.__patterns.block_comment.read();
        var g = k.get_directives(c);
        g && g.ignore === "start" && (c += k.readIgnored(this._input)), c = c.replace(s.allLineBreaks, `
`), w = this._create_token(l.BLOCK_COMMENT, c), w.directives = g;
      } else this._input.peek(1) === "/" && (c = this.__patterns.comment.read(), w = this._create_token(l.COMMENT, c));
    }
    return w;
  }, E.prototype._read_string = function(b) {
    if (b === "`" || b === "'" || b === '"') {
      var w = this._input.next();
      return this.has_char_escapes = !1, b === "`" ? w += this._read_string_recursive("`", !0, "${") : w += this._read_string_recursive(b), this.has_char_escapes && this._options.unescape_strings && (w = I(w)), this._input.peek() === b && (w += this._input.next()), w = w.replace(s.allLineBreaks, `
`), this._create_token(l.STRING, w);
    }
    return null;
  }, E.prototype._allow_regexp_or_xml = function(b) {
    return b.type === l.RESERVED && a(b.text, ["return", "case", "throw", "else", "do", "typeof", "yield"]) || b.type === l.END_EXPR && b.text === ")" && b.opened.previous.type === l.RESERVED && a(b.opened.previous.text, ["if", "while", "for"]) || a(b.type, [
      l.COMMENT,
      l.START_EXPR,
      l.START_BLOCK,
      l.START,
      l.END_BLOCK,
      l.OPERATOR,
      l.EQUALS,
      l.EOF,
      l.SEMICOLON,
      l.COMMA
    ]);
  }, E.prototype._read_regexp = function(b, w) {
    if (b === "/" && this._allow_regexp_or_xml(w)) {
      for (var c = this._input.next(), g = !1, i = !1; this._input.hasNext() && (g || i || this._input.peek() !== b) && !this._input.testChar(s.newline); )
        c += this._input.peek(), g ? g = !1 : (g = this._input.peek() === "\\", this._input.peek() === "[" ? i = !0 : this._input.peek() === "]" && (i = !1)), this._input.next();
      return this._input.peek() === b && (c += this._input.next(), c += this._input.read(s.identifier)), this._create_token(l.STRING, c);
    }
    return null;
  }, E.prototype._read_xml = function(b, w) {
    if (this._options.e4x && b === "<" && this._allow_regexp_or_xml(w)) {
      var c = "", g = this.__patterns.xml.read_match();
      if (g) {
        for (var i = g[2].replace(/^{\s+/, "{").replace(/\s+}$/, "}"), d = i.indexOf("{") === 0, m = 0; g; ) {
          var N = !!g[1], B = g[2], W = !!g[g.length - 1] || B.slice(0, 8) === "![CDATA[";
          if (!W && (B === i || d && B.replace(/^{\s+/, "{").replace(/\s+}$/, "}")) && (N ? --m : ++m), c += g[0], m <= 0)
            break;
          g = this.__patterns.xml.read_match();
        }
        return g || (c += this._input.match(/[\s\S]*/g)[0]), c = c.replace(s.allLineBreaks, `
`), this._create_token(l.STRING, c);
      }
    }
    return null;
  };
  function I(b) {
    for (var w = "", c = 0, g = new r(b), i = null; g.hasNext(); )
      if (i = g.match(/([\s]|[^\\]|\\\\)+/g), i && (w += i[0]), g.peek() === "\\") {
        if (g.next(), g.peek() === "x")
          i = g.match(/x([0-9A-Fa-f]{2})/g);
        else if (g.peek() === "u")
          i = g.match(/u([0-9A-Fa-f]{4})/g), i || (i = g.match(/u\{([0-9A-Fa-f]+)\}/g));
        else {
          w += "\\", g.hasNext() && (w += g.next());
          continue;
        }
        if (!i || (c = parseInt(i[1], 16), c > 126 && c <= 255 && i[0].indexOf("x") === 0))
          return b;
        c >= 0 && c < 32 || c > 1114111 ? w += "\\" + i[0] : c === 34 || c === 39 || c === 92 ? w += "\\" + String.fromCharCode(c) : w += String.fromCharCode(c);
      }
    return w;
  }
  return E.prototype._read_string_recursive = function(b, w, c) {
    var g, i;
    b === "'" ? i = this.__patterns.single_quote : b === '"' ? i = this.__patterns.double_quote : b === "`" ? i = this.__patterns.template_text : b === "}" && (i = this.__patterns.template_expression);
    for (var d = i.read(), m = ""; this._input.hasNext(); ) {
      if (m = this._input.next(), m === b || !w && s.newline.test(m)) {
        this._input.back();
        break;
      } else m === "\\" && this._input.hasNext() ? (g = this._input.peek(), g === "x" || g === "u" ? this.has_char_escapes = !0 : g === "\r" && this._input.peek(1) === `
` && this._input.next(), m += this._input.next()) : c && (c === "${" && m === "$" && this._input.peek() === "{" && (m += this._input.next()), c === m && (b === "`" ? m += this._read_string_recursive("}", w, "`") : m += this._read_string_recursive("`", w, "${"), this._input.hasNext() && (m += this._input.next())));
      m += i.read(), d += m;
    }
    return d;
  }, ae.Tokenizer = E, ae.TOKEN = l, ae.positionable_operators = R.slice(), ae.line_starters = p.slice(), ae;
}
var xt;
function Wn() {
  if (xt) return Ee;
  xt = 1;
  var r = Fe().Output, n = Wt().Token, t = Vt(), e = qt().Options, s = fe().Tokenizer, _ = fe().line_starters, u = fe().positionable_operators, a = fe().TOKEN;
  function l(i, d) {
    return d.indexOf(i) !== -1;
  }
  function k(i) {
    return i.replace(/^\s+/g, "");
  }
  function f(i) {
    for (var d = {}, m = 0; m < i.length; m++)
      d[i[m].replace(/-/g, "_")] = i[m];
    return d;
  }
  function v(i, d) {
    return i && i.type === a.RESERVED && i.text === d;
  }
  function x(i, d) {
    return i && i.type === a.RESERVED && l(i.text, d);
  }
  var R = ["case", "return", "do", "if", "throw", "else", "await", "break", "continue", "async"], j = ["before-newline", "after-newline", "preserve-newline"], A = f(j), p = [A.before_newline, A.preserve_newline], o = {
    BlockStatement: "BlockStatement",
    // 'BLOCK'
    Statement: "Statement",
    // 'STATEMENT'
    ObjectLiteral: "ObjectLiteral",
    // 'OBJECT',
    ArrayLiteral: "ArrayLiteral",
    //'[EXPRESSION]',
    ForInitializer: "ForInitializer",
    //'(FOR-EXPRESSION)',
    Conditional: "Conditional",
    //'(COND-EXPRESSION)',
    Expression: "Expression"
    //'(EXPRESSION)'
  };
  function h(i, d) {
    d.multiline_frame || d.mode === o.ForInitializer || d.mode === o.Conditional || i.remove_indent(d.start_line_index);
  }
  function T(i) {
    i = i.replace(t.allLineBreaks, `
`);
    for (var d = [], m = i.indexOf(`
`); m !== -1; )
      d.push(i.substring(0, m)), i = i.substring(m + 1), m = i.indexOf(`
`);
    return i.length && d.push(i), d;
  }
  function E(i) {
    return i === o.ArrayLiteral;
  }
  function I(i) {
    return l(i, [o.Expression, o.ForInitializer, o.Conditional]);
  }
  function b(i, d) {
    for (var m = 0; m < i.length; m++) {
      var N = i[m].trim();
      if (N.charAt(0) !== d)
        return !1;
    }
    return !0;
  }
  function w(i, d) {
    for (var m = 0, N = i.length, B; m < N; m++)
      if (B = i[m], B && B.indexOf(d) !== 0)
        return !1;
    return !0;
  }
  function c(i, d) {
    d = d || {}, this._source_text = i || "", this._output = null, this._tokens = null, this._last_last_text = null, this._flags = null, this._previous_flags = null, this._flag_store = null, this._options = new e(d);
  }
  c.prototype.create_flags = function(i, d) {
    var m = 0;
    i && (m = i.indentation_level, !this._output.just_added_newline() && i.line_indent_level > m && (m = i.line_indent_level));
    var N = {
      mode: d,
      parent: i,
      last_token: i ? i.last_token : new n(a.START_BLOCK, ""),
      // last token text
      last_word: i ? i.last_word : "",
      // last TOKEN.WORD passed
      declaration_statement: !1,
      declaration_assignment: !1,
      multiline_frame: !1,
      inline_frame: !1,
      if_block: !1,
      else_block: !1,
      class_start_block: !1,
      // class A { INSIDE HERE } or class B extends C { INSIDE HERE }
      do_block: !1,
      do_while: !1,
      import_block: !1,
      in_case_statement: !1,
      // switch(..){ INSIDE HERE }
      in_case: !1,
      // we're on the exact line with "case 0:"
      case_body: !1,
      // the indented case-action block
      case_block: !1,
      // the indented case-action block is wrapped with {}
      indentation_level: m,
      alignment: 0,
      line_indent_level: i ? i.line_indent_level : m,
      start_line_index: this._output.get_line_number(),
      ternary_depth: 0
    };
    return N;
  }, c.prototype._reset = function(i) {
    var d = i.match(/^[\t ]*/)[0];
    this._last_last_text = "", this._output = new r(this._options, d), this._output.raw = this._options.test_output_raw, this._flag_store = [], this.set_mode(o.BlockStatement);
    var m = new s(i, this._options);
    return this._tokens = m.tokenize(), i;
  }, c.prototype.beautify = function() {
    if (this._options.disabled)
      return this._source_text;
    var i, d = this._reset(this._source_text), m = this._options.eol;
    this._options.eol === "auto" && (m = `
`, d && t.lineBreak.test(d || "") && (m = d.match(t.lineBreak)[0]));
    for (var N = this._tokens.next(); N; )
      this.handle_token(N), this._last_last_text = this._flags.last_token.text, this._flags.last_token = N, N = this._tokens.next();
    return i = this._output.get_code(m), i;
  }, c.prototype.handle_token = function(i, d) {
    i.type === a.START_EXPR ? this.handle_start_expr(i) : i.type === a.END_EXPR ? this.handle_end_expr(i) : i.type === a.START_BLOCK ? this.handle_start_block(i) : i.type === a.END_BLOCK ? this.handle_end_block(i) : i.type === a.WORD ? this.handle_word(i) : i.type === a.RESERVED ? this.handle_word(i) : i.type === a.SEMICOLON ? this.handle_semicolon(i) : i.type === a.STRING ? this.handle_string(i) : i.type === a.EQUALS ? this.handle_equals(i) : i.type === a.OPERATOR ? this.handle_operator(i) : i.type === a.COMMA ? this.handle_comma(i) : i.type === a.BLOCK_COMMENT ? this.handle_block_comment(i, d) : i.type === a.COMMENT ? this.handle_comment(i, d) : i.type === a.DOT ? this.handle_dot(i) : i.type === a.EOF ? this.handle_eof(i) : i.type === a.UNKNOWN ? this.handle_unknown(i, d) : this.handle_unknown(i, d);
  }, c.prototype.handle_whitespace_and_comments = function(i, d) {
    var m = i.newlines, N = this._options.keep_array_indentation && E(this._flags.mode);
    if (i.comments_before)
      for (var B = i.comments_before.next(); B; )
        this.handle_whitespace_and_comments(B, d), this.handle_token(B, d), B = i.comments_before.next();
    if (N)
      for (var W = 0; W < m; W += 1)
        this.print_newline(W > 0, d);
    else if (this._options.max_preserve_newlines && m > this._options.max_preserve_newlines && (m = this._options.max_preserve_newlines), this._options.preserve_newlines && m > 1) {
      this.print_newline(!1, d);
      for (var L = 1; L < m; L += 1)
        this.print_newline(!0, d);
    }
  };
  var g = ["async", "break", "continue", "return", "throw", "yield"];
  return c.prototype.allow_wrap_or_preserved_newline = function(i, d) {
    if (d = d === void 0 ? !1 : d, !this._output.just_added_newline()) {
      var m = this._options.preserve_newlines && i.newlines || d, N = l(this._flags.last_token.text, u) || l(i.text, u);
      if (N) {
        var B = l(this._flags.last_token.text, u) && l(this._options.operator_position, p) || l(i.text, u);
        m = m && B;
      }
      if (m)
        this.print_newline(!1, !0);
      else if (this._options.wrap_line_length) {
        if (x(this._flags.last_token, g))
          return;
        this._output.set_wrap_point();
      }
    }
  }, c.prototype.print_newline = function(i, d) {
    if (!d && this._flags.last_token.text !== ";" && this._flags.last_token.text !== "," && this._flags.last_token.text !== "=" && (this._flags.last_token.type !== a.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++"))
      for (var m = this._tokens.peek(); this._flags.mode === o.Statement && !(this._flags.if_block && v(m, "else")) && !this._flags.do_block; )
        this.restore_mode();
    this._output.add_new_line(i) && (this._flags.multiline_frame = !0);
  }, c.prototype.print_token_line_indentation = function(i) {
    this._output.just_added_newline() && (this._options.keep_array_indentation && i.newlines && (i.text === "[" || E(this._flags.mode)) ? (this._output.current_line.set_indent(-1), this._output.current_line.push(i.whitespace_before), this._output.space_before_token = !1) : this._output.set_indent(this._flags.indentation_level, this._flags.alignment) && (this._flags.line_indent_level = this._flags.indentation_level));
  }, c.prototype.print_token = function(i) {
    if (this._output.raw) {
      this._output.add_raw_token(i);
      return;
    }
    if (this._options.comma_first && i.previous && i.previous.type === a.COMMA && this._output.just_added_newline() && this._output.previous_line.last() === ",") {
      var d = this._output.previous_line.pop();
      this._output.previous_line.is_empty() && (this._output.previous_line.push(d), this._output.trim(!0), this._output.current_line.pop(), this._output.trim()), this.print_token_line_indentation(i), this._output.add_token(","), this._output.space_before_token = !0;
    }
    this.print_token_line_indentation(i), this._output.non_breaking_space = !0, this._output.add_token(i.text), this._output.previous_token_wrapped && (this._flags.multiline_frame = !0);
  }, c.prototype.indent = function() {
    this._flags.indentation_level += 1, this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }, c.prototype.deindent = function() {
    this._flags.indentation_level > 0 && (!this._flags.parent || this._flags.indentation_level > this._flags.parent.indentation_level) && (this._flags.indentation_level -= 1, this._output.set_indent(this._flags.indentation_level, this._flags.alignment));
  }, c.prototype.set_mode = function(i) {
    this._flags ? (this._flag_store.push(this._flags), this._previous_flags = this._flags) : this._previous_flags = this.create_flags(null, i), this._flags = this.create_flags(this._previous_flags, i), this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }, c.prototype.restore_mode = function() {
    this._flag_store.length > 0 && (this._previous_flags = this._flags, this._flags = this._flag_store.pop(), this._previous_flags.mode === o.Statement && h(this._output, this._previous_flags), this._output.set_indent(this._flags.indentation_level, this._flags.alignment));
  }, c.prototype.start_of_object_property = function() {
    return this._flags.parent.mode === o.ObjectLiteral && this._flags.mode === o.Statement && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || x(this._flags.last_token, ["get", "set"]));
  }, c.prototype.start_of_statement = function(i) {
    var d = !1;
    return d = d || x(this._flags.last_token, ["var", "let", "const"]) && i.type === a.WORD, d = d || v(this._flags.last_token, "do"), d = d || !(this._flags.parent.mode === o.ObjectLiteral && this._flags.mode === o.Statement) && x(this._flags.last_token, g) && !i.newlines, d = d || v(this._flags.last_token, "else") && !(v(i, "if") && !i.comments_before), d = d || this._flags.last_token.type === a.END_EXPR && (this._previous_flags.mode === o.ForInitializer || this._previous_flags.mode === o.Conditional), d = d || this._flags.last_token.type === a.WORD && this._flags.mode === o.BlockStatement && !this._flags.in_case && !(i.text === "--" || i.text === "++") && this._last_last_text !== "function" && i.type !== a.WORD && i.type !== a.RESERVED, d = d || this._flags.mode === o.ObjectLiteral && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || x(this._flags.last_token, ["get", "set"])), d ? (this.set_mode(o.Statement), this.indent(), this.handle_whitespace_and_comments(i, !0), this.start_of_object_property() || this.allow_wrap_or_preserved_newline(
      i,
      x(i, ["do", "for", "if", "while"])
    ), !0) : !1;
  }, c.prototype.handle_start_expr = function(i) {
    this.start_of_statement(i) || this.handle_whitespace_and_comments(i);
    var d = o.Expression;
    if (i.text === "[") {
      if (this._flags.last_token.type === a.WORD || this._flags.last_token.text === ")") {
        x(this._flags.last_token, _) && (this._output.space_before_token = !0), this.print_token(i), this.set_mode(d), this.indent(), this._options.space_in_paren && (this._output.space_before_token = !0);
        return;
      }
      d = o.ArrayLiteral, E(this._flags.mode) && (this._flags.last_token.text === "[" || this._flags.last_token.text === "," && (this._last_last_text === "]" || this._last_last_text === "}")) && (this._options.keep_array_indentation || this.print_newline()), l(this._flags.last_token.type, [a.START_EXPR, a.END_EXPR, a.WORD, a.OPERATOR, a.DOT]) || (this._output.space_before_token = !0);
    } else {
      if (this._flags.last_token.type === a.RESERVED)
        this._flags.last_token.text === "for" ? (this._output.space_before_token = this._options.space_before_conditional, d = o.ForInitializer) : l(this._flags.last_token.text, ["if", "while", "switch"]) ? (this._output.space_before_token = this._options.space_before_conditional, d = o.Conditional) : l(this._flags.last_word, ["await", "async"]) ? this._output.space_before_token = !0 : this._flags.last_token.text === "import" && i.whitespace_before === "" ? this._output.space_before_token = !1 : (l(this._flags.last_token.text, _) || this._flags.last_token.text === "catch") && (this._output.space_before_token = !0);
      else if (this._flags.last_token.type === a.EQUALS || this._flags.last_token.type === a.OPERATOR)
        this.start_of_object_property() || this.allow_wrap_or_preserved_newline(i);
      else if (this._flags.last_token.type === a.WORD) {
        this._output.space_before_token = !1;
        var m = this._tokens.peek(-3);
        if (this._options.space_after_named_function && m) {
          var N = this._tokens.peek(-4);
          x(m, ["async", "function"]) || m.text === "*" && x(N, ["async", "function"]) ? this._output.space_before_token = !0 : this._flags.mode === o.ObjectLiteral ? (m.text === "{" || m.text === "," || m.text === "*" && (N.text === "{" || N.text === ",")) && (this._output.space_before_token = !0) : this._flags.parent && this._flags.parent.class_start_block && (this._output.space_before_token = !0);
        }
      } else
        this.allow_wrap_or_preserved_newline(i);
      (this._flags.last_token.type === a.RESERVED && (this._flags.last_word === "function" || this._flags.last_word === "typeof") || this._flags.last_token.text === "*" && (l(this._last_last_text, ["function", "yield"]) || this._flags.mode === o.ObjectLiteral && l(this._last_last_text, ["{", ","]))) && (this._output.space_before_token = this._options.space_after_anon_function);
    }
    this._flags.last_token.text === ";" || this._flags.last_token.type === a.START_BLOCK ? this.print_newline() : (this._flags.last_token.type === a.END_EXPR || this._flags.last_token.type === a.START_EXPR || this._flags.last_token.type === a.END_BLOCK || this._flags.last_token.text === "." || this._flags.last_token.type === a.COMMA) && this.allow_wrap_or_preserved_newline(i, i.newlines), this.print_token(i), this.set_mode(d), this._options.space_in_paren && (this._output.space_before_token = !0), this.indent();
  }, c.prototype.handle_end_expr = function(i) {
    for (; this._flags.mode === o.Statement; )
      this.restore_mode();
    this.handle_whitespace_and_comments(i), this._flags.multiline_frame && this.allow_wrap_or_preserved_newline(
      i,
      i.text === "]" && E(this._flags.mode) && !this._options.keep_array_indentation
    ), this._options.space_in_paren && (this._flags.last_token.type === a.START_EXPR && !this._options.space_in_empty_paren ? (this._output.trim(), this._output.space_before_token = !1) : this._output.space_before_token = !0), this.deindent(), this.print_token(i), this.restore_mode(), h(this._output, this._previous_flags), this._flags.do_while && this._previous_flags.mode === o.Conditional && (this._previous_flags.mode = o.Expression, this._flags.do_block = !1, this._flags.do_while = !1);
  }, c.prototype.handle_start_block = function(i) {
    this.handle_whitespace_and_comments(i);
    var d = this._tokens.peek(), m = this._tokens.peek(1);
    this._flags.last_word === "switch" && this._flags.last_token.type === a.END_EXPR ? (this.set_mode(o.BlockStatement), this._flags.in_case_statement = !0) : this._flags.case_body ? this.set_mode(o.BlockStatement) : m && (l(m.text, [":", ","]) && l(d.type, [a.STRING, a.WORD, a.RESERVED]) || l(d.text, ["get", "set", "..."]) && l(m.type, [a.WORD, a.RESERVED])) ? l(this._last_last_text, ["class", "interface"]) && !l(m.text, [":", ","]) ? this.set_mode(o.BlockStatement) : this.set_mode(o.ObjectLiteral) : this._flags.last_token.type === a.OPERATOR && this._flags.last_token.text === "=>" ? this.set_mode(o.BlockStatement) : l(this._flags.last_token.type, [a.EQUALS, a.START_EXPR, a.COMMA, a.OPERATOR]) || x(this._flags.last_token, ["return", "throw", "import", "default"]) ? this.set_mode(o.ObjectLiteral) : this.set_mode(o.BlockStatement), this._flags.last_token && x(this._flags.last_token.previous, ["class", "extends"]) && (this._flags.class_start_block = !0);
    var N = !d.comments_before && d.text === "}", B = N && this._flags.last_word === "function" && this._flags.last_token.type === a.END_EXPR;
    if (this._options.brace_preserve_inline) {
      var W = 0, L = null;
      this._flags.inline_frame = !0;
      do
        if (W += 1, L = this._tokens.peek(W - 1), L.newlines) {
          this._flags.inline_frame = !1;
          break;
        }
      while (L.type !== a.EOF && !(L.type === a.END_BLOCK && L.opened === i));
    }
    (this._options.brace_style === "expand" || this._options.brace_style === "none" && i.newlines) && !this._flags.inline_frame ? this._flags.last_token.type !== a.OPERATOR && (B || this._flags.last_token.type === a.EQUALS || x(this._flags.last_token, R) && this._flags.last_token.text !== "else") ? this._output.space_before_token = !0 : this.print_newline(!1, !0) : (E(this._previous_flags.mode) && (this._flags.last_token.type === a.START_EXPR || this._flags.last_token.type === a.COMMA) && ((this._flags.last_token.type === a.COMMA || this._options.space_in_paren) && (this._output.space_before_token = !0), (this._flags.last_token.type === a.COMMA || this._flags.last_token.type === a.START_EXPR && this._flags.inline_frame) && (this.allow_wrap_or_preserved_newline(i), this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame, this._flags.multiline_frame = !1)), this._flags.last_token.type !== a.OPERATOR && this._flags.last_token.type !== a.START_EXPR && (l(this._flags.last_token.type, [a.START_BLOCK, a.SEMICOLON]) && !this._flags.inline_frame ? this.print_newline() : this._output.space_before_token = !0)), this.print_token(i), this.indent(), !N && !(this._options.brace_preserve_inline && this._flags.inline_frame) && this.print_newline();
  }, c.prototype.handle_end_block = function(i) {
    for (this.handle_whitespace_and_comments(i); this._flags.mode === o.Statement; )
      this.restore_mode();
    var d = this._flags.last_token.type === a.START_BLOCK;
    this._flags.inline_frame && !d ? this._output.space_before_token = !0 : this._options.brace_style === "expand" ? d || this.print_newline() : d || (E(this._flags.mode) && this._options.keep_array_indentation ? (this._options.keep_array_indentation = !1, this.print_newline(), this._options.keep_array_indentation = !0) : this.print_newline()), this.restore_mode(), this.print_token(i);
  }, c.prototype.handle_word = function(i) {
    if (i.type === a.RESERVED) {
      if (l(i.text, ["set", "get"]) && this._flags.mode !== o.ObjectLiteral)
        i.type = a.WORD;
      else if (i.text === "import" && l(this._tokens.peek().text, ["(", "."]))
        i.type = a.WORD;
      else if (l(i.text, ["as", "from"]) && !this._flags.import_block)
        i.type = a.WORD;
      else if (this._flags.mode === o.ObjectLiteral) {
        var d = this._tokens.peek();
        d.text === ":" && (i.type = a.WORD);
      }
    }
    if (this.start_of_statement(i) ? x(this._flags.last_token, ["var", "let", "const"]) && i.type === a.WORD && (this._flags.declaration_statement = !0) : i.newlines && !I(this._flags.mode) && (this._flags.last_token.type !== a.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++") && this._flags.last_token.type !== a.EQUALS && (this._options.preserve_newlines || !x(this._flags.last_token, ["var", "let", "const", "set", "get"])) ? (this.handle_whitespace_and_comments(i), this.print_newline()) : this.handle_whitespace_and_comments(i), this._flags.do_block && !this._flags.do_while)
      if (v(i, "while")) {
        this._output.space_before_token = !0, this.print_token(i), this._output.space_before_token = !0, this._flags.do_while = !0;
        return;
      } else
        this.print_newline(), this._flags.do_block = !1;
    if (this._flags.if_block)
      if (!this._flags.else_block && v(i, "else"))
        this._flags.else_block = !0;
      else {
        for (; this._flags.mode === o.Statement; )
          this.restore_mode();
        this._flags.if_block = !1, this._flags.else_block = !1;
      }
    if (this._flags.in_case_statement && x(i, ["case", "default"])) {
      this.print_newline(), !this._flags.case_block && (this._flags.case_body || this._options.jslint_happy) && this.deindent(), this._flags.case_body = !1, this.print_token(i), this._flags.in_case = !0;
      return;
    }
    if ((this._flags.last_token.type === a.COMMA || this._flags.last_token.type === a.START_EXPR || this._flags.last_token.type === a.EQUALS || this._flags.last_token.type === a.OPERATOR) && !this.start_of_object_property() && !// start of object property is different for numeric values with +/- prefix operators
    (l(this._flags.last_token.text, ["+", "-"]) && this._last_last_text === ":" && this._flags.parent.mode === o.ObjectLiteral) && this.allow_wrap_or_preserved_newline(i), v(i, "function")) {
      (l(this._flags.last_token.text, ["}", ";"]) || this._output.just_added_newline() && !(l(this._flags.last_token.text, ["(", "[", "{", ":", "=", ","]) || this._flags.last_token.type === a.OPERATOR)) && !this._output.just_added_blankline() && !i.comments_before && (this.print_newline(), this.print_newline(!0)), this._flags.last_token.type === a.RESERVED || this._flags.last_token.type === a.WORD ? x(this._flags.last_token, ["get", "set", "new", "export"]) || x(this._flags.last_token, g) ? this._output.space_before_token = !0 : v(this._flags.last_token, "default") && this._last_last_text === "export" ? this._output.space_before_token = !0 : this._flags.last_token.text === "declare" ? this._output.space_before_token = !0 : this.print_newline() : this._flags.last_token.type === a.OPERATOR || this._flags.last_token.text === "=" ? this._output.space_before_token = !0 : !this._flags.multiline_frame && (I(this._flags.mode) || E(this._flags.mode)) || this.print_newline(), this.print_token(i), this._flags.last_word = i.text;
      return;
    }
    var m = "NONE";
    if (this._flags.last_token.type === a.END_BLOCK ? this._previous_flags.inline_frame ? m = "SPACE" : x(i, ["else", "catch", "finally", "from"]) ? this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && i.newlines ? m = "NEWLINE" : (m = "SPACE", this._output.space_before_token = !0) : m = "NEWLINE" : this._flags.last_token.type === a.SEMICOLON && this._flags.mode === o.BlockStatement ? m = "NEWLINE" : this._flags.last_token.type === a.SEMICOLON && I(this._flags.mode) ? m = "SPACE" : this._flags.last_token.type === a.STRING ? m = "NEWLINE" : this._flags.last_token.type === a.RESERVED || this._flags.last_token.type === a.WORD || this._flags.last_token.text === "*" && (l(this._last_last_text, ["function", "yield"]) || this._flags.mode === o.ObjectLiteral && l(this._last_last_text, ["{", ","])) ? m = "SPACE" : this._flags.last_token.type === a.START_BLOCK ? this._flags.inline_frame ? m = "SPACE" : m = "NEWLINE" : this._flags.last_token.type === a.END_EXPR && (this._output.space_before_token = !0, m = "NEWLINE"), x(i, _) && this._flags.last_token.text !== ")" && (this._flags.inline_frame || this._flags.last_token.text === "else" || this._flags.last_token.text === "export" ? m = "SPACE" : m = "NEWLINE"), x(i, ["else", "catch", "finally"]))
      if ((!(this._flags.last_token.type === a.END_BLOCK && this._previous_flags.mode === o.BlockStatement) || this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && i.newlines) && !this._flags.inline_frame)
        this.print_newline();
      else {
        this._output.trim(!0);
        var N = this._output.current_line;
        N.last() !== "}" && this.print_newline(), this._output.space_before_token = !0;
      }
    else m === "NEWLINE" ? x(this._flags.last_token, R) ? this._output.space_before_token = !0 : this._flags.last_token.text === "declare" && x(i, ["var", "let", "const"]) ? this._output.space_before_token = !0 : this._flags.last_token.type !== a.END_EXPR ? (this._flags.last_token.type !== a.START_EXPR || !x(i, ["var", "let", "const"])) && this._flags.last_token.text !== ":" && (v(i, "if") && v(i.previous, "else") ? this._output.space_before_token = !0 : this.print_newline()) : x(i, _) && this._flags.last_token.text !== ")" && this.print_newline() : this._flags.multiline_frame && E(this._flags.mode) && this._flags.last_token.text === "," && this._last_last_text === "}" ? this.print_newline() : m === "SPACE" && (this._output.space_before_token = !0);
    i.previous && (i.previous.type === a.WORD || i.previous.type === a.RESERVED) && (this._output.space_before_token = !0), this.print_token(i), this._flags.last_word = i.text, i.type === a.RESERVED && (i.text === "do" ? this._flags.do_block = !0 : i.text === "if" ? this._flags.if_block = !0 : i.text === "import" ? this._flags.import_block = !0 : this._flags.import_block && v(i, "from") && (this._flags.import_block = !1));
  }, c.prototype.handle_semicolon = function(i) {
    this.start_of_statement(i) ? this._output.space_before_token = !1 : this.handle_whitespace_and_comments(i);
    for (var d = this._tokens.peek(); this._flags.mode === o.Statement && !(this._flags.if_block && v(d, "else")) && !this._flags.do_block; )
      this.restore_mode();
    this._flags.import_block && (this._flags.import_block = !1), this.print_token(i);
  }, c.prototype.handle_string = function(i) {
    i.text.startsWith("`") && i.newlines === 0 && i.whitespace_before === "" && (i.previous.text === ")" || this._flags.last_token.type === a.WORD) || (this.start_of_statement(i) ? this._output.space_before_token = !0 : (this.handle_whitespace_and_comments(i), this._flags.last_token.type === a.RESERVED || this._flags.last_token.type === a.WORD || this._flags.inline_frame ? this._output.space_before_token = !0 : this._flags.last_token.type === a.COMMA || this._flags.last_token.type === a.START_EXPR || this._flags.last_token.type === a.EQUALS || this._flags.last_token.type === a.OPERATOR ? this.start_of_object_property() || this.allow_wrap_or_preserved_newline(i) : i.text.startsWith("`") && this._flags.last_token.type === a.END_EXPR && (i.previous.text === "]" || i.previous.text === ")") && i.newlines === 0 ? this._output.space_before_token = !0 : this.print_newline())), this.print_token(i);
  }, c.prototype.handle_equals = function(i) {
    this.start_of_statement(i) || this.handle_whitespace_and_comments(i), this._flags.declaration_statement && (this._flags.declaration_assignment = !0), this._output.space_before_token = !0, this.print_token(i), this._output.space_before_token = !0;
  }, c.prototype.handle_comma = function(i) {
    this.handle_whitespace_and_comments(i, !0), this.print_token(i), this._output.space_before_token = !0, this._flags.declaration_statement ? (I(this._flags.parent.mode) && (this._flags.declaration_assignment = !1), this._flags.declaration_assignment ? (this._flags.declaration_assignment = !1, this.print_newline(!1, !0)) : this._options.comma_first && this.allow_wrap_or_preserved_newline(i)) : this._flags.mode === o.ObjectLiteral || this._flags.mode === o.Statement && this._flags.parent.mode === o.ObjectLiteral ? (this._flags.mode === o.Statement && this.restore_mode(), this._flags.inline_frame || this.print_newline()) : this._options.comma_first && this.allow_wrap_or_preserved_newline(i);
  }, c.prototype.handle_operator = function(i) {
    var d = i.text === "*" && (x(this._flags.last_token, ["function", "yield"]) || l(this._flags.last_token.type, [a.START_BLOCK, a.COMMA, a.END_BLOCK, a.SEMICOLON])), m = l(i.text, ["-", "+"]) && (l(this._flags.last_token.type, [a.START_BLOCK, a.START_EXPR, a.EQUALS, a.OPERATOR]) || l(this._flags.last_token.text, _) || this._flags.last_token.text === ",");
    if (!this.start_of_statement(i)) {
      var N = !d;
      this.handle_whitespace_and_comments(i, N);
    }
    if (i.text === "*" && this._flags.last_token.type === a.DOT) {
      this.print_token(i);
      return;
    }
    if (i.text === "::") {
      this.print_token(i);
      return;
    }
    if (l(i.text, ["-", "+"]) && this.start_of_object_property()) {
      this.print_token(i);
      return;
    }
    if (this._flags.last_token.type === a.OPERATOR && l(this._options.operator_position, p) && this.allow_wrap_or_preserved_newline(i), i.text === ":" && this._flags.in_case) {
      this.print_token(i), this._flags.in_case = !1, this._flags.case_body = !0, this._tokens.peek().type !== a.START_BLOCK ? (this.indent(), this.print_newline(), this._flags.case_block = !1) : (this._flags.case_block = !0, this._output.space_before_token = !0);
      return;
    }
    var B = !0, W = !0, L = !1;
    if (i.text === ":" ? this._flags.ternary_depth === 0 ? B = !1 : (this._flags.ternary_depth -= 1, L = !0) : i.text === "?" && (this._flags.ternary_depth += 1), !m && !d && this._options.preserve_newlines && l(i.text, u)) {
      var D = i.text === ":", V = D && L, Z = D && !L;
      switch (this._options.operator_position) {
        case A.before_newline:
          this._output.space_before_token = !Z, this.print_token(i), (!D || V) && this.allow_wrap_or_preserved_newline(i), this._output.space_before_token = !0;
          return;
        case A.after_newline:
          this._output.space_before_token = !0, !D || V ? this._tokens.peek().newlines ? this.print_newline(!1, !0) : this.allow_wrap_or_preserved_newline(i) : this._output.space_before_token = !1, this.print_token(i), this._output.space_before_token = !0;
          return;
        case A.preserve_newline:
          Z || this.allow_wrap_or_preserved_newline(i), B = !(this._output.just_added_newline() || Z), this._output.space_before_token = B, this.print_token(i), this._output.space_before_token = !0;
          return;
      }
    }
    if (d) {
      this.allow_wrap_or_preserved_newline(i), B = !1;
      var K = this._tokens.peek();
      W = K && l(K.type, [a.WORD, a.RESERVED]);
    } else if (i.text === "...")
      this.allow_wrap_or_preserved_newline(i), B = this._flags.last_token.type === a.START_BLOCK, W = !1;
    else if (l(i.text, ["--", "++", "!", "~"]) || m) {
      if ((this._flags.last_token.type === a.COMMA || this._flags.last_token.type === a.START_EXPR) && this.allow_wrap_or_preserved_newline(i), B = !1, W = !1, i.newlines && (i.text === "--" || i.text === "++" || i.text === "~")) {
        var H = x(this._flags.last_token, R) && i.newlines;
        H && (this._previous_flags.if_block || this._previous_flags.else_block) && this.restore_mode(), this.print_newline(H, !0);
      }
      this._flags.last_token.text === ";" && I(this._flags.mode) && (B = !0), this._flags.last_token.type === a.RESERVED ? B = !0 : this._flags.last_token.type === a.END_EXPR ? B = !(this._flags.last_token.text === "]" && (i.text === "--" || i.text === "++")) : this._flags.last_token.type === a.OPERATOR && (B = l(i.text, ["--", "-", "++", "+"]) && l(this._flags.last_token.text, ["--", "-", "++", "+"]), l(i.text, ["+", "-"]) && l(this._flags.last_token.text, ["--", "++"]) && (W = !0)), (this._flags.mode === o.BlockStatement && !this._flags.inline_frame || this._flags.mode === o.Statement) && (this._flags.last_token.text === "{" || this._flags.last_token.text === ";") && this.print_newline();
    }
    this._output.space_before_token = this._output.space_before_token || B, this.print_token(i), this._output.space_before_token = W;
  }, c.prototype.handle_block_comment = function(i, d) {
    if (this._output.raw) {
      this._output.add_raw_token(i), i.directives && i.directives.preserve === "end" && (this._output.raw = this._options.test_output_raw);
      return;
    }
    if (i.directives) {
      this.print_newline(!1, d), this.print_token(i), i.directives.preserve === "start" && (this._output.raw = !0), this.print_newline(!1, !0);
      return;
    }
    if (!t.newline.test(i.text) && !i.newlines) {
      this._output.space_before_token = !0, this.print_token(i), this._output.space_before_token = !0;
      return;
    } else
      this.print_block_commment(i, d);
  }, c.prototype.print_block_commment = function(i, d) {
    var m = T(i.text), N, B = !1, W = !1, L = i.whitespace_before, D = L.length;
    if (this.print_newline(!1, d), this.print_token_line_indentation(i), this._output.add_token(m[0]), this.print_newline(!1, d), m.length > 1) {
      for (m = m.slice(1), B = b(m, "*"), W = w(m, L), B && (this._flags.alignment = 1), N = 0; N < m.length; N++)
        B ? (this.print_token_line_indentation(i), this._output.add_token(k(m[N]))) : W && m[N] ? (this.print_token_line_indentation(i), this._output.add_token(m[N].substring(D))) : (this._output.current_line.set_indent(-1), this._output.add_token(m[N])), this.print_newline(!1, d);
      this._flags.alignment = 0;
    }
  }, c.prototype.handle_comment = function(i, d) {
    i.newlines ? this.print_newline(!1, d) : this._output.trim(!0), this._output.space_before_token = !0, this.print_token(i), this.print_newline(!1, d);
  }, c.prototype.handle_dot = function(i) {
    this.start_of_statement(i) || this.handle_whitespace_and_comments(i, !0), this._flags.last_token.text.match("^[0-9]+$") && (this._output.space_before_token = !0), x(this._flags.last_token, R) ? this._output.space_before_token = !1 : this.allow_wrap_or_preserved_newline(
      i,
      this._flags.last_token.text === ")" && this._options.break_chained_methods
    ), this._options.unindent_chained_methods && this._output.just_added_newline() && this.deindent(), this.print_token(i);
  }, c.prototype.handle_unknown = function(i, d) {
    this.print_token(i), i.text[i.text.length - 1] === `
` && this.print_newline(!1, d);
  }, c.prototype.handle_eof = function(i) {
    for (; this._flags.mode === o.Statement; )
      this.restore_mode();
    this.handle_whitespace_and_comments(i);
  }, Ee.Beautifier = c, Ee;
}
var wt;
function Vn() {
  if (wt) return ce.exports;
  wt = 1;
  var r = Wn().Beautifier, n = qt().Options;
  function t(e, s) {
    var _ = new r(e, s);
    return _.beautify();
  }
  return ce.exports = t, ce.exports.defaultOptions = function() {
    return new n();
  }, ce.exports;
}
var de = { exports: {} }, De = {}, Be = {}, kt;
function Ft() {
  if (kt) return Be;
  kt = 1;
  var r = Xe().Options;
  function n(t) {
    r.call(this, t, "css"), this.selector_separator_newline = this._get_boolean("selector_separator_newline", !0), this.newline_between_rules = this._get_boolean("newline_between_rules", !0);
    var e = this._get_boolean("space_around_selector_separator");
    this.space_around_combinator = this._get_boolean("space_around_combinator") || e;
    var s = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
    this.brace_style = "collapse";
    for (var _ = 0; _ < s.length; _++)
      s[_] !== "expand" ? this.brace_style = "collapse" : this.brace_style = s[_];
  }
  return n.prototype = new r(), Be.Options = n, Be;
}
var Ot;
function qn() {
  if (Ot) return De;
  Ot = 1;
  var r = Ft().Options, n = Fe().Output, t = He().InputScanner, e = Qe().Directives, s = new e(/\/\*/, /\*\//), _ = /\r\n|[\r\n]/, u = /\r\n|[\r\n]/g, a = /\s/, l = /(?:\s|\n)+/g, k = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g, f = /\/\/(?:[^\n\r\u2028\u2029]*)/g;
  function v(x, R) {
    this._source_text = x || "", this._options = new r(R), this._ch = null, this._input = null, this.NESTED_AT_RULE = {
      page: !0,
      "font-face": !0,
      keyframes: !0,
      // also in CONDITIONAL_GROUP_RULE below
      media: !0,
      supports: !0,
      document: !0
    }, this.CONDITIONAL_GROUP_RULE = {
      media: !0,
      supports: !0,
      document: !0
    }, this.NON_SEMICOLON_NEWLINE_PROPERTY = [
      "grid-template-areas",
      "grid-template"
    ];
  }
  return v.prototype.eatString = function(x) {
    var R = "";
    for (this._ch = this._input.next(); this._ch; ) {
      if (R += this._ch, this._ch === "\\")
        R += this._input.next();
      else if (x.indexOf(this._ch) !== -1 || this._ch === `
`)
        break;
      this._ch = this._input.next();
    }
    return R;
  }, v.prototype.eatWhitespace = function(x) {
    for (var R = a.test(this._input.peek()), j = 0; a.test(this._input.peek()); )
      this._ch = this._input.next(), x && this._ch === `
` && (j === 0 || j < this._options.max_preserve_newlines) && (j++, this._output.add_new_line(!0));
    return R;
  }, v.prototype.foundNestedPseudoClass = function() {
    for (var x = 0, R = 1, j = this._input.peek(R); j; ) {
      if (j === "{")
        return !0;
      if (j === "(")
        x += 1;
      else if (j === ")") {
        if (x === 0)
          return !1;
        x -= 1;
      } else if (j === ";" || j === "}")
        return !1;
      R++, j = this._input.peek(R);
    }
    return !1;
  }, v.prototype.print_string = function(x) {
    this._output.set_indent(this._indentLevel), this._output.non_breaking_space = !0, this._output.add_token(x);
  }, v.prototype.preserveSingleSpace = function(x) {
    x && (this._output.space_before_token = !0);
  }, v.prototype.indent = function() {
    this._indentLevel++;
  }, v.prototype.outdent = function() {
    this._indentLevel > 0 && this._indentLevel--;
  }, v.prototype.beautify = function() {
    if (this._options.disabled)
      return this._source_text;
    var x = this._source_text, R = this._options.eol;
    R === "auto" && (R = `
`, x && _.test(x || "") && (R = x.match(_)[0])), x = x.replace(u, `
`);
    var j = x.match(/^[\t ]*/)[0];
    this._output = new n(this._options, j), this._input = new t(x), this._indentLevel = 0, this._nestedLevel = 0, this._ch = null;
    for (var A = 0, p = !1, o = !1, h = !1, T = !1, E = !1, I = this._ch, b = !1, w, c, g; w = this._input.read(l), c = w !== "", g = I, this._ch = this._input.next(), this._ch === "\\" && this._input.hasNext() && (this._ch += this._input.next()), I = this._ch, this._ch; )
      if (this._ch === "/" && this._input.peek() === "*") {
        this._output.add_new_line(), this._input.back();
        var i = this._input.read(k), d = s.get_directives(i);
        d && d.ignore === "start" && (i += s.readIgnored(this._input)), this.print_string(i), this.eatWhitespace(!0), this._output.add_new_line();
      } else if (this._ch === "/" && this._input.peek() === "/")
        this._output.space_before_token = !0, this._input.back(), this.print_string(this._input.read(f)), this.eatWhitespace(!0);
      else if (this._ch === "$") {
        this.preserveSingleSpace(c), this.print_string(this._ch);
        var m = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
        m.match(/[ :]$/) && (m = this.eatString(": ").replace(/\s+$/, ""), this.print_string(m), this._output.space_before_token = !0), A === 0 && m.indexOf(":") !== -1 && (o = !0, this.indent());
      } else if (this._ch === "@")
        if (this.preserveSingleSpace(c), this._input.peek() === "{")
          this.print_string(this._ch + this.eatString("}"));
        else {
          this.print_string(this._ch);
          var N = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
          N.match(/[ :]$/) && (N = this.eatString(": ").replace(/\s+$/, ""), this.print_string(N), this._output.space_before_token = !0), A === 0 && N.indexOf(":") !== -1 ? (o = !0, this.indent()) : N in this.NESTED_AT_RULE ? (this._nestedLevel += 1, N in this.CONDITIONAL_GROUP_RULE && (h = !0)) : A === 0 && !o && (T = !0);
        }
      else if (this._ch === "#" && this._input.peek() === "{")
        this.preserveSingleSpace(c), this.print_string(this._ch + this.eatString("}"));
      else if (this._ch === "{")
        o && (o = !1, this.outdent()), T = !1, h ? (h = !1, p = this._indentLevel >= this._nestedLevel) : p = this._indentLevel >= this._nestedLevel - 1, this._options.newline_between_rules && p && this._output.previous_line && this._output.previous_line.item(-1) !== "{" && this._output.ensure_empty_line_above("/", ","), this._output.space_before_token = !0, this._options.brace_style === "expand" ? (this._output.add_new_line(), this.print_string(this._ch), this.indent(), this._output.set_indent(this._indentLevel)) : (g === "(" ? this._output.space_before_token = !1 : g !== "," && this.indent(), this.print_string(this._ch)), this.eatWhitespace(!0), this._output.add_new_line();
      else if (this._ch === "}")
        this.outdent(), this._output.add_new_line(), g === "{" && this._output.trim(!0), o && (this.outdent(), o = !1), this.print_string(this._ch), p = !1, this._nestedLevel && this._nestedLevel--, this.eatWhitespace(!0), this._output.add_new_line(), this._options.newline_between_rules && !this._output.just_added_blankline() && this._input.peek() !== "}" && this._output.add_new_line(!0), this._input.peek() === ")" && (this._output.trim(!0), this._options.brace_style === "expand" && this._output.add_new_line(!0));
      else if (this._ch === ":") {
        for (var B = 0; B < this.NON_SEMICOLON_NEWLINE_PROPERTY.length; B++)
          if (this._input.lookBack(this.NON_SEMICOLON_NEWLINE_PROPERTY[B])) {
            b = !0;
            break;
          }
        (p || h) && !(this._input.lookBack("&") || this.foundNestedPseudoClass()) && !this._input.lookBack("(") && !T && A === 0 ? (this.print_string(":"), o || (o = !0, this._output.space_before_token = !0, this.eatWhitespace(!0), this.indent())) : (this._input.lookBack(" ") && (this._output.space_before_token = !0), this._input.peek() === ":" ? (this._ch = this._input.next(), this.print_string("::")) : this.print_string(":"));
      } else if (this._ch === '"' || this._ch === "'") {
        var W = g === '"' || g === "'";
        this.preserveSingleSpace(W || c), this.print_string(this._ch + this.eatString(this._ch)), this.eatWhitespace(!0);
      } else if (this._ch === ";")
        b = !1, A === 0 ? (o && (this.outdent(), o = !1), T = !1, this.print_string(this._ch), this.eatWhitespace(!0), this._input.peek() !== "/" && this._output.add_new_line()) : (this.print_string(this._ch), this.eatWhitespace(!0), this._output.space_before_token = !0);
      else if (this._ch === "(")
        if (this._input.lookBack("url"))
          this.print_string(this._ch), this.eatWhitespace(), A++, this.indent(), this._ch = this._input.next(), this._ch === ")" || this._ch === '"' || this._ch === "'" ? this._input.back() : this._ch && (this.print_string(this._ch + this.eatString(")")), A && (A--, this.outdent()));
        else {
          var L = !1;
          this._input.lookBack("with") && (L = !0), this.preserveSingleSpace(c || L), this.print_string(this._ch), o && g === "$" && this._options.selector_separator_newline ? (this._output.add_new_line(), E = !0) : (this.eatWhitespace(), A++, this.indent());
        }
      else if (this._ch === ")")
        A && (A--, this.outdent()), E && this._input.peek() === ";" && this._options.selector_separator_newline && (E = !1, this.outdent(), this._output.add_new_line()), this.print_string(this._ch);
      else if (this._ch === ",")
        this.print_string(this._ch), this.eatWhitespace(!0), this._options.selector_separator_newline && (!o || E) && A === 0 && !T ? this._output.add_new_line() : this._output.space_before_token = !0;
      else if ((this._ch === ">" || this._ch === "+" || this._ch === "~") && !o && A === 0)
        this._options.space_around_combinator ? (this._output.space_before_token = !0, this.print_string(this._ch), this._output.space_before_token = !0) : (this.print_string(this._ch), this.eatWhitespace(), this._ch && a.test(this._ch) && (this._ch = ""));
      else if (this._ch === "]")
        this.print_string(this._ch);
      else if (this._ch === "[")
        this.preserveSingleSpace(c), this.print_string(this._ch);
      else if (this._ch === "=")
        this.eatWhitespace(), this.print_string("="), a.test(this._ch) && (this._ch = "");
      else if (this._ch === "!" && !this._input.lookBack("\\"))
        this._output.space_before_token = !0, this.print_string(this._ch);
      else {
        var D = g === '"' || g === "'";
        this.preserveSingleSpace(D || c), this.print_string(this._ch), !this._output.just_added_newline() && this._input.peek() === `
` && b && this._output.add_new_line();
      }
    var V = this._output.get_code(R);
    return V;
  }, De.Beautifier = v, De;
}
var Et;
function Gn() {
  if (Et) return de.exports;
  Et = 1;
  var r = qn().Beautifier, n = Ft().Options;
  function t(e, s) {
    var _ = new r(e, s);
    return _.beautify();
  }
  return de.exports = t, de.exports.defaultOptions = function() {
    return new n();
  }, de.exports;
}
var ve = { exports: {} }, $e = {}, ze = {}, St;
function Xt() {
  if (St) return ze;
  St = 1;
  var r = Xe().Options;
  function n(t) {
    r.call(this, t, "html"), this.templating.length === 1 && this.templating[0] === "auto" && (this.templating = ["django", "erb", "handlebars", "php"]), this.indent_inner_html = this._get_boolean("indent_inner_html"), this.indent_body_inner_html = this._get_boolean("indent_body_inner_html", !0), this.indent_head_inner_html = this._get_boolean("indent_head_inner_html", !0), this.indent_handlebars = this._get_boolean("indent_handlebars", !0), this.wrap_attributes = this._get_selection(
      "wrap_attributes",
      ["auto", "force", "force-aligned", "force-expand-multiline", "aligned-multiple", "preserve", "preserve-aligned"]
    ), this.wrap_attributes_min_attrs = this._get_number("wrap_attributes_min_attrs", 2), this.wrap_attributes_indent_size = this._get_number("wrap_attributes_indent_size", this.indent_size), this.extra_liners = this._get_array("extra_liners", ["head", "body", "/html"]), this.inline = this._get_array("inline", [
      "a",
      "abbr",
      "area",
      "audio",
      "b",
      "bdi",
      "bdo",
      "br",
      "button",
      "canvas",
      "cite",
      "code",
      "data",
      "datalist",
      "del",
      "dfn",
      "em",
      "embed",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "map",
      "mark",
      "math",
      "meter",
      "noscript",
      "object",
      "output",
      "progress",
      "q",
      "ruby",
      "s",
      "samp",
      /* 'script', */
      "select",
      "small",
      "span",
      "strong",
      "sub",
      "sup",
      "svg",
      "template",
      "textarea",
      "time",
      "u",
      "var",
      "video",
      "wbr",
      "text",
      // obsolete inline tags
      "acronym",
      "big",
      "strike",
      "tt"
    ]), this.inline_custom_elements = this._get_boolean("inline_custom_elements", !0), this.void_elements = this._get_array("void_elements", [
      // HTLM void elements - aka self-closing tags - aka singletons
      // https://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
      "area",
      "base",
      "br",
      "col",
      "embed",
      "hr",
      "img",
      "input",
      "keygen",
      "link",
      "menuitem",
      "meta",
      "param",
      "source",
      "track",
      "wbr",
      // NOTE: Optional tags are too complex for a simple list
      // they are hard coded in _do_optional_end_element
      // Doctype and xml elements
      "!doctype",
      "?xml",
      // obsolete tags
      // basefont: https://www.computerhope.com/jargon/h/html-basefont-tag.htm
      // isndex: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/isindex
      "basefont",
      "isindex"
    ]), this.unformatted = this._get_array("unformatted", []), this.content_unformatted = this._get_array("content_unformatted", [
      "pre",
      "textarea"
    ]), this.unformatted_content_delimiter = this._get_characters("unformatted_content_delimiter"), this.indent_scripts = this._get_selection("indent_scripts", ["normal", "keep", "separate"]);
  }
  return n.prototype = new r(), ze.Options = n, ze;
}
var me = {}, Tt;
function Ct() {
  if (Tt) return me;
  Tt = 1;
  var r = be().Tokenizer, n = be().TOKEN, t = Qe().Directives, e = Gt().TemplatablePattern, s = xe().Pattern, _ = {
    TAG_OPEN: "TK_TAG_OPEN",
    TAG_CLOSE: "TK_TAG_CLOSE",
    CONTROL_FLOW_OPEN: "TK_CONTROL_FLOW_OPEN",
    CONTROL_FLOW_CLOSE: "TK_CONTROL_FLOW_CLOSE",
    ATTRIBUTE: "TK_ATTRIBUTE",
    EQUALS: "TK_EQUALS",
    VALUE: "TK_VALUE",
    COMMENT: "TK_COMMENT",
    TEXT: "TK_TEXT",
    UNKNOWN: "TK_UNKNOWN",
    START: n.START,
    RAW: n.RAW,
    EOF: n.EOF
  }, u = new t(/<\!--/, /-->/), a = function(l, k) {
    r.call(this, l, k), this._current_tag_name = "";
    var f = new e(this._input).read_options(this._options), v = new s(this._input);
    if (this.__patterns = {
      word: f.until(/[\n\r\t <]/),
      word_control_flow_close_excluded: f.until(/[\n\r\t <}]/),
      single_quote: f.until_after(/'/),
      double_quote: f.until_after(/"/),
      attribute: f.until(/[\n\r\t =>]|\/>/),
      element_name: f.until(/[\n\r\t >\/]/),
      angular_control_flow_start: v.matching(/\@[a-zA-Z]+[^({]*[({]/),
      handlebars_comment: v.starting_with(/{{!--/).until_after(/--}}/),
      handlebars: v.starting_with(/{{/).until_after(/}}/),
      handlebars_open: v.until(/[\n\r\t }]/),
      handlebars_raw_close: v.until(/}}/),
      comment: v.starting_with(/<!--/).until_after(/-->/),
      cdata: v.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
      // https://en.wikipedia.org/wiki/Conditional_comment
      conditional_comment: v.starting_with(/<!\[/).until_after(/]>/),
      processing: v.starting_with(/<\?/).until_after(/\?>/)
    }, this._options.indent_handlebars && (this.__patterns.word = this.__patterns.word.exclude("handlebars"), this.__patterns.word_control_flow_close_excluded = this.__patterns.word_control_flow_close_excluded.exclude("handlebars")), this._unformatted_content_delimiter = null, this._options.unformatted_content_delimiter) {
      var x = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);
      this.__patterns.unformatted_content_delimiter = v.matching(x).until_after(x);
    }
  };
  return a.prototype = new r(), a.prototype._is_comment = function(l) {
    return !1;
  }, a.prototype._is_opening = function(l) {
    return l.type === _.TAG_OPEN || l.type === _.CONTROL_FLOW_OPEN;
  }, a.prototype._is_closing = function(l, k) {
    return l.type === _.TAG_CLOSE && k && ((l.text === ">" || l.text === "/>") && k.text[0] === "<" || l.text === "}}" && k.text[0] === "{" && k.text[1] === "{") || l.type === _.CONTROL_FLOW_CLOSE && l.text === "}" && k.text.endsWith("{");
  }, a.prototype._reset = function() {
    this._current_tag_name = "";
  }, a.prototype._get_next_token = function(l, k) {
    var f = null;
    this._readWhitespace();
    var v = this._input.peek();
    return v === null ? this._create_token(_.EOF, "") : (f = f || this._read_open_handlebars(v, k), f = f || this._read_attribute(v, l, k), f = f || this._read_close(v, k), f = f || this._read_script_and_style(v, l), f = f || this._read_control_flows(v, k), f = f || this._read_raw_content(v, l, k), f = f || this._read_content_word(v, k), f = f || this._read_comment_or_cdata(v), f = f || this._read_processing(v), f = f || this._read_open(v, k), f = f || this._create_token(_.UNKNOWN, this._input.next()), f);
  }, a.prototype._read_comment_or_cdata = function(l) {
    var k = null, f = null, v = null;
    if (l === "<") {
      var x = this._input.peek(1);
      x === "!" && (f = this.__patterns.comment.read(), f ? (v = u.get_directives(f), v && v.ignore === "start" && (f += u.readIgnored(this._input))) : f = this.__patterns.cdata.read()), f && (k = this._create_token(_.COMMENT, f), k.directives = v);
    }
    return k;
  }, a.prototype._read_processing = function(l) {
    var k = null, f = null, v = null;
    if (l === "<") {
      var x = this._input.peek(1);
      (x === "!" || x === "?") && (f = this.__patterns.conditional_comment.read(), f = f || this.__patterns.processing.read()), f && (k = this._create_token(_.COMMENT, f), k.directives = v);
    }
    return k;
  }, a.prototype._read_open = function(l, k) {
    var f = null, v = null;
    return (!k || k.type === _.CONTROL_FLOW_OPEN) && l === "<" && (f = this._input.next(), this._input.peek() === "/" && (f += this._input.next()), f += this.__patterns.element_name.read(), v = this._create_token(_.TAG_OPEN, f)), v;
  }, a.prototype._read_open_handlebars = function(l, k) {
    var f = null, v = null;
    return (!k || k.type === _.CONTROL_FLOW_OPEN) && (this._options.templating.includes("angular") || this._options.indent_handlebars) && l === "{" && this._input.peek(1) === "{" && (this._options.indent_handlebars && this._input.peek(2) === "!" ? (f = this.__patterns.handlebars_comment.read(), f = f || this.__patterns.handlebars.read(), v = this._create_token(_.COMMENT, f)) : (f = this.__patterns.handlebars_open.read(), v = this._create_token(_.TAG_OPEN, f))), v;
  }, a.prototype._read_control_flows = function(l, k) {
    var f = "", v = null;
    if (!this._options.templating.includes("angular"))
      return v;
    if (l === "@") {
      if (f = this.__patterns.angular_control_flow_start.read(), f === "")
        return v;
      for (var x = f.endsWith("(") ? 1 : 0, R = 0; !(f.endsWith("{") && x === R); ) {
        var j = this._input.next();
        if (j === null)
          break;
        j === "(" ? x++ : j === ")" && R++, f += j;
      }
      v = this._create_token(_.CONTROL_FLOW_OPEN, f);
    } else l === "}" && k && k.type === _.CONTROL_FLOW_OPEN && (f = this._input.next(), v = this._create_token(_.CONTROL_FLOW_CLOSE, f));
    return v;
  }, a.prototype._read_close = function(l, k) {
    var f = null, v = null;
    return k && k.type === _.TAG_OPEN && (k.text[0] === "<" && (l === ">" || l === "/" && this._input.peek(1) === ">") ? (f = this._input.next(), l === "/" && (f += this._input.next()), v = this._create_token(_.TAG_CLOSE, f)) : k.text[0] === "{" && l === "}" && this._input.peek(1) === "}" && (this._input.next(), this._input.next(), v = this._create_token(_.TAG_CLOSE, "}}"))), v;
  }, a.prototype._read_attribute = function(l, k, f) {
    var v = null, x = "";
    if (f && f.text[0] === "<")
      if (l === "=")
        v = this._create_token(_.EQUALS, this._input.next());
      else if (l === '"' || l === "'") {
        var R = this._input.next();
        l === '"' ? R += this.__patterns.double_quote.read() : R += this.__patterns.single_quote.read(), v = this._create_token(_.VALUE, R);
      } else
        x = this.__patterns.attribute.read(), x && (k.type === _.EQUALS ? v = this._create_token(_.VALUE, x) : v = this._create_token(_.ATTRIBUTE, x));
    return v;
  }, a.prototype._is_content_unformatted = function(l) {
    return this._options.void_elements.indexOf(l) === -1 && (this._options.content_unformatted.indexOf(l) !== -1 || this._options.unformatted.indexOf(l) !== -1);
  }, a.prototype._read_raw_content = function(l, k, f) {
    var v = "";
    if (f && f.text[0] === "{")
      v = this.__patterns.handlebars_raw_close.read();
    else if (k.type === _.TAG_CLOSE && k.opened.text[0] === "<" && k.text[0] !== "/") {
      var x = k.opened.text.substr(1).toLowerCase();
      this._is_content_unformatted(x) && (v = this._input.readUntil(new RegExp("</" + x + "[\\n\\r\\t ]*?>", "ig")));
    }
    return v ? this._create_token(_.TEXT, v) : null;
  }, a.prototype._read_script_and_style = function(l, k) {
    if (k.type === _.TAG_CLOSE && k.opened.text[0] === "<" && k.text[0] !== "/") {
      var f = k.opened.text.substr(1).toLowerCase();
      if (f === "script" || f === "style") {
        var v = this._read_comment_or_cdata(l);
        if (v)
          return v.type = _.TEXT, v;
        var x = this._input.readUntil(new RegExp("</" + f + "[\\n\\r\\t ]*?>", "ig"));
        if (x)
          return this._create_token(_.TEXT, x);
      }
    }
    return null;
  }, a.prototype._read_content_word = function(l, k) {
    var f = "";
    return this._options.unformatted_content_delimiter && l === this._options.unformatted_content_delimiter[0] && (f = this.__patterns.unformatted_content_delimiter.read()), f || (f = k && k.type === _.CONTROL_FLOW_OPEN ? this.__patterns.word_control_flow_close_excluded.read() : this.__patterns.word.read()), f ? this._create_token(_.TEXT, f) : null;
  }, me.Tokenizer = a, me.TOKEN = _, me;
}
var Rt;
function Fn() {
  if (Rt) return $e;
  Rt = 1;
  var r = Xt().Options, n = Fe().Output, t = Ct().Tokenizer, e = Ct().TOKEN, s = /\r\n|[\r\n]/, _ = /\r\n|[\r\n]/g, u = function(p, o) {
    this.indent_level = 0, this.alignment_size = 0, this.max_preserve_newlines = p.max_preserve_newlines, this.preserve_newlines = p.preserve_newlines, this._output = new n(p, o);
  };
  u.prototype.current_line_has_match = function(p) {
    return this._output.current_line.has_match(p);
  }, u.prototype.set_space_before_token = function(p, o) {
    this._output.space_before_token = p, this._output.non_breaking_space = o;
  }, u.prototype.set_wrap_point = function() {
    this._output.set_indent(this.indent_level, this.alignment_size), this._output.set_wrap_point();
  }, u.prototype.add_raw_token = function(p) {
    this._output.add_raw_token(p);
  }, u.prototype.print_preserved_newlines = function(p) {
    var o = 0;
    p.type !== e.TEXT && p.previous.type !== e.TEXT && (o = p.newlines ? 1 : 0), this.preserve_newlines && (o = p.newlines < this.max_preserve_newlines + 1 ? p.newlines : this.max_preserve_newlines + 1);
    for (var h = 0; h < o; h++)
      this.print_newline(h > 0);
    return o !== 0;
  }, u.prototype.traverse_whitespace = function(p) {
    return p.whitespace_before || p.newlines ? (this.print_preserved_newlines(p) || (this._output.space_before_token = !0), !0) : !1;
  }, u.prototype.previous_token_wrapped = function() {
    return this._output.previous_token_wrapped;
  }, u.prototype.print_newline = function(p) {
    this._output.add_new_line(p);
  }, u.prototype.print_token = function(p) {
    p.text && (this._output.set_indent(this.indent_level, this.alignment_size), this._output.add_token(p.text));
  }, u.prototype.indent = function() {
    this.indent_level++;
  }, u.prototype.deindent = function() {
    this.indent_level > 0 && (this.indent_level--, this._output.set_indent(this.indent_level, this.alignment_size));
  }, u.prototype.get_full_indent = function(p) {
    return p = this.indent_level + (p || 0), p < 1 ? "" : this._output.get_indent_string(p);
  };
  var a = function(p) {
    for (var o = null, h = p.next; h.type !== e.EOF && p.closed !== h; ) {
      if (h.type === e.ATTRIBUTE && h.text === "type") {
        h.next && h.next.type === e.EQUALS && h.next.next && h.next.next.type === e.VALUE && (o = h.next.next.text);
        break;
      }
      h = h.next;
    }
    return o;
  }, l = function(p, o) {
    var h = null, T = null;
    return o.closed ? (p === "script" ? h = "text/javascript" : p === "style" && (h = "text/css"), h = a(o) || h, h.search("text/css") > -1 ? T = "css" : h.search(/module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/) > -1 ? T = "javascript" : h.search(/(text|application|dojo)\/(x-)?(html)/) > -1 ? T = "html" : h.search(/test\/null/) > -1 && (T = "null"), T) : null;
  };
  function k(p, o) {
    return o.indexOf(p) !== -1;
  }
  function f(p, o, h) {
    this.parent = p || null, this.tag = o ? o.tag_name : "", this.indent_level = h || 0, this.parser_token = o || null;
  }
  function v(p) {
    this._printer = p, this._current_frame = null;
  }
  v.prototype.get_parser_token = function() {
    return this._current_frame ? this._current_frame.parser_token : null;
  }, v.prototype.record_tag = function(p) {
    var o = new f(this._current_frame, p, this._printer.indent_level);
    this._current_frame = o;
  }, v.prototype._try_pop_frame = function(p) {
    var o = null;
    return p && (o = p.parser_token, this._printer.indent_level = p.indent_level, this._current_frame = p.parent), o;
  }, v.prototype._get_frame = function(p, o) {
    for (var h = this._current_frame; h && p.indexOf(h.tag) === -1; ) {
      if (o && o.indexOf(h.tag) !== -1) {
        h = null;
        break;
      }
      h = h.parent;
    }
    return h;
  }, v.prototype.try_pop = function(p, o) {
    var h = this._get_frame([p], o);
    return this._try_pop_frame(h);
  }, v.prototype.indent_to_tag = function(p) {
    var o = this._get_frame(p);
    o && (this._printer.indent_level = o.indent_level);
  };
  function x(p, o, h, T) {
    this._source_text = p || "", o = o || {}, this._js_beautify = h, this._css_beautify = T, this._tag_stack = null;
    var E = new r(o, "html");
    this._options = E, this._is_wrap_attributes_force = this._options.wrap_attributes.substr(0, 5) === "force", this._is_wrap_attributes_force_expand_multiline = this._options.wrap_attributes === "force-expand-multiline", this._is_wrap_attributes_force_aligned = this._options.wrap_attributes === "force-aligned", this._is_wrap_attributes_aligned_multiple = this._options.wrap_attributes === "aligned-multiple", this._is_wrap_attributes_preserve = this._options.wrap_attributes.substr(0, 8) === "preserve", this._is_wrap_attributes_preserve_aligned = this._options.wrap_attributes === "preserve-aligned";
  }
  x.prototype.beautify = function() {
    if (this._options.disabled)
      return this._source_text;
    var p = this._source_text, o = this._options.eol;
    this._options.eol === "auto" && (o = `
`, p && s.test(p) && (o = p.match(s)[0])), p = p.replace(_, `
`);
    var h = p.match(/^[\t ]*/)[0], T = {
      text: "",
      type: ""
    }, E = new R(this._options), I = new u(this._options, h), b = new t(p, this._options).tokenize();
    this._tag_stack = new v(I);
    for (var w = null, c = b.next(); c.type !== e.EOF; )
      c.type === e.TAG_OPEN || c.type === e.COMMENT ? (w = this._handle_tag_open(I, c, E, T, b), E = w) : c.type === e.ATTRIBUTE || c.type === e.EQUALS || c.type === e.VALUE || c.type === e.TEXT && !E.tag_complete ? w = this._handle_inside_tag(I, c, E, T) : c.type === e.TAG_CLOSE ? w = this._handle_tag_close(I, c, E) : c.type === e.TEXT ? w = this._handle_text(I, c, E) : c.type === e.CONTROL_FLOW_OPEN ? w = this._handle_control_flow_open(I, c) : c.type === e.CONTROL_FLOW_CLOSE ? w = this._handle_control_flow_close(I, c) : I.add_raw_token(c), T = w, c = b.next();
    var g = I._output.get_code(o);
    return g;
  }, x.prototype._handle_control_flow_open = function(p, o) {
    var h = {
      text: o.text,
      type: o.type
    };
    return p.set_space_before_token(o.newlines || o.whitespace_before !== "", !0), o.newlines ? p.print_preserved_newlines(o) : p.set_space_before_token(o.newlines || o.whitespace_before !== "", !0), p.print_token(o), p.indent(), h;
  }, x.prototype._handle_control_flow_close = function(p, o) {
    var h = {
      text: o.text,
      type: o.type
    };
    return p.deindent(), o.newlines ? p.print_preserved_newlines(o) : p.set_space_before_token(o.newlines || o.whitespace_before !== "", !0), p.print_token(o), h;
  }, x.prototype._handle_tag_close = function(p, o, h) {
    var T = {
      text: o.text,
      type: o.type
    };
    return p.alignment_size = 0, h.tag_complete = !0, p.set_space_before_token(o.newlines || o.whitespace_before !== "", !0), h.is_unformatted ? p.add_raw_token(o) : (h.tag_start_char === "<" && (p.set_space_before_token(o.text[0] === "/", !0), this._is_wrap_attributes_force_expand_multiline && h.has_wrapped_attrs && p.print_newline(!1)), p.print_token(o)), h.indent_content && !(h.is_unformatted || h.is_content_unformatted) && (p.indent(), h.indent_content = !1), !h.is_inline_element && !(h.is_unformatted || h.is_content_unformatted) && p.set_wrap_point(), T;
  }, x.prototype._handle_inside_tag = function(p, o, h, T) {
    var E = h.has_wrapped_attrs, I = {
      text: o.text,
      type: o.type
    };
    return p.set_space_before_token(o.newlines || o.whitespace_before !== "", !0), h.is_unformatted ? p.add_raw_token(o) : h.tag_start_char === "{" && o.type === e.TEXT ? p.print_preserved_newlines(o) ? (o.newlines = 0, p.add_raw_token(o)) : p.print_token(o) : (o.type === e.ATTRIBUTE ? p.set_space_before_token(!0) : (o.type === e.EQUALS || o.type === e.VALUE && o.previous.type === e.EQUALS) && p.set_space_before_token(!1), o.type === e.ATTRIBUTE && h.tag_start_char === "<" && ((this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) && (p.traverse_whitespace(o), E = E || o.newlines !== 0), this._is_wrap_attributes_force && h.attr_count >= this._options.wrap_attributes_min_attrs && (T.type !== e.TAG_OPEN || // ie. second attribute and beyond
    this._is_wrap_attributes_force_expand_multiline) && (p.print_newline(!1), E = !0)), p.print_token(o), E = E || p.previous_token_wrapped(), h.has_wrapped_attrs = E), I;
  }, x.prototype._handle_text = function(p, o, h) {
    var T = {
      text: o.text,
      type: "TK_CONTENT"
    };
    return h.custom_beautifier_name ? this._print_custom_beatifier_text(p, o, h) : h.is_unformatted || h.is_content_unformatted ? p.add_raw_token(o) : (p.traverse_whitespace(o), p.print_token(o)), T;
  }, x.prototype._print_custom_beatifier_text = function(p, o, h) {
    var T = this;
    if (o.text !== "") {
      var E = o.text, I, b = 1, w = "", c = "";
      h.custom_beautifier_name === "javascript" && typeof this._js_beautify == "function" ? I = this._js_beautify : h.custom_beautifier_name === "css" && typeof this._css_beautify == "function" ? I = this._css_beautify : h.custom_beautifier_name === "html" && (I = function(B, W) {
        var L = new x(B, W, T._js_beautify, T._css_beautify);
        return L.beautify();
      }), this._options.indent_scripts === "keep" ? b = 0 : this._options.indent_scripts === "separate" && (b = -p.indent_level);
      var g = p.get_full_indent(b);
      if (E = E.replace(/\n[ \t]*$/, ""), h.custom_beautifier_name !== "html" && E[0] === "<" && E.match(/^(<!--|<!\[CDATA\[)/)) {
        var i = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(E);
        if (!i) {
          p.add_raw_token(o);
          return;
        }
        w = g + i[1] + `
`, E = i[4], i[5] && (c = g + i[5]), E = E.replace(/\n[ \t]*$/, ""), (i[2] || i[3].indexOf(`
`) !== -1) && (i = i[3].match(/[ \t]+$/), i && (o.whitespace_before = i[0]));
      }
      if (E)
        if (I) {
          var d = function() {
            this.eol = `
`;
          };
          d.prototype = this._options.raw_options;
          var m = new d();
          E = I(g + E, m);
        } else {
          var N = o.whitespace_before;
          N && (E = E.replace(new RegExp(`
(` + N + ")?", "g"), `
`)), E = g + E.replace(/\n/g, `
` + g);
        }
      w && (E ? E = w + E + `
` + c : E = w + c), p.print_newline(!1), E && (o.text = E, o.whitespace_before = "", o.newlines = 0, p.add_raw_token(o), p.print_newline(!0));
    }
  }, x.prototype._handle_tag_open = function(p, o, h, T, E) {
    var I = this._get_tag_open_token(o);
    if ((h.is_unformatted || h.is_content_unformatted) && !h.is_empty_element && o.type === e.TAG_OPEN && !I.is_start_tag ? (p.add_raw_token(o), I.start_tag_token = this._tag_stack.try_pop(I.tag_name)) : (p.traverse_whitespace(o), this._set_tag_position(p, o, I, h, T), I.is_inline_element || p.set_wrap_point(), p.print_token(o)), I.is_start_tag && this._is_wrap_attributes_force) {
      var b = 0, w;
      do
        w = E.peek(b), w.type === e.ATTRIBUTE && (I.attr_count += 1), b += 1;
      while (w.type !== e.EOF && w.type !== e.TAG_CLOSE);
    }
    return (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) && (I.alignment_size = o.text.length + 1), !I.tag_complete && !I.is_unformatted && (p.alignment_size = I.alignment_size), I;
  };
  var R = function(p, o, h) {
    if (this.parent = o || null, this.text = "", this.type = "TK_TAG_OPEN", this.tag_name = "", this.is_inline_element = !1, this.is_unformatted = !1, this.is_content_unformatted = !1, this.is_empty_element = !1, this.is_start_tag = !1, this.is_end_tag = !1, this.indent_content = !1, this.multiline_content = !1, this.custom_beautifier_name = null, this.start_tag_token = null, this.attr_count = 0, this.has_wrapped_attrs = !1, this.alignment_size = 0, this.tag_complete = !1, this.tag_start_char = "", this.tag_check = "", !h)
      this.tag_complete = !0;
    else {
      var T;
      this.tag_start_char = h.text[0], this.text = h.text, this.tag_start_char === "<" ? (T = h.text.match(/^<([^\s>]*)/), this.tag_check = T ? T[1] : "") : (T = h.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/), this.tag_check = T ? T[1] : "", (h.text.startsWith("{{#>") || h.text.startsWith("{{~#>")) && this.tag_check[0] === ">" && (this.tag_check === ">" && h.next !== null ? this.tag_check = h.next.text.split(" ")[0] : this.tag_check = h.text.split(">")[1])), this.tag_check = this.tag_check.toLowerCase(), h.type === e.COMMENT && (this.tag_complete = !0), this.is_start_tag = this.tag_check.charAt(0) !== "/", this.tag_name = this.is_start_tag ? this.tag_check : this.tag_check.substr(1), this.is_end_tag = !this.is_start_tag || h.closed && h.closed.text === "/>";
      var E = 2;
      this.tag_start_char === "{" && this.text.length >= 3 && this.text.charAt(2) === "~" && (E = 3), this.is_end_tag = this.is_end_tag || this.tag_start_char === "{" && (!p.indent_handlebars || this.text.length < 3 || /[^#\^]/.test(this.text.charAt(E)));
    }
  };
  x.prototype._get_tag_open_token = function(p) {
    var o = new R(this._options, this._tag_stack.get_parser_token(), p);
    return o.alignment_size = this._options.wrap_attributes_indent_size, o.is_end_tag = o.is_end_tag || k(o.tag_check, this._options.void_elements), o.is_empty_element = o.tag_complete || o.is_start_tag && o.is_end_tag, o.is_unformatted = !o.tag_complete && k(o.tag_check, this._options.unformatted), o.is_content_unformatted = !o.is_empty_element && k(o.tag_check, this._options.content_unformatted), o.is_inline_element = k(o.tag_name, this._options.inline) || this._options.inline_custom_elements && o.tag_name.includes("-") || o.tag_start_char === "{", o;
  }, x.prototype._set_tag_position = function(p, o, h, T, E) {
    if (h.is_empty_element || (h.is_end_tag ? h.start_tag_token = this._tag_stack.try_pop(h.tag_name) : (this._do_optional_end_element(h) && (h.is_inline_element || p.print_newline(!1)), this._tag_stack.record_tag(h), (h.tag_name === "script" || h.tag_name === "style") && !(h.is_unformatted || h.is_content_unformatted) && (h.custom_beautifier_name = l(h.tag_check, o)))), k(h.tag_check, this._options.extra_liners) && (p.print_newline(!1), p._output.just_added_blankline() || p.print_newline(!0)), h.is_empty_element) {
      if (h.tag_start_char === "{" && h.tag_check === "else") {
        this._tag_stack.indent_to_tag(["if", "unless", "each"]), h.indent_content = !0;
        var I = p.current_line_has_match(/{{#if/);
        I || p.print_newline(!1);
      }
      h.tag_name === "!--" && E.type === e.TAG_CLOSE && T.is_end_tag && h.text.indexOf(`
`) === -1 || (h.is_inline_element || h.is_unformatted || p.print_newline(!1), this._calcluate_parent_multiline(p, h));
    } else if (h.is_end_tag) {
      var b = !1;
      b = h.start_tag_token && h.start_tag_token.multiline_content, b = b || !h.is_inline_element && !(T.is_inline_element || T.is_unformatted) && !(E.type === e.TAG_CLOSE && h.start_tag_token === T) && E.type !== "TK_CONTENT", (h.is_content_unformatted || h.is_unformatted) && (b = !1), b && p.print_newline(!1);
    } else
      h.indent_content = !h.custom_beautifier_name, h.tag_start_char === "<" && (h.tag_name === "html" ? h.indent_content = this._options.indent_inner_html : h.tag_name === "head" ? h.indent_content = this._options.indent_head_inner_html : h.tag_name === "body" && (h.indent_content = this._options.indent_body_inner_html)), !(h.is_inline_element || h.is_unformatted) && (E.type !== "TK_CONTENT" || h.is_content_unformatted) && p.print_newline(!1), this._calcluate_parent_multiline(p, h);
  }, x.prototype._calcluate_parent_multiline = function(p, o) {
    o.parent && p._output.just_added_newline() && !((o.is_inline_element || o.is_unformatted) && o.parent.is_inline_element) && (o.parent.multiline_content = !0);
  };
  var j = ["address", "article", "aside", "blockquote", "details", "div", "dl", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "main", "menu", "nav", "ol", "p", "pre", "section", "table", "ul"], A = ["a", "audio", "del", "ins", "map", "noscript", "video"];
  return x.prototype._do_optional_end_element = function(p) {
    var o = null;
    if (!(p.is_empty_element || !p.is_start_tag || !p.parent)) {
      if (p.tag_name === "body")
        o = o || this._tag_stack.try_pop("head");
      else if (p.tag_name === "li")
        o = o || this._tag_stack.try_pop("li", ["ol", "ul", "menu"]);
      else if (p.tag_name === "dd" || p.tag_name === "dt")
        o = o || this._tag_stack.try_pop("dt", ["dl"]), o = o || this._tag_stack.try_pop("dd", ["dl"]);
      else if (p.parent.tag_name === "p" && j.indexOf(p.tag_name) !== -1) {
        var h = p.parent.parent;
        (!h || A.indexOf(h.tag_name) === -1) && (o = o || this._tag_stack.try_pop("p"));
      } else p.tag_name === "rp" || p.tag_name === "rt" ? (o = o || this._tag_stack.try_pop("rt", ["ruby", "rtc"]), o = o || this._tag_stack.try_pop("rp", ["ruby", "rtc"])) : p.tag_name === "optgroup" ? o = o || this._tag_stack.try_pop("optgroup", ["select"]) : p.tag_name === "option" ? o = o || this._tag_stack.try_pop("option", ["select", "datalist", "optgroup"]) : p.tag_name === "colgroup" ? o = o || this._tag_stack.try_pop("caption", ["table"]) : p.tag_name === "thead" ? (o = o || this._tag_stack.try_pop("caption", ["table"]), o = o || this._tag_stack.try_pop("colgroup", ["table"])) : p.tag_name === "tbody" || p.tag_name === "tfoot" ? (o = o || this._tag_stack.try_pop("caption", ["table"]), o = o || this._tag_stack.try_pop("colgroup", ["table"]), o = o || this._tag_stack.try_pop("thead", ["table"]), o = o || this._tag_stack.try_pop("tbody", ["table"])) : p.tag_name === "tr" ? (o = o || this._tag_stack.try_pop("caption", ["table"]), o = o || this._tag_stack.try_pop("colgroup", ["table"]), o = o || this._tag_stack.try_pop("tr", ["table", "thead", "tbody", "tfoot"])) : (p.tag_name === "th" || p.tag_name === "td") && (o = o || this._tag_stack.try_pop("td", ["table", "thead", "tbody", "tfoot", "tr"]), o = o || this._tag_stack.try_pop("th", ["table", "thead", "tbody", "tfoot", "tr"]));
      return p.parent = this._tag_stack.get_parser_token(), o;
    }
  }, $e.Beautifier = x, $e;
}
var Lt;
function Xn() {
  if (Lt) return ve.exports;
  Lt = 1;
  var r = Fn().Beautifier, n = Xt().Options;
  function t(e, s, _, u) {
    var a = new r(e, s, _, u);
    return a.beautify();
  }
  return ve.exports = t, ve.exports.defaultOptions = function() {
    return new n();
  }, ve.exports;
}
var At;
function Hn() {
  if (At) return oe;
  At = 1;
  var r = Vn(), n = Gn(), t = Xn();
  function e(s, _, u, a) {
    return u = u || r, a = a || n, t(s, _, u, a);
  }
  return e.defaultOptions = t.defaultOptions, oe.js = r, oe.css = n, oe.html = e, oe;
}
var jt;
function Qn() {
  return jt || (jt = 1, (function(r) {
    function n(t, e, s) {
      var _ = function(u, a) {
        return t.js_beautify(u, a);
      };
      return _.js = t.js_beautify, _.css = e.css_beautify, _.html = s.html_beautify, _.js_beautify = t.js_beautify, _.css_beautify = e.css_beautify, _.html_beautify = s.html_beautify, _;
    }
    (function(t) {
      var e = Hn();
      e.js_beautify = e.js, e.css_beautify = e.css, e.html_beautify = e.html, t.exports = n(e, e, e);
    })(r);
  })(Oe)), Oe.exports;
}
var Nt = Qn();
const Zn = {
  __name: "index",
  props: {
    code: {
      type: String,
      required: !0
    }
  },
  setup(r, { expose: n }) {
    n();
    const t = et.component, e = r, s = S(() => Nt.html(e.code, {
      indent_size: 2,
      indent_inner_html: !0,
      wrap_attributes: "force-expand-multiline",
      wrap_attributes_indent_size: 2,
      inline_custom_elements: !0
    })), u = { hlVue: t, props: e, formattedCode: s, copyToClipboard: async () => {
      try {
        await navigator.clipboard.writeText(s.value);
      } catch (a) {
        console.error("Failed to copy: ", a);
      }
    }, computed: S, get beautifyHtml() {
      return Nt.html;
    }, get hljsVuePlugin() {
      return et;
    }, get CopyIcon() {
      return Qi;
    } };
    return Object.defineProperty(u, "__isScriptSetup", { enumerable: !1, value: !0 }), u;
  }
}, Yn = { class: "vue-lab__code-preview" }, Jn = { class: "vue-lab__code-preview__content" };
function ea(r, n, t, e, s, _) {
  return y(), C("div", Yn, [
    n[0] || (n[0] = O(
      "div",
      { class: "vue-lab__code-preview__title" },
      "Usage",
      -1
      /* CACHED */
    )),
    O("div", Jn, [
      F(e.CopyIcon, {
        class: "vue-lab__code-preview__content__copy-ctrl",
        onClick: e.copyToClipboard
      }),
      F(e.hlVue, {
        code: e.formattedCode,
        autodetect: !1,
        language: "xml",
        class: "vue-lab__code-preview__pre"
      }, null, 8, ["code"])
    ])
  ]);
}
const Ht = /* @__PURE__ */ z(Zn, [["render", ea], ["__scopeId", "data-v-ba1811dc"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/layout/CodePreview/index.vue"]]), ta = {
  __name: "index",
  props: {
    num: {
      type: Number,
      default: 3
    }
  },
  setup(r, { expose: n }) {
    n();
    const t = r, e = Array.from({ length: t.num }), s = { props: t, dotsArray: e, get generateKey() {
      return ie;
    } };
    return Object.defineProperty(s, "__isScriptSetup", { enumerable: !1, value: !0 }), s;
  }
}, ia = { class: "vue-lab__divider" };
function sa(r, n, t, e, s, _) {
  return y(), C("div", ia, [
    (y(!0), C(
      G,
      null,
      X(e.dotsArray, (u) => (y(), C("div", {
        key: e.generateKey(u),
        class: "vue-lab__divider-dot"
      }))),
      128
      /* KEYED_FRAGMENT */
    ))
  ]);
}
const we = /* @__PURE__ */ z(ta, [["render", sa], ["__scopeId", "data-v-a2d7e9c1"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/layout/Divider/index.vue"]]), na = {
  __name: "Palette",
  props: {
    title: { type: String, default: () => "Palette" },
    colors: { type: Array, default: () => [] }
  },
  setup(r, { expose: n }) {
    n(), Ue((a) => ({
      "17706230-columns": s.value
    }));
    const t = r, e = t.colors.sort((a, l) => a.index < l.index), s = S(() => e.map((a) => a.isBase ? "2fr" : "1fr").join(" ")), u = { props: t, sortedList: e, columns: s, copyToClipboard: async (a) => {
      try {
        await navigator.clipboard.writeText(a);
      } catch (l) {
        console.error("Failed to copy: ", l);
      }
    }, computed: S };
    return Object.defineProperty(u, "__isScriptSetup", { enumerable: !1, value: !0 }), u;
  }
}, aa = { class: "vue-lab__palette" }, ra = { class: "vue-lab__palette-title" }, _a = { class: "vue-lab__palette-colors" }, oa = ["onClick"], ua = { class: "vue-lab__palette-color-item__title" };
function la(r, n, t, e, s, _) {
  return y(), C("div", aa, [
    O(
      "div",
      ra,
      U(t.title),
      1
      /* TEXT */
    ),
    O("div", _a, [
      (y(!0), C(
        G,
        null,
        X(e.sortedList, (u, a) => (y(), C(
          "div",
          {
            style: te(`--i:${a}`),
            key: `color-item-${t.title}-${u}-${u.index}-${a}`,
            class: "vue-lab__palette-color-item"
          },
          [
            O("div", {
              style: te({ backgroundColor: u.value }),
              class: "vue-lab__palette-color-item__bg",
              onClick: (l) => e.copyToClipboard(u.value)
            }, null, 12, oa),
            O(
              "div",
              ua,
              U(`${u.name}${u.isBase ? " (Base)" : ""}`),
              1
              /* TEXT */
            )
          ],
          4
          /* STYLE */
        ))),
        128
        /* KEYED_FRAGMENT */
      ))
    ])
  ]);
}
const pa = /* @__PURE__ */ z(na, [["render", la], ["__scopeId", "data-v-17706230"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/layout/ColorBlock/Palette.vue"]]), ca = {
  __name: "index",
  props: {
    title: { type: String, default: () => "palette" },
    options: { type: Array, default: () => [] }
  },
  setup(r, { expose: n }) {
    n();
    const t = r, e = S(() => [...new Set(t.options.map((u) => u.colorGroupName))].map((u) => ({
      title: u,
      colors: t.options.filter((a) => a.colorGroupName == u)
    }))), s = { props: t, pallets: e, computed: S, Palette: pa };
    return Object.defineProperty(s, "__isScriptSetup", { enumerable: !1, value: !0 }), s;
  }
}, ha = { class: "vue-lab__color-block" }, fa = { class: "vue-lab__color-block__title" }, da = { class: "vue-lab__color-block__content" };
function va(r, n, t, e, s, _) {
  return y(), C("div", ha, [
    O(
      "div",
      fa,
      U(t.title),
      1
      /* TEXT */
    ),
    O("div", da, [
      (y(!0), C(
        G,
        null,
        X(e.pallets, (u, a) => (y(), P(e.Palette, {
          key: `palette-${u.title}-${a}`,
          title: u.title,
          colors: u.colors
        }, null, 8, ["title", "colors"]))),
        128
        /* KEYED_FRAGMENT */
      ))
    ])
  ]);
}
const ma = /* @__PURE__ */ z(ca, [["render", va], ["__scopeId", "data-v-9831151a"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/components/layout/ColorBlock/index.vue"]]), ga = {
  __name: "group",
  props: {
    option: { type: Object, default: () => ({}) },
    isGroup: { type: Boolean, default: !1 },
    isLast: { type: Boolean, default: !1 }
  },
  setup(r, { expose: n }) {
    n();
    const e = { props: r, get generateKey() {
      return ie;
    }, get Divider() {
      return we;
    } };
    return Object.defineProperty(e, "__isScriptSetup", { enumerable: !1, value: !0 }), e;
  }
}, ba = { class: "vue-lab-home-page__group" }, ya = {
  key: 0,
  class: "vue-lab-home-page__group-name"
}, xa = {
  key: 1,
  class: "vue-lab-home-page__group-description"
}, wa = { class: "vue-lab-home-page__group-body" };
function ka(r, n, t, e, s, _) {
  const u = ye("router-link");
  return y(), C("div", ba, [
    t.option?.name || t.isGroup ? (y(), C(
      "div",
      ya,
      U(t.isGroup ? t.option.name || "Other components" : ""),
      1
      /* TEXT */
    )) : M("v-if", !0),
    t.option?.description ? (y(), C(
      "div",
      xa,
      U(t.option.description || ""),
      1
      /* TEXT */
    )) : M("v-if", !0),
    O("div", wa, [
      (y(!0), C(
        G,
        null,
        X(t.option.items, (a) => (y(), C("div", {
          key: e.generateKey(a),
          class: "vue-lab-home-page__group-body-item"
        }, [
          F(u, {
            to: `/${a.name}`,
            class: "vue-lab-home-page__group-body-link"
          }, {
            default: q(() => [
              J(
                U(a.name),
                1
                /* TEXT */
              )
            ]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["to"])
        ]))),
        128
        /* KEYED_FRAGMENT */
      ))
    ]),
    t.isLast ? M("v-if", !0) : (y(), P(e.Divider, { key: 2 }))
  ]);
}
const Oa = /* @__PURE__ */ z(ga, [["render", ka], ["__scopeId", "data-v-d6fe0ccb"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/views/VueLabHome/group.vue"]]), Ea = {
  __name: "index",
  props: {
    components: { type: Object, default: () => ({}) },
    description: { type: String, default: null },
    title: { type: String, default: null },
    menu: { type: Array, default: () => [] },
    menuGroupsDescription: { type: Object, default: () => null }
  },
  setup(r, { expose: n }) {
    n();
    const t = r, e = $(""), s = (f) => {
      e.value = f;
    }, _ = S(() => t.description || "A reusable UI component library intended to standardize styling, improve development speed, and maintain consistency across projects."), u = S(() => !a.value.some((f) => f.items.length)), a = S(() => {
      const f = t.menu.map((A) => A.group), v = [...new Set(f)].filter((A) => A && A.length), x = (A) => !e.value || !e.value.length ? !0 : A.name.toLowerCase().includes(e.value.toLowerCase()), R = v.map((A) => {
        const p = t.menuGroupsDescription ? t.menuGroupsDescription[A] : null;
        return {
          name: A,
          description: p,
          items: t.menu.filter((o) => o.group === A).filter(x)
        };
      }), j = {
        name: null,
        description: null,
        items: t.menu.filter((A) => !A.group || !A.group.length).filter(x)
      };
      return [...R, j];
    }), l = S(() => t.menu.some((f) => f.group && f.group.length)), k = { props: t, searchQuery: e, handleTextInput: s, pageDiscription: _, isEmptySearch: u, menuItems: a, isGroup: l, computed: S, ref: $, Group: Oa, get generateKey() {
      return ie;
    }, get LabIcon() {
      return Mt;
    }, get Search() {
      return Ve;
    }, get EmptyScreen() {
      return qe;
    } };
    return Object.defineProperty(k, "__isScriptSetup", { enumerable: !1, value: !0 }), k;
  }
}, Sa = { class: "vue-lab-home-page" }, Ta = { class: "vue-lab-home-page__header" }, Ca = { class: "vue-lab-home-page__title" }, Ra = { class: "vue-lab-home-page__title-icon" }, La = { class: "vue-lab-home-page__description" }, Aa = { class: "vue-lab-home-page__search" }, ja = { class: "vue-lab-home-page__menu custom-scroll--simple" };
function Na(r, n, t, e, s, _) {
  return y(), C("div", Sa, [
    O("div", Ta, [
      O("div", Ca, [
        O("div", Ra, [
          F(e.LabIcon)
        ]),
        n[0] || (n[0] = O(
          "div",
          { class: "vue-lab-home-page__title-text" },
          " Vue Lab ",
          -1
          /* CACHED */
        ))
      ]),
      O(
        "div",
        La,
        U(e.pageDiscription),
        1
        /* TEXT */
      )
    ]),
    O("div", Aa, [
      F(e.Search, { onInput: e.handleTextInput })
    ]),
    O("div", ja, [
      e.isEmptySearch ? (y(), P(e.EmptyScreen, {
        key: 0,
        size: "lg"
      }, {
        default: q(() => [...n[1] || (n[1] = [
          J(
            " Components not found. ",
            -1
            /* CACHED */
          ),
          O(
            "br",
            null,
            null,
            -1
            /* CACHED */
          ),
          J(
            "Try to change the search query. ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      })) : (y(!0), C(
        G,
        { key: 1 },
        X(e.menuItems, (u, a) => (y(), C(
          G,
          null,
          [
            u.items?.length ? (y(), P(e.Group, {
              key: e.generateKey(u),
              option: u,
              isGroup: e.isGroup,
              isLast: a == e.menuItems.length - 1
            }, null, 8, ["option", "isGroup", "isLast"])) : M("v-if", !0)
          ],
          64
          /* STABLE_FRAGMENT */
        ))),
        256
        /* UNKEYED_FRAGMENT */
      ))
    ])
  ]);
}
const Ia = /* @__PURE__ */ z(Ea, [["render", Na], ["__scopeId", "data-v-c75a0f45"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/views/VueLabHome/index.vue"]]);
async function Pa(r, n) {
  try {
    const t = await import(
      /* @vite-ignore */
      `${n}/${r}.vuelab.js`
    );
    return t.default || t;
  } catch (t) {
    return console.log(t), console.warn(`⚠️ Config not found ${r}`), {};
  }
}
const Da = {
  __name: "index",
  props: {
    name: { type: String, default: "Component" },
    components: {
      type: Object,
      default: () => ({})
    },
    configuration: {
      type: Object,
      default: () => ({})
    }
  },
  setup(r, { expose: n }) {
    n();
    const t = r, e = S(() => t.components[t.name]);
    let s = $({});
    const _ = $(null), u = $(null), a = $(/* @__PURE__ */ new Map()), l = $(null), k = $(!0), f = $({
      vueLabloading: !0
    }), v = $({});
    let x = ge([]);
    Y(async () => {
      await R();
    });
    const R = async () => {
      k.value = !1, s.value = { vueLabloading: !1 };
      const g = t.configuration?.[t.name?.toLocaleLowerCase()], i = Object.keys(g.propsConfig);
      x = i.map((N) => ({
        ctrl: g.propsConfig[N].type,
        value: g.propsConfig[N].value,
        title: g.propsConfig[N].ctrlTitle,
        variants: g.propsConfig[N].variants,
        isCtrl: g.propsConfig[N].ctrl,
        field: N
      })).filter((N) => N.isCtrl);
      const m = j(i, g.propsConfig);
      v.value = i.reduce((N, B) => ({
        ...N,
        [B]: g.propsConfig[B].type
      }), {}), s.value = { ...s.value, ...m }, f.value = { ...s.value }, _.value = g?.description, u.value = A(i, g.propsConfig), a.value = p(i, g.propsConfig), l.value = o(g.events), k.value = !0;
    }, j = (g, i) => g.reduce((d, m) => ({
      ...d,
      [m]: E(m, i)
    }), { vueLabloading: !0 }), A = (g, i) => g.map((d) => ({
      name: d,
      type: i[d].type,
      values: T(i[d].variants),
      optional: i[d].optional || !1,
      default: i[d].default,
      description: i[d].description
    })), p = (g, i) => new Map(g.map((d) => [d, i[d]])), o = (g) => g ? Object.keys(g).map((i) => ({
      name: i,
      description: g[i].description
    })) : null, h = S(() => {
      const g = l.value ? l.value.map((d) => `@${d.name}="${d.name}Handler"`).join(" ") : "", i = Object.entries(s.value).filter((d) => d[0] != "vueLabloading").map(([d, m]) => {
        const N = a.value.get(d);
        if (m == null && N?.optional)
          return null;
        if (v.value[d] === "variable") {
          const B = `${d}Val`;
          return `:${d}="${B}"`;
        } else
          return typeof m == "boolean" ? `:${d}="${!!m}"` : typeof m == "object" || typeof m == "number" ? `:${d}="${m}"` : `${d}="${m}"`;
      }).sort().filter(Boolean).join(" ");
      return `<${t.name} ${i} ${g} />`;
    }), T = (g) => Array.isArray(g) ? g?.filter((i) => i != null && i !== void 0 && i !== "").join(" | ") : typeof g == "boolean" ? g : null, E = (g, i) => i[g].value, I = ({ ctrl: g, value: i }) => {
      s.value[g] = i;
    }, b = () => {
      s.value = { ...f.value };
    }, w = S(() => e.value && s.value.vueLabloading);
    ne(() => t.name, async () => {
      await R();
    });
    const c = { props: t, comp: e, get config() {
      return s;
    }, set config(g) {
      s = g;
    }, description: _, propsData: u, propsMap: a, eventsData: l, isLoading: k, defaultConfig: f, types: v, get controls() {
      return x;
    }, set controls(g) {
      x = g;
    }, loadData: R, getBinds: j, getPropsData: A, getPropsMap: p, getEventsData: o, exampleCode: h, getValues: T, getBindValue: E, handleCTRLInput: I, resetConfig: b, isComponent: w, computed: S, onMounted: Y, reactive: ge, ref: $, watch: ne, get loadConfig() {
      return Pa;
    }, get ControlBlock() {
      return Ut;
    }, get Page() {
      return Ge;
    }, get CodePreview() {
      return Ht;
    }, get Divider() {
      return we;
    }, get Button() {
      return Dt;
    }, get Description() {
      return We;
    }, get PropsDescription() {
      return Bt;
    }, get EventsDescription() {
      return $t;
    } };
    return Object.defineProperty(c, "__isScriptSetup", { enumerable: !1, value: !0 }), c;
  }
}, Ba = { class: "vue-lab__component" }, $a = { class: "vue-lab__component__header" }, za = { class: "vue-lab__component__header-title" }, Ma = { class: "vue-lab__component__content custom-scroll--simple" }, Ka = {
  key: 2,
  class: "vue-lab__component__body"
}, Ua = {
  key: 0,
  class: "vue-lab__controls"
};
function Wa(r, n, t, e, s, _) {
  return e.isLoading ? (y(), P(e.Page, {
    key: 0,
    "is-controls": !!e.controls.length,
    class: "vue-lab"
  }, {
    default: q(() => [
      O("div", Ba, [
        O("div", $a, [
          O(
            "div",
            za,
            U(t.name),
            1
            /* TEXT */
          )
        ]),
        O("div", Ma, [
          e.description ? (y(), P(e.Description, {
            key: 0,
            description: e.description
          }, null, 8, ["description"])) : M("v-if", !0),
          e.isComponent ? (y(), P(e.Divider, { key: 1 })) : M("v-if", !0),
          e.isComponent ? (y(), C("div", Ka, [
            (y(), P(
              pe(e.comp),
              It(Pt(e.config)),
              null,
              16
              /* FULL_PROPS */
            ))
          ])) : M("v-if", !0),
          e.exampleCode ? (y(), P(e.Divider, { key: 3 })) : M("v-if", !0),
          e.isComponent && e.exampleCode ? (y(), P(e.CodePreview, {
            key: 4,
            code: e.exampleCode,
            "preview-code": e.exampleCode
          }, null, 8, ["code", "preview-code"])) : M("v-if", !0),
          e.propsData ? (y(), P(e.Divider, { key: 5 })) : M("v-if", !0),
          e.isComponent && e.propsData ? (y(), P(e.PropsDescription, {
            key: 6,
            data: e.propsData
          }, null, 8, ["data"])) : M("v-if", !0),
          e.eventsData ? (y(), P(e.Divider, { key: 7 })) : M("v-if", !0),
          e.isComponent && e.eventsData ? (y(), P(e.EventsDescription, {
            key: 8,
            data: e.eventsData
          }, null, 8, ["data"])) : M("v-if", !0)
        ])
      ]),
      e.controls.length ? (y(), C("div", Ua, [
        F(e.ControlBlock, {
          options: e.controls,
          values: e.config,
          onInput: e.handleCTRLInput,
          onReset: e.resetConfig
        }, null, 8, ["options", "values"])
      ])) : M("v-if", !0)
    ]),
    _: 1
    /* STABLE */
  }, 8, ["is-controls"])) : M("v-if", !0);
}
const Va = /* @__PURE__ */ z(Da, [["render", Wa], ["__scopeId", "data-v-432c94c6"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/views/VueLabComponent/index.vue"]]), qa = {
  __name: "index",
  props: {
    options: { type: Array, default: () => [] },
    description: { type: String, default: null },
    name: { type: String, default: "Colors" }
  },
  setup(r, { expose: n }) {
    n();
    const t = r, e = S(() => {
      const _ = [...new Set(t.options.map((a) => a.group))], u = t.options.map(((a, l) => ({ ...a, index: a.index || l })));
      return _.map((a) => ({
        title: a,
        options: u.filter((l) => l.group == a)
      }));
    }), s = { props: t, colorGroup: e, get Page() {
      return Ge;
    }, get Description() {
      return We;
    }, get Divider() {
      return we;
    }, get ColorBlock() {
      return ma;
    }, computed: S };
    return Object.defineProperty(s, "__isScriptSetup", { enumerable: !1, value: !0 }), s;
  }
}, Ga = { class: "vue-lab-colors__component" }, Fa = { class: "vue-lab-colors__component__header" }, Xa = { class: "vue-lab-colors__component__header-title" }, Ha = { class: "vue-lab-colors__component__content custom-scroll--simple" };
function Qa(r, n, t, e, s, _) {
  return y(), P(e.Page, {
    "is-controls": !1,
    class: "vue-lab-colors"
  }, {
    default: q(() => [
      O("div", Ga, [
        O("div", Fa, [
          O(
            "div",
            Xa,
            U(t.name),
            1
            /* TEXT */
          )
        ]),
        O("div", Ha, [
          t.description ? (y(), P(e.Description, {
            key: 0,
            description: t.description
          }, null, 8, ["description"])) : M("v-if", !0),
          F(e.Divider),
          (y(!0), C(
            G,
            null,
            X(e.colorGroup, (u, a) => (y(), C(
              G,
              {
                key: `color-block-${u.title}-${a}`
              },
              [
                F(e.ColorBlock, {
                  title: u.title,
                  options: u.options
                }, null, 8, ["title", "options"]),
                a != e.colorGroup.length - 1 ? (y(), P(e.Divider, { key: 0 })) : M("v-if", !0)
              ],
              64
              /* STABLE_FRAGMENT */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
const Za = /* @__PURE__ */ z(qa, [["render", Qa], ["__scopeId", "data-v-bf59dc62"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/views/VueLabColors/index.vue"]]), Ya = {
  __name: "IconGroup",
  props: {
    group: {
      type: Object,
      default: () => ({})
    },
    config: {
      type: Object,
      default: () => ({})
    }
  },
  setup(r, { expose: n }) {
    n();
    const t = r, e = S(() => !t.group?.components?.length), s = { props: t, isIcons: e, computed: S };
    return Object.defineProperty(s, "__isScriptSetup", { enumerable: !1, value: !0 }), s;
  }
}, Ja = { class: "vue-lab-icons__group" }, er = { class: "vue-lab-icons__group-title" }, tr = { class: "vue-lab-icons__group-body" }, ir = { class: "vue-lab-icons__group-item-name" };
function sr(r, n, t, e, s, _) {
  return y(), C("div", Ja, [
    O(
      "div",
      er,
      U(t.group.name || "Group"),
      1
      /* TEXT */
    ),
    O("div", tr, [
      (y(!0), C(
        G,
        null,
        X(t.group.components, (u, a) => (y(), C("div", {
          key: `${t.group.name}-${u.name}-${a}`,
          class: "vue-lab-icons__group-item"
        }, [
          (y(), P(
            pe(u.component),
            Jt({ ref_for: !0 }, { ...t.config, name: u.name }),
            null,
            16
            /* FULL_PROPS */
          )),
          O(
            "div",
            ir,
            U(u.name),
            1
            /* TEXT */
          )
        ]))),
        128
        /* KEYED_FRAGMENT */
      ))
    ])
  ]);
}
const nr = /* @__PURE__ */ z(Ya, [["render", sr], ["__scopeId", "data-v-89316d17"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/views/VueLabIcons/IconGroup.vue"]]), ar = {
  __name: "index",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    configuration: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(r, { expose: n, emit: t }) {
    n();
    const e = r;
    let s = $({});
    const _ = $(null), u = $(null), a = $(/* @__PURE__ */ new Map()), l = $(null), k = $(!0), f = $({
      vueLabloading: !0
    }), v = $({});
    let x = ge([]);
    Y(async () => {
      await T();
    });
    const R = t, j = $(""), A = S(() => j.value ? e.options.filter(
      (L) => L.name?.toLowerCase().includes(j?.value.toLowerCase())
    ) : e.options), p = S(() => {
      const L = [...new Set(A.value.map((D) => D.group))];
      return new Map(L.map((D) => [D, A.value.filter((V) => V.group == D)]));
    }), o = S(() => [...new Set(A.value.map((D) => D.group))].map((D) => ({ name: D, components: p.value.get(D) }))), h = (L) => {
      j.value = L;
    }, T = async () => {
      k.value = !1, s.value = { vueLabloading: !1 };
      const L = e.configuration, D = Object.keys(L.propsConfig);
      x = [
        ...D.map((K) => ({
          ctrl: L.propsConfig[K].type,
          value: L.propsConfig[K].value,
          title: L.propsConfig[K].ctrlTitle,
          variants: L.propsConfig[K].variants,
          isCtrl: L.propsConfig[K].ctrl,
          field: K
        })).filter((K) => K.isCtrl),
        {
          ctrl: "list",
          value: null,
          title: "Icons",
          variants: e.options.map((K) => ({ name: K.name, id: K.name })),
          isCtrl: !0,
          isCodeHiden: !0,
          field: "icon"
        }
      ];
      const Z = E(D, L.propsConfig);
      v.value = D.reduce((K, H) => ({
        ...K,
        [H]: L.propsConfig[H].type
      }), {}), s.value = { ...s.value, ...Z }, f.value = { ...s.value }, _.value = L?.description, u.value = c(D, L.propsConfig), a.value = g(D, L.propsConfig), l.value = i(L.events), k.value = !0;
    }, E = (L, D) => L.reduce((V, Z) => ({
      ...V,
      [Z]: I(Z, D)
    }), { vueLabloading: !0 }), I = (L, D) => D[L].value, b = S(() => s.value.vueLabloading), w = (L) => Array.isArray(L) ? L?.filter((D) => D != null && D !== void 0 && D !== "").join(" | ") : typeof L == "boolean" ? L : null, c = (L, D) => L.map((V) => ({
      name: V,
      type: D[V].type,
      values: w(D[V].variants),
      optional: D[V].optional || !1,
      default: D[V].default,
      description: D[V].description
    })), g = (L, D) => new Map(L.map((V) => [V, D[V]])), i = (L) => L ? Object.keys(L).map((D) => ({
      name: D,
      description: L[D].description
    })) : null, d = S(() => {
      const L = l.value ? l.value.map((K) => `@${K.name}="${K.name}Handler"`).join(" ") : "", D = new Map(x.map((K) => [K.field, K.isCodeHiden])), V = Object.entries(s.value).filter((K) => K[0] != "vueLabloading").map(([K, H]) => {
        if (D.get(K))
          return null;
        const Qt = a.value.get(K);
        if (H == null && Qt?.optional)
          return null;
        if (v.value[K] === "variable") {
          const Zt = `${K}Val`;
          return `:${K}="${Zt}"`;
        } else
          return typeof H == "boolean" ? `:${K}="${!!H}"` : typeof H == "object" || typeof H == "number" ? `:${K}="${H}"` : `${K}="${H}"`;
      }).sort().filter(Boolean).join(" ");
      return `<${m.value ? tt(m.value.name) : "Component"} ${V} ${L} />`;
    }), m = S(() => s.value?.icon ? e.options?.find((L) => L.name === s.value.icon) : e.options?.[0]), W = { props: e, get config() {
      return s;
    }, set config(L) {
      s = L;
    }, description: _, propsData: u, propsMap: a, eventsData: l, isLoading: k, defaultConfig: f, types: v, get controls() {
      return x;
    }, set controls(L) {
      x = L;
    }, emit: R, searchTerm: j, filteredOptions: A, optionMap: p, groups: o, handleSearch: h, loadData: T, getBinds: E, getBindValue: I, isComponent: b, getValues: w, getPropsData: c, getPropsMap: g, getEventsData: i, exampleCode: d, selectedIcon: m, handleCTRLInput: ({ ctrl: L, value: D }) => {
      s.value[L] = D;
    }, resetConfig: () => {
      s.value = { ...f.value };
    }, ref: $, computed: S, reactive: ge, onMounted: Y, get Search() {
      return Ve;
    }, get Description() {
      return We;
    }, get PropsDescription() {
      return Bt;
    }, get EventsDescription() {
      return $t;
    }, get EmptyScreen() {
      return qe;
    }, IconGroup: nr, get Page() {
      return Ge;
    }, get Divider() {
      return we;
    }, get ControlBlock() {
      return Ut;
    }, get CodePreview() {
      return Ht;
    }, get toPascalCase() {
      return tt;
    } };
    return Object.defineProperty(W, "__isScriptSetup", { enumerable: !1, value: !0 }), W;
  }
}, rr = { class: "vue-lab-icons__body" }, _r = { class: "vue-lab-icons__body-components custom-scroll--simple" }, or = { class: "vue-lab-icons__body-search" }, ur = { class: "vue-lab-icons__body-components-list" }, lr = {
  key: 0,
  class: "vue-lab-icons__controls"
};
function pr(r, n, t, e, s, _) {
  return e.isLoading ? (y(), P(e.Page, {
    key: 0,
    "is-controls": !!e.controls.length,
    class: "vue-lab-icons"
  }, {
    default: q(() => [
      O("div", rr, [
        n[1] || (n[1] = O(
          "div",
          { class: "vue-lab-icons__header" },
          [
            O("div", { class: "vue-lab-icons__header-title" }, "Icons")
          ],
          -1
          /* CACHED */
        )),
        O("div", _r, [
          e.description ? (y(), P(e.Description, {
            key: 0,
            description: e.description,
            class: "vue-lab-icons__body-description"
          }, null, 8, ["description"])) : M("v-if", !0),
          O("div", or, [
            F(e.Search, { onInput: e.handleSearch })
          ]),
          O("div", ur, [
            e.groups.length ? (y(!0), C(
              G,
              { key: 1 },
              X(e.groups, (u) => (y(), P(e.IconGroup, {
                key: u.name,
                group: u,
                config: e.config
              }, null, 8, ["group", "config"]))),
              128
              /* KEYED_FRAGMENT */
            )) : (y(), P(e.EmptyScreen, {
              key: 0,
              size: "lg"
            }, {
              default: q(() => [...n[0] || (n[0] = [
                J(
                  " No icons found ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }))
          ]),
          e.exampleCode ? (y(), P(e.Divider, { key: 1 })) : M("v-if", !0),
          e.isComponent && e.exampleCode ? (y(), P(e.CodePreview, {
            key: 2,
            code: e.exampleCode,
            "preview-code": e.exampleCode
          }, null, 8, ["code", "preview-code"])) : M("v-if", !0),
          e.propsData ? (y(), P(e.Divider, { key: 3 })) : M("v-if", !0),
          e.isComponent && e.propsData ? (y(), P(e.PropsDescription, {
            key: 4,
            data: e.propsData
          }, null, 8, ["data"])) : M("v-if", !0),
          e.eventsData ? (y(), P(e.Divider, { key: 5 })) : M("v-if", !0),
          e.isComponent && e.eventsData ? (y(), P(e.EventsDescription, {
            key: 6,
            data: e.eventsData
          }, null, 8, ["data"])) : M("v-if", !0)
        ])
      ]),
      e.controls.length ? (y(), C("div", lr, [
        F(e.ControlBlock, {
          options: e.controls,
          values: e.config,
          onInput: e.handleCTRLInput,
          onReset: e.resetConfig
        }, null, 8, ["options", "values"])
      ])) : M("v-if", !0)
    ]),
    _: 1
    /* STABLE */
  }, 8, ["is-controls"])) : M("v-if", !0);
}
const cr = /* @__PURE__ */ z(ar, [["render", pr], ["__scopeId", "data-v-ffc66622"], ["__file", "/Users/maximvovk/projects/pet-projects/vue-story-book/src/vuelab/views/VueLabIcons/index.vue"]]), hr = {
  beforeMount(r, { value: n }) {
    n && (r._handler = (t) => {
      r.contains(t.target) || setTimeout(() => n(t), 1);
    }, document.addEventListener("click", r._handler, { capture: !0 }));
  },
  beforeUnmount(r) {
    document.removeEventListener("click", r._handler, { capture: !0 });
  }
}, fr = {
  mounted(r) {
    r.remove(), document.body.appendChild(r);
  },
  unmounted(r) {
    r.remove();
  }
}, dr = {
  install(r) {
    r.directive("click-outside", hr), r.directive("hoisted", fr);
  }
}, wr = ({
  components: r = {},
  menu: n,
  menuGroupsDescription: t,
  mountSelector: e,
  configuration: s,
  homePageDescription: _,
  additionalPages: u,
  kitTitle: a
}) => {
  const k = Object.keys(s || {}).reduce((h, T) => ({ ...h, [T.toLocaleLowerCase()]: s[T] }), {}), f = r ? Object.keys(r).map((h) => ({
    name: h,
    path: `/${h}`
  })) : [];
  let v = u ? [...n || f, ...u] : n || f;
  const x = v.reduce((h, T) => T.index > h ? T.index : h, 0);
  v = v.map((h, T) => ({ ...h, index: h.index || x + T + 1 })), v.sort((h, T) => h.index - T.index);
  const R = /* @__PURE__ */ new Map([
    ["colors", Za],
    ["icons", cr]
  ]), j = (u || []).map((h) => {
    const T = R.get(h.type);
    return T ? {
      path: h.path,
      name: h.name,
      component: T,
      props: h.props
    } : h;
  }).filter(Boolean), A = [
    {
      path: "/",
      name: "home",
      component: Ia,
      props: {
        components: r,
        description: _ || "",
        menu: v,
        menuGroupsDescription: t
      }
    },
    ...j,
    {
      path: "/:name",
      name: "component",
      component: Va,
      props: (h) => ({ name: h.params.name, components: r, configuration: k })
    }
  ], p = ti({
    history: ii(),
    routes: A
  }), o = ei(tn);
  return o.use(p), o.use(dr), o.provide("menu", v), o.provide("kit-title", a), e && o.mount(e), o;
};
export {
  wr as createLab
};
