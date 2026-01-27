import { openBlock as I, createElementBlock as K, normalizeClass as He, renderSlot as It, computed as W, createElementVNode as D, toDisplayString as pe, createCommentVNode as se, Fragment as Ne, renderList as Ae, createBlock as ee, createStaticVNode as _a, resolveComponent as Mt, resolveDirective as Ms, withDirectives as Ls, withCtx as Le, resolveDynamicComponent as Lt, createTextVNode as Dt, ref as ae, createVNode as De, useCssVars as ua, normalizeStyle as At, onMounted as je, nextTick as Qt, watch as We, withKeys as et, withModifiers as qe, onBeforeUnmount as fi, defineComponent as da, h as ti, normalizeProps as pa, guardReactiveProps as fa, reactive as hi, createApp as ha } from "vue";
import { useRouter as gi, createRouter as ga, createWebHistory as ba } from "vue-router";
const te = (a, t) => {
  const n = a.__vccOpts || a;
  for (const [e, i] of t)
    n[e] = i;
  return n;
}, ma = {
  __name: "index",
  props: {
    size: {
      type: String,
      default: "md",
      validator: (a) => ["sm", "md", "lg"].includes(a)
    },
    palette: {
      type: String,
      default: "primary",
      validator: (a) => ["success", "error", "warning", "info", "primary"].includes(a)
    }
  },
  emits: ["click"],
  setup(a, { expose: t, emit: n }) {
    t();
    const e = a, i = n, r = W(() => [`lab-button_size-${e.size}`, `lab-button_palette-${e.palette}`]), l = { props: e, emit: i, classes: r, handleClick: () => i("click"), computed: W };
    return Object.defineProperty(l, "__isScriptSetup", { enumerable: !1, value: !0 }), l;
  }
};
function va(a, t, n, e, i, r) {
  return I(), K(
    "div",
    {
      class: He(["lab-button", ...e.classes]),
      onClick: e.handleClick
    },
    [
      It(a.$slots, "default", {}, void 0, !0)
    ],
    2
    /* CLASS */
  );
}
const Ds = /* @__PURE__ */ te(ma, [["render", va], ["__scopeId", "data-v-5643684a"], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/vuelab/components/general/Button/index.vue"]]), Ea = {
  __name: "index",
  props: {
    title: { type: [String, Number], default: () => null },
    isClose: { type: Boolean, default: () => !1 },
    isActive: { type: Boolean, default: () => !1 },
    value: { type: [String, Number], required: !0 },
    size: {
      type: String,
      default: "md",
      validator: (a) => ["sm", "md", "lg"].includes(a)
    },
    palette: {
      type: String,
      default: "primary",
      validator: (a) => ["success", "error", "warning", "info", "primary"].includes(a)
    }
  },
  emits: ["input"],
  setup(a, { expose: t, emit: n }) {
    t();
    const e = a, i = n, r = W(() => [`lab-tag_size-${e.size}`, `lab-tag_palette-${e.palette}`]), l = { props: e, emit: i, classes: r, handleClick: () => i("input", e.value), computed: W };
    return Object.defineProperty(l, "__isScriptSetup", { enumerable: !1, value: !0 }), l;
  }
}, ya = { class: "lab-tag__title" }, wa = {
  key: 0,
  class: "lab-tag__close"
};
function xa(a, t, n, e, i, r) {
  return I(), K(
    "div",
    {
      class: He(["lab-tag", ...e.classes, {
        "lab-tag_active": n.isActive
      }]),
      onClick: e.handleClick
    },
    [
      D(
        "div",
        ya,
        pe(n.title),
        1
        /* TEXT */
      ),
      n.isClose ? (I(), K("div", wa, "X")) : se("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Na = /* @__PURE__ */ te(Ea, [["render", xa], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/vuelab/components/general/Tag/index.vue"]]), Oa = {
  __name: "index",
  props: {
    description: String
  },
  setup(a, { expose: t }) {
    t();
    const e = { props: a };
    return Object.defineProperty(e, "__isScriptSetup", { enumerable: !1, value: !0 }), e;
  }
}, Ta = { class: "vue-lab__description" };
function Sa(a, t, n, e, i, r) {
  return I(), K(
    "div",
    Ta,
    pe(n.description),
    1
    /* TEXT */
  );
}
const ka = /* @__PURE__ */ te(Oa, [["render", Sa], ["__scopeId", "data-v-f2d48cdd"], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/vuelab/components/general/Description/index.vue"]]), Ra = {
  __name: "item",
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  setup(a, { expose: t }) {
    t();
    const n = a, e = (c) => !(c == null || typeof c == "string" && c.trim() === "" || Array.isArray(c) && c.length === 0 || typeof c == "object" && Object.keys(c).length === 0), i = W(() => e(n.data.default)), r = W(() => e(n.data.values)), _ = W(() => e(n.data.description)), l = { props: n, isExist: e, isDefault: i, isValues: r, isDescription: _, computed: W };
    return Object.defineProperty(l, "__isScriptSetup", { enumerable: !1, value: !0 }), l;
  }
}, Aa = { class: "vue-lab__props-description__item" }, Ca = { class: "vue-lab__props-description__item__header" }, Ia = { class: "vue-lab__props-description__item__header_name" }, Ma = { class: "vue-lab__props-description__item__header_type" }, La = {
  key: 0,
  class: "vue-lab__props-description__item__body"
}, Da = {
  key: 0,
  class: "vue-lab__props-description__item__body__row"
}, Ba = { class: "vue-lab__props-description__item__body__row-value" }, Pa = {
  key: 1,
  class: "vue-lab__props-description__item__body__row"
}, Ua = { class: "vue-lab__props-description__item__body__row-value" }, Fa = {
  key: 2,
  class: "vue-lab__props-description__item__body__row"
}, $a = { class: "vue-lab__props-description__item__body__row-value" };
function za(a, t, n, e, i, r) {
  return I(), K("div", Aa, [
    D("div", Ca, [
      D(
        "div",
        Ia,
        pe(n.data.name),
        1
        /* TEXT */
      ),
      D(
        "div",
        Ma,
        pe(n.data.type),
        1
        /* TEXT */
      )
    ]),
    e.isDefault || e.isValues || e.isDescription ? (I(), K("div", La, [
      e.isDefault ? (I(), K("div", Da, [
        t[0] || (t[0] = D(
          "div",
          { class: "vue-lab__props-description__item__body__row-key" },
          "Default:",
          -1
          /* CACHED */
        )),
        D(
          "div",
          Ba,
          pe(n.data.default),
          1
          /* TEXT */
        )
      ])) : se("v-if", !0),
      e.isValues ? (I(), K("div", Pa, [
        t[1] || (t[1] = D(
          "div",
          { class: "vue-lab__props-description__item__body__row-key" },
          "Values:",
          -1
          /* CACHED */
        )),
        D(
          "div",
          Ua,
          pe(n.data.values),
          1
          /* TEXT */
        )
      ])) : se("v-if", !0),
      e.isDescription ? (I(), K("div", Fa, [
        t[2] || (t[2] = D(
          "div",
          { class: "vue-lab__props-description__item__body__row-key" },
          "Description:",
          -1
          /* CACHED */
        )),
        D(
          "div",
          $a,
          pe(n.data.description),
          1
          /* TEXT */
        )
      ])) : se("v-if", !0)
    ])) : se("v-if", !0)
  ]);
}
const Ka = /* @__PURE__ */ te(Ra, [["render", za], ["__scopeId", "data-v-845d1c40"], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/vuelab/components/general/PropsDescription/item.vue"]]), Ve = () => {
  let a = (/* @__PURE__ */ new Date()).getTime(), t = typeof performance < "u" && performance.now && performance.now() * 1e3 || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
    let e = Math.random() * 16;
    return a > 0 ? (e = (a + e) % 16 | 0, a = Math.floor(a / 16)) : (e = (t + e) % 16 | 0, t = Math.floor(t / 16)), (n === "x" ? e : e & 3 | 8).toString(16);
  });
}, Ga = {
  __name: "index",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(a, { expose: t }) {
    t();
    const e = { props: a, computed: W, PropsDescriptionItem: Ka, get generateKey() {
      return Ve;
    } };
    return Object.defineProperty(e, "__isScriptSetup", { enumerable: !1, value: !0 }), e;
  }
}, qa = { class: "vue-lab__props-description" }, Wa = { class: "vue-lab__block-body" };
function Ha(a, t, n, e, i, r) {
  return I(), K("div", qa, [
    t[0] || (t[0] = D(
      "div",
      { class: "vue-lab__props-description__title vue-lab__block-title" },
      "Props",
      -1
      /* CACHED */
    )),
    D("div", Wa, [
      (I(!0), K(
        Ne,
        null,
        Ae(n.data, (_) => (I(), ee(e.PropsDescriptionItem, {
          key: e.generateKey(_.name),
          data: _
        }, null, 8, ["data"]))),
        128
        /* KEYED_FRAGMENT */
      ))
    ])
  ]);
}
const Va = /* @__PURE__ */ te(Ga, [["render", Ha], ["__scopeId", "data-v-db8d12a1"], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/vuelab/components/general/PropsDescription/index.vue"]]), Za = {
  __name: "index",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(a, { expose: t }) {
    t();
    const e = { props: a, get generateKey() {
      return Ve;
    } };
    return Object.defineProperty(e, "__isScriptSetup", { enumerable: !1, value: !0 }), e;
  }
}, Xa = { class: "vue-lab__events" }, Ya = { class: "vue-lab__events__body" }, ja = { class: "vue-lab__events__body-content" }, Qa = { class: "vue-lab__events__body-column vue-lab__events__body-column--td bold" }, Ja = { class: "vue-lab__events__body-column vue-lab__events__body-column--td vue-lab__events__body-column--td-regular" };
function er(a, t, n, e, i, r) {
  return I(), K("div", Xa, [
    t[1] || (t[1] = D(
      "div",
      { class: "vue-lab__events__title vue-lab__block-title" },
      "Events",
      -1
      /* CACHED */
    )),
    D("div", Ya, [
      t[0] || (t[0] = D(
        "div",
        { class: "vue-lab__events__body-header" },
        [
          D("div", { class: "vue-lab__events__body-row" }, [
            D("div", { class: "vue-lab__events__body-column vue-lab__events__body-column--th" }, "Name"),
            D("div", { class: "vue-lab__events__body-column vue-lab__events__body-column--th vue-lab__events__body-column--th-regular" }, "Description")
          ])
        ],
        -1
        /* CACHED */
      )),
      D("div", ja, [
        (I(!0), K(
          Ne,
          null,
          Ae(n.data, (_) => (I(), K("div", {
            key: e.generateKey(_.name),
            class: "vue-lab__events__body-row"
          }, [
            D(
              "div",
              Qa,
              "@" + pe(_.name),
              1
              /* TEXT */
            ),
            D(
              "div",
              Ja,
              pe(_.description),
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
const tr = /* @__PURE__ */ te(Za, [["render", er], ["__scopeId", "data-v-7b2edc41"], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/vuelab/components/general/Events/index.vue"]]), nr = {}, ir = {
  "aria-hidden": "true",
  height: "16",
  viewBox: "0 0 16 16",
  version: "1.1",
  width: "16",
  "data-view-component": "true",
  class: "octicon octicon-copy js-clipboard-copy-icon"
};
function sr(a, t) {
  return I(), K("svg", ir, [...t[0] || (t[0] = [
    D(
      "path",
      { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z" },
      null,
      -1
      /* CACHED */
    ),
    D(
      "path",
      { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z" },
      null,
      -1
      /* CACHED */
    )
  ])]);
}
const ar = /* @__PURE__ */ te(nr, [["render", sr], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/vuelab/components/Icons/CopyIcon.vue"]]), rr = {}, or = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24"
};
function lr(a, t) {
  return I(), K("svg", or, [...t[0] || (t[0] = [
    _a('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></g>', 1)
  ])]);
}
const Bs = /* @__PURE__ */ te(rr, [["render", lr], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/vuelab/components/Icons/DefaultMenuIcon.vue"]]), cr = {}, _r = {
  fill: "#4fa760",
  width: "32px",
  height: "32px",
  viewBox: "0 0 32 32",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
};
function ur(a, t) {
  return I(), K("svg", _r, [...t[0] || (t[0] = [
    D(
      "path",
      { d: "M19.332 19.041c0 0-1.664 2.125-3.79 0-2.062-2-3.562 0-3.562 0l-4.967 9.79c-0.144 0.533 0.173 1.081 0.706 1.224h16.497c0.533-0.143 0.85-0.69 0.707-1.224l-5.591-9.79zM26.939 28.33l-7.979-13.428v-0.025l-0.014-7.869h0.551c0.826 0 1.498-0.671 1.498-1.499 0-0.827-0.672-1.498-1.498-1.498h-7.995c-0.827 0-1.498 0.671-1.498 1.498 0 0.828 0.671 1.499 1.498 1.499h0.482l-0.016 7.871-6.908 13.451c-0.428 1.599 0.521 3.242 2.119 3.67h17.641c1.6-0.428 2.549-2.071 2.119-3.67zM24.553 30.998l-17.108-0.019c-1.065-0.286-1.697-1.382-1.412-2.446l6.947-13.616 0.021-8.908h-1.498c-0.275 0-0.499-0.224-0.499-0.5s0.224-0.499 0.499-0.499h7.995c0.275 0 0.498 0.224 0.498 0.499 0 0.276-0.223 0.5-0.498 0.5h-1.498l0.025 8.875 7.939 13.666c0.286 1.067-0.347 2.163-1.411 2.448zM16.48 2.512c0 0.552 0.448 1 1 1s1-0.448 1-1-0.447-1-1-1-1 0.447-1 1zM17.48 0.012c0.828 0 1.5-0.671 1.5-1.5s-0.672-1.5-1.5-1.5-1.5 0.671-1.5 1.5 0.672 1.5 1.5 1.5zM13.48 2.512c0.553 0 1-0.448 1-1s-0.447-1-1-1-1 0.448-1 1 0.447 1 1 1z" },
      null,
      -1
      /* CACHED */
    )
  ])]);
}
const Ps = /* @__PURE__ */ te(cr, [["render", ur], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/vuelab/components/Icons/LabIcon.vue"]]), dr = {}, pr = {
  height: "5",
  version: "1.1",
  width: "9",
  class: "octicon octicon-copy js-clipboard-copy-icon"
};
function fr(a, t) {
  return I(), K("svg", pr, [...t[0] || (t[0] = [
    D(
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
const hr = /* @__PURE__ */ te(dr, [["render", fr], ["__scopeId", "data-v-11d57440"], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/vuelab/components/Icons/ArrowIcon.vue"]]), gr = {
  __name: "search",
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  setup(a, { expose: t }) {
    t();
    const n = ae(""), e = ae(!1), i = a, r = ae(null), _ = W(() => n.value ? i.options.filter(
      (N) => N.name.toLowerCase().includes(n.value.toLowerCase())
    ) : i.options), l = W(() => n.value.length >= 3), c = W(() => _.value.length === 0), m = { searchTerm: n, isOpened: e, props: i, activator: r, filteredOptions: _, isShowList: l, isSearchEmpty: c, handleSearch: (N) => {
      n.value = N;
    }, toogleOpened: () => {
      n.value = "", e.value = !e.value;
    }, close: () => {
      e.value = !1, n.value = "";
    }, ref: ae, computed: W, get DefaultMenuIcon() {
      return Bs;
    }, get Popover() {
      return Kr;
    } };
    return Object.defineProperty(m, "__isScriptSetup", { enumerable: !1, value: !0 }), m;
  }
}, br = { class: "vue-lab__search" }, mr = ["value"], vr = {
  key: 0,
  class: "vue-lab__search-list"
}, Er = {
  key: 0,
  class: "vue-lab__search-list--empty"
};
function yr(a, t, n, e, i, r) {
  const _ = Mt("router-link"), l = Ms("click-outside");
  return I(), K("div", br, [
    Ls((I(), K("div", {
      ref: "activator",
      class: "vue-lab__search-field",
      onClick: e.toogleOpened
    }, [
      D("input", {
        value: e.searchTerm,
        type: "text",
        class: "vue-lab__search-input",
        placeholder: "Search...",
        onInput: t[0] || (t[0] = (c) => e.handleSearch(c.target.value))
      }, null, 40, mr)
    ])), [
      [l, e.close]
    ]),
    e.isShowList && e.isOpened ? (I(), ee(e.Popover, {
      key: 0,
      reference: e.activator,
      position: "top:bottom",
      alignment: "left"
    }, {
      default: Le(() => [
        e.isShowList && e.isOpened ? (I(), K("div", vr, [
          e.isSearchEmpty ? (I(), K("div", Er, " No results found ")) : (I(!0), K(
            Ne,
            { key: 1 },
            Ae(e.filteredOptions, (c) => (I(), K("div", {
              key: c.name,
              onClick: e.toogleOpened
            }, [
              c ? (I(), ee(_, {
                key: 0,
                to: c.path,
                title: c.name,
                class: "vue-lab__search-list-item"
              }, {
                default: Le(() => [
                  c.icon ? (I(), ee(Lt(c.icon), { key: 0 })) : (I(), ee(e.DefaultMenuIcon, {
                    key: 1,
                    class: "vue-lab__search-list-item-icon"
                  })),
                  Dt(
                    " " + pe(c.name),
                    1
                    /* TEXT */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["to", "title"])) : se("v-if", !0)
            ]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ])) : se("v-if", !0)
      ]),
      _: 1
      /* STABLE */
    }, 8, ["reference"])) : se("v-if", !0)
  ]);
}
const wr = /* @__PURE__ */ te(gr, [["render", yr], ["__scopeId", "data-v-163aedb2"], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/vuelab/components/general/Nav/search.vue"]]), xr = {
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
  setup(a, { expose: t }) {
    t();
    const n = a, e = W(() => n.path?.toLowerCase() === n.item.path?.toLowerCase()), i = { props: n, isActive: e, computed: W, get DefaultMenuIcon() {
      return Bs;
    } };
    return Object.defineProperty(i, "__isScriptSetup", { enumerable: !1, value: !0 }), i;
  }
}, Nr = { class: "vue-lab__nav-item-icon" }, Or = { class: "vue-lab__nav-item-label" };
function Tr(a, t, n, e, i, r) {
  const _ = Mt("router-link");
  return n.item ? (I(), ee(_, {
    key: 0,
    to: n.item.path,
    title: n.item.name,
    class: He(["vue-lab__nav-item", {
      "vue-lab__nav-item--active": e.isActive
    }])
  }, {
    default: Le(() => [
      D("div", Nr, [
        n.item.icon ? (I(), ee(Lt(n.item.icon), { key: 0 })) : (I(), ee(e.DefaultMenuIcon, {
          key: 1,
          class: "vue-lab__nav-item-icon-menu"
        }))
      ]),
      D(
        "div",
        Or,
        pe(n.item.name),
        1
        /* TEXT */
      )
    ]),
    _: 1
    /* STABLE */
  }, 8, ["to", "title", "class"])) : se("v-if", !0);
}
const Sr = /* @__PURE__ */ te(xr, [["render", Tr], ["__scopeId", "data-v-875f6eef"], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/vuelab/components/general/Nav/item.vue"]]), kr = {
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
  setup(a, { expose: t }) {
    t(), ua((u) => ({
      "4061da29-maxHeightDuration": c.value,
      "4061da29-maxHeight": l.value
    }));
    const n = a, e = ae(!0), i = () => {
      e.value = !e.value;
    }, r = W(() => ({
      "vue-lab__nav-group-arrow": !0,
      "vue-lab__nav-group-arrow--closed": !e.value
    })), _ = W(() => ({
      "vue-lab__nav-group-items": !0,
      "vue-lab__nav-group-items--opened": e.value
    })), l = W(() => {
      const u = n?.option?.items?.length;
      return u ? u * 35 + 100 + "px" : "1000px";
    }), c = W(() => {
      const u = n?.option?.items?.length;
      return !u || u < 30 ? ".3s" : u < 50 ? ".5s" : u < 80 ? ".8s" : u < 100 ? "1s" : u / 150 + "s";
    }), g = { props: n, isOpened: e, toggleOpened: i, arrowClasses: r, listClasses: _, maxHeight: l, maxHeightDuration: c, ref: ae, computed: W, NavItem: Sr, get generateKey() {
      return Ve;
    }, get ArrowIcon() {
      return hr;
    } };
    return Object.defineProperty(g, "__isScriptSetup", { enumerable: !1, value: !0 }), g;
  }
}, Rr = { class: "vue-lab__nav-group" };
function Ar(a, t, n, e, i, r) {
  return I(), K("div", Rr, [
    n.option?.name || n.isGroup ? (I(), K("div", {
      key: 0,
      class: "vue-lab__nav-group-name",
      onClick: e.toggleOpened
    }, [
      Dt(
        pe(n.isGroup ? n.option.name || "Other components" : "") + " ",
        1
        /* TEXT */
      ),
      De(e.ArrowIcon, {
        class: He(e.arrowClasses)
      }, null, 8, ["class"])
    ])) : se("v-if", !0),
    D(
      "div",
      {
        class: He(e.listClasses)
      },
      [
        (I(!0), K(
          Ne,
          null,
          Ae(n.option.items, (_) => (I(), ee(e.NavItem, {
            key: e.generateKey(_),
            item: _,
            path: n.path
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
const Cr = /* @__PURE__ */ te(kr, [["render", Ar], ["__scopeId", "data-v-4061da29"], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/vuelab/components/general/Nav/group.vue"]]), Ir = {
  __name: "index",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    path: {
      type: String,
      default: "/"
    }
  },
  setup(a, { expose: t }) {
    t();
    const n = a, e = gi(), i = W(() => {
      const c = n.options.map((m) => m.group), u = [...new Set(c)].filter((m) => m && m.length).map((m) => ({
        name: m,
        items: n.options.filter((N) => N.group === m)
      })), f = {
        name: null,
        items: n.options.filter((m) => !m.group || !m.group.length)
      };
      return [...u, f];
    }), r = W(() => n.options.some((c) => c.group && c.group.length)), l = { props: n, router: e, menuItems: i, isGroup: r, goToHome: () => {
      e.push({ path: "/" });
    }, computed: W, get useRouter() {
      return gi;
    }, get generateKey() {
      return Ve;
    }, Search: wr, get LabIcon() {
      return Ps;
    }, NavGroup: Cr };
    return Object.defineProperty(l, "__isScriptSetup", { enumerable: !1, value: !0 }), l;
  }
}, Mr = { class: "vue-lab__nav" }, Lr = { class: "vue-lab__nav-header-icon" }, Dr = { class: "vue-lab__nav-search" }, Br = { class: "vue-lab__nav-body" }, Pr = { class: "vue-lab__nav-body-items custom-scroll--simple" };
function Ur(a, t, n, e, i, r) {
  return I(), K("div", Mr, [
    D("div", {
      class: "vue-lab__nav-header",
      onClick: e.goToHome
    }, [
      D("div", Lr, [
        De(e.LabIcon)
      ]),
      t[0] || (t[0] = D(
        "div",
        { class: "vue-lab__nav-header-title" },
        " Vue Lab ",
        -1
        /* CACHED */
      ))
    ]),
    D("div", Dr, [
      De(e.Search, { options: n.options }, null, 8, ["options"])
    ]),
    D("div", Br, [
      se(` <div class="vue-lab__nav-body-title">
        Components
      </div> `),
      D("div", Pr, [
        (I(!0), K(
          Ne,
          null,
          Ae(e.menuItems, (_) => (I(), ee(e.NavGroup, {
            key: e.generateKey(_),
            option: _,
            path: n.path,
            isGroup: e.isGroup
          }, null, 8, ["option", "path", "isGroup"]))),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ])
  ]);
}
const Fr = /* @__PURE__ */ te(Ir, [["render", Ur], ["__scopeId", "data-v-3672c48c"], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/vuelab/components/general/Nav/index.vue"]]), $r = {
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
      validator: (a) => ["top", "top:bottom", "bottom:top", "bottom", "left", "right"].includes(a)
    },
    alignment: {
      type: String,
      default: void 0,
      validator: (a) => [void 0, "left", "right"].includes(a)
    },
    margin: {
      type: [String, Number],
      default: 0
    }
  },
  emits: ["close"],
  setup(a, { expose: t, emit: n }) {
    t();
    const e = a, i = n, r = ae({});
    function _() {
      return e.reference ? e.reference instanceof HTMLElement ? e.reference : e.reference?.$el ? e.reference.$el : typeof e.reference == "function" ? e.reference() : null : null;
    }
    function l() {
      const u = _();
      if (!u)
        return;
      const f = u.getBoundingClientRect();
      let { width: m, height: N, left: x, top: k, right: d, bottom: o, position: b, alignment: R } = e;
      switch (R || (R = r.value.width > window.innerWidth - f.left && f.right > r.value.width ? "right" : "left", m = Math.max(r.value.width, f.width)), R === "left" ? x = f.left + "px" : d = window.innerWidth - f.right + "px", b) {
        case "top":
          k = f.top + +e.margin + "px";
          break;
        case "top:bottom":
          k = f.bottom + +e.margin + "px";
          break;
        case "bottom":
          o = window.innerHeight - f.bottom - +e.margin + "px";
          break;
        case "bottom:top":
          o = window.innerHeight - f.bottom - +e.margin + "px";
          break;
        case "left":
          x = f.left - (m || 0) + "px";
          break;
        case "right":
          x = f.right + +e.margin + "px";
          break;
      }
      r.value = {
        width: m ? m + "px" : void 0,
        height: N ? N + "px" : void 0,
        left: e.centered ? "50%" : x,
        top: e.centered ? "50%" : k,
        transform: e.centered ? "translate(-50%, -50%)" : void 0,
        right: d,
        bottom: o,
        position: "absolute",
        zIndex: 999
      };
    }
    function c(u) {
      i("close", u);
    }
    je(() => {
      Qt(l), window.addEventListener("resize", l), window.addEventListener("scroll", l, !0);
    }), We(
      () => [e.reference, e.width, e.height, e.position, e.alignment],
      () => Qt(l)
    );
    const g = { props: e, emit: i, style: r, getReferenceElement: _, setStyle: l, close: c, ref: ae, onMounted: je, watch: We, nextTick: Qt };
    return Object.defineProperty(g, "__isScriptSetup", { enumerable: !1, value: !0 }), g;
  }
};
function zr(a, t, n, e, i, r) {
  const _ = Ms("hoisted");
  return Ls((I(), K(
    "div",
    {
      style: At(e.style),
      class: "popover"
    },
    [
      It(a.$slots, "default", {}, void 0, !0)
    ],
    4
    /* STYLE */
  )), [
    [_]
  ]);
}
const Kr = /* @__PURE__ */ te($r, [["render", zr], ["__scopeId", "data-v-22f54b08"], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/vuelab/components/general/Popover/index.vue"]]), Gr = {
  __name: "App",
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  setup(a, { expose: t }) {
    t();
    const e = { props: a, get Nav() {
      return Fr;
    } };
    return Object.defineProperty(e, "__isScriptSetup", { enumerable: !1, value: !0 }), e;
  }
}, qr = { class: "vue-lab-application" }, Wr = { class: "vue-lab-application__body" }, Hr = { class: "vue-lab-application__content" };
function Vr(a, t, n, e, i, r) {
  const _ = Mt("router-view");
  return I(), K("div", qr, [
    D("div", Wr, [
      De(e.Nav, {
        path: a.$route.path,
        options: n.menu
      }, null, 8, ["path", "options"]),
      D("div", Hr, [
        De(_)
      ])
    ])
  ]);
}
const Zr = /* @__PURE__ */ te(Gr, [["render", Vr], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/App.vue"]]), Xr = {
  __name: "CtrlLayout",
  props: {
    name: { type: String, required: !0 }
  },
  setup(a, { expose: t }) {
    t();
    const n = {};
    return Object.defineProperty(n, "__isScriptSetup", { enumerable: !1, value: !0 }), n;
  }
}, Yr = { class: "ctrl-layout" }, jr = { class: "ctrl-layout__title" }, Qr = { class: "ctrl-layout__body" };
function Jr(a, t, n, e, i, r) {
  return I(), K("div", Yr, [
    D(
      "div",
      jr,
      pe(n.name),
      1
      /* TEXT */
    ),
    D("div", Qr, [
      It(a.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const Bt = /* @__PURE__ */ te(Xr, [["render", Jr], ["__scopeId", "data-v-9214d2d0"], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/vuelab/components/controls/CtrlLayout.vue"]]), eo = {
  __name: "index",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    value: {
      type: String,
      default: () => null
    }
  },
  emits: ["input"],
  setup(a, { expose: t, emit: n }) {
    t();
    const e = a, i = n, _ = { props: e, emit: i, setValue: (l) => {
      i("input", l);
    }, CtrlLayout: Bt, get Tag() {
      return Na;
    }, get generateKey() {
      return Ve;
    }, onMounted: je };
    return Object.defineProperty(_, "__isScriptSetup", { enumerable: !1, value: !0 }), _;
  }
}, to = { class: "vue-lab__palette" };
function no(a, t, n, e, i, r) {
  return I(), ee(e.CtrlLayout, { name: "Palette" }, {
    default: Le(() => [
      D("div", to, [
        (I(!0), K(
          Ne,
          null,
          Ae(n.options, (_) => (I(), ee(e.Tag, {
            key: e.generateKey(_),
            value: _,
            isActive: _ == n.value,
            title: _,
            class: "vue-lab__palette__item",
            onInput: e.setValue
          }, null, 8, ["value", "isActive", "title"]))),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
const bi = /* @__PURE__ */ te(eo, [["render", no], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/vuelab/components/controls/Palette/index.vue"]]), io = {
  __name: "index",
  props: {
    value: { type: [Number, String], default: 0 },
    options: { type: Array, default: () => [] }
  },
  emits: ["input"],
  setup(a, { expose: t, emit: n }) {
    t();
    const e = a, i = n, r = ae(0), _ = ae(null), l = ae(null), c = ae(null), g = W(() => e.options.length), u = (p) => {
      if (typeof p == "number" && Number.isInteger(p) && p >= 0 && p < g.value)
        return p;
      const w = e.options.findIndex((s) => String(s) === String(p));
      return w >= 0 ? w : 0;
    };
    We(() => e.value, (p) => {
      r.value = u(p);
    }, { immediate: !0 }), We(r, (p) => {
      i("input", e.options[p]);
    });
    const f = W(() => {
      const p = g.value;
      return p === 1 ? [0] : Array.from({ length: p }, (w, s) => s / (p - 1) * 100);
    }), m = W(() => e.options[r.value]);
    let N = !1, x = null;
    const k = (p, w, s) => Math.max(w, Math.min(s, p)), d = (p) => {
      const w = l.value.getBoundingClientRect(), y = k(p - w.left, 0, w.width) / w.width, O = Math.round(y * (g.value - 1));
      return k(O, 0, g.value - 1);
    }, o = (p) => {
      r.value = k(p, 0, g.value - 1);
    }, b = (p) => {
      const w = d(p.clientX);
      o(w);
    }, R = (p) => {
      N = !0, x = p.pointerId, p.target.setPointerCapture(x), window.addEventListener("pointermove", T), window.addEventListener("pointerup", A);
    };
    function T(p) {
      if (!N || p.pointerId !== x)
        return;
      const w = d(p.clientX);
      r.value = w;
    }
    const A = () => {
      if (N) {
        N = !1;
        try {
          c.value.releasePointerCapture(x);
        } catch {
        }
        x = null, window.removeEventListener("pointermove", T), window.removeEventListener("pointerup", A);
      }
    }, E = (p) => {
      o(r.value + p);
    };
    fi(() => {
      window.removeEventListener("pointermove", T), window.removeEventListener("pointerup", A);
    }), je(() => {
      r.value = u(e.value);
    });
    const v = { props: e, emit: i, currentIndex: r, root: _, track: l, handle: c, optionsCount: g, valueToIndex: u, positions: f, displayValue: m, get dragging() {
      return N;
    }, set dragging(p) {
      N = p;
    }, get pointerId() {
      return x;
    }, set pointerId(p) {
      x = p;
    }, clamp: k, clientXToIndex: d, selectIndex: o, onTrackClick: b, startDrag: R, onPointerMove: T, stopDrag: A, onArrow: E, ref: ae, computed: W, watch: We, onMounted: je, onBeforeUnmount: fi, CtrlLayout: Bt };
    return Object.defineProperty(v, "__isScriptSetup", { enumerable: !1, value: !0 }), v;
  }
}, so = {
  class: "vue-lab__size",
  ref: "root"
}, ao = ["onClick", "aria-label", "onKeydown"], ro = ["aria-valuemax", "aria-valuenow", "aria-valuetext"], oo = { class: "vue-lab__size-value" };
function lo(a, t, n, e, i, r) {
  return I(), ee(e.CtrlLayout, { name: "Size" }, {
    default: Le(() => [
      D(
        "div",
        so,
        [
          D(
            "div",
            {
              class: "vue-lab__size-track",
              ref: "track",
              onClick: t[4] || (t[4] = (_) => e.onTrackClick(_))
            },
            [
              (I(!0), K(
                Ne,
                null,
                Ae(n.options, (_, l) => (I(), K("div", {
                  key: l,
                  class: He(["vue-lab__size-tick", {
                    "vue-lab__size-tick_active": l === e.currentIndex
                  }]),
                  style: At({ left: e.positions[l] + "%" }),
                  onClick: qe((c) => e.selectIndex(l), ["stop"]),
                  role: "button",
                  "aria-label": `Select ${_}`,
                  tabindex: "0",
                  onKeydown: [
                    et(qe((c) => e.selectIndex(l), ["prevent"]), ["enter"]),
                    et(qe((c) => e.selectIndex(l), ["prevent"]), ["space"])
                  ]
                }, null, 46, ao))),
                128
                /* KEYED_FRAGMENT */
              )),
              D(
                "div",
                {
                  class: "vue-lab__size-range-fill",
                  style: At({ width: e.positions[e.currentIndex] + "%" }),
                  "aria-hidden": "true"
                },
                null,
                4
                /* STYLE */
              ),
              D("div", {
                class: "vue-lab__size-handle",
                ref: "handle",
                style: At({ left: e.positions[e.currentIndex] + "%" }),
                role: "slider",
                "aria-valuemin": 0,
                "aria-valuemax": n.options.length - 1,
                "aria-valuenow": e.currentIndex,
                "aria-valuetext": String(e.displayValue),
                tabindex: "0",
                onPointerdown: qe(e.startDrag, ["prevent"]),
                onKeydown: [
                  t[0] || (t[0] = et(qe((_) => e.onArrow(-1), ["prevent"]), ["left"])),
                  t[1] || (t[1] = et(qe((_) => e.onArrow(1), ["prevent"]), ["right"])),
                  t[2] || (t[2] = et(qe((_) => e.onArrow(1), ["prevent"]), ["up"])),
                  t[3] || (t[3] = et(qe((_) => e.onArrow(-1), ["prevent"]), ["down"]))
                ]
              }, null, 44, ro)
            ],
            512
            /* NEED_PATCH */
          ),
          D(
            "div",
            oo,
            pe(n.value),
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
const mi = /* @__PURE__ */ te(io, [["render", lo], ["__scopeId", "data-v-96bfa191"], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/vuelab/components/controls/Size/index.vue"]]), co = {
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
  setup(a, { expose: t, emit: n }) {
    t();
    const e = a, i = n, r = W(() => ["vue-lab__boolean-tumbler", {
      "vue-lab__boolean-tumbler--right": !!e.value,
      "vue-lab__boolean-tumbler--left": !e.value
    }]), _ = { props: e, emit: i, classList: r, computed: W, CtrlLayout: Bt };
    return Object.defineProperty(_, "__isScriptSetup", { enumerable: !1, value: !0 }), _;
  }
};
function _o(a, t, n, e, i, r) {
  return I(), ee(e.CtrlLayout, { name: n.title }, {
    default: Le(() => [
      D("div", {
        class: "vue-lab__boolean",
        onClick: t[0] || (t[0] = (_) => e.emit("input", !n.value))
      }, [
        D(
          "div",
          {
            class: He(e.classList)
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
const vi = /* @__PURE__ */ te(co, [["render", _o], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/vuelab/components/controls/Boolean/index.vue"]]), uo = {
  __name: "index",
  props: {
    value: { type: [String], default: () => "" }
  },
  emits: ["input"],
  setup(a, { expose: t, emit: n }) {
    t();
    const e = n, i = a, r = ae(!1), _ = (u) => {
      console.log(u?.target.value), e("input", u?.target.value);
    }, l = W(() => !!i.value && i.value !== ""), g = { emit: e, props: i, isFocused: r, handleTextInput: _, isValue: l, handleFocus: (u) => {
      r.value = u === "in";
    }, computed: W, ref: ae, CtrlLayout: Bt };
    return Object.defineProperty(g, "__isScriptSetup", { enumerable: !1, value: !0 }), g;
  }
}, po = { class: "text-ctrl" }, fo = ["value"];
function ho(a, t, n, e, i, r) {
  return I(), ee(e.CtrlLayout, { name: "Text Input" }, {
    default: Le(() => [
      D("div", po, [
        D(
          "div",
          {
            class: He([
              "text-ctrl__field",
              {
                "text-ctrl__field--active": e.isValue,
                "text-ctrl__field--focused": e.isFocused
              }
            ])
          },
          [
            D("input", {
              value: n.value,
              class: "text-ctrl__input",
              type: "text",
              onFocusin: t[0] || (t[0] = (_) => e.handleFocus("in")),
              onFocusout: t[1] || (t[1] = (_) => e.handleFocus("out")),
              onInput: e.handleTextInput
            }, null, 40, fo)
          ],
          2
          /* CLASS */
        )
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
const Ei = /* @__PURE__ */ te(uo, [["render", ho], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/vuelab/components/controls/Text/index.vue"]]), go = {
  __name: "index",
  props: {
    options: { type: Array, default: () => [] },
    values: { type: Object, default: () => ({}) }
  },
  emits: ["input", "reset"],
  setup(a, { expose: t, emit: n }) {
    t();
    const e = a, i = n, g = { props: e, emit: i, getComponent: (u) => {
      switch (u) {
        case "palette":
          return bi;
        case "size":
          return mi;
        case "boolean":
          return vi;
        case "text":
          return Ei;
      }
    }, getValue: (u) => e.values?.[u], handleInput: ({ ctrl: u, value: f }) => i("input", { ctrl: u, value: f }), resetSettings: () => i("reset"), get Palette() {
      return bi;
    }, get Size() {
      return mi;
    }, get BooleanSwitcher() {
      return vi;
    }, get Text() {
      return Ei;
    }, get Button() {
      return Ds;
    } };
    return Object.defineProperty(g, "__isScriptSetup", { enumerable: !1, value: !0 }), g;
  }
}, bo = { class: "control-block" }, mo = { class: "control-block__header" }, vo = { class: "control-block__header-ctrl" }, Eo = { class: "control-block__body custom-scroll" };
function yo(a, t, n, e, i, r) {
  return I(), K("div", bo, [
    D("div", mo, [
      t[1] || (t[1] = D(
        "div",
        { class: "control-block__header-title" },
        "Controls",
        -1
        /* CACHED */
      )),
      D("div", vo, [
        De(e.Button, { onClick: e.resetSettings }, {
          default: Le(() => [...t[0] || (t[0] = [
            Dt(
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
    D("div", Eo, [
      (I(!0), K(
        Ne,
        null,
        Ae(n.options, (_, l) => (I(), ee(Lt(e.getComponent(_.ctrl)), {
          key: `ctrl-${_.ctrl}-${l}`,
          options: _.variants,
          title: _.title,
          value: e.getValue(_.field),
          onInput: (c) => e.handleInput({ ctrl: _.field, value: c })
        }, null, 40, ["options", "title", "value", "onInput"]))),
        128
        /* KEYED_FRAGMENT */
      ))
    ])
  ]);
}
const wo = /* @__PURE__ */ te(go, [["render", yo], ["__scopeId", "data-v-25497d41"], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/vuelab/components/layout/ControlBlock/index.vue"]]), xo = {}, No = { class: "vue-lab" };
function Oo(a, t) {
  return I(), K("div", No, [
    It(a.$slots, "default", {}, void 0, !0)
  ]);
}
const To = /* @__PURE__ */ te(xo, [["render", Oo], ["__scopeId", "data-v-036062d8"], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/vuelab/components/layout/Page/index.vue"]]);
function So(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Jt = { exports: {} }, ot = {}, Nt = { exports: {} }, en = {}, tn = {}, yi;
function ni() {
  if (yi) return tn;
  yi = 1;
  function a(e) {
    this.__parent = e, this.__character_count = 0, this.__indent_count = -1, this.__alignment_count = 0, this.__wrap_point_index = 0, this.__wrap_point_character_count = 0, this.__wrap_point_indent_count = -1, this.__wrap_point_alignment_count = 0, this.__items = [];
  }
  a.prototype.clone_empty = function() {
    var e = new a(this.__parent);
    return e.set_indent(this.__indent_count, this.__alignment_count), e;
  }, a.prototype.item = function(e) {
    return e < 0 ? this.__items[this.__items.length + e] : this.__items[e];
  }, a.prototype.has_match = function(e) {
    for (var i = this.__items.length - 1; i >= 0; i--)
      if (this.__items[i].match(e))
        return !0;
    return !1;
  }, a.prototype.set_indent = function(e, i) {
    this.is_empty() && (this.__indent_count = e || 0, this.__alignment_count = i || 0, this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count));
  }, a.prototype._set_wrap_point = function() {
    this.__parent.wrap_line_length && (this.__wrap_point_index = this.__items.length, this.__wrap_point_character_count = this.__character_count, this.__wrap_point_indent_count = this.__parent.next_line.__indent_count, this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count);
  }, a.prototype._should_wrap = function() {
    return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count;
  }, a.prototype._allow_wrap = function() {
    if (this._should_wrap()) {
      this.__parent.add_new_line();
      var e = this.__parent.current_line;
      return e.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count), e.__items = this.__items.slice(this.__wrap_point_index), this.__items = this.__items.slice(0, this.__wrap_point_index), e.__character_count += this.__character_count - this.__wrap_point_character_count, this.__character_count = this.__wrap_point_character_count, e.__items[0] === " " && (e.__items.splice(0, 1), e.__character_count -= 1), !0;
    }
    return !1;
  }, a.prototype.is_empty = function() {
    return this.__items.length === 0;
  }, a.prototype.last = function() {
    return this.is_empty() ? null : this.__items[this.__items.length - 1];
  }, a.prototype.push = function(e) {
    this.__items.push(e);
    var i = e.lastIndexOf(`
`);
    i !== -1 ? this.__character_count = e.length - i : this.__character_count += e.length;
  }, a.prototype.pop = function() {
    var e = null;
    return this.is_empty() || (e = this.__items.pop(), this.__character_count -= e.length), e;
  }, a.prototype._remove_indent = function() {
    this.__indent_count > 0 && (this.__indent_count -= 1, this.__character_count -= this.__parent.indent_size);
  }, a.prototype._remove_wrap_indent = function() {
    this.__wrap_point_indent_count > 0 && (this.__wrap_point_indent_count -= 1);
  }, a.prototype.trim = function() {
    for (; this.last() === " "; )
      this.__items.pop(), this.__character_count -= 1;
  }, a.prototype.toString = function() {
    var e = "";
    return this.is_empty() ? this.__parent.indent_empty_lines && (e = this.__parent.get_indent_string(this.__indent_count)) : (e = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count), e += this.__items.join("")), e;
  };
  function t(e, i) {
    this.__cache = [""], this.__indent_size = e.indent_size, this.__indent_string = e.indent_char, e.indent_with_tabs || (this.__indent_string = new Array(e.indent_size + 1).join(e.indent_char)), i = i || "", e.indent_level > 0 && (i = new Array(e.indent_level + 1).join(this.__indent_string)), this.__base_string = i, this.__base_string_length = i.length;
  }
  t.prototype.get_indent_size = function(e, i) {
    var r = this.__base_string_length;
    return i = i || 0, e < 0 && (r = 0), r += e * this.__indent_size, r += i, r;
  }, t.prototype.get_indent_string = function(e, i) {
    var r = this.__base_string;
    return i = i || 0, e < 0 && (e = 0, r = ""), i += e * this.__indent_size, this.__ensure_cache(i), r += this.__cache[i], r;
  }, t.prototype.__ensure_cache = function(e) {
    for (; e >= this.__cache.length; )
      this.__add_column();
  }, t.prototype.__add_column = function() {
    var e = this.__cache.length, i = 0, r = "";
    this.__indent_size && e >= this.__indent_size && (i = Math.floor(e / this.__indent_size), e -= i * this.__indent_size, r = new Array(i + 1).join(this.__indent_string)), e && (r += new Array(e + 1).join(" ")), this.__cache.push(r);
  };
  function n(e, i) {
    this.__indent_cache = new t(e, i), this.raw = !1, this._end_with_newline = e.end_with_newline, this.indent_size = e.indent_size, this.wrap_line_length = e.wrap_line_length, this.indent_empty_lines = e.indent_empty_lines, this.__lines = [], this.previous_line = null, this.current_line = null, this.next_line = new a(this), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1, this.__add_outputline();
  }
  return n.prototype.__add_outputline = function() {
    this.previous_line = this.current_line, this.current_line = this.next_line.clone_empty(), this.__lines.push(this.current_line);
  }, n.prototype.get_line_number = function() {
    return this.__lines.length;
  }, n.prototype.get_indent_string = function(e, i) {
    return this.__indent_cache.get_indent_string(e, i);
  }, n.prototype.get_indent_size = function(e, i) {
    return this.__indent_cache.get_indent_size(e, i);
  }, n.prototype.is_empty = function() {
    return !this.previous_line && this.current_line.is_empty();
  }, n.prototype.add_new_line = function(e) {
    return this.is_empty() || !e && this.just_added_newline() ? !1 : (this.raw || this.__add_outputline(), !0);
  }, n.prototype.get_code = function(e) {
    this.trim(!0);
    var i = this.current_line.pop();
    i && (i[i.length - 1] === `
` && (i = i.replace(/\n+$/g, "")), this.current_line.push(i)), this._end_with_newline && this.__add_outputline();
    var r = this.__lines.join(`
`);
    return e !== `
` && (r = r.replace(/[\n]/g, e)), r;
  }, n.prototype.set_wrap_point = function() {
    this.current_line._set_wrap_point();
  }, n.prototype.set_indent = function(e, i) {
    return e = e || 0, i = i || 0, this.next_line.set_indent(e, i), this.__lines.length > 1 ? (this.current_line.set_indent(e, i), !0) : (this.current_line.set_indent(), !1);
  }, n.prototype.add_raw_token = function(e) {
    for (var i = 0; i < e.newlines; i++)
      this.__add_outputline();
    this.current_line.set_indent(-1), this.current_line.push(e.whitespace_before), this.current_line.push(e.text), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1;
  }, n.prototype.add_token = function(e) {
    this.__add_space_before_token(), this.current_line.push(e), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = this.current_line._allow_wrap();
  }, n.prototype.__add_space_before_token = function() {
    this.space_before_token && !this.just_added_newline() && (this.non_breaking_space || this.set_wrap_point(), this.current_line.push(" "));
  }, n.prototype.remove_indent = function(e) {
    for (var i = this.__lines.length; e < i; )
      this.__lines[e]._remove_indent(), e++;
    this.current_line._remove_wrap_indent();
  }, n.prototype.trim = function(e) {
    for (e = e === void 0 ? !1 : e, this.current_line.trim(); e && this.__lines.length > 1 && this.current_line.is_empty(); )
      this.__lines.pop(), this.current_line = this.__lines[this.__lines.length - 1], this.current_line.trim();
    this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null;
  }, n.prototype.just_added_newline = function() {
    return this.current_line.is_empty();
  }, n.prototype.just_added_blankline = function() {
    return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty();
  }, n.prototype.ensure_empty_line_above = function(e, i) {
    for (var r = this.__lines.length - 2; r >= 0; ) {
      var _ = this.__lines[r];
      if (_.is_empty())
        break;
      if (_.item(0).indexOf(e) !== 0 && _.item(-1) !== i) {
        this.__lines.splice(r + 1, 0, new a(this)), this.previous_line = this.__lines[this.__lines.length - 2];
        break;
      }
      r--;
    }
  }, tn.Output = n, tn;
}
var nn = {}, wi;
function Us() {
  if (wi) return nn;
  wi = 1;
  function a(t, n, e, i) {
    this.type = t, this.text = n, this.comments_before = null, this.newlines = e || 0, this.whitespace_before = i || "", this.parent = null, this.next = null, this.previous = null, this.opened = null, this.closed = null, this.directives = null;
  }
  return nn.Token = a, nn;
}
var sn = {}, xi;
function Fs() {
  return xi || (xi = 1, (function(a) {
    var t = "\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a", n = "\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a", e = "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc", i = "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f", r = "\\\\u[0-9a-fA-F]{4}|\\\\u\\{[0-9a-fA-F]+\\}", _ = "(?:" + r + "|[" + t + e + "])", l = "(?:" + r + "|[" + n + e + i + "])*";
    a.identifier = new RegExp(_ + l, "g"), a.identifierStart = new RegExp(_), a.identifierMatch = new RegExp("(?:" + r + "|[" + n + e + i + "])+"), a.newline = /[\n\r\u2028\u2029]/, a.lineBreak = new RegExp(`\r
|` + a.newline.source), a.allLineBreaks = new RegExp(a.lineBreak.source, "g");
  })(sn)), sn;
}
var an = {}, lt = {}, Ni;
function ii() {
  if (Ni) return lt;
  Ni = 1;
  function a(e, i) {
    this.raw_options = t(e, i), this.disabled = this._get_boolean("disabled"), this.eol = this._get_characters("eol", "auto"), this.end_with_newline = this._get_boolean("end_with_newline"), this.indent_size = this._get_number("indent_size", 4), this.indent_char = this._get_characters("indent_char", " "), this.indent_level = this._get_number("indent_level"), this.preserve_newlines = this._get_boolean("preserve_newlines", !0), this.max_preserve_newlines = this._get_number("max_preserve_newlines", 32786), this.preserve_newlines || (this.max_preserve_newlines = 0), this.indent_with_tabs = this._get_boolean("indent_with_tabs", this.indent_char === "	"), this.indent_with_tabs && (this.indent_char = "	", this.indent_size === 1 && (this.indent_size = 4)), this.wrap_line_length = this._get_number("wrap_line_length", this._get_number("max_char")), this.indent_empty_lines = this._get_boolean("indent_empty_lines"), this.templating = this._get_selection_list("templating", ["auto", "none", "angular", "django", "erb", "handlebars", "php", "smarty"], ["auto"]);
  }
  a.prototype._get_array = function(e, i) {
    var r = this.raw_options[e], _ = i || [];
    return typeof r == "object" ? r !== null && typeof r.concat == "function" && (_ = r.concat()) : typeof r == "string" && (_ = r.split(/[^a-zA-Z0-9_\/\-]+/)), _;
  }, a.prototype._get_boolean = function(e, i) {
    var r = this.raw_options[e], _ = r === void 0 ? !!i : !!r;
    return _;
  }, a.prototype._get_characters = function(e, i) {
    var r = this.raw_options[e], _ = i || "";
    return typeof r == "string" && (_ = r.replace(/\\r/, "\r").replace(/\\n/, `
`).replace(/\\t/, "	")), _;
  }, a.prototype._get_number = function(e, i) {
    var r = this.raw_options[e];
    i = parseInt(i, 10), isNaN(i) && (i = 0);
    var _ = parseInt(r, 10);
    return isNaN(_) && (_ = i), _;
  }, a.prototype._get_selection = function(e, i, r) {
    var _ = this._get_selection_list(e, i, r);
    if (_.length !== 1)
      throw new Error(
        "Invalid Option Value: The option '" + e + `' can only be one of the following values:
` + i + `
You passed in: '` + this.raw_options[e] + "'"
      );
    return _[0];
  }, a.prototype._get_selection_list = function(e, i, r) {
    if (!i || i.length === 0)
      throw new Error("Selection list cannot be empty.");
    if (r = r || [i[0]], !this._is_valid_selection(r, i))
      throw new Error("Invalid Default Value!");
    var _ = this._get_array(e, r);
    if (!this._is_valid_selection(_, i))
      throw new Error(
        "Invalid Option Value: The option '" + e + `' can contain only the following values:
` + i + `
You passed in: '` + this.raw_options[e] + "'"
      );
    return _;
  }, a.prototype._is_valid_selection = function(e, i) {
    return e.length && i.length && !e.some(function(r) {
      return i.indexOf(r) === -1;
    });
  };
  function t(e, i) {
    var r = {};
    e = n(e);
    var _;
    for (_ in e)
      _ !== i && (r[_] = e[_]);
    if (i && e[i])
      for (_ in e[i])
        r[_] = e[i][_];
    return r;
  }
  function n(e) {
    var i = {}, r;
    for (r in e) {
      var _ = r.replace(/-/g, "_");
      i[_] = e[r];
    }
    return i;
  }
  return lt.Options = a, lt.normalizeOpts = n, lt.mergeOpts = t, lt;
}
var Oi;
function $s() {
  if (Oi) return an;
  Oi = 1;
  var a = ii().Options, t = ["before-newline", "after-newline", "preserve-newline"];
  function n(e) {
    a.call(this, e, "js");
    var i = this.raw_options.brace_style || null;
    i === "expand-strict" ? this.raw_options.brace_style = "expand" : i === "collapse-preserve-inline" ? this.raw_options.brace_style = "collapse,preserve-inline" : this.raw_options.braces_on_own_line !== void 0 && (this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse");
    var r = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
    this.brace_preserve_inline = !1, this.brace_style = "collapse";
    for (var _ = 0; _ < r.length; _++)
      r[_] === "preserve-inline" ? this.brace_preserve_inline = !0 : this.brace_style = r[_];
    this.unindent_chained_methods = this._get_boolean("unindent_chained_methods"), this.break_chained_methods = this._get_boolean("break_chained_methods"), this.space_in_paren = this._get_boolean("space_in_paren"), this.space_in_empty_paren = this._get_boolean("space_in_empty_paren"), this.jslint_happy = this._get_boolean("jslint_happy"), this.space_after_anon_function = this._get_boolean("space_after_anon_function"), this.space_after_named_function = this._get_boolean("space_after_named_function"), this.keep_array_indentation = this._get_boolean("keep_array_indentation"), this.space_before_conditional = this._get_boolean("space_before_conditional", !0), this.unescape_strings = this._get_boolean("unescape_strings"), this.e4x = this._get_boolean("e4x"), this.comma_first = this._get_boolean("comma_first"), this.operator_position = this._get_selection("operator_position", t), this.test_output_raw = this._get_boolean("test_output_raw"), this.jslint_happy && (this.space_after_anon_function = !0);
  }
  return n.prototype = new a(), an.Options = n, an;
}
var tt = {}, rn = {}, Ti;
function si() {
  if (Ti) return rn;
  Ti = 1;
  var a = RegExp.prototype.hasOwnProperty("sticky");
  function t(n) {
    this.__input = n || "", this.__input_length = this.__input.length, this.__position = 0;
  }
  return t.prototype.restart = function() {
    this.__position = 0;
  }, t.prototype.back = function() {
    this.__position > 0 && (this.__position -= 1);
  }, t.prototype.hasNext = function() {
    return this.__position < this.__input_length;
  }, t.prototype.next = function() {
    var n = null;
    return this.hasNext() && (n = this.__input.charAt(this.__position), this.__position += 1), n;
  }, t.prototype.peek = function(n) {
    var e = null;
    return n = n || 0, n += this.__position, n >= 0 && n < this.__input_length && (e = this.__input.charAt(n)), e;
  }, t.prototype.__match = function(n, e) {
    n.lastIndex = e;
    var i = n.exec(this.__input);
    return i && !(a && n.sticky) && i.index !== e && (i = null), i;
  }, t.prototype.test = function(n, e) {
    return e = e || 0, e += this.__position, e >= 0 && e < this.__input_length ? !!this.__match(n, e) : !1;
  }, t.prototype.testChar = function(n, e) {
    var i = this.peek(e);
    return n.lastIndex = 0, i !== null && n.test(i);
  }, t.prototype.match = function(n) {
    var e = this.__match(n, this.__position);
    return e ? this.__position += e[0].length : e = null, e;
  }, t.prototype.read = function(n, e, i) {
    var r = "", _;
    return n && (_ = this.match(n), _ && (r += _[0])), e && (_ || !n) && (r += this.readUntil(e, i)), r;
  }, t.prototype.readUntil = function(n, e) {
    var i = "", r = this.__position;
    n.lastIndex = this.__position;
    var _ = n.exec(this.__input);
    return _ ? (r = _.index, e && (r += _[0].length)) : r = this.__input_length, i = this.__input.substring(this.__position, r), this.__position = r, i;
  }, t.prototype.readUntilAfter = function(n) {
    return this.readUntil(n, !0);
  }, t.prototype.get_regexp = function(n, e) {
    var i = null, r = "g";
    return e && a && (r = "y"), typeof n == "string" && n !== "" ? i = new RegExp(n, r) : n && (i = new RegExp(n.source, r)), i;
  }, t.prototype.get_literal_regexp = function(n) {
    return RegExp(n.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
  }, t.prototype.peekUntilAfter = function(n) {
    var e = this.__position, i = this.readUntilAfter(n);
    return this.__position = e, i;
  }, t.prototype.lookBack = function(n) {
    var e = this.__position - 1;
    return e >= n.length && this.__input.substring(e - n.length, e).toLowerCase() === n;
  }, rn.InputScanner = t, rn;
}
var Ot = {}, on = {}, Si;
function ko() {
  if (Si) return on;
  Si = 1;
  function a(t) {
    this.__tokens = [], this.__tokens_length = this.__tokens.length, this.__position = 0, this.__parent_token = t;
  }
  return a.prototype.restart = function() {
    this.__position = 0;
  }, a.prototype.isEmpty = function() {
    return this.__tokens_length === 0;
  }, a.prototype.hasNext = function() {
    return this.__position < this.__tokens_length;
  }, a.prototype.next = function() {
    var t = null;
    return this.hasNext() && (t = this.__tokens[this.__position], this.__position += 1), t;
  }, a.prototype.peek = function(t) {
    var n = null;
    return t = t || 0, t += this.__position, t >= 0 && t < this.__tokens_length && (n = this.__tokens[t]), n;
  }, a.prototype.add = function(t) {
    this.__parent_token && (t.parent = this.__parent_token), this.__tokens.push(t), this.__tokens_length += 1;
  }, on.TokenStream = a, on;
}
var ln = {}, cn = {}, ki;
function Pt() {
  if (ki) return cn;
  ki = 1;
  function a(t, n) {
    this._input = t, this._starting_pattern = null, this._match_pattern = null, this._until_pattern = null, this._until_after = !1, n && (this._starting_pattern = this._input.get_regexp(n._starting_pattern, !0), this._match_pattern = this._input.get_regexp(n._match_pattern, !0), this._until_pattern = this._input.get_regexp(n._until_pattern), this._until_after = n._until_after);
  }
  return a.prototype.read = function() {
    var t = this._input.read(this._starting_pattern);
    return (!this._starting_pattern || t) && (t += this._input.read(this._match_pattern, this._until_pattern, this._until_after)), t;
  }, a.prototype.read_match = function() {
    return this._input.match(this._match_pattern);
  }, a.prototype.until_after = function(t) {
    var n = this._create();
    return n._until_after = !0, n._until_pattern = this._input.get_regexp(t), n._update(), n;
  }, a.prototype.until = function(t) {
    var n = this._create();
    return n._until_after = !1, n._until_pattern = this._input.get_regexp(t), n._update(), n;
  }, a.prototype.starting_with = function(t) {
    var n = this._create();
    return n._starting_pattern = this._input.get_regexp(t, !0), n._update(), n;
  }, a.prototype.matching = function(t) {
    var n = this._create();
    return n._match_pattern = this._input.get_regexp(t, !0), n._update(), n;
  }, a.prototype._create = function() {
    return new a(this._input, this);
  }, a.prototype._update = function() {
  }, cn.Pattern = a, cn;
}
var Ri;
function Ro() {
  if (Ri) return ln;
  Ri = 1;
  var a = Pt().Pattern;
  function t(n, e) {
    a.call(this, n, e), e ? this._line_regexp = this._input.get_regexp(e._line_regexp) : this.__set_whitespace_patterns("", ""), this.newline_count = 0, this.whitespace_before_token = "";
  }
  return t.prototype = new a(), t.prototype.__set_whitespace_patterns = function(n, e) {
    n += "\\t ", e += "\\n\\r", this._match_pattern = this._input.get_regexp(
      "[" + n + e + "]+",
      !0
    ), this._newline_regexp = this._input.get_regexp(
      "\\r\\n|[" + e + "]"
    );
  }, t.prototype.read = function() {
    this.newline_count = 0, this.whitespace_before_token = "";
    var n = this._input.read(this._match_pattern);
    if (n === " ")
      this.whitespace_before_token = " ";
    else if (n) {
      var e = this.__split(this._newline_regexp, n);
      this.newline_count = e.length - 1, this.whitespace_before_token = e[this.newline_count];
    }
    return n;
  }, t.prototype.matching = function(n, e) {
    var i = this._create();
    return i.__set_whitespace_patterns(n, e), i._update(), i;
  }, t.prototype._create = function() {
    return new t(this._input, this);
  }, t.prototype.__split = function(n, e) {
    n.lastIndex = 0;
    for (var i = 0, r = [], _ = n.exec(e); _; )
      r.push(e.substring(i, _.index)), i = _.index + _[0].length, _ = n.exec(e);
    return i < e.length ? r.push(e.substring(i, e.length)) : r.push(""), r;
  }, ln.WhitespacePattern = t, ln;
}
var Ai;
function Ct() {
  if (Ai) return Ot;
  Ai = 1;
  var a = si().InputScanner, t = Us().Token, n = ko().TokenStream, e = Ro().WhitespacePattern, i = {
    START: "TK_START",
    RAW: "TK_RAW",
    EOF: "TK_EOF"
  }, r = function(_, l) {
    this._input = new a(_), this._options = l || {}, this.__tokens = null, this._patterns = {}, this._patterns.whitespace = new e(this._input);
  };
  return r.prototype.tokenize = function() {
    this._input.restart(), this.__tokens = new n(), this._reset();
    for (var _, l = new t(i.START, ""), c = null, g = [], u = new n(); l.type !== i.EOF; ) {
      for (_ = this._get_next_token(l, c); this._is_comment(_); )
        u.add(_), _ = this._get_next_token(l, c);
      u.isEmpty() || (_.comments_before = u, u = new n()), _.parent = c, this._is_opening(_) ? (g.push(c), c = _) : c && this._is_closing(_, c) && (_.opened = c, c.closed = _, c = g.pop(), _.parent = c), _.previous = l, l.next = _, this.__tokens.add(_), l = _;
    }
    return this.__tokens;
  }, r.prototype._is_first_token = function() {
    return this.__tokens.isEmpty();
  }, r.prototype._reset = function() {
  }, r.prototype._get_next_token = function(_, l) {
    this._readWhitespace();
    var c = this._input.read(/.+/g);
    return c ? this._create_token(i.RAW, c) : this._create_token(i.EOF, "");
  }, r.prototype._is_comment = function(_) {
    return !1;
  }, r.prototype._is_opening = function(_) {
    return !1;
  }, r.prototype._is_closing = function(_, l) {
    return !1;
  }, r.prototype._create_token = function(_, l) {
    var c = new t(
      _,
      l,
      this._patterns.whitespace.newline_count,
      this._patterns.whitespace.whitespace_before_token
    );
    return c;
  }, r.prototype._readWhitespace = function() {
    return this._patterns.whitespace.read();
  }, Ot.Tokenizer = r, Ot.TOKEN = i, Ot;
}
var _n = {}, Ci;
function ai() {
  if (Ci) return _n;
  Ci = 1;
  function a(t, n) {
    t = typeof t == "string" ? t : t.source, n = typeof n == "string" ? n : n.source, this.__directives_block_pattern = new RegExp(t + / beautify( \w+[:]\w+)+ /.source + n, "g"), this.__directive_pattern = / (\w+)[:](\w+)/g, this.__directives_end_ignore_pattern = new RegExp(t + /\sbeautify\signore:end\s/.source + n, "g");
  }
  return a.prototype.get_directives = function(t) {
    if (!t.match(this.__directives_block_pattern))
      return null;
    var n = {};
    this.__directive_pattern.lastIndex = 0;
    for (var e = this.__directive_pattern.exec(t); e; )
      n[e[1]] = e[2], e = this.__directive_pattern.exec(t);
    return n;
  }, a.prototype.readIgnored = function(t) {
    return t.readUntilAfter(this.__directives_end_ignore_pattern);
  }, _n.Directives = a, _n;
}
var un = {}, Ii;
function zs() {
  if (Ii) return un;
  Ii = 1;
  var a = Pt().Pattern, t = {
    django: !1,
    erb: !1,
    handlebars: !1,
    php: !1,
    smarty: !1,
    angular: !1
  };
  function n(e, i) {
    a.call(this, e, i), this.__template_pattern = null, this._disabled = Object.assign({}, t), this._excluded = Object.assign({}, t), i && (this.__template_pattern = this._input.get_regexp(i.__template_pattern), this._excluded = Object.assign(this._excluded, i._excluded), this._disabled = Object.assign(this._disabled, i._disabled));
    var r = new a(e);
    this.__patterns = {
      handlebars_comment: r.starting_with(/{{!--/).until_after(/--}}/),
      handlebars_unescaped: r.starting_with(/{{{/).until_after(/}}}/),
      handlebars: r.starting_with(/{{/).until_after(/}}/),
      php: r.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
      erb: r.starting_with(/<%[^%]/).until_after(/[^%]%>/),
      // django coflicts with handlebars a bit.
      django: r.starting_with(/{%/).until_after(/%}/),
      django_value: r.starting_with(/{{/).until_after(/}}/),
      django_comment: r.starting_with(/{#/).until_after(/#}/),
      smarty: r.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
      smarty_comment: r.starting_with(/{\*/).until_after(/\*}/),
      smarty_literal: r.starting_with(/{literal}/).until_after(/{\/literal}/)
    };
  }
  return n.prototype = new a(), n.prototype._create = function() {
    return new n(this._input, this);
  }, n.prototype._update = function() {
    this.__set_templated_pattern();
  }, n.prototype.disable = function(e) {
    var i = this._create();
    return i._disabled[e] = !0, i._update(), i;
  }, n.prototype.read_options = function(e) {
    var i = this._create();
    for (var r in t)
      i._disabled[r] = e.templating.indexOf(r) === -1;
    return i._update(), i;
  }, n.prototype.exclude = function(e) {
    var i = this._create();
    return i._excluded[e] = !0, i._update(), i;
  }, n.prototype.read = function() {
    var e = "";
    this._match_pattern ? e = this._input.read(this._starting_pattern) : e = this._input.read(this._starting_pattern, this.__template_pattern);
    for (var i = this._read_template(); i; )
      this._match_pattern ? i += this._input.read(this._match_pattern) : i += this._input.readUntil(this.__template_pattern), e += i, i = this._read_template();
    return this._until_after && (e += this._input.readUntilAfter(this._until_pattern)), e;
  }, n.prototype.__set_templated_pattern = function() {
    var e = [];
    this._disabled.php || e.push(this.__patterns.php._starting_pattern.source), this._disabled.handlebars || e.push(this.__patterns.handlebars._starting_pattern.source), this._disabled.angular || e.push(this.__patterns.handlebars._starting_pattern.source), this._disabled.erb || e.push(this.__patterns.erb._starting_pattern.source), this._disabled.django || (e.push(this.__patterns.django._starting_pattern.source), e.push(this.__patterns.django_value._starting_pattern.source), e.push(this.__patterns.django_comment._starting_pattern.source)), this._disabled.smarty || e.push(this.__patterns.smarty._starting_pattern.source), this._until_pattern && e.push(this._until_pattern.source), this.__template_pattern = this._input.get_regexp("(?:" + e.join("|") + ")");
  }, n.prototype._read_template = function() {
    var e = "", i = this._input.peek();
    if (i === "<") {
      var r = this._input.peek(1);
      !this._disabled.php && !this._excluded.php && r === "?" && (e = e || this.__patterns.php.read()), !this._disabled.erb && !this._excluded.erb && r === "%" && (e = e || this.__patterns.erb.read());
    } else i === "{" && (!this._disabled.handlebars && !this._excluded.handlebars && (e = e || this.__patterns.handlebars_comment.read(), e = e || this.__patterns.handlebars_unescaped.read(), e = e || this.__patterns.handlebars.read()), this._disabled.django || (!this._excluded.django && !this._excluded.handlebars && (e = e || this.__patterns.django_value.read()), this._excluded.django || (e = e || this.__patterns.django_comment.read(), e = e || this.__patterns.django.read())), this._disabled.smarty || this._disabled.django && this._disabled.handlebars && (e = e || this.__patterns.smarty_comment.read(), e = e || this.__patterns.smarty_literal.read(), e = e || this.__patterns.smarty.read()));
    return e;
  }, un.TemplatablePattern = n, un;
}
var Mi;
function Tt() {
  if (Mi) return tt;
  Mi = 1;
  var a = si().InputScanner, t = Ct().Tokenizer, n = Ct().TOKEN, e = ai().Directives, i = Fs(), r = Pt().Pattern, _ = zs().TemplatablePattern;
  function l(E, v) {
    return v.indexOf(E) !== -1;
  }
  var c = {
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
    START: n.START,
    RAW: n.RAW,
    EOF: n.EOF
  }, g = new e(/\/\*/, /\*\//), u = /0[xX][0123456789abcdefABCDEF_]*n?|0[oO][01234567_]*n?|0[bB][01_]*n?|\d[\d_]*n|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/, f = /[0-9]/, m = /[^\d\.]/, N = ">>> === !== &&= ??= ||= << && >= ** != == <= >> || ?? |> < / - + > : & % ? ^ | *".split(" "), x = ">>>= ... >>= <<= === >>> !== **= &&= ??= ||= => ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |";
  x = x.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"), x = "\\?\\.(?!\\d) " + x, x = x.replace(/ /g, "|");
  var k = new RegExp(x), d = "continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(","), o = d.concat(["do", "in", "of", "else", "get", "set", "new", "catch", "finally", "typeof", "yield", "async", "await", "from", "as", "class", "extends"]), b = new RegExp("^(?:" + o.join("|") + ")$"), R, T = function(E, v) {
    t.call(this, E, v), this._patterns.whitespace = this._patterns.whitespace.matching(
      /\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source,
      /\u2028\u2029/.source
    );
    var p = new r(this._input), w = new _(this._input).read_options(this._options);
    this.__patterns = {
      template: w,
      identifier: w.starting_with(i.identifier).matching(i.identifierMatch),
      number: p.matching(u),
      punct: p.matching(k),
      // comment ends just before nearest linefeed or end of file
      comment: p.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
      //  /* ... */ comment ends with nearest */ or end of file
      block_comment: p.starting_with(/\/\*/).until_after(/\*\//),
      html_comment_start: p.matching(/<!--/),
      html_comment_end: p.matching(/-->/),
      include: p.starting_with(/#include/).until_after(i.lineBreak),
      shebang: p.starting_with(/#!/).until_after(i.lineBreak),
      xml: p.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[^}]+?}|!\[CDATA\[[^\]]*?\]\]|)(\s*{[^}]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{([^{}]|{[^}]+?})+?}))*\s*(\/?)\s*>/),
      single_quote: w.until(/['\\\n\r\u2028\u2029]/),
      double_quote: w.until(/["\\\n\r\u2028\u2029]/),
      template_text: w.until(/[`\\$]/),
      template_expression: w.until(/[`}\\]/)
    };
  };
  T.prototype = new t(), T.prototype._is_comment = function(E) {
    return E.type === c.COMMENT || E.type === c.BLOCK_COMMENT || E.type === c.UNKNOWN;
  }, T.prototype._is_opening = function(E) {
    return E.type === c.START_BLOCK || E.type === c.START_EXPR;
  }, T.prototype._is_closing = function(E, v) {
    return (E.type === c.END_BLOCK || E.type === c.END_EXPR) && v && (E.text === "]" && v.text === "[" || E.text === ")" && v.text === "(" || E.text === "}" && v.text === "{");
  }, T.prototype._reset = function() {
    R = !1;
  }, T.prototype._get_next_token = function(E, v) {
    var p = null;
    this._readWhitespace();
    var w = this._input.peek();
    return w === null ? this._create_token(c.EOF, "") : (p = p || this._read_non_javascript(w), p = p || this._read_string(w), p = p || this._read_pair(w, this._input.peek(1)), p = p || this._read_word(E), p = p || this._read_singles(w), p = p || this._read_comment(w), p = p || this._read_regexp(w, E), p = p || this._read_xml(w, E), p = p || this._read_punctuation(), p = p || this._create_token(c.UNKNOWN, this._input.next()), p);
  }, T.prototype._read_word = function(E) {
    var v;
    if (v = this.__patterns.identifier.read(), v !== "")
      return v = v.replace(i.allLineBreaks, `
`), !(E.type === c.DOT || E.type === c.RESERVED && (E.text === "set" || E.text === "get")) && b.test(v) ? (v === "in" || v === "of") && (E.type === c.WORD || E.type === c.STRING) ? this._create_token(c.OPERATOR, v) : this._create_token(c.RESERVED, v) : this._create_token(c.WORD, v);
    if (v = this.__patterns.number.read(), v !== "")
      return this._create_token(c.WORD, v);
  }, T.prototype._read_singles = function(E) {
    var v = null;
    return E === "(" || E === "[" ? v = this._create_token(c.START_EXPR, E) : E === ")" || E === "]" ? v = this._create_token(c.END_EXPR, E) : E === "{" ? v = this._create_token(c.START_BLOCK, E) : E === "}" ? v = this._create_token(c.END_BLOCK, E) : E === ";" ? v = this._create_token(c.SEMICOLON, E) : E === "." && m.test(this._input.peek(1)) ? v = this._create_token(c.DOT, E) : E === "," && (v = this._create_token(c.COMMA, E)), v && this._input.next(), v;
  }, T.prototype._read_pair = function(E, v) {
    var p = null;
    return E === "#" && v === "{" && (p = this._create_token(c.START_BLOCK, E + v)), p && (this._input.next(), this._input.next()), p;
  }, T.prototype._read_punctuation = function() {
    var E = this.__patterns.punct.read();
    if (E !== "")
      return E === "=" ? this._create_token(c.EQUALS, E) : E === "?." ? this._create_token(c.DOT, E) : this._create_token(c.OPERATOR, E);
  }, T.prototype._read_non_javascript = function(E) {
    var v = "";
    if (E === "#") {
      if (this._is_first_token() && (v = this.__patterns.shebang.read(), v))
        return this._create_token(c.UNKNOWN, v.trim() + `
`);
      if (v = this.__patterns.include.read(), v)
        return this._create_token(c.UNKNOWN, v.trim() + `
`);
      E = this._input.next();
      var p = "#";
      if (this._input.hasNext() && this._input.testChar(f)) {
        do
          E = this._input.next(), p += E;
        while (this._input.hasNext() && E !== "#" && E !== "=");
        return E === "#" || (this._input.peek() === "[" && this._input.peek(1) === "]" ? (p += "[]", this._input.next(), this._input.next()) : this._input.peek() === "{" && this._input.peek(1) === "}" && (p += "{}", this._input.next(), this._input.next())), this._create_token(c.WORD, p);
      }
      this._input.back();
    } else if (E === "<" && this._is_first_token()) {
      if (v = this.__patterns.html_comment_start.read(), v) {
        for (; this._input.hasNext() && !this._input.testChar(i.newline); )
          v += this._input.next();
        return R = !0, this._create_token(c.COMMENT, v);
      }
    } else if (R && E === "-" && (v = this.__patterns.html_comment_end.read(), v))
      return R = !1, this._create_token(c.COMMENT, v);
    return null;
  }, T.prototype._read_comment = function(E) {
    var v = null;
    if (E === "/") {
      var p = "";
      if (this._input.peek(1) === "*") {
        p = this.__patterns.block_comment.read();
        var w = g.get_directives(p);
        w && w.ignore === "start" && (p += g.readIgnored(this._input)), p = p.replace(i.allLineBreaks, `
`), v = this._create_token(c.BLOCK_COMMENT, p), v.directives = w;
      } else this._input.peek(1) === "/" && (p = this.__patterns.comment.read(), v = this._create_token(c.COMMENT, p));
    }
    return v;
  }, T.prototype._read_string = function(E) {
    if (E === "`" || E === "'" || E === '"') {
      var v = this._input.next();
      return this.has_char_escapes = !1, E === "`" ? v += this._read_string_recursive("`", !0, "${") : v += this._read_string_recursive(E), this.has_char_escapes && this._options.unescape_strings && (v = A(v)), this._input.peek() === E && (v += this._input.next()), v = v.replace(i.allLineBreaks, `
`), this._create_token(c.STRING, v);
    }
    return null;
  }, T.prototype._allow_regexp_or_xml = function(E) {
    return E.type === c.RESERVED && l(E.text, ["return", "case", "throw", "else", "do", "typeof", "yield"]) || E.type === c.END_EXPR && E.text === ")" && E.opened.previous.type === c.RESERVED && l(E.opened.previous.text, ["if", "while", "for"]) || l(E.type, [
      c.COMMENT,
      c.START_EXPR,
      c.START_BLOCK,
      c.START,
      c.END_BLOCK,
      c.OPERATOR,
      c.EQUALS,
      c.EOF,
      c.SEMICOLON,
      c.COMMA
    ]);
  }, T.prototype._read_regexp = function(E, v) {
    if (E === "/" && this._allow_regexp_or_xml(v)) {
      for (var p = this._input.next(), w = !1, s = !1; this._input.hasNext() && (w || s || this._input.peek() !== E) && !this._input.testChar(i.newline); )
        p += this._input.peek(), w ? w = !1 : (w = this._input.peek() === "\\", this._input.peek() === "[" ? s = !0 : this._input.peek() === "]" && (s = !1)), this._input.next();
      return this._input.peek() === E && (p += this._input.next(), p += this._input.read(i.identifier)), this._create_token(c.STRING, p);
    }
    return null;
  }, T.prototype._read_xml = function(E, v) {
    if (this._options.e4x && E === "<" && this._allow_regexp_or_xml(v)) {
      var p = "", w = this.__patterns.xml.read_match();
      if (w) {
        for (var s = w[2].replace(/^{\s+/, "{").replace(/\s+}$/, "}"), y = s.indexOf("{") === 0, O = 0; w; ) {
          var B = !!w[1], F = w[2], G = !!w[w.length - 1] || F.slice(0, 8) === "![CDATA[";
          if (!G && (F === s || y && F.replace(/^{\s+/, "{").replace(/\s+}$/, "}")) && (B ? --O : ++O), p += w[0], O <= 0)
            break;
          w = this.__patterns.xml.read_match();
        }
        return w || (p += this._input.match(/[\s\S]*/g)[0]), p = p.replace(i.allLineBreaks, `
`), this._create_token(c.STRING, p);
      }
    }
    return null;
  };
  function A(E) {
    for (var v = "", p = 0, w = new a(E), s = null; w.hasNext(); )
      if (s = w.match(/([\s]|[^\\]|\\\\)+/g), s && (v += s[0]), w.peek() === "\\") {
        if (w.next(), w.peek() === "x")
          s = w.match(/x([0-9A-Fa-f]{2})/g);
        else if (w.peek() === "u")
          s = w.match(/u([0-9A-Fa-f]{4})/g), s || (s = w.match(/u\{([0-9A-Fa-f]+)\}/g));
        else {
          v += "\\", w.hasNext() && (v += w.next());
          continue;
        }
        if (!s || (p = parseInt(s[1], 16), p > 126 && p <= 255 && s[0].indexOf("x") === 0))
          return E;
        p >= 0 && p < 32 || p > 1114111 ? v += "\\" + s[0] : p === 34 || p === 39 || p === 92 ? v += "\\" + String.fromCharCode(p) : v += String.fromCharCode(p);
      }
    return v;
  }
  return T.prototype._read_string_recursive = function(E, v, p) {
    var w, s;
    E === "'" ? s = this.__patterns.single_quote : E === '"' ? s = this.__patterns.double_quote : E === "`" ? s = this.__patterns.template_text : E === "}" && (s = this.__patterns.template_expression);
    for (var y = s.read(), O = ""; this._input.hasNext(); ) {
      if (O = this._input.next(), O === E || !v && i.newline.test(O)) {
        this._input.back();
        break;
      } else O === "\\" && this._input.hasNext() ? (w = this._input.peek(), w === "x" || w === "u" ? this.has_char_escapes = !0 : w === "\r" && this._input.peek(1) === `
` && this._input.next(), O += this._input.next()) : p && (p === "${" && O === "$" && this._input.peek() === "{" && (O += this._input.next()), p === O && (E === "`" ? O += this._read_string_recursive("}", v, "`") : O += this._read_string_recursive("`", v, "${"), this._input.hasNext() && (O += this._input.next())));
      O += s.read(), y += O;
    }
    return y;
  }, tt.Tokenizer = T, tt.TOKEN = c, tt.positionable_operators = N.slice(), tt.line_starters = d.slice(), tt;
}
var Li;
function Ao() {
  if (Li) return en;
  Li = 1;
  var a = ni().Output, t = Us().Token, n = Fs(), e = $s().Options, i = Tt().Tokenizer, r = Tt().line_starters, _ = Tt().positionable_operators, l = Tt().TOKEN;
  function c(s, y) {
    return y.indexOf(s) !== -1;
  }
  function g(s) {
    return s.replace(/^\s+/g, "");
  }
  function u(s) {
    for (var y = {}, O = 0; O < s.length; O++)
      y[s[O].replace(/-/g, "_")] = s[O];
    return y;
  }
  function f(s, y) {
    return s && s.type === l.RESERVED && s.text === y;
  }
  function m(s, y) {
    return s && s.type === l.RESERVED && c(s.text, y);
  }
  var N = ["case", "return", "do", "if", "throw", "else", "await", "break", "continue", "async"], x = ["before-newline", "after-newline", "preserve-newline"], k = u(x), d = [k.before_newline, k.preserve_newline], o = {
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
  function b(s, y) {
    y.multiline_frame || y.mode === o.ForInitializer || y.mode === o.Conditional || s.remove_indent(y.start_line_index);
  }
  function R(s) {
    s = s.replace(n.allLineBreaks, `
`);
    for (var y = [], O = s.indexOf(`
`); O !== -1; )
      y.push(s.substring(0, O)), s = s.substring(O + 1), O = s.indexOf(`
`);
    return s.length && y.push(s), y;
  }
  function T(s) {
    return s === o.ArrayLiteral;
  }
  function A(s) {
    return c(s, [o.Expression, o.ForInitializer, o.Conditional]);
  }
  function E(s, y) {
    for (var O = 0; O < s.length; O++) {
      var B = s[O].trim();
      if (B.charAt(0) !== y)
        return !1;
    }
    return !0;
  }
  function v(s, y) {
    for (var O = 0, B = s.length, F; O < B; O++)
      if (F = s[O], F && F.indexOf(y) !== 0)
        return !1;
    return !0;
  }
  function p(s, y) {
    y = y || {}, this._source_text = s || "", this._output = null, this._tokens = null, this._last_last_text = null, this._flags = null, this._previous_flags = null, this._flag_store = null, this._options = new e(y);
  }
  p.prototype.create_flags = function(s, y) {
    var O = 0;
    s && (O = s.indentation_level, !this._output.just_added_newline() && s.line_indent_level > O && (O = s.line_indent_level));
    var B = {
      mode: y,
      parent: s,
      last_token: s ? s.last_token : new t(l.START_BLOCK, ""),
      // last token text
      last_word: s ? s.last_word : "",
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
      indentation_level: O,
      alignment: 0,
      line_indent_level: s ? s.line_indent_level : O,
      start_line_index: this._output.get_line_number(),
      ternary_depth: 0
    };
    return B;
  }, p.prototype._reset = function(s) {
    var y = s.match(/^[\t ]*/)[0];
    this._last_last_text = "", this._output = new a(this._options, y), this._output.raw = this._options.test_output_raw, this._flag_store = [], this.set_mode(o.BlockStatement);
    var O = new i(s, this._options);
    return this._tokens = O.tokenize(), s;
  }, p.prototype.beautify = function() {
    if (this._options.disabled)
      return this._source_text;
    var s, y = this._reset(this._source_text), O = this._options.eol;
    this._options.eol === "auto" && (O = `
`, y && n.lineBreak.test(y || "") && (O = y.match(n.lineBreak)[0]));
    for (var B = this._tokens.next(); B; )
      this.handle_token(B), this._last_last_text = this._flags.last_token.text, this._flags.last_token = B, B = this._tokens.next();
    return s = this._output.get_code(O), s;
  }, p.prototype.handle_token = function(s, y) {
    s.type === l.START_EXPR ? this.handle_start_expr(s) : s.type === l.END_EXPR ? this.handle_end_expr(s) : s.type === l.START_BLOCK ? this.handle_start_block(s) : s.type === l.END_BLOCK ? this.handle_end_block(s) : s.type === l.WORD ? this.handle_word(s) : s.type === l.RESERVED ? this.handle_word(s) : s.type === l.SEMICOLON ? this.handle_semicolon(s) : s.type === l.STRING ? this.handle_string(s) : s.type === l.EQUALS ? this.handle_equals(s) : s.type === l.OPERATOR ? this.handle_operator(s) : s.type === l.COMMA ? this.handle_comma(s) : s.type === l.BLOCK_COMMENT ? this.handle_block_comment(s, y) : s.type === l.COMMENT ? this.handle_comment(s, y) : s.type === l.DOT ? this.handle_dot(s) : s.type === l.EOF ? this.handle_eof(s) : s.type === l.UNKNOWN ? this.handle_unknown(s, y) : this.handle_unknown(s, y);
  }, p.prototype.handle_whitespace_and_comments = function(s, y) {
    var O = s.newlines, B = this._options.keep_array_indentation && T(this._flags.mode);
    if (s.comments_before)
      for (var F = s.comments_before.next(); F; )
        this.handle_whitespace_and_comments(F, y), this.handle_token(F, y), F = s.comments_before.next();
    if (B)
      for (var G = 0; G < O; G += 1)
        this.print_newline(G > 0, y);
    else if (this._options.max_preserve_newlines && O > this._options.max_preserve_newlines && (O = this._options.max_preserve_newlines), this._options.preserve_newlines && O > 1) {
      this.print_newline(!1, y);
      for (var H = 1; H < O; H += 1)
        this.print_newline(!0, y);
    }
  };
  var w = ["async", "break", "continue", "return", "throw", "yield"];
  return p.prototype.allow_wrap_or_preserved_newline = function(s, y) {
    if (y = y === void 0 ? !1 : y, !this._output.just_added_newline()) {
      var O = this._options.preserve_newlines && s.newlines || y, B = c(this._flags.last_token.text, _) || c(s.text, _);
      if (B) {
        var F = c(this._flags.last_token.text, _) && c(this._options.operator_position, d) || c(s.text, _);
        O = O && F;
      }
      if (O)
        this.print_newline(!1, !0);
      else if (this._options.wrap_line_length) {
        if (m(this._flags.last_token, w))
          return;
        this._output.set_wrap_point();
      }
    }
  }, p.prototype.print_newline = function(s, y) {
    if (!y && this._flags.last_token.text !== ";" && this._flags.last_token.text !== "," && this._flags.last_token.text !== "=" && (this._flags.last_token.type !== l.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++"))
      for (var O = this._tokens.peek(); this._flags.mode === o.Statement && !(this._flags.if_block && f(O, "else")) && !this._flags.do_block; )
        this.restore_mode();
    this._output.add_new_line(s) && (this._flags.multiline_frame = !0);
  }, p.prototype.print_token_line_indentation = function(s) {
    this._output.just_added_newline() && (this._options.keep_array_indentation && s.newlines && (s.text === "[" || T(this._flags.mode)) ? (this._output.current_line.set_indent(-1), this._output.current_line.push(s.whitespace_before), this._output.space_before_token = !1) : this._output.set_indent(this._flags.indentation_level, this._flags.alignment) && (this._flags.line_indent_level = this._flags.indentation_level));
  }, p.prototype.print_token = function(s) {
    if (this._output.raw) {
      this._output.add_raw_token(s);
      return;
    }
    if (this._options.comma_first && s.previous && s.previous.type === l.COMMA && this._output.just_added_newline() && this._output.previous_line.last() === ",") {
      var y = this._output.previous_line.pop();
      this._output.previous_line.is_empty() && (this._output.previous_line.push(y), this._output.trim(!0), this._output.current_line.pop(), this._output.trim()), this.print_token_line_indentation(s), this._output.add_token(","), this._output.space_before_token = !0;
    }
    this.print_token_line_indentation(s), this._output.non_breaking_space = !0, this._output.add_token(s.text), this._output.previous_token_wrapped && (this._flags.multiline_frame = !0);
  }, p.prototype.indent = function() {
    this._flags.indentation_level += 1, this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }, p.prototype.deindent = function() {
    this._flags.indentation_level > 0 && (!this._flags.parent || this._flags.indentation_level > this._flags.parent.indentation_level) && (this._flags.indentation_level -= 1, this._output.set_indent(this._flags.indentation_level, this._flags.alignment));
  }, p.prototype.set_mode = function(s) {
    this._flags ? (this._flag_store.push(this._flags), this._previous_flags = this._flags) : this._previous_flags = this.create_flags(null, s), this._flags = this.create_flags(this._previous_flags, s), this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }, p.prototype.restore_mode = function() {
    this._flag_store.length > 0 && (this._previous_flags = this._flags, this._flags = this._flag_store.pop(), this._previous_flags.mode === o.Statement && b(this._output, this._previous_flags), this._output.set_indent(this._flags.indentation_level, this._flags.alignment));
  }, p.prototype.start_of_object_property = function() {
    return this._flags.parent.mode === o.ObjectLiteral && this._flags.mode === o.Statement && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || m(this._flags.last_token, ["get", "set"]));
  }, p.prototype.start_of_statement = function(s) {
    var y = !1;
    return y = y || m(this._flags.last_token, ["var", "let", "const"]) && s.type === l.WORD, y = y || f(this._flags.last_token, "do"), y = y || !(this._flags.parent.mode === o.ObjectLiteral && this._flags.mode === o.Statement) && m(this._flags.last_token, w) && !s.newlines, y = y || f(this._flags.last_token, "else") && !(f(s, "if") && !s.comments_before), y = y || this._flags.last_token.type === l.END_EXPR && (this._previous_flags.mode === o.ForInitializer || this._previous_flags.mode === o.Conditional), y = y || this._flags.last_token.type === l.WORD && this._flags.mode === o.BlockStatement && !this._flags.in_case && !(s.text === "--" || s.text === "++") && this._last_last_text !== "function" && s.type !== l.WORD && s.type !== l.RESERVED, y = y || this._flags.mode === o.ObjectLiteral && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || m(this._flags.last_token, ["get", "set"])), y ? (this.set_mode(o.Statement), this.indent(), this.handle_whitespace_and_comments(s, !0), this.start_of_object_property() || this.allow_wrap_or_preserved_newline(
      s,
      m(s, ["do", "for", "if", "while"])
    ), !0) : !1;
  }, p.prototype.handle_start_expr = function(s) {
    this.start_of_statement(s) || this.handle_whitespace_and_comments(s);
    var y = o.Expression;
    if (s.text === "[") {
      if (this._flags.last_token.type === l.WORD || this._flags.last_token.text === ")") {
        m(this._flags.last_token, r) && (this._output.space_before_token = !0), this.print_token(s), this.set_mode(y), this.indent(), this._options.space_in_paren && (this._output.space_before_token = !0);
        return;
      }
      y = o.ArrayLiteral, T(this._flags.mode) && (this._flags.last_token.text === "[" || this._flags.last_token.text === "," && (this._last_last_text === "]" || this._last_last_text === "}")) && (this._options.keep_array_indentation || this.print_newline()), c(this._flags.last_token.type, [l.START_EXPR, l.END_EXPR, l.WORD, l.OPERATOR, l.DOT]) || (this._output.space_before_token = !0);
    } else {
      if (this._flags.last_token.type === l.RESERVED)
        this._flags.last_token.text === "for" ? (this._output.space_before_token = this._options.space_before_conditional, y = o.ForInitializer) : c(this._flags.last_token.text, ["if", "while", "switch"]) ? (this._output.space_before_token = this._options.space_before_conditional, y = o.Conditional) : c(this._flags.last_word, ["await", "async"]) ? this._output.space_before_token = !0 : this._flags.last_token.text === "import" && s.whitespace_before === "" ? this._output.space_before_token = !1 : (c(this._flags.last_token.text, r) || this._flags.last_token.text === "catch") && (this._output.space_before_token = !0);
      else if (this._flags.last_token.type === l.EQUALS || this._flags.last_token.type === l.OPERATOR)
        this.start_of_object_property() || this.allow_wrap_or_preserved_newline(s);
      else if (this._flags.last_token.type === l.WORD) {
        this._output.space_before_token = !1;
        var O = this._tokens.peek(-3);
        if (this._options.space_after_named_function && O) {
          var B = this._tokens.peek(-4);
          m(O, ["async", "function"]) || O.text === "*" && m(B, ["async", "function"]) ? this._output.space_before_token = !0 : this._flags.mode === o.ObjectLiteral ? (O.text === "{" || O.text === "," || O.text === "*" && (B.text === "{" || B.text === ",")) && (this._output.space_before_token = !0) : this._flags.parent && this._flags.parent.class_start_block && (this._output.space_before_token = !0);
        }
      } else
        this.allow_wrap_or_preserved_newline(s);
      (this._flags.last_token.type === l.RESERVED && (this._flags.last_word === "function" || this._flags.last_word === "typeof") || this._flags.last_token.text === "*" && (c(this._last_last_text, ["function", "yield"]) || this._flags.mode === o.ObjectLiteral && c(this._last_last_text, ["{", ","]))) && (this._output.space_before_token = this._options.space_after_anon_function);
    }
    this._flags.last_token.text === ";" || this._flags.last_token.type === l.START_BLOCK ? this.print_newline() : (this._flags.last_token.type === l.END_EXPR || this._flags.last_token.type === l.START_EXPR || this._flags.last_token.type === l.END_BLOCK || this._flags.last_token.text === "." || this._flags.last_token.type === l.COMMA) && this.allow_wrap_or_preserved_newline(s, s.newlines), this.print_token(s), this.set_mode(y), this._options.space_in_paren && (this._output.space_before_token = !0), this.indent();
  }, p.prototype.handle_end_expr = function(s) {
    for (; this._flags.mode === o.Statement; )
      this.restore_mode();
    this.handle_whitespace_and_comments(s), this._flags.multiline_frame && this.allow_wrap_or_preserved_newline(
      s,
      s.text === "]" && T(this._flags.mode) && !this._options.keep_array_indentation
    ), this._options.space_in_paren && (this._flags.last_token.type === l.START_EXPR && !this._options.space_in_empty_paren ? (this._output.trim(), this._output.space_before_token = !1) : this._output.space_before_token = !0), this.deindent(), this.print_token(s), this.restore_mode(), b(this._output, this._previous_flags), this._flags.do_while && this._previous_flags.mode === o.Conditional && (this._previous_flags.mode = o.Expression, this._flags.do_block = !1, this._flags.do_while = !1);
  }, p.prototype.handle_start_block = function(s) {
    this.handle_whitespace_and_comments(s);
    var y = this._tokens.peek(), O = this._tokens.peek(1);
    this._flags.last_word === "switch" && this._flags.last_token.type === l.END_EXPR ? (this.set_mode(o.BlockStatement), this._flags.in_case_statement = !0) : this._flags.case_body ? this.set_mode(o.BlockStatement) : O && (c(O.text, [":", ","]) && c(y.type, [l.STRING, l.WORD, l.RESERVED]) || c(y.text, ["get", "set", "..."]) && c(O.type, [l.WORD, l.RESERVED])) ? c(this._last_last_text, ["class", "interface"]) && !c(O.text, [":", ","]) ? this.set_mode(o.BlockStatement) : this.set_mode(o.ObjectLiteral) : this._flags.last_token.type === l.OPERATOR && this._flags.last_token.text === "=>" ? this.set_mode(o.BlockStatement) : c(this._flags.last_token.type, [l.EQUALS, l.START_EXPR, l.COMMA, l.OPERATOR]) || m(this._flags.last_token, ["return", "throw", "import", "default"]) ? this.set_mode(o.ObjectLiteral) : this.set_mode(o.BlockStatement), this._flags.last_token && m(this._flags.last_token.previous, ["class", "extends"]) && (this._flags.class_start_block = !0);
    var B = !y.comments_before && y.text === "}", F = B && this._flags.last_word === "function" && this._flags.last_token.type === l.END_EXPR;
    if (this._options.brace_preserve_inline) {
      var G = 0, H = null;
      this._flags.inline_frame = !0;
      do
        if (G += 1, H = this._tokens.peek(G - 1), H.newlines) {
          this._flags.inline_frame = !1;
          break;
        }
      while (H.type !== l.EOF && !(H.type === l.END_BLOCK && H.opened === s));
    }
    (this._options.brace_style === "expand" || this._options.brace_style === "none" && s.newlines) && !this._flags.inline_frame ? this._flags.last_token.type !== l.OPERATOR && (F || this._flags.last_token.type === l.EQUALS || m(this._flags.last_token, N) && this._flags.last_token.text !== "else") ? this._output.space_before_token = !0 : this.print_newline(!1, !0) : (T(this._previous_flags.mode) && (this._flags.last_token.type === l.START_EXPR || this._flags.last_token.type === l.COMMA) && ((this._flags.last_token.type === l.COMMA || this._options.space_in_paren) && (this._output.space_before_token = !0), (this._flags.last_token.type === l.COMMA || this._flags.last_token.type === l.START_EXPR && this._flags.inline_frame) && (this.allow_wrap_or_preserved_newline(s), this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame, this._flags.multiline_frame = !1)), this._flags.last_token.type !== l.OPERATOR && this._flags.last_token.type !== l.START_EXPR && (c(this._flags.last_token.type, [l.START_BLOCK, l.SEMICOLON]) && !this._flags.inline_frame ? this.print_newline() : this._output.space_before_token = !0)), this.print_token(s), this.indent(), !B && !(this._options.brace_preserve_inline && this._flags.inline_frame) && this.print_newline();
  }, p.prototype.handle_end_block = function(s) {
    for (this.handle_whitespace_and_comments(s); this._flags.mode === o.Statement; )
      this.restore_mode();
    var y = this._flags.last_token.type === l.START_BLOCK;
    this._flags.inline_frame && !y ? this._output.space_before_token = !0 : this._options.brace_style === "expand" ? y || this.print_newline() : y || (T(this._flags.mode) && this._options.keep_array_indentation ? (this._options.keep_array_indentation = !1, this.print_newline(), this._options.keep_array_indentation = !0) : this.print_newline()), this.restore_mode(), this.print_token(s);
  }, p.prototype.handle_word = function(s) {
    if (s.type === l.RESERVED) {
      if (c(s.text, ["set", "get"]) && this._flags.mode !== o.ObjectLiteral)
        s.type = l.WORD;
      else if (s.text === "import" && c(this._tokens.peek().text, ["(", "."]))
        s.type = l.WORD;
      else if (c(s.text, ["as", "from"]) && !this._flags.import_block)
        s.type = l.WORD;
      else if (this._flags.mode === o.ObjectLiteral) {
        var y = this._tokens.peek();
        y.text === ":" && (s.type = l.WORD);
      }
    }
    if (this.start_of_statement(s) ? m(this._flags.last_token, ["var", "let", "const"]) && s.type === l.WORD && (this._flags.declaration_statement = !0) : s.newlines && !A(this._flags.mode) && (this._flags.last_token.type !== l.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++") && this._flags.last_token.type !== l.EQUALS && (this._options.preserve_newlines || !m(this._flags.last_token, ["var", "let", "const", "set", "get"])) ? (this.handle_whitespace_and_comments(s), this.print_newline()) : this.handle_whitespace_and_comments(s), this._flags.do_block && !this._flags.do_while)
      if (f(s, "while")) {
        this._output.space_before_token = !0, this.print_token(s), this._output.space_before_token = !0, this._flags.do_while = !0;
        return;
      } else
        this.print_newline(), this._flags.do_block = !1;
    if (this._flags.if_block)
      if (!this._flags.else_block && f(s, "else"))
        this._flags.else_block = !0;
      else {
        for (; this._flags.mode === o.Statement; )
          this.restore_mode();
        this._flags.if_block = !1, this._flags.else_block = !1;
      }
    if (this._flags.in_case_statement && m(s, ["case", "default"])) {
      this.print_newline(), !this._flags.case_block && (this._flags.case_body || this._options.jslint_happy) && this.deindent(), this._flags.case_body = !1, this.print_token(s), this._flags.in_case = !0;
      return;
    }
    if ((this._flags.last_token.type === l.COMMA || this._flags.last_token.type === l.START_EXPR || this._flags.last_token.type === l.EQUALS || this._flags.last_token.type === l.OPERATOR) && !this.start_of_object_property() && !// start of object property is different for numeric values with +/- prefix operators
    (c(this._flags.last_token.text, ["+", "-"]) && this._last_last_text === ":" && this._flags.parent.mode === o.ObjectLiteral) && this.allow_wrap_or_preserved_newline(s), f(s, "function")) {
      (c(this._flags.last_token.text, ["}", ";"]) || this._output.just_added_newline() && !(c(this._flags.last_token.text, ["(", "[", "{", ":", "=", ","]) || this._flags.last_token.type === l.OPERATOR)) && !this._output.just_added_blankline() && !s.comments_before && (this.print_newline(), this.print_newline(!0)), this._flags.last_token.type === l.RESERVED || this._flags.last_token.type === l.WORD ? m(this._flags.last_token, ["get", "set", "new", "export"]) || m(this._flags.last_token, w) ? this._output.space_before_token = !0 : f(this._flags.last_token, "default") && this._last_last_text === "export" ? this._output.space_before_token = !0 : this._flags.last_token.text === "declare" ? this._output.space_before_token = !0 : this.print_newline() : this._flags.last_token.type === l.OPERATOR || this._flags.last_token.text === "=" ? this._output.space_before_token = !0 : !this._flags.multiline_frame && (A(this._flags.mode) || T(this._flags.mode)) || this.print_newline(), this.print_token(s), this._flags.last_word = s.text;
      return;
    }
    var O = "NONE";
    if (this._flags.last_token.type === l.END_BLOCK ? this._previous_flags.inline_frame ? O = "SPACE" : m(s, ["else", "catch", "finally", "from"]) ? this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && s.newlines ? O = "NEWLINE" : (O = "SPACE", this._output.space_before_token = !0) : O = "NEWLINE" : this._flags.last_token.type === l.SEMICOLON && this._flags.mode === o.BlockStatement ? O = "NEWLINE" : this._flags.last_token.type === l.SEMICOLON && A(this._flags.mode) ? O = "SPACE" : this._flags.last_token.type === l.STRING ? O = "NEWLINE" : this._flags.last_token.type === l.RESERVED || this._flags.last_token.type === l.WORD || this._flags.last_token.text === "*" && (c(this._last_last_text, ["function", "yield"]) || this._flags.mode === o.ObjectLiteral && c(this._last_last_text, ["{", ","])) ? O = "SPACE" : this._flags.last_token.type === l.START_BLOCK ? this._flags.inline_frame ? O = "SPACE" : O = "NEWLINE" : this._flags.last_token.type === l.END_EXPR && (this._output.space_before_token = !0, O = "NEWLINE"), m(s, r) && this._flags.last_token.text !== ")" && (this._flags.inline_frame || this._flags.last_token.text === "else" || this._flags.last_token.text === "export" ? O = "SPACE" : O = "NEWLINE"), m(s, ["else", "catch", "finally"]))
      if ((!(this._flags.last_token.type === l.END_BLOCK && this._previous_flags.mode === o.BlockStatement) || this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && s.newlines) && !this._flags.inline_frame)
        this.print_newline();
      else {
        this._output.trim(!0);
        var B = this._output.current_line;
        B.last() !== "}" && this.print_newline(), this._output.space_before_token = !0;
      }
    else O === "NEWLINE" ? m(this._flags.last_token, N) ? this._output.space_before_token = !0 : this._flags.last_token.text === "declare" && m(s, ["var", "let", "const"]) ? this._output.space_before_token = !0 : this._flags.last_token.type !== l.END_EXPR ? (this._flags.last_token.type !== l.START_EXPR || !m(s, ["var", "let", "const"])) && this._flags.last_token.text !== ":" && (f(s, "if") && f(s.previous, "else") ? this._output.space_before_token = !0 : this.print_newline()) : m(s, r) && this._flags.last_token.text !== ")" && this.print_newline() : this._flags.multiline_frame && T(this._flags.mode) && this._flags.last_token.text === "," && this._last_last_text === "}" ? this.print_newline() : O === "SPACE" && (this._output.space_before_token = !0);
    s.previous && (s.previous.type === l.WORD || s.previous.type === l.RESERVED) && (this._output.space_before_token = !0), this.print_token(s), this._flags.last_word = s.text, s.type === l.RESERVED && (s.text === "do" ? this._flags.do_block = !0 : s.text === "if" ? this._flags.if_block = !0 : s.text === "import" ? this._flags.import_block = !0 : this._flags.import_block && f(s, "from") && (this._flags.import_block = !1));
  }, p.prototype.handle_semicolon = function(s) {
    this.start_of_statement(s) ? this._output.space_before_token = !1 : this.handle_whitespace_and_comments(s);
    for (var y = this._tokens.peek(); this._flags.mode === o.Statement && !(this._flags.if_block && f(y, "else")) && !this._flags.do_block; )
      this.restore_mode();
    this._flags.import_block && (this._flags.import_block = !1), this.print_token(s);
  }, p.prototype.handle_string = function(s) {
    s.text.startsWith("`") && s.newlines === 0 && s.whitespace_before === "" && (s.previous.text === ")" || this._flags.last_token.type === l.WORD) || (this.start_of_statement(s) ? this._output.space_before_token = !0 : (this.handle_whitespace_and_comments(s), this._flags.last_token.type === l.RESERVED || this._flags.last_token.type === l.WORD || this._flags.inline_frame ? this._output.space_before_token = !0 : this._flags.last_token.type === l.COMMA || this._flags.last_token.type === l.START_EXPR || this._flags.last_token.type === l.EQUALS || this._flags.last_token.type === l.OPERATOR ? this.start_of_object_property() || this.allow_wrap_or_preserved_newline(s) : s.text.startsWith("`") && this._flags.last_token.type === l.END_EXPR && (s.previous.text === "]" || s.previous.text === ")") && s.newlines === 0 ? this._output.space_before_token = !0 : this.print_newline())), this.print_token(s);
  }, p.prototype.handle_equals = function(s) {
    this.start_of_statement(s) || this.handle_whitespace_and_comments(s), this._flags.declaration_statement && (this._flags.declaration_assignment = !0), this._output.space_before_token = !0, this.print_token(s), this._output.space_before_token = !0;
  }, p.prototype.handle_comma = function(s) {
    this.handle_whitespace_and_comments(s, !0), this.print_token(s), this._output.space_before_token = !0, this._flags.declaration_statement ? (A(this._flags.parent.mode) && (this._flags.declaration_assignment = !1), this._flags.declaration_assignment ? (this._flags.declaration_assignment = !1, this.print_newline(!1, !0)) : this._options.comma_first && this.allow_wrap_or_preserved_newline(s)) : this._flags.mode === o.ObjectLiteral || this._flags.mode === o.Statement && this._flags.parent.mode === o.ObjectLiteral ? (this._flags.mode === o.Statement && this.restore_mode(), this._flags.inline_frame || this.print_newline()) : this._options.comma_first && this.allow_wrap_or_preserved_newline(s);
  }, p.prototype.handle_operator = function(s) {
    var y = s.text === "*" && (m(this._flags.last_token, ["function", "yield"]) || c(this._flags.last_token.type, [l.START_BLOCK, l.COMMA, l.END_BLOCK, l.SEMICOLON])), O = c(s.text, ["-", "+"]) && (c(this._flags.last_token.type, [l.START_BLOCK, l.START_EXPR, l.EQUALS, l.OPERATOR]) || c(this._flags.last_token.text, r) || this._flags.last_token.text === ",");
    if (!this.start_of_statement(s)) {
      var B = !y;
      this.handle_whitespace_and_comments(s, B);
    }
    if (s.text === "*" && this._flags.last_token.type === l.DOT) {
      this.print_token(s);
      return;
    }
    if (s.text === "::") {
      this.print_token(s);
      return;
    }
    if (c(s.text, ["-", "+"]) && this.start_of_object_property()) {
      this.print_token(s);
      return;
    }
    if (this._flags.last_token.type === l.OPERATOR && c(this._options.operator_position, d) && this.allow_wrap_or_preserved_newline(s), s.text === ":" && this._flags.in_case) {
      this.print_token(s), this._flags.in_case = !1, this._flags.case_body = !0, this._tokens.peek().type !== l.START_BLOCK ? (this.indent(), this.print_newline(), this._flags.case_block = !1) : (this._flags.case_block = !0, this._output.space_before_token = !0);
      return;
    }
    var F = !0, G = !0, H = !1;
    if (s.text === ":" ? this._flags.ternary_depth === 0 ? F = !1 : (this._flags.ternary_depth -= 1, H = !0) : s.text === "?" && (this._flags.ternary_depth += 1), !O && !y && this._options.preserve_newlines && c(s.text, _)) {
      var j = s.text === ":", oe = j && H, Oe = j && !H;
      switch (this._options.operator_position) {
        case k.before_newline:
          this._output.space_before_token = !Oe, this.print_token(s), (!j || oe) && this.allow_wrap_or_preserved_newline(s), this._output.space_before_token = !0;
          return;
        case k.after_newline:
          this._output.space_before_token = !0, !j || oe ? this._tokens.peek().newlines ? this.print_newline(!1, !0) : this.allow_wrap_or_preserved_newline(s) : this._output.space_before_token = !1, this.print_token(s), this._output.space_before_token = !0;
          return;
        case k.preserve_newline:
          Oe || this.allow_wrap_or_preserved_newline(s), F = !(this._output.just_added_newline() || Oe), this._output.space_before_token = F, this.print_token(s), this._output.space_before_token = !0;
          return;
      }
    }
    if (y) {
      this.allow_wrap_or_preserved_newline(s), F = !1;
      var Ce = this._tokens.peek();
      G = Ce && c(Ce.type, [l.WORD, l.RESERVED]);
    } else if (s.text === "...")
      this.allow_wrap_or_preserved_newline(s), F = this._flags.last_token.type === l.START_BLOCK, G = !1;
    else if (c(s.text, ["--", "++", "!", "~"]) || O) {
      if ((this._flags.last_token.type === l.COMMA || this._flags.last_token.type === l.START_EXPR) && this.allow_wrap_or_preserved_newline(s), F = !1, G = !1, s.newlines && (s.text === "--" || s.text === "++" || s.text === "~")) {
        var xe = m(this._flags.last_token, N) && s.newlines;
        xe && (this._previous_flags.if_block || this._previous_flags.else_block) && this.restore_mode(), this.print_newline(xe, !0);
      }
      this._flags.last_token.text === ";" && A(this._flags.mode) && (F = !0), this._flags.last_token.type === l.RESERVED ? F = !0 : this._flags.last_token.type === l.END_EXPR ? F = !(this._flags.last_token.text === "]" && (s.text === "--" || s.text === "++")) : this._flags.last_token.type === l.OPERATOR && (F = c(s.text, ["--", "-", "++", "+"]) && c(this._flags.last_token.text, ["--", "-", "++", "+"]), c(s.text, ["+", "-"]) && c(this._flags.last_token.text, ["--", "++"]) && (G = !0)), (this._flags.mode === o.BlockStatement && !this._flags.inline_frame || this._flags.mode === o.Statement) && (this._flags.last_token.text === "{" || this._flags.last_token.text === ";") && this.print_newline();
    }
    this._output.space_before_token = this._output.space_before_token || F, this.print_token(s), this._output.space_before_token = G;
  }, p.prototype.handle_block_comment = function(s, y) {
    if (this._output.raw) {
      this._output.add_raw_token(s), s.directives && s.directives.preserve === "end" && (this._output.raw = this._options.test_output_raw);
      return;
    }
    if (s.directives) {
      this.print_newline(!1, y), this.print_token(s), s.directives.preserve === "start" && (this._output.raw = !0), this.print_newline(!1, !0);
      return;
    }
    if (!n.newline.test(s.text) && !s.newlines) {
      this._output.space_before_token = !0, this.print_token(s), this._output.space_before_token = !0;
      return;
    } else
      this.print_block_commment(s, y);
  }, p.prototype.print_block_commment = function(s, y) {
    var O = R(s.text), B, F = !1, G = !1, H = s.whitespace_before, j = H.length;
    if (this.print_newline(!1, y), this.print_token_line_indentation(s), this._output.add_token(O[0]), this.print_newline(!1, y), O.length > 1) {
      for (O = O.slice(1), F = E(O, "*"), G = v(O, H), F && (this._flags.alignment = 1), B = 0; B < O.length; B++)
        F ? (this.print_token_line_indentation(s), this._output.add_token(g(O[B]))) : G && O[B] ? (this.print_token_line_indentation(s), this._output.add_token(O[B].substring(j))) : (this._output.current_line.set_indent(-1), this._output.add_token(O[B])), this.print_newline(!1, y);
      this._flags.alignment = 0;
    }
  }, p.prototype.handle_comment = function(s, y) {
    s.newlines ? this.print_newline(!1, y) : this._output.trim(!0), this._output.space_before_token = !0, this.print_token(s), this.print_newline(!1, y);
  }, p.prototype.handle_dot = function(s) {
    this.start_of_statement(s) || this.handle_whitespace_and_comments(s, !0), this._flags.last_token.text.match("^[0-9]+$") && (this._output.space_before_token = !0), m(this._flags.last_token, N) ? this._output.space_before_token = !1 : this.allow_wrap_or_preserved_newline(
      s,
      this._flags.last_token.text === ")" && this._options.break_chained_methods
    ), this._options.unindent_chained_methods && this._output.just_added_newline() && this.deindent(), this.print_token(s);
  }, p.prototype.handle_unknown = function(s, y) {
    this.print_token(s), s.text[s.text.length - 1] === `
` && this.print_newline(!1, y);
  }, p.prototype.handle_eof = function(s) {
    for (; this._flags.mode === o.Statement; )
      this.restore_mode();
    this.handle_whitespace_and_comments(s);
  }, en.Beautifier = p, en;
}
var Di;
function Co() {
  if (Di) return Nt.exports;
  Di = 1;
  var a = Ao().Beautifier, t = $s().Options;
  function n(e, i) {
    var r = new a(e, i);
    return r.beautify();
  }
  return Nt.exports = n, Nt.exports.defaultOptions = function() {
    return new t();
  }, Nt.exports;
}
var St = { exports: {} }, dn = {}, pn = {}, Bi;
function Ks() {
  if (Bi) return pn;
  Bi = 1;
  var a = ii().Options;
  function t(n) {
    a.call(this, n, "css"), this.selector_separator_newline = this._get_boolean("selector_separator_newline", !0), this.newline_between_rules = this._get_boolean("newline_between_rules", !0);
    var e = this._get_boolean("space_around_selector_separator");
    this.space_around_combinator = this._get_boolean("space_around_combinator") || e;
    var i = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
    this.brace_style = "collapse";
    for (var r = 0; r < i.length; r++)
      i[r] !== "expand" ? this.brace_style = "collapse" : this.brace_style = i[r];
  }
  return t.prototype = new a(), pn.Options = t, pn;
}
var Pi;
function Io() {
  if (Pi) return dn;
  Pi = 1;
  var a = Ks().Options, t = ni().Output, n = si().InputScanner, e = ai().Directives, i = new e(/\/\*/, /\*\//), r = /\r\n|[\r\n]/, _ = /\r\n|[\r\n]/g, l = /\s/, c = /(?:\s|\n)+/g, g = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g, u = /\/\/(?:[^\n\r\u2028\u2029]*)/g;
  function f(m, N) {
    this._source_text = m || "", this._options = new a(N), this._ch = null, this._input = null, this.NESTED_AT_RULE = {
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
  return f.prototype.eatString = function(m) {
    var N = "";
    for (this._ch = this._input.next(); this._ch; ) {
      if (N += this._ch, this._ch === "\\")
        N += this._input.next();
      else if (m.indexOf(this._ch) !== -1 || this._ch === `
`)
        break;
      this._ch = this._input.next();
    }
    return N;
  }, f.prototype.eatWhitespace = function(m) {
    for (var N = l.test(this._input.peek()), x = 0; l.test(this._input.peek()); )
      this._ch = this._input.next(), m && this._ch === `
` && (x === 0 || x < this._options.max_preserve_newlines) && (x++, this._output.add_new_line(!0));
    return N;
  }, f.prototype.foundNestedPseudoClass = function() {
    for (var m = 0, N = 1, x = this._input.peek(N); x; ) {
      if (x === "{")
        return !0;
      if (x === "(")
        m += 1;
      else if (x === ")") {
        if (m === 0)
          return !1;
        m -= 1;
      } else if (x === ";" || x === "}")
        return !1;
      N++, x = this._input.peek(N);
    }
    return !1;
  }, f.prototype.print_string = function(m) {
    this._output.set_indent(this._indentLevel), this._output.non_breaking_space = !0, this._output.add_token(m);
  }, f.prototype.preserveSingleSpace = function(m) {
    m && (this._output.space_before_token = !0);
  }, f.prototype.indent = function() {
    this._indentLevel++;
  }, f.prototype.outdent = function() {
    this._indentLevel > 0 && this._indentLevel--;
  }, f.prototype.beautify = function() {
    if (this._options.disabled)
      return this._source_text;
    var m = this._source_text, N = this._options.eol;
    N === "auto" && (N = `
`, m && r.test(m || "") && (N = m.match(r)[0])), m = m.replace(_, `
`);
    var x = m.match(/^[\t ]*/)[0];
    this._output = new t(this._options, x), this._input = new n(m), this._indentLevel = 0, this._nestedLevel = 0, this._ch = null;
    for (var k = 0, d = !1, o = !1, b = !1, R = !1, T = !1, A = this._ch, E = !1, v, p, w; v = this._input.read(c), p = v !== "", w = A, this._ch = this._input.next(), this._ch === "\\" && this._input.hasNext() && (this._ch += this._input.next()), A = this._ch, this._ch; )
      if (this._ch === "/" && this._input.peek() === "*") {
        this._output.add_new_line(), this._input.back();
        var s = this._input.read(g), y = i.get_directives(s);
        y && y.ignore === "start" && (s += i.readIgnored(this._input)), this.print_string(s), this.eatWhitespace(!0), this._output.add_new_line();
      } else if (this._ch === "/" && this._input.peek() === "/")
        this._output.space_before_token = !0, this._input.back(), this.print_string(this._input.read(u)), this.eatWhitespace(!0);
      else if (this._ch === "$") {
        this.preserveSingleSpace(p), this.print_string(this._ch);
        var O = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
        O.match(/[ :]$/) && (O = this.eatString(": ").replace(/\s+$/, ""), this.print_string(O), this._output.space_before_token = !0), k === 0 && O.indexOf(":") !== -1 && (o = !0, this.indent());
      } else if (this._ch === "@")
        if (this.preserveSingleSpace(p), this._input.peek() === "{")
          this.print_string(this._ch + this.eatString("}"));
        else {
          this.print_string(this._ch);
          var B = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
          B.match(/[ :]$/) && (B = this.eatString(": ").replace(/\s+$/, ""), this.print_string(B), this._output.space_before_token = !0), k === 0 && B.indexOf(":") !== -1 ? (o = !0, this.indent()) : B in this.NESTED_AT_RULE ? (this._nestedLevel += 1, B in this.CONDITIONAL_GROUP_RULE && (b = !0)) : k === 0 && !o && (R = !0);
        }
      else if (this._ch === "#" && this._input.peek() === "{")
        this.preserveSingleSpace(p), this.print_string(this._ch + this.eatString("}"));
      else if (this._ch === "{")
        o && (o = !1, this.outdent()), R = !1, b ? (b = !1, d = this._indentLevel >= this._nestedLevel) : d = this._indentLevel >= this._nestedLevel - 1, this._options.newline_between_rules && d && this._output.previous_line && this._output.previous_line.item(-1) !== "{" && this._output.ensure_empty_line_above("/", ","), this._output.space_before_token = !0, this._options.brace_style === "expand" ? (this._output.add_new_line(), this.print_string(this._ch), this.indent(), this._output.set_indent(this._indentLevel)) : (w === "(" ? this._output.space_before_token = !1 : w !== "," && this.indent(), this.print_string(this._ch)), this.eatWhitespace(!0), this._output.add_new_line();
      else if (this._ch === "}")
        this.outdent(), this._output.add_new_line(), w === "{" && this._output.trim(!0), o && (this.outdent(), o = !1), this.print_string(this._ch), d = !1, this._nestedLevel && this._nestedLevel--, this.eatWhitespace(!0), this._output.add_new_line(), this._options.newline_between_rules && !this._output.just_added_blankline() && this._input.peek() !== "}" && this._output.add_new_line(!0), this._input.peek() === ")" && (this._output.trim(!0), this._options.brace_style === "expand" && this._output.add_new_line(!0));
      else if (this._ch === ":") {
        for (var F = 0; F < this.NON_SEMICOLON_NEWLINE_PROPERTY.length; F++)
          if (this._input.lookBack(this.NON_SEMICOLON_NEWLINE_PROPERTY[F])) {
            E = !0;
            break;
          }
        (d || b) && !(this._input.lookBack("&") || this.foundNestedPseudoClass()) && !this._input.lookBack("(") && !R && k === 0 ? (this.print_string(":"), o || (o = !0, this._output.space_before_token = !0, this.eatWhitespace(!0), this.indent())) : (this._input.lookBack(" ") && (this._output.space_before_token = !0), this._input.peek() === ":" ? (this._ch = this._input.next(), this.print_string("::")) : this.print_string(":"));
      } else if (this._ch === '"' || this._ch === "'") {
        var G = w === '"' || w === "'";
        this.preserveSingleSpace(G || p), this.print_string(this._ch + this.eatString(this._ch)), this.eatWhitespace(!0);
      } else if (this._ch === ";")
        E = !1, k === 0 ? (o && (this.outdent(), o = !1), R = !1, this.print_string(this._ch), this.eatWhitespace(!0), this._input.peek() !== "/" && this._output.add_new_line()) : (this.print_string(this._ch), this.eatWhitespace(!0), this._output.space_before_token = !0);
      else if (this._ch === "(")
        if (this._input.lookBack("url"))
          this.print_string(this._ch), this.eatWhitespace(), k++, this.indent(), this._ch = this._input.next(), this._ch === ")" || this._ch === '"' || this._ch === "'" ? this._input.back() : this._ch && (this.print_string(this._ch + this.eatString(")")), k && (k--, this.outdent()));
        else {
          var H = !1;
          this._input.lookBack("with") && (H = !0), this.preserveSingleSpace(p || H), this.print_string(this._ch), o && w === "$" && this._options.selector_separator_newline ? (this._output.add_new_line(), T = !0) : (this.eatWhitespace(), k++, this.indent());
        }
      else if (this._ch === ")")
        k && (k--, this.outdent()), T && this._input.peek() === ";" && this._options.selector_separator_newline && (T = !1, this.outdent(), this._output.add_new_line()), this.print_string(this._ch);
      else if (this._ch === ",")
        this.print_string(this._ch), this.eatWhitespace(!0), this._options.selector_separator_newline && (!o || T) && k === 0 && !R ? this._output.add_new_line() : this._output.space_before_token = !0;
      else if ((this._ch === ">" || this._ch === "+" || this._ch === "~") && !o && k === 0)
        this._options.space_around_combinator ? (this._output.space_before_token = !0, this.print_string(this._ch), this._output.space_before_token = !0) : (this.print_string(this._ch), this.eatWhitespace(), this._ch && l.test(this._ch) && (this._ch = ""));
      else if (this._ch === "]")
        this.print_string(this._ch);
      else if (this._ch === "[")
        this.preserveSingleSpace(p), this.print_string(this._ch);
      else if (this._ch === "=")
        this.eatWhitespace(), this.print_string("="), l.test(this._ch) && (this._ch = "");
      else if (this._ch === "!" && !this._input.lookBack("\\"))
        this._output.space_before_token = !0, this.print_string(this._ch);
      else {
        var j = w === '"' || w === "'";
        this.preserveSingleSpace(j || p), this.print_string(this._ch), !this._output.just_added_newline() && this._input.peek() === `
` && E && this._output.add_new_line();
      }
    var oe = this._output.get_code(N);
    return oe;
  }, dn.Beautifier = f, dn;
}
var Ui;
function Mo() {
  if (Ui) return St.exports;
  Ui = 1;
  var a = Io().Beautifier, t = Ks().Options;
  function n(e, i) {
    var r = new a(e, i);
    return r.beautify();
  }
  return St.exports = n, St.exports.defaultOptions = function() {
    return new t();
  }, St.exports;
}
var kt = { exports: {} }, fn = {}, hn = {}, Fi;
function Gs() {
  if (Fi) return hn;
  Fi = 1;
  var a = ii().Options;
  function t(n) {
    a.call(this, n, "html"), this.templating.length === 1 && this.templating[0] === "auto" && (this.templating = ["django", "erb", "handlebars", "php"]), this.indent_inner_html = this._get_boolean("indent_inner_html"), this.indent_body_inner_html = this._get_boolean("indent_body_inner_html", !0), this.indent_head_inner_html = this._get_boolean("indent_head_inner_html", !0), this.indent_handlebars = this._get_boolean("indent_handlebars", !0), this.wrap_attributes = this._get_selection(
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
  return t.prototype = new a(), hn.Options = t, hn;
}
var Rt = {}, $i;
function zi() {
  if ($i) return Rt;
  $i = 1;
  var a = Ct().Tokenizer, t = Ct().TOKEN, n = ai().Directives, e = zs().TemplatablePattern, i = Pt().Pattern, r = {
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
    START: t.START,
    RAW: t.RAW,
    EOF: t.EOF
  }, _ = new n(/<\!--/, /-->/), l = function(c, g) {
    a.call(this, c, g), this._current_tag_name = "";
    var u = new e(this._input).read_options(this._options), f = new i(this._input);
    if (this.__patterns = {
      word: u.until(/[\n\r\t <]/),
      word_control_flow_close_excluded: u.until(/[\n\r\t <}]/),
      single_quote: u.until_after(/'/),
      double_quote: u.until_after(/"/),
      attribute: u.until(/[\n\r\t =>]|\/>/),
      element_name: u.until(/[\n\r\t >\/]/),
      angular_control_flow_start: f.matching(/\@[a-zA-Z]+[^({]*[({]/),
      handlebars_comment: f.starting_with(/{{!--/).until_after(/--}}/),
      handlebars: f.starting_with(/{{/).until_after(/}}/),
      handlebars_open: f.until(/[\n\r\t }]/),
      handlebars_raw_close: f.until(/}}/),
      comment: f.starting_with(/<!--/).until_after(/-->/),
      cdata: f.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
      // https://en.wikipedia.org/wiki/Conditional_comment
      conditional_comment: f.starting_with(/<!\[/).until_after(/]>/),
      processing: f.starting_with(/<\?/).until_after(/\?>/)
    }, this._options.indent_handlebars && (this.__patterns.word = this.__patterns.word.exclude("handlebars"), this.__patterns.word_control_flow_close_excluded = this.__patterns.word_control_flow_close_excluded.exclude("handlebars")), this._unformatted_content_delimiter = null, this._options.unformatted_content_delimiter) {
      var m = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);
      this.__patterns.unformatted_content_delimiter = f.matching(m).until_after(m);
    }
  };
  return l.prototype = new a(), l.prototype._is_comment = function(c) {
    return !1;
  }, l.prototype._is_opening = function(c) {
    return c.type === r.TAG_OPEN || c.type === r.CONTROL_FLOW_OPEN;
  }, l.prototype._is_closing = function(c, g) {
    return c.type === r.TAG_CLOSE && g && ((c.text === ">" || c.text === "/>") && g.text[0] === "<" || c.text === "}}" && g.text[0] === "{" && g.text[1] === "{") || c.type === r.CONTROL_FLOW_CLOSE && c.text === "}" && g.text.endsWith("{");
  }, l.prototype._reset = function() {
    this._current_tag_name = "";
  }, l.prototype._get_next_token = function(c, g) {
    var u = null;
    this._readWhitespace();
    var f = this._input.peek();
    return f === null ? this._create_token(r.EOF, "") : (u = u || this._read_open_handlebars(f, g), u = u || this._read_attribute(f, c, g), u = u || this._read_close(f, g), u = u || this._read_script_and_style(f, c), u = u || this._read_control_flows(f, g), u = u || this._read_raw_content(f, c, g), u = u || this._read_content_word(f, g), u = u || this._read_comment_or_cdata(f), u = u || this._read_processing(f), u = u || this._read_open(f, g), u = u || this._create_token(r.UNKNOWN, this._input.next()), u);
  }, l.prototype._read_comment_or_cdata = function(c) {
    var g = null, u = null, f = null;
    if (c === "<") {
      var m = this._input.peek(1);
      m === "!" && (u = this.__patterns.comment.read(), u ? (f = _.get_directives(u), f && f.ignore === "start" && (u += _.readIgnored(this._input))) : u = this.__patterns.cdata.read()), u && (g = this._create_token(r.COMMENT, u), g.directives = f);
    }
    return g;
  }, l.prototype._read_processing = function(c) {
    var g = null, u = null, f = null;
    if (c === "<") {
      var m = this._input.peek(1);
      (m === "!" || m === "?") && (u = this.__patterns.conditional_comment.read(), u = u || this.__patterns.processing.read()), u && (g = this._create_token(r.COMMENT, u), g.directives = f);
    }
    return g;
  }, l.prototype._read_open = function(c, g) {
    var u = null, f = null;
    return (!g || g.type === r.CONTROL_FLOW_OPEN) && c === "<" && (u = this._input.next(), this._input.peek() === "/" && (u += this._input.next()), u += this.__patterns.element_name.read(), f = this._create_token(r.TAG_OPEN, u)), f;
  }, l.prototype._read_open_handlebars = function(c, g) {
    var u = null, f = null;
    return (!g || g.type === r.CONTROL_FLOW_OPEN) && (this._options.templating.includes("angular") || this._options.indent_handlebars) && c === "{" && this._input.peek(1) === "{" && (this._options.indent_handlebars && this._input.peek(2) === "!" ? (u = this.__patterns.handlebars_comment.read(), u = u || this.__patterns.handlebars.read(), f = this._create_token(r.COMMENT, u)) : (u = this.__patterns.handlebars_open.read(), f = this._create_token(r.TAG_OPEN, u))), f;
  }, l.prototype._read_control_flows = function(c, g) {
    var u = "", f = null;
    if (!this._options.templating.includes("angular"))
      return f;
    if (c === "@") {
      if (u = this.__patterns.angular_control_flow_start.read(), u === "")
        return f;
      for (var m = u.endsWith("(") ? 1 : 0, N = 0; !(u.endsWith("{") && m === N); ) {
        var x = this._input.next();
        if (x === null)
          break;
        x === "(" ? m++ : x === ")" && N++, u += x;
      }
      f = this._create_token(r.CONTROL_FLOW_OPEN, u);
    } else c === "}" && g && g.type === r.CONTROL_FLOW_OPEN && (u = this._input.next(), f = this._create_token(r.CONTROL_FLOW_CLOSE, u));
    return f;
  }, l.prototype._read_close = function(c, g) {
    var u = null, f = null;
    return g && g.type === r.TAG_OPEN && (g.text[0] === "<" && (c === ">" || c === "/" && this._input.peek(1) === ">") ? (u = this._input.next(), c === "/" && (u += this._input.next()), f = this._create_token(r.TAG_CLOSE, u)) : g.text[0] === "{" && c === "}" && this._input.peek(1) === "}" && (this._input.next(), this._input.next(), f = this._create_token(r.TAG_CLOSE, "}}"))), f;
  }, l.prototype._read_attribute = function(c, g, u) {
    var f = null, m = "";
    if (u && u.text[0] === "<")
      if (c === "=")
        f = this._create_token(r.EQUALS, this._input.next());
      else if (c === '"' || c === "'") {
        var N = this._input.next();
        c === '"' ? N += this.__patterns.double_quote.read() : N += this.__patterns.single_quote.read(), f = this._create_token(r.VALUE, N);
      } else
        m = this.__patterns.attribute.read(), m && (g.type === r.EQUALS ? f = this._create_token(r.VALUE, m) : f = this._create_token(r.ATTRIBUTE, m));
    return f;
  }, l.prototype._is_content_unformatted = function(c) {
    return this._options.void_elements.indexOf(c) === -1 && (this._options.content_unformatted.indexOf(c) !== -1 || this._options.unformatted.indexOf(c) !== -1);
  }, l.prototype._read_raw_content = function(c, g, u) {
    var f = "";
    if (u && u.text[0] === "{")
      f = this.__patterns.handlebars_raw_close.read();
    else if (g.type === r.TAG_CLOSE && g.opened.text[0] === "<" && g.text[0] !== "/") {
      var m = g.opened.text.substr(1).toLowerCase();
      this._is_content_unformatted(m) && (f = this._input.readUntil(new RegExp("</" + m + "[\\n\\r\\t ]*?>", "ig")));
    }
    return f ? this._create_token(r.TEXT, f) : null;
  }, l.prototype._read_script_and_style = function(c, g) {
    if (g.type === r.TAG_CLOSE && g.opened.text[0] === "<" && g.text[0] !== "/") {
      var u = g.opened.text.substr(1).toLowerCase();
      if (u === "script" || u === "style") {
        var f = this._read_comment_or_cdata(c);
        if (f)
          return f.type = r.TEXT, f;
        var m = this._input.readUntil(new RegExp("</" + u + "[\\n\\r\\t ]*?>", "ig"));
        if (m)
          return this._create_token(r.TEXT, m);
      }
    }
    return null;
  }, l.prototype._read_content_word = function(c, g) {
    var u = "";
    return this._options.unformatted_content_delimiter && c === this._options.unformatted_content_delimiter[0] && (u = this.__patterns.unformatted_content_delimiter.read()), u || (u = g && g.type === r.CONTROL_FLOW_OPEN ? this.__patterns.word_control_flow_close_excluded.read() : this.__patterns.word.read()), u ? this._create_token(r.TEXT, u) : null;
  }, Rt.Tokenizer = l, Rt.TOKEN = r, Rt;
}
var Ki;
function Lo() {
  if (Ki) return fn;
  Ki = 1;
  var a = Gs().Options, t = ni().Output, n = zi().Tokenizer, e = zi().TOKEN, i = /\r\n|[\r\n]/, r = /\r\n|[\r\n]/g, _ = function(d, o) {
    this.indent_level = 0, this.alignment_size = 0, this.max_preserve_newlines = d.max_preserve_newlines, this.preserve_newlines = d.preserve_newlines, this._output = new t(d, o);
  };
  _.prototype.current_line_has_match = function(d) {
    return this._output.current_line.has_match(d);
  }, _.prototype.set_space_before_token = function(d, o) {
    this._output.space_before_token = d, this._output.non_breaking_space = o;
  }, _.prototype.set_wrap_point = function() {
    this._output.set_indent(this.indent_level, this.alignment_size), this._output.set_wrap_point();
  }, _.prototype.add_raw_token = function(d) {
    this._output.add_raw_token(d);
  }, _.prototype.print_preserved_newlines = function(d) {
    var o = 0;
    d.type !== e.TEXT && d.previous.type !== e.TEXT && (o = d.newlines ? 1 : 0), this.preserve_newlines && (o = d.newlines < this.max_preserve_newlines + 1 ? d.newlines : this.max_preserve_newlines + 1);
    for (var b = 0; b < o; b++)
      this.print_newline(b > 0);
    return o !== 0;
  }, _.prototype.traverse_whitespace = function(d) {
    return d.whitespace_before || d.newlines ? (this.print_preserved_newlines(d) || (this._output.space_before_token = !0), !0) : !1;
  }, _.prototype.previous_token_wrapped = function() {
    return this._output.previous_token_wrapped;
  }, _.prototype.print_newline = function(d) {
    this._output.add_new_line(d);
  }, _.prototype.print_token = function(d) {
    d.text && (this._output.set_indent(this.indent_level, this.alignment_size), this._output.add_token(d.text));
  }, _.prototype.indent = function() {
    this.indent_level++;
  }, _.prototype.deindent = function() {
    this.indent_level > 0 && (this.indent_level--, this._output.set_indent(this.indent_level, this.alignment_size));
  }, _.prototype.get_full_indent = function(d) {
    return d = this.indent_level + (d || 0), d < 1 ? "" : this._output.get_indent_string(d);
  };
  var l = function(d) {
    for (var o = null, b = d.next; b.type !== e.EOF && d.closed !== b; ) {
      if (b.type === e.ATTRIBUTE && b.text === "type") {
        b.next && b.next.type === e.EQUALS && b.next.next && b.next.next.type === e.VALUE && (o = b.next.next.text);
        break;
      }
      b = b.next;
    }
    return o;
  }, c = function(d, o) {
    var b = null, R = null;
    return o.closed ? (d === "script" ? b = "text/javascript" : d === "style" && (b = "text/css"), b = l(o) || b, b.search("text/css") > -1 ? R = "css" : b.search(/module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/) > -1 ? R = "javascript" : b.search(/(text|application|dojo)\/(x-)?(html)/) > -1 ? R = "html" : b.search(/test\/null/) > -1 && (R = "null"), R) : null;
  };
  function g(d, o) {
    return o.indexOf(d) !== -1;
  }
  function u(d, o, b) {
    this.parent = d || null, this.tag = o ? o.tag_name : "", this.indent_level = b || 0, this.parser_token = o || null;
  }
  function f(d) {
    this._printer = d, this._current_frame = null;
  }
  f.prototype.get_parser_token = function() {
    return this._current_frame ? this._current_frame.parser_token : null;
  }, f.prototype.record_tag = function(d) {
    var o = new u(this._current_frame, d, this._printer.indent_level);
    this._current_frame = o;
  }, f.prototype._try_pop_frame = function(d) {
    var o = null;
    return d && (o = d.parser_token, this._printer.indent_level = d.indent_level, this._current_frame = d.parent), o;
  }, f.prototype._get_frame = function(d, o) {
    for (var b = this._current_frame; b && d.indexOf(b.tag) === -1; ) {
      if (o && o.indexOf(b.tag) !== -1) {
        b = null;
        break;
      }
      b = b.parent;
    }
    return b;
  }, f.prototype.try_pop = function(d, o) {
    var b = this._get_frame([d], o);
    return this._try_pop_frame(b);
  }, f.prototype.indent_to_tag = function(d) {
    var o = this._get_frame(d);
    o && (this._printer.indent_level = o.indent_level);
  };
  function m(d, o, b, R) {
    this._source_text = d || "", o = o || {}, this._js_beautify = b, this._css_beautify = R, this._tag_stack = null;
    var T = new a(o, "html");
    this._options = T, this._is_wrap_attributes_force = this._options.wrap_attributes.substr(0, 5) === "force", this._is_wrap_attributes_force_expand_multiline = this._options.wrap_attributes === "force-expand-multiline", this._is_wrap_attributes_force_aligned = this._options.wrap_attributes === "force-aligned", this._is_wrap_attributes_aligned_multiple = this._options.wrap_attributes === "aligned-multiple", this._is_wrap_attributes_preserve = this._options.wrap_attributes.substr(0, 8) === "preserve", this._is_wrap_attributes_preserve_aligned = this._options.wrap_attributes === "preserve-aligned";
  }
  m.prototype.beautify = function() {
    if (this._options.disabled)
      return this._source_text;
    var d = this._source_text, o = this._options.eol;
    this._options.eol === "auto" && (o = `
`, d && i.test(d) && (o = d.match(i)[0])), d = d.replace(r, `
`);
    var b = d.match(/^[\t ]*/)[0], R = {
      text: "",
      type: ""
    }, T = new N(this._options), A = new _(this._options, b), E = new n(d, this._options).tokenize();
    this._tag_stack = new f(A);
    for (var v = null, p = E.next(); p.type !== e.EOF; )
      p.type === e.TAG_OPEN || p.type === e.COMMENT ? (v = this._handle_tag_open(A, p, T, R, E), T = v) : p.type === e.ATTRIBUTE || p.type === e.EQUALS || p.type === e.VALUE || p.type === e.TEXT && !T.tag_complete ? v = this._handle_inside_tag(A, p, T, R) : p.type === e.TAG_CLOSE ? v = this._handle_tag_close(A, p, T) : p.type === e.TEXT ? v = this._handle_text(A, p, T) : p.type === e.CONTROL_FLOW_OPEN ? v = this._handle_control_flow_open(A, p) : p.type === e.CONTROL_FLOW_CLOSE ? v = this._handle_control_flow_close(A, p) : A.add_raw_token(p), R = v, p = E.next();
    var w = A._output.get_code(o);
    return w;
  }, m.prototype._handle_control_flow_open = function(d, o) {
    var b = {
      text: o.text,
      type: o.type
    };
    return d.set_space_before_token(o.newlines || o.whitespace_before !== "", !0), o.newlines ? d.print_preserved_newlines(o) : d.set_space_before_token(o.newlines || o.whitespace_before !== "", !0), d.print_token(o), d.indent(), b;
  }, m.prototype._handle_control_flow_close = function(d, o) {
    var b = {
      text: o.text,
      type: o.type
    };
    return d.deindent(), o.newlines ? d.print_preserved_newlines(o) : d.set_space_before_token(o.newlines || o.whitespace_before !== "", !0), d.print_token(o), b;
  }, m.prototype._handle_tag_close = function(d, o, b) {
    var R = {
      text: o.text,
      type: o.type
    };
    return d.alignment_size = 0, b.tag_complete = !0, d.set_space_before_token(o.newlines || o.whitespace_before !== "", !0), b.is_unformatted ? d.add_raw_token(o) : (b.tag_start_char === "<" && (d.set_space_before_token(o.text[0] === "/", !0), this._is_wrap_attributes_force_expand_multiline && b.has_wrapped_attrs && d.print_newline(!1)), d.print_token(o)), b.indent_content && !(b.is_unformatted || b.is_content_unformatted) && (d.indent(), b.indent_content = !1), !b.is_inline_element && !(b.is_unformatted || b.is_content_unformatted) && d.set_wrap_point(), R;
  }, m.prototype._handle_inside_tag = function(d, o, b, R) {
    var T = b.has_wrapped_attrs, A = {
      text: o.text,
      type: o.type
    };
    return d.set_space_before_token(o.newlines || o.whitespace_before !== "", !0), b.is_unformatted ? d.add_raw_token(o) : b.tag_start_char === "{" && o.type === e.TEXT ? d.print_preserved_newlines(o) ? (o.newlines = 0, d.add_raw_token(o)) : d.print_token(o) : (o.type === e.ATTRIBUTE ? d.set_space_before_token(!0) : (o.type === e.EQUALS || o.type === e.VALUE && o.previous.type === e.EQUALS) && d.set_space_before_token(!1), o.type === e.ATTRIBUTE && b.tag_start_char === "<" && ((this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) && (d.traverse_whitespace(o), T = T || o.newlines !== 0), this._is_wrap_attributes_force && b.attr_count >= this._options.wrap_attributes_min_attrs && (R.type !== e.TAG_OPEN || // ie. second attribute and beyond
    this._is_wrap_attributes_force_expand_multiline) && (d.print_newline(!1), T = !0)), d.print_token(o), T = T || d.previous_token_wrapped(), b.has_wrapped_attrs = T), A;
  }, m.prototype._handle_text = function(d, o, b) {
    var R = {
      text: o.text,
      type: "TK_CONTENT"
    };
    return b.custom_beautifier_name ? this._print_custom_beatifier_text(d, o, b) : b.is_unformatted || b.is_content_unformatted ? d.add_raw_token(o) : (d.traverse_whitespace(o), d.print_token(o)), R;
  }, m.prototype._print_custom_beatifier_text = function(d, o, b) {
    var R = this;
    if (o.text !== "") {
      var T = o.text, A, E = 1, v = "", p = "";
      b.custom_beautifier_name === "javascript" && typeof this._js_beautify == "function" ? A = this._js_beautify : b.custom_beautifier_name === "css" && typeof this._css_beautify == "function" ? A = this._css_beautify : b.custom_beautifier_name === "html" && (A = function(F, G) {
        var H = new m(F, G, R._js_beautify, R._css_beautify);
        return H.beautify();
      }), this._options.indent_scripts === "keep" ? E = 0 : this._options.indent_scripts === "separate" && (E = -d.indent_level);
      var w = d.get_full_indent(E);
      if (T = T.replace(/\n[ \t]*$/, ""), b.custom_beautifier_name !== "html" && T[0] === "<" && T.match(/^(<!--|<!\[CDATA\[)/)) {
        var s = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(T);
        if (!s) {
          d.add_raw_token(o);
          return;
        }
        v = w + s[1] + `
`, T = s[4], s[5] && (p = w + s[5]), T = T.replace(/\n[ \t]*$/, ""), (s[2] || s[3].indexOf(`
`) !== -1) && (s = s[3].match(/[ \t]+$/), s && (o.whitespace_before = s[0]));
      }
      if (T)
        if (A) {
          var y = function() {
            this.eol = `
`;
          };
          y.prototype = this._options.raw_options;
          var O = new y();
          T = A(w + T, O);
        } else {
          var B = o.whitespace_before;
          B && (T = T.replace(new RegExp(`
(` + B + ")?", "g"), `
`)), T = w + T.replace(/\n/g, `
` + w);
        }
      v && (T ? T = v + T + `
` + p : T = v + p), d.print_newline(!1), T && (o.text = T, o.whitespace_before = "", o.newlines = 0, d.add_raw_token(o), d.print_newline(!0));
    }
  }, m.prototype._handle_tag_open = function(d, o, b, R, T) {
    var A = this._get_tag_open_token(o);
    if ((b.is_unformatted || b.is_content_unformatted) && !b.is_empty_element && o.type === e.TAG_OPEN && !A.is_start_tag ? (d.add_raw_token(o), A.start_tag_token = this._tag_stack.try_pop(A.tag_name)) : (d.traverse_whitespace(o), this._set_tag_position(d, o, A, b, R), A.is_inline_element || d.set_wrap_point(), d.print_token(o)), A.is_start_tag && this._is_wrap_attributes_force) {
      var E = 0, v;
      do
        v = T.peek(E), v.type === e.ATTRIBUTE && (A.attr_count += 1), E += 1;
      while (v.type !== e.EOF && v.type !== e.TAG_CLOSE);
    }
    return (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) && (A.alignment_size = o.text.length + 1), !A.tag_complete && !A.is_unformatted && (d.alignment_size = A.alignment_size), A;
  };
  var N = function(d, o, b) {
    if (this.parent = o || null, this.text = "", this.type = "TK_TAG_OPEN", this.tag_name = "", this.is_inline_element = !1, this.is_unformatted = !1, this.is_content_unformatted = !1, this.is_empty_element = !1, this.is_start_tag = !1, this.is_end_tag = !1, this.indent_content = !1, this.multiline_content = !1, this.custom_beautifier_name = null, this.start_tag_token = null, this.attr_count = 0, this.has_wrapped_attrs = !1, this.alignment_size = 0, this.tag_complete = !1, this.tag_start_char = "", this.tag_check = "", !b)
      this.tag_complete = !0;
    else {
      var R;
      this.tag_start_char = b.text[0], this.text = b.text, this.tag_start_char === "<" ? (R = b.text.match(/^<([^\s>]*)/), this.tag_check = R ? R[1] : "") : (R = b.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/), this.tag_check = R ? R[1] : "", (b.text.startsWith("{{#>") || b.text.startsWith("{{~#>")) && this.tag_check[0] === ">" && (this.tag_check === ">" && b.next !== null ? this.tag_check = b.next.text.split(" ")[0] : this.tag_check = b.text.split(">")[1])), this.tag_check = this.tag_check.toLowerCase(), b.type === e.COMMENT && (this.tag_complete = !0), this.is_start_tag = this.tag_check.charAt(0) !== "/", this.tag_name = this.is_start_tag ? this.tag_check : this.tag_check.substr(1), this.is_end_tag = !this.is_start_tag || b.closed && b.closed.text === "/>";
      var T = 2;
      this.tag_start_char === "{" && this.text.length >= 3 && this.text.charAt(2) === "~" && (T = 3), this.is_end_tag = this.is_end_tag || this.tag_start_char === "{" && (!d.indent_handlebars || this.text.length < 3 || /[^#\^]/.test(this.text.charAt(T)));
    }
  };
  m.prototype._get_tag_open_token = function(d) {
    var o = new N(this._options, this._tag_stack.get_parser_token(), d);
    return o.alignment_size = this._options.wrap_attributes_indent_size, o.is_end_tag = o.is_end_tag || g(o.tag_check, this._options.void_elements), o.is_empty_element = o.tag_complete || o.is_start_tag && o.is_end_tag, o.is_unformatted = !o.tag_complete && g(o.tag_check, this._options.unformatted), o.is_content_unformatted = !o.is_empty_element && g(o.tag_check, this._options.content_unformatted), o.is_inline_element = g(o.tag_name, this._options.inline) || this._options.inline_custom_elements && o.tag_name.includes("-") || o.tag_start_char === "{", o;
  }, m.prototype._set_tag_position = function(d, o, b, R, T) {
    if (b.is_empty_element || (b.is_end_tag ? b.start_tag_token = this._tag_stack.try_pop(b.tag_name) : (this._do_optional_end_element(b) && (b.is_inline_element || d.print_newline(!1)), this._tag_stack.record_tag(b), (b.tag_name === "script" || b.tag_name === "style") && !(b.is_unformatted || b.is_content_unformatted) && (b.custom_beautifier_name = c(b.tag_check, o)))), g(b.tag_check, this._options.extra_liners) && (d.print_newline(!1), d._output.just_added_blankline() || d.print_newline(!0)), b.is_empty_element) {
      if (b.tag_start_char === "{" && b.tag_check === "else") {
        this._tag_stack.indent_to_tag(["if", "unless", "each"]), b.indent_content = !0;
        var A = d.current_line_has_match(/{{#if/);
        A || d.print_newline(!1);
      }
      b.tag_name === "!--" && T.type === e.TAG_CLOSE && R.is_end_tag && b.text.indexOf(`
`) === -1 || (b.is_inline_element || b.is_unformatted || d.print_newline(!1), this._calcluate_parent_multiline(d, b));
    } else if (b.is_end_tag) {
      var E = !1;
      E = b.start_tag_token && b.start_tag_token.multiline_content, E = E || !b.is_inline_element && !(R.is_inline_element || R.is_unformatted) && !(T.type === e.TAG_CLOSE && b.start_tag_token === R) && T.type !== "TK_CONTENT", (b.is_content_unformatted || b.is_unformatted) && (E = !1), E && d.print_newline(!1);
    } else
      b.indent_content = !b.custom_beautifier_name, b.tag_start_char === "<" && (b.tag_name === "html" ? b.indent_content = this._options.indent_inner_html : b.tag_name === "head" ? b.indent_content = this._options.indent_head_inner_html : b.tag_name === "body" && (b.indent_content = this._options.indent_body_inner_html)), !(b.is_inline_element || b.is_unformatted) && (T.type !== "TK_CONTENT" || b.is_content_unformatted) && d.print_newline(!1), this._calcluate_parent_multiline(d, b);
  }, m.prototype._calcluate_parent_multiline = function(d, o) {
    o.parent && d._output.just_added_newline() && !((o.is_inline_element || o.is_unformatted) && o.parent.is_inline_element) && (o.parent.multiline_content = !0);
  };
  var x = ["address", "article", "aside", "blockquote", "details", "div", "dl", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "main", "menu", "nav", "ol", "p", "pre", "section", "table", "ul"], k = ["a", "audio", "del", "ins", "map", "noscript", "video"];
  return m.prototype._do_optional_end_element = function(d) {
    var o = null;
    if (!(d.is_empty_element || !d.is_start_tag || !d.parent)) {
      if (d.tag_name === "body")
        o = o || this._tag_stack.try_pop("head");
      else if (d.tag_name === "li")
        o = o || this._tag_stack.try_pop("li", ["ol", "ul", "menu"]);
      else if (d.tag_name === "dd" || d.tag_name === "dt")
        o = o || this._tag_stack.try_pop("dt", ["dl"]), o = o || this._tag_stack.try_pop("dd", ["dl"]);
      else if (d.parent.tag_name === "p" && x.indexOf(d.tag_name) !== -1) {
        var b = d.parent.parent;
        (!b || k.indexOf(b.tag_name) === -1) && (o = o || this._tag_stack.try_pop("p"));
      } else d.tag_name === "rp" || d.tag_name === "rt" ? (o = o || this._tag_stack.try_pop("rt", ["ruby", "rtc"]), o = o || this._tag_stack.try_pop("rp", ["ruby", "rtc"])) : d.tag_name === "optgroup" ? o = o || this._tag_stack.try_pop("optgroup", ["select"]) : d.tag_name === "option" ? o = o || this._tag_stack.try_pop("option", ["select", "datalist", "optgroup"]) : d.tag_name === "colgroup" ? o = o || this._tag_stack.try_pop("caption", ["table"]) : d.tag_name === "thead" ? (o = o || this._tag_stack.try_pop("caption", ["table"]), o = o || this._tag_stack.try_pop("colgroup", ["table"])) : d.tag_name === "tbody" || d.tag_name === "tfoot" ? (o = o || this._tag_stack.try_pop("caption", ["table"]), o = o || this._tag_stack.try_pop("colgroup", ["table"]), o = o || this._tag_stack.try_pop("thead", ["table"]), o = o || this._tag_stack.try_pop("tbody", ["table"])) : d.tag_name === "tr" ? (o = o || this._tag_stack.try_pop("caption", ["table"]), o = o || this._tag_stack.try_pop("colgroup", ["table"]), o = o || this._tag_stack.try_pop("tr", ["table", "thead", "tbody", "tfoot"])) : (d.tag_name === "th" || d.tag_name === "td") && (o = o || this._tag_stack.try_pop("td", ["table", "thead", "tbody", "tfoot", "tr"]), o = o || this._tag_stack.try_pop("th", ["table", "thead", "tbody", "tfoot", "tr"]));
      return d.parent = this._tag_stack.get_parser_token(), o;
    }
  }, fn.Beautifier = m, fn;
}
var Gi;
function Do() {
  if (Gi) return kt.exports;
  Gi = 1;
  var a = Lo().Beautifier, t = Gs().Options;
  function n(e, i, r, _) {
    var l = new a(e, i, r, _);
    return l.beautify();
  }
  return kt.exports = n, kt.exports.defaultOptions = function() {
    return new t();
  }, kt.exports;
}
var qi;
function Bo() {
  if (qi) return ot;
  qi = 1;
  var a = Co(), t = Mo(), n = Do();
  function e(i, r, _, l) {
    return _ = _ || a, l = l || t, n(i, r, _, l);
  }
  return e.defaultOptions = n.defaultOptions, ot.js = a, ot.css = t, ot.html = e, ot;
}
var Wi;
function Po() {
  return Wi || (Wi = 1, (function(a) {
    function t(n, e, i) {
      var r = function(_, l) {
        return n.js_beautify(_, l);
      };
      return r.js = n.js_beautify, r.css = e.css_beautify, r.html = i.html_beautify, r.js_beautify = n.js_beautify, r.css_beautify = e.css_beautify, r.html_beautify = i.html_beautify, r;
    }
    (function(n) {
      var e = Bo();
      e.js_beautify = e.js, e.css_beautify = e.css, e.html_beautify = e.html, n.exports = t(e, e, e);
    })(a);
  })(Jt)), Jt.exports;
}
var Hi = Po(), gn, Vi;
function qs() {
  if (Vi) return gn;
  Vi = 1;
  function a(h) {
    return h instanceof Map ? h.clear = h.delete = h.set = function() {
      throw new Error("map is read-only");
    } : h instanceof Set && (h.add = h.clear = h.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(h), Object.getOwnPropertyNames(h).forEach((S) => {
      const M = h[S], V = typeof M;
      (V === "object" || V === "function") && !Object.isFrozen(M) && a(M);
    }), h;
  }
  class t {
    /**
     * @param {CompiledMode} mode
     */
    constructor(S) {
      S.data === void 0 && (S.data = {}), this.data = S.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function n(h) {
    return h.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function e(h, ...S) {
    const M = /* @__PURE__ */ Object.create(null);
    for (const V in h)
      M[V] = h[V];
    return S.forEach(function(V) {
      for (const ce in V)
        M[ce] = V[ce];
    }), /** @type {T} */
    M;
  }
  const i = "</span>", r = (h) => !!h.scope, _ = (h, { prefix: S }) => {
    if (h.startsWith("language:"))
      return h.replace("language:", "language-");
    if (h.includes(".")) {
      const M = h.split(".");
      return [
        `${S}${M.shift()}`,
        ...M.map((V, ce) => `${V}${"_".repeat(ce + 1)}`)
      ].join(" ");
    }
    return `${S}${h}`;
  };
  class l {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(S, M) {
      this.buffer = "", this.classPrefix = M.classPrefix, S.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(S) {
      this.buffer += n(S);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(S) {
      if (!r(S)) return;
      const M = _(
        S.scope,
        { prefix: this.classPrefix }
      );
      this.span(M);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(S) {
      r(S) && (this.buffer += i);
    }
    /**
     * returns the accumulated buffer
    */
    value() {
      return this.buffer;
    }
    // helpers
    /**
     * Builds a span element
     *
     * @param {string} className */
    span(S) {
      this.buffer += `<span class="${S}">`;
    }
  }
  const c = (h = {}) => {
    const S = { children: [] };
    return Object.assign(S, h), S;
  };
  class g {
    constructor() {
      this.rootNode = c(), this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(S) {
      this.top.children.push(S);
    }
    /** @param {string} scope */
    openNode(S) {
      const M = c({ scope: S });
      this.add(M), this.stack.push(M);
    }
    closeNode() {
      if (this.stack.length > 1)
        return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); ) ;
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    /**
     * @typedef { import("./html_renderer").Renderer } Renderer
     * @param {Renderer} builder
     */
    walk(S) {
      return this.constructor._walk(S, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(S, M) {
      return typeof M == "string" ? S.addText(M) : M.children && (S.openNode(M), M.children.forEach((V) => this._walk(S, V)), S.closeNode(M)), S;
    }
    /**
     * @param {Node} node
     */
    static _collapse(S) {
      typeof S != "string" && S.children && (S.children.every((M) => typeof M == "string") ? S.children = [S.children.join("")] : S.children.forEach((M) => {
        g._collapse(M);
      }));
    }
  }
  class u extends g {
    /**
     * @param {*} options
     */
    constructor(S) {
      super(), this.options = S;
    }
    /**
     * @param {string} text
     */
    addText(S) {
      S !== "" && this.add(S);
    }
    /** @param {string} scope */
    startScope(S) {
      this.openNode(S);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(S, M) {
      const V = S.root;
      M && (V.scope = `language:${M}`), this.add(V);
    }
    toHTML() {
      return new l(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function f(h) {
    return h ? typeof h == "string" ? h : h.source : null;
  }
  function m(h) {
    return k("(?=", h, ")");
  }
  function N(h) {
    return k("(?:", h, ")*");
  }
  function x(h) {
    return k("(?:", h, ")?");
  }
  function k(...h) {
    return h.map((M) => f(M)).join("");
  }
  function d(h) {
    const S = h[h.length - 1];
    return typeof S == "object" && S.constructor === Object ? (h.splice(h.length - 1, 1), S) : {};
  }
  function o(...h) {
    return "(" + (d(h).capture ? "" : "?:") + h.map((V) => f(V)).join("|") + ")";
  }
  function b(h) {
    return new RegExp(h.toString() + "|").exec("").length - 1;
  }
  function R(h, S) {
    const M = h && h.exec(S);
    return M && M.index === 0;
  }
  const T = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function A(h, { joinWith: S }) {
    let M = 0;
    return h.map((V) => {
      M += 1;
      const ce = M;
      let _e = f(V), U = "";
      for (; _e.length > 0; ) {
        const P = T.exec(_e);
        if (!P) {
          U += _e;
          break;
        }
        U += _e.substring(0, P.index), _e = _e.substring(P.index + P[0].length), P[0][0] === "\\" && P[1] ? U += "\\" + String(Number(P[1]) + ce) : (U += P[0], P[0] === "(" && M++);
      }
      return U;
    }).map((V) => `(${V})`).join(S);
  }
  const E = /\b\B/, v = "[a-zA-Z]\\w*", p = "[a-zA-Z_]\\w*", w = "\\b\\d+(\\.\\d+)?", s = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", y = "\\b(0b[01]+)", O = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", B = (h = {}) => {
    const S = /^#![ ]*\//;
    return h.binary && (h.begin = k(
      S,
      /.*\b/,
      h.binary,
      /\b.*/
    )), e({
      scope: "meta",
      begin: S,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (M, V) => {
        M.index !== 0 && V.ignoreMatch();
      }
    }, h);
  }, F = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, G = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [F]
  }, H = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [F]
  }, j = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, oe = function(h, S, M = {}) {
    const V = e(
      {
        scope: "comment",
        begin: h,
        end: S,
        contains: []
      },
      M
    );
    V.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    const ce = o(
      // list of common 1 and 2 letter words in English
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      // note: this is not an exhaustive list of contractions, just popular ones
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      // contractions - can't we'd they're let's, etc
      /[A-Za-z]+[-][a-z]+/,
      // `no-way`, etc.
      /[A-Za-z][a-z]{2,}/
      // allow capitalized words at beginning of sentences
    );
    return V.contains.push(
      {
        // TODO: how to include ", (, ) without breaking grammars that use these for
        // comment delimiters?
        // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
        // ---
        // this tries to find sequences of 3 english words in a row (without any
        // "programming" type syntax) this gives us a strong signal that we've
        // TRULY found a comment - vs perhaps scanning with the wrong language.
        // It's possible to find something that LOOKS like the start of the
        // comment - but then if there is no readable text - good chance it is a
        // false match and not a comment.
        //
        // for a visual example please see:
        // https://github.com/highlightjs/highlight.js/issues/2827
        begin: k(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          ce,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), V;
  }, Oe = oe("//", "$"), Ce = oe("/\\*", "\\*/"), xe = oe("#", "$"), Fe = {
    scope: "number",
    begin: w,
    relevance: 0
  }, Ze = {
    scope: "number",
    begin: s,
    relevance: 0
  }, Te = {
    scope: "number",
    begin: y,
    relevance: 0
  }, Se = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      F,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [F]
      }
    ]
  }, Be = {
    scope: "title",
    begin: v,
    relevance: 0
  }, le = {
    scope: "title",
    begin: p,
    relevance: 0
  }, re = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + p,
    relevance: 0
  };
  var fe = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: G,
    BACKSLASH_ESCAPE: F,
    BINARY_NUMBER_MODE: Te,
    BINARY_NUMBER_RE: y,
    COMMENT: oe,
    C_BLOCK_COMMENT_MODE: Ce,
    C_LINE_COMMENT_MODE: Oe,
    C_NUMBER_MODE: Ze,
    C_NUMBER_RE: s,
    END_SAME_AS_BEGIN: function(h) {
      return Object.assign(
        h,
        {
          /** @type {ModeCallback} */
          "on:begin": (S, M) => {
            M.data._beginMatch = S[1];
          },
          /** @type {ModeCallback} */
          "on:end": (S, M) => {
            M.data._beginMatch !== S[1] && M.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: xe,
    IDENT_RE: v,
    MATCH_NOTHING_RE: E,
    METHOD_GUARD: re,
    NUMBER_MODE: Fe,
    NUMBER_RE: w,
    PHRASAL_WORDS_MODE: j,
    QUOTE_STRING_MODE: H,
    REGEXP_MODE: Se,
    RE_STARTERS_RE: O,
    SHEBANG: B,
    TITLE_MODE: Be,
    UNDERSCORE_IDENT_RE: p,
    UNDERSCORE_TITLE_MODE: le
  });
  function ve(h, S) {
    h.input[h.index - 1] === "." && S.ignoreMatch();
  }
  function ye(h, S) {
    h.className !== void 0 && (h.scope = h.className, delete h.className);
  }
  function ke(h, S) {
    S && h.beginKeywords && (h.begin = "\\b(" + h.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", h.__beforeBegin = ve, h.keywords = h.keywords || h.beginKeywords, delete h.beginKeywords, h.relevance === void 0 && (h.relevance = 0));
  }
  function ct(h, S) {
    Array.isArray(h.illegal) && (h.illegal = o(...h.illegal));
  }
  function Ut(h, S) {
    if (h.match) {
      if (h.begin || h.end) throw new Error("begin & end are not supported with match");
      h.begin = h.match, delete h.match;
    }
  }
  function nt(h, S) {
    h.relevance === void 0 && (h.relevance = 1);
  }
  const _t = (h, S) => {
    if (!h.beforeMatch) return;
    if (h.starts) throw new Error("beforeMatch cannot be used with starts");
    const M = Object.assign({}, h);
    Object.keys(h).forEach((V) => {
      delete h[V];
    }), h.keywords = M.keywords, h.begin = k(M.beforeMatch, m(M.begin)), h.starts = {
      relevance: 0,
      contains: [
        Object.assign(M, { endsParent: !0 })
      ]
    }, h.relevance = 0, delete M.beforeMatch;
  }, ut = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    // common variable name
    "list",
    // common variable name
    "value"
    // common variable name
  ], Ft = "keyword";
  function dt(h, S, M = Ft) {
    const V = /* @__PURE__ */ Object.create(null);
    return typeof h == "string" ? ce(M, h.split(" ")) : Array.isArray(h) ? ce(M, h) : Object.keys(h).forEach(function(_e) {
      Object.assign(
        V,
        dt(h[_e], S, _e)
      );
    }), V;
    function ce(_e, U) {
      S && (U = U.map((P) => P.toLowerCase())), U.forEach(function(P) {
        const q = P.split("|");
        V[q[0]] = [_e, it(q[0], q[1])];
      });
    }
  }
  function it(h, S) {
    return S ? Number(S) : $t(h) ? 0 : 1;
  }
  function $t(h) {
    return ut.includes(h.toLowerCase());
  }
  const pt = {}, Pe = (h) => {
    console.error(h);
  }, Xe = (h, ...S) => {
    console.log(`WARN: ${h}`, ...S);
  }, Ee = (h, S) => {
    pt[`${h}/${S}`] || (console.log(`Deprecated as of ${h}. ${S}`), pt[`${h}/${S}`] = !0);
  }, Qe = new Error();
  function ft(h, S, { key: M }) {
    let V = 0;
    const ce = h[M], _e = {}, U = {};
    for (let P = 1; P <= S.length; P++)
      U[P + V] = ce[P], _e[P + V] = !0, V += b(S[P - 1]);
    h[M] = U, h[M]._emit = _e, h[M]._multi = !0;
  }
  function ht(h) {
    if (Array.isArray(h.begin)) {
      if (h.skip || h.excludeBegin || h.returnBegin)
        throw Pe("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), Qe;
      if (typeof h.beginScope != "object" || h.beginScope === null)
        throw Pe("beginScope must be object"), Qe;
      ft(h, h.begin, { key: "beginScope" }), h.begin = A(h.begin, { joinWith: "" });
    }
  }
  function st(h) {
    if (Array.isArray(h.end)) {
      if (h.skip || h.excludeEnd || h.returnEnd)
        throw Pe("skip, excludeEnd, returnEnd not compatible with endScope: {}"), Qe;
      if (typeof h.endScope != "object" || h.endScope === null)
        throw Pe("endScope must be object"), Qe;
      ft(h, h.end, { key: "endScope" }), h.end = A(h.end, { joinWith: "" });
    }
  }
  function zt(h) {
    h.scope && typeof h.scope == "object" && h.scope !== null && (h.beginScope = h.scope, delete h.scope);
  }
  function gt(h) {
    zt(h), typeof h.beginScope == "string" && (h.beginScope = { _wrap: h.beginScope }), typeof h.endScope == "string" && (h.endScope = { _wrap: h.endScope }), ht(h), st(h);
  }
  function Kt(h) {
    function S(U, P) {
      return new RegExp(
        f(U),
        "m" + (h.case_insensitive ? "i" : "") + (h.unicodeRegex ? "u" : "") + (P ? "g" : "")
      );
    }
    class M {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(P, q) {
        q.position = this.position++, this.matchIndexes[this.matchAt] = q, this.regexes.push([q, P]), this.matchAt += b(P) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const P = this.regexes.map((q) => q[1]);
        this.matcherRe = S(A(P, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(P) {
        this.matcherRe.lastIndex = this.lastIndex;
        const q = this.matcherRe.exec(P);
        if (!q)
          return null;
        const he = q.findIndex((rt, Ht) => Ht > 0 && rt !== void 0), ue = this.matchIndexes[he];
        return q.splice(0, he), Object.assign(q, ue);
      }
    }
    class V {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(P) {
        if (this.multiRegexes[P]) return this.multiRegexes[P];
        const q = new M();
        return this.rules.slice(P).forEach(([he, ue]) => q.addRule(he, ue)), q.compile(), this.multiRegexes[P] = q, q;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(P, q) {
        this.rules.push([P, q]), q.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(P) {
        const q = this.getMatcher(this.regexIndex);
        q.lastIndex = this.lastIndex;
        let he = q.exec(P);
        if (this.resumingScanAtSamePosition() && !(he && he.index === this.lastIndex)) {
          const ue = this.getMatcher(0);
          ue.lastIndex = this.lastIndex + 1, he = ue.exec(P);
        }
        return he && (this.regexIndex += he.position + 1, this.regexIndex === this.count && this.considerAll()), he;
      }
    }
    function ce(U) {
      const P = new V();
      return U.contains.forEach((q) => P.addRule(q.begin, { rule: q, type: "begin" })), U.terminatorEnd && P.addRule(U.terminatorEnd, { type: "end" }), U.illegal && P.addRule(U.illegal, { type: "illegal" }), P;
    }
    function _e(U, P) {
      const q = (
        /** @type CompiledMode */
        U
      );
      if (U.isCompiled) return q;
      [
        ye,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        Ut,
        gt,
        _t
      ].forEach((ue) => ue(U, P)), h.compilerExtensions.forEach((ue) => ue(U, P)), U.__beforeBegin = null, [
        ke,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        ct,
        // default to 1 relevance if not specified
        nt
      ].forEach((ue) => ue(U, P)), U.isCompiled = !0;
      let he = null;
      return typeof U.keywords == "object" && U.keywords.$pattern && (U.keywords = Object.assign({}, U.keywords), he = U.keywords.$pattern, delete U.keywords.$pattern), he = he || /\w+/, U.keywords && (U.keywords = dt(U.keywords, h.case_insensitive)), q.keywordPatternRe = S(he, !0), P && (U.begin || (U.begin = /\B|\b/), q.beginRe = S(q.begin), !U.end && !U.endsWithParent && (U.end = /\B|\b/), U.end && (q.endRe = S(q.end)), q.terminatorEnd = f(q.end) || "", U.endsWithParent && P.terminatorEnd && (q.terminatorEnd += (U.end ? "|" : "") + P.terminatorEnd)), U.illegal && (q.illegalRe = S(
        /** @type {RegExp | string} */
        U.illegal
      )), U.contains || (U.contains = []), U.contains = [].concat(...U.contains.map(function(ue) {
        return Gt(ue === "self" ? U : ue);
      })), U.contains.forEach(function(ue) {
        _e(
          /** @type Mode */
          ue,
          q
        );
      }), U.starts && _e(U.starts, P), q.matcher = ce(q), q;
    }
    if (h.compilerExtensions || (h.compilerExtensions = []), h.contains && h.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return h.classNameAliases = e(h.classNameAliases || {}), _e(
      /** @type Mode */
      h
    );
  }
  function bt(h) {
    return h ? h.endsWithParent || bt(h.starts) : !1;
  }
  function Gt(h) {
    return h.variants && !h.cachedVariants && (h.cachedVariants = h.variants.map(function(S) {
      return e(h, { variants: null }, S);
    })), h.cachedVariants ? h.cachedVariants : bt(h) ? e(h, { starts: h.starts ? e(h.starts) : null }) : Object.isFrozen(h) ? e(h) : h;
  }
  var qt = "11.11.1";
  class Wt extends Error {
    constructor(S, M) {
      super(S), this.name = "HTMLInjectionError", this.html = M;
    }
  }
  const at = n, mt = e, Q = /* @__PURE__ */ Symbol("nomatch"), Je = 7, $e = function(h) {
    const S = /* @__PURE__ */ Object.create(null), M = /* @__PURE__ */ Object.create(null), V = [];
    let ce = !0;
    const _e = "Could not find the language '{}', did you forget to load/include a language module?", U = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let P = {
      ignoreUnescapedHTML: !1,
      throwUnescapedHTML: !1,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      // beta configuration options, subject to change, welcome to discuss
      // https://github.com/highlightjs/highlight.js/issues/1086
      __emitter: u
    };
    function q(C) {
      return P.noHighlightRe.test(C);
    }
    function he(C) {
      let z = C.className + " ";
      z += C.parentNode ? C.parentNode.className : "";
      const Y = P.languageDetectRe.exec(z);
      if (Y) {
        const ne = Ke(Y[1]);
        return ne || (Xe(_e.replace("{}", Y[1])), Xe("Falling back to no-highlight mode for this block.", C)), ne ? Y[1] : "no-highlight";
      }
      return z.split(/\s+/).find((ne) => q(ne) || Ke(ne));
    }
    function ue(C, z, Y) {
      let ne = "", de = "";
      typeof z == "object" ? (ne = C, Y = z.ignoreIllegals, de = z.language) : (Ee("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Ee("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), de = C, ne = z), Y === void 0 && (Y = !0);
      const Re = {
        code: ne,
        language: de
      };
      Et("before:highlight", Re);
      const Ge = Re.result ? Re.result : rt(Re.language, Re.code, Y);
      return Ge.code = Re.code, Et("after:highlight", Ge), Ge;
    }
    function rt(C, z, Y, ne) {
      const de = /* @__PURE__ */ Object.create(null);
      function Re(L, $) {
        return L.keywords[$];
      }
      function Ge() {
        if (!Z.keywords) {
          ge.addText(ie);
          return;
        }
        let L = 0;
        Z.keywordPatternRe.lastIndex = 0;
        let $ = Z.keywordPatternRe.exec(ie), X = "";
        for (; $; ) {
          X += ie.substring(L, $.index);
          const J = Me.case_insensitive ? $[0].toLowerCase() : $[0], be = Re(Z, J);
          if (be) {
            const [Ue, la] = be;
            if (ge.addText(X), X = "", de[J] = (de[J] || 0) + 1, de[J] <= Je && (xt += la), Ue.startsWith("_"))
              X += $[0];
            else {
              const ca = Me.classNameAliases[Ue] || Ue;
              Ie($[0], ca);
            }
          } else
            X += $[0];
          L = Z.keywordPatternRe.lastIndex, $ = Z.keywordPatternRe.exec(ie);
        }
        X += ie.substring(L), ge.addText(X);
      }
      function yt() {
        if (ie === "") return;
        let L = null;
        if (typeof Z.subLanguage == "string") {
          if (!S[Z.subLanguage]) {
            ge.addText(ie);
            return;
          }
          L = rt(Z.subLanguage, ie, !0, pi[Z.subLanguage]), pi[Z.subLanguage] = /** @type {CompiledMode} */
          L._top;
        } else
          L = Vt(ie, Z.subLanguage.length ? Z.subLanguage : null);
        Z.relevance > 0 && (xt += L.relevance), ge.__addSublanguage(L._emitter, L.language);
      }
      function we() {
        Z.subLanguage != null ? yt() : Ge(), ie = "";
      }
      function Ie(L, $) {
        L !== "" && (ge.startScope($), ge.addText(L), ge.endScope());
      }
      function ci(L, $) {
        let X = 1;
        const J = $.length - 1;
        for (; X <= J; ) {
          if (!L._emit[X]) {
            X++;
            continue;
          }
          const be = Me.classNameAliases[L[X]] || L[X], Ue = $[X];
          be ? Ie(Ue, be) : (ie = Ue, Ge(), ie = ""), X++;
        }
      }
      function _i(L, $) {
        return L.scope && typeof L.scope == "string" && ge.openNode(Me.classNameAliases[L.scope] || L.scope), L.beginScope && (L.beginScope._wrap ? (Ie(ie, Me.classNameAliases[L.beginScope._wrap] || L.beginScope._wrap), ie = "") : L.beginScope._multi && (ci(L.beginScope, $), ie = "")), Z = Object.create(L, { parent: { value: Z } }), Z;
      }
      function ui(L, $, X) {
        let J = R(L.endRe, X);
        if (J) {
          if (L["on:end"]) {
            const be = new t(L);
            L["on:end"]($, be), be.isMatchIgnored && (J = !1);
          }
          if (J) {
            for (; L.endsParent && L.parent; )
              L = L.parent;
            return L;
          }
        }
        if (L.endsWithParent)
          return ui(L.parent, $, X);
      }
      function ia(L) {
        return Z.matcher.regexIndex === 0 ? (ie += L[0], 1) : (jt = !0, 0);
      }
      function sa(L) {
        const $ = L[0], X = L.rule, J = new t(X), be = [X.__beforeBegin, X["on:begin"]];
        for (const Ue of be)
          if (Ue && (Ue(L, J), J.isMatchIgnored))
            return ia($);
        return X.skip ? ie += $ : (X.excludeBegin && (ie += $), we(), !X.returnBegin && !X.excludeBegin && (ie = $)), _i(X, L), X.returnBegin ? 0 : $.length;
      }
      function aa(L) {
        const $ = L[0], X = z.substring(L.index), J = ui(Z, L, X);
        if (!J)
          return Q;
        const be = Z;
        Z.endScope && Z.endScope._wrap ? (we(), Ie($, Z.endScope._wrap)) : Z.endScope && Z.endScope._multi ? (we(), ci(Z.endScope, L)) : be.skip ? ie += $ : (be.returnEnd || be.excludeEnd || (ie += $), we(), be.excludeEnd && (ie = $));
        do
          Z.scope && ge.closeNode(), !Z.skip && !Z.subLanguage && (xt += Z.relevance), Z = Z.parent;
        while (Z !== J.parent);
        return J.starts && _i(J.starts, L), be.returnEnd ? 0 : $.length;
      }
      function ra() {
        const L = [];
        for (let $ = Z; $ !== Me; $ = $.parent)
          $.scope && L.unshift($.scope);
        L.forEach(($) => ge.openNode($));
      }
      let wt = {};
      function di(L, $) {
        const X = $ && $[0];
        if (ie += L, X == null)
          return we(), 0;
        if (wt.type === "begin" && $.type === "end" && wt.index === $.index && X === "") {
          if (ie += z.slice($.index, $.index + 1), !ce) {
            const J = new Error(`0 width match regex (${C})`);
            throw J.languageName = C, J.badRule = wt.rule, J;
          }
          return 1;
        }
        if (wt = $, $.type === "begin")
          return sa($);
        if ($.type === "illegal" && !Y) {
          const J = new Error('Illegal lexeme "' + X + '" for mode "' + (Z.scope || "<unnamed>") + '"');
          throw J.mode = Z, J;
        } else if ($.type === "end") {
          const J = aa($);
          if (J !== Q)
            return J;
        }
        if ($.type === "illegal" && X === "")
          return ie += `
`, 1;
        if (Yt > 1e5 && Yt > $.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return ie += X, X.length;
      }
      const Me = Ke(C);
      if (!Me)
        throw Pe(_e.replace("{}", C)), new Error('Unknown language: "' + C + '"');
      const oa = Kt(Me);
      let Xt = "", Z = ne || oa;
      const pi = {}, ge = new P.__emitter(P);
      ra();
      let ie = "", xt = 0, Ye = 0, Yt = 0, jt = !1;
      try {
        if (Me.__emitTokens)
          Me.__emitTokens(z, ge);
        else {
          for (Z.matcher.considerAll(); ; ) {
            Yt++, jt ? jt = !1 : Z.matcher.considerAll(), Z.matcher.lastIndex = Ye;
            const L = Z.matcher.exec(z);
            if (!L) break;
            const $ = z.substring(Ye, L.index), X = di($, L);
            Ye = L.index + X;
          }
          di(z.substring(Ye));
        }
        return ge.finalize(), Xt = ge.toHTML(), {
          language: C,
          value: Xt,
          relevance: xt,
          illegal: !1,
          _emitter: ge,
          _top: Z
        };
      } catch (L) {
        if (L.message && L.message.includes("Illegal"))
          return {
            language: C,
            value: at(z),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: L.message,
              index: Ye,
              context: z.slice(Ye - 100, Ye + 100),
              mode: L.mode,
              resultSoFar: Xt
            },
            _emitter: ge
          };
        if (ce)
          return {
            language: C,
            value: at(z),
            illegal: !1,
            relevance: 0,
            errorRaised: L,
            _emitter: ge,
            _top: Z
          };
        throw L;
      }
    }
    function Ht(C) {
      const z = {
        value: at(C),
        illegal: !1,
        relevance: 0,
        _top: U,
        _emitter: new P.__emitter(P)
      };
      return z._emitter.addText(C), z;
    }
    function Vt(C, z) {
      z = z || P.languages || Object.keys(S);
      const Y = Ht(C), ne = z.filter(Ke).filter(li).map(
        (we) => rt(we, C, !1)
      );
      ne.unshift(Y);
      const de = ne.sort((we, Ie) => {
        if (we.relevance !== Ie.relevance) return Ie.relevance - we.relevance;
        if (we.language && Ie.language) {
          if (Ke(we.language).supersetOf === Ie.language)
            return 1;
          if (Ke(Ie.language).supersetOf === we.language)
            return -1;
        }
        return 0;
      }), [Re, Ge] = de, yt = Re;
      return yt.secondBest = Ge, yt;
    }
    function Hs(C, z, Y) {
      const ne = z && M[z] || Y;
      C.classList.add("hljs"), C.classList.add(`language-${ne}`);
    }
    function Zt(C) {
      let z = null;
      const Y = he(C);
      if (q(Y)) return;
      if (Et(
        "before:highlightElement",
        { el: C, language: Y }
      ), C.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", C);
        return;
      }
      if (C.children.length > 0 && (P.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(C)), P.throwUnescapedHTML))
        throw new Wt(
          "One of your code blocks includes unescaped HTML.",
          C.innerHTML
        );
      z = C;
      const ne = z.textContent, de = Y ? ue(ne, { language: Y, ignoreIllegals: !0 }) : Vt(ne);
      C.innerHTML = de.value, C.dataset.highlighted = "yes", Hs(C, Y, de.language), C.result = {
        language: de.language,
        // TODO: remove with version 11.0
        re: de.relevance,
        relevance: de.relevance
      }, de.secondBest && (C.secondBest = {
        language: de.secondBest.language,
        relevance: de.secondBest.relevance
      }), Et("after:highlightElement", { el: C, result: de, text: ne });
    }
    function Vs(C) {
      P = mt(P, C);
    }
    const Zs = () => {
      vt(), Ee("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function Xs() {
      vt(), Ee("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let ri = !1;
    function vt() {
      function C() {
        vt();
      }
      if (document.readyState === "loading") {
        ri || window.addEventListener("DOMContentLoaded", C, !1), ri = !0;
        return;
      }
      document.querySelectorAll(P.cssSelector).forEach(Zt);
    }
    function Ys(C, z) {
      let Y = null;
      try {
        Y = z(h);
      } catch (ne) {
        if (Pe("Language definition for '{}' could not be registered.".replace("{}", C)), ce)
          Pe(ne);
        else
          throw ne;
        Y = U;
      }
      Y.name || (Y.name = C), S[C] = Y, Y.rawDefinition = z.bind(null, h), Y.aliases && oi(Y.aliases, { languageName: C });
    }
    function js(C) {
      delete S[C];
      for (const z of Object.keys(M))
        M[z] === C && delete M[z];
    }
    function Qs() {
      return Object.keys(S);
    }
    function Ke(C) {
      return C = (C || "").toLowerCase(), S[C] || S[M[C]];
    }
    function oi(C, { languageName: z }) {
      typeof C == "string" && (C = [C]), C.forEach((Y) => {
        M[Y.toLowerCase()] = z;
      });
    }
    function li(C) {
      const z = Ke(C);
      return z && !z.disableAutodetect;
    }
    function Js(C) {
      C["before:highlightBlock"] && !C["before:highlightElement"] && (C["before:highlightElement"] = (z) => {
        C["before:highlightBlock"](
          Object.assign({ block: z.el }, z)
        );
      }), C["after:highlightBlock"] && !C["after:highlightElement"] && (C["after:highlightElement"] = (z) => {
        C["after:highlightBlock"](
          Object.assign({ block: z.el }, z)
        );
      });
    }
    function ea(C) {
      Js(C), V.push(C);
    }
    function ta(C) {
      const z = V.indexOf(C);
      z !== -1 && V.splice(z, 1);
    }
    function Et(C, z) {
      const Y = C;
      V.forEach(function(ne) {
        ne[Y] && ne[Y](z);
      });
    }
    function na(C) {
      return Ee("10.7.0", "highlightBlock will be removed entirely in v12.0"), Ee("10.7.0", "Please use highlightElement now."), Zt(C);
    }
    Object.assign(h, {
      highlight: ue,
      highlightAuto: Vt,
      highlightAll: vt,
      highlightElement: Zt,
      // TODO: Remove with v12 API
      highlightBlock: na,
      configure: Vs,
      initHighlighting: Zs,
      initHighlightingOnLoad: Xs,
      registerLanguage: Ys,
      unregisterLanguage: js,
      listLanguages: Qs,
      getLanguage: Ke,
      registerAliases: oi,
      autoDetection: li,
      inherit: mt,
      addPlugin: ea,
      removePlugin: ta
    }), h.debugMode = function() {
      ce = !1;
    }, h.safeMode = function() {
      ce = !0;
    }, h.versionString = qt, h.regex = {
      concat: k,
      lookahead: m,
      either: o,
      optional: x,
      anyNumberOfTimes: N
    };
    for (const C in fe)
      typeof fe[C] == "object" && a(fe[C]);
    return Object.assign(h, fe), h;
  }, ze = $e({});
  return ze.newInstance = () => $e({}), gn = ze, ze.HighlightJS = ze, ze.default = ze, gn;
}
var bn, Zi;
function Uo() {
  if (Zi) return bn;
  Zi = 1;
  function a(t) {
    const n = t.regex, e = n.concat(/[\p{L}_]/u, n.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), i = /[\p{L}0-9._:-]+/u, r = {
      className: "symbol",
      begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
    }, _ = {
      begin: /\s/,
      contains: [
        {
          className: "keyword",
          begin: /#?[a-z_][a-z1-9_-]+/,
          illegal: /\n/
        }
      ]
    }, l = t.inherit(_, {
      begin: /\(/,
      end: /\)/
    }), c = t.inherit(t.APOS_STRING_MODE, { className: "string" }), g = t.inherit(t.QUOTE_STRING_MODE, { className: "string" }), u = {
      endsWithParent: !0,
      illegal: /</,
      relevance: 0,
      contains: [
        {
          className: "attr",
          begin: i,
          relevance: 0
        },
        {
          begin: /=\s*/,
          relevance: 0,
          contains: [
            {
              className: "string",
              endsParent: !0,
              variants: [
                {
                  begin: /"/,
                  end: /"/,
                  contains: [r]
                },
                {
                  begin: /'/,
                  end: /'/,
                  contains: [r]
                },
                { begin: /[^\s"'=<>`]+/ }
              ]
            }
          ]
        }
      ]
    };
    return {
      name: "HTML, XML",
      aliases: [
        "html",
        "xhtml",
        "rss",
        "atom",
        "xjb",
        "xsd",
        "xsl",
        "plist",
        "wsf",
        "svg"
      ],
      case_insensitive: !0,
      unicodeRegex: !0,
      contains: [
        {
          className: "meta",
          begin: /<![a-z]/,
          end: />/,
          relevance: 10,
          contains: [
            _,
            g,
            c,
            l,
            {
              begin: /\[/,
              end: /\]/,
              contains: [
                {
                  className: "meta",
                  begin: /<![a-z]/,
                  end: />/,
                  contains: [
                    _,
                    l,
                    g,
                    c
                  ]
                }
              ]
            }
          ]
        },
        t.COMMENT(
          /<!--/,
          /-->/,
          { relevance: 10 }
        ),
        {
          begin: /<!\[CDATA\[/,
          end: /\]\]>/,
          relevance: 10
        },
        r,
        // xml processing instructions
        {
          className: "meta",
          end: /\?>/,
          variants: [
            {
              begin: /<\?xml/,
              relevance: 10,
              contains: [
                g
              ]
            },
            {
              begin: /<\?[a-z][a-z0-9]+/
            }
          ]
        },
        {
          className: "tag",
          /*
          The lookahead pattern (?=...) ensures that 'begin' only matches
          '<style' as a single word, followed by a whitespace or an
          ending bracket.
          */
          begin: /<style(?=\s|>)/,
          end: />/,
          keywords: { name: "style" },
          contains: [u],
          starts: {
            end: /<\/style>/,
            returnEnd: !0,
            subLanguage: [
              "css",
              "xml"
            ]
          }
        },
        {
          className: "tag",
          // See the comment in the <style tag about the lookahead pattern
          begin: /<script(?=\s|>)/,
          end: />/,
          keywords: { name: "script" },
          contains: [u],
          starts: {
            end: /<\/script>/,
            returnEnd: !0,
            subLanguage: [
              "javascript",
              "handlebars",
              "xml"
            ]
          }
        },
        // we need this for now for jSX
        {
          className: "tag",
          begin: /<>|<\/>/
        },
        // open tag
        {
          className: "tag",
          begin: n.concat(
            /</,
            n.lookahead(n.concat(
              e,
              // <tag/>
              // <tag>
              // <tag ...
              n.either(/\/>/, />/, /\s/)
            ))
          ),
          end: /\/?>/,
          contains: [
            {
              className: "name",
              begin: e,
              relevance: 0,
              starts: u
            }
          ]
        },
        // close tag
        {
          className: "tag",
          begin: n.concat(
            /<\//,
            n.lookahead(n.concat(
              e,
              />/
            ))
          ),
          contains: [
            {
              className: "name",
              begin: e,
              relevance: 0
            },
            {
              begin: />/,
              relevance: 0,
              endsParent: !0
            }
          ]
        }
      ]
    };
  }
  return bn = a, bn;
}
var mn, Xi;
function Fo() {
  if (Xi) return mn;
  Xi = 1;
  function a(t) {
    const n = t.regex, e = {}, i = {
      begin: /\$\{/,
      end: /\}/,
      contains: [
        "self",
        {
          begin: /:-/,
          contains: [e]
        }
        // default values
      ]
    };
    Object.assign(e, {
      className: "variable",
      variants: [
        { begin: n.concat(
          /\$[\w\d#@][\w\d_]*/,
          // negative look-ahead tries to avoid matching patterns that are not
          // Perl at all like $ident$, @ident@, etc.
          "(?![\\w\\d])(?![$])"
        ) },
        i
      ]
    });
    const r = {
      className: "subst",
      begin: /\$\(/,
      end: /\)/,
      contains: [t.BACKSLASH_ESCAPE]
    }, _ = t.inherit(
      t.COMMENT(),
      {
        match: [
          /(^|\s)/,
          /#.*$/
        ],
        scope: {
          2: "comment"
        }
      }
    ), l = {
      begin: /<<-?\s*(?=\w+)/,
      starts: { contains: [
        t.END_SAME_AS_BEGIN({
          begin: /(\w+)/,
          end: /(\w+)/,
          className: "string"
        })
      ] }
    }, c = {
      className: "string",
      begin: /"/,
      end: /"/,
      contains: [
        t.BACKSLASH_ESCAPE,
        e,
        r
      ]
    };
    r.contains.push(c);
    const g = {
      match: /\\"/
    }, u = {
      className: "string",
      begin: /'/,
      end: /'/
    }, f = {
      match: /\\'/
    }, m = {
      begin: /\$?\(\(/,
      end: /\)\)/,
      contains: [
        {
          begin: /\d+#[0-9a-f]+/,
          className: "number"
        },
        t.NUMBER_MODE,
        e
      ]
    }, N = [
      "fish",
      "bash",
      "zsh",
      "sh",
      "csh",
      "ksh",
      "tcsh",
      "dash",
      "scsh"
    ], x = t.SHEBANG({
      binary: `(${N.join("|")})`,
      relevance: 10
    }), k = {
      className: "function",
      begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
      returnBegin: !0,
      contains: [t.inherit(t.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
      relevance: 0
    }, d = [
      "if",
      "then",
      "else",
      "elif",
      "fi",
      "time",
      "for",
      "while",
      "until",
      "in",
      "do",
      "done",
      "case",
      "esac",
      "coproc",
      "function",
      "select"
    ], o = [
      "true",
      "false"
    ], b = { match: /(\/[a-z._-]+)+/ }, R = [
      "break",
      "cd",
      "continue",
      "eval",
      "exec",
      "exit",
      "export",
      "getopts",
      "hash",
      "pwd",
      "readonly",
      "return",
      "shift",
      "test",
      "times",
      "trap",
      "umask",
      "unset"
    ], T = [
      "alias",
      "bind",
      "builtin",
      "caller",
      "command",
      "declare",
      "echo",
      "enable",
      "help",
      "let",
      "local",
      "logout",
      "mapfile",
      "printf",
      "read",
      "readarray",
      "source",
      "sudo",
      "type",
      "typeset",
      "ulimit",
      "unalias"
    ], A = [
      "autoload",
      "bg",
      "bindkey",
      "bye",
      "cap",
      "chdir",
      "clone",
      "comparguments",
      "compcall",
      "compctl",
      "compdescribe",
      "compfiles",
      "compgroups",
      "compquote",
      "comptags",
      "comptry",
      "compvalues",
      "dirs",
      "disable",
      "disown",
      "echotc",
      "echoti",
      "emulate",
      "fc",
      "fg",
      "float",
      "functions",
      "getcap",
      "getln",
      "history",
      "integer",
      "jobs",
      "kill",
      "limit",
      "log",
      "noglob",
      "popd",
      "print",
      "pushd",
      "pushln",
      "rehash",
      "sched",
      "setcap",
      "setopt",
      "stat",
      "suspend",
      "ttyctl",
      "unfunction",
      "unhash",
      "unlimit",
      "unsetopt",
      "vared",
      "wait",
      "whence",
      "where",
      "which",
      "zcompile",
      "zformat",
      "zftp",
      "zle",
      "zmodload",
      "zparseopts",
      "zprof",
      "zpty",
      "zregexparse",
      "zsocket",
      "zstyle",
      "ztcp"
    ], E = [
      "chcon",
      "chgrp",
      "chown",
      "chmod",
      "cp",
      "dd",
      "df",
      "dir",
      "dircolors",
      "ln",
      "ls",
      "mkdir",
      "mkfifo",
      "mknod",
      "mktemp",
      "mv",
      "realpath",
      "rm",
      "rmdir",
      "shred",
      "sync",
      "touch",
      "truncate",
      "vdir",
      "b2sum",
      "base32",
      "base64",
      "cat",
      "cksum",
      "comm",
      "csplit",
      "cut",
      "expand",
      "fmt",
      "fold",
      "head",
      "join",
      "md5sum",
      "nl",
      "numfmt",
      "od",
      "paste",
      "ptx",
      "pr",
      "sha1sum",
      "sha224sum",
      "sha256sum",
      "sha384sum",
      "sha512sum",
      "shuf",
      "sort",
      "split",
      "sum",
      "tac",
      "tail",
      "tr",
      "tsort",
      "unexpand",
      "uniq",
      "wc",
      "arch",
      "basename",
      "chroot",
      "date",
      "dirname",
      "du",
      "echo",
      "env",
      "expr",
      "factor",
      // "false", // keyword literal already
      "groups",
      "hostid",
      "id",
      "link",
      "logname",
      "nice",
      "nohup",
      "nproc",
      "pathchk",
      "pinky",
      "printenv",
      "printf",
      "pwd",
      "readlink",
      "runcon",
      "seq",
      "sleep",
      "stat",
      "stdbuf",
      "stty",
      "tee",
      "test",
      "timeout",
      // "true", // keyword literal already
      "tty",
      "uname",
      "unlink",
      "uptime",
      "users",
      "who",
      "whoami",
      "yes"
    ];
    return {
      name: "Bash",
      aliases: [
        "sh",
        "zsh"
      ],
      keywords: {
        $pattern: /\b[a-z][a-z0-9._-]+\b/,
        keyword: d,
        literal: o,
        built_in: [
          ...R,
          ...T,
          // Shell modifiers
          "set",
          "shopt",
          ...A,
          ...E
        ]
      },
      contains: [
        x,
        // to catch known shells and boost relevancy
        t.SHEBANG(),
        // to catch unknown shells but still highlight the shebang
        k,
        m,
        _,
        l,
        b,
        c,
        g,
        u,
        f,
        e
      ]
    };
  }
  return mn = a, mn;
}
var vn, Yi;
function $o() {
  if (Yi) return vn;
  Yi = 1;
  function a(t) {
    const n = t.regex, e = t.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }), i = "decltype\\(auto\\)", r = "[a-zA-Z_]\\w*::", l = "(" + i + "|" + n.optional(r) + "[a-zA-Z_]\\w*" + n.optional("<[^<>]+>") + ")", c = {
      className: "type",
      variants: [
        { begin: "\\b[a-z\\d_]*_t\\b" },
        { match: /\batomic_[a-z]{3,6}\b/ }
      ]
    }, u = {
      className: "string",
      variants: [
        {
          begin: '(u8?|U|L)?"',
          end: '"',
          illegal: "\\n",
          contains: [t.BACKSLASH_ESCAPE]
        },
        {
          begin: "(u8?|U|L)?'(" + "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)" + "|.)",
          end: "'",
          illegal: "."
        },
        t.END_SAME_AS_BEGIN({
          begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
          end: /\)([^()\\ ]{0,16})"/
        })
      ]
    }, f = {
      className: "number",
      variants: [
        { match: /\b(0b[01']+)/ },
        { match: /(-?)\b([\d']+(\.[\d']*)?|\.[\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)/ },
        { match: /(-?)\b(0[xX][a-fA-F0-9]+(?:'[a-fA-F0-9]+)*(?:\.[a-fA-F0-9]*(?:'[a-fA-F0-9]*)*)?(?:[pP][-+]?[0-9]+)?(l|L)?(u|U)?)/ },
        { match: /(-?)\b\d+(?:'\d+)*(?:\.\d*(?:'\d*)*)?(?:[eE][-+]?\d+)?/ }
      ],
      relevance: 0
    }, m = {
      className: "meta",
      begin: /#\s*[a-z]+\b/,
      end: /$/,
      keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef elifdef elifndef include" },
      contains: [
        {
          begin: /\\\n/,
          relevance: 0
        },
        t.inherit(u, { className: "string" }),
        {
          className: "string",
          begin: /<.*?>/
        },
        e,
        t.C_BLOCK_COMMENT_MODE
      ]
    }, N = {
      className: "title",
      begin: n.optional(r) + t.IDENT_RE,
      relevance: 0
    }, x = n.optional(r) + t.IDENT_RE + "\\s*\\(", o = {
      keyword: [
        "asm",
        "auto",
        "break",
        "case",
        "continue",
        "default",
        "do",
        "else",
        "enum",
        "extern",
        "for",
        "fortran",
        "goto",
        "if",
        "inline",
        "register",
        "restrict",
        "return",
        "sizeof",
        "typeof",
        "typeof_unqual",
        "struct",
        "switch",
        "typedef",
        "union",
        "volatile",
        "while",
        "_Alignas",
        "_Alignof",
        "_Atomic",
        "_Generic",
        "_Noreturn",
        "_Static_assert",
        "_Thread_local",
        // aliases
        "alignas",
        "alignof",
        "noreturn",
        "static_assert",
        "thread_local",
        // not a C keyword but is, for all intents and purposes, treated exactly like one.
        "_Pragma"
      ],
      type: [
        "float",
        "double",
        "signed",
        "unsigned",
        "int",
        "short",
        "long",
        "char",
        "void",
        "_Bool",
        "_BitInt",
        "_Complex",
        "_Imaginary",
        "_Decimal32",
        "_Decimal64",
        "_Decimal96",
        "_Decimal128",
        "_Decimal64x",
        "_Decimal128x",
        "_Float16",
        "_Float32",
        "_Float64",
        "_Float128",
        "_Float32x",
        "_Float64x",
        "_Float128x",
        // modifiers
        "const",
        "static",
        "constexpr",
        // aliases
        "complex",
        "bool",
        "imaginary"
      ],
      literal: "true false NULL",
      // TODO: apply hinting work similar to what was done in cpp.js
      built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
    }, b = [
      m,
      c,
      e,
      t.C_BLOCK_COMMENT_MODE,
      f,
      u
    ], R = {
      // This mode covers expression context where we can't expect a function
      // definition and shouldn't highlight anything that looks like one:
      // `return some()`, `else if()`, `(x*sum(1, 2))`
      variants: [
        {
          begin: /=/,
          end: /;/
        },
        {
          begin: /\(/,
          end: /\)/
        },
        {
          beginKeywords: "new throw return else",
          end: /;/
        }
      ],
      keywords: o,
      contains: b.concat([
        {
          begin: /\(/,
          end: /\)/,
          keywords: o,
          contains: b.concat(["self"]),
          relevance: 0
        }
      ]),
      relevance: 0
    }, T = {
      begin: "(" + l + "[\\*&\\s]+)+" + x,
      returnBegin: !0,
      end: /[{;=]/,
      excludeEnd: !0,
      keywords: o,
      illegal: /[^\w\s\*&:<>.]/,
      contains: [
        {
          // to prevent it from being confused as the function title
          begin: i,
          keywords: o,
          relevance: 0
        },
        {
          begin: x,
          returnBegin: !0,
          contains: [t.inherit(N, { className: "title.function" })],
          relevance: 0
        },
        // allow for multiple declarations, e.g.:
        // extern void f(int), g(char);
        {
          relevance: 0,
          match: /,/
        },
        {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: o,
          relevance: 0,
          contains: [
            e,
            t.C_BLOCK_COMMENT_MODE,
            u,
            f,
            c,
            // Count matching parentheses.
            {
              begin: /\(/,
              end: /\)/,
              keywords: o,
              relevance: 0,
              contains: [
                "self",
                e,
                t.C_BLOCK_COMMENT_MODE,
                u,
                f,
                c
              ]
            }
          ]
        },
        c,
        e,
        t.C_BLOCK_COMMENT_MODE,
        m
      ]
    };
    return {
      name: "C",
      aliases: ["h"],
      keywords: o,
      // Until differentiations are added between `c` and `cpp`, `c` will
      // not be auto-detected to avoid auto-detect conflicts between C and C++
      disableAutodetect: !0,
      illegal: "</",
      contains: [].concat(
        R,
        T,
        b,
        [
          m,
          {
            begin: t.IDENT_RE + "::",
            keywords: o
          },
          {
            className: "class",
            beginKeywords: "enum class struct union",
            end: /[{;:<>=]/,
            contains: [
              { beginKeywords: "final class struct" },
              t.TITLE_MODE
            ]
          }
        ]
      ),
      exports: {
        preprocessor: m,
        strings: u,
        keywords: o
      }
    };
  }
  return vn = a, vn;
}
var En, ji;
function zo() {
  if (ji) return En;
  ji = 1;
  function a(t) {
    const n = t.regex, e = t.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }), i = "decltype\\(auto\\)", r = "[a-zA-Z_]\\w*::", l = "(?!struct)(" + i + "|" + n.optional(r) + "[a-zA-Z_]\\w*" + n.optional("<[^<>]+>") + ")", c = {
      className: "type",
      begin: "\\b[a-z\\d_]*_t\\b"
    }, u = {
      className: "string",
      variants: [
        {
          begin: '(u8?|U|L)?"',
          end: '"',
          illegal: "\\n",
          contains: [t.BACKSLASH_ESCAPE]
        },
        {
          begin: "(u8?|U|L)?'(" + "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)" + "|.)",
          end: "'",
          illegal: "."
        },
        t.END_SAME_AS_BEGIN({
          begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
          end: /\)([^()\\ ]{0,16})"/
        })
      ]
    }, f = {
      className: "number",
      variants: [
        // Floating-point literal.
        {
          begin: "[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"
        },
        // Integer literal.
        {
          begin: "[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"
          // Note: there are user-defined literal suffixes too, but perhaps having the custom suffix not part of the
          // literal highlight actually makes it stand out more.
        }
      ],
      relevance: 0
    }, m = {
      className: "meta",
      begin: /#\s*[a-z]+\b/,
      end: /$/,
      keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include" },
      contains: [
        {
          begin: /\\\n/,
          relevance: 0
        },
        t.inherit(u, { className: "string" }),
        {
          className: "string",
          begin: /<.*?>/
        },
        e,
        t.C_BLOCK_COMMENT_MODE
      ]
    }, N = {
      className: "title",
      begin: n.optional(r) + t.IDENT_RE,
      relevance: 0
    }, x = n.optional(r) + t.IDENT_RE + "\\s*\\(", k = [
      "alignas",
      "alignof",
      "and",
      "and_eq",
      "asm",
      "atomic_cancel",
      "atomic_commit",
      "atomic_noexcept",
      "auto",
      "bitand",
      "bitor",
      "break",
      "case",
      "catch",
      "class",
      "co_await",
      "co_return",
      "co_yield",
      "compl",
      "concept",
      "const_cast|10",
      "consteval",
      "constexpr",
      "constinit",
      "continue",
      "decltype",
      "default",
      "delete",
      "do",
      "dynamic_cast|10",
      "else",
      "enum",
      "explicit",
      "export",
      "extern",
      "false",
      "final",
      "for",
      "friend",
      "goto",
      "if",
      "import",
      "inline",
      "module",
      "mutable",
      "namespace",
      "new",
      "noexcept",
      "not",
      "not_eq",
      "nullptr",
      "operator",
      "or",
      "or_eq",
      "override",
      "private",
      "protected",
      "public",
      "reflexpr",
      "register",
      "reinterpret_cast|10",
      "requires",
      "return",
      "sizeof",
      "static_assert",
      "static_cast|10",
      "struct",
      "switch",
      "synchronized",
      "template",
      "this",
      "thread_local",
      "throw",
      "transaction_safe",
      "transaction_safe_dynamic",
      "true",
      "try",
      "typedef",
      "typeid",
      "typename",
      "union",
      "using",
      "virtual",
      "volatile",
      "while",
      "xor",
      "xor_eq"
    ], d = [
      "bool",
      "char",
      "char16_t",
      "char32_t",
      "char8_t",
      "double",
      "float",
      "int",
      "long",
      "short",
      "void",
      "wchar_t",
      "unsigned",
      "signed",
      "const",
      "static"
    ], o = [
      "any",
      "auto_ptr",
      "barrier",
      "binary_semaphore",
      "bitset",
      "complex",
      "condition_variable",
      "condition_variable_any",
      "counting_semaphore",
      "deque",
      "false_type",
      "flat_map",
      "flat_set",
      "future",
      "imaginary",
      "initializer_list",
      "istringstream",
      "jthread",
      "latch",
      "lock_guard",
      "multimap",
      "multiset",
      "mutex",
      "optional",
      "ostringstream",
      "packaged_task",
      "pair",
      "promise",
      "priority_queue",
      "queue",
      "recursive_mutex",
      "recursive_timed_mutex",
      "scoped_lock",
      "set",
      "shared_future",
      "shared_lock",
      "shared_mutex",
      "shared_timed_mutex",
      "shared_ptr",
      "stack",
      "string_view",
      "stringstream",
      "timed_mutex",
      "thread",
      "true_type",
      "tuple",
      "unique_lock",
      "unique_ptr",
      "unordered_map",
      "unordered_multimap",
      "unordered_multiset",
      "unordered_set",
      "variant",
      "vector",
      "weak_ptr",
      "wstring",
      "wstring_view"
    ], b = [
      "abort",
      "abs",
      "acos",
      "apply",
      "as_const",
      "asin",
      "atan",
      "atan2",
      "calloc",
      "ceil",
      "cerr",
      "cin",
      "clog",
      "cos",
      "cosh",
      "cout",
      "declval",
      "endl",
      "exchange",
      "exit",
      "exp",
      "fabs",
      "floor",
      "fmod",
      "forward",
      "fprintf",
      "fputs",
      "free",
      "frexp",
      "fscanf",
      "future",
      "invoke",
      "isalnum",
      "isalpha",
      "iscntrl",
      "isdigit",
      "isgraph",
      "islower",
      "isprint",
      "ispunct",
      "isspace",
      "isupper",
      "isxdigit",
      "labs",
      "launder",
      "ldexp",
      "log",
      "log10",
      "make_pair",
      "make_shared",
      "make_shared_for_overwrite",
      "make_tuple",
      "make_unique",
      "malloc",
      "memchr",
      "memcmp",
      "memcpy",
      "memset",
      "modf",
      "move",
      "pow",
      "printf",
      "putchar",
      "puts",
      "realloc",
      "scanf",
      "sin",
      "sinh",
      "snprintf",
      "sprintf",
      "sqrt",
      "sscanf",
      "std",
      "stderr",
      "stdin",
      "stdout",
      "strcat",
      "strchr",
      "strcmp",
      "strcpy",
      "strcspn",
      "strlen",
      "strncat",
      "strncmp",
      "strncpy",
      "strpbrk",
      "strrchr",
      "strspn",
      "strstr",
      "swap",
      "tan",
      "tanh",
      "terminate",
      "to_underlying",
      "tolower",
      "toupper",
      "vfprintf",
      "visit",
      "vprintf",
      "vsprintf"
    ], A = {
      type: d,
      keyword: k,
      literal: [
        "NULL",
        "false",
        "nullopt",
        "nullptr",
        "true"
      ],
      built_in: ["_Pragma"],
      _type_hints: o
    }, E = {
      className: "function.dispatch",
      relevance: 0,
      keywords: {
        // Only for relevance, not highlighting.
        _hint: b
      },
      begin: n.concat(
        /\b/,
        /(?!decltype)/,
        /(?!if)/,
        /(?!for)/,
        /(?!switch)/,
        /(?!while)/,
        t.IDENT_RE,
        n.lookahead(/(<[^<>]+>|)\s*\(/)
      )
    }, v = [
      E,
      m,
      c,
      e,
      t.C_BLOCK_COMMENT_MODE,
      f,
      u
    ], p = {
      // This mode covers expression context where we can't expect a function
      // definition and shouldn't highlight anything that looks like one:
      // `return some()`, `else if()`, `(x*sum(1, 2))`
      variants: [
        {
          begin: /=/,
          end: /;/
        },
        {
          begin: /\(/,
          end: /\)/
        },
        {
          beginKeywords: "new throw return else",
          end: /;/
        }
      ],
      keywords: A,
      contains: v.concat([
        {
          begin: /\(/,
          end: /\)/,
          keywords: A,
          contains: v.concat(["self"]),
          relevance: 0
        }
      ]),
      relevance: 0
    }, w = {
      className: "function",
      begin: "(" + l + "[\\*&\\s]+)+" + x,
      returnBegin: !0,
      end: /[{;=]/,
      excludeEnd: !0,
      keywords: A,
      illegal: /[^\w\s\*&:<>.]/,
      contains: [
        {
          // to prevent it from being confused as the function title
          begin: i,
          keywords: A,
          relevance: 0
        },
        {
          begin: x,
          returnBegin: !0,
          contains: [N],
          relevance: 0
        },
        // needed because we do not have look-behind on the below rule
        // to prevent it from grabbing the final : in a :: pair
        {
          begin: /::/,
          relevance: 0
        },
        // initializers
        {
          begin: /:/,
          endsWithParent: !0,
          contains: [
            u,
            f
          ]
        },
        // allow for multiple declarations, e.g.:
        // extern void f(int), g(char);
        {
          relevance: 0,
          match: /,/
        },
        {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: A,
          relevance: 0,
          contains: [
            e,
            t.C_BLOCK_COMMENT_MODE,
            u,
            f,
            c,
            // Count matching parentheses.
            {
              begin: /\(/,
              end: /\)/,
              keywords: A,
              relevance: 0,
              contains: [
                "self",
                e,
                t.C_BLOCK_COMMENT_MODE,
                u,
                f,
                c
              ]
            }
          ]
        },
        c,
        e,
        t.C_BLOCK_COMMENT_MODE,
        m
      ]
    };
    return {
      name: "C++",
      aliases: [
        "cc",
        "c++",
        "h++",
        "hpp",
        "hh",
        "hxx",
        "cxx"
      ],
      keywords: A,
      illegal: "</",
      classNameAliases: { "function.dispatch": "built_in" },
      contains: [].concat(
        p,
        w,
        E,
        v,
        [
          m,
          {
            // containers: ie, `vector <int> rooms (9);`
            begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",
            end: ">",
            keywords: A,
            contains: [
              "self",
              c
            ]
          },
          {
            begin: t.IDENT_RE + "::",
            keywords: A
          },
          {
            match: [
              // extra complexity to deal with `enum class` and `enum struct`
              /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
              /\s+/,
              /\w+/
            ],
            className: {
              1: "keyword",
              3: "title.class"
            }
          }
        ]
      )
    };
  }
  return En = a, En;
}
var yn, Qi;
function Ko() {
  if (Qi) return yn;
  Qi = 1;
  function a(t) {
    const n = [
      "bool",
      "byte",
      "char",
      "decimal",
      "delegate",
      "double",
      "dynamic",
      "enum",
      "float",
      "int",
      "long",
      "nint",
      "nuint",
      "object",
      "sbyte",
      "short",
      "string",
      "ulong",
      "uint",
      "ushort"
    ], e = [
      "public",
      "private",
      "protected",
      "static",
      "internal",
      "protected",
      "abstract",
      "async",
      "extern",
      "override",
      "unsafe",
      "virtual",
      "new",
      "sealed",
      "partial"
    ], i = [
      "default",
      "false",
      "null",
      "true"
    ], r = [
      "abstract",
      "as",
      "base",
      "break",
      "case",
      "catch",
      "class",
      "const",
      "continue",
      "do",
      "else",
      "event",
      "explicit",
      "extern",
      "finally",
      "fixed",
      "for",
      "foreach",
      "goto",
      "if",
      "implicit",
      "in",
      "interface",
      "internal",
      "is",
      "lock",
      "namespace",
      "new",
      "operator",
      "out",
      "override",
      "params",
      "private",
      "protected",
      "public",
      "readonly",
      "record",
      "ref",
      "return",
      "scoped",
      "sealed",
      "sizeof",
      "stackalloc",
      "static",
      "struct",
      "switch",
      "this",
      "throw",
      "try",
      "typeof",
      "unchecked",
      "unsafe",
      "using",
      "virtual",
      "void",
      "volatile",
      "while"
    ], _ = [
      "add",
      "alias",
      "and",
      "ascending",
      "args",
      "async",
      "await",
      "by",
      "descending",
      "dynamic",
      "equals",
      "file",
      "from",
      "get",
      "global",
      "group",
      "init",
      "into",
      "join",
      "let",
      "nameof",
      "not",
      "notnull",
      "on",
      "or",
      "orderby",
      "partial",
      "record",
      "remove",
      "required",
      "scoped",
      "select",
      "set",
      "unmanaged",
      "value|0",
      "var",
      "when",
      "where",
      "with",
      "yield"
    ], l = {
      keyword: r.concat(_),
      built_in: n,
      literal: i
    }, c = t.inherit(t.TITLE_MODE, { begin: "[a-zA-Z](\\.?\\w)*" }), g = {
      className: "number",
      variants: [
        { begin: "\\b(0b[01']+)" },
        { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)" },
        { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }
      ],
      relevance: 0
    }, u = {
      className: "string",
      begin: /"""("*)(?!")(.|\n)*?"""\1/,
      relevance: 1
    }, f = {
      className: "string",
      begin: '@"',
      end: '"',
      contains: [{ begin: '""' }]
    }, m = t.inherit(f, { illegal: /\n/ }), N = {
      className: "subst",
      begin: /\{/,
      end: /\}/,
      keywords: l
    }, x = t.inherit(N, { illegal: /\n/ }), k = {
      className: "string",
      begin: /\$"/,
      end: '"',
      illegal: /\n/,
      contains: [
        { begin: /\{\{/ },
        { begin: /\}\}/ },
        t.BACKSLASH_ESCAPE,
        x
      ]
    }, d = {
      className: "string",
      begin: /\$@"/,
      end: '"',
      contains: [
        { begin: /\{\{/ },
        { begin: /\}\}/ },
        { begin: '""' },
        N
      ]
    }, o = t.inherit(d, {
      illegal: /\n/,
      contains: [
        { begin: /\{\{/ },
        { begin: /\}\}/ },
        { begin: '""' },
        x
      ]
    });
    N.contains = [
      d,
      k,
      f,
      t.APOS_STRING_MODE,
      t.QUOTE_STRING_MODE,
      g,
      t.C_BLOCK_COMMENT_MODE
    ], x.contains = [
      o,
      k,
      m,
      t.APOS_STRING_MODE,
      t.QUOTE_STRING_MODE,
      g,
      t.inherit(t.C_BLOCK_COMMENT_MODE, { illegal: /\n/ })
    ];
    const b = { variants: [
      u,
      d,
      k,
      f,
      t.APOS_STRING_MODE,
      t.QUOTE_STRING_MODE
    ] }, R = {
      begin: "<",
      end: ">",
      contains: [
        { beginKeywords: "in out" },
        c
      ]
    }, T = t.IDENT_RE + "(<" + t.IDENT_RE + "(\\s*,\\s*" + t.IDENT_RE + ")*>)?(\\[\\])?", A = {
      // prevents expressions like `@class` from incorrect flagging
      // `class` as a keyword
      begin: "@" + t.IDENT_RE,
      relevance: 0
    };
    return {
      name: "C#",
      aliases: [
        "cs",
        "c#"
      ],
      keywords: l,
      illegal: /::/,
      contains: [
        t.COMMENT(
          "///",
          "$",
          {
            returnBegin: !0,
            contains: [
              {
                className: "doctag",
                variants: [
                  {
                    begin: "///",
                    relevance: 0
                  },
                  { begin: "<!--|-->" },
                  {
                    begin: "</?",
                    end: ">"
                  }
                ]
              }
            ]
          }
        ),
        t.C_LINE_COMMENT_MODE,
        t.C_BLOCK_COMMENT_MODE,
        {
          className: "meta",
          begin: "#",
          end: "$",
          keywords: { keyword: "if else elif endif define undef warning error line region endregion pragma checksum" }
        },
        b,
        g,
        {
          beginKeywords: "class interface",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:,]/,
          contains: [
            { beginKeywords: "where class" },
            c,
            R,
            t.C_LINE_COMMENT_MODE,
            t.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          beginKeywords: "namespace",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:]/,
          contains: [
            c,
            t.C_LINE_COMMENT_MODE,
            t.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          beginKeywords: "record",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:]/,
          contains: [
            c,
            R,
            t.C_LINE_COMMENT_MODE,
            t.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          // [Attributes("")]
          className: "meta",
          begin: "^\\s*\\[(?=[\\w])",
          excludeBegin: !0,
          end: "\\]",
          excludeEnd: !0,
          contains: [
            {
              className: "string",
              begin: /"/,
              end: /"/
            }
          ]
        },
        {
          // Expression keywords prevent 'keyword Name(...)' from being
          // recognized as a function definition
          beginKeywords: "new return throw await else",
          relevance: 0
        },
        {
          className: "function",
          begin: "(" + T + "\\s+)+" + t.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
          returnBegin: !0,
          end: /\s*[{;=]/,
          excludeEnd: !0,
          keywords: l,
          contains: [
            // prevents these from being highlighted `title`
            {
              beginKeywords: e.join(" "),
              relevance: 0
            },
            {
              begin: t.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
              returnBegin: !0,
              contains: [
                t.TITLE_MODE,
                R
              ],
              relevance: 0
            },
            { match: /\(\)/ },
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: l,
              relevance: 0,
              contains: [
                b,
                g,
                t.C_BLOCK_COMMENT_MODE
              ]
            },
            t.C_LINE_COMMENT_MODE,
            t.C_BLOCK_COMMENT_MODE
          ]
        },
        A
      ]
    };
  }
  return yn = a, yn;
}
var wn, Ji;
function Go() {
  if (Ji) return wn;
  Ji = 1;
  const a = (g) => ({
    IMPORTANT: {
      scope: "meta",
      begin: "!important"
    },
    BLOCK_COMMENT: g.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: "number",
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
    },
    FUNCTION_DISPATCH: {
      className: "built_in",
      begin: /[\w-]+(?=\()/
    },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: "selector-attr",
      begin: /\[/,
      end: /\]/,
      illegal: "$",
      contains: [
        g.APOS_STRING_MODE,
        g.QUOTE_STRING_MODE
      ]
    },
    CSS_NUMBER_MODE: {
      scope: "number",
      begin: g.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    },
    CSS_VARIABLE: {
      className: "attr",
      begin: /--[A-Za-z_][A-Za-z0-9_-]*/
    }
  }), t = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "audio",
    "b",
    "blockquote",
    "body",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "mark",
    "menu",
    "nav",
    "object",
    "ol",
    "optgroup",
    "option",
    "p",
    "picture",
    "q",
    "quote",
    "samp",
    "section",
    "select",
    "source",
    "span",
    "strong",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "ul",
    "var",
    "video"
  ], n = [
    "defs",
    "g",
    "marker",
    "mask",
    "pattern",
    "svg",
    "switch",
    "symbol",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feFlood",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMorphology",
    "feOffset",
    "feSpecularLighting",
    "feTile",
    "feTurbulence",
    "linearGradient",
    "radialGradient",
    "stop",
    "circle",
    "ellipse",
    "image",
    "line",
    "path",
    "polygon",
    "polyline",
    "rect",
    "text",
    "use",
    "textPath",
    "tspan",
    "foreignObject",
    "clipPath"
  ], e = [
    ...t,
    ...n
  ], i = [
    "any-hover",
    "any-pointer",
    "aspect-ratio",
    "color",
    "color-gamut",
    "color-index",
    "device-aspect-ratio",
    "device-height",
    "device-width",
    "display-mode",
    "forced-colors",
    "grid",
    "height",
    "hover",
    "inverted-colors",
    "monochrome",
    "orientation",
    "overflow-block",
    "overflow-inline",
    "pointer",
    "prefers-color-scheme",
    "prefers-contrast",
    "prefers-reduced-motion",
    "prefers-reduced-transparency",
    "resolution",
    "scan",
    "scripting",
    "update",
    "width",
    // TODO: find a better solution?
    "min-width",
    "max-width",
    "min-height",
    "max-height"
  ].sort().reverse(), r = [
    "active",
    "any-link",
    "blank",
    "checked",
    "current",
    "default",
    "defined",
    "dir",
    // dir()
    "disabled",
    "drop",
    "empty",
    "enabled",
    "first",
    "first-child",
    "first-of-type",
    "fullscreen",
    "future",
    "focus",
    "focus-visible",
    "focus-within",
    "has",
    // has()
    "host",
    // host or host()
    "host-context",
    // host-context()
    "hover",
    "indeterminate",
    "in-range",
    "invalid",
    "is",
    // is()
    "lang",
    // lang()
    "last-child",
    "last-of-type",
    "left",
    "link",
    "local-link",
    "not",
    // not()
    "nth-child",
    // nth-child()
    "nth-col",
    // nth-col()
    "nth-last-child",
    // nth-last-child()
    "nth-last-col",
    // nth-last-col()
    "nth-last-of-type",
    //nth-last-of-type()
    "nth-of-type",
    //nth-of-type()
    "only-child",
    "only-of-type",
    "optional",
    "out-of-range",
    "past",
    "placeholder-shown",
    "read-only",
    "read-write",
    "required",
    "right",
    "root",
    "scope",
    "target",
    "target-within",
    "user-invalid",
    "valid",
    "visited",
    "where"
    // where()
  ].sort().reverse(), _ = [
    "after",
    "backdrop",
    "before",
    "cue",
    "cue-region",
    "first-letter",
    "first-line",
    "grammar-error",
    "marker",
    "part",
    "placeholder",
    "selection",
    "slotted",
    "spelling-error"
  ].sort().reverse(), l = [
    "accent-color",
    "align-content",
    "align-items",
    "align-self",
    "alignment-baseline",
    "all",
    "anchor-name",
    "animation",
    "animation-composition",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-range",
    "animation-range-end",
    "animation-range-start",
    "animation-timeline",
    "animation-timing-function",
    "appearance",
    "aspect-ratio",
    "backdrop-filter",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-position-x",
    "background-position-y",
    "background-repeat",
    "background-size",
    "baseline-shift",
    "block-size",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-end-end-radius",
    "border-end-start-radius",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-start-end-radius",
    "border-start-start-radius",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-align",
    "box-decoration-break",
    "box-direction",
    "box-flex",
    "box-flex-group",
    "box-lines",
    "box-ordinal-group",
    "box-orient",
    "box-pack",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "color-scheme",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "contain-intrinsic-block-size",
    "contain-intrinsic-height",
    "contain-intrinsic-inline-size",
    "contain-intrinsic-size",
    "contain-intrinsic-width",
    "container",
    "container-name",
    "container-type",
    "content",
    "content-visibility",
    "counter-increment",
    "counter-reset",
    "counter-set",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "cx",
    "cy",
    "direction",
    "display",
    "dominant-baseline",
    "empty-cells",
    "enable-background",
    "field-sizing",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "flood-color",
    "flood-opacity",
    "flow",
    "font",
    "font-display",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-optical-sizing",
    "font-palette",
    "font-size",
    "font-size-adjust",
    "font-smooth",
    "font-smoothing",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-synthesis-position",
    "font-synthesis-small-caps",
    "font-synthesis-style",
    "font-synthesis-weight",
    "font-variant",
    "font-variant-alternates",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-emoji",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "forced-color-adjust",
    "gap",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphenate-character",
    "hyphenate-limit-chars",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "ime-mode",
    "initial-letter",
    "initial-letter-align",
    "inline-size",
    "inset",
    "inset-area",
    "inset-block",
    "inset-block-end",
    "inset-block-start",
    "inset-inline",
    "inset-inline-end",
    "inset-inline-start",
    "isolation",
    "justify-content",
    "justify-items",
    "justify-self",
    "kerning",
    "left",
    "letter-spacing",
    "lighting-color",
    "line-break",
    "line-height",
    "line-height-step",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "margin-trim",
    "marker",
    "marker-end",
    "marker-mid",
    "marker-start",
    "marks",
    "mask",
    "mask-border",
    "mask-border-mode",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-border-slice",
    "mask-border-source",
    "mask-border-width",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "masonry-auto-flow",
    "math-depth",
    "math-shift",
    "math-style",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "none",
    "normal",
    "object-fit",
    "object-position",
    "offset",
    "offset-anchor",
    "offset-distance",
    "offset-path",
    "offset-position",
    "offset-rotate",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-anchor",
    "overflow-block",
    "overflow-clip-margin",
    "overflow-inline",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "overlay",
    "overscroll-behavior",
    "overscroll-behavior-block",
    "overscroll-behavior-inline",
    "overscroll-behavior-x",
    "overscroll-behavior-y",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "page",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "paint-order",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "place-content",
    "place-items",
    "place-self",
    "pointer-events",
    "position",
    "position-anchor",
    "position-visibility",
    "print-color-adjust",
    "quotes",
    "r",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "right",
    "rotate",
    "row-gap",
    "ruby-align",
    "ruby-position",
    "scale",
    "scroll-behavior",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-snap-type",
    "scroll-timeline",
    "scroll-timeline-axis",
    "scroll-timeline-name",
    "scrollbar-color",
    "scrollbar-gutter",
    "scrollbar-width",
    "shape-image-threshold",
    "shape-margin",
    "shape-outside",
    "shape-rendering",
    "speak",
    "speak-as",
    "src",
    // @font-face
    "stop-color",
    "stop-opacity",
    "stroke",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "tab-size",
    "table-layout",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-anchor",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-skip",
    "text-decoration-skip-ink",
    "text-decoration-style",
    "text-decoration-thickness",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-size-adjust",
    "text-transform",
    "text-underline-offset",
    "text-underline-position",
    "text-wrap",
    "text-wrap-mode",
    "text-wrap-style",
    "timeline-scope",
    "top",
    "touch-action",
    "transform",
    "transform-box",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-behavior",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "translate",
    "unicode-bidi",
    "user-modify",
    "user-select",
    "vector-effect",
    "vertical-align",
    "view-timeline",
    "view-timeline-axis",
    "view-timeline-inset",
    "view-timeline-name",
    "view-transition-name",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "white-space",
    "white-space-collapse",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "x",
    "y",
    "z-index",
    "zoom"
  ].sort().reverse();
  function c(g) {
    const u = g.regex, f = a(g), m = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, N = "and or not only", x = /@-?\w[\w]*(-\w+)*/, k = "[a-zA-Z-][a-zA-Z0-9_-]*", d = [
      g.APOS_STRING_MODE,
      g.QUOTE_STRING_MODE
    ];
    return {
      name: "CSS",
      case_insensitive: !0,
      illegal: /[=|'\$]/,
      keywords: { keyframePosition: "from to" },
      classNameAliases: {
        // for visual continuity with `tag {}` and because we
        // don't have a great class for this?
        keyframePosition: "selector-tag"
      },
      contains: [
        f.BLOCK_COMMENT,
        m,
        // to recognize keyframe 40% etc which are outside the scope of our
        // attribute value mode
        f.CSS_NUMBER_MODE,
        {
          className: "selector-id",
          begin: /#[A-Za-z0-9_-]+/,
          relevance: 0
        },
        {
          className: "selector-class",
          begin: "\\." + k,
          relevance: 0
        },
        f.ATTRIBUTE_SELECTOR_MODE,
        {
          className: "selector-pseudo",
          variants: [
            { begin: ":(" + r.join("|") + ")" },
            { begin: ":(:)?(" + _.join("|") + ")" }
          ]
        },
        // we may actually need this (12/2020)
        // { // pseudo-selector params
        //   begin: /\(/,
        //   end: /\)/,
        //   contains: [ hljs.CSS_NUMBER_MODE ]
        // },
        f.CSS_VARIABLE,
        {
          className: "attribute",
          begin: "\\b(" + l.join("|") + ")\\b"
        },
        // attribute values
        {
          begin: /:/,
          end: /[;}{]/,
          contains: [
            f.BLOCK_COMMENT,
            f.HEXCOLOR,
            f.IMPORTANT,
            f.CSS_NUMBER_MODE,
            ...d,
            // needed to highlight these as strings and to avoid issues with
            // illegal characters that might be inside urls that would tigger the
            // languages illegal stack
            {
              begin: /(url|data-uri)\(/,
              end: /\)/,
              relevance: 0,
              // from keywords
              keywords: { built_in: "url data-uri" },
              contains: [
                ...d,
                {
                  className: "string",
                  // any character other than `)` as in `url()` will be the start
                  // of a string, which ends with `)` (from the parent mode)
                  begin: /[^)]/,
                  endsWithParent: !0,
                  excludeEnd: !0
                }
              ]
            },
            f.FUNCTION_DISPATCH
          ]
        },
        {
          begin: u.lookahead(/@/),
          end: "[{;]",
          relevance: 0,
          illegal: /:/,
          // break on Less variables @var: ...
          contains: [
            {
              className: "keyword",
              begin: x
            },
            {
              begin: /\s/,
              endsWithParent: !0,
              excludeEnd: !0,
              relevance: 0,
              keywords: {
                $pattern: /[a-z-]+/,
                keyword: N,
                attribute: i.join(" ")
              },
              contains: [
                {
                  begin: /[a-z-]+(?=:)/,
                  className: "attribute"
                },
                ...d,
                f.CSS_NUMBER_MODE
              ]
            }
          ]
        },
        {
          className: "selector-tag",
          begin: "\\b(" + e.join("|") + ")\\b"
        }
      ]
    };
  }
  return wn = c, wn;
}
var xn, es;
function qo() {
  if (es) return xn;
  es = 1;
  function a(t) {
    const n = t.regex, e = {
      begin: /<\/?[A-Za-z_]/,
      end: ">",
      subLanguage: "xml",
      relevance: 0
    }, i = {
      begin: "^[-\\*]{3,}",
      end: "$"
    }, r = {
      className: "code",
      variants: [
        // TODO: fix to allow these to work with sublanguage also
        { begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
        { begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" },
        // needed to allow markdown as a sublanguage to work
        {
          begin: "```",
          end: "```+[ ]*$"
        },
        {
          begin: "~~~",
          end: "~~~+[ ]*$"
        },
        { begin: "`.+?`" },
        {
          begin: "(?=^( {4}|\\t))",
          // use contains to gobble up multiple lines to allow the block to be whatever size
          // but only have a single open/close tag vs one per line
          contains: [
            {
              begin: "^( {4}|\\t)",
              end: "(\\n)$"
            }
          ],
          relevance: 0
        }
      ]
    }, _ = {
      className: "bullet",
      begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
      end: "\\s+",
      excludeEnd: !0
    }, l = {
      begin: /^\[[^\n]+\]:/,
      returnBegin: !0,
      contains: [
        {
          className: "symbol",
          begin: /\[/,
          end: /\]/,
          excludeBegin: !0,
          excludeEnd: !0
        },
        {
          className: "link",
          begin: /:\s*/,
          end: /$/,
          excludeBegin: !0
        }
      ]
    }, c = /[A-Za-z][A-Za-z0-9+.-]*/, g = {
      variants: [
        // too much like nested array access in so many languages
        // to have any real relevance
        {
          begin: /\[.+?\]\[.*?\]/,
          relevance: 0
        },
        // popular internet URLs
        {
          begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
          relevance: 2
        },
        {
          begin: n.concat(/\[.+?\]\(/, c, /:\/\/.*?\)/),
          relevance: 2
        },
        // relative urls
        {
          begin: /\[.+?\]\([./?&#].*?\)/,
          relevance: 1
        },
        // whatever else, lower relevance (might not be a link at all)
        {
          begin: /\[.*?\]\(.*?\)/,
          relevance: 0
        }
      ],
      returnBegin: !0,
      contains: [
        {
          // empty strings for alt or link text
          match: /\[(?=\])/
        },
        {
          className: "string",
          relevance: 0,
          begin: "\\[",
          end: "\\]",
          excludeBegin: !0,
          returnEnd: !0
        },
        {
          className: "link",
          relevance: 0,
          begin: "\\]\\(",
          end: "\\)",
          excludeBegin: !0,
          excludeEnd: !0
        },
        {
          className: "symbol",
          relevance: 0,
          begin: "\\]\\[",
          end: "\\]",
          excludeBegin: !0,
          excludeEnd: !0
        }
      ]
    }, u = {
      className: "strong",
      contains: [],
      // defined later
      variants: [
        {
          begin: /_{2}(?!\s)/,
          end: /_{2}/
        },
        {
          begin: /\*{2}(?!\s)/,
          end: /\*{2}/
        }
      ]
    }, f = {
      className: "emphasis",
      contains: [],
      // defined later
      variants: [
        {
          begin: /\*(?![*\s])/,
          end: /\*/
        },
        {
          begin: /_(?![_\s])/,
          end: /_/,
          relevance: 0
        }
      ]
    }, m = t.inherit(u, { contains: [] }), N = t.inherit(f, { contains: [] });
    u.contains.push(N), f.contains.push(m);
    let x = [
      e,
      g
    ];
    return [
      u,
      f,
      m,
      N
    ].forEach((b) => {
      b.contains = b.contains.concat(x);
    }), x = x.concat(u, f), {
      name: "Markdown",
      aliases: [
        "md",
        "mkdown",
        "mkd"
      ],
      contains: [
        {
          className: "section",
          variants: [
            {
              begin: "^#{1,6}",
              end: "$",
              contains: x
            },
            {
              begin: "(?=^.+?\\n[=-]{2,}$)",
              contains: [
                { begin: "^[=-]*$" },
                {
                  begin: "^",
                  end: "\\n",
                  contains: x
                }
              ]
            }
          ]
        },
        e,
        _,
        u,
        f,
        {
          className: "quote",
          begin: "^>\\s+",
          contains: x,
          end: "$"
        },
        r,
        i,
        g,
        l,
        {
          //https://spec.commonmark.org/0.31.2/#entity-references
          scope: "literal",
          match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/
        }
      ]
    };
  }
  return xn = a, xn;
}
var Nn, ts;
function Wo() {
  if (ts) return Nn;
  ts = 1;
  function a(t) {
    const n = t.regex;
    return {
      name: "Diff",
      aliases: ["patch"],
      contains: [
        {
          className: "meta",
          relevance: 10,
          match: n.either(
            /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,
            /^\*\*\* +\d+,\d+ +\*\*\*\*$/,
            /^--- +\d+,\d+ +----$/
          )
        },
        {
          className: "comment",
          variants: [
            {
              begin: n.either(
                /Index: /,
                /^index/,
                /={3,}/,
                /^-{3}/,
                /^\*{3} /,
                /^\+{3}/,
                /^diff --git/
              ),
              end: /$/
            },
            { match: /^\*{15}$/ }
          ]
        },
        {
          className: "addition",
          begin: /^\+/,
          end: /$/
        },
        {
          className: "deletion",
          begin: /^-/,
          end: /$/
        },
        {
          className: "addition",
          begin: /^!/,
          end: /$/
        }
      ]
    };
  }
  return Nn = a, Nn;
}
var On, ns;
function Ho() {
  if (ns) return On;
  ns = 1;
  function a(t) {
    const n = t.regex, e = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)", i = n.either(
      /\b([A-Z]+[a-z0-9]+)+/,
      // ends in caps
      /\b([A-Z]+[a-z0-9]+)+[A-Z]+/
    ), r = n.concat(i, /(::\w+)*/), l = {
      "variable.constant": [
        "__FILE__",
        "__LINE__",
        "__ENCODING__"
      ],
      "variable.language": [
        "self",
        "super"
      ],
      keyword: [
        "alias",
        "and",
        "begin",
        "BEGIN",
        "break",
        "case",
        "class",
        "defined",
        "do",
        "else",
        "elsif",
        "end",
        "END",
        "ensure",
        "for",
        "if",
        "in",
        "module",
        "next",
        "not",
        "or",
        "redo",
        "require",
        "rescue",
        "retry",
        "return",
        "then",
        "undef",
        "unless",
        "until",
        "when",
        "while",
        "yield",
        ...[
          "include",
          "extend",
          "prepend",
          "public",
          "private",
          "protected",
          "raise",
          "throw"
        ]
      ],
      built_in: [
        "proc",
        "lambda",
        "attr_accessor",
        "attr_reader",
        "attr_writer",
        "define_method",
        "private_constant",
        "module_function"
      ],
      literal: [
        "true",
        "false",
        "nil"
      ]
    }, c = {
      className: "doctag",
      begin: "@[A-Za-z]+"
    }, g = {
      begin: "#<",
      end: ">"
    }, u = [
      t.COMMENT(
        "#",
        "$",
        { contains: [c] }
      ),
      t.COMMENT(
        "^=begin",
        "^=end",
        {
          contains: [c],
          relevance: 10
        }
      ),
      t.COMMENT("^__END__", t.MATCH_NOTHING_RE)
    ], f = {
      className: "subst",
      begin: /#\{/,
      end: /\}/,
      keywords: l
    }, m = {
      className: "string",
      contains: [
        t.BACKSLASH_ESCAPE,
        f
      ],
      variants: [
        {
          begin: /'/,
          end: /'/
        },
        {
          begin: /"/,
          end: /"/
        },
        {
          begin: /`/,
          end: /`/
        },
        {
          begin: /%[qQwWx]?\(/,
          end: /\)/
        },
        {
          begin: /%[qQwWx]?\[/,
          end: /\]/
        },
        {
          begin: /%[qQwWx]?\{/,
          end: /\}/
        },
        {
          begin: /%[qQwWx]?</,
          end: />/
        },
        {
          begin: /%[qQwWx]?\//,
          end: /\//
        },
        {
          begin: /%[qQwWx]?%/,
          end: /%/
        },
        {
          begin: /%[qQwWx]?-/,
          end: /-/
        },
        {
          begin: /%[qQwWx]?\|/,
          end: /\|/
        },
        // in the following expressions, \B in the beginning suppresses recognition of ?-sequences
        // where ? is the last character of a preceding identifier, as in: `func?4`
        { begin: /\B\?(\\\d{1,3})/ },
        { begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/ },
        { begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/ },
        { begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/ },
        { begin: /\B\?\\(c|C-)[\x20-\x7e]/ },
        { begin: /\B\?\\?\S/ },
        // heredocs
        {
          // this guard makes sure that we have an entire heredoc and not a false
          // positive (auto-detect, etc.)
          begin: n.concat(
            /<<[-~]?'?/,
            n.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)
          ),
          contains: [
            t.END_SAME_AS_BEGIN({
              begin: /(\w+)/,
              end: /(\w+)/,
              contains: [
                t.BACKSLASH_ESCAPE,
                f
              ]
            })
          ]
        }
      ]
    }, N = "[1-9](_?[0-9])*|0", x = "[0-9](_?[0-9])*", k = {
      className: "number",
      relevance: 0,
      variants: [
        // decimal integer/float, optionally exponential or rational, optionally imaginary
        { begin: `\\b(${N})(\\.(${x}))?([eE][+-]?(${x})|r)?i?\\b` },
        // explicit decimal/binary/octal/hexadecimal integer,
        // optionally rational and/or imaginary
        { begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b" },
        { begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b" },
        { begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b" },
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b" },
        // 0-prefixed implicit octal integer, optionally rational and/or imaginary
        { begin: "\\b0(_?[0-7])+r?i?\\b" }
      ]
    }, d = {
      variants: [
        {
          match: /\(\)/
        },
        {
          className: "params",
          begin: /\(/,
          end: /(?=\))/,
          excludeBegin: !0,
          endsParent: !0,
          keywords: l
        }
      ]
    }, v = [
      m,
      {
        variants: [
          {
            match: [
              /class\s+/,
              r,
              /\s+<\s+/,
              r
            ]
          },
          {
            match: [
              /\b(class|module)\s+/,
              r
            ]
          }
        ],
        scope: {
          2: "title.class",
          4: "title.class.inherited"
        },
        keywords: l
      },
      {
        match: [
          /(include|extend)\s+/,
          r
        ],
        scope: {
          2: "title.class"
        },
        keywords: l
      },
      {
        relevance: 0,
        match: [
          r,
          /\.new[. (]/
        ],
        scope: {
          1: "title.class"
        }
      },
      {
        relevance: 0,
        match: /\b[A-Z][A-Z_0-9]+\b/,
        className: "variable.constant"
      },
      {
        relevance: 0,
        match: i,
        scope: "title.class"
      },
      {
        match: [
          /def/,
          /\s+/,
          e
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [
          d
        ]
      },
      {
        // swallow namespace qualifiers before symbols
        begin: t.IDENT_RE + "::"
      },
      {
        className: "symbol",
        begin: t.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
        relevance: 0
      },
      {
        className: "symbol",
        begin: ":(?!\\s)",
        contains: [
          m,
          { begin: e }
        ],
        relevance: 0
      },
      k,
      {
        // negative-look forward attempts to prevent false matches like:
        // @ident@ or $ident$ that might indicate this is not ruby at all
        className: "variable",
        begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
      },
      {
        className: "params",
        begin: /\|(?!=)/,
        end: /\|/,
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0,
        // this could be a lot of things (in other languages) other than params
        keywords: l
      },
      {
        // regexp container
        begin: "(" + t.RE_STARTERS_RE + "|unless)\\s*",
        keywords: "unless",
        contains: [
          {
            className: "regexp",
            contains: [
              t.BACKSLASH_ESCAPE,
              f
            ],
            illegal: /\n/,
            variants: [
              {
                begin: "/",
                end: "/[a-z]*"
              },
              {
                begin: /%r\{/,
                end: /\}[a-z]*/
              },
              {
                begin: "%r\\(",
                end: "\\)[a-z]*"
              },
              {
                begin: "%r!",
                end: "![a-z]*"
              },
              {
                begin: "%r\\[",
                end: "\\][a-z]*"
              }
            ]
          }
        ].concat(g, u),
        relevance: 0
      }
    ].concat(g, u);
    f.contains = v, d.contains = v;
    const y = [
      {
        begin: /^\s*=>/,
        starts: {
          end: "$",
          contains: v
        }
      },
      {
        className: "meta.prompt",
        begin: "^(" + "[>?]>" + "|" + "[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]" + "|" + "(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>" + ")(?=[ ])",
        starts: {
          end: "$",
          keywords: l,
          contains: v
        }
      }
    ];
    return u.unshift(g), {
      name: "Ruby",
      aliases: [
        "rb",
        "gemspec",
        "podspec",
        "thor",
        "irb"
      ],
      keywords: l,
      illegal: /\/\*/,
      contains: [t.SHEBANG({ binary: "ruby" })].concat(y).concat(u).concat(v)
    };
  }
  return On = a, On;
}
var Tn, is;
function Vo() {
  if (is) return Tn;
  is = 1;
  function a(t) {
    const _ = {
      keyword: [
        "break",
        "case",
        "chan",
        "const",
        "continue",
        "default",
        "defer",
        "else",
        "fallthrough",
        "for",
        "func",
        "go",
        "goto",
        "if",
        "import",
        "interface",
        "map",
        "package",
        "range",
        "return",
        "select",
        "struct",
        "switch",
        "type",
        "var"
      ],
      type: [
        "bool",
        "byte",
        "complex64",
        "complex128",
        "error",
        "float32",
        "float64",
        "int8",
        "int16",
        "int32",
        "int64",
        "string",
        "uint8",
        "uint16",
        "uint32",
        "uint64",
        "int",
        "uint",
        "uintptr",
        "rune"
      ],
      literal: [
        "true",
        "false",
        "iota",
        "nil"
      ],
      built_in: [
        "append",
        "cap",
        "close",
        "complex",
        "copy",
        "imag",
        "len",
        "make",
        "new",
        "panic",
        "print",
        "println",
        "real",
        "recover",
        "delete"
      ]
    };
    return {
      name: "Go",
      aliases: ["golang"],
      keywords: _,
      illegal: "</",
      contains: [
        t.C_LINE_COMMENT_MODE,
        t.C_BLOCK_COMMENT_MODE,
        {
          className: "string",
          variants: [
            t.QUOTE_STRING_MODE,
            t.APOS_STRING_MODE,
            {
              begin: "`",
              end: "`"
            }
          ]
        },
        {
          className: "number",
          variants: [
            {
              match: /-?\b0[xX]\.[a-fA-F0-9](_?[a-fA-F0-9])*[pP][+-]?\d(_?\d)*i?/,
              // hex without a present digit before . (making a digit afterwards required)
              relevance: 0
            },
            {
              match: /-?\b0[xX](_?[a-fA-F0-9])+((\.([a-fA-F0-9](_?[a-fA-F0-9])*)?)?[pP][+-]?\d(_?\d)*)?i?/,
              // hex with a present digit before . (making a digit afterwards optional)
              relevance: 0
            },
            {
              match: /-?\b0[oO](_?[0-7])*i?/,
              // leading 0o octal
              relevance: 0
            },
            {
              match: /-?\.\d(_?\d)*([eE][+-]?\d(_?\d)*)?i?/,
              // decimal without a present digit before . (making a digit afterwards required)
              relevance: 0
            },
            {
              match: /-?\b\d(_?\d)*(\.(\d(_?\d)*)?)?([eE][+-]?\d(_?\d)*)?i?/,
              // decimal with a present digit before . (making a digit afterwards optional)
              relevance: 0
            }
          ]
        },
        {
          begin: /:=/
          // relevance booster
        },
        {
          className: "function",
          beginKeywords: "func",
          end: "\\s*(\\{|$)",
          excludeEnd: !0,
          contains: [
            t.TITLE_MODE,
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              endsParent: !0,
              keywords: _,
              illegal: /["']/
            }
          ]
        }
      ]
    };
  }
  return Tn = a, Tn;
}
var Sn, ss;
function Zo() {
  if (ss) return Sn;
  ss = 1;
  function a(t) {
    const n = t.regex, e = /[_A-Za-z][_0-9A-Za-z]*/;
    return {
      name: "GraphQL",
      aliases: ["gql"],
      case_insensitive: !0,
      disableAutodetect: !1,
      keywords: {
        keyword: [
          "query",
          "mutation",
          "subscription",
          "type",
          "input",
          "schema",
          "directive",
          "interface",
          "union",
          "scalar",
          "fragment",
          "enum",
          "on"
        ],
        literal: [
          "true",
          "false",
          "null"
        ]
      },
      contains: [
        t.HASH_COMMENT_MODE,
        t.QUOTE_STRING_MODE,
        t.NUMBER_MODE,
        {
          scope: "punctuation",
          match: /[.]{3}/,
          relevance: 0
        },
        {
          scope: "punctuation",
          begin: /[\!\(\)\:\=\[\]\{\|\}]{1}/,
          relevance: 0
        },
        {
          scope: "variable",
          begin: /\$/,
          end: /\W/,
          excludeEnd: !0,
          relevance: 0
        },
        {
          scope: "meta",
          match: /@\w+/,
          excludeEnd: !0
        },
        {
          scope: "symbol",
          begin: n.concat(e, n.lookahead(/\s*:/)),
          relevance: 0
        }
      ],
      illegal: [
        /[;<']/,
        /BEGIN/
      ]
    };
  }
  return Sn = a, Sn;
}
var kn, as;
function Xo() {
  if (as) return kn;
  as = 1;
  function a(t) {
    const n = t.regex, e = {
      className: "number",
      relevance: 0,
      variants: [
        { begin: /([+-]+)?[\d]+_[\d_]+/ },
        { begin: t.NUMBER_RE }
      ]
    }, i = t.COMMENT();
    i.variants = [
      {
        begin: /;/,
        end: /$/
      },
      {
        begin: /#/,
        end: /$/
      }
    ];
    const r = {
      className: "variable",
      variants: [
        { begin: /\$[\w\d"][\w\d_]*/ },
        { begin: /\$\{(.*?)\}/ }
      ]
    }, _ = {
      className: "literal",
      begin: /\bon|off|true|false|yes|no\b/
    }, l = {
      className: "string",
      contains: [t.BACKSLASH_ESCAPE],
      variants: [
        {
          begin: "'''",
          end: "'''",
          relevance: 10
        },
        {
          begin: '"""',
          end: '"""',
          relevance: 10
        },
        {
          begin: '"',
          end: '"'
        },
        {
          begin: "'",
          end: "'"
        }
      ]
    }, c = {
      begin: /\[/,
      end: /\]/,
      contains: [
        i,
        _,
        r,
        l,
        e,
        "self"
      ],
      relevance: 0
    }, g = /[A-Za-z0-9_-]+/, u = /"(\\"|[^"])*"/, f = /'[^']*'/, m = n.either(
      g,
      u,
      f
    ), N = n.concat(
      m,
      "(\\s*\\.\\s*",
      m,
      ")*",
      n.lookahead(/\s*=\s*[^#\s]/)
    );
    return {
      name: "TOML, also INI",
      aliases: ["toml"],
      case_insensitive: !0,
      illegal: /\S/,
      contains: [
        i,
        {
          className: "section",
          begin: /\[+/,
          end: /\]+/
        },
        {
          begin: N,
          className: "attr",
          starts: {
            end: /$/,
            contains: [
              i,
              c,
              _,
              r,
              l,
              e
            ]
          }
        }
      ]
    };
  }
  return kn = a, kn;
}
var Rn, rs;
function Yo() {
  if (rs) return Rn;
  rs = 1;
  var a = "[0-9](_*[0-9])*", t = `\\.(${a})`, n = "[0-9a-fA-F](_*[0-9a-fA-F])*", e = {
    className: "number",
    variants: [
      // DecimalFloatingPointLiteral
      // including ExponentPart
      { begin: `(\\b(${a})((${t})|\\.)?|(${t}))[eE][+-]?(${a})[fFdD]?\\b` },
      // excluding ExponentPart
      { begin: `\\b(${a})((${t})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
      { begin: `(${t})[fFdD]?\\b` },
      { begin: `\\b(${a})[fFdD]\\b` },
      // HexadecimalFloatingPointLiteral
      { begin: `\\b0[xX]((${n})\\.?|(${n})?\\.(${n}))[pP][+-]?(${a})[fFdD]?\\b` },
      // DecimalIntegerLiteral
      { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
      // HexIntegerLiteral
      { begin: `\\b0[xX](${n})[lL]?\\b` },
      // OctalIntegerLiteral
      { begin: "\\b0(_*[0-7])*[lL]?\\b" },
      // BinaryIntegerLiteral
      { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
    ],
    relevance: 0
  };
  function i(_, l, c) {
    return c === -1 ? "" : _.replace(l, (g) => i(_, l, c - 1));
  }
  function r(_) {
    const l = _.regex, c = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*", g = c + i("(?:<" + c + "~~~(?:\\s*,\\s*" + c + "~~~)*>)?", /~~~/g, 2), x = {
      keyword: [
        "synchronized",
        "abstract",
        "private",
        "var",
        "static",
        "if",
        "const ",
        "for",
        "while",
        "strictfp",
        "finally",
        "protected",
        "import",
        "native",
        "final",
        "void",
        "enum",
        "else",
        "break",
        "transient",
        "catch",
        "instanceof",
        "volatile",
        "case",
        "assert",
        "package",
        "default",
        "public",
        "try",
        "switch",
        "continue",
        "throws",
        "protected",
        "public",
        "private",
        "module",
        "requires",
        "exports",
        "do",
        "sealed",
        "yield",
        "permits",
        "goto",
        "when"
      ],
      literal: [
        "false",
        "true",
        "null"
      ],
      type: [
        "char",
        "boolean",
        "long",
        "float",
        "int",
        "byte",
        "short",
        "double"
      ],
      built_in: [
        "super",
        "this"
      ]
    }, k = {
      className: "meta",
      begin: "@" + c,
      contains: [
        {
          begin: /\(/,
          end: /\)/,
          contains: ["self"]
          // allow nested () inside our annotation
        }
      ]
    }, d = {
      className: "params",
      begin: /\(/,
      end: /\)/,
      keywords: x,
      relevance: 0,
      contains: [_.C_BLOCK_COMMENT_MODE],
      endsParent: !0
    };
    return {
      name: "Java",
      aliases: ["jsp"],
      keywords: x,
      illegal: /<\/|#/,
      contains: [
        _.COMMENT(
          "/\\*\\*",
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                // eat up @'s in emails to prevent them to be recognized as doctags
                begin: /\w+@/,
                relevance: 0
              },
              {
                className: "doctag",
                begin: "@[A-Za-z]+"
              }
            ]
          }
        ),
        // relevance boost
        {
          begin: /import java\.[a-z]+\./,
          keywords: "import",
          relevance: 2
        },
        _.C_LINE_COMMENT_MODE,
        _.C_BLOCK_COMMENT_MODE,
        {
          begin: /"""/,
          end: /"""/,
          className: "string",
          contains: [_.BACKSLASH_ESCAPE]
        },
        _.APOS_STRING_MODE,
        _.QUOTE_STRING_MODE,
        {
          match: [
            /\b(?:class|interface|enum|extends|implements|new)/,
            /\s+/,
            c
          ],
          className: {
            1: "keyword",
            3: "title.class"
          }
        },
        {
          // Exceptions for hyphenated keywords
          match: /non-sealed/,
          scope: "keyword"
        },
        {
          begin: [
            l.concat(/(?!else)/, c),
            /\s+/,
            c,
            /\s+/,
            /=(?!=)/
          ],
          className: {
            1: "type",
            3: "variable",
            5: "operator"
          }
        },
        {
          begin: [
            /record/,
            /\s+/,
            c
          ],
          className: {
            1: "keyword",
            3: "title.class"
          },
          contains: [
            d,
            _.C_LINE_COMMENT_MODE,
            _.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          // Expression keywords prevent 'keyword Name(...)' from being
          // recognized as a function definition
          beginKeywords: "new throw return else",
          relevance: 0
        },
        {
          begin: [
            "(?:" + g + "\\s+)",
            _.UNDERSCORE_IDENT_RE,
            /\s*(?=\()/
          ],
          className: { 2: "title.function" },
          keywords: x,
          contains: [
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              keywords: x,
              relevance: 0,
              contains: [
                k,
                _.APOS_STRING_MODE,
                _.QUOTE_STRING_MODE,
                e,
                _.C_BLOCK_COMMENT_MODE
              ]
            },
            _.C_LINE_COMMENT_MODE,
            _.C_BLOCK_COMMENT_MODE
          ]
        },
        e,
        k
      ]
    };
  }
  return Rn = r, Rn;
}
var An, os;
function jo() {
  if (os) return An;
  os = 1;
  const a = "[A-Za-z$_][0-9A-Za-z$_]*", t = [
    "as",
    // for exports
    "in",
    "of",
    "if",
    "for",
    "while",
    "finally",
    "var",
    "new",
    "function",
    "do",
    "return",
    "void",
    "else",
    "break",
    "catch",
    "instanceof",
    "with",
    "throw",
    "case",
    "default",
    "try",
    "switch",
    "continue",
    "typeof",
    "delete",
    "let",
    "yield",
    "const",
    "class",
    // JS handles these with a special rule
    // "get",
    // "set",
    "debugger",
    "async",
    "await",
    "static",
    "import",
    "from",
    "export",
    "extends",
    // It's reached stage 3, which is "recommended for implementation":
    "using"
  ], n = [
    "true",
    "false",
    "null",
    "undefined",
    "NaN",
    "Infinity"
  ], e = [
    // Fundamental objects
    "Object",
    "Function",
    "Boolean",
    "Symbol",
    // numbers and dates
    "Math",
    "Date",
    "Number",
    "BigInt",
    // text
    "String",
    "RegExp",
    // Indexed collections
    "Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Int32Array",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array",
    // Keyed collections
    "Set",
    "Map",
    "WeakSet",
    "WeakMap",
    // Structured data
    "ArrayBuffer",
    "SharedArrayBuffer",
    "Atomics",
    "DataView",
    "JSON",
    // Control abstraction objects
    "Promise",
    "Generator",
    "GeneratorFunction",
    "AsyncFunction",
    // Reflection
    "Reflect",
    "Proxy",
    // Internationalization
    "Intl",
    // WebAssembly
    "WebAssembly"
  ], i = [
    "Error",
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError"
  ], r = [
    "setInterval",
    "setTimeout",
    "clearInterval",
    "clearTimeout",
    "require",
    "exports",
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape"
  ], _ = [
    "arguments",
    "this",
    "super",
    "console",
    "window",
    "document",
    "localStorage",
    "sessionStorage",
    "module",
    "global"
    // Node.js
  ], l = [].concat(
    r,
    e,
    i
  );
  function c(g) {
    const u = g.regex, f = (le, { after: re }) => {
      const me = "</" + le[0].slice(1);
      return le.input.indexOf(me, re) !== -1;
    }, m = a, N = {
      begin: "<>",
      end: "</>"
    }, x = /<[A-Za-z0-9\\._:-]+\s*\/>/, k = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      /**
       * @param {RegExpMatchArray} match
       * @param {CallbackResponse} response
       */
      isTrulyOpeningTag: (le, re) => {
        const me = le[0].length + le.index, fe = le.input[me];
        if (
          // HTML should not include another raw `<` inside a tag
          // nested type?
          // `<Array<Array<number>>`, etc.
          fe === "<" || // the , gives away that this is not HTML
          // `<T, A extends keyof T, V>`
          fe === ","
        ) {
          re.ignoreMatch();
          return;
        }
        fe === ">" && (f(le, { after: me }) || re.ignoreMatch());
        let ve;
        const ye = le.input.substring(me);
        if (ve = ye.match(/^\s*=/)) {
          re.ignoreMatch();
          return;
        }
        if ((ve = ye.match(/^\s+extends\s+/)) && ve.index === 0) {
          re.ignoreMatch();
          return;
        }
      }
    }, d = {
      $pattern: a,
      keyword: t,
      literal: n,
      built_in: l,
      "variable.language": _
    }, o = "[0-9](_?[0-9])*", b = `\\.(${o})`, R = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", T = {
      className: "number",
      variants: [
        // DecimalLiteral
        { begin: `(\\b(${R})((${b})|\\.)?|(${b}))[eE][+-]?(${o})\\b` },
        { begin: `\\b(${R})\\b((${b})\\b|\\.)?|(${b})\\b` },
        // DecimalBigIntegerLiteral
        { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
        // NonDecimalIntegerLiteral
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
        { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
        { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
        // LegacyOctalIntegerLiteral (does not include underscore separators)
        // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
        { begin: "\\b0[0-7]+n?\\b" }
      ],
      relevance: 0
    }, A = {
      className: "subst",
      begin: "\\$\\{",
      end: "\\}",
      keywords: d,
      contains: []
      // defined later
    }, E = {
      begin: ".?html`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          g.BACKSLASH_ESCAPE,
          A
        ],
        subLanguage: "xml"
      }
    }, v = {
      begin: ".?css`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          g.BACKSLASH_ESCAPE,
          A
        ],
        subLanguage: "css"
      }
    }, p = {
      begin: ".?gql`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          g.BACKSLASH_ESCAPE,
          A
        ],
        subLanguage: "graphql"
      }
    }, w = {
      className: "string",
      begin: "`",
      end: "`",
      contains: [
        g.BACKSLASH_ESCAPE,
        A
      ]
    }, y = {
      className: "comment",
      variants: [
        g.COMMENT(
          /\/\*\*(?!\/)/,
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                begin: "(?=@[A-Za-z]+)",
                relevance: 0,
                contains: [
                  {
                    className: "doctag",
                    begin: "@[A-Za-z]+"
                  },
                  {
                    className: "type",
                    begin: "\\{",
                    end: "\\}",
                    excludeEnd: !0,
                    excludeBegin: !0,
                    relevance: 0
                  },
                  {
                    className: "variable",
                    begin: m + "(?=\\s*(-)|$)",
                    endsParent: !0,
                    relevance: 0
                  },
                  // eat spaces (not newlines) so we can find
                  // types or variables
                  {
                    begin: /(?=[^\n])\s/,
                    relevance: 0
                  }
                ]
              }
            ]
          }
        ),
        g.C_BLOCK_COMMENT_MODE,
        g.C_LINE_COMMENT_MODE
      ]
    }, O = [
      g.APOS_STRING_MODE,
      g.QUOTE_STRING_MODE,
      E,
      v,
      p,
      w,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      T
      // This is intentional:
      // See https://github.com/highlightjs/highlight.js/issues/3288
      // hljs.REGEXP_MODE
    ];
    A.contains = O.concat({
      // we need to pair up {} inside our subst to prevent
      // it from ending too early by matching another }
      begin: /\{/,
      end: /\}/,
      keywords: d,
      contains: [
        "self"
      ].concat(O)
    });
    const B = [].concat(y, A.contains), F = B.concat([
      // eat recursive parens in sub expressions
      {
        begin: /(\s*)\(/,
        end: /\)/,
        keywords: d,
        contains: ["self"].concat(B)
      }
    ]), G = {
      className: "params",
      // convert this to negative lookbehind in v12
      begin: /(\s*)\(/,
      // to match the parms with
      end: /\)/,
      excludeBegin: !0,
      excludeEnd: !0,
      keywords: d,
      contains: F
    }, H = {
      variants: [
        // class Car extends vehicle
        {
          match: [
            /class/,
            /\s+/,
            m,
            /\s+/,
            /extends/,
            /\s+/,
            u.concat(m, "(", u.concat(/\./, m), ")*")
          ],
          scope: {
            1: "keyword",
            3: "title.class",
            5: "keyword",
            7: "title.class.inherited"
          }
        },
        // class Car
        {
          match: [
            /class/,
            /\s+/,
            m
          ],
          scope: {
            1: "keyword",
            3: "title.class"
          }
        }
      ]
    }, j = {
      relevance: 0,
      match: u.either(
        // Hard coded exceptions
        /\bJSON/,
        // Float32Array, OutT
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        // CSSFactory, CSSFactoryT
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        // FPs, FPsT
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
        // P
        // single letters are not highlighted
        // BLAH
        // this will be flagged as a UPPER_CASE_CONSTANT instead
      ),
      className: "title.class",
      keywords: {
        _: [
          // se we still get relevance credit for JS library classes
          ...e,
          ...i
        ]
      }
    }, oe = {
      label: "use_strict",
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/
    }, Oe = {
      variants: [
        {
          match: [
            /function/,
            /\s+/,
            m,
            /(?=\s*\()/
          ]
        },
        // anonymous function
        {
          match: [
            /function/,
            /\s*(?=\()/
          ]
        }
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      label: "func.def",
      contains: [G],
      illegal: /%/
    }, Ce = {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: "variable.constant"
    };
    function xe(le) {
      return u.concat("(?!", le.join("|"), ")");
    }
    const Fe = {
      match: u.concat(
        /\b/,
        xe([
          ...r,
          "super",
          "import"
        ].map((le) => `${le}\\s*\\(`)),
        m,
        u.lookahead(/\s*\(/)
      ),
      className: "title.function",
      relevance: 0
    }, Ze = {
      begin: u.concat(/\./, u.lookahead(
        u.concat(m, /(?![0-9A-Za-z$_(])/)
      )),
      end: m,
      excludeBegin: !0,
      keywords: "prototype",
      className: "property",
      relevance: 0
    }, Te = {
      match: [
        /get|set/,
        /\s+/,
        m,
        /(?=\()/
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        {
          // eat to avoid empty params
          begin: /\(\)/
        },
        G
      ]
    }, Se = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + g.UNDERSCORE_IDENT_RE + ")\\s*=>", Be = {
      match: [
        /const|var|let/,
        /\s+/,
        m,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        // async is optional
        u.lookahead(Se)
      ],
      keywords: "async",
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        G
      ]
    };
    return {
      name: "JavaScript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: d,
      // this will be extended by TypeScript
      exports: { PARAMS_CONTAINS: F, CLASS_REFERENCE: j },
      illegal: /#(?![$_A-z])/,
      contains: [
        g.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }),
        oe,
        g.APOS_STRING_MODE,
        g.QUOTE_STRING_MODE,
        E,
        v,
        p,
        w,
        y,
        // Skip numbers when they are part of a variable name
        { match: /\$\d+/ },
        T,
        j,
        {
          scope: "attr",
          match: m + u.lookahead(":"),
          relevance: 0
        },
        Be,
        {
          // "value" container
          begin: "(" + g.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [
            y,
            g.REGEXP_MODE,
            {
              className: "function",
              // we have to count the parens to make sure we actually have the
              // correct bounding ( ) before the =>.  There could be any number of
              // sub-expressions inside also surrounded by parens.
              begin: Se,
              returnBegin: !0,
              end: "\\s*=>",
              contains: [
                {
                  className: "params",
                  variants: [
                    {
                      begin: g.UNDERSCORE_IDENT_RE,
                      relevance: 0
                    },
                    {
                      className: null,
                      begin: /\(\s*\)/,
                      skip: !0
                    },
                    {
                      begin: /(\s*)\(/,
                      end: /\)/,
                      excludeBegin: !0,
                      excludeEnd: !0,
                      keywords: d,
                      contains: F
                    }
                  ]
                }
              ]
            },
            {
              // could be a comma delimited list of params to a function call
              begin: /,/,
              relevance: 0
            },
            {
              match: /\s+/,
              relevance: 0
            },
            {
              // JSX
              variants: [
                { begin: N.begin, end: N.end },
                { match: x },
                {
                  begin: k.begin,
                  // we carefully check the opening tag to see if it truly
                  // is a tag and not a false positive
                  "on:begin": k.isTrulyOpeningTag,
                  end: k.end
                }
              ],
              subLanguage: "xml",
              contains: [
                {
                  begin: k.begin,
                  end: k.end,
                  skip: !0,
                  contains: ["self"]
                }
              ]
            }
          ]
        },
        Oe,
        {
          // prevent this from getting swallowed up by function
          // since they appear "function like"
          beginKeywords: "while if switch catch for"
        },
        {
          // we have to count the parens to make sure we actually have the correct
          // bounding ( ).  There could be any number of sub-expressions inside
          // also surrounded by parens.
          begin: "\\b(?!function)" + g.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          // end parens
          returnBegin: !0,
          label: "func.def",
          contains: [
            G,
            g.inherit(g.TITLE_MODE, { begin: m, className: "title.function" })
          ]
        },
        // catch ... so it won't trigger the property rule below
        {
          match: /\.\.\./,
          relevance: 0
        },
        Ze,
        // hack: prevents detection of keywords in some circumstances
        // .keyword()
        // $keyword = x
        {
          match: "\\$" + m,
          relevance: 0
        },
        {
          match: [/\bconstructor(?=\s*\()/],
          className: { 1: "title.function" },
          contains: [G]
        },
        Fe,
        Ce,
        H,
        Te,
        {
          match: /\$[(.]/
          // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
        }
      ]
    };
  }
  return An = c, An;
}
var Cn, ls;
function Qo() {
  if (ls) return Cn;
  ls = 1;
  function a(t) {
    const n = {
      className: "attr",
      begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
      relevance: 1.01
    }, e = {
      match: /[{}[\],:]/,
      className: "punctuation",
      relevance: 0
    }, i = [
      "true",
      "false",
      "null"
    ], r = {
      scope: "literal",
      beginKeywords: i.join(" ")
    };
    return {
      name: "JSON",
      aliases: ["jsonc"],
      keywords: {
        literal: i
      },
      contains: [
        n,
        e,
        t.QUOTE_STRING_MODE,
        r,
        t.C_NUMBER_MODE,
        t.C_LINE_COMMENT_MODE,
        t.C_BLOCK_COMMENT_MODE
      ],
      illegal: "\\S"
    };
  }
  return Cn = a, Cn;
}
var In, cs;
function Jo() {
  if (cs) return In;
  cs = 1;
  var a = "[0-9](_*[0-9])*", t = `\\.(${a})`, n = "[0-9a-fA-F](_*[0-9a-fA-F])*", e = {
    className: "number",
    variants: [
      // DecimalFloatingPointLiteral
      // including ExponentPart
      { begin: `(\\b(${a})((${t})|\\.)?|(${t}))[eE][+-]?(${a})[fFdD]?\\b` },
      // excluding ExponentPart
      { begin: `\\b(${a})((${t})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
      { begin: `(${t})[fFdD]?\\b` },
      { begin: `\\b(${a})[fFdD]\\b` },
      // HexadecimalFloatingPointLiteral
      { begin: `\\b0[xX]((${n})\\.?|(${n})?\\.(${n}))[pP][+-]?(${a})[fFdD]?\\b` },
      // DecimalIntegerLiteral
      { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
      // HexIntegerLiteral
      { begin: `\\b0[xX](${n})[lL]?\\b` },
      // OctalIntegerLiteral
      { begin: "\\b0(_*[0-7])*[lL]?\\b" },
      // BinaryIntegerLiteral
      { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
    ],
    relevance: 0
  };
  function i(r) {
    const _ = {
      keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
      built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
      literal: "true false null"
    }, l = {
      className: "keyword",
      begin: /\b(break|continue|return|this)\b/,
      starts: { contains: [
        {
          className: "symbol",
          begin: /@\w+/
        }
      ] }
    }, c = {
      className: "symbol",
      begin: r.UNDERSCORE_IDENT_RE + "@"
    }, g = {
      className: "subst",
      begin: /\$\{/,
      end: /\}/,
      contains: [r.C_NUMBER_MODE]
    }, u = {
      className: "variable",
      begin: "\\$" + r.UNDERSCORE_IDENT_RE
    }, f = {
      className: "string",
      variants: [
        {
          begin: '"""',
          end: '"""(?=[^"])',
          contains: [
            u,
            g
          ]
        },
        // Can't use built-in modes easily, as we want to use STRING in the meta
        // context as 'meta-string' and there's no syntax to remove explicitly set
        // classNames in built-in modes.
        {
          begin: "'",
          end: "'",
          illegal: /\n/,
          contains: [r.BACKSLASH_ESCAPE]
        },
        {
          begin: '"',
          end: '"',
          illegal: /\n/,
          contains: [
            r.BACKSLASH_ESCAPE,
            u,
            g
          ]
        }
      ]
    };
    g.contains.push(f);
    const m = {
      className: "meta",
      begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + r.UNDERSCORE_IDENT_RE + ")?"
    }, N = {
      className: "meta",
      begin: "@" + r.UNDERSCORE_IDENT_RE,
      contains: [
        {
          begin: /\(/,
          end: /\)/,
          contains: [
            r.inherit(f, { className: "string" }),
            "self"
          ]
        }
      ]
    }, x = e, k = r.COMMENT(
      "/\\*",
      "\\*/",
      { contains: [r.C_BLOCK_COMMENT_MODE] }
    ), d = { variants: [
      {
        className: "type",
        begin: r.UNDERSCORE_IDENT_RE
      },
      {
        begin: /\(/,
        end: /\)/,
        contains: []
        // defined later
      }
    ] }, o = d;
    return o.variants[1].contains = [d], d.variants[1].contains = [o], {
      name: "Kotlin",
      aliases: [
        "kt",
        "kts"
      ],
      keywords: _,
      contains: [
        r.COMMENT(
          "/\\*\\*",
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                className: "doctag",
                begin: "@[A-Za-z]+"
              }
            ]
          }
        ),
        r.C_LINE_COMMENT_MODE,
        k,
        l,
        c,
        m,
        N,
        {
          className: "function",
          beginKeywords: "fun",
          end: "[(]|$",
          returnBegin: !0,
          excludeEnd: !0,
          keywords: _,
          relevance: 5,
          contains: [
            {
              begin: r.UNDERSCORE_IDENT_RE + "\\s*\\(",
              returnBegin: !0,
              relevance: 0,
              contains: [r.UNDERSCORE_TITLE_MODE]
            },
            {
              className: "type",
              begin: /</,
              end: />/,
              keywords: "reified",
              relevance: 0
            },
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              endsParent: !0,
              keywords: _,
              relevance: 0,
              contains: [
                {
                  begin: /:/,
                  end: /[=,\/]/,
                  endsWithParent: !0,
                  contains: [
                    d,
                    r.C_LINE_COMMENT_MODE,
                    k
                  ],
                  relevance: 0
                },
                r.C_LINE_COMMENT_MODE,
                k,
                m,
                N,
                f,
                r.C_NUMBER_MODE
              ]
            },
            k
          ]
        },
        {
          begin: [
            /class|interface|trait/,
            /\s+/,
            r.UNDERSCORE_IDENT_RE
          ],
          beginScope: {
            3: "title.class"
          },
          keywords: "class interface trait",
          end: /[:\{(]|$/,
          excludeEnd: !0,
          illegal: "extends implements",
          contains: [
            { beginKeywords: "public protected internal private constructor" },
            r.UNDERSCORE_TITLE_MODE,
            {
              className: "type",
              begin: /</,
              end: />/,
              excludeBegin: !0,
              excludeEnd: !0,
              relevance: 0
            },
            {
              className: "type",
              begin: /[,:]\s*/,
              end: /[<\(,){\s]|$/,
              excludeBegin: !0,
              returnEnd: !0
            },
            m,
            N
          ]
        },
        f,
        {
          className: "meta",
          begin: "^#!/usr/bin/env",
          end: "$",
          illegal: `
`
        },
        x
      ]
    };
  }
  return In = i, In;
}
var Mn, _s;
function el() {
  if (_s) return Mn;
  _s = 1;
  const a = (u) => ({
    IMPORTANT: {
      scope: "meta",
      begin: "!important"
    },
    BLOCK_COMMENT: u.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: "number",
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
    },
    FUNCTION_DISPATCH: {
      className: "built_in",
      begin: /[\w-]+(?=\()/
    },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: "selector-attr",
      begin: /\[/,
      end: /\]/,
      illegal: "$",
      contains: [
        u.APOS_STRING_MODE,
        u.QUOTE_STRING_MODE
      ]
    },
    CSS_NUMBER_MODE: {
      scope: "number",
      begin: u.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    },
    CSS_VARIABLE: {
      className: "attr",
      begin: /--[A-Za-z_][A-Za-z0-9_-]*/
    }
  }), t = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "audio",
    "b",
    "blockquote",
    "body",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "mark",
    "menu",
    "nav",
    "object",
    "ol",
    "optgroup",
    "option",
    "p",
    "picture",
    "q",
    "quote",
    "samp",
    "section",
    "select",
    "source",
    "span",
    "strong",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "ul",
    "var",
    "video"
  ], n = [
    "defs",
    "g",
    "marker",
    "mask",
    "pattern",
    "svg",
    "switch",
    "symbol",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feFlood",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMorphology",
    "feOffset",
    "feSpecularLighting",
    "feTile",
    "feTurbulence",
    "linearGradient",
    "radialGradient",
    "stop",
    "circle",
    "ellipse",
    "image",
    "line",
    "path",
    "polygon",
    "polyline",
    "rect",
    "text",
    "use",
    "textPath",
    "tspan",
    "foreignObject",
    "clipPath"
  ], e = [
    ...t,
    ...n
  ], i = [
    "any-hover",
    "any-pointer",
    "aspect-ratio",
    "color",
    "color-gamut",
    "color-index",
    "device-aspect-ratio",
    "device-height",
    "device-width",
    "display-mode",
    "forced-colors",
    "grid",
    "height",
    "hover",
    "inverted-colors",
    "monochrome",
    "orientation",
    "overflow-block",
    "overflow-inline",
    "pointer",
    "prefers-color-scheme",
    "prefers-contrast",
    "prefers-reduced-motion",
    "prefers-reduced-transparency",
    "resolution",
    "scan",
    "scripting",
    "update",
    "width",
    // TODO: find a better solution?
    "min-width",
    "max-width",
    "min-height",
    "max-height"
  ].sort().reverse(), r = [
    "active",
    "any-link",
    "blank",
    "checked",
    "current",
    "default",
    "defined",
    "dir",
    // dir()
    "disabled",
    "drop",
    "empty",
    "enabled",
    "first",
    "first-child",
    "first-of-type",
    "fullscreen",
    "future",
    "focus",
    "focus-visible",
    "focus-within",
    "has",
    // has()
    "host",
    // host or host()
    "host-context",
    // host-context()
    "hover",
    "indeterminate",
    "in-range",
    "invalid",
    "is",
    // is()
    "lang",
    // lang()
    "last-child",
    "last-of-type",
    "left",
    "link",
    "local-link",
    "not",
    // not()
    "nth-child",
    // nth-child()
    "nth-col",
    // nth-col()
    "nth-last-child",
    // nth-last-child()
    "nth-last-col",
    // nth-last-col()
    "nth-last-of-type",
    //nth-last-of-type()
    "nth-of-type",
    //nth-of-type()
    "only-child",
    "only-of-type",
    "optional",
    "out-of-range",
    "past",
    "placeholder-shown",
    "read-only",
    "read-write",
    "required",
    "right",
    "root",
    "scope",
    "target",
    "target-within",
    "user-invalid",
    "valid",
    "visited",
    "where"
    // where()
  ].sort().reverse(), _ = [
    "after",
    "backdrop",
    "before",
    "cue",
    "cue-region",
    "first-letter",
    "first-line",
    "grammar-error",
    "marker",
    "part",
    "placeholder",
    "selection",
    "slotted",
    "spelling-error"
  ].sort().reverse(), l = [
    "accent-color",
    "align-content",
    "align-items",
    "align-self",
    "alignment-baseline",
    "all",
    "anchor-name",
    "animation",
    "animation-composition",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-range",
    "animation-range-end",
    "animation-range-start",
    "animation-timeline",
    "animation-timing-function",
    "appearance",
    "aspect-ratio",
    "backdrop-filter",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-position-x",
    "background-position-y",
    "background-repeat",
    "background-size",
    "baseline-shift",
    "block-size",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-end-end-radius",
    "border-end-start-radius",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-start-end-radius",
    "border-start-start-radius",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-align",
    "box-decoration-break",
    "box-direction",
    "box-flex",
    "box-flex-group",
    "box-lines",
    "box-ordinal-group",
    "box-orient",
    "box-pack",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "color-scheme",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "contain-intrinsic-block-size",
    "contain-intrinsic-height",
    "contain-intrinsic-inline-size",
    "contain-intrinsic-size",
    "contain-intrinsic-width",
    "container",
    "container-name",
    "container-type",
    "content",
    "content-visibility",
    "counter-increment",
    "counter-reset",
    "counter-set",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "cx",
    "cy",
    "direction",
    "display",
    "dominant-baseline",
    "empty-cells",
    "enable-background",
    "field-sizing",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "flood-color",
    "flood-opacity",
    "flow",
    "font",
    "font-display",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-optical-sizing",
    "font-palette",
    "font-size",
    "font-size-adjust",
    "font-smooth",
    "font-smoothing",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-synthesis-position",
    "font-synthesis-small-caps",
    "font-synthesis-style",
    "font-synthesis-weight",
    "font-variant",
    "font-variant-alternates",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-emoji",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "forced-color-adjust",
    "gap",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphenate-character",
    "hyphenate-limit-chars",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "ime-mode",
    "initial-letter",
    "initial-letter-align",
    "inline-size",
    "inset",
    "inset-area",
    "inset-block",
    "inset-block-end",
    "inset-block-start",
    "inset-inline",
    "inset-inline-end",
    "inset-inline-start",
    "isolation",
    "justify-content",
    "justify-items",
    "justify-self",
    "kerning",
    "left",
    "letter-spacing",
    "lighting-color",
    "line-break",
    "line-height",
    "line-height-step",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "margin-trim",
    "marker",
    "marker-end",
    "marker-mid",
    "marker-start",
    "marks",
    "mask",
    "mask-border",
    "mask-border-mode",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-border-slice",
    "mask-border-source",
    "mask-border-width",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "masonry-auto-flow",
    "math-depth",
    "math-shift",
    "math-style",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "none",
    "normal",
    "object-fit",
    "object-position",
    "offset",
    "offset-anchor",
    "offset-distance",
    "offset-path",
    "offset-position",
    "offset-rotate",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-anchor",
    "overflow-block",
    "overflow-clip-margin",
    "overflow-inline",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "overlay",
    "overscroll-behavior",
    "overscroll-behavior-block",
    "overscroll-behavior-inline",
    "overscroll-behavior-x",
    "overscroll-behavior-y",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "page",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "paint-order",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "place-content",
    "place-items",
    "place-self",
    "pointer-events",
    "position",
    "position-anchor",
    "position-visibility",
    "print-color-adjust",
    "quotes",
    "r",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "right",
    "rotate",
    "row-gap",
    "ruby-align",
    "ruby-position",
    "scale",
    "scroll-behavior",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-snap-type",
    "scroll-timeline",
    "scroll-timeline-axis",
    "scroll-timeline-name",
    "scrollbar-color",
    "scrollbar-gutter",
    "scrollbar-width",
    "shape-image-threshold",
    "shape-margin",
    "shape-outside",
    "shape-rendering",
    "speak",
    "speak-as",
    "src",
    // @font-face
    "stop-color",
    "stop-opacity",
    "stroke",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "tab-size",
    "table-layout",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-anchor",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-skip",
    "text-decoration-skip-ink",
    "text-decoration-style",
    "text-decoration-thickness",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-size-adjust",
    "text-transform",
    "text-underline-offset",
    "text-underline-position",
    "text-wrap",
    "text-wrap-mode",
    "text-wrap-style",
    "timeline-scope",
    "top",
    "touch-action",
    "transform",
    "transform-box",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-behavior",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "translate",
    "unicode-bidi",
    "user-modify",
    "user-select",
    "vector-effect",
    "vertical-align",
    "view-timeline",
    "view-timeline-axis",
    "view-timeline-inset",
    "view-timeline-name",
    "view-transition-name",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "white-space",
    "white-space-collapse",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "x",
    "y",
    "z-index",
    "zoom"
  ].sort().reverse(), c = r.concat(_).sort().reverse();
  function g(u) {
    const f = a(u), m = c, N = "and or not only", x = "[\\w-]+", k = "(" + x + "|@\\{" + x + "\\})", d = [], o = [], b = function(B) {
      return {
        // Less strings are not multiline (also include '~' for more consistent coloring of "escaped" strings)
        className: "string",
        begin: "~?" + B + ".*?" + B
      };
    }, R = function(B, F, G) {
      return {
        className: B,
        begin: F,
        relevance: G
      };
    }, T = {
      $pattern: /[a-z-]+/,
      keyword: N,
      attribute: i.join(" ")
    }, A = {
      // used only to properly balance nested parens inside mixin call, def. arg list
      begin: "\\(",
      end: "\\)",
      contains: o,
      keywords: T,
      relevance: 0
    };
    o.push(
      u.C_LINE_COMMENT_MODE,
      u.C_BLOCK_COMMENT_MODE,
      b("'"),
      b('"'),
      f.CSS_NUMBER_MODE,
      // fixme: it does not include dot for numbers like .5em :(
      {
        begin: "(url|data-uri)\\(",
        starts: {
          className: "string",
          end: "[\\)\\n]",
          excludeEnd: !0
        }
      },
      f.HEXCOLOR,
      A,
      R("variable", "@@?" + x, 10),
      R("variable", "@\\{" + x + "\\}"),
      R("built_in", "~?`[^`]*?`"),
      // inline javascript (or whatever host language) *multiline* string
      {
        // @media features (it’s here to not duplicate things in AT_RULE_MODE with extra PARENS_MODE overriding):
        className: "attribute",
        begin: x + "\\s*:",
        end: ":",
        returnBegin: !0,
        excludeEnd: !0
      },
      f.IMPORTANT,
      { beginKeywords: "and not" },
      f.FUNCTION_DISPATCH
    );
    const E = o.concat({
      begin: /\{/,
      end: /\}/,
      contains: d
    }), v = {
      beginKeywords: "when",
      endsWithParent: !0,
      contains: [{ beginKeywords: "and not" }].concat(o)
      // using this form to override VALUE’s 'function' match
    }, p = {
      begin: k + "\\s*:",
      returnBegin: !0,
      end: /[;}]/,
      relevance: 0,
      contains: [
        { begin: /-(webkit|moz|ms|o)-/ },
        f.CSS_VARIABLE,
        {
          className: "attribute",
          begin: "\\b(" + l.join("|") + ")\\b",
          end: /(?=:)/,
          starts: {
            endsWithParent: !0,
            illegal: "[<=$]",
            relevance: 0,
            contains: o
          }
        }
      ]
    }, w = {
      className: "keyword",
      begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
      starts: {
        end: "[;{}]",
        keywords: T,
        returnEnd: !0,
        contains: o,
        relevance: 0
      }
    }, s = {
      className: "variable",
      variants: [
        // using more strict pattern for higher relevance to increase chances of Less detection.
        // this is *the only* Less specific statement used in most of the sources, so...
        // (we’ll still often loose to the css-parser unless there's '//' comment,
        // simply because 1 variable just can't beat 99 properties :)
        {
          begin: "@" + x + "\\s*:",
          relevance: 15
        },
        { begin: "@" + x }
      ],
      starts: {
        end: "[;}]",
        returnEnd: !0,
        contains: E
      }
    }, y = {
      // first parse unambiguous selectors (i.e. those not starting with tag)
      // then fall into the scary lookahead-discriminator variant.
      // this mode also handles mixin definitions and calls
      variants: [
        {
          begin: "[\\.#:&\\[>]",
          end: "[;{}]"
          // mixin calls end with ';'
        },
        {
          begin: k,
          end: /\{/
        }
      ],
      returnBegin: !0,
      returnEnd: !0,
      illegal: `[<='$"]`,
      relevance: 0,
      contains: [
        u.C_LINE_COMMENT_MODE,
        u.C_BLOCK_COMMENT_MODE,
        v,
        R("keyword", "all\\b"),
        R("variable", "@\\{" + x + "\\}"),
        // otherwise it’s identified as tag
        {
          begin: "\\b(" + e.join("|") + ")\\b",
          className: "selector-tag"
        },
        f.CSS_NUMBER_MODE,
        R("selector-tag", k, 0),
        R("selector-id", "#" + k),
        R("selector-class", "\\." + k, 0),
        R("selector-tag", "&", 0),
        f.ATTRIBUTE_SELECTOR_MODE,
        {
          className: "selector-pseudo",
          begin: ":(" + r.join("|") + ")"
        },
        {
          className: "selector-pseudo",
          begin: ":(:)?(" + _.join("|") + ")"
        },
        {
          begin: /\(/,
          end: /\)/,
          relevance: 0,
          contains: E
        },
        // argument list of parametric mixins
        { begin: "!important" },
        // eat !important after mixin call or it will be colored as tag
        f.FUNCTION_DISPATCH
      ]
    }, O = {
      begin: x + `:(:)?(${m.join("|")})`,
      returnBegin: !0,
      contains: [y]
    };
    return d.push(
      u.C_LINE_COMMENT_MODE,
      u.C_BLOCK_COMMENT_MODE,
      w,
      s,
      O,
      p,
      y,
      v,
      f.FUNCTION_DISPATCH
    ), {
      name: "Less",
      case_insensitive: !0,
      illegal: `[=>'/<($"]`,
      contains: d
    };
  }
  return Mn = g, Mn;
}
var Ln, us;
function tl() {
  if (us) return Ln;
  us = 1;
  function a(t) {
    const n = "\\[=*\\[", e = "\\]=*\\]", i = {
      begin: n,
      end: e,
      contains: ["self"]
    }, r = [
      t.COMMENT("--(?!" + n + ")", "$"),
      t.COMMENT(
        "--" + n,
        e,
        {
          contains: [i],
          relevance: 10
        }
      )
    ];
    return {
      name: "Lua",
      aliases: ["pluto"],
      keywords: {
        $pattern: t.UNDERSCORE_IDENT_RE,
        literal: "true false nil",
        keyword: "and break do else elseif end for goto if in local not or repeat return then until while",
        built_in: (
          // Metatags and globals:
          "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
        )
      },
      contains: r.concat([
        {
          className: "function",
          beginKeywords: "function",
          end: "\\)",
          contains: [
            t.inherit(t.TITLE_MODE, { begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*" }),
            {
              className: "params",
              begin: "\\(",
              endsWithParent: !0,
              contains: r
            }
          ].concat(r)
        },
        t.C_NUMBER_MODE,
        t.APOS_STRING_MODE,
        t.QUOTE_STRING_MODE,
        {
          className: "string",
          begin: n,
          end: e,
          contains: [i],
          relevance: 5
        }
      ])
    };
  }
  return Ln = a, Ln;
}
var Dn, ds;
function nl() {
  if (ds) return Dn;
  ds = 1;
  function a(t) {
    const n = {
      className: "variable",
      variants: [
        {
          begin: "\\$\\(" + t.UNDERSCORE_IDENT_RE + "\\)",
          contains: [t.BACKSLASH_ESCAPE]
        },
        { begin: /\$[@%<?\^\+\*]/ }
      ]
    }, e = {
      className: "string",
      begin: /"/,
      end: /"/,
      contains: [
        t.BACKSLASH_ESCAPE,
        n
      ]
    }, i = {
      className: "variable",
      begin: /\$\([\w-]+\s/,
      end: /\)/,
      keywords: { built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value" },
      contains: [
        n,
        e
        // Added QUOTE_STRING as they can be a part of functions
      ]
    }, r = { begin: "^" + t.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)" }, _ = {
      className: "meta",
      begin: /^\.PHONY:/,
      end: /$/,
      keywords: {
        $pattern: /[\.\w]+/,
        keyword: ".PHONY"
      }
    }, l = {
      className: "section",
      begin: /^[^\s]+:/,
      end: /$/,
      contains: [n]
    };
    return {
      name: "Makefile",
      aliases: [
        "mk",
        "mak",
        "make"
      ],
      keywords: {
        $pattern: /[\w-]+/,
        keyword: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
      },
      contains: [
        t.HASH_COMMENT_MODE,
        n,
        e,
        i,
        r,
        _,
        l
      ]
    };
  }
  return Dn = a, Dn;
}
var Bn, ps;
function il() {
  if (ps) return Bn;
  ps = 1;
  function a(t) {
    const n = t.regex, e = [
      "abs",
      "accept",
      "alarm",
      "and",
      "atan2",
      "bind",
      "binmode",
      "bless",
      "break",
      "caller",
      "chdir",
      "chmod",
      "chomp",
      "chop",
      "chown",
      "chr",
      "chroot",
      "class",
      "close",
      "closedir",
      "connect",
      "continue",
      "cos",
      "crypt",
      "dbmclose",
      "dbmopen",
      "defined",
      "delete",
      "die",
      "do",
      "dump",
      "each",
      "else",
      "elsif",
      "endgrent",
      "endhostent",
      "endnetent",
      "endprotoent",
      "endpwent",
      "endservent",
      "eof",
      "eval",
      "exec",
      "exists",
      "exit",
      "exp",
      "fcntl",
      "field",
      "fileno",
      "flock",
      "for",
      "foreach",
      "fork",
      "format",
      "formline",
      "getc",
      "getgrent",
      "getgrgid",
      "getgrnam",
      "gethostbyaddr",
      "gethostbyname",
      "gethostent",
      "getlogin",
      "getnetbyaddr",
      "getnetbyname",
      "getnetent",
      "getpeername",
      "getpgrp",
      "getpriority",
      "getprotobyname",
      "getprotobynumber",
      "getprotoent",
      "getpwent",
      "getpwnam",
      "getpwuid",
      "getservbyname",
      "getservbyport",
      "getservent",
      "getsockname",
      "getsockopt",
      "given",
      "glob",
      "gmtime",
      "goto",
      "grep",
      "gt",
      "hex",
      "if",
      "index",
      "int",
      "ioctl",
      "join",
      "keys",
      "kill",
      "last",
      "lc",
      "lcfirst",
      "length",
      "link",
      "listen",
      "local",
      "localtime",
      "log",
      "lstat",
      "lt",
      "ma",
      "map",
      "method",
      "mkdir",
      "msgctl",
      "msgget",
      "msgrcv",
      "msgsnd",
      "my",
      "ne",
      "next",
      "no",
      "not",
      "oct",
      "open",
      "opendir",
      "or",
      "ord",
      "our",
      "pack",
      "package",
      "pipe",
      "pop",
      "pos",
      "print",
      "printf",
      "prototype",
      "push",
      "q|0",
      "qq",
      "quotemeta",
      "qw",
      "qx",
      "rand",
      "read",
      "readdir",
      "readline",
      "readlink",
      "readpipe",
      "recv",
      "redo",
      "ref",
      "rename",
      "require",
      "reset",
      "return",
      "reverse",
      "rewinddir",
      "rindex",
      "rmdir",
      "say",
      "scalar",
      "seek",
      "seekdir",
      "select",
      "semctl",
      "semget",
      "semop",
      "send",
      "setgrent",
      "sethostent",
      "setnetent",
      "setpgrp",
      "setpriority",
      "setprotoent",
      "setpwent",
      "setservent",
      "setsockopt",
      "shift",
      "shmctl",
      "shmget",
      "shmread",
      "shmwrite",
      "shutdown",
      "sin",
      "sleep",
      "socket",
      "socketpair",
      "sort",
      "splice",
      "split",
      "sprintf",
      "sqrt",
      "srand",
      "stat",
      "state",
      "study",
      "sub",
      "substr",
      "symlink",
      "syscall",
      "sysopen",
      "sysread",
      "sysseek",
      "system",
      "syswrite",
      "tell",
      "telldir",
      "tie",
      "tied",
      "time",
      "times",
      "tr",
      "truncate",
      "uc",
      "ucfirst",
      "umask",
      "undef",
      "unless",
      "unlink",
      "unpack",
      "unshift",
      "untie",
      "until",
      "use",
      "utime",
      "values",
      "vec",
      "wait",
      "waitpid",
      "wantarray",
      "warn",
      "when",
      "while",
      "write",
      "x|0",
      "xor",
      "y|0"
    ], i = /[dualxmsipngr]{0,12}/, r = {
      $pattern: /[\w.]+/,
      keyword: e.join(" ")
    }, _ = {
      className: "subst",
      begin: "[$@]\\{",
      end: "\\}",
      keywords: r
    }, l = {
      begin: /->\{/,
      end: /\}/
      // contains defined later
    }, c = {
      scope: "attr",
      match: /\s+:\s*\w+(\s*\(.*?\))?/
    }, g = {
      scope: "variable",
      variants: [
        { begin: /\$\d/ },
        {
          begin: n.concat(
            /[$%@](?!")(\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,
            // negative look-ahead tries to avoid matching patterns that are not
            // Perl at all like $ident$, @ident@, etc.
            "(?![A-Za-z])(?![@$%])"
          )
        },
        {
          // Only $= is a special Perl variable and one can't declare @= or %=.
          begin: /[$%@](?!")[^\s\w{=]|\$=/,
          relevance: 0
        }
      ],
      contains: [c]
    }, u = {
      className: "number",
      variants: [
        // decimal numbers:
        // include the case where a number starts with a dot (eg. .9), and
        // the leading 0? avoids mixing the first and second match on 0.x cases
        { match: /0?\.[0-9][0-9_]+\b/ },
        // include the special versioned number (eg. v5.38)
        { match: /\bv?(0|[1-9][0-9_]*(\.[0-9_]+)?|[1-9][0-9_]*)\b/ },
        // non-decimal numbers:
        { match: /\b0[0-7][0-7_]*\b/ },
        { match: /\b0x[0-9a-fA-F][0-9a-fA-F_]*\b/ },
        { match: /\b0b[0-1][0-1_]*\b/ }
      ],
      relevance: 0
    }, f = [
      t.BACKSLASH_ESCAPE,
      _,
      g
    ], m = [
      /!/,
      /\//,
      /\|/,
      /\?/,
      /'/,
      /"/,
      // valid but infrequent and weird
      /#/
      // valid but infrequent and weird
    ], N = (d, o, b = "\\1") => {
      const R = b === "\\1" ? b : n.concat(b, o);
      return n.concat(
        n.concat("(?:", d, ")"),
        o,
        /(?:\\.|[^\\\/])*?/,
        R,
        /(?:\\.|[^\\\/])*?/,
        b,
        i
      );
    }, x = (d, o, b) => n.concat(
      n.concat("(?:", d, ")"),
      o,
      /(?:\\.|[^\\\/])*?/,
      b,
      i
    ), k = [
      g,
      t.HASH_COMMENT_MODE,
      t.COMMENT(
        /^=\w/,
        /=cut/,
        { endsWithParent: !0 }
      ),
      l,
      {
        className: "string",
        contains: f,
        variants: [
          {
            begin: "q[qwxr]?\\s*\\(",
            end: "\\)",
            relevance: 5
          },
          {
            begin: "q[qwxr]?\\s*\\[",
            end: "\\]",
            relevance: 5
          },
          {
            begin: "q[qwxr]?\\s*\\{",
            end: "\\}",
            relevance: 5
          },
          {
            begin: "q[qwxr]?\\s*\\|",
            end: "\\|",
            relevance: 5
          },
          {
            begin: "q[qwxr]?\\s*<",
            end: ">",
            relevance: 5
          },
          {
            begin: "qw\\s+q",
            end: "q",
            relevance: 5
          },
          {
            begin: "'",
            end: "'",
            contains: [t.BACKSLASH_ESCAPE]
          },
          {
            begin: '"',
            end: '"'
          },
          {
            begin: "`",
            end: "`",
            contains: [t.BACKSLASH_ESCAPE]
          },
          {
            begin: /\{\w+\}/,
            relevance: 0
          },
          {
            begin: "-?\\w+\\s*=>",
            relevance: 0
          }
        ]
      },
      u,
      {
        // regexp container
        begin: "(\\/\\/|" + t.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
        keywords: "split return print reverse grep",
        relevance: 0,
        contains: [
          t.HASH_COMMENT_MODE,
          {
            className: "regexp",
            variants: [
              // allow matching common delimiters
              { begin: N("s|tr|y", n.either(...m, { capture: !0 })) },
              // and then paired delmis
              { begin: N("s|tr|y", "\\(", "\\)") },
              { begin: N("s|tr|y", "\\[", "\\]") },
              { begin: N("s|tr|y", "\\{", "\\}") }
            ],
            relevance: 2
          },
          {
            className: "regexp",
            variants: [
              {
                // could be a comment in many languages so do not count
                // as relevant
                begin: /(m|qr)\/\//,
                relevance: 0
              },
              // prefix is optional with /regex/
              { begin: x("(?:m|qr)?", /\//, /\//) },
              // allow matching common delimiters
              { begin: x("m|qr", n.either(...m, { capture: !0 }), /\1/) },
              // allow common paired delmins
              { begin: x("m|qr", /\(/, /\)/) },
              { begin: x("m|qr", /\[/, /\]/) },
              { begin: x("m|qr", /\{/, /\}/) }
            ]
          }
        ]
      },
      {
        className: "function",
        beginKeywords: "sub method",
        end: "(\\s*\\(.*?\\))?[;{]",
        excludeEnd: !0,
        relevance: 5,
        contains: [t.TITLE_MODE, c]
      },
      {
        className: "class",
        beginKeywords: "class",
        end: "[;{]",
        excludeEnd: !0,
        relevance: 5,
        contains: [t.TITLE_MODE, c, u]
      },
      {
        begin: "-\\w\\b",
        relevance: 0
      },
      {
        begin: "^__DATA__$",
        end: "^__END__$",
        subLanguage: "mojolicious",
        contains: [
          {
            begin: "^@@.*",
            end: "$",
            className: "comment"
          }
        ]
      }
    ];
    return _.contains = k, l.contains = k, {
      name: "Perl",
      aliases: [
        "pl",
        "pm"
      ],
      keywords: r,
      contains: k
    };
  }
  return Bn = a, Bn;
}
var Pn, fs;
function sl() {
  if (fs) return Pn;
  fs = 1;
  function a(t) {
    const n = {
      className: "built_in",
      begin: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
    }, e = /[a-zA-Z@][a-zA-Z0-9_]*/, c = {
      "variable.language": [
        "this",
        "super"
      ],
      $pattern: e,
      keyword: [
        "while",
        "export",
        "sizeof",
        "typedef",
        "const",
        "struct",
        "for",
        "union",
        "volatile",
        "static",
        "mutable",
        "if",
        "do",
        "return",
        "goto",
        "enum",
        "else",
        "break",
        "extern",
        "asm",
        "case",
        "default",
        "register",
        "explicit",
        "typename",
        "switch",
        "continue",
        "inline",
        "readonly",
        "assign",
        "readwrite",
        "self",
        "@synchronized",
        "id",
        "typeof",
        "nonatomic",
        "IBOutlet",
        "IBAction",
        "strong",
        "weak",
        "copy",
        "in",
        "out",
        "inout",
        "bycopy",
        "byref",
        "oneway",
        "__strong",
        "__weak",
        "__block",
        "__autoreleasing",
        "@private",
        "@protected",
        "@public",
        "@try",
        "@property",
        "@end",
        "@throw",
        "@catch",
        "@finally",
        "@autoreleasepool",
        "@synthesize",
        "@dynamic",
        "@selector",
        "@optional",
        "@required",
        "@encode",
        "@package",
        "@import",
        "@defs",
        "@compatibility_alias",
        "__bridge",
        "__bridge_transfer",
        "__bridge_retained",
        "__bridge_retain",
        "__covariant",
        "__contravariant",
        "__kindof",
        "_Nonnull",
        "_Nullable",
        "_Null_unspecified",
        "__FUNCTION__",
        "__PRETTY_FUNCTION__",
        "__attribute__",
        "getter",
        "setter",
        "retain",
        "unsafe_unretained",
        "nonnull",
        "nullable",
        "null_unspecified",
        "null_resettable",
        "class",
        "instancetype",
        "NS_DESIGNATED_INITIALIZER",
        "NS_UNAVAILABLE",
        "NS_REQUIRES_SUPER",
        "NS_RETURNS_INNER_POINTER",
        "NS_INLINE",
        "NS_AVAILABLE",
        "NS_DEPRECATED",
        "NS_ENUM",
        "NS_OPTIONS",
        "NS_SWIFT_UNAVAILABLE",
        "NS_ASSUME_NONNULL_BEGIN",
        "NS_ASSUME_NONNULL_END",
        "NS_REFINED_FOR_SWIFT",
        "NS_SWIFT_NAME",
        "NS_SWIFT_NOTHROW",
        "NS_DURING",
        "NS_HANDLER",
        "NS_ENDHANDLER",
        "NS_VALUERETURN",
        "NS_VOIDRETURN"
      ],
      literal: [
        "false",
        "true",
        "FALSE",
        "TRUE",
        "nil",
        "YES",
        "NO",
        "NULL"
      ],
      built_in: [
        "dispatch_once_t",
        "dispatch_queue_t",
        "dispatch_sync",
        "dispatch_async",
        "dispatch_once"
      ],
      type: [
        "int",
        "float",
        "char",
        "unsigned",
        "signed",
        "short",
        "long",
        "double",
        "wchar_t",
        "unichar",
        "void",
        "bool",
        "BOOL",
        "id|0",
        "_Bool"
      ]
    }, g = {
      $pattern: e,
      keyword: [
        "@interface",
        "@class",
        "@protocol",
        "@implementation"
      ]
    };
    return {
      name: "Objective-C",
      aliases: [
        "mm",
        "objc",
        "obj-c",
        "obj-c++",
        "objective-c++"
      ],
      keywords: c,
      illegal: "</",
      contains: [
        n,
        t.C_LINE_COMMENT_MODE,
        t.C_BLOCK_COMMENT_MODE,
        t.C_NUMBER_MODE,
        t.QUOTE_STRING_MODE,
        t.APOS_STRING_MODE,
        {
          className: "string",
          variants: [
            {
              begin: '@"',
              end: '"',
              illegal: "\\n",
              contains: [t.BACKSLASH_ESCAPE]
            }
          ]
        },
        {
          className: "meta",
          begin: /#\s*[a-z]+\b/,
          end: /$/,
          keywords: { keyword: "if else elif endif define undef warning error line pragma ifdef ifndef include" },
          contains: [
            {
              begin: /\\\n/,
              relevance: 0
            },
            t.inherit(t.QUOTE_STRING_MODE, { className: "string" }),
            {
              className: "string",
              begin: /<.*?>/,
              end: /$/,
              illegal: "\\n"
            },
            t.C_LINE_COMMENT_MODE,
            t.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          className: "class",
          begin: "(" + g.keyword.join("|") + ")\\b",
          end: /(\{|$)/,
          excludeEnd: !0,
          keywords: g,
          contains: [t.UNDERSCORE_TITLE_MODE]
        },
        {
          begin: "\\." + t.UNDERSCORE_IDENT_RE,
          relevance: 0
        }
      ]
    };
  }
  return Pn = a, Pn;
}
var Un, hs;
function al() {
  if (hs) return Un;
  hs = 1;
  function a(t) {
    const n = t.regex, e = /(?![A-Za-z0-9])(?![$])/, i = n.concat(
      /[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,
      e
    ), r = n.concat(
      /(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,
      e
    ), _ = n.concat(
      /[A-Z]+/,
      e
    ), l = {
      scope: "variable",
      match: "\\$+" + i
    }, c = {
      scope: "meta",
      variants: [
        { begin: /<\?php/, relevance: 10 },
        // boost for obvious PHP
        { begin: /<\?=/ },
        // less relevant per PSR-1 which says not to use short-tags
        { begin: /<\?/, relevance: 0.1 },
        { begin: /\?>/ }
        // end php tag
      ]
    }, g = {
      scope: "subst",
      variants: [
        { begin: /\$\w+/ },
        {
          begin: /\{\$/,
          end: /\}/
        }
      ]
    }, u = t.inherit(t.APOS_STRING_MODE, { illegal: null }), f = t.inherit(t.QUOTE_STRING_MODE, {
      illegal: null,
      contains: t.QUOTE_STRING_MODE.contains.concat(g)
    }), m = {
      begin: /<<<[ \t]*(?:(\w+)|"(\w+)")\n/,
      end: /[ \t]*(\w+)\b/,
      contains: t.QUOTE_STRING_MODE.contains.concat(g),
      "on:begin": (G, H) => {
        H.data._beginMatch = G[1] || G[2];
      },
      "on:end": (G, H) => {
        H.data._beginMatch !== G[1] && H.ignoreMatch();
      }
    }, N = t.END_SAME_AS_BEGIN({
      begin: /<<<[ \t]*'(\w+)'\n/,
      end: /[ \t]*(\w+)\b/
    }), x = `[ 	
]`, k = {
      scope: "string",
      variants: [
        f,
        u,
        m,
        N
      ]
    }, d = {
      scope: "number",
      variants: [
        { begin: "\\b0[bB][01]+(?:_[01]+)*\\b" },
        // Binary w/ underscore support
        { begin: "\\b0[oO][0-7]+(?:_[0-7]+)*\\b" },
        // Octals w/ underscore support
        { begin: "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b" },
        // Hex w/ underscore support
        // Decimals w/ underscore support, with optional fragments and scientific exponent (e) suffix.
        { begin: "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?" }
      ],
      relevance: 0
    }, o = [
      "false",
      "null",
      "true"
    ], b = [
      // Magic constants:
      // <https://www.php.net/manual/en/language.constants.predefined.php>
      "__CLASS__",
      "__DIR__",
      "__FILE__",
      "__FUNCTION__",
      "__COMPILER_HALT_OFFSET__",
      "__LINE__",
      "__METHOD__",
      "__NAMESPACE__",
      "__TRAIT__",
      // Function that look like language construct or language construct that look like function:
      // List of keywords that may not require parenthesis
      "die",
      "echo",
      "exit",
      "include",
      "include_once",
      "print",
      "require",
      "require_once",
      // These are not language construct (function) but operate on the currently-executing function and can access the current symbol table
      // 'compact extract func_get_arg func_get_args func_num_args get_called_class get_parent_class ' +
      // Other keywords:
      // <https://www.php.net/manual/en/reserved.php>
      // <https://www.php.net/manual/en/language.types.type-juggling.php>
      "array",
      "abstract",
      "and",
      "as",
      "binary",
      "bool",
      "boolean",
      "break",
      "callable",
      "case",
      "catch",
      "class",
      "clone",
      "const",
      "continue",
      "declare",
      "default",
      "do",
      "double",
      "else",
      "elseif",
      "empty",
      "enddeclare",
      "endfor",
      "endforeach",
      "endif",
      "endswitch",
      "endwhile",
      "enum",
      "eval",
      "extends",
      "final",
      "finally",
      "float",
      "for",
      "foreach",
      "from",
      "global",
      "goto",
      "if",
      "implements",
      "instanceof",
      "insteadof",
      "int",
      "integer",
      "interface",
      "isset",
      "iterable",
      "list",
      "match|0",
      "mixed",
      "new",
      "never",
      "object",
      "or",
      "private",
      "protected",
      "public",
      "readonly",
      "real",
      "return",
      "string",
      "switch",
      "throw",
      "trait",
      "try",
      "unset",
      "use",
      "var",
      "void",
      "while",
      "xor",
      "yield"
    ], R = [
      // Standard PHP library:
      // <https://www.php.net/manual/en/book.spl.php>
      "Error|0",
      "AppendIterator",
      "ArgumentCountError",
      "ArithmeticError",
      "ArrayIterator",
      "ArrayObject",
      "AssertionError",
      "BadFunctionCallException",
      "BadMethodCallException",
      "CachingIterator",
      "CallbackFilterIterator",
      "CompileError",
      "Countable",
      "DirectoryIterator",
      "DivisionByZeroError",
      "DomainException",
      "EmptyIterator",
      "ErrorException",
      "Exception",
      "FilesystemIterator",
      "FilterIterator",
      "GlobIterator",
      "InfiniteIterator",
      "InvalidArgumentException",
      "IteratorIterator",
      "LengthException",
      "LimitIterator",
      "LogicException",
      "MultipleIterator",
      "NoRewindIterator",
      "OutOfBoundsException",
      "OutOfRangeException",
      "OuterIterator",
      "OverflowException",
      "ParentIterator",
      "ParseError",
      "RangeException",
      "RecursiveArrayIterator",
      "RecursiveCachingIterator",
      "RecursiveCallbackFilterIterator",
      "RecursiveDirectoryIterator",
      "RecursiveFilterIterator",
      "RecursiveIterator",
      "RecursiveIteratorIterator",
      "RecursiveRegexIterator",
      "RecursiveTreeIterator",
      "RegexIterator",
      "RuntimeException",
      "SeekableIterator",
      "SplDoublyLinkedList",
      "SplFileInfo",
      "SplFileObject",
      "SplFixedArray",
      "SplHeap",
      "SplMaxHeap",
      "SplMinHeap",
      "SplObjectStorage",
      "SplObserver",
      "SplPriorityQueue",
      "SplQueue",
      "SplStack",
      "SplSubject",
      "SplTempFileObject",
      "TypeError",
      "UnderflowException",
      "UnexpectedValueException",
      "UnhandledMatchError",
      // Reserved interfaces:
      // <https://www.php.net/manual/en/reserved.interfaces.php>
      "ArrayAccess",
      "BackedEnum",
      "Closure",
      "Fiber",
      "Generator",
      "Iterator",
      "IteratorAggregate",
      "Serializable",
      "Stringable",
      "Throwable",
      "Traversable",
      "UnitEnum",
      "WeakReference",
      "WeakMap",
      // Reserved classes:
      // <https://www.php.net/manual/en/reserved.classes.php>
      "Directory",
      "__PHP_Incomplete_Class",
      "parent",
      "php_user_filter",
      "self",
      "static",
      "stdClass"
    ], A = {
      keyword: b,
      literal: ((G) => {
        const H = [];
        return G.forEach((j) => {
          H.push(j), j.toLowerCase() === j ? H.push(j.toUpperCase()) : H.push(j.toLowerCase());
        }), H;
      })(o),
      built_in: R
    }, E = (G) => G.map((H) => H.replace(/\|\d+$/, "")), v = { variants: [
      {
        match: [
          /new/,
          n.concat(x, "+"),
          // to prevent built ins from being confused as the class constructor call
          n.concat("(?!", E(R).join("\\b|"), "\\b)"),
          r
        ],
        scope: {
          1: "keyword",
          4: "title.class"
        }
      }
    ] }, p = n.concat(i, "\\b(?!\\()"), w = { variants: [
      {
        match: [
          n.concat(
            /::/,
            n.lookahead(/(?!class\b)/)
          ),
          p
        ],
        scope: { 2: "variable.constant" }
      },
      {
        match: [
          /::/,
          /class/
        ],
        scope: { 2: "variable.language" }
      },
      {
        match: [
          r,
          n.concat(
            /::/,
            n.lookahead(/(?!class\b)/)
          ),
          p
        ],
        scope: {
          1: "title.class",
          3: "variable.constant"
        }
      },
      {
        match: [
          r,
          n.concat(
            "::",
            n.lookahead(/(?!class\b)/)
          )
        ],
        scope: { 1: "title.class" }
      },
      {
        match: [
          r,
          /::/,
          /class/
        ],
        scope: {
          1: "title.class",
          3: "variable.language"
        }
      }
    ] }, s = {
      scope: "attr",
      match: n.concat(i, n.lookahead(":"), n.lookahead(/(?!::)/))
    }, y = {
      relevance: 0,
      begin: /\(/,
      end: /\)/,
      keywords: A,
      contains: [
        s,
        l,
        w,
        t.C_BLOCK_COMMENT_MODE,
        k,
        d,
        v
      ]
    }, O = {
      relevance: 0,
      match: [
        /\b/,
        // to prevent keywords from being confused as the function title
        n.concat("(?!fn\\b|function\\b|", E(b).join("\\b|"), "|", E(R).join("\\b|"), "\\b)"),
        i,
        n.concat(x, "*"),
        n.lookahead(/(?=\()/)
      ],
      scope: { 3: "title.function.invoke" },
      contains: [y]
    };
    y.contains.push(O);
    const B = [
      s,
      w,
      t.C_BLOCK_COMMENT_MODE,
      k,
      d,
      v
    ], F = {
      begin: n.concat(
        /#\[\s*\\?/,
        n.either(
          r,
          _
        )
      ),
      beginScope: "meta",
      end: /]/,
      endScope: "meta",
      keywords: {
        literal: o,
        keyword: [
          "new",
          "array"
        ]
      },
      contains: [
        {
          begin: /\[/,
          end: /]/,
          keywords: {
            literal: o,
            keyword: [
              "new",
              "array"
            ]
          },
          contains: [
            "self",
            ...B
          ]
        },
        ...B,
        {
          scope: "meta",
          variants: [
            { match: r },
            { match: _ }
          ]
        }
      ]
    };
    return {
      case_insensitive: !1,
      keywords: A,
      contains: [
        F,
        t.HASH_COMMENT_MODE,
        t.COMMENT("//", "$"),
        t.COMMENT(
          "/\\*",
          "\\*/",
          { contains: [
            {
              scope: "doctag",
              match: "@[A-Za-z]+"
            }
          ] }
        ),
        {
          match: /__halt_compiler\(\);/,
          keywords: "__halt_compiler",
          starts: {
            scope: "comment",
            end: t.MATCH_NOTHING_RE,
            contains: [
              {
                match: /\?>/,
                scope: "meta",
                endsParent: !0
              }
            ]
          }
        },
        c,
        {
          scope: "variable.language",
          match: /\$this\b/
        },
        l,
        O,
        w,
        {
          match: [
            /const/,
            /\s/,
            i
          ],
          scope: {
            1: "keyword",
            3: "variable.constant"
          }
        },
        v,
        {
          scope: "function",
          relevance: 0,
          beginKeywords: "fn function",
          end: /[;{]/,
          excludeEnd: !0,
          illegal: "[$%\\[]",
          contains: [
            { beginKeywords: "use" },
            t.UNDERSCORE_TITLE_MODE,
            {
              begin: "=>",
              // No markup, just a relevance booster
              endsParent: !0
            },
            {
              scope: "params",
              begin: "\\(",
              end: "\\)",
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: A,
              contains: [
                "self",
                F,
                l,
                w,
                t.C_BLOCK_COMMENT_MODE,
                k,
                d
              ]
            }
          ]
        },
        {
          scope: "class",
          variants: [
            {
              beginKeywords: "enum",
              illegal: /[($"]/
            },
            {
              beginKeywords: "class interface trait",
              illegal: /[:($"]/
            }
          ],
          relevance: 0,
          end: /\{/,
          excludeEnd: !0,
          contains: [
            { beginKeywords: "extends implements" },
            t.UNDERSCORE_TITLE_MODE
          ]
        },
        // both use and namespace still use "old style" rules (vs multi-match)
        // because the namespace name can include `\` and we still want each
        // element to be treated as its own *individual* title
        {
          beginKeywords: "namespace",
          relevance: 0,
          end: ";",
          illegal: /[.']/,
          contains: [t.inherit(t.UNDERSCORE_TITLE_MODE, { scope: "title.class" })]
        },
        {
          beginKeywords: "use",
          relevance: 0,
          end: ";",
          contains: [
            // TODO: title.function vs title.class
            {
              match: /\b(as|const|function)\b/,
              scope: "keyword"
            },
            // TODO: could be title.class or title.function
            t.UNDERSCORE_TITLE_MODE
          ]
        },
        k,
        d
      ]
    };
  }
  return Un = a, Un;
}
var Fn, gs;
function rl() {
  if (gs) return Fn;
  gs = 1;
  function a(t) {
    return {
      name: "PHP template",
      subLanguage: "xml",
      contains: [
        {
          begin: /<\?(php|=)?/,
          end: /\?>/,
          subLanguage: "php",
          contains: [
            // We don't want the php closing tag ?> to close the PHP block when
            // inside any of the following blocks:
            {
              begin: "/\\*",
              end: "\\*/",
              skip: !0
            },
            {
              begin: 'b"',
              end: '"',
              skip: !0
            },
            {
              begin: "b'",
              end: "'",
              skip: !0
            },
            t.inherit(t.APOS_STRING_MODE, {
              illegal: null,
              className: null,
              contains: null,
              skip: !0
            }),
            t.inherit(t.QUOTE_STRING_MODE, {
              illegal: null,
              className: null,
              contains: null,
              skip: !0
            })
          ]
        }
      ]
    };
  }
  return Fn = a, Fn;
}
var $n, bs;
function ol() {
  if (bs) return $n;
  bs = 1;
  function a(t) {
    return {
      name: "Plain text",
      aliases: [
        "text",
        "txt"
      ],
      disableAutodetect: !0
    };
  }
  return $n = a, $n;
}
var zn, ms;
function ll() {
  if (ms) return zn;
  ms = 1;
  function a(t) {
    const n = t.regex, e = new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*", "u"), i = [
      "and",
      "as",
      "assert",
      "async",
      "await",
      "break",
      "case",
      "class",
      "continue",
      "def",
      "del",
      "elif",
      "else",
      "except",
      "finally",
      "for",
      "from",
      "global",
      "if",
      "import",
      "in",
      "is",
      "lambda",
      "match",
      "nonlocal|10",
      "not",
      "or",
      "pass",
      "raise",
      "return",
      "try",
      "while",
      "with",
      "yield"
    ], c = {
      $pattern: /[A-Za-z]\w+|__\w+__/,
      keyword: i,
      built_in: [
        "__import__",
        "abs",
        "all",
        "any",
        "ascii",
        "bin",
        "bool",
        "breakpoint",
        "bytearray",
        "bytes",
        "callable",
        "chr",
        "classmethod",
        "compile",
        "complex",
        "delattr",
        "dict",
        "dir",
        "divmod",
        "enumerate",
        "eval",
        "exec",
        "filter",
        "float",
        "format",
        "frozenset",
        "getattr",
        "globals",
        "hasattr",
        "hash",
        "help",
        "hex",
        "id",
        "input",
        "int",
        "isinstance",
        "issubclass",
        "iter",
        "len",
        "list",
        "locals",
        "map",
        "max",
        "memoryview",
        "min",
        "next",
        "object",
        "oct",
        "open",
        "ord",
        "pow",
        "print",
        "property",
        "range",
        "repr",
        "reversed",
        "round",
        "set",
        "setattr",
        "slice",
        "sorted",
        "staticmethod",
        "str",
        "sum",
        "super",
        "tuple",
        "type",
        "vars",
        "zip"
      ],
      literal: [
        "__debug__",
        "Ellipsis",
        "False",
        "None",
        "NotImplemented",
        "True"
      ],
      type: [
        "Any",
        "Callable",
        "Coroutine",
        "Dict",
        "List",
        "Literal",
        "Generic",
        "Optional",
        "Sequence",
        "Set",
        "Tuple",
        "Type",
        "Union"
      ]
    }, g = {
      className: "meta",
      begin: /^(>>>|\.\.\.) /
    }, u = {
      className: "subst",
      begin: /\{/,
      end: /\}/,
      keywords: c,
      illegal: /#/
    }, f = {
      begin: /\{\{/,
      relevance: 0
    }, m = {
      className: "string",
      contains: [t.BACKSLASH_ESCAPE],
      variants: [
        {
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
          end: /'''/,
          contains: [
            t.BACKSLASH_ESCAPE,
            g
          ],
          relevance: 10
        },
        {
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
          end: /"""/,
          contains: [
            t.BACKSLASH_ESCAPE,
            g
          ],
          relevance: 10
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])'''/,
          end: /'''/,
          contains: [
            t.BACKSLASH_ESCAPE,
            g,
            f,
            u
          ]
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])"""/,
          end: /"""/,
          contains: [
            t.BACKSLASH_ESCAPE,
            g,
            f,
            u
          ]
        },
        {
          begin: /([uU]|[rR])'/,
          end: /'/,
          relevance: 10
        },
        {
          begin: /([uU]|[rR])"/,
          end: /"/,
          relevance: 10
        },
        {
          begin: /([bB]|[bB][rR]|[rR][bB])'/,
          end: /'/
        },
        {
          begin: /([bB]|[bB][rR]|[rR][bB])"/,
          end: /"/
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])'/,
          end: /'/,
          contains: [
            t.BACKSLASH_ESCAPE,
            f,
            u
          ]
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])"/,
          end: /"/,
          contains: [
            t.BACKSLASH_ESCAPE,
            f,
            u
          ]
        },
        t.APOS_STRING_MODE,
        t.QUOTE_STRING_MODE
      ]
    }, N = "[0-9](_?[0-9])*", x = `(\\b(${N}))?\\.(${N})|\\b(${N})\\.`, k = `\\b|${i.join("|")}`, d = {
      className: "number",
      relevance: 0,
      variants: [
        // exponentfloat, pointfloat
        // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
        // optionally imaginary
        // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
        // Note: no leading \b because floats can start with a decimal point
        // and we don't want to mishandle e.g. `fn(.5)`,
        // no trailing \b for pointfloat because it can end with a decimal point
        // and we don't want to mishandle e.g. `0..hex()`; this should be safe
        // because both MUST contain a decimal point and so cannot be confused with
        // the interior part of an identifier
        {
          begin: `(\\b(${N})|(${x}))[eE][+-]?(${N})[jJ]?(?=${k})`
        },
        {
          begin: `(${x})[jJ]?`
        },
        // decinteger, bininteger, octinteger, hexinteger
        // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
        // optionally "long" in Python 2
        // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
        // decinteger is optionally imaginary
        // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
        {
          begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${k})`
        },
        {
          begin: `\\b0[bB](_?[01])+[lL]?(?=${k})`
        },
        {
          begin: `\\b0[oO](_?[0-7])+[lL]?(?=${k})`
        },
        {
          begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${k})`
        },
        // imagnumber (digitpart-based)
        // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
        {
          begin: `\\b(${N})[jJ](?=${k})`
        }
      ]
    }, o = {
      className: "comment",
      begin: n.lookahead(/# type:/),
      end: /$/,
      keywords: c,
      contains: [
        {
          // prevent keywords from coloring `type`
          begin: /# type:/
        },
        // comment within a datatype comment includes no keywords
        {
          begin: /#/,
          end: /\b\B/,
          endsWithParent: !0
        }
      ]
    }, b = {
      className: "params",
      variants: [
        // Exclude params in functions without params
        {
          className: "",
          begin: /\(\s*\)/,
          skip: !0
        },
        {
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: c,
          contains: [
            "self",
            g,
            d,
            m,
            t.HASH_COMMENT_MODE
          ]
        }
      ]
    };
    return u.contains = [
      m,
      d,
      g
    ], {
      name: "Python",
      aliases: [
        "py",
        "gyp",
        "ipython"
      ],
      unicodeRegex: !0,
      keywords: c,
      illegal: /(<\/|\?)|=>/,
      contains: [
        g,
        d,
        {
          // very common convention
          scope: "variable.language",
          match: /\bself\b/
        },
        {
          // eat "if" prior to string so that it won't accidentally be
          // labeled as an f-string
          beginKeywords: "if",
          relevance: 0
        },
        { match: /\bor\b/, scope: "keyword" },
        m,
        o,
        t.HASH_COMMENT_MODE,
        {
          match: [
            /\bdef/,
            /\s+/,
            e
          ],
          scope: {
            1: "keyword",
            3: "title.function"
          },
          contains: [b]
        },
        {
          variants: [
            {
              match: [
                /\bclass/,
                /\s+/,
                e,
                /\s*/,
                /\(\s*/,
                e,
                /\s*\)/
              ]
            },
            {
              match: [
                /\bclass/,
                /\s+/,
                e
              ]
            }
          ],
          scope: {
            1: "keyword",
            3: "title.class",
            6: "title.class.inherited"
          }
        },
        {
          className: "meta",
          begin: /^[\t ]*@/,
          end: /(?=#)|$/,
          contains: [
            d,
            b,
            m
          ]
        }
      ]
    };
  }
  return zn = a, zn;
}
var Kn, vs;
function cl() {
  if (vs) return Kn;
  vs = 1;
  function a(t) {
    return {
      aliases: ["pycon"],
      contains: [
        {
          className: "meta.prompt",
          starts: {
            // a space separates the REPL prefix from the actual code
            // this is purely for cleaner HTML output
            end: / |$/,
            starts: {
              end: "$",
              subLanguage: "python"
            }
          },
          variants: [
            { begin: /^>>>(?=[ ]|$)/ },
            { begin: /^\.\.\.(?=[ ]|$)/ }
          ]
        }
      ]
    };
  }
  return Kn = a, Kn;
}
var Gn, Es;
function _l() {
  if (Es) return Gn;
  Es = 1;
  function a(t) {
    const n = t.regex, e = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/, i = n.either(
      // Special case: only hexadecimal binary powers can contain fractions
      /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,
      // Hexadecimal numbers without fraction and optional binary power
      /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,
      // Decimal numbers
      /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/
    ), r = /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/, _ = n.either(
      /[()]/,
      /[{}]/,
      /\[\[/,
      /[[\]]/,
      /\\/,
      /,/
    );
    return {
      name: "R",
      keywords: {
        $pattern: e,
        keyword: "function if in break next repeat else for while",
        literal: "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
        built_in: (
          // Builtin constants
          "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
        )
      },
      contains: [
        // Roxygen comments
        t.COMMENT(
          /#'/,
          /$/,
          { contains: [
            {
              // Handle `@examples` separately to cause all subsequent code
              // until the next `@`-tag on its own line to be kept as-is,
              // preventing highlighting. This code is example R code, so nested
              // doctags shouldn’t be treated as such. See
              // `test/markup/r/roxygen.txt` for an example.
              scope: "doctag",
              match: /@examples/,
              starts: {
                end: n.lookahead(n.either(
                  // end if another doc comment
                  /\n^#'\s*(?=@[a-zA-Z]+)/,
                  // or a line with no comment
                  /\n^(?!#')/
                )),
                endsParent: !0
              }
            },
            {
              // Handle `@param` to highlight the parameter name following
              // after.
              scope: "doctag",
              begin: "@param",
              end: /$/,
              contains: [
                {
                  scope: "variable",
                  variants: [
                    { match: e },
                    { match: /`(?:\\.|[^`\\])+`/ }
                  ],
                  endsParent: !0
                }
              ]
            },
            {
              scope: "doctag",
              match: /@[a-zA-Z]+/
            },
            {
              scope: "keyword",
              match: /\\[a-zA-Z]+/
            }
          ] }
        ),
        t.HASH_COMMENT_MODE,
        {
          scope: "string",
          contains: [t.BACKSLASH_ESCAPE],
          variants: [
            t.END_SAME_AS_BEGIN({
              begin: /[rR]"(-*)\(/,
              end: /\)(-*)"/
            }),
            t.END_SAME_AS_BEGIN({
              begin: /[rR]"(-*)\{/,
              end: /\}(-*)"/
            }),
            t.END_SAME_AS_BEGIN({
              begin: /[rR]"(-*)\[/,
              end: /\](-*)"/
            }),
            t.END_SAME_AS_BEGIN({
              begin: /[rR]'(-*)\(/,
              end: /\)(-*)'/
            }),
            t.END_SAME_AS_BEGIN({
              begin: /[rR]'(-*)\{/,
              end: /\}(-*)'/
            }),
            t.END_SAME_AS_BEGIN({
              begin: /[rR]'(-*)\[/,
              end: /\](-*)'/
            }),
            {
              begin: '"',
              end: '"',
              relevance: 0
            },
            {
              begin: "'",
              end: "'",
              relevance: 0
            }
          ]
        },
        // Matching numbers immediately following punctuation and operators is
        // tricky since we need to look at the character ahead of a number to
        // ensure the number is not part of an identifier, and we cannot use
        // negative look-behind assertions. So instead we explicitly handle all
        // possible combinations of (operator|punctuation), number.
        // TODO: replace with negative look-behind when available
        // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/ },
        // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/ },
        // { begin: /(?<![a-zA-Z0-9._])(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/ }
        {
          relevance: 0,
          variants: [
            {
              scope: {
                1: "operator",
                2: "number"
              },
              match: [
                r,
                i
              ]
            },
            {
              scope: {
                1: "operator",
                2: "number"
              },
              match: [
                /%[^%]*%/,
                i
              ]
            },
            {
              scope: {
                1: "punctuation",
                2: "number"
              },
              match: [
                _,
                i
              ]
            },
            {
              scope: { 2: "number" },
              match: [
                /[^a-zA-Z0-9._]|^/,
                // not part of an identifier, or start of document
                i
              ]
            }
          ]
        },
        // Operators/punctuation when they're not directly followed by numbers
        {
          // Relevance boost for the most common assignment form.
          scope: { 3: "operator" },
          match: [
            e,
            /\s+/,
            /<-/,
            /\s+/
          ]
        },
        {
          scope: "operator",
          relevance: 0,
          variants: [
            { match: r },
            { match: /%[^%]*%/ }
          ]
        },
        {
          scope: "punctuation",
          relevance: 0,
          match: _
        },
        {
          // Escaped identifier
          begin: "`",
          end: "`",
          contains: [{ begin: /\\./ }]
        }
      ]
    };
  }
  return Gn = a, Gn;
}
var qn, ys;
function ul() {
  if (ys) return qn;
  ys = 1;
  function a(t) {
    const n = t.regex, e = /(r#)?/, i = n.concat(e, t.UNDERSCORE_IDENT_RE), r = n.concat(e, t.IDENT_RE), _ = {
      className: "title.function.invoke",
      relevance: 0,
      begin: n.concat(
        /\b/,
        /(?!let|for|while|if|else|match\b)/,
        r,
        n.lookahead(/\s*\(/)
      )
    }, l = "([ui](8|16|32|64|128|size)|f(32|64))?", c = [
      "abstract",
      "as",
      "async",
      "await",
      "become",
      "box",
      "break",
      "const",
      "continue",
      "crate",
      "do",
      "dyn",
      "else",
      "enum",
      "extern",
      "false",
      "final",
      "fn",
      "for",
      "if",
      "impl",
      "in",
      "let",
      "loop",
      "macro",
      "match",
      "mod",
      "move",
      "mut",
      "override",
      "priv",
      "pub",
      "ref",
      "return",
      "self",
      "Self",
      "static",
      "struct",
      "super",
      "trait",
      "true",
      "try",
      "type",
      "typeof",
      "union",
      "unsafe",
      "unsized",
      "use",
      "virtual",
      "where",
      "while",
      "yield"
    ], g = [
      "true",
      "false",
      "Some",
      "None",
      "Ok",
      "Err"
    ], u = [
      // functions
      "drop ",
      // traits
      "Copy",
      "Send",
      "Sized",
      "Sync",
      "Drop",
      "Fn",
      "FnMut",
      "FnOnce",
      "ToOwned",
      "Clone",
      "Debug",
      "PartialEq",
      "PartialOrd",
      "Eq",
      "Ord",
      "AsRef",
      "AsMut",
      "Into",
      "From",
      "Default",
      "Iterator",
      "Extend",
      "IntoIterator",
      "DoubleEndedIterator",
      "ExactSizeIterator",
      "SliceConcatExt",
      "ToString",
      // macros
      "assert!",
      "assert_eq!",
      "bitflags!",
      "bytes!",
      "cfg!",
      "col!",
      "concat!",
      "concat_idents!",
      "debug_assert!",
      "debug_assert_eq!",
      "env!",
      "eprintln!",
      "panic!",
      "file!",
      "format!",
      "format_args!",
      "include_bytes!",
      "include_str!",
      "line!",
      "local_data_key!",
      "module_path!",
      "option_env!",
      "print!",
      "println!",
      "select!",
      "stringify!",
      "try!",
      "unimplemented!",
      "unreachable!",
      "vec!",
      "write!",
      "writeln!",
      "macro_rules!",
      "assert_ne!",
      "debug_assert_ne!"
    ], f = [
      "i8",
      "i16",
      "i32",
      "i64",
      "i128",
      "isize",
      "u8",
      "u16",
      "u32",
      "u64",
      "u128",
      "usize",
      "f32",
      "f64",
      "str",
      "char",
      "bool",
      "Box",
      "Option",
      "Result",
      "String",
      "Vec"
    ];
    return {
      name: "Rust",
      aliases: ["rs"],
      keywords: {
        $pattern: t.IDENT_RE + "!?",
        type: f,
        keyword: c,
        literal: g,
        built_in: u
      },
      illegal: "</",
      contains: [
        t.C_LINE_COMMENT_MODE,
        t.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
        t.inherit(t.QUOTE_STRING_MODE, {
          begin: /b?"/,
          illegal: null
        }),
        {
          className: "symbol",
          // negative lookahead to avoid matching `'`
          begin: /'[a-zA-Z_][a-zA-Z0-9_]*(?!')/
        },
        {
          scope: "string",
          variants: [
            { begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ },
            {
              begin: /b?'/,
              end: /'/,
              contains: [
                {
                  scope: "char.escape",
                  match: /\\('|\w|x\w{2}|u\w{4}|U\w{8})/
                }
              ]
            }
          ]
        },
        {
          className: "number",
          variants: [
            { begin: "\\b0b([01_]+)" + l },
            { begin: "\\b0o([0-7_]+)" + l },
            { begin: "\\b0x([A-Fa-f0-9_]+)" + l },
            { begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + l }
          ],
          relevance: 0
        },
        {
          begin: [
            /fn/,
            /\s+/,
            i
          ],
          className: {
            1: "keyword",
            3: "title.function"
          }
        },
        {
          className: "meta",
          begin: "#!?\\[",
          end: "\\]",
          contains: [
            {
              className: "string",
              begin: /"/,
              end: /"/,
              contains: [
                t.BACKSLASH_ESCAPE
              ]
            }
          ]
        },
        {
          begin: [
            /let/,
            /\s+/,
            /(?:mut\s+)?/,
            i
          ],
          className: {
            1: "keyword",
            3: "keyword",
            4: "variable"
          }
        },
        // must come before impl/for rule later
        {
          begin: [
            /for/,
            /\s+/,
            i,
            /\s+/,
            /in/
          ],
          className: {
            1: "keyword",
            3: "variable",
            5: "keyword"
          }
        },
        {
          begin: [
            /type/,
            /\s+/,
            i
          ],
          className: {
            1: "keyword",
            3: "title.class"
          }
        },
        {
          begin: [
            /(?:trait|enum|struct|union|impl|for)/,
            /\s+/,
            i
          ],
          className: {
            1: "keyword",
            3: "title.class"
          }
        },
        {
          begin: t.IDENT_RE + "::",
          keywords: {
            keyword: "Self",
            built_in: u,
            type: f
          }
        },
        {
          className: "punctuation",
          begin: "->"
        },
        _
      ]
    };
  }
  return qn = a, qn;
}
var Wn, ws;
function dl() {
  if (ws) return Wn;
  ws = 1;
  const a = (g) => ({
    IMPORTANT: {
      scope: "meta",
      begin: "!important"
    },
    BLOCK_COMMENT: g.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: "number",
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
    },
    FUNCTION_DISPATCH: {
      className: "built_in",
      begin: /[\w-]+(?=\()/
    },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: "selector-attr",
      begin: /\[/,
      end: /\]/,
      illegal: "$",
      contains: [
        g.APOS_STRING_MODE,
        g.QUOTE_STRING_MODE
      ]
    },
    CSS_NUMBER_MODE: {
      scope: "number",
      begin: g.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    },
    CSS_VARIABLE: {
      className: "attr",
      begin: /--[A-Za-z_][A-Za-z0-9_-]*/
    }
  }), t = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "audio",
    "b",
    "blockquote",
    "body",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "mark",
    "menu",
    "nav",
    "object",
    "ol",
    "optgroup",
    "option",
    "p",
    "picture",
    "q",
    "quote",
    "samp",
    "section",
    "select",
    "source",
    "span",
    "strong",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "ul",
    "var",
    "video"
  ], n = [
    "defs",
    "g",
    "marker",
    "mask",
    "pattern",
    "svg",
    "switch",
    "symbol",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feFlood",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMorphology",
    "feOffset",
    "feSpecularLighting",
    "feTile",
    "feTurbulence",
    "linearGradient",
    "radialGradient",
    "stop",
    "circle",
    "ellipse",
    "image",
    "line",
    "path",
    "polygon",
    "polyline",
    "rect",
    "text",
    "use",
    "textPath",
    "tspan",
    "foreignObject",
    "clipPath"
  ], e = [
    ...t,
    ...n
  ], i = [
    "any-hover",
    "any-pointer",
    "aspect-ratio",
    "color",
    "color-gamut",
    "color-index",
    "device-aspect-ratio",
    "device-height",
    "device-width",
    "display-mode",
    "forced-colors",
    "grid",
    "height",
    "hover",
    "inverted-colors",
    "monochrome",
    "orientation",
    "overflow-block",
    "overflow-inline",
    "pointer",
    "prefers-color-scheme",
    "prefers-contrast",
    "prefers-reduced-motion",
    "prefers-reduced-transparency",
    "resolution",
    "scan",
    "scripting",
    "update",
    "width",
    // TODO: find a better solution?
    "min-width",
    "max-width",
    "min-height",
    "max-height"
  ].sort().reverse(), r = [
    "active",
    "any-link",
    "blank",
    "checked",
    "current",
    "default",
    "defined",
    "dir",
    // dir()
    "disabled",
    "drop",
    "empty",
    "enabled",
    "first",
    "first-child",
    "first-of-type",
    "fullscreen",
    "future",
    "focus",
    "focus-visible",
    "focus-within",
    "has",
    // has()
    "host",
    // host or host()
    "host-context",
    // host-context()
    "hover",
    "indeterminate",
    "in-range",
    "invalid",
    "is",
    // is()
    "lang",
    // lang()
    "last-child",
    "last-of-type",
    "left",
    "link",
    "local-link",
    "not",
    // not()
    "nth-child",
    // nth-child()
    "nth-col",
    // nth-col()
    "nth-last-child",
    // nth-last-child()
    "nth-last-col",
    // nth-last-col()
    "nth-last-of-type",
    //nth-last-of-type()
    "nth-of-type",
    //nth-of-type()
    "only-child",
    "only-of-type",
    "optional",
    "out-of-range",
    "past",
    "placeholder-shown",
    "read-only",
    "read-write",
    "required",
    "right",
    "root",
    "scope",
    "target",
    "target-within",
    "user-invalid",
    "valid",
    "visited",
    "where"
    // where()
  ].sort().reverse(), _ = [
    "after",
    "backdrop",
    "before",
    "cue",
    "cue-region",
    "first-letter",
    "first-line",
    "grammar-error",
    "marker",
    "part",
    "placeholder",
    "selection",
    "slotted",
    "spelling-error"
  ].sort().reverse(), l = [
    "accent-color",
    "align-content",
    "align-items",
    "align-self",
    "alignment-baseline",
    "all",
    "anchor-name",
    "animation",
    "animation-composition",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-range",
    "animation-range-end",
    "animation-range-start",
    "animation-timeline",
    "animation-timing-function",
    "appearance",
    "aspect-ratio",
    "backdrop-filter",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-position-x",
    "background-position-y",
    "background-repeat",
    "background-size",
    "baseline-shift",
    "block-size",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-end-end-radius",
    "border-end-start-radius",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-start-end-radius",
    "border-start-start-radius",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-align",
    "box-decoration-break",
    "box-direction",
    "box-flex",
    "box-flex-group",
    "box-lines",
    "box-ordinal-group",
    "box-orient",
    "box-pack",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "color-scheme",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "contain-intrinsic-block-size",
    "contain-intrinsic-height",
    "contain-intrinsic-inline-size",
    "contain-intrinsic-size",
    "contain-intrinsic-width",
    "container",
    "container-name",
    "container-type",
    "content",
    "content-visibility",
    "counter-increment",
    "counter-reset",
    "counter-set",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "cx",
    "cy",
    "direction",
    "display",
    "dominant-baseline",
    "empty-cells",
    "enable-background",
    "field-sizing",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "flood-color",
    "flood-opacity",
    "flow",
    "font",
    "font-display",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-optical-sizing",
    "font-palette",
    "font-size",
    "font-size-adjust",
    "font-smooth",
    "font-smoothing",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-synthesis-position",
    "font-synthesis-small-caps",
    "font-synthesis-style",
    "font-synthesis-weight",
    "font-variant",
    "font-variant-alternates",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-emoji",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "forced-color-adjust",
    "gap",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphenate-character",
    "hyphenate-limit-chars",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "ime-mode",
    "initial-letter",
    "initial-letter-align",
    "inline-size",
    "inset",
    "inset-area",
    "inset-block",
    "inset-block-end",
    "inset-block-start",
    "inset-inline",
    "inset-inline-end",
    "inset-inline-start",
    "isolation",
    "justify-content",
    "justify-items",
    "justify-self",
    "kerning",
    "left",
    "letter-spacing",
    "lighting-color",
    "line-break",
    "line-height",
    "line-height-step",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "margin-trim",
    "marker",
    "marker-end",
    "marker-mid",
    "marker-start",
    "marks",
    "mask",
    "mask-border",
    "mask-border-mode",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-border-slice",
    "mask-border-source",
    "mask-border-width",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "masonry-auto-flow",
    "math-depth",
    "math-shift",
    "math-style",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "none",
    "normal",
    "object-fit",
    "object-position",
    "offset",
    "offset-anchor",
    "offset-distance",
    "offset-path",
    "offset-position",
    "offset-rotate",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-anchor",
    "overflow-block",
    "overflow-clip-margin",
    "overflow-inline",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "overlay",
    "overscroll-behavior",
    "overscroll-behavior-block",
    "overscroll-behavior-inline",
    "overscroll-behavior-x",
    "overscroll-behavior-y",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "page",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "paint-order",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "place-content",
    "place-items",
    "place-self",
    "pointer-events",
    "position",
    "position-anchor",
    "position-visibility",
    "print-color-adjust",
    "quotes",
    "r",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "right",
    "rotate",
    "row-gap",
    "ruby-align",
    "ruby-position",
    "scale",
    "scroll-behavior",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-snap-type",
    "scroll-timeline",
    "scroll-timeline-axis",
    "scroll-timeline-name",
    "scrollbar-color",
    "scrollbar-gutter",
    "scrollbar-width",
    "shape-image-threshold",
    "shape-margin",
    "shape-outside",
    "shape-rendering",
    "speak",
    "speak-as",
    "src",
    // @font-face
    "stop-color",
    "stop-opacity",
    "stroke",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "tab-size",
    "table-layout",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-anchor",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-skip",
    "text-decoration-skip-ink",
    "text-decoration-style",
    "text-decoration-thickness",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-size-adjust",
    "text-transform",
    "text-underline-offset",
    "text-underline-position",
    "text-wrap",
    "text-wrap-mode",
    "text-wrap-style",
    "timeline-scope",
    "top",
    "touch-action",
    "transform",
    "transform-box",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-behavior",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "translate",
    "unicode-bidi",
    "user-modify",
    "user-select",
    "vector-effect",
    "vertical-align",
    "view-timeline",
    "view-timeline-axis",
    "view-timeline-inset",
    "view-timeline-name",
    "view-transition-name",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "white-space",
    "white-space-collapse",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "x",
    "y",
    "z-index",
    "zoom"
  ].sort().reverse();
  function c(g) {
    const u = a(g), f = _, m = r, N = "@[a-z-]+", x = "and or not only", d = {
      className: "variable",
      begin: "(\\$" + "[a-zA-Z-][a-zA-Z0-9_-]*" + ")\\b",
      relevance: 0
    };
    return {
      name: "SCSS",
      case_insensitive: !0,
      illegal: "[=/|']",
      contains: [
        g.C_LINE_COMMENT_MODE,
        g.C_BLOCK_COMMENT_MODE,
        // to recognize keyframe 40% etc which are outside the scope of our
        // attribute value mode
        u.CSS_NUMBER_MODE,
        {
          className: "selector-id",
          begin: "#[A-Za-z0-9_-]+",
          relevance: 0
        },
        {
          className: "selector-class",
          begin: "\\.[A-Za-z0-9_-]+",
          relevance: 0
        },
        u.ATTRIBUTE_SELECTOR_MODE,
        {
          className: "selector-tag",
          begin: "\\b(" + e.join("|") + ")\\b",
          // was there, before, but why?
          relevance: 0
        },
        {
          className: "selector-pseudo",
          begin: ":(" + m.join("|") + ")"
        },
        {
          className: "selector-pseudo",
          begin: ":(:)?(" + f.join("|") + ")"
        },
        d,
        {
          // pseudo-selector params
          begin: /\(/,
          end: /\)/,
          contains: [u.CSS_NUMBER_MODE]
        },
        u.CSS_VARIABLE,
        {
          className: "attribute",
          begin: "\\b(" + l.join("|") + ")\\b"
        },
        { begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b" },
        {
          begin: /:/,
          end: /[;}{]/,
          relevance: 0,
          contains: [
            u.BLOCK_COMMENT,
            d,
            u.HEXCOLOR,
            u.CSS_NUMBER_MODE,
            g.QUOTE_STRING_MODE,
            g.APOS_STRING_MODE,
            u.IMPORTANT,
            u.FUNCTION_DISPATCH
          ]
        },
        // matching these here allows us to treat them more like regular CSS
        // rules so everything between the {} gets regular rule highlighting,
        // which is what we want for page and font-face
        {
          begin: "@(page|font-face)",
          keywords: {
            $pattern: N,
            keyword: "@page @font-face"
          }
        },
        {
          begin: "@",
          end: "[{;]",
          returnBegin: !0,
          keywords: {
            $pattern: /[a-z-]+/,
            keyword: x,
            attribute: i.join(" ")
          },
          contains: [
            {
              begin: N,
              className: "keyword"
            },
            {
              begin: /[a-z-]+(?=:)/,
              className: "attribute"
            },
            d,
            g.QUOTE_STRING_MODE,
            g.APOS_STRING_MODE,
            u.HEXCOLOR,
            u.CSS_NUMBER_MODE
          ]
        },
        u.FUNCTION_DISPATCH
      ]
    };
  }
  return Wn = c, Wn;
}
var Hn, xs;
function pl() {
  if (xs) return Hn;
  xs = 1;
  function a(t) {
    return {
      name: "Shell Session",
      aliases: [
        "console",
        "shellsession"
      ],
      contains: [
        {
          className: "meta.prompt",
          // We cannot add \s (spaces) in the regular expression otherwise it will be too broad and produce unexpected result.
          // For instance, in the following example, it would match "echo /path/to/home >" as a prompt:
          // echo /path/to/home > t.exe
          begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
          starts: {
            end: /[^\\](?=\s*$)/,
            subLanguage: "bash"
          }
        }
      ]
    };
  }
  return Hn = a, Hn;
}
var Vn, Ns;
function fl() {
  if (Ns) return Vn;
  Ns = 1;
  function a(t) {
    const n = t.regex, e = t.COMMENT("--", "$"), i = {
      scope: "string",
      variants: [
        {
          begin: /'/,
          end: /'/,
          contains: [{ match: /''/ }]
        }
      ]
    }, r = {
      begin: /"/,
      end: /"/,
      contains: [{ match: /""/ }]
    }, _ = [
      "true",
      "false",
      // Not sure it's correct to call NULL literal, and clauses like IS [NOT] NULL look strange that way.
      // "null",
      "unknown"
    ], l = [
      "double precision",
      "large object",
      "with timezone",
      "without timezone"
    ], c = [
      "bigint",
      "binary",
      "blob",
      "boolean",
      "char",
      "character",
      "clob",
      "date",
      "dec",
      "decfloat",
      "decimal",
      "float",
      "int",
      "integer",
      "interval",
      "nchar",
      "nclob",
      "national",
      "numeric",
      "real",
      "row",
      "smallint",
      "time",
      "timestamp",
      "varchar",
      "varying",
      // modifier (character varying)
      "varbinary"
    ], g = [
      "add",
      "asc",
      "collation",
      "desc",
      "final",
      "first",
      "last",
      "view"
    ], u = [
      "abs",
      "acos",
      "all",
      "allocate",
      "alter",
      "and",
      "any",
      "are",
      "array",
      "array_agg",
      "array_max_cardinality",
      "as",
      "asensitive",
      "asin",
      "asymmetric",
      "at",
      "atan",
      "atomic",
      "authorization",
      "avg",
      "begin",
      "begin_frame",
      "begin_partition",
      "between",
      "bigint",
      "binary",
      "blob",
      "boolean",
      "both",
      "by",
      "call",
      "called",
      "cardinality",
      "cascaded",
      "case",
      "cast",
      "ceil",
      "ceiling",
      "char",
      "char_length",
      "character",
      "character_length",
      "check",
      "classifier",
      "clob",
      "close",
      "coalesce",
      "collate",
      "collect",
      "column",
      "commit",
      "condition",
      "connect",
      "constraint",
      "contains",
      "convert",
      "copy",
      "corr",
      "corresponding",
      "cos",
      "cosh",
      "count",
      "covar_pop",
      "covar_samp",
      "create",
      "cross",
      "cube",
      "cume_dist",
      "current",
      "current_catalog",
      "current_date",
      "current_default_transform_group",
      "current_path",
      "current_role",
      "current_row",
      "current_schema",
      "current_time",
      "current_timestamp",
      "current_path",
      "current_role",
      "current_transform_group_for_type",
      "current_user",
      "cursor",
      "cycle",
      "date",
      "day",
      "deallocate",
      "dec",
      "decimal",
      "decfloat",
      "declare",
      "default",
      "define",
      "delete",
      "dense_rank",
      "deref",
      "describe",
      "deterministic",
      "disconnect",
      "distinct",
      "double",
      "drop",
      "dynamic",
      "each",
      "element",
      "else",
      "empty",
      "end",
      "end_frame",
      "end_partition",
      "end-exec",
      "equals",
      "escape",
      "every",
      "except",
      "exec",
      "execute",
      "exists",
      "exp",
      "external",
      "extract",
      "false",
      "fetch",
      "filter",
      "first_value",
      "float",
      "floor",
      "for",
      "foreign",
      "frame_row",
      "free",
      "from",
      "full",
      "function",
      "fusion",
      "get",
      "global",
      "grant",
      "group",
      "grouping",
      "groups",
      "having",
      "hold",
      "hour",
      "identity",
      "in",
      "indicator",
      "initial",
      "inner",
      "inout",
      "insensitive",
      "insert",
      "int",
      "integer",
      "intersect",
      "intersection",
      "interval",
      "into",
      "is",
      "join",
      "json_array",
      "json_arrayagg",
      "json_exists",
      "json_object",
      "json_objectagg",
      "json_query",
      "json_table",
      "json_table_primitive",
      "json_value",
      "lag",
      "language",
      "large",
      "last_value",
      "lateral",
      "lead",
      "leading",
      "left",
      "like",
      "like_regex",
      "listagg",
      "ln",
      "local",
      "localtime",
      "localtimestamp",
      "log",
      "log10",
      "lower",
      "match",
      "match_number",
      "match_recognize",
      "matches",
      "max",
      "member",
      "merge",
      "method",
      "min",
      "minute",
      "mod",
      "modifies",
      "module",
      "month",
      "multiset",
      "national",
      "natural",
      "nchar",
      "nclob",
      "new",
      "no",
      "none",
      "normalize",
      "not",
      "nth_value",
      "ntile",
      "null",
      "nullif",
      "numeric",
      "octet_length",
      "occurrences_regex",
      "of",
      "offset",
      "old",
      "omit",
      "on",
      "one",
      "only",
      "open",
      "or",
      "order",
      "out",
      "outer",
      "over",
      "overlaps",
      "overlay",
      "parameter",
      "partition",
      "pattern",
      "per",
      "percent",
      "percent_rank",
      "percentile_cont",
      "percentile_disc",
      "period",
      "portion",
      "position",
      "position_regex",
      "power",
      "precedes",
      "precision",
      "prepare",
      "primary",
      "procedure",
      "ptf",
      "range",
      "rank",
      "reads",
      "real",
      "recursive",
      "ref",
      "references",
      "referencing",
      "regr_avgx",
      "regr_avgy",
      "regr_count",
      "regr_intercept",
      "regr_r2",
      "regr_slope",
      "regr_sxx",
      "regr_sxy",
      "regr_syy",
      "release",
      "result",
      "return",
      "returns",
      "revoke",
      "right",
      "rollback",
      "rollup",
      "row",
      "row_number",
      "rows",
      "running",
      "savepoint",
      "scope",
      "scroll",
      "search",
      "second",
      "seek",
      "select",
      "sensitive",
      "session_user",
      "set",
      "show",
      "similar",
      "sin",
      "sinh",
      "skip",
      "smallint",
      "some",
      "specific",
      "specifictype",
      "sql",
      "sqlexception",
      "sqlstate",
      "sqlwarning",
      "sqrt",
      "start",
      "static",
      "stddev_pop",
      "stddev_samp",
      "submultiset",
      "subset",
      "substring",
      "substring_regex",
      "succeeds",
      "sum",
      "symmetric",
      "system",
      "system_time",
      "system_user",
      "table",
      "tablesample",
      "tan",
      "tanh",
      "then",
      "time",
      "timestamp",
      "timezone_hour",
      "timezone_minute",
      "to",
      "trailing",
      "translate",
      "translate_regex",
      "translation",
      "treat",
      "trigger",
      "trim",
      "trim_array",
      "true",
      "truncate",
      "uescape",
      "union",
      "unique",
      "unknown",
      "unnest",
      "update",
      "upper",
      "user",
      "using",
      "value",
      "values",
      "value_of",
      "var_pop",
      "var_samp",
      "varbinary",
      "varchar",
      "varying",
      "versioning",
      "when",
      "whenever",
      "where",
      "width_bucket",
      "window",
      "with",
      "within",
      "without",
      "year"
    ], f = [
      "abs",
      "acos",
      "array_agg",
      "asin",
      "atan",
      "avg",
      "cast",
      "ceil",
      "ceiling",
      "coalesce",
      "corr",
      "cos",
      "cosh",
      "count",
      "covar_pop",
      "covar_samp",
      "cume_dist",
      "dense_rank",
      "deref",
      "element",
      "exp",
      "extract",
      "first_value",
      "floor",
      "json_array",
      "json_arrayagg",
      "json_exists",
      "json_object",
      "json_objectagg",
      "json_query",
      "json_table",
      "json_table_primitive",
      "json_value",
      "lag",
      "last_value",
      "lead",
      "listagg",
      "ln",
      "log",
      "log10",
      "lower",
      "max",
      "min",
      "mod",
      "nth_value",
      "ntile",
      "nullif",
      "percent_rank",
      "percentile_cont",
      "percentile_disc",
      "position",
      "position_regex",
      "power",
      "rank",
      "regr_avgx",
      "regr_avgy",
      "regr_count",
      "regr_intercept",
      "regr_r2",
      "regr_slope",
      "regr_sxx",
      "regr_sxy",
      "regr_syy",
      "row_number",
      "sin",
      "sinh",
      "sqrt",
      "stddev_pop",
      "stddev_samp",
      "substring",
      "substring_regex",
      "sum",
      "tan",
      "tanh",
      "translate",
      "translate_regex",
      "treat",
      "trim",
      "trim_array",
      "unnest",
      "upper",
      "value_of",
      "var_pop",
      "var_samp",
      "width_bucket"
    ], m = [
      "current_catalog",
      "current_date",
      "current_default_transform_group",
      "current_path",
      "current_role",
      "current_schema",
      "current_transform_group_for_type",
      "current_user",
      "session_user",
      "system_time",
      "system_user",
      "current_time",
      "localtime",
      "current_timestamp",
      "localtimestamp"
    ], N = [
      "create table",
      "insert into",
      "primary key",
      "foreign key",
      "not null",
      "alter table",
      "add constraint",
      "grouping sets",
      "on overflow",
      "character set",
      "respect nulls",
      "ignore nulls",
      "nulls first",
      "nulls last",
      "depth first",
      "breadth first"
    ], x = f, k = [
      ...u,
      ...g
    ].filter((E) => !f.includes(E)), d = {
      scope: "variable",
      match: /@[a-z0-9][a-z0-9_]*/
    }, o = {
      scope: "operator",
      match: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
      relevance: 0
    }, b = {
      match: n.concat(/\b/, n.either(...x), /\s*\(/),
      relevance: 0,
      keywords: { built_in: x }
    };
    function R(E) {
      return n.concat(
        /\b/,
        n.either(...E.map((v) => v.replace(/\s+/, "\\s+"))),
        /\b/
      );
    }
    const T = {
      scope: "keyword",
      match: R(N),
      relevance: 0
    };
    function A(E, {
      exceptions: v,
      when: p
    } = {}) {
      const w = p;
      return v = v || [], E.map((s) => s.match(/\|\d+$/) || v.includes(s) ? s : w(s) ? `${s}|0` : s);
    }
    return {
      name: "SQL",
      case_insensitive: !0,
      // does not include {} or HTML tags `</`
      illegal: /[{}]|<\//,
      keywords: {
        $pattern: /\b[\w\.]+/,
        keyword: A(k, { when: (E) => E.length < 3 }),
        literal: _,
        type: c,
        built_in: m
      },
      contains: [
        {
          scope: "type",
          match: R(l)
        },
        T,
        b,
        d,
        i,
        r,
        t.C_NUMBER_MODE,
        t.C_BLOCK_COMMENT_MODE,
        e,
        o
      ]
    };
  }
  return Vn = a, Vn;
}
var Zn, Os;
function hl() {
  if (Os) return Zn;
  Os = 1;
  function a(p) {
    return p ? typeof p == "string" ? p : p.source : null;
  }
  function t(p) {
    return n("(?=", p, ")");
  }
  function n(...p) {
    return p.map((s) => a(s)).join("");
  }
  function e(p) {
    const w = p[p.length - 1];
    return typeof w == "object" && w.constructor === Object ? (p.splice(p.length - 1, 1), w) : {};
  }
  function i(...p) {
    return "(" + (e(p).capture ? "" : "?:") + p.map((y) => a(y)).join("|") + ")";
  }
  const r = (p) => n(
    /\b/,
    p,
    /\w$/.test(p) ? /\b/ : /\B/
  ), _ = [
    "Protocol",
    // contextual
    "Type"
    // contextual
  ].map(r), l = [
    "init",
    "self"
  ].map(r), c = [
    "Any",
    "Self"
  ], g = [
    // strings below will be fed into the regular `keywords` engine while regex
    // will result in additional modes being created to scan for those keywords to
    // avoid conflicts with other rules
    "actor",
    "any",
    // contextual
    "associatedtype",
    "async",
    "await",
    /as\?/,
    // operator
    /as!/,
    // operator
    "as",
    // operator
    "borrowing",
    // contextual
    "break",
    "case",
    "catch",
    "class",
    "consume",
    // contextual
    "consuming",
    // contextual
    "continue",
    "convenience",
    // contextual
    "copy",
    // contextual
    "default",
    "defer",
    "deinit",
    "didSet",
    // contextual
    "distributed",
    "do",
    "dynamic",
    // contextual
    "each",
    "else",
    "enum",
    "extension",
    "fallthrough",
    /fileprivate\(set\)/,
    "fileprivate",
    "final",
    // contextual
    "for",
    "func",
    "get",
    // contextual
    "guard",
    "if",
    "import",
    "indirect",
    // contextual
    "infix",
    // contextual
    /init\?/,
    /init!/,
    "inout",
    /internal\(set\)/,
    "internal",
    "in",
    "is",
    // operator
    "isolated",
    // contextual
    "nonisolated",
    // contextual
    "lazy",
    // contextual
    "let",
    "macro",
    "mutating",
    // contextual
    "nonmutating",
    // contextual
    /open\(set\)/,
    // contextual
    "open",
    // contextual
    "operator",
    "optional",
    // contextual
    "override",
    // contextual
    "package",
    "postfix",
    // contextual
    "precedencegroup",
    "prefix",
    // contextual
    /private\(set\)/,
    "private",
    "protocol",
    /public\(set\)/,
    "public",
    "repeat",
    "required",
    // contextual
    "rethrows",
    "return",
    "set",
    // contextual
    "some",
    // contextual
    "static",
    "struct",
    "subscript",
    "super",
    "switch",
    "throws",
    "throw",
    /try\?/,
    // operator
    /try!/,
    // operator
    "try",
    // operator
    "typealias",
    /unowned\(safe\)/,
    // contextual
    /unowned\(unsafe\)/,
    // contextual
    "unowned",
    // contextual
    "var",
    "weak",
    // contextual
    "where",
    "while",
    "willSet"
    // contextual
  ], u = [
    "false",
    "nil",
    "true"
  ], f = [
    "assignment",
    "associativity",
    "higherThan",
    "left",
    "lowerThan",
    "none",
    "right"
  ], m = [
    "#colorLiteral",
    "#column",
    "#dsohandle",
    "#else",
    "#elseif",
    "#endif",
    "#error",
    "#file",
    "#fileID",
    "#fileLiteral",
    "#filePath",
    "#function",
    "#if",
    "#imageLiteral",
    "#keyPath",
    "#line",
    "#selector",
    "#sourceLocation",
    "#warning"
  ], N = [
    "abs",
    "all",
    "any",
    "assert",
    "assertionFailure",
    "debugPrint",
    "dump",
    "fatalError",
    "getVaList",
    "isKnownUniquelyReferenced",
    "max",
    "min",
    "numericCast",
    "pointwiseMax",
    "pointwiseMin",
    "precondition",
    "preconditionFailure",
    "print",
    "readLine",
    "repeatElement",
    "sequence",
    "stride",
    "swap",
    "swift_unboxFromSwiftValueWithType",
    "transcode",
    "type",
    "unsafeBitCast",
    "unsafeDowncast",
    "withExtendedLifetime",
    "withUnsafeMutablePointer",
    "withUnsafePointer",
    "withVaList",
    "withoutActuallyEscaping",
    "zip"
  ], x = i(
    /[/=\-+!*%<>&|^~?]/,
    /[\u00A1-\u00A7]/,
    /[\u00A9\u00AB]/,
    /[\u00AC\u00AE]/,
    /[\u00B0\u00B1]/,
    /[\u00B6\u00BB\u00BF\u00D7\u00F7]/,
    /[\u2016-\u2017]/,
    /[\u2020-\u2027]/,
    /[\u2030-\u203E]/,
    /[\u2041-\u2053]/,
    /[\u2055-\u205E]/,
    /[\u2190-\u23FF]/,
    /[\u2500-\u2775]/,
    /[\u2794-\u2BFF]/,
    /[\u2E00-\u2E7F]/,
    /[\u3001-\u3003]/,
    /[\u3008-\u3020]/,
    /[\u3030]/
  ), k = i(
    x,
    /[\u0300-\u036F]/,
    /[\u1DC0-\u1DFF]/,
    /[\u20D0-\u20FF]/,
    /[\uFE00-\uFE0F]/,
    /[\uFE20-\uFE2F]/
    // TODO: The following characters are also allowed, but the regex isn't supported yet.
    // /[\u{E0100}-\u{E01EF}]/u
  ), d = n(x, k, "*"), o = i(
    /[a-zA-Z_]/,
    /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,
    /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,
    /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,
    /[\u1E00-\u1FFF]/,
    /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,
    /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,
    /[\u2C00-\u2DFF\u2E80-\u2FFF]/,
    /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,
    /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,
    /[\uFE47-\uFEFE\uFF00-\uFFFD]/
    // Should be /[\uFE47-\uFFFD]/, but we have to exclude FEFF.
    // The following characters are also allowed, but the regexes aren't supported yet.
    // /[\u{10000}-\u{1FFFD}\u{20000-\u{2FFFD}\u{30000}-\u{3FFFD}\u{40000}-\u{4FFFD}]/u,
    // /[\u{50000}-\u{5FFFD}\u{60000-\u{6FFFD}\u{70000}-\u{7FFFD}\u{80000}-\u{8FFFD}]/u,
    // /[\u{90000}-\u{9FFFD}\u{A0000-\u{AFFFD}\u{B0000}-\u{BFFFD}\u{C0000}-\u{CFFFD}]/u,
    // /[\u{D0000}-\u{DFFFD}\u{E0000-\u{EFFFD}]/u
  ), b = i(
    o,
    /\d/,
    /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/
  ), R = n(o, b, "*"), T = n(/[A-Z]/, b, "*"), A = [
    "attached",
    "autoclosure",
    n(/convention\(/, i("swift", "block", "c"), /\)/),
    "discardableResult",
    "dynamicCallable",
    "dynamicMemberLookup",
    "escaping",
    "freestanding",
    "frozen",
    "GKInspectable",
    "IBAction",
    "IBDesignable",
    "IBInspectable",
    "IBOutlet",
    "IBSegueAction",
    "inlinable",
    "main",
    "nonobjc",
    "NSApplicationMain",
    "NSCopying",
    "NSManaged",
    n(/objc\(/, R, /\)/),
    "objc",
    "objcMembers",
    "propertyWrapper",
    "requires_stored_property_inits",
    "resultBuilder",
    "Sendable",
    "testable",
    "UIApplicationMain",
    "unchecked",
    "unknown",
    "usableFromInline",
    "warn_unqualified_access"
  ], E = [
    "iOS",
    "iOSApplicationExtension",
    "macOS",
    "macOSApplicationExtension",
    "macCatalyst",
    "macCatalystApplicationExtension",
    "watchOS",
    "watchOSApplicationExtension",
    "tvOS",
    "tvOSApplicationExtension",
    "swift"
  ];
  function v(p) {
    const w = {
      match: /\s+/,
      relevance: 0
    }, s = p.COMMENT(
      "/\\*",
      "\\*/",
      { contains: ["self"] }
    ), y = [
      p.C_LINE_COMMENT_MODE,
      s
    ], O = {
      match: [
        /\./,
        i(..._, ...l)
      ],
      className: { 2: "keyword" }
    }, B = {
      // Consume .keyword to prevent highlighting properties and methods as keywords.
      match: n(/\./, i(...g)),
      relevance: 0
    }, F = g.filter((Q) => typeof Q == "string").concat(["_|0"]), G = g.filter((Q) => typeof Q != "string").concat(c).map(r), H = { variants: [
      {
        className: "keyword",
        match: i(...G, ...l)
      }
    ] }, j = {
      $pattern: i(
        /\b\w+/,
        // regular keywords
        /#\w+/
        // number keywords
      ),
      keyword: F.concat(m),
      literal: u
    }, oe = [
      O,
      B,
      H
    ], Oe = {
      // Consume .built_in to prevent highlighting properties and methods.
      match: n(/\./, i(...N)),
      relevance: 0
    }, Ce = {
      className: "built_in",
      match: n(/\b/, i(...N), /(?=\()/)
    }, xe = [
      Oe,
      Ce
    ], Fe = {
      // Prevent -> from being highlighting as an operator.
      match: /->/,
      relevance: 0
    }, Ze = {
      className: "operator",
      relevance: 0,
      variants: [
        { match: d },
        {
          // dot-operator: only operators that start with a dot are allowed to use dots as
          // characters (..., ...<, .*, etc). So there rule here is: a dot followed by one or more
          // characters that may also include dots.
          match: `\\.(\\.|${k})+`
        }
      ]
    }, Te = [
      Fe,
      Ze
    ], Se = "([0-9]_*)+", Be = "([0-9a-fA-F]_*)+", le = {
      className: "number",
      relevance: 0,
      variants: [
        // decimal floating-point-literal (subsumes decimal-literal)
        { match: `\\b(${Se})(\\.(${Se}))?([eE][+-]?(${Se}))?\\b` },
        // hexadecimal floating-point-literal (subsumes hexadecimal-literal)
        { match: `\\b0x(${Be})(\\.(${Be}))?([pP][+-]?(${Se}))?\\b` },
        // octal-literal
        { match: /\b0o([0-7]_*)+\b/ },
        // binary-literal
        { match: /\b0b([01]_*)+\b/ }
      ]
    }, re = (Q = "") => ({
      className: "subst",
      variants: [
        { match: n(/\\/, Q, /[0\\tnr"']/) },
        { match: n(/\\/, Q, /u\{[0-9a-fA-F]{1,8}\}/) }
      ]
    }), me = (Q = "") => ({
      className: "subst",
      match: n(/\\/, Q, /[\t ]*(?:[\r\n]|\r\n)/)
    }), fe = (Q = "") => ({
      className: "subst",
      label: "interpol",
      begin: n(/\\/, Q, /\(/),
      end: /\)/
    }), ve = (Q = "") => ({
      begin: n(Q, /"""/),
      end: n(/"""/, Q),
      contains: [
        re(Q),
        me(Q),
        fe(Q)
      ]
    }), ye = (Q = "") => ({
      begin: n(Q, /"/),
      end: n(/"/, Q),
      contains: [
        re(Q),
        fe(Q)
      ]
    }), ke = {
      className: "string",
      variants: [
        ve(),
        ve("#"),
        ve("##"),
        ve("###"),
        ye(),
        ye("#"),
        ye("##"),
        ye("###")
      ]
    }, ct = [
      p.BACKSLASH_ESCAPE,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [p.BACKSLASH_ESCAPE]
      }
    ], Ut = {
      begin: /\/[^\s](?=[^/\n]*\/)/,
      end: /\//,
      contains: ct
    }, nt = (Q) => {
      const Je = n(Q, /\//), $e = n(/\//, Q);
      return {
        begin: Je,
        end: $e,
        contains: [
          ...ct,
          {
            scope: "comment",
            begin: `#(?!.*${$e})`,
            end: /$/
          }
        ]
      };
    }, _t = {
      scope: "regexp",
      variants: [
        nt("###"),
        nt("##"),
        nt("#"),
        Ut
      ]
    }, ut = { match: n(/`/, R, /`/) }, Ft = {
      className: "variable",
      match: /\$\d+/
    }, dt = {
      className: "variable",
      match: `\\$${b}+`
    }, it = [
      ut,
      Ft,
      dt
    ], $t = {
      match: /(@|#(un)?)available/,
      scope: "keyword",
      starts: { contains: [
        {
          begin: /\(/,
          end: /\)/,
          keywords: E,
          contains: [
            ...Te,
            le,
            ke
          ]
        }
      ] }
    }, pt = {
      scope: "keyword",
      match: n(/@/, i(...A), t(i(/\(/, /\s+/)))
    }, Pe = {
      scope: "meta",
      match: n(/@/, R)
    }, Xe = [
      $t,
      pt,
      Pe
    ], Ee = {
      match: t(/\b[A-Z]/),
      relevance: 0,
      contains: [
        {
          // Common Apple frameworks, for relevance boost
          className: "type",
          match: n(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, b, "+")
        },
        {
          // Type identifier
          className: "type",
          match: T,
          relevance: 0
        },
        {
          // Optional type
          match: /[?!]+/,
          relevance: 0
        },
        {
          // Variadic parameter
          match: /\.\.\./,
          relevance: 0
        },
        {
          // Protocol composition
          match: n(/\s+&\s+/, t(T)),
          relevance: 0
        }
      ]
    }, Qe = {
      begin: /</,
      end: />/,
      keywords: j,
      contains: [
        ...y,
        ...oe,
        ...Xe,
        Fe,
        Ee
      ]
    };
    Ee.contains.push(Qe);
    const ft = {
      match: n(R, /\s*:/),
      keywords: "_|0",
      relevance: 0
    }, ht = {
      begin: /\(/,
      end: /\)/,
      relevance: 0,
      keywords: j,
      contains: [
        "self",
        ft,
        ...y,
        _t,
        ...oe,
        ...xe,
        ...Te,
        le,
        ke,
        ...it,
        ...Xe,
        Ee
      ]
    }, st = {
      begin: /</,
      end: />/,
      keywords: "repeat each",
      contains: [
        ...y,
        Ee
      ]
    }, zt = {
      begin: i(
        t(n(R, /\s*:/)),
        t(n(R, /\s+/, R, /\s*:/))
      ),
      end: /:/,
      relevance: 0,
      contains: [
        {
          className: "keyword",
          match: /\b_\b/
        },
        {
          className: "params",
          match: R
        }
      ]
    }, gt = {
      begin: /\(/,
      end: /\)/,
      keywords: j,
      contains: [
        zt,
        ...y,
        ...oe,
        ...Te,
        le,
        ke,
        ...Xe,
        Ee,
        ht
      ],
      endsParent: !0,
      illegal: /["']/
    }, Kt = {
      match: [
        /(func|macro)/,
        /\s+/,
        i(ut.match, R, d)
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        st,
        gt,
        w
      ],
      illegal: [
        /\[/,
        /%/
      ]
    }, bt = {
      match: [
        /\b(?:subscript|init[?!]?)/,
        /\s*(?=[<(])/
      ],
      className: { 1: "keyword" },
      contains: [
        st,
        gt,
        w
      ],
      illegal: /\[|%/
    }, Gt = {
      match: [
        /operator/,
        /\s+/,
        d
      ],
      className: {
        1: "keyword",
        3: "title"
      }
    }, qt = {
      begin: [
        /precedencegroup/,
        /\s+/,
        T
      ],
      className: {
        1: "keyword",
        3: "title"
      },
      contains: [Ee],
      keywords: [
        ...f,
        ...u
      ],
      end: /}/
    }, Wt = {
      match: [
        /class\b/,
        /\s+/,
        /func\b/,
        /\s+/,
        /\b[A-Za-z_][A-Za-z0-9_]*\b/
      ],
      scope: {
        1: "keyword",
        3: "keyword",
        5: "title.function"
      }
    }, at = {
      match: [
        /class\b/,
        /\s+/,
        /var\b/
      ],
      scope: {
        1: "keyword",
        3: "keyword"
      }
    }, mt = {
      begin: [
        /(struct|protocol|class|extension|enum|actor)/,
        /\s+/,
        R,
        /\s*/
      ],
      beginScope: {
        1: "keyword",
        3: "title.class"
      },
      keywords: j,
      contains: [
        st,
        ...oe,
        {
          begin: /:/,
          end: /\{/,
          keywords: j,
          contains: [
            {
              scope: "title.class.inherited",
              match: T
            },
            ...oe
          ],
          relevance: 0
        }
      ]
    };
    for (const Q of ke.variants) {
      const Je = Q.contains.find((ze) => ze.label === "interpol");
      Je.keywords = j;
      const $e = [
        ...oe,
        ...xe,
        ...Te,
        le,
        ke,
        ...it
      ];
      Je.contains = [
        ...$e,
        {
          begin: /\(/,
          end: /\)/,
          contains: [
            "self",
            ...$e
          ]
        }
      ];
    }
    return {
      name: "Swift",
      keywords: j,
      contains: [
        ...y,
        Kt,
        bt,
        Wt,
        at,
        mt,
        Gt,
        qt,
        {
          beginKeywords: "import",
          end: /$/,
          contains: [...y],
          relevance: 0
        },
        _t,
        ...oe,
        ...xe,
        ...Te,
        le,
        ke,
        ...it,
        ...Xe,
        Ee,
        ht
      ]
    };
  }
  return Zn = v, Zn;
}
var Xn, Ts;
function gl() {
  if (Ts) return Xn;
  Ts = 1;
  function a(t) {
    const n = "true false yes no null", e = "[\\w#;/?:@&=+$,.~*'()[\\]]+", i = {
      className: "attr",
      variants: [
        // added brackets support and special char support
        { begin: /[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/ },
        {
          // double quoted keys - with brackets and special char support
          begin: /"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/
        },
        {
          // single quoted keys - with brackets and special char support
          begin: /'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/
        }
      ]
    }, r = {
      className: "template-variable",
      variants: [
        {
          // jinja templates Ansible
          begin: /\{\{/,
          end: /\}\}/
        },
        {
          // Ruby i18n
          begin: /%\{/,
          end: /\}/
        }
      ]
    }, _ = {
      className: "string",
      relevance: 0,
      begin: /'/,
      end: /'/,
      contains: [
        {
          match: /''/,
          scope: "char.escape",
          relevance: 0
        }
      ]
    }, l = {
      className: "string",
      relevance: 0,
      variants: [
        {
          begin: /"/,
          end: /"/
        },
        { begin: /\S+/ }
      ],
      contains: [
        t.BACKSLASH_ESCAPE,
        r
      ]
    }, c = t.inherit(l, { variants: [
      {
        begin: /'/,
        end: /'/,
        contains: [
          {
            begin: /''/,
            relevance: 0
          }
        ]
      },
      {
        begin: /"/,
        end: /"/
      },
      { begin: /[^\s,{}[\]]+/ }
    ] }), N = {
      className: "number",
      begin: "\\b" + "[0-9]{4}(-[0-9][0-9]){0,2}" + "([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?" + "(\\.[0-9]*)?" + "([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?" + "\\b"
    }, x = {
      end: ",",
      endsWithParent: !0,
      excludeEnd: !0,
      keywords: n,
      relevance: 0
    }, k = {
      begin: /\{/,
      end: /\}/,
      contains: [x],
      illegal: "\\n",
      relevance: 0
    }, d = {
      begin: "\\[",
      end: "\\]",
      contains: [x],
      illegal: "\\n",
      relevance: 0
    }, o = [
      i,
      {
        className: "meta",
        begin: "^---\\s*$",
        relevance: 10
      },
      {
        // multi line string
        // Blocks start with a | or > followed by a newline
        //
        // Indentation of subsequent lines must be the same to
        // be considered part of the block
        className: "string",
        begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
      },
      {
        // Ruby/Rails erb
        begin: "<%[%=-]?",
        end: "[%-]?%>",
        subLanguage: "ruby",
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0
      },
      {
        // named tags
        className: "type",
        begin: "!\\w+!" + e
      },
      // https://yaml.org/spec/1.2/spec.html#id2784064
      {
        // verbatim tags
        className: "type",
        begin: "!<" + e + ">"
      },
      {
        // primary tags
        className: "type",
        begin: "!" + e
      },
      {
        // secondary tags
        className: "type",
        begin: "!!" + e
      },
      {
        // fragment id &ref
        className: "meta",
        begin: "&" + t.UNDERSCORE_IDENT_RE + "$"
      },
      {
        // fragment reference *ref
        className: "meta",
        begin: "\\*" + t.UNDERSCORE_IDENT_RE + "$"
      },
      {
        // array listing
        className: "bullet",
        // TODO: remove |$ hack when we have proper look-ahead support
        begin: "-(?=[ ]|$)",
        relevance: 0
      },
      t.HASH_COMMENT_MODE,
      {
        beginKeywords: n,
        keywords: { literal: n }
      },
      N,
      // numbers are any valid C-style number that
      // sit isolated from other words
      {
        className: "number",
        begin: t.C_NUMBER_RE + "\\b",
        relevance: 0
      },
      k,
      d,
      _,
      l
    ], b = [...o];
    return b.pop(), b.push(c), x.contains = b, {
      name: "YAML",
      case_insensitive: !0,
      aliases: ["yml"],
      contains: o
    };
  }
  return Xn = a, Xn;
}
var Yn, Ss;
function bl() {
  if (Ss) return Yn;
  Ss = 1;
  const a = "[A-Za-z$_][0-9A-Za-z$_]*", t = [
    "as",
    // for exports
    "in",
    "of",
    "if",
    "for",
    "while",
    "finally",
    "var",
    "new",
    "function",
    "do",
    "return",
    "void",
    "else",
    "break",
    "catch",
    "instanceof",
    "with",
    "throw",
    "case",
    "default",
    "try",
    "switch",
    "continue",
    "typeof",
    "delete",
    "let",
    "yield",
    "const",
    "class",
    // JS handles these with a special rule
    // "get",
    // "set",
    "debugger",
    "async",
    "await",
    "static",
    "import",
    "from",
    "export",
    "extends",
    // It's reached stage 3, which is "recommended for implementation":
    "using"
  ], n = [
    "true",
    "false",
    "null",
    "undefined",
    "NaN",
    "Infinity"
  ], e = [
    // Fundamental objects
    "Object",
    "Function",
    "Boolean",
    "Symbol",
    // numbers and dates
    "Math",
    "Date",
    "Number",
    "BigInt",
    // text
    "String",
    "RegExp",
    // Indexed collections
    "Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Int32Array",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array",
    // Keyed collections
    "Set",
    "Map",
    "WeakSet",
    "WeakMap",
    // Structured data
    "ArrayBuffer",
    "SharedArrayBuffer",
    "Atomics",
    "DataView",
    "JSON",
    // Control abstraction objects
    "Promise",
    "Generator",
    "GeneratorFunction",
    "AsyncFunction",
    // Reflection
    "Reflect",
    "Proxy",
    // Internationalization
    "Intl",
    // WebAssembly
    "WebAssembly"
  ], i = [
    "Error",
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError"
  ], r = [
    "setInterval",
    "setTimeout",
    "clearInterval",
    "clearTimeout",
    "require",
    "exports",
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape"
  ], _ = [
    "arguments",
    "this",
    "super",
    "console",
    "window",
    "document",
    "localStorage",
    "sessionStorage",
    "module",
    "global"
    // Node.js
  ], l = [].concat(
    r,
    e,
    i
  );
  function c(u) {
    const f = u.regex, m = (re, { after: me }) => {
      const fe = "</" + re[0].slice(1);
      return re.input.indexOf(fe, me) !== -1;
    }, N = a, x = {
      begin: "<>",
      end: "</>"
    }, k = /<[A-Za-z0-9\\._:-]+\s*\/>/, d = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      /**
       * @param {RegExpMatchArray} match
       * @param {CallbackResponse} response
       */
      isTrulyOpeningTag: (re, me) => {
        const fe = re[0].length + re.index, ve = re.input[fe];
        if (
          // HTML should not include another raw `<` inside a tag
          // nested type?
          // `<Array<Array<number>>`, etc.
          ve === "<" || // the , gives away that this is not HTML
          // `<T, A extends keyof T, V>`
          ve === ","
        ) {
          me.ignoreMatch();
          return;
        }
        ve === ">" && (m(re, { after: fe }) || me.ignoreMatch());
        let ye;
        const ke = re.input.substring(fe);
        if (ye = ke.match(/^\s*=/)) {
          me.ignoreMatch();
          return;
        }
        if ((ye = ke.match(/^\s+extends\s+/)) && ye.index === 0) {
          me.ignoreMatch();
          return;
        }
      }
    }, o = {
      $pattern: a,
      keyword: t,
      literal: n,
      built_in: l,
      "variable.language": _
    }, b = "[0-9](_?[0-9])*", R = `\\.(${b})`, T = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", A = {
      className: "number",
      variants: [
        // DecimalLiteral
        { begin: `(\\b(${T})((${R})|\\.)?|(${R}))[eE][+-]?(${b})\\b` },
        { begin: `\\b(${T})\\b((${R})\\b|\\.)?|(${R})\\b` },
        // DecimalBigIntegerLiteral
        { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
        // NonDecimalIntegerLiteral
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
        { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
        { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
        // LegacyOctalIntegerLiteral (does not include underscore separators)
        // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
        { begin: "\\b0[0-7]+n?\\b" }
      ],
      relevance: 0
    }, E = {
      className: "subst",
      begin: "\\$\\{",
      end: "\\}",
      keywords: o,
      contains: []
      // defined later
    }, v = {
      begin: ".?html`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          u.BACKSLASH_ESCAPE,
          E
        ],
        subLanguage: "xml"
      }
    }, p = {
      begin: ".?css`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          u.BACKSLASH_ESCAPE,
          E
        ],
        subLanguage: "css"
      }
    }, w = {
      begin: ".?gql`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          u.BACKSLASH_ESCAPE,
          E
        ],
        subLanguage: "graphql"
      }
    }, s = {
      className: "string",
      begin: "`",
      end: "`",
      contains: [
        u.BACKSLASH_ESCAPE,
        E
      ]
    }, O = {
      className: "comment",
      variants: [
        u.COMMENT(
          /\/\*\*(?!\/)/,
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                begin: "(?=@[A-Za-z]+)",
                relevance: 0,
                contains: [
                  {
                    className: "doctag",
                    begin: "@[A-Za-z]+"
                  },
                  {
                    className: "type",
                    begin: "\\{",
                    end: "\\}",
                    excludeEnd: !0,
                    excludeBegin: !0,
                    relevance: 0
                  },
                  {
                    className: "variable",
                    begin: N + "(?=\\s*(-)|$)",
                    endsParent: !0,
                    relevance: 0
                  },
                  // eat spaces (not newlines) so we can find
                  // types or variables
                  {
                    begin: /(?=[^\n])\s/,
                    relevance: 0
                  }
                ]
              }
            ]
          }
        ),
        u.C_BLOCK_COMMENT_MODE,
        u.C_LINE_COMMENT_MODE
      ]
    }, B = [
      u.APOS_STRING_MODE,
      u.QUOTE_STRING_MODE,
      v,
      p,
      w,
      s,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      A
      // This is intentional:
      // See https://github.com/highlightjs/highlight.js/issues/3288
      // hljs.REGEXP_MODE
    ];
    E.contains = B.concat({
      // we need to pair up {} inside our subst to prevent
      // it from ending too early by matching another }
      begin: /\{/,
      end: /\}/,
      keywords: o,
      contains: [
        "self"
      ].concat(B)
    });
    const F = [].concat(O, E.contains), G = F.concat([
      // eat recursive parens in sub expressions
      {
        begin: /(\s*)\(/,
        end: /\)/,
        keywords: o,
        contains: ["self"].concat(F)
      }
    ]), H = {
      className: "params",
      // convert this to negative lookbehind in v12
      begin: /(\s*)\(/,
      // to match the parms with
      end: /\)/,
      excludeBegin: !0,
      excludeEnd: !0,
      keywords: o,
      contains: G
    }, j = {
      variants: [
        // class Car extends vehicle
        {
          match: [
            /class/,
            /\s+/,
            N,
            /\s+/,
            /extends/,
            /\s+/,
            f.concat(N, "(", f.concat(/\./, N), ")*")
          ],
          scope: {
            1: "keyword",
            3: "title.class",
            5: "keyword",
            7: "title.class.inherited"
          }
        },
        // class Car
        {
          match: [
            /class/,
            /\s+/,
            N
          ],
          scope: {
            1: "keyword",
            3: "title.class"
          }
        }
      ]
    }, oe = {
      relevance: 0,
      match: f.either(
        // Hard coded exceptions
        /\bJSON/,
        // Float32Array, OutT
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        // CSSFactory, CSSFactoryT
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        // FPs, FPsT
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
        // P
        // single letters are not highlighted
        // BLAH
        // this will be flagged as a UPPER_CASE_CONSTANT instead
      ),
      className: "title.class",
      keywords: {
        _: [
          // se we still get relevance credit for JS library classes
          ...e,
          ...i
        ]
      }
    }, Oe = {
      label: "use_strict",
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/
    }, Ce = {
      variants: [
        {
          match: [
            /function/,
            /\s+/,
            N,
            /(?=\s*\()/
          ]
        },
        // anonymous function
        {
          match: [
            /function/,
            /\s*(?=\()/
          ]
        }
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      label: "func.def",
      contains: [H],
      illegal: /%/
    }, xe = {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: "variable.constant"
    };
    function Fe(re) {
      return f.concat("(?!", re.join("|"), ")");
    }
    const Ze = {
      match: f.concat(
        /\b/,
        Fe([
          ...r,
          "super",
          "import"
        ].map((re) => `${re}\\s*\\(`)),
        N,
        f.lookahead(/\s*\(/)
      ),
      className: "title.function",
      relevance: 0
    }, Te = {
      begin: f.concat(/\./, f.lookahead(
        f.concat(N, /(?![0-9A-Za-z$_(])/)
      )),
      end: N,
      excludeBegin: !0,
      keywords: "prototype",
      className: "property",
      relevance: 0
    }, Se = {
      match: [
        /get|set/,
        /\s+/,
        N,
        /(?=\()/
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        {
          // eat to avoid empty params
          begin: /\(\)/
        },
        H
      ]
    }, Be = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + u.UNDERSCORE_IDENT_RE + ")\\s*=>", le = {
      match: [
        /const|var|let/,
        /\s+/,
        N,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        // async is optional
        f.lookahead(Be)
      ],
      keywords: "async",
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        H
      ]
    };
    return {
      name: "JavaScript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: o,
      // this will be extended by TypeScript
      exports: { PARAMS_CONTAINS: G, CLASS_REFERENCE: oe },
      illegal: /#(?![$_A-z])/,
      contains: [
        u.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }),
        Oe,
        u.APOS_STRING_MODE,
        u.QUOTE_STRING_MODE,
        v,
        p,
        w,
        s,
        O,
        // Skip numbers when they are part of a variable name
        { match: /\$\d+/ },
        A,
        oe,
        {
          scope: "attr",
          match: N + f.lookahead(":"),
          relevance: 0
        },
        le,
        {
          // "value" container
          begin: "(" + u.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [
            O,
            u.REGEXP_MODE,
            {
              className: "function",
              // we have to count the parens to make sure we actually have the
              // correct bounding ( ) before the =>.  There could be any number of
              // sub-expressions inside also surrounded by parens.
              begin: Be,
              returnBegin: !0,
              end: "\\s*=>",
              contains: [
                {
                  className: "params",
                  variants: [
                    {
                      begin: u.UNDERSCORE_IDENT_RE,
                      relevance: 0
                    },
                    {
                      className: null,
                      begin: /\(\s*\)/,
                      skip: !0
                    },
                    {
                      begin: /(\s*)\(/,
                      end: /\)/,
                      excludeBegin: !0,
                      excludeEnd: !0,
                      keywords: o,
                      contains: G
                    }
                  ]
                }
              ]
            },
            {
              // could be a comma delimited list of params to a function call
              begin: /,/,
              relevance: 0
            },
            {
              match: /\s+/,
              relevance: 0
            },
            {
              // JSX
              variants: [
                { begin: x.begin, end: x.end },
                { match: k },
                {
                  begin: d.begin,
                  // we carefully check the opening tag to see if it truly
                  // is a tag and not a false positive
                  "on:begin": d.isTrulyOpeningTag,
                  end: d.end
                }
              ],
              subLanguage: "xml",
              contains: [
                {
                  begin: d.begin,
                  end: d.end,
                  skip: !0,
                  contains: ["self"]
                }
              ]
            }
          ]
        },
        Ce,
        {
          // prevent this from getting swallowed up by function
          // since they appear "function like"
          beginKeywords: "while if switch catch for"
        },
        {
          // we have to count the parens to make sure we actually have the correct
          // bounding ( ).  There could be any number of sub-expressions inside
          // also surrounded by parens.
          begin: "\\b(?!function)" + u.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          // end parens
          returnBegin: !0,
          label: "func.def",
          contains: [
            H,
            u.inherit(u.TITLE_MODE, { begin: N, className: "title.function" })
          ]
        },
        // catch ... so it won't trigger the property rule below
        {
          match: /\.\.\./,
          relevance: 0
        },
        Te,
        // hack: prevents detection of keywords in some circumstances
        // .keyword()
        // $keyword = x
        {
          match: "\\$" + N,
          relevance: 0
        },
        {
          match: [/\bconstructor(?=\s*\()/],
          className: { 1: "title.function" },
          contains: [H]
        },
        Ze,
        xe,
        j,
        Se,
        {
          match: /\$[(.]/
          // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
        }
      ]
    };
  }
  function g(u) {
    const f = u.regex, m = c(u), N = a, x = [
      "any",
      "void",
      "number",
      "boolean",
      "string",
      "object",
      "never",
      "symbol",
      "bigint",
      "unknown"
    ], k = {
      begin: [
        /namespace/,
        /\s+/,
        u.IDENT_RE
      ],
      beginScope: {
        1: "keyword",
        3: "title.class"
      }
    }, d = {
      beginKeywords: "interface",
      end: /\{/,
      excludeEnd: !0,
      keywords: {
        keyword: "interface extends",
        built_in: x
      },
      contains: [m.exports.CLASS_REFERENCE]
    }, o = {
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use strict['"]/
    }, b = [
      "type",
      // "namespace",
      "interface",
      "public",
      "private",
      "protected",
      "implements",
      "declare",
      "abstract",
      "readonly",
      "enum",
      "override",
      "satisfies"
    ], R = {
      $pattern: a,
      keyword: t.concat(b),
      literal: n,
      built_in: l.concat(x),
      "variable.language": _
    }, T = {
      className: "meta",
      begin: "@" + N
    }, A = (w, s, y) => {
      const O = w.contains.findIndex((B) => B.label === s);
      if (O === -1)
        throw new Error("can not find mode to replace");
      w.contains.splice(O, 1, y);
    };
    Object.assign(m.keywords, R), m.exports.PARAMS_CONTAINS.push(T);
    const E = m.contains.find((w) => w.scope === "attr"), v = Object.assign(
      {},
      E,
      { match: f.concat(N, f.lookahead(/\s*\?:/)) }
    );
    m.exports.PARAMS_CONTAINS.push([
      m.exports.CLASS_REFERENCE,
      // class reference for highlighting the params types
      E,
      // highlight the params key
      v
      // Added for optional property assignment highlighting
    ]), m.contains = m.contains.concat([
      T,
      k,
      d,
      v
      // Added for optional property assignment highlighting
    ]), A(m, "shebang", u.SHEBANG()), A(m, "use_strict", o);
    const p = m.contains.find((w) => w.label === "func.def");
    return p.relevance = 0, Object.assign(m, {
      name: "TypeScript",
      aliases: [
        "ts",
        "tsx",
        "mts",
        "cts"
      ]
    }), m;
  }
  return Yn = g, Yn;
}
var jn, ks;
function ml() {
  if (ks) return jn;
  ks = 1;
  function a(t) {
    const n = t.regex, e = {
      className: "string",
      begin: /"(""|[^/n])"C\b/
    }, i = {
      className: "string",
      begin: /"/,
      end: /"/,
      illegal: /\n/,
      contains: [
        {
          // double quote escape
          begin: /""/
        }
      ]
    }, r = /\d{1,2}\/\d{1,2}\/\d{4}/, _ = /\d{4}-\d{1,2}-\d{1,2}/, l = /(\d|1[012])(:\d+){0,2} *(AM|PM)/, c = /\d{1,2}(:\d{1,2}){1,2}/, g = {
      className: "literal",
      variants: [
        {
          // #YYYY-MM-DD# (ISO-Date) or #M/D/YYYY# (US-Date)
          begin: n.concat(/# */, n.either(_, r), / *#/)
        },
        {
          // #H:mm[:ss]# (24h Time)
          begin: n.concat(/# */, c, / *#/)
        },
        {
          // #h[:mm[:ss]] A# (12h Time)
          begin: n.concat(/# */, l, / *#/)
        },
        {
          // date plus time
          begin: n.concat(
            /# */,
            n.either(_, r),
            / +/,
            n.either(l, c),
            / *#/
          )
        }
      ]
    }, u = {
      className: "number",
      relevance: 0,
      variants: [
        {
          // Float
          begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
        },
        {
          // Integer (base 10)
          begin: /\b\d[\d_]*((U?[SIL])|[%&])?/
        },
        {
          // Integer (base 16)
          begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/
        },
        {
          // Integer (base 8)
          begin: /&O[0-7_]+((U?[SIL])|[%&])?/
        },
        {
          // Integer (base 2)
          begin: /&B[01_]+((U?[SIL])|[%&])?/
        }
      ]
    }, f = {
      className: "label",
      begin: /^\w+:/
    }, m = t.COMMENT(/'''/, /$/, { contains: [
      {
        className: "doctag",
        begin: /<\/?/,
        end: />/
      }
    ] }), N = t.COMMENT(null, /$/, { variants: [
      { begin: /'/ },
      {
        // TODO: Use multi-class for leading spaces
        begin: /([\t ]|^)REM(?=\s)/
      }
    ] });
    return {
      name: "Visual Basic .NET",
      aliases: ["vb"],
      case_insensitive: !0,
      classNameAliases: { label: "symbol" },
      keywords: {
        keyword: "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
        built_in: (
          // Operators https://docs.microsoft.com/dotnet/visual-basic/language-reference/operators
          "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort"
        ),
        type: (
          // Data types https://docs.microsoft.com/dotnet/visual-basic/language-reference/data-types
          "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort"
        ),
        literal: "true false nothing"
      },
      illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",
      contains: [
        e,
        i,
        g,
        u,
        f,
        m,
        N,
        {
          className: "meta",
          // TODO: Use multi-class for indentation once available
          begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
          end: /$/,
          keywords: { keyword: "const disable else elseif enable end externalsource if region then" },
          contains: [N]
        }
      ]
    };
  }
  return jn = a, jn;
}
var Qn, Rs;
function vl() {
  if (Rs) return Qn;
  Rs = 1;
  function a(t) {
    t.regex;
    const n = t.COMMENT(/\(;/, /;\)/);
    n.contains.push("self");
    const e = t.COMMENT(/;;/, /$/), i = [
      "anyfunc",
      "block",
      "br",
      "br_if",
      "br_table",
      "call",
      "call_indirect",
      "data",
      "drop",
      "elem",
      "else",
      "end",
      "export",
      "func",
      "global.get",
      "global.set",
      "local.get",
      "local.set",
      "local.tee",
      "get_global",
      "get_local",
      "global",
      "if",
      "import",
      "local",
      "loop",
      "memory",
      "memory.grow",
      "memory.size",
      "module",
      "mut",
      "nop",
      "offset",
      "param",
      "result",
      "return",
      "select",
      "set_global",
      "set_local",
      "start",
      "table",
      "tee_local",
      "then",
      "type",
      "unreachable"
    ], r = {
      begin: [
        /(?:func|call|call_indirect)/,
        /\s+/,
        /\$[^\s)]+/
      ],
      className: {
        1: "keyword",
        3: "title.function"
      }
    }, _ = {
      className: "variable",
      begin: /\$[\w_]+/
    }, l = {
      match: /(\((?!;)|\))+/,
      className: "punctuation",
      relevance: 0
    }, c = {
      className: "number",
      relevance: 0,
      // borrowed from Prism, TODO: split out into variants
      match: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/
    }, g = {
      // look-ahead prevents us from gobbling up opcodes
      match: /(i32|i64|f32|f64)(?!\.)/,
      className: "type"
    }, u = {
      className: "keyword",
      // borrowed from Prism, TODO: split out into variants
      match: /\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/
    };
    return {
      name: "WebAssembly",
      keywords: {
        $pattern: /[\w.]+/,
        keyword: i
      },
      contains: [
        e,
        n,
        {
          match: [
            /(?:offset|align)/,
            /\s*/,
            /=/
          ],
          className: {
            1: "keyword",
            3: "operator"
          }
        },
        _,
        l,
        r,
        t.QUOTE_STRING_MODE,
        g,
        u,
        c
      ]
    };
  }
  return Qn = a, Qn;
}
var Jn, As;
function El() {
  if (As) return Jn;
  As = 1;
  var a = /* @__PURE__ */ qs();
  return a.registerLanguage("xml", /* @__PURE__ */ Uo()), a.registerLanguage("bash", /* @__PURE__ */ Fo()), a.registerLanguage("c", /* @__PURE__ */ $o()), a.registerLanguage("cpp", /* @__PURE__ */ zo()), a.registerLanguage("csharp", /* @__PURE__ */ Ko()), a.registerLanguage("css", /* @__PURE__ */ Go()), a.registerLanguage("markdown", /* @__PURE__ */ qo()), a.registerLanguage("diff", /* @__PURE__ */ Wo()), a.registerLanguage("ruby", /* @__PURE__ */ Ho()), a.registerLanguage("go", /* @__PURE__ */ Vo()), a.registerLanguage("graphql", /* @__PURE__ */ Zo()), a.registerLanguage("ini", /* @__PURE__ */ Xo()), a.registerLanguage("java", /* @__PURE__ */ Yo()), a.registerLanguage("javascript", /* @__PURE__ */ jo()), a.registerLanguage("json", /* @__PURE__ */ Qo()), a.registerLanguage("kotlin", /* @__PURE__ */ Jo()), a.registerLanguage("less", /* @__PURE__ */ el()), a.registerLanguage("lua", /* @__PURE__ */ tl()), a.registerLanguage("makefile", /* @__PURE__ */ nl()), a.registerLanguage("perl", /* @__PURE__ */ il()), a.registerLanguage("objectivec", /* @__PURE__ */ sl()), a.registerLanguage("php", /* @__PURE__ */ al()), a.registerLanguage("php-template", /* @__PURE__ */ rl()), a.registerLanguage("plaintext", /* @__PURE__ */ ol()), a.registerLanguage("python", /* @__PURE__ */ ll()), a.registerLanguage("python-repl", /* @__PURE__ */ cl()), a.registerLanguage("r", /* @__PURE__ */ _l()), a.registerLanguage("rust", /* @__PURE__ */ ul()), a.registerLanguage("scss", /* @__PURE__ */ dl()), a.registerLanguage("shell", /* @__PURE__ */ pl()), a.registerLanguage("sql", /* @__PURE__ */ fl()), a.registerLanguage("swift", /* @__PURE__ */ hl()), a.registerLanguage("yaml", /* @__PURE__ */ gl()), a.registerLanguage("typescript", /* @__PURE__ */ bl()), a.registerLanguage("vbnet", /* @__PURE__ */ ml()), a.registerLanguage("wasm", /* @__PURE__ */ vl()), a.HighlightJS = a, a.default = a, Jn = a, Jn;
}
El();
var yl = /* @__PURE__ */ qs();
const ei = /* @__PURE__ */ So(yl);
var Cs = da({ props: { code: { type: String, required: !0 }, language: { type: String, default: "" }, autodetect: { type: Boolean, default: !0 }, ignoreIllegals: { type: Boolean, default: !0 } }, setup: function(a) {
  var t = ae(a.language);
  We((function() {
    return a.language;
  }), (function(i) {
    t.value = i;
  }));
  var n = W((function() {
    return a.autodetect || !t.value;
  })), e = W((function() {
    return !n.value && !ei.getLanguage(t.value);
  }));
  return { className: W((function() {
    return e.value ? "" : "hljs " + t.value;
  })), highlightedCode: W((function() {
    var i;
    if (e.value) return console.warn('The language "' + t.value + '" you specified could not be found.'), a.code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
    if (n.value) {
      var r = ei.highlightAuto(a.code);
      return t.value = (i = r.language) !== null && i !== void 0 ? i : "", r.value;
    }
    return (r = ei.highlight(a.code, { language: t.value, ignoreIllegals: a.ignoreIllegals })).value;
  })) };
}, render: function() {
  return ti("pre", {}, [ti("code", { class: this.className, innerHTML: this.highlightedCode })]);
} }), Is = { install: function(a) {
  a.component("highlightjs", Cs);
}, component: Cs };
const wl = {
  __name: "index",
  props: {
    code: {
      type: String,
      required: !0
    }
  },
  setup(a, { expose: t }) {
    t();
    const n = Is.component, e = a, i = W(() => Hi.html(e.code, {
      indent_size: 2,
      indent_inner_html: !0,
      wrap_attributes: "force-expand-multiline",
      wrap_attributes_indent_size: 2,
      inline_custom_elements: !0
    })), _ = { hlVue: n, props: e, formattedCode: i, copyToClipboard: async () => {
      try {
        await navigator.clipboard.writeText(i.value);
      } catch (l) {
        console.error("Failed to copy: ", l);
      }
    }, computed: W, get beautifyHtml() {
      return Hi.html;
    }, get hljsVuePlugin() {
      return Is;
    }, get CopyIcon() {
      return ar;
    } };
    return Object.defineProperty(_, "__isScriptSetup", { enumerable: !1, value: !0 }), _;
  }
}, xl = { class: "vue-lab__code-preview" }, Nl = { class: "vue-lab__code-preview__content" };
function Ol(a, t, n, e, i, r) {
  return I(), K("div", xl, [
    t[0] || (t[0] = D(
      "div",
      { class: "vue-lab__code-preview__title" },
      "Usage",
      -1
      /* CACHED */
    )),
    D("div", Nl, [
      De(e.CopyIcon, {
        class: "vue-lab__code-preview__content__copy-ctrl",
        onClick: e.copyToClipboard
      }),
      De(e.hlVue, {
        code: e.formattedCode,
        autodetect: !1,
        language: "xml",
        class: "vue-lab__code-preview__pre"
      }, null, 8, ["code"])
    ])
  ]);
}
const Tl = /* @__PURE__ */ te(wl, [["render", Ol], ["__scopeId", "data-v-ba1811dc"], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/vuelab/components/layout/CodePreview/index.vue"]]), Sl = {
  __name: "index",
  props: {
    num: {
      type: Number,
      default: 3
    }
  },
  setup(a, { expose: t }) {
    t();
    const n = a, e = Array.from({ length: n.num }), i = { props: n, dotsArray: e, get generateKey() {
      return Ve;
    } };
    return Object.defineProperty(i, "__isScriptSetup", { enumerable: !1, value: !0 }), i;
  }
}, kl = { class: "vue-lab__divider" };
function Rl(a, t, n, e, i, r) {
  return I(), K("div", kl, [
    (I(!0), K(
      Ne,
      null,
      Ae(e.dotsArray, (_) => (I(), K("div", {
        key: e.generateKey(_),
        class: "vue-lab__divider-dot"
      }))),
      128
      /* KEYED_FRAGMENT */
    ))
  ]);
}
const Ws = /* @__PURE__ */ te(Sl, [["render", Rl], ["__scopeId", "data-v-a2d7e9c1"], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/vuelab/components/layout/Divider/index.vue"]]), Al = {
  __name: "group",
  props: {
    option: { type: Object, default: () => ({}) },
    isGroup: { type: Boolean, default: !1 },
    isLast: { type: Boolean, default: !1 }
  },
  setup(a, { expose: t }) {
    t();
    const e = { props: a, get generateKey() {
      return Ve;
    }, get Divider() {
      return Ws;
    } };
    return Object.defineProperty(e, "__isScriptSetup", { enumerable: !1, value: !0 }), e;
  }
}, Cl = { class: "home-page__group" }, Il = {
  key: 0,
  class: "home-page__group-name"
}, Ml = {
  key: 1,
  class: "home-page__group-description"
}, Ll = { class: "home-page__group-body" };
function Dl(a, t, n, e, i, r) {
  const _ = Mt("router-link");
  return I(), K("div", Cl, [
    n.option?.name || n.isGroup ? (I(), K(
      "div",
      Il,
      pe(n.isGroup ? n.option.name || "Other components" : ""),
      1
      /* TEXT */
    )) : se("v-if", !0),
    n.option?.description ? (I(), K(
      "div",
      Ml,
      pe(n.option.description || ""),
      1
      /* TEXT */
    )) : se("v-if", !0),
    D("div", Ll, [
      (I(!0), K(
        Ne,
        null,
        Ae(n.option.items, (l) => (I(), K("div", {
          key: e.generateKey(l),
          class: "home-page__group-body-item"
        }, [
          De(_, {
            to: `/${l.name}`,
            class: "home-page__group-body-link"
          }, {
            default: Le(() => [
              Dt(
                pe(l.name),
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
    n.isLast ? se("v-if", !0) : (I(), ee(e.Divider, { key: 2 }))
  ]);
}
const Bl = /* @__PURE__ */ te(Al, [["render", Dl], ["__scopeId", "data-v-d6fe0ccb"], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/vuelab/views/VueLabHome/group.vue"]]), Pl = {
  __name: "index",
  props: {
    components: { type: Object, default: () => ({}) },
    description: { type: String, default: null },
    title: { type: String, default: null },
    menu: { type: Array, default: () => [] },
    menuGroupsDescription: { type: Object, default: () => null }
  },
  setup(a, { expose: t }) {
    t();
    const n = a, e = ae(""), i = (g) => {
      e.value = g.target.value;
    }, r = W(() => n.description || "A reusable UI component library intended to standardize styling, improve development speed, and maintain consistency across projects."), _ = W(() => {
      const g = n.menu.map((x) => x.group), u = [...new Set(g)].filter((x) => x && x.length), f = (x) => !e.value || !e.value.length ? !0 : x.name.toLowerCase().includes(e.value.toLowerCase()), m = u.map((x) => {
        const k = n.menuGroupsDescription ? n.menuGroupsDescription[x] : null;
        return {
          name: x,
          description: k,
          items: n.menu.filter((d) => d.group === x).filter(f)
        };
      }), N = {
        name: null,
        description: null,
        items: n.menu.filter((x) => !x.group || !x.group.length).filter(f)
      };
      return [...m, N];
    }), l = W(() => n.menu.some((g) => g.group && g.group.length)), c = { props: n, searchQuery: e, handleTextInput: i, pageDiscription: r, menuItems: _, isGroup: l, computed: W, ref: ae, Group: Bl, get generateKey() {
      return Ve;
    }, get LabIcon() {
      return Ps;
    } };
    return Object.defineProperty(c, "__isScriptSetup", { enumerable: !1, value: !0 }), c;
  }
}, Ul = { class: "home-page" }, Fl = { class: "home-page__header" }, $l = { class: "home-page__title" }, zl = { class: "home-page__title-icon" }, Kl = { class: "home-page__description" }, Gl = { class: "home-page__search" }, ql = ["value"], Wl = { class: "home-page__menu custom-scroll--simple" };
function Hl(a, t, n, e, i, r) {
  return I(), K("div", Ul, [
    D("div", Fl, [
      D("div", $l, [
        D("div", zl, [
          De(e.LabIcon)
        ]),
        t[2] || (t[2] = D(
          "div",
          { class: "home-page__title-text" },
          " Vue Lab ",
          -1
          /* CACHED */
        ))
      ]),
      D(
        "div",
        Kl,
        pe(e.pageDiscription),
        1
        /* TEXT */
      )
    ]),
    D("div", Gl, [
      D("input", {
        value: e.searchQuery,
        class: "text-ctrl__input",
        type: "text",
        onFocusin: t[0] || (t[0] = (_) => a.handleFocus("in")),
        onFocusout: t[1] || (t[1] = (_) => a.handleFocus("out")),
        onInput: e.handleTextInput
      }, null, 40, ql)
    ]),
    D("div", Wl, [
      (I(!0), K(
        Ne,
        null,
        Ae(e.menuItems, (_, l) => (I(), K(
          Ne,
          {
            key: e.generateKey(_)
          },
          [
            _.items?.length ? (I(), ee(e.Group, {
              key: 0,
              option: _,
              isGroup: e.isGroup,
              isLast: l == e.menuItems.length - 1
            }, null, 8, ["option", "isGroup", "isLast"])) : se("v-if", !0)
          ],
          64
          /* STABLE_FRAGMENT */
        ))),
        128
        /* KEYED_FRAGMENT */
      ))
    ])
  ]);
}
const Vl = /* @__PURE__ */ te(Pl, [["render", Hl], ["__scopeId", "data-v-c75a0f45"], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/vuelab/views/VueLabHome/index.vue"]]);
async function Zl(a, t) {
  try {
    const n = await import(
      /* @vite-ignore */
      `${t}/${a}.vuelab.js`
    );
    return n.default || n;
  } catch (n) {
    return console.log(n), console.warn(`⚠️ Config not found ${a}`), {};
  }
}
const Xl = {
  __name: "index",
  props: {
    name: String,
    components: {
      type: Object,
      default: () => ({})
    },
    configuration: {
      type: Object,
      default: () => ({})
    }
  },
  setup(a, { expose: t }) {
    t();
    const n = a, e = W(() => n.components[n.name]);
    let i = ae({});
    const r = ae(null), _ = ae(null), l = ae(null), c = ae(!0), g = ae({
      vueLabloading: !0
    }), u = ae({});
    let f = hi([]);
    je(async () => {
      await m();
    });
    const m = async () => {
      c.value = !1, i.value = { vueLabloading: !1 };
      const v = n.configuration?.[n.name?.toLocaleLowerCase()], p = Object.keys(v.propsConfig);
      f = p.map((y) => ({
        ctrl: v.propsConfig[y].type,
        value: v.propsConfig[y].value,
        title: v.propsConfig[y].ctrlTitle,
        variants: v.propsConfig[y].variants,
        isCtrl: v.propsConfig[y].ctrl,
        field: y
      })).filter((y) => y.isCtrl);
      const s = N(p, v.propsConfig);
      u.value = p.reduce((y, O) => ({
        ...y,
        [O]: v.propsConfig[O].type
      }), {}), i.value = { ...i.value, ...s }, g.value = { ...i.value }, r.value = v?.description, _.value = x(p, v.propsConfig), l.value = k(v.events), c.value = !0;
    }, N = (v, p) => v.reduce((w, s) => ({
      ...w,
      [s]: b(s, p)
    }), { vueLabloading: !0 }), x = (v, p) => v.map((w) => ({
      name: w,
      type: p[w].type,
      values: o(p[w].variants),
      default: p[w].default,
      description: p[w].description
    })), k = (v) => v ? Object.keys(v).map((p) => ({
      name: p,
      description: v[p].description
    })) : null, d = W(() => {
      const v = l.value ? l.value.map((w) => `@${w.name}="${w.name}Handler"`).join(" ") : "", p = Object.entries(i.value).filter((w) => w[0] != "vueLabloading").map(([w, s]) => {
        if (u.value[w] === "variable") {
          const y = `${w}Val`;
          return `:${w}="${y}"`;
        } else
          return typeof s == "boolean" ? `:${w}="${!!s}"` : typeof s == "object" || typeof s == "number" ? `:${w}="${s}"` : `${w}="${s}"`;
      }).sort().filter(Boolean).join(" ");
      return `<${n.name} ${p} ${v} />`;
    }), o = (v) => Array.isArray(v) ? v.join(" | ") : typeof v == "boolean" ? v : null, b = (v, p) => p[v].value, R = ({ ctrl: v, value: p }) => {
      i.value[v] = p;
    }, T = () => {
      i.value = { ...g.value };
    }, A = W(() => e.value && i.value.vueLabloading);
    We(() => n.name, async () => {
      await m();
    });
    const E = { props: n, comp: e, get config() {
      return i;
    }, set config(v) {
      i = v;
    }, description: r, propsData: _, eventsData: l, isLoading: c, defaultConfig: g, types: u, get controls() {
      return f;
    }, set controls(v) {
      f = v;
    }, loadData: m, getBinds: N, getPropsData: x, getEventsData: k, exampleCode: d, getValues: o, getBindValue: b, handleCTRLInput: R, resetConfig: T, isComponent: A, computed: W, onMounted: je, reactive: hi, ref: ae, watch: We, get loadConfig() {
      return Zl;
    }, get ControlBlock() {
      return wo;
    }, get Page() {
      return To;
    }, get CodePreview() {
      return Tl;
    }, get Divider() {
      return Ws;
    }, get Button() {
      return Ds;
    }, get Description() {
      return ka;
    }, get PropsDescription() {
      return Va;
    }, get EventsDescription() {
      return tr;
    } };
    return Object.defineProperty(E, "__isScriptSetup", { enumerable: !1, value: !0 }), E;
  }
}, Yl = { class: "vue-lab__component" }, jl = { class: "vue-lab__component__header" }, Ql = { class: "vue-lab__component__header-title" }, Jl = { class: "vue-lab__component__content custom-scroll--simple" }, ec = {
  key: 2,
  class: "vue-lab__component__body"
}, tc = { class: "vue-lab__controls" };
function nc(a, t, n, e, i, r) {
  return e.isLoading ? (I(), ee(e.Page, {
    key: 0,
    class: "vue-lab"
  }, {
    default: Le(() => [
      D("div", Yl, [
        D("div", jl, [
          D(
            "div",
            Ql,
            pe(n.name),
            1
            /* TEXT */
          )
        ]),
        D("div", Jl, [
          e.description ? (I(), ee(e.Description, {
            key: 0,
            description: e.description
          }, null, 8, ["description"])) : se("v-if", !0),
          e.isComponent ? (I(), ee(e.Divider, { key: 1 })) : se("v-if", !0),
          e.isComponent ? (I(), K("div", ec, [
            (I(), ee(
              Lt(e.comp),
              pa(fa(e.config)),
              null,
              16
              /* FULL_PROPS */
            ))
          ])) : se("v-if", !0),
          e.exampleCode ? (I(), ee(e.Divider, { key: 3 })) : se("v-if", !0),
          e.isComponent && e.exampleCode ? (I(), ee(e.CodePreview, {
            key: 4,
            code: e.exampleCode,
            "preview-code": e.exampleCode
          }, null, 8, ["code", "preview-code"])) : se("v-if", !0),
          e.propsData ? (I(), ee(e.Divider, { key: 5 })) : se("v-if", !0),
          e.isComponent && e.propsData ? (I(), ee(e.PropsDescription, {
            key: 6,
            data: e.propsData
          }, null, 8, ["data"])) : se("v-if", !0),
          e.eventsData ? (I(), ee(e.Divider, { key: 7 })) : se("v-if", !0),
          e.isComponent && e.eventsData ? (I(), ee(e.EventsDescription, {
            key: 8,
            data: e.eventsData
          }, null, 8, ["data"])) : se("v-if", !0)
        ])
      ]),
      D("div", tc, [
        e.controls.length ? (I(), ee(e.ControlBlock, {
          key: 0,
          options: e.controls,
          values: e.config,
          onInput: e.handleCTRLInput,
          onReset: e.resetConfig
        }, null, 8, ["options", "values"])) : se("v-if", !0)
      ])
    ]),
    _: 1
    /* STABLE */
  })) : se("v-if", !0);
}
const ic = /* @__PURE__ */ te(Xl, [["render", nc], ["__scopeId", "data-v-432c94c6"], ["__file", "/Users/maximvovk/Documents/pet-projects/vue-story-book/src/vuelab/views/VueLabComponent/index.vue"]]), sc = {
  beforeMount(a, { value: t }) {
    t && (a._handler = (n) => {
      a.contains(n.target) || setTimeout(() => t(n), 1);
    }, document.addEventListener("click", a._handler, { capture: !0 }));
  },
  beforeUnmount(a) {
    document.removeEventListener("click", a._handler, { capture: !0 });
  }
}, ac = {
  mounted(a) {
    a.remove(), document.body.appendChild(a);
  },
  unmounted(a) {
    a.remove();
  }
}, rc = {
  install(a) {
    a.directive("click-outside", sc), a.directive("hoisted", ac);
  }
}, cc = ({ components: a = {}, menu: t, menuGroupsDescription: n, mountSelector: e, configuration: i, homePageDescription: r }) => {
  const l = Object.keys(i || {}).reduce((m, N) => ({ ...m, [N.toLocaleLowerCase()]: i[N] }), {}), c = a ? Object.keys(a).map((m) => ({
    name: m,
    path: `/${m}`
  })) : [], g = [
    {
      path: "/",
      name: "home",
      component: Vl,
      props: {
        components: a,
        description: r || "",
        menu: t || c,
        menuGroupsDescription: n
      }
    },
    {
      path: "/:name",
      name: "component",
      component: ic,
      props: (m) => ({ name: m.params.name, components: a, configuration: l })
    }
  ], u = ga({
    history: ba(),
    routes: g
  }), f = ha({
    render: () => ti(Zr, { menu: t || c })
  });
  return f.use(u), f.use(rc), e && f.mount(e), f;
};
export {
  cc as createLab
};
