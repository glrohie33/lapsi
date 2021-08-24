<template>
  <div
    class="body vertical-layout vertical-menu-modern 1-column navbar-floating footer-static bg-full-screen-image blank-page blank-page"
  >
    <div class="app-content contianer">
      <div class="content-wrapper">
        <div class="content-header row"></div>
        <div class="content-body">
          <section class="row flexbox-container">
            <div class="col-lg-8 col-11 cover justify-content-center" v-show="intro">
              <div class="card bg-authentication rounded-0 mb-0">
                <div class="row m-0">
                  <div class="col-lg-6 d-lg-block d-none text-center align-self-center px-1 py-0">
                    <img src="public/app-assets/images/pages/login.png" alt="branding logo" />
                  </div>
                  <div class="col-lg-6 col-12 p-0 login-box">
                    <div class="card rounded-1 mb-0 px-2">
                      <div class="card-header pb-1">
                        <div class="card-title">
                          <img src="public/images/logo.png" />
                          <h4>Lagos State Ministry Of Finance</h4>
                          <h5>Welcome to Lagos State Service insurance Portal</h5>
                        </div>
                      </div>
                      <div class="card-content" v-show="oracle">
                        <div class="card-body pt-1">
                          <form @submit="verifyId($event)">
                            <fieldset
                              class="form-label-group form-group position-relative has-icon-left"
                            >
                              <input
                                type="text"
                                class="form-control"
                                id="user-name"
                                v-model="oracleId"
                                placeholder="Oracle Id"
                                required
                              />
                              <div v-if="'oracle_id' in errors">
                                <i
                                  class="text-danger"
                                  v-for="(x,index) in errors.oracle_id"
                                  :key="index"
                                >{{x}}</i>
                              </div>

                              <label for="user-name">Oracle Id</label>
                            </fieldset>
                            <div class="col-md-12">
                              <button
                                type="submit"
                                @click="verifyId($event)"
                                class="btn btn-primary btn-inline"
                              >Login</button>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div class="card-content" v-show="password">
                        <div class="card-body pt-1">
                          <form @submit="login($event)">
                            <fieldset
                              class="form-label-group form-group position-relative has-icon-left"
                            >
                              <input
                                type="text"
                                class="form-control"
                                id="user-name"
                                v-model="otp"
                                placeholder="OTP"
                                required
                              />
                              <i
                                class="text-danger"
                                v-for="(x,index) in errors.otp"
                                :key="index"
                              >{{x}}</i>

                              <label for="user-name">OTP</label>
                            </fieldset>
                          </form>
                          <div class="col-md-12">
                            <button
                              class="btn btn-info btn-inline"
                              @click="[oracle=true,password=false]"
                            >back</button>
                            <button
                              type="submit"
                              @click="login($event)"
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
            <regForm :user="user" :errors="errors" @saveData="saveData" v-show="form"></regForm>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import regForm from "./register.vue";
export default {
  components: {
    regForm: regForm
  },
  data() {
    return {
      user: {},
      oracleId: "",
      intro: true,
      form: false,
      alert: false,
      response: "",
      status: "",
      signatureFirstname: "",
      signatureLastname: "",
      errors: [],
      oracle: true,
      password: false,
      otp: "",
      ftitle: ""
    };
  },
  methods: {
    verifyId(event) {
      event.preventDefault();
      axios
        .post(`${index_url}/api/login`, { oracle_id: this.oracleId })
        .then(resp => {
          if (resp.data.status) {
            var data = resp.data;
            this.oracle = false;
            this.password = true;
          } else {
            this.errors = resp.data.errors;
          }
        });
    },
    setDate(data) {
      return new Date(data).toISOString().substr(0, 10);
    },
    addBene() {
      this.user.beneficiaries.push({
        name: "",
        phone: "",
        perc: "",
        rel: "",
        addr: ""
      });
    },
    removeBene: function(index) {
      this.user.beneficiaries.splice(index, 1);
    },
    saveData(user) {
      this.user = user;
      var formdata = setFormData(this.user);
      axios.post(`${index_url}/api/register`, formdata).then(resp => {
        var data = resp.data;
        if (data.status) {
          Swal.fire({
            title: "Done",
            text:
              "You have successfully updated your data you can now procced to login",
            icon: "success"
          });
          window.localStorage.setItem("lapsiToken_", data.token);
          this.$router.push({ path: "/portal" });
        } else {
          this.errors = data.errors;
        }
      });
    },
    login(event) {
      event.preventDefault();
      axios
        .post(`${index_url}/api/otp`, {
          oracle_id: this.oracleId,
          otp: this.otp
        })
        .then(resp => {
          var data = resp.data;
          if (data.status) {
            if (resp.data.user_status == "incomplete") {
              this.user = data.user;
              this.user.beneficiaries = JSON.parse(data.user.beneficiaries);
              this.user.dateofbirth = this.setDate(data.user.dateofbirth);
              this.user.dateof1stapp = this.setDate(data.user.dateof1stapp);
              this.user.dateofpreapp = this.setDate(data.user.dateofpreapp);
              this.user.dateoflastdep = this.setDate(data.user.dateoflastdep);
              this.user.title = data.user.title.replace(".", "");
              this.user.signature = "0";
              this.form = true;
              this.intro = false;
            } else if (resp.data.user_status == "complete") {
              resp.data.user.beneficiaries = JSON.parse(
                resp.data.user.beneficiaries
              );
              this.$store.commit("setUser", resp.data.user);
              window.localStorage.setItem("lapsiToken_", data.token);
              Swal.fire({
                title: "Success",
                text: "Login Successful",
                icon: "success"
              });
              this.$router.push({ path: "/portal" });
            }
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
