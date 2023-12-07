<template>
  <div class="card">
    <a :href="cardlink">
      <span :class='state'>{{ state }}</span>
    </a>
    <a :href='cardlink'>
      <img class="card-img-top" :src="colorex || img" alt="">
    </a>
    <div class="card-body">
      <transition name="wishlist">
        <font-awesome-icon v-if="!favadded" @click="addtowishlist('add')" class="heartic" icon="fa-solid fa-heart-circle-plus" />
      </transition>
      <transition name="wishlist">
        <font-awesome-icon v-if="favadded" @click="addtowishlist('remove')" class="heartic added" icon="fa-solid fa-heart-circle-check" />
      </transition>
      <div class="colors">
          <div @click="changecolor($event, 'http://dummyimage.com/350x500.png/dddddd/000000')" class="imgcontainer">
            <img src="http://dummyimage.com/25x25.png/dddddd/000000&text=color" alt="">
          </div>
          <div @click="changecolor($event, 'http://dummyimage.com/350x500.png/5fa2dd/ffffff')" class="imgcontainer">
            <img src="http://dummyimage.com/25x25.png/5fa2dd/ffffff&text=color" alt="">
          </div>
          <div @click="changecolor($event, img)"  class="imgcontainer">
            <img class="selcolor" :src='img' alt="">
          </div>
      </div>
      <div class="info">
        <a :href="cardlink">
          <span class="card-title text-capitalize">{{ name }}</span>
        </a>
        <div class="price d-flex justify-content-center mt-2">
          <span v-if="!(discount === undefined)" class="cost">{{price}}LE</span>
          <span class="">{{ discount ?  (price - discount).toFixed(2) : price }} LE</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'price', 'img', 'state', 'discount', 'id'],
  data () {
    return {
      favadded: false,
      colorex: null
    }
  },
  computed: {
    cardlink () {
      return '/products/' + this.name
    },
    getwishlist () {
      return this.$store.getters.wishlist.length
    }
  },
  methods: {
    addtowishlist (state) {
      this.favadded = !this.favadded
      const data = this.$store.getters.mData
      const ele = data.find((ele) => {
        return ele.id === this.id
      })
      this.$store.dispatch('addtowishlist', { product: { ...ele }, stt: state })
    },
    checkwishlist () {
      const wishlist = this.$store.getters.wishlist
      const fele = wishlist.find((ele) => {
        return ele.id === this.id
      })
      if (fele) {
        this.favadded = true
      } else {
        this.favadded = false
      }
    },
    changecolor (e, color) {
      this.colorex = color
      const colors = document.querySelectorAll('.imgcontainer img')
      colors.forEach((color) => {
        color.classList.remove('selcolor')
      })
      e.target.classList.add('selcolor')
    }
  },
  created () {
    this.checkwishlist()
  },
  watch: {
    getwishlist: function (v) {
      this.checkwishlist()
    }
  }
}
</script>
<style lang="scss" scoped>
.card{
  border: none;
  padding: 0;
  .card-img-top{
    border-radius: 0;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .card-body{
    position: relative;
    .added{
      color: #3adb6b;
    }
    .heartic{
      position: absolute;
      top: 5px;
      left: 5px;
      cursor: pointer;
    }
    .colors{
      text-align: center;
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
      .imgcontainer{
        width: 25px;
        height: 25px;
        margin: 0 3px;
        cursor: pointer;
        img{
          border-radius: 50%;
          width: 25px;
          height: 25px;
          transition-duration: 0.1s;
          border: 2px solid white;
          outline: 1px solid rgb(216, 212, 212);
          &.selcolor{
            outline-color: #505050;
          }
        }
      }
    }
    .info{
      display: flex;
      flex-direction: column;
      text-align: center;
      font-weight: 700;
      font-size: 13px;
      a{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .price{
        font-size: 12px;
        span{
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          &.cost{
          position: relative;
          padding-right: 10px;
          margin-right: 10px;
          color: #ccc;
          &::before{
            position: absolute;
            content: '';
            height: 20px;
            width: 1px;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            background-color: #ccc;
          }
        }
      }
      }
      .card-title{
        color: black;
        &:hover{
          text-decoration-line: underline;
        }
      }
    }
  }
  .New{
    position: absolute;
    top: 7px;
    left: 7px;
    border: 1px solid white;
    border-radius: 4px;
    color: white;
    padding: 2px 8px;
    background-color: #3adb6b;
    font-weight: 700;
  }
  .discount{
    position: absolute;
    top: 7px;
    left: 7px;
    border-radius: 4px;
    color: white;
    padding: 2px 8px;
    background-color: #bf1010;
    font-weight: 700;
  }
  .soldout{
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    width: 70%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    color: white;
    padding: 2px 8px;
    background-color: #C1C1C1;
    font-weight: 700;
    font-size: 16px;
  }
}
  .wishlist-enter-active,
  .wishlist-leave-active{
    transition: all 0.3s ease-out;
  }
  .wishlist-enter-to,
  .wishlist-leave-from{
    opacity: 1;
    transform: scale(1);
  }
  .wishlist-enter-from{
    opacity: 0;
    transform: scale(0.4);
  }
  .wishlist-leave-to{
    transform: scale(0.4);
    opacity: 0;
  }
</style>
