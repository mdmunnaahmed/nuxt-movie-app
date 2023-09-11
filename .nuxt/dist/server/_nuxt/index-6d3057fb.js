import { _ as _imports_0$1, H as Head, T as Title, a as __nuxt_component_2$1 } from "./placeholder-8c2f65e5.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_0 } from "./nuxt-link-99c863e4.js";
import axios from "axios";
import "./index-0d580560.js";
import "@unhead/shared";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "devalue";
import "klona";
import "unhead";
import "vue-router";
import "h3";
import "ufo";
import "defu";
const _imports_0 = "" + __buildAssetsURL("movieHero.0ffa6825.jpg");
const Hero_vue_vue_type_style_index_0_scoped_d4302a2d_lang = "";
const _sfc_main$1 = {
  name: "Hero",
  setup() {
    return {};
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-d4302a2d><div class="hero" data-v-d4302a2d><img${ssrRenderAttr("src", _imports_0)} alt="hero img" data-v-d4302a2d><div class="text-container" data-v-d4302a2d><div class="text" data-v-d4302a2d><span class="mini-heading" data-v-d4302a2d>Now Streaming</span><h1 data-v-d4302a2d><span data-v-d4302a2d>Now </span> Streaming</h1><a href="#movie-grid" class="button" data-v-d4302a2d>View Movies</a></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-d4302a2d"]]);
const index_vue_vue_type_style_index_0_scoped_368be0a4_lang = "";
const _sfc_main = {
  useHead() {
    return {
      title: "Movie App - Latest Streaming Movies",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "hile working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi."
        }
      ]
    };
  },
  data() {
    return {
      movies: [],
      searchInput: "",
      loading: false
    };
  },
  methods: {
    async getMovies() {
      this.loading = true;
      const data = axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=5b26fcdb91d0b598924265a4ad10815b&language=en-US&page=1`
      );
      const result = await data;
      result.data.results.forEach((movie) => {
        this.movies.push(movie);
      });
      this.loading = false;
    },
    async searchMovie() {
      this.loading = true;
      await new Promise((resolve) => setTimeout(resolve, 600));
      const data = axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=5b26fcdb91d0b598924265a4ad10815b&language=en-US&page=1&query=${this.searchInput}`
      );
      const result = await data;
      this.movies = [];
      result.data.results.forEach((movie) => {
        this.movies.push(movie);
      });
      this.loading = false;
    },
    clearSearch() {
      this.searchInput = "";
      this.getMovies();
    },
    formattedReleaseDate(date) {
      return new Date(date).toLocaleString("en-us", {
        month: "long",
        day: "numeric",
        year: "numeric"
      });
    }
    // getSelectedText(event) {
    //   if (window.getSelection) {
    //     const selectedText = window.getSelection().toString();
    //     console.log(selectedText);
    //   }
    // },
  },
  computed: {},
  mounted() {
    this.getMovies();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = Head;
  const _component_Title = Title;
  const _component_Hero = __nuxt_component_2;
  const _component_iconsLoading = __nuxt_component_2$1;
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))} data-v-368be0a4>`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Title, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Movie App - Latest Streaming Movies`);
            } else {
              return [
                createTextVNode("Movie App - Latest Streaming Movies")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Title, null, {
            default: withCtx(() => [
              createTextVNode("Movie App - Latest Streaming Movies")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Hero, null, null, _parent));
  _push(`<div class="container search" data-v-368be0a4><input type="text" placeholder="Search..."${ssrRenderAttr("value", $data.searchInput)} data-v-368be0a4><button style="${ssrRenderStyle($data.searchInput !== "" ? null : { display: "none" })}" class="button" data-v-368be0a4> Clear Search </button></div><div class="container movies" data-v-368be0a4>`);
  if ($data.loading) {
    _push(`<div class="flex justify-center mt-5" data-v-368be0a4>`);
    _push(ssrRenderComponent(_component_iconsLoading, null, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<div id="movie-grid" class="movies-grid" data-v-368be0a4><!--[-->`);
    ssrRenderList($data.movies, (movie, index2) => {
      _push(`<div class="movie" data-v-368be0a4><div class="movie-img h-full" data-v-368be0a4>`);
      if (movie.poster_path !== null) {
        _push(`<img${ssrRenderAttr("src", `https://image.tmdb.org/t/p/w500${movie.poster_path}`)}${ssrRenderAttr("alt", `${movie.poster_path}`)} data-v-368be0a4>`);
      } else {
        _push(`<!---->`);
      }
      if (movie.poster_path == null) {
        _push(`<img${ssrRenderAttr("src", _imports_0$1)} class="h-full w-full object-cover" data-v-368be0a4>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="review" data-v-368be0a4>${ssrInterpolate(movie.vote_average.toFixed(1))}</div><div class="overview" data-v-368be0a4>${ssrInterpolate(movie.overview)}</div></div><div class="info" data-v-368be0a4><p class="title" data-v-368be0a4>${ssrInterpolate(movie.title)} </p><p class="release" data-v-368be0a4> Released: ${ssrInterpolate($options.formattedReleaseDate(movie.release_date))}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "movies/" + movie.id,
        class: "button button-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Get More Info`);
          } else {
            return [
              createTextVNode("Get More Info")
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div></div>`);
    });
    _push(`<!--]--></div>`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-368be0a4"]]);
export {
  index as default
};
//# sourceMappingURL=index-6d3057fb.js.map
