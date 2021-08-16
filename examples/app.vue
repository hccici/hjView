<template>
  <div class="box">
    <template v-for="item of $router.getRoutes()">
      <router-link :key="item.name" :to="`${item.path}`">{{item.name}}</router-link> |
    </template>
    <router-view></router-view>
  </div>
</template>

<script>
import '../theme/src/index.scss'
export default {
}
</script>