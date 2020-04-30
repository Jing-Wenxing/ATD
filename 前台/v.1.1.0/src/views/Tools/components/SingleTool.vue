<template>
  <div class="main">
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/4 sm:w-1/1 mb-base"
           v-for="item in msg"
           :key="item.id">
        <vx-card noShadow
                 cardBorder>
          <div class="vx-row mb-4">
            <div class="vx-col w-full md:w-1/2 sm:w-1/1 centery">
              <vs-avatar size="70px"
                         :color="item.color"
                         :src="item.imgurl" />
            </div>
            <div class="vx-col w-full md:w-1/2 sm:w-1/1 centery">
              <div>
                <h3 class="mb-2">{{ item.title }}</h3>
                <p>{{ item.classes }}</p>
              </div>
            </div>
          </div>
          <vs-divider class="m-1" />
          <div class="vx-row">
            <div class="vx-col w-full md:w-1/1 sm:w-1/1 mt-4 ht">
              <p>{{ item.description }}</p>
            </div>
          </div>
          <template slot="footer">
            <div class="flex justify-between">
              <div class="centery">
                <p class="hsd">{{ item.author }}</p>
              </div>
              <vs-button type="line"
                         @click="openurl(item.url)">打开</vs-button>
            </div>
          </template>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: [
        {
          id: 1,
          title: '弱智教务',
          classes: '服务类',
          color: '#ffffff',
          description: '还在为某袋青年的广告而而烦恼? ATD为你提供更加纯净的课表服务',
          imgurl: 'https://tools.lllui.cn/favicon.ico',
          author: 'ATD官方',
          url: 'https://tools.lllui.cn/kdqn/Index/login'
        },
        {
          id: 2,
          title: '即刻图床',
          classes: '服务类',
          color: '#ffffff',
          description: '图片太大, 加载太慢? 即刻一下, 你就知道!',
          imgurl: 'https://pic.gksec.com/2020/04/28/bcc04c8e0512a/timg_gaitubao_615x615.jpg',
          author: 'ATD官方',
          url: 'https://img.gksec.com/'
        },
        {
          id: 3,
          title: 'Pexels',
          classes: '美术类',
          color: '#56ADA1',
          description: '才华横溢的摄影作者在这里免费分享最精彩的素材照片和视频',
          imgurl: 'https://www.pexels.com/favicon.ico',
          author: 'Pexels官方',
          url: 'https://www.pexels.com/zh-cn/'
        },
        {
          id: 4,
          title: '奶牛快传',
          classes: '服务类',
          color: '#F1F1F1',
          description: '比某度云盘更好用的文件分享服务',
          imgurl: 'https://background.cowtransfer.com/version/1587657916553/image/cow.3011c44.png',
          author: 'Cowtransfer官方',
          url: 'https://cowtransfer.com/'
        },
        {
          id: 5,
          title: 'HTML颜色代码',
          classes: '美术类',
          color: '#ffffff',
          description: '优质的云端比色服务',
          imgurl: 'https://htmlcolorcodes.com/assets/images/favicon.ico',
          author: 'Htmlcolorcodes官方',
          url: 'https://htmlcolorcodes.com/zh/'
        },
        // {
        //   id: 1024,
        //   title: '',
        //   classes: '',
        //   description: '',
        //   imgurl: '',
        //   author: '',
        //   url: ''
        // },
      ],
    }
  },
  methods: {
    openurl (url) {
      window.open(url, "_blank")
    },
  },
}
</script>

<style>
.centerx {
  display: flex;
  justify-content: center;
}

.centery {
  display: flex;
  align-items: center;
}

.hsd {
  width: 175px;
  min-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ht {
  height: 50px;
}
</style>