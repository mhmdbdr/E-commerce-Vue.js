<template>
  <div>
    <main-header></main-header>
      <router-view v-slot="{ Component }">
        <transition name="pagetrans">
          <component :v-show="donemounted" @fullmounted='fullmounted' :is="Component"></component>
        </transition>
      </router-view>
    <the-footer></the-footer>
    <div class="loading-page" v-if="!donemounted">
      <div class="loading-dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from './components/Layout/TheHeader.vue'
import TheFooter from './components/Layout/TheFooter.vue'

export default {
  data () {
    return {
      donemounted: false
    }
  },
  methods: {
    fullmounted () {
      this.donemounted = true
      document.body.classList.remove('stop-scrolling')
    }
  },
  components: {
    MainHeader,
    TheFooter
  },
  watch: {
    '$i18n.locale': function (lang) {
      document.querySelector('#app').classList = lang
    }
  },
  created () {
    document.body.classList.add('stop-scrolling')
    if (window.localStorage.getItem('cartProducts') !== null) {
      this.$store.dispatch('sidebar/setCartBag', JSON.parse(window.localStorage.getItem('cartProducts')))
    }
    if (window.localStorage.getItem('wishlist') !== null) {
      this.$store.dispatch('addtowishlist', { product: JSON.parse(window.localStorage.getItem('wishlist')), stt: 'reloaddata' })
    }
    this.$store.dispatch('auth/tryLogin')

    // lang-start

    const linkLang = document.querySelector('.main-font')

    if (JSON.parse(window.localStorage.getItem('lang')) === 'ar') {
      this.$i18n.locale = 'ar'
      this.$store.dispatch('setLang', 'ar')
      this.$store.dispatch('setCurrentLang', 'Arabic')
      this.$store.dispatch('pageDir', 'rtl')
      document.documentElement.dir = 'rtl'
      document.documentElement.lang = 'ar'
      linkLang.setAttribute('href', this.$store.getters.arFontHref)
      document.body.style.fontFamily = 'Cairo , sans-serif'
    } else {
      this.$i18n.locale = 'en'
      this.$store.dispatch('setLang', 'en')
      this.$store.dispatch('setCurrentLang', 'English')
      this.$store.dispatch('pageDir', 'ltr')
      document.documentElement.dir = 'ltr'
      document.documentElement.lang = 'en'
      linkLang.setAttribute('href', this.$store.getters.enFontHref)
      document.body.style.fontFamily = 'Poppins, sans-serif'
    }

    // lang-end
  }
}
</script>

<style lang="scss">
  html {
    scroll-behavior: smooth;
  }
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    &::-webkit-scrollbar{
      display: none;
    }
    a{
      text-decoration: none;
    }
    ul{
    list-style: none;
    margin: 0;
    padding: 0 !important;
    }
  }
  .whitespacee{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 10000;
  }
  .stop-scrolling{
    height: 100%;
    overflow: hidden;
  }
  .arouter{
    position: relative;
    padding: 0;
    &::before{
    content: '';
    position: absolute;
    height: 1px;
    width: 0;
    bottom: 0px;
    left: 0;
    background-color: black;
    transition: all 0.2s ease-in;
    }
    &:hover::before{
      width: 100%;
    }
  }
  .shadow{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, .6);
}
.inpcont{
  margin-right: 10px;
  input{
    border-radius: 0;
    width: 90px;
    height: 60px;
    &::placeholder{
      font-size: 12px;
    }
    &:focus{
      box-shadow: none;
      border-color: #dee2e6;
      transition-duration: 0.3s;
      &::placeholder{
        transition-duration: 0.5s;
        opacity: 0;
      }
    }
  }
}
.loading-page{
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 2000;
  .loading-dots{
    display: flex;
    .dot{
      display: block;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: #3ADB89;
      margin: 0 10px;
      z-index: 2001;
      animation-name: dot-animation;
      animation-duration: .3s;
      animation-iteration-count: infinite;
      animation-direction: alternate-reverse;
      &:nth-of-type(2){
        animation-delay: .1s;
      }
      &:nth-of-type(3){
        animation-delay: .2s;
      }
    }
  }
}
.pagetrans-enter-from,
.pagetrans-leave-to{
  opacity: 0;
}
.pagetrans-enter-to,
.pagetrans-leave-from{
  opacity: 1;
}
.pagetrans-enter-active,
.pagetrans-leave-active{
  transition-duration: 0.3s;
}
@keyframes dot-animation {
  0% {
  }
  100% {
    transform: translateY(-20px)
  }
}
</style>
