<template>
  <div class="home">
    <Hero />

    <!-- Search -->
    <div class="container search">
      <input
        type="text"
        placeholder="Search..."
        v-model.lazy="searchInput"
        @keyup.enter="searchMovie"
        @blur="searchMovie"
      />
      <button @click="clearSearch" v-show="searchInput !== ''" class="button">
        Clear Search
      </button>
    </div>
    <!-- Search -->

    <div class="container movies">
      <div v-if="loading" class="flex justify-center mt-5">
        <iconsLoading />
      </div>
      <div v-else id="movie-grid" class="movies-grid">
        <div class="movie" v-for="(movie, index) in movies" :key="index">
          <div class="movie-img h-full">
            <img
              v-if="movie.poster_path !== null"
              :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
              :alt="`${movie.poster_path}`"
            />
            <img
              v-if="movie.poster_path == null"
              src="../assets/img/placeholder.jpg"
              class="h-full w-full object-cover"
            />
            <div class="review">{{ movie.vote_average }}</div>
            <div class="overview">{{ movie.overview }}</div>
          </div>
          <div class="info">
            <p class="title">
              {{ movie.title }}
              <!-- <span v-if="movie.title.length > 25"> . . .</span> -->
            </p>
            <p class="release">
              Released:
              {{ formattedReleaseDate(movie.release_date) }}
            </p>
            <NuxtLink
              :to="{
                path: 'movies/' + movie.id,
                params: { movieid: movie.id },
              }"
              class="button button-light"
              >Get More Info</NuxtLink
            >
          </div>
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
      movies: [],
      searchInput: "",
      loading: false,
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
        year: "numeric",
      });

      // const allDate = date.split("-");
      // return allDate[2] + "-" + allDate[1] + "-" + allDate[0];
    },
  },
  computed: {},
  mounted() {
    this.getMovies();
  },
};
</script>


<style lang="scss" scoped>
.home {
  .loading {
    padding-top: 120px;
    align-items: flex-start;
  }

  .search {
    display: flex;
    padding: 32px 16px;
    color: darkblue;

    input {
      max-width: 350px;
      width: 100%;
      padding: 12px 6px;
      font-size: 14px;
      border: none;

      &:focus {
        outline: none;
      }
    }

    .button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  .movies {
    padding: 32px 16px;
    .movies-grid {
      display: grid;
      column-gap: 32px;
      row-gap: 64px;
      grid-template-columns: 1fr;
      @media (min-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 750px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 1100px) {
        grid-template-columns: repeat(4, 1fr);
      }

      .movie {
        position: relative;
        display: flex;
        flex-direction: column;

        .movie-img {
          position: relative;
          overflow: hidden;

          &:hover {
            .overview {
              transform: translateY(0);
            }
          }

          img {
            display: block;
            width: 100%;
            height: 100%;
          }

          .review {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            background-color: #c92502;
            color: #fff;
            border-radius: 0 0 16px 0;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }

          .overview {
            line-height: 1.5;
            position: absolute;
            bottom: 0;
            background-color: rgba(201, 38, 2, 0.9);
            padding: 12px;
            color: #fff;
            transform: translateY(100%);
            transition: 0.3s ease-in-out all;
          }
        }

        .info {
          margin-top: auto;
          .title {
            margin-top: 8px;
            color: #fff;
            font-size: 20px;
          }

          .release {
            margin-top: 8px;
            color: #c9c9c9;
          }

          .button {
            margin-top: 8px;
          }
        }
      }
    }
  }
}
</style>