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
              <div class="col-lg-8 col-md-12 col-sm-12">
                <div class="card bg-analytics text-white">
                  <div class="card-content">
                    <div class="card-body text-center">
                      <img
                        :src="`${index_url}/public/app-assets/images/elements/decore-left.png`"
                        class="img-left"
                        alt="card-img-left"
                      />
                      <img
                        :src="`${index_url}/public/app-assets/images/elements/decore-right.png`"
                        class="img-right"
                        alt="card-img-right"
                      />
                      <div class="avatar avatar-xl bg-primary shadow mt-0">
                        <div class="avatar-content">
                          <i class="feather icon-award font-large-1"></i>
                        </div>
                      </div>
                      <div class="text-center">
                        <h1 class="mb-2 text-white">Welcome {{ user.title }} {{ user.firstname }},</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12">
                <div class="card">
                  <div class="card-content">
                    <clock style="width"></clock>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-2 col-md-4 col-sm-6">
                <div class="card text-center">
                  <div class="card-content">
                    <div class="card-body">
                      <div class="avatar bg-rgba-info p-50 m-0 mb-1">
                        <div class="avatar-content">
                          <i class="feather icon-eye text-info font-medium-5"></i>
                        </div>
                      </div>
                      <h2 class="text-bold-700">36.9k</h2>
                      <p class="mb-0 line-ellipsis">Views</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-2 col-md-4 col-sm-6">
                <div class="card text-center">
                  <router-link :to="{path:'/admin/users'}">
                    <div class="card-content">
                      <div class="card-body">
                        <div class="avatar bg-rgba-warning p-50 m-0 mb-1">
                          <div class="avatar-content">
                            <i class="feather icon-user text-warning font-medium-5"></i>
                          </div>
                        </div>
                        <h2 class="text-bold-700">{{allUsers}}</h2>
                        <p class="mb-0 line-ellipsis">No of Staffs</p>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="col-xl-2 col-md-4 col-sm-6">
                <div class="card text-center">
                  <router-link :to="{path:'/admin/analytics/verified'}">
                    <div class="card-content">
                      <div class="card-body">
                        <div class="avatar bg-rgba-danger p-50 m-0 mb-1">
                          <div class="avatar-content">
                            <i class="feather icon-user-check text-danger font-medium-5"></i>
                          </div>
                        </div>
                        <h2 class="text-bold-700">{{appUsers}}</h2>
                        <p class="mb-0 line-ellipsis">Approved Staffs</p>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="col-xl-2 col-md-4 col-sm-6">
                <div class="card text-center">
                  <router-link :to="{path:'/admin/analytics/verified'}">
                    <div class="card-content">
                      <div class="card-body">
                        <div class="avatar bg-rgba-primary p-50 m-0 mb-1">
                          <div class="avatar-content">
                            <i class="feather icon-user-x text-primary font-medium-5"></i>
                          </div>
                        </div>
                        <h2 class="text-bold-700">{{unAppUsers}}</h2>
                        <p class="mb-0 line-ellipsis">Unapproved Staffs</p>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="col-xl-2 col-md-4 col-sm-6">
                <div class="card text-center">
                  <div class="card-content">
                    <router-link :to="{path:'/admin/analytics/beneficiaries'}">
                      <div class="card-body">
                        <div class="avatar bg-rgba-success p-50 m-0 mb-1">
                          <div class="avatar-content">
                            <i class="feather icon-user-plus text-success font-medium-5"></i>
                          </div>
                        </div>
                        <h2 class="text-bold-700">{{beneUsers}}</h2>
                        <p class="mb-0 line-ellipsis">Users With Beneficiaries</p>
                        <p></p>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="col-xl-2 col-md-4 col-sm-6">
                <div class="card text-center">
                  <div class="card-content">
                    <router-link :to="{path:'/admin/analytics/beneficiaries'}">
                      <div class="card-body">
                        <div class="avatar bg-rgba-danger p-50 m-0 mb-1">
                          <div class="avatar-content">
                            <i class="feather icon-user-minus text-danger font-medium-5"></i>
                          </div>
                        </div>
                        <h2 class="text-bold-700">{{noBeneUsers}}</h2>
                        <p class="mb-0 line-ellipsis">Users Without Beneficiaries</p>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-12">
                <div class="card">
                  <div class="card-header d-flex justify-content-between">
                    <h4 class="card-title">Staff Approval Status Chart</h4>
                  </div>
                  <div class="card-content">
                    <div class="card-body pt-50">
                      <apexchart
                        type="radialBar"
                        height="350"
                        :options="status.chartOptions"
                        :series="status.series"
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
              <div class="col-md-6 col-12">
                <div class="card">
                  <div class="card-header d-flex justify-content-between align-items-end">
                    <h4 class="mb-0">Users with beneficiaries Chart</h4>
                    <p class="font-medium-5 mb-0">
                      <i class="feather icon-help-circle text-muted cursor-pointer"></i>
                    </p>
                  </div>
                  <div class="card-content">
                    <div class="card-body px-0 pb-0">
                      <apexchart
                        type="radialBar"
                        height="350"
                        :options="bene.chartOptions"
                        :series="bene.series"
                      ></apexchart>
                      <div class="row text-center mx-0">
                        <div
                          class="col-6 border-top border-right d-flex align-items-between flex-column"
                        >
                          <p class="mb-50">Completed</p>
                          <p class="font-large-1 text-bold-700 mb-50">{{beneUsers}}</p>
                        </div>
                        <div class="col-6 border-top d-flex align-items-between flex-column py-1">
                          <p class="mb-50">In Progress</p>
                          <p class="font-large-1 text-bold-700 mb-50">{{noBeneUsers}}</p>
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
      index_url: index_url,
      status: {
        series: [],
        chartOptions: {
          chart: {
            height: 350,
            type: "radialBar"
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
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: "22px"
                },
                value: {
                  fontSize: "16px"
                },
                total: {
                  show: true,
                  label: "Total",
                  formatter: function(w) {
                    return w.config.series.reduce(
                      (a, b) => Number(a) + Number(b)
                    );
                  }
                }
              }
            }
          },
          labels: ["Approved Staffs", "Unapproved Staffs"]
        }
      },
      bene: {
        series: [],
        chartOptions: {
          chart: {
            height: 350,
            type: "radialBar",
            sparkline: {
              enable: true
            },
            dropShadow: {
              enabled: true,
              blur: 3,
              left: 1,
              top: 1,
              opacity: 0.1
            }
          },
          colors: [$success],
          plotOptions: {
            radialBar: {
              size: 110,
              startAngle: -150,
              endAngle: 150,
              hollow: {
                size: "77%"
              },
              track: {
                background: $strok_color,
                strokeWidth: "50%"
              },
              dataLabels: {
                name: {
                  show: false
                },
                value: {
                  offsetY: 18,
                  color: $strok_color,
                  fontSize: "3rem"
                }
              }
            }
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: ["#00b5b5"],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100]
            }
          },
          stroke: {
            lineCap: "round"
          }
        }
      }
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      const url = `${index_url}/api/users`;
      axios.get(url, formHeader()).then(resp => {
        this.setAnalytics(resp.data.users);
      });
    },
    setAnalytics(users) {
      var obj = this;
      this.allUsers = users.length;
      this.appUsers = users.filter(user => user.status == 1).length;
      this.unAppUsers = users.filter(user => user.status == 0).length;
      this.bene.series;
      this.beneUsers = users.filter(user => {
        return JSON.parse(user.beneficiaries).length > 0;
      }).length;
      this.noBeneUsers = users.filter(user => {
        return JSON.parse(user.beneficiaries).length == 0;
      }).length;
      var appUsers = (this.appUsers / this.allUsers) * 100;
      var unAppUsers = (this.unAppUsers / this.allUsers) * 100;
      var filled = (this.beneUsers / this.allUsers) * 100;
      this.status.series = [
        Number(appUsers).toFixed(2),
        Number(unAppUsers).toFixed(2)
      ];
      this.bene.series = [Number(filled).toFixed(2)];
    }
  }
};
</script>
<style scoped>
/* @import url("../../assets/app-assets/css/pages/card-analytics.min.css"); */
</style>
