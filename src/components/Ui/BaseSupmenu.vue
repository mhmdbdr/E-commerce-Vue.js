<template>
<transition name="slidebar">
  <div v-if="show" class="sidebar col-10 col-lg-3 col-md-4">
    <div @click="backarrow" class="menu-title">
      <span>
        <font-awesome-icon icon="fa-solid fa-angle-left" />
      </span>
      <div class="title">
        <slot name="title"></slot>
      </div>
    </div>
    <slot></slot>
  </div>
</transition>
</template>

<script>
export default {
  props: ['show'],
  emits: ['backArrow'],
  data () {
    return {
    }
  },
  methods: {
    backarrow () {
      this.$emit('backArrow')
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
  color: black ;
  z-index: 1000;
}
.menu-title{
  background-color: #f8f8f8;
  padding: 13px 20px 11px;
  position: relative;
  cursor: pointer;
  .title{
    text-align: center;
    font-size: 13px;
    color: #505050;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  span{
    position: absolute;
    left: 20px;
    text-align: left;
    svg{
      color: #505050;
    }
  }
}
.shadow{
  position: fixed;
}
  .slidebar-enter-from,
  .slidebar-leave-to{
    transform: translateX(-600px);
    opacity: 1;
  }
  .slidebar-leave-active{
    transition: all 0.4s ease-in-out;
  }
  .slidebar-enter-active{
    transition: all 0.4s ease-in-out;
  }
  .slidebar-leave-from,
  .slidebar-enter-to{
    transform: translateX(0);
    opacity: 1;
  }
</style>
