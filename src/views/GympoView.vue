<template>
    <div class="site-details gympo-view">
        <nav class="top-nav">
            <div class="container">
                <ul>
                    <li>
                        <a id="changlang" @click="changeLang(); getHomeData(); setLangIconDir();">
                            <span class="lang-ch" :style='{ transform: "translateX(" + langIconDir + "%) translateY(-50%)" }'>{{
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
                <h1 class="title"><a href="/" class="back"><i class='bx bx-chevron-left'></i></a>GYMPO</h1>
                <h3 class="sub-title">gym site for booking</h3>
                <a class="try-link" href="https://gympo.vercel.app/" target="_blank">Try now</a>
            </div>
            <div class="slide">
                <div class="img"><img src="../assets/img/gympo/1.png" alt=""></div>
                <div class="text">
                    <div class="colors">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p>creative idea for shortcut menu according to each site</p>
                    
                    <p>call to action buttons to encourage customers to take action</p>
                </div>
            </div>
            <div class="slide">
                <div class="text">
                    <p>choose appropriate images with the overall theme</p>
                    <p>distinguished and unusual display division</p>
                    <p>contrast to show description</p>
                </div>
                <div class="img"><img src="../assets/img/gympo/2.png" alt=""></div>
            </div>
            <div class="slide">
                <div class="img"><img src="../assets/img/gympo/3.png" alt=""></div>
                <div class="text">
                    <p>attention to small details that may be of interest to the user, such as counting</p>
                    <p>clarify all the features of subscriptions to avoid questions</p>
                </div>
            </div>
            <div class="slide">
                <div class="text">
                    <p>linking social media accounts in the appropriate place on the site</p>
                </div>
                <div class="img"><img src="../assets/img/gympo/4.png" alt=""></div>
            </div>
            <div class="slide">
                <div class="img"><img src="../assets/img/gympo/5.png?v=1.2" alt=""></div>
                <div class="text">
                    <p>collect the most useful information from client to give him faster response</p>
                    <p>distinctive footer for each site</p>
                </div>
            </div>

            <div class="btns">
                <router-link to="/"><i class='bx bxs-chevrons-left'></i> Previous</router-link>
                <p>6/6</p>
                <router-link to="/">Next <i class='bx bxs-chevrons-right'></i></router-link>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

export default {
    name: 'GympoView',
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
            var formData = new FormData();
            formData.append('api_password', 'yk-mango@perfct.all');
            formData.append('lang', this.lang);

            axios.post('http://localhost:8080/api/get-home-data', formData, {
                headers: {
                }
            }).then((res) => (
                this.home_data = res.data
            )).catch(err => {
                console.log(err.response);
            });
            $('section, footer').css('opacity', '0')
            setTimeout(function () { $('section, footer').css('opacity', '1') }, 500);
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