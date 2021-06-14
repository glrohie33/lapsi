<template>
  <div class="app-content container">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
          <div class="row breadcrumbs-top">
            <div class="col-12">
              <h2 class="content-header-title float-left mb-0">Roles</h2>
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
                  <h4 class="card-title">Add Role</h4>
                </div>
                <div class="card-content">
                  <div class="card-body">
                    <form class="form form-vertical">
                      <div class="form-body">
                        <div class="row">
                          <div class="col-12">
                            <div class="form-group">
                              <label for="first-name-vertical">Role Name</label>
                              <input
                                type="text"
                                id="first-name-vertical"
                                class="form-control"
                                v-model="role.name"
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
                          <div class="col12">
                            <h5>Select Permissions</h5>
                          </div>
                          <div
                            class="col-12"
                            v-for="(permission,index) in permissions"
                            :key="index"
                          >
                            <div class="custom-control custom-switch mr-2 mb-1">
                              <p class="mb-0">{{permission.permission}}</p>
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                v-model="role.permissions[permission.permission]"
                                @change="setActions($event,permission.permission)"
                                :id="[`permission${index}`]"
                              />
                              <label class="custom-control-label" :for="[`permission${index}`]"></label>
                              <div class="row" v-if="role.permissions[permission.permission]">
                                <div class="col-md-3">
                                  <div class="custom-control custom-switch-success mr-2 mb-1">
                                    <p class="mb-0">Read</p>
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      v-model="role.permissions[permission.permission]['read']"
                                      :id="[`${permission.permission}read`]"
                                    />
                                    <label
                                      class="custom-control-label"
                                      :for="[`${permission.permission}read`]"
                                    ></label>
                                  </div>
                                </div>
                                <div class="col-md-3">
                                  <div class="custom-control custom-switch-success mr-2 mb-1">
                                    <p class="mb-0">Create</p>
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      v-model="role.permissions[permission.permission]['create']"
                                      :id="[`${permission.permission}create`]"
                                    />
                                    <label
                                      class="custom-control-label"
                                      :for="[`${permission.permission}create`]"
                                    ></label>
                                  </div>
                                </div>
                                <div class="col-md-3">
                                  <div class="custom-control custom-switch-success mr-2 mb-1">
                                    <p class="mb-0">Delete</p>
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      v-model="role.permissions[permission.permission]['delete']"
                                      :id="[`${permission.permission}delete`]"
                                    />
                                    <label
                                      class="custom-control-label"
                                      :for="[`${permission.permission}delete`]"
                                    ></label>
                                  </div>
                                </div>
                                <div class="col-md-3">
                                  <div class="custom-control custom-switch-success mr-2 mb-1">
                                    <p class="mb-0">Update</p>
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      v-model="role.permissions[permission.permission]['update']"
                                      :id="[`${permission.permission}update`]"
                                    />
                                    <label
                                      class="custom-control-label"
                                      :for="[`${permission.permission}update`]"
                                    ></label>
                                  </div>
                                </div>
                              </div>
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
      role: {
        name: "",
        permissions: {}
      },
      permissions: [],
      errors: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      var users = axios.get(`${index_url}/api/rolepermissions`).then(resp => {
        this.permissions = resp.data.permissions;
      });
    },
    setActions(event, perm) {
      if (event.target.checked) {
        this.role.permissions[perm] = {
          read: false,
          create: false,
          update: false,
          delete: false
        };
      } else {
        this.role.permissions[perm] = false;
      }
    },
    addRole(event) {
      var button = event.target;
      button.setAttribute("disabled", "true");
      this.errors = [];
      var data = setFormData(this.role);
      axios.post(`${index_url}/api/roles`, data).then(resp => {
        if (resp.data.status) {
          Swal.fire({
            title: "Role Added",
            text: "You have successfully added a new role",
            icon: "success"
          });
          button.removeAttribute("disabled");
          this.$router.push({ path: "/admin/roles/" });
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

