<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button" @click="handleCityClick(currentCity)">{{this.currentCity}}</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="item in hot"
               :key="item.id"
               @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>

      <div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
               v-for="innerItem in item"
               :key="innerItem.id"
               @click="handleCityClick(innerItem.name)">
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import { mapState, mapMutations} from 'vuex'
  export default {
    name: "CityList",
    props: {
      cities: Object,
      hot: Array,
      letter: String
    },
    mounted(){
      this.scroll = new Bscroll(this.$refs.wrapper)
    },
    watch: {
      letter(){
        if(this.letter){
          const element = this.$refs[this.letter][0]
          this.scroll.scrollToElement(element)
        }
      }
    },
    methods: {
      handleCityClick(city){
        this.changeCity(city)
        this.$router.push('/')
      },
      ...mapMutations(['changeCity'])
    },
    computed: mapState({
      currentCity: 'city'
    })
  }
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    /*top、bottom同时设置，形成流体特性，高度延伸至浏览器窗口底部*/
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      padding-left: .2rem
      font-size: .26rem
      color: #666
      background-color: #eee
    .button-list
      padding: .1rem .6rem .1rem .1rem
      overflow: hidden
      .button-wrapper
        float: left
        width: 33.33%
        .button
          padding: .1rem 0
          margin: .1rem
          text-align: center
          border: .02rem solid #ccc
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
