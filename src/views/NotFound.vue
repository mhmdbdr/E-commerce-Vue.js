<template>
  <div class="content">
    <div class="error-message">
      <font-awesome-icon icon="fa-solid fa-ghost" style="color: #3adb6b;" />
      <div class="info">
        <p>Sorry. Unless you’ve got a time <br> machine, that content is <br> unavailable.</p>
        <base-button @click="returnhome" type='main-rev'>return to store</base-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    returnhome () {
      this.$router.push('/')
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width:768px) {
  .content{
    .error-message{
      flex-direction: column;
      .info{
        padding-left: 0 !important;
        p{
          text-align: center;
        }
        button{
          margin: auto;
        }
      }
    }
  }
}
  .content{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e2e2e2;
    .error-message{
      display: flex;
      justify-content: center;
      align-items: center;
      svg{
        font-size: 150px;
      }
      .info{
        padding-left: 20px;
        p{
          font-size: 24px;
          font-weight: 700;
        }
        button{
          margin-top: 20px;
          max-width: 270px;
          background-color: #232323;
          &:hover{
            background-color: #ffffff;
          }
        }
      }
    }
  }
</style>
