<template>
  <div id="library-sidebar">
      <el-menu
    class="categories"
    default-active="0"
    @select="handleSelect"
    active-text-color="red">
    <el-menu-item v-for="(item, i) in titledata" :key="i" :index="i+''">
      <i :class="item.icon"></i>
      <span slot="title">{{item.title}}</span>
    </el-menu-item>
  </el-menu>
  </div>
</template>

<script>
export default {
    name: "LibrarySidebar",
    data(){
        return {
            tabPosition: "left",
            titledata: [
              {title: "全部", icon: "el-icon-menu"},
              {title: "文学", icon: "el-icon-s-management"},
              {title: "流行", icon: "el-icon-s-promotion"},
              {title: "文化", icon: "el-icon-mobile"},
              {title: "生活", icon: "el-icon-wallet"},
              {title: "经管", icon: "el-icon-monitor"}
            ]
        }
    },
    methods: {
        handleSelect(key, keyPath){
            console.log(key);
        }
    }
};
</script>

<style lang="less" scope>
#library-sidebar {
    margin-left: 147px;
}
  .categories {
    width: 150px;
  }
</style>