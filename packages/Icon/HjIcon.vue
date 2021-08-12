<template>
  <svg class="hj-icon" aria-hidden="true" v-on="$listeners" :style="style">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'HjIcon',
  props: {
    icon: {
      type: String,
      required: true
    },
    size: [Number, String],
    color: String
  },
  computed: {
    iconName() {
      return `#icon-${this.icon}`
    },
    style() {
      let style = {}
      if (this.size) {
        style['font-size'] = `${this.size}px`;
      }
      if (this.color) {
        style['color'] = this.color
      }
      return style
    }
  }
}
</script>
