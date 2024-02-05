<template>
  <div v-if="!checkoutpage" :class="issticky">
    <div class="container">
      <nav class="navbar bg-body-tertiory d-flex justify-content-between">
        <router-link v-if="!mdheader" to="/" class="logo navbar-brand passed">{{ $t('global.header.logo') }}</router-link>
        <div v-if="mdheader" class="left-header">
          <font-awesome-icon @click="menutoggle" icon="fa-solid fa-bars" />
          <base-menu :show="mainmenustate">
            <ul>
              <li>
                <a href="/"></a>
              </li>
            </ul>
          </base-menu>
          <font-awesome-icon @click="togglesearch" class="rightic" icon="fa-solid fa-magnifying-glass" />
        </div>
        <div v-if="!mdheader" class="navbar-nav">
        <ul class="d-flex align-items-center m-0">
          <li @mouseover="setSlideValmen(true)" @mouseleave="setSlideValmen(false)" class="nav-item">
            <router-link class="nav-link mx-3 passed arouter setu" to="/collections/MEN">{{ $t('global.header.nav.men') }}</router-link>
              <base-liinfo :menstate="true" :show='baselimenval'></base-liinfo>
          </li>
          <li @mouseover="setSlideValwom(true)" @mouseleave="setSlideValwom(false)" class="nav-item">
            <router-link class="nav-link mx-3 passed arouter setu" to="/collections/WOMEN">{{ $t('global.header.nav.women') }}</router-link>
              <base-liinfo :menstate="false" :show='baseliwomval' ></base-liinfo>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link mx-3 passed arouter setu btn dropdown-toggle" href='/collections/KIDS' data-bs-hover='dropdown' aria-expanded='false'>{{ $t('global.header.nav.kids') }}</a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li class="dropdown-item"><router-link class="" to="/collections/Graphics">{{ $t('global.header.navList.kids.top1') }}</router-link></li>
              <li class="dropdown-item"><router-link class="" to="/collections/Zippers">{{ $t('global.header.navList.kids.top2') }}</router-link></li>
              <li class="dropdown-item"><router-link class="" to="/collections/Pants">{{ $t('global.header.navList.kids.top3') }}</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link mx-3 passed arouter aces" to="/collections/ACCESSORIES">{{ $t('global.header.nav.accessories') }}</router-link>
          </li>
        </ul>
        </div>
        <div v-if="mdheader" class="middle-header d-flex align-items-center justify-content-center">
          <router-link to="/">
            <img class="mdlogo" src="../../../imgs/secicon.png" alt="">
          </router-link>
        </div>
        <div class="details" aria-label="Default select example">
          <ul class="d-flex align-items-center m-0 p-0">
            <div v-if="!mdheader" class="dropdown ">
              <span class="lang-btn dropdown-toggle" type="button" id="lang-DropdownBtn" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <font-awesome-icon icon="fa-solid fa-globe" />
                {{ currentLang }}
              </span>
              <div class="dropdown-menu" aria-labelledby="lang-DropdownBtn">
                <a @click.prevent="changeLang('en')" class="dropdown-item" href="#">English</a>
                <a @click.prevent="changeLang('ar')" class="dropdown-item" href="#">Arabic</a>
              </div>
            </div>
            <li v-if="!mdheader"  class="nav-item leftic">
              <router-link to="/Collections/wishlist">
                <font-awesome-icon  class="favicon" icon="fa-regular fa-heart" />
              </router-link>
            </li>
            <li v-if="!mdheader" class="nav-item leftic">
              <font-awesome-icon @click="togglesearch" class="" icon="fa-solid fa-magnifying-glass" id="search" />
            </li>
            <li class="nav-item profile">
              <font-awesome-icon @click="carttoggle('profile')" class="passed" icon="fa-regular fa-user" />
                <base-sidebar @reset-sidebar-data='resetsidebar' :show ='sideststeprofile' name ='profile'>
                  <template v-slot:title>{{ $t('global.header.profile.login.header') }}</template>
                  <template v-if="!loginstate" v-slot:default>
                    <form @submit.prevent="">
                      <div class="inputcont">
                        <label for="#Emailadd">{{ $t('global.header.profile.login.eInput') }} <span>*</span></label>
                        <input type="Email" id="Emailadd" :placeholder='$t("global.header.placeholders.email")' v-model.trim="email.value" @focus="inputfocus('email')">
                        <p v-if="!email.valid">{{ $t('global.header.profile.login.evalid') }}</p>
                      </div>
                      <div class="inputcont">
                        <label for="#passwordadd">{{ $t('global.header.profile.login.pInput') }} <span>*</span></label>
                        <input type="password" id="passwordadd" :placeholder='$t("global.header.placeholders.pass")' v-model.trim="password.value" @focus="inputfocus('password')" autocomplete="on">
                        <p v-if="!password.valid">{{ $t('global.header.profile.login.pvalid') }}</p>
                      </div>
                      <p v-if="signinerrorvis" class="signinerror">{{ signinError }}</p>
                      <base-button @click="signin" type='main'>{{ $t('global.header.profile.login.loginInput') }}</base-button>
                    </form>
                      <span class="forgotpass">
                        <span class="arouter">{{ $t('global.header.profile.login.forgotP') }}</span>
                      </span>
                      <router-link to="/AccountRegister">
                        <base-button type='main-rev'>{{ $t('global.header.profile.login.createBtn') }}</base-button>
                      </router-link>
                  </template>
                  <template v-else-if="loginstate" v-slot:default>
                    <div class="btns">
                      <router-link to="/Account">
                        <base-button type='main'>{{ $t('global.header.profile.logout.myacc') }}</base-button>
                      </router-link>
                      <base-button @click='logout' type='main-rev'>{{ $t('global.header.profile.logout.logoutBtn') }}</base-button>
                    </div>
                  </template>
                </base-sidebar>
            </li>
            <li class="nav-item cart-container">
              <div class="cart">
                <font-awesome-icon @click="carttoggle('cart')" class="rightic passed" icon="fa-solid fa-cart-shopping" />
                <span @click="carttoggle('cart')">{{ cartBagItems.length }}</span>
              </div>
                <base-sidebar :show ='sideststecart' name ='cart'>
                  <template v-slot:title>{{ $t('global.header.cart.emptyCart.header') }}</template>
                  <template v-slot:default>
                    <div v-if="cartBagItems.length === 0" class="empty-tem">
                      <span class="emptycart">{{ $t('global.header.cart.emptyCart.pEmpty') }}</span>
                      <base-button @click="closesidebar('cart')" type='main-rev'>{{ $t('global.header.cart.emptyCart.continueBtn') }}</base-button>
                    </div>
                    <div v-if="cartBagItems.length !== 0" class="cart-products">
                      <span class="items-count">{{ cartBagItems.length + ' ' + $t('global.header.cart.fullCart.items')}}</span>
                      <div class="products">
                        <div v-for="product in cartBagItems" :key="product.id" class="product">
                          <div class="prodimg">
                            <img :src='product.img' alt="">
                          </div>
                          <div class="info">
                            <router-link :to="'/products/' + product.name" class="prodname">{{ product.name }}</router-link>
                            <div class="editcat">
                              <div class="prodsc">{{ product.color }} / {{ product.size }}</div>
                              <font-awesome-icon @click="openeditpopup(product.cartId)" icon="fa-solid fa-pen-to-square"/>
                            </div>
                            <div class="quan">
                              <span>{{ $t('global.header.cart.fullCart.quant') + product.count}}</span>
                            </div>
                            <div class="prodprice">{{ product.discount ?  (product.price - product.discount).toFixed(2) : product.price }} LE</div>
                          </div>
                          <div @click="removeproduct" :data-id='product.cartId' class="closebtn">X</div>
                        </div>
                        <edit-popup :cartId='deitele.cartId' :id='deitele.id' :count='deitele.count' :name='deitele.name' :img='deitele.img' :color='deitele.color' :size='deitele.size' :price='deitele.price' :discount='deitele.discount' :show='editpopupval'></edit-popup>
                      </div>
                      <div class="controls">
                        <div class="products-info">
                          <div class="total">
                            <span class="tit">{{ $t('global.header.cart.fullCart.total') }}</span>
                            <span class="total-num">{{ totalCartPrice }} LE</span>
                          </div>
                          <div class="shipping">
                            <span class="tit">{{ $t('global.header.cart.fullCart.shippingtitle') }}</span>
                            <span class="taxes">{{ $t('global.header.cart.fullCart.shippingtaxes') }}</span>
                          </div>
                        </div>
                        <div class="btns">
                          <router-link to='/checkouts'>
                            <base-button type='gray-white'>{{ $t('global.header.cart.fullCart.checkout') }}</base-button>
                          </router-link>
                          <router-link to='/cart'>
                            <base-button type='main-rev'>{{ $t('global.header.cart.fullCart.viewcart') }}</base-button>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </template>
                </base-sidebar>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  <teleport to='body'>
    <transition name="search">
      <div v-if="searchVal" class="search">
        <div class="input-group">
          <div class="input-group-text">
            <font-awesome-icon @click="searchsubmit" icon="fa-solid fa-magnifying-glass" id="search" />
          </div>
          <input type="search" @keyup.enter='searchsubmit' class="form-control" placeholder="Search" aria-label="search" aria-describedby="search" v-model.trim="search">
        </div>
      </div>
    </transition>
  </teleport>
  <loading-popup :show='isLoading'></loading-popup>
  <div v-if="checkoutpage" class="checkouts">
    <div class="container">
      <div class="checkout-header">
        <router-link to="/" class="logo">{{ $t('global.header.logo') }}</router-link>
        <router-link to="/cart">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

