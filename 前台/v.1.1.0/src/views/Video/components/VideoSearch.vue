<template>
  <div class="main">
    <!-- 搜索 -->
    <div class="knowledge-base-jumbotron">
      <div class="knowledge-base-jumbotron-content lg:p-32 md:p-24 sm:p-16 p-8 rounded-lg mb-base">
        <h1 class="mb-6 text-white">搜索您想要的视频吧</h1>
        <vx-input-group class="mb-base">
          <vs-input icon-no-border
                    placeholder="请输入关键字"
                    v-model="SearchVideo"
                    icon-pack="feather"
                    icon="icon-search"
                    size="large"
                    class="w-full" />
          <template slot="append">
            <div class="append-text btn-addon">
              <vs-button color="primary"
                         @click="searchvideo">搜 索</vs-button>
            </div>
          </template>
        </vx-input-group>
      </div>
    </div>

    <!-- 获取页数据  -->
    <div>
      <div class="vx-row">
        <div class="vx-col w-full lg:w-1/3 sm:w-1/2 mb-base"
             v-for="item in classvideos"
             :key="item.id"
             @click="videodplayer (item.intro, item.name, item.video_class, item.location, item.id)">
          <vx-card class="overlay-card overflow-hidden">
            <template slot="no-body">
              <img :src="item.cover_img"
                   alt="user-profile-cover"
                   class="responsive">
              <div class="card-overlay text-white">
                <div class="flex flex-col justify-between h-full">
                  <div class="text-center w-full">
                    <div class="flex justify-between px-8">
                      <span></span>
                      <span>点击率: {{ item.clicks }}</span>
                    </div>
                  </div>

                  <div class="text-center mt-4 w-full mb-10">
                    <div class="flex justify-around">
                      <h2 class="text-white">{{ item.name }}</h2>
                    </div>
                  </div>

                  <div class="text-center mt-8 w-full">
                    <h4 class="mb-10 text-white">{{ item.intro }}</h4>
                  </div>

                  <div class="text-center w-full">
                    <div class="flex justify-between px-8 mb-8">
                      <span>{{ item.author }}</span>
                      <span>{{ item.date | formatDate }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </vx-card>
        </div>
      </div>
    </div>

    <!-- 分类 -->
    <div class="vx-row">
      <div class="vx-col w-full lg:w-1/1 mb-base">
        <h1>视频分类</h1>
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-full md:w-1/3 sm:w-1/1 mb-base"
           v-for="item in kb"
           :key="item.id"
           @click="$router.push(item.url).catch(() => {})">
        <vx-card class="text-center cursor-pointer">
          <img :src="item.graphic"
               alt="graphic"
               width="180"
               class="mx-auto">
          <h4 class="mb-2">{{ item.title.toUpperCase() }}</h4>
          <small>{{ item.description }}</small>
        </vx-card>
      </div>
    </div>

    <!-- 视频页 -->
    <vs-popup v-show=popupActive
              :title="videotitle"
              button-close-hidden>
      <div class="vx-col w-full lg:w-1/1 mb-base">
        <d-player :options="options"
                  ref="player">
        </d-player>
      </div>
      <div class="vx-row">
        <div class="text-center w-full">
          <div class="flex justify-between px-8">
            <span>{{ this.videotext }}</span>
            <vs-button color="primary"
                       type="filled"
                       @click=vidiopause>退出</vs-button>
          </div>
        </div>
      </div>

    </vs-popup>
  </div>
</template>

<script>
import VideoShow from './VideoShow'
import Vue from 'vue';
import VueDPlayer from 'vue-dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'

Vue.use(VueDPlayer)

export default {
  mounted () {
    this.player = this.$refs.player.dp
  },
  components: {
    'video-show': VideoShow,
  },
  data () {
    return {
      SearchVideo: '',
      classvideos: [],
      videotitle: '',
      videotext: '',
      popupActive: false,
      kb: [
        {
          id: 1,
          title: '编程基础',
          description: '学习基础，快速上手',
          graphic: require("@/assets/images/association/associationbase/graphic-1.png"),
          url: '/video/programbase'
        },
        {
          id: 2,
          title: '题目讲解',
          description: 'C、Java、CTF等经典例题讲解',
          graphic: require("@/assets/images/association/associationbase/graphic-2.png"),
          url: '/video/topic'
        },
        {
          id: 3,
          title: '其他视频',
          description: '更多教学，玩乐编程',
          graphic: require("@/assets/images/association/associationbase/graphic-3.png"),
          url: '/video/others'
        },
      ],
      // 视频
      options: {
        video: {
          url: '',
        },
        autoplay: false,
      },
      player: null,
    }
  },
  methods: {
    // 视频播放函数
    videodplayer (videotexts, videotitles, videoclass, videolocation, videoid) {
      this.videotitle = videotitles
      this.videotext = videotexts
      var videourl = videolocation

      this.getclick(videoid)

      this.popupActive = true
      this.player.switchVideo({
        url: videourl
      })
    },
    // 视频退出并停止播放
    vidiopause () {
      this.popupActive = false
      this.player.pause()
    },
    getclick (id) {
      var url = 'url/video/click?Id=' + id
      const axios = require('axios').default
      axios.defaults.withCredentials = true

      axios({
        method: 'get',
        url: url,
      })
    },
    // 搜索视频
    searchvideo () {
      if (this.SearchVideo != '') {
        // console.log(this.SearchVideo)
        var url = 'url/video/search?key=' + this.SearchVideo
        const axios = require('axios').default
        axios.defaults.withCredentials = true
        axios({
          method: 'get',
          url: url,
        })
          .then((response) => {
            // this.page = 1
            // console.log(response.data)
            this.classvideos = response.data.Result
            this.SearchVideo = ''
          })
          .catch(function (error) {
            console.log(error)
          });
      }
    },
  },
  filters: {
    formatDate: function (value) {
      var date = new Date(value * 1);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = date.getDate();
      return Y + M + D;
    }
  },
}
</script>

<style lang="scss">
.knowledge-base-jumbotron-content {
  background-image: url("https://pic.gksec.com/2020/04/03/ba71086d11a32/knowledge-base-cover.jpg");
  background-size: cover;
}

.pagess {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>