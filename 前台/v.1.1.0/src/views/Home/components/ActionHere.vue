<template>
  <div class="vx-row">
    <div class="vx-col w-full md:w-1/4 sm:w-1/2 mb-base"
         v-for="item in actions"
         :key="item.id"
         @click="$router.push(item.url).catch(() => {})">
      <vx-card class="overlay-card overflow-hidden">
        <template slot="no-body">
          <img :src="item.cover_img"
               alt="user-profile-cover"
               class="responsive">
          <div class="card-overlay text-white flex flex-col justify-between">
            <h4 class="text-white mb-4">{{ item.name }}</h4>
            <p>{{ item.intro }}</p>
          </div>
        </template>
      </vx-card>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      actions: [
        {
          id: 1,
          name: '视频观看',
          intro: '各种知识教学等你来看',
          cover_img: require("@/assets/images/home/Video.jpg"),
          url: '/video',
        },
        {
          id: 2,
          name: '软件下载',
          intro: '听说你找不到资源，我们来帮你',
          cover_img: require("@/assets/images/home/Software.jpg"),
          url: '/software',
        },
        {
          id: 3,
          name: '个人中心',
          intro: '我就是我，不一样的 奆佬',
          cover_img: require("@/assets/images/home/User.jpg"),
          url: '/user',
        },
        {
          id: 4,
          name: '关于我们',
          intro: '佛曰：我们是神仙',
          cover_img: require("@/assets/images/home/AboutUs.jpg"),
          url: '/association',
        },
      ],
    }
  }
}
</script>

<style lang="scss">
.dim {
  opacity: 0.6;
  filter: alpha(opacity=60);
}

.dimback {
  background: #000;
}
</style>
