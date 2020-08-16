<template>
  <div>
    <!-- 导航栏组件 -->
    <el-menu
      :default-active="'/index'"
      router
      background-color="white"
      text-color="#222"
      active-text-color="red"
      style="min-width: 1300px"
      mode="horizontal"
    >
      <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name">{{item.navItem}}</el-menu-item>
      <strong class="font-strong">Erguotou Libraty</strong>
      <div class="div_input">
          <el-input placeholder="搜索" prefix-icon="el-icon-search" v-model="input" mini></el-input>
      </div>
      
      <a href="#nowhere" style="color: #222;float: right;padding: 20px;">更多功能</a>
      <i class="el-icon-menu" style="float:right; font-size: 30px; color: #222;line-height: 60px"></i>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      navList: [
        { name: "/index", navItem: "首页" },
        { name: "/note", navItem: "笔记" },
        { name: "/library", navItem: "图书馆" },
        { name: "/admin", navItem: "个人中心" },
      ],
      input: ''
    };
  },
  methods: {},
};
</script>

<style lang="less" scope>
.font-strong {
  font-size: 22px;
  margin-left: 262px;
  text-align: center;
  line-height: 60px;
  position: absolute;
}
.div_input {
  display: inline-block;
  width: 300px;
  margin-top: 10px;
  margin-left: 580px;
}
a {
  text-decoration: none;
}

span {
  pointer-events: none;
}
</style>