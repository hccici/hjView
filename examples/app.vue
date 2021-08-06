<template>
  <div class="box">
    <template v-for="item of $router.getRoutes()">
      <router-link :key="item.name" :to="item.path">{{item.name}}</router-link> |
    </template>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
</style>