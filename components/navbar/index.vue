<template>
  <div
    class="navbar"
    :class="
      $store.state.menuBG || $store.state.baseBG
        ? 'navbar-bg-fff'
        : 'navbar-bg-transparent'
    "
    @mouseover="mouseover()"
    @mouseleave="mouseleave()"
  >
    <div class="range">
      <div class="flex items-center">
        <div class="logo">
          <img src="@/assets/imgs/logo.png" alt="" />
        </div>
        <navbarsButton
          text="ATD计算机协会"
          click
          :color="$store.state.menuBG || $store.state.baseBG"
        />
      </div>
      <div class="flex items-center">
        <navbarsButton
          :text="item.text"
          :click="item.click"
          :color="$store.state.menuBG || $store.state.baseBG"
          @click.native="ClickMenuItem(index, item.path)"
          v-for="(item, index) in menuList"
          :key="item.text"
        />
        <div class="left-range">
          <transition name="el-fade-in" mode="out-in">
            <div class="flex items-center" v-if="profileshow">
              <p
                :class="
                  $store.state.menuBG || $store.state.baseBG
                    ? 'color-dark'
                    : 'color-light'
                "
              >
                你好，{{ profile.username }}
              </p>
              <div
                class="icon iconfont icon-user"
                :class="
                  $store.state.menuBG || $store.state.baseBG
                    ? 'color-dark'
                    : 'color-light'
                "
                @click="ClickMenuItem(0, '/personal')"
              ></div>
              <div
                class="icon iconfont icon-sign-out"
                :class="
                  $store.state.menuBG || $store.state.baseBG
                    ? 'color-dark'
                    : 'color-light'
                "
                @click="logout()"
              ></div>
            </div>
            <loginButton
              :color="$store.state.menuBG || $store.state.baseBG"
              @loginreturn="loginreturn"
              v-else
            />
          </transition>
        </div>
      </div>
    </div>
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
      menuClick: 0,
      menuList: [
        {
          text: "首页",
          click: false,
          path: "/",
        },
        {
          text: "招新",
          click: false,
          path: "/recruit",
        },
        {
          text: "活动",
          click: false,
          path: "/active",
        },
        {
          text: "协会",
          click: false,
          path: "/association",
        },
        {
          text: "相册",
          click: false,
          type: "href",
          path: "/photo",
          link: "/photo",
        },
        {
          text: "资源",
          click: false,
          type: "href",
          open: true,
          link: "http://p.harson.co/",
          path: "/resource",
        },
      ],
      profileshow: false,
      profile: [],
    };
  },
  mounted() {
    if (this.$route.path.indexOf("/recruit") == 0) {
      this.menuClick = 1;
      this.menuList[this.menuClick].click = true;
    } else if (this.$route.path.indexOf("/active") == 0) {
      this.menuClick = 2;
      this.menuList[this.menuClick].click = true;
    } else if (this.$route.path.indexOf("/association") == 0) {
      this.menuClick = 3;
      this.menuList[this.menuClick].click = true;
    } else if (this.$route.path.indexOf("/apply") == 0) {
      this.menuClick = 4;
      this.menuList[this.menuClick].click = true;
    } else if (this.$route.path.indexOf("/") == 0) {
      this.menuClick = 0;
      this.menuList[this.menuClick].click = true;
    }

    this.profileFun();
  },
  methods: {
    ClickMenuItem(index, path) {
      // 按钮状态处理
      this.menuList[this.menuClick].click =
        !this.menuList[this.menuClick].click;
      this.menuList[index].click = !this.menuList[index].click;
      this.menuClick = index;
      // 链接跳转
      if (this.menuList[index].type === 'href') {
        if (this.menuList[index].open === true) {
          window.open(this.menuList[index].link);
          return;
        }
        window.location.href = this.menuList[index].link;
        return;
      }

      // 路由切换
      this.$router.push({ path: path });
    },
    PersonalPage(path) {
      this.$router.push({ path: path });
    },
    mouseover() {
      this.$store.commit("menuBGWhite");
    },
    mouseleave() {
      this.$store.commit("menuBGTransparent");
    },
    logout() {
      this.$store.commit("loginNo");
      const axios = require("axios").default;
      axios.defaults.withCredentials = true;
      axios({
        method: "get",
        url: "/api/user/logout",
      }).then((response) => {
        if (response.data.Status == 1) {
          this.$notify({
            title: "退出成功",
            message: "下次再见！",
            position: "bottom-right",
            type: "success",
          });
          this.$router.push({ path: "/" });
        }
      });
      this.profileshow = false;
    },
    loginreturn() {
      this.profileFun();
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
  },
};
</script>

<style scoped>
.navbar {
  position: absolute;
  z-index: 99;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-bg-transparent {
  background: transparent;
  transition: all 0.2s ease;
}

.navbar-bg-fff {
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.9);
  transition: all 0.2s ease;
}

.navbar .range {
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 1230px) {
  .navbar .range {
    margin: 0 15px;
    width: 100%;
  }
}

.navbar .logo {
  width: 70px;
  height: 70px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.navbar .logo img {
  width: 60px;
  height: 60px;
  -webkit-user-drag: none;
}

.left-range {
  margin-left: 20px;
  width: 250px;
  display: flex;
  justify-content: flex-end;
}

.left-range p {
  font-size: 16px;
  font-weight: bold;
  user-select: none;
  transition: all 0.2s ease;
}

.color-dark {
  color: rgba(0, 0, 0);
}

.color-light {
  color: rgba(255, 255, 255);
}

.icon {
  margin-left: 20px;
  font-size: 30px;
  cursor: pointer;
  transition: all 0.2s ease;
}
</style>