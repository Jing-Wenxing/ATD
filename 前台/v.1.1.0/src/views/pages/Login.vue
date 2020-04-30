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
                    <div class="vx-col hidden lg:block lg:w-1/2">
                      <vx-tooltip text="未登录将享受不了我们的功能哟"
                                  position="right">
                        <vs-button class="float-right"
                                   color="primary"
                                   type="border"
                                   icon-pack="feather"
                                   icon="icon-corner-down-left"
                                   to="/"></vs-button>
                      </vx-tooltip>
                    </div>
                  </div>
                  <p>欢迎来到ATD, 请登录您的账号</p>
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

                  <div class="flex flex-wrap justify-between my-5">
                    <vs-checkbox v-model="checkbox_remember_me">记住密码</vs-checkbox>
                    <router-link to="/pages/found-password">忘记密码?</router-link>
                  </div>

                  <vs-button type="border"
                             to="/pages/register"
                             @click="refimg_get">注册</vs-button>
                  <vs-button class="float-right"
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
          }
          else if (response.data["Status"] == "1") {
            this.$vs.notify({ title: '登录成功', text: '欢迎来到ATD', color: 'success', icon: 'check_box' })
            this.$router.push({ path: '/' })
          }
        }.bind(this))
        .catch(function (error) {
          console.log(error);
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
