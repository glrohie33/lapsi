<template>
  <div
    class="body vertical-layout vertical-menu-modern 1-column navbar-floating footer-static bg-full-screen-image blank-page blank-page"
  >
    <div class="app-content content">
      <div class="content-wrapper">
        <div class="content-header row"></div>
        <div class="content-body">
          <section class="row flexbox-container">
            <div class="col-lg-8 col-11 cover justify-content-center">
              <div class="card bg-authentication rounded-0 mb-0">
                <div class="row m-0">
                  <div class="col-lg-6 d-lg-block d-none text-center align-self-center px-1 py-0">
                    <img
                      :src="`${index_url}/public/app-assets/images/pages/login.png`"
                      alt="branding logo"
                    />
                  </div>
                  <div class="col-lg-6 col-12 p-0">
                    <div class="card rounded-1 mb-0 px-2">
                      <div class="card-header pb-1">
                        <div class="card-title">
                          <img :src="`${index_url}/public/images/logo.png`" />
                          <h4>Lagos State Ministry Of Finance</h4>
                          <h5>Welcome to Lagos State Service insurance Portal</h5>
                        </div>
                      </div>
                      <div class="card-content">
                        <div class="card-body pt-1">
                          <form action="index.html">
                            <fieldset
                              class="form-label-group form-group position-relative has-icon-left"
                            >
                              <input
                                type="text"
                                class="form-control"
                                id="user-name"
                                v-model="username"
                                placeholder="Oracle Id"
                                required
                              />
                              <i
                                class="text-danger"
                                v-for="(x,index) in errors.username"
                                :key="index"
                              >{{x}}</i>

                              <label for="user-name">Username</label>
                            </fieldset>
                            <fieldset
                              class="form-label-group form-group position-relative has-icon-left"
                            >
                              <input
                                type="password"
                                class="form-control"
                                id="user-name"
                                v-model="password"
                                placeholder="Oracle Id"
                                required
                              />
                              <i
                                class="text-danger"
                                v-for="(x,index) in errors.oracle_id"
                                :key="index"
                              >{{x}}</i>

                              <label for="user-name">Password</label>
                            </fieldset>
                          </form>
                          <div class="col-md-12">
                            <button
                              type="submit"
                              @click="login()"
                              class="btn btn-primary btn-inline"
                            >Login</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      alert: false,
      response: "",
      errors: [],
      index_url: index_url
    };
  },
  methods: {
    login() {
      axios
        .post(`${index_url}/api/adminlogin`, {
          username: this.username,
          password: this.password
        })
        .then(resp => {
          var data = resp.data;
          if (data.status) {
            window.localStorage.setItem("lapsiToken_", data.token);
            Swal.fire({
              title: "Success",
              text: "Login Successful",
              icon: "success"
            });
            this.$router.push({ path: "/admin" });
          } else {
            this.errors = data.errors;
          }
        });
    }
  }
};
</script>
<style scoped>
#register fieldset {
  margin-bottom: 2px;
}
.card-title {
  width: 100%;
  text-align: center;
}

.flexbox-container,
.content-header {
  margin: 10px;
}

.body.blank-page .content-wrapper .flexbox-container {
  min-height: 100vh;
  height: unset;
}

.card-title img {
  margin-top: 1%;
  margin-bottom: 1%;
  width: 25%;
  max-width: 120px;
  -webkit-animation: mover 2s infinite alternate;
  animation: mover 1s infinite alternate;
}
.cover {
  background: -webkit-linear-gradient(left, #3931af, #00c6ff);
  padding: 10px;
  border-radius: 3px;
  box-shadow: 0px 0px 13px -1px #000;
}

.bg-authentication {
  background: unset;
}
.card .card-header {
  padding: 10px;
}
.card-title p {
  margin-bottom: 0px;
}
@-webkit-keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-5px);
  }
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-5px);
  }
}
</style>
