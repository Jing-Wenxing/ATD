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
              <h4>公告内容</h4>
            </div>
          </div>

          <div class="vx-col lg:w-1/2 w-full">
            <vs-input v-validate="'required|max:15'"
                      data-vv-validate-on="blur"
                      class="inputx"
                      name="公告内容"
                      v-model="update_name" />
            <span class="text-danger text-sm">{{ errors.first('公告内容') }}</span>
          </div>

          <div class="vx-col lg:w-1/4 w-full centery">
            <div class="ml-base mr-base">
              <p>不要超过15个字</p>
            </div>
          </div>
        </div>

        <div class="vx-row mb-base">
          <div class="vx-col lg:w-1/4 w-full centery">
            <div class="ml-base mr-base">
              <h4>链接</h4>
            </div>
          </div>

          <div class="vx-col lg:w-1/2 w-full">
            <vs-input class="inputx"
                      name="引用链接"
                      v-model="update_link" />
          </div>

          <div class="vx-col lg:w-1/4 w-full centery">
            <div class="ml-base mr-base">
              <p>请输入正确的链接</p>
            </div>
          </div>
        </div>

        <div class="vx-row mb-base">
          <div class="vx-col lg:w-1/4 w-full centery">
            <div class="ml-base mr-base">
              <h4>展示</h4>
            </div>
          </div>

          <div class="vx-col lg:w-3/4 w-full">
            <vs-radio class="ml-base mr-base"
                      v-model="update_display"
                      vs-name="update_display"
                      vs-value="展示">展示</vs-radio>
            <vs-radio class="mr-base"
                      color="danger"
                      v-model="update_display"
                      vs-name="update_display"
                      vs-value="不展示">不展示</vs-radio>
          </div>
        </div>
      </div>
    </div>

    <div class="centery ml-base mb-base">
      <h2>文件上传</h2>
      <span class="ml-base">（要求使用 1980 * 750 分辨率图片）</span>
    </div>

    <!-- 文件传输 -->
    <div class="center mb-base">
      <div class="vx-col lg:w-1/2 w-full">
        <div class="vx-row">
          <div class="vx-col lg:w-1/4 w-full centery">
            <div class="ml-base mr-base">
              <vs-icon icon="insert_photo"
                       size="50px"
                       color="primary"></vs-icon>
            </div>
          </div>

          <!-- 这里是视频的iconvideocam -->
          <div class="vx-col lg:w-1/2 w-full">
            <div class="vx-row mb-4">
              <div class="vx-col lg:w-1/1 w-full centery">
                <input type="file"
                       id="selector"
                       multiple>
              </div>
            </div>

            <div class="vx-row">
              <div class="vx-col lg:w-1/1 w-full">
                <div class="flex justify-between">
                  <vs-progress :percent="schedule_value"
                               :indeterminate="schedule"
                               color="success">primary</vs-progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="center mb-base">
      <vs-button id="update-loading"
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
export default {
  data () {
    return {
      // 加载进度
      schedule: false,
      // 上传进度
      schedule_value: 0,
      // 文案上传信息
      update_name: '',
      update_location: '',
      update_display: '不展示',
      update_link: '',
    }
  },
  computed: {
    validateForm () {
      return !this.errors.any() && this.update_name != '' && this.update_display != '' === true;
    }
  },
  methods: {
    // 文件上传
    update_file () {
      if (document.querySelector("#selector").files.length) {
        // 上传加载
        this.$vs.loading({
          background: 'primary',
          color: '#fff',
          container: "#update-loading",
          scale: 0.45
        })
        // 获取文件名
        this.update_location = document.querySelector("#selector").files[0].name
        // 文件上传URL获取
        const axios = require('axios').default
        axios.defaults.withCredentials = true

        axios({
          method: 'get',
          url: 'url/image/upload?objectName=' + this.update_location,
        })
          .then((response) => {
            if (response.data.Status == 1) {
              // 开始加载进度条
              this.schedule = true
              // 上传文件
              this.upload(response.data.Result)
            }
            else {
              this.$vs.notify({ title: '操作错误', text: response.data.Result.msg, color: 'warning', icon: 'check_box' })
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      else
        this.$vs.notify({ title: '警告', text: '请先选择文件', color: 'warning', icon: 'error_outline' })
    },
    upload (url) {
      var files = document.querySelector("#selector").files;
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        fetch(url, {
          method: 'PUT',
          body: file
        }).then((response) => {
          this.schedule = false
          this.schedule_value = 100
          this.update()
          response
        }).catch((e) => {
          console.error(e);
        });
      }
    },
    // 文案上传
    update () {
      const axios = require('axios').default
      axios.defaults.withCredentials = true

      axios({
        method: 'post',
        url: 'url/image/update',
        data: {
          Name: this.update_name,
          Location: this.update_location,
          Display: this.update_display == '展示' ? "1" : "0",
          Link: this.update_link,
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
    },
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