<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-abs"
    >
      <span class="iconfont icon-fanhui header-abs-back"></span>
    </router-link>
    <div class="header-fixed"
         v-show="showAbs"
         :style="opacityStyle">
      <router-link to="/">
        <span class="iconfont icon-fanhui header-fixed-back"></span>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailHeader",
    data(){
      return {
        showAbs: false,
        opacityStyle:{
          opacity: 0
        }
      }
    },
    methods: {
      handleScroll(){
        const top = document.documentElement.scrollTop
        if(top > 60){
          let opacity = top / 140
          opacity = opacity > 1 ? 1 : opacity
          this.opacityStyle = {opacity}
          this.showAbs = true
        }else{
          this.showAbs = false
        }
      }
    },
    activated(){
      window.addEventListener('scroll', this.handleScroll)
    },
    deactivated(){
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    line-height .8rem
    text-align center
    border-radius .4rem
    background-color rgba(0,0,0,.8)
    .header-abs-back
      color #fff
      font-size .4rem
  .header-fixed
    position: fixed
    z-index 1
    top 0
    right 0
    left 0
    bottom 0
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background-color: $bgColor
    font-size: .32rem
    .header-fixed-back
      position: absolute
      left: 0
      top: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
