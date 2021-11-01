<template>
  <hj-table
    :data="data"
    :columns="columns"
  >
    <template
      v-slot:name="{ row, index }"
    >
      <input
        v-if="editIndex === index"
        v-model="editName"
        type="text"
      >
      <span v-else>{{ row.name }}</span>
    </template>

    <template
      v-slot:birthday="{ row }"
    >
      <span>{{ getBirthday(row.birthday) }}</span>
    </template>

    <template
      v-slot:action="{ row, index }"
    >
      <div v-if="editIndex === index">
        <button @click="handleSave(index)">
          保存
        </button>
        <button @click="editIndex = -1">
          取消
        </button>
      </div>
      <div v-else>
        <button @click="handleEdit(row, index)">
          操作
        </button>
      </div>
    </template>
  </hj-table>
</template>

<script>
export default {
  data() {
    return {
      editIndex: -1,
      editName: '',
      columns: [
        {
          title: '姓名',
          slot: 'name',
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '出生日期',
          slot: 'birthday',
        },
        {
          title: '地址',
          key: 'address',
        },
        {
          title: '操作',
          slot: 'action'
        }
      ],
      data: [
        {
          name: '王小明',
          age: 18,
          birthday: '919526400000',
          address: '北京市朝阳区芍药居'
        },
        {
          name: '张小刚',
          age: 25,
          birthday: '696096000000',
          address: '北京市海淀区西二旗'
        },
        {
          name: '李小红',
          age: 30,
          birthday: '563472000000',
          address: '上海市浦东新区世纪大道'
        },
        {
          name: '周小伟',
          age: 26,
          birthday: '687024000000',
          address: '深圳市南山区深南大道'
        }
      ]
    }
  },
  methods: {
    handleEdit(row, index) {
      this.editName = row.name;
      this.editIndex = index;
    },
    handleSave(index) {
      this.data[index].name = this.editName;
      this.editIndex = -1;
    },
    getBirthday(birthday) {
      const date = new Date(parseInt(birthday));
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${year}-${month}-${day}`;
    }
  }
}
</script>

<style>
</style>