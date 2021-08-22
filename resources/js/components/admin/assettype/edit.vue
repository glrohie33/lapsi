<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">Edit</h4>
    </div>
    <div class="card-content">
      <div class="card-body">
        <form class="form form-vertical" style="width:90%; margin:0px auto;">
          <div class="form-body">
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="first-name-vertical">Asset Type Name</label>
                  <input
                    type="text"
                    id="first-name-vertical"
                    class="form-control"
                    v-model="asset.name"
                    placeholder="role name"
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
              <div class="col-12">
                <div class="form-group">
                  <label for="first-name-vertical">Unique Fields</label>
                  <input
                    type="text"
                    id="first-name-vertical"
                    class="form-control"
                    v-model="asset.unique_field"
                    placeholder="Unique Field"
                    name="name"
                    required
                  />
                  <i
                    class="text-danger"
                    v-for="(error,index) in errors['unique_field']"
                    :key="index"
                  >{{error}}</i>
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="first-name-vertical">Assettype Fields/Column Names</label>
                  <textarea
                    type="text"
                    id="first-name-vertical"
                    class="form-control"
                    v-model="asset.fields"
                    placeholder="Fields/Columns"
                    name="name"
                    required
                  ></textarea>
                  <i
                    class="text-danger"
                    v-for="(error,index) in errors['fields']"
                    :key="index"
                  >{{error}}</i>
                  <span>NB:This are the field names/Column Names on the Excel sheets when uploading data for this Asset Type.Seperate the fields names/Column names by comma with</span>
                </div>
              </div>
              <h5 style="text-align:center;">Select Insurance Class</h5>
              <div class="row">
                <div class="col-md-3 form-group" v-for="(x,ind) in insuranceClasses" :key="ind">
                  <label>
                    <input
                      type="checkbox"
                      class="form"
                      v-model="asset.insurance_classes"
                      :value="x.id"
                    />
                    {{x.name}}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div class="col-12">
          <button
            type="submit"
            @click="editAssettype($event)"
            class="btn btn-primary mr-1 mb-1"
          >Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["asset"],
  data() {
    return {
      insuranceClasses: [],
      errors: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      var users = axios.get(`${index_url}/api/insuranceclass`).then(resp => {
        this.insuranceClasses = resp.data.insuranceclass;
      });
    },
    editAssettype(event) {
      var button = event.target;
      button.setAttribute("disabled", "true");
      this.errors = [];
      var data = setFormData(this.asset);
      data.append("_method", "PUT");
      axios
        .post(`${index_url}/api/assettype/${this.asset.id}`, data)
        .then(resp => {
          if (resp.data.status) {
            Swal.fire({
              title: "Assettype Added",
              text: "You have successfully Edit the asset type",
              icon: "success"
            });
            this.$emit("edited");
            button.removeAttribute("disabled");
          } else {
            this.errors = resp.data.errors;
            button.removeAttribute("disabled");
          }
        });
    }
  }
};
</script>
