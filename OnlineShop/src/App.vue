<template>
  <v-app id="app">
    <DefaultLayout></DefaultLayout>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script setup>
   import { RouterLink, RouterView } from 'vue-router'
   import DefaultLayout from './layouts/DefaultLayout.Vue';
  import HomeView from './views/HomeView.vue';
</script>

<style scoped>

</style>
 
