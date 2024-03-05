<template>
    <div>
        <a href="" @click.prevent class="open-nav">
            <i class='bx bx-expand'></i>
        </a>
        <nav class="nav-side">
            <a href="" @click.prevent class="cloase"><i class='bx bx-exit-fullscreen'></i></a>
            <ul>
                <li class="active hero-link"><a href="#hero"><img src="../assets/img/nav/1.png" alt=""></a></li>
                <li class="latest-sec-link"><a href="#latest"><img src="../assets/img/nav/3.png" alt=""></a></li>
                <li class="deal-link"><a href="#contact"><img src="../assets/img/nav/5.png" alt=""></a></li>
                <li class="why-link"><a href="#why-us"><img src="../assets/img/nav/4.png" alt=""></a></li>
                <li class="footer-link" style="display: none;"><img src="../assets/img/nav/5.png" alt=""></li>
            </ul>
        </nav>
    </div>
</template>

<style>
@import '../assets/css/main.css';
</style>

<script>
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

export default {
    data() {
        return {
            lang: sessionStorage.getItem("lang"),
        }
    },
    mounted() {
        $(function () {
            // var lastScrollTop = 0;
            $(window).on('scroll onload', function () {
                let links = ['hero', 'latest-sec', 'why', 'deal', 'footer'];
                for (let i = 0; i < links.length; i++) {
                    if ($(this).scrollTop() >= $('#' + links[i]).offset().top - $(window).height() / 2) {
                        $('.' + links[i] + '-link').addClass('active')
                        $('.' + links[i] + '-link').siblings().removeClass('active')
                        $('#' + links[i]).addClass('animate__animated')
                    } else if ($(this).scrollTop().prev >= $('#' + links[i]).offset().top - $(window).height() / 2) {                        $('.' + links[i] + '-link').addClass('active')
                        $('.' + links[i] + '-link').prev.addClass('active')
                        $('.' + links[i] + '-link').prev.siblings().removeClass('active')
                    }
                }
                // console.log('fasf');
                // var st = $(this).scrollTop();
                // if (st > lastScrollTop){
                //     // scrolling down
                //     $(".floating-m > *, .floating > *").css("transform", "translatey(-100px)")
                // } else {
                //     // scrolling up
                //     $(".floating-m > *, .floating > *").css("transform", "translatey(100px)")
                // }
                // lastScrollTop = st <= 0 ? 0 : st;

            });

            $('.cloase').on('click', function () {
                $('.nav-side').addClass('cloased')
                $('.open-nav').css('display', 'flex')
            })
            $('.open-nav').on('click', function () {
                $('.nav-side').removeClass('cloased')
                $('.open-nav').fadeOut('fast')
            })

        })
    },
}
</script>
