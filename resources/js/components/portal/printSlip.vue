<template>
  <div class="app-content container">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-body">
        <!-- Column selectors with Export Options and print table -->
        <section
          class="page-users-view users-view"
          id="usertable"
          style="width:700px; margin:0px auto;"
        >
          <div class="row">
            <!-- account start -->
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <div class="card-title">Account</div>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12">
                      <h3>{{user.oracle}}</h3>
                    </div>
                    <div class="col-12">
                      <table>
                        <tr>
                          <td class="font-weight-bold">Surname</td>
                          <td class>{{user.surname}}</td>

                          <td class="font-weight-bold">Firstname</td>
                          <td>{{user.firstname}}</td>
                        </tr>
                        <tr>
                          <td class="font-weight-bold">Middlename</td>
                          <td>{{user.middlename}}</td>

                          <td class="font-weight-bold">Gender</td>
                          <td>{{user.sex}}</td>
                        </tr>
                      </table>
                    </div>
                    <div class="col-12 col-md-12">
                      <table class="ml-0 ml-sm-0 ml-lg-0">
                        <tr>
                          <td class="font-weight-bold">Phone</td>
                          <td>{{user.phone}}</td>
                          <td class="font-weight-bold">State Of Origin</td>
                          <td>{{user.state}}</td>
                        </tr>
                        <tr>
                          <td class="font-weight-bold">Date of Birth</td>
                          <td>{{user.dateofbirth}}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <div class="card-title">Office</div>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-12 col-sm-6 col-md-12">
                      <table>
                        <tr>
                          <td class="font-weight-bold">Designation</td>
                          <td>{{user.designation}}</td>

                          <td class="font-weight-bold">Agency</td>
                          <td>
                            <p v-for="(x,index) in user.agency" :key="index">{{x.name}}</p>
                          </td>
                        </tr>
                        <tr>
                          <td class="font-weight-bold">Office</td>
                          <td>{{user.office}}</td>
                          <td class="font-weight-bold">Grade</td>
                          <td>{{user.grade}}</td>
                        </tr>
                      </table>
                    </div>
                    <div class="col-12 col-md-12">
                      <table>
                        <tr>
                          <td class="font-weight-bold">first Appointment</td>
                          <td>{{user.dateof1stapp}}</td>

                          <td class="font-weight-bold">present appointment</td>
                          <td>{{user.dateofpreapp}}</td>
                        </tr>
                        <tr>
                          <td class="font-weight-bold">last deployment</td>
                          <td>{{user.dateoflastdep}}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- account end -->
            <!-- information start -->
            <div class="col-12" v-for="(item,index) in user.beneficiaries" :key="index">
              <div class="card">
                <div class="card-header">
                  <div class="card-title mb-2">Beneficiary {{index + 1}}</div>
                </div>
                <div class="card-body">
                  <table>
                    <tr>
                      <td class="font-weight-bold">Name</td>
                      <td>{{item.name}}</td>
                      <td class="font-weight-bold">Phone</td>
                      <td>{{item.phone}}</td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Percentage</td>
                      <td>{{item.perc}}%</td>
                      <td class="font-weight-bold">Relationship</td>
                      <td>{{item.rel}}</td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Date Of Birth</td>
                      <td>{{item.dob}}</td>
                      <td class="font-weight-bold">Indentification</td>
                      <td>{{item.identification}}</td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Id Number</td>
                      <td>{{item.id_num}}</td>
                      <td class="font-weight-bold">Account Name</td>
                      <td>{{item.acc_name}}</td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Account Number</td>
                      <td>{{item.acc_number}}</td>
                      <td class="font-weight-bold">Bank Name</td>
                      <td>{{item.b_name}}</td>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">Address</td>
                      <td>{{item.addr}}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

            <div class="col-12" v-if="user.status == 1">
              <div class="card">
                <div class="card-body">
                  <div
                    :style="{textAlign:'center',width:'300px',margin:'0px auto', position:'relative'}"
                  >
                  <!-- <img :src="stamp" alt="" id="stamp"> -->
                    <img
                      :src="`${index_url}/public/images/director.jpg`"
                      alt
                      style="width:160px;height:65px;object-fit:contain;"
                    />
                    <hr id="underline" />
                    <h5 style="font-size:90%;">
                      <i>Director Of Insurance</i>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <!-- information start -->
            <!-- social links end -->
            <!-- permissions start -->

            <!-- permissions end -->
          </div>
        </section>
        <div class="col-12" v-if="user.status == 1">
          <a class="btn btn-primary mr-1 btn-sm" @click="print($event)">
            <i class="feather icon-printer"></i> Print
          </a>
        </div>
        <!-- Column selectors with Export Options and print table -->
      </div>
    </div>
  </div>
</template>
<script>
import { jsPDF } from "jspdf";
import * as html2canvas from "html2canvas";
// import { html2canvas } from "html2canvas";
export default {
  props: ["user"],
  data() {
    return {
      index_url: index_url,
      errors: []
    };
  },
  computed: {
    stamp() {
      return `${index_url}/public/images/stamp.jpg`;
    }
  },
  created() {
    this.user = this.user;
    this.getAgency();
  },
  methods: {
    getAgency() {
      const url = `${index_url}/api/useragencies/${this.user.agency_id}`;
      axios.get(url).then(resp => {
        this.$set(this.user, "agency", resp.data.agencies);
      });
    },
    print(event) {
      //   var frame = document.createElement("iframe");
      var source = document.querySelector("#usertable");
      //   frame.contentDocument.write(source.innerHTML);
      const doc = new jsPDF("p", "px", "a4");
      var filename = `${this.user.firstname}${
        this.user.oracle
      }${new Date().getTime()}.pdf`;
      var source = document.querySelector("#usertable");
      var scale = (doc.internal.pageSize.width - 10 * 2) / source.scrollWidth;

      doc.html(source, {
        callback: doc => {
          doc.save(filename);
        },
        filename: filename,
        html2canvas: {
          scale: scale // default is window.devicePixelRatio
        },
        fontFaces: [
          {
            family: "calibri",
            weight: "bold"
          }
        ],
        x: 10,
        y: 10
      });
      //   doc.setFont("calibri");
      //   doc.setFontType("normal");
      //   doc.setFontSize(12);
      //   var margins = {
      //     top: 10,
      //     bottom: 60,
      //     left: 10,
      //     width: 1200
      //   };
      //   doc.fromHTML(source, margins.left, margins.top, {
      //     width: margins.width
      //   });

      //   doc.save(filename);
    }
  }
};
</script>
<style scoped>
table {
  width: 100%;
}

#usertable .card {
  margin-bottom: 0px !important;
  height: 330px;
}

#usertable .col-12 {
  padding: 2px !important;
  margin: 10px !important;
}

#stamp{
    position:absolute;
}
#usertable td {
  font-weight: 500;
  padding-bottom: 0.18rem;
}

#underline {
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  border: 0;
  border-top: 1px solid rgba(34, 41, 47, 0.9);
}
</style>
