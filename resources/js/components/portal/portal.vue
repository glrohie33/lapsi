<template>
  <div class>
    <navi :user="user" @menu="setMenu()"></navi>
    <search></search>
    <router-view :user="user"></router-view>
    <foot></foot>
  </div>
</template>
<script>
import nav from "./navigation";
import search from "./searchBar";
import footer from "./footer";

export default {
  components: {
    navi: nav,
    search: search,
    foot: footer
  },
  data() {
    return {
      user: {},
      menuModel: true,
      variant: true
    };
  },
  created() {
    this.user = this.$store.state.user;
    if (this.user.oracle == null || this.user.oracle.length == 0) {
      this.$router.push({ path: "/admin" });
    }
  },
  methods: {
    setMenu() {
      console.log(this.menuModel);
      this.menuModel = !this.menuModel;
      if (this.variant) {
        this.variant = false;
      }
    }
  }
};
</script>
