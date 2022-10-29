<template>
  <div class="home">
    <FeatureCard v-show="false" />
    <SearchBar @movieList="getMovieList($event)" />

    <div class="movie-list">
      <MovieCard v-for="movie in list" :key="movie.imdbID" :movie="movie" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";
import FeatureCard from "@/components/FeatureCard/FeatureCard.vue";
import SearchBar from "@/components/SearchBar/SearchBar.vue";
import MovieCard from "@/components/MovieCard/MovieCard.vue";

export default {
  setup() {
    const list = ref([]);
    const getMovieList = (movies) => {
      list.value = movies;
    };
    return {
      list,
      getMovieList,
    };
  },
  components: { FeatureCard, SearchBar, MovieCard },
};
</script>
<style type="scss">
.movie-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0px 8px;
}
</style>
