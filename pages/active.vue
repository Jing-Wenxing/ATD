<template>
  <div class="active">
    <div class="active-content">
      <div v-for="item in dataList" :key="item.id">
        <activeItem :dataItem="item" :start="item.start" />
      </div>
    </div>
    <div class="active-pagination"></div>
  </div>
</template>

<script>
import activeItem from "@/components/active/activeItem.vue";
export default {
  components: {
    activeItem,
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
  methods: {},
};
</script>

<style scoped>
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

.active-content {
  margin-top: 20px;
  width: 1000px;
  height: auto;
}

.active-pagination {
  padding: 15px;
  width: 1000px;
}
</style>