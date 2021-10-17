<template>
  <div class="page">
    <div v-for="item in dataList" :key="item.id">
      <activeItemMobile :dataItem="item" :start="item.start" />
    </div>
  </div>
</template>

<script>
import activeItemMobile from "@/components/active/activeItemMobile.vue";
import { API_PREFIX } from "@/js/config";

export default {
  components: {
    activeItemMobile,
  },
  data() {
    return {
      dataList: [],
    };
  },
  mounted() {
    this.$store.commit("baseBGWhite");
    this.$store.commit("menuBGTransparent");

    const axios = require("axios").default;
    axios.defaults.withCredentials = true;
    axios({
      method: "get",
      url: "/api/active/all",
    }).then((response) => {
      this.dataList = response.data.Result;
    });
  },
};
</script>

<style scoped>
.page {
  padding-top: 75px;
  width: 100%;
  height: calc(100vh - 75px);
  background: #f8f8f8;
  overflow-y: scroll;
}

.active {
  padding-top: 80px;
  width: 100vw;
  height: calc(100vh - 80px);
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
}

/* .active-content {
  margin-top: 20px;
  width: 1000px;
  height: auto;
} */

.active-pagination {
  padding: 15px;
  width: 1000px;
}
</style>