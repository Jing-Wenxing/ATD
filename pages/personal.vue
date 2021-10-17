<template>
  <div class="personal">
    <div class="personal-content">
      <ul>
        <li @click="tabChange(0)">个人</li>
        <li @click="tabChange(1)">活动</li>
      </ul>
      <transition name="el-fade-in" mode="out-in">
        <Personal v-if="index == 0" />
        <Active v-if="index == 1" />
      </transition>
    </div>
  </div>
</template>

<script>
import Personal from "@/components/personal/index.vue";
import Active from "@/components/personal/active.vue";

export default {
  components: {
    Personal,
    Active,
  },
  data() {
    return {
      index: 0,
      dataList: [],
      profile: {
        fullname: "",
        username: "",
        account: "",
        integral: "",
        telephone: "",
        qq: "",
        sexy: "",
        school_id: "",
        grade: "",
        professional: "",
        classes: "",
      },
    };
  },
  mounted() {
    this.$store.commit("baseBGWhite");
    this.$store.commit("menuBGTransparent");

    this.indexChange();
  },
  methods: {
    tabChange(index) {
      this.index = index;
    },
    indexChange() {
      let personalTab = document
        .getElementsByClassName("personal-content")[0]
        .querySelectorAll("li");
      personalTab[this.index].setAttribute("class", "is-active");
    },
  },
  watch: {
    index(val, oldVal) {
      let carouselTool = document
        .getElementsByClassName("personal-content")[0]
        .querySelectorAll("li");

      carouselTool[oldVal].setAttribute("class", "");
      carouselTool[val].setAttribute("class", "is-active");
    },
  },
};
</script>

<style scoped>
.personal {
  padding-top: 100px;
  width: 100vw;
  height: calc(100vh - 100px);
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.personal-content {
  width: 1200px;
  display: flex;
  justify-content: flex-end;
}

.personal-content ul {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.personal-content ul li {
  margin: 15px 5px;
  padding: 5px 10px 5px 20px;
  border-radius: 7px 0 0 7px;
  width: 50px;
  color: #ff6008;
  background: #fff;
  box-shadow: 0px 0px 2px #ff6008;
  cursor: pointer;
  transition: all 0.2s ease;
}

.personal-content ul li:hover {
  color: #fff;
  background: rgba(255, 96, 8, 0.8);
  box-shadow: 0px 0px 2px transparent;
}

.personal-content ul .is-active {
  width: 80px;
  color: #fff;
  background: #ff6008;
  box-shadow: 0px 0px 2px transparent;
}
</style>