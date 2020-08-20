<template>
  <div id="library-sidebar">
      <el-menu
    class="categories"
    default-active="0"
    @select="handleSelect"
    active-text-color="red">
    <el-menu-item index="0">
      <i class="el-icon-menu"></i>
      <span slot="title">全部</span>
    </el-menu-item>
    <el-menu-item index="1">
      <i class="el-icon-s-management"></i>
      <span slot="title">文学</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-s-promotion"></i>
      <span slot="title">流行</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-mobile"></i>
      <span slot="title">文化</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-wallet"></i>
      <span slot="title">生活</span>
    </el-menu-item>
    <el-menu-item index="5">
      <i class="el-icon-notebook-1"></i>
      <span slot="title">经管</span>
    </el-menu-item>
    <el-menu-item index="6">
      <i class="el-icon-monitor"></i>
      <span slot="title">科技</span>
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
        }
    },
    methods: {
        handleSelect(key, keyPath){
            this.$emit('SidebarIndex', key-'0');
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