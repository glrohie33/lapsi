<template>
  <div class="app-content container">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
          <div class="row breadcrumbs-top">
            <div class="col-12">
              <h2 class="content-header-title float-left mb-0">underwriter</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="content-body">
        <!-- Column selectors with Export Options and print table -->
        <section id="column-selectors">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Add underwriter</h4>
                </div>
                <div class="card-content">
                  <div class="card-body">
                    <form class="form form-vertical" style="width:90%; margin:0px auto;">
                      <div class="form-body">
                        <div class="row">
                          <div class="col-sm-8 col-xs-12">
                            <div class="form-group">
                              <label for="first-name-vertical">Registered Name</label>
                              <input
                                type="text"
                                id="first-name-vertical"
                                class="form-control"
                                v-model="underwriter.registered_name"
                                placeholder="registered name"
                                name="registered_name"
                                required
                              />
                              <i
                                class="text-danger"
                                v-for="(error,index) in errors['registered_name']"
                                :key="index"
                              >{{error}}</i>
                            </div>
                          </div>
                          <div class="col-sm-4 col-xs-12">
                            <div class="form-group">
                              <label for="first-name-vertical">Rc Number</label>
                              <input
                                type="text"
                                id="first-name-vertical"
                                class="form-control"
                                v-model="underwriter.rc_number"
                                placeholder="Rc Number"
                                required
                              />
                              <i
                                class="text-danger"
                                v-for="(error,index) in errors['rc_number']"
                                :key="index"
                              >{{error}}</i>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form-group">
                              <label for="first-name-vertical">CEO</label>
                              <input
                                type="text"
                                id="first-name-vertical"
                                class="form-control"
                                v-model="underwriter.ceo"
                                placeholder="CEO"
                                name="registered_name"
                                required
                              />
                              <i
                                class="text-danger"
                                v-for="(error,index) in errors['ceo']"
                                :key="index"
                              >{{error}}</i>
                            </div>
                          </div>
                          <div class="col-md-4 col-sm-6">
                            <div class="form-group">
                              <label for="first-name-vertical">City</label>
                              <input
                                type="text"
                                id="first-name-vertical"
                                class="form-control"
                                v-model="underwriter.city"
                                placeholder="city"
                                name="registered_name"
                                required
                              />
                              <i
                                class="text-danger"
                                v-for="(error,index) in errors['city']"
                                :key="index"
                              >{{error}}</i>
                            </div>
                          </div>
                          <div class="col-md-4 col-sm-6">
                            <div class="form-group">
                              <label for="first-name-vertical">state</label>
                              <input
                                type="text"
                                id="first-name-vertical"
                                class="form-control"
                                v-model="underwriter.state"
                                placeholder="state"
                                name="registered_name"
                                required
                              />
                              <i
                                class="text-danger"
                                v-for="(error,index) in errors['state']"
                                :key="index"
                              >{{error}}</i>
                            </div>
                          </div>
                          <div class="col-md-4 col-sm-6">
                            <div class="form-group">
                              <label for="first-name-vertical">Zip/Postal Code</label>
                              <input
                                type="text"
                                id="first-name-vertical"
                                class="form-control"
                                v-model="underwriter.zip"
                                placeholder="postal code"
                                name="registered_name"
                                required
                              />
                              <i
                                class="text-danger"
                                v-for="(error,index) in errors['zip']"
                                :key="index"
                              >{{error}}</i>
                            </div>
                          </div>
                          <div class="col-md-6 col-sm-6">
                            <div class="form-group">
                              <label for="first-name-vertical">Phone</label>
                              <input
                                type="text"
                                id="first-name-vertical"
                                class="form-control"
                                v-model="underwriter.phone"
                                placeholder="phone"
                                name="registered_name"
                                required
                              />
                              <i
                                class="text-danger"
                                v-for="(error,index) in errors['phone']"
                                :key="index"
                              >{{error}}</i>
                            </div>
                          </div>
                          <div class="col-md-6 col-sm-6">
                            <div class="form-group">
                              <label for="first-name-vertical">Email</label>
                              <input
                                type="text"
                                id="first-name-vertical"
                                class="form-control"
                                v-model="underwriter.email"
                                placeholder="email"
                                name="registered_name"
                                required
                              />
                              <i
                                class="text-danger"
                                v-for="(error,index) in errors['email']"
                                :key="index"
                              >{{error}}</i>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form-group">
                              <label for="first-name-vertical">Address</label>
                              <textarea
                                type="text"
                                id="first-name-vertical"
                                class="form-control"
                                v-model="underwriter.address"
                                placeholder="address"
                                name="registered_name"
                                required
                              ></textarea>
                              <i
                                class="text-danger"
                                v-for="(error,index) in errors['address']"
                                :key="index"
                              >{{error}}</i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div class="col-12">
                      <button
                        type="submit"
                        @click="addunderwriter($event)"
                        class="btn btn-primary mr-1 mb-1"
                      >Submit</button>
                      <button type="reset" class="btn btn-outline-warning mr-1 mb-1">Reset</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Column selectors with Export Options and print table -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["user", "role"],
  data() {
    return {
      underwriter: {
        registered_name: "",
        rc_number: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        ceo: "",
        phone: "",
        email: ""
      },
      types: [],
      parents: [],
      errors: []
    };
  },
  created() {},
  methods: {
    getData() {},
    addunderwriter(event) {
      var button = event.target;
      button.setAttribute("disabled", "true");
      this.errors = [];
      var data = setFormData(this.underwriter);
      axios.post(`${index_url}/api/underwriters`, data).then(resp => {
        if (resp.data.status) {
          Swal.fire({
            title: "underwriter Added",
            text: "You have successfully added a new underwriter",
            icon: "success"
          });
          button.removeAttribute("disabled");
          this.$router.push({ path: "/admin/underwriters/" });
        } else {
          this.errors = resp.data.errors;
          button.removeAttribute("disabled");
        }
      });
    },
    delete(code) {
      console.log("here");
    }
  }
};
</script>

