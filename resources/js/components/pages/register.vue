<template>
  <div class="col-12 col-md-8 card bg-authentication rounded-0 mb-0">
    <div class="row m-0">
      <div class="col-lg-12 col-12 p-0">
        <div class="card rounded-0 mb-0 px-2">
          <div class="card-header pb-1">
            <div class="card-title">
              <img src="public/images/logo.png" />
              <h4>Lagos State Ministry Of Finance</h4>
              <h5>Welcome to Lagos State Service insurance Portal</h5>
            </div>
          </div>
          <div class="card-content">
            <div class="card-body pt-1">
              <div id="register">
                <div class="row">
                  <div class="col-md-12 form-group">
                    <label for="user-name">Title</label>
                    <select v-model="user.title" class="form-control" style="width:100px;">
                      <option value="HON" data-icon="fa fa-wordpress">Hon</option>
                      <option value="MR" data-icon="fa fa-male">Mr</option>
                      <option value="MRS" data-icon="fa fa-female">Mrs</option>
                      <option value="MISS" data-icon="fa fa-female">Miss</option>
                    </select>
                    <p
                      class="text-danger text-center"
                      v-for="(err,index) in errors.title"
                      :key="index"
                    >{{err}}</p>
                  </div>

                  <div class="col-md-6 form-group">
                    <label>Firstname</label>
                    <input
                      type="text"
                      v-model="user.surname"
                      class="form-control"
                      placeholder="First Name *"
                      value
                    />
                    <p
                      class="text-danger text-center"
                      v-for="(err,index) in errors.surname"
                      :key="index"
                    >{{err}}</p>
                  </div>

                  <div class="col-md-6 form-group">
                    <label>Lastname</label>
                    <input
                      type="text"
                      v-model="user.firstname"
                      class="form-control"
                      placeholder="Last Name *"
                    />
                    <p
                      class="text-danger text-center"
                      v-for="(err,index) in errors.firstname"
                      :key="index"
                    >{{err}}</p>
                  </div>
                  <div class="col-md-6 form-group">
                    <label>Middlename</label>
                    <input
                      type="text"
                      v-model="user.middlename"
                      class="form-control"
                      placeholder="Middle Name *"
                    />
                    <p
                      class="text-danger text-center"
                      v-for="(err,index) in errors.middlename"
                      :key="index"
                    >{{err}}</p>
                  </div>

                  <div class="col-md-6 form-group">
                    <label>Gender</label>
                    <select
                      v-model="user.sex"
                      class="form-control select2-icons"
                      style="width:100px;"
                    >
                      <option value="M" data-icon="fa fa-male">Male</option>
                      <option value="F" data-icon="fa fa-female">Female</option>
                    </select>
                    <p
                      class="text-danger text-center"
                      v-for="(err,index) in errors.sex"
                      :key="index"
                    >{{err}}</p>
                  </div>
                  <div class="col-md-6 form-group">
                    <label>Phone</label>
                    <input
                      type="text"
                      v-model="user.phone"
                      class="form-control"
                      placeholder="Phone *"
                    />
                    <p
                      class="text-danger text-center"
                      v-for="(err,index) in errors.phone"
                      :key="index"
                    >{{err}}</p>
                  </div>
                  <div class="col-md-6 form-group">
                    <label>State Of Origin</label>
                    <input
                      type="text"
                      v-model="user.state"
                      class="form-control"
                      placeholder="State Of Origin *"
                    />
                    <p
                      class="text-danger text-center"
                      v-for="(err,index) in errors.state"
                      :key="index"
                    >{{err}}</p>
                  </div>
                  <div class="col-md-12 form-group">
                    <h4>Office Details ({{ user.office }})</h4>
                    <hr />
                  </div>

                  <div class="col-md-6 form-group">
                    <label>Designation</label>
                    <input
                      type="text"
                      v-model="user.designation"
                      class="form-control"
                      placeholder="Designation *"
                    />
                    <p
                      class="text-danger text-center"
                      v-for="(err,index) in errors.designation"
                      :key="index"
                    >{{err}}</p>
                  </div>
                  <div class="col-md-6 form-group">
                    <label>Grade</label>
                    <input
                      type="text"
                      v-model="user.grade"
                      class="form-control"
                      placeholder="Grade *"
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <label>Date Of Birth</label>
                    <input type="date" v-model="user.dateofbirth" class="form-control" />
                    <p
                      class="text-danger text-center"
                      v-for="(err,index) in errors.dateofbirth"
                      :key="index"
                    >{{err}}</p>
                  </div>
                  <div class="col-md-6 form-group">
                    <label>Date Of First Appointment</label>
                    <input type="date" v-model="user.dateof1stapp" class="form-control" />
                    <p
                      class="text-danger text-center"
                      v-for="(err,index) in errors.dateof1stapp"
                      :key="index"
                    >{{err}}</p>
                  </div>
                  <div class="col-md-6 form-group">
                    <label>Date Of Pre Appointment</label>
                    <input type="date" v-model="user.dateofpreapp" class="form-control" />
                  </div>
                  <div class="col-md-6 form-group">
                    <label>Date Of Last Deployment</label>
                    <input type="date" v-model="user.dateoflastdep" class="form-control" />
                  </div>
                  <div class="col-md-6 form-group">
                    <label>Department</label>
                    <input
                      type="text"
                      v-model="user.office"
                      class="form-control"
                      placeholder="Office *"
                    />
                    <p
                      class="text-danger text-center"
                      v-for="(err,index) in errors.office"
                      :key="index"
                    >{{err}}</p>
                  </div>
                </div>

                <div class="col-md-12">
                  <h4>Life Assurance Death Beneficiaries</h4>
                  <hr />
                </div>
                <p
                  class="text-danger text-center"
                  v-for="(err,index) in errors.beneLength"
                  :key="index"
                >{{err}}</p>
                <p class="text-danger text-center">{{errors.perc}}</p>
                <div class="col-md-12" v-for="(item,index) in user.beneficiaries" :key="index">
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
                      <input
                        type="text"
                        v-model="user.beneficiaries[index].identification"
                        class="form-control"
                        placeholder="Beneficiary Identification *"
                      />
                      <p class="text-danger text-center">{{errors[`bene${index}identification`]}}</p>
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
                      <p class="text-danger text-center">{{errors[`bene${index}acc_name`]}}</p>
                    </div>
                    <div class="form-group col-md-4">
                      <label>Account Name</label>
                      <input
                        type="text"
                        v-model="user.beneficiaries[index].acc_name"
                        class="form-control"
                        placeholder="Beneficiary Account Name *"
                      />
                      <p class="text-danger text-center">{{errors[`bene${index}acc_name`]}}</p>
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
                  <div class="row">
                    <div class="form-group col-md-12">
                      <label>
                        <input type="checkbox" value="true" @change="setChecked($event)" /> I hereby nominate the following person(s) to recieve the folowing share or proportion of LASG group of life assurance benefit payable upon my death.
                      </label>
                    </div>
                  </div>
                  <div class="col-md-12" style="text-align: center;">
                    <button
                      type="submit"
                      @click="saveData()"
                      class="btn btn-primary btn-inline"
                    >Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
