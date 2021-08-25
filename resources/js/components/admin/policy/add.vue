<template>
  <div class="app-content container">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
          <div class="row breadcrumbs-top">
            <div class="col-12">
              <h2 class="content-header-title float-left mb-0">Policy</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="content-body">
        <!-- Column selectors with Export Options and print table -->
        <section id="column-selectors">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Add Policy</h4>
                </div>
                <div class="card-content">
                  <div class="card-body">
                    <form class="form form-vertical" style="width:90%; margin:0px auto;">
                      <div class="form-body">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="first-name-vertical">Policy Number</label>
                              <input
                                type="text"
                                id="first-name-vertical"
                                class="form-control"
                                v-model="policy.policy_number"
                                placeholder="policy number"
                                name="name"
                                required
                              />
                              <i
                                class="text-danger"
                                v-for="(error,index) in errors['name']"
                                :key="index"
                              >{{error}}</i>
                            </div>
                          </div>
                          <div class="col-md-6 form-group">
                            <label>Policy type</label>
                            <select
                              v-model="policy.insurance_class"
                              class="form-control select2-icons"
                            >
                              <option value="0">Select Policy Type</option>
                              <option
                                v-for="(x,ind) in insuranceclass"
                                :key="ind"
                                :value="x.id"
                              >{{x.name}}</option>
                            </select>
                            <p
                              class="text-danger text-center"
                              v-for="(err,index) in errors.policy_type"
                              :key="index"
                            >{{err}}</p>
                          </div>
                          <div class="col-md-6 form-group">
                            <label>Sum Insured</label>
                            <input
                              type="number"
                              @keyup="setPremium()"
                              v-model="policy.sum_insured"
                              class="form-control"
                            />
                          </div>
                          <div class="col-md-6 form-group">
                            <label>Premium %</label>
                            <input
                              type="number"
                              v-model="policy.premium_perc"
                              @keyup="setPremium()"
                              class="form-control"
                            />
                          </div>
                          <div class="col-md-6 form-group">
                            <label>Premium</label>
                            <input type="number" v-model="policy.premium" class="form-control" />
                          </div>
                          <div class="col-md-6 form-group">
                            <label>Starting Date</label>
                            <input type="Date" v-model="policy.start_date" class="form-control" />
                          </div>
                          <div class="col-md-6 form-group">
                            <label>Expiry Date</label>
                            <input type="Date" v-model="policy.expiry_date" class="form-control" />
                          </div>
                        </div>
                        <div class="col-12" id="leadunderwriter">
                          <h5>
                            <span style>{{leadUnderwriter}}</span>
                          </h5>
                          <i>Lead Underwriter</i>
                        </div>
                      </div>
                    </form>

                    <div class="col-12">
                      <button
                        type="submit"
                        @click="addPolicy($event)"
                        class="btn btn-primary mr-1 mb-1"
                      >Submit</button>
                      <button type="reset" class="btn btn-outline-warning mr-1 mb-1">Reset</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Column selectors with Export Options and print table -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["user", "role"],
  data() {
    return {
      policy: {
        name: "",
        policy_number: "",
        sum_insured: 0,
        premium: 0,
        premium_perc: "",
        insurance_class: 0,
        underwriters: []
      },
      leadUnderwriter: "",
      insuranceclass: [],
      parents: [],
      errors: [],
      interval: ""
    };
  },
  watch: {},
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get(`${index_url}/api/insuranceclass`).then(resp => {
        this.insuranceclass = resp.data.insuranceclass.filter(
          ins => ins.allocation_id != null
        );
      });
      //   axios.get(`${index_url}/api/policyparents`).then(resp => {
      //     this.parents = resp.data.parents;
      //   });
    },
    addPolicy(event) {
      var button = event.target;
      button.setAttribute("disabled", "true");
      this.errors = [];
      var data = setFormData(this.policy);
      axios.post(`${index_url}/api/policy`, data).then(resp => {
        if (resp.data.status) {
          Swal.fire({
            title: "Policy Added",
            text: "You have successfully added a new policy",
            icon: "success"
          });
          button.removeAttribute("disabled");
          this.$router.push({ path: "/admin/policies/" });
        } else {
          this.errors = resp.data.errors;
          button.removeAttribute("disabled");
        }
      });
    },
    setPolicyNumber(ins) {
      axios
        .get(`${index_url}/api/policynumber?insuranceclass=${ins}`)
        .then(resp => {
          this.policy.policy_number = resp.data.policy_number;
        });
    },
    setPremium() {
      if (!!this.interval) {
        var interval = this.interval;
        clearTimeout(interval);
      }
      var obj = this;
      this.interval = setTimeout(() => {
        obj.policy.premium =
          obj.policy.sum_insured * (obj.policy.premium_perc / 100);
      }, 1000);
    },
    setPolicy() {
      var ins_id = this.policy.insurance_class;
      this.setPolicyNumber(ins_id);
      if (ins_id > 0) {
        var selected = this.insuranceclass.find(ins => ins.id == ins_id);
        var underwriters = JSON.parse(selected.underwriters_details);
        var perctatages = JSON.parse(selected.underwriters_allocations);
        for (var x in underwriters) {
          var id = underwriters[x].id;
          underwriters[x]["perc"] = perctatages.find(perc => perc.id == id)[
            "perc"
          ];
        }
        this.policy.underwriters = underwriters;
        this.leadUnderwriter = underwriters[0].name;
      } else {
        this.leadUnderwriter = "";
      }
    },
    delete(code) {
      console.log("here");
    }
  }
};
</script>

<style scoped>
#leadunderwriter h5 {
  width: fit-content;
  text-transform: uppercase;
  text-decoration: underline;
}
</style>
