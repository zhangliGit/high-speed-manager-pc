<template>
  <div id="app">
    <div class="side-left">
      <div class="co-ui">
        COUI
      </div>
      <div class="text-tip">
        基于流行的MVVM框架VUE
      </div>
      <div class="text-tip">
        基于webpack构建
        <div class="text-tip-indent">
          多应用打包
        </div>
        <div class="text-tip-indent">
          模块按需打包加载
        </div>
        <div class="text-tip-indent">
          代码分割
        </div>
        <div class="text-tip-indent">
          多环境打包
        </div>
        <div class="text-tip-indent">
          ...
        </div>
      </div>
      <div class="text-tip">
        丰富的移动端UI组件库，基于VUX，同时自定义常用的UI组件，功能组件以及业务组件
      </div>
      <div class="text-tip">
        完善的参考文档，帮助开发人员快速的构建app应用
      </div>
      <div>
        <ul class="co-flex co-ac tab-ul">
          <li class="active" @click="goLogin">开始使用</li>
          <li>扫描体验</li>
          <li>GitHub</li>
        </ul>
      </div>
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
    goLogin() {
      window.location.href = './login.html';
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
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
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
