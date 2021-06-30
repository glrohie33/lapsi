import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import(/* webpackChunkName: "home" */'./components/HomeComponent.vue');
const Login = () => import(/* webpackChunkName: "login" */'./components/pages/login.vue');
const Portal = () => import(/* webpackChunkName: "portal" */'./components/portal/portal.vue');
import Dashboard from './components/portal/dashboard.vue'
import Admin from './components/admin/admin.vue'
import AdminDashboard from './components/admin/dashboard.vue'
import Users from './components/admin/user/list.vue'
import AddUser from './components/admin/user/add.vue'
import AddRole from './components/admin/role/addRole.vue'
import EditBeneficiaries from './components/portal/editBeneficiaries.vue'
import Roles from './components/admin/role/roles.vue'
import AddAgency from './components/admin/agency/addAgency.vue'
import Agencies from './components/admin/agency/agencies.vue'
import AgencyType from './components/admin/agencytype/list.vue'
import AddStaff from './components/admin/staff/addStaff.vue'
import Staffs from './components/admin/staff/list.vue'
import EditStaff from './components/admin/staff/edit.vue'
import AdminLogin from './components/pages/adminlogin.vue'
import AdminAnalytics from './components/admin/analytics.vue'
import PrintSlip from './components/portal/printSlip.vue'
import Broker from './components/admin/brokers/list.vue'
import AddBroker from './components/admin/brokers/add.vue'
import EditBroker from './components/admin/brokers/edit.vue'
import BrokerRank from './components/admin/brokerrank/list.vue'
import AddBrokerRank from './components/admin/brokerrank/add.vue'
import EditBrokerRank from './components/admin/brokerrank/edit.vue'
import UnderwriterRank from './components/admin/underwriterrank/list.vue'
import AddUnderwriterRank from './components/admin/underwriterrank/add.vue'
import EditUnderwriterRank from './components/admin/underwriterrank/edit.vue'
import Underwriter from './components/admin/underwriter/list.vue'
import AddUnderwriter from './components/admin/underwriter/add.vue'
import EditUnderwriter from './components/admin/underwriter/edit.vue'
import InsuranceClass from './components/admin/insuranceclass/list.vue'
import AddInsuranceClass from './components/admin/insuranceclass/add.vue'
import EditInsuranceClass from './components/admin/insuranceclass/edit.vue'
import InsuranceType from './components/admin/insurancetype/list.vue'
import AddInsuranceType from './components/admin/insurancetype/add.vue'
import EditInsuranceType from './components/admin/insurancetype/edit.vue'
import AssetType from './components/admin/assettype/list.vue'
import AddAssetType from './components/admin/assettype/add.vue'
import EditAssetType from './components/admin/assettype/edit.vue'
import Policy from './components/admin/policy/list.vue'
import AddPolicy from './components/admin/policy/add.vue'
import EditPolicy from './components/admin/policy/edit.vue'
import Asset from './components/admin/asset/list.vue'
import AddAsset from './components/admin/asset/add.vue'
import EditAsset from './components/admin/asset/edit.vue'
import Business from './components/admin/business/list.vue'
import AddBusiness from './components/admin/business/add.vue'
import EditBusiness from './components/admin/business/edit.vue'
import Claim from './components/admin/claim/list.vue'
import AddClaim from './components/admin/claim/add.vue'
import EditClaim from './components/admin/claim/edit.vue'

import axios from 'axios'
import store from './store.js'
Vue.use(axios);
Vue.use(VueRouter);


let current_url = window.location.hostname;
window.index_url = "";
if (current_url.includes("localhost"))
{
    index_url = "/lapsi";
}

