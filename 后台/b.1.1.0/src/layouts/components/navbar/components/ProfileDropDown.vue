<template>
  <div class="the-navbar__user-meta flex items-center"
       v-if="activeUserInfo.displayName">
    <!-- <div class="the-navbar__user-meta flex items-center"
       v-if="true"> -->

    <div class="text-right leading-tight hidden sm:block">
      <p class="font-semibold">{{ this.usermsgdata }}</p>
    </div>

    <vs-dropdown vs-custom-content
                 vs-trigger-click
                 class="cursor-pointer">

      <div class="con-img ml-3">
        <vs-avatar size="40px" />
      </div>

      <vs-dropdown-menu class="vx-navbar-dropdown">
        <ul style="min-width: 9rem">

          <!-- <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">
            <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Profile</span>
          </li>

          <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">
            <feather-icon icon="MailIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Inbox</span>
          </li>

          <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">
            <feather-icon icon="CheckSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Tasks</span>
          </li>

          <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">
            <feather-icon icon="MessageSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Chat</span>
          </li>

          <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">
            <feather-icon icon="HeartIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Wish List</span>
          </li>

          <vs-divider class="m-1" /> -->

          <!-- 退出 -->
          <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
              @click="logout"
              v-if="show_single">
            <feather-icon icon="LogOutIcon"
                          svgClasses="w-4 h-4" />
            <span class="ml-2">退出</span>
          </li>

          <!-- 登录 -->
          <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
              @click="login"
              v-else>
            <feather-icon icon="LogInIcon"
                          svgClasses="w-4 h-4" />
            <span class="ml-2">登录</span>
          </li>
        </ul>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
export default {
  data () {
    return {
      usermsgdata: '未登录',
      show_single: true,
    }
  },
  computed: {
    activeUserInfo () {
      return this.$store.state.AppActiveUser
    }
  },
  methods: {
    login () {
      this.$router.push('/pages/login').catch(() => { })
    },
    logout () {
      const axios = require('axios').default
      axios.defaults.withCredentials = true

      axios({
        method: 'post',
        url: 'url/user/logout',
      })
        .then((response) => {
          response
          this.usermsgdata = '未登录'
          location.reload()
          this.$vs.notify({ title: '退出登录', text: '下次再来哟~', color: 'primary', icon: 'favorite' })
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    usermsg () {
      const axios = require('axios').default
      axios.defaults.withCredentials = true

      axios({
        method: 'get',
        url: 'url/user/profile',
      })
        .then((response) => {
          // console.log(response.data.Status);
          if (response.data.Status == 0) {
            this.usermsgdata = '未登录'
            // this.$vs.notify({ title: '跳转登录', text: '下次再来哟~', color: 'primary', icon: 'favorite' })
            this.show_single = false
            this.$router.push('/pages/login').catch(() => { })
          }
          else {
            this.show_single = true
            this.usermsgdata = '你好，管理员'
            // this.usermsgdata = response.data.Result['username']
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created () {
    this.usermsg()
  }
}
</script>
