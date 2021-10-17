<template>
  <div class="active-item">
    <div class="top">
      <div class="flex items-center">
        <img class="icon" src="@/assets/imgs/icon/level.png" alt="" />
        <h1>{{ dataItem.title }}</h1>
      </div>
      <span v-if="start == 0" class="start">未开始</span>
      <span v-if="start == 1" class="start">进行中</span>
      <span v-if="start == 2" class="end">已结束</span>
    </div>
    <div class="center">
      <div class="left">
        <div class="content">
          <div class="item">
            <h2>活动标题</h2>
            <span>{{ dataItem.title }}</span>
          </div>
          <div class="item">
            <h2>活动说明</h2>
            <span>{{ dataItem.text }}</span>
          </div>
          <div class="item">
            <h2>活动时间</h2>
            <span
              >{{ dataItem.start_time | formatDate }} ~
              {{ dataItem.end_time | formatDate }}</span
            >
          </div>
          <div class="other">
            <div class="iconfont icon-faxian"></div>
            <span>{{ dataItem.location }}</span>
            <div class="iconfont icon-riqian"></div>
            <span>{{ dataItem.classification }}</span>
            <div class="iconfont icon-mingxinghuodong"></div>
            <span>积分: {{ dataItem.integral }}</span>
          </div>
        </div>
        <div class="option margin-top">
          <button class="qing" @click="cancelYuyue()">请假取消</button>
        </div>
      </div>
      <div class="right">
        <img :src="dataItem.img" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
    },
    start: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      yuyueButton: false,
    };
  },
  methods: {
    cancelYuyue() {
      this.$confirm("您确定请假此活动吗？", "请假确认", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        const axios = require("axios").default;
        axios.defaults.withCredentials = true;
        axios({
          method: "post",
          url: "/api/uactive/cancelYuyue",
          data: {
            activeid: this.dataItem.id,
          },
        }).then((response) => {
          if (response.data.Status == 1) {
            this.$toast.success("请假成功");
            var id = this.dataItem.id;
            this.$emit("cancel", id);
          }
        });
      });
    },
  },
  filters: {
    formatDate(value) {
      var date = new Date(value * 1); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "月";
      var D =
        date.getDate() + 1 < 10
          ? "0" + date.getDate() + "日 "
          : date.getDate() + "日 ";
      var H =
        date.getHours() + 1 < 10
          ? "0" + date.getHours() + ":"
          : date.getHours() + ":";
      var Min =
        date.getMinutes() + 1 < 10
          ? "0" + date.getMinutes()
          : date.getMinutes();
      return M + D + H + Min;
    },
  },
};
</script>

<style scoped>
.active-item {
  margin-bottom: 20px;
  padding: 24px;
  border-radius: 7px;
  width: calc(100% - 48px);
  background: #fff;
}

.active-item .top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.active-item .top .icon {
  display: block;
  width: 25px;
}

.active-item .top h1 {
  margin-left: 10px;
  font-size: 18px;
  font-weight: 400;
  color: #333;
}

.active-item .top span {
  font-size: 14px;
  font-weight: bold;
}

.active-item .top .start {
  color: #ff6008;
}

.active-item .top .end {
  color: rgba(0, 0, 0, 0.6);
}

.active-item .center {
  margin-top: 16px;
  padding: 25px 30px;
  border-radius: 7px;
  display: flex;
  background: #fafafa;
}

.active-item .center .left {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.active-item .center .left .item {
  margin-bottom: 16px;
  display: flex;
}

.active-item .center .left .item h2 {
  width: 90px;
  font-size: 16px;
  font-weight: 400;
  color: #999;
}

.active-item .center .left .item span {
  width: calc(100% - 120px);
  font-size: 16px;
  font-weight: 400;
  color: #333;
}

.active-item .center .left .other {
  margin-top: 25px;
  display: flex;
  align-items: center;
  color: #999;
}

.active-item .center .left .other div {
  font-size: 18px;
}

.active-item .center .left .other span {
  margin-left: 5px;
  margin-right: 20px;
  font-size: 14px;
}

.active-item .center .left .option {
  display: flex;
  align-items: center;
}

.active-item .center .left .option button {
  margin-right: 20px;
  width: 100px;
  height: 40px;
  border-radius: 7px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.active-item .center .left .option .yuyue {
  color: #fff;
  background: #ff6008;
}

.active-item .center .left .option .yuyue:hover {
  background: rgba(255, 96, 8, 0.7);
}

.active-item .center .left .option .qing {
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
}

.active-item .center .left .option .qing:hover {
  background: rgba(0, 0, 0, 0.4);
}

.active-item .center .left .option .ing {
  color: #fff;
  background: rgba(255, 96, 8, 0.7);
  cursor: not-allowed;
}

.active-item .center .left .option .end {
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  cursor: not-allowed;
}

.active-item .center .right {
  width: 40%;
}

.active-item .center .right img {
  width: 100%;
  border-radius: 7px;
  display: block;
}
</style>