<template>
  <div class="box">
    <div>
      <hj-button>default</hj-button>
      <hj-button
        hj-type="success"
        size="middle"
        corner="circle"
        icon="mima"
      >
        success
      </hj-button>
      <hj-button
        hj-type="warning"
        size="large"
        corner="semicircle"
        :loading="true"
      >
        warning
      </hj-button>
      <hj-button
        hj-type="danger"
        type="submit"
        :disabled="true"
        @click="doClick"
      >
        danger
      </hj-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    doClick() {
      console.log(1)
    }
  }
}
</script>