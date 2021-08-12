<template>
  <div class="app-content container">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
          <div class="row breadcrumbs-top">
            <div class="col-12">
              <h2 class="content-header-title float-left mb-0">Staffs</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="content-body">
        <section class="page-users-view users-view" v-show="viewProfile">
          <div class="row">
            <!-- account start -->
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <div class="card-title">Account</div>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12">
                      <h3>{{user.oracle}}</h3>
                    </div>
                    <div class="col-12 col-sm-9 col-md-6 col-lg-5">
                      <table>
                        <tr>
                          <td class="font-weight-bold">Surname</td>
                          <td>{{user.surname}}</td>
                        </tr>
                        <tr>
                          <td class="font-weight-bold">Firstname</td>
                          <td>{{user.firstname}}</td>
                        </tr>
                        <tr>
                          <td class="font-weight-bold">Middlename</td>
                          <td>{{user.middlename}}</td>
                        </tr>
                        <tr>
                          <td class="font-weight-bold">Gender</td>
                          <td>{{user.sex}}</td>
                        </tr>
                      </table>
                    </div>
                    <div class="col-12 col-md-12 col-lg-5">
                      <table class="ml-0 ml-sm-0 ml-lg-0">
                        <tr>
                          <td class="font-weight-bold">Phone</td>
                          <td>{{user.phone}}</td>
                        </tr>
                        <tr>
                          <td class="font-weight-bold">State Of Origin</td>
                          <td>{{user.state}}</td>
                        </tr>
                        <tr>
                          <td class="font-weight-bold">Date of Birth</td>
                          <td>{{user.dateofbirth}}</td>
                        </tr>
                      </table>
                    </div>
                    <div class="col-12">
                      <a class="btn btn-primary mr-1 btn-sm" v-if="permissions('user','update')">
                        <i class="feather icon-edit-1"></i> Edit
                      </a>
                      <button
                        class="btn btn-outline-danger btn-sm"
                        v-if="permissions('user','update') && user.status == '0'"
                        @click="verify($event,'1',user.id)"
                      >
                        <i class="feather icon-user-check"></i> Approve
                      </button>
                      <button
                        class="btn btn-outline-danger btn-sm"
                        v-if="permissions('user','update') && user.status == '1'"
                        @click="verify($event,'0',user.id)"
                      >
                        <i class="feather icon-user-x"></i> Unapprove
                      </button>
                      <button
                        class="btn btn-outline-danger btn-sm"
                        v-if="permissions('user','delete')"
                      >
                        <i class="feather icon-trash-2"></i> Delete
                      </button>
                      <button class="btn btn-outline-info btn-sm" @click="showList()">
                        <i class="feather icon-corner-up-left"></i> Back to list
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <div class="card-title">Office</div>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-12 col-sm-6 col-md-12 col-lg-6">
                      <table>
                        <tr>
                          <td class="font-weight-bold">Designation</td>
                          <td>{{user.designation}}</td>
                        </tr>
                        <tr>
                          <td class="font-weight-bold">Agency</td>
                          <td>
                            <p v-for="(x,index) in user.agency" :key="index">{{x.name}}</p>
                          </td>
                        </tr>
                        <tr>
                          <td class="font-weight-bold">Office</td>
                          <td>{{user.office}}</td>
                        </tr>

                        <tr>
                          <td class="font-weight-bold">Grade</td>
                          <td>{{user.grade}}</td>
                        </tr>
                      </table>
                    </div>
                    <div class="col-12 col-md-12 col-lg-6">
                      <table>
                        <tr>
                          <td class="font-weight-bold">first Appointment</td>
                          <td>{{user.dateof1stapp}}</td>
                        </tr>
                        <tr>
                          <td class="font-weight-bold">present appointment</td>
                          <td>{{user.dateofpreapp}}</td>
                        </tr>
                        <tr>
                          <td class="font-weight-bold">last deployment</td>
                          <td>{{user.dateoflastdep}}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- account end -->
            <!-- information start -->
            <div class="col-md-6 col-12" v-for="(item,index) in user.beneficiaries" :key="index">
              <div class="card">
                <div class="card-header">
                  <div class="card-title mb-2">Beneficiary {{index + 1}}</div>
                </div>
                <div class="card-body">
                  <table>
                    <tr>
                      <td class="font-weight-bold">Name</td>
                      <td>{{item.name}}</td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Phone</td>
                      <td>{{item.phone}}</td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Percentage</td>
                      <td>{{item.perc}}%</td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Relationship</td>
                      <td>{{item.rel}}</td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Address</td>
                      <td>{{item.addr}}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <!-- information start -->
            <!-- social links end -->
            <!-- permissions start -->

            <!-- permissions end -->
          </div>
        </section>
        <!-- Column selectors with Export Options and print table -->
        <section id="column-selectors" v-show="users">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">All Staffs Table</h4>
                  <router-link :to="{path:'/admin/adduser'}">
                    <v-btn>Upload Nominal</v-btn>
                  </router-link>
                </div>
                <div class="card-content">
                  <div class="card-body card-dashboard">
                    <div class="table-responsive">
                      <v-data-table
                        v-model="selected"
                        :headers="headers"
                        :items="items"
                        :options.sync="options"
                        :server-items-length="total"
                        :loading="loading"
                        item-key="oracle"
                        :show-select="select"
                      >
                        <template v-slot:top>
                          <div style="overflow:hidden">
                            <v-btn
                              style="float:left;"
                              dark
                              class="mb-2 btn-primary"
                              @click="verify($event,setStatus)"
                              v-show="approvalButton"
                              v-if="permissions('user','update')"
                            >{{ approvalText }} Staffs</v-btn>

                            <div class="form-group" style="float:right;">
                              <select v-model="filter" class="form-control select2-icons">
                                <option value="all" data-icon="fa fa-male">All staffs</option>
                                <option value="verified">Approved Staffs</option>
                                <option value="unverified">Unapproved Staffs</option>
                                <option value="admins">Administrators</option>
                              </select>
                            </div>
                          </div>

                          <div class="form-group">
                            <input
                              type="text"
                              id="first-name-vertical"
                              class="form-control"
                              v-model="search"
                              placeholder="Search"
                              name="name"
                              required
                            />
                          </div>
                          <!-- set role -->
                          <v-dialog v-model="roleDialog" max-width="400px">
                            <div class="card">
                              <div class="card-header">
                                <h4 class="card-title">Add Role</h4>
                              </div>
                              <div class="card-content">
                                <div class="card-body">
                                  <form
                                    class="form form-vertical"
                                    style="width:90%; margin:0px auto;"
                                  >
                                    <div class="form-body">
                                      <div class="row">
                                        <div class="col-12">
                                          <div class="form-group">
                                            <label for="first-name-vertical">Retirement Date</label>
                                            <input
                                              type="date"
                                              id="first-name-vertical"
                                              class="form-control"
                                              placeholder="user name"
                                              name="name"
                                              required
                                            />
                                            <i
                                              class="text-danger"
                                              v-for="(error,index) in errors['date']"
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
                                      @click="addRole($event)"
                                      class="btn btn-primary mr-1 mb-1"
                                    >Submit</button>
                                    <button
                                      type="reset"
                                      @click="[roleDialog = false]"
                                      class="btn btn-outline-warning mr-1 mb-1"
                                    >Cancel</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </v-dialog>
                        </template>
                        <template v-slot:item.actions="{item}">
                          <v-btn
                            small
                            class="mx-2"
                            icon
                            @click="view(item)"
                            v-if="permissions('user','read')"
                          >
                            <v-icon>mdi-eye</v-icon>
                          </v-btn>

                          <v-btn
                            small
                            class="mx-2"
                            icon
                            v-if="permissions('user','update')"
                            @click="setRole(item)"
                          >
                            <v-icon>mdi-pencil</v-icon>
                          </v-btn>
                          <v-btn
                            small
                            class="mx-2"
                            icon
                            v-if="permissions('user','delete')"
                            @click="deleteItem(item.oracle)"
                          >
                            <v-icon>mdi-delete</v-icon>
                          </v-btn>
                        </template>
                        <template v-slot:item.beneficiaries="{item}">{{ beneLen(item) }}</template>
                        <template v-slot:item.status="{item}">
                          <p v-html="status(item.status)"></p>
                        </template>
                      </v-data-table>
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
  props: ["role"],
  data() {
    return {
      headers: [
        {
          text: "Oracle Id",
          value: "oracle"
        },
        {
          text: "Title",
          value: "title"
        },
        {
          text: "Surname",
          value: "surname"
        },
        {
          text: "Firstname",
          value: "firstname"
        },
        {
          text: "Designation",
          value: "designation"
        },
        {
          text: "Beneficiaries",
          value: "beneficiaries"
        },
        {
          text: "Status",
          value: "status"
        },
        {
          text: "Actions",
          value: "actions",
          sortable: "false"
        }
      ],
      selected: [],
      options: {},
      total: 0,
      loading: true,
      items: [],
      viewProfile: false,
      users: true,
      user: {},
      roles: [],
      errors: [],
      approvalText: "Approve",
      setStatus: "1",
      roleDialog: false,
      select: false,
      search: "",
      filter: "all",
      approvalButton: false
    };
  },
  watch: {
    options: {
      handler() {
        this.getData();
      },
      deep: true
    },
    search: {
      handler() {
        this.getData();
      }
    },
    filter: {
      handler() {
        if (this.filter == "unverified") {
          this.approvalText = "Approve";
          this.setStatus = "1";
          this.approvalButton = true;
          this.select = true;
        } else if (this.filter == "verified") {
          this.approvalText = "Unapprove";
          this.setStatus = "0";
          this.approvalButton = true;
          this.select = true;
        } else {
          this.select = false;
          this.approvalButton = false;
        }
        this.getData();
      }
    }
  },
  created() {
    if (this.permissions("user", "update") == false) {
      this.select = false;
    }
    this.getData();
    this.getRoles();
  },
  methods: {
    getData() {
      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      var sort = sortBy[0];
      var desc = sortDesc[0];
      const url = `${index_url}/api/users?page=${page}&limit=${itemsPerPage}&sort=${sort}&desc=${desc}&search=${this.search}&filter=${this.filter}`;
      axios.get(url, formHeader()).then(resp => {
        this.items = resp.data.users;
        this.total = resp.data.total;
      });
    },
    getRoles() {
      var users = axios.get(`${index_url}/api/roles`).then(resp => {
        this.roles = resp.data.roles;
      });
    },
    view(item) {
      this.user = item;
      this.user.beneficiaries =
        typeof item.beneficiaries == "object"
          ? item.beneficiaries
          : JSON.parse(item.beneficiaries);
      this.users = false;
      this.viewProfile = true;
    },
    beneLen(item) {
      if (typeof item.beneficiaries != "object") {
        return JSON.parse(item.beneficiaries).length;
      } else {
        return item.beneficiaries.length;
      }
    },
    showList() {
      this.users = true;
      this.viewProfile = false;
    },
    verify(event, status, id = null) {
      if (this.selected.length > 0 || id != null) {
        var users = this.selected.map(user => user.id);
        if (id != null) {
          users = [id];
        }

        var approvalText = "Approved";
        if (status == "0") {
          approvalText = "Unapproved";
        }
        var button = event.target;
        button.setAttribute("disabled", "true");
        this.errors = [];
        axios
          .post(
            `${index_url}/api/user/verify`,
            { users: users, status: status },
            formHeader()
          )
          .then(resp => {
            if (resp.data.status) {
              Swal.fire({
                title: `Users ${approvalText}`,
                text: `Users nominal roles has been ${approvalText}`,
                icon: "success"
              });
              button.removeAttribute("disabled");
              this.users = true;
              this.viewProfile = false;
              this.getData();
            } else {
              button.removeAttribute("disabled");
            }
          });
      }
    },
    getAgency(item, index) {
      const url = `${index_url}/api/useragencies/${item.agency_id}`;
      var agency = [{ name: "glory" }];
      var ag = axios.get(url).then(resp => {
        this.items[index].agency = resp.data.agencies;
        agency = resp.data.agency;
      });
    },
    delete(code) {
      console.log("here");
    },
    permissions(name, permit = null) {
      var permission =
        this.role.permissions != null ? JSON.parse(this.role.permissions) : "";

      if (this.role.name == "admin") {
        return true;
      } else {
        if (permission[name]) {
          if (permit != null) {
            return !!permission[name][permit];
          }
          return true;
        } else {
          return false;
        }
      }
    },
    status(status) {
      return status == 1
        ? `<span style='color:green;'>Approved</span>`
        : `<span style='color:red;'>Unapproved</span>`;
    },
    setRole(item) {
      Object.assign(this.user, item);
      this.roleDialog = true;
    },
    addRole(event) {
      var button = event.target;
      button.setAttribute("disabled", "true");
      this.errors = [];
      var data = { id: this.user.id, role_id: this.user.role_id };
      axios
        .post(`${index_url}/api/user/addrole/${this.user.id}`, data)
        .then(resp => {
          if (resp.data.status) {
            Swal.fire({
              title: "Role Added",
              text: "You have successfully added a new role",
              icon: "success"
            });
            button.removeAttribute("disabled");
            this.user = {};
            this.roleDialog = false;
          } else {
            this.errors = resp.data.errors;
            button.removeAttribute("disabled");
          }
        });
    }
  }
};
</script>

<style scoped>
.users-view table {
  width: 100%;
}
</style>
