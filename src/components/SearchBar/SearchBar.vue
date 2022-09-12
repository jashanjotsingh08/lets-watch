<template>
  <div class="search-bar">
    <form @submit.prevent="searchMovies()" class="search-box">
      <input
        type="text"
        placeholder="What are you looking for?"
        v-model="search"
      />
      <input type="submit" value="Search" />
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
// import axios from "axios";
// import env from "@/env.js";
import { getSearchResult } from "../../services/OmdbApi";
export default {
  emits: ["movieList"],
  setup(props, context) {
    const search = ref("");
    const movies = ref([]);

    const searchMovies = () => {
      if (search.value != "") {
        getSearchResult({ s: search.value }).then((response) => {
          if (response) {
            movies.value = response.data.Search;
            // eslint-disable-next-line no-undef
            context.emit("movieList", movies.value);
            search.value = "";
          }
        });
      }
    };

    return {
      search,
      movies,
      searchMovies,
    };
  },
};
</script>

<style lang="scss">
.search-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;

  input {
    display: block;
    appearance: none;
    border: none;
    outline: none;
    background: none;

    &[type="text"] {
      width: 100%;
      color: #fff;
      background-color: #496583;
      font-size: 20px;
      padding: 10px 16px;
      border-radius: 8px;
      margin-bottom: 15px;
      transition: 0.4s;

      &::placeholder {
        color: #f3f3f3;
      }

      &::focus {
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
      }
    }

    &[type="submit"] {
      width: 100%;
      max-width: 300px;
      background-color: #42b843;
      padding: 10px 16px;
      border-radius: 8px;
      color: #fff;
      font-size: 20px;
      text-transform: uppercase;
      transition: 0.4s;

      &:active {
        background-color: #3b8070;
      }
    }
  }
}
</style>
