<template>
  <button :class='classbtn'>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['type'],
  computed: {
    classbtn () {
      return this.type
    }
  }
}
</script>
<style lang="scss" scoped>
button{
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width: 100%;
  padding: 20px 18px 15px;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  transition-duration: 0.3s;
  &.main{
    background-color: white;
    color: black;
    &:hover{
      background-color: black;
      color: white;
    }
  }
  &.main-rev{
    background-color: black;
    color: white;
    &:hover{
      background-color: white;
      color: black;
    }
  }
  &.sec{
    background-color: black;
    color: white;
    &:hover{
      background-color: #505050;
      border-color:  #505050;
    }
  }
  &.gray-white{
    background-color: #505050;
    color: white;
    border-color: #505050;
    &:hover{
      background-color: white;
      border-color: black;
      color: black;
    }
  }
  &.white-gray{
    background-color: white;
    color: black;
    border-color: black;
    &:hover{
      background-color: #505050;
      border-color: #505050;
      color: white;
    }
  }
  &.basesec{
    background-color: #C1C1C1;
    border-color:  #C1C1C1;
    color: white;
  }
}
</style>
