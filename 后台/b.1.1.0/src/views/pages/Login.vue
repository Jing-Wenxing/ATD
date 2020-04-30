<template>
  <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
       id="page-login">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body"
             class="full-page-bg-color">
          <div class="vx-row no-gutter justify-center items-center">

            <div class="vx-col hidden lg:block lg:w-1/2">
              <img src="@/assets/images/pages/login.png"
                   alt="login"
                   class="mx-auto">
            </div>

            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="p-8 login-tabs-container">

                <div class="vx-card__title mb-4">
                  <div class="vx-row no-gutter">
                    <div class="vx-col hidden lg:block lg:w-1/2">
                      <h4 class="mb-4">登录</h4>
                    </div>
                  </div>
                  <p>亲爱的管理员, 请登录您的账号</p>
                </div>

                <div>
                  <vs-input name="username"
                            icon-no-border
                            icon="icon icon-user"
                            icon-pack="feather"
                            placeholder="用户名"
                            v-model="username"
                            class="w-full" />

                  <vs-input type="password"
                            name="password"
                            icon-no-border
                            icon="icon icon-lock"
                            icon-pack="feather"
                            placeholder="密码"
                            v-model="password"
                            class="w-full mt-6" />

                  <div class="ver">
                    <vs-input type="verification"
                              name="verification"
                              icon-no-border
                              icon="icon icon-book-open"
                              icon-pack="feather"
                              placeholder="验证码"
                              v-model="verification"
                              class="w-full mt-6" />

                    <vx-tooltip text="点击刷新验证码"
                                position="bottom">
                      <div class="veri"
                           @click="refimg_get">
                        <img :src="imgurl">
                      </div>
                    </vx-tooltip>
                  </div>

                  <vs-button class="float-right mt-6 mb-8"
                             type="border"
                             :disabled="!validateForm"
                             @click="login_get">登录</vs-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: "",
      password: "",
      verification: "",
      checkbox_remember_me: false,
      imgurl: this.refimg_get(),
    }
  },
  computed: {
    validateForm () {
      return this.username != '' && this.password != '' && this.verification != '' === true;
    }
  },
  methods: {
    refimg_get () {
      var num = Math.ceil(Math.random() * 10000);
      this.imgurl = "url/user/captcha?" + num;
      return this.imgurl
    },
    login_get () {
      // 使用全局axios进行后端请求
      const axios = require('axios').default
      axios.defaults.withCredentials = true

      axios({
        method: 'post',
        url: 'url/user/login',
        data: {
          username: this.username,
          password: this.password,
          code: this.verification,
          rememberMe: '0'
        }
      })
        .then(function (response) {
          if (response.data["Status"] == "0") {
            this.$vs.notify({ title: '登录失败', text: response.data.Result['msg'], color: 'warning', icon: 'error' })
            this.refresh();
          }
          else if (response.data["Status"] == "1") {
            this.admin()
          }
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        });
    },
    // 账号权限判断
    admin () {
      // 使用全局axios进行后端请求
      const axios = require('axios').default
      axios.defaults.withCredentials = true

      axios({
        method: 'get',
        url: 'url/admin/',
      })
        .then((response) => {
          if (response.data.Status == 0) {
            window.location.href = "http://atd.jingwenxing.top/"; //在原有窗口打开
          }
          else {
            this.$vs.notify({ title: '登录成功', text: '欢迎来到ATD', color: 'success', icon: 'check_box' })
            this.$router.push({ path: '/' })
          }
        })
        .catch(function (error) {
          console.log(error)
        });
    }
  },
}
</script>

<style lang="scss">
#page-login {
  .social-login-buttons {
    .bg-facebook {
      background-color: #1551b1;
    }
    .bg-twitter {
      background-color: #00aaff;
    }
    .bg-google {
      background-color: #4285f4;
    }
    .bg-github {
      background-color: #333;
    }
  }
}

.ver {
  width: 100%;
  display: flex;
}

.veri {
  width: 50%;
  height: 75px;
  padding-top: 15px;
  padding-left: 20px;
}

@media screen and (max-width: 750px) {
  .ver {
    width: 100%;
    display: block;
  }

  .veri {
    width: 100%;
    height: 58px;
    padding-top: 10px;
    padding-left: 0px;
  }
}
</style>
