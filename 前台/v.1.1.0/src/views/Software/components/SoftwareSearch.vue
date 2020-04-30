<template>
  <div class="main">
    <!-- 搜索 -->
    <div class="knowledge-base-jumbotron">
      <div class="knowledge-base-jumbotron-content lg:p-32 md:p-24 sm:p-16 p-8 rounded-lg mb-base">
        <h1 class="mb-6 text-white">搜索您想要的软件吧</h1>
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
        <div class="vx-col w-full lg:w-1/2 sm:w-1/1"
             v-for="item in classvideos"
             :key="item.id">
          <vs-card>
            <div class="vx-row">
              <div class="vx-col w-full lg:w-1/2 sm:w-1/1">
                <vx-card class="overlay-card overflow-hidden w-1/1">
                  <template slot="no-body">
                    <img :src="item.cover_img"
                         alt="user-profile-cover"
                         class="responsive">
                  </template>
                </vx-card>
              </div>
              <div class="vx-col w-full lg:w-1/2 sm:w-1/1">
                <vx-card :title="item.name"
                         noShadow
                         noRadius>
                  <p>{{ item.intro }}</p>
                </vx-card>
              </div>
            </div>
            <div>
              <vs-row vs-justify="flex-end">
                <p class="mr-base">下载次数：{{ item.clicks }}</p>
                <vs-button v-show="item.explain != ''"
                           color="success"
                           icon="message"
                           @click="opentext(item.explain)">文档</vs-button>
                <vs-button class="ml-2"
                           color="primary"
                           icon="get_app"
                           @click="opendownload(item.location, item.id)">下载</vs-button>
              </vs-row>
            </div>
          </vs-card>
        </div>
      </div>
    </div>

    <!-- 分类 -->
    <div class="vx-row">
      <div class="vx-col w-full lg:w-1/1 mb-base">
        <h1>软件分类</h1>
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
  </div>
</template>


<script>
export default {
  data () {
    return {
      SearchVideo: '',
      page: 1,
      pageall: 1,
      classvideos: [],
      kb: [
        {
          id: 1,
          title: '编程应用',
          description: '编译器、抓包工具，编程所需的应用',
          graphic: require("@/assets/images/association/associationbase/graphic-1.png"),
          url: '/software/codes'
        },
        {
          id: 2,
          title: '实用工具',
          description: '磨刀不误砍柴工，好工具才能更快完成任务',
          graphic: require("@/assets/images/association/associationbase/graphic-2.png"),
          url: '/software/tools'
        },
        {
          id: 3,
          title: '其他软件',
          description: '更多新奇的应用软件',
          graphic: require("@/assets/images/association/associationbase/graphic-3.png"),
          url: '/software/others'
        },
      ],
    }
  },
  computed: {
  },
  methods: {
    opentext (url) {
      window.open(url, "_blank")
    },
    opendownload (url, id) {
      this.getclick(id)
      window.open(url, "_blank")
    },
    // 搜索视频
    searchvideo () {
      if (this.SearchVideo != '') {
        console.log(this.SearchVideo)
        var url = 'url/software/search?key=' + this.SearchVideo
        const axios = require('axios').default
        axios.defaults.withCredentials = true
        axios({
          method: 'get',
          url: url,
        })
          .then((response) => {
            this.page = 1
            console.log(response.data)
            this.classvideos = response.data.Result
            this.SearchVideo = ''
          })
          .catch(function (error) {
            console.log(error)
          });
      }
    },
    getclick (id) {
      console.log("下载")

      var url = 'url/software/click?Id=' + id
      const axios = require('axios').default
      axios.defaults.withCredentials = true

      axios({
        method: 'get',
        url: url,
      })
        .catch(function (error) {
          console.log(error)
        });
    }
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