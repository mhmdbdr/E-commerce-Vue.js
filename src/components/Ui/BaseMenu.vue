<template>
<div @click="closebar" v-if="show" class="shadow"></div>
<transition name="slidebar">
  <div v-if="show" class="sidebar col-10 col-lg-3 col-md-4">
    <div class="closebtn" @click="closebar">X</div>
    <div class="dropdown-main-menu">
      <div class="links">
        <ul>
          <li>
            <a @click.prevent="supmenubtns('mencbtn')" href="">{{ $t('global.header.nav.men') }}</a>
            <span>
              <font-awesome-icon icon="fa-solid fa-angle-right" />
            </span>
            <base-supmenu @back-arrow="backarrow('mencbtnval')" :show ='mencbtnval'>
              <template v-slot:title>{{ $t('global.header.nav.men') }}</template>
              <template v-slot:default>
                <ul class ='supmenu'>
                  <li>
                    <router-link to="/collections/MEN">{{ $t('global.header.navList.men.allmen') }}</router-link>
                  </li>
                  <li>
                    <a @click.prevent="supmenubtns('mentopscbtn')" href="">{{ $t('global.header.navList.men.top') }}</a>
                    <span>
                      <font-awesome-icon icon="fa-solid fa-angle-right" />
                    </span>
                    <base-supmenu @back-arrow="backarrow('mentopscbtnval')" :show ='mentopscbtnval'>
                      <template v-slot:title>{{ $t('global.header.navList.men.top') }}</template>
                      <template v-slot:default>
                        <ul class ='supmenu multisupmenu'>
                          <li>
                            <router-link to="/">{{ $t('global.header.navList.men.alltops') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/T-shirts">{{ $t('global.header.navList.men.top1') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Graphics">{{ $t('global.header.navList.men.top2') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Grafit-tee">{{ $t('global.header.navList.men.top3') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Polo">{{ $t('global.header.navList.men.top4') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Shirts">{{ $t('global.header.navList.men.top5') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Long-Sleeves">{{ $t('global.header.navList.men.top6') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Hoodies">{{ $t('global.header.navList.men.top7') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Zippers">{{ $t('global.header.navList.men.top8') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Pullovers">{{ $t('global.header.navList.men.top9') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Jackets & Coats">{{ $t('global.header.navList.men.top10') }}</router-link>
                          </li>
                        </ul>
                      </template>
                    </base-supmenu>
                  </li>
                  <li>
                    <a @click.prevent="supmenubtns('menbottomscbtn')" href="">{{ $t('global.header.navList.men.bottom') }}</a>
                    <span>
                      <font-awesome-icon icon="fa-solid fa-angle-right" />
                    </span>
                    <base-supmenu @back-arrow="backarrow('menbottomscbtnval')" :show ='menbottomscbtnval'>
                      <template v-slot:title>{{ $t('global.header.navList.men.bottom') }}</template>
                      <template v-slot:default>
                        <ul class ='supmenu multisupmenu'>
                          <li>
                            <router-link to="/">{{ $t('global.header.navList.men.allbott') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/jeans">{{ $t('global.header.navList.men.bottom1') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Jogger">{{ $t('global.header.navList.men.bottom2') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/sweatPants">{{ $t('global.header.navList.men.bottom3') }}</router-link>
                          </li>
                        </ul>
                      </template>
                    </base-supmenu>
                  </li>
                  <li>
                    <a @click.prevent="supmenubtns('menjilbabcbtn')" href="">{{ $t('global.header.navList.men.jilbab') }}</a>
                    <span>
                      <font-awesome-icon icon="fa-solid fa-angle-right" />
                    </span>
                    <base-supmenu @back-arrow="backarrow('menjilbabcbtnval')" :show ='menjilbabcbtnval'>
                      <template v-slot:title>{{ $t('global.header.navList.men.jilbab') }}</template>
                      <template v-slot:default>
                        <ul class ='supmenu multisupmenu'>
                          <li>
                            <router-link to="/">{{ $t('global.header.navList.men.alljil') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/stabraq jilbab">{{ $t('global.header.navList.men.jilbab1') }}</router-link>
                          </li>
                        </ul>
                      </template>
                    </base-supmenu>
                  </li>
                  <li>
                    <a @click.prevent="supmenubtns('menaccesscbtn')" href="">{{ $t('global.header.navList.men.accessories') }}</a>
                    <span>
                      <font-awesome-icon icon="fa-solid fa-angle-right" />
                    </span>
                    <base-supmenu @back-arrow="backarrow('menaccesscbtnval')" :show ='menaccesscbtnval'>
                      <template v-slot:title>{{ $t('global.header.navList.men.accessories') }}</template>
                      <template v-slot:default>
                        <ul class ='supmenu multisupmenu'>
                          <li>
                            <router-link to="/collections/ACCESSORIES">{{ $t('global.header.navList.men.allaccess') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Socks">{{ $t('global.header.navList.men.accessories1') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/wallet">{{ $t('global.header.navList.men.accessories2') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/note book">{{ $t('global.header.navList.men.accessories3') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Gift Card">{{ $t('global.header.navList.men.accessories4') }}</router-link>
                          </li>
                        </ul>
                      </template>
                    </base-supmenu>
                  </li>
                  <li>
                    <a @click.prevent="supmenubtns('menfeaturedcbtn')" href="/">{{ $t('global.header.navList.men.featured') }}</a>
                    <span>
                      <font-awesome-icon icon="fa-solid fa-angle-right" />
                    </span>
                    <base-supmenu @back-arrow="backarrow('menfeaturedcbtnval')" :show ='menfeaturedcbtnval'>
                      <template v-slot:title>{{ $t('global.header.navList.men.featured') }}</template>
                      <template v-slot:default>
                        <ul class ='supmenu multisupmenu'>
                          <li>
                            <router-link to="/collections/New Arrivals">{{ $t('global.header.navList.men.allfeat') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/New Arrivals">{{ $t('global.header.navList.men.featured') }}</router-link>
                          </li>
                        </ul>
                      </template>
                    </base-supmenu>
                  </li>
                  <li>
                    <router-link to="/collections/MEN">{{ $t('global.header.navList.men.shopallmen') }}</router-link>
                  </li>
                </ul>
              </template>
            </base-supmenu>
          </li>
          <li>
            <a @click.prevent="supmenubtns('womenscbtn')" href="">{{ $t('global.header.nav.women') }}</a>
            <span>
              <font-awesome-icon icon="fa-solid fa-angle-right" />
            </span>
            <base-supmenu @back-arrow="backarrow('womenscbtnval')" :show ='womenscbtnval'>
              <template v-slot:title>{{ $t('global.header.nav.women') }}</template>
              <template v-slot:default>
                <ul class ='supmenu'>
                  <li><router-link to="/collections/WOMEN">{{ $t('global.header.navList.women.allwomen') }}</router-link></li>
                  <li>
                    <a @click.prevent="supmenubtns('womenstopscbtn')" href="/">{{ $t('global.header.navList.women.top') }}</a>
                    <span>
                      <font-awesome-icon icon="fa-solid fa-angle-right" />
                    </span>
                    <base-supmenu @back-arrow="backarrow('womenstopscbtnval')" :show ='womenstopscbtnval'>
                      <template v-slot:title>{{ $t('global.header.navList.women.top') }}</template>
                      <template v-slot:default>
                        <ul class ='supmenu multisupmenu'>
                          <li>
                            <router-link to="">{{ $t('global.header.navList.women.alltops') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Basics">{{ $t('global.header.navList.women.top1') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Graphics">{{ $t('global.header.navList.women.top2') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Pullovers">{{ $t('global.header.navList.women.top3') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Zippers">{{ $t('global.header.navList.women.top4') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Sweatshirts">{{ $t('global.header.navList.women.top5') }}</router-link>
                          </li>
                        </ul>
                      </template>
                    </base-supmenu>
                  </li>
                  <li>
                    <a @click.prevent="supmenubtns('womensbottomscbtn')" href="/">{{ $t('global.header.navList.women.bottom') }}</a>
                    <span>
                      <font-awesome-icon icon="fa-solid fa-angle-right" />
                    </span>
                    <base-supmenu @back-arrow="backarrow('womensbottomscbtnval')" :show ='womensbottomscbtnval'>
                      <template v-slot:title>{{ $t('global.header.navList.women.bottom') }}</template>
                      <template v-slot:default>
                        <ul class ='supmenu multisupmenu'>
                          <li>
                            <router-link to="/">{{ $t('global.header.navList.women.allbottoms') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/skirts">{{ $t('global.header.navList.women.bottom1') }}</router-link>
                          </li>
                        </ul>
                      </template>
                    </base-supmenu>
                  </li>
                  <li>
                    <a @click.prevent="supmenubtns('womensdressescbtn')" href="">{{ $t('global.header.navList.women.dress') }}</a>
                    <span>
                      <font-awesome-icon icon="fa-solid fa-angle-right" />
                    </span>
                    <base-supmenu @back-arrow="backarrow('womensdressescbtnval')" :show ='womensdressescbtnval'>
                      <template v-slot:title>{{ $t('global.header.navList.women.dress') }}</template>
                      <template v-slot:default>
                        <ul class ='supmenu multisupmenu'>
                          <li>
                            <router-link to="/collections/Dress">{{ $t('global.header.navList.women.alldress') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Dress">{{ $t('global.header.navList.women.dress1') }}</router-link>
                          </li>
                        </ul>
                      </template>
                    </base-supmenu>
                  </li>
                  <li>
                    <a @click.prevent="supmenubtns('womensaccesscbtn')" href="/">{{ $t('global.header.navList.women.accessories') }}</a>
                    <span>
                      <font-awesome-icon icon="fa-solid fa-angle-right" />
                    </span>
                    <base-supmenu @back-arrow="backarrow('womensaccesscbtnval')" :show ='womensaccesscbtnval'>
                      <template v-slot:title>{{ $t('global.header.navList.women.accessories') }}</template>
                      <template v-slot:default>
                        <ul class ='supmenu multisupmenu'>
                          <li>
                            <router-link to="/collections/ACCESSORIES">{{ $t('global.header.navList.women.allaccesswomen') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Scarf">{{ $t('global.header.navList.women.accessories1') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/socks">{{ $t('global.header.navList.women.accessories2') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/note book">{{ $t('global.header.navList.women.accessories3') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Gift Card">{{ $t('global.header.navList.women.accessories4') }}</router-link>
                          </li>
                        </ul>
                      </template>
                    </base-supmenu>
                  </li>
                  <li>
                    <a @click.prevent="supmenubtns('womensfeaturedcbtn')" href="">{{ $t('global.header.navList.women.featured') }}</a>
                    <span>
                      <font-awesome-icon icon="fa-solid fa-angle-right" />
                    </span>
                    <base-supmenu @back-arrow="backarrow('womensfeaturedcbtnval')" :show ='womensfeaturedcbtnval'>
                      <template v-slot:title>{{ $t('global.header.navList.women.featured') }}</template>
                      <template v-slot:default>
                        <ul class ='supmenu multisupmenu'>
                          <li>
                            <router-link to="/collections/New Arrivals">{{ $t('global.header.navList.women.allfeatured') }}</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/New Arrivals">{{ $t('global.header.navList.women.featured1') }}</router-link>
                          </li>
                        </ul>
                      </template>
                    </base-supmenu>
                  </li>
                  <li>
                    <a @click.prevent="supmenubtns('womensfeaturedcbtn')" href="/">{{ $t('global.header.navList.women.shopallwomen') }}</a>
                  </li>
                </ul>
              </template>
            </base-supmenu>
            </li>
          <li>
            <a @click.prevent="supmenubtns('kidscbtn')" href="">{{ $t('global.header.nav.kids') }}</a>
            <span>
              <font-awesome-icon icon="fa-solid fa-angle-right" />
            </span>
            <base-supmenu @back-arrow="backarrow('kidscbtnval')" :show ='kidscbtnval'>
              <template v-slot:title>{{ $t('global.header.nav.kids') }}</template>
              <template v-slot:default>
                <ul class ='supmenu'>
                  <li><router-link to="/collections/KIDS">{{ $t('global.header.navList.kids.allkids') }}</router-link></li>
                  <li>
                    <router-link to="/collections/Graphics">{{ $t('global.header.navList.kids.top2') }}</router-link>
                  </li>
                  <li>
                    <router-link to="/collections/Zippers">{{ $t('global.header.navList.kids.top3') }}</router-link>
                  </li>
                  <li>
                    <router-link to="/collections/Pants">{{ $t('global.header.navList.kids.top1') }}</router-link>
                  </li>
                </ul>
              </template>
            </base-supmenu>
            </li>
          <li><router-link to="/collections/ACCESSORIES">{{ $t('global.header.nav.accessories') }}</router-link></li>
        </ul>
      </div>
      <div class="info">
        <router-link to="/Collections/wishlist">{{ $t('global.header.mywishlist') }}</router-link>
        <div class="langBtn">
          <span class="head collapsed" type='button' data-bs-toggle="collapse" data-bs-target="#lang" aria-expanded="false" aria-controls="lang">
            {{ $t('global.header.lang') }}
            <font-awesome-icon icon="fa-solid fa-language" />
            </span>
          <div class="lang-container collapse" id="lang">
            <span @click="changeLang('en')" class="lang">English</span>
            <span @click="changeLang('ar')" class="lang">Arabic</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  props: ['show'],
  data () {
    return {
      loadSpinLangError: ''
    }
  },
  methods: {
    async changeLang (lang) {
      const linkLang = document.querySelector('.main-font')
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
        this.loadSpinLangError = error || 'changing lang went wrong'
      }
    },
    closebar () {
      this.$store.dispatch('mainmenu/closebtn')
      this.$store.dispatch('mainmenu/closeall')
      window.document.body.classList.remove('stop-scrolling')
    },
    supmenubtns (name) {
      this.$store.dispatch('mainmenu/supmenubtns', name)
    },
    backarrow (name) {
      this.$store.dispatch('mainmenu/backarrow', name)
    }
  },
  computed: {
    mencbtnval () {
      return this.$store.getters['mainmenu/mencbtn']
    },
    womenscbtnval () {
      return this.$store.getters['mainmenu/womenscbtn']
    },
    kidscbtnval () {
      return this.$store.getters['mainmenu/kidscbtn']
    },
    mentopscbtnval () {
      return this.$store.getters['mainmenu/mentopscbtn']
    },
    menbottomscbtnval () {
      return this.$store.getters['mainmenu/menbottomscbtn']
    },
    menjilbabcbtnval () {
      return this.$store.getters['mainmenu/menjilbabcbtn']
    },
    menaccesscbtnval () {
      return this.$store.getters['mainmenu/menaccesscbtn']
    },
    menfeaturedcbtnval () {
      return this.$store.getters['mainmenu/menfeaturedcbtn']
    },
    womenstopscbtnval () {
      return this.$store.getters['mainmenu/womenstopscbtn']
    },
    womensbottomscbtnval () {
      return this.$store.getters['mainmenu/womensbottomscbtn']
    },
    womensdressescbtnval () {
      return this.$store.getters['mainmenu/womensdressescbtn']
    },
    womensaccesscbtnval () {
      return this.$store.getters['mainmenu/womensaccesscbtn']
    },
    womensfeaturedcbtnval () {
      return this.$store.getters['mainmenu/womensfeaturedcbtn']
    }
  }
}
</script>

<style lang="scss" scoped>
  .sidebar{
    position: fixed;
    left: 0;
    top: 0;
    background-color: white;
    height: 100vh;
    padding: 0 0 100px;
    color: black ;
    z-index: 1000;
  }
  .closebtn{
    position: absolute;
    top: 0;
    right: -40px;
    height: 40px;
    width: 40px;
    background-color: #BF1010;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: 500;
    cursor: pointer;
    transition-duration: 0.2s;
    &:hover{
      background-color: #eb1212;
    }
  }
  .shadow{
    position: fixed;
    z-index: 1000;
  }
  .links{
    ul{
      &.supmenu{
        li{
          a{
            font-size: 12px;
          }
        }
      }
      &.multisupmenu{
        li{
          border: none;
          a{
            font-size: 11px;
            font-weight: 600;
          }
        }
      }
      li{
        border-bottom: 1px solid #ebebeb;
        position: relative;
          &:hover{
            background-color: #f8f8f8;
          }
        a{
          display: block;
          color: #505050;
          text-transform: uppercase;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: .05em;
          transition-duration: 0.2s;
          padding: 13px 20px 11px;
          &.supa{
            font-size: 11px;
            font-weight: 600;
          }
          &:hover {
            color: #3adb6b;
            &:hover ~ span {
              color: #a6ecbb;
            }
          }
        }
        span{
          position: absolute;
          right: 20px;
          top: 10px;
          color: #dbdbdc;
        }
      }
    }
  }
  .info{
    a{
      display: block;
      padding: 17px 20px 6px;
      color: #3c3c3c;
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      transition-duration: 0.2s;
      cursor: pointer;
      &:hover{
        color: #3adb6b;
      }
    }
  }
  .langBtn{
    padding: 17px 20px;
    margin-top: 10px;
    border-top: 1px solid #ebebeb;
    color: #505050;
    .head{
      display: flex;
      align-items: center;
      font-size: 17px;
      font-weight: 500;
      &.collapsed{
        svg{
          color: #505050;
        }
      }
      svg{
        color: #3adb6b;
        margin-left: 10px;
      }
    }
    .lang-container{
      margin-top: 10px;
      position: relative;
      .lang{
        &:active{
          box-shadow: 1px 0px 5px 0px rgb(173, 171, 171);
        }
        display: inline-block;
        margin-top: 10px;
        margin-right: 15px;
        padding-bottom: 3px;
        border-radius: 6px;
        background-color: #e7e8ea;
        padding: 10px 15px;
        font-weight: 500;
        user-select: none;
        cursor: pointer;
        &:last-of-type{
          margin: 0 15px;
        }
      }
    }
  }
  .slidebar-enter-from,
  .slidebar-leave-to{
    transform: translateX(-300px);
    opacity: 0;
  }
  .slidebar-leave-active{
    transition: all 0.4s ease-in;
  }
  .slidebar-enter-active{
    transition: all 0.4s ease-out;
  }
  .slidebar-leave-from,
  .slidebar-enter-to{
    transform: translateX(0);
    opacity: 1;
  }
</style>
