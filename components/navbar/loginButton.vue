<template>
  <div class="loginButton">
    <div
      class="icon iconfont icon-user"
      :class="color ? 'color-dark' : 'color-light'"
      @click="showLoginArea()"
    ></div>
    <transition name="el-fade-in">
      <div v-show="show" class="login-range">
        <h1>登录</h1>
        <el-input
          class="margin-bottom-sm"
          v-model="account"
          placeholder="请输入用户名"
          clearable
        ></el-input>
        <el-input
          class="margin-bottom-sm"
          v-model="password"
          placeholder="请输入密码"
          clearable
          show-password
        ></el-input>
        <el-input
          class="margin-bottom-sm"
          v-model="vercode"
          placeholder="请输入验证码"
          clearable
        ></el-input>
        <div class="verimg">
          <img :src="imgurl" alt="" />
          <el-button round plain @click="refimg_get()">刷新</el-button>
        </div>
        <el-button class="login-button" round plain @click="login()"
          >登录</el-button
        >
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: Boolean,
    },
  },
  data() {
    return {
      show: false,
      account: "",
      password: "",
      vercode: "",
      imgurl: this.refimg_get(),
    };
  },
  mounted() {
    this.refimg_get();
  },
  methods: {
    showLoginArea() {
      this.show = !this.show;
    },
    refimg_get() {
      var num = Math.ceil(Math.random() * 10000);
      this.imgurl = "/api/user/captcha?" + num;
      return this.imgurl;
    },
    login() {
      const axios = require("axios").default;
      axios.defaults.withCredentials = true;
      axios({
        method: "post",
        url: "/api/user/login",
        data: {
          account: this.account,
          password: this.password,
          vercode: this.vercode,
        },
      }).then((response) => {
        if (response.data.Status == 0) {
          this.$toast.fail("登录失败");
          this.$store.commit("loginNO");
          this.refimg_get();
        } else {
          this.$toast.success("登录成功");
          this.$store.commit("loginYes");
          this.$emit("loginreturn");
          this.refimg_get();
        }
      });
    },
  },
};
</script>

<style scoped>
.loginButton {
  position: relative;
  margin-left: 25px;
  color: #000;
  font-weight: 400;
}

.icon {
  height: 80px;
  line-height: 80px;
  font-size: 30px;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;
}

.loginButton .login-range {
  position: absolute;
  bottom: -340px;
  left: -200px;

  padding: 15px 20px;
  width: 250px;
  height: 310px;
  background: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 7px;
}

@media screen and (max-width: 600px) {
  .loginButton .login-range {
    position: absolute;
    bottom: -340px;
    left: -200px;

    padding: 15px 20px;
    width: 220px;
    height: 310px;
  }
}

h1 {
  font-size: 22px;
  user-select: none;
  margin-bottom: 15px;
}

.verimg {
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

img {
  transition: all 0.2s ease;
}

.login-button {
  width: 100%;
}

.color-dark {
  color: rgba(0, 0, 0);
}

.color-light {
  color: rgba(255, 255, 255);
}
</style>