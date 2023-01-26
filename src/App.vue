<template>
  <div>
    <router-view />
  </div>
</template>

<style>
@import '../src/assets/css/main.css';
</style>

<script>

export default {
  data() {
    return {
      lang: sessionStorage.getItem("lang"),
    }
  }
}
</script>
