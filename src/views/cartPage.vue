<template>
<div>
  <div class="whitesp d-block"></div>
  <div class="cart">
    <div class="container">
      <div class="head">
        <h2>My Cart</h2>
      </div>
      <div v-if="getCartBag.length === 0" class="no-cartProducts">
        <span class="empty">Your cart is currently empty.</span>
        <span class="browsing">Continue browsing <router-link to="/">here</router-link>.</span>
      </div>
      <div v-if="getCartBag.length !== 0" class="content row">
        <div class="products col-12 col-lg-8 col-md-7">
          <div class="products-head">
            <span>product</span>
            <span class="lspan">info</span>
          </div>
          <div class="products-content">
          <div class="products">
            <div v-for="product in getCartBag" :key="product.id" class="product">
              <div class="f1prod">
                <div class="prodimg">
                  <img :src='product.img' alt="">
                </div>
                <div class="info">
                  <a :href="'/products/' + product.name" class="prodname">{{ product.name }}</a>
                  <div class="editcat">
                    <div class="prodsc">{{ product.color }} / {{ product.size }}</div>
                    <font-awesome-icon @click="openeditpopup(product.cartId)" icon="fa-solid fa-pen-to-square"/>
                  </div>
                </div>
              </div>
              <div class="prodinfo">
                <div class="cont">
                  <span>Price:</span>
                  <div class="prodprice">{{ product.discount ?  (product.price - product.discount).toFixed(2) : product.price }} LE</div>
                </div>
                <div class="cont">
                  <span>Quantity:</span>
                  <div>{{ product.count}}</div>
                </div>
              <div class="cont">
                <span>Total: </span>
                <div>{{ product.discount ?  ((product.price * product.count) - (product.discount * product.count)).toFixed(2) : product.price * product.count }} LE</div>
              </div>
              </div>
              <div @click="removeproduct" :data-id='product.cartId' class="closebtn">X</div>
            </div>
            <edit-popup :cartId='deitele.cartId' :id='deitele.id' :count='deitele.count' :name='deitele.name' :img='deitele.img' :color='deitele.color' :size='deitele.size' :price='deitele.price' :discount='deitele.discount' :show='editpopupval'></edit-popup>
          </div>
          </div>
        </div>
        <div class="summary col-12 col-lg-4 col-md-5">
          <div class="content">
            <span class="summaryhead">order summary</span>
            <div class="addcomments">
              <span>Additional comments</span>
              <textarea placeholder="Special instruction for seller"></textarea>
            </div>
            <div class="total">
              <span>total:</span>
              <span class="totalnum">{{ totalCartPrice }} LE</span>
            </div>
          </div>
          <div class="controls">
            <router-link to="/checkouts">
              <base-button type='white-gray'>proceed to checkout</base-button>
            </router-link>
            <router-link to="/">
              <base-button type='main-rev'>continue shopping</base-button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="Related-Products">
        <div class="head">
          <h2>Related Products</h2>
        </div>
        <div class="products">
          <carousel v-bind="relatedCarSett" :breakpoints='breakpoints'>
            <slide v-for="product in relatedProducts.slice(5, 13)" :key="product.id">
              <base-card :name='product.product_name' :id='product.id' :price='product.price' :img='product.main_image' :state='product.state'></base-card>
            </slide>
            <template #addons>
              <navigation>
                <template #next>
                  <button class="carbtn right d-none d-xl-flex">
                    <font-awesome-icon icon="fa-solid fa-arrow-right-long"/>
                  </button>
                </template>
                <template #prev>
                  <button class="carbtn left d-none d-xl-flex">
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
  data () {
    return {
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
          itemsToScroll: 3,
          snapAlign: 'start'
        },
        1024: {
          itemsToShow: 4,
          itemsToScroll: 4,
          snapAlign: 'start'
        }
      },
      prodId: null
    }
  },
  methods: {
    loadCardData () {
      this.$store.dispatch('fetchData')
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
    }
  },
  computed: {
    relatedProducts () {
      const data = this.$store.getters.mData
      return data
    },
    getCartBag () {
      const cartBag = this.$store.getters['sidebar/cartBag']
      return cartBag
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
    }
  },
  created () {
    this.loadCardData()
  }
}
</script>

