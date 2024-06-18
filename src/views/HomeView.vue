<template>
  <div class="home" id="home">

    <side-nav></side-nav>

    <div class="accept-cookies" v-if="!is_cookies">
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

    <section class="space"></section>

    <section class="hero animate__animated animate__fadeInUp" id="hero" v-if="showSections">
      <div class="after-before"></div>
      <div class="container">
        <div class="text">
          <h1>{{ home_data.home.hero.title }}</h1>
          <h1>{{ home_data.home.hero.title2 }}</h1>
          <h1>{{ home_data.home.hero.title3 }}</h1>
          <h1>{{ home_data.home.hero.title4 }}</h1>
          <div class="btns">
            <!-- <a href="#latest">{{ home_data.home.hero.latest_btn }}</a> -->
            <a href="#latest" class="btn" type="button">
              <strong>{{ home_data.home.hero.latest_btn }}</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow">
                <div class="circle"></div>
                <div class="circle"></div>
              </div>
            </a>
            <a href="#contact" class="btn last" type="button">
              <strong>{{ home_data.home.hero.contact_btn }}</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow">
                <div class="circle"></div>
                <div class="circle"></div>
              </div>
            </a>
            <!-- <a href="#contact">{{ home_data.home.hero.contact_btn }}</a> -->
          </div>
        </div>
        <div class="img">
          <img src="../assets/img/hero-2.png" alt="">
        </div>
      </div>
    </section>

    <section class="trusted_by animate__animated animate__fadeInUp" v-if="showSections">
      <div class="after-before"></div>
      <div class="container">
        <h1 class="section-head">
          {{ home_data.home.trusted_by.title }}
        </h1>

        <div class="companies">
          <div>
            <div class="img" style="padding: 5px;">
              <img src="../assets/img/companies/aspire.png" alt="">
            </div>
            <h1>Aspire Egypt</h1>
              <img src="../assets/img/flags/sa.png" alt="">
          </div>
          <div>
            <div class="img"  style="padding: 4px;">
              <img src="../assets/img/companies/onmyway.png" alt="">
            </div>
            <h1>on my way ther.</h1>
            <img src="../assets/img/flags/au.png" alt="">
          </div>
          <div>
            <div class="img">
              <img src="../assets/img/companies/fentec.png" alt="">
            </div>
            <h1>Fentec Algeria</h1>
            <img src="../assets/img/flags/dz.png" alt="">
          </div>
          <div>
            <div class="img">
              <img src="../assets/img/companies/cyrus.png" alt="">
            </div>
            <h1>Cyrus Technology</h1>
            <img src="../assets/img/flags/eg.png" alt="">
          </div>
        </div>

      </div>
    </section>

    <div id="latest"></div>

    <section class="latest  animate__animated animate__fadeInUp" id="latest-sec" v-if="showSections">
      <div class="after-before"></div>
      <div class="switchs">
        <button class="section-head" :class="showOnGoing ? 'active' : ''" @click="showOnGoing = true; showLatest = false; showTraining = false">
          {{ home_data.home.on_going.title }}
        </button>
        <button class="section-head" :class="showLatest ? 'active' : ''" @click="showOnGoing = false; showLatest = true; showTraining = false">
          {{ home_data.home.latest.title }}
        </button>
        <button class="section-head" :class="showTraining ? 'active' : ''" @click="showOnGoing = false; showLatest = false; showTraining = true">
          {{ home_data.home.training_projects.title }}
        </button>
      </div>
      <div class="container animate__animated animate__fadeIn" v-if="showLatest">
          <swiper 
            :slidesPerView="1" 
            :spaceBetween="40"
            :breakpoints="{
              '767': {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              '992': {
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
                  <img src="../assets/img/our-work/un.png" alt="">
                </div>
                <h1>{{"United Podcast"}}</h1>
                <p>{{ home_data.home.on_going.unieted_podcast.p_1 }}</p>
                <a href="https://umspodcast.com/" target="_blanck">{{ home_data.home.latest.btn }}</a>
                <div class="bg"></div>
              </swiper-slide>
              <swiper-slide>
                <div class="img">
                  <img src="../assets/img/our-work/GGG.png" alt="">
                </div>
                <h1>{{"Elgomhuria"}}</h1>
                <p>{{ home_data.home.on_going.gmhorya.p_2 }}</p>
                <a href="https://elgomhuriaeljadida.com/" target="_blanck">{{ home_data.home.latest.btn }}</a>
                <div class="bg"></div>
              </swiper-slide>
              <swiper-slide>
                <div class="img">
                  <img src="../assets/img/our-work/gaming.png" alt="">
                </div>
                <h1>Egs</h1>
                <p>{{ home_data.home.latest.egs }}</p>
                <a href="https://www.egyptgamestore.com/" target="_blanck">{{ home_data.home.latest.btn }}</a>
                <div class="bg"></div>
              </swiper-slide>
              <swiper-slide>
                <div class="img">
                  <img src="../assets/img/our-work/sf.png" alt="">
                </div>
                <h1>{{"Sphinx Travel"}}</h1>
                <p>{{ home_data.home.on_going.shpinx.p_2 }}</p>
                <a href="https://play.google.com/store/apps/details?id=com.sphinx.travel" target="_blanck">{{ home_data.home.latest.btn }}</a>
                <div class="bg"></div>
              </swiper-slide>
              <swiper-slide>
                <div class="img">
                  <img src="../assets/img/our-work/onmyway.png" alt="">
                </div>
                <h1>On My Way</h1>
                <p>{{ home_data.home.latest.onmyway }}</p>
                <a href="https://onmywaytherapy.ykdev.online/" target="_blanck">{{ home_data.home.latest.btn }}</a>
                <div class="bg"></div>
              </swiper-slide>
              <swiper-slide>
                <div class="img">
                  <img src="../assets/img/our-work/forkn-knife.png" alt="">
                </div>
                <h1>ForknKnife</h1>
                <p>{{ home_data.home.latest.forknknife }}</p>
                <a href="https://forknknife.ykdev.online/" target="_blanck">{{ home_data.home.latest.btn }}</a>
                <div class="bg"></div>
              </swiper-slide>
              <swiper-slide>
                <div class="img">
                  <img src="../assets/img/our-work/aspire.png" alt="">
                </div>
                <h1>Aspire</h1>
                <p>{{ home_data.home.latest.aspire }}</p>
                <a href="https://aspire.ykdev.online/" target="_blanck">{{ home_data.home.latest.btn }}</a>
                <div class="bg"></div>
              </swiper-slide>
          </swiper>
      </div>
      <div class="container animate__animated animate__fadeIn" v-if="showTraining">
          <swiper 
            :slidesPerView="1" 
            :spaceBetween="40"
            :breakpoints="{
              '767': {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              '992': {
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
                  <img src="../assets/img/our-work/dashboard.png" alt="">
                </div>
                <h1>Dashboard</h1>
                <p>{{ home_data.home.latest.dashboard }}</p>
                <a href="/dashboard-view" target="_blanck">{{ home_data.home.latest.btn }}</a>
                <div class="bg"></div>
              </swiper-slide>
              <swiper-slide>
                <div class="img">
                  <img src="../assets/img/our-work/pharoto.png" alt="">
                </div>
                <h1>Pharoto</h1>
                <p>{{ home_data.home.latest.pharoto }}</p>
                <a href="/pharoto-view" target="_blanck">{{ home_data.home.latest.btn }}</a>
                <div class="bg"></div>
              </swiper-slide>
              <swiper-slide>
                <div class="img">
                  <img src="../assets/img/our-work/off.png" alt="">
                </div>
                <h1>%FF</h1>
                <p>{{ home_data.home.latest.off }}</p>
                <a href="https://off-five.vercel.app/" target="_blanck">{{ home_data.home.latest.btn }}</a>
                <div class="bg"></div>
              </swiper-slide>
              <swiper-slide>
                <div class="img">
                  <img src="../assets/img/our-work/mammoth.png" alt="">
                </div>
                <h1>Mammoth</h1>
                <p>{{ home_data.home.latest.mammoth }}</p>
                <a href="https://mammoth-ashy.vercel.app/" target="_blanck">{{ home_data.home.latest.btn }}</a>
                <div class="bg"></div>
              </swiper-slide>
              <swiper-slide>
                <div class="img">
                  <img src="../assets/img/our-work/gympo.png" alt="">
                </div>
                <h1>GYMPO</h1>
                <p>{{ home_data.home.latest.gympo }}</p>
                <a href="https://gympo.vercel.app/" target="_blanck">{{ home_data.home.latest.btn }}</a>
                <div class="bg"></div>
              </swiper-slide>
          </swiper>
      </div>
      <div class="container animate__animated animate__fadeIn" v-if="showOnGoing">
          <swiper 
            :slidesPerView="1" 
            :spaceBetween="40"
            :breakpoints="{
              '767': {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              '992': {
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
                  <img src="../assets/img/our-work/fen.png" alt="">
                </div>
                <h1>{{"Fentec Mobility"}}</h1>
                <p>{{ home_data.home.on_going.fentec.p_2 }}</p>
                <a href="/fentec-preview" target="_blanck">{{ home_data.home.latest.btn }}</a>
                <div class="bg"></div>
              </swiper-slide>
          </swiper>
      </div>
    </section>

    <div id="contact"></div>

    <section class="lets-do-it  animate__animated animate__fadeInUp" id="deal" v-if="showSections">
      <div class="after-before"></div>
      <div class="container">
        <h1 class="section-head">{{ home_data.home.lets_do_it.title }}</h1>
        <h3>{{ home_data.home.lets_do_it.sub_title }}</h3>
        <img src="../assets/img/Saly-19.png" alt="lets-do-it">
        <div class="btns">
          <a href="https://www.facebook.com/YKdev.online" target="_blank">
            <img src="../assets/img/contact/Facebook.png" />
          </a>

          <a href="https://www.linkedin.com/in/ykdevonline" target="_blank">
            <img src="../assets/img/contact/LinkedIn.png" />
          </a>

          <a href="https://t.me/+201149421104" target="_blank">
            <img src="../assets/img/contact/Telegram.png" />
          </a>

          <a href="https://www.facebook.com/messages/t/114476311514915" target="_blank">
            <img src="../assets/img/contact/Messenger.png" />
          </a>

          <a 
          :href="
          lang == 'en' ? 
          'https://wa.link/vkmpvi' :
          'https://wa.link/f5ymtr'"

          target="_blank">
            <img src="../assets/img/contact/Whatsapp.png" />
          </a>

          <a href="https://www.instagram.com/ykdev.online" target="_blank">
            <img src="../assets/img/contact/Instagram.png" />
          </a>

          <a href="https://www.tiktok.com/@ykdev.online" target="_blank">
            <img src="../assets/img/contact/Tiktok.png" />
          </a>
        </div>
      </div>
    </section>


    <div id="why-us"></div>

    <section class="why-us  animate__animated animate__fadeInUp" id="why" v-if="showSections">
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

    <footer id='footer  animate__animated animate__fadeInUp'>
      <div class="after-before"></div>
      <h1 class="section-head">
        YK
      </h1>
      <div class="container">
        <div class="yk ">
          <div class="joo">
            <div class="text">
              <h1>{{ home_data.home.footer.youssef_name }}</h1>
              <h3>{{ home_data.home.footer.youssef_title }}</h3>
            </div>
            <div class="vector">
              <img src="../assets/img/y.png" alt="designer">
              <div class="profile">
                <img src="../assets/img/joo.jpg" alt="youssef">
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
        <h3 style="margin: 0;">
          {{ home_data.home.footer.sub_title }}
          <img src="../assets/img/footer.png" alt="">
        </h3>
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
      showTraining: false,
      showLatest: true,
      showOnGoing: false,
      searchParams: new URLSearchParams(window.location.search),
      lang: 'en',
      home_data: null,
      iconDir: 92,
      langIconDir: 90,
      is_cookies: false,
      showSections: false
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
      this.is_cookies = langCheck >= 0 ? true : false
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

      this.is_cookies = langCheck  >= 0 ? true : false

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

      setTimeout(() => {
        
        this.showSections = true
      }, 300);
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
