<template>
<div @click="closebar" v-if="show" class="shadow"></div>
<transition name="slidebar">
  <div v-if="show" class="sidebar col-10 col-lg-3 col-md-4">
    <div class="closebtn" @click="closebar">X</div>
    <div class="dropdown-main-menu">
      <div class="links">
        <ul>
          <li>
            <a @click.prevent="supmenubtns('mencbtn')" href="">men</a>
            <span>
              <font-awesome-icon icon="fa-solid fa-angle-right" />
            </span>
            <base-supmenu @back-arrow="backarrow('mencbtnval')" :show ='mencbtnval'>
              <template v-slot:title>men</template>
              <template v-slot:default>
                <ul class ='supmenu'>
                  <li>
                    <router-link to="/collections/MEN">all men</router-link>
                  </li>
                  <li>
                    <a @click.prevent="supmenubtns('mentopscbtn')" href="">tops</a>
                    <span>
                      <font-awesome-icon icon="fa-solid fa-angle-right" />
                    </span>
                    <base-supmenu @back-arrow="backarrow('mentopscbtnval')" :show ='mentopscbtnval'>
                      <template v-slot:title>tops</template>
                      <template v-slot:default>
                        <ul class ='supmenu multisupmenu'>
                          <li>
                            <router-link to="/">all tops</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/T-shirts">t-shirts</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Graphics">graphics</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Grafit-tee">grafit-tee</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Polo">polo</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Shirts">shirts</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Long-Sleeves">long-sleeves</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Hoodies">hoodies & sweatshirts</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Zippers">zippers</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Pullovers">pullovers</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Jackets & Coats">jackets & oats</router-link>
                          </li>
                        </ul>
                      </template>
                    </base-supmenu>
                  </li>
                  <li>
                    <a @click.prevent="supmenubtns('menbottomscbtn')" href="">bottoms</a>
                    <span>
                      <font-awesome-icon icon="fa-solid fa-angle-right" />
                    </span>
                    <base-supmenu @back-arrow="backarrow('menbottomscbtnval')" :show ='menbottomscbtnval'>
                      <template v-slot:title>bottoms</template>
                      <template v-slot:default>
                        <ul class ='supmenu multisupmenu'>
                          <li>
                            <router-link to="/">all bottoms</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/jeans">jeans</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Jogger">jogger</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/sweatPants">sweatpants</router-link>
                          </li>
                        </ul>
                      </template>
                    </base-supmenu>
                  </li>
                  <li>
                    <a @click.prevent="supmenubtns('menjilbabcbtn')" href="">jilbab</a>
                    <span>
                      <font-awesome-icon icon="fa-solid fa-angle-right" />
                    </span>
                    <base-supmenu @back-arrow="backarrow('menjilbabcbtnval')" :show ='menjilbabcbtnval'>
                      <template v-slot:title>jilbab</template>
                      <template v-slot:default>
                        <ul class ='supmenu multisupmenu'>
                          <li>
                            <router-link to="/">all jilbab</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/stabraq jilbab">jilbab</router-link>
                          </li>
                        </ul>
                      </template>
                    </base-supmenu>
                  </li>
                  <li>
                    <a @click.prevent="supmenubtns('menaccesscbtn')" href="">accessories</a>
                    <span>
                      <font-awesome-icon icon="fa-solid fa-angle-right" />
                    </span>
                    <base-supmenu @back-arrow="backarrow('menaccesscbtnval')" :show ='menaccesscbtnval'>
                      <template v-slot:title>accessories</template>
                      <template v-slot:default>
                        <ul class ='supmenu multisupmenu'>
                          <li>
                            <router-link to="/collections/ACCESSORIES">all accessories</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Socks">socks</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/wallet">wallet</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/note book">notebooks</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Gift Card">gift card</router-link>
                          </li>
                        </ul>
                      </template>
                    </base-supmenu>
                  </li>
                  <li>
                    <a @click.prevent="supmenubtns('menfeaturedcbtn')" href="/">featured</a>
                    <span>
                      <font-awesome-icon icon="fa-solid fa-angle-right" />
                    </span>
                    <base-supmenu @back-arrow="backarrow('menfeaturedcbtnval')" :show ='menfeaturedcbtnval'>
                      <template v-slot:title>featured</template>
                      <template v-slot:default>
                        <ul class ='supmenu multisupmenu'>
                          <li>
                            <router-link to="/collections/New Arrivals">all featured</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/New Arrivals">featured</router-link>
                          </li>
                        </ul>
                      </template>
                    </base-supmenu>
                  </li>
                  <li>
                    <router-link to="/collections/MEN">shop all men</router-link>
                  </li>
                </ul>
              </template>
            </base-supmenu>
          </li>
          <li>
            <a @click.prevent="supmenubtns('womenscbtn')" href="">women</a>
            <span>
              <font-awesome-icon icon="fa-solid fa-angle-right" />
            </span>
            <base-supmenu @back-arrow="backarrow('womenscbtnval')" :show ='womenscbtnval'>
              <template v-slot:title>women</template>
              <template v-slot:default>
                <ul class ='supmenu'>
                  <li><router-link to="/collections/WOMEN">all women</router-link></li>
                  <li>
                    <a @click.prevent="supmenubtns('womenstopscbtn')" href="/">tops</a>
                    <span>
                      <font-awesome-icon icon="fa-solid fa-angle-right" />
                    </span>
                    <base-supmenu @back-arrow="backarrow('womenstopscbtnval')" :show ='womenstopscbtnval'>
                      <template v-slot:title>tops</template>
                      <template v-slot:default>
                        <ul class ='supmenu multisupmenu'>
                          <li>
                            <router-link to="">all tops</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Basics">basics</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Graphics">graphics</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Pullovers">pullovers</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Zippers">zippers</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Sweatshirts">sweatshirts</router-link>
                          </li>
                        </ul>
                      </template>
                    </base-supmenu>
                  </li>
                  <li>
                    <a @click.prevent="supmenubtns('womensbottomscbtn')" href="/">bottoms</a>
                    <span>
                      <font-awesome-icon icon="fa-solid fa-angle-right" />
                    </span>
                    <base-supmenu @back-arrow="backarrow('womensbottomscbtnval')" :show ='womensbottomscbtnval'>
                      <template v-slot:title>bottoms</template>
                      <template v-slot:default>
                        <ul class ='supmenu multisupmenu'>
                          <li>
                            <router-link to="/">all bottoms</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/skirts">skirts</router-link>
                          </li>
                        </ul>
                      </template>
                    </base-supmenu>
                  </li>
                  <li>
                    <a @click.prevent="supmenubtns('womensdressescbtn')" href="">dresses & jumpsuits</a>
                    <span>
                      <font-awesome-icon icon="fa-solid fa-angle-right" />
                    </span>
                    <base-supmenu @back-arrow="backarrow('womensdressescbtnval')" :show ='womensdressescbtnval'>
                      <template v-slot:title>dresses & jumpsuits</template>
                      <template v-slot:default>
                        <ul class ='supmenu multisupmenu'>
                          <li>
                            <router-link to="/collections/Dress">all dresses & jumpsuits</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Dress">dress</router-link>
                          </li>
                        </ul>
                      </template>
                    </base-supmenu>
                  </li>
                  <li>
                    <a @click.prevent="supmenubtns('womensaccesscbtn')" href="/">accessories</a>
                    <span>
                      <font-awesome-icon icon="fa-solid fa-angle-right" />
                    </span>
                    <base-supmenu @back-arrow="backarrow('womensaccesscbtnval')" :show ='womensaccesscbtnval'>
                      <template v-slot:title>accessories</template>
                      <template v-slot:default>
                        <ul class ='supmenu multisupmenu'>
                          <li>
                            <router-link to="/collections/ACCESSORIES">all accessories</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Scarf">scarf</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/socks">socks</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/note book">notebooks</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/Gift Card">gift card</router-link>
                          </li>
                        </ul>
                      </template>
                    </base-supmenu>
                  </li>
                  <li>
                    <a @click.prevent="supmenubtns('womensfeaturedcbtn')" href="">featured</a>
                    <span>
                      <font-awesome-icon icon="fa-solid fa-angle-right" />
                    </span>
                    <base-supmenu @back-arrow="backarrow('womensfeaturedcbtnval')" :show ='womensfeaturedcbtnval'>
                      <template v-slot:title>featured</template>
                      <template v-slot:default>
                        <ul class ='supmenu multisupmenu'>
                          <li>
                            <router-link to="/collections/New Arrivals">all featured</router-link>
                          </li>
                          <li>
                            <router-link to="/collections/New Arrivals">new arrivals</router-link>
                          </li>
                        </ul>
                      </template>
                    </base-supmenu>
                  </li>
                  <li>
                    <a @click.prevent="supmenubtns('womensfeaturedcbtn')" href="/">shop all women</a>
                  </li>
                </ul>
              </template>
            </base-supmenu>
            </li>
          <li>
            <a @click.prevent="supmenubtns('kidscbtn')" href="">kids</a>
            <span>
              <font-awesome-icon icon="fa-solid fa-angle-right" />
            </span>
            <base-supmenu @back-arrow="backarrow('kidscbtnval')" :show ='kidscbtnval'>
              <template v-slot:title>kids</template>
              <template v-slot:default>
                <ul class ='supmenu'>
                  <li><router-link to="/collections/KIDS">all kids</router-link></li>
                  <li>
                    <router-link to="/collections/Graphics">graphics</router-link>
                  </li>
                  <li>
                    <router-link to="/collections/Zippers">zippers</router-link>
                  </li>
                  <li>
                    <router-link to="/collections/Pants">pants</router-link>
                  </li>
                </ul>
              </template>
            </base-supmenu>
            </li>
          <li><router-link to="/collections/ACCESSORIES">accessories</router-link></li>
        </ul>
      </div>
      <div class="info">
        <router-link to="/Collections/wishlist">my wish lists</router-link>
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
    }
  },
  methods: {
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
    margin-top: 20px;
    a{
      display: block;
      padding: 7px 20px 6px;
      color: #3c3c3c;
      font-size: 12px;
      font-weight: 400;
      text-transform: uppercase;
      transition-duration: 0.2s;
      cursor: pointer;
      &:hover{
        color: #3adb6b;
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
