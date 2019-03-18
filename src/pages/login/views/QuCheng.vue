<template>
  <div class="co-f1 qc-page co-flex">
    <div class="qc-menu">
      <ul>
        <li @click="menu(list.path)" v-for="list in qcList" :key="list.id">
          {{list.title}}
        </li>
      </ul>
    </div>
    <div class="co-f1 qc-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'qucheng',
    data () {
      return {
        qcList: [
          {
            id: 1,
            title: '渠成CRM',
            path: '/qccrm'
          },
          {
            id: 2,
            title: '渠成OA',
            path: '/qcoa'
          }
        ]
      }
    },
    methods: {
      menu (path) {
        this.$router.push(`${path}`)
      }
    },
  }
</script>

<style lang = "less">
  .qc-page {
    background: red
  }
  .qc-menu {
    width: 200px;
    li {
      margin: 20px;
      cursor: pointer;
    }
  }
  .qc-main {
    background: #fff
  }
</style>
