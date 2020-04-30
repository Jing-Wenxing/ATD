<template>
  <div class="center">
    <div class="vx-col lg:w-3/5 w-full">
      <vx-card>
        <div class="vx-row hc mb-8">
          <div class="vx-col md:w-1/4 sm:w-1/1 w-full center">
            <h4>用户名称:</h4>
          </div>

          <div class="vx-col md:w-1/2 sm:w-3/4 w-full centerl">
            <div class="vx-row">
              <div class="vx-col lg:w-1/1 w-full">
                <div class="flex justify-between">
                  <strong>{{ this.username }}</strong>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="vx-col md:w-1/4 sm:w-1/1 w-full center">
            <vs-avatar size="70px"
                       class="mr-4 mb-4" />
          </div>

          <div class="vx-col md:w-1/2 sm:w-3/4 w-full centerl">
            <div class="vx-row">
              <div class="vx-col lg:w-1/1 w-full">
                <div class="flex justify-between">
                  <strong>{{ this.username }}</strong>
                  <span>ATD会员</span>
                </div>
              </div>
            </div>

            <div class="vx-row">
              <div class="vx-col lg:w-1/1 w-full">
                <vs-progress :height="8"
                             :percent="this.progress(this.experience)"
                             color="primary"></vs-progress>
              </div>
            </div>

            <div class="vx-row">
              <div class="vx-col lg:w-1/1 w-full">
                <div class="flex justify-between">
                  <strong>LV{{ this.level(this.experience) }}</strong>
                  <span>{{ this.experiences(this.experience) }} / {{ this.level_experiences(this.experience) }}</span>
                </div>
              </div>
            </div>
          </div> -->
        </div>
        <!-- <vs-divider /> -->
        <!-- <div class="vx-row hc mb-base">
          <div class="vx-col sm:w-1/1 w-full">
            <vs-icon icon="security"
                     size="small"></vs-icon>
            <span class="title">账号安全</span>
          </div>
        </div> -->
        <div class="vx-row hc">
          <div class="vx-col sm:w-1/4 w-full centerx mb-8">
            <h4>注册时间:</h4>
          </div>

          <div class="vx-col sm:w-3/4 w-full mb-8">
            <h5>{{ this.user_registered | formatDate }}</h5>
          </div>
        </div>
        <div class="vx-row hc">
          <div class="vx-col sm:w-1/4 w-full centerx mb-6">
            <h4>我的邮箱:</h4>
          </div>

          <div class="vx-col sm:w-3/4 w-full mb-6">
            <div class="text-center w-full">
              <div class="flex justify-between hc">
                <h5>{{ this.email }}</h5>

                <!-- <vs-button color="warning"
                           type="border">未验证</vs-button> -->
              </div>
            </div>
          </div>
        </div>
        <div class="vx-row hc">
          <div class="vx-col sm:w-1/4 w-full centerx mb-6">
            <h4>我的密码:</h4>
          </div>

          <div class="vx-col sm:w-3/4 w-full mb-6">

            <div class="vx-col sm:w-1/2 w-full">
              <vs-button color="primary"
                         type="border"
                         @click="change_password">修改密码</vs-button>
            </div>
          </div>
        </div>
      </vx-card>
    </div>

    <vs-popup v-show=popupActive
              title="请修改您的密码"
              button-close-hidden>
      <div class="vx-row mb-6 center">
        <div class="vx-col sm:w-2/3 w-full">
          <vs-input v-validate="'required|min:8|max:16'"
                    data-vv-validate-on="blur"
                    placeholder="密码"
                    ref="password"
                    type="password"
                    data-vv-as="第一次密码"
                    name="密码"
                    icon-no-border
                    icon="icon icon-lock"
                    icon-pack="feather"
                    v-model="password"
                    class="w-full mt-6" />
          <span class="text-danger text-sm">{{ errors.first('密码') }}</span>

          <vs-input v-validate="'min:8|max:16|confirmed:password'"
                    data-vv-validate-on="blur"
                    placeholder="确认密码"
                    type="password"
                    data-vv-as="第二次密码"
                    name="确认密码"
                    icon-no-border
                    icon="icon icon-lock"
                    icon-pack="feather"
                    v-model="password2"
                    class="w-full mt-6" />
          <span class="text-danger text-sm">{{ errors.first('确认密码') }}</span>
          <br>
          <p>注：您真的确定修改您的密码吗</p>
        </div>
      </div>
      <div class="vx-row">
        <div class="text-center w-full">
          <div class="flex justify-between px-8">
            <vs-button color="primary"
                       type="filled"
                       :disabled="!validateForm"
                       @click="change_password_yes">确认</vs-button>
            <vs-button color="danger"
                       type="filled"
                       @click="change_password_no">取消</vs-button>
          </div>
        </div>
      </div>
    </vs-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 是否登录
      islogin: true,
      popupActive: false,
      username: '',
      user_registered: '',
      email: '',
      password: '',
      password2: '',
      experience: 200,
    }
  },
  computed: {
    validateForm () {
      return !this.errors.any() && this.password != '' && this.password2 != '' === true;
    }
  },
  methods: {
    usermsg () {
      const axios = require('axios').default
      axios.defaults.withCredentials = true

      axios({
        method: 'get',
        url: 'url/user/profile',
      })
        .then((response) => {
          this.username = response.data.Result['username']
          this.user_registered = response.data.Result['user_registered']
          this.email = response.data.Result['email']
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    change_password () {
      this.popupActive = true
    },
    change_password_yes () {
      const axios = require('axios').default
      axios.defaults.withCredentials = true

      axios({
        method: 'post',
        url: 'url/user/alterPass',
        data: {
          newpass: this.password,
        }
      })
        .then(function (response) {
          console.log(response);
          if (response.data["Status"] == "0") {
            this.$vs.notify({ title: '修改失败', text: response.data.Result['msg'], color: 'warning', icon: 'error' })
          }
          else {
            this.$vs.notify({ title: '修改成功', text: '请记住您的新密码哟', color: 'success', icon: 'check_box' })
          }
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        });
      this.password = ''
      this.password2 = ''
      this.popupActive = false
    },
    change_password_no () {
      this.password = ''
      this.password2 = ''
      this.popupActive = false
    },
    level (experience) {
      experience += 1
      var levels = [100, 233, 404, 996, 1024]
      for (let i = 0; i < levels.length; i++) {
        if (experience > levels[i]) {
          experience -= levels[i]
        }
        else {
          return i
        }
      }
    },
    experiences (experience) {
      var levels = [100, 233, 404, 996, 1024]
      for (let i = 0; i < levels.length; i++) {
        if (experience > levels[i]) {
          experience -= levels[i]
        }
        else {
          return experience
        }
      }
    },
    level_experiences (experience) {
      var levels = [100, 233, 404, 996, 1024]
      for (let i = 0; i < levels.length; i++) {
        if (experience > levels[i]) {
          experience -= levels[i]
        }
        else {
          return levels[i]
        }
      }
    },
    progress (experience) {
      var levels = [100, 233, 404, 996, 1024]
      for (let i = 0; i < levels.length; i++) {
        if (experience > levels[i]) {
          experience -= levels[i]
        }
        else {
          return Math.floor(experience / levels[i] * 100)
        }
      }
    },
  },
  filters: {
    formatDate: function (value) {
      var date = new Date(value * 1);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = date.getDate();
      return Y + M + D;
    }
  },
  created () {
    this.usermsg()
  }
}
</script>


<style>
.main {
  display: block;
}

.center {
  display: flex;
  justify-content: center;
}

.centerx {
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 575px) {
  .centerx {
    display: flex;
    justify-content: left;
  }
}

@media screen and (max-width: 575px) {
  .centerl {
    width: 65% !important;
  }

  .centerr {
    width: 35% !important;
  }
}

.hc {
  align-items: center;
  display: flex;
}

.title {
  margin-left: 15px;
  font-size: 1.25rem;
}
</style>