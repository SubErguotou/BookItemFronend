<template>
  <div>
      <NavMenu />
      <router-view />
      <!-- <Foot /> -->
  </div>
</template>

<script>
import NavMenu from '../components/home/NavMenu';
// import Foot from '../components/home/Foot';

export default {
    name: "Home",
    components: {NavMenu}
}
</script>

<style lang = "less" scope>

</style>