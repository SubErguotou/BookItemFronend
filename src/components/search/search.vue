<template>
  <div id="bg-purple">
    <!-- 封装ElementUI搜索组件 -->
    <el-input
      placeholder="请输入内容"
      suffix-icon="el-icon-search"
      size="large"
      v-model="keywords"
      @keyup.enter.native="onCommit"
    ></el-input>
    <el-button type="primary" @click="onCommit">搜索</el-button>
  </div>
</template>

<script>
export default {
  name: "Search",
  data(){
    return {
      keywords: ""
    }
  },
  methods: {
    onCommit(){
      this.$emit('onCommit', this.keywords);
    }
  },
};
</script>

<style lang="less" scope>
#bg-purple {
  display: flex;
  width: 100%;
  height: 6em;
  align-items: center;
  justify-content: center;
}
.el-input {
  width: 40% !important;
}
</style>