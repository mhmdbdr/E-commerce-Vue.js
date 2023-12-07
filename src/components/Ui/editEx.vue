<template>
<teleport to='body'>
  <div @click="closebar" v-if="show" class="shadow"></div>
  <transition name="editPop">
    <div v-if="show" class="editPop">
      <div @click="closebar" class="closebtn">X</div>
      <div class="content">
        <div class="head">
          <div class="headcont">product options</div>
        </div>
        <div class="options">
          <div class="cartProduct row gx-5">
            <div class="product col-12 col-md-5">
              <div class="prodimg">
                <img :src='img' alt="">
              </div>
              <div class="det">
                <div class="info">
                  <div class="prodname">{{ name }}</div>
                  <div class="editcat">
                    <div class="prodsc">{{ editcolor }} / {{ editsize }}</div>
                  </div>
                  <div class="prodprice">
                  <span v-if="!(discount === undefined)" class="cost">{{(price * editcount).toFixed(2)}} LE</span>
                  <span>{{ discount ?  ((price * editcount) - (discount * editcount)).toFixed(2) : (price * editcount).toFixed(2) }} LE</span>
                  </div>
                </div>
                <div class="quantity">
                  <span>Quantity:</span>
                  <div class="inpcont">
                    <input class="form-control" min="1" step="1" type="number" placeholder="" v-model="editcount">
                  </div>
                </div>
              </div>
            </div>
            <div class="cs col-12 col-md-7">
              <div class="colors">
                <div class="head">Colors: <span>{{ editcolor }}</span></div>
                <div class="hecex">
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
              <div class="sizes">
                <div class="head">Size: <span>{{ editsize }}</span></div>
                <div class="hecex">
                  <div @click="activesc($event,'size')" data-size='S' class="size active">S</div>
                  <div @click="activesc($event,'size')" data-size='M' class="size">M</div>
                  <div @click="activesc($event,'size')" data-size='L' class="size">L</div>
                  <div @click="activesc($event,'size')" data-size='XL' class="size">XL</div>
                  <div @click="activesc($event,'size')" data-size='2XL' class="size">2XL</div>
                  <div @click="activesc($event,'size')" data-size='3XL' class="size">3XL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="supmit">
          <base-button @click="EditedProd" type='main'>add to cart</base-button>
        </div>
      </div>
    </div>
  </transition>
</teleport>
</template>

<script>
export default {
  props: ['id', 'show', 'name', 'color', 'size', 'price', 'img', 'discount', 'count', 'cartId'],
  data () {
    return {
      editsize: this.size,
      editcolor: this.color,
      editcount: this.count
    }
  },
  computed: {
  },
  methods: {
    closebar () {
      this.$store.dispatch('popup/editclosebtn')
    },
    activesc (e, prop) {
      const sizes = document.querySelectorAll(`.hecex .${prop}`)
      sizes.forEach((size) => {
        size.classList.remove('active')
      })
      e.target.classList.add('active')
      if (prop === 'size') {
        this.editsize = e.target.dataset.size
      } else {
        this.editcolor = e.target.dataset.color
      }
    },
    EditedProd () {
      // remove product
      const productid = this.cartId
      const cartBag = this.$store.getters['sidebar/cartBag']
      for (let i = 0; i < cartBag.length; i++) {
        if (cartBag[i].cartId === productid) {
          cartBag.splice(i, 1)
        }
      }
      this.$store.dispatch('sidebar/setCartBag', cartBag)
      window.localStorage.setItem('cartProducts', JSON.stringify(cartBag))
      // add edited product
      const addProduct = {
        cartId: Math.random().toString(16).slice(2),
        id: this.id,
        name: this.name,
        price: this.price,
        color: this.editcolor,
        img: this.img,
        count: this.editcount,
        discount: this.discount,
        size: this.editsize
      }
      this.$store.dispatch('sidebar/newItemCart', addProduct)
      window.localStorage.setItem('cartProducts', JSON.stringify(this.$store.getters['sidebar/cartBag']))
      this.$store.dispatch('popup/editclosebtn')
    }
  },
  updated () {
    this.editcolor = this.color
    this.editsize = this.size
    this.editcount = this.count
    const sizes = document.querySelectorAll('.hecex .size')
    sizes.forEach((size) => {
      size.classList.remove('active')
    })
    sizes.forEach((size) => {
      if (size.dataset.size === this.editsize) {
        size.classList.add('active')
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.editPop{
  &::-webkit-scrollbar {
  display: none;
  }
  overflow: scroll;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 847px;
  width: 100%;
  max-height: 80vh;
  background-color: white;
  padding: 40px 40px 20px;
  color: black;
  z-index: 1000;
  .content{
    .head{
      .headcont{
        text-transform: uppercase;
        font-size: 18px;
        letter-spacing: 1.9px;
        margin-bottom: 20px;
        font-weight: 700;
      }
    }
    .options{
      .cartProduct{
        display: flex;
        .product{
          display: flex;
          margin-bottom: 38px;
          .prodimg{
            padding-right: 15px;
            align-self: flex-start;
            img{
              width: 100px;
              height: 100px;
            }
          }
          .info{
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
                font-weight: 700;
                color: #505050;
                margin-right: 10px;
              }
            }
            .prodprice{
              margin-top: 12px;
              margin-bottom: 10px;
              font-weight: 700;
              font-size: 14px;
              .cost{
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
          .quantity{
            display: flex;
            align-items: center;
            span{
              margin-right: 10px;
              color: #808080;
              font-weight: 700;
              font-size: 13px;
            }
            .inpcont{
              input{
                width: 70px;
                height: 40px;
              }
            }
          }
        }
        .cs{
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
            .hecex{
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
            .hecex{
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
        }
      }
    }
  }
}
@media (max-width: 990px) and (min-width: 768px) {
  .editPop{
    max-width: 90%;
  }
}
@media (max-width: 767px) {
  .editPop{
    max-width: 98%;
  }
}
@media (max-width: 375px) {
  .editPop{
    padding: 24px;
    padding-top: 40px;
  }
}
.closebtn{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: white;
  padding: 10px;
  background-color: black;
  position: absolute;
  width: 30px;
  height: 30px;
  top: 0px;
  right: 0px;
  font-weight: 600;
  cursor: pointer;
}
.shadow{
  position: fixed;
  background-color: #232323cc !important ;
  opacity: 0.4 ;
}
  .editPop-enter-from,
  .editPop-leave-to{
    top: calc(50% + 50px);
    opacity: 0;
  }
  .editPop-leave-active{
    transition: all 0.3s ease-in;
  }
  .editPop-enter-active{
    transition: all 0.3s ease-out;
  }
  .editPop-leave-from,
  .editPop-enter-to{
    top: calc(50%);
    opacity: 1;
  }
</style>
