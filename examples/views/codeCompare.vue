<template>
  <hj-code-compare
    ref="code"
    :origin="origin"
    :compare="compare"
    compare-class="demoClass"
  />
</template>

<script>
export default {
  data() {
    return {
      origin: '',
      compare: ''
    }
  },
  mounted() {
    setTimeout(() => {
      this.origin = '{"name":"张馨元","age":25.2,"birthday":"1990-01-01","children":{"name":"彭璇","age":25.2,"birthday":"1990-01-01"}}'
      this.compare = '{"name":"孙炳义","age":25.2,"birth-day":"1990-01-01","children":{"name":"张馨sss元","age":25.2,"birthday":"1991-01-01"}}'
      this.$refs.code.update()
    }, 2000);
  }
}
</script>
<style>
.demoClass{
  color: rgb(9, 255, 0);
  background: rgb(255, 21, 21);
}
</style>