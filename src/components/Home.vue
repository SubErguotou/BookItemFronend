<template>
  <div>
      <NavMenu />
      <router-view />
  </div>
</template>

<script>
import NavMenu from '../components/home/NavMenu';

export default {
    name: "Home",
    components: {NavMenu}
}
</script>

<style lang = "less" scope>

</style>