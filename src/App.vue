<template>
  <NavBar />
  <main>
    <router-view />
  </main>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue';

export default {
  components: { NavBar },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira Sans', sans-serif;

  &::selection {
    background: transparentize($color: #42b883, $amount: 0.5);
  }
}

body {
  background: #35495e;
}

a {
  text-decoration: none;
}
</style>
