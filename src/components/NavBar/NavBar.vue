<template>
  <nav class="navbar">
    <div class="navbar-header">
      <router-link to="/">
        <div class="navbar-title"><span>Lets</span>Watch</div>
      </router-link>
    </div>

    <div class="navbar-links">
      <ul>
        <li><a href="#">Movies</a></li>
        <li><a href="#">TV Shows</a></li>
        <li><a href="#">Top IMDB</a></li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style lang="scss">
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background-color: #2c3d4e;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);

  .navbar-header {
    .navbar-title {
      color: #fff;
      font-size: 28px;
      padding: 10px 16px 10px 16px;
      span {
        color: #42b883;
      }
    }
  }

  .navbar-links {
    ul {
      list-style: none;
      position: relative;
      padding: 0;

      li {
        display: inline-block;

        a {
          color: #fff;
          font-size: 18px;
          display: block;
          padding: 0px 10px;
          text-decoration: none;
        }
      }
      li:hover {
        border-radius: 4px;
        a {
          color: #42b883;
        }
      }
    }
  }
}
</style>
