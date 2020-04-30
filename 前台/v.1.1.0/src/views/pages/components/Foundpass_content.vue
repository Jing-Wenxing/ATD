<template>
  <form-wizard ref="checkoutWizard"
               color="rgba(var(--vs-primary), 1)"
               errorColor="rgba(var(--vs-danger), 1)"
               :title="null"
               :subtitle="null"
               :hide-buttons="true"
               finishButtonText="完成"
               nextButtonText="下一步"
               backButtonText="上一步">

    <!-- tab 1 content -->
    <tab-content title="确认账号"
                 class="mb-5"
                 :before-change="validateStep1">
      <form data-vv-scope="step-1">
        <div class="vx-row justify-center items-center mt-base">
          <div class="vx-col md:w-1/2 w-full">
            <vs-input v-validate="'required|email'"
                      data-vv-validate-on="blur"
                      icon-no-border
                      icon="icon icon-mail"
                      icon-pack="feather"
                      placeholder="请输入绑定的邮箱"
                      name="邮箱"
                      type="email"
                      v-model="email"
                      class="w-full" />
            <span class="text-danger text-sm">{{ errors.first('step-1.邮箱') }}</span>

            <div class="ver">
              <vs-input type="verification"
                        name="verification"
                        icon-no-border
                        icon="icon icon-book-open"
                        icon-pack="feather"
                        placeholder="验证码"
                        v-model="verification"
                        class="w-full mt-base" />

              <vx-tooltip text="点击刷新验证码"
                          position="bottom">
                <div class="veri"
                     @click="refimg_get">
                  <img :src="imgurl">
                </div>
              </vx-tooltip>

            </div>
          </div>
        </div>
        <div class="vx-row justify-center items-center mt-base">
          <div class="vx-col md:w-1/2 w-full">
            <vs-button class="w-full"
                       :disabled="!validatefirst"
                       @click="validateStepfirst">确认</vs-button>
          </div>
        </div>
      </form>
    </tab-content>

    <!-- tab 2 content -->
    <tab-content title="重置密码"
                 class="mb-5"
                 :before-change="validateStep2">
      <form data-vv-scope="step-2">
        <div class="vx-row justify-center items-center">
          <div class="vx-col md:w-1/2 w-full">
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
                      class="w-full mt-base" />
            <span class="text-danger text-sm">{{ errors.first('step-2.密码') }}</span>

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
                      class="w-full mt-base" />
            <span class="text-danger text-sm">{{ errors.first('step-2.确认密码') }}</span>

            <vs-input v-validate="'required'"
                      data-vv-validate-on="blur"
                      icon-no-border
                      icon="icon icon-mail"
                      icon-pack="feather"
                      placeholder="请输入邮箱验证码"
                      name="邮箱验证码"
                      v-model="email_verification"
                      class="w-full mt-base" />
            <span class="text-danger text-sm">{{ errors.first('step-2.邮箱验证码') }}</span>

            <vs-button class="w-full mt-base"
                       @click="validateStepsecond">确认</vs-button>

          </div>
        </div>
      </form>
    </tab-content>

    <!-- tab 3 content -->
    <tab-content title="重置成功"
                 class="mb-5"
                 :before-change="validateStep3">
      <form data-vv-scope="step-3">
        <div class="vx-row justify-center items-center">
          <div class="vx-col md:w-1/2 w-full">
            <div class="centerx">
              <h2>重置密码成功!</h2>
            </div>

            <div class="centerx mt-6 mb-base">
              <img src="https://pic.gksec.com/2020/04/27/a46f3d395e9a0/atd.png"
                   alt="login"
                   class="hsx">
            </div>

            <div class="centerx mt-6">
              <vs-button color="primary"
                         type="filled"
                         to="/pages/login">前往登录页</vs-button>
            </div>
          </div>
        </div>
      </form>
    </tab-content>
  </form-wizard>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
  data () {
    return {
      email: "",
      verification: "",
      password: "",
      password2: "",
      email_verification: "",
      imgurl: this.refimg_get(),
    }
  },
  computed: {
    validatefirst () {
      return !this.errors.any() && this.email != '' && this.verification != '' === true;
    },
  },
  methods: {
    refimg_get () {
      var num = Math.ceil(Math.random() * 10000);
      this.imgurl = "url/user/captcha?" + num;
      return this.imgurl
    },
    validateStepfirst () {
      const axios = require('axios').default
      axios.defaults.withCredentials = true

      axios({
        method: 'post',
        url: 'url/user/forgetEmail',
        data: {
          email: this.email,
          code: this.verification,
        }
      })
        .then((response) => {
          if (response.data["Status"] == "0") {
            this.$vs.notify({ title: '操作失败', text: response.data.Result['msg'], color: 'warning', icon: 'error' })
          }
          else if (response.data["Status"] == "1") {
            this.$refs.checkoutWizard.nextTab()
            this.$vs.notify({ title: '发动成功', text: '请在你的邮箱查看你的验证码', color: 'success', icon: 'check_box' })

            setTimeout(() => {
              this.$vs.notify({ title: '提示', text: '如未在收件箱中找到邮件，请在垃圾箱中寻找', color: 'warning', icon: 'error' })
            }, 2000);
          }
        })
        .catch(function (error) {
          console.log(error)
        });
    },
    validateStepsecond () {
      const axios = require('axios').default
      axios.defaults.withCredentials = true

      axios({
        method: 'post',
        url: 'url/user/forgetPass',
        data: {
          emailCode: this.email_verification,
          newpass: this.password2,
        }
      })
        .then((response) => {
          if (response.data["Status"] == "0") {
            this.$vs.notify({ title: '操作失败', text: response.data.Result['msg'], color: 'warning', icon: 'error' })
          }
          else if (response.data["Status"] == "1") {
            this.$refs.checkoutWizard.nextTab()
          }
        })
        .catch(function (error) {
          console.log(error)
        });
    },
    validateStep1 () {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll('step-1').then(result => {
          if (result) {
            resolve(true)
          } else {
            reject("correct all values");
          }
        })
      })
    },
    validateStep2 () {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("step-2").then(result => {
          if (result) {
            resolve(true)
          } else {
            reject("correct all values");
          }
        })
      })
    },
    validateStep3 () {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("step-3").then(result => {
          if (result) {
            alert("Form submitted!");
            resolve(true)
          } else {
            reject("correct all values");
          }
        })
      })
    }
  },
  components: {
    FormWizard,
    TabContent
  }
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
  padding-top: 22.5px;
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
    padding-top: 20px;
    padding-left: 0px;
  }
}
</style>

<style lang="scss">
.centerx {
  display: flex;
  align-items: center;
  justify-content: center;
}

.centery {
  display: flex;
  justify-content: center;
}

.hsx {
  height: 125px;
}

@media screen and (max-width: 1000px) {
  .hsx {
    height: 100px;
  }
}

@media screen and (max-width: 750px) {
  .hsx {
    height: 75px;
  }
}
</style>