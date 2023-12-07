<template>
  <div v-if="checkouts" class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-3 pb-2 mb-md-5">
          <router-link class="logo" to="/">
            <img src="../../../imgs\secicon.png" alt="">
          </router-link>
          <p class="mb-2">Stabraq Trendsetters is an all-Egyptian clothes brand. Driven by self-expression, we strive to reflect our beliefs through high quality, multi-featured products and effective and inspiring movements.
          </p>
          <p>
            Address: 1 Mostafa El-Nahaas, Nasr City<br>
            Call us at: 01123399345 <br>
            Email: info@stabraq.com
          </p>
        </div>
        <div class="col-12 col-md-3 pb-2 execp maind">
          <div class="">
            <span class="">SHOP</span>
            <ul>
              <li>
                <router-link class="arouter" to="/collections/MEN">Men</router-link>
              </li>
              <li>
                <router-link class="arouter" to="/collections/WOMEN">Women</router-link>
              </li>
              <li>
                <router-link class="arouter" to="/collections/KIDS">Kids</router-link>
              </li>
              <li>
                <router-link class="arouter" to="/collections/ACCESSORIES">Accessories</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-3 pb-2 maind">
          <div class="">
            <span class="">INFORMATION</span>
              <ul class="">
                <li>
                  <router-link class="arouter" to="/aboutUs">About Us</router-link>
                </li>
                <li>
                  <router-link class="arouter" to="/contactUs">Contact Us</router-link>
                </li>
                <li>
                  <router-link class="arouter" to="/termsOfService">Terms Of Service</router-link>
                </li>
                <li>
                  <router-link class="arouter" to="/refundPolicy">Refund Policy</router-link>
                </li>
              </ul>
            </div>
        </div>
        <div class="col-12 col-md-3 py-2">
          <div class="icons">
          <a @click.prevent="" href=""><font-awesome-icon icon="fa-brands fa-twitter" /></a>
          <a @click.prevent="" href=""><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
          <a @click.prevent="" href=""><font-awesome-icon icon="fa-brands fa-instagram" /></a>
          </div>
          <span>PAYMENT METHODS</span>
          <div>
            <img class="me-3" src="../../../imgs/visa.webp" alt="">
            <img src="../../../imgs/mastercard.avif" alt="">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center py-4 rights">
          2021 Stabraq TS Management Co. All Rights Reserved
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
  computed: {
    checkouts () {
      if (this.$route.path === '/checkouts') {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer{
    background-color: #f8f8f8;
    border-top: 1px solid #ebebeb;
    padding: 75px 0 20px 0;
  }
  @media (max-width: 766px) {
    .footer{
      padding: 40px 0 20px 0;
    }
  }
  ul{
    padding: 0;
  }
  li{
    margin-bottom: 10px;
    text-align: start;
    a{
      color: #202020;
      font-size: 14px;
    }
  }
  p{
    font-size: 13px;
  }
  h6{
    font-weight: bold;
  }
  .rights{
    font-size: 15px;
    color: #505050;
  }
  .icons{
    margin-bottom: 15px;
    svg{
      font-size: 25px;
      margin-right: 15px;
      cursor: pointer;
      color: #202020;
      transition: all 0.3s ease;
      &:hover{
        color: #3adb6b;
      }
    }
  }
  .logo{
    img{
      max-height: 28px ;
    }
    display: block;
    margin-bottom: 10px;
  }
  .execp{
    padding-left: 7%;
    padding-right: 7%;
  }
  @media (max-width: 766px) {
    .execp{
      padding-left: 12px;
      padding-right: 12px;
    }
  }
  span{
    display: block;
    font-size: 13px;
    font-weight: 900;
    letter-spacing: 0.05;
    padding-bottom: 13px;
    margin: 0;
  }
//   .maind{
//     .dropdown{
//       .dropdown-menu{
//         position: relative !important;
//         border: none;
//         background-color: #f8f8f8;
//         .arouter{
//           padding-left: 0;
//         }
//       }
//   }
// }
</style>
