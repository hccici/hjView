<template>
  <div>
    <template v-for="icon of arr">
      <hj-icon :key="icon" :icon="icon" size="32"></hj-icon>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ['check-circle', 'left-circle', 'down-circle', 'edit-square']
    }
  }
}
</script>
