<template>
<div>
  <div class="whitesp d-block"></div>
  <div class="container">
    <div class="content">
      <div class="head">
        <h2>{{ $t('information.aboutus.head') }}</h2>
      </div>
      <div class="text">
        <p>{{ $t('information.aboutus.text1') }}</p>
        <p>{{ $t('information.aboutus.text2') }}</p>
        <p>{{ $t('information.aboutus.text3') }}</p>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.$emit('fullmounted')
  },
  emits: ['fullmounted']
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
  .content{
    .head{
      margin-top: 40px;
    }
  }
}
.content{
  height: 100vh;
  .head{
    h2{
      font-size: 26px;
      margin-bottom: 40px;
    }
  }
  .text{
    p{
      margin-bottom: 25px;
      font-size: 13px;
      color: #505050;
    }
  }
}
</style>
