<template>
<teleport to='body'>
  <div v-if="show" class="shadow"></div>
  <div v-if="show" class="popup">
    <div class="content">
      <base-spinner></base-spinner>
    </div>
  </div>
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
  }
}
</script>

<style lang="scss" scoped>
.popup{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: black;
  z-index: 1000;
}
.shadow{
  position: fixed;
}
</style>
