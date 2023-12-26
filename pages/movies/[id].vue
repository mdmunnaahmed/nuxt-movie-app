<template>
  <div>
    <Head>
      <Title>{{ movie.title }}</Title>
    </Head>

    <div
      v-if="loading"
      class="flex h-screen w-full items-center justify-center"
    >
      <IconsLoading />
    </div>
    <div v-else class="container single-movie">
      <NuxtLink class="button" to="/">Back</NuxtLink>
      <div
        class="movie grid justify-center gap-10 grid-cols-[350px_minmax(800px,_1fr)_100px]"
      >
        <div class="movie-img">
          <img
            v-if="movie.poster_path !== null"
            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
            class="w-100"
          />
          <img
            v-if="movie.poster_path == null"
            src="../../assets/img/placeholder.jpg"
            class="h-full w-full object-cover"
          />
        </div>
        <div class="movie-content">
          <h2 class="vote text-xl mb-4"><span class="text-red-400 me-7">Rating: </span> <span class="underline text-3xl text-green-500">{{ shortRate(movie.vote_average) }}</span></h2>
          <h1 class="text-3xl mb-4">Title: {{ movie.title }}</h1>
          <p class="movie-fact tagline mb-2 flex gap-3">
            <span
              style="min-width: 80px"
              class="font-semibold text-green-600 me-2"
              >Tagline:
            </span>
            <span>{{ movie.tagline }}</span>
          </p>
          <p class="movie-fact mb-2 flex gap-3">
            <span
              style="min-width: 80px"
              class="font-semibold text-green-600 me-2"
              >Released:</span
            >
            <span>{{ formattedReleaseDate(movie.release_date) }}</span>
          </p>
          <p class="movie-fact mb-2 flex gap-3">
            <span
              style="min-width: 80px"
              class="font-semibold text-green-600 me-2"
              >Duration:</span
            >
            <span>{{ movie.runtime }} minutes</span>
          </p>
          <p class="movie-fact mb-2 flex gap-3">
            <span
              style="min-width: 80px"
              class="font-semibold text-green-600 me-2"
              >Revenue:</span
            >
            <span>{{ toMillion(movie.revenue) }} USD </span>
          </p>
          <p class="movie-fact mb-2 mt-5 flex gap-3">
            <span
              style="min-width: 80px"
              class="font-semibold text-green-600 me-2"
              >Overview:</span
            >
            <span>{{ movie.overview }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
      movie: [],
    };
  },
  methods: {
    async getSingleMovie() {
      this.loading = true;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const data = axios.get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=1b29b072cb172e51c0b5a3afa182ab29&language=en-US`
      );
      const result = await data;
      this.movie = result.data;
      this.loading = false;
    },
    formattedReleaseDate(date) {
      return new Date(date).toLocaleString("en-us", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    },
    shortRate(rate) {
      if(rate) {
        return rate.toFixed(1)
      }
    },
    toMillion(revenue) {
      if (revenue) {
        console.log(revenue.toString().length);
        if (revenue.toString().length <= 7) {
          return revenue;
        }
        if (revenue.toString().length > 7 && revenue.toString().length <= 9) {
          const million = revenue / 1000000;
          const million2 = million.toFixed(2);
          return `${million2} million`;
        }
        if (revenue.toString().length >= 10) {
          const billion = revenue / 1000000000;
          const billion2 = billion.toFixed(2);
          return `${billion2} billion`;
        }
      }
    },
  },
  mounted() {
    this.getSingleMovie();
  },
};
</script>


<style lang="scss">
.single-movie {
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 16px;

  .button {
    align-self: flex-start;
    margin-bottom: 32px;
  }

  .movie-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    color: #fff;
    @media (min-width: 800px) {
      flex-direction: row;
      align-items: flex-start;
    }
    .movie-img {
      img {
        max-height: 500px;
        width: 100%;

        @media (min-width: 800px) {
          max-height: 700px;
          width: initial;
        }
      }
    }

    .movie-content {
      h1 {
        font-size: 56px;
        font-weight: 400;
      }

      .movie-fact {
        margin-top: 12px;
        font-size: 20px;
        line-height: 1.5;

        span {
          font-weight: 600;
          text-decoration: underline;
        }
      }

      .tagline {
        font-style: italic;
        span {
          font-style: normal;
        }
      }
    }
  }
}
</style>