<template>
  <transition name="hj-alert-fade">
    <div class="hj-alert" :class="[c_typeClass, center ? 'is-center' : '', 'is-' + effect]" v-show="visible"
      role="alert">
      <!-- <i class="hj-alert__icon" :class="[ iconClass, isBigIcon ]" v-if="showIcon"></i> -->
      <div class="hj-alert__content">
        <span class="hj-alert__title" :class="{'is-Bold': c_hasDescription}" v-if="title || $slots.title">
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="hj-alert__description" v-if="c_hasDescription">
          <slot>{{ description }}</slot>
        </p>
        <!-- <i class="hj-alert__closebtn" :class="{ 'is-customed': closeText !== '', 'hj-icon-close': closeText === '' }"
          v-show="closable" @click="close()">{{closeText}}</i> -->
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'HjAlert',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info' // success/warning/info/danger 不做限制是因为希望让使用者可以扩展
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: ''
    },
    showIcon: Boolean,
    center: Boolean,
    effect: {
      type: String,
      default: 'light',
      validator: function (value) {
        return ['light', 'dark'].indexOf(value) !== -1;
      }
    }
  },
  data() {
    return {
      visible: true
    };
  },
  computed: {
    c_typeClass() {
      return `hj-alert--${this.type}`;
    },
    c_hasDescription() {
      // 查看是否有描述内容
      return this.description || this.$slots.default;
    }
  }
}
</script>