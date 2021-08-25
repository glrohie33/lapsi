<template>
  <div class="app-content container">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
          <div class="row breadcrumbs-top">
            <div class="col-12">
              <h2 class="content-header-title float-left mb-0">Staff</h2>
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
                  <h4 class="card-title">Add Staff</h4>
                  <router-link :to="{path:'/admin/Users'}">
                    <v-btn>Back To List</v-btn>
                  </router-link>
                </div>
                <div class="card-content">
                  <div class="card-body">
                    <form class="form form-vertical">
                      <div class="form-body">
                        <div class="row">
                          <div
                            class="col-md-6 form-group"
                            v-for="(x,index) in agencies"
                            :key="index"
                          >
                            <label>Agency</label>
                            <select
                              v-model="staff.agency_id[index]"
                              class="form-control select2-icons"
                              @change="change(index)"
                            >
                              <option value data-icon="fa fa-male">Select Agency</option>
                              <option v-for="(y,ind) in x" :key="ind" :value="y.id">{{y.name}}</option>
                            </select>
                            <p
                              class="text-danger text-center"
                              v-for="(err,index) in errors.parent_id"
                              :key="index"
                            >{{err}}</p>
                          </div>
                          <div class="col-12 col-md-12">
                            <div class="form-group">
                              <label for="first-name-vertical">Select Nominal</label>
                              <input
                                type="file"
                                @change="setNominal($event)"
                                id="first-name-vertical"
                                class="form-control"
                                placeholder="surname name"
                                required
                                accept=".xlsx, .xlsx, .csv"
                              />
                              <i
                                class="text-danger"
                                v-for="(error,index) in errors['name']"
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
                        @click="addStaff($event)"
                        class="btn btn-primary mr-1 mb-1"
                      >Submit</button>
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
      staff: {
        agency_id: [],
        nominal: ""
      },
      type: "password",
      icon: "icon-eye",
      roles: [],
      errors: [],
      agencies: []
    };
  },
  watch: {
    staff: {
      handler() {
        var agency = this.staff.agency_id.filter(el => el != "");
        // this.staff.agency_id = agency;
        if (agency.length > 0) {
          var val = agency[agency.length - 1];
          this.setAgencies(val);
        }
      },
      deep: true
    }
  },
  created() {
    this.getData();
    this.setAgencies(this.staff.agency_id);
  },
  methods: {
    getData() {
      var users = axios.get(`${index_url}/api/roles`).then(resp => {
        this.roles = resp.data.roles;
      });
    },
    setType() {
      if (this.type == "password") {
        this.type = "text";
        this.icon = "icon-eye-off";
      } else {
        this.type = "password";
        this.icon = "icon-eye";
      }
    },
    setNominal(event) {
      var file = event.target.files;
      var fileReader = new FileReader();
      var obj = this;
      this.staff.nominal = file[0];
      //   if (!!file) {
      //     fileReader.onload = function(evt) {
      //       obj.staff.nominal = evt.target.result;
      //     };
      //     fileReader.readAsDataURL(file);
      //     console.log("here");
      //   } else {
      //     console.log("here");
      //     this.staff.nominal = "";
      //   }
    },
    addStaff(event) {
      var button = event.target;
      button.setAttribute("disabled", "true");
      this.errors = [];
      var nominal = this.staff;
      nominal.agency_id = this.staff.agency_id.filter(Boolean);
      var data = setFormData(nominal);
      axios.post(`${index_url}/api/users`, data, formHeader()).then(resp => {
        if (resp.data.status) {
          Swal.fire({
            title: "Nominal Added",
            text: "You have successfully added a new Nominal Roles",
            icon: "success"
          });
          button.removeAttribute("disabled");
          var obj = this;
          setTimeout(() => {
            obj.$router.push({ path: "/admin/users/" });
          }, 2000);
        } else {
          this.errors = resp.data.errors;
          button.removeAttribute("disabled");
        }
      });
    },
    setAgencies(val) {
      var url = `${index_url}/api/agencychildren?parent_id=${val}`;
      axios.get(url).then(resp => {
        var agencies = resp.data.agencies;
        if (agencies.length > 0) {
          this.$set(this.agencies, this.agencies.length, agencies);
        }
      });
    },
    change(index) {
      this.staff.agency_id.splice(index + 1);
      this.agencies.splice(index + 1);
    },
    delete(code) {
      console.log("here");
    }
  }
};
</script>

