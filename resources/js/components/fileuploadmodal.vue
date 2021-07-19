<template>
  <v-card style="width:100%; height:100%;">
    <v-card-title height="50px">Select Files</v-card-title>
    <v-card-subtitle height="40px">
      <v-tabs v-model="tab" background-color="transparent" color="basil">
        <v-tab href="#tab1">Upload file</v-tab>
        <v-tab href="#tab2">select File</v-tab>
      </v-tabs>
    </v-card-subtitle>
    <v-card-text style="height:calc(100% - 180px);">
      <v-tabs-items v-model="tab" height="100%">
        <v-tab-item value="tab1" height="100%">
          <v-card :outlined="outline" :tile="tile" style="height:100%;">
            <v-card-text id="box">
              <v-file-input
                v-model="files"
                color="deep-purple accent-4"
                counter
                label="File input"
                placeholder="Select your files"
                prepend-icon="mdi-paperclip"
                multiple
                outlined
                height="150px"
                :show-size="1000"
              >
                <template v-slot:selection="{ index, text }">
                  <v-chip v-if="index < 2" color="deep-purple accent-4" dark label small>{{ text }}</v-chip>

                  <span
                    v-else-if="index === 2"
                    class="overline grey--text text--darken-3 mx-2"
                  >+{{ files.length - 2 }} File(s)</span>
                </template>
              </v-file-input>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item value="tab2" height="100%">
          <v-card :outlined="outline" :tile="tile" height="100%">
            <v-card-text id="box">
              <div class="row">
                <div
                  class="col-md-3 col-sm-6 col-xs-6"
                  v-for="(file,index) in allFiles"
                  :key="index"
                >
                  <v-lazy style="width:100%;">
                    <label>
                      <img
                        max-width
                        v-if="file.file_type == 'image'"
                        :src="file.url"
                        class="f-img img-thumbnail"
                      />
                      <img
                        v-else
                        :src="`${index_url}/public/images/imagefile.png`"
                        class="f-img img-thumbnail"
                      />
                      <i>{{file.filename}}</i>
                      <input
                        type="checkbox"
                        class="form-control"
                        v-model="file.selected"
                        id="select-box"
                      />
                    </label>
                  </v-lazy>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card-text>
    <v-card-actions height="50px">
      <v-btn @click="save()">Select</v-btn>
      <v-btn>cancel</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: ["dialog", "title", "user", "subtitle", "inFiles"],
  data() {
    return {
      multiple: true,
      files: [],
      userFiles: [],
      allFiles: [],
      selectedFiles: [],
      tab: "tab2",
      outline: true,
      tile: true,
      index_url: index_url
    };
  },
  watch: {
    files: {
      handler() {
        if (this.files.length > 0) {
          this.upload();
        }
      }
    },
    inFiles: {
      handler() {
        this.allFiles = [];
        if (Array.isArray(this.inFiles)) {
          this.allFiles.push(...this.inFiles);
        }
        this.setFiles();
      }
    }
  },
  created() {
    console.log("here");
    if (Array.isArray(this.inFiles) && this.inFiles.length > 0) {
      this.allFiles.push(...this.inFiles);
    }
    this.getFiles();
  },
  methods: {
    upload() {
      var formdata = new FormData();
      for (var x in this.files) {
        formdata.append("files[]", this.files[x]);
      }
      formdata.append("user_id", this.user.id);
      var url = `${index_url}/api/files`;
      axios.post(url, formdata).then(resp => {
        this.files = [];
        var files = resp.data.files;
        if (resp.data.status == true) {
          files.forEach(file => {
            file.selected = true;
            var f = file;
            this.userFiles.unshift(f);
            this.allFiles.unshift(f);
          });
        }
      });
    },
    getFiles() {
      var url = `${index_url}/api/files?user_id=${this.user.id}`;
      axios.get(url).then(resp => {
        this.userFiles = resp.data.files;
        this.setFiles();
      });
    },
    setFiles() {
      var infiles = this.userFiles.filter(e => {
        var index = this.allFiles.findIndex(f => f.id == e.id);
        if (index < 0) {
          e.selected = false;
          return true;
        } else {
          return false;
        }
      });
      this.allFiles.push(...infiles);
    },
    save() {
      this.selectedFiles = this.allFiles.filter(file => file.selected == true);
      this.$set(this, "allFiles", []);
      this.$emit("save", this.selectedFiles);
    },
    cancel() {
      this.$emit("cancel");
    }
  }
};
</script>

<style scoped>
#box {
  height: calc(100vh - 273px);
  overflow-y: auto;
}

.f-img {
  height: 200px;
  width: 100%;
  object-fit: cover;
}

.v-input--selection-controls__input {
  position: absolute;
  top: 2px;
  right: 2px;
  z-index: 999;
}

#select-box {
  position: absolute;
  width: 1.6rem;
  top: 17px;
  right: 17px;
  height: 1.6rem;
}
</style>
