<template>
  <div class="vx-row">
    <div class="vx-col w-full lg:w-1/1 mb-base">
      <div class="carousel-example">
        <swiper :options="swiperOption"
                :dir="$vs.rtl ? 'rtl' : 'ltr'"
                :key="$vs.rtl">
          <swiper-slide v-for="item in SlideShowimage"
                        :key="item.id">
            <vx-card class="overlay-card overflow-hidden">
              <template slot="no-body">
                <img :src="item.location"
                     alt="user-profile-cover"
                     class="responsive">
                <div class="card-overlay text-white flex flex-col justify-between"
                     @click="openurl(item.link)">
                  <p>
                    <vs-icon v-show="item.link!=''"
                             icon="crop_free"
                             size="small"></vs-icon>
                  </p>
                  <h2 class="text-white mb-4">{{ item.name }}</h2>
                </div>
              </template>
            </vx-card>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      SlideShowimage: []
    }
  },
  methods: {
    openurl (url) {
      if (url != "")
        window.open(url, "_blank")
    },
    register_get () {
      // 使用全局axios进行后端请求
      const axios = require('axios').default
      axios.defaults.withCredentials = true
      axios({
        method: 'get',
        url: 'url/image/display',
      })
        .then((response) => {
          console.log(response)
          this.SlideShowimage = response.data.Result
        })
        .catch(function (error) {
          console.log(error)
        });
    }
  },
  created () {
    this.register_get()
  }
}
</script>