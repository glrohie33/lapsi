<template>
  <div class="app-content container">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
          <div class="row breadcrumbs-top">
            <div class="col-12">
              <h2 class="content-header-title float-left mb-0">Insurance Class</h2>
              <div class="breadcrumb-wrapper col-12">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item active">Insurance Class</li>
                </ol>
              </div>
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
                  <h4 class="card-title">Add Insurance Class</h4>
                </div>
                <div class="card-content">
                  <div class="card-body">
                    <form class="form form-vertical">
                      <div class="form-body">
                        <div class="row">
                          <div class="col-12">
                            <div class="form-group">
                              <label for="first-name-vertical">Insurance Name</label>
                              <input
                                type="text"
                                id="first-name-vertical"
                                class="form-control"
                                v-model="insurance.name"
                                placeholder="insurance name"
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
                          <div class="col-md-8">
                            <div class="form-group">
                              <label for="first-name-vertical">Insurance</label>
                              <select
                                type="text"
                                id="first-name-vertical"
                                class="form-control"
                                v-model="insurance.type"
                                placeholder="insurance name"
                                name="name"
                                required
                              >
                                <option value>Select Type</option>
                                <option
                                  v-for="(x,index) in types"
                                  :key="index"
                                  :value="x.id"
                                >{{x.name}}</option>
                              </select>
                              <i
                                class="text-danger"
                                v-for="(error,index) in errors['name']"
                                :key="index"
                              >{{error}}</i>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group">
                              <label for="first-name-vertical">Insurance Code</label>
                              <input
                                type="text"
                                id="first-name-vertical"
                                class="form-control"
                                v-model="insurance.code"
                                placeholder="insurance code"
                                name="name"
                                required
                              />
                              <i
                                class="text-danger"
                                v-for="(error,index) in errors['code']"
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
                        @click="addInsurance($event)"
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
      insurance: {
        name: ""
      },
      types: [],
      errors: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get(`${index_url}/api/insurancetype`).then(resp => {
        this.types = resp.data.type;
      });
    },
    addInsurance(event) {
      var button = event.target;
      button.setAttribute("disabled", "true");
      this.errors = [];
      var data = setFormData(this.insurance);
      axios.post(`${index_url}/api/insuranceclass`, data).then(resp => {
        if (resp.data.status) {
          Swal.fire({
            title: "Insurance Class Added",
            text: "You have successfully added a new Insurance Class",
            icon: "success"
          });
          button.removeAttribute("disabled");
          this.$router.push({ path: "/admin/insuranceclass/" });
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

