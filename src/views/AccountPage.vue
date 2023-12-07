<template>
<div>
  <div class="whitesp d-block"></div>
  <div class="contentpage">
    <div class="container">
        <div class="head">
          <h3>MY ACCOUNT</h3>
        </div>
        <span class="orderh">ORDER HISTORY</span>
        <div v-if="hasorders" class="content">
          <table class="table table-bordered table-hover">
            <thead class="thead-light">
              <tr>
                <td class="col">order</td>
                <td class="col">date</td>
                <td class="col">payment status</td>
                <td class="col">fulfillment status</td>
                <td class="col">total</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in orderdata" :key='order.ordernumber'>
                <td class="col ordernum">#{{ order.ordernumber }}</td>
                <td class="col">{{ order.date }}</td>
                <td class="col">{{ order.paymentstatus }}</td>
                <td class="col">{{ order.fulfillmentstatus}}</td>
                <td class="col">{{ order.total }} LE</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="!hasorders && !isLoading" class="noorders">
          <p >Your order history is currently empty.</p>
          <span>Continue browsing <router-link to="/">here</router-link>.</span>
        </div>
        <base-spinner v-if="isLoading"></base-spinner>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      errorMessage: ''
    }
  },
  computed: {
    orderdata () {
      return this.$store.getters['orders/orders']
    },
    hasorders () {
      return this.$store.getters['orders/hasorders']
    }
  },
  methods: {
    async loadorders () {
      this.isLoading = true
      try {
        await this.$store.dispatch('orders/fetchorders')
      } catch (error) {
        this.errorMessage = error.message || 'load orders faild'
      }
      this.isLoading = false
    }
  },
  created () {
    this.loadorders()
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
  .contentpage{
    min-height: calc(100vh - 123px) !important;
  }
}
@media (max-width: 1200px) {
  .head {
    h3{
      margin-top: 0 !important;
    }
  }
}
.head{
  h3{
    margin: 30px 0 40px;
    font-size: 25px;
    font-weight: 400;
    letter-spacing: 1.4px;
  }
}
.contentpage{
  min-height: calc(100vh - 122px);
  .orderh{
    display: block;
    font-weight: 700;
    font-size: 14px;
    border-bottom: 1px solid #e6e6e6 ;
    margin-bottom: 25px;
    padding-bottom: 8px;
  }
  @media (max-width: 767px) {
  .content {
    overflow: scroll;
  }
  }
  .content{
    margin-bottom: 20px;
    table{
      min-width: 680px;
      td{
        border-width: 0px;
      }
      td:first-of-type{
        border-left-width: 1px;
      }
      td:last-of-type{
        border-right-width: 1px;
      }
      thead{
        tr{
          td{
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
          }
        }
      }
      tbody{
        tr{
          cursor: pointer;
          td{
            font-size: 13px;
            color: #888686;
          }
          td:first-of-type{
            color: #3ADB89;
            cursor: pointer;
          }
        }
      }
    }
  }
  .noorders{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      font-size: 13px;
      letter-spacing: 1.2px;
      background-color: #fff3cd;
      color: #856404;
      padding: 15px 0;
      margin: 50px 0;
    }
    span{
      font-size: 14px;
      a{
        color: #3ADB89;
        cursor: pointer;
      }
    }
  }
}
</style>
