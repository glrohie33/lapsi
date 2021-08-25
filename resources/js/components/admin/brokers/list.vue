<template>
  <div class="app-content container">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
          <div class="row breadcrumbs-top">
            <div class="col-12">
              <h2 class="content-header-title float-left mb-0">Brokers</h2>
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
                  <div class="card-title">Broker</div>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12">
                      <h3>{{broker.registered_name}}</h3>
                    </div>
                    <div class="col-12 col-sm-9 col-md-6 col-lg-5">
                      <table>
                        <tr>
                          <td class="font-weight-bold">Rc number</td>
                          <td>{{broker.rc_number}}</td>
                        </tr>
                        <tr>
                          <td class="font-weight-bold">CEO</td>
                          <td>{{broker.ceo}}</td>
                        </tr>
                        <tr>
                          <td class="font-weight-bold">City</td>
                          <td>{{broker.city}}</td>
                        </tr>
                        <tr>
                          <td class="font-weight-bold">State</td>
                          <td>{{broker.state}}</td>
                        </tr>
                      </table>
                    </div>
                    <div class="col-12 col-md-12 col-lg-5">
                      <table class="ml-0 ml-sm-0 ml-lg-0">
                        <tr>
                          <td class="font-weight-bold">Phone</td>
                          <td>{{broker.phone}}</td>
                        </tr>
                        <tr>
                          <td class="font-weight-bold">State</td>
                          <td>{{broker.state}}</td>
                        </tr>
                        <tr>
                          <td class="font-weight-bold">address</td>
                          <td>{{broker.address}}</td>
                        </tr>
                      </table>
                    </div>
                    <div class="col-12">
                      <a
                        class="btn btn-primary mr-1 btn-sm"
                        v-if="permissions('user','update')"
                        @click="[rankDialog=true]"
                      >
                        <i class="feather icon-edit-1"></i> Edit
                      </a>
                      <button
                        class="btn btn-outline-danger btn-sm"
                        v-if="permissions('user','update') && broker.status == '0'"
                        @click="verify($event,'1',broker.id)"
                      >
                        <i class="feather icon-user-check"></i> Approve
                      </button>
                      <button
                        class="btn btn-outline-danger btn-sm"
                        v-if="permissions('user','update') && broker.status == '1'"
                        @click="verify($event,'0',broker.id)"
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
            <!-- account end -->
            <!-- information start -->
            <!-- information start -->
            <!-- social links end -->
            <!-- permissions start -->

            <!-- permissions end -->
          </div>
        </section>
        <!-- Column selectors with Export Options and print table -->
        <section id="column-selectors" v-show="brokers">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">All Brokers Table</h4>
                </div>
                <div class="card-content">
                  <div class="card-body card-dashboard">
                    <div class="table-responsive">
                      <v-dialog v-model="rankDialog" max-width="400px">
                        <div class="card">
                          <div class="card-header">
                            <h4 class="card-title">Add Rank</h4>
                          </div>
                          <div class="card-content">
                            <div class="card-body">
                              <form class="form form-vertical" style="width:90%; margin:0px auto;">
                                <div class="form-body">
                                  <div class="row">
                                    <div class="col-md-12 form-group">
                                      <label>Rank</label>
                                      <select
                                        v-model="broker.rank_id"
                                        @change="setParents()"
                                        class="form-control select2-icons"
                                      >
                                        <option value data-icon="fa fa-male">Select Rank</option>
                                        <option
                                          v-for="(x,ind) in ranks"
                                          :key="ind"
                                          :value="x.id"
                                        >{{x.name}}</option>
                                      </select>

                                      <p
                                        class="text-danger text-center"
                                        v-for="(err,index) in errors.rank"
                                        :key="index"
                                      >{{err}}</p>
                                    </div>
                                    <div
                                      class="col-md-12 form-group"
                                      v-for="(rank,index) in parentRank"
                                      :key="index"
                                    >
                                      <label>{{rankLevel[index]}}</label>
                                      <select
                                        v-model="broker.rel[index]"
                                        @change="setNextRank($event)"
                                        class="form-control select2-icons"
                                      >
                                        <option value data-icon="fa fa-male">Select Rank</option>
                                        <option
                                          v-for="(x,ind) in rank"
                                          :key="ind"
                                          :value="x.id"
                                        >{{x.registered_name}}</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </form>
                              <p class="text-danger text-center">{{brokerError}}</p>
                              <div class="col-12">
                                <button
                                  type="submit"
                                  @click="addRank($event)"
                                  class="btn btn-primary mr-1 mb-1"
                                >Submit</button>
                                <button
                                  type="reset"
                                  @click="[rankDialog = false]"
                                  class="btn btn-outline-warning mr-1 mb-1"
                                >Cancel</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </v-dialog>
                      <v-data-table
                        v-model="selected"
                        :headers="headers"
                        :items="items"
                        :options.sync="options"
                        :server-items-length="total"
                        :loading="loading"
                        item-key="id"
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
                            >{{ approvalText }} Brokers</v-btn>
                            <v-btn
                              style="float:left;"
                              dark
                              class="mb-2 btn-primary"
                              @click="setRank()"
                              v-show="assignButton"
                              v-if="permissions('user','update')"
                            >Assign</v-btn>

                            <div class="form-group" style="float:right; margin-right:5px;">
                              <h6>Sort By Approval Status</h6>
                              <select v-model="filter" class="form-control select2-icons">
                                <option value="all" data-icon="fa fa-male">All Brokers</option>
                                <option value="verified">Approved Brokers</option>
                                <option value="unverified">Unapproved Brokers</option>
                              </select>
                            </div>

                            <div class="form-group" style="float:right;">
                              <h6>Sort By Ranking</h6>
                              <select v-model="rankFilter" class="form-control select2-icons">
                                <option value="-1" data-icon="fa fa-male">All Brokers</option>
                                <option value="0">Unranked Brokers</option>
                                <option v-for="x in ranks" :key="x.id" :value="x.id">{{x.name}}</option>
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

                          <v-dialog v-model="allocationDialog" max-width="400px">
                            <div class="card">
                              <div class="card-header">
                                <h4 class="card-title">Allocate To MDA</h4>
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
                                          <label>MDA</label>
                                          <select
                                            v-model="allocation.agency_id"
                                            class="form-control select2-icons"
                                          >
                                            <option value data-icon="fa fa-male">Select Rank</option>
                                            <option
                                              v-for="(x,ind) in agencies"
                                              :key="ind"
                                              :value="x.id"
                                            >{{x.name}}</option>
                                          </select>

                                          <p
                                            class="text-danger text-center"
                                            v-for="(err,index) in errors.rank"
                                            :key="index"
                                          >{{err}}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                  <p class="text-danger text-center">{{brokerError}}</p>
                                  <div class="col-12">
                                    <button
                                      type="submit"
                                      @click="addRank($event)"
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
                            @click="setRank(item)"
                          >
                            <v-icon>mdi-pencil</v-icon>
                          </v-btn>
                          <v-btn
                            small
                            class="mx-2"
                            icon
                            v-if="permissions('user','delete')"
                            @click="deleteItem(item.id)"
                          >
                            <v-icon>mdi-delete</v-icon>
                          </v-btn>
                        </template>
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
          text: "Registered Name",
          value: "registered_name"
        },
        {
          text: "Rc Number",
          value: "rc_number"
        },
        {
          text: "CEO",
          value: "ceo"
        },
        {
          text: "State",
          value: "state"
        },
        {
          text: "City",
          value: "city"
        },
        {
          text: "Rank",
          value: "rank"
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
      brokers: true,
      broker: {},
      ranks: [],
      errors: [],
      approvalText: "Approve",
      setStatus: "1",
      rankDialog: false,
      select: false,
      search: "",
      filter: "all",
      rankFilter: "",
      approvalButton: false,
      assignButton: false,
      parentRank: [],
      levels: 0,
      currentLevel: 0,
      brokerError: "",
      allocation: {
        agency_id: "",
        broker_id: ""
      },
      agencies: [],
      rankLevel: ["Super Broker", "Lead Broker"],
      allocationDialog: false
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
    },
    rankFilter: {
      handler() {
        console.log(this.rankFilter);
        if (this.rankFilter == "0") {
          this.select = true;
          this.assignButton = true;
        } else {
          this.assignButton = false;
          this.select = false;
        }
        this.getData();
      }
    }
  },
  created() {
    if (this.permissions("user", "update") == false) {
      this.select = false;
    }
    this.getRank();
    this.getData();
  },
  methods: {
    getData() {
      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      var sort = sortBy[0];
      var desc = sortDesc[0];
      const url = `${index_url}/api/brokers?page=${page}&limit=${itemsPerPage}&sort=${sort}&desc=${desc}&search=${this.search}&filter=${this.filter}&rank=${this.rankFilter}`;
      axios.get(url, formHeader()).then(resp => {
        this.items = resp.data.brokers;
        this.total = resp.data.total;
      });
    },
    getRank() {
      axios.get(`${index_url}/api/brokerrank`).then(resp => {
        this.ranks = resp.data.rank;
      });
    },
    view(item) {
      this.broker = item;
      this.broker.rel =
        typeof item.rel == "object" ? item.beneficiaries : JSON.parse(item.rel);
      this.brokers = false;
      this.viewProfile = true;
    },
    showList() {
      this.brokers = true;
      this.viewProfile = false;
    },
    setParents() {
      var id = this.broker.rank_id;
      var brokerrank = this.ranks.find(rank => rank.id == id);
      this.parentRank = [];
      this.broker.rel = [];
      this.levels = brokerrank.rank;
      this.currentLevel = 1;
      this.setNextRank();
    },
    setNextRank() {
      if (this.currentLevel < this.levels) {
        var len = this.broker.rel.length;
        var id = len > 0 ? this.broker.rel[len - 1] : null;
        if (id == null) {
          id = this.ranks[this.currentLevel - 1].id;
          var url = `${index_url}/api/brokerrankusers?id=${id}`;
        } else {
          var url = `${index_url}/api/brokerchildren?id=${id}`;
        }
        var rank_id = axios.get(url).then(resp => {
          this.parentRank.push(resp.data.brokers);
          this.currentLevel += 1;
        });
      }
    },
    verify(event, status, id = null) {
      if (this.selected.length > 0 || id != null) {
        var brokers = this.selected.map(broker => broker.id);
        if (id != null) {
          brokers = [id];
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
            `${index_url}/api/broker/verify`,
            { brokers: brokers, status: status },
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
              this.brokers = true;
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
    setRank(item = null) {
      this.broker.rel = [];
      if (item != null) {
        this.selected = [item];
      }
      this.rankDialog = true;
    },
    addRank(event, id = null) {
      var button = event.target;
      button.setAttribute("disabled", "true");
      this.errors = [];
      var len = this.broker.rel.length;

      if (len == this.levels - 1) {
        var parent_id = len > 0 ? this.broker.rel[len - 1] : null;
        var selected = this.selected.map(broker => broker.id);
        var data = {
          brokers: selected,
          rank_id: this.broker.rank_id,
          rel: this.broker.rel,
          parent_id: parent_id
        };
        axios
          .post(`${index_url}/api/broker/addrank`, data, formHeader())
          .then(resp => {
            if (resp.data.status) {
              Swal.fire({
                title: "Rank Added",
                text: "You have successfully added a new role",
                icon: "success"
              });
              button.removeAttribute("disabled");
              this.user = {};
              this.rankDialog = false;
              this.getData();
            } else {
              this.errors = resp.data.errors;
              button.removeAttribute("disabled");
            }
          });
      } else {
        this.brokerError = `This Broker needs to be under ${this.levels -
          1} Broker(s)`;
        button.removeAttribute("disabled");
      }
    }
  }
};
</script>

<style scoped>
.users-view table {
  width: 100%;
}
</style>
