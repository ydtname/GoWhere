<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      list: Array
    }
  }
</script>

<style scoped lang="stylus">
  @import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background-color: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    width: 100%
    height: 37.09%
  .item-img
    width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
