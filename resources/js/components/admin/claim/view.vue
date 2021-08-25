<template>
  <section class="page-claims-view claims-view">
    <div class="row">
      <!-- account start -->
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <div class="card-title">Claim Detials</div>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <h3>{{claim.agency_name}}</h3>
              </div>
              <div class="col-12 col-sm-9 col-md-6 col-lg-6">
                <table>
                  <tr>
                    <td class="font-weight-bold">Policy ID</td>
                    <td>{{claim.policy_id}}</td>
                  </tr>

                  <tr>
                    <td class="font-weight-bold">Claim Class</td>
                    <td>{{claim.claim_class_name}}</td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold">Claim Type</td>
                    <td>{{claim.claim_type_name}}</td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold">Claim Value</td>
                    <td>{{claim.claim_value}}</td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold">Claim Location</td>
                    <td>{{claim.claim_location}}</td>
                  </tr>
                </table>
              </div>
              <div class="col-12 col-md-12 col-lg-6">
                <table class="ml-0 ml-sm-0 ml-lg-0">
                  <tr>
                    <td class="font-weight-bold">Claimant Name</td>
                    <td>{{claim.claimant_name}}</td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold">Claimant Email</td>
                    <td>{{claim.claimant_email}}</td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold">Claimant Phone</td>
                    <td>{{claim.claimant_phone}}</td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold">Claimant Phone</td>
                    <td>{{claim.claimant_phone}}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-12 col-md-12 col-lg-6">
                <table class="ml-0 ml-sm-0 ml-lg-0">
                  <tr>
                    <td class="font-weight-bold">Contact Name</td>
                    <td>{{claim.contact_name}}</td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold">Contact Email</td>
                    <td>{{claim.contact_email}}</td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold">Contact Phone</td>
                    <td>{{claim.contact_phone}}</td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold">Claimant Phone</td>
                    <td>{{claim.claimant_phone}}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-12 col-md-12">
                <table class="ml-0 ml-sm-0 ml-lg-0">
                  <tr>
                    <td class="font-weight-bold">Claim Details</td>
                    <td>{{claim.contact_details}}</td>
                  </tr>
                </table>
                <div class="row">
                  <div
                    class="col-md-2 col-sm-6 col-xs-6"
                    v-for="(file,i) in getFiles(claim.files)"
                    :key="i"
                  >
                    <img
                      v-if="file.file_type == 'image'"
                      :src="file.url"
                      alt
                      style="width:100%;height:100px;object-fit:cover;"
                    />
                  </div>
                  <div class="col-12">
                    <textarea class="form-control" rows="5" v-model="claim.note"></textarea>
                  </div>
                </div>
              </div>

              <component :is="options" @showList="showList" @verify="verify"></component>
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
</template>
<script>
export default {
  props: ["claim"],
  data() {
    return {};
  },
  computed: {
    options() {
      var html = "";
      switch (this.claim.status) {
        case 0:
        case 2:
          html += `<button
                  class="btn btn-outline-danger btn-sm"
                  @click="verify($event,1)"
                >
                  <i class="feather icon-claim-check"></i> Approve
                </button>
                <button
                  class="btn btn-outline-danger btn-sm"
                  @click="verify($event,2)"
                >
                  <i class="feather icon-claim-x"></i> Unapprove
                </button>`;
          break;
        case 1:
          html += `<button
                  class="btn btn-outline-danger btn-sm"
                  @click="verify($event,4)"
                >Processed</button>`;
          break;
        case 4:
          html += `<button
                  class="btn btn-outline-danger btn-sm"
                  @click="verify($event,5)"
                >Paid</button>`;
          break;
      }
      return {
        template: `<div>${html}<button class="btn btn-outline-info btn-sm" @click="showList()">
                  <i class="feather icon-corner-up-left"></i> Back to list
                </button></div>`,

        methods: {
          showList() {
            this.$emit("showList");
          },
          verify(event, code) {
            this.$emit("verify", code);
          }
        }
      };
    }
  },
  methods: {
    showList() {
      this.$emit("close", this.claim);
    },
    getFiles(files) {
      if (typeof files != "object") {
        return JSON.parse(files);
      } else {
        return files;
      }
    },
    verify(value) {
      var formdata = new FormData();
      formdata.append("id", this.claim.id);
      formdata.append("status", value);
      formdata.append("note", this.claim.note);
      this.claim.status = value;
      axios.post(`${index_url}/api/claims/verify`, formdata).then(resp => {
        if (resp.data.status) {
          Swal.fire({
            title: "Claim Status Updated",
            text: "You have successfully Update The Claim",
            icon: "success"
          });
        } else {
          Swal.fire({
            title: "Claim Status Not Updated",
            text: "Sorry could not Update Claim Status",
            icon: "error"
          });
        }
      });
    }
  }
};
</script>

<style  scoped>
.claims-view table {
  width: 100%;
}
</style>
