<template>
  <div class="demo">
    <div class="box">
      <hj-process-step :data="data" />
    </div>
    <div class="box">
      <hj-process-step :data="data1" />
    </div>
    <div class="box">
      <hj-process-step :data="data2" />
    </div>
    <div ref="box" class="box">
      <button @click="handleClick">
        改变宽度
      </button>
      <hj-process-step ref="step" :data="data3" />
    </div>
    <div class="box">
      <hj-process-step :data="data4" />
    </div>
    <div class="box">
      <hj-process-step :data="data5" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: ['hhj1', 'hhj2', 'hhj3', 'hhj4', 'hhj5', 'hhj6', 'hhj7', 'hhj8', 'hhj9', 'hhj10',],
      data1: ['hhj1', 'hhj2', 'hhj3', 'hhj4', 'hhj5'],
      data2: ['hhj1'],
      data3: ['hhj1', 'hhj2', 'hhj3', 'hhj4', 'hhj5', 'hhj6', 'hhj7', 'hhj8', 'hhj9', 'hhj10', 'hhj11', 'hhj12', 'hhj13', 'hhj14', 'hhj15', 'hhj16', 'hhj17', 'hhj18', 'hhj19', 'hhj20'],
      data4: ['hhj1', 'hhj2', 'hhj3', 'hhj4',],
      data5: ['hhj1', 'hhj2', 'hhj3', 'hhj4', 'hhj5', 'hhj6', 'hhj7', 'hhj8',]
    }
  },
  methods: {
    handleClick() {
      this.$refs.box.style.width = '1000px'
      this.$refs.step.reset()
    }
  }
}
</script>

<style lang="scss" scoped>
.demo {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
.box {
  border: 1px solid black;
  width: 600px;
  margin-left: 200px;
  margin-top: 200px;
  padding: 10px;
}
</style>