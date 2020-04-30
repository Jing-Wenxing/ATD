<template>
  <div class="main">
    <div class="vx-row">
      <div class="vx-col w-full lg:w-1/1 mb-base">
        <vx-card class="cursor-pointer">
          <vs-tabs position='left'
                   class="tabs-shadow-none"
                   id="profile-tabs">
            <vs-tab label='2019 ~ 2020届'>
              <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
                <div class="vx-row">
                  <div class="vx-col w-full lg:w-1/3 sm:w-1/2 mb-4"
                       v-for="item in mm2019"
                       :key="item.id">
                    <div class="text-center cursor-pointer">
                      <vs-avatar size="70px"
                                 :src="item.url"
                                 class="mr-4 mb-4" />
                      <h4>{{ item.name }}</h4>
                      <h6>{{ item.position }}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </vs-tab>

            <vs-tab label='2018 ~ 2019届'>
              <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
                <div class="vx-row">
                  <div class="vx-col w-full lg:w-1/3 sm:w-1/2 mb-4"
                       v-for="item in mm2018"
                       :key="item.id">
                    <div class="text-center cursor-pointer">
                      <vs-avatar size="70px"
                                 :src="item.url"
                                 class="mr-4 mb-4" />
                      <h4>{{ item.name }}</h4>
                      <h6>{{ item.position }}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </vs-tab>

            <vs-tab label='2017 ~ 2018届'>
              <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
                <div class="vx-row">
                  <div class="vx-col w-full lg:w-1/3 sm:w-1/2 mb-4"
                       v-for="item in mm2017"
                       :key="item.id">
                    <div class="text-center cursor-pointer">
                      <vs-avatar size="70px"
                                 :src="item.url"
                                 class="mr-4 mb-4" />
                      <h4>{{ item.name }}</h4>
                      <h6>{{ item.position }}</h6>
                      <!-- <h6>{{ item.position2 }}</h6> -->
                    </div>
                  </div>
                </div>
              </div>
            </vs-tab>
          </vs-tabs>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mm2019: [
        {
          name: '邓畅伟',
          position: '会长',
          url: 'https://pic.gksec.com/2020/03/30/89a49cdf69c5b/dcw.jpg',
        },
        {
          name: '水浩铧',
          position: '名誉会长',
          url: 'https://pic.gksec.com/2020/03/30/e0380ed324aa1/water_pigeon.jpg',
        },
        {
          name: '唐巍 ',
          position: '技术大佬',
          url: 'https://pic.gksec.com/2020/03/30/8416d9a83b170/9.jpg',
        },
        {
          name: '郑志敏',
          position: '团支书',
          url: 'https://pic.gksec.com/2020/03/30/72d8aff460bf3/zzm.jpg',
        },
        {
          name: '王祯',
          position: '财务',
          url: 'https://pic.gksec.com/2020/03/30/6ed307a54063d/8.jpg',
        },
        {
          name: '陈安平',
          position: '办公综合部部长',
          url: 'https://pic.gksec.com/2020/04/22/fbf263be3905e/2e1a2aaf6906ee25dc934063fd7aa7ea_gaitubao_719x719.jpg',
        },
        {
          name: '刘婕',
          position: '办公综合部副部长',
          url: 'https://pic.gksec.com/2020/03/30/9f97c27d09dd0/7.jpg',
        },
        {
          name: '阳圣琪',
          position: '办公综合部副部长',
          url: 'https://pic.gksec.com/2020/03/30/246bc06b2c548/11.jpg',
        },
        {
          name: '杨浩诚',
          position: '技术部部长',
          url: 'https://pic.gksec.com/2020/03/30/2c064ac49328f/yhc.jpg',
        },
        {
          name: '何铭康',
          position: '技术部副部长',
          url: 'https://pic.gksec.com/2020/03/30/7e869b0c6dd59/hmk.jpg',
        },
        {
          name: '秦行',
          position: '技术部副部长',
          url: 'https://pic.gksec.com/2020/03/30/65a22ab385400/e3eb7044f488f8c911dbbda0dc26e632_gaitubao_1313x875_gaitubao_800x800.png',
        },
        {
          name: '刘思怡',
          position: '信息服务部部长',
          url: 'https://pic.gksec.com/2020/03/30/2280dcc7694e6/6.jpg',
        },
        {
          name: '黄晓燕',
          position: '信息服务部部长',
          url: 'https://pic.gksec.com/2020/04/22/8498a22ca4160/img20191214180218_gaitubao_1981x1486_gaitubao_801x801.jpg',
        },
        {
          name: '向淇',
          position: 'ACM队长',
          url: 'https://pic.gksec.com/2020/03/30/c1e6d20b645b1/2.jpg',
        },
        {
          name: '张湘璐',
          position: 'PsPr小老师',
          url: 'https://pic.gksec.com/2020/03/30/06ec3c7ea7549/qq图片20190910211900.jpg',
        },
      ],
      mm2018: [
        {
          name: '李媚',
          position: '会长',
          url: 'https://pic.gksec.com/2020/04/22/a2cc22228550a/李媚（会长）_gaitubao_661x661.jpg',
        },
        {
          name: '颜玉华',
          position: '团支书',
          url: 'https://pic.gksec.com/2020/04/22/744451a5b15bb/颜玉华（团支书）_gaitubao_874x1165_gaitubao_874x874.jpg',
        },
        {
          name: '李雪薇',
          position: '财务',
          url: 'https://pic.gksec.com/2020/04/22/58eb02a1473cf/李雪薇_gaitubao_540x540.jpg',
        },
        {
          name: '杨啸原',
          position: '办公综合部部长',
          url: 'https://pic.gksec.com/2020/04/22/90333d7224ae1/杨啸原（办公综合部部长）_gaitubao_720x720.png',
        },
        {
          name: '王成浩',
          position: '技术部部长',
          url: 'https://pic.gksec.com/2020/04/22/56c769bbaa7ae/王成浩（技术部部长）_gaitubao_640x640.jpg',
        },
        {
          name: '谢正龙',
          position: '技术部部长',
          url: 'https://pic.gksec.com/2020/04/22/03632ed87d004/谢正龙（技术部部长）_gaitubao_800x800.jpg',
        },
        {
          name: '左思',
          position: '技术部部长',
          url: 'https://pic.gksec.com/2019/12/18/9fdd4a1d9a197/2.png',
        },
        {
          name: '水浩铧',
          position: '技术部副部长',
          url: 'https://pic.gksec.com/2020/03/30/e0380ed324aa1/water_pigeon.jpg',
        },
        {
          name: '唐巍 ',
          position: '技术部副部长',
          url: 'https://pic.gksec.com/2020/03/30/8416d9a83b170/9.jpg',
        },
        {
          name: '祝丹',
          position: '信息服务部部长',
          url: 'https://pic.gksec.com/2020/04/22/9857261629172/祝丹（信息服务部部长）_gaitubao_720x720.jpg',
        },
        {
          name: '邹镇涛',
          position: '信息服务部副部长',
          url: 'https://pic.gksec.com/2020/04/22/40077ed4dd64a/邹镇涛（信息服务部副部长）_gaitubao_480x480.jpg',
        },
        {
          name: '卿思',
          position: '信息服务部副部长',
          url: 'https://pic.gksec.com/2020/04/22/236736b6d869d/卿思_gaitubao_1108x833_gaitubao_833x833.jpg',
        },
        {
          name: '蒋倩',
          position: '信息服务部副部长',
          url: 'https://pic.gksec.com/2020/04/22/b3114e4c3639f/蒋倩_gaitubao_876x876.jpg',
        },
      ],
      mm2017: [
        {
          name: '冯世昌',
          position: '会长',
          position2: 'ATD计算机协会创始人',
          url: 'https://pic.gksec.com/2020/04/22/b3e83f77945de/59f227200de9b188cb744d6acf5699c2_gaitubao_1166x1554_gaitubao_960x960.jpg',
        },
        {
          name: '李媚',
          position: '副会长',
          url: 'https://pic.gksec.com/2020/04/22/a2cc22228550a/李媚（会长）_gaitubao_661x661.jpg',
        },
        {
          name: '颜玉华',
          position: '团支书',
          url: 'https://pic.gksec.com/2020/04/22/744451a5b15bb/颜玉华（团支书）_gaitubao_874x1165_gaitubao_874x874.jpg',
        },
        {
          name: '李雪薇',
          position: '财务',
          url: 'https://pic.gksec.com/2020/04/22/58eb02a1473cf/李雪薇_gaitubao_540x540.jpg',
        },
        {
          name: '杨啸原',
          position: '办公综合部部长',
          url: 'https://pic.gksec.com/2020/04/22/90333d7224ae1/杨啸原（办公综合部部长）_gaitubao_720x720.png',
        },
        {
          name: '王成浩',
          position: '技术部部长',
          url: 'https://pic.gksec.com/2020/04/22/56c769bbaa7ae/王成浩（技术部部长）_gaitubao_640x640.jpg',
        },
        {
          name: '谢正龙',
          position: '技术部部长',
          url: 'https://pic.gksec.com/2020/04/22/03632ed87d004/谢正龙（技术部部长）_gaitubao_800x800.jpg',
        },
        {
          name: '左思',
          position: '技术部部长',
          url: 'https://pic.gksec.com/2019/12/18/9fdd4a1d9a197/2.png',
        },
        {
          name: '张鸿钢',
          position: '技术部副部长',
          url: 'https://pic.gksec.com/2020/04/22/986b32b0fddc9/张鸿钢（技术部副部长）.jpg',
        },
        {
          name: '杜威伟',
          position: '信息服务部部长',
          position2: '口袋青年创始人',
          url: 'https://pic.gksec.com/2020/04/22/37e3d4c05c863/dc4df86d02dd524dbfd0ab12b8000c92_gaitubao_858x858.png',
        },
      ],
    }
  },
}
</script>