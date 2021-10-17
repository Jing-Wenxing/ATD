<template>
  <div class="page">
    <van-cell-group inset>
      <van-cell
        title="个人信息"
        size="large"
        is-link
        to="personalmobile/personal"
      />
      <van-cell
        title="活动信息"
        size="large"
        is-link
        label="您可在这里操作您已经预约的活动"
        to="personalmobile/active"
      />
    </van-cell-group>
    <div class="margin-sm">
      <button class="qing" @click="logout()">退出登录</button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("baseBGWhite");
    this.$store.commit("menuBGTransparent");

    const axios = require("axios").default;
    axios.defaults.withCredentials = true;
    axios({
      method: "get",
      url: "/api/user/profile",
    }).then((response) => {
      if (response.data.Status == 0) this.$router.push({ path: "/" });
    });
  },
  methods: {
    logout() {
      const axios = require("axios").default;
      axios.defaults.withCredentials = true;
      axios({
        method: "get",
        url: "/api/user/logout",
      }).then((response) => {
        if (response.data.Status == 1) {
          this.$toast.fail("退出成功");
          this.$router.push({ path: "/" });
        }
      });
      this.profileshow = false;
    },
  },
};
</script>

<style scoped>
.page {
  padding-top: 75px;
  width: 100%;
  height: calc(100vh - 75px);
  background: #f8f8f8;
}

.qing {
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #4d4d4d;
  background: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #323233;
}
</style>