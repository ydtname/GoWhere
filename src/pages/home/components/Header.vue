<template>
    <div class="header">
      <div class="header-left">
        <span class="iconfont icon-fanhui header-back"></span>
      </div>
      <div class="header-input">
        <span class="iconfont icon-sousuo"></span>
        输入城市/景点/游玩主题
      </div>
      <router-link to="/city">
        <div class="header-right">
          {{this.city}}
          <span class="iconfont icon-sanjiaodown arrow-icon"></span>
        </div>
      </router-link>
    </div>
</template>

<script>
  export default {
    name: "HomeHeader",
    props: {
      city: String
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    color: #fff
    background-color: $bgColor
    .header-left
      width: .64rem
      padding-left: .15rem
      float: left
      .header-back
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      padding-left: .2rem
      margin-top: .12rem
      margin-left: .2rem
      border-radius: .1rem
      background-color: #fff
      color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        font-size: .24rem

</style>
