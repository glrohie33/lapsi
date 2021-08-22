<template>
  <div>
    <navi :user="user" :role="role"></navi>
    <search></search>
    <router-view :role="role" :user="user"></router-view>
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
  computed: {
    user() {
      return this.$store.state.user;
    },
    role() {
      return this.$store.state.role;
    }
  },
  data() {
    return {
    };
  },
  created() {
    console.log(this.user);
    console.log(this.role);
    // if (this.$store.state.user.oracle == "") {
    //   this.user = this.$store.state.user;
    //   this.role = this.$store.state.role;
    // } else {
    //   this.$router.push({ path: "login" });
    // }
  }
};
</script>
<style scoped>
/* @import url("../../assets/app-assets/vendors/css/tables/datatable/datatables.min.css"); */
</style>
