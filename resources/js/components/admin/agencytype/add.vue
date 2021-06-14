<template>
  <div class="app-content container">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
          <div class="row breadcrumbs-top">
            <div class="col-12">
              <h2 class="content-header-title float-left mb-0">Agency type</h2>
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
                              <label for="first-name-vertical">Agency Name</label>
                              <input
                                type="text"
                                id="first-name-vertical"
                                class="form-control"
                                v-model="agency.name"
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
                          <div class="col-md-6 form-group">
                            <label>Parent Agency</label>
                            <select v-model="agency.parent_id" class="form-control select2-icons">
                              <option value data-icon="fa fa-male">Select Parent Category</option>
                              <option v-for="(x,ind) in parents" :key="ind" :value="x.id">{{x.name}}</option>
                            </select>
                            <p
                              class="text-danger text-center"
                              v-for="(err,index) in errors.parent_id"
                              :key="index"
                            >{{err}}</p>
                          </div>
                          <div class="col-md-6 form-group">
                            <label>Agency type</label>
                            <select v-model="agency.agency_type" class="form-control select2-icons">
                              <option value>Select Agency Type</option>
                              <option v-for="(x,ind) in types" :key="ind" :value="x.id">{{x.name}}</option>
                            </select>
                            <p
                              class="text-danger text-center"
                              v-for="(err,index) in errors.agency_type"
                              :key="index"
                            >{{err}}</p>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div class="col-12">
                      <button
                        type="submit"
                        @click="addAgency($event)"
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
      agency: {
        name: "",
        parent_id: "",
        agency_type: ""
      },
      types: [],
      parents: [],
      errors: [],
      formTitle:""
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      var users = axios.get(`${index_url}/api/agencytypes`).then(resp => {
        this.types = resp.data.types;
      });

      var users = axios.get(`${index_url}/api/agencyparents`).then(resp => {
        this.parents = resp.data.parents;
      });
    },
    addAgency(event) {
      var button = event.target;
      button.setAttribute("disabled", "true");
      this.errors = [];
      var data = setFormData(this.role);
      axios.post(`${index_url}/api/agencies`, data).then(resp => {
        if (resp.data.status) {
          Swal.fire({
            title: "Agency Added",
            text: "You have successfully added a new role",
            icon: "success"
          });
          button.removeAttribute("disabled");
          this.$router.push({ path: "/admin/agencies/" });
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

