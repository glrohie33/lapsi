<template>
  <div class="app-content container">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
          <div class="row breadcrumbs-top">
            <div class="col-12">
              <h2 class="content-header-title float-left mb-0">Add Claim</h2>
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
                  <h4 class="card-title">Add Claim</h4>
                </div>
                <div class="card-content">
                  <div class="card-body">
                    <form
                      onsubmit="return false"
                      class="form form-vertical"
                      style="width:90%; margin:0px auto;"
                    >
                      <div class="form-body">
                        <div class="row">
                          <div
                            class="col-md-6 form-group"
                            v-for="(x,index) in agencies"
                            :key="index"
                          >
                            <label>Agency</label>
                            <select
                              v-model="claim.agency"
                              class="form-control select2-icons"
                              @change="setAgencyDetails()"
                            >
                              <option value data-icon="fa fa-male">Select Agency</option>
                              <option v-for="(y,ind) in x" :key="ind" :value="y.id">{{y.name}}</option>
                            </select>
                            <p
                              class="text-danger text-center"
                              v-for="(err,index) in errors.agency_id"
                              :key="index"
                            >{{err}}</p>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="first-name-vertical">Phone of MDA</label>
                              <input
                                type="text"
                                id="first-name-vertical"
                                class="form-control"
                                v-model="claim.mda_phone"
                                placeholder="mda phone"
                                name="name"
                                required
                                readonly
                              />
                              <i
                                class="text-danger"
                                v-for="(error,index) in errors['name']"
                                :key="index"
                              >{{error}}</i>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="first-name-vertical">Email of MDA</label>
                              <input
                                type="text"
                                id="first-name-vertical"
                                class="form-control"
                                v-model="claim.mda_email"
                                placeholder="MDA email"
                                name="name"
                                required
                                readonly
                              />
                              <i
                                class="text-danger"
                                v-for="(error,index) in errors['name']"
                                :key="index"
                              >{{error}}</i>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="first-name-vertical">Policy Number</label>
                              <input
                                type="text"
                                id="first-name-vertical"
                                class="form-control"
                                v-model="claim.policy_id"
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
                            <label>Claim Type</label>
                            <select
                              v-model="claim.claim_type"
                              class="form-control select2-icons"
                              @change="setClaimClass()"
                            >
                              <option value="0">Select Claim Type</option>
                              <option
                                v-for="(x,ind) in claimTypes"
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
                            <label>Claim Class</label>
                            <select
                              v-model="claim.claim_class"
                              class="form-control select2-icons"
                              @change="setAssetTypes()"
                            >
                              <option value="0">Select Claim Class</option>
                              <option
                                v-for="(x,ind) in insurances"
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
                            <label>Asset Type</label>
                            <select
                              v-model="claim.asset_type"
                              class="form-control select2-icons"
                              @change="setAssets()"
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
                            <label>Claimant Name</label>
                            <input type v-model="claim.claimant_name" class="form-control" />
                          </div>
                          <div class="col-md-6 form-group">
                            <label>Claimant Phone</label>
                            <input type v-model="claim.claimant_phone" class="form-control" />
                          </div>
                          <div class="col-md-6 form-group">
                            <label>Claimant Email</label>
                            <input type v-model="claim.claimant_email" class="form-control" />
                          </div>
                          <div class="col-md-6 form-group">
                            <label>Claim value</label>
                            <input type v-model="claim.claim_value" class="form-control" />
                          </div>
                          <div class="col-md-6 form-group">
                            <label>Claim Location</label>
                            <input type v-model="claim.claim_location" class="form-control" />
                          </div>
                          <div class="col-md-6 form-group">
                            <label>Contact Name</label>
                            <input type v-model="claim.contact_name" class="form-control" />
                          </div>
                          <div class="col-md-6 form-group">
                            <label>Contact Phone</label>
                            <input type v-model="claim.contact_phone" class="form-control" />
                          </div>
                          <div class="col-md-6 form-group">
                            <label>Contact Email</label>
                            <input type v-model="claim.contact_email" class="form-control" />
                          </div>
                          <div class="col-md-12 form-group">
                            <label>Claim Description</label>
                            <textarea type v-model="claim.claim_description" class="form-control"></textarea>
                          </div>
                          <div class="col-md-12">
                            <div class="row">
                              <div class="col-md-2" v-for="(x,ind) in claim.files" :key="ind">
                                <img
                                  v-if="x.file_type == 'image'"
                                  class="img-thumbnail user-file"
                                  :src="x.url"
                                />
                                <img
                                  v-else
                                  class="img-thumbnail user-file"
                                  :src="`${index_url}/public/images/imagefile.png`"
                                />
                                <i>{{x.filename}}</i>
                                <button
                                  class="btn-danger btn-sm"
                                  style="position: absolute; right:10px;z-index:999999;"
                                  @click="removeFile(ind)"
                                >
                                  <i class="feather icon-minus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <button class="btn-danger btn-sm" @click="showBox(index)">
                              <i class="feather">add files</i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>

                    <div class="col-12">
                      <button
                        type="submit"
                        @click="addClaim($event)"
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
    <v-dialog v-model="showbox" id="selectFile">
      <FileUpload
        :user="user"
        :title="ftitle"
        :inFiles="claim.files"
        @save="addFiles"
        @cancel="closeBox"
      ></FileUpload>
    </v-dialog>
  </div>
