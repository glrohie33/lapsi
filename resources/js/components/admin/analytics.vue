<template>
  <div class="body">
    <!-- BEGIN: Content-->
    <div class="app-content container">
      <div class="content-overlay"></div>
      <div class="header-navbar-shadow"></div>
      <div class="content-wrapper">
        <div class="content-header row"></div>
        <div class="content-body">
          <!-- Dashboard Analytics Start -->
          <section id="dashboard-analytics">
            <div class="row">
              <div class="col-md-12 col-12">
                <div class="card">
                  <div class="card-header d-flex justify-content-between">
                    <h4 class="card-title">Staff Approval Status Chart</h4>
                  </div>
                  <div style="margin-top:15px;">
                    <router-link :to="{path:'/admin'}" style="float:left;margin-left:10px;">
                      <v-btn>Back To Dashboard</v-btn>
                    </router-link>
                    <div class="form-group" style="float:right;margin-right:10px;width:100px;">
                      <select v-model="selectAgencyType" class="form-control select2-icons">
                        <option
                          v-for="(type,index) in agencyTypes"
                          :key="index"
                          :value="type.id"
                        >{{type.name}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="card-content">
                    <div class="card-body pt-50">
                      <apexchart
                        type="bar"
                        height="400"
                        :options="chart.chartOptions"
                        :series="chart.series"
                      ></apexchart>
                      <div class="chart-info d-flex justify-content-between mb-1">
                        <div class="series-info d-flex align-items-center">
                          <i class="fa fa-circle-o text-bold-700 text-primary"></i>
                          <span class="text-bold-600 ml-50">Approved</span>
                        </div>
                        <div class="product-result">
                          <span>{{appUsers}}</span>
                        </div>
                      </div>
                      <div class="chart-info d-flex justify-content-between mb-1">
                        <div class="series-info d-flex align-items-center">
                          <i class="fa fa-circle-o text-bold-700 text-warning"></i>
                          <span class="text-bold-600 ml-50">Pending</span>
                        </div>
                        <div class="product-result">
                          <span>{{unAppUsers}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <!-- Dashboard Analytics end -->
        </div>
      </div>
    </div>
    <!-- END: Content-->

    <div class="sidenav-overlay"></div>
    <div class="drag-target"></div>
  </div>
</template>
<script>
import clock from "../clock";
var $primary = "#7367F0";
var $danger = "#EA5455";
var $warning = "#FF9F43";
var $info = "#00cfe8";
var $success = "#00db89";
var $primary_light = "#9c8cfc";
var $warning_light = "#FFC085";
var $danger_light = "#f29292";
var $info_light = "#1edec5";
var $strok_color = "#b9c3cd";
var $label_color = "#e7eef7";
var $purple = "#df87f2";
var $white = "#fff";
export default {
  components: {
    clock: clock
  },
  props: ["user"],
  data() {
    return {
      allUsers: "",
      appUsers: "",
      unAppUsers: "",
      beneUsers: "",
      noBeneUsers: "",
      agencyTypes: [],
      selectAgencyType: "",
      dataType: "",
      chart: {
        series: [],
        chartOptions: {
          chart: {
            type: "bar",
            height: 350,
            stacked: true,
            stackType: "100%"
          },
          colors: [$primary, $warning],
          fill: {
            type: "gradient",
            gradient: {
              // enabled: true,
              shade: "dark",
              type: "vertical",
              shadeIntensity: 0.5,
              gradientToColors: [$primary_light, $warning_light, $danger_light],
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100]
            }
          },
          xaxis: {
            categories: []
          }
        }
      }
    };
  },
  watch: {
    selectAgencyType: {
      handler() {
        this.agencies = this.agencyTypes.find(
          agency => agency.id == this.selectAgencyType
        ).agencies;
        this.setGraph();
      }
    }
  },
  created() {
    this.dataType = this.$route.params.datatype;
    const url = `${index_url}/api/agencywithtype`;
    axios.get(url, formHeader()).then(resp => {
      this.agencyTypes = resp.data.types;
      this.selectAgencyType = this.agencyTypes[0].id;
      this.agencies = this.agencyTypes[0].agencies;
    });
  },
  methods: {
    setGraph() {
      //   this.chart.chartOptions.xaxis.categories = this.agencies.map(
      //     agency => agency.name
      //   );
      //   console.log(this.chart.chartOptions.xaxis.categories);
      var ids = this.agencies.map(agency => agency.id);
      const url = `${index_url}/api/userbyagency`;
      axios.post(url, { agencyids: ids }, formHeader()).then(resp => {
        var users = resp.data.users;
        var label1 = "verified";
        var label2 = "unverified";
        if (this.dataType == "beneficiaries") {
          var label1 = "Users With Beneficiaries";
          var label2 = "Users With No Beneficiaries";
        }
        var series = [
          {
            name: label1,
            data: []
          },
          {
            name: label2,
            data: []
          }
        ];
        var i = 0;
        this.chart.chartOptions.xaxis.categories.splice(0);
        ids.forEach(id => {
          this.chart.chartOptions.xaxis.categories.push(this.agencies[i].name);
          if (this.dataType == "verified") {
            var verified = users.filter(user => {
              return (
                JSON.parse(user.agency_id).includes(id) && user.status == "1"
              );
            }).length;

            var unverified = users.filter(user => {
              return (
                JSON.parse(user.agency_id).includes(id) && user.status == "0"
              );
            }).length;
            series[0].data.push(verified);
            series[1].data.push(unverified);
          } else if (this.dataType == "beneficiaries") {
            var bene = users.filter(user => {
              return (
                JSON.parse(user.agency_id).includes(id) &&
                JSON.parse(user.beneficiaries).length > 0
              );
            }).length;

            var nobene = users.filter(user => {
              return (
                JSON.parse(user.agency_id).includes(id) &&
                JSON.parse(user.beneficiaries).length == 0
              );
            }).length;
            series[0].data.push(bene);
            series[1].data.push(nobene);
          }

          i++;
        });

        this.chart.series = series;
      });
    }
  }
};
</script>
<style scoped>
@import url("../../assets/app-assets/css/pages/card-analytics.min.css");
</style>
