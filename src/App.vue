<template>
  <div class="all">
    <v-app>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  @import './assets/scss/all.scss';
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
</style>