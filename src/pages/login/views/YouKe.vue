<template>
  <div class="co-f1 yk-page co-flex  co-ver">
    <div class="yk-menu">
      <ul>
        <li @click="menu(list.path)" v-for="list in qcList" :key="list.id">
          {{list.title}}
        </li>
      </ul>
    </div>
    <div class="co-f1 yk-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'youke',
    data () {
      return {
        qcList: [
          {
            id: 1,
            title: '柚客CRM',
            path: 'ykcrm'
          },
          {
            id: 2,
            title: '柚客OA',
            path: 'ykoa'
          },
          {
            id: 3,
            title: '柚客BI',
            path: 'ykbi'
          }
        ]
      }
    },
    methods: {
      menu (path) {
        this.$router.push(`/youke/${path}`)
      }
    },
  }
</script>

<style lang = "less">
  .yk-page {
    background: red
  }
  .yk-menu {
    li {
      cursor: pointer;
      float: left;
      padding: 15px 20px
    }
  }
  .yk-main {
    background: #fff
  }
</style>
