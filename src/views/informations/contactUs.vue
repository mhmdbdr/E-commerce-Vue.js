<template>
<div>
  <div class="whitesp d-block"></div>
  <div class="container">
    <div class="content">
      <div class="head">
        <h2>DROP US A LINE</h2>
        <span></span>
      </div>
      <div class="flexcont row">
        <div class="formcont col-12 col-md-7 col-lg-8 col-xl-7 ">
          <p>Have a question or comment? Use the form below to send us a message or contact us by mail at:</p>
          <form @submit.prevent="">
            <div class="inputcont">
            <label for="#name">Your Name</label>
              <input type="text" id="name" placeholder="Your Name" v-model="name">
            </div>
            <div class="inputcont">
              <label for="#phone">Your Phone</label>
              <input type="number" id="phone" placeholder="Your Phone" v-model="phone">
            </div>
            <div class="inputcont">
              <label for="#email">Your Email <span>*</span></label>
              <input type="email" id="email" placeholder="Your Email Address" v-model="email">
            </div>
            <div class="inputcont">
              <label for="#comment">Your Comment <span>*</span></label>
              <textarea id="comment" rows="6" placeholder="please leave your comment here" v-model="textarea"></textarea>
            </div>
            <base-button type='main'>submit contact</base-button>
          </form>
        </div>
        <div class="infocont col-12 col-md-5 col-lg-4 col-xl-5 ">
          <h4>STORE INFORMATION</h4>
          <p>We'd love to hear from you - please use the <br> form to send us your message or ideas. Or <br> simply pop in for a cup of fresh tea and a <br> cookie:</p>
          <p>Address: 1 Mostafa El-Nahaas, Nasr City, <br> Cairo</p>
          <p>Email: info@stabraq.com <br> Mobile: 002-01123399345</p>
          <hr>
          <p>Opening Hours: <br> Sunday to Thursday: 12pm - 12am <br> Fridays: 1pm - 12am</p>
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
  }
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
