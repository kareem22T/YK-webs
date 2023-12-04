<template>
    <div class="site-details fentec_wrapper">
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
                <h1 class="title"><a href="/" class="back"><i class='bx bx-chevron-left'></i></a>Fentec</h1>
                <h3 class="sub-title">{{ home_data.home.fentec_view.title }}</h3>
                <div class="sub-title" style="
                background: rgba(255, 255, 255, 0.2);
                box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.25);
                border-radius: 30px;
                padding: 2rem 1rem;
                width: 250px;
                height: 250px;
                margin-top: 20px;
                "><img src="../assets/img/on_going/fentec_logo.png" style="width: 100%;height: 100%; object-fit: contain" alt=""></div>
                <h3 class="sub-title" style="margin-top: 20px">{{ home_data.home.fentec_view.title_2 }}</h3>
            </div>
            <div class="componets">
                <div>
                    <div class="img">
                        <img src="../assets/img/fentec/component-1.png" alt="">
                    </div>
                    <div class="text">
                        {{ home_data.home.fentec_view.component1_1 }} <br>
                        {{ home_data.home.fentec_view.component1_2 }}
                    </div>
                </div>
                <div>
                    <div class="img">
                        <img src="../assets/img/fentec/component-2.png" alt="">
                    </div>
                    <div class="text">
                        {{ home_data.home.fentec_view.component2_1 }} <br>
                        {{ home_data.home.fentec_view.component2_2 }}
                    </div>
                </div>
                <div>
                    <div class="img">
                        <img src="../assets/img/fentec/component-3.png" alt="">
                    </div>
                    <div class="text">
                        {{ home_data.home.fentec_view.component3_1 }} <br>
                        {{ home_data.home.fentec_view.component3_2 }}
                    </div>
                </div>
                <div>
                    <div class="img">
                        <img src="../assets/img/fentec/component-4.png" alt="">
                    </div>
                    <div class="text">
                        {{ home_data.home.fentec_view.component4_1 }} <br>
                        {{ home_data.home.fentec_view.component4_2 }}
                    </div>
                </div>
            </div>
            <div class="slide app">
                <img src="../assets/img/fentec/1.png" alt="">
                <img src="../assets/img/fentec/2.png" alt="">
                <img src="../assets/img/fentec/3.png" alt="">
            </div>
            <div class="slide">
                <img src="../assets/img/fentec/4.png" alt="">
            </div>
            <div class="slide app">
                <img src="../assets/img/fentec/5.png" alt="">
                <img src="../assets/img/fentec/6.png" alt="">
                <img src="../assets/img/fentec/7.png" alt="">
            </div>
            <div class="slide">
                <img src="../assets/img/fentec/8.png" alt="">
            </div>
            <div class="btns">
                <a href="https://onmywaytherapy.com.au/" target="_blanck" style="text-align: right;background: rgba(41, 149, 242, 1);width: 250px"><i class='bx bxs-chevrons-left'></i> {{ home_data.home.web_view_btns.other_project }}</a>
                <p><img src="./../assets/img/logo.svg" alt="" width="70"></p>
                <a href="/#latest" style="background: rgba(41, 149, 242, 1);width: 250px;text-align: left;">{{ home_data.home.web_view_btns.latest }} <i
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
    name: 'PharotoView',
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

<style></style>