<template>
  <footer class="footer footer-static footer-light">
    <p class="clearfix lighten-2 mb-0">
      <span class="float-md-left d-block d-md-inline-block mt-25">
        COPYRIGHT &copy; {{ date }}
        <a
          class="text-bold-800 grey darken-2"
          href=""
          target="_blank"
        >LAPSI,</a>All rights Reserved
      </span>
      <span class="float-md-right d-none d-md-block">
        Ministry Of Finance
        <i class="feather icon-heart"></i>
      </span>
      <button class="btn btn-primary btn-icon scroll-top" type="button">
        <i class="feather icon-arrow-up"></i>
      </button>
    </p>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear()
    };
  }
};
</script>
