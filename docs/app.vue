<template>
  <div class="flex-row-start">
    <side-nav/>
    <page/>
  </div>
</template>

<script>
import SideNav from './components/SideNav'
import Page from './components/Page'
import '../theme/src/index.scss'
export default {
  components: {
    SideNav,
    Page
  }
}
</script>