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
                  <h4 class="card-title">All Staffs Table</h4>
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
                        <template v-slot:item.actions="{item}">
                          <router-link :to="{path:`/admin/role/${item.slug}`}">
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
          text: "Permissions",
          value: "permissions"
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
      items: []
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
          `${index_url}/api/roles?page=${page}&limit=${itemsPerPage}&sort=${sort}&desc=${desc}`
        )
        .then(resp => {
          this.items = resp.data.roles;
          this.total = resp.data.total;
        });
    },
    deleteItem() {}
  }
};
</script>
