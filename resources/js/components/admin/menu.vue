<template>
  <v-navigation-drawer :mini-variant="mini" :expand-on-hover="mini" fixed v-model="navDrawer">
    <div class="navbar-header">
      <ul class="nav navbar-nav flex-row">
        <li class="nav-item mr-auto">
          <router-link class="navbar-brand" :to="{path:'/admin/'}">
            <div class="brand-logo">
              <img :src="`${index_url}/public/images/logo.png`" alt />
              <h2 class="brand-text mb-0">LAPSI</h2>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="shadow-bottom"></div>
    <div class="main-menu-content">
      <v-list nav dense>
        <v-list-group v-for="menu in menus" :key="menu.title">
          <template v-slot:activator>
            <v-list-item :to="menu.path">
              <v-list-item-icon>
                <v-icon>{{menu.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-title v-text="menu.title" v-model="menu.active"></v-list-item-title>
            </v-list-item>
          </template>
          <v-list-item v-for="item in menu.items" :key="item.title" :to="item.path">
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>
<script>
export default {
  props: ["user", "role", "drawer"],
  data() {
    return {
      index_url: index_url,
      menus: [
        {
          title: "Dashboard",
          items: [],
          path: { path: "/admin/" },
          icon: "mdi-home",
          active: true
        },
        {
          title: "Staff",
          items: [
            {
              title: "List",
              path: { path: "/admin/users" },
              permission: "read"
            },
            {
              title: "Add New",
              path: { path: "/admin/adduser" },
              permission: "create"
            }
          ],
          icon: "mdi-account-group",
          role: "user"
        },
        {
          title: "Agency",
          items: [
            {
              title: "List",
              path: { path: "/admin/agencies" }
            },
            {
              title: "Add New",
              path: { path: "/admin/addagency" }
            }
          ],
          icon: "mdi-briefcase-account"
        },
        {
          title: "Agency Types",
          items: [
            {
              title: "List",
              path: { path: "/admin/agencytypes" }
            }
          ],
          icon: "mdi-office-building"
        },
        {
          title: "Role",
          items: [
            {
              title: "List",
              path: { path: "/admin/roles" }
            },
            {
              title: "Add New",
              path: { path: "/admin/addrole" }
            }
          ],
          icon: "mdi-account-key"
        },
        {
          title: "Admins",
          items: [
            {
              title: "List",
              path: { path: "/admin/staff" }
            },
            {
              title: "Add New",
              path: { path: "/admin/addstaff" }
            }
          ],
          icon: "mdi-account-box"
        },
        {
          title: "Underwriters",
          items: [
            {
              title: "List",
              path: { path: "/admin/underwriters" }
            },
            {
              title: "Add New",
              path: { path: "/admin/addunderwriter" }
            }
          ],
          icon: "mdi-shield"
        },
        {
          title: "Brokers",
          items: [
            {
              title: "List",
              path: { path: "/admin/brokers" }
            },
            {
              title: "Add New",
              path: { path: "/admin/addbroker" }
            }
          ],
          icon: "mdi-shield-edit"
        },
        {
          title: "Business",
          items: [
            {
              title: "List",
              path: { path: "/admin/business" }
            },
            {
              title: "Add New",
              path: { path: "/admin/addbusiness" }
            }
          ],
          icon: "mdi-handshake"
        },
        {
          title: "Claims",
          items: [
            {
              title: "List",
              path: { path: "/admin/claims" }
            },
            {
              title: "Add New",
              path: { path: "/admin/addclaim" }
            }
          ],
          icon: "mdi-handshake"
        },
        {
          title: "Policy",
          items: [
            {
              title: "List",
              path: { path: "/admin/policies" }
            },
            {
              title: "Add New",
              path: { path: "/admin/addpolicy" }
            }
          ],
          icon: "mdi-file-document-edit"
        },
        {
          title: "Asset",
          items: [
            {
              title: "List",
              path: { path: "/admin/asset" }
            },
            {
              title: "Add New",
              path: { path: "/admin/addasset" }
            }
          ],
          icon: "mdi-graph-outline"
        },
        {
          title: "Asset Types",
          items: [
            {
              title: "List",
              path: { path: "/admin/assettype" }
            },
            {
              title: "Add New",
              path: { path: "/admin/addassettype" }
            }
          ],
          icon: "mdi-home-floor-2"
        },
        {
          title: "Insurance Classes",
          items: [
            {
              title: "List",
              path: { path: "/admin/insuranceclass" }
            },
            {
              title: "Add New",
              path: { path: "/admin/addinsuranceclass" }
            }
          ],
          icon: "mdi-shield-half-full"
        },
        {
          title: "Insurance Type",
          items: [
            {
              title: "List",
              path: { path: "/admin/insurancetype" }
            },
            {
              title: "Add New",
              path: { path: "/admin/addinsurancetype" }
            }
          ],
          icon: "mdi-shield-half-full"
        }
      ]
    };
  },
  created() {
    // this.role = this.$store.state.role;
  },
  computed: {
    mini() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return false;
        case "sm":
          return false;
        case "md":
          return true;
        case "lg":
          return true;
        case "xl":
          return true;
      }
    },
    navDrawer: {
      get() {
        return this.drawer;
      },
      set(value) {
        this.$emit("setDrawer", value);
      }
    }
  },
  methods: {
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
    }
  }
};
</script>

<style scoped>
.v-application ol,
.v-application ul {
  padding: 0px 5px !important;
}
.v-list--nav {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.brand-logo img {
  float: left;
  width: 48px;
}

.brand-logo {
  overflow: hidden;
}

/* .v-navigation-drawer--fixed {
  z-index: 52;
} */
.v-navigation-drawer__content {
  padding-top: 35px !important;
}
</style>
