<template>
  <div id="knowledge-base-page">
    <!-- 获取页数据  -->
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

    <div class="pagess">
      <vs-button class="mr-base"
                 color="primary"
                 type="flat"
                 radius
                 size="large"
                 icon="keyboard_arrow_left"
                 :disabled="this.page==1"
                 @click="pageunadd"></vs-button>

      <div>
        <h5>{{ this.page }}</h5>
      </div>

      <vs-button class="ml-base"
                 color="primary"
                 type="flat"
                 radius
                 size="large"
                 icon="keyboard_arrow_right"
                 :disabled="this.page==pageall"
                 @click="pageadd"></vs-button>
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      // SearchVideo: '',
      page: 1,
      pageall: 1,
      classvideos: [],
    }
  },
  computed: {
  },
  methods: {
    pageunadd () {
      if (this.page != 1) {
        this.page--
        this.getvideoclass()
      }
    },
    pageadd () {
      if (this.page != this.pageall) {
        this.page++
        this.getvideoclass()
      }
    },
    opentext (url) {
      window.open(url, "_blank")
    },
    opendownload (url, id) {
      this.getclick(id)
      window.open(url, "_blank")
    },
    // 获取列表
    getvideoclass () {
      const axios = require('axios').default
      axios.defaults.withCredentials = true

      axios({
        method: 'get',
        url: 'url/software/class?Class=code&Page=' + this.page,
      })
        .then((response) => {
          this.classvideos = response.data.Result.list
          this.pageall = Math.ceil(response.data.Result.num / 6)
        })
        .catch(function (error) {
          console.log(error)
        });
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
  created () {
    this.getvideoclass()
  }
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