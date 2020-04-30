<template>
  <div class="">
    <div class="centerx hx">
      <vs-icon icon="block"
               size="250px"
               color="#dbdbdb"></vs-icon>
    </div>
    <div class="hy">
      <div class="centery mb-base">
        <h3>您未登录我们的账户，将不能使用此功能</h3>
      </div>
      <div class="centery mb-base">
        <vs-button size="large"
                   color="primary"
                   type="filled"
                   to="/pages/login">立即登陆</vs-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.centerx {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hx {
  height: 35vh;
}

.centery {
  display: flex;
  justify-content: center;
}

.hy {
  height: 15vh;
}
</style>