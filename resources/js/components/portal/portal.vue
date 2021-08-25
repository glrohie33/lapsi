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
      menuModel: true,
      variant: true
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created() {
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
