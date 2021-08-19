<template>
  <div class="box">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Page'
}
</script>

<style lang="scss" scoped>
.box {
  flex: 6;
}
</style>