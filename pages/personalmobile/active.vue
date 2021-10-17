<template>
  <div class="page">
    <div class="list">
      <div class="active-none" v-if="dataList.length == 0">
        <div class="active-none-content">
          <img src="@/assets/imgs/active_none.svg" alt="" />
          <p>你还没有预约任何活动哦~</p>
          <p>快去活动中心看看吧</p>
          <button @click="goActive()">前往活动</button>
        </div>
      </div>
      <div class="active-list" v-else>
        <yuyueActiveItemMobile
          v-for="item in dataList"
          :key="item.id"
          :dataItem="item"
          :start="item.start"
          @cancel="cancel"
        />
      </div>
    </div>
  </div>
</template>

<script>
import yuyueActiveItemMobile from "@/components/active/yuyueActiveItemMobile.vue";

export default {
  components: {
    yuyueActiveItemMobile,
  },
  data() {
    return {
      dataList: [{}],
    };
  },
  mounted() {
    const axios = require("axios").default;
    axios.defaults.withCredentials = true;
    axios({
      method: "get",
      url: "/api/uactive/personalYuyue",
    }).then((response) => {
      this.dataList = response.data.Result;
    });
  },
  methods: {
    goActive() {
      this.$router.push({ path: "/activemobile" });
    },
    cancel(id) {
      let a = this.dataList.filter((item) => {
        return item["id"] != id;
      });
      this.dataList = a;
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
  overflow-y: scroll;
}

.personal-active {
  width: 1050px;
  height: calc(100vh - 200px);
}

h1 {
  padding: 15px 40px;
  border-radius: 7px;
  font-size: 20px;
  background: #fff;
}

.list {
  height: 100%;
  overflow-y: scroll;
}

.list::-webkit-scrollbar {
  display: none;
}

.active-none {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.active-none-content {
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.active-none-content img {
  width: 275px;
}

.active-none-content p {
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
}

.active-none-content button {
  margin-top: 20px;
  width: 100px;
  height: 40px;
  border: 1px solid #ff6008;
  border-radius: 7px;
  color: #ff6008;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
}

.active-none-content button:hover {
  color: #fff;
  background: rgba(255, 96, 8, 0.6);
  box-shadow: 0px 0px 2px #ff6008;
}

.active-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>