<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <span class="iconfont icon-fanhui header-back"></span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "CityHeader"
  }
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .header
    position: relative
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background-color: $bgColor
    font-size: .32rem
    .header-back
      position: absolute
      left: 0
      top: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
