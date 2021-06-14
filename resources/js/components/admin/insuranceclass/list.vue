<template>
  <div class="app-content container">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
          <div class="row breadcrumbs-top">
            <div class="col-12">
              <h2 class="content-header-title float-left mb-0">Insuranceclass</h2>
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
                  <h4 class="card-title">All Insuranceclass Table</h4>
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
                              @click="allocateUnderwriter()"
                              v-show="allocateButton"
                              v-if="permissions('user','update')"
                            >Allocate Underwriter</v-btn>
                            <div class="form-group" style="float:right;">
                              <h6>Sort By Status</h6>
                              <select v-model="filter" class="form-control select2-icons">
                                <option value data-icon="fa fa-male">All Insuranceclass</option>
                                <option value="allocated">Allocated Insuranceclass</option>
                                <option value="unallocated">Allocated Insuranceclass</option>
                              </select>
                            </div>
                          </div>
                          <v-dialog v-model="dialog" max-width="600px">
                            <div class="card">
                              <div class="card-header">
                                <h4 class="card-title">Add Insurance</h4>
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
                                            <label for="first-name-vertical">Insurance Name</label>
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
                                        <div class="col-md-6 form-group">
                                          <label>Parent Insurance</label>
                                          <select
                                            v-model="insurance.parent_id"
                                            class="form-control select2-icons"
                                          >
                                            <option
                                              value
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
                                          <label>Insurance type</label>
                                          <select
                                            v-model="insurance.type"
                                            class="form-control select2-icons"
                                          >
                                            <option value>Select Insurance Type</option>
                                            <option
                                              v-for="(x,ind) in types"
                                              :key="ind"
                                              :value="x.id"
                                            >{{x.name}}</option>
                                          </select>
                                          <p
                                            class="text-danger text-center"
                                            v-for="(err,index) in errors.type"
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
                          <v-dialog v-model="allocateDialog" max-width="600px">
                            <div class="card">
                              <div class="card-header">
                                <h4 class="card-title">Select Underwriter</h4>
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
                                          <label>Lead Underwriter</label>
                                          <select
                                            v-model="leadUnderwriter"
                                            class="form-control select2-icons"
                                            @change="setCo()"
                                          >
                                            <option value="0" data-icon="fa fa-male">Select Lead</option>
                                            <option
                                              v-for="(x,ind) in leadUnderwriters"
                                              :key="ind"
                                              :value="x.id"
                                            >{{x.registered_name}}</option>
                                          </select>
                                        </div>
                                      </div>
                                      <h5>Percentage Allocations</h5>
                                      <div
                                        class="row"
                                        v-for="(x, ind) in allocation.underwriters"
                                        :key="ind"
                                      >
                                        <div class="col-md-9 form-group" v-if="ind == 0">
                                          <label>{{getField(x.id,leadUnderwriters,'rank')}}</label>
                                          <input
                                            class="form-control"
                                            readonly
                                            :value="getField(x.id,leadUnderwriters,'registered_name')"
                                          />
                                        </div>
                                        <div class="col-md-9 form-group" v-else>
                                          <label>{{getField(x.id,coUnderwriters,'rank')}}</label>
                                          <input
                                            class="form-control"
                                            readonly
                                            :value="getField(x.id,coUnderwriters,'registered_name')"
                                          />
                                        </div>
                                        <div class="col-md-3 form-group">
                                          <label>% Allocation</label>
                                          <input
                                            v-model="allocation.underwriters[ind].perc"
                                            class="form-control select2-icons"
                                            type="number"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                  <p class="text-danger text-center">{{errors['perc']}}</p>
                                  <div class="col-12">
                                    <button
                                      type="submit"
                                      @click="addUnderwriter($event)"
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
          text: "Insurance Type",
          value: "type_name"
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
        parent_id: "",
        type: ""
      },
      types: [],
      parents: [],
      dialog: false,
      errors: [],
      showselect: true,
      selected: [],
      allocateDialog: false,
      allocation: { underwriters: [], allocation_per: [] },
      allocateButton: false,
      leadUnderwriter: "",
      leadUnderwriters: [],
      coUnderwriters: [],
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
  computed: {},
  created() {
    this.getUnderwriters();
    this.getData();
  },
  methods: {
    getData() {
      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      var sort = sortBy[0];
      var desc = sortDesc[0];
      axios
        .get(
          `${index_url}/api/insuranceclass?page=${page}&limit=${itemsPerPage}&sort=${sort}&desc=${desc}`
        )
        .then(resp => {
          this.items = resp.data.insuranceclass;
          this.total = resp.data.total;
          this.parents = resp.data.insuranceclass;
        });

      axios.get(`${index_url}/api/insurancetypes`).then(resp => {
        this.types = resp.data.type;
      });
    },
    getField(id, data, field) {
      return data.find(d => d.id == id)[field];
    },
    getUnderwriters() {
      const url = `${index_url}/api/underwriters?rank=1`;
      axios.get(url, formHeader()).then(resp => {
        this.leadUnderwriters = resp.data.underwriters;
      });
    },
    setCo() {
      this.allocation.underwriters = [];
      if (this.leadUnderwriter > 0) {
        var lead = { id: this.leadUnderwriter, perc: 0 };
        var url = `${index_url}/api/underwriterchildren?id=${this.leadUnderwriter}`;
        axios.get(url).then(resp => {
          var underwriters = [];
          this.coUnderwriters = resp.data.underwriters;
          underwriters = this.coUnderwriters.map(val => {
            var data = { id: val.id, perc: 0 };
            return data;
          });
          underwriters.unshift(lead);
          console.log(underwriters);
          this.$set(this.allocation, "underwriters", underwriters);
        });
      }
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
        .post(`${index_url}/api/insuranceclass/${this.insurance.id}`, data)
        .then(resp => {
          if (resp.data.status) {
            Swal.fire({
              title: "Insurance Edited",
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
    allocateUnderwriter(item = null) {
      if (item != null) {
        selected = [item];
      }
      this.allocation.underwriter_id = "";
      this.allocateDialog = true;
    },
    addUnderwriter(event) {
      if (this.selected.length > 0) {
        var button = event.target;
        button.setAttribute("disabled", "true");
        var insuranceclasses = this.selected.map(
          insuranceclass => insuranceclass.id
        );
        var data = {
          insurance_class: insuranceclasses,
          underwriter: this.allocation.underwriters
        };
        axios
          .post(`${index_url}/api/underwritersallocation`, data)
          .then(resp => {
            if (resp.data.status) {
              Swal.fire({
                title: "Underwriter Allocated to Insurance Class",
                text: "Success",
                icon: "success"
              });

              this.allocateDialog = false;
              this.getData();
            } else {
              this.errors = resp.data.errors;
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
        .post(`${index_url}/api/insuranceclass/${id}`, { _method: "DELETE" })
        .then(resp => {
          if (resp.data.status) {
            Swal.fire({
              title: "Insurance deleted",
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
