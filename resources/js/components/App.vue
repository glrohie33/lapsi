<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
// import menu from  './menu.vue';
// import "jquery";
export default {
  mounted() {
    console.log($);
  }
};
// import "../assets/app-assets/vendors/js/vendors.min.js";
// import "../assets/app-assets/js/core/app-menu.js";
</script>

