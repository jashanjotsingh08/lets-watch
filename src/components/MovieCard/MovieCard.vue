<template>
  <div class="movie-card">
    <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
      <div class="card-image">
        <img :src="movie.Poster" alt="Movie Poster" />
        <div class="type">{{ movie.Type }}</div>
      </div>
      <div class="card-detail">
        <p class="year">{{ movie.Year }}</p>
        <h3>{{ movie.Title }}</h3>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ['movie'],
};
</script>
<style lang="scss">
.movie-card {
  max-width: 20vw;
  flex: 1 1 20%;
  padding: 16px 8px;

  .movie-link {
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: 8px 8px;

    .card-image {
      position: relative;
      display: block;

      img {
        display: block;
        // widows: 100%;
        width: 100%;
        height: 275px;
        object-fit: cover;
      }
      .type {
        position: absolute;
        padding: 8px 16px;
        background-color: #42b883;
        color: #fff;
        bottom: 16px;
        left: 0px;
        text-transform: capitalize;
      }
    }

    .card-detail {
      background-color: #496583;
      padding: 16px 8px;
      flex: 1 1 100%;
      border-radius: 0px 0px 8px 8px;

      .year {
        color: #aaa;
        font-size: 14px;
      }

      h3 {
        color: #fff;
        font-weight: 600;
        font-size: 18px;
      }
    }
  }
}
</style>
