<template>
  <div class="app-content container">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
          <div class="row breadcrumbs-top">
            <div class="col-12">
              <h2 class="content-header-title float-left mb-0">Aseet Types</h2>
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
                  <h4 class="card-title">All Asset Types Table</h4>
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
                            <EditAsset :asset="asset" @edited="edited()"></EditAsset>
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
import Edit from "./edit";
export default {
  components: {
    EditAsset: Edit
  },
  data() {
    return {
      headers: [
        {
          text: "Name",
          value: "name"
        },
        {
          text: "Fields",
          value: "fields"
        },
        {
          text: "Unique Field",
          value: "unique_field"
        },
        {
          text: "Insurance Classes",
          value: "classes"
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
      asset: {
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
          `${index_url}/api/assettype?page=${page}&limit=${itemsPerPage}&sort=${sort}&desc=${desc}`
        )
        .then(resp => {
          this.items = resp.data.type;
          this.total = resp.data.total;
        });
    },
    editItem(item) {
      this.dialog = true;
      Object.assign(this.asset, item);
    },
    edited() {
      this.dialog = false;
      this.getData();
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
