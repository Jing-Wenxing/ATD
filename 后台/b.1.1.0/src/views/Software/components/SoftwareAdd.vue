<template>
  <div>
    <div class="centery ml-base mb-base">
      <h2>基本信息</h2>
    </div>

    <!-- 文案上传 -->
    <div class="center mb-base">
      <div class="vx-col lg:w-1/2 w-full">
        <div class="vx-row mb-base">
          <div class="vx-col lg:w-1/4 w-full centery">
            <div class="ml-base mr-base">
              <h4>软件名称</h4>
            </div>
          </div>

          <div class="vx-col lg:w-1/4 w-full">
            <vs-input v-validate="'required|max:15'"
                      data-vv-validate-on="blur"
                      class="inputx"
                      name="软件名称"
                      v-model="sw_Name" />
            <span class="text-danger text-sm">{{ errors.first('软件名称') }}</span>
          </div>

          <div class="vx-col lg:w-1/2 w-full centery">
            <div class="ml-base mr-base">
              <p>不要超过15个字</p>
            </div>
          </div>
        </div>

        <div class="vx-row mb-6">
          <div class="vx-col lg:w-1/4 w-full centery">
            <div class="ml-base mr-base">
              <h4>软件介绍</h4>
            </div>
          </div>

          <div class="vx-col lg:w-1/2 w-full">
            <vs-textarea v-model="sw_Intro"
                         counter="50"
                         label="请简洁详细的描述软件"
                         height="125px" />
          </div>
        </div>

        <div class="vx-row mb-4">
          <div class="vx-col lg:w-1/4 w-full mt-2">
            <div class="ml-base mr-base">
              <h4>软件分类</h4>
            </div>
          </div>

          <div class="vx-col lg:w-1/2 w-full">
            <v-select v-model="sw_class"
                      :options="options"
                      :dir="$vs.rtl ? 'rtl' : 'ltr'" /><br>
          </div>
        </div>

        <div class="vx-row mb-base">
          <div class="vx-col lg:w-1/4 w-full centery">
            <div class="ml-base mr-base">
              <h4>软件说明</h4>
            </div>
          </div>

          <div class="vx-col lg:w-1/4 w-full">
            <vs-input class="inputx"
                      v-model="sw_Explain" />
          </div>

          <div class="vx-col lg:w-1/2 w-full centery">
            <div class="ml-base mr-base">
              <p>引入博文地址</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="centery ml-base mb-base">
      <h2>文件上传</h2>
      <span class="ml-base">（要求使用 450 * 250 分辨率图片）</span>
    </div>

    <!-- 文件传输 -->
    <div class="center mb-base">
      <div class="vx-col lg:w-1/2 w-full">
        <div class="vx-row mb-base">
          <div class="vx-col lg:w-1/4 w-full centery">
            <div class="ml-base mr-base">
              <vs-icon icon="insert_photo"
                       size="50px"
                       color="primary"></vs-icon>
            </div>
          </div>

          <div class="vx-col lg:w-1/2 w-full">
            <div class="vx-row mb-4">
              <div class="vx-col lg:w-1/1 w-full centery">
                <input type="file"
                       id="image"
                       multiple>
              </div>
            </div>

            <div class="vx-row">
              <div class="vx-col lg:w-1/1 w-full">
                <div class="flex justify-between">
                  <vs-progress :percent="schedule_value_image"
                               :indeterminate="schedule_image"
                               color="success">primary</vs-progress>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="vx-row">
          <div class="vx-col lg:w-1/4 w-full centery">
            <div class="ml-base mr-base">
              <vs-icon icon="apps"
                       size="50px"
                       color="primary"></vs-icon>
            </div>
          </div>

          <div v-if="sw_Temp"
               class="vx-col lg:w-1/2 w-full">
            <div class="vx-row mb-4">
              <div class="vx-col lg:w-1/2 w-full centery">
                <input type="file"
                       id="video"
                       multiple>
              </div>
              <div class="vx-col lg:w-1/2 w-full centery">
                <vs-input class="inputx"
                          name="软件作者"
                          v-model="sw_Temp_link" />
              </div>
            </div>

            <div class="vx-row">
              <div class="vx-col lg:w-1/1 w-full">
                <div class="flex justify-between">
                  <vs-progress :percent="schedule_value_video"
                               :indeterminate="schedule_video"
                               color="success">primary</vs-progress>
                </div>
              </div>
            </div>
          </div>

          <div v-else
               class="vx-col lg:w-1/2 w-full centery mb-2">
            <vs-input class="inputx"
                      name="软件作者"
                      v-model="sw_Temp_link" />
          </div>

          <div class="vx-col lg:w-1/4 w-full centery">
            <vs-switch v-model="sw_Temp" />
          </div>
        </div>
      </div>
    </div>

    <div class="center mb-base">
      <vs-button ref="loadableButton"
                 id="update-loading"
                 class="vs-con-loading__container"
                 color="primary"
                 vslor="primary"
                 type="filled"
                 :disabled="!validateForm"
                 @click="update_file">上传</vs-button>
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  components: {
    'v-select': vSelect,
  },
  data () {
    return {
      // 选择分类
      options: [
        { id: 1, label: 'Code' },
        { id: 3, label: 'Tools' },
        { id: 2, label: 'Other' },
      ],
      // 加载进度
      schedule_image: false,
      schedule_video: false,
      // 上传进度
      schedule_value_image: 0,
      schedule_value_video: 0,
      // 上传文案
      sw_Name: '',
      sw_Intro: '',
      sw_class: '',
      sw_Cover_img: '',
      sw_Location: '',
      sw_Explain: '',
      sw_Temp_link: '',
      sw_Temp: true,
      sw_Tempx: 0,
    }
  },
  computed: {
    validateForm () {
      return !this.errors.any() && this.sw_Name != '' && this.sw_Intro != '' && this.sw_class != '' === true;
    }
  },
  methods: {
    // 上传
    update_file () {
      // 上传图片文件
      if (document.querySelector("#image").files.length) {
        // 上传软件地址
        if (this.sw_Temp == false) {
          // 执行链接上传
          if (this.sw_Temp_link != '') {
            // 上传加载
            this.$vs.loading({
              background: 'primary',
              color: '#fff',
              container: "#update-loading",
              scale: 0.45
            })
            // 上传图片实体
            this.sw_Cover_img = document.querySelector("#image").files[0].name
            this.uploadCover(this.sw_class.label, this.sw_Cover_img)
            this.update()
          }
          // 未输入连接
          else if (this.sw_Temp_link == '') {
            this.$vs.notify({ title: '警告', text: '请先输入链接', color: 'warning', icon: 'error_outline' })
          }
        }
        // 上传软件文件
        else {
          // 执行文件上传
          if (document.querySelector("#video").files.length) {
            // 上传加载
            this.$vs.loading({
              background: 'primary',
              color: '#fff',
              container: "#update-loading",
              scale: 0.45
            })
            // 上传图片实体
            this.sw_Cover_img = document.querySelector("#image").files[0].name
            this.uploadCover(this.sw_class.label, this.sw_Cover_img)
            // 上传软件实体
            this.sw_Location = document.querySelector("#video").files[0].name
            this.uploadFile(this.sw_class.label, this.sw_Location)
          }
          // 未选择文件
          else {
            this.$vs.notify({ title: '警告', text: '请先选择文件', color: 'warning', icon: 'error_outline' })
          }
        }
      }
      else {
        this.$vs.notify({ title: '警告', text: '请先选择封面', color: 'warning', icon: 'error_outline' })
      }
    },
    // 图片URL
    uploadCover (vclass, vname) {
      const axios = require('axios').default
      axios.defaults.withCredentials = true

      axios({
        method: 'get',
        url: 'url/software/uploadCover?objectName=' + vclass + '/' + vname,
      })
        .then((response) => {
          // 开始加载进度条
          this.schedule_image = true
          // 上传文件
          this.upload_image(response.data.Result)
        })
        .catch(function (error) {
          console.log(error)
        });
    },
    // 图片上传
    upload_image (url) {
      var files = document.querySelector("#image").files;
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        fetch(url, {
          method: 'PUT',
          body: file
        }).then((response) => {
          this.schedule_image = false
          this.schedule_value_image = 100
          response
        }).catch((e) => {
          console.error(e);
        });
      }
    },
    // 软件URL
    uploadFile (vclass, vname) {
      const axios = require('axios').default
      axios.defaults.withCredentials = true

      axios({
        method: 'get',
        url: 'url/software/uploadFile?objectName=' + vclass + '/' + vname,
      })
        .then((response) => {
          // 开始加载进度条
          this.schedule_video = true
          // 上传文件
          this.upload_video(response.data.Result)
        })
        .catch(function (error) {
          console.log(error)
        });
    },
    // 软件上传
    upload_video (url) {
      var files = document.querySelector("#video").files;
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        fetch(url, {
          method: 'PUT',
          body: file
        }).then((response) => {
          this.schedule_video = false
          this.schedule_value_video = 100
          this.update()
          response
        }).catch((e) => {
          console.error(e);
        });
      }
    },
    // 数据上传
    update () {
      if (this.sw_Location == '') {
        this.sw_Tempx = 1
      }
      else {
        if (this.sw_Temp_link == '')
          this.sw_Tempx = 0
        else
          this.sw_Tempx = 1
      }

      const axios = require('axios').default
      axios.defaults.withCredentials = true

      axios({
        method: 'post',
        url: 'url/software/update',
        data: {
          Name: this.sw_Name,
          Intro: this.sw_Intro,
          Software_class: this.sw_class.label,
          Cover_img: this.sw_Cover_img,
          Location: this.sw_Location,
          Explain: this.sw_Explain,
          Temp_link: this.sw_Temp_link,
          Temp: this.sw_Tempx,
        }
      })
        .then((response) => {
          if (response.data.Status == 1) {
            this.$vs.loading.close("#update-loading > .con-update-loading")
            this.$vs.notify({ title: '上传成功', text: '操作已成功完成', color: 'success', icon: 'check_box' })
            setTimeout(() => {
              location.reload()
            }, 500);
          }
          else {
            this.$vs.notify({ title: '操作错误', text: response.data.Result.msg, color: 'warning', icon: 'check_box' })
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
}
</script>


<style>
.ss {
  border: 2px #000 solid;
}

.center {
  display: flex;
  justify-content: center;
}

.centery {
  display: flex;
  align-items: center;
}
</style>