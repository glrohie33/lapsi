<template>
  <section class="page-users-view users-view" v-show="viewProfile">
    <div class="row">
      <!-- account start -->
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <div class="card-title">underwriter</div>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <h3>{{underwriter.registered_name}}</h3>
              </div>
              <div class="col-12 col-sm-9 col-md-6 col-lg-5">
                <table>
                  <tr>
                    <td class="font-weight-bold">Rc number</td>
                    <td>{{underwriter.rc_number}}</td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold">CEO</td>
                    <td>{{underwriter.ceo}}</td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold">City</td>
                    <td>{{underwriter.city}}</td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold">State</td>
                    <td>{{underwriter.state}}</td>
                  </tr>
                </table>
              </div>
              <div class="col-12 col-md-12 col-lg-5">
                <table class="ml-0 ml-sm-0 ml-lg-0">
                  <tr>
                    <td class="font-weight-bold">Phone</td>
                    <td>{{underwriter.phone}}</td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold">State</td>
                    <td>{{underwriter.state}}</td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold">address</td>
                    <td>{{underwriter.address}}</td>
                  </tr>
                </table>
              </div>
              <div class="col-12">
                <a class="btn btn-primary mr-1 btn-sm" v-if="permissions('user','update')">
                  <i class="feather icon-edit-1"></i> Edit
                </a>
                <button
                  class="btn btn-outline-danger btn-sm"
                  v-if="permissions('user','update') && underwriter.status == '0'"
                  @click="verify($event,'1',underwriter.id)"
                >
                  <i class="feather icon-user-check"></i> Approve
                </button>
                <button
                  class="btn btn-outline-danger btn-sm"
                  v-if="permissions('user','update') && underwriter.status == '1'"
                  @click="verify($event,'0',underwriter.id)"
                >
                  <i class="feather icon-user-x"></i> Unapprove
                </button>
                <button class="btn btn-outline-danger btn-sm" v-if="permissions('user','delete')">
                  <i class="feather icon-trash-2"></i> Delete
                </button>
                <button class="btn btn-outline-info btn-sm" @click="showList()">
                  <i class="feather icon-corner-up-left"></i> Back to list
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- account end -->
      <!-- information start -->
      <!-- information start -->
      <!-- social links end -->
      <!-- permissions start -->

      <!-- permissions end -->
    </div>
  </section>
</template>
<script>
export default {
  props: [data],
  data() {
    return;
  }
};
</script>
