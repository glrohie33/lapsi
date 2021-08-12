/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue'
import router from './router.js'
import App from './components/App.vue'
import axios from 'axios'
import store from './store.js'
import swal from 'sweetalert2'
import vuetify from './plugins/vuetify'
import apexchart from 'vue-apexcharts'
import jQuery from 'jquery'
Vue.use(apexchart)

Vue.component('apexchart', apexchart);
Vue.use(axios);

window.Swal = swal;
window.jQuery = jQuery;


require('./bootstrap');

window.setFormData = function (array)
{
    var formdata = new FormData();
    for (var x in array)
    {
        var data = array[x];
        if (typeof data == "object" && x != 'nominal' && x != 'asset_details')
        {
            data = JSON.stringify(array[x]);
        }
        formdata.append(x, data);
    }
    return formdata;
};

window.formHeader = function ()
{
    return {
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem('lapsiToken_')}`
        }
    }
}
const app = new Vue({
    Vue,
    vuetify,
    router,
    store,
    axios,
    el: '#app',
    components: {
        App
    }
});
