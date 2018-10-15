<template>
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut">
      <slot></slot>
    </transition>
</template>

<script>
  export default {
    name: "FadeAnimation"
  }
</script>

<style scoped lang="stylus">

</style>
