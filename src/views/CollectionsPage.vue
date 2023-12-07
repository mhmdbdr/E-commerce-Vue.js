<template>
<div class="container">
  <div class="collection">
    <div class="head">
      <h3>{{ headtitle }}</h3>
      <div class="controls flex-lg-row-reverse">
        <div class="right">
          <div class="sorting d-flex">
            <span class="spantit d-none d-md-flex">Sort by</span>
            <select v-model="sorting" class="form-select" aria-label="Default select example">
              <option selected value="1">Featured</option>
              <option value="2">Price, low to high</option>
              <option value="3">Price, high to low</option>
              <option value="4">Alphabetically, A-Z</option>
              <option value="5">Alphabetically, Z-A</option>
              <option value="6">Date, old to new</option>
              <option value="7">Date, new to old</option>
              <option value="8">Best Selling</option>
            </select>
          </div>
        </div>
        <div class="left">
          <span class="spantit d-none d-md-flex">View as</span>
          <div class="bars  d-flex">
            <div @click="activebar" data-bars='2' class="bar bar-2 active">
            </div>
            <div @click="activebar" data-bars='3' class="bar bar-3 d-none d-md-block">
            </div>
            <div @click="activebar" data-bars='4' class="bar bar-4 d-none d-lg-block">
            </div>
            <div @click="activebar" data-bars='5' class="bar bar-5 d-none d-xl-block">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="products row">
      <base-spinner class="basespinner" v-if="isLoading"></base-spinner>
      <p v-if="nodata" class="nodata">{{ nodatap }}</p>
      <div class="col-6" v-for="product in filterData" :key="product.id">
          <base-card :id ='product.id' :name='product.product_name' :price='product.price' :img='product.main_image' :state='product.state' :discount='product.discount'></base-card>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['collectionsId'],
  data () {
    return {
      ipp: '2',
      sorting: '1',
      isLoading: false,
      error: null,
      nodata: false
    }
  },
  computed: {
    headtitle () {
      if (this.$route.query.type === undefined) {
        return this.collectionsId
      } else {
        return `YOUR SEARCH FOR  "${this.collectionsId}"  REVEALED THE FOLLOWING:`
      }
    },
    filterData () {
      const wishlist = this.$store.getters.wishlist
      if (this.collectionsId === 'wishlist') {
        return wishlist
      }
      const data = this.$store.getters.mData
      let products
      if (this.$route.query.type === undefined) {
        products = data.filter((product) => {
          return product.category === this.collectionsId
        })
      } else {
        products = data.filter((product) => {
          return product.product_name.toLowerCase().includes(this.collectionsId.toLowerCase())
        })
      }
      if (this.sorting === '2') {
        return products.sort((a, b) => {
          return a.price - b.price
        })
      }
      if (this.sorting === '3') {
        return products.sort((a, b) => {
          return b.price - a.price
        })
      }
      if (this.sorting === '4') {
        return products.sort((a, b) => {
          const fa = a.product_name.toLowerCase()
          const fb = b.product_name.toLowerCase()
          if (fa < fb) {
            return -1
          }
          if (fa > fb) {
            return 1
          }
          return 0
        })
      }
      if (this.sorting === '5') {
        return products.sort((a, b) => {
          const fa = a.product_name.toLowerCase()
          const fb = b.product_name.toLowerCase()
          if (fa > fb) {
            return -1
          }
          if (fa < fb) {
            return 1
          }
          return 0
        })
      }
      return products
    },
    nodatap () {
      if (this.collectionsId === 'wishlist') {
        return 'Sorry, u didnt add any product to your wishlist'
      } else if (this.$route.query.type === undefined) {
        return 'Sorry, there are no products in this collection'
      } else {
        return 'Sorry, there are no products match this search'
      }
    }
  },
  methods: {
    restbars () {
      const bars = document.querySelectorAll('.bar')
      bars.forEach((bar) => {
        bar.classList.remove('active')
      })
      const basebar = document.querySelector('.bar-2')
      basebar.classList.add('active')
    },
    nodatatoggle () {
      if (this.filterData.length === 0) {
        this.nodata = true
      } else {
        this.nodata = false
      }
    },
    async loadData () {
      this.isLoading = true
      try {
        await this.$store.dispatch('fetchData')
      } catch (error) {
        this.error = error.message || 'something went wrong'
      }
      this.isLoading = false
    },
    activebar (e) {
      const bars = document.querySelectorAll('.bar')
      bars.forEach((bar) => {
        bar.classList.remove('active')
      })
      e.target.classList.add('active')
      const products = document.querySelectorAll('.products > div')
      products.forEach((product) => {
        product.className = ''
        if (e.target.dataset.bars === '2') {
          product.classList.add('col-6')
        } else if (e.target.dataset.bars === '3') {
          product.classList.add('col-6', 'col-md-4')
        } else if (e.target.dataset.bars === '4') {
          product.classList.add('col-6', 'col-md-4', 'col-lg-3')
        } else {
          product.classList.add('col-6', 'col-md-4', 'col-lg-3', 'col-5')
        }
      })
    }
    // controlsbar () {
    //   const controls = document.querySelector('.controls')
    //   if (window.innerWidth < 1100 && this.$route.path === `/collections/${this.collectionsId}`) {
    //     if (window.scrollY > controls.offsetTop) {
    //       controls.classList.add('fixedcontrols')
    //     } else {
    //       controls.classList.remove('fixedcontrols')
    //     }
    //   } else {
    //     if (this.$route.path === `/collections/${this.collectionsId}`) {
    //       controls.classList.remove('fixedcontrols')
    //     }
    //   }
    // }
  },
  created () {
    this.loadData()
    // window.addEventListener('scroll', this.controlsbar)
    // window.addEventListener('resize', this.controlsbar)
  },
  updated () {
    this.nodatatoggle()
    this.restbars()
  }
}
</script>

