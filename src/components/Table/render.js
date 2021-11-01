export default {
  functional: true,
  props: {
    row: Object,
    column: Object,
    index: Number,
    render: Function
  },
  render(h, ctx) {
    return ctx.props.render(h, { index: ctx.props.index, row: ctx.props.row, column: ctx.props.column })
  }
}