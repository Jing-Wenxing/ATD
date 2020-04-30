<template>
  <div id="main">
    <!-- 最新 -->
    <div class="vx-row">
      <div class="vx-col w-full lg:w-1/1 mb-base">
        <h1>最新视频</h1>
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-full lg:w-1/3 sm:w-1/1 mb-base"
           v-for="item in newvedio"
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

    <!-- 最热 -->
    <div class="vx-row">
      <div class="vx-col w-full lg:w-1/1 mb-base">
        <h1>最热视频</h1>
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-full lg:w-1/3 sm:w-1/1 mb-base"
           v-for="item in hotvedios"
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
import Vue from 'vue';
import VueDPlayer from 'vue-dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'

Vue.use(VueDPlayer)

export default {
  mounted () {
    this.player = this.$refs.player.dp
  },
  data () {
    return {
      videotitle: '',
      videotext: '',
      popupActive: false,
      newvedio: '',
      hotvedios: '',
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
    getnew () {
      const axios = require('axios').default
      axios.defaults.withCredentials = true

      axios({
        method: 'get',
        url: 'url/video/latest',
      })
        .then((response) => {
          this.newvedio = response.data.Result
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    gethot () {
      const axios = require('axios').default
      axios.defaults.withCredentials = true

      axios({
        method: 'get',
        url: 'url/video/hot',
      })
        .then((response) => {
          this.hotvedios = response.data.Result
        })
        .catch(function (error) {
          console.log(error)
        });
    },
    getclick (id) {
      var url = 'url/video/click?Id=' + id
      const axios = require('axios').default
      axios.defaults.withCredentials = true

      axios({
        method: 'get',
        url: url,
      })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  filters: {
    formatDate: function (value) {
      var date = new Date(value * 1); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = date.getDate();
      return Y + M + D;
    }
  },
  created () {
    this.getnew()
    this.gethot()
  }
}
</script>