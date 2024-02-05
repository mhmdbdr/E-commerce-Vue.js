<template>
<div>
  <div class="whitesp d-block d-lg-none"></div>
  <div class="homepage">
    <div class="main-carousel">
      <div class="carousel slide" id="maincarousel" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <a @click.prevent="" href="">
              <img class="d-none d-md-block" src="../../imgs/homepage/carousel-1.webp" alt="">
              <img class="d-block d-md-none" src="../../imgs/homepage/carousel-1-mobile.webp" alt="">
            </a>
          </div>
          <div class="carousel-item">
            <a @click.prevent="" href="">
              <img class="d-none d-md-block" src="../../imgs/homepage/carousel-2.webp" alt="">
              <img class="d-block d-md-none" src="../../imgs/homepage/carousel-2-mobile.webp" alt="">
            </a>
          </div>
        </div>
        <button type="button" data-bs-target='#maincarousel' class="carbtn left d-none d-lg-block" data-bs-slide="prev">
          <font-awesome-icon icon="fa-solid fa-arrow-left-long" aria-hidden="true" role="button"/>
        </button>
        <button type="button" data-bs-target='#maincarousel' class="carbtn right d-none d-lg-block" data-bs-slide="next">
          <font-awesome-icon icon="fa-solid fa-arrow-right-long" aria-hidden="true" role="button"/>
        </button>
      </div>
    </div>
    <div class="container">
      <div class="lookingfor">
        <h3>{{ $t('homePage.lookingfor.title') }}</h3>
        <div class="row items">
          <div class="col-4 col-md-3 col-lg-2 item">
            <div class="item-box">
              <div class="img-box">
                <router-link to="/collections/T-shirts">
                  <img src="../../imgs/homepage/T_Shirt_1024x1024_crop_center.webp" alt="">
                </router-link>
              </div>
              <span class="arouter">
                <router-link to="/collections/T-shirts">{{ $t('homePage.lookingfor.tshirts') }}</router-link>
              </span>
            </div>
          </div>
          <div class="col-4 col-md-3 col-lg-2 item">
            <div class="item-box">
              <div class="img-box">
                <router-link to="/collections/Pants">
                  <img src="../../imgs/homepage/Pants_3b68dd40-4c25-4e5a-bafd-0b7e32efaf7e_1024x1024_crop_center.webp" alt="">
                </router-link>
              </div>
              <span class="arouter">
                <router-link to="/collections/Pants">{{ $t('homePage.lookingfor.pants') }}</router-link>
              </span>
            </div>
          </div>
          <div class="col-4 col-md-3 col-lg-2 item">
            <div class="item-box">
              <div class="img-box">
                <router-link to="/collections/WOMEN">
                  <img src="../../imgs/homepage/Women_1024x1024_crop_center.webp" alt="">
                </router-link>
              </div>
              <span class="arouter">
                <router-link to="/collections/WOMEN">{{ $t('homePage.lookingfor.women') }}</router-link>
              </span>
            </div>
          </div>
          <div class="col-4 col-md-3 col-lg-2 item">
            <div class="item-box">
              <div class="img-box">
                <router-link to="/collections/KIDS">
                  <img src="../../imgs/homepage/Kids_1024x1024_crop_center.webp" alt="">
                </router-link>
              </div>
              <span class="arouter">
                <router-link to="/collections/KIDS">{{ $t('homePage.lookingfor.kids') }}</router-link>
              </span>
            </div>
          </div>
          <div class="col-4 col-md-3 col-lg-2 item">
            <div class="item-box">
              <div class="img-box">
                <router-link to="/collections/BAGS">
                  <img src="../../imgs/homepage/Artboard_10_1024x1024_crop_center.webp" alt="">
                </router-link>
              </div>
              <span class="arouter">
                <router-link to="/collections/BAGS">{{ $t('homePage.lookingfor.bags') }}</router-link>
              </span>
            </div>
          </div>
          <div class="col-4 col-md-3 col-lg-2 item">
            <div class="item-box">
              <div class="img-box">
                <router-link to="/collections/ACCESSORIES">
                  <img src="../../imgs/homepage/Accessories_1024x1024_crop_center.avif" alt="">
                </router-link>
              </div>
              <span class="arouter">
                <router-link to="/collections/ACCESSORIES">{{ $t('homePage.lookingfor.accessories') }}</router-link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="slide-carousel-1 row">
      <div class="col-12 col-md-3">
        <div class="info">
        <p>{{ $t('homePage.newitems.head') }}</p>
        <span class="text-uppercase">{{ $t('homePage.newitems.p') }}</span>
        </div>
      </div>
      <div class="products col-12 col-md-9">
        <carousel v-bind="settings" :breakpoints="breakpoints" :dir="pageDir">
          <slide v-for="product in filterData" :key="product.id">
            <base-card :id ='product.id' :name='product.product_name' :price='product.price' :img='product.main_image' :state='product.state'></base-card>
          </slide>
          <template #addons>
            <navigation>
              <template #next>
                <button class="carbtn right d-none d-lg-flex">
                  <font-awesome-icon icon="fa-solid fa-arrow-right-long"/>
                </button>
              </template>
              <template #prev>
                <button class="carbtn left  d-none d-lg-flex">
                  <font-awesome-icon icon="fa-solid fa-arrow-left-long"/>
                </button>
              </template>
            </navigation>
          </template>
        </carousel>
      </div>
    </div>
    <div class="featured-products row">
      <div class="img-box p-0 col-12 col-lg-6">
        <img src="../../imgs/homepage/imgbox-1.webp" alt="">
      </div>
      <div class="card-box col-12 col-lg-6">
        <div class="card-container">
          <base-card v-for="product in filterData.slice(0,2)" :key="product.id" :id ='product.id' :name='product.product_name' :price='product.price' :img='product.main_image' :state='product.state' :discount='product.discount'></base-card>
        </div>
      </div>
    </div>
    <div class="featured-products d-flex flex-lg-row-reverse mt-3 row">
      <div class="img-box mb-lg-0 p-0 col-12 col-lg-6">
        <img src="../../imgs/homepage/imgbox-2.jpg" alt="">
      </div>
      <div class="card-box col-12 col-lg-6">
        <div class="card-container">
          <base-card v-for="product in filterData.slice(7,9)" :id ='product.id' :key="product.id" :name='product.product_name' :price='product.price' :img='product.main_image' :state='product.state' :discount='product.discount'></base-card>
        </div>
      </div>
    </div>
    <div class="titimg">
      <img class="d-none d-md-block" src="../../imgs/homepage/changemakers.webp" alt="">
      <img class="d-block d-md-none" src="../../imgs/homepage/changemakers-mobile.avif" alt="">
    </div>
    <div class="container">
      <div class="trending">
        <div class="head flex-column flex-md-row align-items-start align-items-md-center">
          <h2>{{ $t('homePage.trending.head') }}</h2>
          <div class="sections">
            <span @click="activetrending" data-trending = 'T-shirts' class="active">{{ $t('homePage.trending.sec1') }}</span>
            <span @click="activetrending" data-trending = 'Pants'>{{ $t('homePage.trending.sec2') }}</span>
            <span @click="activetrending" data-trending = 'ACCESSORIES'>{{ $t('homePage.trending.sec3') }}</span>
          </div>
        </div>
        <div class="trending-carousel">
          <carousel v-bind="trendingsettings" :breakpoints="trendingbreakpoints" :dir="pageDir">
            <slide v-for="product in trendingData" :key="product.id">
              <base-card :id ='product.id' :name='product.product_name' :price='product.price' :img='product.main_image' :state='product.state' :discount='product.discount'></base-card>
            </slide>
            <template #addons>
              <navigation>
                <template #next>
                  <button class="carbtn right d-none d-lg-flex">
                    <font-awesome-icon icon="fa-solid fa-arrow-right-long"/>
                  </button>
                </template>
                <template #prev>
                  <button class="carbtn left d-none d-lg-flex">
                    <font-awesome-icon icon="fa-solid fa-arrow-left-long"/>
                  </button>
                </template>
              </navigation>
            </template>
          </carousel>
        </div>
      </div>
    </div>
    <div class="kidssection d-flex row flex-lg-row-reverse">
      <div class="col-12 col-lg-5 px-0">
        <div class="kidsimg-box">
          <img src="../../imgs/homepage/Kidsimg.webp" alt="">
        </div>
      </div>
      <div class="col-12 col-lg-7">
        <div class="kidscarousel">
          <div class="info">
            <h2>{{ $t('homePage.furturetrend.head') }}</h2>
            <a href="/collections/KIDS">{{ $t('homePage.furturetrend.p') }}</a>
          </div>
          <div class="maincarousel">
            <carousel v-bind="trendingsettings" :breakpoints="trendingbreakpoints" :dir="pageDir">
            <slide v-for="product in filterData" :key="product.id">
              <base-card :id ='product.id' :name='product.product_name' :price='product.price' :img='product.main_image' :state='product.state' :discount='product.discount'></base-card>
            </slide>
            <template #addons>
              <navigation>
                <template #next>
                  <button class="carbtn right d-none d-lg-flex">
                    <font-awesome-icon icon="fa-solid fa-arrow-right-long"/>
                  </button>
                </template>
                <template #prev>
                  <button class="carbtn left d-none d-lg-flex">
                    <font-awesome-icon icon="fa-solid fa-arrow-left-long"/>
                  </button>
                </template>
              </navigation>
            </template>
          </carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
  components: {
    Carousel,
    Slide,
    Navigation
  },
  emits: ['fullmounted'],
  data () {
    return {
      settings: {
        itemsToShow: 2,
        snapAlign: 'start'
      },
      breakpoints: {
        768: {
          itemsToShow: 3,
          snapAlign: 'start'
        },
        1024: {
          itemsToShow: 4,
          itemsToScroll: 4,
          snapAlign: 'start'
        }
      },
      trendingsettings: {
        itemsToShow: 2,
        snapAlign: 'start'
      },
      trendingbreakpoints: {
        768: {
          itemsToShow: 3,
          itemsToScroll: 3,
          snapAlign: 'start'
        }
      },
      activetrend: 'T-shirts',
      loadDataError: null
    }
  },
  computed: {
    pageDir () {
      return this.$store.getters.pageDir
    },
    filterData () {
      const products = this.$store.getters.mData
      return products.filter((product) => {
        return product.state === 'New'
      })
    },
    trendingData () {
      const data = this.$store.getters.mData
      const ret = data.filter((product) => {
        return product.category === this.activetrend
      })
      return ret
    }
  },
  methods: {
    loadData () {
      this.$store.dispatch('fetchData')
    },
    activetrending (e) {
      const spans = document.querySelectorAll('.sections span')
      spans.forEach((span) => {
        span.classList.remove('active')
      })
      e.target.classList.add('active')
      this.activetrend = e.target.dataset.trending
    }
  },
  created () {
    this.loadData()
  },
  mounted () {
    this.$emit('fullmounted')
  }
}
</script>

