<template>
  <div class="home" id="home">

    <side-nav></side-nav>

    <div class="accept-cookies" :style="{ display: is_cookies == -1 ? 'block' : 'none' }">
      <i @click="closeCookiePopup()" class='bx bx-x'></i>
      <div class="container">
        <img src="../assets/img/accept.svg" alt="">
        <div class="text">
          <h1>{{ home_data.home.cookies.title }}</h1>
          <p>{{ home_data.home.cookies.content }}</p>
          <button @click="acceptCookies();">{{ home_data.home.cookies.btn }}</button>
        </div>
      </div>
    </div>

    <nav class="top-nav">
      <div class="container">
        <ul>
          <li>
            <a id="changlang" @click="changeLang(); getHomeData(); setLangIconDir();">
              <span class="lang-ch" :style='{ transform: "translateX(" + langIconDir + "%) translateY(-50%)" }'>{{ lang == 'en' ? lang : 'ع' }}</span>
            </a>
          </li>
          <li><a href="#home"><img src="../assets/img/logo.svg"></a></li>

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

    <section class="space"></section>

    <section class="hero" id="hero">
      <div class="after-before"></div>
      <div class="container">
        <div class="text">
          <h1>{{ home_data.home.hero.title }}</h1>
          <div class="btns">
            <a href="#latest">{{ home_data.home.hero.latest_btn }}</a>
            <a href="#contact">{{ home_data.home.hero.contact_btn }}</a>
          </div>
        </div>
        <div class="img">
          <img src="../assets/img/hero-img.png" alt="">
        </div>
      </div>
    </section>

    <section class="trusted_by">
      <div class="after-before"></div>
      <div class="container">
        <h1 class="section-head">
          {{ home_data.home.trusted_by.title }}
        </h1>

        <div class="companies">
          <div>
            <div class="img">
              <img src="../assets/img/companies/company-1.png" alt="">
            </div>
            <h1>on my way therapy</h1>
            <img src="../assets/img/flags/au.png" alt="">
            <div class="bg"></div>
          </div>
          <div>
            <div class="img">
              <img src="../assets/img/companies/company-2.png" alt="">
            </div>
            <h1>Cross care</h1>
            <img src="../assets/img/flags/au.png" alt="">
            <div class="bg"></div>
          </div>
          <div>
            <div class="img">
              <img src="../assets/img/companies/company-3.png" alt="">
            </div>
            <h1>Aspire Egypt</h1>
              <img src="../assets/img/flags/sa.png" alt="">
            <div class="bg"></div>
          </div>
          <div>
            <div class="img">
              <img src="../assets/img/companies/company-4.png" alt="">
            </div>
            <h1>Cyrus Technology</h1>
            <img src="../assets/img/flags/eg.png" alt="">
            <div class="bg"></div>
          </div>
        </div>

      </div>
    </section>
      <div id="looking-for"></div>

    <section class="looking_for" id="looking">
      <div class="after-before"></div>
      <div class="container">
        <h1 class="section-head">
          {{ home_data.home.looking_for.title }}
        </h1>

        <div>
          <div class="card_1">
            <div class="img">
              <img src="../assets/img/looking_for/1.png" alt="">
            </div>
            {{ home_data.home.looking_for.card_1 }}
          </div>
          <div class="card_2">
            <div class="img">
              <img src="../assets/img/looking_for/2.png" alt="">
            </div>
            {{ home_data.home.looking_for.card_2 }}
          </div>

          <div class="img">
            <img src="../assets/img/looking_for/main.png" alt="">
          </div>

          <div class="card_3">
            <div class="img">
              <img src="../assets/img/looking_for/3.png" alt="">
            </div>
            {{ home_data.home.looking_for.card_3 }}
          </div>
          <div class="card_4">
            <div class="img">
              <img src="../assets/img/looking_for/4.png" alt="">
            </div>
            {{ home_data.home.looking_for.card_4 }}
          </div>
        </div>

        <swiper :slidesPerView="1" :spaceBetween="40" 
          :pagination="{
            clickable: true,
          }" :modules="modules" class="looking-for-slider">

          <swiper-slide class="card_1">
            <div class="img">
              <img src="../assets/img/looking_for/1.png" alt="">
            </div>
            {{ home_data.home.looking_for.card_1 }}
          </swiper-slide>
          <swiper-slide class="card_2">
            <div class="img">
              <img src="../assets/img/looking_for/2.png" alt="">
            </div>
            {{ home_data.home.looking_for.card_2 }}
          </swiper-slide>
          <swiper-slide class="card_3">
            <div class="img">
              <img src="../assets/img/looking_for/3.png" alt="">
            </div>
            {{ home_data.home.looking_for.card_3 }}
          </swiper-slide>
          <swiper-slide class="card_4">
            <div class="img">
              <img src="../assets/img/looking_for/4.png" alt="">
            </div>
            {{ home_data.home.looking_for.card_4 }}
          </swiper-slide>
        </swiper>

      </div>
    </section>

    <div id="latest"></div>

    <section class="latest" id="latest-sec">
      <div class="after-before"></div>
      <h1 class="section-head">
        {{ home_data.home.latest.title }}
      </h1>
      <div class="container">
          <swiper 
            :slidesPerView="1" 
            :spaceBetween="40"
            :breakpoints="{
              '550': {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              '900': {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }"

            :navigation="true" 
            :pagination="{
              clickable: true,
            }" :modules="modules" class="latest-slider">
              <swiper-slide>
                <div class="img">
                  <img src="../assets/img/our-work/gympo.gif" alt="">
                </div>
                <h1>GYMPO</h1>
                <p>{{ home_data.home.latest.gympo }}</p>
                <a href="/gympo-view" >{{ home_data.home.latest.btn }}</a>
              </swiper-slide>
              <swiper-slide>
                <div class="img">
                  <img src="../assets/img/our-work/dashboard.gif" alt="">
                </div>
                <h1>Dashboard</h1>
                <p>{{ home_data.home.latest.dashboard }}</p>
                <a href="/dashboard-view" >{{ home_data.home.latest.btn }}</a>
              </swiper-slide>
              <swiper-slide>
                <div class="img">
                  <img src="../assets/img/our-work/off.gif" alt="">
                </div>
                <h1>%FF</h1>
                <p>{{ home_data.home.latest.off }}</p>
                <a href="/off-view" >{{ home_data.home.latest.btn }}</a>
              </swiper-slide>
              <swiper-slide>
                <div class="img">
                  <img src="../assets/img/our-work/pharoto.gif" alt="">
                </div>
                <h1>Pharoto</h1>
                <p>{{ home_data.home.latest.pharoto }}</p>
                <a href="/pharoto-view">{{ home_data.home.latest.btn }}</a>
              </swiper-slide>
              <swiper-slide>
                <div class="img">
                  <img src="../assets/img/our-work/mammoth.gif" alt="">
                </div>
                <h1>Mammoth</h1>
                <p>{{ home_data.home.latest.mammoth }}</p>
                <a href="/mammoth-view" >{{ home_data.home.latest.btn }}</a>
              </swiper-slide>
          </swiper>
      </div>
    </section>

    <div id="why-us"></div>

    <section class="why-us" id="why">
      <div class="after-before"></div>
      <h1 class="section-head">
        {{ home_data.home.why_us.title }}
      </h1>

      <div class="container">
        <div>
          <div class="img">
            <img src="../assets/img/why_us/0.png" alt="">
          </div>
          <h4>{{ home_data.home.why_us.cards[0] }}</h4>
        </div>

        <div>
          <div class="img">
            <img src="../assets/img/why_us/1.png" alt="">
          </div>
          <h4>{{ home_data.home.why_us.cards[1] }}</h4>
        </div>

        <div>
          <div class="img">
            <img src="../assets/img/why_us/2.png" alt="">
          </div>
          <h4>{{ home_data.home.why_us.cards[2] }}</h4>
        </div>

        <div>
          <div class="img">
            <img src="../assets/img/why_us/3.png" alt="">
          </div>
          <h4>{{ home_data.home.why_us.cards[3] }}</h4>
        </div>

        <div>
          <div class="img">
            <img src="../assets/img/why_us/4.png" alt="">
          </div>
          <h4>{{ home_data.home.why_us.cards[4] }}</h4>
        </div>

        <div>
          <div class="img">
            <img src="../assets/img/why_us/5.png" alt="">
          </div>
          <h4>{{ home_data.home.why_us.cards[5] }}</h4>
        </div>

        <div>
          <div class="img">
            <img src="../assets/img/why_us/6.png" alt="">
          </div>
          <h4>{{ home_data.home.why_us.cards[6] }}</h4>
        </div>

        <div>
          <div class="img">
            <img src="../assets/img/why_us/7.png" style="transform: rotate(24deg) scale(1.1);" alt="">
          </div>
          <h4>{{ home_data.home.why_us.cards[7] }}</h4>
        </div>
      </div>
    </section>

    <div id="contact"></div>

    <section class="lets-do-it" id="deal">
      <div class="after-before"></div>
      <div class="container">
        <h1 class="section-head">{{ home_data.home.lets_do_it.title }}</h1>
        <h3>{{ home_data.home.lets_do_it.sub_title }}</h3>
        <img src="../assets/img/lets-do.png" alt="lets-do-it">
        <div class="btns">
          <a 
          :href="
          lang == 'en' ? 
          'https://api.whatsapp.com/send?phone=201211732480&text=Hi%20YK%2C%20%F0%9F%91%8B%20i%20want%20to%20create%20my%20own%20website%20%F0%9F%A4%A9' :
          'https://api.whatsapp.com/send?phone=201211732480&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%F0%9F%91%8B%2C%20%D8%A7%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%86%D8%B4%D8%A7%D8%A1%20%D9%85%D9%88%D9%82%D8%B9%D9%8A%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%20%F0%9F%A4%A9'"
          target="_blank">
            <i class='bx bxl-whatsapp'></i>
          </a>
          <a href="https://www.facebook.com/messages/t/114476311514915" target="_blank">
            <i class='bx bxl-messenger'></i>
          </a>
          <a href="https://t.me/Youssef_Fouad_22" target="_blank"><i class='bx bxl-telegram'></i></a>
        </div>
      </div>
    </section>

    <footer id='footer'>
      <div class="after-before"></div>
      <h1 class="section-head">
        YK
      </h1>
      <div class="container">
        <div class="yk">
          <div class="joo">
            <div class="text">
              <h1>{{ home_data.home.footer.youssef_name }}</h1>
              <h3>{{ home_data.home.footer.youssef_title }}</h3>
            </div>
            <div class="vector">
              <img src="../assets/img/y.png" alt="designer">
              <div class="profile">
                <img src="../assets/img/youssef.jpeg" alt="youssef">
              </div>
            </div>
          </div>
          <div class="kimo">
            <div class="vector">
              <img src="../assets/img/k.png" alt="developer">
              <div class="profile">
                <img src="../assets/img/karim.png" alt="karim">
              </div>
            </div>
            <div class="text">
              <h1>{{ home_data.home.footer.kareem_name }}</h1>
              <h3>{{ home_data.home.footer.kareem_title }}</h3>
            </div>
          </div>
        </div>
        <h1>{{ home_data.home.footer.title }}</h1>
        <h3>
          {{ home_data.home.footer.sub_title }}
          <img src="../assets/img/footer.png" alt="">
        </h3>
      </div>
      <div class="links">
        <div class="img">
          <img src="../assets/img/dribbble.png" alt="here its">
          <ul>
            <a href="https://www.facebook.com/YKwebsitebuilders/" target="_blank"><li><i class='bx bxl-facebook'></i></li></a>
            <a :href="
            lang == 'en' ? 
            'https://api.whatsapp.com/send?phone=201211732480&text=Hi%20YK%2C%20%F0%9F%91%8B%20i%20want%20to%20create%20my%20own%20website%20%F0%9F%A4%A9' :
            'https://api.whatsapp.com/send?phone=201211732480&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%F0%9F%91%8B%2C%20%D8%A7%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%86%D8%B4%D8%A7%D8%A1%20%D9%85%D9%88%D9%82%D8%B9%D9%8A%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%20%F0%9F%A4%A9'"
              target="_blank">
              <li><i class='bx bxl-whatsapp'></i></li>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// import axios from 'axios';
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import SideNav from "@/components/SideNav.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    SideNav,

  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
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
      //   headers: {
      //   }
      // }).then((res) => (
      //   this.home_data = res.data
      // )).catch(err => {
      //   console.log(err.response);
      // });

      let data = require('../assets/api/get-data.json');
      this.home_data = this.lang == 'ar' ? data.ar : data.en

      $('section, footer, .accept-cookies').css('opacity', '0')
      setTimeout(function () { $('section, footer, .accept-cookies').css('opacity', '1') }, 500); 
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
      }else {
        document.body.classList.add(this.lang) // add lang class ##############################
      }

    }, setIconDir() {
      this.iconDir = this.color == "dark" ? 0 : 92
    }, setLangIconDir() {
      this.langIconDir = this.lang == "en" ? 90 : 0
    }, closeCookiePopup() {
      $('.accept-cookies').fadeOut('fast')
      sessionStorage.setItem("cookiesSelect", false);
    }

  }, created() {
    this.setLangThemeCookies()
    this.getHomeData()
    this.setIconDir()
    this.setLangIconDir()
  }, mounted() {
    if (sessionStorage.getItem('cookiesSelect'))
      this.is_cookies = 1

      // // start enter animation
      //   $(window).on('load', function () {
      //   setTimeout(() => {
      //     $('.hero .img').fadeIn().addClass($('body').hasClass('ar') ? 'animate__animated animate__fadeInBottomLeft' : 'animate__animated animate__fadeInBottomRight').
      //     css({'display': 'flex', 'visibility':'visible'})
      //   }, 1350);
      //   setTimeout(() => {
      //     $('.hero .text h1').fadeIn().addClass('animate__animated animate__fadeInUp').
      //     css({'display': 'flex', 'visibility':'visible'})
      //   }, 1700);
      // })
  },
}
</script>

<style>
.animate__animated .animate__fadeIn {
  --animate-duration: 2s;
}

.animate__animated .animate__fadeOut {
  --animate-duration: 2s;
}
</style>