</template>
<script>
import fileupload from "../../fileuploadmodal.vue";

export default {
  props: ["user", "role"],
  components: {
    FileUpload: fileupload
  },
  data() {
    return {
      claim: {
        claimant_name: "",
        agency: "",
        claimant_phone: "",
        claimant_email: "",
        asset_type: "",
        claim_class: "",
        claim_type: "",
        claim_description: "",
        claim_value: "",
        claim_location: "",
        contact_name: "",
        contact_phone: "",
        email: "",
        policy_id: "",
        assets: "",
        mda_phone: "",
        mda_email: "",
        files: []
      },
      leadUnderwriter: "",
      insurances: [],
      insuranceclass: [],
      parents: [],
      agencies: [],
      errors: [],
      assetType: 0,
      claimTypes: [],
      assetTypes: [],
      assets: [],
      showbox: false,
      ftitle: "Select Claim files"
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
        this.claimTypes = resp.data.type;
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
    addClaim(event) {
      var button = event.target;
      button.setAttribute("disabled", "true");
      this.errors = [];
      var data = setFormData(this.claim);
      axios.post(`${index_url}/api/claim`, data).then(resp => {
        if (resp.data.status) {
          Swal.fire({
            title: "Claim Added",
            text: "You have successfully added a new role",
            icon: "success"
          });
          button.removeAttribute("disabled");
          this.$router.push({ path: "/admin/claim/" });
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
    setClaimClass() {
      var type = this.claim.claim_type;
      this.insurances = this.insuranceclass.filter(ins => ins.type == type);
    },
    setAssetTypes() {
      var ins = this.claim.claim_class;
      axios
        .get(`${index_url}/api/assettypebyclass?insuranceclass=${ins}`)
        .then(resp => {
          this.assetTypes = resp.data.assettype;
        });
    },
    setAssets() {
      var ins = this.claim.claim_class;
      var assets = this.assetType;
      console.log(this.assetType);

      axios
        .get(`${index_url}/api/asset?insurance=${ins}&type=${assets}&filter=1`)
        .then(resp => {
          this.assets = resp.data.assets;
        });
    },
    setAgencyDetails() {
      var id = this.claim.agency;
      if (id > 0) {
        var agency = this.agencies[0].find(agency => agency.id == id);
        this.claim.mda_phone = agency.phone;
        this.claim.mda_email = agency.email;
      } else {
        this.claim.mda_phone = "";
        this.claim.mda_email = "";
      }
    },
    showBox() {
      this.showbox = true;
    },
    addFiles(files) {
      this.claim.files = files;
      this.showbox = false;
    },
    removeFile(index) {
      this.claim.files.splice(index, 1);
    },
    closeBox() {
      this.showbox = false;
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
