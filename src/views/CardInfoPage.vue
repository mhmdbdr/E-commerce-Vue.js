<template>
<div>
  <div class="whitesp d-block"></div>
  <div class="content">
    <base-spinner class="spin" v-if="isLoading"></base-spinner>
    <div v-if="!isLoading" class="cardinfo row">
      <div class="img-container col-12 col-md-6">
        <carousel v-bind="settings">
          <slide index='1'>
            <img src="http://dummyimage.com/1200x1200.png/FF0000/ffffff" alt="">
          </slide>
          <slide index='2'>
            <img src="http://dummyimage.com/1200x1200.png/808080/ffffff" alt="">
          </slide>
          <slide index='3'>
            <img src="http://dummyimage.com/1200x1200.png/808000/ffffff" alt="">
          </slide>
          <slide index='4'>
            <img src="http://dummyimage.com/1200x1200.png/008080/ffffff" alt="">
          </slide>
          <slide index='5'>
            <img src="http://dummyimage.com/1200x1200.png/FFFFFF/000000" alt="">
          </slide>
          <slide index='6'>
            <img src="http://dummyimage.com/1200x1200.png/0000FF/ffffff" alt="">
          </slide>
          <slide index='7'>
            <img src="http://dummyimage.com/1200x1200.png/000000/ffffff" alt="">
          </slide>
          <slide index='8'>
            <img src="http://dummyimage.com/1200x1200.png/00FF00/ffffff" alt="">
          </slide>
          <slide index='9'>
            <img src="http://dummyimage.com/1200x1200.png/FFFF00/ffffff" alt="">
          </slide>
          <template #addons>
            <navigation>
              <template #next>
                <button class="carbtn right d-flex">
                  <font-awesome-icon icon="fa-solid fa-arrow-right-long"/>
                </button>
              </template>
              <template #prev>
                <button class="carbtn left  d-flex">
                  <font-awesome-icon icon="fa-solid fa-arrow-left-long"/>
                </button>
              </template>
            </navigation>
          </template>
        </carousel>
      </div>
      <div class="info-container col-12 col-md-6">
        <div class="card-head d-flex justify-content-between">
          <h2>{{ setData.product_name }}</h2>
          <div class="navarrow">
            <div v-if="leftarrow" class="arrow" @click="arrownav('prev')">
              <font-awesome-icon icon="fa-solid fa-arrow-left-long"/>
            </div>
            <div v-if="rightarrow" class="arrow" @click="arrownav('next')">
              <font-awesome-icon icon="fa-solid fa-arrow-right-long"/>
            </div>
          </div>
        </div>
        <div class="price">
          <span v-if="!(setData.discount === undefined)" class="cost">{{setData.price}}LE</span>
          <span>{{ setData.discount ?  (setData.price - setData.discount).toFixed(2) : setData.price }}LE</span>
        </div>
        <div class="description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Ea possimus, adipisci in similique aliquid vero atque <br>  tempora alias asperiores dignissimos architecto <br>  rerum soluta officia ipsum doloribus <br>  doloremque earum tenetur dolore!</p>
        </div>
        <base-button v-if="setData.state ==='soldout'" type='basesec'>sold out</base-button>
        <div v-if="setData.state !=='soldout'" class="colors">
          <div class="head">Colors: <span>{{ color }}</span></div>
          <div class="hec">
            <img @click="activesc($event,'color')" data-color='Black' src="http://dummyimage.com/1200x1200.png/000000/ffffff" alt="">
            <img @click="activesc($event,'color')" data-color='White' src="http://dummyimage.com/1200x1200.png/FFFFFF/000000" alt="">
            <img @click="activesc($event,'color')" data-color='Blue' src="http://dummyimage.com/1200x1200.png/0000FF/000000" alt="">
            <img @click="activesc($event,'color')" data-color='Red' src="http://dummyimage.com/1200x1200.png/FF0000/000000" alt="">
            <img @click="activesc($event,'color')" data-color='Green' src="http://dummyimage.com/1200x1200.png/00FF00/000000" alt="">
            <img @click="activesc($event,'color')" data-color='Yellow' src="http://dummyimage.com/1200x1200.png/FFFF00/000000" alt="">
            <img @click="activesc($event,'color')" data-color='Gray' src="http://dummyimage.com/1200x1200.png/808080/000000" alt="">
            <img @click="activesc($event,'color')" data-color='Olive' src="http://dummyimage.com/1200x1200.png/808000/000000" alt="">
            <img @click="activesc($event,'color')" data-color='Mustard' src="http://dummyimage.com/1200x1200.png/008080/000000" alt="">
          </div>
        </div>
        <div v-if="setData.state !=='soldout'" class="sizes">
          <div class="head">Size: <span>{{ size }}</span></div>
          <div class="hec">
            <div @click="activesc($event,'size')" data-size='S' class="size active">S</div>
            <div @click="activesc($event,'size')" data-size='M' class="size">M</div>
            <div @click="activesc($event,'size')" data-size='L' class="size">L</div>
            <div @click="activesc($event,'size')" data-size='XL' class="size">XL</div>
            <div @click="activesc($event,'size')" data-size='2XL' class="size">2XL</div>
            <div @click="activesc($event,'size')" data-size='3XL' class="size">3XL</div>
          </div>
        </div>
        <div v-if="setData.state !=='soldout'" class="controls">
          <div class="cartbtns">
            <div class="inpcont">
              <input class="form-control" min="1" step="1" type="number" placeholder="" v-model="count">
            </div>
          <base-button @click="addToCart" type='main'>Add to cart</base-button>
          <main-popup :prodTitle='setData.product_name' :prodImg='setData.main_image' :show='popupshow'></main-popup>
          </div>
          <div class="buybtn">
            <base-button @click="buyitNow" type='sec'>buy it now</base-button>
          </div>
        </div>
        <div v-if="setData.state !=='soldout'" class="pickup">
          <div class="text d-flex">
          <font-awesome-icon icon="fa-solid fa-check" style="color: #108043;" />
          <p>PICKUP AVAILABLE AT <span>ONLINE STORE</span> <br> Usually ready in 24 hours</p>
          </div>
          <div class="storeinfo">
          <span @click="carttoggle(viewinfo)">view store info</span>
            <base-sidebar :show ='viewinfo' name ='viewinfo'>
              <template v-slot:title>
                <span class="prod_name">{{ setData.product_name }}</span>
                <span class="prod_info">{{color}} / {{size}}</span>
              </template>
                <template v-slot:default>
                  <div class="head">online store</div>
                  <div class="time">
                  <font-awesome-icon icon="fa-solid fa-check" style="color: #108043;" />
                  <p>Pickup available, usually ready in 24 hours</p>
                  </div>
                  <p class="address">1 Mostafa El-Nahaas<br>1st Floor<br>C<br>Nasr City<br>4441525<br>Egypt<br>+20222737773</p>
                </template>
            </base-sidebar>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!isLoading" class="container">
      <div class="sizechart row">
        <div class="sizesimg col-12 col-md-6">
          <img src="../../imgs/cardInfoPage/size-chart.webp" alt="">
        </div>
        <div class="info col-12 col-md-6">
          <h2>Size Chart</h2>
          <div class="para">
            <span>chest</span>
            <p>To measure the chest: First, put the product on a flat surface, then measure between the two ends below armhole.</p>
          </div>
          <div class="para">
            <span>length</span>
            <p>To measure the length of the product: First, put the product on a flat surface, then measure from the highest point of the shoulder down to the products bottom hem.</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!isLoading" class="container">
      <div class="Related-Products">
        <div class="head">
          <h2>Related Products</h2>
        </div>
        <div class="products">
          <carousel v-bind="relatedCarSett" :breakpoints='breakpoints'>
            <slide v-for="product in relatedProducts.slice(0, 4)" :key="product.id">
              <base-card :name='product.product_name' :id='product.id' :price='product.price' :img='product.main_image' :state='product.state'></base-card>
            </slide>
          </carousel>
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
  props: ['productid'],
  data () {
    return {
      settings: {
        itemsToShow: 1,
        snapAlign: 'start',
        autoplay: 10000,
        pauseAutoplayOnHover: true,
        wrapAround: true
      },
      relatedCarSett: {
        itemsToShow: 2,
        itemsToScroll: 1,
        snapAlign: 'start',
        autoplay: 10000,
        pauseAutoplayOnHover: true
      },
      breakpoints: {
        768: {
          itemsToShow: 3,
          itemsToScroll: 1,
          snapAlign: 'start'
        },
        1024: {
          itemsToShow: 4,
          itemsToScroll: 1,
          snapAlign: 'start'
        }
      },
      size: 'S',
      color: 'Black',
      isLoading: false,
      count: 1,
      popuploading: false,
      leftarrow: true,
      rightarrow: true
    }
  },
  methods: {
    arrownav (dir) {
      const prodid = this.setData.id
      const data = this.$store.getters.mData
      let name = null
      data.find((ele) => {
        if (ele.id === prodid) {
          if (dir === 'prev') {
            name = data[(data.indexOf(ele)) - 1]
          } else {
            name = data[(data.indexOf(ele)) + 1]
          }
          // left arrow check
          if (((data.indexOf(ele)) - 1) === 0 && dir === 'prev') {
            this.leftarrow = false
          } else {
            this.leftarrow = true
          }
          // right arrow check
          if (((data.indexOf(ele)) + 1) === data.length - 1 && dir !== 'prev') {
            this.rightarrow = false
          } else {
            this.rightarrow = true
          }
          return name
        } else {
          return 0
        }
      })
      this.$router.push(`/products/${name.product_name}`)
    },
    arrownavcreated () {
      const prodid = this.setData.id
      const data = this.$store.getters.mData
      data.forEach((ele) => {
        if (ele.id === prodid) {
          // left arrow check
          if (((data.indexOf(ele))) === 0) {
            this.leftarrow = false
          } else {
            this.leftarrow = true
          }
          // right arrow check
          if (((data.indexOf(ele))) === data.length - 1) {
            this.rightarrow = false
          } else {
            this.rightarrow = true
          }
        }
      })
    },
    async loadCardData () {
      this.isLoading = true
      try {
        await this.$store.dispatch('fetchData')
      } catch (error) {
        this.error = error.message || 'something went wrong'
      }
      this.isLoading = false
    },
    activesc (e, prop) {
      const sizes = document.querySelectorAll(`.hec .${prop}`)
      sizes.forEach((size) => {
        size.classList.remove('active')
      })
      e.target.classList.add('active')
      if (prop === 'size') {
        this.size = e.target.dataset.size
      } else {
        this.color = e.target.dataset.color
      }
    },
    carttoggle (name) {
      this.$store.dispatch('sidebar/openbtn', name)
    },
    addToCart () {
      this.popuploading = true
      const cartBag = this.$store.getters['sidebar/cartBag']
      const sameele = cartBag.find((ele) => {
        return (ele.id === this.setData.id && ele.color === this.color && ele.size === this.size)
      })
      if (sameele === undefined) {
        const addProduct = {
          cartId: Math.random().toString(16).slice(2),
          id: this.setData.id,
          name: this.setData.product_name,
          price: this.setData.price,
          color: this.color,
          img: this.setData.main_image,
          count: this.count,
          discount: this.setData.discount,
          size: this.size
        }
        this.$store.dispatch('sidebar/newItemCart', addProduct)
      } else {
        this.$store.dispatch('sidebar/sameele', [this.count, sameele.cartId])
      }
      window.localStorage.setItem('cartProducts', JSON.stringify(this.$store.getters['sidebar/cartBag']))
      this.$store.dispatch('popup/openbtn')
    },
    buyitNow () {
      const cartBag = this.$store.getters['sidebar/cartBag']
      const sameele = cartBag.find((ele) => {
        return (ele.id === this.setData.id && ele.color === this.color && ele.size === this.size)
      })
      if (sameele === undefined) {
        const addProduct = {
          cartId: Math.random().toString(16).slice(2),
          id: this.setData.id,
          name: this.setData.product_name,
          price: this.setData.price,
          color: this.color,
          img: this.setData.main_image,
          count: this.count,
          discount: this.setData.discount,
          size: this.size
        }
        this.$store.dispatch('sidebar/newItemCart', addProduct)
      } else {
        this.$store.dispatch('sidebar/sameele', [this.count, sameele.cartId])
      }
      window.localStorage.setItem('cartProducts', JSON.stringify(this.$store.getters['sidebar/cartBag']))
      this.$router.push('/checkouts')
    }
  },
  computed: {
    setData () {
      const data = this.$store.getters.mData.find((ele) => {
        return ele.product_name === this.productid
      })
      return { ...data }
    },
    relatedProducts () {
      const data = this.$store.getters.mData.filter((ele) => {
        return ele.category === this.setData.category
      })
      return data
    },
    viewinfo () {
      return this.$store.getters['sidebar/viewinfoval']
    },
    popupshow () {
      return this.$store.getters['popup/popupshow']
    }
  },
  created () {
    this.loadCardData()
    this.arrownavcreated()
  },
  updated () {
    this.arrownavcreated()
  }
}
</script>
<style lang="scss" scoped>
.whitesp{
  height: 122px;
  position: relative;
}
@media (min-width: 1200px) {
  .whitesp{
    height: 73px;
  }
}
  @media (min-width: 1200px) {
    .content{
      min-height: calc(100vh - 73px) !important;
    }
  }
  .content{
    min-height: calc(100vh - 122px);
  .spin{
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    margin: 0;
  }
    .cardinfo{
      margin: 0 0 30px 0;
      .img-container{
        .carousel{
          position: sticky;
          top: 51px;
        }
        padding: 0;
        .carbtn{
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 0px;
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
          &.left{
            left: -10px;
          }
          &.right{
            right: -10px;
          }
          svg{
            color: #ffffff;
            font-size: 20px;
          }
        }
        img{
          max-width: 100%;
        }
      }
      .info-container{
        padding: 0;
        padding: 15px 0 0 ;
        padding-right: 80px;
        padding-left: 60px;
        .card-head{
          margin: 45px 0 18px;
          .navarrow{
            display: flex;
            margin-left: 10px;
            .arrow{
              display: flex;
              justify-content: center;
              align-items: center;
              height: 40px;
              border: none;
              background-color: #ffffff;
              padding: 0 20px;
              text-transform: none;
              color: black;
              border: 1px solid #e6e6e6;
              transition-duration: 0.3s;
              user-select: none;
              cursor: pointer;
              &:hover{
                border-color: #505050;
              }
              &:first-of-type{
                border-top-left-radius: 6px;
                border-bottom-left-radius: 6px;
              }
              &:last-of-type{
                border-top-right-radius: 6px;
                border-bottom-right-radius: 6px;
              }
              svg{
                font-size: 20px;
              }
            }
          }
        }
        .price{
          margin-bottom: 25px;
          font-weight: 500;
          span{
            font-size: 34px;
            &.cost{
              position: relative;
              padding-right: 14px;
              margin-right: 7px;
              color: #ccc;
              &::before{
                position: absolute;
                content: '';
                height: 22px;
                width: 1px;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                background-color: #ccc;
              }
            }
          }
        }
        .description{
          p{
            color: #505050;
          }
        }
        .colors{
          .head{
            color: #808080;
            margin-bottom: 6px;
            margin-bottom: 10px;
            font-weight: 500;
            span{
              color: black;
              font-size: 14px;
            }
          }
          .hec{
            display: flex;
            flex-wrap: wrap;
          }
          img{
            width: 68px;
            height: 68px;
            border-radius: 50%;
            margin-right: 10px;
            margin-bottom: 15px;
            border: 2px solid #eaeaea;
            &.active{
              background-color: white;
              border: 2px solid #eaeaea;
            }
            &:hover{
              box-shadow:  0 3px 7px #0003;
              cursor: pointer;
              transition-duration: 0.2s;
            }
          }
        }
        .sizes{
          display: flex;
          flex-direction: column;
          margin-bottom: 10px;
          font-weight: 500;
          .head{
            color: #808080;
            margin-bottom: 6px;
            margin-bottom: 10px;
            font-weight: 500;
            span{
              color: black;
              font-size: 14px;
            }
          }
          .hec{
            display: flex;
            flex-wrap: wrap;
          }
          .size{
            width: 68px;
            height: 68px;
            border-radius: 50%;
            margin-right: 10px;
            margin-bottom: 15px;
            background-color: #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px solid #eaeaea;
            &.active{
              background-color: white;
              border: 2px solid #eaeaea;
            }
            &:hover{
              box-shadow:  0 3px 7px #0003;
              cursor: pointer;
              transition-duration: 0.2s;
            }
          }
        }
        .controls{
          .cartbtns{
            margin-bottom: 30px;
            display: flex;
          }
          .buybtn{
            margin-bottom: 20px;
          }
        }
        .pickup{
          border-top: 1px solid #eaeaea ;
          border-bottom: 2px solid #eaeaea ;
          padding: 22px 0;
          font-size: 12px;
          svg{
            font-size: 20px;
            margin-right: 10px;
          }
          .storeinfo{
            .prod_name{
              display: block;
              color: #505050;
              margin-bottom: 15px;
            }
            .prod_info{
              color: #505050;
              font-size: 11px;
              text-transform: capitalize;
            }
            .head{
              margin: 20px 0;
              color: #505050;
              text-transform: uppercase;
              font-weight: 700;
              font-size: 12px;
            }
            .time{
              display: flex;
              color: #505050;
            }
            .address{
              color: #505050;
              font-size: 12px;
            }
            & > span {
            text-decoration-line: underline;
            font-size: 14px;
            cursor: pointer;
            margin-left: 28px;
          }
          }
          p{
            span{
              color: #505050;
              font-weight: bold;
            }
          }
        }
      }
      @media (min-width: 768px) and (max-width: 1023px) {
        .info-container{
          padding-right: 30px !important;
          padding-left: 30px !important;
        }
      }
      @media (max-width: 767px) {
        .info-container{
          padding-right: 10px !important;
          padding-left: 10px !important;
        }
      }
    }
    .sizechart{
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 30px;
      padding-bottom: 80px;
      margin-bottom: 40px;
      .sizesimg{
        img{
          max-width: 100%;
        }
      }
      .info{
        padding: 20px 7%;
        h2{
          text-align: center;
        }
        .para{
          span{
            display: block;
            font-weight: 700;
            font-size: 16px;
            text-transform: uppercase;
            margin: 12px 0 4px;
          }
          p{
            color: #202020;
          }
        }
      }
        @media (min-width: 768px) and (max-width: 1023px) {
          .info{
            padding: 20px !important;
          }
        }
        @media (max-width: 768px) {
          .info{
            padding: 10px !important;
          }
        }
    }
    .Related-Products{
      padding-bottom: 40px;
      margin-top: 40px;
      text-align: center;
      .products{
        .carousel__slide{
          padding: 10px;
        }
      }
      .head{
        margin: 25px 0 ;
      }
    }
  }
</style>
