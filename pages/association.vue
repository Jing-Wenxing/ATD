<template>
  <div class="association" ref="top">
    <div class="lead font-style">
      <p class="element"></p>
    </div>
    <div class="content">
      <h1>社团简介</h1>
      <div class="single">
        <img
          :class="mobile ? 'm-width-100' : 'width-40'"
          src="@/assets/imgs/10.jpg"
          alt=""
        />
        <div :class="mobile ? 'm-width-100' : 'width-60'">
          <p>
            ATD名称含义：学识为先（Academic）、技术为上（Technology）、梦想为引（Dream）。
          </p>
          <p>
            ATD计算机协会旨在以下几个方面：团结全校的电脑爱好者促进我校计算机知识的普及与提高；协助学校开展有关电脑技术应用的活动；为同学们提供电脑的维护、修理服务；为学校和社会提供计算机应用、维护的服务；组织和带领同学参加各种校际和国内外的计算机相关的算法比赛和其他计算机相关的竞技活动；为同学们提供电脑技术交流的舞台，让同学们能更好地探讨学习计算机知识，带动整个学校计算机知识的兴趣而成立的。
          </p>
        </div>
      </div>
      <div class="single">
        <div :class="mobile ? 'm-width-100' : 'width-60'">
          <p>
            ATD计算机协会，下辖一省三部，分别为：常务省、办公综合部、技术部、信息服务部。
          </p>
          <p>
            常务省主管全社团对内对外的一切事宜；办公综合部是协会的公务处理部门，主管日常的会员管理、活动策划和事务处理；信息服务部管理社团的官网、官Q、官微等对外宣传工具，主管宣传、活动日常记录等文宣类型工作，并兼任与其他社团联谊的工作；技术部是协会的技术核心，
            为社团大大小小的活动提供必要的技术支持与内部的技术训练。
          </p>
        </div>
        <img
          :class="mobile ? 'm-width-100' : 'width-40'"
          src="@/assets/imgs/zhuzhijiag.png"
          alt=""
        />
      </div>
      <h1>社团战队</h1>
      <div class="single">
        <p :class="mobile ? 'm-width-100' : 'width-100'">
          ATD计算机协会，拥有两支竞赛性战队：ACM算法竞赛战队与CTF信息安全战队。两战队各设置队长与教师团，并拥有专门的训练教室、训练计划、硬件设备。其中战队训练室为三教
          3613。
        </p>
        <img
          :class="mobile ? 'm-width-100' : 'width-50'"
          class="height-300"
          src="@/assets/imgs/4.png"
          alt=""
        />
        <img
          :class="mobile ? 'm-width-100' : 'width-50'"
          class="height-300"
          src="@/assets/imgs/5.png"
          alt=""
        />
      </div>
      <div class="single">
        <p :class="mobile ? 'm-width-100' : 'width-100'">
          两支战队从创立之初，参加校级、市级、省级、国级各项赛事，在蓝桥杯、湖湘杯网络安全技能大赛、湖南省大学生网络安全技能竞赛、全国大学生信息安全竞赛、I春秋-RHG、等多项赛事中取得优异成绩。
        </p>
        <img
          :class="mobile ? 'm-width-100' : 'width-50'"
          class="height-300"
          src="@/assets/imgs/6.png"
          alt=""
        />
        <img
          :class="mobile ? 'm-width-100' : 'width-50'"
          class="height-300"
          src="@/assets/imgs/7.png"
          alt=""
        />
      </div>
      <h1>社团活动</h1>
      <div class="single">
        <img
          :class="mobile ? 'm-width-100' : 'width-50'"
          class="height-300"
          src="@/assets/imgs/8.png"
          alt=""
        />
        <img
          :class="mobile ? 'm-width-100' : 'width-50'"
          class="height-300"
          src="@/assets/imgs/9.png"
          alt=""
        />
        <span :class="mobile ? 'display-none' : 'width-50'"
          >社团活动之女生节</span
        >
        <span :class="mobile ? 'display-none' : 'width-50'"
          >社团活动之开讲啦</span
        >
        <img
          :class="mobile ? 'm-width-100' : 'width-50'"
          class="height-300"
          src="@/assets/imgs/11.png"
          alt=""
        />
        <img
          :class="mobile ? 'm-width-100' : 'width-50'"
          class="height-300"
          src="@/assets/imgs/12.jpg"
          alt=""
        />
        <span :class="mobile ? 'display-none' : 'width-50'"
          >社团活动之周年庆</span
        >
        <span :class="mobile ? 'display-none' : 'width-50'"
          >社团活动之义务安装</span
        >
      </div>
      <h2 :class="mobile ? 'margin-top-sm' : 'margin-top-xl'">
        请保持一份热爱，奔赴下一场山海，跨过星河迈过月亮去迎接更好的自己。
      </h2>
      <h2 :class="mobile ? 'margin-bottom-sm' : 'margin-bottom-xl'">
        ATD计算机协会，永远期待你们的加入。
      </h2>
    </div>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
<script>
import Typed from "typed.js";

export default {
  data() {
    return {
      mobile: false,
    };
  },
  mounted() {
    this.$store.commit("baseBGWhite");
    this.$store.commit("menuBGTransparent");

    var options = {
      strings: [
        "人都有各自的月亮",
        "心中都有属于自己的一份太阳",
        "因为热爱我们能够相遇",
        "因为信任我们并肩作战",
      ],
      typeSpeed: 50,
      startDelay: 500,
      backDelay: 2000,
      fadeOut: true,
      fadeOutDelay: 1000,
      onComplete: (self) => {
        setTimeout(() => {
          this.$nextTick(() => {
            var topheight = document.body.clientHeight - 80;

            if (this.$refs.top != undefined) {
              this.$refs.top.scrollTo({
                top: topheight,
                behavior: "smooth",
              });
            }
          });
        }, 1500);
      },
    };

    var typed = new Typed(".element", options);

    if (document.body.clientWidth > 600) this.mobile = false;
    else this.mobile = true;
  },
};
</script>

<style scoped>
.association {
  padding-top: 80px;
  width: 100vw;
  height: calc(100vh - 80px);
  overflow-y: scroll;
}

.lead {
  padding-bottom: 100px;
  width: 100%;
  height: calc(100vh - 180px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.font-style {
  font-size: 40px;
}

.content {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  margin-bottom: 30px;
  text-align: center;
}

.content .single {
  margin-bottom: 20px;
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
}

.width-40 {
  padding: 15px;
  width: calc(40% - 30px);
}

.width-50 {
  padding: 15px;
  width: calc(50% - 30px);
}

.width-60 {
  padding: 15px;
  width: calc(60% - 30px);
}

.width-100 {
  padding: 15px;
  width: 100%;
}

.m-width-100 {
  padding: 15px;
  width: calc(100% - 30px);
}

.height-300 {
  height: 300px;
}

.display-none {
  display: none;
}

.content .single p {
  margin-bottom: 15px;
  line-height: 26px;
  font-size: 17px;
  color: rgba(0, 0, 0, 0.8);
}

.content .single img {
  border-radius: 20px;
  object-fit: cover;
}

.content .single span {
  text-align: center;
}

@media screen and (max-width: 600px) {
  .font-style {
    font-size: 20px;
  }

  .content .single {
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  h2 {
    padding: 0 15px;
    text-align: center;
  }
}
</style>