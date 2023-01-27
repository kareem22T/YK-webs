<template>
  <div>
    <loading-screen></loading-screen>
    <router-view />
  </div>
</template>

<style>
@import '../src/assets/css/main.css';
</style>

<script>
import LoadingScreen from "./components/LoadingScreen.vue";

export default {
  data() {
    return {
      lang: sessionStorage.getItem("lang"),
    }
  }, components: {
    LoadingScreen,
  }
}
</script>
