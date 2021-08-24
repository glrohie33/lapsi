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
              <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="card bg-analytics text-white">
                  <div class="card-content">
                    <div class="card-body text-center">
                      <img
                        src="public/app-assets/images/elements/decore-left.png"
                        class="img-left"
                        alt="card-img-left"
                      />
                      <img
                        src="public/app-assets/images/elements/decore-right.png"
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
              <div class="col-lg-3 col-md-6 col-12">
                <div class="card">
                  <div class="card-header d-flex flex-column align-items-start pb-0">
                    <div class="avatar bg-rgba-primary p-50 m-0">
                      <div class="avatar-content">
                        <i class="feather icon-users text-primary font-medium-5"></i>
                      </div>
                    </div>
                    <h2 class="text-bold-700 mt-1 mb-25">{{user.beneficiaries.length}}</h2>
                    <p class="mb-0">No Of Beneficiaries</p>
                  </div>
                  <div class="card-content">
                    <apexchart type="area" height="100px" :options="options" :series="series"></apexchart>
                  </div>
                  <!-- <div class="card-content">
                                    <div id="subscribe-gain-chart"></div>
                  </div>-->
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-12">
                <div class="card">
                  <div class="card-header d-flex flex-column align-items-start pb-0"></div>
                  <div class="card-content">
                    <clock style="width"></clock>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-12">
                <div class="card">
                  <div class="card-content">
                    <div class="card-body">
                      <div class="row pb-50">
                        <div
                          class="col-lg-4 col-12 d-flex justify-content-between flex-column order-lg-1 order-2 mt-lg-0 mt-2"
                        >
                          <div>
                            <h2 class="text-bold-700 mb-25">{{user.beneficiaries.length}}</h2>
                            <p class="text-bold-500 mb-75">Number Beneficiaries</p>
                            <h5 class="font-medium-2">
                              <span class="text-success">100%</span>
                              <span>shared in total</span>
                            </h5>
                          </div>
                          <a href="#" class="btn btn-primary shadow">
                            View Details
                            <i class="feather icon-chevrons-right"></i>
                          </a>
                        </div>
                        <div
                          class="col-lg-8 col-12 d-flex justify-content-between flex-column text-right order-lg-2 order-1"
                        >
                          <apexchart
                            type="pie"
                            width="300px"
                            height="300px"
                            :options="beneCharts.options"
                            :series="beneCharts.series"
                          ></apexchart>
                          <!-- <div id="avg-session-chart"></div> -->
                        </div>
                      </div>
                      <hr />
                      <div class="row avg-sessions pt-50">
                        <div class="col-6" v-for="(b,index) in user.beneficiaries" :key="index">
                          <p class="mb-0">{{ b.name }}: {{b.perc}}%</p>
                          <div class="progress progress-bar-primary mt-25">
                            <div
                              class="progress-bar"
                              role="progressbar"
                              :aria-valuenow="b.perc"
                              aria-valuemax="100"
                              :style="`width:${b.perc}%`"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="card">
                  <div class="card-header">
                    <h4 class="card-title">Activity Timeline</h4>
                  </div>
                  <div class="card-content">
                    <div class="card-body">
                      <ul class="activity-timeline timeline-left list-unstyled">
                        <li>
                          <div class="timeline-icon bg-primary">
                            <i class="feather icon-plus font-medium-2 align-middle"></i>
                          </div>
                          <div class="timeline-info">
                            <p class="font-weight-bold mb-0">Client Meeting</p>
                            <span
                              class="font-small-3"
                            >Bonbon macaroon jelly beans gummi bears jelly lollipop apple</span>
                          </div>
                          <small class="text-muted">25 mins ago</small>
                        </li>
                      </ul>
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
import clock from "../clock";

export default {
  components: {
    clock: clock
  },
  props: ["user"],
  data() {
    return {
      bene: [],
      options: {
        chart: {
          height: "100px",
          type: "area",
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          },
          grid: {
            show: false,
            padding: {
              left: 0,
              right: 0
            }
          },
          id: "vuechart-example"
        },
        colors: ["#7367F0"],
        datalabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth",
          width: 2.5
        },
        xaxis: {
          labels: {
            show: false
          },
          axisBorder: {
            show: false
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 0.9,
            opacityFrom: 0.7,
            opacityTo: 0.5,
            stops: [0, 80, 100]
          }
        },
        yaxis: [
          {
            y: 0,
            offsetX: 0,
            offsetY: 0,
            padding: { left: 0, right: 0 }
          }
        ],
        tooltip: {
          x: { show: false }
        }
      },
      series: [
        {
          name: "data",
          data: [90, 100, 90, 100, 90]
        }
      ],
      beneCharts: {
        options: {
          chart: {
            width: "300px",
            type: "pie",
            dropShadow: {
              enabled: false,
              blur: 5,
              left: 1,
              top: 1,
              opacity: 0.2
            },
            toolbar: {
              show: false
            }
          },
          labels: [],
          legend: {
            show: false
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 300
                },
                legend: {
                  position: "bottom"
                }
              }
            }
          ],
          plotOptions: {
            pie: {
              dataLabels: {
                offset: -5
              }
            }
          },
          dataLabels: {
            formatter(val, opts) {
              const name = opts.w.globals.labels[opts.seriesIndex];
              return [name, val.toFixed(1) + "%"];
            }
          },
          fill: {
            type: "gradient",
            gradient: {
              gradientToColors: [$primary_light, $warning_light, $danger_light]
            }
          }
        },
        series: []
      }
    };
  },
  watch: {
    user: {
      handler() {
        console.log(this.user);
      }
    }
  },
  computed: {},
  created() {
    // this.user = this.$store.state.user;
    if (!!this.user) {
      this.beneCharts.series = this.user.beneficiaries.map(x => Number(x.perc));
      this.beneCharts.options.labels = this.user.beneficiaries.map(x => x.name);
    }
  },
  methods: {
    setActions() {
      var token = window.localStorage.getItem("lapsiToken_");
      axios
        .get(`${index_url}/api/actions?limit=5`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(resp => {
          var data = resp.data;
          console.log(data);
          //   if (data.status) {
          //     store.commit("setUser", data.user);
          //     store.commit("setRole", data.role);
          //     next();
          //   }
        });
    },
    getSeries() {
      return [10, 20, 30];
    }
  }
};
</script>
