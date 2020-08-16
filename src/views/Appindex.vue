<template>
  <div id="appindex">
      <SideBar />
  </div>
</template>

<script>
import SideBar from '../components/appindex/Sidebar';
export default {
  name: "Appindex",
  components: {SideBar}
}
</script>

<style lang="less" scope>
#appindex{
  padding: 20px 20px;
  background-color: 245, 245, 245;
}
</style>