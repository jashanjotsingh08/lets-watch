<template>
  <v-footer dark padless>
    <v-card flat tile class="indigo lighten-1 white--text text-center">
      <v-card-text>
        <!-- <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn> -->
      </v-card-text>

      <v-card-text class="white--text pt-0">
        LetsWatch.com is a Free Movies streaming site with zero ads. We let you
        watch movies online without having to register or paying, with over
        10000 movies and TV-Series. You can also Download full movies from
        LetsWatch.com and watch it later if you want.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        Copyright &copy; {{ new Date().getFullYear() }} All Rights Reserved by
        <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
