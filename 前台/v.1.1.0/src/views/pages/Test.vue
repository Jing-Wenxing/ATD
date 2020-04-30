<template>
  <vs-card>
    <div style="display: flex;">
      <div class="leftx">
        <iframe id="Frame1"
                src="http://test.harson.co/"
                class="hx"
                allowTransparency="true"></iframe>
      </div>

      <div class="rightx">
        <vx-card title="Card title"
                 no-radius
                 no-shadow>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </vx-card>
        <!-- <vs-button color="dark"
                   type="border"
                   icon="crop_free"
                   @click="openurl">打开内置网页</vs-button> -->
      </div>
    </div>
  </vs-card>
</template>

<script>
export default {
  methods: {
    openurl () {
      window.open("http://test.harson.co/", "_blank")
    },
  },
}
</script>


<style lang="scss">
.leftx {
  width: 75%;
}

.rightx {
  width: 25%;
}

.hx {
  width: 100%;
  height: 50vh;
  background-color: #fff;
}
</style>