import baseLiinfo from '../Ui/BaseLiInfo.vue'
import BaseSidebar from '../Ui/BaseSidebar.vue'
import BaseMenu from '../Ui/BaseMenu.vue'
export default {
  components: {
    baseLiinfo,
    BaseSidebar,
    BaseMenu
  },
  data () {
    return {
      scrolly: 0,
      menslide: null,
      womenslide: null,
      mdheader: true,
      prodId: null,
      email: {
        valid: true,
        value: ''
      },
      password: {
        valid: true,
        value: ''
      },
      formValidation: true,
      searchtoggle: false,
      search: '',
      signinError: '',
      isLoading: false,
      logoutError: '',
      signinerrorvis: false,
      loadSpinLangError: ''
    }
  },
  methods: {
    setSlideValmen (val) {
      this.$store.dispatch('theheader/menslide', val)
    },
    setSlideValwom (val) {
      this.$store.dispatch('theheader/womenslide', val)
    },
    async changeLang (lang) {
      const linkLang = document.querySelector('.main-font')
      this.isLoading = true
      try {
        if (lang === 'en') {
          this.$i18n.locale = lang
          this.$store.dispatch('setLang', 'en')
          this.$store.dispatch('setCurrentLang', 'English')
          this.$store.dispatch('pageDir', 'ltr')
          document.documentElement.dir = 'ltr'
          document.documentElement.lang = 'en'
          linkLang.setAttribute('href', this.$store.getters.enFontHref)
          document.body.style.fontFamily = 'Poppins, sans-serif'
        } else {
          this.$i18n.locale = lang
          this.$store.dispatch('setLang', 'ar')
          this.$store.dispatch('setCurrentLang', 'Arabic')
          this.$store.dispatch('pageDir', 'rtl')
          document.documentElement.dir = 'rtl'
          document.documentElement.lang = 'ar'
          linkLang.setAttribute('href', this.$store.getters.arFontHref)
          document.body.style.fontFamily = 'Cairo , sans-serif'
        }
        window.localStorage.setItem('lang', JSON.stringify(lang))
      } catch (error) {
        this.loadSpinLangError = error || this.$i18n.t('errorAndNote.header.loadSpinLangError')
      }
      this.isLoading = false
    },
    async logout () {
      this.isLoading = false
      try {
        this.$store.dispatch('auth/logout')
        if (this.$route.path === '/Account') {
          this.$router.replace('/')
        }
      } catch (error) {
        this.logoutError = error || this.$i18n.t('errorAndNote.header.logoutError')
      }
      this.isLoading = false
    },
    async signin () {
      this.formValidation = true
      this.signinerrorvis = false
      if (this.password.value.length < 8) {
        this.formValidation = false
        this.password.valid = false
      } else {
        this.password.valid = true
      }
      if (!this.email.value.includes('@gmail.com')) {
        this.formValidation = false
        this.email.valid = false
      } else {
        this.email.valid = true
      }
      if (this.formValidation === true) {
        this.isLoading = true
        try {
          await this.$store.dispatch('auth/signin', { email: this.email.value, password: this.password.value })
          this.signinerrorvis = false
          this.$router.replace('/Account')
        } catch (error) {
          this.signinError = error.message
          this.signinerrorvis = true
        }
        this.isLoading = false
        this.password.value = ''
        this.email.value = ''
      }
    },
    searchsubmit () {
      if (this.search === '') {
        return
      }
      this.$router.push(`/collections/${this.search}?type=search`)
      this.$store.dispatch('theheader/closesearch')
      this.search = ''
    },
    togglesearch () {
      if (this.searchVal === false) {
        this.$store.dispatch('theheader/opensearch')
      } else {
        this.$store.dispatch('theheader/closesearch')
      }
    },
    closesidebar (name) {
      this.$store.dispatch('sidebar/closebtn', name)
      document.body.classList.remove('stop-scrolling')
    },
    openeditpopup (prodId) {
      this.prodId = prodId
      this.$store.dispatch('popup/editopenbtn')
    },
    removeproduct (e) {
      const productid = e.target.dataset.id
      const cartBag = this.$store.getters['sidebar/cartBag']
      for (let i = 0; i < cartBag.length; i++) {
        if (cartBag[i].cartId === productid) {
          cartBag.splice(i, 1)
        }
      }
      this.$store.dispatch('sidebar/setCartBag', cartBag)
      window.localStorage.setItem('cartProducts', JSON.stringify(cartBag))
    },
    menutoggle () {
      this.$store.dispatch('mainmenu/openbtn')
      document.body.classList.add('stop-scrolling')
    },
    carttoggle (name) {
      this.$store.dispatch('sidebar/openbtn', name)
      document.body.classList.add('stop-scrolling')
    },
    scrolling () {
      if (this.$route.path !== '/checkouts') {
        if (window.scrollY === 0) {
          document.querySelector('.navbar').classList.remove('scr')
          document.querySelector('.navbar').classList.add('ddscr')
          document.querySelectorAll('.setu').forEach((set) => {
            set.classList.add('arouter')
          })
          if (document.querySelector('.aces')) {
            document.querySelector('.aces').classList.remove('passwhite')
          }
          if (document.querySelector('.mdheader') && this.$route.path === '/') {
            document.querySelector('.mdheader').classList.remove('mdhpassed')
          }
        } else if (this.scrolly !== 0) {
          document.querySelector('.navbar').classList.remove('ddscr')
          document.querySelector('.navbar').classList.add('scr')
          document.querySelectorAll('.setu').forEach((set) => {
            set.classList.remove('arouter')
          })
          if (document.querySelector('.aces')) {
            document.querySelector('.aces').classList.add('passwhite')
          }
          if (document.querySelector('.mdheader')) {
            document.querySelector('.mdheader').classList.add('mdhpassed')
          }
        }
        this.scrolly = window.scrollY
      }
    },
    selectedheader () {
      if (window.innerWidth < 1200) {
        this.mdheader = true
      } else {
        this.mdheader = false
      }
    },
    inputfocus (val) {
      this.signinerrorvis = false
      if (val === 'email') {
        this.email.valid = true
      } else {
        this.password.valid = true
      }
    },
    resetsidebar () {
      this.email.value = ''
      this.email.valid = true
      this.password.value = ''
      this.password.valid = true
      this.signinerrorvis = false
    }
  },
  computed: {
    baseliwomval () {
      return this.$store.getters['theheader/womenslide']
    },
    baselimenval () {
      return this.$store.getters['theheader/menslide']
    },
    currentLang () {
      return this.$store.getters.currentLang
    },
    loginstate () {
      const userid = this.$store.getters['auth/userId']
      if (userid === null) {
        return false
      } else {
        return true
      }
    },
    checkoutpage () {
      if (this.$route.path === '/checkouts') {
        return true
      } else {
        return false
      }
    },
    deitele () {
      const ele = this.$store.getters['sidebar/cartBag'].find((ele) => {
        return ele.cartId === this.prodId
      })
      return { ...ele }
    },
    editpopupval () {
      return this.$store.getters['popup/editpopupval']
    },
    totalCartPrice () {
      const cartBag = this.$store.getters['sidebar/cartBag']
      const prices = cartBag.map((ele) => {
        if (ele.discount) {
          return (ele.price - ele.discount).toFixed(2) * ele.count
        } else {
          return ele.price * ele.count
        }
      })
      return prices.reduce((acc, curr) => {
        return acc + curr
      }, 0).toFixed(2)
    },
    cartBagItems () {
      return this.$store.getters['sidebar/cartBag']
    },
    mainmenustate () {
      return this.$store.getters['mainmenu/closemmenu']
    },
    sideststecart () {
      return this.$store.getters['sidebar/cartsideval']
    },
    sideststeprofile () {
      return this.$store.getters['sidebar/profilesideval']
    },
    issticky () {
      if (this.scrolly === 0 && this.mdheader === false && this.$route.path === '/') {
        return 'contt'
      } else if (this.scrolly !== 0 && this.mdheader === false && this.$route.path === '/') {
        return 'contt passed'
      } else if (this.$route.path !== '/' && this.mdheader === false) {
        return 'contt passed'
      } else if (this.$route.path === '/' && this.mdheader === true) {
        return 'contt mdheader'
      } else {
        return 'contt mdheader mdhpassed'
      }
    },
    searchVal () {
      return this.$store.getters['theheader/searchVal']
    }
  },
  watch: {
    lang: function (lang) {
      if (lang === 'en') {
        this.$i18n.locale = 'en'
      } else {
        this.$i18n.locale = 'ar'
      }
    }
  },
  beforeCreate () {
    window.addEventListener('scroll', this.scrolling)
  },
  created () {
    window.addEventListener('scroll', this.scrolling)
    window.addEventListener('resize', this.selectedheader)
  },
  beforeMount () {
    this.selectedheader()
  },
  unmounted () {
    window.removeEventListener('scroll', this.scrolling)
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 1200px) {
  .search{
    width: 90% !important;
    top: 60px !important;
  }
  .search-enter-to,
  .search-leave-from{
    top: 60px !important;
    opacity: 1;
  }
  .search-enter-from{
    top: 40px !important;
    opacity: 0;
  }
  .search-leave-to{
    top: 40px !important;
    opacity: 0;
  }
}
.search{
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  input{
    background-color: #f1f3f4;
    &:focus{
      box-shadow: none;
      outline: none;
      border-color: #dee2e6;
    }
  }
  .input-group-text{
    background-color: #f1f3f4;
    svg{
      padding-top: 0;
      padding-bottom: 0;
    }
  }
}
.checkouts{
  border-bottom: 1px solid #dfdfdf;
  .checkout-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 83px;
    .logo{
      cursor: pointer;
    }
  }
}
  .contt{
    position: absolute;
    width: 100%;
    z-index: 1;
    transition-duration: .3s;
    &.passed{
      background-color: white;
      position: fixed;
      box-shadow: -13px -8px 10px 0px black;
    }
    .navbar{
      padding-top: 15px;
      padding-bottom: 0;
      &.scr{
        padding-top: 5px;
      }
      &.ddscr{
        padding-top: 10px;
      }
    }
    &.mdheader{
      background-color: white;
      position: fixed;
      &.mdhpassed{
        animation-name: mdheadertrans ;
        animation-duration: 0.6s;
        box-shadow: -13px -8px 10px 0px black;
      }
      .navbar{
        padding: 5px 0 0 0;
      }
      svg{
        color: black !important;
      }
    }
  }
  a{
    text-decoration: none;
  }
  .navbar .logo,
  .checkout-header .logo{
  font-size: 30px;
  font-weight: bold;
  color: #202020 !important;
  }
  .mdlogo{
    height: 25px;
    width: 20px;
  }
  .cart-container{
    .cart{
      position: relative;
      span{
        position: absolute;
        height: 22px;
        width: 22px;
        top: 3px;
        right: -8px;
        background-color: #ff9800 ;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        color: white;
        line-height: 0px;
        cursor: pointer;
      }
    }
    .cart-products{
    .items-count{
      color: #505050;
    }
    .products{
      margin: 35px 0 30px;
      .product{
        display: flex;
        align-items: center;
        margin-bottom: 38px;
        .prodimg{
          padding-right: 15px;
          img{
            width: 100px;
            height: 100px;
          }
        }
        .info{
          a{
            color: black;
          }
          .quan{
            color: #808080;
            font-weight: 700;
            font-size: 12px;
          }
          .prodname{
            font-weight: 600;
            font-size: 13px;
          }
          .editcat{
            display: flex;
            align-items: center;
            margin-top: 5px;
            .prodsc{
              font-size: 12px;
              font-weight: 400;
              color: #505050;
              margin-right: 10px;
            }
            svg{
              font-size: 13px;
              color:  gray !important;
              padding: 0;
              &:hover{
                color: black !important;
                transition-duration: 0.2s;
              }
            }
          }
          .prodprice{
            margin-top: 12px;
            margin-bottom: 10px;
            font-weight: 700;
            font-size: 14px;
          }
        }
        .closebtn{
          display: flex;
          align-items: center;
          justify-content: center;
          color: #505050;
          height: 115px;
          width: 30px;
          font-weight: 600;
          font-size: 16px;
          margin-left: auto;
          &:hover{
            background-color: #f4f4f4;
            color: #232323;
            cursor: pointer;
            transition-duration: 0.2s;
          }
        }
      }
    }
    .controls{
      .products-info{
        padding-top: 35px;
        border-top: 1px solid #ebebeb;
        .tit{
          color: #202020;
          font-size: 13px;
          font-weight: 600;
        }
        .total{
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          .total-num{
            width: 100%;
            text-align: center;
            font-size: 17px;
            font-weight: 700;
          }
          .tit{
            margin-right: 40px;
          }
        }
        .shipping{
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          .tit{
            margin-right: 40px;
          }
          .taxes{
            font-size: 11px;
            color: #808080;
            }
        }
      }
      .btns{
        display: flex;
        align-items: center;
        justify-content: center;
        a{
          width: 100%;
        }
        a:nth-child(1){
          margin-right: 10px;
        }
        button{
          white-space: nowrap;
        }
      }
    }
  }
  }
  .profile{
    .btns{
      button{
        margin-top: 20px !important;
      }
    }
    p{
      color: red;
      font-size: 13px;
      margin-top: 5px;
      margin-bottom: 0;
    }
  }
  .nav-item{
    .emptycart{
      display: block;
      text-align: center;
      font-size: 13px;
      margin: 7px 0 15px 0;
      color: #505050;
    }
  }
  .arouter{
    &::before{
    background-color: black;
    bottom: 20px;
    }
    &.passwhite::before{
      background-color: black ;
    }
  }
  .nav-link{
    padding-bottom: 22px;
    padding-top: 13px;
  }
  .navbar-brand{
    padding-top: 5px;
    padding-bottom: 13px;
  }
  .nav-link
  .navbar-brand{
    color: black;
    font-size: 40px;
  }
  .nav-link.passed,
  .navbar-brand.passed{
    color: black;
  }
