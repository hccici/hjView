<template>
  <table class="hj-table">
    <thead class="hj-table__thead">
      <tr class="hj-table__thead__tr">
        <th
          v-for="col in columns"
          class="hj-table__thead__tr__th"
        >
          {{ col.title }}
        </th>
      </tr>
    </thead>
    <tbody class="hj-table__tbody">
      <tr
        v-for="(row, rowIndex) in data"
        class="hj-table__tbody__tr"
      >
        <td
          v-for="col in columns"
          class="hj-table__tbody__td"
        >
          <Render
            v-if="col.render"
            :row="row"
            :column="col"
            :index="rowIndex"
            :render="col.render"
          />
          <RenderSlot
            v-else-if="col.slot"
            :row="row"
            :column="col"
            :index="rowIndex"
          />
          <span v-else>{{ row[col.key] }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Render from './render';
import RenderSlot from './slot';
export default {
  provide() {
    return {
      tableRoot: this
    }
  },
  name: 'HjTable',
  components: {
    Render,
    RenderSlot
  },
  props: {
    columns: {
      type: Array,
      default: () => ([])
    },
    data: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>