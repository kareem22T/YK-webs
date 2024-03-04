<template>
    <div class="loading-page" style="height: 100vh !important;top: 0; left: 0; width: 100%;">
        <div class="after-before"></div>
        <div class="wrapper">
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
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