<style lang="scss" scoped>
.collection{
  padding-top: 120px;
  margin-bottom: 10px;
  .head{
    h3{
      text-transform: uppercase;
    }
    .controls{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 40px 0 30px;
      // &.fixedcontrols{
      //   z-index: 0;
      //   background-color: white;
      //   position: fixed;
      //   width: 100%;
      //   left: 0px;
      //   margin: 50px 0;
      //   padding: 20px 40px 10px;
      //   top: 0;
      //   transition-duration: .3s;
      // }
      .left,
      .right{
        display: flex;
        align-items: center;
        justify-content: center;
        .sorting{
          .form-select{
            width: 155px;
          }
        }
        .form-select{
          border: 1px solid #aaa;
          border-radius: 0;
          color: #505050;
          width: 100px;
          font-size: 13px;
          padding: 8px 13px;
          &:focus{
            box-shadow: none;
          }
        }
      }
      .spantit{
        display: flex;
        align-items: center;
        margin-right: 15px;
        color: #505050;
        font-size: 13px;
        font-weight: 500;
      }
      .bar{
        position: relative;
        cursor: pointer;
        margin: 0 3px;
        border: 1px solid #aaa;
        min-width: 19px;
        height: 26px;
        transition-duration: 0.3s;
        &::before{
          position: absolute;
          content: "";
          top: 3px;
          left: 3px;
          height: 18px;
          width: 4px;
          background-color: #aaa;
        }
        &.active{
          &::before{
            background-color: black;
          }
        }
        &.bar-2{
          width: 19px;
          &::before{
            box-shadow: 7px 0 #aaa;
          }
          &.active{
            &::before{
              box-shadow: 7px 0 black;
            }
          }
        }
        &.bar-3{
          width: 26px;
          &::before{
            box-shadow: 7px 0 #aaa, 14px 0 #aaa;
          }
          &.active{
            &::before{
              box-shadow: 7px 0 black, 14px 0 black;
            }
          }
        }
        &.bar-4{
          width: 33px;
          &::before{
            box-shadow: 7px 0 0 #aaa, 14px 0 0 #aaa, 21px 0 0 #aaa;
          }
          &.active{
            &::before{
              box-shadow: 7px 0 black, 14px 0 black, 21px 0 0 black;
            }
          }
        }
        &.bar-5{
          width: 40px;
          &::before{
          box-shadow: 7px 0 0 #aaa, 14px 0 0 #aaa, 21px 0 0 #aaa, 28px 0 0 #aaa;
          }
          &.active{
            &::before{
              box-shadow: 7px 0 black, 14px 0 black, 21px 0 0 black, 28px 0 0 black;
            }
          }
        }
        }
      }
    }
  .products{
    // position: relative;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    // z-index: -1;
    .col-5{
      flex: 0 0 calc(20%);
    }
    .nodata{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 40px 0 300px;
      color: #505050;
      font-size: 13px;
      font-weight: 500;
    }
  }
  .basespinner{
    margin: 150px 0;
  }
}
</style>
