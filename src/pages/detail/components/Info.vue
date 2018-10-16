<template>
  <div>
    <div class="info-address border-bottom">
      <span class="iconfont icon-aui-icon-location"></span>
      {{info.address}}
      <span class="iconfont icon-jiantouyou"></span>
    </div>
    <div class="info-check border-bottom">
      <span class="iconfont icon-tupian"></span>
      {{info.check}}
      <span class="iconfont icon-jiantouyou"></span>
    </div>
    <div class="info-comment">
      <span class="iconfont icon-xinxi"></span>
      <span class="info-icon-star"></span>
      <span class="info-comment-point">4.9分</span>
      <div class="info-comment-number">
        {{info.commentCount + '条评论'}}
        <span class="iconfont icon-jiantouyou"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailInfo",
    props: {
      info: Object
    }
  }
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .info-address, .info-check
    padding .25rem .1rem
    font-weight 600
    .icon-jiantouyou
      float right
      margin-right .1rem
      color $grayColor
      font-weight 500
    .icon-tupian, .icon-xinxi
      color: $grayColor
  .info-comment
    padding .25rem .1rem
    color $grayColor
    .info-icon-star
      display inline-block
      width 1.65rem
      height .25rem
      background url(https://ydtname.github.io/GoWhere/dist/static/re-star-gold_13d50a5.png) left top/78px 12px no-repeat;
    .info-comment-point
      color: orange
    .info-comment-number
      float right
      margin-right .1rem
      font-weight 500
</style>
