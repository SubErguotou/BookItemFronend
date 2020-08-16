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
      <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name">
          {{item.navItem}}
      </el-menu-item>
        <strong class="font-strong">Erguotou Libraty</strong>
        <a href="#nowhere" style="color: #222;float: right;padding: 20px;">更多功能</a>
         <i class="el-icon-menu" style="float:right; font-size: 45px; color: #222;padding-top: 8px"></i>
         
    </el-menu>
  </div>
</template>

<script>
export default {
    name: "NavMenu",
     data() {
      return {
        navList: [
            {name: '/index', navItem: '首页'},
            {name: '/note', navItem: '笔记'},
            {name: '/library', navItem: '图书馆'},
            {name: '/admin', navItem: '个人中心'}
        ]
      };
    },
    methods: {
    }
};
</script>

<style lang="less" scope>
.font-strong{
    font-size: 22px;
    padding-left: 262px;
    padding-top: 12px;
    position: absolute;
}
  a{
    text-decoration: none;
  }

  span {
    pointer-events: none;
  }
</style>