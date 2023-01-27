<template>
    <div class="loading-page">
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
            setTimeout(function () { $('.loading-page').fadeOut()}, 1500); 
        });
    },
}
</script>