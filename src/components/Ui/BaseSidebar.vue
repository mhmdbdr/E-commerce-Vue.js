<template>
<div @click="closebar" v-if="show" class="shadow"></div>
<transition name="slidebar">
  <div v-if="show" class="sidebar col-10 col-xl-3 col-lg-4 col-md-5">
    <div class="closebtn">
      <div @click="closebar" >
        <span class="xcar">X</span>
        <span >CLOSE</span>
      </div>
    </div>
    <h5>
      <slot name="title"></slot>
    </h5>
    <slot></slot>
  </div>
</transition>
</template>

<script>
export default {
  props: ['name', 'show'],
  emits: ['reset-sidebar-data'],
  data () {
    return {
    }
  },
  methods: {
    closebar () {
      this.$store.dispatch('sidebar/closebtn', this.name)
      document.body.classList.remove('stop-scrolling')
      if (this.name === 'profile') {
        this.$emit('reset-sidebar-data')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar{
  position: fixed;
  right: 0;
  top: 0;
  background-color: white;
  height: 100vh;
  padding: 16px 30px 100px;
  color: black ;
  z-index: 1000;
  overflow: scroll;
}
@media (max-width: 375px) {
  .sidebar{
    padding: 16px 15px 100px;
  }
}
.closebtn{
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 15px;
  font-size: 14px;
  color: #505050;
  position: relative;
  div{
    cursor: pointer;
  }
}
.xcar{
  margin-right: 5px;
  font-size: 16px;
}
.shadow{
  position: fixed;
}
h5{
  color: #202020;
  text-transform: uppercase;
  letter-spacing: .05em;
  font-size: 13px;
  font-weight: 700;
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 17px;
  margin-bottom: 0;
}
  .slidebar-enter-from,
  .slidebar-leave-to{
    transform: translateX(400px);
    opacity: 0;
  }
  .slidebar-leave-active{
    transition: all 0.6s ease-in;
  }
  .slidebar-enter-active{
    transition: all 0.6s ease-out;
  }
  .slidebar-leave-from,
  .slidebar-enter-to{
    transform: translateX(0);
    opacity: 1;
  }
</style>
