export default {
  functional: true,
  inject: ['tableRoot'],
  props: {
      row: Object,
      column: Object,
      index: Number
  },
  render: (h, ctx) => {
    // 通过插值渲染出VNode
      return h('div', ctx.injections.tableRoot.$scopedSlots[ctx.props.column.slot]({
          row: ctx.props.row,
          column: ctx.props.column,
          index: ctx.props.index
      }));
  }
};