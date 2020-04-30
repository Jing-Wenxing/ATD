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
              <h4>视频名称</h4>
            </div>
          </div>

          <div class="vx-col lg:w-1/4 w-full">
            <vs-input v-validate="'required|max:10'"
                      data-vv-validate-on="blur"
                      class="inputx"
                      name="视频名称"
                      v-model="video_Name" />
            <span class="text-danger text-sm">{{ errors.first('视频名称') }}</span>
          </div>

          <div class="vx-col lg:w-1/2 w-full centery">
            <div class="ml-base mr-base">
              <p>不要超过10个字</p>
            </div>
          </div>
        </div>

        <div class="vx-row mb-base">
          <div class="vx-col lg:w-1/4 w-full centery">
            <div class="ml-base mr-base">
              <h4>视频介绍</h4>
            </div>
          </div>

          <div class="vx-col lg:w-1/4 w-full">
            <vs-input v-validate="'required|max:15'"
                      data-vv-validate-on="blur"
                      class="inputx"
                      name="视频介绍"
                      v-model="video_Intro" />
            <span class="text-danger text-sm">{{ errors.first('视频介绍') }}</span>
          </div>

          <div class="vx-col lg:w-1/2 w-full centery">
            <div class="ml-base mr-base">
              <p>不要超过15个字</p>
            </div>
          </div>
        </div>

        <div class="vx-row mb-base">
          <div class="vx-col lg:w-1/4 w-full centery">
            <div class="ml-base mr-base">
              <h4>视频作者</h4>
            </div>
          </div>

          <div class="vx-col lg:w-1/4 w-full">
            <vs-input v-validate="'required|max:10'"
                      data-vv-validate-on="blur"
                      class="inputx"
                      name="视频作者"
                      v-model="video_Author" />
            <span class="text-danger text-sm">{{ errors.first('视频作者') }}</span>
          </div>

          <div class="vx-col lg:w-1/2 w-full centery">
            <div class="ml-base mr-base">
              <p>例：彭琛老师、18计科一班何铭康</p>
            </div>
          </div>
        </div>

        <div class="vx-row mb-3">
          <div class="vx-col lg:w-1/4 w-full mt-2">
            <div class="ml-base mr-base">
              <h4>视频分类</h4>
            </div>
          </div>

          <div class="vx-col lg:w-1/2 w-full">
            <v-select v-model="video_Video_class"
                      :options="options"
                      :dir="$vs.rtl ? 'rtl' : 'ltr'" /><br>
          </div>
        </div>

        <div class="vx-row mb-base">
          <div class="vx-col lg:w-1/4 w-full centery">
            <div class="ml-base mr-base">
              <h4>白嫖链接</h4>
            </div>
          </div>

          <div class="vx-col lg:w-1/4 w-full">
            <vs-input class="inputx"
                      name="视频作者"
                      :disabled="!video_Temp"
                      v-model="video_Temp_link" />
          </div>

          <div class="vx-col lg:w-1/2 w-full centery">
            <div class="ml-base mr-base">
              <vs-switch v-model="video_Temp" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="centery ml-base mb-base">
      <h2>文件上传</h2>
      <span class="ml-base">（要求使用 750 * 525 分辨率图片）</span>
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
              <vs-icon icon="videocam"
                       size="50px"
                       color="primary"></vs-icon>
            </div>
          </div>

          <div class="vx-col lg:w-1/2 w-full">
            <div class="vx-row mb-4">
              <div class="vx-col lg:w-1/1 w-full centery">
                <input type="file"
                       id="video"
                       multiple>
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
        { id: 1, label: 'Base' },
        { id: 3, label: 'Practice' },
        { id: 2, label: 'Other' },
      ],
      // 加载进度
      schedule_image: false,
      schedule_video: false,
      // 上传进度
      schedule_value_image: 0,
      schedule_value_video: 0,
      // 上传文案
      video_Name: '',
      video_Intro: '',
      video_Author: '',
      video_Video_class: '',
      video_Cover_img: '',
      video_Location: '',
      video_Temp_link: '',
      video_Temp: false,
    }
  },
  computed: {
    validateForm () {
      return !this.errors.any() && this.video_Name != '' && this.video_Intro != '' && this.video_Author != '' && this.video_Video_class != '' === true;
    }
  },
  methods: {
    // 上传
    update_file () {
      if (document.querySelector("#image").files.length &&
        document.querySelector("#video").files.length) {
        // 上传加载
        this.$vs.loading({
          background: 'primary',
          color: '#fff',
          container: "#update-loading",
          scale: 0.45
        })
        // 获取文件名
        this.video_Cover_img = document.querySelector("#image").files[0].name
        this.video_Location = document.querySelector("#video").files[0].name
        // 上传函数
        this.uploadCover(this.video_Video_class.label, this.video_Cover_img)
      }
      else
        this.$vs.notify({ title: '警告', text: '请先选择文件', color: 'warning', icon: 'error_outline' })
    },
    // 图片URL
    uploadCover (vclass, vname) {
      const axios = require('axios').default
      axios.defaults.withCredentials = true

      axios({
        method: 'get',
        url: 'url/video/uploadCover?objectName=' + vclass + '/' + vname,
      })
        .then((response) => {
          if (response.data.Status == 1) {
            // 开始加载进度条
            this.schedule_image = true
            // 上传文件
            this.upload_image(response.data.Result)
          }
          else {
            this.$vs.notify({ title: '操作错误', text: response.data.Result.msg, color: 'warning', icon: 'check_box' })
          }
        })
        .catch(function (error) {
          console.log(error)
        });
    },
    // 视频URL
    uploadFile (vclass, vname) {
      const axios = require('axios').default
      axios.defaults.withCredentials = true

      axios({
        method: 'get',
        url: 'url/video/uploadFile?objectName=' + vclass + '/' + vname,
      })
        .then((response) => {
          if (response.data.Status == 1) {
            // 开始加载进度条
            this.schedule_video = true
            // 上传文件
            this.upload_video(response.data.Result)
          }
          else {
            this.$vs.notify({ title: '操作错误', text: response.data.Result.msg, color: 'warning', icon: 'check_box' })
          }
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
          this.uploadFile(this.video_Video_class.label, this.video_Location)
          response
        }).catch((e) => {
          console.error(e);
        });
      }
    },
    // 视频上传
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
      const axios = require('axios').default
      axios.defaults.withCredentials = true

      axios({
        method: 'post',
        url: 'url/video/update',
        data: {
          Name: this.video_Name,
          Intro: this.video_Intro,
          Author: this.video_Author,
          Video_class: this.video_Video_class.label,
          Cover_img: this.video_Cover_img,
          Location: this.video_Location,
          Temp_link: this.video_Temp_link,
          Temp: this.video_Temp == true ? "1" : "0",
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