<template>
<div>
  <div class="whitesp d-block"></div>
  <div class="container">
    <div class="content">
      <div class="head">
        <h2>ABOUT US</h2>
      </div>
      <div class="text">
        <p>Stabraq Trendsetters is the number one detail oriented all-Egyptian clothes brand.</p>
        <p>Driven by self-expression, we strive to reflect our beliefs through high quality, multi-featured products and effective and inspiring movements.</p>
        <p>Check out this video to get an idea of who we are, and how we work.</p>
      </div>
    </div>
  </div>
</div>
</template>

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
