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
                  <h4 class="card-title">All Asset Type Table</h4>
                </div>
                <div class="card-content">
                  <div class="card-body card-dashboard">
                    <div class="row">
                      <div class="col-md-12">
                        <div style="overflow:hidden">
                          <!-- <v-btn
                              style="float:left;"
                              dark
                              class="mb-2 btn-primary"
                              @click="verify($event,setStatus)"
                              v-show="approvalButton"
                              v-if="permissions('user','update')"
                            >{{ approvalText }} underwriters</v-btn>
                            <v-btn
                              style="float:left;"
                              dark
                              class="mb-2 btn-primary"
                              @click="setRank()"
                              v-show="assignButton"
                              v-if="permissions('user','update')"
                          >Assign</v-btn>-->
                          <!--
                            <div class="form-group" style="float:right; margin-right:5px;">
                              <h6>Sort By Approval Status</h6>
                              <select v-model="filter" class="form-control select2-icons">
                                <option value="all" data-icon="fa fa-male">All underwriters</option>
                                <option value="verified">Approved underwriters</option>
                                <option value="unverified">Unapproved underwriters</option>
                              </select>
                          </div>-->

                          <div class="form-group" style="float:right;">
                            <h6>Select Asset Type</h6>
                            <select v-model="assetType" class="form-control select2-icons">
                              <option value="0" data-icon="fa fa-male">Select Asset Type</option>
                              <option v-for="x in assetTypes" :key="x.id" :value="x.id">{{x.name}}</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="table-responsive">
                      <v-simple-table fixed-header>
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th v-for="(x,index) in headers" :key="index">{{x}}</th>'
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(x,index) in items" :key="index">
                              <td
                                v-for="(y,ind) in headers"
                                :key="ind"
                              >{{JSON.parse(x.asset_details)[y]}}</td>
                              <td>
                                <v-btn @click="veiw(x.id)">View</v-btn>
                              </td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
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
      headers: [],
      options: {},
      total: 0,
      loading: true,
      items: [],
      asset: {
        name: "",
        rank: ""
      },
      types: [],
      parents: [],
      dialog: false,
      errors: [],
      assetTypes: [],
      assetType: 0
    };
  },
  watch: {
    options: {
      handler() {
        this.getData();
      },
      deep: true
    },
    assetType: {
      handler() {
        console.log("here");
        if (this.assetType > 0) {
          this.getData(true);
        }
      }
    }
  },
  created() {
    this.setAssetTypes();
    // this.getData();
  },
  methods: {
    getData(setHeader = false) {
      //   const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      //   var sort = !!sortBy ? sortBy[0] : "";
      //   var desc = !!sortDesc ? sortDesc[0] : "";
      var page = 1;
      var itemsPerPage = 20;

      axios
        .get(
          `${index_url}/api/asset?page=${page}&limit=${itemsPerPage}&type=${this.assetType}`
        )
        .then(resp => {
          var data = resp.data.assets;
          if (data.length > 0) {
            if (setHeader) {
              this.headers = Object.keys(JSON.parse(data[0].asset_details));
              console.log(this.headers);

              //   this.headers = headers.map(ele => {
              //     return { text: ele, value: ele, sortable: false };
              //   });
              //   this.headers.push({
              //     text: "Actions",
              //     value: "action",
              //     sortable: false
              //   });
            }
            this.items = data;
          } else {
            this.headers = [];
          }
          // this.items = resp.data.;
          // this.total = resp.data.total;
        });
    },
    setAssetTypes() {
      axios.get(`${index_url}/api/assettype`).then(resp => {
        this.assetTypes = resp.data.type;
      });
    },
    editItem(item) {
      this.dialog = true;
      Object.assign(this.asset, item);
    },
    edit(event) {
      var button = event.target;
      button.setAttribute("disabled", "true");
      this.errors = [];
      var data = setFormData(this.asset);
      data.append("_method", "PUT");
      axios
        .post(`${index_url}/api/assettype/${this.asset.id}`, data)
        .then(resp => {
          if (resp.data.status) {
            Swal.fire({
              title: "Asset Rank Edited",
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
        .post(`${index_url}/api/assettype/${id}`, { _method: "DELETE" })
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