</template>
<script>
import fileupload from "../fileuploadmodal.vue";
export default {
  components: {
    FileUpload: fileupload
  },
  props: ["user", "errors"],
  data() {
    return {
      index_url: index_url,
      addFilesTo: "",
      ftitle: "",
      userFiles: [],
      showbox: false
    };
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
    setChecked(event) {
      if (event.target.checked) {
        this.user.signature = "1";
      } else {
        this.user.signature = "0";
      }
    },
    saveData() {
      this.$emit("saveData", this.user);
    },
    showBox(index) {
      this.showbox = true;
      this.userFiles = this.user.beneficiaries[index].files;
      this.addFilesTo = index;
    },
    addFiles(files) {
      this.user.beneficiaries[this.addFilesTo].files = files;
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
<style >
.user-file {
  height: 100px;
  object-fit: cover;
}
.card-title {
  width: 100%;
  text-align: center;
}

.card-title img {
  margin-top: 1%;
  margin-bottom: 1%;
  width: 25%;
  max-width: 120px;
  -webkit-animation: mover 2s infinite alternate;
  animation: mover 1s infinite alternate;
}
.v-dialog {
  height: 90% !important;
}
.card .card-header {
  padding: 10px;
}
.card-title p {
  margin-bottom: 0px;
}
@-webkit-keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-5px);
  }
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-5px);
  }
}
</style>
