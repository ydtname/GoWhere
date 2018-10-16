<template>
  <ul class="list">
    <li
      class="item"
      v-for="item in letters"
      :key="item"
      :ref="item"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick">
      {{item}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: "CityAlphabet",
    props: {
      cities: Object
    },
    computed: {
      letters(){
        const letters = []
        for(let i in this.cities){
          letters.push(i)
        }
        return letters
      }
    },
    data(){
      return {
        touchStatus: false,
        startY: 0,
        timer: null
      }
    },
    updated(){
      //当ajax请求完成后并开始渲染，updatad执行将startY进行更新
      this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
      handleLetterClick(e){
        this.$emit('change', e.target.innerText)
      },
      handleTouchStart(){
        this.touchStatus = true
      },
      handleTouchEnd(){
        this.touchStatus = false
      },
      handleTouchMove(e) {
        if (this.touchStatus) {
          if (this.timer) {
            clearTimeout(this.timer) //节流，清除上一个异步执行函数
          }
          this.timer = setTimeout(() => {
            const touchY = e.touches[0].clientY - 79
            const index = Math.floor((touchY - this.startY) / 21)
            if (index >= 0 && index < this.letters.length) {
              this.$emit('change', this.letters[index])
            }
          }, 16)
        }
      },
    }
  }
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-flow: column wrap
    justify-content: center
    align-items: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .38rem
      text-align: center
      color: $bgColor
</style>
