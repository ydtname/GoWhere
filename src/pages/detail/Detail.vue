<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :galleryImgs="galleryImgs">
    </detail-banner>
    <detail-header></detail-header>
    <detail-info :info="info"></detail-info>
    <detail-list :list="list"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Header'
  import DetailInfo from './components/Info'
  import DetailList from './components/List'
  import axios from 'axios'
  export default {
    name: "Detail",
    components:{
      DetailBanner,
      DetailHeader,
      DetailInfo,
      DetailList,
    },
    methods: {
      getDetailInfo(){
        axios.get('/api/detail.json', {
          params: {
            id: this.$route.params.id
          }
        }).then(this.handleGetDataSucc)
      },
      handleGetDataSucc(res){
        res = res.data
        if(res.ret && res.data){
          const data = res.data
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.galleryImgs = data.galleryImgs
          this.list = data.categoryList
        }
      }
    },
    mounted(){
      this.lastDetail = this.currentDetail
      this.getDetailInfo()
    },
    data(){
      return {
        lastDetail: '',
        sightName: '',
        bannerImg: '',
        galleryImgs: [],
        info: {
          address: '辽宁省大连市沙河口区',
          check: '查看景点简介及开放时间',
          commentCount: 18888
        },
        list: []
      }
    },
    computed: {
      currentDetail(){
        return this.$route.params.id
      }
    },
    activated(){
      if(this.lastDetail !==  this.currentDetail){
        this.lastDetail = this.currentDetail
        this.getDetailInfo()
      }
    }
  }
</script>

<style scoped lang="stylus">
  .content
    height 10rem
</style>
