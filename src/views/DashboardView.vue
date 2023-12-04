<template>
    <div class="site-details dashboard-view">
        <nav class="top-nav">
            <div class="container">
                <ul>
                    <li>
                        <a id="changlang" @click="changeLang(); getHomeData(); setLangIconDir();">
                            <span class="lang-ch"
                                :style='{ transform: "translateX(" + langIconDir + "%) translateY(-50%)" }'>{{
                                lang == 'en' ? lang : 'ع' }}</span>
                        </a>
                    </li>
                    <li><a href="/"><img src="../assets/img/logo.svg"></a></li>

                    <li>
                        <a href="" @click.prevent="changeTheme(); setIconDir()">
                            <span :style='{ transform: "translateX(calc(" + iconDir + "% - 1px)) translateY(-50%)" }'>
                                <i class='bx' :class='color == "dark" ? "bxs-moon" : "bxs-sun"'></i>
                            </span>
                        </a>
                    </li>

                </ul>
            </div>
        </nav>

        <div class="container">
            <div class="head">
                <h1 class="title"><a href="/" class="back"><i class='bx bx-chevron-left'></i></a>Dashboard</h1>
                <h3 class="sub-title">{{ home_data.home.dashboard_view.title }}</h3>
            </div>
            <div class="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/aCnr200pSAQ?autoplay=1&mute=1" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
                <ul>
                    <li>{{ home_data.home.dashboard_view.video1_li1 }}</li>
                    <li>{{ home_data.home.dashboard_view.video1_li2 }}</li>
                </ul>
            </div>
            <div class="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/4kbR6n-IwU8?autoplay=1&mute=1" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
                <ul>
                    <li>{{ home_data.home.dashboard_view.video2_li1 }}</li>
                    <li>{{ home_data.home.dashboard_view.video2_li2 }}</li>
                </ul>
            </div>
            <div class="slide">
                <div class="img"><img src="../assets/img/dashboard/1.png" alt=""></div>
                <div class="text">
                    <div class="colors">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p>{{ home_data.home.dashboard_view.slide1_p1 }}</p>
                </div>
            </div>
            <div class="slide">
                <div class="text">
                    <p>{{ home_data.home.dashboard_view.slide2_p1 }}</p>
                </div>
                <div class="img"><img src="../assets/img/dashboard/2.png" alt=""></div>
            </div>
            <div class="slide">
                <div class="img"><img src="../assets/img/dashboard/3.png" alt=""></div>
                <div class="text">
                    <p>{{ home_data.home.dashboard_view.slide3_p1 }}</p>
                </div>
            </div>
            <div class="slide">
                <div class="text">
                    <p>{{ home_data.home.dashboard_view.slide4_p1 }}</p>
                </div>
                <div class="img"><img src="../assets/img/dashboard/4.png" alt=""></div>
            </div>
            <div class="slide">
                <div class="img"><img src="../assets/img/dashboard/5.png" alt=""></div> 
                <div class="text">
                    <p>{{ home_data.home.dashboard_view.slide5_p1 }}</p>
                </div>
            </div>
            <div class="slide">
                <div class="text">
                    <p>{{ home_data.home.dashboard_view.slide6_p1 }}</p>
                </div>
                <div class="img"><img src="../assets/img/dashboard/6.png" alt=""></div>
            </div>

            <div class="btns">
                <a href="https://onmywaytherapy.com.au/"><i class='bx bxs-chevrons-left'></i> {{
                    home_data.home.web_view_btns.prev
                }}</a>
                <p><img src="./../assets/img/logo.svg" alt="" width="70"></p>
                <a href="/pharoto-view">{{ home_data.home.web_view_btns.next }} <i
                        class='bx bxs-chevrons-right'></i></a>
            </div>
        </div>

    </div>
</template>

<script>
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

