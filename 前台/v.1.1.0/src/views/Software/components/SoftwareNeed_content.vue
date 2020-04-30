<template>
  <div class="center">
    <div class="vx-col lg:w-1/2 w-full">
      <vx-card>
        <div class="vx-row mb-base">
          <div class="vx-col sm:w-1/3 w-full">
            <span>
              <h4>姓名</h4>
            </span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full"
                      icon-pack="feather"
                      icon="icon-edit-2"
                      icon-after
                      placeholder="请输入真实姓名"
                      v-model="name" />
          </div>
        </div>

        <div class="vx-row mb-base">
          <div class="vx-col sm:w-1/3 w-full">
            <span>
              <h4>联系方式</h4>
            </span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full"
                      icon-pack="feather"
                      icon="icon-edit-2"
                      icon-after
                      placeholder="请输入QQ号"
                      v-model="qq" />
          </div>
        </div>

        <div class="vx-row mb-base">
          <div class="vx-col sm:w-1/3 w-full">
            <span>
              <h4>软件名称</h4>
            </span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full"
                      icon-pack="feather"
                      icon="icon-edit-2"
                      icon-after
                      placeholder="请输入您需要的软件名称"
                      v-model="videoname" />
          </div>
        </div>

        <div class="vx-row mb-base">
          <div class="vx-col sm:w-1/3 w-full">
            <span>
              <h4>软件描述</h4>
            </span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <div>
              <vs-textarea v-model="textarea"
                           counter="50"
                           :counter-danger.sync="counterDanger"
                           label="您可以指定需要的版本，或对其他要求进行描述"
                           height="100px" />
            </div>
          </div>
        </div>

        <div class="vx-row mb-base">
          <div class="vx-col sm:w-1/3 w-full">
            <span>
              <h4>备注：</h4>
            </span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <p>
              为了更加满足您的需求, 我们将进行人工接洽
            </p>
            <br>
            <p>
              我们将很快联系你
            </p>
          </div>
        </div>

        <div class="vx-row mb-base flex flex-col justify-between h-full">
          <div class="text-center mt-8 w-full">
            <div class="flex justify-around">
              <vs-button color="primary"
                         type="filled"
                         :disabled="!validateForm"
                         @click="send">提交</vs-button>
            </div>
          </div>
        </div>

      </vx-card>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  components: {
    StarRating
  },
  data () {
    return {
      name: '',
      qq: '',
      videoname: '',
      textarea: '',
      counterDanger: false,
    }
  },
  methods: {
    send () {
      const axios = require('axios').default
      axios.defaults.withCredentials = true

      axios({
        method: 'post',
        url: 'url/feedback/submit',
        data: {
          name: this.name,
          title: this.videoname,
          contact: this.qq,
          description: this.textarea,
        }
      })
        .then(function (response) {
          console.log(response);
          if (response.data["Status"] == "0") {
            this.$vs.notify({ title: '提交失败', text: response.data.Result['msg'], color: 'warning', icon: 'error' })
          }
          else {
            this.$vs.notify({ title: '提交成功', text: '感谢您的投稿，稍后我们会联系您', color: 'primary', icon: 'mail' })
          }
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        });

      this.name = ''
      this.qq = ''
      this.videoname = ''
      this.textarea = ''
    }
  },
  computed: {
    validateForm () {
      return this.name != '' && this.qq != '' && this.videoname != '' && this.textarea != '' === true;
    }
  },
}
</script>

<style>
.center {
  display: flex;
  justify-content: center;
}
</style>