<template>
  <div id="app" :class="[currentScroll]">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'App',
  computed: mapState({
    currentScroll: 'scroll'
  }),
}
</script>

<style>
#app {
  /*解决双击事件fastclick报错*/
  touch-action: manipulation;
}
.stopScroll{
  overflow: hidden;
  height: 0;
}
</style>
