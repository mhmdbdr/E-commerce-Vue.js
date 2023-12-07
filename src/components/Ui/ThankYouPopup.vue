<template>
<teleport to='body'>
  <div @click="closebar" v-if="show" class="shadow"></div>
  <transition name="popup">
    <div v-if="show" class="popup">
      <div @click="closebar" class="closebtn">X</div>
      <div class="content">
        <div class="prodcontent">
          <span>Your order is confirmed</span>
          <p>You’ll receive an email when your order is ready for pickup.</p>
          <div class="btns">
            <base-button @click="closebar" type='main-rev'>continue shopping</base-button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</teleport>
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
      this.$store.dispatch('popup/thankuclosebtn')
      this.$router.replace('/')
      document.body.classList.remove('stop-scrolling')
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
  padding: 30px;
  color: black;
  z-index: 1000;
  max-width: 535px;
}
@media (max-width: 767px) {
  .popup{
    padding: 23px 20px 10px;
    width: calc(100% - 40px);
  }
}
.content{
  display: flex;
  .prodcontent{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    span{
      font-weight: 700;
      font-size: 16px;
      text-transform: uppercase;
    }
    p{
      color: #999999;
      font-size: 13px;
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
