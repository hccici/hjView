<template>
  <div class="hj-code-compare">
    <div class="hj-code-compare__box">
      <pre ref="origin" />
    </div>
    <div class="hj-code-compare__box">
      <pre ref="compare" />
    </div>
  </div>
</template>

<script>
import DiffMatchPatch from 'diff-match-patch'
import codeFormat, { FORMAT_ERROR } from './codeFormat'
const dmp = new DiffMatchPatch();
export default {
  name: 'HjCodeCompare',
  props: {
    origin: {
      type: String,
      required: true
    },
    compare: {
      type: String,
      required: true
    },
    compareClass: {
      type: String,
      default: ''
    },
    codeType: {
      type: String,
      default: 'json'
    },
    errorTip: {
      type: String,
      default: '解析代码出错！'
    }
  },
  mounted() {
    this.update()
  },
  methods: {
    update() {
      this.$nextTick(() => {
        const formatFn = codeFormat[this.codeType]
        let origin = typeof formatFn === 'function' ? formatFn(this.origin) : this.origin
        let compare = typeof formatFn === 'function' ? formatFn(this.compare) : this.compare
        if (origin === FORMAT_ERROR || compare === FORMAT_ERROR) {
          origin = this.errorTip
          compare = this.errorTip
        }
        this.$refs.origin.innerHTML = origin
        this.$refs.compare.innerHTML = this.modify(dmp.diff_main(origin, compare))
      })
    },
    modify(arr) {
      return arr.reduce((pre, next) => {
        if (next[0] === 0) {
          return pre += next[1]
        } else if (next[0] === 1) {
          return pre += `<span class="hj-code-compare__box__modify ${this.compareClass}">${next[1]}</span>`
        } else {
          return pre
        }
      }, '')
    }
  }
}
</script>