<template>
<div>
  <div class="whitesp d-block"></div>
  <div class="container">
    <div class="head">
      <h3>ACCOUNT</h3>
    </div>
    <div class="content">
      <div class="createacc">
        <div class="options">
          <span>NEW CUSTOMER</span>
        </div>
        <div class="info">
          <div class="signup">
            <p>Register with us for a faster checkout, to track the status of your order and more.</p>
          </div>
          <form @submit.prevent="">
            <div class="inputcont">
            <label for="#fnamereg">First Name</label>
              <input type="text" id="fnamereg" placeholder="First Name" v-model.trim="fname.value">
              <p v-if="!fname.valid">first name must not be empty</p>
            </div>
            <div class="inputcont">
              <label for="#lnamereg">Last Name</label>
              <input type="text" id="lnamereg" placeholder="Last Name" v-model.trim="lname.value">
              <p v-if="!lname.valid">last name must not be empty</p>
            </div>
            <div class="inputcont">
              <label for="#emailreg">Your Email Address <span>*</span></label>
              <input type="email" id="emailreg" placeholder="Your Email Address" v-model.trim="email.value">
              <p v-if="!email.valid">email must be correct</p>
            </div>
            <div class="inputcont">
              <label for="#passwordreg">Your Password <span>*</span></label>
              <input type="password" id="passwordreg" placeholder="Your Password" v-model.trim="password.value">
              <p v-if="!password.valid">password must not be empty or less than 8 char</p>
            </div>
            <p v-if="signuperrorvis" class="signinerror">{{ signupError }}</p>
            <base-button @click="signup" type='main'>create an account</base-button>
          </form>
        </div>
      </div>
      <div class="orhr">
        <span>OR</span>
      </div>
      <div class="login">
      <div class="options">
        <span>RETURNING CUSTOMER</span>
      </div>
      <div class="loginform">
        <div class="signin">
          <p>If you already have an account, enter your email and password information.</p>
        </div>
        <form @submit.prevent="">
          <div class="inputcont">
            <label for="#Emailadd">Email Address<span>*</span></label>
            <input type="Email" id="Emailadd" placeholder="Email Address" v-model.trim="loginemail.value" @focus="inputfocus('email')">
            <p v-if="!loginemail.valid">email must be correct</p>
          </div>
          <div class="inputcont">
            <label for="#passwordadd">Password<span>*</span></label>
            <input type="password" id="passwordadd" placeholder="Password" v-model.trim="loginpassword.value" @focus="inputfocus('password')">
            <p v-if="!loginpassword.valid">password must not be empty or less than 8 char</p>
          </div>
          <p v-if="signinerrorvis" class="signinerror">{{ signinError }}</p>
          <base-button @click="signin" type='main-rev'>login</base-button>
        </form>
      </div>
      </div>
    </div>
  </div>
  <loading-popup :show='isLoading'></loading-popup>
</div>
</template>

