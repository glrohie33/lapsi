<template>
  <div class="body">
    <div class="app-content container">
      <div class="content-overlay"></div>
      <div class="header-navbar-shadow"></div>
      <div class="content-wrapper">
        <div class="content-header row">
          <div class="content-header-left col-md-9 col-12 mb-2">
            <div class="row breadcrumbs-top">
              <div class="col-12">
                <h2 class="content-header-title float-left mb-0">Edit Beneficiaries</h2>
                <div class="breadcrumb-wrapper col-12">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.html">Portal</a>
                    </li>
                    <li class="breadcrumb-item active">Edit Beneficiaries</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content-body">
          <!-- Column selectors with Export Options and print table -->
          <section id="column-selectors">
            <div class="row">
              <div class="col-10" style="margin:0px auto;">
                <div class="card">
                  <div class="card-content">
                    <div class="card-body">
                      <div class="form-body">
                        <div class="row">
                          <div class="col-md-12">
                            <h4>Life Assurance Death Beneficiaries</h4>
                            <hr />
                          </div>
                          <p
                            class="text-danger text-center"
                            v-for="(err,index) in errors.beneLength"
                            :key="index"
                          >{{err}}</p>

                          <div
                            class="col-md-12"
                            v-for="(item,index) in user.beneficiaries"
                            :key="index"
                          >
                            <div class="row">
                              <button
                                class="btn-danger btn-sm"
                                style="position: absolute; right:10px;z-index:999999;"
                                @click="removeBene(index)"
                              >
                                <i class="feather icon-user-minus"></i>
                              </button>
                              <div class="col-md-12">
                                <h5>Beneficiary {{index + 1}}</h5>
                              </div>
                              <div class="form-group col-md-6">
                                <label>Name Of Beneficiaries</label>
                                <input
                                  type="text"
                                  v-model="user.beneficiaries[index].name"
                                  class="form-control"
                                  placeholder="Name Of Beneficiaries *"
                                />
                                <p class="text-danger text-center">{{errors[`bene${index}name`]}}</p>
                              </div>
                              <div class="form-group col-md-6">
                                <label>Telephone</label>
                                <input
                                  type="number"
                                  v-model="user.beneficiaries[index].phone"
                                  class="form-control"
                                  placeholder="Telephone number *"
                                />
                                <p class="text-danger text-center">{{errors[`bene${index}phone`]}}</p>
                              </div>
                              <div class="form-group col-md-6">
                                <label>% Of Benefit</label>
                                <input
                                  type="number"
                                  v-model="user.beneficiaries[index].perc"
                                  class="form-control"
                                  placeholder="% of benefit *"
                                />
                                <p class="text-danger text-center">{{errors[`bene${index}perc`]}}</p>
                              </div>
                              <div class="form-group col-md-6">
                                <label>Relationship with Life Assured</label>
                                <input
                                  type="text"
                                  v-model="user.beneficiaries[index].rel"
                                  class="form-control"
                                  placeholder="Relationship with life assured *"
                                />
                                <p class="text-danger text-center">{{errors[`bene${index}rel`]}}</p>
                              </div>
                              <div class="form-group col-md-4">
                                <label>Benificiary Identification</label>
                                <select
                                  v-model="user.beneficiaries[index].identification"
                                  class="form-control"
                                  placeholder="Beneficiary Identification *"
                                >
                                  <option value>Select Beneficiary Mode Of Identification</option>
                                  <option value="national ID">National Identity Card</option>
                                  <option value="international passport">International Passport</option>
                                  <option value="driver's licence">Driver's Licence</option>
                                </select>

                                <p
                                  class="text-danger text-center"
                                >{{errors[`bene${index}identification`]}}</p>
                              </div>
                              <div class="form-group col-md-4">
                                <label>Identification Number</label>
                                <input
                                  type="text"
                                  v-model="user.beneficiaries[index].id_num"
                                  class="form-control"
                                  placeholder="Beneficiary Identification Number *"
                                />
                                <p class="text-danger text-center">{{errors[`bene${index}id_num`]}}</p>
                              </div>
                              <div class="form-group col-md-4">
                                <label>Benificiary Date Of Birth</label>
                                <input
                                  type="date"
                                  v-model="user.beneficiaries[index].dob"
                                  class="form-control"
                                  placeholder="Date Of Birth *"
                                />
                                <p class="text-danger text-center">{{errors[`bene${index}dob`]}}</p>
                              </div>
                              <div class="form-group col-md-4">
                                <label>Account Number</label>
                                <input
                                  type="text"
                                  v-model="user.beneficiaries[index].acc_number"
                                  class="form-control"
                                  placeholder="Beneficiary Account Number *"
                                />
                                <p
                                  class="text-danger text-center"
                                >{{errors[`bene${index}acc_name`]}}</p>
                              </div>
                              <div class="form-group col-md-4">
                                <label>Account Name</label>
                                <input
                                  type="text"
                                  v-model="user.beneficiaries[index].acc_name"
                                  class="form-control"
                                  placeholder="Beneficiary Account Name *"
                                />
                                <p
                                  class="text-danger text-center"
                                >{{errors[`bene${index}acc_name`]}}</p>
                              </div>
                              <div class="form-group col-md-4">
                                <label>Bank Name</label>
                                <input
                                  type="text"
                                  v-model="user.beneficiaries[index].b_name"
                                  class="form-control"
                                  placeholder="Beneficiary Bank Name *"
                                />
                                <p class="text-danger text-center">{{errors[`bene${index}b_name`]}}</p>
                              </div>
                              <div class="form-group col-md-12">
                                <label>Address</label>
                                <textarea
                                  v-model="user.beneficiaries[index].addr"
                                  class="form-control"
                                  placeholder="Address *"
                                ></textarea>
                                <p class="text-danger text-center">{{errors[`bene${index}addr`]}}</p>
                              </div>
                              <div class="form-group col-md-12">
                                <label>Other Details</label>
                                <textarea
                                  v-model="user.beneficiaries[index].addr"
                                  class="form-control"
                                  placeholder="Other details for beneficiary *"
                                ></textarea>
                                <p class="text-danger text-center">{{errors[`bene${index}others`]}}</p>
                              </div>
                              <div class="col-md-12">
                                <div class="row">
                                  <div class="col-md-2" v-for="(x,ind) in item.files" :key="ind">
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
                                      @click="removeFile(item,ind)"
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
                          <div class="col-md-12">
                            <button class="btn btn-info" @click="addBene()">
                              <i class="feather icon-user-plus"></i>Add Beneficiary
                            </button>
                          </div>

                          <div class="col-md-12">
                            <div class="col-md-12" style="text-align: center;">
                              <button
                                @click="saveData()"
                                class="btn btn-primary btn-inline"
                              >Add Beneficiaries</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p class="text-danger text-center">{{errors.perc}}</p>
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
          :inFiles="userFiles"
          @save="addFiles"
          @cancel="closeBox"
        ></FileUpload>
      </v-dialog>
    </div>
  </div>
