<template>
  <div class="app-content container">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
          <div class="row breadcrumbs-top">
            <div class="col-12">
              <h2 class="content-header-title float-left mb-0">Agency Type</h2>
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
                  <h4 class="card-title">All Agency Types Table</h4>
                </div>
                <div class="card-content">
                  <div class="card-body card-dashboard">
                    <div class="table-responsive">
                      <v-data-table
                        :headers="headers"
                        :items="items"
                        :options.sync="options"
                        :server-items-length="total"
                        :loading="loading"
                      >
                        <template v-slot:top>
                          <v-dialog v-model="dialog" max-width="400px">
                            <template v-slot:activator="{on,attrs}">
                              <v-btn
                                color="primary"
                                dark
                                class="mb-2"
                                v-bind="attrs"
                                v-on="on"
                              >New Item</v-btn>
                            </template>
                            <div class="card">
                              <div class="card-header">
                                <h4 class="card-title">Add Agency type</h4>
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
                                            <label for="first-name-vertical">Agency Type Name</label>
                                            <input
                                              type="text"
                                              id="first-name-vertical"
                                              class="form-control"
                                              v-model="type.name"
                                              placeholder="agency type name"
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
                                    </div>
                                  </form>
                                  <div class="col-12">
                                    <button
                                      type="submit"
                                      @click="addType($event)"
                                      class="btn btn-primary mr-1 mb-1"
                                    >Submit</button>
                                    <button
                                      type="reset"
                                      @click="[dialog = false]"
                                      class="btn btn-outline-warning mr-1 mb-1"
                                    >Cancel</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </v-dialog>
                        </template>
                        <template v-slot:item.actions="{item}">
                          <router-link :to="{path:`/admin/agency/${item.slug}`}">
                            <v-icon small class="mr-2">mdi-pencil</v-icon>
                          </router-link>

                          <v-icon small @click="deleteItem(item.slug)">mdi-delete</v-icon>
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
  data() {
    return {
      headers: [
        {
          text: "Name",
          value: "name"
        },
        {
          text: "Slug",
          value: "slug"
        },
        {
          text: "Actions",
          value: "actions",
          sortable: "false"
        }
      ],
      type: {
        name: ""
      },
      dialog: false,
      options: {},
      total: 0,
      loading: true,
      items: [],
      errors: []
    };
  },
  watch: {
    options: {
      handler() {
        this.getData();
      },
      deep: true
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      console.log(this.options);
      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      var sort = sortBy[0];
      var desc = sortDesc[0];
      axios
        .get(
          `${index_url}/api/agencytypes?page=${page}&limit=${itemsPerPage}&sort=${sort}&desc=${desc}`
        )
        .then(resp => {
          this.items = resp.data.types;
          this.total = resp.data.total;
        });
    },
    addType(event) {
      var button = event.target;
      button.setAttribute("disabled", "true");
      this.errors = [];
      var data = setFormData(this.type);
      axios.post(`${index_url}/api/agencytypes`, data).then(resp => {
        if (resp.data.status) {
          Swal.fire({
            title: "Agency Type Added",
            text: "You have successfully added a new role",
            icon: "success"
          });
          button.removeAttribute("disabled");
          this.options.page = 1;
          this.getData();
          this.dialog = false;
          //   this.$router.push({ path: "/admin/agencies/" });
        } else {
          this.errors = resp.data.errors;
          button.removeAttribute("disabled");
        }
      });
    },
    deleteItem() {}
  }
};
</script>
