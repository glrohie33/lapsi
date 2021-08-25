<template>
  <div class="app-content container">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
          <div class="row breadcrumbs-top">
            <div class="col-12">
              <h2 class="content-header-title float-left mb-0">{{$route.name.toUpperCase()}}</h2>
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
                  <h4 class="card-title">Add Business</h4>
                  <router-link :to="{path:'/admin/business'}">
                    <v-btn>Back To List</v-btn>
                  </router-link>
                </div>
                <div class="card-content">
                  <div class="card-body">
                    <form class="form form-vertical" style="width:90%; margin:0px auto;">
                      <div class="form-body">
                        <div class="row">
                          <div
                            class="col-md-6 form-group"
                            v-for="(x,index) in agencies"
                            :key="index"
                          >
                            <label>Agency</label>
                            <select v-model="business.agency" class="form-control select2-icons">
                              <option value data-icon="fa fa-male">Select Agency</option>
                              <option v-for="(y,ind) in x" :key="ind" :value="y.id">{{y.name}}</option>
                            </select>
                            <p
                              class="text-danger text-center"
                              v-for="(err,index) in errors.agency"
                              :key="index"
                            >{{err}}</p>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="first-name-vertical">Policy Number</label>
                              <input
                                type="text"
                                id="first-name-vertical"
                                class="form-control"
                                v-model="business.policy_id"
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
                            <label>Business Type</label>
                            <select
                              v-model="business.business_type"
                              class="form-control select2-icons"
                              @change="setBusinessClass()"
                            >
                              <option value="0">Select Business Type</option>
                              <option
                                v-for="(x,ind) in businessTypes"
                                :key="ind"
                                :value="x.id"
                              >{{x.name}}</option>
                            </select>
                            <p
                              class="text-danger text-center"
                              v-for="(err,index) in errors.business_type"
                              :key="index"
                            >{{err}}</p>
                          </div>
                          <div class="col-md-6 form-group">
                            <label>Business Class</label>
                            <select
                              v-model="business.business_class"
                              class="form-control select2-icons"
                              @change="setAssetTypes()"
                            >
                              <option value="0">Select Business Class</option>
                              <option
                                v-for="(x,ind) in insurances"
                                :key="ind"
                                :value="x.id"
                              >{{x.name}}</option>
                            </select>
                            <p
                              class="text-danger text-center"
                              v-for="(err,index) in errors.business_type"
                              :key="index"
                            >{{err}}</p>
                          </div>
                          <div class="col-md-6 form-group">
                            <label>Asset Type</label>
                            <select
                              v-model="assetType"
                              class="form-control select2-icons"
                              @change="getAssets()"
                            >
                              <option value="0">Select Asset Type</option>
                              <option
                                v-for="(x,ind) in assetTypes"
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
                            <label>Insured Name</label>
                            <input type v-model="business.insured_name" class="form-control" />
                            <p
                              class="text-danger text-center"
                              v-for="(err,index) in errors.insured_name"
                              :key="index"
                            >{{err}}</p>
                          </div>
                          <div class="col-md-6 form-group">
                            <label>Insured Phone</label>
                            <input type v-model="business.insured_phone" class="form-control" />
                            <p
                              class="text-danger text-center"
                              v-for="(err,index) in errors.insured_phone"
                              :key="index"
                            >{{err}}</p>
                          </div>
                          <div class="col-md-6 form-group">
                            <label>Insured Email</label>
                            <input type v-model="business.insured_email" class="form-control" />
                            <p
                              class="text-danger text-center"
                              v-for="(err,index) in errors.insured_email"
                              :key="index"
                            >{{err}}</p>
                          </div>
                          <div class="col-md-6 form-group">
                            <label>Business value</label>
                            <input type v-model="business.business_value" class="form-control" />
                            <p
                              class="text-danger text-center"
                              v-for="(err,index) in errors.business_value"
                              :key="index"
                            >{{err}}</p>
                          </div>
                          <div class="col-md-6 form-group">
                            <label>Business Location</label>
                            <input type v-model="business.business_location" class="form-control" />
                            <p
                              class="text-danger text-center"
                              v-for="(err,index) in errors.business_location"
                              :key="index"
                            >{{err}}</p>
                          </div>
                          <div class="col-md-6 form-group">
                            <label>Contact Name</label>
                            <input type v-model="business.contact_name" class="form-control" />
                            <p
                              class="text-danger text-center"
                              v-for="(err,index) in errors.contact_name"
                              :key="index"
                            >{{err}}</p>
                          </div>
                          <div class="col-md-6 form-group">
                            <label>Contact Phone</label>
                            <input type v-model="business.contact_phone" class="form-control" />
                            <p
                              class="text-danger text-center"
                              v-for="(err,index) in errors.contact_phone"
                              :key="index"
                            >{{err}}</p>
                          </div>
                          <div class="col-md-6 form-group">
                            <label>Contact Email</label>
                            <input type v-model="business.contact_email" class="form-control" />
                            <p
                              class="text-danger text-center"
                              v-for="(err,index) in errors.contact_email"
                              :key="index"
                            >{{err}}</p>
                          </div>
                          <div class="col-md-12 form-group">
                            <label>Business Description</label>
                            <textarea
                              type
                              v-model="business.business_description"
                              class="form-control"
                            ></textarea>
                            <p
                              class="text-danger text-center"
                              v-for="(err,index) in errors.business_description"
                              :key="index"
                            >{{err}}</p>
                            <p
                              v-if="business.assets.length > 0"
                            >{{business.assets.length}} Uninsured Assets Found and will be insured</p>
                          </div>
                        </div>
                      </div>
                    </form>

                    <div class="col-12">
                      <button
                        type="submit"
                        @click="addBusiness($event)"
                        class="btn btn-primary mr-1 mb-1"
                      >Submit</button>
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
      business: {
        insured_name: "",
        agency: "",
        insured_phone: "",
        insured_email: "",
        business_class: "",
        business_type: "",
        business_description: "",
        business_value: "",
        business_location: "",
        contact_name: "",
        contact_phone: "",
        email: "",
        policy_id: "",
        assets: []
      },
      leadUnderwriter: "",
      insurances: [],
      insuranceclass: [],
      parents: [],
      agencies: [],
      errors: [],
      assetType: 0,
      businessTypes: [],
      assetTypes: [],
      assets: []
    };
  },
  watch: {},
  created() {
    this.getData();
    this.setAgencies();
  },
  methods: {
    getData() {
      axios.get(`${index_url}/api/insuranceclass`).then(resp => {
        this.insuranceclass = resp.data.insuranceclass.filter(
          ins => ins.allocation_id != null
        );
        this.insurances = this.insuranceclass;
      });
      axios.get(`${index_url}/api/insurancetype`).then(resp => {
        this.businessTypes = resp.data.type;
      });
      //   axios.get(`${index_url}/api/policyparents`).then(resp => {
      //     this.parents = resp.data.parents;
      //   });
    },
    setAgencies(val) {
      var url = `${index_url}/api/agencychildren?parent_id=${val}`;
      axios.get(url).then(resp => {
        var agencies = resp.data.agencies;
        if (agencies.length > 0) {
          this.$set(this.agencies, this.agencies.length, agencies);
        }
      });
    },
    addBusiness(event) {
      var button = event.target;
      button.setAttribute("disabled", "true");
      this.errors = [];
      var data = setFormData(this.business);
      axios.post(`${index_url}/api/business`, data).then(resp => {
        if (resp.data.status) {
          Swal.fire({
            title: "Business Added",
            text: "You have successfully added a new Business",
            icon: "success"
          });
          button.removeAttribute("disabled");
          this.$router.push({ path: "/admin/business/" });
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
    setBusinessClass() {
      var type = this.business.business_type;
      this.insurances = this.insuranceclass.filter(ins => ins.type == type);
    },
    setAssetTypes() {
      var ins = this.business.business_class;
      axios
        .get(`${index_url}/api/assettypebyclass?insuranceclass=${ins}`)
        .then(resp => {
          this.assetTypes = resp.data.assettype;
        });
    },
    getAssets() {
      var ins = this.business.business_class;
      var assets = this.assetType;
      if (this.assetType > 0) {
        axios
          .get(
            `${index_url}/api/asset?insurance=${ins}&type=${assets}&filter=0`
          )
          .then(resp => {
            this.business.assets = resp.data.assets;
          });
      } else {
        this.business.assets = [];
      }
    },
    setAgencyDetails() {
      var id = this.business.agency;
      if (id > 0) {
        var agency = this.agencies.find(agency => agency.id == id);
      } else {
        this.business;
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
