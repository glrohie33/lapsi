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
      <!-- <li class="nav-item" v-if="user.role_id != null">
          <router-link :to="{path:'/admin'}">
            <i class="feather icon-external-link"></i>
            <span class="menu-title" data-i18n="Chat">Go to Admin</span>
          </router-link>
      </li>-->
    </div>
  </v-navigation-drawer>
</template>
<script>
export default {
  props: ["user"],
  data() {
    return {
      index_url: index_url,
      menus: [
        {
          title: "Dashboard",
          items: [],
          path: { path: "/portal/" },
          icon: "mdi-home",
          active: true
        },
        {
          title: "Beneficiaries",
          path: { path: "/portal/beneficiaries" },
          items: [],
          icon: "mdi-account-group"
        },
        {
          title: "Print Slip",
          path: { path: "/portal/printslip" },
          items: [],
          icon: "mdi-briefcase-account"
        }
      ]
    };
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
</style>
