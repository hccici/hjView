<template>
  <div>
    <Header></Header>
    <div class="flex-row-start" style="padding: 20px">
      <side-nav />
      <page />
    </div>
  </div>

</template>
<script>
import SideNav from './components/SideNav'
import Page from './components/Page'
import Header from './components/Header'
import '../theme/src/index.scss'
export default {
  components: {
    SideNav,
    Page,
    Header
  }
}
</script>