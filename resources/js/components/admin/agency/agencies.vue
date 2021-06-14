<template>
  <div class="app-content container">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
          <div class="row breadcrumbs-top">
            <div class="col-12">
              <h2 class="content-header-title float-left mb-0">Agencies</h2>
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
                  <h4 class="card-title">All Agencies Table</h4>
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
                        :show-select="showselect"
                        item-key="id"
                        v-model="selected"
                      >
                        <template v-slot:top>
                          <div style="overflow:hidden">
                            <v-btn
                              style="float:left;"
                              dark
                              class="mb-2 btn-primary"
                              @click="allocateBroker()"
                              v-show="allocateButton"
                              v-if="permissions('user','update')"
                            >Allocate Broker</v-btn>
                            <div class="form-group" style="float:right;">
                              <h6>Sort By Status</h6>
                              <select v-model="filter" class="form-control select2-icons">
                                <option value data-icon="fa fa-male">All Agencies</option>
                                <option value="allocated">Allocated Agencies</option>
                                <option value="unallocated">Allocated Agencies</option>
                              </select>
                            </div>
                          </div>
                          <v-dialog v-model="dialog" max-width="600px">
                            <div class="card">
                              <div class="card-header">
                                <h4 class="card-title">Add Agency</h4>
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
                                        <div class="col-md-6">
                                          <div class="form-group">
                                            <label for="first-name-vertical">Phone</label>
                                            <input
                                              type="number"
                                              id="first-name-vertical"
                                              class="form-control"
                                              v-model="agency.phone"
                                              placeholder="phone"
                                              name="name"
                                              required
                                            />
                                            <i
                                              class="text-danger"
                                              v-for="(error,index) in errors['phone']"
                                              :key="index"
                                            >{{error}}</i>
                                          </div>
                                        </div>
                                        <div class="col-md-6">
                                          <div class="form-group">
                                            <label for="first-name-vertical">Email</label>
                                            <input
                                              type="text"
                                              id="first-name-vertical"
                                              class="form-control"
                                              v-model="agency.email"
                                              placeholder="email"
                                              name="name"
                                              required
                                            />
                                            <i
                                              class="text-danger"
                                              v-for="(error,index) in errors['email']"
                                              :key="index"
                                            >{{error}}</i>
                                          </div>
                                        </div>
                                        <div class="col-md-6 form-group">
                                          <label>Parent Agency</label>
                                          <select
                                            v-model="agency.parent_id"
                                            class="form-control select2-icons"
                                          >
                                            <option
                                              value="0"
                                              data-icon="fa fa-male"
                                            >Select Parent Category</option>
                                            <option
                                              v-for="(x,ind) in parents"
                                              :key="ind"
                                              :value="x.id"
                                            >{{x.name}}</option>
                                          </select>
                                          <p
                                            class="text-danger text-center"
                                            v-for="(err,index) in errors.parent_id"
                                            :key="index"
                                          >{{err}}</p>
                                        </div>
                                        <div class="col-md-6 form-group">
                                          <label>Agency type</label>
                                          <select
                                            v-model="agency.agency_type"
                                            class="form-control select2-icons"
                                          >
                                            <option value>Select Agency Type</option>
                                            <option
                                              v-for="(x,ind) in types"
                                              :key="ind"
                                              :value="x.id"
                                            >{{x.name}}</option>
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
                          <v-dialog v-model="allocateDialog" max-width="400px">
                            <div class="card">
                              <div class="card-header">
                                <h4 class="card-title">Select Broker</h4>
                              </div>
                              <div class="card-content">
                                <div class="card-body">
                                  <form
                                    class="form form-vertical"
                                    style="width:90%; margin:0px auto;"
                                  >
                                    <div class="form-body">
                                      <div class="row">
                                        <div class="col-md-12 form-group">
                                          <label>Rank</label>
                                          <select
                                            v-model="allocation.broker_id"
                                            class="form-control select2-icons"
                                          >
                                            <option value data-icon="fa fa-male">Select Broker</option>
                                            <option
                                              v-for="(x,ind) in brokers"
                                              :key="ind"
                                              :value="x.id"
                                            >{{x.registered_name}}</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                  <div class="col-12">
                                    <button
                                      type="submit"
                                      @click="addBroker($event)"
                                      class="btn btn-primary mr-1 mb-1"
                                    >Submit</button>
                                    <button
                                      type="reset"
                                      @click="[allocateDialog = false]"
                                      class="btn btn-outline-warning mr-1 mb-1"
                                    >Cancel</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </v-dialog>
                        </template>
                        <template v-slot:item.actions="{item}">
                          <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
                          <v-icon small @click="deleteItem(item.id)">mdi-delete</v-icon>
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
          text: "Name",
          value: "name"
        },
        {
          text: "Slug",
          value: "slug"
        },
        {
          text: "Agency Type",
          value: "agencytype"
        },
        {
          text: "Phone",
          value: "phone"
        },
        {
          text: "Email",
          value: "email"
        },
        {
          text: "Parent Agency",
          value: "parent"
        },
        {
          text: "Broker",
          value: "registered_name"
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
      agency: {
        name: "",
        parent_id: "",
        agency_type: ""
      },
      types: [],
      parents: [],
      dialog: false,
      errors: [],
      showselect: true,
      selected: [],
      allocateDialog: false,
      allocation: { broker_id: "" },
      allocateButton: false,
      brokers: [],
      filter: ""
    };
  },
  watch: {
    options: {
      handler() {
        this.getData();
      },
      deep: true
    },
    selected: {
      handler() {
        if (this.selected.length > 0) {
          this.allocateButton = true;
        } else {
          this.allocateButton = false;
        }
      }
    }
  },
  created() {
    this.getBrokers();
    this.getData();
  },
  methods: {
    getData() {
      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      var sort = sortBy[0];
      var desc = sortDesc[0];
      axios
        .get(
          `${index_url}/api/agencies?page=${page}&limit=${itemsPerPage}&sort=${sort}&desc=${desc}`
        )
        .then(resp => {
          this.items = resp.data.agencies;
          this.total = resp.data.total;
          this.parents = resp.data.agencies;
        });

      axios.get(`${index_url}/api/agency/types`).then(resp => {
        this.types = resp.data.types;
      });
    },
    getBrokers() {
      const url = `${index_url}/api/brokers`;
      axios.get(url, formHeader()).then(resp => {
        this.brokers = resp.data.brokers;
      });
    },
    editItem(item) {
      this.dialog = true;
      Object.assign(this.agency, item);
    },
    edit(event) {
      var button = event.target;
      button.setAttribute("disabled", "true");
      this.errors = [];
      var data = setFormData(this.agency);
      data.append("_method", "PUT");
      axios
        .post(`${index_url}/api/agencies/${this.agency.id}`, data)
        .then(resp => {
          if (resp.data.status) {
            Swal.fire({
              title: "Agency Edited",
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
    allocateBroker(item = null) {
      if (item != null) {
        selected = [item];
      }
      this.allocation.broker_id = "";
      this.allocateDialog = true;
    },
    addBroker(event) {
      if (this.selected.length > 0) {
        var button = event.target;
        button.setAttribute("disabled", "true");
        var agencies = this.selected.map(agencies => agencies.id);
        var data = {
          agencies: agencies,
          broker: this.allocation.broker_id
        };
        axios.post(`${index_url}/api/brokersallocation`, data).then(resp => {
          if (resp.data.status) {
            Swal.fire({
              title: "Broker Allocated to Agency",
              text: "Success",
              icon: "success"
            });

            this.allocateDialog = false;
            this.getData();
          } else {
            // this.errors = resp.data.errors;
          }
          button.removeAttribute("disabled");
        });
      }
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
    deleteItem(id) {
      axios
        .post(`${index_url}/api/agencies/${id}`, { _method: "DELETE" })
        .then(resp => {
          if (resp.data.status) {
            Swal.fire({
              title: "Agency deleted",
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