export default {
    name: 'DashboardView',
    data() {
        return {
            color: 'dark',
            searchParams: new URLSearchParams(window.location.search),
            lang: 'en',
            home_data: null,
            iconDir: 92,
            langIconDir: 90,
            is_cookies: -1,
        }
    },
    methods: {

        changeTheme() {

            let themeCheck = document.cookie.indexOf('theme')

            this.color = this.color == 'dark' ? 'light' : 'dark';
            document.body.classList.add(this.color)
            document.body.classList.remove(this.color == 'dark' ? 'light' : 'dark')

            if (themeCheck !== -1)
                document.cookie = "theme=" + this.color + "; max-age=" + 60 * 60 * 24 * 30;

            sessionStorage.setItem("theme", this.color);

        }, changeLang() {
            let langCheck = document.cookie.indexOf('lang')

            this.lang = this.lang == 'ar' ? 'en' : 'ar';
            document.body.classList.add(this.lang)
            document.body.classList.remove(this.lang == 'ar' ? 'en' : 'ar')

            if (langCheck !== -1)
                document.cookie = "lang=" + this.lang + "; max-age=" + 60 * 60 * 24 * 30;

            sessionStorage.setItem("lang", this.lang);
            var searchParams = new URLSearchParams(window.location.search);
            if (searchParams.has('lang')) {
                window.location.href = "/";
            }

        }, acceptCookies() {
            document.cookie = "theme=" + this.color + "; max-age=" + 60 * 60 * 24 * 30;
            document.cookie = "lang=" + this.lang + "; max-age=" + 60 * 60 * 24 * 30;
            let langCheck = document.cookie.indexOf('lang')
            this.is_cookies = langCheck
            // document.cookie = "theme=; max-age=" + -60 * 60 * 24 * 30;
            // document.cookie = "lang=; max-age=" + -60 * 60 * 24 * 30;
        }, getHomeData() {
            // var formData = new FormData();
            // formData.append('api_password', 'yk-mango@perfct.all');
            // formData.append('lang', this.lang);

            // axios.post('http://localhost:8080/api/get-home-data', formData, {
            //     headers: {
            //     }
            // }).then((res) => (
            //     this.home_data = res.data
            // )).catch(err => {
            //     console.log(err.response);
            // });

            let data = require('../assets/api/get-data.json');
            this.home_data = this.lang == 'ar' ? data.ar : data.en

            $('section, footer, .slide, .head').css('opacity', '0')
            setTimeout(function () { $('section, footer, .slide, .head').css('opacity', '1') }, 500);
        }, setLangThemeCookies() {
            let themeCheck = document.cookie.indexOf('theme')
            let langCheck = document.cookie.indexOf('lang')

            this.is_cookies = langCheck

            function getCookie(cname) {
                let name = cname + "=";
                let decodedCookie = decodeURIComponent(document.cookie);
                let ca = decodedCookie.split(';');
                for (let i = 0; i < ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            } // to get an cookie by name ##############################

            if (themeCheck !== -1)
                this.color = getCookie('theme') // check theme cookie exist ##############################

            if (langCheck !== -1) {
                this.lang = getCookie('lang') // check lang cookie exist ##############################
            }

            if (sessionStorage.getItem("theme"))
                this.color = sessionStorage.getItem("theme") // check theme session exist ##############################

            if (sessionStorage.getItem("lang"))
                this.lang = sessionStorage.getItem("lang") // check lang session exist ##############################

            document.body.classList.add(this.color) // add theme class ##############################

            sessionStorage.setItem("theme", this.color); // set theme session ##############################
            sessionStorage.setItem("lang", this.lang); // set lang session ##############################

            let searchParams = new URLSearchParams(window.location.search)
            if (searchParams.has('lang')) {
                this.lang = searchParams.get('lang')
                document.body.classList.add(searchParams.get('lang')) // add lang class ##############################
            } else {
                document.body.classList.add(this.lang) // add lang class ##############################
            }

        }, setIconDir() {
            this.iconDir = this.color == "dark" ? 0 : 92
        }, setLangIconDir() {
            this.langIconDir = this.lang == "en" ? 90 : 0
        }, closeCookiePopup() {
            $('.accept-cookies').fadeOut('fast')
        }

    }, created() {
        this.setLangThemeCookies()
        this.getHomeData()
        this.setIconDir()
        this.setLangIconDir()
    }, mounted() {
    },
}
</script>

<style>

</style>