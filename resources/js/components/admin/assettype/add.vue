<template>
  <div class="app-content container">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
          <div class="row breadcrumbs-top">
            <div class="col-12">
              <h2 class="content-header-title float-left mb-0">Assettype type</h2>
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
                  <h4 class="card-title">{{formTitle}} type</h4>
                </div>
                <div class="card-content">
                  <div class="card-body">
                    <form class="form form-vertical" style="width:90%; margin:0px auto;">
                      <div class="form-body">
                        <div class="row">
                          <div class="col-12">
                            <div class="form-group">
                              <label for="first-name-vertical">Assettype Name</label>
                              <input
                                type="text"
                                id="first-name-vertical"
                                class="form-control"
                                v-model="assettype.name"
                                placeholder="role name"
                                name="name"
                                required
                              />
                              <i
                                class="text-danger"
                                v-for="(error,index) in errors['name']"
                                :key="index"
                              >{{error}}</i>
                            </div>
                          </div>
                        </div>
                        <h5 style="text-align:center;">Select Insurance Class</h5>
                        <div class="row">
                          <div
                            class="col-md-3 form-group"
                            v-for="(x,ind) in insuranceClasses"
                            :key="ind"
                          >
                            <label>
                              <input
                                type="checkbox"
                                class="form"
                                v-model="assettype.insurance_classes"
                                :value="x.id"
                              />
                              {{x.name}}
                            </label>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div class="col-12">
                      <button
                        type="submit"
                        @click="addAssettype($event)"
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
  data() {
    return {
      assettype: {
        name: "",
        insurance_classes: []
      },
      insuranceClasses: [],
      parents: [],
      errors: [],
      formTitle: "Asset"
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      var users = axios.get(`${index_url}/api/insuranceclass`).then(resp => {
        this.insuranceClasses = resp.data.insuranceclass;
      });
    },
    addAssettype(event) {
      var button = event.target;
      button.setAttribute("disabled", "true");
      this.errors = [];
      var data = setFormData(this.assettype);
      axios.post(`${index_url}/api/assettype`, data).then(resp => {
        if (resp.data.status) {
          Swal.fire({
            title: "Assettype Added",
            text: "You have successfully added a new role",
            icon: "success"
          });
          button.removeAttribute("disabled");
          this.$router.push({ path: "/admin/assettype/" });
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

