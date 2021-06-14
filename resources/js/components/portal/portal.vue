<template>
  <div class>
    <navi :user="user"></navi>
    <search></search>
    <userMenu :user="user"></userMenu>
    <router-view :user="user"></router-view>
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
      user: {}
    };
  },
  created() {
    this.user = this.$store.state.user;
    if (this.user.oracle == null || this.user.oracle.length == 0) {
      this.$router.push({ path: "/admin" });
    }
  }
};
</script>
