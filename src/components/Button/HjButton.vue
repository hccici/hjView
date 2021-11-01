<template>
  <button
    class="hj-button"
    :disabled="buttonDisabled || loading"
    :class="[
      `hj-button__${hjType}`,
      `hj-button__${size}`,
      `hj-button__${corner}`,
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading
      }
    ]"
    @click="handleClick"
  >
    <hj-icon
      v-if="icon!==''"
      :icon="icon"
    />
    <span v-if="$slots.default"><slot /></span>
    <div
      v-if="loading"
      class="hj-button--loading flex-column-center"
    >
      加载中...
    </div>
  </button>
</template>

<script>
export default {
  name: 'HjButton',
  // 如果在hj-form中使用，要受到hj-form的一些限制
  inject: {
    hjForm: {
      default: {}
    },
    hjFormItem: {
      default: {}
    }
  },
  props: {
    hjType: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'small'
    },
    corner: {
      type: String,
      default: 'right'
    },
    loading: Boolean,
    disabled: Boolean,
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    buttonDisabled() {
      // 不仅受到disabled控制，还会收到hj-form的disabled控制
      return this.disabled || this.hjForm.disabled;
    }
  },
  methods: {
    // 只提供点击事件
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>