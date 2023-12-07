<template>
<teleport to='body'>
  <div @click="closebar" v-if="show" class="shadow"></div>
  <transition name="popup">
    <div v-if="show" class="popup">
      <div @click="closebar" class="closebtn">X</div>
      <div class="content">
        <div class="imgcontent">
          <slot name="prodImg">
            <img :src="prodImg">
          </slot>
        </div>
        <div class="prodcontent">
          <slot name="prodTitle">
            <p><span>{{ prodTitle }}</span> is added to your shopping cart.</p>
          </slot>
          <div class="btns">
            <base-button @click="closebar" type='main-rev'>continue shopping</base-button>
            <base-button @click="cartPage" type='main-rev'>go to cart</base-button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</teleport>
</template>

<script>
export default {
  props: ['show', 'prodTitle', 'prodImg'],
  data () {
    return {
    }
  },
  methods: {
    closebar () {
      this.$store.dispatch('popup/closebtn')
    },
    cartPage () {
      this.$router.push('/cart')
      this.closebar()
    }
  }
}
</script>

<style lang="scss" scoped>
.popup{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  background-color: white;
  padding: 43px 40px 20px;
  color: black;
  z-index: 1000;
  max-width: 535px;
}
@media (max-width: 767px) {
  .popup{
    padding: 23px 20px 10px;
    width: calc(100% - 40px);
    .content{
      .prodcontent{
        .btns{
          flex-direction: column;
          width: 100%;
          button{
            margin: 0 0 10px 0;
          }
        }
      }
    }
  }
}
@media (min-width: 768px) {
  .popup{
    .content{
      .prodcontent{
        .btns{
          button{
            padding: 20px 15px 18px;
          }
        }
      }
    }
  }
}
.content{
  display: flex;
  .imgcontent{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-right: 10px;
  img{
    width: 64px;
    height: 64px;
  }
  }
  .prodcontent{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    p{
      color: #999999;
      font-size: 13px;
      margin-left: 10px;
      span{
        color: #505050;
      }
    }
    .btns{
      display: flex;
      align-items: center;
      justify-content: center;
      button{
        margin: 0 10px 20px;
        padding: 10px 15px 8px;
        white-space: nowrap;
        min-width: 130px;
      }
    }
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
  top: -15px;
  right: -15px;
  font-weight: 600;
  cursor: pointer;
}
.shadow{
  position: fixed;
}
  .popup-enter-from,
  .popup-leave-to{
    top: calc(50% + 100px);
    opacity: 0;
  }
  .popup-leave-active{
    transition: all 0.6s ease-in;
  }
  .popup-enter-active{
    transition: all 0.6s ease-out;
  }
  .popup-leave-from,
  .popup-enter-to{
    top: calc(50%);
    opacity: 1;
  }
</style>
