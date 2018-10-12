<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img"  :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeSwiper",
    props: {
      list: Array
    },
    data(){
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true,
          autoplay: true
        }
      }
    },
    computed: {
      showSwiper(){
        return this.list.length
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background-color: #fff !important
  .wrapper
    width: 100%
    height: 0
    padding-bottom: 48%
    overflow: hidden
    background-color: #fff
    .swiper-img
      width: 100%
      height: 3.6rem
</style>
