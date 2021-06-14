<template>
  <div class="app-content contianer">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-body">
        <!-- Column selectors with Export Options and print table -->
        <section class="page-users-view users-view" id="usertable">
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
                          <td>{{user.surname}}</td>

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
                      <td class="font-weight-bold">Address</td>
                      <td>{{item.addr}}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

            <div class="col-12">
              <a class="btn btn-primary mr-1 btn-sm" @click="print($event)">
                <i class="feather icon-printer"></i> Print
              </a>
            </div>
            <!-- information start -->
            <!-- social links end -->
            <!-- permissions start -->

            <!-- permissions end -->
          </div>
        </section>
        <!-- Column selectors with Export Options and print table -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["user"],
  data() {
    return {
      errors: []
    };
  },
  created() {
    this.user = this.$store.state.user;
    if (typeof this.user.beneficiaries != "object") {
      this.user.beneficiaries = JSON.parse(this.user.beneficiaries);
    }
    this.getAgency();
  },
  methods: {
    getAgency() {
      const url = `${index_url}/api/useragencies/${this.user.agency_id}`;
      var ag = axios.get(url).then(resp => {
        this.user.agency = resp.data.agencies;
      });
    },
    print(event) {
      event.target.style.display = "none";
      window.print();
      event.target.style.display = "block";
    }
  }
};
</script>
<style scoped>
table {
  width: 100%;
}
</style>
