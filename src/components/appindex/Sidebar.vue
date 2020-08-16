<template>
  <div>
    <!-- 首页侧边栏 -->
    <el-col :span="3">
      <div v-for="(item, index) in DataList" :key="index" v-on:click="clock_color(index)">
        <el-card shadow="hover" :class="[sidebar_list, {font_color: index == iSfont_color}]">
          <i :class="item.icon"></i>
          {{item.name}}
        </el-card>
      </div>
    </el-col>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Appindex_Sidebar",
  data() {
    return {
      DataList: [
        { name: "技术采用", icon: "el-icon-s-platform" },
        { name: "最近更新", icon: "el-icon-menu" },
        { name: "下载源码", icon: "el-icon-document" },
        { name: "关于我们", icon: "el-icon-position" },
      ],
      iSfont_color: 0,
      sidebar_list: "sidebar_list",
    };
  },
  methods: {
    clock_color(index) {
      this.iSfont_color = index;
      if(index === 0){
          this.$router.push('IndexBody')
      }
    },
  },
};
</script>

<style lang = "less" scope>
.sidebar_list {
  height: 55px;
  text-align: center;
  font-size: 13px;
}
.font_color {
  color: red;
}
</style>