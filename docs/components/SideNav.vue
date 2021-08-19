<template>
  <div class="box">
    <div v-for="(list,key) in routes" :key="key">
      <span style="color: gray;">{{key}}</span>
      <ul>
        <li v-for="item of list" :key="item.name">
          <router-link :to="`/${item.key}`">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { _routes } from '../router';
export default {
  name: 'SideNav',
  data() {
    return {
      routes: _routes
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  flex: 1;
  margin-right: 20px;
  ul {
    list-style: none;
    padding: 0;
    li {
      margin: 5px 0;
      a {
        display: block;
        text-decoration: none;
        color: #000;
        &:hover {
          color: #409eff;
        }
        &.router-link-active {
          color: #409eff;
        }
      }
    }
  }
}
</style>