<style lang="scss" scoped>
.whitesp{
  height: 51px;
  position: relative;
}
.homepage{
  .row{
    margin-left: 0;
    margin-right: 0;
  }
  .whitesp{
    height: 61px;
  }
  .carbtn{
    position: absolute;
    bottom: 50px;
    background-color: #505050;
    width: 70px;
    height: 40px;
    border-radius: 6px;
    border: none;
    opacity: 0.4;
    transition-duration: .3s;
    &:focus{
      outline: none;
    }
    &:hover{
      opacity: 0.7;
    }
    svg{
      color: #ffffff;
      font-size: 20px;
    }
  }
  .main-carousel{
    .carousel{
      .carousel-inner{
        .carousel-item{
          a{
            cursor: default;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .carbtn{
        &.left{
          /*!rtl:begin:ignore*/
          left: 20%;
          /*!rtl:end:ignore*/
        }
        &.right{
          /*!rtl:begin:ignore*/
          right: 20%;
          /*!rtl:end:ignore*/
        }
      }
    }
  }
  .lookingfor{
    padding: 40px 0 70px;
    text-align: center;
    h3{
      margin-bottom: 28px;
      padding-top: 30px;
    }
    .items{
      @media (max-width: 767px){
        .item{
          margin-bottom: 30px;
        }
      }
      .item{
        display: flex;
        justify-content: center;
        .item-box{
          .img-box{
            @media (max-width: 767px){
            img{
              width: 110px;
              height: 110px;
            }
            }
          }
          .arouter{
            a{
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              font-size: 12px;
              color: #505050;
            }
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    .lookingfor{
      padding: 0;
      .row{
        flex-wrap: nowrap;
        overflow: auto;
      }
    }
  }
  .slide-carousel-1{
    display: flex;
    align-items: center;
    .info{
      padding: 0 50px;
      margin: 0 0 50px;
      text-align: left;
      font-weight: 500;
      p{
        font-size: 30px;
        margin-bottom: 10px;
      }
      span{
        color: #FF9800;
        font-size: 14px;
        font-weight: 700;
      }
    }
    @media(max-width: 767px){
      .info{
        text-align: center;
        padding: 25px 0 0 ;
      }
    }
    @media(max-width: 1024px) and (min-width: 768px){
      .info{
        padding: 0px;
      }
    }
    .products{
      padding: 26px 0 40px;
      position: relative;
      .carousel__slide{
        padding: 10px;
      }
      .carbtn{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 40px;
        background-color: transparent;
        border-radius: 6px;
        border: none;
        opacity: 1;
        transition-duration: .3s;
        &.left{
          /*!rtl:begin:ignore*/
          left: 0px;
          /*!rtl:end:ignore*/
        }
        &.right{
          /*!rtl:begin:ignore*/
          right: 0px;
          /*!rtl:end:ignore*/
        }
        svg{
          color: black;
        }
        &:hover{
          background-color: #e5e5e5;
        }
      }
    }
  }
  .featured-products{
    .img-box{
      margin-bottom: 10px;
      img{
        max-width: 100%;
        height: 100%;
      }
    }
    .card-box{
      .card-container{
        display: flex;
        justify-content: center;
        gap: 20px;
      }
  }
  }
  .titimg{
    img{
      max-width: 100%;
    }
  }
  @media (min-width: 768px) {
    .titimg {
      img{
        min-height: 280px;
        width: 100%;
        object-fit: cover;
      }
    }
  }
  .trending{
    margin-bottom: 20px;
    .head{
      display: flex;
      justify-content: space-between;
      padding: 13px 0 ;
      margin-bottom: 25px;
      border-bottom: 2px solid #e0e0e0;
      h2{
        margin: 0;
        letter-spacing: 1.3px;
      }
      .sections{
        display: flex;
        align-items: center;
        span{
          position: relative;
          padding: 0 15px;
          cursor: pointer;
          text-transform: uppercase;
          font-size: 14px;
          font-weight: 500;
          color: #e0e0e0;
          transition-duration: .4s;
          &:not(:last-of-type)::before{
            content: "|";
            position: absolute;
            top: 0;
            right: 0;
            width: 2px;
            height: 100%;
            color: #e0e0e0;
          }
          &.active{
            color: black;
            &::after{
              content: "";
              position: absolute;
              bottom: -8px;
              left: 50%;
              transform: translateX(-50%);
              border: 6px solid transparent;
              border-bottom: 6px solid #e0e0e0;
            }
          }
        }
      }
    }
    .trending-carousel{
      .carbtn{
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .carousel__slide{
        padding: 10px;
      }
    }
  }
  @media (max-width: 767px) {
    .trending{
      .head{
        border-bottom: 0px;
        h2{
          width: 100%;
          border-bottom: 2px solid #e0e0e0;
          padding-bottom: 12px;
          margin-bottom: 10px;
        }
        .sections{
          padding-top: 14px;
          span:first-of-type{
            padding-left: 0;
          }
        }
      }
    }
  }
  .kidssection {
    align-items: center;
    .kidscarousel{
      padding-top: 25px;
      .info{
        text-align: center;
        margin-bottom: 30px;
        padding-top: 15px;
        a{
          color: #ba7a2d;
          font-weight: 700;
        }
      }
      .maincarousel{
        .carbtn{
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .carousel__slide{
          padding: 10px;
        }
      }
    }
    .kidsimg-box{
      height: 100%;
      img{
        width: 100%;
      }
    }
  }
}
</style>
