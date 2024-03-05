<template>
    <div class="loading-page" style="height: 100vh !important;top: 0; left: 0; width: 100%;">
        <div class="after-before"></div>
        <div class="loader">
  <div class="cell d-0"></div>
  <div class="cell d-1"></div>
  <div class="cell d-2"></div>

  <div class="cell d-1"></div>
  <div class="cell d-2"></div>
  
  
  <div class="cell d-2"></div>
  <div class="cell d-3"></div>
  
  
  <div class="cell d-3"></div>
  <div class="cell d-4"></div>
  
  
</div>
</div>
</template>

<script>
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

export default {
    name: 'LoadingScreen',
    mounted() {
        $(window).on("load", function () {
            setTimeout(function () { $('.loading-page').fadeOut()}, 700); 
            setTimeout(function () { $('.loading-page').remove()}, 900); 
        });
    },
}
</script>