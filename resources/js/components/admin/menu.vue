<template>
  <v-navigation-drawer fixed expand-on-hover>
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
  props: ["user", "role"],
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
          title: "Staffs",
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
              path: { path: "/admin/staffs" }
            },
            {
              title: "Add New",
              path: { path: "/admin/addstaff" }
            }
          ],
          icon: "mdi-account-box"
        },
        {
          title: "Agency Types",
          items: [
            {
              title: "List",
              path: { path: "/admin/agencytypes" }
            }
          ],
          icon: "mdi-shield-check"
        }
      ]
    };
  },
  created() {
    // this.role = this.$store.state.role;
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

.v-navigation-drawer--fixed {
  z-index: 52;
}
.v-navigation-drawer__content {
  padding-top: 35px !important;
}
</style>
