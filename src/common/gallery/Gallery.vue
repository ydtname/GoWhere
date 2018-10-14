<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallery-img"  :src="item"  alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommonGallery",
    props: {
      imgs: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        swiperOptions:{
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
          observer:true,
          observeParents:true,//父级或者当前元素dom元素发生变化，执行刷新
        }
      }
    },
    methods: {
      handleGalleryClick(){
        this.$emit('close')
      }
    }
  }
</script>

<style scoped lang="stylus">
  .container >>> .swiper-container
    overflow: inherit
  .container
    display: flex
    align-items: center
    position: fixed
    z-index: 1
    left: 0
    right: 0
    top: 0
    bottom: 0
    background-color: #000
    .wrapper
      width: 100%
      height: 0
      padding-bottom: 100%
      .gallery-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -.8rem
</style>