<style lang="scss" scoped>
.whitesp{
  height: 73px;
  position: relative;
}
.cart{
  .no-cartProducts{
    margin-bottom: 60px;
    .empty{
      display: block;
      margin: 50px 0 35px;
      padding: 15px;
      color: #856404;
      background-color: #FFF3CD;
      font-size: 13px;
      text-align: center;
    }
    .browsing{
      display: block;
      text-align: center;
      color: #505050;
      font-size: 13px;
      a{
        color: #3adb6b;
        font-weight: 600;
        transition-duration: 0.5s;
        &:hover{
          color: black;
          cursor: pointer;
        }
      }
    }
  }
  .head{
    margin-bottom: 25px;
    h2{
      margin-top: 30px;
      margin-bottom: 0;
      font-size: 34px;
      color: #202020;
    }
  }
  .content{
    .products{
      .products-head{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background-color: #fafafa;
        padding: 12px 20px;
        span{
          width: 50%;
          color: #505050;
          text-transform: uppercase;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 1.1px;
          &.lspan{
            text-align: center;
            margin-right: 10px;
          }
        }
      }
      @media (max-width: 480px) {
        .products-content{
          .product{
            .prodimg{
              img{
                width: 70px !important;
                height: 70px !important;
              }
            }
          }
        }
      }
      .products-content{
        .products{
        margin: 35px 0 30px;
        .product{
          display: flex;
          align-items: center;
          margin-bottom: 38px;
          .f1prod{
            display: flex;
            align-items: center;
            width: 50%;
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
            .prodname{
              font-weight: 600;
              font-size: 15px;
              color: #202020;
            }
            .editcat{
              display: flex;
              align-items: center;
              margin-top: 5px;
              .prodsc{
                font-size: 14px;
                font-weight: 500;
                color: #999999;
                margin-right: 10px;
              }
              svg{
                font-size: 13px;
                color:  gray !important;
                padding: 0;
                cursor: pointer;
                &:hover{
                  color: black !important;
                  transition-duration: 0.2s;
                }
              }
            }
          }
          }
          .prodinfo{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            margin-left: auto;
            .cont{
              display: flex ;
              align-items: center;
              width: 100%;
              div{
                font-weight: 600;
                font-size: 14px;
              }
            }
            span{
              color: #808080;
              font-weight: 700;
              font-size: 12px;
              margin-left: 5px;
              margin-right: 5px;
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
      }
    }
    .summary{
      color: #202020;
      .content{
        display: flex;
        flex-direction: column;
        .summaryhead{
          padding: 12px 0;
          margin-bottom: 10px;
          border-bottom: 1px solid #e6e6e6;
          font-weight: 800;
          font-size: 12px;
          text-transform: uppercase;
        }
        .addcomments{
          span{
            display: block;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 10px;
          }
          textarea{
            width: 100%;
            padding: 11px 12px 5px 20px;
            margin-bottom: 35px;
            border: 1px solid #e6e6e6;
            font-size: 14px;
            min-height: 100px;
            color: #505050;
            &:focus{
              border: 1px solid #e6e6e6;
              outline: none;
            }
          }
        }
        .total{
          border-top: 1px solid #e6e6e6;
          border-bottom: 1px solid #e6e6e6;
          padding: 30px 0;
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          span{
            text-transform: uppercase;
            font-weight: 700;
            font-size: 14px;
            margin-right: auto;
          }
          .totalnum{
            font-size: 20px;
            font-weight: 700;
          }
        }
      }
      .controls{
        button{
          margin-bottom: 10px;
        }
      }
    }
  }
  .Related-Products{
  padding-bottom: 40px;
  margin-top: 40px;
  text-align: center;
  .carbtn{
    justify-content: center;
    align-items: center;
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
    &.left{
      left: 20%;
    }
    &.right{
      right: 20%;
    }
    svg{
      color: #ffffff;
      font-size: 20px;
    }
  }
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
