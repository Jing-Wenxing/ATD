<template>
  <div>
    <transition name="el-fade-in">
      <navbar v-if="ismobile == 1" />
      <navbarmobile v-if="ismobile == 2" />
    </transition>
    <transition name="el-fade-in">
      <nuxt />
    </transition>
  </div>
</template>

<script>
import navbar from "@/components/navbar/index.vue";
import navbarmobile from "~/components/navbar/navbarmobile.vue";

export default {
  components: {
    navbar,
    navbarmobile,
  },
  data() {
    return {
      ismobile: 0,
    };
  },
  mounted() {
    if (
      /(iPhone|iPad|iPod|iOS|Android|Windows Phone)/i.test(navigator.userAgent)
    ) {
      this.ismobile = 2;
    } else {
      this.ismobile = 1;
    }
  },
};
</script>

<style>
/* 全局样式 */

* {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: PingFangSC-Medium;
}

/* 引用字体 */

@font-face {
  font-family: PingFangSC-Medium;
  src: url("@/assets/font/PingFang Medium_downcc.otf");
}

.web-content-width {
  width: 1200px;
}

.nopc {
  padding: 20px;
  width: calc(100% - 40px);
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nopc img {
  max-width: 400px;
  width: 100%;
}

.nopc p {
  font-size: 24px;
}
</style>