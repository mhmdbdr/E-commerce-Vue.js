<template>
<div>
  <div class="whitesp d-block"></div>
  <div class="container">
    <div class="content">
      <div class="head">
        <h2>{{ $t('information.contactus.head') }}</h2>
        <span></span>
      </div>
      <div class="flexcont row">
        <div class="formcont col-12 col-md-7 col-lg-8 col-xl-7 ">
          <p>{{ $t('information.contactus.haveaq') }}</p>
          <form @submit.prevent="">
            <div class="inputcont">
            <label for="#name">{{ $t('information.contactus.yname') }}</label>
              <input type="text" id="name" placeholder="Your Name" v-model="name">
            </div>
            <div class="inputcont">
              <label for="#phone">{{ $t('information.contactus.yphone') }}</label>
              <input type="number" id="phone" placeholder="Your Phone" v-model="phone">
            </div>
            <div class="inputcont">
              <label for="#email">{{ $t('information.contactus.yemail') }} <span>*</span></label>
              <input type="email" id="email" placeholder="Your Email Address" v-model="email">
            </div>
            <div class="inputcont">
              <label for="#comment">{{ $t('information.contactus.ycomment') }} <span>*</span></label>
              <textarea id="comment" rows="6" placeholder="please leave your comment here" v-model="textarea"></textarea>
            </div>
            <base-button type='main'>{{ $t('information.contactus.submit') }}</base-button>
          </form>
        </div>
        <div class="infocont col-12 col-md-5 col-lg-4 col-xl-5 ">
          <h4>{{ $t('information.contactus.storeinfo') }}</h4>
          <p>{{ $t('information.contactus.storeinfop1') }} <br> {{ $t('information.contactus.storeinfop2') }} <br> {{ $t('information.contactus.storeinfop3') }} <br> {{ $t('information.contactus.storeinfop4') }}</p>
          <p>{{ $t('information.contactus.storeinfop5') }} <br> {{ $t('information.contactus.storeinfop6') }}</p>
          <p>{{ $t('information.contactus.storeinfop7') }} <br> {{ $t('information.contactus.storeinfop8') }}</p>
          <hr>
          <p>{{ $t('information.contactus.storeinfop9') }} <br> {{ $t('information.contactus.storeinfop10') }} <br> {{ $t('information.contactus.storeinfop11') }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      phone: '',
      email: '',
      textarea: ''
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
  margin-bottom: 100px;
  .head{
    margin-bottom: 25px;
    h2{
      color: #202020;
      font-size: 25px;
      letter-spacing: 1.2px;
      margin-bottom: 27px;
    }
    span{
      display: block;
      width: 40px;
      height: 2px;
      background-color: #202020;
    }
  }
  .flexcont{
    display: flex;
    justify-content: space-between;
    .formcont{
      margin-bottom: 50px;
      p{
        color: #505050;
        font-size: 12px;
        margin-bottom: 27px;
      }
      form{
      margin-bottom: 20px;
      .inputcont{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: 15px;
        &:first-of-type{
          margin-top: 22px;
        }
        label{
          color: #202020;
          margin-bottom: 6px;
          font-size: 13px;
          font-weight: 500;
          span{
            color: #f1152f;
            margin-left: 5px;
            font-weight: 700;
          }
        }
        input{
          width: 100%;
          border: 1px solid #dfdfdf;
          padding: 13px 12px 11px;
          max-width: 380px;
          &:focus{
            outline: none;
          }
          &::placeholder{
            font-size: 12px;
          }
        }
        textarea{
          width: 100%;
          max-width: 620px;
          border: 1px solid #dfdfdf;
          padding: 13px 12px 11px;
          &:focus{
            outline: none;
          }
          &::placeholder{
            font-size: 12px;
          }
        }
      }
      button{
        width: 205px;
      }
      }
    }
    @media (min-width: 1200px) {
      .infocont{
        width: 25% !important;
      }
    }
    @media (max-width: 1199px) and (min-width:769) {
      .infocont{
        width: 40% !important;
      }
    }
    .infocont{
      h4{
        color: #202020;
        font-size: 14px;
        font-weight: 800;
        letter-spacing: 1.2px;
        margin-bottom: 22px;
      }
      p{
        color: #505050;
        font-size: 13px;
      }
      hr{
        color: #6e6c6c;
        margin: 28px 0;
        height: 2px;
      }
    }
  }
}
</style>
