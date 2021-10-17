<template>
  <div>
    <div
      class="navbar"
      :class="
        $store.state.menuBG || $store.state.baseBG
          ? 'navbar-bg-fff'
          : 'navbar-bg-transparent'
      "
    >
      <div class="logo">
        <img src="@/assets/imgs/logo.png" alt="" />
        <h2
          :class="
            $store.state.menuBG || $store.state.baseBG
              ? 'color-dark'
              : 'color-light'
          "
        >
          ATD计算机协会
        </h2>
      </div>
      <div class="flex items-center">
        <div
          class="icon iconfont icon-user"
          @click="openLogin"
          :class="
            $store.state.menuBG || $store.state.baseBG
              ? 'color-dark'
              : 'color-light'
          "
        ></div>
        <div
          class="icon iconfont icon-shouye"
          @click="openNav"
          :class="
            $store.state.menuBG || $store.state.baseBG
              ? 'color-dark'
              : 'color-light'
          "
        ></div>
      </div>
    </div>
    <van-popup
      v-model="logonshow"
      position="left"
      :style="{ height: '100%', width: '75%' }"
      class="menu"
    >
      <div class="menu-top">
        <img src="@/assets/imgs/logo.png" alt="" />
        <h2>ATD计算机协会</h2>
      </div>
      <div class="menu-content">
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
      <div class="menu-bottom">Copyright © 2021 by ATD</div>
    </van-popup>
    <van-popup
      v-model="navMobile"
      position="left"
      :style="{ height: '100%', width: '75%' }"
      class="menu"
    >
      <div class="menu-top">
        <img src="@/assets/imgs/logo.png" alt="" />
        <h2>ATD计算机协会</h2>
      </div>
      <ul>
        <li @click="PersonalPage('/')">首页</li>
        <li @click="PersonalPage('/recruit')">招新</li>
        <li @click="PersonalPage('/activemobile')">活动</li>
        <li @click="PersonalPage('/association')">协会</li>
      </ul>
      <div class="menu-bottom">Copyright © 2021 by ATD</div>
    </van-popup>
  </div>
</template>

<script>
import navbarsButton from "~/components/navbar/navbarsButton.vue";
import loginButton from "~/components/navbar/loginButton.vue";

export default {
  components: {
    navbarsButton,
    loginButton,
  },
  data() {
    return {
      profileshow: false,
      profile: [],
      navMobile: false,
      logonshow: false,
      // 用户登录
      account: "",
      password: "",
      vercode: "",
      imgurl: this.refimg_get(),
    };
  },
  mounted() {
    this.profileFun();
  },
  methods: {
    PersonalPage(path) {
      this.navMobile = !this.navMobile;
      this.$router.push({ path: path });
    },
    profileFun() {
      const axios = require("axios").default;
      axios.defaults.withCredentials = true;
      axios({
        method: "get",
        url: "/api/user/profile",
      }).then((response) => {
        if (response.data.Status == 0) {
          this.profileshow = false;
          this.$store.commit("loginNO");
        } else {
          this.profileshow = true;
          this.$store.commit("loginYes");
          this.profile = response.data.Result.user;
        }
      });
    },
    openNav() {
      this.navMobile = !this.navMobile;
    },
    openLogin() {
      if (this.$store.state.login) {
        this.$router.push({ path: "/personalmobile" });
      } else {
        this.logonshow = !this.logonshow;
      }
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
          this.logonshow = !this.logonshow;

          this.account = "";
          this.password = "";
          this.vercode = "";
        }
      });
    },
  },
};
</script>

<style scoped>
.navbar {
  position: absolute;
  z-index: 99;
  padding: 0 20px;
  width: calc(100% - 40px);
  height: 59px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-bg-transparent {
  background: transparent;
  transition: all 0.2s ease;
}

.navbar-bg-fff {
  background: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
}

.navbar .logo {
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.navbar .logo img {
  width: 45px;
  height: 45px;
  -webkit-user-drag: none;
}

.navbar .logo h2 {
  margin-left: 15px;
  font-size: 20px;
}

.navbar-content {
  width: 100%;
}

.icon {
  margin-left: 20px;
  font-size: 30px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.color-dark {
  color: rgba(0, 0, 0);
}

.color-light {
  color: rgba(255, 255, 255);
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.menu-top {
  padding: 0 20px;
  width: calc(100% - 40px);
  height: 100px;
  display: flex;
  align-items: center;
}

.menu-top img {
  width: 45px;
  height: 45px;
  -webkit-user-drag: none;
}

.menu-top h2 {
  margin-left: 15px;
  font-size: 20px;
}

.menu-content {
  padding: 0 20px;
  width: calc(100% - 40px);
}

.menu ul {
  margin: 20px 0;
}

.menu ul li {
  margin: 20px 0;
  padding: 10px 0;
  width: 150px;
  font-size: 20px;
  text-align: center;
}

.menu-bottom {
  padding-bottom: 50px;
  height: 150px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: flex-end;
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
</style>