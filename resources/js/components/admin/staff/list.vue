<template>
  <div class="app-content container">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
          <div class="row breadcrumbs-top">
            <div class="col-12">
              <h2 class="content-header-title float-left mb-0">Admins</h2>
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
                  <h4 class="card-title">All Admin Table</h4>
                </div>
                <div class="card-content">
                  <div class="card-body card-dashboard">
                    <div class="table-responsive">
                      <v-data-table
                        v-model="selected"
                        :headers="headers"
                        :items="items"
                        :options.sync="options"
                        :server-items-length="total"
                        :loading="loading"
                        item-key="oracle"
                        :search="search"
                        :custom-filter="getData"
                      >
                        <template v-slot:item.actions="{item}">
                          <v-btn small class="mx-2" icon :to="{path:`/admin/staff/${item.id}`}">
                            <v-icon>mdi-pencil</v-icon>
                          </v-btn>
                          <v-btn small class="mx-2" icon @click="deleteItem(item.id)">
                            <v-icon>mdi-delete</v-icon>
                          </v-btn>
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
          text: "Username",
          value: "username"
        },
        {
          text: "Surname",
          value: "surname"
        },
        {
          text: "Firstname",
          value: "firstname"
        },
        {
          text: "Role",
          value: "rolename"
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
      loading: false,
      items: [],
      user: {},
      search: ""
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
      const url = `${index_url}/api/staffs?page=${page}&limit=${itemsPerPage}&sort=${sort}&desc=${desc}&search=${this.search}`;
      axios.get(url).then(resp => {
        this.items = resp.data.staffs;
        this.total = resp.data.total;
      });
    },
    verify() {
      if (selected.length > 0) {
        var users = this.selected.map(user => user.oracle);
      }
    },
    delete(code) {
      console.log("here");
    }
  }
};
</script>
