<template>
  <transition name="up">
    <div v-if="show" class="main">
      <div v-if="menstate" class="row">
        <div class="col-2">
          <span>{{ $t('global.header.navList.men.top') }}</span>
          <ul>
            <li><router-link class="arouter" to='/collections/T-shirts'>{{ $t('global.header.navList.men.top1') }}</router-link></li>
            <li><router-link class="arouter" to="/collections/Graphics">{{ $t('global.header.navList.men.top2') }}</router-link></li>
            <li><router-link class="arouter" to="/collections/Grafit-tee">{{ $t('global.header.navList.men.top3') }}</router-link></li>
            <li><router-link class="arouter" to="/collections/Polo">{{ $t('global.header.navList.men.top4') }}</router-link></li>
            <li><router-link class="arouter" to="/collections/Shirts">{{ $t('global.header.navList.men.top5') }}</router-link></li>
            <li><router-link class="arouter" to="/collections/Long-Sleeves">{{ $t('global.header.navList.men.top6') }}</router-link></li>
            <li><router-link class="arouter" to="/collections/Hoodies">{{ $t('global.header.navList.men.top7') }}</router-link></li>
            <li><router-link class="arouter" to="/collections/Zippers">{{ $t('global.header.navList.men.top8') }}</router-link></li>
            <li><router-link class="arouter" to="/collections/Pullovers">{{ $t('global.header.navList.men.top9') }}</router-link></li>
            <li><router-link class="arouter" to="/collections/Jackets & Coats">{{ $t('global.header.navList.men.top10') }}</router-link></li>
          </ul>
        </div>
        <div class="col-2">
          <span>{{ $t('global.header.navList.men.bottom') }}</span>
          <ul>
            <li><router-link class="arouter" to="/collections/jeans">{{ $t('global.header.navList.men.bottom1') }}</router-link></li>
            <li><router-link class="arouter" to="/collections/Jogger">{{ $t('global.header.navList.men.bottom2') }}</router-link></li>
            <li><router-link class="arouter" to="/collections/sweatPants">{{ $t('global.header.navList.men.bottom3') }}</router-link></li>
          </ul>
          <span>{{ $t('global.header.navList.men.shopallmen') }}</span>
        </div>
        <div class="col-2">
          <span>{{ $t('global.header.navList.men.jilbab') }}</span>
          <ul>
            <li><router-link class="arouter" to="/collections/stabraq jilbab">{{ $t('global.header.navList.men.jilbab1') }}</router-link></li>
          </ul>
          <span>{{ $t('global.header.navList.men.featured') }}</span>
          <ul>
            <li><router-link class="arouter" to="/collections/New Arrivals">{{ $t('global.header.navList.men.newarr') }}</router-link></li>
          </ul>
        </div>
        <div class="col-2">
          <span>{{ $t('global.header.navList.men.accessories') }}</span>
          <ul>
            <li><router-link class="arouter" to="/collections/Socks">{{ $t('global.header.navList.men.accessories1') }}</router-link></li>
            <li><router-link class="arouter" to="/collections/wallet">{{ $t('global.header.navList.men.accessories2') }}</router-link></li>
            <li><router-link class="arouter" to="/collections/note book">{{ $t('global.header.navList.men.accessories3') }}</router-link></li>
            <li><router-link class="arouter" to="/collections/Gift Card">{{ $t('global.header.navList.men.accessories4') }}</router-link></li>
          </ul>
        </div>
        <div class="col-4 d-flex justify-content-center">
          <div class="image position-relative">
            <router-link to="/collections/MEN">
              <img src="../../../imgs\Artboard_5_8e859f62-8c6a-4574-ae73-6e08ffba58a1_210x.jpg" alt="">
            </router-link>
            <div class="shadow"></div>
          </div>
        </div>
      </div>
      <div v-if="!menstate" class="row">
        <div class="col-2">
          <span>{{ $t('global.header.navList.women.top') }}</span>
          <ul>
            <li><router-link class="arouter" to="/collections/Basics">{{ $t('global.header.navList.women.top1') }}</router-link></li>
            <li><router-link class="arouter" to="/collections/Graphics">{{ $t('global.header.navList.women.top2') }}</router-link></li>
            <li><router-link class="arouter" to="/collections/Pullivers">{{ $t('global.header.navList.women.top3') }}</router-link></li>
            <li><router-link class="arouter" to="/collections/Zippers">{{ $t('global.header.navList.women.top4') }}</router-link></li>
            <li><router-link class="arouter" to="/collections/Sweatshirts">{{ $t('global.header.navList.women.top5') }}</router-link></li>
          </ul>
          <span>{{ $t('global.header.navList.women.shopallwomen') }}</span>
          <ul>
          </ul>
        </div>
        <div class="col-2">
          <span>{{ $t('global.header.navList.women.bottom') }}</span>
          <ul>
            <li><router-link class="arouter" to="/collections/skirts">{{ $t('global.header.navList.women.bottom1') }}</router-link></li>
          </ul>
          <span>{{ $t('global.header.navList.women.accessories') }}</span>
          <ul>
            <li><router-link class="arouter" to="/collections/Scarf">{{ $t('global.header.navList.women.accessories1') }}</router-link></li>
            <li><router-link class="arouter" to="/collections/Socks">{{ $t('global.header.navList.women.accessories2') }}</router-link></li>
            <li><router-link class="arouter" to="/collections/Notebooks">{{ $t('global.header.navList.women.accessories3') }}</router-link></li>
            <li><router-link class="arouter" to="/collections/Giftcard">{{ $t('global.header.navList.women.accessories4') }}</router-link></li>
          </ul>
        </div>
        <div class="col-2">
          <span>{{ $t('global.header.navList.women.dress') }}</span>
          <ul>
            <li><router-link class="arouter" to="/collections/Dress">{{ $t('global.header.navList.women.dress1') }}</router-link></li>
          </ul>
          <span>{{ $t('global.header.navList.women.featured') }}</span>
          <ul>
            <li><router-link class="arouter" to="/collections/New Arrivals">{{ $t('global.header.navList.women.featured1') }}</router-link></li>
          </ul>
        </div>
        <div class="col-6 d-flex justify-content-center">
          <div class="position-relative">
            <div>
              <div class="d-flex gap-2">
                <div>
                  <div class="image">
                    <router-link to="/women">
                      <img src="../../../imgs/womenLi_2.avif" alt="">
                    </router-link>
                    <div class="shadow"></div>
                  </div>
                  <div class="image mt-2">
                    <router-link to="/women">
                      <img src="../../../imgs/womenLi_3.avif" alt="">
                    </router-link>
                    <div class="shadow"></div>
                  </div>
                </div>
                <div class="image">
                <router-link to="/women">
                  <img src="../../../imgs/womenLi_1.avif" alt="">
                </router-link>
                <div class="shadow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['show', 'menstate'],
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .main{
    background-color: #f8f8f8;
    position: absolute;
    top: 65px;
    left: 0;
    width: 100%;
    padding: 20px;
    height: fit-content;
    span{
      font-weight: 700;
      font-size: 12px;
      text-transform: uppercase;
      color: black;
    }
    .col-2,
    .col-4{
      text-align: center;
      ul{
        margin-bottom: 15px;
        min-height: 100px;
        padding: 0;
        li{
          padding-top: 5px;
          padding-bottom: 5px;
          font-size: 12px;
          &:hover{
            .arouter{
              color: #3adb6b;
              &::before{
                width: 100%;
              }
            }
            cursor: pointer;
          }
          .arouter{
            color:#3c3c3c ;
            &:hover{
              color: #3adb6b;
            }
            &::before{
              background-color: #3adb6b;
              bottom: -4px;
            }
          }
        }
      }
    }
  }
  .image{
    overflow: hidden;
    width: fit-content;
    position: relative;
    cursor: pointer;
    .shadow{
      background-color: transparent;
      transition: all .6s ease-in-out;
    }
    &:hover .shadow{
      background-color: rgba(0, 0, 0, .4);
    }
    img{
      transition: all .6s ease-out;
    }
    &:hover img{
      transform: scale(1.2);
    }
  }
  .up-enter-from{
    transform: translateY(30px);
    opacity: 0;
  }
  .up-enter-to{
    transform: translateY(0px);
    opacity: 1;
  }
  .up-enter-active{
    transition: all 0.2s ease-in;
  }
</style>
