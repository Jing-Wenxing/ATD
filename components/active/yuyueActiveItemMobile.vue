<template>
  <div class="active-item">
    <div class="overlay">
      <div class="content">
        <div>
          <p>
            {{ dataItem.start_time | formatDate }} ~
            {{ dataItem.end_time | formatDate }}
          </p>
          <div class="other">
            <div class="iconfont icon-faxian"></div>
            <span>{{ dataItem.location }}</span>
            <div class="iconfont icon-riqian"></div>
            <span>{{ dataItem.classification }}</span>
            <div class="iconfont icon-mingxinghuodong"></div>
            <span>积分: {{ dataItem.integral }}</span>
          </div>
        </div>
      </div>
      <img :src="dataItem.img" alt="" />
    </div>
    <div class="active-content">
      <h1>{{ dataItem.title }}</h1>
      <p>{{ dataItem.text }}</p>
      <button class="qing" @click="cancelYuyue()">取消预约</button>
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
      this.$dialog
        .confirm({
          title: "请假确认",
          message: "您确定请假此活动吗？",
        })
        .then(() => {
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
        })
        .catch(() => {});
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
  margin: 0 20px;
  margin-bottom: 20px;
  border-radius: 7px;
  width: calc(100% - 40px);
  background: #fff;
}

.active-item .overlay {
  position: relative;
  height: 210px;
}

.active-item .overlay .content {
  position: absolute;
  padding: 10px;
  z-index: 1;
  width: calc(100% - 20px);
  height: 190px;
  border-radius: 7px 7px 0 0;
  display: flex;
  flex-direction: column-reverse;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
}

.active-item .overlay img {
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 210px;
  border-radius: 7px 7px 0 0;
}

.active-item .overlay .content .other {
  margin-top: 5px;
  display: flex;
  align-items: center;
}

.active-item .overlay .content .other div {
  font-size: 18px;
}

.active-item .overlay .content .other span {
  margin-left: 5px;
  margin-right: 20px;
  font-size: 14px;
}

.active-item .overlay .content .other span:last-child {
  margin-right: 0px;
}

.active-item .active-content {
  padding: 20px 15px;
}

.active-item .active-content p {
  margin-bottom: 20px;
  font-size: 16px;
  color: rgb(0, 0, 0);
}

.active-item .active-content h1 {
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 400;
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
  color: #000000;
}
</style>