<template>
  <div class="app-content container">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
          <div class="row breadcrumbs-top">
            <div class="col-12">
              <h2 class="content-header-title float-left mb-0">{{pageName}}</h2>
              <div class="breadcrumb-wrapper col-12">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item active">Claims</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-body">
        <viewClaim :claim="claim" v-show="viewBox" @close="closeViewBox"></viewClaim>
        <!-- Column selectors with Export Options and print table -->
        <section id="column-selectors" v-show="list">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">All Claims Table</h4>
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
                          <div style="overflow:hidden;">
                            <div style="float:left;">
                              <router-link :to="{path:`/admin/addclaim`}">
                                <v-btn color="primary" dark class="mb-2" v-bind="attrs">New Claim</v-btn>
                              </router-link>
                            </div>
                            <div class="form-group" style="float:right;">
                              <select v-model="filter" class="form-control select2-icons">
                                <option value="-1" data-icon="fa fa-male">All Claims</option>
                                <option
                                  v-for="(x,index) of status"
                                  :key="index"
                                  :value="index"
                                >{{x}}</option>
                              </select>
                            </div>
                          </div>
                        </template>
                        <template
                          v-slot:item.underwriters="{item}"
                        >{{JSON.parse(item.underwriters)[0]['name']}}</template>
                        <template v-slot:item.actions="{item}">
                          <v-icon small class="mr-2" @click="setView(item)">mdi-eye</v-icon>
                          <router-link :to="{path:`/admin/claim/${item.id}`}">
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
import viewClaim from "./view.vue";
export default {
  components: {
    viewClaim: viewClaim
  },
  data() {
    return {
      headers: [
        {
          text: "Agency",
          value: "agency_name"
        },
        {
          text: "Policy ID",
          value: "policy_id"
        },
        {
          text: "Claim Type",
          value: "claim_type_name"
        },
        {
          text: "Claim Class",
          value: "claim_class_name"
        },
        {
          text: "Asset Type",
          value: "asset_type_name"
        },
        {
          text: "Claim Description",
          value: "claim_description"
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
      errors: [],
      claim: {},
      veiwIndex: 0,
      filter: "-1",
      list: true,
      viewBox: false,
      status: [
        "Submitted For Approval",
        "Approved For Processing",
        "Disapproved",
        "Rejected",
        "Processed",
        "Paid"
      ]
    };
  },
  watch: {
    options: {
      handler() {
        this.getData();
      },
      deep: true
    },
    filter() {
      this.getData();
    }
  },
  computed: {
    pageName: function() {
      return this.$route.name.toUpperCase();
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
          `${index_url}/api/claim?page=${page}&limit=${itemsPerPage}&sort=${sort}&desc=${desc}&filter=${this.filter}`
        )
        .then(resp => {
          this.items = resp.data.claims;
          this.total = resp.data.total;
        });
    },
    setView(item) {
      this.veiwIndex = this.items.indexOf(item);
      this.claim = item;
      this.list = false;
      this.viewBox = true;
    },
    closeViewBox(claim) {
      if (!!claim) {
        this.items[this.veiwIndex] = claim;
      }
      this.list = true;
      this.viewBox = false;
    },
    deleteItem() {}
  }
};
</script>
