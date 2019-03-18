<template>
  <div id="app" class="co-Page co-flex co-ver">
    <div class="header-con co-flex co-ac co-je">
      <div class="">
        <ul>
          <li @click="menuTo('/')">渠成</li>
          <li @click="menuTo('/youke')">柚客</li>
          <li @click="menuTo('/zhuodao')">舟到</li>
        </ul>
      </div>
    </div>
    <div class="co-f1 co-of co-flex">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
    menuTo (path) {
      this.$router.push(`${path}`)
    }
  },
  mounted () {
  }
}
</script>

<style lang="less">
  .co-Page {
    position: absolute;
    z-index: 99;
    width: 100%;
    height: 100%;
    background: #f5f5f5
  }
  .header-con {
    height: 88px;
    width: 100%;
    background: #333;
    ul li {
      float: left;
      padding: 0  15px;
      color: #fff;
      cursor: pointer;
    }
  }
</style>