</template>
<script>
import fileupload from "../fileuploadmodal.vue";
export default {
  components: {
    FileUpload: fileupload
  },
  props: ["user"],
  data() {
    return {
      index_url: index_url,
      errors: [],
      showbox: false,
      addFilesTo: [],
      ftitle: "",
      userFiles: []
    };
  },
  created() {
    this.user = this.$store.state.user;
    if (typeof this.user.beneficiaries != "object") {
      this.user.beneficiaries = JSON.parse(this.user.beneficiaries);
    }
  },
  methods: {
    addBene() {
      this.user.beneficiaries.push({
        name: "",
        phone: "",
        perc: "",
        rel: "",
        addr: "",
        identification: "",
        id_num: "",
        acc_num: "",
        acc_name: "",
        b_name: "",
        dob: "",
        files: []
      });
    },
    removeBene: function(index) {
      this.user.beneficiaries.splice(index, 1);
    },
    saveData() {
      var token = window.localStorage.getItem("lapsiToken_");
      var data = setFormData(this.user);
      data.append("_method", "PUT");
      axios
        .post(`${index_url}/api/users/${this.user.id}`, data, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(resp => {
          var data = resp.data;
          if (data.status) {
            this.$store.commit("storeUser", data.user);
            Swal.fire({
              title: "Success",
              text: "Beneficiaries Successfully Edited",
              icon: "success"
            });
          } else {
            this.errors = data.errors;
          }
        });
    },
    showBox(index) {
      this.showbox = true;
      this.userFiles = this.user.beneficiaries[index].files;
      this.addFilesTo = index;
    },
    addFiles(files) {
      this.user.beneficiaries[this.addFilesTo].files = files;
      this.addFilesTo = "";
      this.showbox = false;
    },
    removeFile(bene, index) {
      bene.files.splice(index, 1);
    },
    closeBox() {
      this.showbox = false;
    }
  }
};
</script>

<style>
#selectFile {
  z-index: 99999999;
}
</style>
