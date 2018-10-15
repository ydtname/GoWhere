<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img alt="" class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont icon-tupian banner-icon"></span>
          {{this.galleryImgs.length}}
        </div>
      </div>
    </div>
    <common-gallery
      :imgs="galleryImgs"
      v-show="showGallery"
      @close="handleGalleryClose"></common-gallery>
  </div>
</template>

<script>
  import CommonGallery from 'common/gallery/Gallery'
  import {mapMutations} from 'vuex'
  export default {
    name: "DetailBanner",
    props: {
      sightName: String,
      bannerImg: String,
      galleryImgs: Array
    },
    components: {
      CommonGallery
    },
    data(){
      return {
        showGallery: false,
      }
    },
    methods: {
      handleBannerClick(){
        this.showGallery = true
        this.changeScroll('stopScroll')
      },
      handleGalleryClose(){
        this.showGallery = false
      },
      ...mapMutations(['changeScroll']),
    }
  }
</script>

<style scoped lang="stylus">
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        padding: 0 .4rem
        margin-top: .14rem
        line-height: .4rem
        border-radius: .2rem
        font-size: .24rem
        background-color: rgba(0,0,0,.8)
        .banner-icon
          font-size: .24rem
</style>
