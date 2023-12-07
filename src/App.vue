<template>
  <div>
    <main-header></main-header>
      <router-view v-slot="{ Component }">
        <transition name="pagetrans">
          <component :is="Component"></component>
        </transition>
      </router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
import MainHeader from './components/Layout/TheHeader.vue'
import TheFooter from './components/Layout/TheFooter.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    MainHeader,
    TheFooter
  },
  created () {
    if (window.localStorage.getItem('cartProducts') !== null) {
      this.$store.dispatch('sidebar/setCartBag', JSON.parse(window.localStorage.getItem('cartProducts')))
    }
    if (window.localStorage.getItem('wishlist') !== null) {
      this.$store.dispatch('addtowishlist', { product: JSON.parse(window.localStorage.getItem('wishlist')), stt: 'reloaddata' })
    }
    this.$store.dispatch('auth/tryLogin')
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
    padding: 0;
    }
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
</style>
