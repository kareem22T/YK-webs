<template>
    <div class="site-details">
    <nav class="top-nav">
      <div class="container">
        <ul>
          <li>
            <label class="ui-switch lang" @click.prevent="changeLang(); getHomeData(); setLangIconDir()">
              <input type="checkbox" :checked="lang == 'en'">
              <div class="slider">
                <div class="circle">
                  {{ lang == "en" ? "EN" : "ع" }}
                </div>
              </div>
            </label>
          </li>
          <li><a href="#home"><img src="../assets/img/logo.svg"></a></li>

          <li>
            <!-- <a href="" @click.prevent="changeTheme(); setIconDir()">
              <span :style='{ transform: "translateX(calc(" + iconDir + "% - 1px)) translateY(-50%)" }'>
                <i class='bx' :class='color == "dark" ? "bxs-moon" : "bxs-sun"'></i>
              </span>
            </a> -->
            <label class="ui-switch" @click.prevent="changeTheme(); setIconDir()">
              <input type="checkbox" :checked="color == 'light'">
              <div class="slider">
                <div class="circle"></div>
              </div>
            </label>

          </li>

        </ul>
      </div>
    </nav>

        <div class="container">
            <div class="head">
                <h1 class="title"><a href="/" class="back"><i class='bx bx-chevron-left'></i></a>PHAROTO</h1>
                <h3 class="sub-title">{{ home_data.home.pharoto_view.title }}</h3>
            </div>
            <div class="slide">
                <div class="img"><img src="../assets/img/pharoto/1.png" alt=""></div>
            </div>
            <div class="slide">
                <div class="img"><img src="../assets/img/pharoto/2.png" alt=""></div>
            </div>
            <div class="slide">
                <div class="img"><img src="../assets/img/pharoto/3.png" alt=""></div>
            </div>
            <div class="slide">
                <div class="img"><img src="../assets/img/pharoto/4.png" alt=""></div>
            </div>
            <div class="slide">
                <div class="img"><img src="../assets/img/pharoto/5.png" alt=""></div>
            </div>
            <div class="slide">
                <div class="img"><img src="../assets/img/pharoto/6.png" alt=""></div>
            </div>
            <div class="slide">
                <div class="img"><img src="../assets/img/pharoto/7.png" alt=""></div>
            </div>
            <div class="slide">
                <div class="img"><img src="../assets/img/pharoto/8.png" alt=""></div>
            </div>
            <div class="slide">
                <div class="img"><img src="../assets/img/pharoto/9.png" alt=""></div>
            </div>
            <div class="slide">
                <div class="img"><img src="../assets/img/pharoto/10.png" alt=""></div>
            </div>
            <div class="mobile-slide">
                <div class="imgs">
                    <img src="../assets/img/pharoto/13.png" alt="">
                    <img src="../assets/img/pharoto/11.png" alt="">
                    <img src="../assets/img/pharoto/12.png" alt="">
                </div>
            </div>
            <div class="btns">
                <a href="/dashboard-view"><i class='bx bxs-chevrons-left'></i> {{ home_data.home.web_view_btns.prev }}</a>
                <p><img src="./../assets/img/logo.svg" alt="" width="70"></p>
                <a href="https://www.egyptgamestore.com/">{{ home_data.home.web_view_btns.next }} <i class='bx bxs-chevrons-right'></i></a>
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

<style>
</style>