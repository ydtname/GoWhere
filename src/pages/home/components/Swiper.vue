<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
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
        data(){
          return {
            swiperOption: {
              pagination: '.swiper-pagination',
              loop: true,
              autoplay: true
            },
            swiperList: [{
              id: '0001',
              imgUrl: '/static/swiper1.jpg'
            },
            {
              id: '0002',
              imgUrl: '/static/swiper2.jpg'
            }]
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
