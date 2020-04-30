<template>
  <div class="main">
    <div class="vx-row">
      <div class="vx-col w-full lg:w-1/1 mb-base">
        <vx-card slot="no-body"
                 class="text-center bg-primary-gradient greet-user">
          <feather-icon icon="AwardIcon"
                        class="p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow"
                        svgClasses="h-8 w-8"></feather-icon>
          <h1 class="mb-6 text-white">Welcome to ATD</h1>
          <p class="xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-white">我们是一个包容、温暖、知识、负责的社团</p>
        </vx-card>
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-full lg:w-1/1 mb-base">
        <div class="text-center cursor-pointer">
          <h1>活动瞬间</h1>
        </div>
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-full lg:w-1/1 mb-base">
        <vx-card class="cursor-pointer">
          <vs-tabs :position="isSmallerScreen ? 'top' : 'left'"
                   class="tabs-shadow-none"
                   id="profile-tabs"
                   :key="isSmallerScreen">
            <vs-tab label='例会活动'>
              <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
                <association-action-1 />
              </div>
            </vs-tab>

            <vs-tab label='软件安装'>
              <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
                <association-action-2 />
              </div>
            </vs-tab>

            <vs-tab label='课堂教学'>
              <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
                <association-action-3 />
              </div>
            </vs-tab>

            <vs-tab label='女生节'>
              <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
                <association-action-4 />
              </div>
            </vs-tab>

            <vs-tab label='二周年庆'>
              <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
                <association-action-5 />
              </div>
            </vs-tab>
          </vs-tabs>
        </vx-card>
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-full lg:w-1/1 mb-base">
        <div class="text-center">
          <h1>管理层介绍</h1>
        </div>
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-full lg:w-1/1 mb-base">
        <vx-card>
          <div class="vx-row">
            <div class="vx-col w-full lg:w-1/1">
              <template>
                <div class="carousel-example">
                  <swiper :options="swiperOption"
                          :dir="$vs.rtl ? 'rtl' : 'ltr'"
                          :key="$vs.rtl">
                    <swiper-slide v-for="item in user_info"
                                  :key="item.id">
                      <div class="text-center cursor-pointer">
                        <vs-avatar size="70px"
                                   :src="item.url"
                                   class="mr-4 mb-4" />
                        <h4>{{ item.name }}</h4>
                        <h6>{{ item.position }}</h6>
                      </div>
                    </swiper-slide>
                    <swiper-slide>
                      <div class="text-center cursor-pointer"
                           @click="$router.push('/association/all_managsement').catch(()=> {})">
                        <vs-avatar size="70px"
                                   class="mr-4 mb-4" />
                        <h4>更多</h4>
                      </div>
                    </swiper-slide>
                  </swiper>
                </div>
              </template>
            </div>
          </div>
        </vx-card>
      </div>
    </div>

    <!-- <div class="vx-row">
      <div class="vx-col w-full lg:w-1/1 mb-base">
        <div class="text-center cursor-pointer">
          <h1>协会遵循</h1>
        </div>
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-full md:w-1/3 sm:w-1/2 mb-base"
           v-for="item in filteredka"
           :key="item.id"
           @click="$router.push(item.url).catch(() => {})">
        <vx-card class="text-center cursor-pointer">
          <img :src="item.graphic"
               alt="graphic"
               width="180"
               class="mx-auto mb-4">
          <h4 class="mb-2">{{ item.title.toUpperCase() }}</h4>
          <small>{{ item.description }}</small>
        </vx-card>
      </div>
    </div> -->
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import Action_1 from '../actions/Action1'
import Action_2 from '../actions/Action2'
import Action_3 from '../actions/Action3'
import Action_4 from '../actions/Action4'
import Action_5 from '../actions/Action5'

export default {
  components: {
    swiper,
    swiperSlide,
    'association-action-1': Action_1,
    'association-action-2': Action_2,
    'association-action-3': Action_3,
    'association-action-4': Action_4,
    'association-action-5': Action_5,
  },
  data () {
    return {
      knowledgeBaseSearchQuery: '',
      user_info: [
        {
          name: '邓畅伟',
          position: '会长、应用开发小组组长',
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
          position: '技术部部长、CTF队长',
          url: 'https://pic.gksec.com/2020/03/30/2c064ac49328f/yhc.jpg',
        },
        {
          name: '何铭康',
          position: '技术部副部长、C语言小老师',
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
          position: 'ACM队长、算法小老师',
          url: 'https://pic.gksec.com/2020/03/30/c1e6d20b645b1/2.jpg',
        },
        {
          name: '张湘璐',
          position: 'PsPr小老师',
          url: 'https://pic.gksec.com/2020/03/30/06ec3c7ea7549/qq图片20190910211900.jpg',
        },
      ],
      ka: [
        {
          id: 1,
          title: '管理层手册',
          graphic: require("@/assets/images/association/associationbase/graphic-6.png"),
          url: '/association/management'
        },
        {
          id: 2,
          title: '会员手册',
          graphic: require("@/assets/images/association/associationbase/graphic-4.png"),
          url: '/association/member'
        },
        {
          id: 3,
          title: '财务报表',
          graphic: require("@/assets/images/association/associationbase/graphic-5.png"),
          url: '/association/financial'
        },
      ],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 50,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          }
        }
      }
    }
  },
  computed: {
    filteredKB () {
      return this.kb.filter((item) => item.title.toLowerCase().includes(this.knowledgeBaseSearchQuery.toLowerCase()) || item.description.toLowerCase().includes(this.knowledgeBaseSearchQuery.toLowerCase()));
    },
    filteredka () {
      return this.ka.filter((item) => item.title.toLowerCase().includes(this.knowledgeBaseSearchQuery.toLowerCase()) || item.description.toLowerCase().includes(this.knowledgeBaseSearchQuery.toLowerCase()));
    },
    isSmallerScreen () {
      return this.$store.state.windowWidth < 768
    }
  },
  methods: {}
}
</script>

<style>
.bottom-30 {
  margin-bottom: 30px;
}
.bottom-15 {
  margin-bottom: 15px;
}
.center {
  display: flex;
  justify-content: center;
}
</style>