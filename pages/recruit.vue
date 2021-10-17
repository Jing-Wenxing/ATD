<template>
  <div class="recruit" :class="typeshow ? 'recruit-000' : 'recruit-fff'">
    <div v-if="typeshow" class="recruit-content-first">
      <transition name="el-fade-in" mode="out-in">
        <span class="element"></span>
      </transition>
    </div>
    <recruit v-else />
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
<script>
import Typed from "typed.js";
import recruit from "@/components/recruit/register.vue";

export default {
  components: {
    recruit,
  },
  data() {
    return {
      typeshow: true,
    };
  },
  mounted() {
    this.$store.commit("baseBGTransparent");
    this.$store.commit("menuBGTransparent");

    var options = {
      strings: ["你好，我们是ATD计算机协会！", "欢迎加入我们！"],
      typeSpeed: 50,
      startDelay: 500,
      backDelay: 2000,
      fadeOut: true,
      fadeOutDelay: 1000,
      onComplete: (self) => {
        setTimeout(() => {
          this.$store.commit("baseBGWhite");
          this.typeshow = false;
        }, 1500);
      },
    };

    var typed = new Typed(".element", options);
  },
};
</script>

<style scoped>
.recruit {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

.recruit-000 {
  background: #000;
}

.recruit-fff {
  background: #f0f0f0;
}

.recruit-content-first {
  color: #fff;
  font-size: 40px;
}

@media screen and (max-width: 600px) {
  .recruit-content-first {
    font-size: 20px;
  }
}
</style>