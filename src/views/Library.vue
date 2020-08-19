<template>
  <div id="library">
    <el-container>
      <el-aside>
        <LibrarySidebar />
      </el-aside>
      <el-container>
        <el-main>
          <LibraryBody />
        </el-main>
        <el-footer>我还没想好怎么写</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import LibrarySidebar from '../components/library/Sidebar';
import LibraryBody from '../components/library/Body'

export default {
  name: "Library",
  components: {LibrarySidebar, LibraryBody},
};
</script>

<style lang="less" scope>
#library {
  padding: 20px 20px;
  background-color: 245, 245, 245;
}
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    margin-right: 220px;
  }
  
  .el-aside {
    background-color: 245, 245, 245;
    // color: #333;
    text-align: center;
    // border-right: 1px solid #D3DCE6;
    // line-height: 200px;
  }
  
  .el-main {
    // background-color: #E9EEF3;
    // color: #333;
    // text-align: center;
    padding-right: 220px;
    // line-height: 160px;
  }
  
</style>