<template>
  <div class="movie">
    <div class="movie-img h-full">
      <img
        v-if="poster_path !== null"
        :src="`https://image.tmdb.org/t/p/w500${poster_path}`"
        :alt="`${poster_path}`"
      />
      <img
        v-if="poster_path == null"
        src="../../assets/img/placeholder.jpg"
        class="h-full w-full object-cover"
      />
      <div class="review">{{ vote_average }}</div>
      <div class="overview">{{ overview }}</div>
    </div>
    <div class="info">
      <p class="title">
        {{ title }}
        <!-- <span v-if="movie.title.length > 25"> . . .</span> -->
      </p>
      <p class="release">
        Released:
        <!-- {{ releaseDate(release_date) }} -->
      </p>
      <NuxtLink
        :to="{
          path: 'movies/' + id,
          params: { movieid: id },
        }"
        class="button button-light"
        >Get More Info</NuxtLink
      >
    </div>
  </div>
</template>

<script>
props: [
  "id",
  "poster_path",
  "vote_average",
  "overview",
  "title",
  "release_date",
];
export default {
  computed: {
    releaseDate(date) {
      return new Date(date).toLocaleString("en-us", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    },
  },
};
</script>