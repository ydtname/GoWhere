<template>
  <div>
    <detail-banner></detail-banner>
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
  export default {
    name: "Detail",
    components:{
      DetailBanner,
      DetailHeader,
      DetailInfo,
      DetailList,
    },
    data(){
      return {
        info: {
          address: '辽宁省大连市沙河口区',
          check: '查看景点简介及开放时间',
          commentCount: 18888
        },
        list: [{
          title: '成人票',
          children: [{
            title: '成人三馆联票',
            price: '98.8￥'
          },{
            title: '成人三馆联票',
            price: '98.8￥'
          },]
        },{
          title: '儿童票',
          children: [{
            title: '成人五馆联票',
            price: '98.8￥'
          },{
            title: '成人三馆联票',
            price: '98.8￥'
          },]
        },{
          title: '学生票',
          children: [{
            title: '成人三馆联票',
            price: '98.8￥'
          },{
            title: '成人三馆联票',
            price: '98.8￥'
          },]
        },{
          title: '特惠票',
          children: [{
            title: '成人三馆联票',
            price: '98.8￥'
          },{
            title: '成人三馆联票',
            price: '98.8￥'
          },]
        }]
      }
    }
  }
</script>

<style scoped lang="stylus">
  .content
    height 50rem
</style>
