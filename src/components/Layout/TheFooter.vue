<template>
  <div v-if="checkouts" class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-3 pb-2 mb-md-5">
          <router-link class="logo" to="/">
            <img src="../../../imgs\secicon.png" alt="">
          </router-link>
          <p class="mb-2">{{ $t('global.footer.disc.disc1') }}</p>
          <p>
            {{ $t('global.footer.disc.dics2') }}<br>
            {{ $t('global.footer.disc.dics3') }}<br>
            {{ $t('global.footer.disc.dics4') }}
          </p>
        </div>
        <div class="col-12 col-md-3 pb-2 execp maind">
          <div class="">
            <span class="">{{ $t('global.footer.shop') }}</span>
            <ul>
              <li>
                <router-link class="arouter" to="/collections/MEN">{{ $t('global.header.nav.men') }}</router-link>
              </li>
              <li>
                <router-link class="arouter" to="/collections/WOMEN">{{ $t('global.header.nav.women') }}</router-link>
              </li>
              <li>
                <router-link class="arouter" to="/collections/KIDS">{{ $t('global.header.nav.kids') }}</router-link>
              </li>
              <li>
                <router-link class="arouter" to="/collections/ACCESSORIES">{{ $t('global.header.nav.accessories') }}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-3 pb-2 maind">
          <div class="">
            <span class="">{{ $t('global.footer.info') }}</span>
              <ul class="">
                <li>
                  <router-link class="arouter" to="/aboutUs">{{ $t('global.footer.info1') }}</router-link>
                </li>
                <li>
                  <router-link class="arouter" to="/contactUs">{{ $t('global.footer.info2') }}</router-link>
                </li>
                <li>
                  <router-link class="arouter" to="/termsOfService">{{ $t('global.footer.info3') }}</router-link>
                </li>
                <li>
                  <router-link class="arouter" to="/refundPolicy">{{ $t('global.footer.info4') }}</router-link>
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
          <span>{{ $t('global.footer.payment') }}</span>
          <div>
            <img class="me-3" src="../../../imgs/visa.webp" alt="">
            <img src="../../../imgs/mastercard.avif" alt="">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center py-4 rights">
          {{ $t('global.footer.rights') }}
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
</style>
