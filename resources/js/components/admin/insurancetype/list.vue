<template>
  <div class="app-content container">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
          <div class="row breadcrumbs-top">
            <div class="col-12">
              <h2 class="content-header-title float-left mb-0">Insuranct Types</h2>
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
                  <h4 class="card-title">All Insurance Types Table</h4>
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
                          <v-dialog v-model="dialog" max-width="600px">
                            <div class="card">
                              <div class="card-header">
                                <h4 class="card-title">Edit</h4>
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
                                            <label for="first-name-vertical">Rank Name</label>
                                            <input
                                              type="text"
                                              id="first-name-vertical"
                                              class="form-control"
                                              v-model="insurance.name"
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
                                    </div>
                                  </form>
                                  <div class="col-12">
                                    <button
                                      type="submit"
                                      @click="edit($event)"
                                      class="btn btn-primary mr-1 mb-1"
                                    >Submit</button>
                                    <button
                                      type="reset"
                                      @click="[dialog=false]"
                                      class="btn btn-outline-warning mr-1 mb-1"
                                    >Reset</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </v-dialog>
                        </template>
                        <template v-slot:item.actions="{item}">
                          <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
                          <!-- <v-icon small @click="deleteItem(item.id)">mdi-delete</v-icon> -->
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
          text: "Actions",
          value: "actions",
          sortable: "false"
        }
      ],
      options: {},
      total: 0,
      loading: true,
      items: [],
      insurance: {
        name: "",
        rank: ""
      },
      types: [],
      parents: [],
      dialog: false,
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
      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      var sort = sortBy[0];
      var desc = sortDesc[0];
      axios
        .get(
          `${index_url}/api/insurancetype?page=${page}&limit=${itemsPerPage}&sort=${sort}&desc=${desc}`
        )
        .then(resp => {
          this.items = resp.data.type;
          this.total = resp.data.total;
        });
    },
    editItem(item) {
      this.dialog = true;
      Object.assign(this.insurance, item);
    },
    edit(event) {
      var button = event.target;
      button.setAttribute("disabled", "true");
      this.errors = [];
      var data = setFormData(this.insurance);
      data.append("_method", "PUT");
      axios
        .post(`${index_url}/api/insurancetype/${this.insurance.id}`, data)
        .then(resp => {
          if (resp.data.status) {
            Swal.fire({
              title: "Insurance Rank Edited",
              text: "Success",
              icon: "success"
            });
            this.getData();
            button.removeAttribute("disabled");
            this.dialog = false;
          } else {
            this.errors = resp.data.errors;
            button.removeAttribute("disabled");
          }
        });
    },
    deleteItem(id) {
      axios
        .post(`${index_url}/api/insurancetype/${id}`, { _method: "DELETE" })
        .then(resp => {
          if (resp.data.status) {
            Swal.fire({
              title: "A deleted",
              text: "Success",
              icon: "success"
            });
            this.getData();
          } else {
            this.errors = resp.data.errors;
          }
        });
    }
  }
};
</script>
