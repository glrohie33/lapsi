<template>
  <div>
    <navi :user="user" :role="role"></navi>
    <search></search>
    <userMenu :user="user" :role="role"></userMenu>
    <router-view :role="role" :user="user"></router-view>
    <foot></foot>
  </div>
</template>
<script>
import nav from "./navigation";
import search from "./searchBar";
import menu from "./menu";
import footer from "./footer";

export default {
  components: {
    navi: nav,
    search: search,
    userMenu: menu,
    foot: footer
  },
  data() {
    return {
      user: [],
      role: []
    };
  },
  created() {
    if (this.$store.state.role != "") {
      this.user = this.$store.state.user;
      this.role = this.$store.state.role;
    } else {
      this.router.push({ path: "login" });
    }
  }
};
</script>
<style scoped>
/* @import url("../../assets/app-assets/vendors/css/tables/datatable/datatables.min.css"); */
</style>
