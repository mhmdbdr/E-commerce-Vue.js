<template>
  <transition name="up">
    <div v-if="show" class="main">
      <div v-if="menstate" class="row">
        <div class="col-2">
          <span>TOPS</span>
          <ul>
            <li><router-link class="arouter" to='/collections/T-shirts'>T-shirts</router-link></li>
            <li><router-link class="arouter" to="/collections/Graphics">Graphics</router-link></li>
            <li><router-link class="arouter" to="/collections/Grafit-tee">Grafit-tee</router-link></li>
            <li><router-link class="arouter" to="/collections/Polo">Polo</router-link></li>
            <li><router-link class="arouter" to="/collections/Shirts">Shirts</router-link></li>
            <li><router-link class="arouter" to="/collections/Long-Sleeves">Long-Sleeves</router-link></li>
            <li><router-link class="arouter" to="/collections/Hoodies">Hoodies</router-link></li>
            <li><router-link class="arouter" to="/collections/Zippers">Zippers</router-link></li>
            <li><router-link class="arouter" to="/collections/Pullovers">Pullovers</router-link></li>
            <li><router-link class="arouter" to="/collections/Jackets & Coats">Jackets & Coats</router-link></li>
          </ul>
        </div>
        <div class="col-2">
          <span>Bottoms</span>
          <ul>
            <li><router-link class="arouter" to="/collections/jeans">jeans</router-link></li>
            <li><router-link class="arouter" to="/collections/Jogger">Jogger</router-link></li>
            <li><router-link class="arouter" to="/collections/sweatPants">sweatPants</router-link></li>
          </ul>
          <span>Shop All Men</span>
        </div>
        <div class="col-2">
          <span>Jilbab</span>
          <ul>
            <li><router-link class="arouter" to="/collections/stabraq jilbab">stabraq jilbab</router-link></li>
          </ul>
          <span>featured</span>
          <ul>
            <li><router-link class="arouter" to="/collections/New Arrivals">New Arrivals</router-link></li>
          </ul>
        </div>
        <div class="col-2">
          <span>Accessories</span>
          <ul>
            <li><router-link class="arouter" to="/collections/Socks">Socks</router-link></li>
            <li><router-link class="arouter" to="/collections/wallet">wallet</router-link></li>
            <li><router-link class="arouter" to="/collections/note book">note book</router-link></li>
            <li><router-link class="arouter" to="/collections/Gift Card">Gift Card</router-link></li>
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
          <span>TOPS</span>
          <ul>
            <li><router-link class="arouter" to="/collections/Basics">Basics</router-link></li>
            <li><router-link class="arouter" to="/collections/Graphics">Graphics</router-link></li>
            <li><router-link class="arouter" to="/collections/Pullivers">Pullivers</router-link></li>
            <li><router-link class="arouter" to="/collections/Zippers">Zippers</router-link></li>
            <li><router-link class="arouter" to="/collections/Sweatshirts">Sweatshirts</router-link></li>
          </ul>
          <span>Shop All women</span>
          <ul>
          </ul>
        </div>
        <div class="col-2">
          <span>Bottoms</span>
          <ul>
            <li><router-link class="arouter" to="/collections/skirts">skirts</router-link></li>
          </ul>
          <span>Accessories</span>
          <ul>
            <li><router-link class="arouter" to="/collections/Scarf">Scarf</router-link></li>
            <li><router-link class="arouter" to="/collections/Socks">Socks</router-link></li>
            <li><router-link class="arouter" to="/collections/Notebooks">Notebooks</router-link></li>
            <li><router-link class="arouter" to="/collections/Giftcard">Giftcard</router-link></li>
            <li><router-link class="arouter" to="/collections/skirts">skirts</router-link></li>
          </ul>
        </div>
        <div class="col-2">
          <span>Dresses & jumpsits</span>
          <ul>
            <li><router-link class="arouter" to="/collections/Dress">Dress</router-link></li>
          </ul>
          <span>featured</span>
          <ul>
            <li><router-link class="arouter" to="/collections/New Arrivals">New Arrivals</router-link></li>
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