var routes = [{
    path: "/",
    name: 'home',
    component: Login
}, {
    path: "/login",
    name: 'login',
    component: Login
}, {
    path: "/admin/login",
    name: 'adminLogin',
    component: AdminLogin
}, {
    path: "/portal", 
    name: 'Portal',
    component: Portal,
    children: [
        {
            path: "",
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: "beneficiaries",
            name: 'beneficiaries',
            component: EditBeneficiaries
        },
        {
            path: "printslip",
            name: 'printslip',
            component: PrintSlip
        }
    ],
    meta: {
        auth: true
    }
}, {
    path: "/admin",
    name: 'admin',
    component: Admin,
    children: [
        {
            path: "",
            name: 'admindashboard',
            component: AdminDashboard
        },
        {
            path: "analytics/:datatype",
            name: 'adminanalytics',
            component: AdminAnalytics
        },
        {
            path: "users",
            name: 'adminusers',
            component: Users
        }, {
            path: "adduser",
            name: 'adduser',
            component: AddUser
        }, {
            path: "roles",
            name: 'roles',
            component: Roles
        },
        {
            path: "addrole",
            name: 'addrole',
            component: AddRole
        },
        {
            path: "agencies",
            name: 'agencies',
            component: Agencies
        },
        {
            path: "addagency",
            name: 'addagency',
            component: AddAgency
        },
        {
            path: "agencytypes",
            name: 'agencytype',
            component: AgencyType
        },
        {
            path: 'staffs',
            name: 'staffs',
            component: Staffs
        },
        {
            path: "addstaff",
            name: 'addstaff',
            component: AddStaff
        },
        {
            path: "staff/:id",
            name: 'edittaff',
            component: EditStaff
        }, {
            path: "broker",
            name: 'broker',
            component: Broker
        }, {
            path: "broker/:id",
            name: 'editbroker',
            component: EditBroker
        }, {
            path: "addbroker",
            name: 'addbroker',
            component: AddBroker
        }, {
            path: "brokerrank",
            name: 'brokerrank',
            component: BrokerRank
        }, {
            path: "brokerrank/:id",
            name: 'editbrokerrank',
            component: EditBrokerRank
        }, {
            path: "addbrokerrank",
            name: 'addbrokerrank',
            component: AddBrokerRank
        }, {
            path: "underwriterrank",
            name: 'underwriterrank',
            component: UnderwriterRank
        }, {
            path: "underwriterrank/:id",
            name: 'editunderwriterrank',
            component: EditUnderwriterRank
        }, {
            path: "addunderwriterrank",
            name: 'addunderwriterrank',
            component: AddUnderwriterRank
        }, {
            path: "underwriter",
            name: 'underwriter',
            component: Underwriter
        }, {
            path: "underwriter/:id",
            name: 'editunderwriter',
            component: EditUnderwriter
        }, {
            path: "addunderwriter",
            name: 'addunderwriter',
            component: AddUnderwriter
        }, {
            path: "insuranceclass",
            name: 'insuranceclass',
            component: InsuranceClass
        }, {
            path: "insuranceclass/:id",
            name: 'editinsuranceclass',
            component: EditInsuranceClass
        }, {
            path: "addinsuranceclass",
            name: 'addinsuranceclass',
            component: AddInsuranceClass
        }, {
            path: "insurancetype",
            name: 'insurancetype',
            component: InsuranceType
        }, {
            path: "insurancetype/:id",
            name: 'editinsurancetype',
            component: EditInsuranceType
        }, {
            path: "addinsurancetype",
            name: 'addinsurancetype',
            component: AddInsuranceType
        }, {
            path: "assettype",
            name: 'assettype',
            component: AssetType
        }, {
            path: "assettype/:id",
            name: 'editassettype',
            component: EditAssetType
        }, {
            path: "addassettype",
            name: 'addassettype',
            component: AddAssetType
        }, {
            path: "policy",
            name: 'policy',
            component: Policy
        }, {
            path: "policy/:id",
            name: 'editpolicy',
            component: EditPolicy
        }, {
            path: "addpolicy",
            name: 'addpolicy',
            component: AddPolicy
        }, {
            path: "asset",
            name: 'asset',
            component: Asset
        }, {
            path: "asset/:id",
            name: 'editasset',
            component: EditAsset
        }, {
            path: "addasset",
            name: 'addasset',
            component: AddAsset
        }, {
            path: "business",
            name: 'business',
            component: Business
        }, {
            path: "business/:id",
            name: 'editbusiness',
            component: EditBusiness
        }, {
            path: "addbusiness",
            name: 'addbusiness',
            component: AddBusiness
        }, {
            path: "claim",
            name: 'claim',
            component: Claim
        }, {
            path: "claim/:id",
            name: 'editclaim',
            component: EditClaim
        }, {
            path: "addclaim",
            name: 'addclaim',
            component: AddClaim
        }
    ],
    meta: {
        auth: true
    }

}]
const router = new VueRouter({
    routes,
    mode: 'history',
    base: index_url
});

router.beforeEach((to, from, next) =>
{
    if (to.matched.some(record => record.meta.auth))
    {
        var token;

        if ((token = window.localStorage.getItem('lapsiToken_')))
        {
            if (store.state.user != '')
            {
                next();
            } else
            {
                axios.get(`${index_url}/api/user`, {
                    headers: { Authorization: `Bearer ${token}` }
                }).then(resp =>
                {
                    var data = resp.data;
                    if (data.status)
                    {
                        store.commit('setUser', data.user);
                        store.commit('setRole', data.role);
                        next();
                    } else
                    {
                        window.localStorage.removeItem('lapsiToken_');
                        next({ path: '/login' });
                    }
                });
            }
        } else
        {
            next({
                path: '/login'
            })
        }

    } else
    {
        next();
    }

})

export default router;