<script>
export default {
  data () {
    return {
      email: {
        valid: true,
        value: ''
      },
      password: {
        valid: true,
        value: ''
      },
      lname: {
        valid: true,
        value: ''
      },
      fname: {
        valid: true,
        value: ''
      },
      loginemail: {
        valid: true,
        value: ''
      },
      loginpassword: {
        valid: true,
        value: ''
      },
      formvalidation: true,
      loginformvalidation: true,
      signupError: '',
      signinError: '',
      isLoading: false,
      signinerrorvis: false,
      signuperrorvis: false
    }
  },
  methods: {
    async signin () {
      this.loginformvalidation = true
      if (this.loginpassword.value.length < 8) {
        this.loginformvalidation = false
        this.loginpassword.valid = false
      } else {
        this.loginpassword.valid = true
      }
      if (!this.loginemail.value.includes('@gmail.com')) {
        this.loginformvalidation = false
        this.loginemail.valid = false
      } else {
        this.loginemail.valid = true
      }
      if (this.loginformvalidation === true) {
        this.isLoading = true
        try {
          await this.$store.dispatch('auth/signin', { email: this.loginemail.value, password: this.loginpassword.value })
          this.signinerrorvis = false
          this.$router.replace('/Account')
        } catch (error) {
          this.signinError = error.message
          this.signinerrorvis = true
        }
        this.isLoading = false
        this.loginpassword.value = ''
        this.loginemail.value = ''
      }
    },
    async signup () {
      this.formvalidation = true
      if (this.password.value.length < 8) {
        this.formvalidation = false
        this.password.valid = false
      } else {
        this.password.valid = true
      }
      if (!this.email.value.includes('@gmail.com')) {
        this.formvalidation = false
        this.email.valid = false
      } else {
        this.email.valid = true
      }
      if (this.fname.value === '') {
        this.formvalidation = false
        this.fname.valid = false
      } else {
        this.fname.valid = true
      }
      if (this.lname.value === '') {
        this.formvalidation = false
        this.lname.valid = false
      } else {
        this.lname.valid = true
      }
      if (this.formvalidation === true) {
        this.isLoading = true
        try {
          await this.$store.dispatch('auth/signup', { email: this.email.value, password: this.password.value })
          this.signuperrorvis = false
          this.$router.replace('/Account')
        } catch (error) {
          this.signupError = error.message
          this.signuperrorvis = true
        }
        this.isLoading = false
      }
    },
    inputfocus (val) {
      this.signinerrorvis = false
      if (val === 'email') {
        this.loginemail.valid = true
      } else {
        this.loginpassword.valid = true
      }
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
}
@media (max-width: 1200px) {
  .head{
    h3{
      margin-top: 0 !important;
    }
  }
}
.head{
  h3{
    margin: 50px 0 0;
    padding-bottom: 30px;
    font-size: 25px;
    letter-spacing: 1.3;
    font-weight: 400;
  }
}
  .options{
    border-bottom: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
    display: flex;
    padding: 13px 0;
    margin-bottom: 35px;
    background-color: #fafafa;
    justify-content: center;
    span{
      display: block;
      text-align: center;
      font-size: 14px;
      font-weight: 700;
    }
  }
  @media (max-width: 990px) {
    .content {
      flex-direction: column;
      margin-bottom: 80px;
      .createacc{
        width: 100% !important;
        .info{
          width: 100% !important;
        }
      }
      .login{
        width: 100% !important;
        .loginform{
          width: 100% !important;
        }
      }
      .orhr{
        display: none;
      }
    }
  }
.content{
  display: flex;
  position: relative;
  .signinerror{
  margin-bottom: 15px !important;
  }
  .createacc{
    width: 50%;
    .info{
      margin: auto;
      width: 70%;
      .signup{
        text-align: center;
        p{
          color: #505050;
          margin: 30px 0 25px;
          font-size: 13px;
        }
      }
      @media (max-width: 1199px) {
        .head{
          h3{
            margin-top: 0;
          }
        }
      }
      form{
        margin-bottom: 20px;
        width: 100%;
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
            &:focus{
              outline: none;
            }
            &::placeholder{
              font-size: 12px;
            }
          }
        }
        p{
          color: red;
          font-size: 13px;
          margin-top: 5px;
          margin-bottom: 0;
        }
      }
    }
  }
  .orhr{
    height: calc(100% - 90px);
    top: 70px;
    transform: translateX(-50%);
    left: 50%;
    width: 1px;
    background-color: #a4a3a3;
    position: absolute;
    span{
      display: block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      padding: 10px;
      border: 1px solid #a4a3a3;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      color: #a4a3a3;
      background-color: white;
      font-size: 13px;
    }
  }
  .login{
    width: 50%;
    position: relative;
    .signin{
      text-align: center;
      p{
        color: #505050;
        margin: 30px 0 25px;
        font-size: 13px;
      }
    }
    .loginform{
      margin: auto;
      width: 70%;
      form{
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
          &:focus{
            outline: none;
          }
          &::placeholder{
            font-size: 12px;
          }
        }
      }
      p{
        color: red;
        font-size: 13px;
        margin-top: 5px;
        margin-bottom: 0;
      }
      }
    }
  }
}
</style>
