<template>
  <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
       id="page-login">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card no-radius>
        <div class="vx-row no-gutter">
          <div class="vx-col hidden lg:block lg:w-1/4">
          </div>
          <div class="vx-col hidden lg:block lg:w-1/2">
            <div class="centerx">
              <h2>注册</h2>
            </div>
          </div>
          <div class="vx-col hidden lg:block lg:w-1/4">
            <vx-tooltip text="返回登录"
                        position="right">
              <vs-button class="float-right"
                         color="primary"
                         type="border"
                         icon-pack="feather"
                         icon="icon-corner-down-left"
                         to="/pages/login"></vs-button>
            </vx-tooltip>
          </div>
        </div>

        <pages-register />
      </vx-card>
    </div>
  </div>
</template>

<script>
import Register from './components/Register_content'

export default {
  components: {
    'pages-register': Register,
  },
}
</script>

<style lang="scss">
#page-login {
  .social-login-buttons {
    .bg-facebook {
      background-color: #1551b1;
    }
    .bg-twitter {
      background-color: #00aaff;
    }
    .bg-google {
      background-color: #4285f4;
    }
    .bg-github {
      background-color: #333;
    }
  }
}
</style>

<style lang="scss">
.centerx {
  display: flex;
  align-items: center;
  justify-content: center;
}

.centery {
  display: flex;
  justify-content: center;
}
</style>