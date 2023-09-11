import { _ as _imports_0, H as Head, T as Title, a as __nuxt_component_2 } from './placeholder-8c2f65e5.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-99c863e4.mjs';
import axios from 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/axios/index.js';
import { withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import '../../renderer.mjs';
import 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/h3/dist/index.mjs';
import 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/devalue/index.js';
import 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/ufo/dist/index.mjs';
import 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/ofetch/dist/node.mjs';
import 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/destr/dist/index.mjs';
import 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/hookable/dist/index.mjs';
import 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/scule/dist/index.mjs';
import 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/klona/dist/index.mjs';
import 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/defu/dist/defu.mjs';
import 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/ohash/dist/index.mjs';
import 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/unstorage/dist/index.mjs';
import 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/unstorage/drivers/memory.mjs';
import 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/pathe/dist/index.mjs';
import 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/unhead/dist/index.mjs';
import 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/unctx/dist/index.mjs';
import 'file:///home/mun/Downloads/nuxt-movie-app/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {
  data() {
    return {
      loading: false,
      movie: []
    };
  },
  methods: {
    async getSingleMovie() {
      this.loading = true;
      await new Promise((resolve) => setTimeout(resolve, 1e3));
      const data = axios.get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=5b26fcdb91d0b598924265a4ad10815b&language=en-US`
      );
      const result = await data;
      this.movie = result.data;
      this.loading = false;
    },
    formattedReleaseDate(date) {
      return new Date(date).toLocaleString("en-us", {
        month: "long",
        day: "numeric",
        year: "numeric"
      });
    },
    shortRate(rate) {
      if (rate) {
        return rate.toFixed(1);
      }
    },
    toMillion(revenue) {
      if (revenue) {
        console.log(revenue.toString().length);
        if (revenue.toString().length <= 7) {
          return revenue;
        }
        if (revenue.toString().length > 7 && revenue.toString().length <= 9) {
          const million = revenue / 1e6;
          const million2 = million.toFixed(2);
          return `${million2} million`;
        }
        if (revenue.toString().length >= 10) {
          const billion = revenue / 1e9;
          const billion2 = billion.toFixed(2);
          return `${billion2} billion`;
        }
      }
    }
  },
  mounted() {
    this.getSingleMovie();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = Head;
  const _component_Title = Title;
  const _component_IconsLoading = __nuxt_component_2;
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Title, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate($data.movie.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString($data.movie.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Title, null, {
            default: withCtx(() => [
              createTextVNode(toDisplayString($data.movie.title), 1)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  if ($data.loading) {
    _push(`<div class="flex h-screen w-full items-center justify-center">`);
    _push(ssrRenderComponent(_component_IconsLoading, null, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<div class="container single-movie">`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      class: "button",
      to: "/"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Back`);
        } else {
          return [
            createTextVNode("Back")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<div class="movie grid justify-center gap-10 grid-cols-[350px_minmax(800px,_1fr)_100px]"><div class="movie-img">`);
    if ($data.movie.poster_path !== null) {
      _push(`<img${ssrRenderAttr("src", `https://image.tmdb.org/t/p/w500${$data.movie.poster_path}`)} class="w-100">`);
    } else {
      _push(`<!---->`);
    }
    if ($data.movie.poster_path == null) {
      _push(`<img${ssrRenderAttr("src", _imports_0)} class="h-full w-full object-cover">`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="movie-content"><h2 class="vote text-xl mb-4"><span class="text-red-400 me-7">Rating: </span> <span class="underline text-3xl text-green-500">${ssrInterpolate($options.shortRate($data.movie.vote_average))}</span></h2><h1 class="text-3xl mb-4">Title: ${ssrInterpolate($data.movie.title)}</h1><p class="movie-fact tagline mb-2 flex gap-3"><span style="${ssrRenderStyle({ "min-width": "80px" })}" class="font-semibold text-green-600 me-2">Tagline: </span><span>${ssrInterpolate($data.movie.tagline)}</span></p><p class="movie-fact mb-2 flex gap-3"><span style="${ssrRenderStyle({ "min-width": "80px" })}" class="font-semibold text-green-600 me-2">Released:</span><span>${ssrInterpolate($options.formattedReleaseDate($data.movie.release_date))}</span></p><p class="movie-fact mb-2 flex gap-3"><span style="${ssrRenderStyle({ "min-width": "80px" })}" class="font-semibold text-green-600 me-2">Duration:</span><span>${ssrInterpolate($data.movie.runtime)} minutes</span></p><p class="movie-fact mb-2 flex gap-3"><span style="${ssrRenderStyle({ "min-width": "80px" })}" class="font-semibold text-green-600 me-2">Revenue:</span><span>${ssrInterpolate($options.toMillion($data.movie.revenue))} USD </span></p><p class="movie-fact mb-2 mt-5 flex gap-3"><span style="${ssrRenderStyle({ "min-width": "80px" })}" class="font-semibold text-green-600 me-2">Overview:</span><span>${ssrInterpolate($data.movie.overview)}</span></p></div></div></div>`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/movies/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id_ as default };
//# sourceMappingURL=_id_-a76ffc02.mjs.map
