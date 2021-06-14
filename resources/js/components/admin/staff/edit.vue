<template>
  <div class="app-content container">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
          <div class="row breadcrumbs-top">
            <div class="col-12">
              <h2 class="content-header-title float-left mb-0">DataTables</h2>
              <div class="breadcrumb-wrapper col-12">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item active">Staffs</li>
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
                  <h4 class="card-title">Add Staff</h4>
                </div>
                <div class="card-content">
                  <div class="card-body">
                    <form class="form form-vertical">
                      <div class="form-body">
                        <div class="row">
                          <div class="col-12 col-md-6">
                            <div class="form-group">
                              <label for="first-name-vertical">Surname</label>
                              <input
                                type="text"
                                v-model="staff.surname"
                                id="first-name-vertical"
                                class="form-control"
                                placeholder="surname name"
                                required
                              />
                              <i
                                class="text-danger"
                                v-for="(error,index) in errors['name']"
                                :key="index"
                              >{{error}}</i>
                            </div>
                          </div>
                          <div class="col-12 col-md-6">
                            <div class="form-group">
                              <label for="first-name-vertical">firstname</label>
                              <input
                                type="text"
                                v-model="staff.firstname"
                                id="first-name-vertical"
                                class="form-control"
                                placeholder="first name"
                                required
                              />
                              <i
                                class="text-danger"
                                v-for="(error,index) in errors['name']"
                                :key="index"
                              >{{error}}</i>
                            </div>
                          </div>
                          <div class="col-12 col-md-6">
                            <div class="form-group">
                              <label for="first-name-vertical">Username</label>
                              <input
                                type="text"
                                v-model="staff.username"
                                id="first-name-vertical"
                                class="form-control"
                                placeholder="username"
                                readonly
                                required
                              />
                              <i
                                class="text-danger"
                                v-for="(error,index) in errors['name']"
                                :key="index"
                              >{{error}}</i>
                            </div>
                          </div>
                          <div class="col-sm-6 col-12">
                            <label>Password</label>
                            <fieldset
                              class="form-label-group form-group position-relative has-icon-left"
                            >
                              <input
                                :type="type"
                                v-model="staff.password"
                                id="first-name-vertical"
                                class="form-control"
                                placeholder="Confirm Password"
                                name="name"
                                required
                              />
                              <div class="form-control-position">
                                <i :class="['feather',icon]" @click="setType()"></i>
                              </div>
                            </fieldset>
                          </div>
                          <div class="col-sm-6 col-12">
                            <label>Confrim password</label>
                            <fieldset
                              class="form-label-group form-group position-relative has-icon-left"
                            >
                              <input
                                :type="type"
                                v-model="staff.confirm_password"
                                id="first-name-vertical"
                                class="form-control"
                                placeholder="Confirm Password"
                                name="name"
                                required
                              />
                              <div class="form-control-position">
                                <i :class="['feather',icon]" @click="setType()"></i>
                              </div>
                            </fieldset>
                          </div>
                          <div class="col-md-6 form-group">
                            <label>Role</label>
                            <select v-model="staff.role_id" class="form-control select2-icons">
                              <option value data-icon="fa fa-male">Select Role</option>
                              <option v-for="(x,ind) in roles" :key="ind" :value="x.id">{{x.name}}</option>
                            </select>
                            <p
                              class="text-danger text-center"
                              v-for="(err,index) in errors.parent_id"
                              :key="index"
                            >{{err}}</p>
                          </div>
                          <div
                            class="col-md-6 form-group"
                            v-for="(x,index) in agencies"
                            :key="index"
                          >
                            <label>Parent Agency</label>
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
                        </div>
                      </div>
                    </form>
                    <div class="col-12">
                      <button
                        type="submit"
                        @click="addStaff($event)"
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
      staff: {
        surname: "",
        firstname: "",
        password: "",
        username: "",
        confirm_password: "",
        role_id: "",
        agency_id: []
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
        var agency = this.staff.agency_id.filter(Boolean);
        if (agency.length > 0) {
          var val = agency[agency.length - 1];
          this.setAgencies(val);
        }
      },
      deep: true
    }
  },
  created() {
    this.setAgencies("");
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get(`${index_url}/api/staffs/${this.$route.params.id}`)
        .then(resp => {
          var staff = resp.data.staff;
          this.staff.agency_id = JSON.parse(staff.agency_id);
          this.staff.surname = staff.surname;
          this.staff.firstname = staff.firstname;
          this.staff.username = staff.username;
          this.staff.role_id = staff.role_id;
          for (var x in this.staff.agency_id) {
            this.setAgencies(this.staff.agency_id[x]);
          }
        });
      axios.get(`${index_url}/api/roles`).then(resp => {
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
    addStaff(event) {
      var button = event.target;
      button.setAttribute("disabled", "true");
      this.errors = [];
      var staff = this.staff;
      staff.agency_id = this.staff.agency_id.filter(Boolean);
      var data = setFormData(this.staff);
      data.append("_method", "PUT");
      axios
        .post(`${index_url}/api/staffs/${this.$route.params.id}`, data)
        .then(resp => {
          if (resp.data.status) {
            Swal.fire({
              title: "Role Added",
              text: "You have successfully added a new role",
              icon: "success"
            });
            button.removeAttribute("disabled");
            var obj = this;
            setTimeout(() => {
              obj.$router.push({ path: "/admin/staffs/" });
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

