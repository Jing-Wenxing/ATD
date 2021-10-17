<template>
  <div class="page">
    <van-cell-group inset>
      <van-cell size="large" title="姓名：" :value="profile.fullname" />
      <van-cell size="large" title="昵称：" :value="profile.username" />
      <van-cell size="large" title="账户：" :value="profile.account" />
      <!-- <van-cell size="large" title="积分：" :value="profile.integral" /> -->
      <van-cell size="large" title="电话：" :value="profile.telephone" />
      <van-cell size="large" title="QQ:" :value="profile.qq" />
      <van-cell
        size="large"
        title="性别："
        :value="profile.sexy == 1 ? '男' : '女'"
      />
    </van-cell-group>
    <br />
    <van-cell-group inset>
      <van-cell size="large" title="学号：" :value="profile.school_id" />
      <van-cell size="large" title="年级：" :value="profile.grade" />
      <van-cell size="large" title="专业：" :value="profile.professional" />
      <van-cell size="large" title="班级：" :value="profile.classes" />
    </van-cell-group>
    <br />
    <div class="margin-left-sm margin-right-sm">
      <button class="qing" @click="goback()">返回上页</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: {},
    };
  },
  mounted() {
    this.$store.commit("baseBGWhite");
    this.$store.commit("menuBGTransparent");

    const axios = require("axios").default;
    axios.defaults.withCredentials = true;
    axios({
      method: "get",
      url: "/api/user/profile",
    }).then((response) => {
      if (response.data.Status == 0) {
        this.$router.push({ path: "/" });
      } else {
        this.$store.commit("loginYes");
        this.profile = response.data.Result.user;
      }
    });
  },
  methods: {
    goback() {
      this.$router.go(-1);
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