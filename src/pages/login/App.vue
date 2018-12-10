<template>
  <div id="app">
    我是二级界面
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

<style lang="less">
#app {
  color: #333;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
}
.side-left {
  padding-left: 60px;
}
.text-tip {
  padding: 15px 0
}
.text-tip-indent {
  padding-top: 20px;
  text-indent: 30px;
}
.co-ui {
  font-size:40px;
  padding: 30px 0 50px 0;
}
.tab-ul {
  li {
    margin-top: 30px;
    width: 130px;
    height:40px;
    line-height: 40px;
    text-align: center;
    border: 1px #eee solid;
    margin-right: 30px;
    border-radius: 60px;
    cursor: pointer;
    &:hover {
      background: #2d8cf0;
      color:#fff;
    }
  }
  .active {
    background: #2d8cf0;
    color: #fff;
  }
}
</style>