.details{
  .dropdown{
    span{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 17px;
      font-weight: 600;
      margin: 0;
      user-select: none;
      min-width: 100px;
      margin-inline-end: 20px;
      border-radius: 6px;
      padding: 0 15px;
      transition-duration: 0.3s;
      &.show{
        background-color: #e7e8ea;
      }
      &:hover{
        background-color: #e7e8ea;
      }
      svg{
        margin-inline-end: 5px;
        &::after{
          margin-inline-end: 5px !important;
        }
      }
    }
  }
  form{
    .inputcont{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-bottom: 15px;
      &:first-of-type{
        margin-top: 22px;
      }
      label{
        color: #202020;
        margin-bottom: 6px;
        font-size: 13px;
        font-weight: 500;
        span{
          color: #f1152f;
          margin-left: 5px;
          font-weight: 700;
        }
      }
      input{
        width: 100%;
        border: 1px solid #dfdfdf;
        padding: 13px 12px 11px;
        &:focus{
          outline: none;
        }
        &::placeholder{
          font-size: 12px;
        }
      }
    }
    .signinerror{
      margin-bottom: 15px;
    }
  }
  .forgotpass{
    display: block;
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: #505050;
    margin: 20px 0 23px;
    span{
      cursor: pointer;
      &::before{
        bottom: -4px;
      }
    }
  }
  .favicon{
    transition-duration: 0.3s;
    &:hover{
      color: #3ADB89;
    }
  }
}
.nav-item{
  .dropdown-menu{
  position: absolute;
  border-radius: 0;
  left: 0;
  padding: 0;
  background-color: #f8f8f8;
  border: none;
  .dropdown-item{
    padding: 0 20px;
    color: #3c3c3c;
    transition: all .2s ease-in;
    a{
      display: block;
      font-size: 14px;
      padding: 10px 0 8px;
      border-bottom: 1px solid #e0e0e0;
      color: inherit;
    }
    &:hover{
      color:#3ADB89;
      background-color: white;
    }
  }
  }
  .dropdown-toggle::after{
    border: none;
  }
  &.dropdown:hover>.dropdown-menu {
    display: block;
  }
}
svg{
  font-size: 23px;
  font-weight: 400;
  color: black;
  cursor: pointer;
  padding: 10px 0;
  &.rightic{
    margin-inline-start: 30px;
  }
  }
  .leftic{
    margin-inline-end: 30px;
  }
  .secheader{
    .passed{
      color: black !important;
    }
  }
  @keyframes mdheadertrans {
    0%{
      transform: translateY(-60px);
      opacity: 0;
    }
    100%{
      transform: translateY(0px);
      opacity: 1;
    }
  }
  .search-enter-active,
  .search-leave-active{
    transition: all 0.3s ease-out;
  }
  .search-enter-to,
  .search-leave-from{
    top: 80px;
    opacity: 1;
  }
  .search-enter-from{
    top: 50px;
    opacity: 0;
  }
  .search-leave-to{
    top: 50px;
    opacity: 0;
  }
</style>
