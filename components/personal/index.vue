<template>
  <div class="personal-info">
    <h1>个人信息</h1>
    <div class="personal-single">
      <div class="single">
        <p class="title">姓名：</p>
        <p class="text">{{ profile.fullname }}</p>
      </div>
      <div class="single">
        <p class="title">昵称：</p>
        <p class="text">{{ profile.username }}</p>
      </div>
      <div class="single">
        <p class="title">账户：</p>
        <p class="text">{{ profile.account }}</p>
      </div>
      <!-- <div class="single">
        <p class="title">积分：</p>
        <p class="text">{{ profile.integral }}分</p>
      </div> -->
      <div class="single">
        <p class="title">电话：</p>
        <p class="text">{{ profile.telephone }}</p>
      </div>
      <div class="single">
        <p class="title">QQ：</p>
        <p class="text">{{ profile.qq }}</p>
      </div>
      <div class="single">
        <p class="title">性别：</p>
        <p class="text">{{ profile.sexy == 1 ? "男" : "女" }}</p>
      </div>
    </div>
    <h1>专业信息</h1>
    <div class="personal-single">
      <div class="single">
        <p class="title">学号：</p>
        <p class="text">{{ profile.school_id }}</p>
      </div>
      <div class="single">
        <p class="title">年级：</p>
        <p class="text">{{ profile.grade }}</p>
      </div>
      <div class="single">
        <p class="title">专业：</p>
        <p class="text">{{ profile.professional }}</p>
      </div>
      <div class="single">
        <p class="title">班级：</p>
        <p class="text">{{ profile.classes }}班</p>
      </div>
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
    const axios = require("axios").default;
    axios.defaults.withCredentials = true;
    axios({
      method: "get",
      url: "/api/user/profile",
    }).then((response) => {
      if (response.data.Status == 0) {
        // this.$store.commit("loginNO");
        this.$router.push({ path: "/" });
      } else {
        this.$store.commit("loginYes");
        this.profile = response.data.Result.user;
      }
    });
  },
};
</script>

<style scoped>
.personal-info {
  padding: 25px;
  width: 1000px;
  height: calc(100vh - 200px);
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.9);
}

h1 {
  margin-bottom: 15px;
  padding: 0 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f2f2f2;
  line-height: 29px;
  font-size: 20px;
}

.personal-info .personal-single {
  position: relative;
  padding: 10px 15px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: calc(100% - 30px);
  border-radius: 7px;
}

.personal-info .personal-single .single {
  margin-bottom: 15px;
  width: 50%;
  height: 25px;
  display: flex;
  font-size: 18px;
}

.personal-info .personal-single .single .title {
  width: 25%;
}

.personal-info .personal-single .single .text {
  width: 75%;
  color: rgba(0, 0, 0, 0.7);
}
</style>