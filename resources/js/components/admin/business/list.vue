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
                  <li class="breadcrumb-item active">Business</li>
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
                  <h4 class="card-title">All Businesses Table</h4>
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
                          <router-link :to="{path:`/admin/addbusiness`}">
                            <v-btn color="primary" dark class="mb-2" v-bind="attrs">New Business</v-btn>
                          </router-link>
                        </template>
                        <template
                          v-slot:item.underwriters="{item}"
                        >{{JSON.parse(item.underwriters)[0]['name']}}</template>
                        <template v-slot:item.actions="{item}">
                          <router-link :to="{path:`/admin/policy/${item.slug}`}">
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
          text: "Agency",
          value: "agency_name"
        },
        {
          text: "Business Type",
          value: "business_type_name"
        },
        {
          text: "Business Class",
          value: "business_class_name"
        },
        {
          text: "Business Value",
          value: "business_value"
        },
        {
          text: "Business Description",
          value: "business_description"
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
      console.log(this.options);
      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      var sort = sortBy[0];
      var desc = sortDesc[0];
      axios
        .get(
          `${index_url}/api/business?page=${page}&limit=${itemsPerPage}&sort=${sort}&desc=${desc}`
        )
        .then(resp => {
          this.items = resp.data.businesses;
          this.total = resp.data.total;
        });
    },

    deleteItem() {}
  }
};
</script>
