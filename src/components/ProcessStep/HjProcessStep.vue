<template>
  <div ref="box" class="hj-process-step" :style="{height: boxHeight}">
    <div v-for="(item,index) in c_data" :key="index" class="hj-process-step__item" :style="item.style">
      {{ item.name }}
      <div :class="item.arrowClass" :style="item.arrowStyle" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HjProcessStep',
  props: {
    data: {
      type: Array,
      default: () => ([])
    },
    blockWidth: { // 块宽度
      type: Number,
      default: 100
    },
    arrowWidth: { // 箭头宽度
      type: Number,
      default: 40
    }
  },
  data() {
    return {
      c_data: [],
      boxHeight: 0,
    }
  },
  computed: {
    lineHeight() {
      return this.arrowWidth + 24; // 行高
    }
  },
  mounted() {
    this.reset()
  },
  methods: {
    _getStyle(index, lineCount, eleWidth, level) {
      const lineHeight = this.lineHeight
      const lineIndex = index % lineCount // 行索引
      let left
      if (level % 2 === 1) {
        left = `${eleWidth * (lineCount - 1 - lineIndex)}px`
      } else {
        left = `${eleWidth * lineIndex}px`
      }
      return {
        width: `${this.blockWidth}px`,
        top: `${lineHeight * level}px`,
        left,
      }
    },
    _getArrow(index, lineCount, level) {
      // 最后一个直接不显示
      if (index === this.data.length - 1) {
        return {
          display: 'none'
        }
      }
      const rw = this.arrowWidth - 10 // 真实箭头宽度
      let result = {
        width: `${rw}px`
      } // style
      let arrowType = 'hj-process-step__item__arrow' // 箭头类型
      let arrowStatus = 'normal' // 箭头状态
      // 判断奇偶层级
      if (level % 2 === 0) { // 偶层级
        result.right = `-${rw + 5}px`
      } else { // 奇层级
        arrowStatus = 'reverse'
        result.left = `-${rw + 5}px`
      }
      // 是否是所属层级中的最后一个
      if ((level + 1) * lineCount === index + 1) {
        arrowType = 'hj-process-step__item__arrow-down'
        arrowStatus = ''
        result = {
          height: `${rw}px`,
          bottom: `-${rw + 5}px`
        }
      }
      return {
        arrowClass: `${arrowType} ${arrowStatus}`,
        arrowStyle: result
      }
    },
    reset() {
      const width = this.$refs.box.getBoundingClientRect().width; // 盒子宽度
      const eleWidth = this.arrowWidth + this.blockWidth; // 箭头+内容快宽度
      const lineCount = Math.floor(width / eleWidth); // 一行有多少个
      const levels = Math.floor((this.data.length - 1) / lineCount) + 1; // 一共多少层
      // 计算每个块的位置，对应的箭头类型
      this.c_data = this.data.map((name, index) => {
        const level = Math.floor(index / lineCount) // 当前元素所属层级
        const { arrowStyle, arrowClass } = this._getArrow(index, lineCount, level) // 箭头样式
        return {
          name,
          style: this._getStyle(index, lineCount, eleWidth, level),
          arrowStyle,
          arrowClass,
        }
      })
      // 计算盒子高度
      this.boxHeight = `${levels * this.lineHeight}px`
    }
  }
}
</script>