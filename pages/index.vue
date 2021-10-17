<template>
  <div class="index">
    <div class="carousel-body">
      <div class="carousel-area">
        <div class="swiper">
          <img
            class="swiper-item"
            :src="item.img"
            alt=""
            v-for="item in swiperList"
            :key="item.id"
          />
        </div>
      </div>
      <div class="carousel-tool">
        <div class="left">
          <div class="arrow iconfont icon-icon-test23" @click="prev()"></div>
        </div>
        <div class="center">
          <h1>{{ swiperList[index].title }}</h1>
          <h2>{{ swiperList[index].text }}</h2>
          <ul>
            <li @click="gotoIndex(0)"></li>
            <li
              v-for="index in swiperList.length - 1"
              :key="index"
              @click="gotoIndex(index)"
            ></li>
          </ul>
        </div>
        <div class="right">
          <div class="arrow iconfont icon-icon-test25" @click="next()"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { API_PREFIX, FILE_PREFIX } from "@/js/config";

export default {
  data() {
    return {
      index: 0,
      timeer: "",
      swiperList: [
        {
          id: "1",
          img: FILE_PREFIX + "/swipers/swiper_base.jpg",
          url: null,
          title: "Welcome to ATD !",
          text: "欢迎大家加入ATD大家庭",
        },
      ],
    };
  },
  mounted() {
    this.$store.commit("baseBGTransparent");
    this.$store.commit("menuBGTransparent");

    const axios = require("axios").default;
    axios.defaults.withCredentials = true;
    axios({
      method: "get",
      url: API_PREFIX + "/api/swiper/selectFront",
    }).then((response) => {
      this.swiperList = response.data.Result;

      let swiperList = document.getElementsByClassName("swiper")[0];
      swiperList.style.width = this.swiperList.length * 100 + "vw";

      this.indexChange();
    });

    axios({
      method: "get",
      url: API_PREFIX + "/api/user/profile",
    }).then((response) => {
      if (response.data.Status == 0) {
        this.$store.commit("loginNO");
      } else {
        this.$store.commit("loginYes");
      }
    });
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    prev() {
      this.index > 0 ? this.index-- : (this.index = this.swiperList.length - 1);
      this.change();
    },
    next() {
      this.index < this.swiperList.length - 1 ? this.index++ : (this.index = 0);
      this.change();
    },
    gotoIndex(index) {
      this.index = index;
      this.change();
    },
    change() {
      let swiperList = document.getElementsByClassName("swiper")[0];

      swiperList.style.transform =
        "translateX(-" + (this.index / this.swiperList.length) * 100 + "%)";
    },
    indexChange() {
      let carouselTool = document
        .getElementsByClassName("carousel-tool")[0]
        .querySelectorAll("li");
      carouselTool[this.index].setAttribute("class", "is-active");
    },
  },
  watch: {
    index(val, oldVal) {
      let carouselTool = document
        .getElementsByClassName("carousel-tool")[0]
        .querySelectorAll("li");

      carouselTool[oldVal].setAttribute("class", "");
      carouselTool[val].setAttribute("class", "is-active");
    },
  },
};
</script>

<style scoped>
.index {
  width: 100vw;
  height: 100vh;
  background: rgb(56, 55, 55);
}

.carousel-body {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.carousel-body .carousel-area {
  position: absolute;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.swiper {
  display: flex;
  transition-duration: 500ms;
}

.swiper-item {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

.carousel-body .carousel-tool {
  position: absolute;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
}

.carousel-body .carousel-tool .left,
.carousel-body .carousel-tool .right {
  padding: 0 30px;
  width: 5%;
  min-width: 50px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-body .carousel-tool .left .arrow,
.carousel-body .carousel-tool .right .arrow {
  padding: 5px;
  border-radius: 30px;
  font-size: 45px;
  color: transparent;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
}

.carousel-body .carousel-tool .left:hover .arrow,
.carousel-body .carousel-tool .right:hover .arrow {
  color: rgba(0, 0, 0, 0.9);
  background: rgba(255, 255, 255, 0.4);
}

.carousel-body .carousel-tool .center {
  position: relative;
  width: 90%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.carousel-body .carousel-tool .center h1 {
  font-size: 54px;
  text-align: center;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  user-select: none;
}

.carousel-body .carousel-tool .center h2 {
  margin-top: 15px;
  font-size: 32px;
  font-weight: 400;
  text-align: center;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  user-select: none;
}

.carousel-body .carousel-tool .center ul {
  list-style: none;
  position: absolute;
  bottom: 30px;
  height: 26px;
  display: flex;
  align-items: center;
}

.carousel-body .carousel-tool .center ul li {
  margin: 8px;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: rgb(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.2s ease;
}

.carousel-body .carousel-tool .center ul li:hover,
.carousel-body .carousel-tool .center ul .is-active {
  margin: 0px 7px;
  width: 12px;
  height: 12px;
  border-radius: 10px;
  background: rgb(255, 255, 255, 1);
}

@media screen and (max-width: 600px) {
  .carousel-body .carousel-tool .left,
  .carousel-body .carousel-tool .right {
    padding: 0 10px;
    width: 5%;
    min-width: 30px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel-body .carousel-tool .left .arrow,
  .carousel-body .carousel-tool .right .arrow {
    font-size: 25px;
    color: rgba(0, 0, 0, 0.9);
    background: rgba(255, 255, 255, 0.4);
  }

  .carousel-body .carousel-tool .center h1 {
    font-size: 30px;
    text-align: center;
  }

  .carousel-body .carousel-tool .center h2 {
    font-size: 22px;
  }
}
</style>
